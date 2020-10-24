
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pointNode = null;
        _this.gotMeat = false;
        _this.moveSpeed = 1;
        _this.pointIndex = 0;
        return _this;
        // update (dt) {}
    }
    Player.prototype.onLoad = function () {
        this.pointNode = LevelBase_1.default.Share.node.getChildByName('PointNode');
    };
    Player.prototype.start = function () {
    };
    //吃掉食物
    Player.prototype.eatMean = function () {
        this.gotMeat = true;
    };
    Player.prototype.moveToPoint = function (index) {
        var _this = this;
        return new Promise(function (rs, rj) {
            var a1 = cc.moveTo(_this.moveSpeed, _this.pointNode.children[index].getPosition());
            var a2 = cc.callFunc(function () {
                _this.pointIndex = index;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0NBQTBDO0FBRXBDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFEaEQ7UUFBQSxxRUFvQ0M7UUFqQ0csZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixhQUFPLEdBQVksS0FBSyxDQUFBO1FBRXhCLGVBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIsZ0JBQVUsR0FBVyxDQUFDLENBQUE7O1FBMkJ0QixpQkFBaUI7SUFDckIsQ0FBQztJQTFCRyx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFFRCxzQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELE1BQU07SUFDTix3QkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7SUFDdkIsQ0FBQztJQUVELDRCQUFXLEdBQVgsVUFBWSxLQUFhO1FBQXpCLGlCQVVDO1FBVEcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3RCLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBO1lBQ2hGLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO2dCQUN2QixFQUFFLEVBQUUsQ0FBQTtZQUNSLENBQUMsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDNUIsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBaENnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBbUMxQjtJQUFELGFBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ21DLEVBQUUsQ0FBQyxTQUFTLEdBbUMvQztrQkFuQ29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGV2ZWwxIGZyb20gXCIuL0xldmVsL0xldmVsMVwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuL0xldmVsL0xldmVsQmFzZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcG9pbnROb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIGdvdE1lYXQ6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIG1vdmVTcGVlZDogbnVtYmVyID0gMVxyXG4gICAgcG9pbnRJbmRleDogbnVtYmVyID0gMFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnBvaW50Tm9kZSA9IExldmVsQmFzZS5TaGFyZS5ub2RlLmdldENoaWxkQnlOYW1lKCdQb2ludE5vZGUnKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+WQg+aOiemjn+eJqVxyXG4gICAgZWF0TWVhbigpIHtcclxuICAgICAgICB0aGlzLmdvdE1lYXQgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvUG9pbnQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocnMsIHJqKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhMSA9IGNjLm1vdmVUbyh0aGlzLm1vdmVTcGVlZCwgdGhpcy5wb2ludE5vZGUuY2hpbGRyZW5baW5kZXhdLmdldFBvc2l0aW9uKCkpXHJcbiAgICAgICAgICAgIGxldCBhMiA9IGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRJbmRleCA9IGluZGV4XHJcbiAgICAgICAgICAgICAgICBycygpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxldCBhMyA9IGNjLnNlcXVlbmNlKGExLCBhMilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhMylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19