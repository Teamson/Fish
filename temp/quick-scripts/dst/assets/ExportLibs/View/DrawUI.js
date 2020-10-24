
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/DrawUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '12943VnbVBF/JhC43WoEYow', 'DrawUI');
// ExportLibs/View/DrawUI.ts

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
var DrawUI = /** @class */ (function (_super) {
    __extends(DrawUI, _super);
    function DrawUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.scroll = null;
        _this.content = null;
        _this.bgNode = null;
        _this.myNavArr = [];
        _this.closeCallback = null;
        _this.isAutoClose = false;
        _this.hadTouch = false;
        return _this;
    }
    // onLoad () {}
    DrawUI.prototype.start = function () {
    };
    DrawUI.prototype.showUI = function (callback, param) {
        if (callback) {
            this.closeCallback = callback;
        }
        if (param && param.isAutoClose) {
            this.isAutoClose = param.isAutoClose;
        }
        WxApi_1.default.aldEvent('左边抽屉导出弹窗出现次数');
        this.node.active = true;
        this.moveDraw(-375, function () { });
    };
    DrawUI.prototype.onEnable = function () {
        var _this = this;
        this.myNavArr = [].concat(ExportUtils_1.default.instance.navigateAppArr);
        this._init();
        if (this.isAutoClose) {
            this.scheduleOnce(function () {
                if (!_this.hadTouch)
                    _this.closeCB();
            }, 1.5);
        }
    };
    DrawUI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
        this.content.destroyAllChildren();
        this.closeCallback && this.closeCallback();
        this.closeCallback = null;
        this.bgNode.x = -1000;
        this.hadTouch = false;
    };
    DrawUI.prototype.moveDraw = function (x, cb) {
        var a1 = cc.moveTo(0.2, cc.v2(x, this.bgNode.y));
        var a2 = cc.callFunc(cb);
        this.bgNode.runAction(cc.sequence(a1, a2));
    };
    DrawUI.prototype._init = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var node = cc.instantiate(this_1.item);
            node.active = true;
            this_1.content.addChild(node);
            var name = node.getChildByName('name').getComponent(cc.Label);
            var icon = node.getChildByName('icon').getComponent(cc.Sprite);
            name.string = ExportUtils_1.default.instance.getSubtitle(i);
            ExportUtils_1.default.instance.loadImgByUrl(icon, this_1.myNavArr[i].icon);
            node.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, i); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.myNavArr.length; i++) {
            _loop_1(i);
        }
    };
    DrawUI.prototype.closeCB = function () {
        var _this = this;
        this.moveDraw(-1000, function () {
            _this.node.active = false;
        });
    };
    DrawUI.prototype.navCB = function (event, id) {
        var _this = this;
        console.log('click id:', id);
        this.hadTouch = true;
        WxApi_1.default.aldEvent('左边抽屉导出弹窗-总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
                _this.scheduleOnce(function () { AdMgr_1.default.instance.showBanner(); }, 0.1);
            });
        }, function () {
            WxApi_1.default.aldEvent('左边抽屉导出弹窗全-总成功跳转数');
        });
    };
    DrawUI.prototype.update = function (dt) {
        if (!this.hadTouch && this.scroll.isScrolling()) {
            this.hadTouch = true;
        }
    };
    __decorate([
        property(cc.Node)
    ], DrawUI.prototype, "item", void 0);
    __decorate([
        property(cc.ScrollView)
    ], DrawUI.prototype, "scroll", void 0);
    __decorate([
        property(cc.Node)
    ], DrawUI.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], DrawUI.prototype, "bgNode", void 0);
    DrawUI = __decorate([
        ccclass
    ], DrawUI);
    return DrawUI;
}(cc.Component));
exports.default = DrawUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcRHJhd1VJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUFrRDtBQUNsRCxrREFBNkM7QUFDN0MsaURBQTRDO0FBRXRDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFEaEQ7UUFBQSxxRUEwR0M7UUF0R0csVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUc1QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBR3ZCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsY0FBUSxHQUFVLEVBQUUsQ0FBQTtRQUVwQixtQkFBYSxHQUFhLElBQUksQ0FBQTtRQUU5QixpQkFBVyxHQUFZLEtBQUssQ0FBQTtRQUM1QixjQUFRLEdBQVksS0FBSyxDQUFBOztJQXNGN0IsQ0FBQztJQXBGRyxlQUFlO0lBRWYsc0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sUUFBbUIsRUFBRSxLQUFXO1FBQ25DLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUE7U0FDaEM7UUFDRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQTtTQUN2QztRQUNELGVBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsY0FBUSxDQUFDLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQseUJBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFFBQVEs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R29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSkpNZ3IsIHsgRXhwb3J0RGlyIH0gZnJvbSBcIi4uL0V4cG9ydFV0aWxzXCI7XHJcbmltcG9ydCBXeEFwaSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9MaWJzL1d4QXBpXCI7XHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vLi4vU2NyaXB0cy9Nb2QvQWRNZ3JcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3VUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcclxuICAgIHNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiZ05vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgbXlOYXZBcnI6IGFueVtdID0gW11cclxuXHJcbiAgICBjbG9zZUNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGxcclxuXHJcbiAgICBpc0F1dG9DbG9zZTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBoYWRUb3VjaDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3dVSShjYWxsYmFjaz86IEZ1bmN0aW9uLCBwYXJhbT86IGFueSkge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgPSBjYWxsYmFja1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyYW0gJiYgcGFyYW0uaXNBdXRvQ2xvc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0F1dG9DbG9zZSA9IHBhcmFtLmlzQXV0b0Nsb3NlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFd4QXBpLmFsZEV2ZW50KCflt6bovrnmir3lsYnlr7zlh7rlvLnnqpflh7rnjrDmrKHmlbAnKVxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tb3ZlRHJhdygtMzc1LCAoKSA9PiB7IH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5teU5hdkFyciA9IFtdLmNvbmNhdChKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFycilcclxuICAgICAgICB0aGlzLl9pbml0KClcclxuICAgICAgICBpZiAodGhpcy5pc0F1dG9DbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFkVG91Y2gpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUNCKClcclxuICAgICAgICAgICAgfSwgMS41KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKClcclxuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgJiYgdGhpcy5jbG9zZUNhbGxiYWNrKClcclxuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgPSBudWxsXHJcbiAgICAgICAgdGhpcy5iZ05vZGUueCA9IC0xMDAwXHJcbiAgICAgICAgdGhpcy5oYWRUb3VjaCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZURyYXcoeDogbnVtYmVyLCBjYjogRnVuY3Rpb24pIHtcclxuICAgICAgICBsZXQgYTEgPSBjYy5tb3ZlVG8oMC4yLCBjYy52Mih4LCB0aGlzLmJnTm9kZS55KSlcclxuICAgICAgICBsZXQgYTIgPSBjYy5jYWxsRnVuYyhjYilcclxuICAgICAgICB0aGlzLmJnTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYTEsIGEyKSlcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlOYXZBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pXHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQobm9kZSlcclxuXHJcbiAgICAgICAgICAgIGxldCBuYW1lOiBjYy5MYWJlbCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIGxldCBpY29uOiBjYy5TcHJpdGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdpY29uJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuXHJcbiAgICAgICAgICAgIG5hbWUuc3RyaW5nID0gSkpNZ3IuaW5zdGFuY2UuZ2V0U3VidGl0bGUoaSlcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2UubG9hZEltZ0J5VXJsKGljb24sIHRoaXMubXlOYXZBcnJbaV0uaWNvbilcclxuXHJcbiAgICAgICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHsgdGhpcy5uYXZDQihldmVudCwgaSkgfSwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VDQigpIHtcclxuICAgICAgICB0aGlzLm1vdmVEcmF3KC0xMDAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbmF2Q0IoZXZlbnQ6IGNjLkV2ZW50LCBpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrIGlkOicsIGlkKVxyXG4gICAgICAgIHRoaXMuaGFkVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+W3pui+ueaKveWxieWvvOWHuuW8ueeqly3mgLvngrnlh7vmlbAnKVxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLk5hdmlnYXRlQXBwKGlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19SRUNPTU1FTkRVSSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKCkgfSwgMC4xKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+W3pui+ueaKveWxieWvvOWHuuW8ueeql+WFqC3mgLvmiJDlip/ot7PovazmlbAnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhZFRvdWNoICYmIHRoaXMuc2Nyb2xsLmlzU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5oYWRUb3VjaCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19