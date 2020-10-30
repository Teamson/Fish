import JJMgr from "../../ExportLibs/ExportUtils";
import PlayerDataMgr from "../Libs/PlayerDataMgr";
import WxApi from "../Libs/WxApi";
import AdMgr from "../Mod/AdMgr";
import Utility from "../Mod/Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MadUI extends cc.Component {

    @property(cc.Node)
    closeBtn: cc.Node = null

    @property(cc.ProgressBar)
    pBar: cc.ProgressBar = null

    @property(cc.Node)
    lightPt: cc.Node = null
    @property(cc.Node)
    gun: cc.Node = null

    hadShowBanner: boolean = false
    hadClick: boolean = false

    closeCallback: Function = null
    wuchuType: number = 1
    sectionNum: number = 0

    ptIsPlaying: boolean = false

    // onLoad () {}

    start() {

    }
    onEnable() {

    }

    onDisable() {
        this.closeCallback && this.closeCallback()
        WxApi.isKillBossUI = false
    }

    showUI(closeCallback?: Function) {

        AdMgr.instance.hideBanner()
        this.closeCallback = closeCallback
        this.node.active = true
        this.closeBtn.active = false

        this.sectionNum = Utility.getRandomItemInArr(WxApi.splitSection())

        let randNum: number = Math.random() * 100
        if (randNum <= JJMgr.instance.exportCfg.front_water_type_chance) {
            this.wuchuType = 1
        } else {
            this.wuchuType = 2
        }

        this.schedule(this.jianshaoBar)

        WxApi.isKillBossUI = true
        let self = this

        WxApi.WxOffHide(WxApi.madUICallback)
        WxApi.madUICallback = () => {
            if (WxApi.isKillBossUI) {
                self.unschedule(this.jianshaoBar)
                self.node.active = false

                let num = Math.floor(Math.random() * 300 + 200)
                PlayerDataMgr.changeCoin(num)
                WxApi.OpenAlert('成功领取' + num + '金币')
            }
        }
        WxApi.WxOnHide(WxApi.madUICallback)
    }

    closeCB() {
        this.node.active = false
    }

    closeBtnCB() {
        this.node.active = false
    }

    clickCB() {
        if (!this.hadClick) {
            this.hadClick = true
            this.scheduleOnce(this.closeCB, JJMgr.instance.exportCfg.front_water_hide / 1000)

            Utility.delayActive(this.closeBtn, JJMgr.instance.exportCfg.front_close_appear / 1000, this)
        }

        if (!this.hadShowBanner) {
            if (this.wuchuType == 1) {
                this.hadShowBanner = true
                this.scheduleOnce(() => {
                    this.unschedule(this.jianshaoBar)
                    AdMgr.instance.showBanner()
                }, 1)
            } else {
                if (this.pBar.progress * 100 >= this.sectionNum) {
                    this.hadShowBanner = true
                    this.unschedule(this.jianshaoBar)
                    AdMgr.instance.showBanner()
                }
            }
        }
        this.pBar.progress += 0.1
        if (this.pBar.progress > 0.7) {
            this.pBar.progress = 0.7
        }

        if (!this.ptIsPlaying) {
            this.gun.angle = -30
            this.gun.stopAllActions()
            this.gun.runAction(cc.rotateTo(0.2, 0))

            this.ptIsPlaying = true
            this.lightPt.active = true
            this.scheduleOnce(() => {
                this.lightPt.active = false
                this.ptIsPlaying = false
            }, 0.1)
        }
    }

    jianshaoBar() {
        this.pBar.progress -= 0.003
        if (this.pBar.progress < 0) {
            this.pBar.progress = 0
        }
    }

    // update (dt) {}
}
