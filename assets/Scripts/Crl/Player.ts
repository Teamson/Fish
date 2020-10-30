import Level1 from "./Level/Level1";
import LevelBase from "./Level/LevelBase";
import PlayerAni from "./PlayerAni";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    aniCrl: PlayerAni = null

    pointNode: cc.Node = null

    gotMeat: boolean = false

    isMoving: boolean = false
    moveSpeed: number = 1
    pointIndex: number = 0

    onLoad() {
        this.pointNode = LevelBase.Share.node.getChildByName('PointNode')
        this.aniCrl = this.node.children[0].getComponent(PlayerAni)
    }

    start() {

    }

    //吃掉食物
    eatMean() {
        this.node.pauseAllActions()
        this.aniCrl.playAnimationByName(3)
        this.scheduleOnce(() => {
            this.aniCrl.playAnimationByName(this.isMoving ? 1 : 0)
            this.node.resumeAllActions()
        }, 1)
        this.gotMeat = true
    }

    moveToPoint(index: number) {
        return new Promise((rs, rj) => {
            if (this.isMoving) {
                rs()
                return
            }
            let desPos = this.pointNode.children[index].getPosition()
            this.node.scaleX = Math.abs(this.node.scaleX) * (desPos.x < this.node.x ? 1 : -1)
            this.aniCrl.playAnimationByName(1)
            this.isMoving = true
            let a1 = cc.moveTo(this.moveSpeed, desPos)
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

    // update (dt) {}
}
