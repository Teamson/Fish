
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level17.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a5ddzmmDxOqpRWWUcR8fcX', 'Level17');
// Scripts/Crl/Level/Level17.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../../Mod/Utility");
var SlideNeedle_1 = require("../Prop/SlideNeedle");
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level17 = /** @class */ (function (_super) {
    __extends(Level17, _super);
    function Level17() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.WaterSwitch1 = null;
        _this.pointNode = null;
        _this.SlideNeedle = null;
        _this.SlideNeedleCrl = null;
        return _this;
    }
    Level17.prototype.onEnable = function () {
        var _this = this;
        this.schedule(this.updateCB);
        this.SlideNeedleCrl = this.SlideNeedle.getComponent(SlideNeedle_1.default);
        this.SlideNeedleCrl.moveCB = function (dty) { _this.SNMoveCB(dty); };
    };
    Level17.prototype.updateCB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, p, i, p;
            return __generator(this, function (_a) {
                this.WaterSwitch.children[0].active = this.SlideNeedleCrl.isBottom;
                this.WaterSwitch1.children[0].active = this.getNeedleCrlById(2).switchState > 0;
                for (i = 0; i < this.pointNode.childrenCount; i++) {
                    p = this.pointNode.children[i];
                    if (Utility_1.default.getWorldDis(this.playerNode, p) <= 50 && this.playerCrl.pointIndex != i) {
                        this.playerCrl.pointIndex = i;
                        break;
                    }
                }
                for (i = 0; i < this.pointNode.childrenCount; i++) {
                    p = this.pointNode.children[i];
                    if (Utility_1.default.getWorldDis(this.Sharp, p) <= 50 && this.SharpCrl.pointIndex != i) {
                        this.SharpCrl.pointIndex = i;
                        break;
                    }
                }
                if (this.SharpCrl.pointIndex == 0 && !this.SlideNeedleCrl.isBottom) {
                    this.SlideNeedleCrl.validTouch = false;
                }
                else {
                    this.SlideNeedleCrl.validTouch = this.canTouch;
                }
                return [2 /*return*/];
            });
        });
    };
    Level17.prototype.SNMoveCB = function (dty) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 0 || this.playerCrl.pointIndex == 1)) return [3 /*break*/, 2];
                        this.playerNode.y += dty;
                        if (!(this.SharpCrl.pointIndex == 3 && this.getNeedleCrlById(0).switchState > 0 && this.SlideNeedleCrl.isBottom)) return [3 /*break*/, 2];
                        this.canTouch = false;
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (this.SharpCrl.pointIndex == 0 || this.SharpCrl.pointIndex == 1) {
                            this.Sharp.y += dty;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Level17.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.SharpCrl.pointIndex == 3)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(this.SharpCrl.pointIndex == 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(3)];
                    case 3:
                        _a.sent();
                        this.canTouch = true;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Level17.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.SharpCrl.pointIndex == 3)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(4)];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(this.playerCrl.pointIndex == 3)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(5)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        this.canTouch = true;
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Level17.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 1)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(3)];
                    case 2:
                        _a.sent();
                        if (!(this.getNeedleCrlById(1).switchState > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(5)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                    case 5:
                        if (!(this.getNeedleCrlById(0).switchState > 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(3)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        this.canTouch = true;
                        _a.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        this.canTouch = true;
                        _a.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Level17.prototype, "WaterSwitch1", void 0);
    __decorate([
        property(cc.Node)
    ], Level17.prototype, "pointNode", void 0);
    __decorate([
        property(cc.Node)
    ], Level17.prototype, "SlideNeedle", void 0);
    Level17 = __decorate([
        ccclass
    ], Level17);
    return Level17;
}(LevelBase_1.default));
exports.default = Level17;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxNy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QyxtREFBOEM7QUFDOUMseUNBQW9DO0FBRTlCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVM7SUFEOUM7UUFBQSxxRUFpR0M7UUE3Rkcsa0JBQVksR0FBWSxJQUFJLENBQUE7UUFFNUIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUMzQixvQkFBYyxHQUFnQixJQUFJLENBQUE7O0lBd0Z0QyxDQUFDO0lBdEZHLDBCQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxDQUFBO1FBRWhFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLFVBQUMsR0FBRyxJQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUE7SUFDaEUsQ0FBQztJQUVLLDBCQUFRLEdBQWQ7Ozs7Z0JBRUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFBO2dCQUNsRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUE7Z0JBRS9F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V0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUNuQyxzQkFBTTs7NkJBRUQsQ0FBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQSxFQUF4Qyx3QkFBd0M7d0JBQzdDLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTs7O3dCQUVsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7Ozt3QkFHeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7OztLQUUzQjtJQTVGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQVBWLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FnRzNCO0lBQUQsY0FBQztDQWhHRCxBQWdHQyxDQWhHb0MsbUJBQVMsR0FnRzdDO2tCQWhHb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgU2xpZGVOZWVkbGUgZnJvbSBcIi4uL1Byb3AvU2xpZGVOZWVkbGVcIjtcclxuaW1wb3J0IExldmVsQmFzZSBmcm9tIFwiLi9MZXZlbEJhc2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbDE3IGV4dGVuZHMgTGV2ZWxCYXNlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFdhdGVyU3dpdGNoMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcG9pbnROb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTbGlkZU5lZWRsZTogY2MuTm9kZSA9IG51bGxcclxuICAgIFNsaWRlTmVlZGxlQ3JsOiBTbGlkZU5lZWRsZSA9IG51bGxcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlQ0IpXHJcbiAgICAgICAgdGhpcy5TbGlkZU5lZWRsZUNybCA9IHRoaXMuU2xpZGVOZWVkbGUuZ2V0Q29tcG9uZW50KFNsaWRlTmVlZGxlKVxyXG5cclxuICAgICAgICB0aGlzLlNsaWRlTmVlZGxlQ3JsLm1vdmVDQiA9IChkdHkpID0+IHsgdGhpcy5TTk1vdmVDQihkdHkpIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVDQigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5XYXRlclN3aXRjaC5jaGlsZHJlblswXS5hY3RpdmUgPSB0aGlzLlNsaWRlTmVlZGxlQ3JsLmlzQm90dG9tXHJcbiAgICAgICAgdGhpcy5XYXRlclN3aXRjaDEuY2hpbGRyZW5bMF0uYWN0aXZlID0gdGhpcy5nZXROZWVkbGVDcmxCeUlkKDIpLnN3aXRjaFN0YXRlID4gMFxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnROb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcCA9IHRoaXMucG9pbnROb2RlLmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgIGlmIChVdGlsaXR5LmdldFdvcmxkRGlzKHRoaXMucGxheWVyTm9kZSwgcCkgPD0gNTAgJiYgdGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCAhPSBpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID0gaVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnROb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcCA9IHRoaXMucG9pbnROb2RlLmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgIGlmIChVdGlsaXR5LmdldFdvcmxkRGlzKHRoaXMuU2hhcnAsIHApIDw9IDUwICYmIHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCAhPSBpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPSBpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDAgJiYgIXRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5TbGlkZU5lZWRsZUNybC52YWxpZFRvdWNoID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLlNsaWRlTmVlZGxlQ3JsLnZhbGlkVG91Y2ggPSB0aGlzLmNhblRvdWNoXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIFNOTW92ZUNCKGR0eSkge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDAgfHwgdGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTm9kZS55ICs9IGR0eVxyXG4gICAgICAgICAgICBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDMgJiYgdGhpcy5nZXROZWVkbGVDcmxCeUlkKDApLnN3aXRjaFN0YXRlID4gMCAmJiB0aGlzLlNsaWRlTmVlZGxlQ3JsLmlzQm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDAgfHwgdGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5TaGFycC55ICs9IGR0eVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdHJpZ2dlcjAwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMykge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDApXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDMpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjEwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMykge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDQpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNClcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIyMCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDMpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldE5lZWRsZUNybEJ5SWQoMSkuc3dpdGNoU3RhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg0KVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgwKS5zd2l0Y2hTdGF0ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=