import PlayerDataMgr from "../Libs/PlayerDataMgr";
import WxApi from "../Libs/WxApi";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameLogic extends cc.Component {
    public static Share: GameLogic

    @property(cc.Node)
    LevelNode: cc.Node = null
    @property(cc.Node)
    FinishUI: cc.Node = null
    @property(cc.Node)
    DefeatUI: cc.Node = null

    onLoad() {
        GameLogic.Share = this
        this.addLevelNode()
    }

    start() {
        if (PlayerDataMgr.getPlayerData().grade <= 10)
            WxApi.aldEvent('第' + PlayerDataMgr.getPlayerData().grade + '关成功进入游戏')
    }

    addLevelNode() {
        // cc.loader.loadRes('Prefabs/LevelNode/Level' + PlayerDataMgr.getPlayerData().grade, cc.Prefab, (err, prefab) => {
        //     if (prefab) {
        //         let p = cc.instantiate(prefab)
        //         this.LevelNode.addChild(p)
        //     }
        // })
        this.LevelNode.children[PlayerDataMgr.getPlayerData().grade - 1].active = true
    }

    showFinishUI() {
        this.FinishUI.active = true
    }

    showDefeatUI() {
        this.DefeatUI.active = true
    }

    // update (dt) {}
}
