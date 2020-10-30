"use strict";
cc._RF.push(module, '11da5Tk8/dEdb4yQ71R6Ymx', 'PlayerDataMgr');
// Scripts/Libs/PlayerDataMgr.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerData = /** @class */ (function () {
    function PlayerData() {
        this.grade = 1;
        this.coin = 0;
        this.power = 5;
        this.tipsNum = 1;
        this.exitTime = 0;
    }
    return PlayerData;
}());
exports.PlayerData = PlayerData;
var PlayerDataMgr = /** @class */ (function () {
    function PlayerDataMgr() {
    }
    //获取用户数据
    PlayerDataMgr.getPlayerData = function () {
        if (!localStorage.getItem('playerData')) {
            this._playerData = new PlayerData();
            this._playerData.power = this.powerMax;
            localStorage.setItem('playerData', JSON.stringify(this._playerData));
        }
        else {
            if (this._playerData == null) {
                this._playerData = JSON.parse(localStorage.getItem('playerData'));
            }
        }
        return this._playerData;
    };
    //设置用户数据
    PlayerDataMgr.setPlayerData = function () {
        localStorage.setItem('playerData', JSON.stringify(this._playerData));
    };
    PlayerDataMgr.changeCoin = function (dt) {
        this._playerData.coin += dt;
        this.setPlayerData();
    };
    PlayerDataMgr.changePower = function (dt) {
        this._playerData.power += dt;
        this.setPlayerData();
    };
    PlayerDataMgr.getPlayerLv = function () {
        if (this._playerData.grade < 3) {
            return 1;
        }
        else if (this._playerData.grade >= 3 && this._playerData.grade < 8) {
            return 2;
        }
        else if (this._playerData.grade >= 8 && this._playerData.grade < 13) {
            return 3;
        }
        else if (this._playerData.grade >= 13 && this._playerData.grade < 18) {
            return 4;
        }
        else {
            return 5;
        }
    };
    PlayerDataMgr.getLeftLv = function () {
        if (this._playerData.grade < 3) {
            return 3 - this._playerData.grade;
        }
        else if (this._playerData.grade < 8) {
            return 8 - this._playerData.grade;
        }
        else if (this._playerData.grade < 13) {
            return 13 - this._playerData.grade;
        }
        else if (this._playerData.grade < 18) {
            return 18 - this._playerData.grade;
        }
        else {
            return 0;
        }
    };
    PlayerDataMgr.getNextLvPer = function () {
        var curLv = this.getPlayerLv();
        var curG = this._playerData.grade;
        if (curLv == 1) {
            return curG / 2;
        }
        else if (curLv == 2) {
            return curG / 7;
        }
        else if (curLv == 3) {
            return curG / 12;
        }
        else if (curLv == 4) {
            return curG / 17;
        }
        else if (curLv == 5) {
            return 1;
        }
    };
    PlayerDataMgr._playerData = null;
    PlayerDataMgr.powerMax = 5;
    PlayerDataMgr = __decorate([
        ccclass
    ], PlayerDataMgr);
    return PlayerDataMgr;
}());
exports.default = PlayerDataMgr;

cc._RF.pop();