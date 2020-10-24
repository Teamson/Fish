"use strict";
cc._RF.push(module, 'f0a4fRQMHxNH7nYx2FY6BmU', 'TimeCountMgr');
// Scripts/Libs/TimeCountMgr.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerDataMgr_1 = require("./PlayerDataMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TimeCountMgr = /** @class */ (function (_super) {
    __extends(TimeCountMgr, _super);
    function TimeCountMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tCount = 0;
        return _this;
    }
    TimeCountMgr_1 = TimeCountMgr;
    TimeCountMgr.prototype.onLoad = function () {
        TimeCountMgr_1.Share = this;
        cc.game.addPersistRootNode(this.node);
        this.init();
    };
    TimeCountMgr.prototype.init = function () {
        var _this = this;
        if (localStorage.getItem('powerTime')) {
            this.tCount = parseInt(localStorage.getItem('powerTime'));
        }
        else {
            localStorage.setItem('power', '0');
        }
        this.calculateExitTime();
        if (CC_WECHATGAME) {
            window["wx"].onShow(function (para) {
                _this.calculateExitTime();
            });
            window["wx"].onHide(function (para) {
                localStorage.setItem('powerTime', _this.tCount.toString());
                localStorage.setItem('exitTime', new Date().getTime().toString());
            });
        }
        this.schedule(this.calculateExitTime);
    };
    TimeCountMgr.prototype.calculateExitTime = function () {
        var exitTime = 0;
        if (localStorage.getItem('exitTime')) {
            exitTime = new Date().getTime() - parseInt(localStorage.getItem('exitTime'));
        }
        if (exitTime <= 0)
            return;
        exitTime /= 1000;
        var t = Math.floor(exitTime / 600);
        PlayerDataMgr_1.default.getPlayerData().power += t;
        if (PlayerDataMgr_1.default.getPlayerData().power > 10) {
            PlayerDataMgr_1.default.getPlayerData().power = 10;
            PlayerDataMgr_1.default.setPlayerData();
        }
    };
    TimeCountMgr.prototype.calculateTime = function () {
        if (this.tCount <= 0) {
            if (PlayerDataMgr_1.default.getPlayerData().power < 10) {
                this.tCount = 600;
            }
            else {
                this.tCount = 0;
            }
            return;
        }
        this.tCount--;
        if (this.tCount <= 0) {
            if (PlayerDataMgr_1.default.getPlayerData().power < 10) {
                PlayerDataMgr_1.default.getPlayerData().power += 1;
                PlayerDataMgr_1.default.setPlayerData();
                this.tCount = PlayerDataMgr_1.default.getPlayerData().power < 10 ? 600 : 0;
            }
        }
    };
    var TimeCountMgr_1;
    TimeCountMgr = TimeCountMgr_1 = __decorate([
        ccclass
    ], TimeCountMgr);
    return TimeCountMgr;
}(cc.Component));
exports.default = TimeCountMgr;

cc._RF.pop();