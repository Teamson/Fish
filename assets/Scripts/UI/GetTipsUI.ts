import Utility from "../Mod/Utility";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GetTipsUI extends cc.Component {

    @property(cc.Node)
    rootNode: cc.Node = null

    // onLoad () {}

    start() {

    }

    onEnable() {
        Utility.rootAction(this.rootNode, true, 0.1)
    }

    onDisable() {

    }

    closeGetTipsUI() {
        Utility.rootAction(this.rootNode, false, 0.1, () => { this.node.active = false })
    }

    // update (dt) {}
}
