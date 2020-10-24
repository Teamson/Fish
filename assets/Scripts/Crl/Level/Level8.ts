import Utility from "../../Mod/Utility";
import Stone from "../Prop/Stone";
import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level8 extends LevelBase {

    @property(cc.Node)
    waterNode: cc.Node = null

    desSwitch: boolean = false

    onEnable() {
        this.schedule(this.updateCB)
    }

    updateCB() {
        if (this.isGameOver) return

        if (this.meatNode.isValid && Utility.getWorldDis(Stone.Share.node, this.meatNode) <= 100) {
            this.loseCB()
            return
        }

        if (!this.desSwitch) {
            for (let i = 0; i < this.waterNode.childrenCount; i++) {
                let w = this.waterNode.children[i]
                if (Utility.getWorldDis(Stone.Share.node, w) <= 111) {
                    this.waterNode.destroyAllChildren()
                    Stone.Share.node.runAction(cc.scaleTo(0.5, 1.2))
                    break
                }
            }

            for (let i = 0; i < this.waterNode.childrenCount; i++) {
                let w = this.waterNode.children[i]
                if (Utility.getWorldDis(this.DesNode, w) <= 50) {
                    Utility.loadSpriteFrame('Texture/Prop/yxz_dj13_1', this.DesNode.getComponent(cc.Sprite))
                    this.desSwitch = true
                    if (this.Sharp.isValid) {
                        this.canTouch = false
                        this.SharpCrl.moveToPoint(0)
                    }

                    break
                }
            }
        }

    }

    async trigger00() {
        this.scheduleOnce(() => {
            this.canTouch = true
        }, 3)
    }
    async trigger10() {
        this.canTouch = true
    }
    async trigger20() {
        this.getNeedleCrlById(3).isAwake = true
        this.scheduleOnce(() => {
            this.canTouch = true
        }, 3)
    }
    async trigger30() {
        await this.playerCrl.moveToPoint(0)
        if (this.desSwitch) {
            await this.playerCrl.moveToPoint(1)
            return
        } else {
            this.loseCB()
        }
    }
}
