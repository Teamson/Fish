
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/Needle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc428UI9wtJwYzz/r/7Ssrz', 'Needle');
// Scripts/Crl/Prop/Needle.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../../Mod/Utility");
var LevelBase_1 = require("../Level/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Needle = /** @class */ (function (_super) {
    __extends(Needle, _super);
    function Needle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lostHead = false;
        _this.onceTrigger = false;
        _this.isAwake = true;
        _this.needle = null;
        _this.pointNode = null;
        _this.isTouching = false;
        _this.switchState = 0;
        _this.myDir = cc.v2(0, 0);
        _this.middlePos = cc.v2(0, 0);
        _this.touchStartPos = cc.v2(0, 0);
        _this.needleStartPos = cc.v2(0, 0);
        _this.myId = 0;
        _this.needleLength = 0;
        return _this;
    }
    Needle.prototype.onLoad = function () {
        this.myId = this.node.parent.children.indexOf(this.node);
        this.needle = this.node.getChildByName('needle');
        this.needleLength = this.needle.width;
        this.myDir = cc.v2(this.needle.right.x, this.needle.right.y);
        this.pointNode = this.node.getChildByName('pointNode');
        this.middlePos = this.needle.getPosition().add(this.myDir.mul(this.needleLength / 2));
        this.needleStartPos = this.needle.getPosition();
    };
    Needle.prototype.start = function () {
        this.needle.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.needle.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.needle.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.needle.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    Needle.prototype.touchStart = function (event) {
        if (this.isTouching || !LevelBase_1.default.Share.canTouch || this.lostHead || !this.isAwake)
            return;
        this.isTouching = true;
        var pos = event.getLocation();
        this.touchStartPos = pos;
    };
    Needle.prototype.touchMove = function (event) {
        if (!LevelBase_1.default.Share.canTouch || this.lostHead || !this.isAwake)
            return;
        var pos = event.getLocation();
        var touchDir = pos.sub(this.touchStartPos).normalizeSelf();
        var angle = cc.misc.radiansToDegrees(touchDir.angle(this.myDir));
        var isRight = Math.abs(angle) <= 90;
        var dt = pos.sub(this.touchStartPos).mag();
        dt = dt > 30 ? 30 : dt;
        dt = isRight ? dt : -dt;
        var desPos = this.needle.getPosition().add(this.myDir.mul(dt));
        if (desPos.sub(this.middlePos).mag() < this.needleLength / 2)
            this.needle.setPosition(desPos);
        this.checkIsTrigger();
        this.touchStartPos = pos;
    };
    Needle.prototype.touchEnd = function (event) {
        if (!LevelBase_1.default.Share.canTouch || this.lostHead || !this.isAwake)
            return;
        this.isTouching = false;
    };
    Needle.prototype.checkIsTrigger = function () {
        for (var i = 0; i < this.pointNode.childrenCount; i++) {
            var p = this.pointNode.children[i];
            if (p.active && Utility_1.default.getWorldDis(p, this.needle) <= 50) {
                if (this.onceTrigger) {
                    this.node.active = false;
                    this.switchState = 2;
                }
                else {
                    this.switchState = i + 1;
                    this.needle.setPosition(p.getPosition());
                }
                this.pointNode.children.forEach(function (c) { c.active = true; });
                p.active = false;
                LevelBase_1.default.Share.triggerNeedle(this.myId, i);
                break;
            }
        }
        if (this.switchState != 0) {
            if (this.needle.getPosition().sub(this.needleStartPos).mag() <= 20) {
                this.switchState = 0;
                this.needle.setPosition(this.needleStartPos);
                this.pointNode.children.forEach(function (c) { c.active = true; });
            }
        }
    };
    Needle.prototype.update = function (dt) {
        if (this.node.getComponentInChildren(cc.RigidBody)) {
            this.node.getComponentInChildren(cc.RigidBody).syncPosition(true);
        }
    };
    __decorate([
        property
    ], Needle.prototype, "lostHead", void 0);
    __decorate([
        property
    ], Needle.prototype, "onceTrigger", void 0);
    __decorate([
        property
    ], Needle.prototype, "isAwake", void 0);
    Needle = __decorate([
        ccclass
    ], Needle);
    return Needle;
}(cc.Component));
exports.default = Needle;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxOZWVkbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQXdDO0FBQ3hDLGdEQUEyQztBQUVyQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBRGhEO1FBQUEscUVBMEdDO1FBdEdHLGNBQVEsR0FBWSxLQUFLLENBQUE7UUFFekIsaUJBQVcsR0FBWSxLQUFLLENBQUE7UUFFNUIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBQ3RCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsZ0JBQVUsR0FBWSxLQUFLLENBQUE7UUFFM0IsaUJBQVcsR0FBVyxDQUFDLENBQUE7UUFDdkIsV0FBSyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzVCLGVBQVMsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNoQyxtQkFBYSxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLG9CQUFjLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFckMsVUFBSSxHQUFXLENBQUMsQ0FBQTtRQUNoQixrQkFBWSxHQUFXLENBQUMsQ0FBQTs7SUFvRjVCLENBQUM7SUFsRkcsdUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDNUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNyRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDbkQsQ0FBQztJQUVELHNCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNwRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNoRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FB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QUUsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDcEU7SUFDTCxDQUFDO0lBckdEO1FBREMsUUFBUTs0Q0FDZ0I7SUFFekI7UUFEQyxRQUFROytDQUNtQjtJQUU1QjtRQURDLFFBQVE7MkNBQ2M7SUFQTixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBeUcxQjtJQUFELGFBQUM7Q0F6R0QsQUF5R0MsQ0F6R21DLEVBQUUsQ0FBQyxTQUFTLEdBeUcvQztrQkF6R29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyRGF0YU1nciBmcm9tIFwiLi4vLi4vTGlicy9QbGF5ZXJEYXRhTWdyXCI7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuLi9MZXZlbC9MZXZlbEJhc2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZWVkbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbG9zdEhlYWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBvbmNlVHJpZ2dlcjogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGlzQXdha2U6IGJvb2xlYW4gPSB0cnVlXHJcblxyXG4gICAgbmVlZGxlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgcG9pbnROb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIGlzVG91Y2hpbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIHN3aXRjaFN0YXRlOiBudW1iZXIgPSAwXHJcbiAgICBteURpcjogY2MuVmVjMiA9IGNjLnYyKDAsIDApXHJcbiAgICBtaWRkbGVQb3M6IGNjLlZlYzIgPSBjYy52MigwLCAwKVxyXG4gICAgdG91Y2hTdGFydFBvczogY2MuVmVjMiA9IGNjLnYyKDAsIDApXHJcbiAgICBuZWVkbGVTdGFydFBvczogY2MuVmVjMiA9IGNjLnYyKDAsIDApXHJcblxyXG4gICAgbXlJZDogbnVtYmVyID0gMFxyXG4gICAgbmVlZGxlTGVuZ3RoOiBudW1iZXIgPSAwXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubXlJZCA9IHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5uZWVkbGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25lZWRsZScpXHJcbiAgICAgICAgdGhpcy5uZWVkbGVMZW5ndGggPSB0aGlzLm5lZWRsZS53aWR0aFxyXG4gICAgICAgIHRoaXMubXlEaXIgPSBjYy52Mih0aGlzLm5lZWRsZS5yaWdodC54LCB0aGlzLm5lZWRsZS5yaWdodC55KVxyXG4gICAgICAgIHRoaXMucG9pbnROb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdwb2ludE5vZGUnKVxyXG4gICAgICAgIHRoaXMubWlkZGxlUG9zID0gdGhpcy5uZWVkbGUuZ2V0UG9zaXRpb24oKS5hZGQodGhpcy5teURpci5tdWwodGhpcy5uZWVkbGVMZW5ndGggLyAyKSlcclxuICAgICAgICB0aGlzLm5lZWRsZVN0YXJ0UG9zID0gdGhpcy5uZWVkbGUuZ2V0UG9zaXRpb24oKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubmVlZGxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5uZWVkbGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5uZWVkbGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubmVlZGxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUb3VjaGluZyB8fCAhTGV2ZWxCYXNlLlNoYXJlLmNhblRvdWNoIHx8IHRoaXMubG9zdEhlYWQgfHwgIXRoaXMuaXNBd2FrZSkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5pc1RvdWNoaW5nID0gdHJ1ZVxyXG5cclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IHBvc1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghTGV2ZWxCYXNlLlNoYXJlLmNhblRvdWNoIHx8IHRoaXMubG9zdEhlYWQgfHwgIXRoaXMuaXNBd2FrZSkgcmV0dXJuXHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuXHJcbiAgICAgICAgbGV0IHRvdWNoRGlyID0gcG9zLnN1Yih0aGlzLnRvdWNoU3RhcnRQb3MpLm5vcm1hbGl6ZVNlbGYoKVxyXG4gICAgICAgIGxldCBhbmdsZSA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyh0b3VjaERpci5hbmdsZSh0aGlzLm15RGlyKSlcclxuICAgICAgICBsZXQgaXNSaWdodCA9IE1hdGguYWJzKGFuZ2xlKSA8PSA5MFxyXG5cclxuICAgICAgICBsZXQgZHQgPSBwb3Muc3ViKHRoaXMudG91Y2hTdGFydFBvcykubWFnKClcclxuICAgICAgICBkdCA9IGR0ID4gMzAgPyAzMCA6IGR0XHJcbiAgICAgICAgZHQgPSBpc1JpZ2h0ID8gZHQgOiAtZHRcclxuXHJcbiAgICAgICAgbGV0IGRlc1BvcyA9IHRoaXMubmVlZGxlLmdldFBvc2l0aW9uKCkuYWRkKHRoaXMubXlEaXIubXVsKGR0KSlcclxuICAgICAgICBpZiAoZGVzUG9zLnN1Yih0aGlzLm1pZGRsZVBvcykubWFnKCkgPCB0aGlzLm5lZWRsZUxlbmd0aCAvIDIpXHJcbiAgICAgICAgICAgIHRoaXMubmVlZGxlLnNldFBvc2l0aW9uKGRlc1BvcylcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0lzVHJpZ2dlcigpXHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0UG9zID0gcG9zXHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIUxldmVsQmFzZS5TaGFyZS5jYW5Ub3VjaCB8fCB0aGlzLmxvc3RIZWFkIHx8ICF0aGlzLmlzQXdha2UpIHJldHVyblxyXG4gICAgICAgIHRoaXMuaXNUb3VjaGluZyA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJc1RyaWdnZXIoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHAgPSB0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICBpZiAocC5hY3RpdmUgJiYgVXRpbGl0eS5nZXRXb3JsZERpcyhwLCB0aGlzLm5lZWRsZSkgPD0gNTApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uY2VUcmlnZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hTdGF0ZSA9IDJcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hTdGF0ZSA9IGkgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWVkbGUuc2V0UG9zaXRpb24ocC5nZXRQb3NpdGlvbigpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnROb2RlLmNoaWxkcmVuLmZvckVhY2goKGMpID0+IHsgYy5hY3RpdmUgPSB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICBwLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBMZXZlbEJhc2UuU2hhcmUudHJpZ2dlck5lZWRsZSh0aGlzLm15SWQsIGkpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN3aXRjaFN0YXRlICE9IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubmVlZGxlLmdldFBvc2l0aW9uKCkuc3ViKHRoaXMubmVlZGxlU3RhcnRQb3MpLm1hZygpIDw9IDIwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFN0YXRlID0gMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZWVkbGUuc2V0UG9zaXRpb24odGhpcy5uZWVkbGVTdGFydFBvcylcclxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnROb2RlLmNoaWxkcmVuLmZvckVhY2goKGMpID0+IHsgYy5hY3RpdmUgPSB0cnVlIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLlJpZ2lkQm9keSkpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuUmlnaWRCb2R5KS5zeW5jUG9zaXRpb24odHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19