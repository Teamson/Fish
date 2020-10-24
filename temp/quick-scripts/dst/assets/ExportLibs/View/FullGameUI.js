
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/FullGameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcRnVsbEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4Q0FBbUM7QUFDbkMscURBQWdEO0FBQ2hELGtEQUE2QztBQUM3QyxpREFBNEM7QUFDNUMsa0VBQTZEO0FBRXZELElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFEcEQ7UUFBQSxxRUF3R0M7UUFwR0csVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUc1QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBRXZCLGNBQVEsR0FBVSxFQUFFLENBQUE7UUFFcEIsWUFBTSxHQUFhLEVBQUUsQ0FBQTtRQUVyQixtQkFBYSxHQUFhLElBQUksQ0FBQTs7UUF1RjlCLGlCQUFpQjtJQUNyQixDQUFDO0lBdEZHLGVBQWU7SUFFZiwwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxRQUFtQixFQUFFLEtBQVc7UUFDbkMsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQTtTQUNoQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUN2QixlQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNaLElBQUkscUJBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHFCQUFxQixF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QVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQWpHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNFO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7OENBQ0k7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDSztJQVROLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F1RzlCO0lBQUQsaUJBQUM7Q0F2R0QsQUF1R0MsQ0F2R3VDLEVBQUUsQ0FBQyxTQUFTLEdBdUduRDtrQkF2R29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSkpIdHRwIGZyb20gXCIuLi9FeHBvcnRIdHRwVXRpbHNcIjtcclxuaW1wb3J0IEpKTWdyIGZyb20gXCIuLi9FeHBvcnRVdGlsc1wiO1xyXG5pbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgV3hBcGkgZnJvbSBcIi4uLy4uL1NjcmlwdHMvTGlicy9XeEFwaVwiO1xyXG5pbXBvcnQgQWRNZ3IgZnJvbSBcIi4uLy4uL1NjcmlwdHMvTW9kL0FkTWdyXCI7XHJcbmltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi8uLi9TY3JpcHRzL0xpYnMvUGxheWVyRGF0YU1nclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxHYW1lVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcclxuICAgIHNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgbXlOYXZBcnI6IGFueVtdID0gW11cclxuXHJcbiAgICBob3RBcnI6IG51bWJlcltdID0gW11cclxuXHJcbiAgICBjbG9zZUNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1VJKGNhbGxiYWNrPzogRnVuY3Rpb24sIHBhcmFtPzogYW55KSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VDYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+e9kee6oueIhuasvuWFqOWxj+W5leWvvOWHuumhteWHuueOsOasoeaVsCcpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5teU5hdkFyciA9IFtdLmNvbmNhdChKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFycilcclxuICAgICAgICB0aGlzLmdldEhvdFJhbmRBcnIoKVxyXG4gICAgICAgIHRoaXMuX2luaXQoKVxyXG4gICAgICAgIGlmIChKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfYWxsX3NjcmVlbl9hdXRvKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZG9tTmF2KClcclxuICAgICAgICB9XHJcbiAgICAgICAgVXRpbGl0eS5kZWxheUFjdGl2ZSh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2NvbnRpbnVlQnRuJyksIEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9leHBvcnRfZGVsYXkgLyAxMDAwLCB0aGlzKVxyXG5cclxuICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIFd4QXBpLmJhbm5lcld1Q2h1MigpXHJcbiAgICAgICAgfSwgSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X2V4cG9ydF9kZWxheSAvIDEwMDApXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncmFuZG9tQnRuJykuYWN0aXZlID0gV3hBcGkuaXNWYWxpZEJhbm5lcigpICYmXHJcbiAgICAgICAgICAgIFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlID49IEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9yYW5kb21wYWx5X3N0YXJ0X2xldmVsXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChXeEFwaS5iYW5uZXJUTzIpXHJcbiAgICAgICAgQWRNZ3IuaW5zdGFuY2UuaGlkZUJhbm5lcigpXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKClcclxuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgJiYgdGhpcy5jbG9zZUNhbGxiYWNrKClcclxuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SG90UmFuZEFycigpIHtcclxuICAgICAgICB0aGlzLmhvdEFyciA9IFtdXHJcbiAgICAgICAgbGV0IGFycjogbnVtYmVyW10gPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOF1cclxuICAgICAgICBhcnIgPSBKSk1nci5pbnN0YW5jZS5zaHVmZmxlQXJyKGFycilcclxuICAgICAgICB0aGlzLmhvdEFyciA9IGFyci5zbGljZSgwLCAzKVxyXG4gICAgfVxyXG5cclxuICAgIF9pbml0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5teU5hdkFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbSlcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChub2RlKVxyXG5cclxuICAgICAgICAgICAgbGV0IGNvbG9yQmFyOiBjYy5TcHJpdGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdjb2xvckJhcicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgICAgIGxldCBuYW1lOiBjYy5MYWJlbCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIGxldCBpY29uOiBjYy5TcHJpdGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdpY29uJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICAgICAgbGV0IGhvdDogY2MuTm9kZSA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2hvdCcpXHJcblxyXG4gICAgICAgICAgICBKSk1nci5pbnN0YW5jZS5sb2FkU3ByaXRlRnJhbWUoJ0V4cG9ydFJlcy8nICsgKE1hdGguZmxvb3IoaSAlIDkpICsgMSksIGNvbG9yQmFyKVxyXG4gICAgICAgICAgICBuYW1lLnN0cmluZyA9IEpKTWdyLmluc3RhbmNlLmdldFN1YnRpdGxlKGkpXHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLmxvYWRJbWdCeVVybChpY29uLCB0aGlzLm15TmF2QXJyW2ldLmljb24pXHJcbiAgICAgICAgICAgIGhvdC5hY3RpdmUgPSB0aGlzLmhvdEFyci5pbmRleE9mKGkpICE9IC0xXHJcblxyXG4gICAgICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7IHRoaXMubmF2Q0IoZXZlbnQsIGkpIH0sIHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRpbnVlQ0IoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tTmF2KCkge1xyXG4gICAgICAgIGxldCBpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpXHJcbiAgICAgICAgdGhpcy5uYXZDQihudWxsLCBpZClcclxuICAgIH1cclxuXHJcbiAgICBuYXZDQihldmVudDogY2MuRXZlbnQsIGlkOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2sgaWQ6JywgaWQpXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+e9kee6oueIhuasvuWFqOWxj+W5leWvvOWHuumhtS3mgLvngrnlh7vmlbAnKVxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLk5hdmlnYXRlQXBwKGlkLCAoKSA9PiB7IH0sICgpID0+IHtcclxuICAgICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+e9kee6oueIhuasvuWFqOWxj+W5leWvvOWHuumhtS3mgLvmiJDlip/ot7PovazmlbAnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=