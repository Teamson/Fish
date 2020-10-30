
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76dab/iNgFMwIBq7kOYxdpb', 'Player');
// Scripts/Crl/Player.ts

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
var LevelBase_1 = require("./Level/LevelBase");
var PlayerAni_1 = require("./PlayerAni");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.aniCrl = null;
        _this.pointNode = null;
        _this.gotMeat = false;
        _this.isMoving = false;
        _this.moveSpeed = 1;
        _this.pointIndex = 0;
        return _this;
        // update (dt) {}
    }
    Player.prototype.onLoad = function () {
        this.pointNode = LevelBase_1.default.Share.node.getChildByName('PointNode');
        this.aniCrl = this.node.children[0].getComponent(PlayerAni_1.default);
    };
    Player.prototype.start = function () {
    };
    //吃掉食物
    Player.prototype.eatMean = function () {
        var _this = this;
        this.node.pauseAllActions();
        this.aniCrl.playAnimationByName(3);
        this.scheduleOnce(function () {
            _this.aniCrl.playAnimationByName(_this.isMoving ? 1 : 0);
            _this.node.resumeAllActions();
        }, 1);
        this.gotMeat = true;
    };
    Player.prototype.moveToPoint = function (index) {
        var _this = this;
        return new Promise(function (rs, rj) {
            if (_this.isMoving) {
                rs();
                return;
            }
            var desPos = _this.pointNode.children[index].getPosition();
            _this.node.scaleX = Math.abs(_this.node.scaleX) * (desPos.x < _this.node.x ? 1 : -1);
            _this.aniCrl.playAnimationByName(1);
            _this.isMoving = true;
            var a1 = cc.moveTo(_this.moveSpeed, desPos);
            var a2 = cc.callFunc(function () {
                _this.pointIndex = index;
                _this.isMoving = false;
                _this.aniCrl.playAnimationByName(0);
                rs();
            });
            var a3 = cc.sequence(a1, a2);
            _this.node.runAction(a3);
        });
    };
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0NBQTBDO0FBQzFDLHlDQUFvQztBQUU5QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBRGhEO1FBQUEscUVBd0RDO1FBckRHLFlBQU0sR0FBYyxJQUFJLENBQUE7UUFFeEIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixhQUFPLEdBQVksS0FBSyxDQUFBO1FBRXhCLGNBQVEsR0FBWSxLQUFLLENBQUE7UUFDekIsZUFBUyxHQUFXLENBQUMsQ0FBQTtRQUNyQixnQkFBVSxHQUFXLENBQUMsQ0FBQTs7UUE0Q3RCLGlCQUFpQjtJQUNyQixDQUFDO0lBM0NHLHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDakUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFBO0lBQy9ELENBQUM7SUFFRCxzQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELE1BQU07SUFDTix3QkFBTyxHQUFQO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN0RCxLQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7UUFDaEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7SUFDdkIsQ0FBQztJQUVELDRCQUFXLEdBQVgsVUFBWSxLQUFhO1FBQXpCLGlCQW9CQztRQW5CRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsRUFBRSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNmLEVBQUUsRUFBRSxDQUFBO2dCQUNKLE9BQU07YUFDVDtZQUNELElBQUksTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQ3pELEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNqRixLQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2xDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1lBQ3BCLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUMxQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNqQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtnQkFDdkIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7Z0JBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ2xDLEVBQUUsRUFBRSxDQUFBO1lBQ1IsQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtZQUM1QixLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFwRGdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F1RDFCO0lBQUQsYUFBQztDQXZERCxBQXVEQyxDQXZEbUMsRUFBRSxDQUFDLFNBQVMsR0F1RC9DO2tCQXZEb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMZXZlbDEgZnJvbSBcIi4vTGV2ZWwvTGV2ZWwxXCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWwvTGV2ZWxCYXNlXCI7XHJcbmltcG9ydCBQbGF5ZXJBbmkgZnJvbSBcIi4vUGxheWVyQW5pXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBhbmlDcmw6IFBsYXllckFuaSA9IG51bGxcclxuXHJcbiAgICBwb2ludE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgZ290TWVhdDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgaXNNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgbW92ZVNwZWVkOiBudW1iZXIgPSAxXHJcbiAgICBwb2ludEluZGV4OiBudW1iZXIgPSAwXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucG9pbnROb2RlID0gTGV2ZWxCYXNlLlNoYXJlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1BvaW50Tm9kZScpXHJcbiAgICAgICAgdGhpcy5hbmlDcmwgPSB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KFBsYXllckFuaSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy/lkIPmjonpo5/nialcclxuICAgIGVhdE1lYW4oKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhdXNlQWxsQWN0aW9ucygpXHJcbiAgICAgICAgdGhpcy5hbmlDcmwucGxheUFuaW1hdGlvbkJ5TmFtZSgzKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmlDcmwucGxheUFuaW1hdGlvbkJ5TmFtZSh0aGlzLmlzTW92aW5nID8gMSA6IDApXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZXN1bWVBbGxBY3Rpb25zKClcclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIHRoaXMuZ290TWVhdCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9Qb2ludChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChycywgcmopID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJzKClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBkZXNQb3MgPSB0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbltpbmRleF0uZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gTWF0aC5hYnModGhpcy5ub2RlLnNjYWxlWCkgKiAoZGVzUG9zLnggPCB0aGlzLm5vZGUueCA/IDEgOiAtMSlcclxuICAgICAgICAgICAgdGhpcy5hbmlDcmwucGxheUFuaW1hdGlvbkJ5TmFtZSgxKVxyXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICBsZXQgYTEgPSBjYy5tb3ZlVG8odGhpcy5tb3ZlU3BlZWQsIGRlc1BvcylcclxuICAgICAgICAgICAgbGV0IGEyID0gY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludEluZGV4ID0gaW5kZXhcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmlDcmwucGxheUFuaW1hdGlvbkJ5TmFtZSgwKVxyXG4gICAgICAgICAgICAgICAgcnMoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsZXQgYTMgPSBjYy5zZXF1ZW5jZShhMSwgYTIpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYTMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==