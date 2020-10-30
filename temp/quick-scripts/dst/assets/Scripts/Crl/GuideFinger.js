
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/GuideFinger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d16d5Wq9ZDgquKSde2W/8b', 'GuideFinger');
// Scripts/Crl/GuideFinger.ts

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
var GuideFinger = /** @class */ (function (_super) {
    __extends(GuideFinger, _super);
    function GuideFinger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startPosArr = [];
        _this.endPosArr = [];
        _this.step = 0;
        return _this;
    }
    GuideFinger.prototype.onLoad = function () { };
    GuideFinger.prototype.start = function () {
    };
    GuideFinger.prototype.stepAction = function () {
        var _this = this;
        var sp = this.startPosArr[this.step];
        var ep = this.endPosArr[this.step];
        this.node.stopAllActions();
        var a1 = cc.callFunc(function () { _this.node.setPosition(sp); });
        var a2 = cc.moveTo(1.5, ep);
        var a3 = cc.sequence(a1, a2);
        this.node.runAction(cc.repeatForever(a3));
    };
    GuideFinger.prototype.update = function (dt) { };
    __decorate([
        property(cc.Vec2)
    ], GuideFinger.prototype, "startPosArr", void 0);
    __decorate([
        property(cc.Vec2)
    ], GuideFinger.prototype, "endPosArr", void 0);
    GuideFinger = __decorate([
        ccclass
    ], GuideFinger);
    return GuideFinger;
}(cc.Component));
exports.default = GuideFinger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxHdWlkZUZpbmdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBRHJEO1FBQUEscUVBMkJDO1FBdkJHLGlCQUFXLEdBQWMsRUFBRSxDQUFBO1FBRTNCLGVBQVMsR0FBYyxFQUFFLENBQUE7UUFFekIsVUFBSSxHQUFXLENBQUMsQ0FBQTs7SUFtQnBCLENBQUM7SUFqQkcsNEJBQU0sR0FBTixjQUFXLENBQUM7SUFFWiwyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFBQSxpQkFRQztRQVBHLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDMUIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFRLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDekQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDM0IsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sRUFBRSxJQUFJLENBQUM7SUF0QmQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNPO0lBTFIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTBCL0I7SUFBRCxrQkFBQztDQTFCRCxBQTBCQyxDQTFCd0MsRUFBRSxDQUFDLFNBQVMsR0EwQnBEO2tCQTFCb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpZGVGaW5nZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxyXG4gICAgc3RhcnRQb3NBcnI6IGNjLlZlYzJbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuVmVjMilcclxuICAgIGVuZFBvc0FycjogY2MuVmVjMltdID0gW11cclxuXHJcbiAgICBzdGVwOiBudW1iZXIgPSAwXHJcblxyXG4gICAgb25Mb2FkKCkgeyB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0ZXBBY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IHNwID0gdGhpcy5zdGFydFBvc0Fyclt0aGlzLnN0ZXBdXHJcbiAgICAgICAgbGV0IGVwID0gdGhpcy5lbmRQb3NBcnJbdGhpcy5zdGVwXVxyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgbGV0IGExID0gY2MuY2FsbEZ1bmMoKCkgPT4geyB0aGlzLm5vZGUuc2V0UG9zaXRpb24oc3ApIH0pXHJcbiAgICAgICAgbGV0IGEyID0gY2MubW92ZVRvKDEuNSwgZXApXHJcbiAgICAgICAgbGV0IGEzID0gY2Muc2VxdWVuY2UoYTEsIGEyKVxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihhMykpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7IH1cclxufVxyXG4iXX0=