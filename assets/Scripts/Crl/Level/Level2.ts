import Needle from "../Prop/Needle";
import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level2 extends LevelBase {

    async trigger00() {
        await this.playerCrl.moveToPoint(1)
        if (this.getNeedleCrlById(1).switchState > 0) {
            await this.playerCrl.moveToPoint(2)
            await this.playerCrl.moveToPoint(4)
        }
        this.canTouch = true
    }
    async trigger10() {
        if (this.playerCrl.pointIndex == 1) {
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
