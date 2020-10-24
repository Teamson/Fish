import Stone from "../Prop/Stone";
import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level7 extends LevelBase {

    async trigger00() {
        await Stone.Share.triggerCB()
        if (this.getNeedleCrlById(3).switchState > 0) {
            await Stone.Share.triggerCB()
            this.loseCB()
            return
        }
        this.canTouch = true
    }
    async trigger10() {
        await this.meatCrl.triggerCB()
        this.canTouch = true
    }
    async trigger20() {
        await this.playerCrl.moveToPoint(1)
        if (this.Sharp.isValid && this.SharpCrl.pointIndex == 2) {
            await this.SharpCrl.moveToPoint(1)
            return
        } else if (this.Sharp.isValid && this.SharpCrl.pointIndex == 3 && this.getNeedleCrlById(3).switchState > 0) {
            await this.SharpCrl.moveToPoint(2)
            await this.SharpCrl.moveToPoint(1)
            return
        }
        this.canTouch = true
    }
    async trigger30() {
        await this.SharpCrl.moveToPoint(3)
        if (Stone.Share.isTriggered) {
            await Stone.Share.triggerCB()
            LevelBase.Share.loseCB()
            return
        }
        this.canTouch = true
    }
    async trigger40() {
        if (this.Sharp.isValid && this.SharpCrl.pointIndex == 3) {
            await this.SharpCrl.moveToPoint(0)
            if (this.playerCrl.pointIndex == 1) {
                await this.SharpCrl.moveToPoint(1)
            }
            return
        } else {
            if (this.playerCrl.pointIndex == 1) {
                await this.playerCrl.moveToPoint(0)
            }
            await this.playerCrl.moveToPoint(3)
            await this.playerCrl.moveToPoint(4)
        }
    }
}
