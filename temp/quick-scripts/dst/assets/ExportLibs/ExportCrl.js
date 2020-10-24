
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/ExportCrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7de57dSE4tEJaZ954yYkzmB', 'ExportCrl');
// ExportLibs/ExportCrl.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ExportCrl = /** @class */ (function (_super) {
    __extends(ExportCrl, _super);
    function ExportCrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExportCrl.prototype.onLoad = function () {
        this.node.setContentSize(cc.view.getVisibleSize());
        this.node.setPosition(cc.v2(this.node.getContentSize().width / 2, this.node.getContentSize().height / 2));
    };
    ExportCrl.prototype.start = function () {
    };
    ExportCrl.prototype.showJJUI = function (dir, param, callback) {
        for (var i = 0; i < this.node.childrenCount; i++) {
            this.node.children[i].zIndex = this.node.children[i].name == dir ? 999 : 100;
        }
        this.node.getChildByName(dir).getComponent(dir).showUI(callback, param);
    };
    ExportCrl.prototype.closeJJUI = function (dir) {
        this.node.getChildByName(dir).active = false;
    };
    ExportCrl.prototype.closeAllJJUI = function () {
        for (var i = 0; i < this.node.childrenCount; i++) {
            this.node.children[i].active = false;
            this.node.children[i].getComponent(this.node.children[i].name).unscheduleAllCallbacks();
        }
    };
    ExportCrl = __decorate([
        ccclass
    ], ExportCrl);
    return ExportCrl;
}(cc.Component));
exports.default = ExportCrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcRXhwb3J0Q3JsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7O0lBOEJBLENBQUM7SUE1QkcsMEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQTtRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzdHLENBQUM7SUFFRCx5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxHQUFjLEVBQUUsS0FBVyxFQUFFLFFBQW1CO1FBQ3JELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7U0FDL0U7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUFVLEdBQWM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUNoRCxDQUFDO0lBRUQsZ0NBQVksR0FBWjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO1NBQzFGO0lBQ0wsQ0FBQztJQTNCZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQThCN0I7SUFBRCxnQkFBQztDQTlCRCxBQThCQyxDQTlCc0MsRUFBRSxDQUFDLFNBQVMsR0E4QmxEO2tCQTlCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4cG9ydERpciB9IGZyb20gXCIuL0V4cG9ydFV0aWxzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwb3J0Q3JsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKSlcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY2MudjIodGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGggLyAyLCB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyAyKSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0pKVUkoZGlyOiBFeHBvcnREaXIsIHBhcmFtPzogYW55LCBjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltpXS56SW5kZXggPSB0aGlzLm5vZGUuY2hpbGRyZW5baV0ubmFtZSA9PSBkaXIgPyA5OTkgOiAxMDBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGRpcikuZ2V0Q29tcG9uZW50KGRpcikuc2hvd1VJKGNhbGxiYWNrLCBwYXJhbSlcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUpKVUkoZGlyOiBFeHBvcnREaXIpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoZGlyKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQWxsSkpVSSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQodGhpcy5ub2RlLmNoaWxkcmVuW2ldLm5hbWUpLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==