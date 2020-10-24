
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/Stone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ead0i5Y2hHIaJFLKQdJamx', 'Stone');
// Scripts/Crl/Prop/Stone.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Stone = /** @class */ (function (_super) {
    __extends(Stone, _super);
    function Stone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveByY = 0;
        _this.moveTime = 1;
        _this.playerNode = null;
        _this.isMoveing = false;
        _this.isTriggered = false;
        return _this;
    }
    Stone_1 = Stone;
    Stone.prototype.onLoad = function () {
        Stone_1.Share = this;
        this.playerNode = LevelBase_1.default.Share.playerNode;
    };
    Stone.prototype.start = function () {
    };
    //触发事件
    Stone.prototype.triggerCB = function () {
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
    Stone.prototype.collByPlayer = function () {
        if (this.playerNode) {
            var dis = Utility_1.default.getWorldDis(this.node, this.playerNode);
            if (dis <= 20 && !this.isMoveing) {
                this.playerNode.stopAllActions();
                this.node.destroy();
                LevelBase_1.default.Share.loseCB();
            }
        }
    };
    Stone.prototype.collBySharp = function () {
        if (LevelBase_1.default.Share.Sharp && LevelBase_1.default.Share.Sharp.isValid) {
            var dis = Utility_1.default.getWorldDis(this.node, LevelBase_1.default.Share.Sharp);
            if (dis <= 50 && !this.isMoveing) {
                LevelBase_1.default.Share.Sharp.stopAllActions();
                LevelBase_1.default.Share.Sharp.destroy();
            }
        }
    };
    Stone.prototype.update = function (dt) {
        this.collByPlayer();
        this.collBySharp();
    };
    var Stone_1;
    __decorate([
        property
    ], Stone.prototype, "moveByY", void 0);
    __decorate([
        property
    ], Stone.prototype, "moveTime", void 0);
    Stone = Stone_1 = __decorate([
        ccclass
    ], Stone);
    return Stone;
}(cc.Component));
exports.default = Stone;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxTdG9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsZ0RBQTJDO0FBR3JDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFEL0M7UUFBQSxxRUFpRUM7UUE1REcsYUFBTyxHQUFXLENBQUMsQ0FBQTtRQUduQixjQUFRLEdBQVcsQ0FBQyxDQUFBO1FBRXBCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGVBQVMsR0FBWSxLQUFLLENBQUE7UUFDMUIsaUJBQVcsR0FBWSxLQUFLLENBQUE7O0lBb0RoQyxDQUFDO2NBaEVvQixLQUFLO0lBY3RCLHNCQUFNLEdBQU47UUFDSSxPQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQTtJQUNoRCxDQUFDO0lBRUQscUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxNQUFNO0lBQ04seUJBQVMsR0FBVDtRQUFBLGlCQVlDO1FBWEcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3RCLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1lBQ3JCLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtZQUN6RCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNqQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtnQkFDdEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7Z0JBQ3ZCLEVBQUUsRUFBRSxDQUFBO1lBQ1IsQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtZQUM1QixLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxXQUFXO0lBQ1gsNEJBQVksR0FBWjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLEdBQUcsR0FBRyxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN6RCxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFBO2dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUNuQixtQkFBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQTthQUMzQjtTQUNKO0lBQ0wsQ0FBQztJQUVELDJCQUFXLEdBQVg7UUFDSSxJQUFJLG1CQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxtQkFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3hELElBQUksR0FBRyxHQUFHLGlCQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsbUJBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDL0QsSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDOUIsbUJBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO2dCQUN0QyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUE7YUFDbEM7U0FDSjtJQUNMLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEIsQ0FBQzs7SUEzREQ7UUFEQyxRQUFROzBDQUNVO0lBR25CO1FBREMsUUFBUTsyQ0FDVztJQVBILEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FnRXpCO0lBQUQsWUFBQztDQWhFRCxBQWdFQyxDQWhFa0MsRUFBRSxDQUFDLFNBQVMsR0FnRTlDO2tCQWhFb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuLi9MZXZlbC9MZXZlbEJhc2VcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyBTaGFyZTogU3RvbmVcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1vdmVCeVk6IG51bWJlciA9IDBcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1vdmVUaW1lOiBudW1iZXIgPSAxXHJcblxyXG4gICAgcGxheWVyTm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBpc01vdmVpbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgaXNUcmlnZ2VyZWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBTdG9uZS5TaGFyZSA9IHRoaXNcclxuICAgICAgICB0aGlzLnBsYXllck5vZGUgPSBMZXZlbEJhc2UuU2hhcmUucGxheWVyTm9kZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+inpuWPkeS6i+S7tlxyXG4gICAgdHJpZ2dlckNCKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocnMsIHJqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZlaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICBsZXQgYTEgPSBjYy5tb3ZlQnkodGhpcy5tb3ZlVGltZSwgY2MudjIoMCwgdGhpcy5tb3ZlQnlZKSlcclxuICAgICAgICAgICAgbGV0IGEyID0gY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmVpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RyaWdnZXJlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHJzKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IGEzID0gY2Muc2VxdWVuY2UoYTEsIGEyKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGEzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy/mo4DmtYvmmK/lkKbnorDliLDnvo7kurrpsbxcclxuICAgIGNvbGxCeVBsYXllcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJOb2RlKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXMgPSBVdGlsaXR5LmdldFdvcmxkRGlzKHRoaXMubm9kZSwgdGhpcy5wbGF5ZXJOb2RlKVxyXG4gICAgICAgICAgICBpZiAoZGlzIDw9IDIwICYmICF0aGlzLmlzTW92ZWluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJOb2RlLnN0b3BBbGxBY3Rpb25zKClcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIExldmVsQmFzZS5TaGFyZS5sb3NlQ0IoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxCeVNoYXJwKCkge1xyXG4gICAgICAgIGlmIChMZXZlbEJhc2UuU2hhcmUuU2hhcnAgJiYgTGV2ZWxCYXNlLlNoYXJlLlNoYXJwLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgbGV0IGRpcyA9IFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5ub2RlLCBMZXZlbEJhc2UuU2hhcmUuU2hhcnApXHJcbiAgICAgICAgICAgIGlmIChkaXMgPD0gNTAgJiYgIXRoaXMuaXNNb3ZlaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBMZXZlbEJhc2UuU2hhcmUuU2hhcnAuc3RvcEFsbEFjdGlvbnMoKVxyXG4gICAgICAgICAgICAgICAgTGV2ZWxCYXNlLlNoYXJlLlNoYXJwLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuY29sbEJ5UGxheWVyKClcclxuICAgICAgICB0aGlzLmNvbGxCeVNoYXJwKClcclxuICAgIH1cclxufVxyXG4iXX0=