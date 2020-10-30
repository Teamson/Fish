
const { ccclass, property } = cc._decorator;

@ccclass
export default class GuideFinger extends cc.Component {

    @property(cc.Vec2)
    startPosArr: cc.Vec2[] = []
    @property(cc.Vec2)
    endPosArr: cc.Vec2[] = []

    step: number = 0

    onLoad() { }

    start() {

    }

    stepAction() {
        let sp = this.startPosArr[this.step]
        let ep = this.endPosArr[this.step]
        this.node.stopAllActions()
        let a1 = cc.callFunc(() => { this.node.setPosition(sp) })
        let a2 = cc.moveTo(1.5, ep)
        let a3 = cc.sequence(a1, a2)
        this.node.runAction(cc.repeatForever(a3))
    }

    update(dt) { }
}
