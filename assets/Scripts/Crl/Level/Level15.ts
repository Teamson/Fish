import LevelBase from "./LevelBase";
import Utility from "../../Mod/Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level15 extends LevelBase {

    @property(cc.Node)
    Stone: cc.Node = null

    movetoDes: boolean = false;

    onEnable() {
        this.schedule(this.updateCB)
    }

    async updateCB() {

        if (!this.isGameOver && this.playerNode.isValid && this.Stone.isValid) {
            if (Utility.getWorldDis(this.playerNode, this.Stone) <= 50) {
                this.loseCB()
                return
            }
        }

        if (this.meatNode.isValid && !this.isGameOver && this.Stone.isValid) {
            if (Utility.getWorldDis(this.meatNode, this.Stone) <= 50) {
                this.meatNode.destroy()
                this.loseCB()
                return
            }
        }
        if (this.Sharp.isValid && this.Stone.isValid) {
            if (Utility.getWorldDis(this.Sharp, this.Stone) <= 50) {
                this.Sharp.destroy()
                this.canTouch = true
            }
        }

        if (!this.isGameOver) {
            if (this.getNeedleCrlById(0).switchState == 2 && this.getNeedleCrlById(1).switchState == 2 &&
                this.getNeedleCrlById(2).switchState == 2 && this.getNeedleCrlById(3).switchState == 2 &&
                !this.movetoDes) {
                this.movetoDes = true
                this.canTouch = false
                await this.playerCrl.moveToPoint(1)
                await this.playerCrl.moveToPoint(4)
                await this.playerCrl.moveToPoint(5)
                await this.playerCrl.moveToPoint(6)
                await this.playerCrl.moveToPoint(7)
            }
        }
    }


    async trigger00() {
        if (this.Sharp.isValid && this.SharpCrl.pointIndex == 3) {
            await this.SharpCrl.moveToPoint(2)
            this.canTouch = true
        } else {
            this.canTouch = true
        }
    }
    async trigger01() {
        if (this.Sharp.isValid && this.SharpCrl.pointIndex == 3) {
            await this.SharpCrl.moveToPoint(2)
            await this.SharpCrl.moveToPoint(1)
            await this.SharpCrl.moveToPoint(0)
        } else if (this.Sharp.isValid && this.SharpCrl.pointIndex == 2) {
            await this.SharpCrl.moveToPoint(1)
            await this.SharpCrl.moveToPoint(0)
        } else {
            this.canTouch = true
        }
    }
    async trigger10() {
        this.canTouch = true
    }
    async trigger20() {
        this.canTouch = true
    }
    async trigger30() {
        this.canTouch = true
    }
}
