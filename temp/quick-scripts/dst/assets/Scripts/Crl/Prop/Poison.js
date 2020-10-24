
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/Poison.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8e7563uHIJDx5dngN1srY26', 'Poison');
// Scripts/Crl/Prop/Poison.ts

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
var Poison = /** @class */ (function (_super) {
    __extends(Poison, _super);
    function Poison() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // onLoad () {}
    Poison.prototype.start = function () {
    };
    Poison.prototype.update = function (dt) {
        if (!LevelBase_1.default.Share.isGameOver) {
            if (Utility_1.default.getWorldDis(this.node, LevelBase_1.default.Share.playerNode) <= 20) {
                LevelBase_1.default.Share.loseCB();
            }
            if (LevelBase_1.default.Share.meatNode.isValid && Utility_1.default.getWorldDis(this.node, LevelBase_1.default.Share.meatNode) <= 20) {
                LevelBase_1.default.Share.loseCB();
            }
        }
    };
    Poison = __decorate([
        ccclass
    ], Poison);
    return Poison;
}(cc.Component));
exports.default = Poison;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxQb2lzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBRXhDLGdEQUEyQztBQUVyQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEOztJQWtCQSxDQUFDO0lBaEJHLGVBQWU7SUFFZixzQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLG1CQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUM3QixJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsbUJBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNsRSxtQkFBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQTthQUMzQjtZQUNELElBQUksbUJBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLG1CQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDcEcsbUJBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUE7YUFDM0I7U0FDSjtJQUNMLENBQUM7SUFqQmdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FrQjFCO0lBQUQsYUFBQztDQWxCRCxBQWtCQyxDQWxCbUMsRUFBRSxDQUFDLFNBQVMsR0FrQi9DO2tCQWxCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgTGV2ZWwxIGZyb20gXCIuLi9MZXZlbC9MZXZlbDFcIjtcclxuaW1wb3J0IExldmVsQmFzZSBmcm9tIFwiLi4vTGV2ZWwvTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pc29uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKCFMZXZlbEJhc2UuU2hhcmUuaXNHYW1lT3Zlcikge1xyXG4gICAgICAgICAgICBpZiAoVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLm5vZGUsIExldmVsQmFzZS5TaGFyZS5wbGF5ZXJOb2RlKSA8PSAyMCkge1xyXG4gICAgICAgICAgICAgICAgTGV2ZWxCYXNlLlNoYXJlLmxvc2VDQigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKExldmVsQmFzZS5TaGFyZS5tZWF0Tm9kZS5pc1ZhbGlkICYmIFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5ub2RlLCBMZXZlbEJhc2UuU2hhcmUubWVhdE5vZGUpIDw9IDIwKSB7XHJcbiAgICAgICAgICAgICAgICBMZXZlbEJhc2UuU2hhcmUubG9zZUNCKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=