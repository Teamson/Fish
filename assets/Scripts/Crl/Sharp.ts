import Utility from "../Mod/Utility";
import Level1 from "./Level/Level1";
import LevelBase from "./Level/LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Sharp extends cc.Component {

    pointNode: cc.Node = null

    moveSpeed: number = 1

    @property
    pointIndex: number = 0

    onLoad() {
        this.pointNode = LevelBase.Share.node.getChildByName('PointNode')
    }

    start() {

    }

    moveToPoint(index: number) {
        return new Promise((rs, rj) => {
            let desPos = this.pointNode.children[index].getPosition()
            let dis = Utility.getWorldDis(this.pointNode.children[index], this.node)
            let a1 = cc.moveTo(dis / 300/* this.moveSpeed */, desPos)
            let a2 = cc.callFunc(() => {
                this.pointIndex = index
                rs()
            })
            let a3 = cc.sequence(a1, a2)
            this.node.runAction(a3)
        })
    }

    checkEatPlayer() {
        if (!LevelBase.Share.isGameOver) {
            if (Utility.getWorldDis(this.node, LevelBase.Share.playerNode) <= 50) {
                LevelBase.Share.loseCB()
            }
        }
    }

    update(dt) {
        this.checkEatPlayer()
    }
}
