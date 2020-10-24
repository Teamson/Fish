"use strict";
cc._RF.push(module, 'ab3few7iJVE6ZOrRaammn4s', 'FullGameUI');
// ExportLibs/View/FullGameUI.ts

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
var ExportUtils_1 = require("../ExportUtils");
var Utility_1 = require("../../Scripts/Mod/Utility");
var WxApi_1 = require("../../Scripts/Libs/WxApi");
var AdMgr_1 = require("../../Scripts/Mod/AdMgr");
var PlayerDataMgr_1 = require("../../Scripts/Libs/PlayerDataMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FullGameUI = /** @class */ (function (_super) {
    __extends(FullGameUI, _super);
    function FullGameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.scroll = null;
        _this.content = null;
        _this.myNavArr = [];
        _this.hotArr = [];
        _this.closeCallback = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    FullGameUI.prototype.start = function () {
    };
    FullGameUI.prototype.showUI = function (callback, param) {
        if (callback) {
            this.closeCallback = callback;
        }
        this.node.active = true;
        WxApi_1.default.aldEvent('网红爆款全屏幕导出页出现次数');
    };
    FullGameUI.prototype.onEnable = function () {
        this.myNavArr = [].concat(ExportUtils_1.default.instance.navigateAppArr);
        this.getHotRandArr();
        this._init();
        if (ExportUtils_1.default.instance.exportCfg.front_all_screen_auto) {
            this.randomNav();
        }
        Utility_1.default.delayActive(this.node.getChildByName('continueBtn'), ExportUtils_1.default.instance.exportCfg.front_export_delay / 1000, this);
        AdMgr_1.default.instance.hideBanner();
        this.scheduleOnce(function () {
            WxApi_1.default.bannerWuChu2();
        }, ExportUtils_1.default.instance.exportCfg.front_export_delay / 1000);
        this.node.getChildByName('randomBtn').active = WxApi_1.default.isValidBanner() &&
            PlayerDataMgr_1.default.getPlayerData().grade >= ExportUtils_1.default.instance.exportCfg.front_randompaly_start_level;
    };
    FullGameUI.prototype.onDisable = function () {
        clearTimeout(WxApi_1.default.bannerTO2);
        AdMgr_1.default.instance.hideBanner();
        this.unscheduleAllCallbacks();
        this.content.destroyAllChildren();
        this.closeCallback && this.closeCallback();
        this.closeCallback = null;
    };
    FullGameUI.prototype.getHotRandArr = function () {
        this.hotArr = [];
        var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        arr = ExportUtils_1.default.instance.shuffleArr(arr);
        this.hotArr = arr.slice(0, 3);
    };
    FullGameUI.prototype._init = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var node = cc.instantiate(this_1.item);
            node.active = true;
            this_1.content.addChild(node);
            var colorBar = node.getChildByName('colorBar').getComponent(cc.Sprite);
            var name = node.getChildByName('name').getComponent(cc.Label);
            var icon = node.getChildByName('icon').getComponent(cc.Sprite);
            var hot = node.getChildByName('hot');
            ExportUtils_1.default.instance.loadSpriteFrame('ExportRes/' + (Math.floor(i % 9) + 1), colorBar);
            name.string = ExportUtils_1.default.instance.getSubtitle(i);
            ExportUtils_1.default.instance.loadImgByUrl(icon, this_1.myNavArr[i].icon);
            hot.active = this_1.hotArr.indexOf(i) != -1;
            node.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, i); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.myNavArr.length; i++) {
            _loop_1(i);
        }
    };
    FullGameUI.prototype.continueCB = function () {
        this.node.active = false;
    };
    FullGameUI.prototype.randomNav = function () {
        var id = Math.floor(Math.random() * 6);
        this.navCB(null, id);
    };
    FullGameUI.prototype.navCB = function (event, id) {
        console.log('click id:', id);
        WxApi_1.default.aldEvent('网红爆款全屏幕导出页-总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () { }, function () {
            WxApi_1.default.aldEvent('网红爆款全屏幕导出页-总成功跳转数');
        });
    };
    __decorate([
        property(cc.Node)
    ], FullGameUI.prototype, "item", void 0);
    __decorate([
        property(cc.ScrollView)
    ], FullGameUI.prototype, "scroll", void 0);
    __decorate([
        property(cc.Node)
    ], FullGameUI.prototype, "content", void 0);
    FullGameUI = __decorate([
        ccclass
    ], FullGameUI);
    return FullGameUI;
}(cc.Component));
exports.default = FullGameUI;

cc._RF.pop();