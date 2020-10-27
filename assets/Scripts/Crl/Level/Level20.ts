import Utility from "../../Mod/Utility";
import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level20 extends LevelBase {

    @property(cc.Node)
    Saw: cc.Node = null
    @property(cc.Node)
    Poison: cc.Node = null
    @property(cc.Node)
    rotateNode: cc.Node = null

    onEnable() {
        this.sawAction()
        this.schedule(this.updateCB)
    }

    async updateCB() {
        if (!this.isGameOver) {
            if (Utility.getWorldDis(this.playerNode, this.Saw) <= 100) {
                this.loseCB()
                return
            }

            for (let i = 0; i < this.Poison.childrenCount; i++) {
                let p = this.Poison.children[i]
                if (Utility.getWorldDis(p, this.playerNode) <= 50) {
                    this.loseCB()
                    return
                }
            }
        }
    }
    sawAction() {
        let a1 = cc.rotateBy(4.6, -960)

        let a3 = cc.delayTime(0.3)
        let a4 = cc.moveTo(2, cc.v2(0, 85))
        let a5 = cc.delayTime(0.3)
        let a6 = cc.moveTo(2, cc.v2(0, -55))
        let a7 = cc.sequence(a3, a4, a5, a6)

        let a9 = cc.spawn(a1, a7)
        this.Saw.runAction(cc.repeatForever(a9))
    }

    async trigger00() {
        if (this.playerCrl.pointIndex == 1) {
            await this.playerCrl.moveToPoint(2)
        }
        this.canTouch = true
    }
    async trigger10() {
        if (this.playerCrl.pointIndex == 2) {
            await this.playerCrl.moveToPoint(3)
            if (this.playerCrl.gotMeat) {
                await this.playerCrl.moveToPoint(4)
            } else {
                this.loseCB()
                return
            }
        }
        this.canTouch = true
    }
    async trigger20() {
        if (this.playerCrl.pointIndex == 0) {
            await this.playerCrl.moveToPoint(3)
            if (this.playerCrl.gotMeat) {
                await this.playerCrl.moveToPoint(4)
            } else {
                this.loseCB()
                return
            }
        }

        this.canTouch = true
    }
    async trigger30() {
        if (this.playerCrl.pointIndex == 0) {
            await this.playerCrl.moveToPoint(1)
            if (this.getNeedleCrlById(0).switchState > 0) {
                await this.playerCrl.moveToPoint(2)
                if (this.getNeedleCrlById(1).switchState > 0) {
                    await this.playerCrl.moveToPoint(3)
                    if (this.playerCrl.gotMeat) {
                        await this.playerCrl.moveToPoint(4)
                    } else {
                        this.loseCB()
                        return
                    }
                }
            }
        }

        this.canTouch = true
    }
}
