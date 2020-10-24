
const { ccclass, property } = cc._decorator;

@ccclass
export default class ScaleLoop extends cc.Component {

    @property
    originScale: number = 1
    @property
    targetScale: number = 1
    @property
    scaleDuration: number = 0.5

    // onLoad () {}

    start() {
        let a1 = cc.scaleTo(this.scaleDuration, this.targetScale)
        let a2 = cc.scaleTo(this.scaleDuration, this.originScale)
        let a3 = cc.sequence(a1, a2)
        this.node.runAction(cc.repeatForever(a3))
    }

    // update (dt) {}
}
