"use strict";
cc._RF.push(module, 'cc428UI9wtJwYzz/r/7Ssrz', 'Needle');
// Scripts/Crl/Prop/Needle.ts

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
var Needle = /** @class */ (function (_super) {
    __extends(Needle, _super);
    function Needle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lostHead = false;
        _this.onceTrigger = false;
        _this.isAwake = true;
        _this.twiceRemove = false;
        _this.needle = null;
        _this.pointNode = null;
        _this.isTouching = false;
        _this.switchState = 0;
        _this.myDir = cc.v2(0, 0);
        _this.middlePos = cc.v2(0, 0);
        _this.touchStartPos = cc.v2(0, 0);
        _this.needleStartPos = cc.v2(0, 0);
        _this.myId = 0;
        _this.needleLength = 0;
        return _this;
    }
    Needle.prototype.onLoad = function () {
        this.myId = this.node.parent.children.indexOf(this.node);
        this.needle = this.node.getChildByName('needle');
        this.myDir = cc.v2(this.needle.right.x, this.needle.right.y);
        this.pointNode = this.node.getChildByName('pointNode');
        var lastPoint = this.pointNode.children[this.pointNode.childrenCount - 1];
        this.needleLength = Utility_1.default.getWorldDis(lastPoint, this.needle);
        this.middlePos = this.needle.getPosition().add(this.myDir.mul(this.needleLength / 2));
        this.needleStartPos = this.needle.getPosition();
    };
    Needle.prototype.start = function () {
        this.needle.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.needle.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.needle.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.needle.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    Needle.prototype.touchStart = function (event) {
        if (this.isTouching || !LevelBase_1.default.Share.canTouch || this.lostHead || !this.isAwake)
            return;
        this.isTouching = true;
        var pos = event.getLocation();
        this.touchStartPos = pos;
    };
    Needle.prototype.touchMove = function (event) {
        if (!LevelBase_1.default.Share.canTouch || this.lostHead || !this.isAwake)
            return;
        var pos = event.getLocation();
        var touchDir = pos.sub(this.touchStartPos).normalizeSelf();
        var angle = cc.misc.radiansToDegrees(touchDir.angle(this.myDir));
        var isRight = Math.abs(angle) <= 90;
        var dt = pos.sub(this.touchStartPos).mag();
        dt = dt > 30 ? 30 : dt;
        dt = isRight ? dt : -dt;
        var desPos = this.needle.getPosition().add(this.myDir.mul(dt));
        if (desPos.sub(this.middlePos).mag() < this.needleLength / 2)
            this.needle.setPosition(desPos);
        this.checkIsTrigger();
        this.touchStartPos = pos;
    };
    Needle.prototype.touchEnd = function (event) {
        if (!LevelBase_1.default.Share.canTouch || this.lostHead || !this.isAwake)
            return;
        this.isTouching = false;
    };
    Needle.prototype.checkIsTrigger = function () {
        for (var i = 0; i < this.pointNode.childrenCount; i++) {
            var p = this.pointNode.children[i];
            if (p.active && Utility_1.default.getWorldDis(p, this.needle) <= 50) {
                if (this.onceTrigger) {
                    this.node.active = false;
                    this.switchState = 2;
                }
                else {
                    this.switchState = i + 1;
                    this.needle.setPosition(p.getPosition());
                    if (this.twiceRemove && this.switchState == 2) {
                        this.node.active = false;
                    }
                }
                this.pointNode.children.forEach(function (c) { c.active = true; });
                p.active = false;
                LevelBase_1.default.Share.triggerNeedle(this.myId, i);
                break;
            }
        }
        if (this.switchState != 0) {
            if (this.needle.getPosition().sub(this.needleStartPos).mag() <= 20) {
                this.switchState = 0;
                this.needle.setPosition(this.needleStartPos);
                this.pointNode.children.forEach(function (c) { c.active = true; });
            }
        }
    };
    Needle.prototype.update = function (dt) {
        if (this.node.getComponentInChildren(cc.RigidBody)) {
            this.node.getComponentInChildren(cc.RigidBody).syncPosition(true);
        }
    };
    __decorate([
        property
    ], Needle.prototype, "lostHead", void 0);
    __decorate([
        property
    ], Needle.prototype, "onceTrigger", void 0);
    __decorate([
        property
    ], Needle.prototype, "isAwake", void 0);
    __decorate([
        property
    ], Needle.prototype, "twiceRemove", void 0);
    Needle = __decorate([
        ccclass
    ], Needle);
    return Needle;
}(cc.Component));
exports.default = Needle;

cc._RF.pop();