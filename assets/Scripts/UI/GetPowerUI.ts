import PlayerDataMgr from "../Libs/PlayerDataMgr";
import AdMgr from "../Mod/AdMgr";
import ShareMgr from "../Mod/ShareMgr";
import Utility from "../Mod/Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GetPowerUI extends cc.Component {

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

    getPowerBtnCB() {
        let cb = () => {
            PlayerDataMgr.changePower(3)
            this.closeGetPowerUI()
        }
        ShareMgr.instance.shareGame(cb)
    }

    closeGetPowerUI() {
        Utility.rootAction(this.rootNode, false, 0.1, () => { this.node.active = false })
    }

    // update (dt) {}
}
