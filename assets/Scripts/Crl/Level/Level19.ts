import Utility from "../../Mod/Utility";
import Sharp from "../Sharp";
import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level19 extends LevelBase {

    MainCamera: cc.Node = null

    @property(cc.Node)
    SandNode: cc.Node = null
    @property(cc.Node)
    Electric: cc.Node = null
    @property(cc.Node)
    Saw: cc.Node = null
    @property(cc.Node)
    Sharp1: cc.Node = null
    Sharp1Crl: Sharp = null
    @property(cc.Node)
    Des1: cc.Node = null
    @property(cc.Node)
    GouNode: cc.Node = null
    @property(cc.Node)
    GouPoint: cc.Node = null

    gameStarted: boolean = false

    onEnable() {
        this.MainCamera = cc.find('Canvas/Main Camera')
        this.sawAction()
        this.Sharp1Crl = this.Sharp1.getComponent(Sharp)
        this.schedule(this.updateCB)
    }

    async updateCB() {
        if (!this.gameStarted) {
            this.canTouch = false
            this.gameStarted = true
            let a1 = cc.moveBy(3, cc.v2(750, 0))
            let a2 = cc.moveBy(3, cc.v2(-750, 0))
            let a3 = cc.callFunc(() => {
                this.canTouch = true
            })
            let sq = cc.sequence(a1, a2, a3)
            this.MainCamera.runAction(sq)
        }

        if (!this.isGameOver) {
            if (Utility.getWorldDis(this.playerNode, this.Saw) <= 100) {
                this.loseCB()
                return
            }

            if (this.Sharp.isValid) {
                if (Utility.getWorldDis(this.Sharp, this.GouPoint) <= 50) {
                    this.Sharp.destroy()
                    this.canTouch = true
                }
            }

            if (Utility.getWorldDis(this.playerNode, this.GouPoint) <= 50) {
                this.loseCB()
                return
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
        if (this.playerCrl.pointIndex == 0) {
            await this.playerCrl.moveToPoint(1)
            if (this.getNeedleCrlById(1).switchState > 0) {
                await this.playerCrl.moveToPoint(2)
                this.MainCamera.runAction(cc.moveBy(1, cc.v2(750, 0)))
                await this.playerCrl.moveToPoint(3)
            }
        }
        this.canTouch = true
    }
    async trigger10() {
        if (this.playerCrl.pointIndex == 1) {
            await this.playerCrl.moveToPoint(2)
            this.MainCamera.runAction(cc.moveBy(1, cc.v2(750, 0)))
            await this.playerCrl.moveToPoint(3)
        }
        this.canTouch = true
    }
    async trigger11() {
        if (this.playerCrl.pointIndex == 0) {
            await this.playerCrl.moveToPoint(9)
            if (this.Electric.isValid) {
                this.loseCB()
                return
            } else if (this.getNeedleCrlById(2).switchState > 0 && this.getNeedleCrlById(3).switchState > 0) {
                this.MainCamera.runAction(cc.moveBy(1, cc.v2(750, 0)))
                await this.playerCrl.moveToPoint(10)
            }
        }
        this.canTouch = true
    }
    async trigger20() {
        if (this.SandNode.isValid) {
            this.scheduleOnce(() => {
                this.Electric.destroy()
                this.SandNode.destroy()
                this.canTouch = true
            }, 2)
        } else {
            this.canTouch = true
        }

    }
    async trigger30() {
        if (this.playerCrl.pointIndex == 0) {
            if (this.SandNode.isValid) {
                this.scheduleOnce(() => {
                    this.SandNode.destroy()
                    this.canTouch = true
                }, 2)
            } else {
                this.canTouch = true
            }
        } else if (this.playerCrl.pointIndex == 9) {
            this.MainCamera.runAction(cc.moveBy(1, cc.v2(750, 0)))
            await this.playerCrl.moveToPoint(10)
            this.canTouch = true
        }

    }
    async trigger40() {
        if (this.playerCrl.pointIndex == 3) {
            await this.playerCrl.moveToPoint(4)
            if (this.getNeedleCrlById(7).switchState > 0) {
                await this.playerCrl.moveToPoint(5)
                if (this.getNeedleCrlById(6).switchState > 0) {
                    await this.playerCrl.moveToPoint(7)
                    await this.playerCrl.moveToPoint(8)
                } else {
                    await this.playerCrl.moveToPoint(6)
                    this.loseCB()
                    return
                }
            }
        }

        this.canTouch = true
    }
    async trigger41() {
        if (this.playerCrl.pointIndex == 10) {
            await this.Sharp1Crl.moveToPoint(10)
            this.loseCB()
        }
        this.canTouch = true
    }
    async trigger50() {
        await this.Sharp1Crl.moveToPoint(7)
        this.meatNode.destroy()
        this.loseCB()
    }
    async trigger60() {
        this.canTouch = true
    }
    async trigger70() {
        if (this.Sharp.isValid && this.SharpCrl.pointIndex == 4) {
            await this.SharpCrl.moveToPoint(5)
        } else if (this.playerCrl.pointIndex == 4) {
            await this.playerCrl.moveToPoint(5)
            if (this.getNeedleCrlById(6).switchState > 0) {
                await this.playerCrl.moveToPoint(7)
                await this.playerCrl.moveToPoint(8)
            } else {
                await this.playerCrl.moveToPoint(6)
                this.loseCB()
                return
            }
        }
        this.canTouch = true
    }
}
