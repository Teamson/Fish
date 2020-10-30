
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
        _this.twiceRemove = false;
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
        this.myDir = cc.v2(this.needle.right.x, this.needle.right.y);
        this.pointNode = this.node.getChildByName('pointNode');
        var lastPoint = this.pointNode.children[this.pointNode.childrenCount - 1];
        this.needleLength = Utility_1.default.getWorldDis(lastPoint, this.needle);
        this.middlePos = this.needle.getPosition().add(this.myDir.mul(this.needleLength / 2));
        this.needleStartPos = this.needle.getPosition();
        this.needle.width += 100;
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
                    if (this.twiceRemove && this.switchState == 2) {
                        this.node.active = false;
                    }
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
    __decorate([
        property
    ], Needle.prototype, "twiceRemove", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxOZWVkbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQXdDO0FBQ3hDLGdEQUEyQztBQUVyQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBRGhEO1FBQUEscUVBa0hDO1FBOUdHLGNBQVEsR0FBWSxLQUFLLENBQUE7UUFFekIsaUJBQVcsR0FBWSxLQUFLLENBQUE7UUFFNUIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixpQkFBVyxHQUFZLEtBQUssQ0FBQTtRQUU1QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBQ3RCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsZ0JBQVUsR0FBWSxLQUFLLENBQUE7UUFFM0IsaUJBQVcsR0FBVyxDQUFDLENBQUE7UUFDdkIsV0FBSyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzVCLGVBQVMsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNoQyxtQkFBYSxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLG9CQUFjLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFckMsVUFBSSxHQUFXLENBQUMsQ0FBQTtRQUNoQixrQkFBWSxHQUFXLENBQUMsQ0FBQTs7SUEwRjVCLENBQUM7SUF4RkcsdUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJ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QUUsRUFBRTtnQkFDaEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUE7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtnQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxJQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDOUQ7U0FDSjtJQUNMLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3BFO0lBQ0wsQ0FBQztJQTdHRDtRQURDLFFBQVE7NENBQ2dCO0lBRXpCO1FBREMsUUFBUTsrQ0FDbUI7SUFFNUI7UUFEQyxRQUFROzJDQUNjO0lBRXZCO1FBREMsUUFBUTsrQ0FDbUI7SUFUWCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBaUgxQjtJQUFELGFBQUM7Q0FqSEQsQUFpSEMsQ0FqSG1DLEVBQUUsQ0FBQyxTQUFTLEdBaUgvQztrQkFqSG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyRGF0YU1nciBmcm9tIFwiLi4vLi4vTGlicy9QbGF5ZXJEYXRhTWdyXCI7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuLi9MZXZlbC9MZXZlbEJhc2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZWVkbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbG9zdEhlYWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBvbmNlVHJpZ2dlcjogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGlzQXdha2U6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHR3aWNlUmVtb3ZlOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBuZWVkbGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBwb2ludE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgaXNUb3VjaGluZzogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgc3dpdGNoU3RhdGU6IG51bWJlciA9IDBcclxuICAgIG15RGlyOiBjYy5WZWMyID0gY2MudjIoMCwgMClcclxuICAgIG1pZGRsZVBvczogY2MuVmVjMiA9IGNjLnYyKDAsIDApXHJcbiAgICB0b3VjaFN0YXJ0UG9zOiBjYy5WZWMyID0gY2MudjIoMCwgMClcclxuICAgIG5lZWRsZVN0YXJ0UG9zOiBjYy5WZWMyID0gY2MudjIoMCwgMClcclxuXHJcbiAgICBteUlkOiBudW1iZXIgPSAwXHJcbiAgICBuZWVkbGVMZW5ndGg6IG51bWJlciA9IDBcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5teUlkID0gdGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLm5lZWRsZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnbmVlZGxlJylcclxuICAgICAgICB0aGlzLm15RGlyID0gY2MudjIodGhpcy5uZWVkbGUucmlnaHQueCwgdGhpcy5uZWVkbGUucmlnaHQueSlcclxuICAgICAgICB0aGlzLnBvaW50Tm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncG9pbnROb2RlJylcclxuICAgICAgICBsZXQgbGFzdFBvaW50ID0gdGhpcy5wb2ludE5vZGUuY2hpbGRyZW5bdGhpcy5wb2ludE5vZGUuY2hpbGRyZW5Db3VudCAtIDFdXHJcbiAgICAgICAgdGhpcy5uZWVkbGVMZW5ndGggPSBVdGlsaXR5LmdldFdvcmxkRGlzKGxhc3RQb2ludCwgdGhpcy5uZWVkbGUpXHJcbiAgICAgICAgdGhpcy5taWRkbGVQb3MgPSB0aGlzLm5lZWRsZS5nZXRQb3NpdGlvbigpLmFkZCh0aGlzLm15RGlyLm11bCh0aGlzLm5lZWRsZUxlbmd0aCAvIDIpKVxyXG4gICAgICAgIHRoaXMubmVlZGxlU3RhcnRQb3MgPSB0aGlzLm5lZWRsZS5nZXRQb3NpdGlvbigpXHJcblxyXG4gICAgICAgIHRoaXMubmVlZGxlLndpZHRoICs9IDEwMFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubmVlZGxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5uZWVkbGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5uZWVkbGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubmVlZGxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUb3VjaGluZyB8fCAhTGV2ZWxCYXNlLlNoYXJlLmNhblRvdWNoIHx8IHRoaXMubG9zdEhlYWQgfHwgIXRoaXMuaXNBd2FrZSkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5pc1RvdWNoaW5nID0gdHJ1ZVxyXG5cclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IHBvc1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghTGV2ZWxCYXNlLlNoYXJlLmNhblRvdWNoIHx8IHRoaXMubG9zdEhlYWQgfHwgIXRoaXMuaXNBd2FrZSkgcmV0dXJuXHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuXHJcbiAgICAgICAgbGV0IHRvdWNoRGlyID0gcG9zLnN1Yih0aGlzLnRvdWNoU3RhcnRQb3MpLm5vcm1hbGl6ZVNlbGYoKVxyXG4gICAgICAgIGxldCBhbmdsZSA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyh0b3VjaERpci5hbmdsZSh0aGlzLm15RGlyKSlcclxuICAgICAgICBsZXQgaXNSaWdodCA9IE1hdGguYWJzKGFuZ2xlKSA8PSA5MFxyXG5cclxuICAgICAgICBsZXQgZHQgPSBwb3Muc3ViKHRoaXMudG91Y2hTdGFydFBvcykubWFnKClcclxuICAgICAgICBkdCA9IGR0ID4gMzAgPyAzMCA6IGR0XHJcbiAgICAgICAgZHQgPSBpc1JpZ2h0ID8gZHQgOiAtZHRcclxuXHJcbiAgICAgICAgbGV0IGRlc1BvcyA9IHRoaXMubmVlZGxlLmdldFBvc2l0aW9uKCkuYWRkKHRoaXMubXlEaXIubXVsKGR0KSlcclxuICAgICAgICBpZiAoZGVzUG9zLnN1Yih0aGlzLm1pZGRsZVBvcykubWFnKCkgPCB0aGlzLm5lZWRsZUxlbmd0aCAvIDIpXHJcbiAgICAgICAgICAgIHRoaXMubmVlZGxlLnNldFBvc2l0aW9uKGRlc1BvcylcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0lzVHJpZ2dlcigpXHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0UG9zID0gcG9zXHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIUxldmVsQmFzZS5TaGFyZS5jYW5Ub3VjaCB8fCB0aGlzLmxvc3RIZWFkIHx8ICF0aGlzLmlzQXdha2UpIHJldHVyblxyXG4gICAgICAgIHRoaXMuaXNUb3VjaGluZyA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJc1RyaWdnZXIoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHAgPSB0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICBpZiAocC5hY3RpdmUgJiYgVXRpbGl0eS5nZXRXb3JsZERpcyhwLCB0aGlzLm5lZWRsZSkgPD0gNTApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uY2VUcmlnZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hTdGF0ZSA9IDJcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hTdGF0ZSA9IGkgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWVkbGUuc2V0UG9zaXRpb24ocC5nZXRQb3NpdGlvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnR3aWNlUmVtb3ZlICYmIHRoaXMuc3dpdGNoU3RhdGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludE5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoYykgPT4geyBjLmFjdGl2ZSA9IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIHAuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIExldmVsQmFzZS5TaGFyZS50cmlnZ2VyTmVlZGxlKHRoaXMubXlJZCwgaSlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3dpdGNoU3RhdGUgIT0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5uZWVkbGUuZ2V0UG9zaXRpb24oKS5zdWIodGhpcy5uZWVkbGVTdGFydFBvcykubWFnKCkgPD0gMjApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoU3RhdGUgPSAwXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5lZWRsZS5zZXRQb3NpdGlvbih0aGlzLm5lZWRsZVN0YXJ0UG9zKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludE5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoYykgPT4geyBjLmFjdGl2ZSA9IHRydWUgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuUmlnaWRCb2R5KSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5SaWdpZEJvZHkpLnN5bmNQb3NpdGlvbih0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=