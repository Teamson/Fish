import JJMgr, { ExportDir } from "../../ExportLibs/ExportUtils";
import PlayerDataMgr from "../Libs/PlayerDataMgr";
import TimeCountMgr from "../Libs/TimeCountMgr";
import WxApi from "../Libs/WxApi";
import AdMgr from "../Mod/AdMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FinishUI extends cc.Component {

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

    @property(cc.Node)
    nextBtn: cc.Node = null

    onLoad() { }

    start() {

        if (PlayerDataMgr.getPlayerData().grade <= 10)
            WxApi.aldEvent('第' + PlayerDataMgr.getPlayerData().grade + '关通关成功')

        JJMgr.instance.showExportUI(ExportDir.VIEW_FINISHGAMEUI, { posY: 0 })
        AdMgr.instance.hideBanner()
        WxApi.fixBtnTouchPos(this.nextBtn, -250, 0, this)
    }

    backCB() {
        PlayerDataMgr.getPlayerData().grade++
        if (PlayerDataMgr.getPlayerData().grade > 20) PlayerDataMgr.getPlayerData().grade = 1
        PlayerDataMgr.setPlayerData()
        JJMgr.instance.showExportUI(ExportDir.VIEW_RECOMMENDUI, null, () => {
            AdMgr.instance.hideBanner()
            JJMgr.instance.closeAllExportUI()
            cc.director.loadScene('StartScene')
        })
    }

    nextCB() {
        if (PlayerDataMgr.getPlayerData().power > 0) {
            PlayerDataMgr.getPlayerData().grade++
            if (PlayerDataMgr.getPlayerData().grade > 20) PlayerDataMgr.getPlayerData().grade = 1
            PlayerDataMgr.changePower(-1)
            JJMgr.instance.showExportUI(ExportDir.VIEW_RECOMMENDUI, null, () => {
                AdMgr.instance.hideBanner()
                JJMgr.instance.closeAllExportUI()
                cc.director.loadScene('GameScene')
            })
        }
        else {
            this.getPowerBtnCB()
        }
    }

    getPowerBtnCB() {
        this.GetPowerUI.active = true
    }

    getTipsBtnCB() {
        this.GetTipsUI.active = true
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
