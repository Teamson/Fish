import JJMgr from "../../ExportLibs/ExportUtils";
import LevelBase from "../Crl/Level/LevelBase";
import PlayerAni from "../Crl/PlayerAni";
import PlayerDataMgr from "../Libs/PlayerDataMgr";
import TimeCountMgr from "../Libs/TimeCountMgr";
import WxApi from "../Libs/WxApi";
import AdMgr from "../Mod/AdMgr";
import ShareMgr from "../Mod/ShareMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameUI extends cc.Component {

    @property(cc.Node)
    GetPowerUI: cc.Node = null

    @property(cc.Label)
    powerNum: cc.Label = null
    @property(cc.Label)
    powerTime: cc.Label = null

    @property(cc.Label)
    gradeNum: cc.Label = null
    @property(cc.Label)
    tipsNum: cc.Label = null

    @property(PlayerAni)
    NextPlayerAni: PlayerAni = null
    @property(cc.Label)
    lvNum: cc.Label = null
    @property(cc.ProgressBar)
    lvBar: cc.ProgressBar = null
    @property(cc.Node)
    lvNode: cc.Node = null

    onLoad() { }

    start() {
        this.lvNode.active = PlayerDataMgr.getPlayerLv() < 5
        this.lvNum.string = PlayerDataMgr.getPlayerLv().toString()
        this.lvBar.progress = PlayerDataMgr.getNextLvPer()
        let nextLv = PlayerDataMgr.getPlayerLv()
        this.NextPlayerAni.changeSkin(nextLv <= 4 ? nextLv : 4)
        
        AdMgr.instance.hideBanner()
        if (WxApi.isValidBanner() && JJMgr.instance.exportCfg.front_main_banner_switch) {
            AdMgr.instance.showBanner()
        }
    }

    getPowerBtnCB() {
        if (LevelBase.Share.isGameOver) return
        this.GetPowerUI.active = true
    }

    skipBtnCB() {
        if (LevelBase.Share.isGameOver) return
        let cb = () => {
            LevelBase.Share.winCB()
        }
        ShareMgr.instance.shareGame(cb)
    }

    tipsBtnCB() {

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
        this.gradeNum.string = PlayerDataMgr.getPlayerData().grade.toString()
        this.tipsNum.string = PlayerDataMgr.getPlayerData().tipsNum.toString()
    }
}
