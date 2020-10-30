
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/MadUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9f8dQB2vlLnJ9itYsKp7L5', 'MadUI');
// Scripts/UI/MadUI.ts

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
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var WxApi_1 = require("../Libs/WxApi");
var AdMgr_1 = require("../Mod/AdMgr");
var Utility_1 = require("../Mod/Utility");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MadUI = /** @class */ (function (_super) {
    __extends(MadUI, _super);
    function MadUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.pBar = null;
        _this.lightPt = null;
        _this.gun = null;
        _this.hadShowBanner = false;
        _this.hadClick = false;
        _this.closeCallback = null;
        _this.wuchuType = 1;
        _this.sectionNum = 0;
        _this.ptIsPlaying = false;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    MadUI.prototype.start = function () {
    };
    MadUI.prototype.onEnable = function () {
    };
    MadUI.prototype.onDisable = function () {
        this.closeCallback && this.closeCallback();
        WxApi_1.default.isKillBossUI = false;
    };
    MadUI.prototype.showUI = function (closeCallback) {
        var _this = this;
        AdMgr_1.default.instance.hideBanner();
        this.closeCallback = closeCallback;
        this.node.active = true;
        this.closeBtn.active = false;
        this.sectionNum = Utility_1.default.getRandomItemInArr(WxApi_1.default.splitSection());
        var randNum = Math.random() * 100;
        if (randNum <= ExportUtils_1.default.instance.exportCfg.front_water_type_chance) {
            this.wuchuType = 1;
        }
        else {
            this.wuchuType = 2;
        }
        this.schedule(this.jianshaoBar);
        WxApi_1.default.isKillBossUI = true;
        var self = this;
        WxApi_1.default.WxOffHide(WxApi_1.default.madUICallback);
        WxApi_1.default.madUICallback = function () {
            if (WxApi_1.default.isKillBossUI) {
                self.unschedule(_this.jianshaoBar);
                self.node.active = false;
                var num = Math.floor(Math.random() * 300 + 200);
                PlayerDataMgr_1.default.changeCoin(num);
                WxApi_1.default.OpenAlert('成功领取' + num + '金币');
            }
        };
        WxApi_1.default.WxOnHide(WxApi_1.default.madUICallback);
    };
    MadUI.prototype.closeCB = function () {
        this.node.active = false;
    };
    MadUI.prototype.closeBtnCB = function () {
        this.node.active = false;
    };
    MadUI.prototype.clickCB = function () {
        var _this = this;
        if (!this.hadClick) {
            this.hadClick = true;
            this.scheduleOnce(this.closeCB, ExportUtils_1.default.instance.exportCfg.front_water_hide / 1000);
            Utility_1.default.delayActive(this.closeBtn, ExportUtils_1.default.instance.exportCfg.front_close_appear / 1000, this);
        }
        if (!this.hadShowBanner) {
            if (this.wuchuType == 1) {
                this.hadShowBanner = true;
                this.scheduleOnce(function () {
                    _this.unschedule(_this.jianshaoBar);
                    AdMgr_1.default.instance.showBanner();
                }, 1);
            }
            else {
                if (this.pBar.progress * 100 >= this.sectionNum) {
                    this.hadShowBanner = true;
                    this.unschedule(this.jianshaoBar);
                    AdMgr_1.default.instance.showBanner();
                }
            }
        }
        this.pBar.progress += 0.1;
        if (this.pBar.progress > 0.7) {
            this.pBar.progress = 0.7;
        }
        if (!this.ptIsPlaying) {
            this.gun.angle = -30;
            this.gun.stopAllActions();
            this.gun.runAction(cc.rotateTo(0.2, 0));
            this.ptIsPlaying = true;
            this.lightPt.active = true;
            this.scheduleOnce(function () {
                _this.lightPt.active = false;
                _this.ptIsPlaying = false;
            }, 0.1);
        }
    };
    MadUI.prototype.jianshaoBar = function () {
        this.pBar.progress -= 0.003;
        if (this.pBar.progress < 0) {
            this.pBar.progress = 0;
        }
    };
    __decorate([
        property(cc.Node)
    ], MadUI.prototype, "closeBtn", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], MadUI.prototype, "pBar", void 0);
    __decorate([
        property(cc.Node)
    ], MadUI.prototype, "lightPt", void 0);
    __decorate([
        property(cc.Node)
    ], MadUI.prototype, "gun", void 0);
    MadUI = __decorate([
        ccclass
    ], MadUI);
    return MadUI;
}(cc.Component));
exports.default = MadUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXE1hZFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUFpRDtBQUNqRCx1REFBa0Q7QUFDbEQsdUNBQWtDO0FBQ2xDLHNDQUFpQztBQUNqQywwQ0FBcUM7QUFFL0IsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUQvQztRQUFBLHFFQWtJQztRQTlIRyxjQUFRLEdBQVksSUFBSSxDQUFBO1FBR3hCLFVBQUksR0FBbUIsSUFBSSxDQUFBO1FBRzNCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixtQkFBYSxHQUFZLEtBQUssQ0FBQTtRQUM5QixjQUFRLEdBQVksS0FBSyxDQUFBO1FBRXpCLG1CQUFhLEdBQWEsSUFBSSxDQUFBO1FBQzlCLGVBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIsZ0JBQVUsR0FBVyxDQUFDLENBQUE7UUFFdEIsaUJBQVcsR0FBWSxLQUFLLENBQUE7O1FBNEc1QixpQkFBaUI7SUFDckIsQ0FBQztJQTNHRyxlQUFlO0lBRWYscUJBQUssR0FBTDtJQUVBLENBQUM7SUFDRCx3QkFBUSxHQUFSO0lBRUEsQ0FBQztJQUVELHlCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUMxQyxlQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQTtJQUM5QixDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFPLGFBQXdCO1FBQS9CLGlCQWlDQztRQS9CRyxlQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUN2QixJ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Q0FBQzsyQ0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3VDQUNFO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzQ0FDQztJQVhGLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FpSXpCO0lBQUQsWUFBQztDQWpJRCxBQWlJQyxDQWpJa0MsRUFBRSxDQUFDLFNBQVMsR0FpSTlDO2tCQWpJb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKSk1nciBmcm9tIFwiLi4vLi4vRXhwb3J0TGlicy9FeHBvcnRVdGlsc1wiO1xyXG5pbXBvcnQgUGxheWVyRGF0YU1nciBmcm9tIFwiLi4vTGlicy9QbGF5ZXJEYXRhTWdyXCI7XHJcbmltcG9ydCBXeEFwaSBmcm9tIFwiLi4vTGlicy9XeEFwaVwiO1xyXG5pbXBvcnQgQWRNZ3IgZnJvbSBcIi4uL01vZC9BZE1nclwiO1xyXG5pbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vTW9kL1V0aWxpdHlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWRVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjbG9zZUJ0bjogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpZ2h0UHQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGd1bjogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBoYWRTaG93QmFubmVyOiBib29sZWFuID0gZmFsc2VcclxuICAgIGhhZENsaWNrOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBjbG9zZUNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGxcclxuICAgIHd1Y2h1VHlwZTogbnVtYmVyID0gMVxyXG4gICAgc2VjdGlvbk51bTogbnVtYmVyID0gMFxyXG5cclxuICAgIHB0SXNQbGF5aW5nOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBvbkVuYWJsZSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VDYWxsYmFjayAmJiB0aGlzLmNsb3NlQ2FsbGJhY2soKVxyXG4gICAgICAgIFd4QXBpLmlzS2lsbEJvc3NVSSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1VJKGNsb3NlQ2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG5cclxuICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgPSBjbG9zZUNhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmNsb3NlQnRuLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIHRoaXMuc2VjdGlvbk51bSA9IFV0aWxpdHkuZ2V0UmFuZG9tSXRlbUluQXJyKFd4QXBpLnNwbGl0U2VjdGlvbigpKVxyXG5cclxuICAgICAgICBsZXQgcmFuZE51bTogbnVtYmVyID0gTWF0aC5yYW5kb20oKSAqIDEwMFxyXG4gICAgICAgIGlmIChyYW5kTnVtIDw9IEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF93YXRlcl90eXBlX2NoYW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLnd1Y2h1VHlwZSA9IDFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnd1Y2h1VHlwZSA9IDJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5qaWFuc2hhb0JhcilcclxuXHJcbiAgICAgICAgV3hBcGkuaXNLaWxsQm9zc1VJID0gdHJ1ZVxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xyXG5cclxuICAgICAgICBXeEFwaS5XeE9mZkhpZGUoV3hBcGkubWFkVUlDYWxsYmFjaylcclxuICAgICAgICBXeEFwaS5tYWRVSUNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoV3hBcGkuaXNLaWxsQm9zc1VJKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnVuc2NoZWR1bGUodGhpcy5qaWFuc2hhb0JhcilcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMDAgKyAyMDApXHJcbiAgICAgICAgICAgICAgICBQbGF5ZXJEYXRhTWdyLmNoYW5nZUNvaW4obnVtKVxyXG4gICAgICAgICAgICAgICAgV3hBcGkuT3BlbkFsZXJ0KCfmiJDlip/pooblj5YnICsgbnVtICsgJ+mHkeW4gScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgV3hBcGkuV3hPbkhpZGUoV3hBcGkubWFkVUlDYWxsYmFjaylcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUNCKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQnRuQ0IoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tDQigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFkQ2xpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5oYWRDbGljayA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5jbG9zZUNCLCBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfd2F0ZXJfaGlkZSAvIDEwMDApXHJcblxyXG4gICAgICAgICAgICBVdGlsaXR5LmRlbGF5QWN0aXZlKHRoaXMuY2xvc2VCdG4sIEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9jbG9zZV9hcHBlYXIgLyAxMDAwLCB0aGlzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmhhZFNob3dCYW5uZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMud3VjaHVUeXBlID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFkU2hvd0Jhbm5lciA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5qaWFuc2hhb0JhcilcclxuICAgICAgICAgICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKClcclxuICAgICAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wQmFyLnByb2dyZXNzICogMTAwID49IHRoaXMuc2VjdGlvbk51bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFkU2hvd0Jhbm5lciA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5qaWFuc2hhb0JhcilcclxuICAgICAgICAgICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBCYXIucHJvZ3Jlc3MgKz0gMC4xXHJcbiAgICAgICAgaWYgKHRoaXMucEJhci5wcm9ncmVzcyA+IDAuNykge1xyXG4gICAgICAgICAgICB0aGlzLnBCYXIucHJvZ3Jlc3MgPSAwLjdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wdElzUGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLmd1bi5hbmdsZSA9IC0zMFxyXG4gICAgICAgICAgICB0aGlzLmd1bi5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgICAgIHRoaXMuZ3VuLnJ1bkFjdGlvbihjYy5yb3RhdGVUbygwLjIsIDApKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wdElzUGxheWluZyA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5saWdodFB0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saWdodFB0LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnB0SXNQbGF5aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgfSwgMC4xKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBqaWFuc2hhb0JhcigpIHtcclxuICAgICAgICB0aGlzLnBCYXIucHJvZ3Jlc3MgLT0gMC4wMDNcclxuICAgICAgICBpZiAodGhpcy5wQmFyLnByb2dyZXNzIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnBCYXIucHJvZ3Jlc3MgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19