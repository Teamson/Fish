import Level1 from "./Level/Level1";
import LevelBase from "./Level/LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    pointNode: cc.Node = null

    gotMeat: boolean = false

    moveSpeed: number = 1
    pointIndex: number = 0

    onLoad() {
        this.pointNode = LevelBase.Share.node.getChildByName('PointNode')
    }

    start() {

    }

    //吃掉食物
    eatMean() {
        this.gotMeat = true
    }

    moveToPoint(index: number) {
        return new Promise((rs, rj) => {
            let a1 = cc.moveTo(this.moveSpeed, this.pointNode.children[index].getPosition())
            let a2 = cc.callFunc(() => {
                this.pointIndex = index
                rs()
            })
            let a3 = cc.sequence(a1, a2)
            this.node.runAction(a3)
        })
    }

    // update (dt) {}
}
