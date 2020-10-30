
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/PlayerAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0adb90D0AlGO4FZ+7Ni5j4p', 'PlayerAni');
// Scripts/Crl/PlayerAni.ts

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
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerAni = /** @class */ (function (_super) {
    __extends(PlayerAni, _super);
    function PlayerAni() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoChangeSkin = true;
        _this._armatureDisPlay = null;
        _this._armature = null;
        return _this;
        // update (dt) {}
    }
    PlayerAni.prototype.onLoad = function () {
        this.getArmature();
    };
    PlayerAni.prototype.start = function () {
    };
    PlayerAni.prototype.getArmature = function () {
        //获取 ArmatureDisplay
        this._armatureDisPlay = this.getComponent(dragonBones.ArmatureDisplay);
        this.playAnimationByName(0);
        //获取 Armatrue
        this._armature = this._armatureDisPlay.armature();
        if (this.autoChangeSkin)
            this.changeSkin(PlayerDataMgr_1.default.getPlayerLv() - 1);
        //添加动画监听
        //this._armatureDisPlay.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this);
        //this._armatureDisPlay.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.loopAnimationEventHandler, this);
    };
    PlayerAni.prototype.playAnimationByName = function (index) {
        switch (index) {
            case 0:
                this._armatureDisPlay.playAnimation('Ani_Mermaid_Stand', 0);
                break;
            case 1:
                this._armatureDisPlay.playAnimation('Ani_Mermaid_Run', 0);
                break;
            case 2:
                this._armatureDisPlay.playAnimation('Ani_Mermaid_Die', 1);
                break;
            case 3:
                this._armatureDisPlay.playAnimation('Ani_Mermaid_Eat', 1);
                break;
            case 4:
                this._armatureDisPlay.playAnimation('Ani_Mermaid_Win', 1);
                break;
        }
        //this._armatureDisPlay.timeScale = 0.1;
    };
    PlayerAni.prototype.animationEventHandler = function (event) {
        // if (event.type == dragonBones.EventObject.COMPLETE) {
        //     //this._armatureDisPlay.stopAnimation();
        // }
    };
    PlayerAni.prototype.loopAnimationEventHandler = function (event) {
        //this._armatureDisPlay.enabled = false;
        //console.log(event);
        // if (event.type == dragonBones.EventObject.LOOP_COMPLETE) {
        // }
    };
    PlayerAni.prototype.changeSkin = function (index) {
        this._armature.getSlot('mry_js1_l').displayIndex = index;
        this._armature.getSlot('mry_js1_tf').displayIndex = index;
        this._armature.getSlot('mry_js1_st').displayIndex = index;
        this._armature.getSlot('mry_js1_s1').displayIndex = index;
        this._armature.getSlot('mry_js1_s2').displayIndex = index;
        this._armature.getSlot('mry_js2_pj').displayIndex = index;
    };
    __decorate([
        property
    ], PlayerAni.prototype, "autoChangeSkin", void 0);
    PlayerAni = __decorate([
        ccclass
    ], PlayerAni);
    return PlayerAni;
}(cc.Component));
exports.default = PlayerAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQbGF5ZXJBbmkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBRTVDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUEyRUM7UUF2RUcsb0JBQWMsR0FBWSxJQUFJLENBQUE7UUFFOUIsc0JBQWdCLEdBQWdDLElBQUksQ0FBQTtRQUNwRCxlQUFTLEdBQXlCLElBQUksQ0FBQTs7UUFtRXRDLGlCQUFpQjtJQUNyQixDQUFDO0lBbEVHLDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUVELHlCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNJLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLGFBQWE7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVsRCxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQWEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNwRCxRQUFRO1FBQ1IsNkdBQTZHO1FBQzdHLHNIQUFzSDtJQUMxSCxDQUFDO0lBQ0QsdUNBQW1CLEdBQW5CLFVBQW9CLEtBQUs7UUFDckIsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUQsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUQsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxNQUFNO1NBQ2I7UUFDRCx3Q0FBd0M7SUFDNUMsQ0FBQztJQUVELHlDQUFxQixHQUFyQixVQUFzQixLQUFLO1FBQ3ZCLHdEQUF3RDtRQUN4RCwrQ0FBK0M7UUFDL0MsSUFBSTtJQUNSLENBQUM7SUFFRCw2Q0FBeUIsR0FBekIsVUFBMEIsS0FBSztRQUMzQix3Q0FBd0M7UUFDeEMscUJBQXFCO1FBQ3JCLDZEQUE2RDtRQUU3RCxJQUFJO0lBQ1IsQ0FBQztJQUVELDhCQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUQsQ0FBQztJQXBFRDtRQURDLFFBQVE7cURBQ3FCO0lBSGIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTBFN0I7SUFBRCxnQkFBQztDQTFFRCxBQTBFQyxDQTFFc0MsRUFBRSxDQUFDLFNBQVMsR0EwRWxEO2tCQTFFb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJBbmkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgYXV0b0NoYW5nZVNraW46IGJvb2xlYW4gPSB0cnVlXHJcblxyXG4gICAgX2FybWF0dXJlRGlzUGxheTogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5ID0gbnVsbFxyXG4gICAgX2FybWF0dXJlOiBkcmFnb25Cb25lcy5Bcm1hdHVyZSA9IG51bGxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBcm1hdHVyZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEFybWF0dXJlKCkge1xyXG4gICAgICAgIC8v6I635Y+WIEFybWF0dXJlRGlzcGxheVxyXG4gICAgICAgIHRoaXMuX2FybWF0dXJlRGlzUGxheSA9IHRoaXMuZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uQnlOYW1lKDApO1xyXG4gICAgICAgIC8v6I635Y+WIEFybWF0cnVlXHJcbiAgICAgICAgdGhpcy5fYXJtYXR1cmUgPSB0aGlzLl9hcm1hdHVyZURpc1BsYXkuYXJtYXR1cmUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NoYW5nZVNraW4pXHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2tpbihQbGF5ZXJEYXRhTWdyLmdldFBsYXllckx2KCkgLSAxKVxyXG4gICAgICAgIC8v5re75Yqg5Yqo55S755uR5ZCsXHJcbiAgICAgICAgLy90aGlzLl9hcm1hdHVyZURpc1BsYXkuYWRkRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5DT01QTEVURSwgdGhpcy5hbmltYXRpb25FdmVudEhhbmRsZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5fYXJtYXR1cmVEaXNQbGF5LmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuTE9PUF9DT01QTEVURSwgdGhpcy5sb29wQW5pbWF0aW9uRXZlbnRIYW5kbGVyLCB0aGlzKTtcclxuICAgIH1cclxuICAgIHBsYXlBbmltYXRpb25CeU5hbWUoaW5kZXgpIHtcclxuICAgICAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FybWF0dXJlRGlzUGxheS5wbGF5QW5pbWF0aW9uKCdBbmlfTWVybWFpZF9TdGFuZCcsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FybWF0dXJlRGlzUGxheS5wbGF5QW5pbWF0aW9uKCdBbmlfTWVybWFpZF9SdW4nLCAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcm1hdHVyZURpc1BsYXkucGxheUFuaW1hdGlvbignQW5pX01lcm1haWRfRGllJywgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYXJtYXR1cmVEaXNQbGF5LnBsYXlBbmltYXRpb24oJ0FuaV9NZXJtYWlkX0VhdCcsIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FybWF0dXJlRGlzUGxheS5wbGF5QW5pbWF0aW9uKCdBbmlfTWVybWFpZF9XaW4nLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RoaXMuX2FybWF0dXJlRGlzUGxheS50aW1lU2NhbGUgPSAwLjE7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0aW9uRXZlbnRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gaWYgKGV2ZW50LnR5cGUgPT0gZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUpIHtcclxuICAgICAgICAvLyAgICAgLy90aGlzLl9hcm1hdHVyZURpc1BsYXkuc3RvcEFuaW1hdGlvbigpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBsb29wQW5pbWF0aW9uRXZlbnRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgLy90aGlzLl9hcm1hdHVyZURpc1BsYXkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIC8vIGlmIChldmVudC50eXBlID09IGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkxPT1BfQ09NUExFVEUpIHtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNraW4oaW5kZXgpIHtcclxuICAgICAgICB0aGlzLl9hcm1hdHVyZS5nZXRTbG90KCdtcnlfanMxX2wnKS5kaXNwbGF5SW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLl9hcm1hdHVyZS5nZXRTbG90KCdtcnlfanMxX3RmJykuZGlzcGxheUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5fYXJtYXR1cmUuZ2V0U2xvdCgnbXJ5X2pzMV9zdCcpLmRpc3BsYXlJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuX2FybWF0dXJlLmdldFNsb3QoJ21yeV9qczFfczEnKS5kaXNwbGF5SW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLl9hcm1hdHVyZS5nZXRTbG90KCdtcnlfanMxX3MyJykuZGlzcGxheUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5fYXJtYXR1cmUuZ2V0U2xvdCgnbXJ5X2pzMl9waicpLmRpc3BsYXlJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19