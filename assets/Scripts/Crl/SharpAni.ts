import PlayerDataMgr from "../Libs/PlayerDataMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SharpAni extends cc.Component {

    @property
    isRed: boolean = false

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
        //添加动画监听
        //this._armatureDisPlay.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this);
        //this._armatureDisPlay.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.loopAnimationEventHandler, this);
    }
    playAnimationByName(index) {
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

    // update (dt) {}
}
