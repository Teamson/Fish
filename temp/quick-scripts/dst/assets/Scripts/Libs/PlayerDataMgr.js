
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Libs/PlayerDataMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTGlic1xcUGxheWVyRGF0YU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFFNUM7SUFBQTtRQUNJLFVBQUssR0FBVyxDQUFDLENBQUE7UUFDakIsU0FBSSxHQUFXLENBQUMsQ0FBQTtRQUNoQixVQUFLLEdBQVcsQ0FBQyxDQUFBO1FBQ2pCLFlBQU8sR0FBVyxDQUFDLENBQUE7UUFDbkIsYUFBUSxHQUFXLENBQUMsQ0FBQTtJQUN4QixDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLGdDQUFVO0FBUXZCO0lBQUE7SUE0RUEsQ0FBQztJQXhFRyxRQUFRO0lBQ00sMkJBQWEsR0FBM0I7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUE7WUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQTtZQUN0QyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO1NBQ3ZFO2FBQU07WUFDSCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO2dCQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBZSxDQUFBO2FBQ2xGO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7SUFDM0IsQ0FBQztJQUVELFFBQVE7SUFDTSwyQkFBYSxHQUEzQjtRQUNJLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FB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QztDQTVFRCxBQTRFQyxJQUFBO2tCQTVFb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi9Nb2QvVXRpbGl0eVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJEYXRhIHtcclxuICAgIGdyYWRlOiBudW1iZXIgPSAxXHJcbiAgICBjb2luOiBudW1iZXIgPSAwXHJcbiAgICBwb3dlcjogbnVtYmVyID0gNVxyXG4gICAgdGlwc051bTogbnVtYmVyID0gMVxyXG4gICAgZXhpdFRpbWU6IG51bWJlciA9IDBcclxufVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJEYXRhTWdyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9wbGF5ZXJEYXRhOiBQbGF5ZXJEYXRhID0gbnVsbFxyXG4gICAgcHVibGljIHN0YXRpYyBwb3dlck1heDogbnVtYmVyID0gNVxyXG5cclxuICAgIC8v6I635Y+W55So5oi35pWw5o2uXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFBsYXllckRhdGEoKTogUGxheWVyRGF0YSB7XHJcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxheWVyRGF0YScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllckRhdGEgPSBuZXcgUGxheWVyRGF0YSgpXHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllckRhdGEucG93ZXIgPSB0aGlzLnBvd2VyTWF4XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkodGhpcy5fcGxheWVyRGF0YSkpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3BsYXllckRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllckRhdGEnKSkgYXMgUGxheWVyRGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJEYXRhXHJcbiAgICB9XHJcblxyXG4gICAgLy/orr7nva7nlKjmiLfmlbDmja5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0UGxheWVyRGF0YSgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVyRGF0YScsIEpTT04uc3RyaW5naWZ5KHRoaXMuX3BsYXllckRhdGEpKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hhbmdlQ29pbihkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyRGF0YS5jb2luICs9IGR0XHJcbiAgICAgICAgdGhpcy5zZXRQbGF5ZXJEYXRhKClcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hhbmdlUG93ZXIoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3BsYXllckRhdGEucG93ZXIgKz0gZHRcclxuICAgICAgICB0aGlzLnNldFBsYXllckRhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UGxheWVyTHYoKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodGhpcy5fcGxheWVyRGF0YS5ncmFkZSA8IDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDFcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3BsYXllckRhdGEuZ3JhZGUgPj0gMyAmJiB0aGlzLl9wbGF5ZXJEYXRhLmdyYWRlIDwgOCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMlxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGxheWVyRGF0YS5ncmFkZSA+PSA4ICYmIHRoaXMuX3BsYXllckRhdGEuZ3JhZGUgPCAxMykge1xyXG4gICAgICAgICAgICByZXR1cm4gM1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGxheWVyRGF0YS5ncmFkZSA+PSAxMyAmJiB0aGlzLl9wbGF5ZXJEYXRhLmdyYWRlIDwgMTgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gNVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldExlZnRMdigpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0aGlzLl9wbGF5ZXJEYXRhLmdyYWRlIDwgMykge1xyXG4gICAgICAgICAgICByZXR1cm4gMyAtIHRoaXMuX3BsYXllckRhdGEuZ3JhZGVcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3BsYXllckRhdGEuZ3JhZGUgPCA4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiA4IC0gdGhpcy5fcGxheWVyRGF0YS5ncmFkZVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGxheWVyRGF0YS5ncmFkZSA8IDEzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxMyAtIHRoaXMuX3BsYXllckRhdGEuZ3JhZGVcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3BsYXllckRhdGEuZ3JhZGUgPCAxOCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTggLSB0aGlzLl9wbGF5ZXJEYXRhLmdyYWRlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXROZXh0THZQZXIoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgY3VyTHYgPSB0aGlzLmdldFBsYXllckx2KClcclxuICAgICAgICBsZXQgY3VyRyA9IHRoaXMuX3BsYXllckRhdGEuZ3JhZGVcclxuICAgICAgICBpZiAoY3VyTHYgPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VyRyAvIDJcclxuICAgICAgICB9IGVsc2UgaWYgKGN1ckx2ID09IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1ckcgLyA3XHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJMdiA9PSAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJHIC8gMTJcclxuICAgICAgICB9IGVsc2UgaWYgKGN1ckx2ID09IDQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1ckcgLyAxN1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VyTHYgPT0gNSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19