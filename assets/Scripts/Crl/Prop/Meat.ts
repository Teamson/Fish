import Utility from "../../Mod/Utility";
import LevelBase from "../Level/LevelBase";
import Player from "../Player";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Meat extends cc.Component {

    @property
    moveByY: number = 0

    @property
    moveTime: number = 1

    playerNode: cc.Node = null

    isMoveing: boolean = false
    isTriggered: boolean = false

    // onLoad () {}

    start() {
        this.playerNode = LevelBase.Share.playerNode
    }

    //触发事件
    triggerCB() {
        return new Promise((rs, rj) => {
            this.isMoveing = true
            let a1 = cc.moveBy(this.moveTime, cc.v2(0, this.moveByY))
            let a2 = cc.callFunc(() => {
                this.isMoveing = false
                this.isTriggered = true
                rs()
            })
            let a3 = cc.sequence(a1, a2)
            this.node.runAction(a3)
        })
    }

    //检测是否碰到美人鱼
    eatByPlayer() {
        if (this.playerNode) {
            let dis = Utility.getWorldDis(this.node, this.playerNode)
            if (dis <= 50 && !this.isMoveing) {
                //被吃掉
                this.playerNode.getComponent(Player).eatMean()
                this.node.destroy()
            }
        }
    }

    eatBySharp() {
        if (LevelBase.Share.Sharp && LevelBase.Share.Sharp.isValid) {
            let dis = Utility.getWorldDis(this.node, LevelBase.Share.Sharp)
            if (dis <= 50 && !this.isMoveing) {
                //被吃掉
                LevelBase.Share.SharpCrl.aniCrl.playAnimationByName(3)
                this.node.destroy()
                LevelBase.Share.loseCB()
            }
        }
    }

    update(dt) {
        this.eatByPlayer()
        this.eatBySharp()
    }
}
