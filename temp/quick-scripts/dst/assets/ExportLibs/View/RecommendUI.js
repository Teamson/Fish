
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/RecommendUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcUmVjb21tZW5kVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQWtEO0FBQ2xELGtEQUE2QztBQUM3QyxpREFBNEM7QUFFNUMsa0VBQTZEO0FBRXZELElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFEckQ7UUFBQSxxRUE0RkM7UUF6RkcsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUc1QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBRXZCLGNBQVEsR0FBVSxFQUFFLENBQUE7UUFFcEIsbUJBQWEsR0FBYSxJQUFJLENBQUE7O0lBK0VsQyxDQUFDO0lBN0VHLGVBQWU7SUFFZiwyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxRQUFtQixFQUFFLEtBQVc7UUFDbkMsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQTtTQUNoQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUN2QixlQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRVosZUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUMzQixJQUFJLHFCQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRTtZQUNsRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7U0FDbkI7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ZSxFQUFFLEVBQVU7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDNUIsZUFBSyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQ2pDLHFCQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsY0FBUSxDQUFDLEVBQUU7WUFDdEMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxFQUFFO0lBRVQsQ0FBQztJQXhGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNFO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7K0NBQ0k7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSztJQVJOLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EyRi9CO0lBQUQsa0JBQUM7Q0EzRkQsQUEyRkMsQ0EzRndDLEVBQUUsQ0FBQyxTQUFTLEdBMkZwRDtrQkEzRm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSkpNZ3IsIHsgRXhwb3J0RGlyIH0gZnJvbSBcIi4uL0V4cG9ydFV0aWxzXCI7XHJcbmltcG9ydCBXeEFwaSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9MaWJzL1d4QXBpXCI7XHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vLi4vU2NyaXB0cy9Nb2QvQWRNZ3JcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uLy4uL1NjcmlwdHMvTW9kL1V0aWxpdHlcIjtcclxuaW1wb3J0IFBsYXllckRhdGFNZ3IgZnJvbSBcIi4uLy4uL1NjcmlwdHMvTGlicy9QbGF5ZXJEYXRhTWdyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb21tZW5kVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpdGVtOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxyXG4gICAgc2Nyb2xsOiBjYy5TY3JvbGxWaWV3ID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY29udGVudDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBteU5hdkFycjogYW55W10gPSBbXVxyXG5cclxuICAgIGNsb3NlQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbFxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93VUkoY2FsbGJhY2s/OiBGdW5jdGlvbiwgcGFyYW0/OiBhbnkpIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUNhbGxiYWNrID0gY2FsbGJhY2tcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBXeEFwaS5hbGRFdmVudCgn54Ot6Zeo5o6o6I2Q5YWo5bGP5bmV5a+85Ye66aG15Ye6546w5qyh5pWwJylcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm15TmF2QXJyID0gW10uY29uY2F0KEpKTWdyLmluc3RhbmNlLm5hdmlnYXRlQXBwQXJyKVxyXG4gICAgICAgIHRoaXMuX2luaXQoKVxyXG5cclxuICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICBpZiAoSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3JlbWVuX3NjcmVlbl9hdXRvKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZG9tTmF2KClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdjb250aW51ZUJ0bicpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgaWYgKFd4QXBpLmlzVmFsaWRCYW5uZXIoKSAmJiBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSA+PSBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfY29udGludWVnYW1lX3N0YXJ0X2xldmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnY29udGludWVCdG4nKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIFd4QXBpLmJhbm5lcld1Q2h1MigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQoV3hBcGkuYmFubmVyVE8yKVxyXG4gICAgICAgIEFkTWdyLmluc3RhbmNlLmhpZGVCYW5uZXIoKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgdGhpcy5jb250ZW50LmRlc3Ryb3lBbGxDaGlsZHJlbigpXHJcbiAgICAgICAgdGhpcy5jbG9zZUNhbGxiYWNrICYmIHRoaXMuY2xvc2VDYWxsYmFjaygpXHJcbiAgICAgICAgdGhpcy5jbG9zZUNhbGxiYWNrID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIF9pbml0KCkge1xyXG4gICAgICAgIGxldCBmaW5nZXJOdW06IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm15TmF2QXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtKVxyXG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKG5vZGUpXHJcblxyXG4gICAgICAgICAgICBsZXQgbmFtZTogY2MuTGFiZWwgPSBub2RlLmdldENoaWxkQnlOYW1lKCduYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICBsZXQgaWNvbjogY2MuU3ByaXRlID0gbm9kZS5nZXRDaGlsZEJ5TmFtZSgnaWNvbicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgICAgIGxldCBmaW5nZXI6IGNjLk5vZGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdmaW5nZXInKVxyXG5cclxuICAgICAgICAgICAgbmFtZS5zdHJpbmcgPSBKSk1nci5pbnN0YW5jZS5nZXRTdWJ0aXRsZShpKVxyXG4gICAgICAgICAgICBKSk1nci5pbnN0YW5jZS5sb2FkSW1nQnlVcmwoaWNvbiwgdGhpcy5teU5hdkFycltpXS5pY29uKVxyXG4gICAgICAgICAgICBmaW5nZXIuYWN0aXZlID0gaSA9PSBmaW5nZXJOdW1cclxuXHJcbiAgICAgICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHsgdGhpcy5uYXZDQihldmVudCwgaSkgfSwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29udGludWVDQigpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21OYXYoKSB7XHJcbiAgICAgICAgbGV0IGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNilcclxuICAgICAgICB0aGlzLm5hdkNCKG51bGwsIGlkKVxyXG4gICAgfVxyXG5cclxuICAgIG5hdkNCKGV2ZW50OiBjYy5FdmVudCwgaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGljayBpZDonLCBpZClcclxuICAgICAgICBXeEFwaS5hbGRFdmVudCgn54Ot6Zeo5o6o6I2Q5YWo5bGP5bmV5a+85Ye66aG1LeaAu+eCueWHu+aVsCcpXHJcbiAgICAgICAgSkpNZ3IuaW5zdGFuY2UuTmF2aWdhdGVBcHAoaWQsICgpID0+IHsgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn54Ot6Zeo5o6o6I2Q5YWo5bGP5bmV5a+85Ye66aG1LeaAu+aIkOWKn+i3s+i9rOaVsCcpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19