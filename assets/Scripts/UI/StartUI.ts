import PlayerDataMgr from "../Libs/PlayerDataMgr";
import TimeCountMgr from "../Libs/TimeCountMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StartUI extends cc.Component {

    @property(cc.Node)
    GetFishUI: cc.Node = null
    @property(cc.Node)
    GetPowerUI: cc.Node = null
    @property(cc.Node)
    GetTipsUI: cc.Node = null

    @property(cc.Label)
    powerNum: cc.Label = null
    @property(cc.Label)
    powerTime: cc.Label = null

    @property(cc.Label)
    tipsNum: cc.Label = null

    @property(cc.Label)
    gradeNum: cc.Label = null

    @property(cc.Label)
    fishLvNum: cc.Label = null

    @property(cc.Label)
    leftLvNum: cc.Label = null

    onLoad() { }

    start() {

    }

    startGameCB() {
        cc.director.loadScene('GameScene')
    }

    getFishBtnCB() {

    }

    getPowerBtnCB() {

    }

    getTipsBtnCB() {

    }

    calculatePowerTime() {
        let t = TimeCountMgr.Share.tCount
        let m = Math.floor(t / 60)
        let s = Math.floor(t - m * 60)
        this.powerTime.string = m.toString() + ':' + s.toString()
        this.powerNum.string = PlayerDataMgr.getPlayerData().power.toString()
        this.powerTime.node.active = PlayerDataMgr.getPlayerData().power < PlayerDataMgr.powerMax
    }

    update(dt) {
        this.calculatePowerTime()
    }
}
