import Utility from "../../Mod/Utility";
import Sharp from "../Sharp";
import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level14 extends LevelBase {

    @property(cc.Node)
    Sharp1: cc.Node = null
    Sharp1Crl: Sharp = null

    @property(cc.Node)
    FireNode1: cc.Node = null
    @property(cc.Node)
    Poison: cc.Node = null

    onEnable() {
        this.Sharp1Crl = this.Sharp1.getComponent(Sharp)
        this.schedule(this.updateCB)
    }

    async updateCB() {
        if (this.Sharp1.isValid) {
            for (let i = 0; i < this.Poison.childrenCount; i++) {
                let p = this.Poison.children[i]
                if (Utility.getWorldDis(p, this.Sharp1) <= 20) {
                    this.Sharp1.destroy()
                    this.Poison.destroy()
                    break
                }
            }
        }
        if (this.Sharp.isValid) {
            for (let i = 0; i < this.FireNode1.childrenCount; i++) {
                let p = this.FireNode1.children[i]
                if (Utility.getWorldDis(p, this.Sharp) <= 20) {
                    this.Sharp.destroy()
                    break
                }
            }
        }

        if (!this.isGameOver) {
            for (let i = 0; i < this.FireNode1.childrenCount; i++) {
                let p = this.FireNode1.children[i]
                if (Utility.getWorldDis(p, this.playerNode) <= 50) {
                    this.loseCB()
                    break
                }
            }
        }

    }

    async trigger00() {
        this.scheduleOnce(() => {
            this.canTouch = true
        }, 2)
    }
    async trigger10() {
        if (this.Sharp1.isValid) {
            await this.Sharp1Crl.moveToPoint(0)
        } else {
            this.canTouch = true
        }
    }
    async trigger20() {
        if (this.getNeedleCrlById(3).switchState == 0) {
            await this.playerCrl.moveToPoint(1)
            this.loseCB()
            return
        } else {
            await this.playerCrl.moveToPoint(1)
            await this.playerCrl.moveToPoint(2)
            if (this.getNeedleCrlById(5).switchState > 0) {
                await this.playerCrl.moveToPoint(5)
                this.loseCB()
                return
            }
            else if (this.getNeedleCrlById(4).switchState > 0) {
                await this.playerCrl.moveToPoint(3)
                await this.playerCrl.moveToPoint(4)
            } else {
                this.canTouch = true
            }
        }
    }
    async trigger30() {
        this.FireNode1.children[this.FireNode1.childrenCount - 1].destroy()
        this.scheduleOnce(() => { this.canTouch = true }, 1)
    }
    async trigger40() {
        if (this.Sharp.isValid) {
            await this.SharpCrl.moveToPoint(3)
        } else {
            this.canTouch = true
        }

        if (this.playerCrl.pointIndex == 2) {
            await this.playerCrl.moveToPoint(3)
            await this.playerCrl.moveToPoint(4)
        }
    }
    async trigger50() {
        this.canTouch = true
    }

}
