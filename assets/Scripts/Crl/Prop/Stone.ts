import Utility from "../../Mod/Utility";
import LevelBase from "../Level/LevelBase";
import Player from "../Player";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Stone extends cc.Component {
    public static Share: Stone

    @property
    moveByY: number = 0

    @property
    moveTime: number = 1

    playerNode: cc.Node = null

    isMoveing: boolean = false
    isTriggered: boolean = false

    onLoad() {
        Stone.Share = this
        this.playerNode = LevelBase.Share.playerNode
    }

    start() {

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
    collByPlayer() {
        if (this.playerNode) {
            let dis = Utility.getWorldDis(this.node, this.playerNode)
            if (dis <= 20 && !this.isMoveing) {
                this.playerNode.stopAllActions()
                this.node.destroy()
                LevelBase.Share.loseCB()
            }
        }
    }

    collBySharp() {
        if (LevelBase.Share.Sharp && LevelBase.Share.Sharp.isValid) {
            let dis = Utility.getWorldDis(this.node, LevelBase.Share.Sharp)
            if (dis <= 50 && !this.isMoveing) {
                LevelBase.Share.Sharp.stopAllActions()
                LevelBase.Share.Sharp.destroy()
            }
        }
    }

    update(dt) {
        this.collByPlayer()
        this.collBySharp()
    }
}
