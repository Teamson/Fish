import Utility from "../Mod/Utility";

const { ccclass, property } = cc._decorator;

export class PlayerData {
    grade: number = 1
    coin: number = 0
    power: number = 5
    tipsNum: number = 1
    exitTime: number = 0
}
@ccclass
export default class PlayerDataMgr {
    private static _playerData: PlayerData = null
    public static powerMax: number = 5

    //获取用户数据
    public static getPlayerData(): PlayerData {
        if (!localStorage.getItem('playerData')) {
            this._playerData = new PlayerData()
            this._playerData.power = this.powerMax
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
    public static changePower(dt: number) {
        this._playerData.power += dt
        this.setPlayerData()
    }

    public static getPlayerLv(): number {
        if (this._playerData.grade < 3) {
            return 1
        } else if (this._playerData.grade >= 3 && this._playerData.grade < 8) {
            return 2
        } else if (this._playerData.grade >= 8 && this._playerData.grade < 13) {
            return 3
        } else if (this._playerData.grade >= 13 && this._playerData.grade < 18) {
            return 4
        } else {
            return 5
        }
    }

    public static getLeftLv(): number {
        if (this._playerData.grade < 3) {
            return 3 - this._playerData.grade
        } else if (this._playerData.grade < 8) {
            return 8 - this._playerData.grade
        } else if (this._playerData.grade < 13) {
            return 13 - this._playerData.grade
        } else if (this._playerData.grade < 18) {
            return 18 - this._playerData.grade
        } else {
            return 0
        }
    }

    public static getNextLvPer(): number {
        let curLv = this.getPlayerLv()
        let curG = this._playerData.grade
        if (curLv == 1) {
            return curG / 2
        } else if (curLv == 2) {
            return curG / 7
        } else if (curLv == 3) {
            return curG / 12
        } else if (curLv == 4) {
            return curG / 17
        } else if (curLv == 5) {
            return 1
        }
    }

}
