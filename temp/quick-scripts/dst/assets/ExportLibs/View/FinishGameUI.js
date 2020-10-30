
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
        _this.isOne = false;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    FinishGameUI.prototype.start = function () {
    };
    FinishGameUI.prototype.showUI = function (callback, param) {
        this.isOne = false;
        if (param && param.posY) {
            this.rootNode.y = param.posY;
        }
        if (param && param.one) {
            this.isOne = param.one;
        }
        this.node.active = true;
        if (this.isOne) {
            for (var i = 0; i < this.rootNode.childrenCount; i++) {
                this.rootNode.children[i].active = i < 3;
            }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcRmluaXNoR2FtZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUE2QztBQUM3QyxpREFBNEM7QUFDNUMscURBQWdEO0FBQ2hELDhDQUFrRDtBQUU1QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBRHREO1FBQUEscUVBb0dDO1FBaEdHLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsV0FBSyxHQUFXLENBQUMsQ0FBQTtRQUVqQixXQUFLLEdBQVksS0FBSyxDQUFBOztRQTJGdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUExRkcsZUFBZTtJQUVmLDRCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLFFBQW1CLEVBQUUsS0FBVztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUE7U0FDL0I7UUFDRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQTtTQUN6QjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUV2QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxD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QVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNNO0lBSFAsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQW1HaEM7SUFBRCxtQkFBQztDQW5HRCxBQW1HQyxDQW5HeUMsRUFBRSxDQUFDLFNBQVMsR0FtR3JEO2tCQW5Hb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXeEFwaSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9MaWJzL1d4QXBpXCI7XHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vLi4vU2NyaXB0cy9Nb2QvQWRNZ3JcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uLy4uL1NjcmlwdHMvTW9kL1V0aWxpdHlcIjtcclxuaW1wb3J0IEpKTWdyLCB7IEV4cG9ydERpciB9IGZyb20gXCIuLi9FeHBvcnRVdGlsc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbmlzaEdhbWVVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByb290Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBuYXZJZDogbnVtYmVyID0gMFxyXG5cclxuICAgIGlzT25lOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1VJKGNhbGxiYWNrPzogRnVuY3Rpb24sIHBhcmFtPzogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pc09uZSA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHBhcmFtICYmIHBhcmFtLnBvc1kpIHtcclxuICAgICAgICAgICAgdGhpcy5yb290Tm9kZS55ID0gcGFyYW0ucG9zWVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyYW0gJiYgcGFyYW0ub25lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPbmUgPSBwYXJhbS5vbmVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzT25lKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb290Tm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdE5vZGUuY2hpbGRyZW5baV0uYWN0aXZlID0gaSA8IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLl9pbml0KClcclxuICAgICAgICB0aGlzLmNodXNoaWh1YU5hdigpXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICB9XHJcblxyXG4gICAgX2luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5uYXZJZCA9IDBcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUNCKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNubyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGl0ZW06IGNjLk5vZGUgPSB0aGlzLnJvb3ROb2RlLmNoaWxkcmVuW2luZGV4XVxyXG4gICAgICAgIGxldCBpY29uID0gaXRlbS5nZXRDaGlsZEJ5TmFtZSgnaWNvbicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpIGFzIGNjLlNwcml0ZVxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLmxvYWRJbWdCeVVybChpY29uLCBKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFyclt0aGlzLm5hdklkXS5pY29uKVxyXG4gICAgICAgIGxldCBpZCA9IHRoaXMubmF2SWRcclxuICAgICAgICBpdGVtLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpXHJcbiAgICAgICAgaXRlbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudCkgPT4geyB0aGlzLnRpYW96aHVhbkNCKGV2ZW50LCBpZCkgfSwgdGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5uYXZJZCsrXHJcbiAgICAgICAgaWYgKHRoaXMubmF2SWQgPj0gSkpNZ3IuaW5zdGFuY2UubmF2aWdhdGVBcHBBcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2SWQgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRpYW96aHVhbkNCKGV2ZW50LCBpZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGljayBpZDonLCBpZClcclxuICAgICAgICBXeEFwaS5hbGRFdmVudCgn57uT566X6aG1IDYg5LiqIGljb24t5oC754K55Ye75pWwJylcclxuICAgICAgICBKSk1nci5pbnN0YW5jZS5OYXZpZ2F0ZUFwcChpZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBKSk1nci5pbnN0YW5jZS5zaG93RXhwb3J0VUkoRXhwb3J0RGlyLlZJRVdfRlVMTEdBTUVVSSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQWRNZ3IuaW5zdGFuY2Uuc2hvd0Jhbm5lcigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn57uT566X6aG1IDYg5LiqIGljb24t5oC76Lez6L2s5pWwJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnJvb3ROb2RlLmNoaWxkcmVuLmluZGV4T2YoZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgIHRoaXMuY25vKGluZGV4KVxyXG4gICAgfVxyXG4gICAgY2h1c2hpaHVhTmF2KCkge1xyXG4gICAgICAgIGxldCByQXJyOiBudW1iZXJbXSA9IFswLCAxLCAyLCAzLCA0LCA1XVxyXG4gICAgICAgIHJBcnIgPSBVdGlsaXR5LnNodWZmbGVBcnIockFycilcclxuICAgICAgICBsZXQgcmFuZE51bTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNilcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbTogY2MuTm9kZSA9IHRoaXMucm9vdE5vZGUuY2hpbGRyZW5bckFyclswXV1cclxuICAgICAgICAgICAgckFyci5zcGxpY2UockFyci5pbmRleE9mKHJBcnJbMF0pLCAxKVxyXG4gICAgICAgICAgICBsZXQgaWNvbiA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2ljb24nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSBhcyBjYy5TcHJpdGVcclxuICAgICAgICAgICAgbGV0IGZpbmdlciA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2ZpbmdlcicpXHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLmxvYWRJbWdCeVVybChpY29uLCBKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFyclt0aGlzLm5hdklkXS5pY29uKVxyXG4gICAgICAgICAgICBmaW5nZXIuYWN0aXZlID0gcmFuZE51bSA9PSBpXHJcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMubmF2SWRcclxuICAgICAgICAgICAgaXRlbS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKVxyXG4gICAgICAgICAgICBpdGVtLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7IHRoaXMudGlhb3podWFuQ0IoZXZlbnQsIGlkKSB9LCB0aGlzKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5uYXZJZCsrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==