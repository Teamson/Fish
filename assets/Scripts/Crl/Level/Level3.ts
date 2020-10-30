import Utility from "../../Mod/Utility";
import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level3 extends LevelBase {

    @property(cc.Node)
    poisonNode: cc.Node = null

    onEnable() {
        this.schedule(this.updateCB)
    }

    updateCB() {
        if (this.meatNode.isValid && !this.isGameOver) {
            for (let i = 0; i < this.poisonNode.childrenCount; i++) {
                let p = this.poisonNode.children[i]
                if (Utility.getWorldDis(this.meatNode, p) <= 100) {
                    this.loseCB()
                    return
                }
            }
        }
        if (!this.isGameOver) {
            for (let i = 0; i < this.poisonNode.childrenCount; i++) {
                let p = this.poisonNode.children[i]
                if (Utility.getWorldDis(this.playerNode, p) <= 100) {
                    this.loseCB()
                    return
                }
            }
        }
    }

    async trigger00() {
        await this.meatCrl.triggerCB()
        this.canTouch = true
    }
    async trigger10() {
        await this.playerCrl.moveToPoint(0)
        await this.playerCrl.moveToPoint(1)
    }
    async trigger20() {
        this.canTouch = true
    }
    async trigger30() {
        this.canTouch = true
    }
}
