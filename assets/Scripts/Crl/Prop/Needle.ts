import PlayerDataMgr from "../../Libs/PlayerDataMgr";
import Utility from "../../Mod/Utility";
import LevelBase from "../Level/LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Needle extends cc.Component {

    @property
    lostHead: boolean = false
    @property
    onceTrigger: boolean = false
    @property
    isAwake: boolean = true
    @property
    twiceRemove: boolean = false

    needle: cc.Node = null
    pointNode: cc.Node = null

    isTouching: boolean = false

    switchState: number = 0
    myDir: cc.Vec2 = cc.v2(0, 0)
    middlePos: cc.Vec2 = cc.v2(0, 0)
    touchStartPos: cc.Vec2 = cc.v2(0, 0)
    needleStartPos: cc.Vec2 = cc.v2(0, 0)

    myId: number = 0
    needleLength: number = 0

    onLoad() {
        this.myId = this.node.parent.children.indexOf(this.node)
        this.needle = this.node.getChildByName('needle')
        this.myDir = cc.v2(this.needle.right.x, this.needle.right.y)
        this.pointNode = this.node.getChildByName('pointNode')
        let lastPoint = this.pointNode.children[this.pointNode.childrenCount - 1]
        this.needleLength = Utility.getWorldDis(lastPoint, this.needle)
        this.middlePos = this.needle.getPosition().add(this.myDir.mul(this.needleLength / 2))
        this.needleStartPos = this.needle.getPosition()

        this.needle.width += 100
    }

    start() {
        this.needle.on(cc.Node.EventType.TOUCH_START, this.touchStart, this)
        this.needle.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this)
        this.needle.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this)
        this.needle.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this)
    }

    touchStart(event: cc.Event.EventTouch) {
        if (this.isTouching || !LevelBase.Share.canTouch || this.lostHead || !this.isAwake) return
        this.isTouching = true

        let pos = event.getLocation()
        this.touchStartPos = pos
    }

    touchMove(event: cc.Event.EventTouch) {
        if (!LevelBase.Share.canTouch || this.lostHead || !this.isAwake) return
        let pos = event.getLocation()

        let touchDir = pos.sub(this.touchStartPos).normalizeSelf()
        let angle = cc.misc.radiansToDegrees(touchDir.angle(this.myDir))
        let isRight = Math.abs(angle) <= 90

        let dt = pos.sub(this.touchStartPos).mag()
        dt = dt > 30 ? 30 : dt
        dt = isRight ? dt : -dt

        let desPos = this.needle.getPosition().add(this.myDir.mul(dt))
        if (desPos.sub(this.middlePos).mag() < this.needleLength / 2)
            this.needle.setPosition(desPos)

        this.checkIsTrigger()
        this.touchStartPos = pos
    }

    touchEnd(event: cc.Event.EventTouch) {
        if (!LevelBase.Share.canTouch || this.lostHead || !this.isAwake) return
        this.isTouching = false
    }

    checkIsTrigger() {
        for (let i = 0; i < this.pointNode.childrenCount; i++) {
            let p = this.pointNode.children[i]
            if (p.active && Utility.getWorldDis(p, this.needle) <= 50) {
                if (this.onceTrigger) {
                    this.node.active = false
                    this.switchState = 2
                } else {
                    this.switchState = i + 1
                    this.needle.setPosition(p.getPosition())
                    if (this.twiceRemove && this.switchState == 2) {
                        this.node.active = false
                    }
                }

                this.pointNode.children.forEach((c) => { c.active = true })
                p.active = false
                LevelBase.Share.triggerNeedle(this.myId, i)
                break
            }
        }
        if (this.switchState != 0) {
            if (this.needle.getPosition().sub(this.needleStartPos).mag() <= 20) {
                this.switchState = 0
                this.needle.setPosition(this.needleStartPos)
                this.pointNode.children.forEach((c) => { c.active = true })
            }
        }
    }

    update(dt) {
        if (this.node.getComponentInChildren(cc.RigidBody)) {
            this.node.getComponentInChildren(cc.RigidBody).syncPosition(true)
        }
    }
}
