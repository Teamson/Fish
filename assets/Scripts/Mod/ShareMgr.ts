
import AdMgr from "./AdMgr"
import WxApi from "../Libs/WxApi"
import JJMgr from "../../ExportLibs/ExportUtils"


export default class ShareMgr {
    private static _instance: ShareMgr
    public static get instance(): ShareMgr {
        if (!this._instance) {
            this._instance = new ShareMgr()
        }
        return this._instance
    }

    private path: string = ''
    private picCount: number = 3

    private preT: number = 0

    shareTips: string[] = [
        '请分享到活跃的群！',
        '请分享到不同群！',
        '请分享给好友！',
        '请分享给20人以上的群！']

    //初始化分享  
    initShare() {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            //开启右上角的分享
            window["wx"].showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline']
            });

            let dir = JJMgr.instance.exportCfg.front_share_config.image
            let content = JJMgr.instance.exportCfg.front_share_config.title
            window["wx"].onShareAppMessage(function (res) {
                return {
                    title: content,
                    imageUrl: dir,
                }
            })
            // cc.loader.loadRes(dir, function (err, data) {
            //     window["wx"].onShareAppMessage(function (res) {
            //         return {
            //             title: content,
            //             imageUrl: data.url,
            //         }
            //     })
            // });

            window["wx"].onShow((para) => {
                if (WxApi.shareCallback) {
                    let t = new Date().getTime()
                    let diff = t - WxApi.shareTime
                    if (diff / 1000 >= 3 && !WxApi.firstShare) {
                        WxApi.shareCallback()
                        WxApi.front_share_number--
                        window["wx"].showToast({
                            title: '分享成功',
                            icon: 'none',
                            duration: 2000
                        })
                        WxApi.shareCallback = null
                    } else {
                        WxApi.firstShare = false
                        window["wx"].showModal({
                            title: '提示',
                            content: this.shareTips[Math.floor(Math.random() * this.shareTips.length)],
                            confirmText: '重新分享',
                            success(res) {
                                if (res.confirm) {
                                    console.log('用户点击确定')
                                    ShareMgr.instance.shareGame(WxApi.shareCallback)
                                } else if (res.cancel) {
                                    console.log('用户点击取消')
                                }
                            }
                        })
                    }
                }
            })
        }
    }

    shareGame(cb: Function) {
        // if (WxApi.front_share_number <= 0) {
        //     AdMgr.instance.showVideo(cb)
        //     return
        // }

        WxApi.shareCallback = cb
        if (cc.sys.platform !== cc.sys.WECHAT_GAME) {
            cb();
            return;
        }
        WxApi.shareTime = new Date().getTime()
        let dir = JJMgr.instance.exportCfg.front_share_config.image
        let content = JJMgr.instance.exportCfg.front_share_config.title
        window["wx"].shareAppMessage({
            title: content,
            imageUrl: dir
        })
        // cc.loader.loadRes(dir, (err, data) => {
        //     window["wx"].shareAppMessage({
        //         title: content,
        //         imageUrl: data.url
        //     })
        // });
    }

}