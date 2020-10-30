import JJMgr, { ExportDir } from "../../ExportLibs/ExportUtils";
import PlayerDataMgr from "../Libs/PlayerDataMgr";
import TimeCountMgr from "../Libs/TimeCountMgr";
import WxApi from "../Libs/WxApi";
import AdMgr from "../Mod/AdMgr";
import ShareMgr from "../Mod/ShareMgr";
import Utility from "../Mod/Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DefeatUI extends cc.Component {
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
    rootNode: cc.Node = null
    @property(cc.Node)
    closeBtn: cc.Node = null

    @property(cc.Label)
    reviveTime: cc.Label = null
    timeNum: number = 5

    // onLoad () {}

    start() {
        if (PlayerDataMgr.getPlayerData().grade <= 10)
            WxApi.aldEvent('第' + PlayerDataMgr.getPlayerData().grade + '关通关失败')
        Utility.rootAction(this.rootNode, true, 0.1)

        this.schedule(this.countTime, 1, 4)

        JJMgr.instance.showExportUI(ExportDir.VIEW_FINISHGAMEUI, { posY: 200, one: true })
        AdMgr.instance.hideBanner()
        WxApi.fixBtnTouchPos(this.closeBtn, -550, -350, this)
    }

    countTime() {
        this.timeNum--
        this.reviveTime.string = this.timeNum.toString()
        if (this.timeNum <= 0) {
            //this.closeBtnCB()
        }
    }

    reviveBtnCB() {
        let cb = () => {
            PlayerDataMgr.changePower(2)
            AdMgr.instance.hideBanner()
            JJMgr.instance.closeAllExportUI()
            cc.director.loadScene('GameScene')
        }
        ShareMgr.instance.shareGame(cb)
    }

    closeBtnCB() {
        Utility.rootAction(this.rootNode, false, 0.1, () => {
            JJMgr.instance.showExportUI(ExportDir.VIEW_RECOMMENDUI, null, () => {
                AdMgr.instance.hideBanner()
                JJMgr.instance.closeAllExportUI()
                cc.director.loadScene('StartScene')
            })
        })
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
