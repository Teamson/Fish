
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
var WxApi_1 = require("../Libs/WxApi");
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
        if (PlayerDataMgr_1.default.getPlayerData().grade <= 10)
            WxApi_1.default.aldEvent('第' + PlayerDataMgr_1.default.getPlayerData().grade + '关成功进入游戏');
    };
    GameLogic.prototype.addLevelNode = function () {
        // cc.loader.loadRes('Prefabs/LevelNode/Level' + PlayerDataMgr.getPlayerData().grade, cc.Prefab, (err, prefab) => {
        //     if (prefab) {
        //         let p = cc.instantiate(prefab)
        //         this.LevelNode.addChild(p)
        //     }
        // })
        this.LevelNode.children[PlayerDataMgr_1.default.getPlayerData().grade - 1].active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxHYW1lTG9naWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELHVDQUFrQztBQUU1QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBRG5EO1FBQUEscUVBd0NDO1FBbkNHLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFBOztRQThCeEIsaUJBQWlCO0lBQ3JCLENBQUM7a0JBdkNvQixTQUFTO0lBVTFCLDBCQUFNLEdBQU47UUFDSSxXQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUN0QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDSSxJQUFJLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDekMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUE7SUFDN0UsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFDSSxtSEFBbUg7UUFDbkgsb0JBQW9CO1FBQ3BCLHlDQUF5QztRQUN6QyxxQ0FBcUM7UUFDckMsUUFBUTtRQUNSLEtBQUs7UUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO0lBQ2xGLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO0lBQy9CLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO0lBQy9CLENBQUM7O0lBaENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNNO0lBUlAsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXVDN0I7SUFBRCxnQkFBQztDQXZDRCxBQXVDQyxDQXZDc0MsRUFBRSxDQUFDLFNBQVMsR0F1Q2xEO2tCQXZDb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuaW1wb3J0IFd4QXBpIGZyb20gXCIuLi9MaWJzL1d4QXBpXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxvZ2ljIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgU2hhcmU6IEdhbWVMb2dpY1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgTGV2ZWxOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBGaW5pc2hVSTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRGVmZWF0VUk6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEdhbWVMb2dpYy5TaGFyZSA9IHRoaXNcclxuICAgICAgICB0aGlzLmFkZExldmVsTm9kZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlIDw9IDEwKVxyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn56ysJyArIFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlICsgJ+WFs+aIkOWKn+i/m+WFpea4uOaIjycpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGV2ZWxOb2RlKCkge1xyXG4gICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKCdQcmVmYWJzL0xldmVsTm9kZS9MZXZlbCcgKyBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHByZWZhYikge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IHAgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLkxldmVsTm9kZS5hZGRDaGlsZChwKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICB0aGlzLkxldmVsTm9kZS5jaGlsZHJlbltQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSAtIDFdLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBzaG93RmluaXNoVUkoKSB7XHJcbiAgICAgICAgdGhpcy5GaW5pc2hVSS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RlZmVhdFVJKCkge1xyXG4gICAgICAgIHRoaXMuRGVmZWF0VUkuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19