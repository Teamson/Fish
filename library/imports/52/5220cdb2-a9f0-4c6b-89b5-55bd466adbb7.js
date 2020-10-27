"use strict";
cc._RF.push(module, '5220c2yqfBMa4m1Vb1Gatu3', 'Fan');
// Scripts/Crl/Prop/Fan.ts

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
var Fan = /** @class */ (function (_super) {
    __extends(Fan, _super);
    function Fan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.needle = null;
        _this.touchStartPos = cc.v2(0, 0);
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    Fan.prototype.start = function () {
        this.needle.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.needle.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.needle.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.needle.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    Fan.prototype.touchStart = function (event) {
        var pos = event.getLocation();
        this.touchStartPos = pos;
    };
    Fan.prototype.touchMove = function (event) {
        var pos = event.getLocation();
        //this.needle.getComponent(cc.RigidBody).applyAngularImpulse(pos.x < this.touchStartPos.x ? 50000 : -50000, true)
        var dtx = pos.x < this.touchStartPos.x ? 2 : -2;
        this.needle.angle += dtx;
        this.touchStartPos = pos;
    };
    Fan.prototype.touchEnd = function (event) {
    };
    __decorate([
        property(cc.Node)
    ], Fan.prototype, "needle", void 0);
    Fan = __decorate([
        ccclass
    ], Fan);
    return Fan;
}(cc.Component));
exports.default = Fan;

cc._RF.pop();