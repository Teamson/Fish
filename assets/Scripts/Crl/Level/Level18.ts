import Utility from "../../Mod/Utility";
import Sharp from "../Sharp";
import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level18 extends LevelBase {

    @property(cc.Node)
    Sharp1: cc.Node = null
    Sharp1Crl: Sharp = null

    @property(cc.Node)
    Meat1: cc.Node = null
    MeatDroped: boolean = false

    onEnable() {
        this.Sharp1Crl = this.Sharp1.getComponent(Sharp)
        this.schedule(this.updateCB)
    }

    async updateCB() {
        if (!this.isGameOver && this.Sharp1.isValid && this.meatNode.isValid) {
            if (Utility.getWorldDis(this.Sharp1, this.meatNode) <= 50) {
                this.meatNode.destroy()
                this.loseCB()
                return
            }
        }
        if (!this.isGameOver && this.Sharp.isValid && this.Meat1.isValid) {
            if (Utility.getWorldDis(this.Sharp, this.Meat1) <= 50) {
                this.Sharp.pauseAllActions()
                this.SharpCrl.aniCrl.playAnimationByName(3)
                this.scheduleOnce(() => { this.Sharp.resumeAllActions() }, 0.5)
                this.Meat1.destroy()
                return
            }
        }
    }


    async trigger00() {
        await this.playerCrl.moveToPoint(3)
        await this.playerCrl.moveToPoint(4)
        if (this.getNeedleCrlById(3).switchState > 0) {
            await this.SharpCrl.moveToPoint(4)
        }
        else if (this.getNeedleCrlById(4).switchState > 0) {
            await this.playerCrl.moveToPoint(5)
            await this.playerCrl.moveToPoint(6)
        } else {
            this.canTouch = true
        }
    }
    async trigger10() {
        if (this.getNeedleCrlById(2).switchState > 0) {
            if (this.SharpCrl.pointIndex == 2) {
                await this.SharpCrl.moveToPoint(1)
                await this.SharpCrl.moveToPoint(0)
            } else if (this.SharpCrl.pointIndex == 4 && this.getNeedleCrlById(3).switchState > 0) {
                await this.SharpCrl.moveToPoint(2)
                await this.SharpCrl.moveToPoint(1)
                await this.SharpCrl.moveToPoint(0)
            } else {
                this.canTouch = true
            }
        } else {
            this.canTouch = true
        }
    }
    async trigger20() {
        if (this.Meat1.isValid) {
            this.MeatDroped = true
            this.Meat1.runAction(cc.moveBy(1, cc.v2(0, -170)))
            this.scheduleOnce(() => {
                this.canTouch = true
            }, 1)
        }

        if (this.getNeedleCrlById(1).switchState > 0) {
            if (this.SharpCrl.pointIndex == 2) {
                await this.SharpCrl.moveToPoint(1)
                await this.SharpCrl.moveToPoint(0)
            } else if (this.SharpCrl.pointIndex == 4 && this.getNeedleCrlById(3).switchState > 0) {
                await this.SharpCrl.moveToPoint(2)
                await this.SharpCrl.moveToPoint(1)
                await this.SharpCrl.moveToPoint(0)
            }
        } else if (this.SharpCrl.pointIndex == 4 && this.getNeedleCrlById(3).switchState > 0) {
            await this.SharpCrl.moveToPoint(2)
            this.canTouch = true
        }
    }
    async trigger30() {
        if (this.SharpCrl.pointIndex == 2) {
            await this.SharpCrl.moveToPoint(4)
            if (this.Sharp1.isValid) {
                this.SharpCrl.aniCrl.playAnimationByName(3)
                this.scheduleOnce(() => { this.SharpCrl.aniCrl.playAnimationByName(0) }, 0.5)
                this.Sharp1.destroy()
            }
            this.canTouch = true
        } else if (this.SharpCrl.pointIndex == 4 && this.MeatDroped && this.Meat1.isValid) {
            await this.SharpCrl.moveToPoint(2)
            this.canTouch = true
        } else {
            this.canTouch = true
        }
    }
    async trigger40() {
        if (this.playerCrl.pointIndex == 4) {
            await this.playerCrl.moveToPoint(5)
            await this.playerCrl.moveToPoint(6)
        } else if (this.Sharp1.isValid && this.Sharp1Crl.pointIndex == 4) {
            await this.Sharp1Crl.moveToPoint(5)
        } else if (this.SharpCrl.pointIndex == 4) {
            await this.SharpCrl.moveToPoint(5)
        } else {
            this.canTouch = true
        }
    }
}
