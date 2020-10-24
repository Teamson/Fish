import Utility from "../../Mod/Utility";
import LevelBase from "../Level/LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HeadNode extends cc.Component {

    @property(cc.Node)
    icon: cc.Node = null

    @property(cc.Label)
    num: cc.Label = null

    @property
    count: number = 1

    onLoad() { }

    start() {
        this.icon.on(cc.Node.EventType.TOUCH_START, this.touchStart, this)
        this.icon.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this)
        this.icon.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this)
        this.icon.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this)
    }

    touchStart(event: cc.Event.EventTouch) {

    }
    touchMove(event: cc.Event.EventTouch) {
        if (this.count <= 0) return
        let pos = event.getLocation()
        pos = this.node.convertToNodeSpaceAR(pos)
        this.icon.setPosition(pos)
    }
    touchEnd(event: cc.Event.EventTouch) {
        if (this.count <= 0) return
        for (let i = 0; i < LevelBase.Share.NeedleNode.childrenCount; i++) {
            let n = LevelBase.Share.NeedleNode.children[i]
            let head = n.getChildByName('needle').getChildByName('yxz_dj1_2')
            if (head.active == false && Utility.getWorldDis(head, this.icon) <= 50) {
                head.active = true
                this.count--
                LevelBase.Share.getNeedleCrlById(i).lostHead = false
                break
            }
        }
        this.icon.setPosition(cc.v2(0, 10))
    }


    update(dt) {
        this.num.string = this.count.toString()
    }
}
