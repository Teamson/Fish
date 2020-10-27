
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
        // cc.director.getCollisionManager().enabled = true
        // cc.director.getPhysicsManager().debugDrawFlags = 1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXExvYWRpbmdVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFLbEMsdURBQWtEO0FBRzVDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUEyREM7UUF2REcsVUFBSSxHQUFtQixJQUFJLENBQUE7O1FBc0QzQixpQkFBaUI7SUFDckIsQ0FBQztJQXJERywwQkFBTSxHQUFOO1FBQ0ksWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3BCLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQzlDLG1EQUFtRDtRQUNuRCxxREFBcUQ7UUFDckQscUNBQXFDO1FBQ3JDLG9EQUFvRDtRQUVwRCx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQzdCLHlCQUF5QjtRQUV6QixlQUFLLENBQUMsUUFBUSxDQUFDO1lBQ1gsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1lBQ2pFLFlBQVksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsZUFBSyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7UUFDbkYsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLCtCQUErQjtRQURuQyxpQkFpQ0M7UUE5QkcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLFVBQUMsYUFBcUIsRUFBRSxVQUFrQjtZQUM3RSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLEdBQUcsVUFBVSxDQUFBO1FBQ25ELENBQUMsRUFBRTtZQUNDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO1FBQ0Ysb0NBQW9DO1FBQ3BDLDhGQUE4RjtRQUM5RiwwREFBMEQ7UUFDMUQsaUJBQWlCO1FBQ2pCLDhDQUE4QztRQUM5QyxTQUFTO1FBQ1QsS0FBSztRQUVMLCtDQUErQztRQUMvQyxvQ0FBb0M7UUFDcEMsbUNBQW1DO1FBQ25DLGNBQWM7UUFDZCxvREFBb0Q7UUFDcEQseURBQXlEO1FBQ3pELGlEQUFpRDtRQUNqRCxRQUFRO1FBQ1IsMkNBQTJDO1FBQzNDLHFHQUFxRztRQUNyRyxpRUFBaUU7UUFDakUsd0JBQXdCO1FBQ3hCLCtDQUErQztRQUMvQyxxREFBcUQ7UUFDckQsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixLQUFLO0lBQ1QsQ0FBQztJQXBERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzJDQUNFO0lBSFYsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTBEN0I7SUFBRCxnQkFBQztDQTFERCxBQTBEQyxDQTFEc0MsRUFBRSxDQUFDLFNBQVMsR0EwRGxEO2tCQTFEb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXeEFwaSBmcm9tIFwiLi4vTGlicy9XeEFwaVwiO1xyXG5pbXBvcnQgSHR0cE1nciBmcm9tIFwiLi4vTW9kL0h0dHBNZ3JcIjtcclxuaW1wb3J0IFNoYXJlTWdyIGZyb20gXCIuLi9Nb2QvU2hhcmVNZ3JcIjtcclxuaW1wb3J0IEFkTWdyIGZyb20gXCIuLi9Nb2QvQWRNZ3JcIjtcclxuaW1wb3J0IFNvdW5kTWdyIGZyb20gXCIuLi9Nb2QvU291bmRNZ3JcIjtcclxuaW1wb3J0IFBsYXllckRhdGFNZ3IgZnJvbSBcIi4uL0xpYnMvUGxheWVyRGF0YU1nclwiO1xyXG5pbXBvcnQgSkpNZ3IgZnJvbSBcIi4uLy4uL0V4cG9ydExpYnMvRXhwb3J0VXRpbHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIHBCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gMVxyXG4gICAgICAgIC8vIGNjLmZpbmQoJ0V4cG9ydE5vZGUnKS56SW5kZXggPSA5OTlcclxuICAgICAgICAvLyBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZShjYy5maW5kKCdFeHBvcnROb2RlJykpXHJcblxyXG4gICAgICAgIFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpXHJcbiAgICAgICAgLy9BZE1nci5pbnN0YW5jZS5pbml0QWQoKVxyXG5cclxuICAgICAgICBXeEFwaS5XeE9uSGlkZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXN0RGF0ZScsIG5ldyBEYXRlKCkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmcm9udF9zaGFyZV9udW1iZXInLCBXeEFwaS5mcm9udF9zaGFyZV9udW1iZXIudG9TdHJpbmcoKSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vU2hhcmVNZ3IuaW5zdGFuY2UuaW5pdFNoYXJlKClcclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdTdGFydFNjZW5lJywgKGNvbXBsZXRlQ291bnQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucEJhci5wcm9ncmVzcyA9IGNvbXBsZXRlQ291bnQgLyB0b3RhbENvdW50XHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1N0YXJ0U2NlbmUnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gU291bmRNZ3IuU2hhcmUubG9hZFNvdW5kcygoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnU3RhcnRTY2VuZScsIChjb21wbGV0ZUNvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wQmFyLnByb2dyZXNzID0gY29tcGxldGVDb3VudCAvIHRvdGFsQ291bnRcclxuICAgICAgICAvLyAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTdGFydFNjZW5lJylcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAvLyBKSk1nci5pbnN0YW5jZS5pbml0SkooV3hBcGkudmVyc2lvbiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBTaGFyZU1nci5pbnN0YW5jZS5pbml0U2hhcmUoKVxyXG4gICAgICAgIC8vICAgICBXeEFwaS5jYWxjdWxhdGVTaGFyZU51bWJlcigpXHJcbiAgICAgICAgLy8gICAgIC8v6I635Y+W5Zy65pmv5YC8XHJcbiAgICAgICAgLy8gICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgIC8vICAgICAgICAgV3hBcGkuc2NlbmVJZCA9IFd4QXBpLkdldExhdW5jaFBhc3NWYXIoKS5zY2VuZVxyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3NjZW5lSWQ6JywgV3hBcGkuc2NlbmVJZClcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICAvLyBTb3VuZE1nci5TaGFyZS5sb2FkU291bmRzKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnU3RhcnRTY2VuZScsIChjb21wbGV0ZUNvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgIHRoaXMucEJhci5wcm9ncmVzcyA9IGNvbXBsZXRlQ291bnQgLyB0b3RhbENvdW50XHJcbiAgICAgICAgLy8gICAgIC8vICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+aIkOWKn+WKoOi9vei/m+WFpea4uOaIj+WGheS6uuaVsCcpXHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTdGFydFNjZW5lJylcclxuICAgICAgICAvLyAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gICAgIC8vIH0pXHJcbiAgICAgICAgLy8gfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==