import JJHttp from "./ExportHttpUtils";
import ExportCrl from "./ExportCrl";
import WxApi from "../Scripts/Libs/WxApi";

export enum ExportDir {
    VIEW_FRIENDGAME = 'FriendGameUI',   //好友都在玩的爆款游戏弹窗
    VIEW_SCROLLUI = 'ScrollUI',         //游戏内滚动导出栏
    VIEW_RECOMMENDUI = 'RecommendUI',   //热门推荐全屏幕导出页
    VIEW_FULLGAMEUI = 'FullGameUI',     //全屏幕导出页
    VIEW_FINISHGAMEUI = 'FinishGameUI', //结算页 6 个 icon
    VIEW_DRAWUI = 'DrawUI',             //抽屉
    VIEW_PROGRAMUI = 'ProgramUI',       //游戏列表
    VIEW_WECHATUI = 'WeChatUI'
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class JJMgr {

    private static _instance: JJMgr
    public static get instance(): JJMgr {
        if (!this._instance) {
            this._instance = new JJMgr()
        }
        return this._instance
    }

    exportCfg: any = null
    navigateAppArr: any[] = []

    url: string = 'https://tthy.jiujiuhuyu.com/wx/bwmrenyu/config.json?version='

    isFinished: boolean = false

    initJJ(version: string = '1.0.0', completeCB?: Function) {
        JJHttp.instance.httpGet(this.url + version, (res) => {
            console.log('JJ config.json:', res)
            this.exportCfg = res.data.config
            this.navigateAppArr = res.data.mores.remen_game
            this.isFinished = true
            completeCB && completeCB()
        })
    }

    //显示UI
    showExportUI(dir: ExportDir, param?: any, callback?: Function) {
        if (!this.exportCfg.front_all_export_switch && callback) {
            callback()
            return
        } else if (!this.exportCfg.front_all_export_switch) {
            return
        }
        cc.find('ExportNode').getComponent(ExportCrl).showJJUI(dir, param, callback)
    }

    //关闭UI
    closeExportUI(dir: ExportDir) {
        cc.find('ExportNode').getComponent(ExportCrl).closeJJUI(dir)
    }

    closeAllExportUI() {
        cc.find('ExportNode').getComponent(ExportCrl).closeAllJJUI()
    }

    //跳转
    NavigateApp(index: number, cancelCB?: Function, successCB?: Function) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            WxApi.aldEvent('导出-总点击数')
            window['wx'].navigateToMiniProgram({
                appId: this.navigateAppArr[index].appid,
                path: this.navigateAppArr[index].path,
                success: (res) => {
                    // 打开成功
                    successCB && successCB()
                    WxApi.aldEvent('导出成功-总用户数')
                    WxApi.aldEvent('导出成功-' + this.navigateAppArr[index].title)
                },
                fail: (res) => {
                    // 打开失败
                    cancelCB && cancelCB()
                }
            })
        }
    }

    getSubtitle(index: number) {
        if (this.navigateAppArr[index].subtitle && this.navigateAppArr[index].subtitle != '') {
            return this.navigateAppArr[index].subtitle
        } else {
            return this.navigateAppArr[index].title
        }
    }

    //加载网络图片
    public loadImgByUrl(sprite, remoteUrl, imageType: string = 'png', cb?: Function) {
        cc.loader.load({
            url: remoteUrl,
            type: imageType
        }, (err, texture) => {
            if (err || !sprite || !texture || !sprite.spriteFrame) {
                return;
            }
            sprite.spriteFrame = new cc.SpriteFrame(texture)
            cb && cb()
        });
    }

    public loadSpriteFrame(spName: string, sprite: cc.Sprite, cb?: Function) {
        cc.loader.loadRes(spName, cc.SpriteFrame, function (err, spriteFrame) {
            sprite.spriteFrame = spriteFrame
            cb && cb()
        })
    }

    //打乱数组
    public shuffleArr(arr: any[]) {
        let i = arr.length;
        while (i) {
            let j = Math.floor(Math.random() * i--);
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }
}
