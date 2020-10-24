"use strict";
cc._RF.push(module, 'f6bf1qdOV5POYvxGOLUycuW', 'FriendGameUI');
// ExportLibs/View/FriendGameUI.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FriendGameUI = /** @class */ (function (_super) {
    __extends(FriendGameUI, _super);
    function FriendGameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.scroll = null;
        _this.content = null;
        _this.myNavArr = [];
        _this.closeCallback = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    FriendGameUI.prototype.start = function () {
    };
    FriendGameUI.prototype.showUI = function (callback, param) {
        if (callback) {
            this.closeCallback = callback;
        }
        this.node.active = true;
        WxApi_1.default.aldEvent('好友都在玩的爆款游戏弹窗出现次数');
    };
    FriendGameUI.prototype.onEnable = function () {
        var _this = this;
        this.myNavArr = [].concat(ExportUtils_1.default.instance.navigateAppArr);
        this._init();
        this.node.getChildByName('closeBtn').active = false;
        this.scheduleOnce(function () {
            _this.node.getChildByName('closeBtn').active = true;
            AdMgr_1.default.instance.hideBanner();
            WxApi_1.default.bannerWuChu1();
        }, 1.5);
    };
    FriendGameUI.prototype.onDisable = function () {
        clearTimeout(WxApi_1.default.bannerTO1);
        AdMgr_1.default.instance.hideBanner();
        this.unscheduleAllCallbacks();
        this.content.destroyAllChildren();
        this.closeCallback && this.closeCallback();
        this.closeCallback = null;
    };
    FriendGameUI.prototype._init = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var node = cc.instantiate(this_1.item);
            node.active = true;
            this_1.content.addChild(node);
            var name = node.getChildByName('name').getComponent(cc.Label);
            var icon = node.getChildByName('icon').getComponent(cc.Sprite);
            name.string = ExportUtils_1.default.instance.getSubtitle(i);
            ExportUtils_1.default.instance.loadImgByUrl(icon, this_1.myNavArr[i].icon);
            node.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, i); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.myNavArr.length; i++) {
            _loop_1(i);
        }
    };
    FriendGameUI.prototype.closeCB = function () {
        this.node.active = false;
    };
    FriendGameUI.prototype.navCB = function (event, id) {
        console.log('click id:', id);
        WxApi_1.default.aldEvent('好友都在玩的爆款游戏弹窗-总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FULLGAMEUI);
        }, function () {
            WxApi_1.default.aldEvent('好友都在玩的爆款游戏弹窗-总成功跳转数');
        });
    };
    __decorate([
        property(cc.Node)
    ], FriendGameUI.prototype, "item", void 0);
    __decorate([
        property(cc.ScrollView)
    ], FriendGameUI.prototype, "scroll", void 0);
    __decorate([
        property(cc.Node)
    ], FriendGameUI.prototype, "content", void 0);
    FriendGameUI = __decorate([
        ccclass
    ], FriendGameUI);
    return FriendGameUI;
}(cc.Component));
exports.default = FriendGameUI;

cc._RF.pop();