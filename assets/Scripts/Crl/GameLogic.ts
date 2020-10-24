
const { ccclass, property } = cc._decorator;

@ccclass
export default class GameLogic extends cc.Component {
    public static Share: GameLogic

    @property(cc.Node)
    FinishUI: cc.Node = null
    @property(cc.Node)
    DefeatUI: cc.Node = null

    onLoad() {
        GameLogic.Share = this
    }

    start() {

    }

    showFinishUI() {
        this.FinishUI.active = true
    }

    showDefeatUI() {
        this.DefeatUI.active = true
    }

    // update (dt) {}
}
