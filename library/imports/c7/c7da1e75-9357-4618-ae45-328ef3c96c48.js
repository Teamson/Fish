"use strict";
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