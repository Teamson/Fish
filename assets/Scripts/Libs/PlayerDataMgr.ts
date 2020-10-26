import Utility from "../Mod/Utility";

const { ccclass, property } = cc._decorator;

export class PlayerData {
    grade: number = 16
    coin: number = 0
    power:number = 5
    tipsNum:number = 1
    exitTime: number = 0
    lv:number = 1
}
@ccclass
export default class PlayerDataMgr {
    private static _playerData: PlayerData = null
    public static powerMax:number = 5

    //获取用户数据
    public static getPlayerData(): PlayerData {
        if (!localStorage.getItem('playerData')) {
            this._playerData = new PlayerData()
            localStorage.setItem('playerData', JSON.stringify(this._playerData))
        } else {
            if (this._playerData == null) {
                this._playerData = JSON.parse(localStorage.getItem('playerData')) as PlayerData
            }
        }
        return this._playerData
    }

    //设置用户数据
    public static setPlayerData() {
        localStorage.setItem('playerData', JSON.stringify(this._playerData))
    }

    public static changeCoin(dt: number) {
        this._playerData.coin += dt
        this.setPlayerData()
    }


}
