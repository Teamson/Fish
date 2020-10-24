
const { ccclass, property } = cc._decorator;

@ccclass
export default class AutoScroll extends cc.Component {

    @property
    scrollSpeed: number = 2
    @property
    isVertical: boolean = true

    scroll: cc.ScrollView = null

    isReady: boolean = false
    isDown: boolean = true

    onLoad() {
        this.scroll = this.node.getComponent(cc.ScrollView)
    }

    start() {
        this.scheduleOnce(() => { this.isReady = true }, 1)
    }

    onEnable() {
        this.scheduleOnce(() => { this.isReady = true }, 1)
    }

    onDisable() {
        this.isReady = false
    }

    update(dt) {
        if (!this.isReady || this.scroll.isScrolling()) return

        let curV = this.isVertical ? this.scroll.getScrollOffset().y : -this.scroll.getScrollOffset().x
        let maxV = this.isVertical ? this.scroll.getMaxScrollOffset().y : this.scroll.getMaxScrollOffset().x
        if (this.isDown) {
            if (curV < maxV) {
                curV += 2
                if (this.isVertical) {
                    this.scroll.scrollToOffset(cc.v2(0, curV))
                } else {
                    this.scroll.scrollToOffset(cc.v2(curV, 0))
                }
            } else {
                this.isDown = false
                this.isReady = false
                this.scheduleOnce(() => { this.isReady = true }, 1)
            }
        } else {
            if (curV > 0) {
                curV -= 2
                if (this.isVertical) {
                    this.scroll.scrollToOffset(cc.v2(0, curV))
                } else {
                    this.scroll.scrollToOffset(cc.v2(curV, 0))
                }
            } else {
                this.isDown = true
                this.isReady = false
                this.scheduleOnce(() => { this.isReady = true }, 1)
            }
        }
    }

}
