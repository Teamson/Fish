
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/AutoScroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a75d1uQdLhKfJU99KUbdLWv', 'AutoScroll');
// ExportLibs/AutoScroll.ts

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
var AutoScroll = /** @class */ (function (_super) {
    __extends(AutoScroll, _super);
    function AutoScroll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollSpeed = 2;
        _this.isVertical = true;
        _this.scroll = null;
        _this.isReady = false;
        _this.isDown = true;
        return _this;
    }
    AutoScroll.prototype.onLoad = function () {
        this.scroll = this.node.getComponent(cc.ScrollView);
    };
    AutoScroll.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () { _this.isReady = true; }, 1);
    };
    AutoScroll.prototype.onEnable = function () {
        var _this = this;
        this.scheduleOnce(function () { _this.isReady = true; }, 1);
    };
    AutoScroll.prototype.onDisable = function () {
        this.isReady = false;
    };
    AutoScroll.prototype.update = function (dt) {
        var _this = this;
        if (!this.isReady || this.scroll.isScrolling())
            return;
        var curV = this.isVertical ? this.scroll.getScrollOffset().y : -this.scroll.getScrollOffset().x;
        var maxV = this.isVertical ? this.scroll.getMaxScrollOffset().y : this.scroll.getMaxScrollOffset().x;
        if (this.isDown) {
            if (curV < maxV) {
                curV += 2;
                if (this.isVertical) {
                    this.scroll.scrollToOffset(cc.v2(0, curV));
                }
                else {
                    this.scroll.scrollToOffset(cc.v2(curV, 0));
                }
            }
            else {
                this.isDown = false;
                this.isReady = false;
                this.scheduleOnce(function () { _this.isReady = true; }, 1);
            }
        }
        else {
            if (curV > 0) {
                curV -= 2;
                if (this.isVertical) {
                    this.scroll.scrollToOffset(cc.v2(0, curV));
                }
                else {
                    this.scroll.scrollToOffset(cc.v2(curV, 0));
                }
            }
            else {
                this.isDown = true;
                this.isReady = false;
                this.scheduleOnce(function () { _this.isReady = true; }, 1);
            }
        }
    };
    __decorate([
        property
    ], AutoScroll.prototype, "scrollSpeed", void 0);
    __decorate([
        property
    ], AutoScroll.prototype, "isVertical", void 0);
    AutoScroll = __decorate([
        ccclass
    ], AutoScroll);
    return AutoScroll;
}(cc.Component));
exports.default = AutoScroll;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcQXV0b1Njcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBRHBEO1FBQUEscUVBK0RDO1FBM0RHLGlCQUFXLEdBQVcsQ0FBQyxDQUFBO1FBRXZCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLFlBQU0sR0FBa0IsSUFBSSxDQUFBO1FBRTVCLGFBQU8sR0FBWSxLQUFLLENBQUE7UUFDeEIsWUFBTSxHQUFZLElBQUksQ0FBQTs7SUFvRDFCLENBQUM7SUFsREcsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3ZELENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDdkQsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFBQSxpQkFFQztRQURHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBUSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN2RCxDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO0lBQ3hCLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUFULGlCQWdDQztRQS9CRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUFFLE9BQU07UUFFdEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDL0YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNwRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLElBQUksR0FBRyxJQUFJLEVBQUU7Z0JBQ2IsSUFBSSxJQUFJLENBQUMsQ0FBQTtnQkFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7aUJBQzdDO3FCQUFNO29CQUNILElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQzdDO2FBQ0o7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7Z0JBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO2dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7YUFDdEQ7U0FDSjthQUFNO1lBQ0gsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNWLElBQUksSUFBSSxDQUFDLENBQUE7Z0JBQ1QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFBO2lCQUM3QztxQkFBTTtvQkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO2lCQUM3QzthQUNKO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtnQkFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFRLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQ3REO1NBQ0o7SUFDTCxDQUFDO0lBekREO1FBREMsUUFBUTttREFDYztJQUV2QjtRQURDLFFBQVE7a0RBQ2lCO0lBTFQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQThEOUI7SUFBRCxpQkFBQztDQTlERCxBQThEQyxDQTlEdUMsRUFBRSxDQUFDLFNBQVMsR0E4RG5EO2tCQTlEb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b1Njcm9sbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzY3JvbGxTcGVlZDogbnVtYmVyID0gMlxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc1ZlcnRpY2FsOiBib29sZWFuID0gdHJ1ZVxyXG5cclxuICAgIHNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGxcclxuXHJcbiAgICBpc1JlYWR5OiBib29sZWFuID0gZmFsc2VcclxuICAgIGlzRG93bjogYm9vbGVhbiA9IHRydWVcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLmlzUmVhZHkgPSB0cnVlIH0sIDEpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLmlzUmVhZHkgPSB0cnVlIH0sIDEpXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhZHkgfHwgdGhpcy5zY3JvbGwuaXNTY3JvbGxpbmcoKSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGxldCBjdXJWID0gdGhpcy5pc1ZlcnRpY2FsID8gdGhpcy5zY3JvbGwuZ2V0U2Nyb2xsT2Zmc2V0KCkueSA6IC10aGlzLnNjcm9sbC5nZXRTY3JvbGxPZmZzZXQoKS54XHJcbiAgICAgICAgbGV0IG1heFYgPSB0aGlzLmlzVmVydGljYWwgPyB0aGlzLnNjcm9sbC5nZXRNYXhTY3JvbGxPZmZzZXQoKS55IDogdGhpcy5zY3JvbGwuZ2V0TWF4U2Nyb2xsT2Zmc2V0KCkueFxyXG4gICAgICAgIGlmICh0aGlzLmlzRG93bikge1xyXG4gICAgICAgICAgICBpZiAoY3VyViA8IG1heFYpIHtcclxuICAgICAgICAgICAgICAgIGN1clYgKz0gMlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnNjcm9sbFRvT2Zmc2V0KGNjLnYyKDAsIGN1clYpKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUb09mZnNldChjYy52MihjdXJWLCAwKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuaXNSZWFkeSA9IHRydWUgfSwgMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJWID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY3VyViAtPSAyXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwuc2Nyb2xsVG9PZmZzZXQoY2MudjIoMCwgY3VyVikpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnNjcm9sbFRvT2Zmc2V0KGNjLnYyKGN1clYsIDApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLmlzUmVhZHkgPSB0cnVlIH0sIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==