import GuideFinger from "../GuideFinger";
import Stone from "../Prop/Stone";
import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level5 extends LevelBase {

    @property(GuideFinger)
    guideFinger: GuideFinger = null

    onEnable() {
        this.guideFinger.stepAction()
        this.schedule(this.updateCB)
    }

    updateCB() {
        this.guideFinger.node.active = this.getNeedleCrlById(1).lostHead
        Stone.Share.node.active = this.Sharp.isValid
    }

    async trigger00() {
        await Stone.Share.triggerCB()
        this.canTouch = true
    }

    async trigger10() {
        if (this.Sharp && this.Sharp.isValid) {
            await this.SharpCrl.moveToPoint(2)
        } else {
            await this.playerCrl.moveToPoint(1)
            await this.playerCrl.moveToPoint(2)
            await this.playerCrl.moveToPoint(3)
        }
    }

    async trigger20() {
        if (this.Sharp && this.Sharp.isValid) {
            await this.SharpCrl.moveToPoint(0)
        } else {
            this.canTouch = true
        }
    }

}
