import LevelBase from "./LevelBase";
import ThreeNeedle from "../Prop/ThreeNeedle";
import SlideNeedle from "../Prop/SlideNeedle";
import Utility from "../../Mod/Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level10 extends LevelBase {

    @property(cc.Node)
    pointNode: cc.Node = null

    @property(cc.Node)
    ThreeNeedle: cc.Node = null
    @property(cc.Node)
    SlideNeedle: cc.Node = null

    ThreeNeedleCrl: ThreeNeedle = null
    SlideNeedleCrl: SlideNeedle = null

    onEnable() {
        this.schedule(this.updateCB)
        this.ThreeNeedleCrl = this.ThreeNeedle.getComponent(ThreeNeedle)
        this.SlideNeedleCrl = this.SlideNeedle.getComponent(SlideNeedle)

        this.ThreeNeedleCrl.closeCB = () => { this.TNCloseCB() }
        this.ThreeNeedleCrl.openCB = () => { this.TNOpenCB() }
        this.SlideNeedleCrl.moveCB = (dty) => { this.SNMoveCB(dty) }
    }

    async updateCB() {
        if (this.isGameOver) return
        for (let i = 0; i < this.pointNode.childrenCount; i++) {
            let p = this.pointNode.children[i]
            if (Utility.getWorldDis(this.playerNode, p) <= 50 && this.playerCrl.pointIndex != i) {
                this.playerCrl.pointIndex = i
                if (i == 2 && !this.ThreeNeedleCrl.isClosed) {
                    this.SharpCrl.moveToPoint(2)
                }
                break
            }
        }
        for (let i = 0; i < this.pointNode.childrenCount; i++) {
            let p = this.pointNode.children[i]
            if (Utility.getWorldDis(this.Sharp, p) <= 50 && this.SharpCrl.pointIndex != i) {
                this.SharpCrl.pointIndex = i
                break
            }
        }

        if (this.playerCrl.pointIndex == 0 && !this.SlideNeedleCrl.isBottom) {
            this.SlideNeedleCrl.validTouch = false
        } else {
            this.SlideNeedleCrl.validTouch = this.canTouch
        }

        if (!this.playerCrl.isMoving && this.playerCrl.pointIndex == 5 && this.getNeedleCrlById(1).switchState > 0) {
            this.canTouch = false
            await this.playerCrl.moveToPoint(6)
            await this.playerCrl.moveToPoint(7)
            this.canTouch = true
        }

        if (this.SharpCrl.pointIndex == 5 && !this.SharpCrl.isMoving && this.getNeedleCrlById(1).switchState > 0) {
            this.canTouch = false
            await this.SharpCrl.moveToPoint(6)
        }
    }

    TNCloseCB() {

    }
    async TNOpenCB() {
        if (this.playerCrl.pointIndex == 0 && this.SlideNeedleCrl.isBottom) {
            this.canTouch = false
            await this.SharpCrl.moveToPoint(2)
            await this.SharpCrl.moveToPoint(0)
        } else if (this.playerCrl.pointIndex == 1 && this.SlideNeedleCrl.isBottom) {
            this.canTouch = false
            await this.SharpCrl.moveToPoint(2)
            await this.SharpCrl.moveToPoint(0)
            this.canTouch = true
        } else if (this.playerCrl.pointIndex == 2) {
            this.canTouch = false
            await this.SharpCrl.moveToPoint(2)
        } else if (this.playerCrl.pointIndex == 4) {
            this.canTouch = false
            await this.playerCrl.moveToPoint(5)
            this.canTouch = true
        }

        if (this.SharpCrl.pointIndex == 5 && !this.SlideNeedleCrl.isBottom) {
            this.canTouch = false
            await this.SharpCrl.moveToPoint(3)
            this.canTouch = true
        } else if ((this.SharpCrl.pointIndex == 3 || this.SharpCrl.pointIndex == 2) && !this.SlideNeedleCrl.isBottom) {
            this.canTouch = false
            await this.SharpCrl.moveToPoint(5)
            this.canTouch = true
        }
    }

    async SNMoveCB(dty) {
        if (this.playerCrl.pointIndex == 0 || this.playerCrl.pointIndex == 2) {
            this.playerNode.y += dty
            if (!this.playerCrl.isMoving && this.playerCrl.pointIndex == 2 &&
                !this.SlideNeedleCrl.isBottom && this.ThreeNeedleCrl.isClosed) {
                this.canTouch = false
                await this.playerCrl.moveToPoint(4)
                this.canTouch = true
            } else if (this.playerCrl.pointIndex == 2 && !this.SlideNeedleCrl.isBottom && !this.ThreeNeedleCrl.isClosed) {
                this.canTouch = false
                await this.playerCrl.moveToPoint(5)
                this.canTouch = true
            }
        }
        if (this.SharpCrl.pointIndex == 0 || this.SharpCrl.pointIndex == 2) {
            this.Sharp.y += dty
            if (this.SharpCrl.pointIndex == 2 && !this.SlideNeedleCrl.isBottom && !this.ThreeNeedleCrl.isClosed) {
                this.SharpCrl.moveToPoint(5)
            }
        }
    }

    async trigger00() {
        if (this.playerCrl.pointIndex == 0) {
            await this.playerCrl.moveToPoint(1)
            this.canTouch = true
        } else if (this.playerCrl.pointIndex == 1) {
            await this.playerCrl.moveToPoint(0)
            this.canTouch = true
        }
    }
    async trigger10() {

    }
}
