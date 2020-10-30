
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/GetPowerUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be6f4pjXkVH75s9XxyfOpIn', 'GetPowerUI');
// Scripts/UI/GetPowerUI.ts

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
var ShareMgr_1 = require("../Mod/ShareMgr");
var Utility_1 = require("../Mod/Utility");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GetPowerUI = /** @class */ (function (_super) {
    __extends(GetPowerUI, _super);
    function GetPowerUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    GetPowerUI.prototype.start = function () {
    };
    GetPowerUI.prototype.onEnable = function () {
        Utility_1.default.rootAction(this.rootNode, true, 0.1);
    };
    GetPowerUI.prototype.onDisable = function () {
    };
    GetPowerUI.prototype.getPowerBtnCB = function () {
        var _this = this;
        var cb = function () {
            PlayerDataMgr_1.default.changePower(3);
            _this.closeGetPowerUI();
        };
        ShareMgr_1.default.instance.shareGame(cb);
    };
    GetPowerUI.prototype.closeGetPowerUI = function () {
        var _this = this;
        Utility_1.default.rootAction(this.rootNode, false, 0.1, function () { _this.node.active = false; });
    };
    __decorate([
        property(cc.Node)
    ], GetPowerUI.prototype, "rootNode", void 0);
    GetPowerUI = __decorate([
        ccclass
    ], GetPowerUI);
    return GetPowerUI;
}(cc.Component));
exports.default = GetPowerUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEdldFBvd2VyVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBRWxELDRDQUF1QztBQUN2QywwQ0FBcUM7QUFFL0IsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQURwRDtRQUFBLHFFQWdDQztRQTVCRyxjQUFRLEdBQVksSUFBSSxDQUFBOztRQTJCeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUExQkcsZUFBZTtJQUVmLDBCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNkJBQVEsR0FBUjtRQUNJLGlCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFRCw4QkFBUyxHQUFUO0lBQ0EsQ0FBQztJQUVELGtDQUFhLEdBQWI7UUFBQSxpQkFNQztRQUxHLElBQUksRUFBRSxHQUFHO1lBQ0wsdUJBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDNUIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQzFCLENBQUMsQ0FBQTtRQUNELGtCQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsb0NBQWUsR0FBZjtRQUFBLGlCQUVDO1FBREcsaUJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLGNBQVEsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDckYsQ0FBQztJQXpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNNO0lBSFAsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQStCOUI7SUFBRCxpQkFBQztDQS9CRCxBQStCQyxDQS9CdUMsRUFBRSxDQUFDLFNBQVMsR0ErQm5EO2tCQS9Cb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuaW1wb3J0IEFkTWdyIGZyb20gXCIuLi9Nb2QvQWRNZ3JcIjtcclxuaW1wb3J0IFNoYXJlTWdyIGZyb20gXCIuLi9Nb2QvU2hhcmVNZ3JcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uL01vZC9VdGlsaXR5XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2V0UG93ZXJVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByb290Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgVXRpbGl0eS5yb290QWN0aW9uKHRoaXMucm9vdE5vZGUsIHRydWUsIDAuMSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG93ZXJCdG5DQigpIHtcclxuICAgICAgICBsZXQgY2IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIFBsYXllckRhdGFNZ3IuY2hhbmdlUG93ZXIoMylcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUdldFBvd2VyVUkoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBTaGFyZU1nci5pbnN0YW5jZS5zaGFyZUdhbWUoY2IpXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VHZXRQb3dlclVJKCkge1xyXG4gICAgICAgIFV0aWxpdHkucm9vdEFjdGlvbih0aGlzLnJvb3ROb2RlLCBmYWxzZSwgMC4xLCAoKSA9PiB7IHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19