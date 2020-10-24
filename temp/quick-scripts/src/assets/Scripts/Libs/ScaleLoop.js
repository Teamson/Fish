"use strict";
cc._RF.push(module, '990d6YJhU5HUbj0EGVi6QL6', 'ScaleLoop');
// Scripts/Libs/ScaleLoop.ts

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
var ScaleLoop = /** @class */ (function (_super) {
    __extends(ScaleLoop, _super);
    function ScaleLoop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originScale = 1;
        _this.targetScale = 1;
        _this.scaleDuration = 0.5;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    ScaleLoop.prototype.start = function () {
        var a1 = cc.scaleTo(this.scaleDuration, this.targetScale);
        var a2 = cc.scaleTo(this.scaleDuration, this.originScale);
        var a3 = cc.sequence(a1, a2);
        this.node.runAction(cc.repeatForever(a3));
    };
    __decorate([
        property
    ], ScaleLoop.prototype, "originScale", void 0);
    __decorate([
        property
    ], ScaleLoop.prototype, "targetScale", void 0);
    __decorate([
        property
    ], ScaleLoop.prototype, "scaleDuration", void 0);
    ScaleLoop = __decorate([
        ccclass
    ], ScaleLoop);
    return ScaleLoop;
}(cc.Component));
exports.default = ScaleLoop;

cc._RF.pop();