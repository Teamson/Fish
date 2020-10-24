"use strict";
cc._RF.push(module, '41e53a5Wv1KTp5KIBsXoHlf', 'WeChatUI');
// Scripts/UI/WeChatUI.ts

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
var Utility_1 = require("../Mod/Utility");
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var WxApi_1 = require("../Libs/WxApi");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WeChatUI = /** @class */ (function (_super) {
    __extends(WeChatUI, _super);
    function WeChatUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        _this.playerName = null;
        _this.gameName = null;
        _this.playerNames = ["有个小可爱", "大妈杀手", "神秘靓仔", "超级飞侠乐迪", "几一鸡", "爱喝可乐", "卖葫芦的葫芦娃", "多啦ABCD梦", "坏女孩", "沙雕网友"];
        _this.gameIndex = 0;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    WeChatUI.prototype.start = function () {
    };
    WeChatUI.prototype.showUI = function (callback, param) {
        this.node.active = true;
        WxApi_1.default.aldEvent('好友消息提示横幅出现次数');
    };
    WeChatUI.prototype.onEnable = function () {
        this.rootNode.runAction(cc.moveBy(0.5, cc.v2(0, -200)));
        this.initData();
    };
    WeChatUI.prototype.onDisable = function () {
        this.rootNode.y = cc.view.getVisibleSize().height / 2;
    };
    WeChatUI.prototype.initData = function () {
        var _this = this;
        var nArr = [].concat(this.playerNames);
        nArr = Utility_1.default.shuffleArr(nArr);
        this.playerName.string = nArr[0];
        this.gameName.string = ExportUtils_1.default.instance.navigateAppArr[this.gameIndex].title;
        var id = this.gameIndex;
        this.rootNode.off(cc.Node.EventType.TOUCH_END);
        this.rootNode.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, id); }, this);
        this.gameIndex++;
        if (this.gameIndex >= 6) {
            this.gameIndex = 0;
        }
    };
    WeChatUI.prototype.navCB = function (event, id) {
        var _this = this;
        console.log('click id:', id);
        WxApi_1.default.aldEvent('好友消息提示横幅-总点击数');
        this.node.active = false;
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            _this.scheduleOnce(function () { _this.node.active = true; }, 1);
        }, function () {
            WxApi_1.default.aldEvent('好友消息提示横幅-总成功跳转数');
        });
    };
    __decorate([
        property(cc.Node)
    ], WeChatUI.prototype, "rootNode", void 0);
    __decorate([
        property(cc.Label)
    ], WeChatUI.prototype, "playerName", void 0);
    __decorate([
        property(cc.Label)
    ], WeChatUI.prototype, "gameName", void 0);
    WeChatUI = __decorate([
        ccclass
    ], WeChatUI);
    return WeChatUI;
}(cc.Component));
exports.default = WeChatUI;

cc._RF.pop();