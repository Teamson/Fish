
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kXFxVdGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFBO0lBbUdBLENBQUM7SUFqR2lCLHVCQUFlLEdBQTdCLFVBQThCLE1BQWMsRUFBRSxNQUFpQixFQUFFLEVBQWE7UUFDMUUsNkJBQTZCO1FBQzdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsR0FBRyxFQUFFLFdBQVc7WUFDaEUsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7WUFDaEMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFBO1FBQ2QsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRWEsbUJBQVcsR0FBekIsVUFBMEIsU0FBaUIsRUFBRSxPQUFlLEVBQUUsTUFBaUI7UUFDM0UsNkJBQTZCO1FBQzdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUs7WUFDN0QsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELE1BQU07SUFDUSxrQkFBVSxHQUF4QixVQUF5QixHQUFVOztRQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxFQUFFO1lBQ04sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QyxxQkFBbUMsRUFBbEMsY0FBTSxFQUFFLGNBQU0sQ0FBcUI7U0FDdkM7UUFDRCxP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QUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDL0QsQ0FBQztJQUVhLGtCQUFVLEdBQXhCLFVBQXlCLFFBQWlCLEVBQUUsTUFBZSxFQUFFLFFBQWdCLEVBQUUsRUFBYTtRQUN4RixJQUFJLE1BQU07WUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNsQyxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDakMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQy9DLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBUSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUM1QixRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFsR2dCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FtRzNCO0lBQUQsY0FBQztDQW5HRCxBQW1HQyxJQUFBO2tCQW5Hb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbGl0eSB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkU3ByaXRlRnJhbWUoc3BOYW1lOiBzdHJpbmcsIHNwcml0ZTogY2MuU3ByaXRlLCBjYj86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgLy/liqDovb1TcHJpdGVBdGxhcyjlm77pm4Yp77yM5bm26I635Y+W5YW25Lit5LiA5byg5Zu+54mHXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoc3BOYW1lLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWVcclxuICAgICAgICAgICAgY2IgJiYgY2IoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkU3BBdGxhcyhhdGxhc05hbWU6IHN0cmluZywgc3BmTmFtZTogc3RyaW5nLCBzcHJpdGU6IGNjLlNwcml0ZSkge1xyXG4gICAgICAgIC8v5Yqg6L29U3ByaXRlQXRsYXMo5Zu+6ZuGKe+8jOW5tuiOt+WPluWFtuS4reS4gOW8oOWbvueJh1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKGF0bGFzTmFtZSwgY2MuU3ByaXRlQXRsYXMsIGZ1bmN0aW9uIChlcnIsIGF0bGFzKSB7XHJcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IGF0bGFzLmdldFNwcml0ZUZyYW1lKHNwZk5hbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy/miZPkubHmlbDnu4RcclxuICAgIHB1YmxpYyBzdGF0aWMgc2h1ZmZsZUFycihhcnI6IGFueVtdKSB7XHJcbiAgICAgICAgbGV0IGkgPSBhcnIubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChpKSB7XHJcbiAgICAgICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaS0tKTtcclxuICAgICAgICAgICAgW2FycltqXSwgYXJyW2ldXSA9IFthcnJbaV0sIGFycltqXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mlbDlrZfliY3ooaUwXHJcbiAgICBwdWJsaWMgc3RhdGljIGpvaW5aZXJvKGxlbmd0aDogbnVtYmVyLCBudW06IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiAoQXJyYXkobGVuZ3RoKS5qb2luKCcwJykgKyBudW0pLnNsaWNlKC1sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0V29ybGRQb3Mobm9kZTogY2MuTm9kZSwgcG9pbnQ6IGNjLlZlYzIgPSBjYy52MigwLCAwKSk6IGNjLlZlYzIge1xyXG4gICAgICAgIHJldHVybiBub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb2ludClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFdvcmxkRGlzKG5vZGUxOiBjYy5Ob2RlLCBub2RlMjogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBwMTogY2MuVmVjMiA9IHRoaXMuZ2V0V29ybGRQb3Mobm9kZTEpXHJcbiAgICAgICAgbGV0IHAyOiBjYy5WZWMyID0gdGhpcy5nZXRXb3JsZFBvcyhub2RlMilcclxuICAgICAgICByZXR1cm4gKHAxLnN1YihwMikpLm1hZygpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRXb3JsZERpcihmcm9tOiBjYy5Ob2RlLCB0bzogY2MuTm9kZSk6IGNjLlZlYzIge1xyXG4gICAgICAgIGxldCBwMTogY2MuVmVjMiA9IHRoaXMuZ2V0V29ybGRQb3MoZnJvbSlcclxuICAgICAgICBsZXQgcDI6IGNjLlZlYzIgPSB0aGlzLmdldFdvcmxkUG9zKHRvKVxyXG4gICAgICAgIGxldCBkaXIgPSBwMi5zdWIocDEpLm5vcm1hbGl6ZVNlbGYoKVxyXG4gICAgICAgIHJldHVybiBkaXJcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlbGF5QWN0aXZlKG5vZGU6IGNjLk5vZGUsIGR1cmF0aW9uOiBudW1iZXIsIHRhcmdldCkge1xyXG4gICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0YXJnZXQuc2NoZWR1bGVPbmNlKCgpID0+IHsgbm9kZS5hY3RpdmUgPSB0cnVlIH0sIGR1cmF0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmFuZG9tSXRlbUluQXJyKGFycjogYW55W10pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBhcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCldXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRSYW5kb21JdGVtSW5BcnJXaXRob3V0U2VsZihzZWxmOiBhbnksIGFycjogYW55W10sIGNvdW50OiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgbGV0IHRlbXA6IGFueSA9IFtdLmNvbmNhdChhcnIpXHJcbiAgICAgICAgdGVtcC5zcGxpY2UodGVtcC5pbmRleE9mKHNlbGYpLCAxKVxyXG4gICAgICAgIHRlbXAgPSB0aGlzLnNodWZmbGVBcnIodGVtcClcclxuICAgICAgICByZXR1cm4gdGVtcC5zbGljZSgwLCBjb3VudClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJvdGF0ZUxvb3Aobm9kZTogY2MuTm9kZSwgZHVyYXRpb246IG51bWJlciwgcmF0ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGExID0gY2Mucm90YXRlQnkoZHVyYXRpb24sIC1yYXRlKVxyXG4gICAgICAgIGxldCBhMiA9IGNjLnJvdGF0ZUJ5KGR1cmF0aW9uICogMiwgcmF0ZSAqIDIpXHJcbiAgICAgICAgbGV0IGEzID0gY2Mucm90YXRlQnkoZHVyYXRpb24sIC1yYXRlKVxyXG4gICAgICAgIGxldCBhNCA9IGNjLnNlcXVlbmNlKGExLCBhMiwgYTMpXHJcbiAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihhNCkpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb20obWl4LCBtYXgsIGlzSW50ID0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCB3ID0gbWF4IC0gbWl4XHJcbiAgICAgICAgbGV0IHIxID0gTWF0aC5yYW5kb20oKSAqIHdcclxuICAgICAgICByMSArPSBtaXhcclxuICAgICAgICByZXR1cm4gaXNJbnQgPyBNYXRoLmZsb29yKHIxKSA6IHIxXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjaGVja0luc2VjdGlvbihwTm9kZTogY2MuTm9kZSwgck5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgcDEgPSB0aGlzLmdldFdvcmxkUG9zKHBOb2RlKVxyXG4gICAgICAgIGxldCByUG9zID0gdGhpcy5nZXRXb3JsZFBvcyhyTm9kZSlcclxuICAgICAgICBsZXQgeDEgPSByUG9zLnggLSByTm9kZS53aWR0aCAvIDJcclxuICAgICAgICBsZXQgeDIgPSByUG9zLnggKyByTm9kZS53aWR0aCAvIDJcclxuICAgICAgICBsZXQgeTEgPSByUG9zLnkgLSByTm9kZS5oZWlnaHQgLyAyXHJcbiAgICAgICAgbGV0IHkyID0gclBvcy55ICsgck5vZGUuaGVpZ2h0IC8gMlxyXG4gICAgICAgIHJldHVybiBwMS54ID49IHgxICYmIHAxLnggPD0geDIgJiYgcDEueSA+PSB5MSAmJiBwMS55IDw9IHkyXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByb290QWN0aW9uKHJvb3ROb2RlOiBjYy5Ob2RlLCBhY3RpdmU6IGJvb2xlYW4sIGR1cmF0aW9uOiBudW1iZXIsIGNiPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAoYWN0aXZlKSByb290Tm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgcm9vdE5vZGUuc2NhbGUgPSBhY3RpdmUgPyAwLjEgOiAxXHJcbiAgICAgICAgbGV0IGExID0gY2Muc2NhbGVUbyhkdXJhdGlvbiwgYWN0aXZlID8gMSA6IDAuMSlcclxuICAgICAgICBsZXQgYTIgPSBjYy5jYWxsRnVuYygoKSA9PiB7IGNiICYmIGNiKCkgfSlcclxuICAgICAgICBsZXQgYTMgPSBjYy5zZXF1ZW5jZShhMSwgYTIpXHJcbiAgICAgICAgcm9vdE5vZGUucnVuQWN0aW9uKGEzKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==