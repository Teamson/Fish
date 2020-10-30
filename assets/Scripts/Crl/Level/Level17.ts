import Utility from "../../Mod/Utility";
import SlideNeedle from "../Prop/SlideNeedle";
import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level17 extends LevelBase {

    @property(cc.Node)
    WaterSwitch1: cc.Node = null
    @property(cc.Node)
    pointNode: cc.Node = null
    @property(cc.Node)
    SlideNeedle: cc.Node = null
    SlideNeedleCrl: SlideNeedle = null

    onEnable() {
        this.schedule(this.updateCB)
        this.SlideNeedleCrl = this.SlideNeedle.getComponent(SlideNeedle)

        this.SlideNeedleCrl.moveCB = (dty) => { this.SNMoveCB(dty) }
    }

    async updateCB() {

        this.WaterSwitch.children[0].active = this.SlideNeedleCrl.isBottom
        this.WaterSwitch1.children[0].active = this.getNeedleCrlById(2).switchState > 0

        for (let i = 0; i < this.pointNode.childrenCount; i++) {
            let p = this.pointNode.children[i]
            if (Utility.getWorldDis(this.playerNode, p) <= 50 && this.playerCrl.pointIndex != i) {
                this.playerCrl.pointIndex = i
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

        if (this.SharpCrl.pointIndex == 0 && !this.SlideNeedleCrl.isBottom) {
            this.SlideNeedleCrl.validTouch = false
        } else {
            this.SlideNeedleCrl.validTouch = this.canTouch
        }
    }

    async SNMoveCB(dty) {
        if (this.playerCrl.pointIndex == 0 || this.playerCrl.pointIndex == 1) {
            this.playerNode.y += dty
            if (this.SharpCrl.pointIndex == 3 && this.getNeedleCrlById(0).switchState > 0 && this.SlideNeedleCrl.isBottom) {
                this.canTouch = false
                await this.SharpCrl.moveToPoint(0)
            }
        }
        if (this.SharpCrl.pointIndex == 0 || this.SharpCrl.pointIndex == 1) {
            this.Sharp.y += dty

        }
    }

    async trigger00() {
        if (this.SharpCrl.pointIndex == 3) {
            await this.SharpCrl.moveToPoint(0)
            this.canTouch = true
        } else if (this.SharpCrl.pointIndex == 0) {
            await this.SharpCrl.moveToPoint(3)
            this.canTouch = true
        }
    }
    async trigger10() {
        if (this.SharpCrl.pointIndex == 3) {
            await this.SharpCrl.moveToPoint(4)
            this.canTouch = true
        } else if (this.playerCrl.pointIndex == 3) {
            await this.playerCrl.moveToPoint(4)
            await this.playerCrl.moveToPoint(5)
        } else {
            this.canTouch = true
        }
    }
    async trigger20() {
        if (this.playerCrl.pointIndex == 1) {
            await this.playerCrl.moveToPoint(2)
            await this.playerCrl.moveToPoint(3)
            if (this.getNeedleCrlById(1).switchState > 0) {
                await this.playerCrl.moveToPoint(4)
                await this.playerCrl.moveToPoint(5)
                return
            }
            else if (this.getNeedleCrlById(0).switchState > 0) {
                await this.SharpCrl.moveToPoint(3)
            } else {
                this.canTouch = true
            }
        } else {
            this.canTouch = true
        }
    }
}
