
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Libs/ScaleLoop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '990d6YJhU5HUbj0EGVi6QL6', 'ScaleLoop');
// Scripts/Libs/ScaleLoop.ts

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
var ScaleLoop = /** @class */ (function (_super) {
    __extends(ScaleLoop, _super);
    function ScaleLoop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originScale = 1;
        _this.targetScale = 1;
        _this.scaleDuration = 0.5;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    ScaleLoop.prototype.start = function () {
        var a1 = cc.scaleTo(this.scaleDuration, this.targetScale);
        var a2 = cc.scaleTo(this.scaleDuration, this.originScale);
        var a3 = cc.sequence(a1, a2);
        this.node.runAction(cc.repeatForever(a3));
    };
    __decorate([
        property
    ], ScaleLoop.prototype, "originScale", void 0);
    __decorate([
        property
    ], ScaleLoop.prototype, "targetScale", void 0);
    __decorate([
        property
    ], ScaleLoop.prototype, "scaleDuration", void 0);
    ScaleLoop = __decorate([
        ccclass
    ], ScaleLoop);
    return ScaleLoop;
}(cc.Component));
exports.default = ScaleLoop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTGlic1xcU2NhbGVMb29wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUFvQkM7UUFoQkcsaUJBQVcsR0FBVyxDQUFDLENBQUE7UUFFdkIsaUJBQVcsR0FBVyxDQUFDLENBQUE7UUFFdkIsbUJBQWEsR0FBVyxHQUFHLENBQUE7O1FBVzNCLGlCQUFpQjtJQUNyQixDQUFDO0lBVkcsZUFBZTtJQUVmLHlCQUFLLEdBQUw7UUFDSSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3pELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDekQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFiRDtRQURDLFFBQVE7a0RBQ2M7SUFFdkI7UUFEQyxRQUFRO2tEQUNjO0lBRXZCO1FBREMsUUFBUTtvREFDa0I7SUFQVixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBbUI3QjtJQUFELGdCQUFDO0NBbkJELEFBbUJDLENBbkJzQyxFQUFFLENBQUMsU0FBUyxHQW1CbEQ7a0JBbkJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2FsZUxvb3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgb3JpZ2luU2NhbGU6IG51bWJlciA9IDFcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGFyZ2V0U2NhbGU6IG51bWJlciA9IDFcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2NhbGVEdXJhdGlvbjogbnVtYmVyID0gMC41XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IGExID0gY2Muc2NhbGVUbyh0aGlzLnNjYWxlRHVyYXRpb24sIHRoaXMudGFyZ2V0U2NhbGUpXHJcbiAgICAgICAgbGV0IGEyID0gY2Muc2NhbGVUbyh0aGlzLnNjYWxlRHVyYXRpb24sIHRoaXMub3JpZ2luU2NhbGUpXHJcbiAgICAgICAgbGV0IGEzID0gY2Muc2VxdWVuY2UoYTEsIGEyKVxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihhMykpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=