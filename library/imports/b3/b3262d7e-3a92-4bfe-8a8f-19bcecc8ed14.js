"use strict";
cc._RF.push(module, 'b32621+OpJL/oqPGbzsyO0U', 'Level12');
// Scripts/Crl/Level/Level12.ts

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
var Sharp_1 = require("../Sharp");
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level12 = /** @class */ (function (_super) {
    __extends(Level12, _super);
    function Level12() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MainCamera = null;
        _this.SharpRed = null;
        _this.SharpRedCrl = null;
        _this.Electric = null;
        _this.Electric1 = null;
        _this.gameStarted = false;
        return _this;
    }
    Level12.prototype.onEnable = function () {
        this.MainCamera = cc.find('Canvas/Main Camera');
        this.SharpRedCrl = this.SharpRed.getComponent(Sharp_1.default);
        this.schedule(this.updateCB);
    };
    Level12.prototype.updateCB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var a1, a2, a3, sq;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.gameStarted) {
                            this.canTouch = false;
                            this.gameStarted = true;
                            a1 = cc.moveBy(5, cc.v2(750 * 2, 0));
                            a2 = cc.moveBy(5, cc.v2(-750 * 2, 0));
                            a3 = cc.callFunc(function () {
                                _this.canTouch = true;
                            });
                            sq = cc.sequence(a1, a2, a3);
                            this.MainCamera.runAction(sq);
                        }
                        if (!(!this.SharpCrl.isMoving && this.SharpCrl.pointIndex == 2 && this.getNeedleCrlById(2).switchState > 0)) return [3 /*break*/, 2];
                        this.canTouch = false;
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(4)];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        _a.label = 2;
                    case 2:
                        if (!(!this.SharpRedCrl.isMoving && this.SharpRedCrl.pointIndex == 3 && this.getNeedleCrlById(2).switchState > 0)) return [3 /*break*/, 4];
                        this.canTouch = false;
                        return [4 /*yield*/, this.SharpRedCrl.moveToPoint(5)];
                    case 3:
                        _a.sent();
                        this.canTouch = true;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Level12.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.SharpCrl.pointIndex == 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 2:
                        if (!(this.SharpCrl.pointIndex == 2)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 5:
                        if (!(this.SharpCrl.pointIndex == 4)) return [3 /*break*/, 11];
                        if (!(this.getNeedleCrlById(2).switchState > 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(6)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 8:
                        this.MainCamera.runAction(cc.moveBy(2, cc.v2(750, 0)));
                        return [4 /*yield*/, this.playerCrl.moveToPoint(6)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(7)];
                    case 10:
                        _a.sent();
                        this.canTouch = true;
                        _a.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    Level12.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level12.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    Level12.prototype.trigger30 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.Electric.isValid) return [3 /*break*/, 1];
                        this.scheduleOnce(function () {
                            _this.loseCB();
                        }, 2);
                        return [3 /*break*/, 3];
                    case 1:
                        this.MainCamera.runAction(cc.moveBy(1, cc.v2(750, 0)));
                        return [4 /*yield*/, this.playerCrl.moveToPoint(8)];
                    case 2:
                        _a.sent();
                        this.canTouch = true;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Level12.prototype.trigger40 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.scheduleOnce(function () {
                    _this.Electric.destroy();
                    _this.canTouch = true;
                }, 2);
                return [2 /*return*/];
            });
        });
    };
    Level12.prototype.trigger50 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.Electric1.isValid) return [3 /*break*/, 1];
                        this.scheduleOnce(function () {
                            _this.loseCB();
                        }, 2);
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.playerCrl.moveToPoint(9)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(10)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Level12.prototype.trigger60 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.scheduleOnce(function () {
                    _this.Electric1.destroy();
                    _this.canTouch = true;
                }, 2);
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Level12.prototype, "SharpRed", void 0);
    __decorate([
        property(cc.Node)
    ], Level12.prototype, "Electric", void 0);
    __decorate([
        property(cc.Node)
    ], Level12.prototype, "Electric1", void 0);
    Level12 = __decorate([
        ccclass
    ], Level12);
    return Level12;
}(LevelBase_1.default));
exports.default = Level12;

cc._RF.pop();