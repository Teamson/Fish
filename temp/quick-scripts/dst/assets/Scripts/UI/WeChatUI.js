
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/WeChatUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41e53a5Wv1KTp5KIBsXoHlf', 'WeChatUI');
// Scripts/UI/WeChatUI.ts

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
var Utility_1 = require("../Mod/Utility");
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var WxApi_1 = require("../Libs/WxApi");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WeChatUI = /** @class */ (function (_super) {
    __extends(WeChatUI, _super);
    function WeChatUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        _this.playerName = null;
        _this.gameName = null;
        _this.playerNames = ["有个小可爱", "大妈杀手", "神秘靓仔", "超级飞侠乐迪", "几一鸡", "爱喝可乐", "卖葫芦的葫芦娃", "多啦ABCD梦", "坏女孩", "沙雕网友"];
        _this.gameIndex = 0;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    WeChatUI.prototype.start = function () {
    };
    WeChatUI.prototype.showUI = function (callback, param) {
        this.node.active = true;
        WxApi_1.default.aldEvent('好友消息提示横幅出现次数');
    };
    WeChatUI.prototype.onEnable = function () {
        this.rootNode.runAction(cc.moveBy(0.5, cc.v2(0, -200)));
        this.initData();
    };
    WeChatUI.prototype.onDisable = function () {
        this.rootNode.y = cc.view.getVisibleSize().height / 2;
    };
    WeChatUI.prototype.initData = function () {
        var _this = this;
        var nArr = [].concat(this.playerNames);
        nArr = Utility_1.default.shuffleArr(nArr);
        this.playerName.string = nArr[0];
        this.gameName.string = ExportUtils_1.default.instance.navigateAppArr[this.gameIndex].title;
        var id = this.gameIndex;
        this.rootNode.off(cc.Node.EventType.TOUCH_END);
        this.rootNode.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, id); }, this);
        this.gameIndex++;
        if (this.gameIndex >= 6) {
            this.gameIndex = 0;
        }
    };
    WeChatUI.prototype.navCB = function (event, id) {
        var _this = this;
        console.log('click id:', id);
        WxApi_1.default.aldEvent('好友消息提示横幅-总点击数');
        this.node.active = false;
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            _this.scheduleOnce(function () { _this.node.active = true; }, 1);
        }, function () {
            WxApi_1.default.aldEvent('好友消息提示横幅-总成功跳转数');
        });
    };
    __decorate([
        property(cc.Node)
    ], WeChatUI.prototype, "rootNode", void 0);
    __decorate([
        property(cc.Label)
    ], WeChatUI.prototype, "playerName", void 0);
    __decorate([
        property(cc.Label)
    ], WeChatUI.prototype, "gameName", void 0);
    WeChatUI = __decorate([
        ccclass
    ], WeChatUI);
    return WeChatUI;
}(cc.Component));
exports.default = WeChatUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFdlQ2hhdFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUFxQztBQUNyQyw0REFBaUQ7QUFDakQsdUNBQWtDO0FBRTVCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUErREM7UUEzREcsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixnQkFBVSxHQUFhLElBQUksQ0FBQTtRQUUzQixjQUFRLEdBQWEsSUFBSSxDQUFBO1FBRXpCLGlCQUFXLEdBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVoSCxlQUFTLEdBQVcsQ0FBQyxDQUFBOztRQWtEckIsaUJBQWlCO0lBQ3JCLENBQUM7SUFqREcsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLFFBQW1CLEVBQUUsS0FBVztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDdkIsZUFBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUFBLGlCQWVDO1FBZEcsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDdEMsSUFBSSxHQUFHLGlCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUVoQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUUxRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQUssSUFBTyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUV6RixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDaEIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtTQUNyQjtJQUNMLENBQUM7SUFFRCx3QkFBSyxHQUFMLFVBQU0sS0FBSyxFQUFFLEVBQUU7UUFBZixpQkFTQztRQVJHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQzVCLGVBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ3hCLHFCQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFRLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMzRCxDQUFDLEVBQUU7WUFDQyxlQUFLLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDckMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBeEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNNO0lBUFIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThENUI7SUFBRCxlQUFDO0NBOURELEFBOERDLENBOURxQyxFQUFFLENBQUMsU0FBUyxHQThEakQ7a0JBOURvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uL01vZC9VdGlsaXR5XCI7XHJcbmltcG9ydCBKSk1nciBmcm9tIFwiLi4vLi4vRXhwb3J0TGlicy9FeHBvcnRVdGlsc1wiO1xyXG5pbXBvcnQgV3hBcGkgZnJvbSBcIi4uL0xpYnMvV3hBcGlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZUNoYXRVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByb290Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBsYXllck5hbWU6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZ2FtZU5hbWU6IGNjLkxhYmVsID0gbnVsbFxyXG5cclxuICAgIHBsYXllck5hbWVzOiBzdHJpbmdbXSA9IFtcIuacieS4quWwj+WPr+eIsVwiLCBcIuWkp+WmiOadgOaJi1wiLCBcIuelnuenmOmdk+S7lFwiLCBcIui2hee6p+mjnuS+oOS5kOi/qlwiLCBcIuWHoOS4gOm4oVwiLCBcIueIseWWneWPr+S5kFwiLCBcIuWNluiRq+iKpueahOiRq+iKpuWog1wiLCBcIuWkmuWVpkFCQ0TmoqZcIiwgXCLlnY/lpbPlralcIiwgXCLmspnpm5XnvZHlj4tcIl07XHJcblxyXG4gICAgZ2FtZUluZGV4OiBudW1iZXIgPSAwXHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3dVSShjYWxsYmFjaz86IEZ1bmN0aW9uLCBwYXJhbT86IGFueSkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+WlveWPi+a2iOaBr+aPkOekuuaoquW5heWHuueOsOasoeaVsCcpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yb290Tm9kZS5ydW5BY3Rpb24oY2MubW92ZUJ5KDAuNSwgY2MudjIoMCwgLTIwMCkpKVxyXG4gICAgICAgIHRoaXMuaW5pdERhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJvb3ROb2RlLnkgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCkuaGVpZ2h0IC8gMlxyXG4gICAgfVxyXG5cclxuICAgIGluaXREYXRhKCkge1xyXG4gICAgICAgIGxldCBuQXJyID0gW10uY29uY2F0KHRoaXMucGxheWVyTmFtZXMpXHJcbiAgICAgICAgbkFyciA9IFV0aWxpdHkuc2h1ZmZsZUFycihuQXJyKVxyXG4gICAgICAgIHRoaXMucGxheWVyTmFtZS5zdHJpbmcgPSBuQXJyWzBdXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZU5hbWUuc3RyaW5nID0gSkpNZ3IuaW5zdGFuY2UubmF2aWdhdGVBcHBBcnJbdGhpcy5nYW1lSW5kZXhdLnRpdGxlXHJcblxyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuZ2FtZUluZGV4XHJcbiAgICAgICAgdGhpcy5yb290Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKVxyXG4gICAgICAgIHRoaXMucm9vdE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHsgdGhpcy5uYXZDQihldmVudCwgaWQpIH0sIHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUluZGV4KytcclxuICAgICAgICBpZiAodGhpcy5nYW1lSW5kZXggPj0gNikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbmRleCA9IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmF2Q0IoZXZlbnQsIGlkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrIGlkOicsIGlkKVxyXG4gICAgICAgIFd4QXBpLmFsZEV2ZW50KCflpb3lj4vmtojmga/mj5DnpLrmqKrluYUt5oC754K55Ye75pWwJylcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBKSk1nci5pbnN0YW5jZS5OYXZpZ2F0ZUFwcChpZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlIH0sIDEpXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn5aW95Y+L5raI5oGv5o+Q56S65qiq5bmFLeaAu+aIkOWKn+i3s+i9rOaVsCcpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==