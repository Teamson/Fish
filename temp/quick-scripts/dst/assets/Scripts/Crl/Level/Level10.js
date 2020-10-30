
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
        _this.WaterSwitch1 = null;
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
                        this.WaterSwitch.children[0].active = this.SlideNeedleCrl.isBottom;
                        this.WaterSwitch1.children[0].active = this.getNeedleCrlById(1).switchState > 0;
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
                        if (!(this.SharpCrl.pointIndex == 5 && !this.SharpCrl.isMoving && this.getNeedleCrlById(1).switchState > 0 && !this.playerCrl.isMoving &&
                            !this.playerCrl.gotMeat)) return [3 /*break*/, 5];
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
    ], Level10.prototype, "WaterSwitch1", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxMC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQyxtREFBOEM7QUFDOUMsbURBQThDO0FBQzlDLDZDQUF3QztBQUVsQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFTO0lBRDlDO1FBQUEscUVBeUlDO1FBcklHLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRTVCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFHekIsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0IsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0Isb0JBQWMsR0FBZ0IsSUFBSSxDQUFBO1FBQ2xDLG9CQUFjLEdBQWdCLElBQUksQ0FBQTs7SUEySHRDLENBQUM7SUF6SEcsMEJBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUE7UUFDaEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUE7UUFFaEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsY0FBUSxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsY0FBUSxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUE7UUFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsVUFBQyxHQUFH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LENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQVZWLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F3STNCO0lBQUQsY0FBQztDQXhJRCxBQXdJQyxDQXhJb0MsbUJBQVMsR0F3STdDO2tCQXhJb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XHJcbmltcG9ydCBUaHJlZU5lZWRsZSBmcm9tIFwiLi4vUHJvcC9UaHJlZU5lZWRsZVwiO1xyXG5pbXBvcnQgU2xpZGVOZWVkbGUgZnJvbSBcIi4uL1Byb3AvU2xpZGVOZWVkbGVcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uLy4uL01vZC9VdGlsaXR5XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwxMCBleHRlbmRzIExldmVsQmFzZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBXYXRlclN3aXRjaDE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvaW50Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFRocmVlTmVlZGxlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTbGlkZU5lZWRsZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBUaHJlZU5lZWRsZUNybDogVGhyZWVOZWVkbGUgPSBudWxsXHJcbiAgICBTbGlkZU5lZWRsZUNybDogU2xpZGVOZWVkbGUgPSBudWxsXHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUNCKVxyXG4gICAgICAgIHRoaXMuVGhyZWVOZWVkbGVDcmwgPSB0aGlzLlRocmVlTmVlZGxlLmdldENvbXBvbmVudChUaHJlZU5lZWRsZSlcclxuICAgICAgICB0aGlzLlNsaWRlTmVlZGxlQ3JsID0gdGhpcy5TbGlkZU5lZWRsZS5nZXRDb21wb25lbnQoU2xpZGVOZWVkbGUpXHJcblxyXG4gICAgICAgIHRoaXMuVGhyZWVOZWVkbGVDcmwuY2xvc2VDQiA9ICgpID0+IHsgdGhpcy5UTkNsb3NlQ0IoKSB9XHJcbiAgICAgICAgdGhpcy5UaHJlZU5lZWRsZUNybC5vcGVuQ0IgPSAoKSA9PiB7IHRoaXMuVE5PcGVuQ0IoKSB9XHJcbiAgICAgICAgdGhpcy5TbGlkZU5lZWRsZUNybC5tb3ZlQ0IgPSAoZHR5KSA9PiB7IHRoaXMuU05Nb3ZlQ0IoZHR5KSB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlQ0IoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuV2F0ZXJTd2l0Y2guY2hpbGRyZW5bMF0uYWN0aXZlID0gdGhpcy5TbGlkZU5lZWRsZUNybC5pc0JvdHRvbVxyXG4gICAgICAgIHRoaXMuV2F0ZXJTd2l0Y2gxLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgxKS5zd2l0Y2hTdGF0ZSA+IDBcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHAgPSB0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICBpZiAoVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLnBsYXllck5vZGUsIHApIDw9IDUwICYmIHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggIT0gaSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9IGlcclxuICAgICAgICAgICAgICAgIGlmIChpID09IDIgJiYgIXRoaXMuVGhyZWVOZWVkbGVDcmwuaXNDbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb2ludE5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwID0gdGhpcy5wb2ludE5vZGUuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5TaGFycCwgcCkgPD0gNTAgJiYgdGhpcy5TaGFycENybC5wb2ludEluZGV4ICE9IGkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCA9IGlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDAgJiYgIXRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5TbGlkZU5lZWRsZUNybC52YWxpZFRvdWNoID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLlNsaWRlTmVlZGxlQ3JsLnZhbGlkVG91Y2ggPSB0aGlzLmNhblRvdWNoXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMucGxheWVyQ3JsLmlzTW92aW5nICYmIHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gNSAmJiB0aGlzLmdldE5lZWRsZUNybEJ5SWQoMSkuc3dpdGNoU3RhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg2KVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg3KVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCA9PSA1ICYmICF0aGlzLlNoYXJwQ3JsLmlzTW92aW5nICYmIHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgxKS5zd2l0Y2hTdGF0ZSA+IDAgJiYgIXRoaXMucGxheWVyQ3JsLmlzTW92aW5nICYmXHJcbiAgICAgICAgICAgICF0aGlzLnBsYXllckNybC5nb3RNZWF0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDYpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFROQ2xvc2VDQigpIHtcclxuXHJcbiAgICB9XHJcbiAgICBhc3luYyBUTk9wZW5DQigpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAwICYmIHRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAxICYmIHRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDUpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDUgJiYgIXRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMylcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICB9IGVsc2UgaWYgKCh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMyB8fCB0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMikgJiYgIXRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoNSlcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgU05Nb3ZlQ0IoZHR5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMCB8fCB0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOb2RlLnkgKz0gZHR5XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXJDcmwuaXNNb3ZpbmcgJiYgdGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAyICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5TbGlkZU5lZWRsZUNybC5pc0JvdHRvbSAmJiB0aGlzLlRocmVlTmVlZGxlQ3JsLmlzQ2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMiAmJiAhdGhpcy5TbGlkZU5lZWRsZUNybC5pc0JvdHRvbSAmJiAhdGhpcy5UaHJlZU5lZWRsZUNybC5pc0Nsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg1KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDAgfHwgdGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5TaGFycC55ICs9IGR0eVxyXG4gICAgICAgICAgICBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDIgJiYgIXRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20gJiYgIXRoaXMuVGhyZWVOZWVkbGVDcmwuaXNDbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoNSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB0cmlnZ2VyMDAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDApXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjEwKCkge1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=