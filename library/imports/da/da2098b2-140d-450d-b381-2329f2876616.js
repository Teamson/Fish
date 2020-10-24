"use strict";
cc._RF.push(module, 'da209iyFA1FDbOBIynyh2YW', 'RecommendUI');
// ExportLibs/View/RecommendUI.ts

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
var WxApi_1 = require("../../Scripts/Libs/WxApi");
var AdMgr_1 = require("../../Scripts/Mod/AdMgr");
var PlayerDataMgr_1 = require("../../Scripts/Libs/PlayerDataMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RecommendUI = /** @class */ (function (_super) {
    __extends(RecommendUI, _super);
    function RecommendUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.scroll = null;
        _this.content = null;
        _this.myNavArr = [];
        _this.closeCallback = null;
        return _this;
    }
    // onLoad () {}
    RecommendUI.prototype.start = function () {
    };
    RecommendUI.prototype.showUI = function (callback, param) {
        if (callback) {
            this.closeCallback = callback;
        }
        this.node.active = true;
        WxApi_1.default.aldEvent('热门推荐全屏幕导出页出现次数');
    };
    RecommendUI.prototype.onEnable = function () {
        this.myNavArr = [].concat(ExportUtils_1.default.instance.navigateAppArr);
        this._init();
        AdMgr_1.default.instance.hideBanner();
        if (ExportUtils_1.default.instance.exportCfg.front_remen_screen_auto) {
            this.randomNav();
        }
        this.node.getChildByName('continueBtn').active = false;
        if (WxApi_1.default.isValidBanner() && PlayerDataMgr_1.default.getPlayerData().grade >= ExportUtils_1.default.instance.exportCfg.front_continuegame_start_level) {
            this.node.getChildByName('continueBtn').active = true;
            WxApi_1.default.bannerWuChu2();
        }
    };
    RecommendUI.prototype.onDisable = function () {
        clearTimeout(WxApi_1.default.bannerTO2);
        AdMgr_1.default.instance.hideBanner();
        this.unscheduleAllCallbacks();
        this.content.destroyAllChildren();
        this.closeCallback && this.closeCallback();
        this.closeCallback = null;
    };
    RecommendUI.prototype._init = function () {
        var _this = this;
        var fingerNum = Math.floor(Math.random() * 6);
        var _loop_1 = function (i) {
            var node = cc.instantiate(this_1.item);
            node.active = true;
            this_1.content.addChild(node);
            var name = node.getChildByName('name').getComponent(cc.Label);
            var icon = node.getChildByName('icon').getComponent(cc.Sprite);
            var finger = node.getChildByName('finger');
            name.string = ExportUtils_1.default.instance.getSubtitle(i);
            ExportUtils_1.default.instance.loadImgByUrl(icon, this_1.myNavArr[i].icon);
            finger.active = i == fingerNum;
            node.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, i); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.myNavArr.length; i++) {
            _loop_1(i);
        }
    };
    RecommendUI.prototype.continueCB = function () {
        this.node.active = false;
    };
    RecommendUI.prototype.randomNav = function () {
        var id = Math.floor(Math.random() * 6);
        this.navCB(null, id);
    };
    RecommendUI.prototype.navCB = function (event, id) {
        console.log('click id:', id);
        WxApi_1.default.aldEvent('热门推荐全屏幕导出页-总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () { }, function () {
            WxApi_1.default.aldEvent('热门推荐全屏幕导出页-总成功跳转数');
        });
    };
    RecommendUI.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], RecommendUI.prototype, "item", void 0);
    __decorate([
        property(cc.ScrollView)
    ], RecommendUI.prototype, "scroll", void 0);
    __decorate([
        property(cc.Node)
    ], RecommendUI.prototype, "content", void 0);
    RecommendUI = __decorate([
        ccclass
    ], RecommendUI);
    return RecommendUI;
}(cc.Component));
exports.default = RecommendUI;

cc._RF.pop();