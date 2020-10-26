import LevelBase from "./LevelBase";
import Utility from "../../Mod/Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level16 extends LevelBase {

    @property(cc.Node)
    FireNode: cc.Node = null

    onEnable() {
        this.schedule(this.updateCB)
    }

    async updateCB() {
        if (this.meatNode.isValid) {
            for (let i = 0; i < this.FireNode.childrenCount; i++) {
                let f = this.FireNode.children[i]
                if (Utility.getWorldDis(this.meatNode, f) <= 75) {
                    this.meatNode.destroy()
                    this.loseCB()
                    return
                }
            }
        }

        if(!this.isGameOver){
            for (let i = 0; i < this.FireNode.childrenCount; i++) {
                let f = this.FireNode.children[i]
                if (Utility.getWorldDis(this.playerNode, f) <= 50) {
                    this.loseCB()
                    return
                }
            }
        }
    }


    async trigger00() {
        this.canTouch = true
    }
    async trigger10() {
        if (this.FireNode.getChildByName('yxz_dj6_1'))
            this.FireNode.getChildByName('yxz_dj6_1').destroy()
        this.scheduleOnce(() => {
            this.canTouch = true
        }, 2)
    }
    async trigger20() {
        if (this.FireNode.getChildByName('yxz_dj6_1'))
            this.FireNode.getChildByName('yxz_dj6_1').destroy()
        this.scheduleOnce(() => {
            if (this.playerCrl.pointIndex == 0) {
                this.loseCB()
            } else {
                this.canTouch = true
            }
        }, 2)
    }
    async trigger30() {
        await this.playerCrl.moveToPoint(1)
        if (this.getNeedleCrlById(4).switchState > 0) {
            await this.playerCrl.moveToPoint(2)
            this.loseCB()
            return
        } else {
            await this.playerCrl.moveToPoint(3)
        }
    }
    async trigger40() {
        this.canTouch = true
    }
}
