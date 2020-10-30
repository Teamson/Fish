import JJMgr from "../../ExportLibs/ExportUtils"
import PlayerDataMgr from "./PlayerDataMgr"
import AdMgr from "../Mod/AdMgr"

export default class WxApi {
    public static version: string = '1.0.1'
    public static isVibrate: boolean = true
    public static isMusic: boolean = true
    public static OnShowFun: Function = null
    public static scopeBtn: any = null
    public static shareCallback: Function = null
    public static front_share_number: number = 0
    public static sceneId: number = 0
    public static isKillBossUI: boolean = false

    public static gotOfflineBounes: boolean = false
    public static configData: any = null
    public static crlConfig: any = null
    public static navData: any[] = []

    public static shareTime: number = 0
    public static firstShare: boolean = true
    public static hadShowFriendUI: boolean = false

    public static launchGameUI: boolean = false

    public static firstStartGame: boolean = false
    public static firstStartUI: boolean = false

    public static firstShowVideo: boolean = false

    public static madUICallback: Function = null

    public static isFromSkinUI: boolean = false

    //微信登录
    public static LoginWx(cb: Function) {
        if (cc.sys.platform !== cc.sys.WECHAT_GAME) return
        let launchData = window["wx"].getLaunchOptionsSync();
        window["wx"].login({
            success(res) {
                if (res.code) {
                    console.log('res.code:', res.code);
                    if (cb) {
                        cb(res.code, launchData.query)
                    }
                }
            }
        })
    }

    //监听启动
    //Usually get fun(obj) obj.query
    public static GetLaunchParam(fun: Function) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            this.OnShowFun = fun
            fun(this.GetLaunchPassVar())
            window["wx"].onShow((para) => {
                //check onshow Fun
                if (this.OnShowFun != null) {
                    this.OnShowFun(para)
                }
                console.log("wx on show")
            })
        }
    }
    public static GetLaunchPassVar(): any {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            return window["wx"].getLaunchOptionsSync()
        } else {
            return null
        }
    }

    public static WxOnHide(fun: Function) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].onHide(fun)
        }
    }
    public static WxOffHide(fun: Function) {
        if (fun && cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].offHide(fun)
        }
    }
    public static WxOnShow(fun: Function) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].onShow(fun)
        }
    }
    public static WxOffShow(fun: Function) {
        if (fun && cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].offShow(fun)
        }
    }

    //震动
    public static DoVibrate(isShort: boolean = true) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME && this.isVibrate) {
            if (isShort) {
                window["wx"].vibrateShort()
            } else {
                window["wx"].vibrateLong()
            }
        }
    }

    //系统提示
    public static OpenAlert(msg: string, dur: number = 2000, icon: boolean = false) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].showToast({
                title: msg,//提示文字
                duration: dur,//显示时长
                mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false  
                icon: icon ? 'success' : 'none', //图标，支持"success"、"loading"  
            })
        }
    }

    //跳转
    public static NavigateApp(appid: string, path: string, title: string, cancelCB: Function, successCB: Function) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            let self = this
            window["wx"].navigateToMiniProgram({
                appId: appid,
                path: path,
                success(res) {
                    // 打开成功
                    console.log('打开成功')
                    successCB()
                },
                fail(res) {
                    // 打开失败
                    console.log('打开失败')
                    cancelCB()
                }
            })
        }
    }

    //预览图片
    public static preViewImage(url) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].previewImage({
                current: url, // 当前显示图片的http链接
                urls: [url] // 需要预览的图片http链接列表
            })
        }
    }

    //阿拉丁统计事件
    public static aldEvent(str: string) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME)
            window["wx"].aldSendEvent(str)
    }

    //计算分享次数
    public static calculateShareNumber() {
        if (localStorage.getItem('lastDate')) {
            if (new Date().getDate() == parseInt(localStorage.getItem('lastDate'))) {
                //同一天
                this.front_share_number = parseInt(localStorage.getItem('front_share_number'))
            } else {
                //新的一天
                this.front_share_number = JJMgr.instance.exportCfg.front_share_number
            }
        } else {
            //新的一天
            this.front_share_number = JJMgr.instance.exportCfg.front_share_number
        }
        if (!this.front_share_number) this.front_share_number = 0
        console.log('this.front_share_number:', this.front_share_number)
    }

    //误触控制
    public static fixBtnTouchPos(btn, startPosY, endPosY, target, cb?: Function) {
        if (this.isValidBanner()) {
            btn.y = startPosY
            target.scheduleOnce(() => { AdMgr.instance.showBanner() }, JJMgr.instance.exportCfg.front_banner_appear / 1000)
            target.scheduleOnce(() => {
                btn.y = endPosY
                cb && cb()
            }, JJMgr.instance.exportCfg.front_button_up / 1000)
        } else {
            AdMgr.instance.showBanner()
            cb && cb()
        }
    }

    public static isValidBanner() {
        return PlayerDataMgr.getPlayerData().grade >= JJMgr.instance.exportCfg.front_pass_gate && JJMgr.instance.exportCfg.is_allow_area == 1
            && this.allowScene()
    }

    public static allowScene() {
        let s: string = JJMgr.instance.exportCfg.front_wuchu_scene.toString()
        if (s.search('|') == -1) {
            let sInt: number = parseInt(s)
            return sInt == WxApi.sceneId
        }
        let sArr: string[] = s.split('|')
        for (let i = 0; i < sArr.length; i++) {
            let sInt: number = parseInt(sArr[i])
            if (sInt == WxApi.sceneId) {
                return true
            }
        }
        return false
    }

    public static bannerTO2: number = -1
    public static bannerWuChu2() {
        clearTimeout(this.bannerTO2)
        AdMgr.instance.hideBanner()
        if (WxApi.isValidBanner()) {
            let upTime = JJMgr.instance.exportCfg.front_export_banner_appear
            let downTime = upTime + JJMgr.instance.exportCfg.front_export_banner_hide
            this.bannerTO2 = setTimeout(() => {
                AdMgr.instance.showBanner()
                this.bannerTO2 = setTimeout(() => {
                    AdMgr.instance.hideBanner()
                }, downTime)
            }, upTime)
        }
    }
    public static bannerTO1: number = -1
    public static bannerWuChu1() {
        clearTimeout(this.bannerTO1)
        AdMgr.instance.hideBanner()
        if (WxApi.isValidBanner()) {
            let upTime = JJMgr.instance.exportCfg.front_baokuan_banner_appear
            let downTime = upTime + JJMgr.instance.exportCfg.front_baokuan_banner_hide
            this.bannerTO1 = setTimeout(() => {
                AdMgr.instance.showBanner()
                this.bannerTO1 = setTimeout(() => {
                    AdMgr.instance.hideBanner()
                }, downTime)
            }, upTime)
        }
    }

    public static getIsExportValid() {
        return JJMgr.instance.exportCfg.front_all_export_switch
    }

    public static splitSection(): number[] {
        let s: string = JJMgr.instance.exportCfg.front_water_section.toString()
        if (s.search('|') == -1) {
            let sInt: number = parseInt(s)
            return [sInt]
        }
        let sArr: string[] = s.split('|')
        let iArr: number[] = []
        for (let i = 0; i < sArr.length; i++) {
            let sInt: number = parseInt(sArr[i])
            iArr.push(sInt)
        }
        return iArr
    }

}