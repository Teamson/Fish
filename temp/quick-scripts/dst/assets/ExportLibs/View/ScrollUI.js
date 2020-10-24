
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/ScrollUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '031b7VcdSJJzpl/U/4pTZPt', 'ScrollUI');
// ExportLibs/View/ScrollUI.ts

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
var ScrollUI = /** @class */ (function (_super) {
    __extends(ScrollUI, _super);
    function ScrollUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.scroll = null;
        _this.content = null;
        _this.isGameUI = false;
        _this.myNavArr = [];
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    ScrollUI.prototype.start = function () {
    };
    ScrollUI.prototype.showUI = function (callback, param) {
        this.node.active = true;
        if (this.isGameUI) {
            WxApi_1.default.aldEvent('顶部导出栏出现次数');
        }
        else {
            WxApi_1.default.aldEvent('底部导出栏出现次数');
        }
    };
    ScrollUI.prototype.onEnable = function () {
        this.myNavArr = [].concat(ExportUtils_1.default.instance.navigateAppArr);
        this._init();
    };
    ScrollUI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
        this.content.destroyAllChildren();
    };
    ScrollUI.prototype._init = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var node = cc.instantiate(this_1.item);
            node.active = true;
            node.setPosition(cc.v2(0, 0));
            this_1.content.addChild(node);
            var icon = node.getChildByName('icon').getComponent(cc.Sprite);
            ExportUtils_1.default.instance.loadImgByUrl(icon, this_1.myNavArr[i].icon);
            node.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, i); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.myNavArr.length; i++) {
            _loop_1(i);
        }
    };
    ScrollUI.prototype.closeCB = function () {
        this.node.active = false;
    };
    ScrollUI.prototype.navCB = function (event, id) {
        var _this = this;
        console.log('click id:', id);
        if (this.isGameUI) {
            WxApi_1.default.aldEvent('顶部导出栏-总点击数');
        }
        else {
            WxApi_1.default.aldEvent('底部导出栏-总点击数');
        }
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            if (_this.isGameUI)
                ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FULLGAMEUI, null, function () { AdMgr_1.default.instance.showBanner(); });
        }, function () {
            if (_this.isGameUI) {
                WxApi_1.default.aldEvent('顶部导出栏-总成功跳转数');
            }
            else {
                WxApi_1.default.aldEvent('底部导出栏-总成功跳转数');
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], ScrollUI.prototype, "item", void 0);
    __decorate([
        property(cc.ScrollView)
    ], ScrollUI.prototype, "scroll", void 0);
    __decorate([
        property(cc.Node)
    ], ScrollUI.prototype, "content", void 0);
    __decorate([
        property
    ], ScrollUI.prototype, "isGameUI", void 0);
    ScrollUI = __decorate([
        ccclass
    ], ScrollUI);
    return ScrollUI;
}(cc.Component));
exports.default = ScrollUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcU2Nyb2xsVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQWtEO0FBQ2xELGtEQUE2QztBQUM3QyxpREFBNEM7QUFFdEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQW9GQztRQWpGRyxVQUFJLEdBQVksSUFBSSxDQUFBO1FBR3BCLFlBQU0sR0FBa0IsSUFBSSxDQUFBO1FBRzVCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFHdkIsY0FBUSxHQUFZLEtBQUssQ0FBQTtRQUV6QixjQUFRLEdBQVUsRUFBRSxDQUFBOztRQXFFcEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFsRUcsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLFFBQW1CLEVBQUUsS0FBVztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFFdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsZUFBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUM5QjthQUFNO1lBQ0gsZUFBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUM5QjtJQUNMLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLHFCQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ3hELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUNyQyxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUFBLGlCQWFDO2dDQVpZLENBQUM7WUFDTixJQUFJLElBQUksR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQUssSUFBSSxDQUFDLENBQUE7WUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzdCLE9BQUssT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUUzQixJQUFJLElBQUksR0FBYyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7WUFFekUscUJBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxPQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV4RCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQUssSUFBTyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsU0FBTyxDQUFBOzs7UUFWbkYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtvQkFBcEMsQ0FBQztTQVdUO0lBQ0wsQ0FBQztJQUVELDBCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDNUIsQ0FBQztJQUVELHdCQUFLLEdBQUwsVUFBTSxLQUFlLEVBQUUsRUFBVTtRQUFqQyxpQkFrQkM7UUFqQkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFFNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsZUFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUMvQjthQUFNO1lBQ0gsZUFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUMvQjtRQUNELHFCQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsSUFBSSxLQUFJLENBQUMsUUFBUTtnQkFDYixxQkFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsdUJBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLGNBQVEsZUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzNHLENBQUMsRUFBRTtZQUNDLElBQUksS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixlQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFBO2FBQ2pDO2lCQUFNO2dCQUNILGVBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7YUFDakM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUE5RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDOzRDQUNJO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFHdkI7UUFEQyxRQUFROzhDQUNnQjtJQVhSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtRjVCO0lBQUQsZUFBQztDQW5GRCxBQW1GQyxDQW5GcUMsRUFBRSxDQUFDLFNBQVMsR0FtRmpEO2tCQW5Gb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKSk1nciwgeyBFeHBvcnREaXIgfSBmcm9tIFwiLi4vRXhwb3J0VXRpbHNcIjtcclxuaW1wb3J0IFd4QXBpIGZyb20gXCIuLi8uLi9TY3JpcHRzL0xpYnMvV3hBcGlcIjtcclxuaW1wb3J0IEFkTWdyIGZyb20gXCIuLi8uLi9TY3JpcHRzL01vZC9BZE1nclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcclxuICAgIHNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc0dhbWVVSTogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgbXlOYXZBcnI6IGFueVtdID0gW11cclxuXHJcblxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93VUkoY2FsbGJhY2s/OiBGdW5jdGlvbiwgcGFyYW0/OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVVSSkge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn6aG26YOo5a+85Ye65qCP5Ye6546w5qyh5pWwJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn5bqV6YOo5a+85Ye65qCP5Ye6546w5qyh5pWwJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5teU5hdkFyciA9IFtdLmNvbmNhdChKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFycilcclxuICAgICAgICB0aGlzLl9pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKClcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlOYXZBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pXHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQobm9kZSlcclxuXHJcbiAgICAgICAgICAgIGxldCBpY29uOiBjYy5TcHJpdGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdpY29uJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuXHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLmxvYWRJbWdCeVVybChpY29uLCB0aGlzLm15TmF2QXJyW2ldLmljb24pXHJcblxyXG4gICAgICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7IHRoaXMubmF2Q0IoZXZlbnQsIGkpIH0sIHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQ0IoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgbmF2Q0IoZXZlbnQ6IGNjLkV2ZW50LCBpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrIGlkOicsIGlkKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVVSSkge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn6aG26YOo5a+85Ye65qCPLeaAu+eCueWHu+aVsCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+W6lemDqOWvvOWHuuagjy3mgLvngrnlh7vmlbAnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBKSk1nci5pbnN0YW5jZS5OYXZpZ2F0ZUFwcChpZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0dhbWVVSSlcclxuICAgICAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19GVUxMR0FNRVVJLCBudWxsLCAoKSA9PiB7IEFkTWdyLmluc3RhbmNlLnNob3dCYW5uZXIoKSB9KVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNHYW1lVUkpIHtcclxuICAgICAgICAgICAgICAgIFd4QXBpLmFsZEV2ZW50KCfpobbpg6jlr7zlh7rmoI8t5oC75oiQ5Yqf6Lez6L2s5pWwJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFd4QXBpLmFsZEV2ZW50KCflupXpg6jlr7zlh7rmoI8t5oC75oiQ5Yqf6Lez6L2s5pWwJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=