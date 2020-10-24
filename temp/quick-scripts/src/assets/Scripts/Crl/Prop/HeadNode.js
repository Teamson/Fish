"use strict";
cc._RF.push(module, 'c0473N+vbFH0JHD6gLQmtb5', 'HeadNode');
// Scripts/Crl/Prop/HeadNode.ts

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
var HeadNode = /** @class */ (function (_super) {
    __extends(HeadNode, _super);
    function HeadNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.num = null;
        _this.count = 1;
        return _this;
    }
    HeadNode.prototype.onLoad = function () { };
    HeadNode.prototype.start = function () {
        this.icon.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.icon.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.icon.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.icon.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    HeadNode.prototype.touchStart = function (event) {
    };
    HeadNode.prototype.touchMove = function (event) {
        if (this.count <= 0)
            return;
        var pos = event.getLocation();
        pos = this.node.convertToNodeSpaceAR(pos);
        this.icon.setPosition(pos);
    };
    HeadNode.prototype.touchEnd = function (event) {
        if (this.count <= 0)
            return;
        for (var i = 0; i < LevelBase_1.default.Share.NeedleNode.childrenCount; i++) {
            var n = LevelBase_1.default.Share.NeedleNode.children[i];
            var head = n.getChildByName('needle').getChildByName('yxz_dj1_2');
            if (head.active == false && Utility_1.default.getWorldDis(head, this.icon) <= 50) {
                head.active = true;
                this.count--;
                LevelBase_1.default.Share.getNeedleCrlById(i).lostHead = false;
                break;
            }
        }
        this.icon.setPosition(cc.v2(0, 10));
    };
    HeadNode.prototype.update = function (dt) {
        this.num.string = this.count.toString();
    };
    __decorate([
        property(cc.Node)
    ], HeadNode.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], HeadNode.prototype, "num", void 0);
    __decorate([
        property
    ], HeadNode.prototype, "count", void 0);
    HeadNode = __decorate([
        ccclass
    ], HeadNode);
    return HeadNode;
}(cc.Component));
exports.default = HeadNode;

cc._RF.pop();