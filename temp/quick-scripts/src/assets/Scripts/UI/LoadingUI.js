"use strict";
cc._RF.push(module, '42c8fUg6hhEcLJMTeLa+i1R', 'LoadingUI');
// Scripts/UI/LoadingUI.ts

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
var WxApi_1 = require("../Libs/WxApi");
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pBar = null;
        return _this;
        // update (dt) {}
    }
    LoadingUI.prototype.onLoad = function () {
        localStorage.clear();
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getCollisionManager().enabled = true
        // cc.director.getPhysicsManager().debugDrawFlags = 1
        // cc.find('ExportNode').zIndex = 999
        // cc.game.addPersistRootNode(cc.find('ExportNode'))
        PlayerDataMgr_1.default.getPlayerData();
        //AdMgr.instance.initAd()
        WxApi_1.default.WxOnHide(function () {
            localStorage.setItem('lastDate', new Date().getDate().toString());
            localStorage.setItem('front_share_number', WxApi_1.default.front_share_number.toString());
        });
    };
    LoadingUI.prototype.start = function () {
        //ShareMgr.instance.initShare()
        var _this = this;
        cc.director.preloadScene('StartScene', function (completeCount, totalCount) {
            _this.pBar.progress = completeCount / totalCount;
        }, function () {
            cc.director.loadScene('StartScene');
        });
        // SoundMgr.Share.loadSounds(() => {
        //     cc.director.preloadScene('StartScene', (completeCount: number, totalCount: number) => {
        //         this.pBar.progress = completeCount / totalCount
        //     }, () => {
        //         cc.director.loadScene('StartScene')
        //     })
        // })
        // JJMgr.instance.initJJ(WxApi.version, () => {
        //     ShareMgr.instance.initShare()
        //     WxApi.calculateShareNumber()
        //     //获取场景值
        //     if (cc.sys.platform === cc.sys.WECHAT_GAME) {
        //         WxApi.sceneId = WxApi.GetLaunchPassVar().scene
        //         console.log('sceneId:', WxApi.sceneId)
        //     }
        //     // SoundMgr.Share.loadSounds(() => {
        //     //     cc.director.preloadScene('StartScene', (completeCount: number, totalCount: number) => {
        //     //         this.pBar.progress = completeCount / totalCount
        //     //     }, () => {
        //     //         WxApi.aldEvent('成功加载进入游戏内人数')
        //     //         cc.director.loadScene('StartScene')
        //     //     })
        //     // })
        // })
    };
    __decorate([
        property(cc.ProgressBar)
    ], LoadingUI.prototype, "pBar", void 0);
    LoadingUI = __decorate([
        ccclass
    ], LoadingUI);
    return LoadingUI;
}(cc.Component));
exports.default = LoadingUI;

cc._RF.pop();