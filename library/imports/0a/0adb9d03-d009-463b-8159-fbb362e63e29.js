"use strict";
cc._RF.push(module, '0adb90D0AlGO4FZ+7Ni5j4p', 'PlayerAni');
// Scripts/Crl/PlayerAni.ts

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
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerAni = /** @class */ (function (_super) {
    __extends(PlayerAni, _super);
    function PlayerAni() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoChangeSkin = true;
        _this._armatureDisPlay = null;
        _this._armature = null;
        return _this;
        // update (dt) {}
    }
    PlayerAni.prototype.onLoad = function () {
        this.getArmature();
    };
    PlayerAni.prototype.start = function () {
    };
    PlayerAni.prototype.getArmature = function () {
        //获取 ArmatureDisplay
        this._armatureDisPlay = this.getComponent(dragonBones.ArmatureDisplay);
        this.playAnimationByName(0);
        //获取 Armatrue
        this._armature = this._armatureDisPlay.armature();
        if (this.autoChangeSkin)
            this.changeSkin(PlayerDataMgr_1.default.getPlayerLv() - 1);
        //添加动画监听
        //this._armatureDisPlay.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this);
        //this._armatureDisPlay.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.loopAnimationEventHandler, this);
    };
    PlayerAni.prototype.playAnimationByName = function (index) {
        switch (index) {
            case 0:
                this._armatureDisPlay.playAnimation('Ani_Mermaid_Stand', 0);
                break;
            case 1:
                this._armatureDisPlay.playAnimation('Ani_Mermaid_Run', 0);
                break;
            case 2:
                this._armatureDisPlay.playAnimation('Ani_Mermaid_Die', 1);
                break;
            case 3:
                this._armatureDisPlay.playAnimation('Ani_Mermaid_Eat', 1);
                break;
            case 4:
                this._armatureDisPlay.playAnimation('Ani_Mermaid_Win', 1);
                break;
        }
        //this._armatureDisPlay.timeScale = 0.1;
    };
    PlayerAni.prototype.animationEventHandler = function (event) {
        // if (event.type == dragonBones.EventObject.COMPLETE) {
        //     //this._armatureDisPlay.stopAnimation();
        // }
    };
    PlayerAni.prototype.loopAnimationEventHandler = function (event) {
        //this._armatureDisPlay.enabled = false;
        //console.log(event);
        // if (event.type == dragonBones.EventObject.LOOP_COMPLETE) {
        // }
    };
    PlayerAni.prototype.changeSkin = function (index) {
        this._armature.getSlot('mry_js1_l').displayIndex = index;
        this._armature.getSlot('mry_js1_tf').displayIndex = index;
        this._armature.getSlot('mry_js1_st').displayIndex = index;
        this._armature.getSlot('mry_js1_s1').displayIndex = index;
        this._armature.getSlot('mry_js1_s2').displayIndex = index;
        this._armature.getSlot('mry_js2_pj').displayIndex = index;
    };
    __decorate([
        property
    ], PlayerAni.prototype, "autoChangeSkin", void 0);
    PlayerAni = __decorate([
        ccclass
    ], PlayerAni);
    return PlayerAni;
}(cc.Component));
exports.default = PlayerAni;

cc._RF.pop();