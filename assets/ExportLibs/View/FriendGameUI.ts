import JJMgr, { ExportDir } from "../ExportUtils";
import WxApi from "../../Scripts/Libs/WxApi";
import AdMgr from "../../Scripts/Mod/AdMgr";
import Utility from "../../Scripts/Mod/Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FriendGameUI extends cc.Component {

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
        WxApi.aldEvent('好友都在玩的爆款游戏弹窗出现次数')
    }

    onEnable() {
        this.myNavArr = [].concat(JJMgr.instance.navigateAppArr)
        this._init()
        this.node.getChildByName('closeBtn').active = false
        this.scheduleOnce(() => {
            this.node.getChildByName('closeBtn').active = true
            AdMgr.instance.hideBanner()
            WxApi.bannerWuChu1()
        }, 1.5)
    }

    onDisable() {
        clearTimeout(WxApi.bannerTO1)
        AdMgr.instance.hideBanner()
        this.unscheduleAllCallbacks()
        this.content.destroyAllChildren()
        this.closeCallback && this.closeCallback()
        this.closeCallback = null
    }

    _init() {
        for (let i = 0; i < this.myNavArr.length; i++) {
            let node: cc.Node = cc.instantiate(this.item)
            node.active = true
            this.content.addChild(node)

            let name: cc.Label = node.getChildByName('name').getComponent(cc.Label)
            let icon: cc.Sprite = node.getChildByName('icon').getComponent(cc.Sprite)

            name.string = JJMgr.instance.getSubtitle(i)
            JJMgr.instance.loadImgByUrl(icon, this.myNavArr[i].icon)

            node.on(cc.Node.EventType.TOUCH_END, (event) => { this.navCB(event, i) }, this)
        }
    }

    closeCB() {
        this.node.active = false
    }

    navCB(event: cc.Event, id: number) {
        console.log('click id:', id)
        WxApi.aldEvent('好友都在玩的爆款游戏弹窗-总点击数')
        JJMgr.instance.NavigateApp(id, () => {
            JJMgr.instance.showExportUI(ExportDir.VIEW_FULLGAMEUI)
        }, () => {
            WxApi.aldEvent('好友都在玩的爆款游戏弹窗-总成功跳转数')
        })
    }

    // update (dt) {}
}
