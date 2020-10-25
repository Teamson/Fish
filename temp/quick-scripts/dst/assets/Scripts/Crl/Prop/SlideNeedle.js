
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/SlideNeedle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '212abZTd0dDl6qZeddjUuSu', 'SlideNeedle');
// Scripts/Crl/Prop/SlideNeedle.ts

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
var SlideNeedle = /** @class */ (function (_super) {
    __extends(SlideNeedle, _super);
    function SlideNeedle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topY = 0;
        _this.bottomY = 0;
        _this.validTouch = true;
        _this.moveCB = null;
        _this.touchStartPos = cc.v2(0, 0);
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    SlideNeedle.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    SlideNeedle.prototype.touchStart = function (event) {
        if (!this.validTouch)
            return;
        var pos = event.getLocation();
        this.touchStartPos = pos;
    };
    SlideNeedle.prototype.touchMove = function (event) {
        if (!this.validTouch)
            return;
        var pos = event.getLocation();
        var dty = pos.y - this.touchStartPos.y;
        if (dty > 30)
            dty = 30;
        this.node.y += dty;
        if (this.node.y < this.bottomY) {
            this.node.y = this.bottomY;
            return;
        }
        if (this.node.y > this.topY) {
            this.node.y = this.topY;
            return;
        }
        this.moveCB && this.moveCB();
        this.touchStartPos = pos;
    };
    SlideNeedle.prototype.touchEnd = function (event) {
        if (!this.validTouch)
            return;
    };
    __decorate([
        property
    ], SlideNeedle.prototype, "topY", void 0);
    __decorate([
        property
    ], SlideNeedle.prototype, "bottomY", void 0);
    SlideNeedle = __decorate([
        ccclass
    ], SlideNeedle);
    return SlideNeedle;
}(cc.Component));
exports.default = SlideNeedle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxTbGlkZU5lZWRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBRHJEO1FBQUEscUVBbURDO1FBaERHLFVBQUksR0FBVSxDQUFDLENBQUE7UUFFZixhQUFPLEdBQVUsQ0FBQyxDQUFBO1FBRWxCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBQzFCLFlBQU0sR0FBYSxJQUFJLENBQUE7UUFDdkIsbUJBQWEsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTs7UUF5Q3BDLGlCQUFpQjtJQUNyQixDQUFDO0lBeENHLGVBQWU7SUFFZiwyQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDckUsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxLQUEwQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFNO1FBQzVCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQTtJQUM1QixDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLEtBQTBCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU07UUFFNUIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzdCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7UUFDdEMsSUFBSSxHQUFHLEdBQUcsRUFBRTtZQUFFLEdBQUcsR0FBRyxFQUFFLENBQUE7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFBO1FBQ2xCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFBO1lBQzFCLE9BQU07U0FDVDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1lBQ3ZCLE9BQU07U0FDVDtRQUVELElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFBO0lBQzVCLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsS0FBMEI7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTTtJQUNoQyxDQUFDO0lBN0NEO1FBREMsUUFBUTs2Q0FDTTtJQUVmO1FBREMsUUFBUTtnREFDUztJQUpELFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FrRC9CO0lBQUQsa0JBQUM7Q0FsREQsQUFrREMsQ0FsRHdDLEVBQUUsQ0FBQyxTQUFTLEdBa0RwRDtrQkFsRG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlTmVlZGxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdG9wWTpudW1iZXIgPSAwXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGJvdHRvbVk6bnVtYmVyID0gMFxyXG5cclxuICAgIHZhbGlkVG91Y2g6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICBtb3ZlQ0I6IEZ1bmN0aW9uID0gbnVsbFxyXG4gICAgdG91Y2hTdGFydFBvczogY2MuVmVjMiA9IGNjLnYyKDAsIDApXHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkVG91Y2gpIHJldHVyblxyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0UG9zID0gcG9zXHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkVG91Y2gpIHJldHVyblxyXG5cclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIGxldCBkdHkgPSBwb3MueSAtIHRoaXMudG91Y2hTdGFydFBvcy55XHJcbiAgICAgICAgaWYgKGR0eSA+IDMwKSBkdHkgPSAzMFxyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IGR0eVxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueSA8IHRoaXMuYm90dG9tWSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMuYm90dG9tWVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS55ID4gdGhpcy50b3BZKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy50b3BZXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlQ0IgJiYgdGhpcy5tb3ZlQ0IoKVxyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IHBvc1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkVG91Y2gpIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19