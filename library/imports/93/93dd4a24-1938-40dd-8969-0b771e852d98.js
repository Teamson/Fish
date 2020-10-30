"use strict";
cc._RF.push(module, '93dd4okGThA3YlpC3cehS2Y', 'SharpAni');
// Scripts/Crl/SharpAni.ts

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
var SharpAni = /** @class */ (function (_super) {
    __extends(SharpAni, _super);
    function SharpAni() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isRed = false;
        _this._armatureDisPlay = null;
        _this._armature = null;
        return _this;
        // update (dt) {}
    }
    SharpAni.prototype.onLoad = function () {
        this.getArmature();
    };
    SharpAni.prototype.start = function () {
    };
    SharpAni.prototype.getArmature = function () {
        //获取 ArmatureDisplay
        this._armatureDisPlay = this.getComponent(dragonBones.ArmatureDisplay);
        this.playAnimationByName(0);
        //获取 Armatrue
        this._armature = this._armatureDisPlay.armature();
        //添加动画监听
        //this._armatureDisPlay.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this);
        //this._armatureDisPlay.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.loopAnimationEventHandler, this);
    };
    SharpAni.prototype.playAnimationByName = function (index) {
        switch (index) {
            case 0:
                this._armatureDisPlay.playAnimation(this.isRed ? 'Ani_Fish_Stand' : 'Ani_Shark_Stand', 0);
                break;
            case 1:
                this._armatureDisPlay.playAnimation(this.isRed ? 'Ani_Fish_Run' : 'Ani_Shark_Run', 0);
                break;
            case 2:
                this._armatureDisPlay.playAnimation(this.isRed ? 'Ani_Fish_Die' : 'Ani_Shark_Die', 1);
                break;
            case 3:
                this._armatureDisPlay.playAnimation(this.isRed ? 'Ani_Fish_Eat' : 'Ani_Shark_Eat', 1);
                break;
        }
        //this._armatureDisPlay.timeScale = 0.1;
    };
    SharpAni.prototype.animationEventHandler = function (event) {
        // if (event.type == dragonBones.EventObject.COMPLETE) {
        //     //this._armatureDisPlay.stopAnimation();
        // }
    };
    SharpAni.prototype.loopAnimationEventHandler = function (event) {
        //this._armatureDisPlay.enabled = false;
        //console.log(event);
        // if (event.type == dragonBones.EventObject.LOOP_COMPLETE) {
        // }
    };
    __decorate([
        property
    ], SharpAni.prototype, "isRed", void 0);
    SharpAni = __decorate([
        ccclass
    ], SharpAni);
    return SharpAni;
}(cc.Component));
exports.default = SharpAni;

cc._RF.pop();