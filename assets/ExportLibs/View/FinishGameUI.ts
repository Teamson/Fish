import WxApi from "../../Scripts/Libs/WxApi";
import AdMgr from "../../Scripts/Mod/AdMgr";
import Utility from "../../Scripts/Mod/Utility";
import JJMgr, { ExportDir } from "../ExportUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FinishGameUI extends cc.Component {

    @property(cc.Node)
    rootNode: cc.Node = null

    navId: number = 0

    // onLoad () {}

    start() {

    }

    showUI(callback?: Function, param?: any) {
        if (param && param.posY) {
            this.rootNode.y = param.posY
        }
        this.node.active = true
    }

    onEnable() {
        this._init()
        this.chushihuaNav()
    }

    onDisable() {
        this.unscheduleAllCallbacks()
    }

    _init() {
        this.navId = 0
    }

    closeCB() {
        this.node.active = false
    }

    cno(index: number) {
        let item: cc.Node = this.rootNode.children[index]
        let icon = item.getChildByName('icon').getComponent(cc.Sprite) as cc.Sprite
        JJMgr.instance.loadImgByUrl(icon, JJMgr.instance.navigateAppArr[this.navId].icon)
        let id = this.navId
        item.off(cc.Node.EventType.TOUCH_END)
        item.on(cc.Node.EventType.TOUCH_END, (event) => { this.tiaozhuanCB(event, id) }, this)

        this.navId++
        if (this.navId >= JJMgr.instance.navigateAppArr.length) {
            this.navId = 0
        }
    }

    tiaozhuanCB(event, id) {
        console.log('click id:', id)
        WxApi.aldEvent('结算页 6 个 icon-总点击数')
        JJMgr.instance.NavigateApp(id, () => {
            JJMgr.instance.showExportUI(ExportDir.VIEW_FULLGAMEUI, null, () => {
                AdMgr.instance.showBanner()
            })
        }, () => {
            WxApi.aldEvent('结算页 6 个 icon-总跳转数')
        })

        let index = this.rootNode.children.indexOf(event.target)
        this.cno(index)
    }
    chushihuaNav() {
        let rArr: number[] = [0, 1, 2, 3, 4, 5]
        rArr = Utility.shuffleArr(rArr)
        let randNum: number = Math.floor(Math.random() * 6)
        for (let i = 0; i < 6; i++) {
            let item: cc.Node = this.rootNode.children[rArr[0]]
            rArr.splice(rArr.indexOf(rArr[0]), 1)
            let icon = item.getChildByName('icon').getComponent(cc.Sprite) as cc.Sprite
            let finger = item.getChildByName('finger')
            JJMgr.instance.loadImgByUrl(icon, JJMgr.instance.navigateAppArr[this.navId].icon)
            finger.active = randNum == i
            let id = this.navId
            item.off(cc.Node.EventType.TOUCH_END)
            item.on(cc.Node.EventType.TOUCH_END, (event) => { this.tiaozhuanCB(event, id) }, this)

            this.navId++
        }
    }


    // update (dt) {}
}
