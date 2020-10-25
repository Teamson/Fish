
const { ccclass, property } = cc._decorator;

@ccclass
export default class ThreeNeedle extends cc.Component {

    @property
    topY:number = 0
    @property
    bottomY:number = 0

    validTouch: boolean = false

    touchStartPos: cc.Vec2 = cc.v2(0, 0)

    isClosed: boolean = true
    closeCB: Function = null
    openCB: Function = null

    // onLoad () {}

    start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this)
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this)
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this)
    }

    touchStart(event: cc.Event.EventTouch) {
        let pos = event.getLocation()
        this.touchStartPos = pos
        pos = this.node.convertToNodeSpaceAR(pos)
        this.validTouch = cc.Intersection.pointInPolygon(pos, this.getComponent(cc.PolygonCollider).points)
    }

    touchMove(event: cc.Event.EventTouch) {
        if (!this.validTouch) return
        let pos = event.getLocation()

        let dty = pos.y - this.touchStartPos.y
        if (dty > 30) dty = 30
        this.node.y += dty
        if (this.node.y < this.bottomY) {
            this.node.y = this.bottomY
            !this.isClosed && this.closeCB && this.closeCB()
            this.validTouch = false
            this.isClosed = true
        }
        if (this.node.y > this.topY) {
            this.node.y = this.topY
            this.isClosed && this.openCB && this.openCB()
            this.validTouch = false
            this.isClosed = false
        }

        this.touchStartPos = pos
    }

    touchEnd(event: cc.Event.EventTouch) {
        if (!this.validTouch) return
        this.validTouch = false
    }

    // update (dt) {}
}
