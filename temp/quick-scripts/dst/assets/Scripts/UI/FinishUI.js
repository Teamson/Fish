
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/FinishUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd30bbeCSLVH8azIwmyFk0IW', 'FinishUI');
// Scripts/UI/FinishUI.ts

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
var FinishUI = /** @class */ (function (_super) {
    __extends(FinishUI, _super);
    function FinishUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinishUI.prototype.onLoad = function () { };
    FinishUI.prototype.start = function () {
    };
    FinishUI.prototype.backCB = function () {
        PlayerDataMgr_1.default.getPlayerData().grade++;
        PlayerDataMgr_1.default.setPlayerData();
        cc.director.loadScene('StartScene');
    };
    FinishUI.prototype.nextCB = function () {
        PlayerDataMgr_1.default.getPlayerData().grade++;
        PlayerDataMgr_1.default.setPlayerData();
        cc.director.loadScene('GameScene');
    };
    FinishUI.prototype.update = function (dt) { };
    FinishUI = __decorate([
        ccclass
    ], FinishUI);
    return FinishUI;
}(cc.Component));
exports.default = FinishUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEZpbmlzaFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUU1QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEOztJQXVCQSxDQUFDO0lBbkJHLHlCQUFNLEdBQU4sY0FBVyxDQUFDO0lBRVosd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNyQyx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNyQyx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBRSxJQUFJLENBQUM7SUF0QkcsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVCNUI7SUFBRCxlQUFDO0NBdkJELEFBdUJDLENBdkJxQyxFQUFFLENBQUMsU0FBUyxHQXVCakQ7a0JBdkJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllckRhdGFNZ3IgZnJvbSBcIi4uL0xpYnMvUGxheWVyRGF0YU1nclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbmlzaFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHsgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiYWNrQ0IoKSB7XHJcbiAgICAgICAgUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkuZ3JhZGUrK1xyXG4gICAgICAgIFBsYXllckRhdGFNZ3Iuc2V0UGxheWVyRGF0YSgpXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTdGFydFNjZW5lJylcclxuICAgIH1cclxuXHJcbiAgICBuZXh0Q0IoKSB7XHJcbiAgICAgICAgUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkuZ3JhZGUrK1xyXG4gICAgICAgIFBsYXllckRhdGFNZ3Iuc2V0UGxheWVyRGF0YSgpXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lU2NlbmUnKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkgeyB9XHJcbn1cclxuIl19