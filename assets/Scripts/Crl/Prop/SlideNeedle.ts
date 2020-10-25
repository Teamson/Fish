
const { ccclass, property } = cc._decorator;

@ccclass
export default class SlideNeedle extends cc.Component {
    @property
    topY:number = 0
    @property
    bottomY:number = 0

    validTouch: boolean = true
    moveCB: Function = null
    touchStartPos: cc.Vec2 = cc.v2(0, 0)

    // onLoad () {}

    start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this)
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this)
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this)
    }

    touchStart(event: cc.Event.EventTouch) {
        if (!this.validTouch) return
        let pos = event.getLocation()
        this.touchStartPos = pos
    }

    touchMove(event: cc.Event.EventTouch) {
        if (!this.validTouch) return

        let pos = event.getLocation()
        let dty = pos.y - this.touchStartPos.y
        if (dty > 30) dty = 30
        this.node.y += dty
        if (this.node.y < this.bottomY) {
            this.node.y = this.bottomY
            return
        }
        if (this.node.y > this.topY) {
            this.node.y = this.topY
            return
        }

        this.moveCB && this.moveCB()
        this.touchStartPos = pos
    }

    touchEnd(event: cc.Event.EventTouch) {
        if (!this.validTouch) return
    }

    // update (dt) {}
}
