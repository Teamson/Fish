import JJMgr, { ExportDir } from "../ExportUtils";
import WxApi from "../../Scripts/Libs/WxApi";
import AdMgr from "../../Scripts/Mod/AdMgr";
import Utility from "../../Scripts/Mod/Utility";
import PlayerDataMgr from "../../Scripts/Libs/PlayerDataMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RecommendUI extends cc.Component {
    @property(cc.Node)
    item: cc.Node = null

    @property(cc.ScrollView)
    scroll: cc.ScrollView = null

    @property(cc.Node)
    content: cc.Node = null

    myNavArr: any[] = []

    closeCallback: Function = null

    // onLoad () {}

    start() {

    }

    showUI(callback?: Function, param?: any) {
        if (callback) {
            this.closeCallback = callback
        }
        this.node.active = true
        WxApi.aldEvent('热门推荐全屏幕导出页出现次数')
    }

    onEnable() {
        this.myNavArr = [].concat(JJMgr.instance.navigateAppArr)
        this._init()

        AdMgr.instance.hideBanner()
        if (JJMgr.instance.exportCfg.front_remen_screen_auto) {
            this.randomNav()
        }
        this.node.getChildByName('continueBtn').active = false
        if (WxApi.isValidBanner() && PlayerDataMgr.getPlayerData().grade >= JJMgr.instance.exportCfg.front_continuegame_start_level) {
            this.node.getChildByName('continueBtn').active = true
            WxApi.bannerWuChu2()
        }
    }

    onDisable() {
        clearTimeout(WxApi.bannerTO2)
        AdMgr.instance.hideBanner()
        this.unscheduleAllCallbacks()
        this.content.destroyAllChildren()
        this.closeCallback && this.closeCallback()
        this.closeCallback = null
    }

    _init() {
        let fingerNum: number = Math.floor(Math.random() * 6)
        for (let i = 0; i < this.myNavArr.length; i++) {
            let node: cc.Node = cc.instantiate(this.item)
            node.active = true
            this.content.addChild(node)

            let name: cc.Label = node.getChildByName('name').getComponent(cc.Label)
            let icon: cc.Sprite = node.getChildByName('icon').getComponent(cc.Sprite)
            let finger: cc.Node = node.getChildByName('finger')

            name.string = JJMgr.instance.getSubtitle(i)
            JJMgr.instance.loadImgByUrl(icon, this.myNavArr[i].icon)
            finger.active = i == fingerNum

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
        WxApi.aldEvent('热门推荐全屏幕导出页-总点击数')
        JJMgr.instance.NavigateApp(id, () => { }, () => {
            WxApi.aldEvent('热门推荐全屏幕导出页-总成功跳转数')
        })
    }

    update(dt) {

    }
}
