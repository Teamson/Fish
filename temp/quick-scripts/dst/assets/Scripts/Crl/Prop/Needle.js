
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxOZWVkbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQXdDO0FBQ3hDLGdEQUEyQztBQUVyQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBRGhEO1FBQUEscUVBZ0hDO1FBNUdHLGNBQVEsR0FBWSxLQUFLLENBQUE7UUFFekIsaUJBQVcsR0FBWSxLQUFLLENBQUE7UUFFNUIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixpQkFBVyxHQUFZLEtBQUssQ0FBQTtRQUU1QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBQ3RCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsZ0JBQVUsR0FBWSxLQUFLLENBQUE7UUFFM0IsaUJBQVcsR0FBVyxDQUFDLENBQUE7UUFDdkIsV0FBSyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzVCLGVBQVMsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNoQyxtQkFBYSxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLG9CQUFjLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFckMsVUFBSSxHQUFXLENBQUMsQ0FBQTtRQUNoQixrQkFBWSxHQUFXLENBQUMsQ0FBQTs7SUF3RjVCLENBQUM7SUF0RkcsdUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJ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QkFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO2dCQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLElBQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUM5RDtTQUNKO0lBQ0wsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDcEU7SUFDTCxDQUFDO0lBM0dEO1FBREMsUUFBUTs0Q0FDZ0I7SUFFekI7UUFEQyxRQUFROytDQUNtQjtJQUU1QjtRQURDLFFBQVE7MkNBQ2M7SUFFdkI7UUFEQyxRQUFROytDQUNtQjtJQVRYLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0ErRzFCO0lBQUQsYUFBQztDQS9HRCxBQStHQyxDQS9HbUMsRUFBRSxDQUFDLFNBQVMsR0ErRy9DO2tCQS9Hb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi8uLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uLy4uL01vZC9VdGlsaXR5XCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4uL0xldmVsL0xldmVsQmFzZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5lZWRsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBsb3N0SGVhZDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG9uY2VUcmlnZ2VyOiBib29sZWFuID0gZmFsc2VcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaXNBd2FrZTogYm9vbGVhbiA9IHRydWVcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdHdpY2VSZW1vdmU6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIG5lZWRsZTogY2MuTm9kZSA9IG51bGxcclxuICAgIHBvaW50Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBpc1RvdWNoaW5nOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBzd2l0Y2hTdGF0ZTogbnVtYmVyID0gMFxyXG4gICAgbXlEaXI6IGNjLlZlYzIgPSBjYy52MigwLCAwKVxyXG4gICAgbWlkZGxlUG9zOiBjYy5WZWMyID0gY2MudjIoMCwgMClcclxuICAgIHRvdWNoU3RhcnRQb3M6IGNjLlZlYzIgPSBjYy52MigwLCAwKVxyXG4gICAgbmVlZGxlU3RhcnRQb3M6IGNjLlZlYzIgPSBjYy52MigwLCAwKVxyXG5cclxuICAgIG15SWQ6IG51bWJlciA9IDBcclxuICAgIG5lZWRsZUxlbmd0aDogbnVtYmVyID0gMFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm15SWQgPSB0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMubmVlZGxlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCduZWVkbGUnKVxyXG4gICAgICAgIHRoaXMubXlEaXIgPSBjYy52Mih0aGlzLm5lZWRsZS5yaWdodC54LCB0aGlzLm5lZWRsZS5yaWdodC55KVxyXG4gICAgICAgIHRoaXMucG9pbnROb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdwb2ludE5vZGUnKVxyXG4gICAgICAgIGxldCBsYXN0UG9pbnQgPSB0aGlzLnBvaW50Tm9kZS5jaGlsZHJlblt0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbkNvdW50IC0gMV1cclxuICAgICAgICB0aGlzLm5lZWRsZUxlbmd0aCA9IFV0aWxpdHkuZ2V0V29ybGREaXMobGFzdFBvaW50LCB0aGlzLm5lZWRsZSlcclxuICAgICAgICB0aGlzLm1pZGRsZVBvcyA9IHRoaXMubmVlZGxlLmdldFBvc2l0aW9uKCkuYWRkKHRoaXMubXlEaXIubXVsKHRoaXMubmVlZGxlTGVuZ3RoIC8gMikpXHJcbiAgICAgICAgdGhpcy5uZWVkbGVTdGFydFBvcyA9IHRoaXMubmVlZGxlLmdldFBvc2l0aW9uKClcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5lZWRsZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKVxyXG4gICAgICAgIHRoaXMubmVlZGxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubmVlZGxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgICAgICB0aGlzLm5lZWRsZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVG91Y2hpbmcgfHwgIUxldmVsQmFzZS5TaGFyZS5jYW5Ub3VjaCB8fCB0aGlzLmxvc3RIZWFkIHx8ICF0aGlzLmlzQXdha2UpIHJldHVyblxyXG4gICAgICAgIHRoaXMuaXNUb3VjaGluZyA9IHRydWVcclxuXHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRQb3MgPSBwb3NcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIUxldmVsQmFzZS5TaGFyZS5jYW5Ub3VjaCB8fCB0aGlzLmxvc3RIZWFkIHx8ICF0aGlzLmlzQXdha2UpIHJldHVyblxyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcblxyXG4gICAgICAgIGxldCB0b3VjaERpciA9IHBvcy5zdWIodGhpcy50b3VjaFN0YXJ0UG9zKS5ub3JtYWxpemVTZWxmKClcclxuICAgICAgICBsZXQgYW5nbGUgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXModG91Y2hEaXIuYW5nbGUodGhpcy5teURpcikpXHJcbiAgICAgICAgbGV0IGlzUmlnaHQgPSBNYXRoLmFicyhhbmdsZSkgPD0gOTBcclxuXHJcbiAgICAgICAgbGV0IGR0ID0gcG9zLnN1Yih0aGlzLnRvdWNoU3RhcnRQb3MpLm1hZygpXHJcbiAgICAgICAgZHQgPSBkdCA+IDMwID8gMzAgOiBkdFxyXG4gICAgICAgIGR0ID0gaXNSaWdodCA/IGR0IDogLWR0XHJcblxyXG4gICAgICAgIGxldCBkZXNQb3MgPSB0aGlzLm5lZWRsZS5nZXRQb3NpdGlvbigpLmFkZCh0aGlzLm15RGlyLm11bChkdCkpXHJcbiAgICAgICAgaWYgKGRlc1Bvcy5zdWIodGhpcy5taWRkbGVQb3MpLm1hZygpIDwgdGhpcy5uZWVkbGVMZW5ndGggLyAyKVxyXG4gICAgICAgICAgICB0aGlzLm5lZWRsZS5zZXRQb3NpdGlvbihkZXNQb3MpXHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tJc1RyaWdnZXIoKVxyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IHBvc1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCFMZXZlbEJhc2UuU2hhcmUuY2FuVG91Y2ggfHwgdGhpcy5sb3N0SGVhZCB8fCAhdGhpcy5pc0F3YWtlKSByZXR1cm5cclxuICAgICAgICB0aGlzLmlzVG91Y2hpbmcgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSXNUcmlnZ2VyKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb2ludE5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwID0gdGhpcy5wb2ludE5vZGUuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgaWYgKHAuYWN0aXZlICYmIFV0aWxpdHkuZ2V0V29ybGREaXMocCwgdGhpcy5uZWVkbGUpIDw9IDUwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbmNlVHJpZ2dlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoU3RhdGUgPSAyXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoU3RhdGUgPSBpICsgMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmVlZGxlLnNldFBvc2l0aW9uKHAuZ2V0UG9zaXRpb24oKSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50d2ljZVJlbW92ZSAmJiB0aGlzLnN3aXRjaFN0YXRlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnROb2RlLmNoaWxkcmVuLmZvckVhY2goKGMpID0+IHsgYy5hY3RpdmUgPSB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICBwLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBMZXZlbEJhc2UuU2hhcmUudHJpZ2dlck5lZWRsZSh0aGlzLm15SWQsIGkpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN3aXRjaFN0YXRlICE9IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubmVlZGxlLmdldFBvc2l0aW9uKCkuc3ViKHRoaXMubmVlZGxlU3RhcnRQb3MpLm1hZygpIDw9IDIwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFN0YXRlID0gMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZWVkbGUuc2V0UG9zaXRpb24odGhpcy5uZWVkbGVTdGFydFBvcylcclxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnROb2RlLmNoaWxkcmVuLmZvckVhY2goKGMpID0+IHsgYy5hY3RpdmUgPSB0cnVlIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLlJpZ2lkQm9keSkpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuUmlnaWRCb2R5KS5zeW5jUG9zaXRpb24odHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19