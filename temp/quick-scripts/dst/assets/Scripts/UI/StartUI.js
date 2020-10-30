
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/StartUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c440E0AN1GhoEwMJ/4egfp', 'StartUI');
// Scripts/UI/StartUI.ts

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
var TimeCountMgr_1 = require("../Libs/TimeCountMgr");
var WxApi_1 = require("../Libs/WxApi");
var AdMgr_1 = require("../Mod/AdMgr");
var ShareMgr_1 = require("../Mod/ShareMgr");
var Utility_1 = require("../Mod/Utility");
var MadUI_1 = require("./MadUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StartUI = /** @class */ (function (_super) {
    __extends(StartUI, _super);
    function StartUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GetFishUI = null;
        _this.GetPowerUI = null;
        _this.GetTipsUI = null;
        _this.powerNum = null;
        _this.powerTime = null;
        _this.tipsNum = null;
        _this.gradeNum = null;
        _this.fishLvNum = null;
        _this.nameNode = null;
        _this.leftLvNum = null;
        _this.drawBtn = null;
        _this.moreGameBtn = null;
        _this.navNode = null;
        _this.madCrl = null;
        return _this;
    }
    StartUI.prototype.onLoad = function () { };
    StartUI.prototype.start = function () {
        this.initFishData();
        if (!WxApi_1.default.isFromSkinUI) {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FRIENDGAME, null, function () {
                if (!WxApi_1.default.firstStartUI) {
                    WxApi_1.default.firstStartUI = true;
                    ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
                        AdMgr_1.default.instance.showBanner();
                    });
                }
                else {
                    AdMgr_1.default.instance.showBanner();
                }
            });
        }
        else {
            AdMgr_1.default.instance.showBanner();
            WxApi_1.default.isFromSkinUI = false;
        }
        this.chushihuaNav();
        for (var i = 0; i < this.navNode.childrenCount; i++) {
            Utility_1.default.rotateLoop(this.navNode.children[i], 0.5, 8);
        }
        this.schedule(this.chushihuaNav, 3);
        this.navNode.active = WxApi_1.default.getIsExportValid();
        this.drawBtn.active = WxApi_1.default.getIsExportValid();
        this.moreGameBtn.active = WxApi_1.default.getIsExportValid();
    };
    StartUI.prototype.initFishData = function () {
        this.fishLvNum.string = PlayerDataMgr_1.default.getPlayerLv().toString();
        for (var i = 0; i < this.nameNode.childrenCount; i++) {
            this.nameNode.children[i].active = i + 1 == PlayerDataMgr_1.default.getPlayerLv();
        }
        if (PlayerDataMgr_1.default.getLeftLv() == 0) {
            this.leftLvNum.node.parent.active = false;
        }
        else {
            this.leftLvNum.string = PlayerDataMgr_1.default.getLeftLv().toString();
        }
    };
    StartUI.prototype.startGameCB = function () {
        var _this = this;
        if (PlayerDataMgr_1.default.getPlayerData().power > 0) {
            PlayerDataMgr_1.default.changePower(-1);
            WxApi_1.default.aldEvent('点击开始游戏按钮人数');
            ExportUtils_1.default.instance.closeAllExportUI();
            var cb = function () {
                var cb1 = function () {
                    ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FULLGAMEUI, null, function () {
                        cc.director.loadScene('GameScene');
                    });
                };
                var curG = PlayerDataMgr_1.default.getPlayerData().grade;
                var gGap = (curG - ExportUtils_1.default.instance.exportCfg.front_water_start_level) % ExportUtils_1.default.instance.exportCfg.front_water_level_interval == 0 &&
                    curG >= ExportUtils_1.default.instance.exportCfg.front_water_start_level;
                if (gGap && !AdMgr_1.default.instance.isBannerError && WxApi_1.default.isValidBanner()) {
                    _this.madCrl.showUI(cb1);
                }
                else {
                    cc.director.loadScene('GameScene');
                }
            };
            if (WxApi_1.default.isValidBanner() && ExportUtils_1.default.instance.exportCfg.front_start_game_switch && !AdMgr_1.default.instance.videoIsError && !WxApi_1.default.firstShowVideo) {
                WxApi_1.default.firstShowVideo = true;
                AdMgr_1.default.instance.videoCloseCallback = cb;
                AdMgr_1.default.instance.showVideo(function () { });
            }
            else {
                cb();
            }
        }
        else {
            this.getPowerBtnCB();
        }
    };
    StartUI.prototype.getPower = function () {
        var cb = function () {
            PlayerDataMgr_1.default.changePower(3);
        };
        ShareMgr_1.default.instance.shareGame(cb);
    };
    StartUI.prototype.getFishBtnCB = function () {
        this.GetFishUI.active = true;
    };
    StartUI.prototype.getPowerBtnCB = function () {
        this.GetPowerUI.active = true;
    };
    StartUI.prototype.getTipsBtnCB = function () {
        this.GetTipsUI.active = true;
    };
    StartUI.prototype.calculatePowerTime = function () {
        var t = TimeCountMgr_1.default.Share.tCount;
        var m = Math.floor(t / 60);
        var s = Math.floor(t - m * 60);
        this.powerTime.string = m.toString() + ':' + s.toString();
        this.powerNum.string = PlayerDataMgr_1.default.getPlayerData().power.toString();
        this.powerTime.node.active = PlayerDataMgr_1.default.getPlayerData().power < PlayerDataMgr_1.default.powerMax;
    };
    StartUI.prototype.update = function (dt) {
        this.calculatePowerTime();
        this.gradeNum.string = PlayerDataMgr_1.default.getPlayerData().grade.toString();
        this.tipsNum.string = PlayerDataMgr_1.default.getPlayerData().tipsNum.toString();
    };
    StartUI.prototype.moreGameBtnCB = function () {
        WxApi_1.default.aldEvent('点我有惊喜按钮点击');
        ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FULLGAMEUI, null, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
                ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FRIENDGAME, null, function () {
                    AdMgr_1.default.instance.showBanner();
                });
            });
        });
    };
    StartUI.prototype.drawBtnCB = function () {
        WxApi_1.default.aldEvent('左边抽屉导出按钮点击');
        ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_DRAWUI);
    };
    StartUI.prototype.chushihuaNav = function () {
        var _this = this;
        var arr = [];
        for (var i = 0; i < ExportUtils_1.default.instance.navigateAppArr.length; i++) {
            arr.push(i);
        }
        arr = Utility_1.default.shuffleArr(arr);
        arr = arr.splice(0, 4);
        var _loop_1 = function (i) {
            var item = this_1.navNode.children[i];
            var icon = item.getChildByName('icon').getComponent(cc.Sprite);
            var name = item.getChildByName('name').getComponent(cc.Label);
            name.string = ExportUtils_1.default.instance.getSubtitle(arr[i]);
            ExportUtils_1.default.instance.loadImgByUrl(icon, ExportUtils_1.default.instance.navigateAppArr[arr[i]].icon);
            item.off(cc.Node.EventType.TOUCH_END);
            item.on(cc.Node.EventType.TOUCH_END, function (event) { _this.tiaozhuanCB(event, arr[i]); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.navNode.childrenCount; i++) {
            _loop_1(i);
        }
    };
    StartUI.prototype.tiaozhuanCB = function (event, id) {
        console.log('click id:', id);
        WxApi_1.default.aldEvent('首页导出位—总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
                AdMgr_1.default.instance.showBanner();
            });
        }, function () {
            WxApi_1.default.aldEvent('首页导出位—总成功跳转数');
        });
    };
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "GetFishUI", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "GetPowerUI", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "GetTipsUI", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "powerNum", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "powerTime", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "tipsNum", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "gradeNum", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "fishLvNum", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "nameNode", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "leftLvNum", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "drawBtn", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "moreGameBtn", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "navNode", void 0);
    __decorate([
        property(MadUI_1.default)
    ], StartUI.prototype, "madCrl", void 0);
    StartUI = __decorate([
        ccclass
    ], StartUI);
    return StartUI;
}(cc.Component));
exports.default = StartUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFN0YXJ0VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQWdFO0FBQ2hFLHVEQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQsdUNBQWtDO0FBQ2xDLHNDQUFpQztBQUNqQyw0Q0FBdUM7QUFDdkMsMENBQXFDO0FBQ3JDLGlDQUE0QjtBQUV0QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBRGpEO1FBQUEscUVBbU1DO1FBL0xHLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUd6QixjQUFRLEdBQWEsSUFBSSxDQUFBO1FBRXpCLGVBQVMsR0FBYSxJQUFJLENBQUE7UUFHMUIsYUFBTyxHQUFhLElBQUksQ0FBQTtRQUd4QixjQUFRLEdBQWEsSUFBSSxDQUFBO1FBR3pCLGVBQVMsR0FBYSxJQUFJLENBQUE7UUFFMUIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUd4QixlQUFTLEdBQWEsSUFBSSxDQUFBO1FBSTFCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0IsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUd2QixZQUFNLEdBQVUsSUFBSSxDQUFBOztJQTZKeEIsQ0FBQztJQTNKRyx3QkFBTSxHQUFOLGNBQVcsQ0FBQztJQUVaLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFFbkIsSUFBSSxDQUFDLGVBQUssQ0FBQyxZQUFZLEVBQUU7WUFDckIscUJBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLHVCQUFTLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRTtnQkFDekQsSUFBSSxDQUFDLGVBQUssQ0FBQyxZQUFZLEVBQUU7b0JBQ3JCLGVBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFBO29CQUN6QixxQkFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsdUJBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUU7d0JBQzFELGVBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7b0JBQy9CLENBQUMsQ0FBQyxDQUFBO2lCQUNMO3FCQUFNO29CQUNILGVBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7aUJBQzlCO1lBQ0wsQ0FBQyxDQUFDLENBQUE7U0FDTDthQUFNO1lBQ0gsZUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtZQUMzQixlQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQTtTQUM3QjtRQUVELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakQsaUJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQ3ZEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO0lBQ3RELENBQUM7SUFFRCw4QkFBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsdUJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUM5RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksdUJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtTQUMxRTtRQUNELElBQUksdUJBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7U0FDNUM7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7U0FDL0Q7SUFDTCxDQUFDO0lBRUQsNkJBQVcsR0FBWDtRQUFBLGlCQStCQztRQTlCRyxJQUFJLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUN6Qyx1QkFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzdCLGVBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDNUIscUJBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtZQUNqQyxJQUFJLEVBQUUsR0FBRztnQkFDTCxJQUFJLEdBQUcsR0FBRztvQkFDTixxQkFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsdUJBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFO3dCQUN6RCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtvQkFDdEMsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQyxDQUFBO2dCQUNELElBQUksSUFBSSxHQUFHLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxDQUFBO2dCQUM5QyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsMEJBQTBCLElBQUksQ0FBQztvQkFDM0gsSUFBSSxJQUFJLHFCQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQTtnQkFFNUQsSUFBSSxJQUFJLElBQUksQ0FBQyxlQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsSUFBSSxlQUFLLENBQUMsYUFBYSxFQUFFLEVBQUU7b0JBQ2hFLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lCQUMxQjtxQkFBTTtvQkFDSCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtpQkFDckM7WUFDTCxDQUFDLENBQUE7WUFDRCxJQUFJLGVBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLElBQUksQ0FBQyxlQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksSUFBSSxDQUFDLGVBQUssQ0FBQyxjQUFjLEVBQUU7Z0JBQ3BJLGVBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFBO2dCQUMzQixlQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQTtnQkFDdEMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBUSxDQUFDLENBQUMsQ0FBQTthQUN0QztpQkFBTTtnQkFDSCxFQUFFLEVBQUUsQ0FBQTthQUNQO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtTQUN2QjtJQUNMLENBQUM7SUFFRCwwQkFBUSxHQUFSO1FBQ0ksSUFBSSxFQUFFLEdBQUc7WUFDTCx1QkFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNoQyxDQUFDLENBQUE7UUFDRCxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELDhCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDaEMsQ0FBQztJQUVELCtCQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDakMsQ0FBQztJQUVELDhCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDaEMsQ0FBQztJQUVELG9DQUFrQixHQUFsQjtRQUNJLElBQUksQ0FBQyxHQUFHLHNCQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQTtRQUNqQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDckUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLHVCQUFhLENBQUMsUUFBUSxDQUFBO0lBQzdGLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3JFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzFFLENBQUM7SUFFRCwrQkFBYSxHQUFiO1FBQ0ksZUFBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMzQixxQkFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsdUJBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFO1lBQ3pELHFCQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyx1QkFBUyxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRTtnQkFDMUQscUJBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLHVCQUFTLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRTtvQkFDekQsZUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQkFDL0IsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDJCQUFTLEdBQVQ7UUFDSSxlQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzVCLHFCQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyx1QkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFFRCw4QkFBWSxHQUFaO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksR0FBRyxHQUFhLEVBQUUsQ0FBQTtRQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcscUJBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzRCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ2Q7UUFDRCxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDN0IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dDQUNiLENBQUM7WUFDTixJQUFJLElBQUksR0FBWSxPQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDNUMsSUFBSSxJQUFJLEdBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3pFLElBQUksSUFBSSxHQUFhLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN2RSxJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNoRCxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLHFCQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUU3RSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQUMsS0FBSyxJQUFPLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxTQUFPLENBQUE7OztRQVI5RixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFO29CQUExQyxDQUFDO1NBU1Q7SUFDTCxDQUFDO0lBQ0QsNkJBQVcsR0FBWCxVQUFZLEtBQUssRUFBRSxFQUFFO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQzVCLGVBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDNUIscUJBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRTtZQUMzQixxQkFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsdUJBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUU7Z0JBQzFELGVBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7WUFDL0IsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLEVBQUU7WUFDQyxlQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ2xDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTlMRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNPO0lBSTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLGVBQUssQ0FBQzsyQ0FDSTtJQXJDSCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBa00zQjtJQUFELGNBQUM7Q0FsTUQsQUFrTUMsQ0FsTW9DLEVBQUUsQ0FBQyxTQUFTLEdBa01oRDtrQkFsTW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSkpNZ3IsIHsgRXhwb3J0RGlyIH0gZnJvbSBcIi4uLy4uL0V4cG9ydExpYnMvRXhwb3J0VXRpbHNcIjtcclxuaW1wb3J0IFBsYXllckRhdGFNZ3IgZnJvbSBcIi4uL0xpYnMvUGxheWVyRGF0YU1nclwiO1xyXG5pbXBvcnQgVGltZUNvdW50TWdyIGZyb20gXCIuLi9MaWJzL1RpbWVDb3VudE1nclwiO1xyXG5pbXBvcnQgV3hBcGkgZnJvbSBcIi4uL0xpYnMvV3hBcGlcIjtcclxuaW1wb3J0IEFkTWdyIGZyb20gXCIuLi9Nb2QvQWRNZ3JcIjtcclxuaW1wb3J0IFNoYXJlTWdyIGZyb20gXCIuLi9Nb2QvU2hhcmVNZ3JcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uL01vZC9VdGlsaXR5XCI7XHJcbmltcG9ydCBNYWRVSSBmcm9tIFwiLi9NYWRVSVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0VUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR2V0RmlzaFVJOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBHZXRQb3dlclVJOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBHZXRUaXBzVUk6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcG93ZXJOdW06IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcG93ZXJUaW1lOiBjYy5MYWJlbCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aXBzTnVtOiBjYy5MYWJlbCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBncmFkZU51bTogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZmlzaEx2TnVtOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbmFtZU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGVmdEx2TnVtOiBjYy5MYWJlbCA9IG51bGxcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkcmF3QnRuOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtb3JlR2FtZUJ0bjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbmF2Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoTWFkVUkpXHJcbiAgICBtYWRDcmw6IE1hZFVJID0gbnVsbFxyXG5cclxuICAgIG9uTG9hZCgpIHsgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEZpc2hEYXRhKClcclxuXHJcbiAgICAgICAgaWYgKCFXeEFwaS5pc0Zyb21Ta2luVUkpIHtcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2Uuc2hvd0V4cG9ydFVJKEV4cG9ydERpci5WSUVXX0ZSSUVOREdBTUUsIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghV3hBcGkuZmlyc3RTdGFydFVJKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgV3hBcGkuZmlyc3RTdGFydFVJID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19SRUNPTU1FTkRVSSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKClcclxuICAgICAgICAgICAgV3hBcGkuaXNGcm9tU2tpblVJID0gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2h1c2hpaHVhTmF2KClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmF2Tm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgVXRpbGl0eS5yb3RhdGVMb29wKHRoaXMubmF2Tm9kZS5jaGlsZHJlbltpXSwgMC41LCA4KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY2h1c2hpaHVhTmF2LCAzKVxyXG4gICAgICAgIHRoaXMubmF2Tm9kZS5hY3RpdmUgPSBXeEFwaS5nZXRJc0V4cG9ydFZhbGlkKClcclxuICAgICAgICB0aGlzLmRyYXdCdG4uYWN0aXZlID0gV3hBcGkuZ2V0SXNFeHBvcnRWYWxpZCgpXHJcbiAgICAgICAgdGhpcy5tb3JlR2FtZUJ0bi5hY3RpdmUgPSBXeEFwaS5nZXRJc0V4cG9ydFZhbGlkKClcclxuICAgIH1cclxuXHJcbiAgICBpbml0RmlzaERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5maXNoTHZOdW0uc3RyaW5nID0gUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJMdigpLnRvU3RyaW5nKClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmFtZU5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZU5vZGUuY2hpbGRyZW5baV0uYWN0aXZlID0gaSArIDEgPT0gUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJMdigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChQbGF5ZXJEYXRhTWdyLmdldExlZnRMdigpID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0THZOdW0ubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRMdk51bS5zdHJpbmcgPSBQbGF5ZXJEYXRhTWdyLmdldExlZnRMdigpLnRvU3RyaW5nKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRHYW1lQ0IoKSB7XHJcbiAgICAgICAgaWYgKFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyID4gMCkge1xyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhTWdyLmNoYW5nZVBvd2VyKC0xKVxyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn54K55Ye75byA5aeL5ri45oiP5oyJ6ZKu5Lq65pWwJylcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2UuY2xvc2VBbGxFeHBvcnRVSSgpXHJcbiAgICAgICAgICAgIGxldCBjYiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjYjEgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2Uuc2hvd0V4cG9ydFVJKEV4cG9ydERpci5WSUVXX0ZVTExHQU1FVUksIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lU2NlbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyRyA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlXHJcbiAgICAgICAgICAgICAgICBsZXQgZ0dhcCA9IChjdXJHIC0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3dhdGVyX3N0YXJ0X2xldmVsKSAlIEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF93YXRlcl9sZXZlbF9pbnRlcnZhbCA9PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgY3VyRyA+PSBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfd2F0ZXJfc3RhcnRfbGV2ZWxcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZ0dhcCAmJiAhQWRNZ3IuaW5zdGFuY2UuaXNCYW5uZXJFcnJvciAmJiBXeEFwaS5pc1ZhbGlkQmFubmVyKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hZENybC5zaG93VUkoY2IxKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWVTY2VuZScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFd4QXBpLmlzVmFsaWRCYW5uZXIoKSAmJiBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfc3RhcnRfZ2FtZV9zd2l0Y2ggJiYgIUFkTWdyLmluc3RhbmNlLnZpZGVvSXNFcnJvciAmJiAhV3hBcGkuZmlyc3RTaG93VmlkZW8pIHtcclxuICAgICAgICAgICAgICAgIFd4QXBpLmZpcnN0U2hvd1ZpZGVvID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgQWRNZ3IuaW5zdGFuY2UudmlkZW9DbG9zZUNhbGxiYWNrID0gY2JcclxuICAgICAgICAgICAgICAgIEFkTWdyLmluc3RhbmNlLnNob3dWaWRlbygoKSA9PiB7IH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdldFBvd2VyQnRuQ0IoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3dlcigpIHtcclxuICAgICAgICBsZXQgY2IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIFBsYXllckRhdGFNZ3IuY2hhbmdlUG93ZXIoMylcclxuICAgICAgICB9XHJcbiAgICAgICAgU2hhcmVNZ3IuaW5zdGFuY2Uuc2hhcmVHYW1lKGNiKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEZpc2hCdG5DQigpIHtcclxuICAgICAgICB0aGlzLkdldEZpc2hVSS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG93ZXJCdG5DQigpIHtcclxuICAgICAgICB0aGlzLkdldFBvd2VyVUkuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRpcHNCdG5DQigpIHtcclxuICAgICAgICB0aGlzLkdldFRpcHNVSS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlUG93ZXJUaW1lKCkge1xyXG4gICAgICAgIGxldCB0ID0gVGltZUNvdW50TWdyLlNoYXJlLnRDb3VudFxyXG4gICAgICAgIGxldCBtID0gTWF0aC5mbG9vcih0IC8gNjApXHJcbiAgICAgICAgbGV0IHMgPSBNYXRoLmZsb29yKHQgLSBtICogNjApXHJcbiAgICAgICAgdGhpcy5wb3dlclRpbWUuc3RyaW5nID0gbS50b1N0cmluZygpICsgJzonICsgcy50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5wb3dlck51bS5zdHJpbmcgPSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5wb3dlci50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5wb3dlclRpbWUubm9kZS5hY3RpdmUgPSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5wb3dlciA8IFBsYXllckRhdGFNZ3IucG93ZXJNYXhcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVBvd2VyVGltZSgpXHJcbiAgICAgICAgdGhpcy5ncmFkZU51bS5zdHJpbmcgPSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZS50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy50aXBzTnVtLnN0cmluZyA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnRpcHNOdW0udG9TdHJpbmcoKVxyXG4gICAgfVxyXG5cclxuICAgIG1vcmVHYW1lQnRuQ0IoKSB7XHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+eCueaIkeacieaDiuWWnOaMiemSrueCueWHuycpXHJcbiAgICAgICAgSkpNZ3IuaW5zdGFuY2Uuc2hvd0V4cG9ydFVJKEV4cG9ydERpci5WSUVXX0ZVTExHQU1FVUksIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2Uuc2hvd0V4cG9ydFVJKEV4cG9ydERpci5WSUVXX1JFQ09NTUVORFVJLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBKSk1nci5pbnN0YW5jZS5zaG93RXhwb3J0VUkoRXhwb3J0RGlyLlZJRVdfRlJJRU5ER0FNRSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFkTWdyLmluc3RhbmNlLnNob3dCYW5uZXIoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdCdG5DQigpIHtcclxuICAgICAgICBXeEFwaS5hbGRFdmVudCgn5bem6L655oq95bGJ5a+85Ye65oyJ6ZKu54K55Ye7JylcclxuICAgICAgICBKSk1nci5pbnN0YW5jZS5zaG93RXhwb3J0VUkoRXhwb3J0RGlyLlZJRVdfRFJBV1VJKVxyXG4gICAgfVxyXG5cclxuICAgIGNodXNoaWh1YU5hdigpIHtcclxuICAgICAgICBsZXQgYXJyOiBudW1iZXJbXSA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaChpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhcnIgPSBVdGlsaXR5LnNodWZmbGVBcnIoYXJyKVxyXG4gICAgICAgIGFyciA9IGFyci5zcGxpY2UoMCwgNClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmF2Tm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW06IGNjLk5vZGUgPSB0aGlzLm5hdk5vZGUuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgbGV0IGljb246IGNjLlNwcml0ZSA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2ljb24nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgICAgICBsZXQgbmFtZTogY2MuTGFiZWwgPSBpdGVtLmdldENoaWxkQnlOYW1lKCduYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICBuYW1lLnN0cmluZyA9IEpKTWdyLmluc3RhbmNlLmdldFN1YnRpdGxlKGFycltpXSlcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2UubG9hZEltZ0J5VXJsKGljb24sIEpKTWdyLmluc3RhbmNlLm5hdmlnYXRlQXBwQXJyW2FycltpXV0uaWNvbilcclxuXHJcbiAgICAgICAgICAgIGl0ZW0ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORClcclxuICAgICAgICAgICAgaXRlbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudCkgPT4geyB0aGlzLnRpYW96aHVhbkNCKGV2ZW50LCBhcnJbaV0pIH0sIHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGlhb3podWFuQ0IoZXZlbnQsIGlkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrIGlkOicsIGlkKVxyXG4gICAgICAgIFd4QXBpLmFsZEV2ZW50KCfpppbpobXlr7zlh7rkvY3igJTmgLvngrnlh7vmlbAnKVxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLk5hdmlnYXRlQXBwKGlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19SRUNPTU1FTkRVSSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQWRNZ3IuaW5zdGFuY2Uuc2hvd0Jhbm5lcigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn6aaW6aG15a+85Ye65L2N4oCU5oC75oiQ5Yqf6Lez6L2s5pWwJylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==