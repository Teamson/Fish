import GuideFinger from "../GuideFinger";
import Player from "../Player";
import Meat from "../Prop/Meat";
import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level1 extends LevelBase {

    @property(GuideFinger)
    guideFinger: GuideFinger = null

    onEnable() {
        this.guideFinger.stepAction()
    }

    async trigger00() {
        this.guideFinger.step++
        this.guideFinger.stepAction()
        this.WaterSwitch.children[0].active = true
        await this.meatCrl.triggerCB()
        this.canTouch = true
    }
    async trigger10() {
        this.guideFinger.node.active = false
        await this.playerCrl.moveToPoint(0)
        await this.playerCrl.moveToPoint(1)
        this.canTouch = true
    }
}
