"use strict";
cc._RF.push(module, '80640I/xFpMor6MfSekWPx9', 'FinishGameUI');
// ExportLibs/View/FinishGameUI.ts

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
var WxApi_1 = require("../../Scripts/Libs/WxApi");
var AdMgr_1 = require("../../Scripts/Mod/AdMgr");
var Utility_1 = require("../../Scripts/Mod/Utility");
var ExportUtils_1 = require("../ExportUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FinishGameUI = /** @class */ (function (_super) {
    __extends(FinishGameUI, _super);
    function FinishGameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        _this.navId = 0;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    FinishGameUI.prototype.start = function () {
    };
    FinishGameUI.prototype.showUI = function (callback, param) {
        if (param && param.posY) {
            this.rootNode.y = param.posY;
        }
        this.node.active = true;
    };
    FinishGameUI.prototype.onEnable = function () {
        this._init();
        this.chushihuaNav();
    };
    FinishGameUI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    FinishGameUI.prototype._init = function () {
        this.navId = 0;
    };
    FinishGameUI.prototype.closeCB = function () {
        this.node.active = false;
    };
    FinishGameUI.prototype.cno = function (index) {
        var _this = this;
        var item = this.rootNode.children[index];
        var icon = item.getChildByName('icon').getComponent(cc.Sprite);
        ExportUtils_1.default.instance.loadImgByUrl(icon, ExportUtils_1.default.instance.navigateAppArr[this.navId].icon);
        var id = this.navId;
        item.off(cc.Node.EventType.TOUCH_END);
        item.on(cc.Node.EventType.TOUCH_END, function (event) { _this.tiaozhuanCB(event, id); }, this);
        this.navId++;
        if (this.navId >= ExportUtils_1.default.instance.navigateAppArr.length) {
            this.navId = 0;
        }
    };
    FinishGameUI.prototype.tiaozhuanCB = function (event, id) {
        console.log('click id:', id);
        WxApi_1.default.aldEvent('结算页 6 个 icon-总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FULLGAMEUI, null, function () {
                AdMgr_1.default.instance.showBanner();
            });
        }, function () {
            WxApi_1.default.aldEvent('结算页 6 个 icon-总跳转数');
        });
        var index = this.rootNode.children.indexOf(event.target);
        this.cno(index);
    };
    FinishGameUI.prototype.chushihuaNav = function () {
        var _this = this;
        var rArr = [0, 1, 2, 3, 4, 5];
        rArr = Utility_1.default.shuffleArr(rArr);
        var randNum = Math.floor(Math.random() * 6);
        var _loop_1 = function (i) {
            var item = this_1.rootNode.children[rArr[0]];
            rArr.splice(rArr.indexOf(rArr[0]), 1);
            var icon = item.getChildByName('icon').getComponent(cc.Sprite);
            var finger = item.getChildByName('finger');
            ExportUtils_1.default.instance.loadImgByUrl(icon, ExportUtils_1.default.instance.navigateAppArr[this_1.navId].icon);
            finger.active = randNum == i;
            var id = this_1.navId;
            item.off(cc.Node.EventType.TOUCH_END);
            item.on(cc.Node.EventType.TOUCH_END, function (event) { _this.tiaozhuanCB(event, id); }, this_1);
            this_1.navId++;
        };
        var this_1 = this;
        for (var i = 0; i < 6; i++) {
            _loop_1(i);
        }
    };
    __decorate([
        property(cc.Node)
    ], FinishGameUI.prototype, "rootNode", void 0);
    FinishGameUI = __decorate([
        ccclass
    ], FinishGameUI);
    return FinishGameUI;
}(cc.Component));
exports.default = FinishGameUI;

cc._RF.pop();