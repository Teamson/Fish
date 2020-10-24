"use strict";
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