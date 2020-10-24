import Utility from "../Mod/Utility";
import JJMgr from "../../ExportLibs/ExportUtils";
import WxApi from "../Libs/WxApi";

const { ccclass, property } = cc._decorator;

@ccclass
export default class WeChatUI extends cc.Component {

    @property(cc.Node)
    rootNode: cc.Node = null
    @property(cc.Label)
    playerName: cc.Label = null
    @property(cc.Label)
    gameName: cc.Label = null

    playerNames: string[] = ["有个小可爱", "大妈杀手", "神秘靓仔", "超级飞侠乐迪", "几一鸡", "爱喝可乐", "卖葫芦的葫芦娃", "多啦ABCD梦", "坏女孩", "沙雕网友"];

    gameIndex: number = 0

    // onLoad () {}

    start() {

    }

    showUI(callback?: Function, param?: any) {
        this.node.active = true
        WxApi.aldEvent('好友消息提示横幅出现次数')
    }

    onEnable() {
        this.rootNode.runAction(cc.moveBy(0.5, cc.v2(0, -200)))
        this.initData()
    }

    onDisable() {
        this.rootNode.y = cc.view.getVisibleSize().height / 2
    }

    initData() {
        let nArr = [].concat(this.playerNames)
        nArr = Utility.shuffleArr(nArr)
        this.playerName.string = nArr[0]

        this.gameName.string = JJMgr.instance.navigateAppArr[this.gameIndex].title

        let id = this.gameIndex
        this.rootNode.off(cc.Node.EventType.TOUCH_END)
        this.rootNode.on(cc.Node.EventType.TOUCH_END, (event) => { this.navCB(event, id) }, this)

        this.gameIndex++
        if (this.gameIndex >= 6) {
            this.gameIndex = 0
        }
    }

    navCB(event, id) {
        console.log('click id:', id)
        WxApi.aldEvent('好友消息提示横幅-总点击数')
        this.node.active = false
        JJMgr.instance.NavigateApp(id, () => {
            this.scheduleOnce(() => { this.node.active = true }, 1)
        }, () => {
            WxApi.aldEvent('好友消息提示横幅-总成功跳转数')
        })
    }

    // update (dt) {}
}
