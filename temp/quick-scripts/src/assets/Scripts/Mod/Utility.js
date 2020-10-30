"use strict";
cc._RF.push(module, '08ebfwGkANOp4sXiyeJ4qrB', 'Utility');
// Scripts/Mod/Utility.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.loadSpriteFrame = function (spName, sprite, cb) {
        //加载SpriteAtlas(图集)，并获取其中一张图片
        cc.loader.loadRes(spName, cc.SpriteFrame, function (err, spriteFrame) {
            sprite.spriteFrame = spriteFrame;
            cb && cb();
        });
    };
    Utility.loadSpAtlas = function (atlasName, spfName, sprite) {
        //加载SpriteAtlas(图集)，并获取其中一张图片
        cc.loader.loadRes(atlasName, cc.SpriteAtlas, function (err, atlas) {
            sprite.spriteFrame = atlas.getSpriteFrame(spfName);
        });
    };
    //打乱数组
    Utility.shuffleArr = function (arr) {
        var _a;
        var i = arr.length;
        while (i) {
            var j = Math.floor(Math.random() * i--);
            _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
        }
        return arr;
    };
    //数字前补0
    Utility.joinZero = function (length, num) {
        return (Array(length).join('0') + num).slice(-length);
    };
    Utility.getWorldPos = function (node, point) {
        if (point === void 0) { point = cc.v2(0, 0); }
        return node.convertToWorldSpaceAR(point);
    };
    Utility.getWorldDis = function (node1, node2) {
        var p1 = this.getWorldPos(node1);
        var p2 = this.getWorldPos(node2);
        return (p1.sub(p2)).mag();
    };
    Utility.getWorldDir = function (from, to) {
        var p1 = this.getWorldPos(from);
        var p2 = this.getWorldPos(to);
        var dir = p2.sub(p1).normalizeSelf();
        return dir;
    };
    Utility.delayActive = function (node, duration, target) {
        node.active = false;
        target.scheduleOnce(function () { node.active = true; }, duration);
    };
    Utility.getRandomItemInArr = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };
    Utility.getRandomItemInArrWithoutSelf = function (self, arr, count) {
        if (count === void 0) { count = 1; }
        var temp = [].concat(arr);
        temp.splice(temp.indexOf(self), 1);
        temp = this.shuffleArr(temp);
        return temp.slice(0, count);
    };
    Utility.rotateLoop = function (node, duration, rate) {
        var a1 = cc.rotateBy(duration, -rate);
        var a2 = cc.rotateBy(duration * 2, rate * 2);
        var a3 = cc.rotateBy(duration, -rate);
        var a4 = cc.sequence(a1, a2, a3);
        node.stopAllActions();
        node.runAction(cc.repeatForever(a4));
    };
    Utility.GetRandom = function (mix, max, isInt) {
        if (isInt === void 0) { isInt = true; }
        var w = max - mix;
        var r1 = Math.random() * w;
        r1 += mix;
        return isInt ? Math.floor(r1) : r1;
    };
    Utility.checkInsection = function (pNode, rNode) {
        var p1 = this.getWorldPos(pNode);
        var rPos = this.getWorldPos(rNode);
        var x1 = rPos.x - rNode.width / 2;
        var x2 = rPos.x + rNode.width / 2;
        var y1 = rPos.y - rNode.height / 2;
        var y2 = rPos.y + rNode.height / 2;
        return p1.x >= x1 && p1.x <= x2 && p1.y >= y1 && p1.y <= y2;
    };
    Utility.rootAction = function (rootNode, active, duration, cb) {
        if (active)
            rootNode.active = true;
        rootNode.scale = active ? 0.1 : 1;
        var a1 = cc.scaleTo(duration, active ? 1 : 0.1);
        var a2 = cc.callFunc(function () { cb && cb(); });
        var a3 = cc.sequence(a1, a2);
        rootNode.runAction(a3);
    };
    Utility = __decorate([
        ccclass
    ], Utility);
    return Utility;
}());
exports.default = Utility;

cc._RF.pop();