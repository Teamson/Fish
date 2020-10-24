"use strict";
cc._RF.push(module, '12943VnbVBF/JhC43WoEYow', 'DrawUI');
// ExportLibs/View/DrawUI.ts

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
var DrawUI = /** @class */ (function (_super) {
    __extends(DrawUI, _super);
    function DrawUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.scroll = null;
        _this.content = null;
        _this.bgNode = null;
        _this.myNavArr = [];
        _this.closeCallback = null;
        _this.isAutoClose = false;
        _this.hadTouch = false;
        return _this;
    }
    // onLoad () {}
    DrawUI.prototype.start = function () {
    };
    DrawUI.prototype.showUI = function (callback, param) {
        if (callback) {
            this.closeCallback = callback;
        }
        if (param && param.isAutoClose) {
            this.isAutoClose = param.isAutoClose;
        }
        WxApi_1.default.aldEvent('左边抽屉导出弹窗出现次数');
        this.node.active = true;
        this.moveDraw(-375, function () { });
    };
    DrawUI.prototype.onEnable = function () {
        var _this = this;
        this.myNavArr = [].concat(ExportUtils_1.default.instance.navigateAppArr);
        this._init();
        if (this.isAutoClose) {
            this.scheduleOnce(function () {
                if (!_this.hadTouch)
                    _this.closeCB();
            }, 1.5);
        }
    };
    DrawUI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
        this.content.destroyAllChildren();
        this.closeCallback && this.closeCallback();
        this.closeCallback = null;
        this.bgNode.x = -1000;
        this.hadTouch = false;
    };
    DrawUI.prototype.moveDraw = function (x, cb) {
        var a1 = cc.moveTo(0.2, cc.v2(x, this.bgNode.y));
        var a2 = cc.callFunc(cb);
        this.bgNode.runAction(cc.sequence(a1, a2));
    };
    DrawUI.prototype._init = function () {
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
    DrawUI.prototype.closeCB = function () {
        var _this = this;
        this.moveDraw(-1000, function () {
            _this.node.active = false;
        });
    };
    DrawUI.prototype.navCB = function (event, id) {
        var _this = this;
        console.log('click id:', id);
        this.hadTouch = true;
        WxApi_1.default.aldEvent('左边抽屉导出弹窗-总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
                _this.scheduleOnce(function () { AdMgr_1.default.instance.showBanner(); }, 0.1);
            });
        }, function () {
            WxApi_1.default.aldEvent('左边抽屉导出弹窗全-总成功跳转数');
        });
    };
    DrawUI.prototype.update = function (dt) {
        if (!this.hadTouch && this.scroll.isScrolling()) {
            this.hadTouch = true;
        }
    };
    __decorate([
        property(cc.Node)
    ], DrawUI.prototype, "item", void 0);
    __decorate([
        property(cc.ScrollView)
    ], DrawUI.prototype, "scroll", void 0);
    __decorate([
        property(cc.Node)
    ], DrawUI.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], DrawUI.prototype, "bgNode", void 0);
    DrawUI = __decorate([
        ccclass
    ], DrawUI);
    return DrawUI;
}(cc.Component));
exports.default = DrawUI;

cc._RF.pop();