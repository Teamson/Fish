"use strict";
cc._RF.push(module, '6d16d5Wq9ZDgquKSde2W/8b', 'GuideFinger');
// Scripts/Crl/GuideFinger.ts

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
var GuideFinger = /** @class */ (function (_super) {
    __extends(GuideFinger, _super);
    function GuideFinger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startPosArr = [];
        _this.endPosArr = [];
        _this.step = 0;
        return _this;
    }
    GuideFinger.prototype.onLoad = function () { };
    GuideFinger.prototype.start = function () {
    };
    GuideFinger.prototype.stepAction = function () {
        var _this = this;
        var sp = this.startPosArr[this.step];
        var ep = this.endPosArr[this.step];
        this.node.stopAllActions();
        var a1 = cc.callFunc(function () { _this.node.setPosition(sp); });
        var a2 = cc.moveTo(1.5, ep);
        var a3 = cc.sequence(a1, a2);
        this.node.runAction(cc.repeatForever(a3));
    };
    GuideFinger.prototype.update = function (dt) { };
    __decorate([
        property(cc.Vec2)
    ], GuideFinger.prototype, "startPosArr", void 0);
    __decorate([
        property(cc.Vec2)
    ], GuideFinger.prototype, "endPosArr", void 0);
    GuideFinger = __decorate([
        ccclass
    ], GuideFinger);
    return GuideFinger;
}(cc.Component));
exports.default = GuideFinger;

cc._RF.pop();