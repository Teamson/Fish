
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/FriendGameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcRnJpZW5kR2FtZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUFrRDtBQUNsRCxrREFBNkM7QUFDN0MsaURBQTRDO0FBR3RDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFEdEQ7UUFBQSxxRUFpRkM7UUE3RUcsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUc1QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBRXZCLGNBQVEsR0FBVSxFQUFFLENBQUE7UUFFcEIsbUJBQWEsR0FBYSxJQUFJLENBQUE7O1FBa0U5QixpQkFBaUI7SUFDckIsQ0FBQztJQWpFRyxlQUFlO0lBRWYsNEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sUUFBbUIsRUFBRSxLQUFXO1FBQ25DLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUE7U0FDaEM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDdkIsZUFBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLElBQUksQ0FB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QUQsbUJBQUM7Q0FoRkQsQUFnRkMsQ0FoRnlDLEVBQUUsQ0FBQyxTQUFTLEdBZ0ZyRDtrQkFoRm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSkpNZ3IsIHsgRXhwb3J0RGlyIH0gZnJvbSBcIi4uL0V4cG9ydFV0aWxzXCI7XHJcbmltcG9ydCBXeEFwaSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9MaWJzL1d4QXBpXCI7XHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vLi4vU2NyaXB0cy9Nb2QvQWRNZ3JcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uLy4uL1NjcmlwdHMvTW9kL1V0aWxpdHlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRHYW1lVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcclxuICAgIHNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgbXlOYXZBcnI6IGFueVtdID0gW11cclxuXHJcbiAgICBjbG9zZUNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1VJKGNhbGxiYWNrPzogRnVuY3Rpb24sIHBhcmFtPzogYW55KSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VDYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+WlveWPi+mDveWcqOeOqeeahOeIhuasvua4uOaIj+W8ueeql+WHuueOsOasoeaVsCcpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5teU5hdkFyciA9IFtdLmNvbmNhdChKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFycilcclxuICAgICAgICB0aGlzLl9pbml0KClcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2Nsb3NlQnRuJykuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnY2xvc2VCdG4nKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIEFkTWdyLmluc3RhbmNlLmhpZGVCYW5uZXIoKVxyXG4gICAgICAgICAgICBXeEFwaS5iYW5uZXJXdUNodTEoKVxyXG4gICAgICAgIH0sIDEuNSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KFd4QXBpLmJhbm5lclRPMSlcclxuICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgIHRoaXMuY29udGVudC5kZXN0cm95QWxsQ2hpbGRyZW4oKVxyXG4gICAgICAgIHRoaXMuY2xvc2VDYWxsYmFjayAmJiB0aGlzLmNsb3NlQ2FsbGJhY2soKVxyXG4gICAgICAgIHRoaXMuY2xvc2VDYWxsYmFjayA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlOYXZBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pXHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQobm9kZSlcclxuXHJcbiAgICAgICAgICAgIGxldCBuYW1lOiBjYy5MYWJlbCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIGxldCBpY29uOiBjYy5TcHJpdGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdpY29uJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuXHJcbiAgICAgICAgICAgIG5hbWUuc3RyaW5nID0gSkpNZ3IuaW5zdGFuY2UuZ2V0U3VidGl0bGUoaSlcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2UubG9hZEltZ0J5VXJsKGljb24sIHRoaXMubXlOYXZBcnJbaV0uaWNvbilcclxuXHJcbiAgICAgICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHsgdGhpcy5uYXZDQihldmVudCwgaSkgfSwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VDQigpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBuYXZDQihldmVudDogY2MuRXZlbnQsIGlkOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2sgaWQ6JywgaWQpXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+WlveWPi+mDveWcqOeOqeeahOeIhuasvua4uOaIj+W8ueeqly3mgLvngrnlh7vmlbAnKVxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLk5hdmlnYXRlQXBwKGlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19GVUxMR0FNRVVJKVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+WlveWPi+mDveWcqOeOqeeahOeIhuasvua4uOaIj+W8ueeqly3mgLvmiJDlip/ot7PovazmlbAnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=