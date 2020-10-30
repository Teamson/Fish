import GuideFinger from "../GuideFinger";
import Needle from "../Prop/Needle";
import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level2 extends LevelBase {

    @property(GuideFinger)
    guideFinger: GuideFinger = null

    onEnable() {
        this.guideFinger.stepAction()
        this.schedule(this.updateCB)
    }

    updateCB() {
        this.WaterSwitch.children[0].active = this.getNeedleCrlById(1).switchState > 0
    }

    async trigger00() {
        this.guideFinger.step++
        this.guideFinger.stepAction()
        await this.playerCrl.moveToPoint(1)
        if (this.getNeedleCrlById(1).switchState > 0) {
            this.guideFinger.node.active = false
            await this.playerCrl.moveToPoint(2)
            await this.playerCrl.moveToPoint(4)
        }
        this.canTouch = true
    }
    async trigger10() {
        if (this.playerCrl.pointIndex == 1) {
            this.guideFinger.node.active = false
            await this.playerCrl.moveToPoint(2)
            await this.playerCrl.moveToPoint(4)
        }
        this.canTouch = true
    }
    async trigger11() {
        this.SharpCrl.moveToPoint(0)
    }
    async trigger20() {
        await this.SharpCrl.moveToPoint(2)
    }
}
