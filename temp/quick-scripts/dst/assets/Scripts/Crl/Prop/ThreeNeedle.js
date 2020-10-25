
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/ThreeNeedle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7da151k1dGGK5FMo7zyWxI', 'ThreeNeedle');
// Scripts/Crl/Prop/ThreeNeedle.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ThreeNeedle = /** @class */ (function (_super) {
    __extends(ThreeNeedle, _super);
    function ThreeNeedle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topY = 0;
        _this.bottomY = 0;
        _this.validTouch = false;
        _this.touchStartPos = cc.v2(0, 0);
        _this.isClosed = true;
        _this.closeCB = null;
        _this.openCB = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    ThreeNeedle.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    ThreeNeedle.prototype.touchStart = function (event) {
        var pos = event.getLocation();
        this.touchStartPos = pos;
        pos = this.node.convertToNodeSpaceAR(pos);
        this.validTouch = cc.Intersection.pointInPolygon(pos, this.getComponent(cc.PolygonCollider).points);
    };
    ThreeNeedle.prototype.touchMove = function (event) {
        if (!this.validTouch)
            return;
        var pos = event.getLocation();
        var dty = pos.y - this.touchStartPos.y;
        if (dty > 30)
            dty = 30;
        this.node.y += dty;
        if (this.node.y < this.bottomY) {
            this.node.y = this.bottomY;
            !this.isClosed && this.closeCB && this.closeCB();
            this.validTouch = false;
            this.isClosed = true;
        }
        if (this.node.y > this.topY) {
            this.node.y = this.topY;
            this.isClosed && this.openCB && this.openCB();
            this.validTouch = false;
            this.isClosed = false;
        }
        this.touchStartPos = pos;
    };
    ThreeNeedle.prototype.touchEnd = function (event) {
        if (!this.validTouch)
            return;
        this.validTouch = false;
    };
    __decorate([
        property
    ], ThreeNeedle.prototype, "topY", void 0);
    __decorate([
        property
    ], ThreeNeedle.prototype, "bottomY", void 0);
    ThreeNeedle = __decorate([
        ccclass
    ], ThreeNeedle);
    return ThreeNeedle;
}(cc.Component));
exports.default = ThreeNeedle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxUaHJlZU5lZWRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBRHJEO1FBQUEscUVBNkRDO1FBekRHLFVBQUksR0FBVSxDQUFDLENBQUE7UUFFZixhQUFPLEdBQVUsQ0FBQyxDQUFBO1FBRWxCLGdCQUFVLEdBQVksS0FBSyxDQUFBO1FBRTNCLG1CQUFhLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFcEMsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUN4QixhQUFPLEdBQWEsSUFBSSxDQUFBO1FBQ3hCLFlBQU0sR0FBYSxJQUFJLENBQUE7O1FBOEN2QixpQkFBaUI7SUFDckIsQ0FBQztJQTdDRyxlQUFlO0lBRWYsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsS0FBMEI7UUFDakMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFBO1FBQ3hCLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3ZHLENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsS0FBMEI7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTTtRQUM1QixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUE7UUFFN0IsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxJQUFJLEdBQUcsR0FBRyxFQUFFO1lBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUE7UUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7WUFDMUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1NBQ3ZCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDdkIsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtTQUN4QjtRQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFBO0lBQzVCLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsS0FBMEI7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTTtRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtJQUMzQixDQUFDO0lBdEREO1FBREMsUUFBUTs2Q0FDTTtJQUVmO1FBREMsUUFBUTtnREFDUztJQUxELFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E0RC9CO0lBQUQsa0JBQUM7Q0E1REQsQUE0REMsQ0E1RHdDLEVBQUUsQ0FBQyxTQUFTLEdBNERwRDtrQkE1RG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRocmVlTmVlZGxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRvcFk6bnVtYmVyID0gMFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBib3R0b21ZOm51bWJlciA9IDBcclxuXHJcbiAgICB2YWxpZFRvdWNoOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICB0b3VjaFN0YXJ0UG9zOiBjYy5WZWMyID0gY2MudjIoMCwgMClcclxuXHJcbiAgICBpc0Nsb3NlZDogYm9vbGVhbiA9IHRydWVcclxuICAgIGNsb3NlQ0I6IEZ1bmN0aW9uID0gbnVsbFxyXG4gICAgb3BlbkNCOiBGdW5jdGlvbiA9IG51bGxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcylcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IHBvc1xyXG4gICAgICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgdGhpcy52YWxpZFRvdWNoID0gY2MuSW50ZXJzZWN0aW9uLnBvaW50SW5Qb2x5Z29uKHBvcywgdGhpcy5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKS5wb2ludHMpXHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkVG91Y2gpIHJldHVyblxyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcblxyXG4gICAgICAgIGxldCBkdHkgPSBwb3MueSAtIHRoaXMudG91Y2hTdGFydFBvcy55XHJcbiAgICAgICAgaWYgKGR0eSA+IDMwKSBkdHkgPSAzMFxyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IGR0eVxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueSA8IHRoaXMuYm90dG9tWSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMuYm90dG9tWVxyXG4gICAgICAgICAgICAhdGhpcy5pc0Nsb3NlZCAmJiB0aGlzLmNsb3NlQ0IgJiYgdGhpcy5jbG9zZUNCKClcclxuICAgICAgICAgICAgdGhpcy52YWxpZFRvdWNoID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc0Nsb3NlZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS55ID4gdGhpcy50b3BZKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy50b3BZXHJcbiAgICAgICAgICAgIHRoaXMuaXNDbG9zZWQgJiYgdGhpcy5vcGVuQ0IgJiYgdGhpcy5vcGVuQ0IoKVxyXG4gICAgICAgICAgICB0aGlzLnZhbGlkVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzQ2xvc2VkID0gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IHBvc1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkVG91Y2gpIHJldHVyblxyXG4gICAgICAgIHRoaXMudmFsaWRUb3VjaCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=