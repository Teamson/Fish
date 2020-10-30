"use strict";
cc._RF.push(module, '8fde6IUoBdMG7w+SfixDloE', 'GetTipsUI');
// Scripts/UI/GetTipsUI.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GetTipsUI = /** @class */ (function (_super) {
    __extends(GetTipsUI, _super);
    function GetTipsUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    GetTipsUI.prototype.start = function () {
    };
    GetTipsUI.prototype.onEnable = function () {
        Utility_1.default.rootAction(this.rootNode, true, 0.1);
    };
    GetTipsUI.prototype.onDisable = function () {
    };
    GetTipsUI.prototype.closeGetTipsUI = function () {
        var _this = this;
        Utility_1.default.rootAction(this.rootNode, false, 0.1, function () { _this.node.active = false; });
    };
    __decorate([
        property(cc.Node)
    ], GetTipsUI.prototype, "rootNode", void 0);
    GetTipsUI = __decorate([
        ccclass
    ], GetTipsUI);
    return GetTipsUI;
}(cc.Component));
exports.default = GetTipsUI;

cc._RF.pop();