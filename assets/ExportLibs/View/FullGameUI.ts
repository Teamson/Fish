import JJHttp from "../ExportHttpUtils";
import JJMgr from "../ExportUtils";
import Utility from "../../Scripts/Mod/Utility";
import WxApi from "../../Scripts/Libs/WxApi";
import AdMgr from "../../Scripts/Mod/AdMgr";
import PlayerDataMgr from "../../Scripts/Libs/PlayerDataMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FullGameUI extends cc.Component {

    @property(cc.Node)
    item: cc.Node = null

    @property(cc.ScrollView)
    scroll: cc.ScrollView = null

    @property(cc.Node)
    content: cc.Node = null

    myNavArr: any[] = []

    hotArr: number[] = []

    closeCallback: Function = null

    // onLoad () {}

    start() {

    }

    showUI(callback?: Function, param?: any) {
        if (callback) {
            this.closeCallback = callback
        }
        this.node.active = true
        WxApi.aldEvent('网红爆款全屏幕导出页出现次数')
    }

    onEnable() {
        this.myNavArr = [].concat(JJMgr.instance.navigateAppArr)
        this.getHotRandArr()
        this._init()
        if (JJMgr.instance.exportCfg.front_all_screen_auto) {
            this.randomNav()
        }
        Utility.delayActive(this.node.getChildByName('continueBtn'), JJMgr.instance.exportCfg.front_export_delay / 1000, this)

        AdMgr.instance.hideBanner()
        this.scheduleOnce(() => {
            WxApi.bannerWuChu2()
        }, JJMgr.instance.exportCfg.front_export_delay / 1000)

        this.node.getChildByName('randomBtn').active = WxApi.isValidBanner() &&
            PlayerDataMgr.getPlayerData().grade >= JJMgr.instance.exportCfg.front_randompaly_start_level
    }

    onDisable() {
        clearTimeout(WxApi.bannerTO2)
        AdMgr.instance.hideBanner()
        this.unscheduleAllCallbacks()
        this.content.destroyAllChildren()
        this.closeCallback && this.closeCallback()
        this.closeCallback = null
    }

    getHotRandArr() {
        this.hotArr = []
        let arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        arr = JJMgr.instance.shuffleArr(arr)
        this.hotArr = arr.slice(0, 3)
    }

    _init() {
        for (let i = 0; i < this.myNavArr.length; i++) {
            let node: cc.Node = cc.instantiate(this.item)
            node.active = true
            this.content.addChild(node)

            let colorBar: cc.Sprite = node.getChildByName('colorBar').getComponent(cc.Sprite)
            let name: cc.Label = node.getChildByName('name').getComponent(cc.Label)
            let icon: cc.Sprite = node.getChildByName('icon').getComponent(cc.Sprite)
            let hot: cc.Node = node.getChildByName('hot')

            JJMgr.instance.loadSpriteFrame('ExportRes/' + (Math.floor(i % 9) + 1), colorBar)
            name.string = JJMgr.instance.getSubtitle(i)
            JJMgr.instance.loadImgByUrl(icon, this.myNavArr[i].icon)
            hot.active = this.hotArr.indexOf(i) != -1

            node.on(cc.Node.EventType.TOUCH_END, (event) => { this.navCB(event, i) }, this)
        }
    }

    continueCB() {
        this.node.active = false
    }

    randomNav() {
        let id = Math.floor(Math.random() * 6)
        this.navCB(null, id)
    }

    navCB(event: cc.Event, id: number) {
        console.log('click id:', id)
        WxApi.aldEvent('网红爆款全屏幕导出页-总点击数')
        JJMgr.instance.NavigateApp(id, () => { }, () => {
            WxApi.aldEvent('网红爆款全屏幕导出页-总成功跳转数')
        })
    }

    // update (dt) {}
}
