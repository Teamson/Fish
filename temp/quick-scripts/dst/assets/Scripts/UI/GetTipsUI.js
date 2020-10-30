
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/GetTipsUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8fde6IUoBdMG7w+SfixDloE', 'GetTipsUI');
// Scripts/UI/GetTipsUI.ts

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
var Utility_1 = require("../Mod/Utility");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GetTipsUI = /** @class */ (function (_super) {
    __extends(GetTipsUI, _super);
    function GetTipsUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    GetTipsUI.prototype.start = function () {
    };
    GetTipsUI.prototype.onEnable = function () {
        Utility_1.default.rootAction(this.rootNode, true, 0.1);
    };
    GetTipsUI.prototype.onDisable = function () {
    };
    GetTipsUI.prototype.closeGetTipsUI = function () {
        var _this = this;
        Utility_1.default.rootAction(this.rootNode, false, 0.1, function () { _this.node.active = false; });
    };
    __decorate([
        property(cc.Node)
    ], GetTipsUI.prototype, "rootNode", void 0);
    GetTipsUI = __decorate([
        ccclass
    ], GetTipsUI);
    return GetTipsUI;
}(cc.Component));
exports.default = GetTipsUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEdldFRpcHNVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBcUM7QUFFL0IsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQURuRDtRQUFBLHFFQXlCQztRQXJCRyxjQUFRLEdBQVksSUFBSSxDQUFBOztRQW9CeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFuQkcsZUFBZTtJQUVmLHlCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNJLGlCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFRCw2QkFBUyxHQUFUO0lBRUEsQ0FBQztJQUVELGtDQUFjLEdBQWQ7UUFBQSxpQkFFQztRQURHLGlCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxjQUFRLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JGLENBQUM7SUFsQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQUhQLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F3QjdCO0lBQUQsZ0JBQUM7Q0F4QkQsQUF3QkMsQ0F4QnNDLEVBQUUsQ0FBQyxTQUFTLEdBd0JsRDtrQkF4Qm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vTW9kL1V0aWxpdHlcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2V0VGlwc1VJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJvb3ROb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBVdGlsaXR5LnJvb3RBY3Rpb24odGhpcy5yb290Tm9kZSwgdHJ1ZSwgMC4xKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VHZXRUaXBzVUkoKSB7XHJcbiAgICAgICAgVXRpbGl0eS5yb290QWN0aW9uKHRoaXMucm9vdE5vZGUsIGZhbHNlLCAwLjEsICgpID0+IHsgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=