import JJMgr, { ExportDir } from "../../ExportLibs/ExportUtils";
import PlayerDataMgr from "../Libs/PlayerDataMgr";
import TimeCountMgr from "../Libs/TimeCountMgr";
import WxApi from "../Libs/WxApi";
import AdMgr from "../Mod/AdMgr";
import ShareMgr from "../Mod/ShareMgr";
import Utility from "../Mod/Utility";
import MadUI from "./MadUI";

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
    @property(cc.Node)
    nameNode: cc.Node = null

    @property(cc.Label)
    leftLvNum: cc.Label = null


    @property(cc.Node)
    drawBtn: cc.Node = null
    @property(cc.Node)
    moreGameBtn: cc.Node = null
    @property(cc.Node)
    navNode: cc.Node = null

    @property(MadUI)
    madCrl: MadUI = null

    onLoad() { }

    start() {
        this.initFishData()

        if (!WxApi.isFromSkinUI) {
            JJMgr.instance.showExportUI(ExportDir.VIEW_FRIENDGAME, null, () => {
                if (!WxApi.firstStartUI) {
                    WxApi.firstStartUI = true
                    JJMgr.instance.showExportUI(ExportDir.VIEW_RECOMMENDUI, null, () => {
                        AdMgr.instance.showBanner()
                    })
                } else {
                    AdMgr.instance.showBanner()
                }
            })
        } else {
            AdMgr.instance.showBanner()
            WxApi.isFromSkinUI = false
        }

        this.chushihuaNav()
        for (let i = 0; i < this.navNode.childrenCount; i++) {
            Utility.rotateLoop(this.navNode.children[i], 0.5, 8)
        }
        this.schedule(this.chushihuaNav, 3)
        this.navNode.active = WxApi.getIsExportValid()
        this.drawBtn.active = WxApi.getIsExportValid()
        this.moreGameBtn.active = WxApi.getIsExportValid()
    }

    initFishData() {
        this.fishLvNum.string = PlayerDataMgr.getPlayerLv().toString()
        for (let i = 0; i < this.nameNode.childrenCount; i++) {
            this.nameNode.children[i].active = i + 1 == PlayerDataMgr.getPlayerLv()
        }
        if (PlayerDataMgr.getLeftLv() == 0) {
            this.leftLvNum.node.parent.active = false
        } else {
            this.leftLvNum.string = PlayerDataMgr.getLeftLv().toString()
        }
    }

    startGameCB() {
        if (PlayerDataMgr.getPlayerData().power > 0) {
            PlayerDataMgr.changePower(-1)
            WxApi.aldEvent('点击开始游戏按钮人数')
            JJMgr.instance.closeAllExportUI()
            let cb = () => {
                let cb1 = () => {
                    JJMgr.instance.showExportUI(ExportDir.VIEW_FULLGAMEUI, null, () => {
                        cc.director.loadScene('GameScene')
                    })
                }
                let curG = PlayerDataMgr.getPlayerData().grade
                let gGap = (curG - JJMgr.instance.exportCfg.front_water_start_level) % JJMgr.instance.exportCfg.front_water_level_interval == 0 &&
                    curG >= JJMgr.instance.exportCfg.front_water_start_level

                if (gGap && !AdMgr.instance.isBannerError && WxApi.isValidBanner()) {
                    this.madCrl.showUI(cb1)
                } else {
                    cc.director.loadScene('GameScene')
                }
            }
            if (WxApi.isValidBanner() && JJMgr.instance.exportCfg.front_start_game_switch && !AdMgr.instance.videoIsError && !WxApi.firstShowVideo) {
                WxApi.firstShowVideo = true
                AdMgr.instance.videoCloseCallback = cb
                AdMgr.instance.showVideo(() => { })
            } else {
                cb()
            }
        } else {
            this.getPowerBtnCB()
        }
    }

    getPower() {
        let cb = () => {
            PlayerDataMgr.changePower(3)
        }
        ShareMgr.instance.shareGame(cb)
    }

    getFishBtnCB() {
        this.GetFishUI.active = true
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

    moreGameBtnCB() {
        WxApi.aldEvent('点我有惊喜按钮点击')
        JJMgr.instance.showExportUI(ExportDir.VIEW_FULLGAMEUI, null, () => {
            JJMgr.instance.showExportUI(ExportDir.VIEW_RECOMMENDUI, null, () => {
                JJMgr.instance.showExportUI(ExportDir.VIEW_FRIENDGAME, null, () => {
                    AdMgr.instance.showBanner()
                })
            })
        })
    }

    drawBtnCB() {
        WxApi.aldEvent('左边抽屉导出按钮点击')
        JJMgr.instance.showExportUI(ExportDir.VIEW_DRAWUI)
    }

    chushihuaNav() {
        let arr: number[] = []
        for (let i = 0; i < JJMgr.instance.navigateAppArr.length; i++) {
            arr.push(i)
        }
        arr = Utility.shuffleArr(arr)
        arr = arr.splice(0, 4)
        for (let i = 0; i < this.navNode.childrenCount; i++) {
            let item: cc.Node = this.navNode.children[i]
            let icon: cc.Sprite = item.getChildByName('icon').getComponent(cc.Sprite)
            let name: cc.Label = item.getChildByName('name').getComponent(cc.Label)
            name.string = JJMgr.instance.getSubtitle(arr[i])
            JJMgr.instance.loadImgByUrl(icon, JJMgr.instance.navigateAppArr[arr[i]].icon)

            item.off(cc.Node.EventType.TOUCH_END)
            item.on(cc.Node.EventType.TOUCH_END, (event) => { this.tiaozhuanCB(event, arr[i]) }, this)
        }
    }
    tiaozhuanCB(event, id) {
        console.log('click id:', id)
        WxApi.aldEvent('首页导出位—总点击数')
        JJMgr.instance.NavigateApp(id, () => {
            JJMgr.instance.showExportUI(ExportDir.VIEW_RECOMMENDUI, null, () => {
                AdMgr.instance.showBanner()
            })
        }, () => {
            WxApi.aldEvent('首页导出位—总成功跳转数')
        })
    }
}
