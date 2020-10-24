
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/HeadNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0473N+vbFH0JHD6gLQmtb5', 'HeadNode');
// Scripts/Crl/Prop/HeadNode.ts

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
var HeadNode = /** @class */ (function (_super) {
    __extends(HeadNode, _super);
    function HeadNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.num = null;
        _this.count = 1;
        return _this;
    }
    HeadNode.prototype.onLoad = function () { };
    HeadNode.prototype.start = function () {
        this.icon.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.icon.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.icon.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.icon.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    HeadNode.prototype.touchStart = function (event) {
    };
    HeadNode.prototype.touchMove = function (event) {
        if (this.count <= 0)
            return;
        var pos = event.getLocation();
        pos = this.node.convertToNodeSpaceAR(pos);
        this.icon.setPosition(pos);
    };
    HeadNode.prototype.touchEnd = function (event) {
        if (this.count <= 0)
            return;
        for (var i = 0; i < LevelBase_1.default.Share.NeedleNode.childrenCount; i++) {
            var n = LevelBase_1.default.Share.NeedleNode.children[i];
            var head = n.getChildByName('needle').getChildByName('yxz_dj1_2');
            if (head.active == false && Utility_1.default.getWorldDis(head, this.icon) <= 50) {
                head.active = true;
                this.count--;
                LevelBase_1.default.Share.getNeedleCrlById(i).lostHead = false;
                break;
            }
        }
        this.icon.setPosition(cc.v2(0, 10));
    };
    HeadNode.prototype.update = function (dt) {
        this.num.string = this.count.toString();
    };
    __decorate([
        property(cc.Node)
    ], HeadNode.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], HeadNode.prototype, "num", void 0);
    __decorate([
        property
    ], HeadNode.prototype, "count", void 0);
    HeadNode = __decorate([
        ccclass
    ], HeadNode);
    return HeadNode;
}(cc.Component));
exports.default = HeadNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxIZWFkTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsZ0RBQTJDO0FBRXJDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUFpREM7UUE3Q0csVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixTQUFHLEdBQWEsSUFBSSxDQUFBO1FBR3BCLFdBQUssR0FBVyxDQUFDLENBQUE7O0lBdUNyQixDQUFDO0lBckNHLHlCQUFNLEdBQU4sY0FBVyxDQUFDO0lBRVosd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFFRCw2QkFBVSxHQUFWLFVBQVcsS0FBMEI7SUFFckMsQ0FBQztJQUNELDRCQUFTLEdBQVQsVUFBVSxLQUEwQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQztZQUFFLE9BQU07UUFDM0IsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzdCLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFDRCwyQkFBUSxHQUFSLFVBQVMsS0FBMEI7UUFDL0IsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUM7WUFBRSxPQUFNO1FBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9ELElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDOUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDakUsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssSUFBSSxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDcEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDWixtQkFBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO2dCQUNwRCxNQUFLO2FBQ1I7U0FDSjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUdELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUMzQyxDQUFDO0lBNUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0U7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5Q0FDQztJQUdwQjtRQURDLFFBQVE7MkNBQ1E7SUFUQSxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0Q1QjtJQUFELGVBQUM7Q0FoREQsQUFnREMsQ0FoRHFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0RqRDtrQkFoRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vLi4vTW9kL1V0aWxpdHlcIjtcclxuaW1wb3J0IExldmVsQmFzZSBmcm9tIFwiLi4vTGV2ZWwvTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZE5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaWNvbjogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBudW06IGNjLkxhYmVsID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgY291bnQ6IG51bWJlciA9IDFcclxuXHJcbiAgICBvbkxvYWQoKSB7IH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmljb24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcylcclxuICAgICAgICB0aGlzLmljb24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5pY29uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgICAgICB0aGlzLmljb24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuXHJcbiAgICB9XHJcbiAgICB0b3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudCA8PSAwKSByZXR1cm5cclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgdGhpcy5pY29uLnNldFBvc2l0aW9uKHBvcylcclxuICAgIH1cclxuICAgIHRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnQgPD0gMCkgcmV0dXJuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBMZXZlbEJhc2UuU2hhcmUuTmVlZGxlTm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG4gPSBMZXZlbEJhc2UuU2hhcmUuTmVlZGxlTm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICBsZXQgaGVhZCA9IG4uZ2V0Q2hpbGRCeU5hbWUoJ25lZWRsZScpLmdldENoaWxkQnlOYW1lKCd5eHpfZGoxXzInKVxyXG4gICAgICAgICAgICBpZiAoaGVhZC5hY3RpdmUgPT0gZmFsc2UgJiYgVXRpbGl0eS5nZXRXb3JsZERpcyhoZWFkLCB0aGlzLmljb24pIDw9IDUwKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnQtLVxyXG4gICAgICAgICAgICAgICAgTGV2ZWxCYXNlLlNoYXJlLmdldE5lZWRsZUNybEJ5SWQoaSkubG9zdEhlYWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmljb24uc2V0UG9zaXRpb24oY2MudjIoMCwgMTApKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLm51bS5zdHJpbmcgPSB0aGlzLmNvdW50LnRvU3RyaW5nKClcclxuICAgIH1cclxufVxyXG4iXX0=