
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Mod/Utility.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    Utility = __decorate([
        ccclass
    ], Utility);
    return Utility;
}());
exports.default = Utility;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kXFxVdGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFBO0lBMEZBLENBQUM7SUF4RmlCLHVCQUFlLEdBQTdCLFVBQThCLE1BQWMsRUFBRSxNQUFpQixFQUFFLEVBQWE7UUFDMUUsNkJBQTZCO1FBQzdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsR0FBRyxFQUFFLFdBQVc7WUFDaEUsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7WUFDaEMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFBO1FBQ2QsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRWEsbUJBQVcsR0FBekIsVUFBMEIsU0FBaUIsRUFBRSxPQUFlLEVBQUUsTUFBaUI7UUFDM0UsNkJBQTZCO1FBQzdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUs7WUFDN0QsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELE1BQU07SUFDUSxrQkFBVSxHQUF4QixVQUF5QixHQUFVOztRQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxFQUFFO1lBQ04sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QyxxQkFBbUMsRUFBbEMsY0FBTSxFQUFFLGNBQU0sQ0FBcUI7U0FDdkM7UUFDRCxP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QUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDL0QsQ0FBQztJQXpGZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTBGM0I7SUFBRCxjQUFDO0NBMUZELEFBMEZDLElBQUE7a0JBMUZvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsaXR5IHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRTcHJpdGVGcmFtZShzcE5hbWU6IHN0cmluZywgc3ByaXRlOiBjYy5TcHJpdGUsIGNiPzogRnVuY3Rpb24pIHtcclxuICAgICAgICAvL+WKoOi9vVNwcml0ZUF0bGFzKOWbvumbhinvvIzlubbojrflj5blhbbkuK3kuIDlvKDlm77niYdcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhzcE5hbWUsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZVxyXG4gICAgICAgICAgICBjYiAmJiBjYigpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRTcEF0bGFzKGF0bGFzTmFtZTogc3RyaW5nLCBzcGZOYW1lOiBzdHJpbmcsIHNwcml0ZTogY2MuU3ByaXRlKSB7XHJcbiAgICAgICAgLy/liqDovb1TcHJpdGVBdGxhcyjlm77pm4Yp77yM5bm26I635Y+W5YW25Lit5LiA5byg5Zu+54mHXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoYXRsYXNOYW1lLCBjYy5TcHJpdGVBdGxhcywgZnVuY3Rpb24gKGVyciwgYXRsYXMpIHtcclxuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gYXRsYXMuZ2V0U3ByaXRlRnJhbWUoc3BmTmFtZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+aJk+S5seaVsOe7hFxyXG4gICAgcHVibGljIHN0YXRpYyBzaHVmZmxlQXJyKGFycjogYW55W10pIHtcclxuICAgICAgICBsZXQgaSA9IGFyci5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKGkpIHtcclxuICAgICAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpLS0pO1xyXG4gICAgICAgICAgICBbYXJyW2pdLCBhcnJbaV1dID0gW2FycltpXSwgYXJyW2pdXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbiAgICAvL+aVsOWtl+WJjeihpTBcclxuICAgIHB1YmxpYyBzdGF0aWMgam9pblplcm8obGVuZ3RoOiBudW1iZXIsIG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIChBcnJheShsZW5ndGgpLmpvaW4oJzAnKSArIG51bSkuc2xpY2UoLWxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRXb3JsZFBvcyhub2RlOiBjYy5Ob2RlLCBwb2ludDogY2MuVmVjMiA9IGNjLnYyKDAsIDApKTogY2MuVmVjMiB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHBvaW50KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0V29ybGREaXMobm9kZTE6IGNjLk5vZGUsIG5vZGUyOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHAxOiBjYy5WZWMyID0gdGhpcy5nZXRXb3JsZFBvcyhub2RlMSlcclxuICAgICAgICBsZXQgcDI6IGNjLlZlYzIgPSB0aGlzLmdldFdvcmxkUG9zKG5vZGUyKVxyXG4gICAgICAgIHJldHVybiAocDEuc3ViKHAyKSkubWFnKClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFdvcmxkRGlyKGZyb206IGNjLk5vZGUsIHRvOiBjYy5Ob2RlKTogY2MuVmVjMiB7XHJcbiAgICAgICAgbGV0IHAxOiBjYy5WZWMyID0gdGhpcy5nZXRXb3JsZFBvcyhmcm9tKVxyXG4gICAgICAgIGxldCBwMjogY2MuVmVjMiA9IHRoaXMuZ2V0V29ybGRQb3ModG8pXHJcbiAgICAgICAgbGV0IGRpciA9IHAyLnN1YihwMSkubm9ybWFsaXplU2VsZigpXHJcbiAgICAgICAgcmV0dXJuIGRpclxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVsYXlBY3RpdmUobm9kZTogY2MuTm9kZSwgZHVyYXRpb246IG51bWJlciwgdGFyZ2V0KSB7XHJcbiAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRhcmdldC5zY2hlZHVsZU9uY2UoKCkgPT4geyBub2RlLmFjdGl2ZSA9IHRydWUgfSwgZHVyYXRpb24pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRSYW5kb21JdGVtSW5BcnIoYXJyOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKV1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbUl0ZW1JbkFycldpdGhvdXRTZWxmKHNlbGY6IGFueSwgYXJyOiBhbnlbXSwgY291bnQ6IG51bWJlciA9IDEpIHtcclxuICAgICAgICBsZXQgdGVtcDogYW55ID0gW10uY29uY2F0KGFycilcclxuICAgICAgICB0ZW1wLnNwbGljZSh0ZW1wLmluZGV4T2Yoc2VsZiksIDEpXHJcbiAgICAgICAgdGVtcCA9IHRoaXMuc2h1ZmZsZUFycih0ZW1wKVxyXG4gICAgICAgIHJldHVybiB0ZW1wLnNsaWNlKDAsIGNvdW50KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcm90YXRlTG9vcChub2RlOiBjYy5Ob2RlLCBkdXJhdGlvbjogbnVtYmVyLCByYXRlOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgYTEgPSBjYy5yb3RhdGVCeShkdXJhdGlvbiwgLXJhdGUpXHJcbiAgICAgICAgbGV0IGEyID0gY2Mucm90YXRlQnkoZHVyYXRpb24gKiAyLCByYXRlICogMilcclxuICAgICAgICBsZXQgYTMgPSBjYy5yb3RhdGVCeShkdXJhdGlvbiwgLXJhdGUpXHJcbiAgICAgICAgbGV0IGE0ID0gY2Muc2VxdWVuY2UoYTEsIGEyLCBhMylcclxuICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKClcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGE0KSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFJhbmRvbShtaXgsIG1heCwgaXNJbnQgPSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IHcgPSBtYXggLSBtaXhcclxuICAgICAgICBsZXQgcjEgPSBNYXRoLnJhbmRvbSgpICogd1xyXG4gICAgICAgIHIxICs9IG1peFxyXG4gICAgICAgIHJldHVybiBpc0ludCA/IE1hdGguZmxvb3IocjEpIDogcjFcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrSW5zZWN0aW9uKHBOb2RlOiBjYy5Ob2RlLCByTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBwMSA9IHRoaXMuZ2V0V29ybGRQb3MocE5vZGUpXHJcbiAgICAgICAgbGV0IHJQb3MgPSB0aGlzLmdldFdvcmxkUG9zKHJOb2RlKVxyXG4gICAgICAgIGxldCB4MSA9IHJQb3MueCAtIHJOb2RlLndpZHRoIC8gMlxyXG4gICAgICAgIGxldCB4MiA9IHJQb3MueCArIHJOb2RlLndpZHRoIC8gMlxyXG4gICAgICAgIGxldCB5MSA9IHJQb3MueSAtIHJOb2RlLmhlaWdodCAvIDJcclxuICAgICAgICBsZXQgeTIgPSByUG9zLnkgKyByTm9kZS5oZWlnaHQgLyAyXHJcbiAgICAgICAgcmV0dXJuIHAxLnggPj0geDEgJiYgcDEueCA8PSB4MiAmJiBwMS55ID49IHkxICYmIHAxLnkgPD0geTJcclxuICAgIH1cclxufVxyXG4iXX0=