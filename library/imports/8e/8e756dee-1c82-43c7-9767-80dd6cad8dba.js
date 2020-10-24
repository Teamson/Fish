"use strict";
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