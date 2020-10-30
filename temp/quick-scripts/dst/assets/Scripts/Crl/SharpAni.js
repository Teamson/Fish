
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/SharpAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93dd4okGThA3YlpC3cehS2Y', 'SharpAni');
// Scripts/Crl/SharpAni.ts

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
var SharpAni = /** @class */ (function (_super) {
    __extends(SharpAni, _super);
    function SharpAni() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isRed = false;
        _this._armatureDisPlay = null;
        _this._armature = null;
        return _this;
        // update (dt) {}
    }
    SharpAni.prototype.onLoad = function () {
        this.getArmature();
    };
    SharpAni.prototype.start = function () {
    };
    SharpAni.prototype.getArmature = function () {
        //获取 ArmatureDisplay
        this._armatureDisPlay = this.getComponent(dragonBones.ArmatureDisplay);
        this.playAnimationByName(0);
        //获取 Armatrue
        this._armature = this._armatureDisPlay.armature();
        //添加动画监听
        //this._armatureDisPlay.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this);
        //this._armatureDisPlay.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.loopAnimationEventHandler, this);
    };
    SharpAni.prototype.playAnimationByName = function (index) {
        switch (index) {
            case 0:
                this._armatureDisPlay.playAnimation(this.isRed ? 'Ani_Fish_Stand' : 'Ani_Shark_Stand', 0);
                break;
            case 1:
                this._armatureDisPlay.playAnimation(this.isRed ? 'Ani_Fish_Run' : 'Ani_Shark_Run', 0);
                break;
            case 2:
                this._armatureDisPlay.playAnimation(this.isRed ? 'Ani_Fish_Die' : 'Ani_Shark_Die', 1);
                break;
            case 3:
                this._armatureDisPlay.playAnimation(this.isRed ? 'Ani_Fish_Eat' : 'Ani_Shark_Eat', 1);
                break;
        }
        //this._armatureDisPlay.timeScale = 0.1;
    };
    SharpAni.prototype.animationEventHandler = function (event) {
        // if (event.type == dragonBones.EventObject.COMPLETE) {
        //     //this._armatureDisPlay.stopAnimation();
        // }
    };
    SharpAni.prototype.loopAnimationEventHandler = function (event) {
        //this._armatureDisPlay.enabled = false;
        //console.log(event);
        // if (event.type == dragonBones.EventObject.LOOP_COMPLETE) {
        // }
    };
    __decorate([
        property
    ], SharpAni.prototype, "isRed", void 0);
    SharpAni = __decorate([
        ccclass
    ], SharpAni);
    return SharpAni;
}(cc.Component));
exports.default = SharpAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxTaGFycEFuaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBNERDO1FBeERHLFdBQUssR0FBWSxLQUFLLENBQUE7UUFFdEIsc0JBQWdCLEdBQWdDLElBQUksQ0FBQTtRQUNwRCxlQUFTLEdBQXlCLElBQUksQ0FBQTs7UUFvRHRDLGlCQUFpQjtJQUNyQixDQUFDO0lBbkRHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLGFBQWE7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsRCxRQUFRO1FBQ1IsNkdBQTZHO1FBQzdHLHNIQUFzSDtJQUMxSCxDQUFDO0lBQ0Qsc0NBQW1CLEdBQW5CLFVBQW9CLEtBQUs7UUFDckIsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFGLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdEYsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0RixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RGLE1BQU07U0FDYjtRQUNELHdDQUF3QztJQUM1QyxDQUFDO0lBRUQsd0NBQXFCLEdBQXJCLFVBQXNCLEtBQUs7UUFDdkIsd0RBQXdEO1FBQ3hELCtDQUErQztRQUMvQyxJQUFJO0lBQ1IsQ0FBQztJQUVELDRDQUF5QixHQUF6QixVQUEwQixLQUFLO1FBQzNCLHdDQUF3QztRQUN4QyxxQkFBcUI7UUFDckIsNkRBQTZEO1FBRTdELElBQUk7SUFDUixDQUFDO0lBckREO1FBREMsUUFBUTsyQ0FDYTtJQUhMLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EyRDVCO0lBQUQsZUFBQztDQTNERCxBQTJEQyxDQTNEcUMsRUFBRSxDQUFDLFNBQVMsR0EyRGpEO2tCQTNEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFycEFuaSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc1JlZDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgX2FybWF0dXJlRGlzUGxheTogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5ID0gbnVsbFxyXG4gICAgX2FybWF0dXJlOiBkcmFnb25Cb25lcy5Bcm1hdHVyZSA9IG51bGxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBcm1hdHVyZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEFybWF0dXJlKCkge1xyXG4gICAgICAgIC8v6I635Y+WIEFybWF0dXJlRGlzcGxheVxyXG4gICAgICAgIHRoaXMuX2FybWF0dXJlRGlzUGxheSA9IHRoaXMuZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uQnlOYW1lKDApO1xyXG4gICAgICAgIC8v6I635Y+WIEFybWF0cnVlXHJcbiAgICAgICAgdGhpcy5fYXJtYXR1cmUgPSB0aGlzLl9hcm1hdHVyZURpc1BsYXkuYXJtYXR1cmUoKTtcclxuICAgICAgICAvL+a3u+WKoOWKqOeUu+ebkeWQrFxyXG4gICAgICAgIC8vdGhpcy5fYXJtYXR1cmVEaXNQbGF5LmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsIHRoaXMuYW5pbWF0aW9uRXZlbnRIYW5kbGVyLCB0aGlzKTtcclxuICAgICAgICAvL3RoaXMuX2FybWF0dXJlRGlzUGxheS5hZGRFdmVudExpc3RlbmVyKGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkxPT1BfQ09NUExFVEUsIHRoaXMubG9vcEFuaW1hdGlvbkV2ZW50SGFuZGxlciwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBwbGF5QW5pbWF0aW9uQnlOYW1lKGluZGV4KSB7XHJcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcm1hdHVyZURpc1BsYXkucGxheUFuaW1hdGlvbih0aGlzLmlzUmVkID8gJ0FuaV9GaXNoX1N0YW5kJyA6ICdBbmlfU2hhcmtfU3RhbmQnLCAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcm1hdHVyZURpc1BsYXkucGxheUFuaW1hdGlvbih0aGlzLmlzUmVkID8gJ0FuaV9GaXNoX1J1bicgOiAnQW5pX1NoYXJrX1J1bicsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FybWF0dXJlRGlzUGxheS5wbGF5QW5pbWF0aW9uKHRoaXMuaXNSZWQgPyAnQW5pX0Zpc2hfRGllJyA6ICdBbmlfU2hhcmtfRGllJywgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYXJtYXR1cmVEaXNQbGF5LnBsYXlBbmltYXRpb24odGhpcy5pc1JlZCA/ICdBbmlfRmlzaF9FYXQnIDogJ0FuaV9TaGFya19FYXQnLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RoaXMuX2FybWF0dXJlRGlzUGxheS50aW1lU2NhbGUgPSAwLjE7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0aW9uRXZlbnRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gaWYgKGV2ZW50LnR5cGUgPT0gZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUpIHtcclxuICAgICAgICAvLyAgICAgLy90aGlzLl9hcm1hdHVyZURpc1BsYXkuc3RvcEFuaW1hdGlvbigpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBsb29wQW5pbWF0aW9uRXZlbnRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgLy90aGlzLl9hcm1hdHVyZURpc1BsYXkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIC8vIGlmIChldmVudC50eXBlID09IGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkxPT1BfQ09NUExFVEUpIHtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19