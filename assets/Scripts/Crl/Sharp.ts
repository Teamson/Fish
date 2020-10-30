import Utility from "../Mod/Utility";
import Level1 from "./Level/Level1";
import LevelBase from "./Level/LevelBase";
import SharpAni from "./SharpAni";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Sharp extends cc.Component {

    pointNode: cc.Node = null

    moveSpeed: number = 1

    isMoving: boolean = false
    @property
    pointIndex: number = 0

    aniCrl: SharpAni = null

    onLoad() {
        this.pointNode = LevelBase.Share.node.getChildByName('PointNode')
        this.aniCrl = this.node.children[0].getComponent(SharpAni)
    }

    start() {

    }

    moveToPoint(index: number) {
        return new Promise((rs, rj) => {
            if (this.isMoving) {
                rs()
                return
            }
            this.aniCrl.playAnimationByName(1)
            this.isMoving = true
            let desPos = this.pointNode.children[index].getPosition()
            this.node.scaleX = Math.abs(this.node.scaleX) * (desPos.x < this.node.x ? 1 : -1)
            let dis = Utility.getWorldDis(this.pointNode.children[index], this.node)
            let a1 = cc.moveTo(dis / 300/* this.moveSpeed */, desPos)
            let a2 = cc.callFunc(() => {
                this.pointIndex = index
                this.isMoving = false
                this.aniCrl.playAnimationByName(0)
                rs()
            })
            let a3 = cc.sequence(a1, a2)
            this.node.runAction(a3)
        })
    }

    checkEatPlayer() {
        if (!LevelBase.Share.isGameOver) {
            if (Utility.getWorldDis(this.node, LevelBase.Share.playerNode) <= 50) {
                this.aniCrl.playAnimationByName(3)
                LevelBase.Share.loseCB()
            }
        }
    }

    update(dt) {
        this.checkEatPlayer()
    }
}
