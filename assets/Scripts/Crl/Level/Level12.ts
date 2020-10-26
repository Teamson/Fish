import Sharp from "../Sharp";
import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level12 extends LevelBase {

    @property(cc.Node)
    MainCamera: cc.Node = null

    @property(cc.Node)
    SharpRed: cc.Node = null
    SharpRedCrl: Sharp = null

    @property(cc.Node)
    Electric: cc.Node = null
    @property(cc.Node)
    Electric1: cc.Node = null

    gameStarted: boolean = false

    onEnable() {
        this.SharpRedCrl = this.SharpRed.getComponent(Sharp)
        this.schedule(this.updateCB)
    }

    async updateCB() {
        if (!this.gameStarted) {
            this.canTouch = false
            this.gameStarted = true
            let a1 = cc.moveBy(5, cc.v2(750 * 2, 0))
            let a2 = cc.moveBy(5, cc.v2(-750 * 2, 0))
            let a3 = cc.callFunc(() => {
                this.canTouch = true
            })
            let sq = cc.sequence(a1, a2, a3)
            this.MainCamera.runAction(sq)
        }

        if (!this.SharpCrl.isMoving && this.SharpCrl.pointIndex == 2 && this.getNeedleCrlById(2).switchState > 0) {
            this.canTouch = false
            await this.SharpCrl.moveToPoint(4)
            this.canTouch = true
        }
        if (!this.SharpRedCrl.isMoving && this.SharpRedCrl.pointIndex == 3 && this.getNeedleCrlById(2).switchState > 0) {
            this.canTouch = false
            await this.SharpRedCrl.moveToPoint(5)
            this.canTouch = true
        }
    }

    async trigger00() {
        if (this.SharpCrl.pointIndex == 1) {
            await this.SharpCrl.moveToPoint(0)
        } else if (this.SharpCrl.pointIndex == 2) {
            await this.SharpCrl.moveToPoint(1)
            await this.SharpCrl.moveToPoint(0)
        } else if (this.SharpCrl.pointIndex == 4) {
            if (this.getNeedleCrlById(2).switchState > 0) {
                await this.playerCrl.moveToPoint(6)
                await this.playerCrl.moveToPoint(4)
            } else {
                this.MainCamera.runAction(cc.moveBy(2, cc.v2(750, 0)))
                await this.playerCrl.moveToPoint(6)
                await this.playerCrl.moveToPoint(7)
                this.canTouch = true
            }
        }
    }
    async trigger10() {
        await this.SharpCrl.moveToPoint(2)
        this.canTouch = true
    }
    async trigger20() {
        this.canTouch = true
    }
    async trigger30() {
        if (this.Electric.isValid) {
            this.scheduleOnce(() => {
                this.loseCB()
            }, 2)
        } else {
            this.MainCamera.runAction(cc.moveBy(1, cc.v2(750, 0)))
            await this.playerCrl.moveToPoint(8)
            this.canTouch = true
        }
    }
    async trigger40() {
        this.scheduleOnce(() => {
            this.Electric.destroy()
            this.canTouch = true
        }, 2)
    }
    async trigger50() {
        if (this.Electric1.isValid) {
            this.scheduleOnce(() => {
                this.loseCB()
            }, 2)
        } else {
            await this.playerCrl.moveToPoint(9)
            await this.playerCrl.moveToPoint(10)
        }
    }
    async trigger60() {
        this.scheduleOnce(() => {
            this.Electric1.destroy()
            this.canTouch = true
        }, 2)
    }

}
