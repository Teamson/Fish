
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLogic = /** @class */ (function (_super) {
    __extends(GameLogic, _super);
    function GameLogic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FinishUI = null;
        _this.DefeatUI = null;
        return _this;
        // update (dt) {}
    }
    GameLogic_1 = GameLogic;
    GameLogic.prototype.onLoad = function () {
        GameLogic_1.Share = this;
    };
    GameLogic.prototype.start = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxHYW1lTG9naWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQURuRDtRQUFBLHFFQTBCQztRQXJCRyxjQUFRLEdBQVksSUFBSSxDQUFBO1FBRXhCLGNBQVEsR0FBWSxJQUFJLENBQUE7O1FBa0J4QixpQkFBaUI7SUFDckIsQ0FBQztrQkF6Qm9CLFNBQVM7SUFRMUIsMEJBQU0sR0FBTjtRQUNJLFdBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO0lBQzFCLENBQUM7SUFFRCx5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDL0IsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDL0IsQ0FBQzs7SUFsQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNNO0lBTlAsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXlCN0I7SUFBRCxnQkFBQztDQXpCRCxBQXlCQyxDQXpCc0MsRUFBRSxDQUFDLFNBQVMsR0F5QmxEO2tCQXpCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxvZ2ljIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgU2hhcmU6IEdhbWVMb2dpY1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRmluaXNoVUk6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIERlZmVhdFVJOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBHYW1lTG9naWMuU2hhcmUgPSB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3dGaW5pc2hVSSgpIHtcclxuICAgICAgICB0aGlzLkZpbmlzaFVJLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGVmZWF0VUkoKSB7XHJcbiAgICAgICAgdGhpcy5EZWZlYXRVSS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=