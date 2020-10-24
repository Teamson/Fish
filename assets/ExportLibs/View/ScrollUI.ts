import JJMgr, { ExportDir } from "../ExportUtils";
import WxApi from "../../Scripts/Libs/WxApi";
import AdMgr from "../../Scripts/Mod/AdMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ScrollUI extends cc.Component {
    @property(cc.Node)
    item: cc.Node = null

    @property(cc.ScrollView)
    scroll: cc.ScrollView = null

    @property(cc.Node)
    content: cc.Node = null

    @property
    isGameUI: boolean = false

    myNavArr: any[] = []



    // onLoad () {}

    start() {

    }

    showUI(callback?: Function, param?: any) {
        this.node.active = true

        if (this.isGameUI) {
            WxApi.aldEvent('顶部导出栏出现次数')
        } else {
            WxApi.aldEvent('底部导出栏出现次数')
        }
    }

    onEnable() {
        this.myNavArr = [].concat(JJMgr.instance.navigateAppArr)
        this._init()
    }

    onDisable() {
        this.unscheduleAllCallbacks()
        this.content.destroyAllChildren()
    }

    _init() {
        for (let i = 0; i < this.myNavArr.length; i++) {
            let node: cc.Node = cc.instantiate(this.item)
            node.active = true
            node.setPosition(cc.v2(0, 0))
            this.content.addChild(node)

            let icon: cc.Sprite = node.getChildByName('icon').getComponent(cc.Sprite)

            JJMgr.instance.loadImgByUrl(icon, this.myNavArr[i].icon)

            node.on(cc.Node.EventType.TOUCH_END, (event) => { this.navCB(event, i) }, this)
        }
    }

    closeCB() {
        this.node.active = false
    }

    navCB(event: cc.Event, id: number) {
        console.log('click id:', id)

        if (this.isGameUI) {
            WxApi.aldEvent('顶部导出栏-总点击数')
        } else {
            WxApi.aldEvent('底部导出栏-总点击数')
        }
        JJMgr.instance.NavigateApp(id, () => {
            if (this.isGameUI)
                JJMgr.instance.showExportUI(ExportDir.VIEW_FULLGAMEUI, null, () => { AdMgr.instance.showBanner() })
        }, () => {
            if (this.isGameUI) {
                WxApi.aldEvent('顶部导出栏-总成功跳转数')
            } else {
                WxApi.aldEvent('底部导出栏-总成功跳转数')
            }
        })
    }

    // update (dt) {}
}
