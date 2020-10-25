"use strict";
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
        _this.isBottom = true;
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
            this.isBottom = true;
            this.moveCB && this.moveCB(0);
            return;
        }
        if (this.node.y > this.topY) {
            this.node.y = this.topY;
            this.isBottom = false;
            this.moveCB && this.moveCB(0);
            return;
        }
        this.moveCB && this.moveCB(dty);
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