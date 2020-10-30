import WxApi from "../Libs/WxApi";
import HttpMgr from "../Mod/HttpMgr";
import ShareMgr from "../Mod/ShareMgr";
import AdMgr from "../Mod/AdMgr";
import SoundMgr from "../Mod/SoundMgr";
import PlayerDataMgr from "../Libs/PlayerDataMgr";
import JJMgr from "../../ExportLibs/ExportUtils";
import TimeCountMgr from "../Libs/TimeCountMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadingUI extends cc.Component {

    @property(cc.ProgressBar)
    pBar: cc.ProgressBar = null

    onLoad() {
        //localStorage.clear()
        cc.director.getCollisionManager().enabled = true
        cc.director.getPhysicsManager().enabled = true
        //cc.director.getPhysicsManager().debugDrawFlags = 1
        cc.find('ExportNode').zIndex = 999
        cc.game.addPersistRootNode(cc.find('ExportNode'))

        //AdMgr.instance.initAd()

        WxApi.WxOnHide(() => {
            localStorage.setItem('lastDate', new Date().getDate().toString())
            localStorage.setItem('front_share_number', WxApi.front_share_number.toString())
        })
    }

    start() {
        WxApi.aldEvent('进入游戏加载页的人数')
        JJMgr.instance.initJJ(WxApi.version, () => {
            ShareMgr.instance.initShare()
            PlayerDataMgr.powerMax = JJMgr.instance.exportCfg.front_energy_value
            PlayerDataMgr.getPlayerData()
            WxApi.calculateShareNumber()
            //获取场景值
            if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                WxApi.sceneId = WxApi.GetLaunchPassVar().scene
                console.log('sceneId:', WxApi.sceneId)
            }

            let self = this
            if (!CC_WECHATGAME) {
                cc.director.preloadScene('StartScene', (completeCount: number, totalCount: number) => {
                    self.pBar.progress = completeCount / totalCount
                }, () => {
                    WxApi.aldEvent('成功加载进入游戏内人数')
                    cc.director.loadScene('StartScene')
                })
            } else {
                cc.loader.downloader.loadSubpackage('Texture', (err) => {
                    if (err) {
                        return console.error(err);
                    }
                    cc.director.preloadScene('StartScene', (completeCount: number, totalCount: number) => {
                        self.pBar.progress = completeCount / totalCount
                    }, () => {
                        WxApi.aldEvent('成功加载进入游戏内人数')
                        cc.director.loadScene('StartScene')
                    })
                    console.log('load subpackage successfully.');
                });
            }
            // SoundMgr.Share.loadSounds(() => {
            //     cc.director.preloadScene('StartScene', (completeCount: number, totalCount: number) => {
            //         this.pBar.progress = completeCount / totalCount
            //     }, () => {
            //         WxApi.aldEvent('成功加载进入游戏内人数')
            //         cc.director.loadScene('StartScene')
            //     })
            // })
        })
    }

    // update (dt) {}
}
