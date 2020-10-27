
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/GameLogic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b790dcAVrJK+Y2P3WTjeGtj', 'GameLogic');
// Scripts/Crl/GameLogic.ts

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
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLogic = /** @class */ (function (_super) {
    __extends(GameLogic, _super);
    function GameLogic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.LevelNode = null;
        _this.FinishUI = null;
        _this.DefeatUI = null;
        return _this;
        // update (dt) {}
    }
    GameLogic_1 = GameLogic;
    GameLogic.prototype.onLoad = function () {
        GameLogic_1.Share = this;
        this.addLevelNode();
    };
    GameLogic.prototype.start = function () {
    };
    GameLogic.prototype.addLevelNode = function () {
        var _this = this;
        cc.loader.loadRes('Prefabs/LevelNode/Level' + PlayerDataMgr_1.default.getPlayerData().grade, cc.Prefab, function (err, prefab) {
            if (prefab) {
                var p = cc.instantiate(prefab);
                _this.LevelNode.addChild(p);
            }
        });
    };
    GameLogic.prototype.showFinishUI = function () {
        this.FinishUI.active = true;
    };
    GameLogic.prototype.showDefeatUI = function () {
        this.DefeatUI.active = true;
    };
    var GameLogic_1;
    __decorate([
        property(cc.Node)
    ], GameLogic.prototype, "LevelNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameLogic.prototype, "FinishUI", void 0);
    __decorate([
        property(cc.Node)
    ], GameLogic.prototype, "DefeatUI", void 0);
    GameLogic = GameLogic_1 = __decorate([
        ccclass
    ], GameLogic);
    return GameLogic;
}(cc.Component));
exports.default = GameLogic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxHYW1lTG9naWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBRTVDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUFzQ0M7UUFqQ0csZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBRXhCLGNBQVEsR0FBWSxJQUFJLENBQUE7O1FBNEJ4QixpQkFBaUI7SUFDckIsQ0FBQztrQkFyQ29CLFNBQVM7SUFVMUIsMEJBQU0sR0FBTjtRQUNJLFdBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBRUQseUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsR0FBRyx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07WUFDdEcsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDOUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDN0I7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO0lBQy9CLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO0lBQy9CLENBQUM7O0lBOUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNNO0lBUlAsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXFDN0I7SUFBRCxnQkFBQztDQXJDRCxBQXFDQyxDQXJDc0MsRUFBRSxDQUFDLFNBQVMsR0FxQ2xEO2tCQXJDb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTG9naWMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyBTaGFyZTogR2FtZUxvZ2ljXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBMZXZlbE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEZpbmlzaFVJOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBEZWZlYXRVSTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgR2FtZUxvZ2ljLlNoYXJlID0gdGhpc1xyXG4gICAgICAgIHRoaXMuYWRkTGV2ZWxOb2RlKClcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGV2ZWxOb2RlKCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdQcmVmYWJzL0xldmVsTm9kZS9MZXZlbCcgKyBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByZWZhYikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkxldmVsTm9kZS5hZGRDaGlsZChwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93RmluaXNoVUkoKSB7XHJcbiAgICAgICAgdGhpcy5GaW5pc2hVSS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RlZmVhdFVJKCkge1xyXG4gICAgICAgIHRoaXMuRGVmZWF0VUkuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19