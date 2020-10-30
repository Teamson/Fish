
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/Meat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0645KFQ2hFw7jXMP2cWpkN', 'Meat');
// Scripts/Crl/Prop/Meat.ts

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
var Utility_1 = require("../../Mod/Utility");
var LevelBase_1 = require("../Level/LevelBase");
var Player_1 = require("../Player");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Meat = /** @class */ (function (_super) {
    __extends(Meat, _super);
    function Meat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveByY = 0;
        _this.moveTime = 1;
        _this.playerNode = null;
        _this.isMoveing = false;
        _this.isTriggered = false;
        return _this;
    }
    // onLoad () {}
    Meat.prototype.start = function () {
        this.playerNode = LevelBase_1.default.Share.playerNode;
    };
    //触发事件
    Meat.prototype.triggerCB = function () {
        var _this = this;
        return new Promise(function (rs, rj) {
            _this.isMoveing = true;
            var a1 = cc.moveBy(_this.moveTime, cc.v2(0, _this.moveByY));
            var a2 = cc.callFunc(function () {
                _this.isMoveing = false;
                _this.isTriggered = true;
                rs();
            });
            var a3 = cc.sequence(a1, a2);
            _this.node.runAction(a3);
        });
    };
    //检测是否碰到美人鱼
    Meat.prototype.eatByPlayer = function () {
        if (this.playerNode) {
            var dis = Utility_1.default.getWorldDis(this.node, this.playerNode);
            if (dis <= 50 && !this.isMoveing) {
                //被吃掉
                this.playerNode.getComponent(Player_1.default).eatMean();
                this.node.destroy();
            }
        }
    };
    Meat.prototype.eatBySharp = function () {
        if (LevelBase_1.default.Share.Sharp && LevelBase_1.default.Share.Sharp.isValid) {
            var dis = Utility_1.default.getWorldDis(this.node, LevelBase_1.default.Share.Sharp);
            if (dis <= 50 && !this.isMoveing) {
                //被吃掉
                LevelBase_1.default.Share.SharpCrl.aniCrl.playAnimationByName(3);
                this.node.destroy();
                LevelBase_1.default.Share.loseCB();
            }
        }
    };
    Meat.prototype.update = function (dt) {
        this.eatByPlayer();
        this.eatBySharp();
    };
    __decorate([
        property
    ], Meat.prototype, "moveByY", void 0);
    __decorate([
        property
    ], Meat.prototype, "moveTime", void 0);
    Meat = __decorate([
        ccclass
    ], Meat);
    return Meat;
}(cc.Component));
exports.default = Meat;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxNZWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QyxnREFBMkM7QUFDM0Msb0NBQStCO0FBRXpCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFEOUM7UUFBQSxxRUErREM7UUEzREcsYUFBTyxHQUFXLENBQUMsQ0FBQTtRQUduQixjQUFRLEdBQVcsQ0FBQyxDQUFBO1FBRXBCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGVBQVMsR0FBWSxLQUFLLENBQUE7UUFDMUIsaUJBQVcsR0FBWSxLQUFLLENBQUE7O0lBbURoQyxDQUFDO0lBakRHLGVBQWU7SUFFZixvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUE7SUFDaEQsQ0FBQztJQUVELE1BQU07SUFDTix3QkFBUyxHQUFUO1FBQUEsaUJBWUM7UUFYRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsRUFBRSxFQUFFLEVBQUU7WUFDdEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7WUFDckIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1lBQ3pELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO2dCQUN0QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtnQkFDdkIsRUFBRSxFQUFFLENBQUE7WUFDUixDQUFDLENBQUMsQ0FBQTtZQUNGLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQzVCLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELFdBQVc7SUFDWCwwQkFBVyxHQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksR0FBRyxHQUFHLGlCQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3pELElBQUksR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQzlCLEtBQUs7Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO2FBQ3RCO1NBQ0o7SUFDTCxDQUFDO0lBRUQseUJBQVUsR0FBVjtRQUNJLElBQUksbUJBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLG1CQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDeEQsSUFBSSxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxtQkFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUMvRCxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUM5QixLQUFLO2dCQUNMLG1CQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ25CLG1CQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFBO2FBQzNCO1NBQ0o7SUFDTCxDQUFDO0lBRUQscUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUExREQ7UUFEQyxRQUFRO3lDQUNVO0lBR25CO1FBREMsUUFBUTswQ0FDVztJQU5ILElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E4RHhCO0lBQUQsV0FBQztDQTlERCxBQThEQyxDQTlEaUMsRUFBRSxDQUFDLFNBQVMsR0E4RDdDO2tCQTlEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuLi9MZXZlbC9MZXZlbEJhc2VcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtb3ZlQnlZOiBudW1iZXIgPSAwXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtb3ZlVGltZTogbnVtYmVyID0gMVxyXG5cclxuICAgIHBsYXllck5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgaXNNb3ZlaW5nOiBib29sZWFuID0gZmFsc2VcclxuICAgIGlzVHJpZ2dlcmVkOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllck5vZGUgPSBMZXZlbEJhc2UuU2hhcmUucGxheWVyTm9kZVxyXG4gICAgfVxyXG5cclxuICAgIC8v6Kem5Y+R5LqL5Lu2XHJcbiAgICB0cmlnZ2VyQ0IoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChycywgcmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdmVpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgIGxldCBhMSA9IGNjLm1vdmVCeSh0aGlzLm1vdmVUaW1lLCBjYy52MigwLCB0aGlzLm1vdmVCeVkpKVxyXG4gICAgICAgICAgICBsZXQgYTIgPSBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92ZWluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVHJpZ2dlcmVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgcnMoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsZXQgYTMgPSBjYy5zZXF1ZW5jZShhMSwgYTIpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYTMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+ajgOa1i+aYr+WQpueisOWIsOe+juS6uumxvFxyXG4gICAgZWF0QnlQbGF5ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyTm9kZSkge1xyXG4gICAgICAgICAgICBsZXQgZGlzID0gVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLm5vZGUsIHRoaXMucGxheWVyTm9kZSlcclxuICAgICAgICAgICAgaWYgKGRpcyA8PSA1MCAmJiAhdGhpcy5pc01vdmVpbmcpIHtcclxuICAgICAgICAgICAgICAgIC8v6KKr5ZCD5o6JXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllck5vZGUuZ2V0Q29tcG9uZW50KFBsYXllcikuZWF0TWVhbigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWF0QnlTaGFycCgpIHtcclxuICAgICAgICBpZiAoTGV2ZWxCYXNlLlNoYXJlLlNoYXJwICYmIExldmVsQmFzZS5TaGFyZS5TaGFycC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXMgPSBVdGlsaXR5LmdldFdvcmxkRGlzKHRoaXMubm9kZSwgTGV2ZWxCYXNlLlNoYXJlLlNoYXJwKVxyXG4gICAgICAgICAgICBpZiAoZGlzIDw9IDUwICYmICF0aGlzLmlzTW92ZWluZykge1xyXG4gICAgICAgICAgICAgICAgLy/ooqvlkIPmjolcclxuICAgICAgICAgICAgICAgIExldmVsQmFzZS5TaGFyZS5TaGFycENybC5hbmlDcmwucGxheUFuaW1hdGlvbkJ5TmFtZSgzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgTGV2ZWxCYXNlLlNoYXJlLmxvc2VDQigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5lYXRCeVBsYXllcigpXHJcbiAgICAgICAgdGhpcy5lYXRCeVNoYXJwKClcclxuICAgIH1cclxufVxyXG4iXX0=