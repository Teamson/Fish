"use strict";
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