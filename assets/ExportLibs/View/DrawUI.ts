import JJMgr, { ExportDir } from "../ExportUtils";
import WxApi from "../../Scripts/Libs/WxApi";
import AdMgr from "../../Scripts/Mod/AdMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DrawUI extends cc.Component {

    @property(cc.Node)
    item: cc.Node = null

    @property(cc.ScrollView)
    scroll: cc.ScrollView = null

    @property(cc.Node)
    content: cc.Node = null

    @property(cc.Node)
    bgNode: cc.Node = null

    myNavArr: any[] = []

    closeCallback: Function = null

    isAutoClose: boolean = false
    hadTouch: boolean = false

    // onLoad () {}

    start() {

    }

    showUI(callback?: Function, param?: any) {
        if (callback) {
            this.closeCallback = callback
        }
        if (param && param.isAutoClose) {
            this.isAutoClose = param.isAutoClose
        }
        WxApi.aldEvent('左边抽屉导出弹窗出现次数')
        this.node.active = true
        this.moveDraw(-375, () => { })
    }

    onEnable() {
        this.myNavArr = [].concat(JJMgr.instance.navigateAppArr)
        this._init()
        if (this.isAutoClose) {
            this.scheduleOnce(() => {
                if (!this.hadTouch)
                    this.closeCB()
            }, 1.5)
        }
    }

    onDisable() {
        this.unscheduleAllCallbacks()
        this.content.destroyAllChildren()
        this.closeCallback && this.closeCallback()
        this.closeCallback = null
        this.bgNode.x = -1000
        this.hadTouch = false
    }

    moveDraw(x: number, cb: Function) {
        let a1 = cc.moveTo(0.2, cc.v2(x, this.bgNode.y))
        let a2 = cc.callFunc(cb)
        this.bgNode.runAction(cc.sequence(a1, a2))
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
        this.moveDraw(-1000, () => {
            this.node.active = false
        })
    }

    navCB(event: cc.Event, id: number) {
        console.log('click id:', id)
        this.hadTouch = true
        WxApi.aldEvent('左边抽屉导出弹窗-总点击数')
        JJMgr.instance.NavigateApp(id, () => {
            JJMgr.instance.showExportUI(ExportDir.VIEW_RECOMMENDUI, null, () => {
                this.scheduleOnce(() => { AdMgr.instance.showBanner() }, 0.1)
            })
        }, () => {
            WxApi.aldEvent('左边抽屉导出弹窗全-总成功跳转数')
        })
    }

    update(dt) {
        if (!this.hadTouch && this.scroll.isScrolling()) {
            this.hadTouch = true
        }
    }
}
