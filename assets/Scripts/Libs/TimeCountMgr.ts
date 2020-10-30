import PlayerDataMgr from "./PlayerDataMgr"

const { ccclass, property } = cc._decorator;

@ccclass
export default class TimeCountMgr extends cc.Component {

    public static Share: TimeCountMgr

    tCount: number = 0

    onLoad() {
        TimeCountMgr.Share = this
        cc.game.addPersistRootNode(this.node)
        this.init()
    }

    init() {
        if (localStorage.getItem('powerTime')) {
            this.tCount = parseInt(localStorage.getItem('powerTime'))
        } else {
            localStorage.setItem('power', '0')
        }

        this.calculateExitTime()

        if (CC_WECHATGAME) {
            window["wx"].onShow((para) => {
                this.calculateExitTime()
            })
            window["wx"].onHide((para) => {
                localStorage.setItem('powerTime', this.tCount.toString())
                localStorage.setItem('exitTime', new Date().getTime().toString())
            })
        }

        this.schedule(this.calculateTime, 1)
    }

    calculateExitTime() {
        let exitTime: number = 0
        if (localStorage.getItem('exitTime')) {
            exitTime = new Date().getTime() - parseInt(localStorage.getItem('exitTime'))
        }

        if (exitTime <= 0) return

        exitTime /= 1000
        let t = Math.floor(exitTime / 300)
        PlayerDataMgr.getPlayerData().power += t
        if (PlayerDataMgr.getPlayerData().power > PlayerDataMgr.powerMax) {
            PlayerDataMgr.getPlayerData().power = PlayerDataMgr.powerMax
            PlayerDataMgr.setPlayerData()
        }
    }

    calculateTime() {
        if (this.tCount <= 0) {
            if (PlayerDataMgr.getPlayerData().power < PlayerDataMgr.powerMax) {
                this.tCount = 300
            } else {
                this.tCount = 0
            }
            return
        }
        this.tCount--

        if (this.tCount <= 0) {
            if (PlayerDataMgr.getPlayerData().power < PlayerDataMgr.powerMax) {
                PlayerDataMgr.getPlayerData().power += 1
                PlayerDataMgr.setPlayerData()
                this.tCount = PlayerDataMgr.getPlayerData().power < PlayerDataMgr.powerMax ? 300 : 0
            }
        }
    }

}