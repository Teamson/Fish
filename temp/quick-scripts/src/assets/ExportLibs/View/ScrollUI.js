"use strict";
cc._RF.push(module, '031b7VcdSJJzpl/U/4pTZPt', 'ScrollUI');
// ExportLibs/View/ScrollUI.ts

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
var ScrollUI = /** @class */ (function (_super) {
    __extends(ScrollUI, _super);
    function ScrollUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.scroll = null;
        _this.content = null;
        _this.isGameUI = false;
        _this.myNavArr = [];
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    ScrollUI.prototype.start = function () {
    };
    ScrollUI.prototype.showUI = function (callback, param) {
        this.node.active = true;
        if (this.isGameUI) {
            WxApi_1.default.aldEvent('顶部导出栏出现次数');
        }
        else {
            WxApi_1.default.aldEvent('底部导出栏出现次数');
        }
    };
    ScrollUI.prototype.onEnable = function () {
        this.myNavArr = [].concat(ExportUtils_1.default.instance.navigateAppArr);
        this._init();
    };
    ScrollUI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
        this.content.destroyAllChildren();
    };
    ScrollUI.prototype._init = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var node = cc.instantiate(this_1.item);
            node.active = true;
            node.setPosition(cc.v2(0, 0));
            this_1.content.addChild(node);
            var icon = node.getChildByName('icon').getComponent(cc.Sprite);
            ExportUtils_1.default.instance.loadImgByUrl(icon, this_1.myNavArr[i].icon);
            node.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, i); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.myNavArr.length; i++) {
            _loop_1(i);
        }
    };
    ScrollUI.prototype.closeCB = function () {
        this.node.active = false;
    };
    ScrollUI.prototype.navCB = function (event, id) {
        var _this = this;
        console.log('click id:', id);
        if (this.isGameUI) {
            WxApi_1.default.aldEvent('顶部导出栏-总点击数');
        }
        else {
            WxApi_1.default.aldEvent('底部导出栏-总点击数');
        }
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            if (_this.isGameUI)
                ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FULLGAMEUI, null, function () { AdMgr_1.default.instance.showBanner(); });
        }, function () {
            if (_this.isGameUI) {
                WxApi_1.default.aldEvent('顶部导出栏-总成功跳转数');
            }
            else {
                WxApi_1.default.aldEvent('底部导出栏-总成功跳转数');
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], ScrollUI.prototype, "item", void 0);
    __decorate([
        property(cc.ScrollView)
    ], ScrollUI.prototype, "scroll", void 0);
    __decorate([
        property(cc.Node)
    ], ScrollUI.prototype, "content", void 0);
    __decorate([
        property
    ], ScrollUI.prototype, "isGameUI", void 0);
    ScrollUI = __decorate([
        ccclass
    ], ScrollUI);
    return ScrollUI;
}(cc.Component));
exports.default = ScrollUI;

cc._RF.pop();