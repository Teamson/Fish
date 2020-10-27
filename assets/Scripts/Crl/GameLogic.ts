import PlayerDataMgr from "../Libs/PlayerDataMgr";

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

    }

    addLevelNode() {
        cc.loader.loadRes('Prefabs/LevelNode/Level' + PlayerDataMgr.getPlayerData().grade, cc.Prefab, (err, prefab) => {
            if (prefab) {
                let p = cc.instantiate(prefab)
                this.LevelNode.addChild(p)
            }
        })
    }

    showFinishUI() {
        this.FinishUI.active = true
    }

    showDefeatUI() {
        this.DefeatUI.active = true
    }

    // update (dt) {}
}
