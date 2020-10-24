
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/FinishGameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80640I/xFpMor6MfSekWPx9', 'FinishGameUI');
// ExportLibs/View/FinishGameUI.ts

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
var WxApi_1 = require("../../Scripts/Libs/WxApi");
var AdMgr_1 = require("../../Scripts/Mod/AdMgr");
var Utility_1 = require("../../Scripts/Mod/Utility");
var ExportUtils_1 = require("../ExportUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FinishGameUI = /** @class */ (function (_super) {
    __extends(FinishGameUI, _super);
    function FinishGameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        _this.navId = 0;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    FinishGameUI.prototype.start = function () {
    };
    FinishGameUI.prototype.showUI = function (callback, param) {
        if (param && param.posY) {
            this.rootNode.y = param.posY;
        }
        this.node.active = true;
    };
    FinishGameUI.prototype.onEnable = function () {
        this._init();
        this.chushihuaNav();
    };
    FinishGameUI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    FinishGameUI.prototype._init = function () {
        this.navId = 0;
    };
    FinishGameUI.prototype.closeCB = function () {
        this.node.active = false;
    };
    FinishGameUI.prototype.cno = function (index) {
        var _this = this;
        var item = this.rootNode.children[index];
        var icon = item.getChildByName('icon').getComponent(cc.Sprite);
        ExportUtils_1.default.instance.loadImgByUrl(icon, ExportUtils_1.default.instance.navigateAppArr[this.navId].icon);
        var id = this.navId;
        item.off(cc.Node.EventType.TOUCH_END);
        item.on(cc.Node.EventType.TOUCH_END, function (event) { _this.tiaozhuanCB(event, id); }, this);
        this.navId++;
        if (this.navId >= ExportUtils_1.default.instance.navigateAppArr.length) {
            this.navId = 0;
        }
    };
    FinishGameUI.prototype.tiaozhuanCB = function (event, id) {
        console.log('click id:', id);
        WxApi_1.default.aldEvent('结算页 6 个 icon-总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FULLGAMEUI, null, function () {
                AdMgr_1.default.instance.showBanner();
            });
        }, function () {
            WxApi_1.default.aldEvent('结算页 6 个 icon-总跳转数');
        });
        var index = this.rootNode.children.indexOf(event.target);
        this.cno(index);
    };
    FinishGameUI.prototype.chushihuaNav = function () {
        var _this = this;
        var rArr = [0, 1, 2, 3, 4, 5];
        rArr = Utility_1.default.shuffleArr(rArr);
        var randNum = Math.floor(Math.random() * 6);
        var _loop_1 = function (i) {
            var item = this_1.rootNode.children[rArr[0]];
            rArr.splice(rArr.indexOf(rArr[0]), 1);
            var icon = item.getChildByName('icon').getComponent(cc.Sprite);
            var finger = item.getChildByName('finger');
            ExportUtils_1.default.instance.loadImgByUrl(icon, ExportUtils_1.default.instance.navigateAppArr[this_1.navId].icon);
            finger.active = randNum == i;
            var id = this_1.navId;
            item.off(cc.Node.EventType.TOUCH_END);
            item.on(cc.Node.EventType.TOUCH_END, function (event) { _this.tiaozhuanCB(event, id); }, this_1);
            this_1.navId++;
        };
        var this_1 = this;
        for (var i = 0; i < 6; i++) {
            _loop_1(i);
        }
    };
    __decorate([
        property(cc.Node)
    ], FinishGameUI.prototype, "rootNode", void 0);
    FinishGameUI = __decorate([
        ccclass
    ], FinishGameUI);
    return FinishGameUI;
}(cc.Component));
exports.default = FinishGameUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcRmluaXNoR2FtZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUE2QztBQUM3QyxpREFBNEM7QUFDNUMscURBQWdEO0FBQ2hELDhDQUFrRDtBQUU1QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBRHREO1FBQUEscUVBdUZDO1FBbkZHLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsV0FBSyxHQUFXLENBQUMsQ0FBQTs7UUFnRmpCLGlCQUFpQjtJQUNyQixDQUFDO0lBL0VHLGVBQWU7SUFFZiw0QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBTyxRQUFtQixFQUFFLEtBQVc7UUFDbkMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFBO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO0lBQzNCLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ1osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxnQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUE7SUFDakMsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtJQUNsQixDQUFDO0lBRUQsOEJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUM1QixDQUFDO0lBRUQsMEJBQUcsR0FBSCxVQUFJLEtBQWE7UUFBakIsaUJBWUM7UUFYRyxJQUFJ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QUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLHFCQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFLLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pGLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQTtZQUM1QixJQUFJLEVBQUUsR0FBRyxPQUFLLEtBQUssQ0FBQTtZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQUMsS0FBSyxJQUFPLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxTQUFPLENBQUE7WUFFdEYsT0FBSyxLQUFLLEVBQUUsQ0FBQTs7O1FBWGhCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUFqQixDQUFDO1NBWVQ7SUFDTCxDQUFDO0lBL0VEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ007SUFIUCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBc0ZoQztJQUFELG1CQUFDO0NBdEZELEFBc0ZDLENBdEZ5QyxFQUFFLENBQUMsU0FBUyxHQXNGckQ7a0JBdEZvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFd4QXBpIGZyb20gXCIuLi8uLi9TY3JpcHRzL0xpYnMvV3hBcGlcIjtcclxuaW1wb3J0IEFkTWdyIGZyb20gXCIuLi8uLi9TY3JpcHRzL01vZC9BZE1nclwiO1xyXG5pbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgSkpNZ3IsIHsgRXhwb3J0RGlyIH0gZnJvbSBcIi4uL0V4cG9ydFV0aWxzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmluaXNoR2FtZVVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJvb3ROb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIG5hdklkOiBudW1iZXIgPSAwXHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3dVSShjYWxsYmFjaz86IEZ1bmN0aW9uLCBwYXJhbT86IGFueSkge1xyXG4gICAgICAgIGlmIChwYXJhbSAmJiBwYXJhbS5wb3NZKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdE5vZGUueSA9IHBhcmFtLnBvc1lcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLl9pbml0KClcclxuICAgICAgICB0aGlzLmNodXNoaWh1YU5hdigpXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICB9XHJcblxyXG4gICAgX2luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5uYXZJZCA9IDBcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUNCKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNubyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGl0ZW06IGNjLk5vZGUgPSB0aGlzLnJvb3ROb2RlLmNoaWxkcmVuW2luZGV4XVxyXG4gICAgICAgIGxldCBpY29uID0gaXRlbS5nZXRDaGlsZEJ5TmFtZSgnaWNvbicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpIGFzIGNjLlNwcml0ZVxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLmxvYWRJbWdCeVVybChpY29uLCBKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFyclt0aGlzLm5hdklkXS5pY29uKVxyXG4gICAgICAgIGxldCBpZCA9IHRoaXMubmF2SWRcclxuICAgICAgICBpdGVtLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpXHJcbiAgICAgICAgaXRlbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudCkgPT4geyB0aGlzLnRpYW96aHVhbkNCKGV2ZW50LCBpZCkgfSwgdGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5uYXZJZCsrXHJcbiAgICAgICAgaWYgKHRoaXMubmF2SWQgPj0gSkpNZ3IuaW5zdGFuY2UubmF2aWdhdGVBcHBBcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2SWQgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRpYW96aHVhbkNCKGV2ZW50LCBpZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGljayBpZDonLCBpZClcclxuICAgICAgICBXeEFwaS5hbGRFdmVudCgn57uT566X6aG1IDYg5LiqIGljb24t5oC754K55Ye75pWwJylcclxuICAgICAgICBKSk1nci5pbnN0YW5jZS5OYXZpZ2F0ZUFwcChpZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBKSk1nci5pbnN0YW5jZS5zaG93RXhwb3J0VUkoRXhwb3J0RGlyLlZJRVdfRlVMTEdBTUVVSSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQWRNZ3IuaW5zdGFuY2Uuc2hvd0Jhbm5lcigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn57uT566X6aG1IDYg5LiqIGljb24t5oC76Lez6L2s5pWwJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnJvb3ROb2RlLmNoaWxkcmVuLmluZGV4T2YoZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgIHRoaXMuY25vKGluZGV4KVxyXG4gICAgfVxyXG4gICAgY2h1c2hpaHVhTmF2KCkge1xyXG4gICAgICAgIGxldCByQXJyOiBudW1iZXJbXSA9IFswLCAxLCAyLCAzLCA0LCA1XVxyXG4gICAgICAgIHJBcnIgPSBVdGlsaXR5LnNodWZmbGVBcnIockFycilcclxuICAgICAgICBsZXQgcmFuZE51bTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNilcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbTogY2MuTm9kZSA9IHRoaXMucm9vdE5vZGUuY2hpbGRyZW5bckFyclswXV1cclxuICAgICAgICAgICAgckFyci5zcGxpY2UockFyci5pbmRleE9mKHJBcnJbMF0pLCAxKVxyXG4gICAgICAgICAgICBsZXQgaWNvbiA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2ljb24nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSBhcyBjYy5TcHJpdGVcclxuICAgICAgICAgICAgbGV0IGZpbmdlciA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2ZpbmdlcicpXHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLmxvYWRJbWdCeVVybChpY29uLCBKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFyclt0aGlzLm5hdklkXS5pY29uKVxyXG4gICAgICAgICAgICBmaW5nZXIuYWN0aXZlID0gcmFuZE51bSA9PSBpXHJcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMubmF2SWRcclxuICAgICAgICAgICAgaXRlbS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKVxyXG4gICAgICAgICAgICBpdGVtLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7IHRoaXMudGlhb3podWFuQ0IoZXZlbnQsIGlkKSB9LCB0aGlzKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5uYXZJZCsrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==