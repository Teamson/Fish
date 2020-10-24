import Stone from "../Prop/Stone";
import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level5 extends LevelBase {

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
        }
    }

}
