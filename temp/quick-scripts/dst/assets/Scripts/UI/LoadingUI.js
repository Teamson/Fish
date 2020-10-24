
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
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
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
        localStorage.clear();
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = 1;
        // cc.find('ExportNode').zIndex = 999
        // cc.game.addPersistRootNode(cc.find('ExportNode'))
        PlayerDataMgr_1.default.getPlayerData();
        //AdMgr.instance.initAd()
        WxApi_1.default.WxOnHide(function () {
            localStorage.setItem('lastDate', new Date().getDate().toString());
            localStorage.setItem('front_share_number', WxApi_1.default.front_share_number.toString());
        });
    };
    LoadingUI.prototype.start = function () {
        //ShareMgr.instance.initShare()
        var _this = this;
        cc.director.preloadScene('StartScene', function (completeCount, totalCount) {
            _this.pBar.progress = completeCount / totalCount;
        }, function () {
            cc.director.loadScene('StartScene');
        });
        // SoundMgr.Share.loadSounds(() => {
        //     cc.director.preloadScene('StartScene', (completeCount: number, totalCount: number) => {
        //         this.pBar.progress = completeCount / totalCount
        //     }, () => {
        //         cc.director.loadScene('StartScene')
        //     })
        // })
        // JJMgr.instance.initJJ(WxApi.version, () => {
        //     ShareMgr.instance.initShare()
        //     WxApi.calculateShareNumber()
        //     //获取场景值
        //     if (cc.sys.platform === cc.sys.WECHAT_GAME) {
        //         WxApi.sceneId = WxApi.GetLaunchPassVar().scene
        //         console.log('sceneId:', WxApi.sceneId)
        //     }
        //     // SoundMgr.Share.loadSounds(() => {
        //     //     cc.director.preloadScene('StartScene', (completeCount: number, totalCount: number) => {
        //     //         this.pBar.progress = completeCount / totalCount
        //     //     }, () => {
        //     //         WxApi.aldEvent('成功加载进入游戏内人数')
        //     //         cc.director.loadScene('StartScene')
        //     //     })
        //     // })
        // })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXExvYWRpbmdVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFLbEMsdURBQWtEO0FBRzVDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUEyREM7UUF2REcsVUFBSSxHQUFtQixJQUFJLENBQUE7O1FBc0QzQixpQkFBaUI7SUFDckIsQ0FBQztJQXJERywwQkFBTSxHQUFOO1FBQ0ksWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3BCLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQzlDLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQ2hELEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFBO1FBQ2xELHFDQUFxQztRQUNyQyxvREFBb0Q7UUFFcEQsdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUM3Qix5QkFBeUI7UUFFekIsZUFBSyxDQUFDLFFBQVEsQ0FBQztZQUNYLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtZQUNqRSxZQUFZLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLGVBQUssQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQ25GLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDSSwrQkFBK0I7UUFEbkMsaUJBaUNDO1FBOUJHLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxVQUFDLGFBQXFCLEVBQUUsVUFBa0I7WUFDN0UsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxHQUFHLFVBQVUsQ0FBQTtRQUNuRCxDQUFDLEVBQUU7WUFDQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN2QyxDQUFDLENBQUMsQ0FBQTtRQUNGLG9DQUFvQztRQUNwQyw4RkFBOEY7UUFDOUYsMERBQTBEO1FBQzFELGlCQUFpQjtRQUNqQiw4Q0FBOEM7UUFDOUMsU0FBUztRQUNULEtBQUs7UUFFTCwrQ0FBK0M7UUFDL0Msb0NBQW9DO1FBQ3BDLG1DQUFtQztRQUNuQyxjQUFjO1FBQ2Qsb0RBQW9EO1FBQ3BELHlEQUF5RDtRQUN6RCxpREFBaUQ7UUFDakQsUUFBUTtRQUNSLDJDQUEyQztRQUMzQyxxR0FBcUc7UUFDckcsaUVBQWlFO1FBQ2pFLHdCQUF3QjtRQUN4QiwrQ0FBK0M7UUFDL0MscURBQXFEO1FBQ3JELGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osS0FBSztJQUNULENBQUM7SUFwREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyQ0FDRTtJQUhWLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0EwRDdCO0lBQUQsZ0JBQUM7Q0ExREQsQUEwREMsQ0ExRHNDLEVBQUUsQ0FBQyxTQUFTLEdBMERsRDtrQkExRG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV3hBcGkgZnJvbSBcIi4uL0xpYnMvV3hBcGlcIjtcclxuaW1wb3J0IEh0dHBNZ3IgZnJvbSBcIi4uL01vZC9IdHRwTWdyXCI7XHJcbmltcG9ydCBTaGFyZU1nciBmcm9tIFwiLi4vTW9kL1NoYXJlTWdyXCI7XHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vTW9kL0FkTWdyXCI7XHJcbmltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi4vTW9kL1NvdW5kTWdyXCI7XHJcbmltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuaW1wb3J0IEpKTWdyIGZyb20gXCIuLi8uLi9FeHBvcnRMaWJzL0V4cG9ydFV0aWxzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ1VJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9IDFcclxuICAgICAgICAvLyBjYy5maW5kKCdFeHBvcnROb2RlJykuekluZGV4ID0gOTk5XHJcbiAgICAgICAgLy8gY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUoY2MuZmluZCgnRXhwb3J0Tm9kZScpKVxyXG5cclxuICAgICAgICBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKVxyXG4gICAgICAgIC8vQWRNZ3IuaW5zdGFuY2UuaW5pdEFkKClcclxuXHJcbiAgICAgICAgV3hBcGkuV3hPbkhpZGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFzdERhdGUnLCBuZXcgRGF0ZSgpLmdldERhdGUoKS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZnJvbnRfc2hhcmVfbnVtYmVyJywgV3hBcGkuZnJvbnRfc2hhcmVfbnVtYmVyLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvL1NoYXJlTWdyLmluc3RhbmNlLmluaXRTaGFyZSgpXHJcblxyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnU3RhcnRTY2VuZScsIChjb21wbGV0ZUNvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBCYXIucHJvZ3Jlc3MgPSBjb21wbGV0ZUNvdW50IC8gdG90YWxDb3VudFxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTdGFydFNjZW5lJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIFNvdW5kTWdyLlNoYXJlLmxvYWRTb3VuZHMoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ1N0YXJ0U2NlbmUnLCAoY29tcGxldGVDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucEJhci5wcm9ncmVzcyA9IGNvbXBsZXRlQ291bnQgLyB0b3RhbENvdW50XHJcbiAgICAgICAgLy8gICAgIH0sICgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnU3RhcnRTY2VuZScpXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgLy8gSkpNZ3IuaW5zdGFuY2UuaW5pdEpKKFd4QXBpLnZlcnNpb24sICgpID0+IHtcclxuICAgICAgICAvLyAgICAgU2hhcmVNZ3IuaW5zdGFuY2UuaW5pdFNoYXJlKClcclxuICAgICAgICAvLyAgICAgV3hBcGkuY2FsY3VsYXRlU2hhcmVOdW1iZXIoKVxyXG4gICAgICAgIC8vICAgICAvL+iOt+WPluWcuuaZr+WAvFxyXG4gICAgICAgIC8vICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAvLyAgICAgICAgIFd4QXBpLnNjZW5lSWQgPSBXeEFwaS5HZXRMYXVuY2hQYXNzVmFyKCkuc2NlbmVcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdzY2VuZUlkOicsIFd4QXBpLnNjZW5lSWQpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgLy8gU291bmRNZ3IuU2hhcmUubG9hZFNvdW5kcygoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ1N0YXJ0U2NlbmUnLCAoY29tcGxldGVDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICB0aGlzLnBCYXIucHJvZ3Jlc3MgPSBjb21wbGV0ZUNvdW50IC8gdG90YWxDb3VudFxyXG4gICAgICAgIC8vICAgICAvLyAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgIFd4QXBpLmFsZEV2ZW50KCfmiJDlip/liqDovb3ov5vlhaXmuLjmiI/lhoXkurrmlbAnKVxyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnU3RhcnRTY2VuZScpXHJcbiAgICAgICAgLy8gICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vICAgICAvLyB9KVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=