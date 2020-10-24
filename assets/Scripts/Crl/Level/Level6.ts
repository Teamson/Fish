import Utility from "../../Mod/Utility";
import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level6 extends LevelBase {

    meatMove: boolean = false

    onEnable() {
        this.schedule(this.updateCB)
    }

    updateCB() {
        if (this.meatNode && this.meatNode.isValid && this.meatNode.y <= 70 && !this.meatMove) {
            this.canTouch = false
            this.playerCrl.moveToPoint(0)
            this.meatMove = true
            this.scheduleOnce(() => { this.canTouch = true }, 1)
        }
    }

    async trigger00() {
        this.canTouch = true
    }
    async trigger01() {
        this.getNeedleCrlById(0).node.active = false
    }
    async trigger10() {
        await this.playerCrl.moveToPoint(1)
    }

}
