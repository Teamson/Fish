
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level10.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '457c3oEVntDQo+eZl4B9Aaj', 'Level10');
// Scripts/Crl/Level/Level10.ts

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
var LevelBase_1 = require("./LevelBase");
var ThreeNeedle_1 = require("../Prop/ThreeNeedle");
var SlideNeedle_1 = require("../Prop/SlideNeedle");
var Utility_1 = require("../../Mod/Utility");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level10 = /** @class */ (function (_super) {
    __extends(Level10, _super);
    function Level10() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pointNode = null;
        _this.ThreeNeedle = null;
        _this.SlideNeedle = null;
        _this.ThreeNeedleCrl = null;
        _this.SlideNeedleCrl = null;
        return _this;
    }
    Level10.prototype.onEnable = function () {
        var _this = this;
        this.schedule(this.updateCB);
        this.ThreeNeedleCrl = this.ThreeNeedle.getComponent(ThreeNeedle_1.default);
        this.SlideNeedleCrl = this.SlideNeedle.getComponent(SlideNeedle_1.default);
        this.ThreeNeedleCrl.closeCB = function () { _this.TNCloseCB(); };
        this.ThreeNeedleCrl.openCB = function () { _this.TNOpenCB(); };
        this.SlideNeedleCrl.moveCB = function (dty) { _this.SNMoveCB(dty); };
    };
    Level10.prototype.updateCB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, p, i, p;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isGameOver)
                            return [2 /*return*/];
                        for (i = 0; i < this.pointNode.childrenCount; i++) {
                            p = this.pointNode.children[i];
                            if (Utility_1.default.getWorldDis(this.playerNode, p) <= 50 && this.playerCrl.pointIndex != i) {
                                this.playerCrl.pointIndex = i;
                                if (i == 2 && !this.ThreeNeedleCrl.isClosed) {
                                    this.SharpCrl.moveToPoint(2);
                                }
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
                        if (this.playerCrl.pointIndex == 0 && !this.SlideNeedleCrl.isBottom) {
                            this.SlideNeedleCrl.validTouch = false;
                        }
                        else {
                            this.SlideNeedleCrl.validTouch = this.canTouch;
                        }
                        if (!(!this.playerCrl.isMoving && this.playerCrl.pointIndex == 5 && this.getNeedleCrlById(1).switchState > 0)) return [3 /*break*/, 3];
                        this.canTouch = false;
                        return [4 /*yield*/, this.playerCrl.moveToPoint(6)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(7)];
                    case 2:
                        _a.sent();
                        this.canTouch = true;
                        _a.label = 3;
                    case 3:
                        if (!(this.SharpCrl.pointIndex == 5 && !this.SharpCrl.isMoving && this.getNeedleCrlById(1).switchState > 0)) return [3 /*break*/, 5];
                        this.canTouch = false;
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(6)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Level10.prototype.TNCloseCB = function () {
    };
    Level10.prototype.TNOpenCB = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 0 && this.SlideNeedleCrl.isBottom)) return [3 /*break*/, 3];
                        this.canTouch = false;
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 3:
                        if (!(this.playerCrl.pointIndex == 1 && this.SlideNeedleCrl.isBottom)) return [3 /*break*/, 6];
                        this.canTouch = false;
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 5:
                        _a.sent();
                        this.canTouch = true;
                        return [3 /*break*/, 10];
                    case 6:
                        if (!(this.playerCrl.pointIndex == 2)) return [3 /*break*/, 8];
                        this.canTouch = false;
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 8:
                        if (!(this.playerCrl.pointIndex == 4)) return [3 /*break*/, 10];
                        this.canTouch = false;
                        return [4 /*yield*/, this.playerCrl.moveToPoint(5)];
                    case 9:
                        _a.sent();
                        this.canTouch = true;
                        _a.label = 10;
                    case 10:
                        if (!(this.SharpCrl.pointIndex == 5 && !this.SlideNeedleCrl.isBottom)) return [3 /*break*/, 12];
                        this.canTouch = false;
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(3)];
                    case 11:
                        _a.sent();
                        this.canTouch = true;
                        return [3 /*break*/, 14];
                    case 12:
                        if (!((this.SharpCrl.pointIndex == 3 || this.SharpCrl.pointIndex == 2) && !this.SlideNeedleCrl.isBottom)) return [3 /*break*/, 14];
                        this.canTouch = false;
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(5)];
                    case 13:
                        _a.sent();
                        this.canTouch = true;
                        _a.label = 14;
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    Level10.prototype.SNMoveCB = function (dty) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 0 || this.playerCrl.pointIndex == 2)) return [3 /*break*/, 4];
                        this.playerNode.y += dty;
                        if (!(!this.playerCrl.isMoving && this.playerCrl.pointIndex == 2 &&
                            !this.SlideNeedleCrl.isBottom && this.ThreeNeedleCrl.isClosed)) return [3 /*break*/, 2];
                        this.canTouch = false;
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(this.playerCrl.pointIndex == 2 && !this.SlideNeedleCrl.isBottom && !this.ThreeNeedleCrl.isClosed)) return [3 /*break*/, 4];
                        this.canTouch = false;
                        return [4 /*yield*/, this.playerCrl.moveToPoint(5)];
                    case 3:
                        _a.sent();
                        this.canTouch = true;
                        _a.label = 4;
                    case 4:
                        if (this.SharpCrl.pointIndex == 0 || this.SharpCrl.pointIndex == 2) {
                            this.Sharp.y += dty;
                            if (this.SharpCrl.pointIndex == 2 && !this.SlideNeedleCrl.isBottom && !this.ThreeNeedleCrl.isClosed) {
                                this.SharpCrl.moveToPoint(5);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Level10.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(this.playerCrl.pointIndex == 1)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(0)];
                    case 3:
                        _a.sent();
                        this.canTouch = true;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Level10.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Level10.prototype, "pointNode", void 0);
    __decorate([
        property(cc.Node)
    ], Level10.prototype, "ThreeNeedle", void 0);
    __decorate([
        property(cc.Node)
    ], Level10.prototype, "SlideNeedle", void 0);
    Level10 = __decorate([
        ccclass
    ], Level10);
    return Level10;
}(LevelBase_1.default));
exports.default = Level10;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxMC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQyxtREFBOEM7QUFDOUMsbURBQThDO0FBQzlDLDZDQUF3QztBQUVsQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFTO0lBRDlDO1FBQUEscUVBa0lDO1FBOUhHLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFHekIsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0IsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0Isb0JBQWMsR0FBZ0IsSUFBSSxDQUFBO1FBQ2xDLG9CQUFjLEdBQWdCLElBQUksQ0FBQTs7SUFzSHRDLENBQUM7SUFwSEcsMEJBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUE7UUFDaEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUE7UUFFaEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsY0FBUSxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsY0FBUSxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUE7UUFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsVUFBQyxHQUFHLElBQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxH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Qy9CO3lCQUNKOzs7OztLQUNKO0lBRUssMkJBQVMsR0FBZjs7Ozs7NkJBQ1EsQ0FBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUEsRUFBOUIsd0JBQThCO3dCQUM5QixxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7d0JBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7NkJBQ2IsQ0FBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUEsRUFBOUIsd0JBQThCO3dCQUNyQyxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7d0JBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7Ozs7S0FFM0I7SUFDSywyQkFBUyxHQUFmOzs7Ozs7S0FFQztJQTdIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQVJWLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FpSTNCO0lBQUQsY0FBQztDQWpJRCxBQWlJQyxDQWpJb0MsbUJBQVMsR0FpSTdDO2tCQWpJb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XHJcbmltcG9ydCBUaHJlZU5lZWRsZSBmcm9tIFwiLi4vUHJvcC9UaHJlZU5lZWRsZVwiO1xyXG5pbXBvcnQgU2xpZGVOZWVkbGUgZnJvbSBcIi4uL1Byb3AvU2xpZGVOZWVkbGVcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uLy4uL01vZC9VdGlsaXR5XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwxMCBleHRlbmRzIExldmVsQmFzZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwb2ludE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBUaHJlZU5lZWRsZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU2xpZGVOZWVkbGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgVGhyZWVOZWVkbGVDcmw6IFRocmVlTmVlZGxlID0gbnVsbFxyXG4gICAgU2xpZGVOZWVkbGVDcmw6IFNsaWRlTmVlZGxlID0gbnVsbFxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVDQilcclxuICAgICAgICB0aGlzLlRocmVlTmVlZGxlQ3JsID0gdGhpcy5UaHJlZU5lZWRsZS5nZXRDb21wb25lbnQoVGhyZWVOZWVkbGUpXHJcbiAgICAgICAgdGhpcy5TbGlkZU5lZWRsZUNybCA9IHRoaXMuU2xpZGVOZWVkbGUuZ2V0Q29tcG9uZW50KFNsaWRlTmVlZGxlKVxyXG5cclxuICAgICAgICB0aGlzLlRocmVlTmVlZGxlQ3JsLmNsb3NlQ0IgPSAoKSA9PiB7IHRoaXMuVE5DbG9zZUNCKCkgfVxyXG4gICAgICAgIHRoaXMuVGhyZWVOZWVkbGVDcmwub3BlbkNCID0gKCkgPT4geyB0aGlzLlROT3BlbkNCKCkgfVxyXG4gICAgICAgIHRoaXMuU2xpZGVOZWVkbGVDcmwubW92ZUNCID0gKGR0eSkgPT4geyB0aGlzLlNOTW92ZUNCKGR0eSkgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZUNCKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHJldHVyblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb2ludE5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwID0gdGhpcy5wb2ludE5vZGUuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5wbGF5ZXJOb2RlLCBwKSA8PSA1MCAmJiB0aGlzLnBsYXllckNybC5wb2ludEluZGV4ICE9IGkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPSBpXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAyICYmICF0aGlzLlRocmVlTmVlZGxlQ3JsLmlzQ2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnROb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcCA9IHRoaXMucG9pbnROb2RlLmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgIGlmIChVdGlsaXR5LmdldFdvcmxkRGlzKHRoaXMuU2hhcnAsIHApIDw9IDUwICYmIHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCAhPSBpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPSBpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAwICYmICF0aGlzLlNsaWRlTmVlZGxlQ3JsLmlzQm90dG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuU2xpZGVOZWVkbGVDcmwudmFsaWRUb3VjaCA9IGZhbHNlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5TbGlkZU5lZWRsZUNybC52YWxpZFRvdWNoID0gdGhpcy5jYW5Ub3VjaFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllckNybC5pc01vdmluZyAmJiB0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDUgJiYgdGhpcy5nZXROZWVkbGVDcmxCeUlkKDEpLnN3aXRjaFN0YXRlID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2VcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNilcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNylcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gNSAmJiAhdGhpcy5TaGFycENybC5pc01vdmluZyAmJiB0aGlzLmdldE5lZWRsZUNybEJ5SWQoMSkuc3dpdGNoU3RhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDYpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFROQ2xvc2VDQigpIHtcclxuXHJcbiAgICB9XHJcbiAgICBhc3luYyBUTk9wZW5DQigpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAwICYmIHRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAxICYmIHRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDUpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDUgJiYgIXRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMylcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICB9IGVsc2UgaWYgKCh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMyB8fCB0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMikgJiYgIXRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoNSlcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgU05Nb3ZlQ0IoZHR5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMCB8fCB0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOb2RlLnkgKz0gZHR5XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXJDcmwuaXNNb3ZpbmcgJiYgdGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAyICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5TbGlkZU5lZWRsZUNybC5pc0JvdHRvbSAmJiB0aGlzLlRocmVlTmVlZGxlQ3JsLmlzQ2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMiAmJiAhdGhpcy5TbGlkZU5lZWRsZUNybC5pc0JvdHRvbSAmJiAhdGhpcy5UaHJlZU5lZWRsZUNybC5pc0Nsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg1KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDAgfHwgdGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5TaGFycC55ICs9IGR0eVxyXG4gICAgICAgICAgICBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDIgJiYgIXRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20gJiYgIXRoaXMuVGhyZWVOZWVkbGVDcmwuaXNDbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoNSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB0cmlnZ2VyMDAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDApXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjEwKCkge1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=