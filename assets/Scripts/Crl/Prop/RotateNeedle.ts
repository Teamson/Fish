
const { ccclass, property } = cc._decorator;

@ccclass
export default class RotateNeedle extends cc.Component {

    @property(cc.Node)
    needle: cc.Node = null

    touchStartPos: cc.Vec2 = cc.v2(0, 0)

    // onLoad () {}

    start() {
        this.needle.on(cc.Node.EventType.TOUCH_START, this.touchStart, this)
        this.needle.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this)
        this.needle.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this)
        this.needle.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this)
    }

    touchStart(event: cc.Event.EventTouch) {
        let pos = event.getLocation()
        this.touchStartPos = pos
    }
    touchMove(event: cc.Event.EventTouch) {
        let pos = event.getLocation()

        this.needle.getComponent(cc.RigidBody).applyAngularImpulse(pos.x < this.touchStartPos.x ? 50000 : -50000, true)

        this.touchStartPos = pos
    }
    touchEnd(event: cc.Event.EventTouch) {

    }

    // update (dt) {}
}
