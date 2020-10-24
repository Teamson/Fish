"use strict";
cc._RF.push(module, '7de57dSE4tEJaZ954yYkzmB', 'ExportCrl');
// ExportLibs/ExportCrl.ts

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
var ExportCrl = /** @class */ (function (_super) {
    __extends(ExportCrl, _super);
    function ExportCrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExportCrl.prototype.onLoad = function () {
        this.node.setContentSize(cc.view.getVisibleSize());
        this.node.setPosition(cc.v2(this.node.getContentSize().width / 2, this.node.getContentSize().height / 2));
    };
    ExportCrl.prototype.start = function () {
    };
    ExportCrl.prototype.showJJUI = function (dir, param, callback) {
        for (var i = 0; i < this.node.childrenCount; i++) {
            this.node.children[i].zIndex = this.node.children[i].name == dir ? 999 : 100;
        }
        this.node.getChildByName(dir).getComponent(dir).showUI(callback, param);
    };
    ExportCrl.prototype.closeJJUI = function (dir) {
        this.node.getChildByName(dir).active = false;
    };
    ExportCrl.prototype.closeAllJJUI = function () {
        for (var i = 0; i < this.node.childrenCount; i++) {
            this.node.children[i].active = false;
            this.node.children[i].getComponent(this.node.children[i].name).unscheduleAllCallbacks();
        }
    };
    ExportCrl = __decorate([
        ccclass
    ], ExportCrl);
    return ExportCrl;
}(cc.Component));
exports.default = ExportCrl;

cc._RF.pop();