
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
        this.grade = 14;
        this.coin = 0;
        this.power = 5;
        this.tipsNum = 1;
        this.exitTime = 0;
        this.lv = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTGlic1xcUGxheWVyRGF0YU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFFNUM7SUFBQTtRQUNJLFVBQUssR0FBVyxFQUFFLENBQUE7UUFDbEIsU0FBSSxHQUFXLENBQUMsQ0FBQTtRQUNoQixVQUFLLEdBQVUsQ0FBQyxDQUFBO1FBQ2hCLFlBQU8sR0FBVSxDQUFDLENBQUE7UUFDbEIsYUFBUSxHQUFXLENBQUMsQ0FBQTtRQUNwQixPQUFFLEdBQVUsQ0FBQyxDQUFBO0lBQ2pCLENBQUM7SUFBRCxpQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksZ0NBQVU7QUFTdkI7SUFBQTtJQTRCQSxDQUFDO0lBeEJHLFFBQVE7SUFDTSwyQkFBYSxHQUEzQjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQTtZQUNuQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO1NBQ3ZFO2FBQU07WUFDSCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO2dCQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBZSxDQUFBO2FBQ2xGO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7SUFDM0IsQ0FBQztJQUVELFFBQVE7SUFDTSwyQkFBYSxHQUEzQjtRQUNJLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7SUFDeEUsQ0FBQztJQUVhLHdCQUFVLEdBQXhCLFVBQXlCLEVBQVU7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0lBeEJjLHlCQUFXLEdBQWUsSUFBSSxDQUFBO0lBQy9CLHNCQUFRLEdBQVUsQ0FBQyxDQUFBO0lBRmhCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0E0QmpDO0lBQUQsb0JBQUM7Q0E1QkQsQUE0QkMsSUFBQTtrQkE1Qm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vTW9kL1V0aWxpdHlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyRGF0YSB7XHJcbiAgICBncmFkZTogbnVtYmVyID0gMTRcclxuICAgIGNvaW46IG51bWJlciA9IDBcclxuICAgIHBvd2VyOm51bWJlciA9IDVcclxuICAgIHRpcHNOdW06bnVtYmVyID0gMVxyXG4gICAgZXhpdFRpbWU6IG51bWJlciA9IDBcclxuICAgIGx2Om51bWJlciA9IDFcclxufVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJEYXRhTWdyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9wbGF5ZXJEYXRhOiBQbGF5ZXJEYXRhID0gbnVsbFxyXG4gICAgcHVibGljIHN0YXRpYyBwb3dlck1heDpudW1iZXIgPSA1XHJcblxyXG4gICAgLy/ojrflj5bnlKjmiLfmlbDmja5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UGxheWVyRGF0YSgpOiBQbGF5ZXJEYXRhIHtcclxuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbGF5ZXJEYXRhJykpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyRGF0YSA9IG5ldyBQbGF5ZXJEYXRhKClcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllckRhdGEnLCBKU09OLnN0cmluZ2lmeSh0aGlzLl9wbGF5ZXJEYXRhKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcGxheWVyRGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxheWVyRGF0YScpKSBhcyBQbGF5ZXJEYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllckRhdGFcclxuICAgIH1cclxuXHJcbiAgICAvL+iuvue9rueUqOaIt+aVsOaNrlxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRQbGF5ZXJEYXRhKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkodGhpcy5fcGxheWVyRGF0YSkpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjaGFuZ2VDb2luKGR0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJEYXRhLmNvaW4gKz0gZHRcclxuICAgICAgICB0aGlzLnNldFBsYXllckRhdGEoKVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19