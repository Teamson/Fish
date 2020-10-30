import PlayerDataMgr from "../Libs/PlayerDataMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerAni extends cc.Component {

    @property
    autoChangeSkin: boolean = true

    _armatureDisPlay: dragonBones.ArmatureDisplay = null
    _armature: dragonBones.Armature = null

    onLoad() {
        this.getArmature()
    }

    start() {

    }

    getArmature() {
        //获取 ArmatureDisplay
        this._armatureDisPlay = this.getComponent(dragonBones.ArmatureDisplay);
        this.playAnimationByName(0);
        //获取 Armatrue
        this._armature = this._armatureDisPlay.armature();

        if (this.autoChangeSkin)
            this.changeSkin(PlayerDataMgr.getPlayerLv() - 1)
        //添加动画监听
        //this._armatureDisPlay.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this);
        //this._armatureDisPlay.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.loopAnimationEventHandler, this);
    }
    playAnimationByName(index) {
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
    }

    animationEventHandler(event) {
        // if (event.type == dragonBones.EventObject.COMPLETE) {
        //     //this._armatureDisPlay.stopAnimation();
        // }
    }

    loopAnimationEventHandler(event) {
        //this._armatureDisPlay.enabled = false;
        //console.log(event);
        // if (event.type == dragonBones.EventObject.LOOP_COMPLETE) {

        // }
    }

    changeSkin(index) {
        this._armature.getSlot('mry_js1_l').displayIndex = index;
        this._armature.getSlot('mry_js1_tf').displayIndex = index;
        this._armature.getSlot('mry_js1_st').displayIndex = index;
        this._armature.getSlot('mry_js1_s1').displayIndex = index;
        this._armature.getSlot('mry_js1_s2').displayIndex = index;
        this._armature.getSlot('mry_js2_pj').displayIndex = index;
    }

    // update (dt) {}
}
