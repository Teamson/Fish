
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Sharp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71123qtqFBE6ZXv3z84xy+B', 'Sharp');
// Scripts/Crl/Sharp.ts

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
var Utility_1 = require("../Mod/Utility");
var LevelBase_1 = require("./Level/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Sharp = /** @class */ (function (_super) {
    __extends(Sharp, _super);
    function Sharp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pointNode = null;
        _this.moveSpeed = 1;
        _this.isMoving = false;
        _this.pointIndex = 0;
        return _this;
    }
    Sharp.prototype.onLoad = function () {
        this.pointNode = LevelBase_1.default.Share.node.getChildByName('PointNode');
    };
    Sharp.prototype.start = function () {
    };
    Sharp.prototype.moveToPoint = function (index) {
        var _this = this;
        return new Promise(function (rs, rj) {
            if (_this.isMoving) {
                rs();
                return;
            }
            _this.isMoving = true;
            var desPos = _this.pointNode.children[index].getPosition();
            var dis = Utility_1.default.getWorldDis(_this.pointNode.children[index], _this.node);
            var a1 = cc.moveTo(dis / 300 /* this.moveSpeed */, desPos);
            var a2 = cc.callFunc(function () {
                _this.pointIndex = index;
                _this.isMoving = false;
                rs();
            });
            var a3 = cc.sequence(a1, a2);
            _this.node.runAction(a3);
        });
    };
    Sharp.prototype.checkEatPlayer = function () {
        if (!LevelBase_1.default.Share.isGameOver) {
            if (Utility_1.default.getWorldDis(this.node, LevelBase_1.default.Share.playerNode) <= 50) {
                LevelBase_1.default.Share.loseCB();
            }
        }
    };
    Sharp.prototype.update = function (dt) {
        this.checkEatPlayer();
    };
    __decorate([
        property
    ], Sharp.prototype, "pointIndex", void 0);
    Sharp = __decorate([
        ccclass
    ], Sharp);
    return Sharp;
}(cc.Component));
exports.default = Sharp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxTaGFycC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBcUM7QUFFckMsK0NBQTBDO0FBRXBDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFEL0M7UUFBQSxxRUFrREM7UUEvQ0csZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixlQUFTLEdBQVcsQ0FBQyxDQUFBO1FBRXJCLGNBQVEsR0FBWSxLQUFLLENBQUE7UUFFekIsZ0JBQVUsR0FBVyxDQUFDLENBQUE7O0lBeUMxQixDQUFDO0lBdkNHLHNCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDckUsQ0FBQztJQUVELHFCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsMkJBQVcsR0FBWCxVQUFZLEtBQWE7UUFBekIsaUJBa0JDO1FBakJHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxFQUFFLEVBQUUsRUFBRTtZQUN0QixJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsRUFBRSxFQUFFLENBQUE7Z0JBQ0osT0FBTTthQUNUO1lBQ0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7WUFDcEIsSUFBSSxNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUE7WUFDekQsSUFBSSxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3hFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQSxvQkFBb0IsRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUN6RCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNqQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtnQkFDdkIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7Z0JBQ3JCLEVBQUUsRUFBRSxDQUFBO1lBQ1IsQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtZQUM1QixLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw4QkFBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLG1CQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUM3QixJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsbUJBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNsRSxtQkFBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQTthQUMzQjtTQUNKO0lBQ0wsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ3pCLENBQUM7SUF4Q0Q7UUFEQyxRQUFROzZDQUNhO0lBUkwsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWlEekI7SUFBRCxZQUFDO0NBakRELEFBaURDLENBakRrQyxFQUFFLENBQUMsU0FBUyxHQWlEOUM7a0JBakRvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uL01vZC9VdGlsaXR5XCI7XHJcbmltcG9ydCBMZXZlbDEgZnJvbSBcIi4vTGV2ZWwvTGV2ZWwxXCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWwvTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcnAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHBvaW50Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBtb3ZlU3BlZWQ6IG51bWJlciA9IDFcclxuXHJcbiAgICBpc01vdmluZzogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHBvaW50SW5kZXg6IG51bWJlciA9IDBcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludE5vZGUgPSBMZXZlbEJhc2UuU2hhcmUubm9kZS5nZXRDaGlsZEJ5TmFtZSgnUG9pbnROb2RlJylcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvUG9pbnQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocnMsIHJqKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW92aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBycygpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICBsZXQgZGVzUG9zID0gdGhpcy5wb2ludE5vZGUuY2hpbGRyZW5baW5kZXhdLmdldFBvc2l0aW9uKClcclxuICAgICAgICAgICAgbGV0IGRpcyA9IFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5wb2ludE5vZGUuY2hpbGRyZW5baW5kZXhdLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIGxldCBhMSA9IGNjLm1vdmVUbyhkaXMgLyAzMDAvKiB0aGlzLm1vdmVTcGVlZCAqLywgZGVzUG9zKVxyXG4gICAgICAgICAgICBsZXQgYTIgPSBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50SW5kZXggPSBpbmRleFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBycygpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxldCBhMyA9IGNjLnNlcXVlbmNlKGExLCBhMilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhMylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRWF0UGxheWVyKCkge1xyXG4gICAgICAgIGlmICghTGV2ZWxCYXNlLlNoYXJlLmlzR2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5ub2RlLCBMZXZlbEJhc2UuU2hhcmUucGxheWVyTm9kZSkgPD0gNTApIHtcclxuICAgICAgICAgICAgICAgIExldmVsQmFzZS5TaGFyZS5sb3NlQ0IoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tFYXRQbGF5ZXIoKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==