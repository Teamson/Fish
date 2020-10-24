import WxApi from "../Libs/WxApi";
import HttpMgr from "../Mod/HttpMgr";
import ShareMgr from "../Mod/ShareMgr";
import AdMgr from "../Mod/AdMgr";
import SoundMgr from "../Mod/SoundMgr";
import PlayerDataMgr from "../Libs/PlayerDataMgr";
import JJMgr from "../../ExportLibs/ExportUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadingUI extends cc.Component {

    @property(cc.ProgressBar)
    pBar: cc.ProgressBar = null

    onLoad() {
        localStorage.clear()
        cc.director.getPhysicsManager().enabled = true
        cc.director.getCollisionManager().enabled = true
        cc.director.getPhysicsManager().debugDrawFlags = 1
        // cc.find('ExportNode').zIndex = 999
        // cc.game.addPersistRootNode(cc.find('ExportNode'))

        PlayerDataMgr.getPlayerData()
        //AdMgr.instance.initAd()

        WxApi.WxOnHide(() => {
            localStorage.setItem('lastDate', new Date().getDate().toString())
            localStorage.setItem('front_share_number', WxApi.front_share_number.toString())
        })
    }

    start() {
        //ShareMgr.instance.initShare()

        cc.director.preloadScene('StartScene', (completeCount: number, totalCount: number) => {
            this.pBar.progress = completeCount / totalCount
        }, () => {
            cc.director.loadScene('StartScene')
        })
        // SoundMgr.Share.loadSounds(() => {
        //     cc.director.preloadScene('StartScene', (completeCount: number, totalCount: number) => {
        //         this.pBar.progress = completeCount / totalCount
        //     }, () => {
        //         cc.director.loadScene('StartScene')
        //     })
        // })

        // JJMgr.instance.initJJ(WxApi.version, () => {
        //     ShareMgr.instance.initShare()
        //     WxApi.calculateShareNumber()
        //     //获取场景值
        //     if (cc.sys.platform === cc.sys.WECHAT_GAME) {
        //         WxApi.sceneId = WxApi.GetLaunchPassVar().scene
        //         console.log('sceneId:', WxApi.sceneId)
        //     }
        //     // SoundMgr.Share.loadSounds(() => {
        //     //     cc.director.preloadScene('StartScene', (completeCount: number, totalCount: number) => {
        //     //         this.pBar.progress = completeCount / totalCount
        //     //     }, () => {
        //     //         WxApi.aldEvent('成功加载进入游戏内人数')
        //     //         cc.director.loadScene('StartScene')
        //     //     })
        //     // })
        // })
    }

    // update (dt) {}
}
