
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/LoadingUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42c8fUg6hhEcLJMTeLa+i1R', 'LoadingUI');
// Scripts/UI/LoadingUI.ts

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
var WxApi_1 = require("../Libs/WxApi");
var ShareMgr_1 = require("../Mod/ShareMgr");
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pBar = null;
        return _this;
        // update (dt) {}
    }
    LoadingUI.prototype.onLoad = function () {
        //localStorage.clear()
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
        //cc.director.getPhysicsManager().debugDrawFlags = 1
        cc.find('ExportNode').zIndex = 999;
        cc.game.addPersistRootNode(cc.find('ExportNode'));
        //AdMgr.instance.initAd()
        WxApi_1.default.WxOnHide(function () {
            localStorage.setItem('lastDate', new Date().getDate().toString());
            localStorage.setItem('front_share_number', WxApi_1.default.front_share_number.toString());
        });
    };
    LoadingUI.prototype.start = function () {
        var _this = this;
        WxApi_1.default.aldEvent('进入游戏加载页的人数');
        ExportUtils_1.default.instance.initJJ(WxApi_1.default.version, function () {
            ShareMgr_1.default.instance.initShare();
            PlayerDataMgr_1.default.powerMax = ExportUtils_1.default.instance.exportCfg.front_energy_value;
            PlayerDataMgr_1.default.getPlayerData();
            WxApi_1.default.calculateShareNumber();
            //获取场景值
            if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                WxApi_1.default.sceneId = WxApi_1.default.GetLaunchPassVar().scene;
                console.log('sceneId:', WxApi_1.default.sceneId);
            }
            var self = _this;
            if (!CC_WECHATGAME) {
                cc.director.preloadScene('StartScene', function (completeCount, totalCount) {
                    self.pBar.progress = completeCount / totalCount;
                }, function () {
                    WxApi_1.default.aldEvent('成功加载进入游戏内人数');
                    cc.director.loadScene('StartScene');
                });
            }
            else {
                cc.loader.downloader.loadSubpackage('Texture', function (err) {
                    if (err) {
                        return console.error(err);
                    }
                    cc.director.preloadScene('StartScene', function (completeCount, totalCount) {
                        self.pBar.progress = completeCount / totalCount;
                    }, function () {
                        WxApi_1.default.aldEvent('成功加载进入游戏内人数');
                        cc.director.loadScene('StartScene');
                    });
                    console.log('load subpackage successfully.');
                });
            }
            // SoundMgr.Share.loadSounds(() => {
            //     cc.director.preloadScene('StartScene', (completeCount: number, totalCount: number) => {
            //         this.pBar.progress = completeCount / totalCount
            //     }, () => {
            //         WxApi.aldEvent('成功加载进入游戏内人数')
            //         cc.director.loadScene('StartScene')
            //     })
            // })
        });
    };
    __decorate([
        property(cc.ProgressBar)
    ], LoadingUI.prototype, "pBar", void 0);
    LoadingUI = __decorate([
        ccclass
    ], LoadingUI);
    return LoadingUI;
}(cc.Component));
exports.default = LoadingUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXExvYWRpbmdVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFFbEMsNENBQXVDO0FBR3ZDLHVEQUFrRDtBQUNsRCw0REFBaUQ7QUFHM0MsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQURuRDtRQUFBLHFFQXFFQztRQWpFRyxVQUFJLEdBQW1CLElBQUksQ0FBQTs7UUFnRTNCLGlCQUFpQjtJQUNyQixDQUFDO0lBL0RHLDBCQUFNLEdBQU47UUFDSSxzQkFBc0I7UUFDdEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFDaEQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFDOUMsb0RBQW9EO1FBQ3BELEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtRQUNsQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtRQUVqRCx5QkFBeUI7UUFFekIsZUFBSyxDQUFDLFFBQVEsQ0FBQztZQUNYLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtZQUNqRSxZQUFZLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLGVBQUssQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQ25GLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFBQSxpQkE0Q0M7UUEzQ0csZUFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM1QixxQkFBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsZUFBSyxDQUFDLE9BQU8sRUFBRTtZQUNqQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUM3Qix1QkFBYSxDQUFDLFFBQVEsR0FBRyxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUE7WUFDcEUsdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtZQUM3QixlQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtZQUM1QixPQUFPO1lBQ1AsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtnQkFDeEMsZUFBSyxDQUFDLE9BQU8sR0FBRyxlQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxLQUFLLENBQUE7Z0JBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGVBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUN6QztZQUVELElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQTtZQUNmLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ2hCLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxVQUFDLGFBQXFCLEVBQUUsVUFBa0I7b0JBQzdFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsR0FBRyxVQUFVLENBQUE7Z0JBQ25ELENBQUMsRUFBRTtvQkFDQyxlQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFBO29CQUM3QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtnQkFDdkMsQ0FBQyxDQUFDLENBQUE7YUFDTDtpQkFBTTtnQkFDSCxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRztvQkFDL0MsSUFBSSxHQUFHLEVBQUU7d0JBQ0wsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUM3QjtvQkFDRCxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsVUFBQyxhQUFxQixFQUFFLFVBQWtCO3dCQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLEdBQUcsVUFBVSxDQUFBO29CQUNuRCxDQUFDLEVBQUU7d0JBQ0MsZUFBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQTt3QkFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUE7b0JBQ3ZDLENBQUMsQ0FBQyxDQUFBO29CQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUNELG9DQUFvQztZQUNwQyw4RkFBOEY7WUFDOUYsMERBQTBEO1lBQzFELGlCQUFpQjtZQUNqQix3Q0FBd0M7WUFDeEMsOENBQThDO1lBQzlDLFNBQVM7WUFDVCxLQUFLO1FBQ1QsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBOUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ0U7SUFIVixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBb0U3QjtJQUFELGdCQUFDO0NBcEVELEFBb0VDLENBcEVzQyxFQUFFLENBQUMsU0FBUyxHQW9FbEQ7a0JBcEVvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFd4QXBpIGZyb20gXCIuLi9MaWJzL1d4QXBpXCI7XHJcbmltcG9ydCBIdHRwTWdyIGZyb20gXCIuLi9Nb2QvSHR0cE1nclwiO1xyXG5pbXBvcnQgU2hhcmVNZ3IgZnJvbSBcIi4uL01vZC9TaGFyZU1nclwiO1xyXG5pbXBvcnQgQWRNZ3IgZnJvbSBcIi4uL01vZC9BZE1nclwiO1xyXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL01vZC9Tb3VuZE1nclwiO1xyXG5pbXBvcnQgUGxheWVyRGF0YU1nciBmcm9tIFwiLi4vTGlicy9QbGF5ZXJEYXRhTWdyXCI7XHJcbmltcG9ydCBKSk1nciBmcm9tIFwiLi4vLi4vRXhwb3J0TGlicy9FeHBvcnRVdGlsc1wiO1xyXG5pbXBvcnQgVGltZUNvdW50TWdyIGZyb20gXCIuLi9MaWJzL1RpbWVDb3VudE1nclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgcEJhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vbG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgLy9jYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gMVxyXG4gICAgICAgIGNjLmZpbmQoJ0V4cG9ydE5vZGUnKS56SW5kZXggPSA5OTlcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZShjYy5maW5kKCdFeHBvcnROb2RlJykpXHJcblxyXG4gICAgICAgIC8vQWRNZ3IuaW5zdGFuY2UuaW5pdEFkKClcclxuXHJcbiAgICAgICAgV3hBcGkuV3hPbkhpZGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFzdERhdGUnLCBuZXcgRGF0ZSgpLmdldERhdGUoKS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZnJvbnRfc2hhcmVfbnVtYmVyJywgV3hBcGkuZnJvbnRfc2hhcmVfbnVtYmVyLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBXeEFwaS5hbGRFdmVudCgn6L+b5YWl5ri45oiP5Yqg6L296aG155qE5Lq65pWwJylcclxuICAgICAgICBKSk1nci5pbnN0YW5jZS5pbml0SkooV3hBcGkudmVyc2lvbiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBTaGFyZU1nci5pbnN0YW5jZS5pbml0U2hhcmUoKVxyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhTWdyLnBvd2VyTWF4ID0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X2VuZXJneV92YWx1ZVxyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKVxyXG4gICAgICAgICAgICBXeEFwaS5jYWxjdWxhdGVTaGFyZU51bWJlcigpXHJcbiAgICAgICAgICAgIC8v6I635Y+W5Zy65pmv5YC8XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgV3hBcGkuc2NlbmVJZCA9IFd4QXBpLkdldExhdW5jaFBhc3NWYXIoKS5zY2VuZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NjZW5lSWQ6JywgV3hBcGkuc2NlbmVJZClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgICAgICAgIGlmICghQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdTdGFydFNjZW5lJywgKGNvbXBsZXRlQ291bnQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wQmFyLnByb2dyZXNzID0gY29tcGxldGVDb3VudCAvIHRvdGFsQ291bnRcclxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn5oiQ5Yqf5Yqg6L296L+b5YWl5ri45oiP5YaF5Lq65pWwJylcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1N0YXJ0U2NlbmUnKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5kb3dubG9hZGVyLmxvYWRTdWJwYWNrYWdlKCdUZXh0dXJlJywgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdTdGFydFNjZW5lJywgKGNvbXBsZXRlQ291bnQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucEJhci5wcm9ncmVzcyA9IGNvbXBsZXRlQ291bnQgLyB0b3RhbENvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn5oiQ5Yqf5Yqg6L296L+b5YWl5ri45oiP5YaF5Lq65pWwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTdGFydFNjZW5lJylcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkIHN1YnBhY2thZ2Ugc3VjY2Vzc2Z1bGx5LicpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU291bmRNZ3IuU2hhcmUubG9hZFNvdW5kcygoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ1N0YXJ0U2NlbmUnLCAoY29tcGxldGVDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnBCYXIucHJvZ3Jlc3MgPSBjb21wbGV0ZUNvdW50IC8gdG90YWxDb3VudFxyXG4gICAgICAgICAgICAvLyAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIFd4QXBpLmFsZEV2ZW50KCfmiJDlip/liqDovb3ov5vlhaXmuLjmiI/lhoXkurrmlbAnKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnU3RhcnRTY2VuZScpXHJcbiAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=