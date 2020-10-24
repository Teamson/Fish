"use strict";
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