
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level19.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f699LAXF5HqbvduI+AwFwZ', 'Level19');
// Scripts/Crl/Level/Level19.ts

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
var Sharp_1 = require("../Sharp");
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level19 = /** @class */ (function (_super) {
    __extends(Level19, _super);
    function Level19() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MainCamera = null;
        _this.SandNode = null;
        _this.Electric = null;
        _this.Saw = null;
        _this.Sharp1 = null;
        _this.Sharp1Crl = null;
        _this.Des1 = null;
        _this.GouNode = null;
        _this.GouPoint = null;
        _this.gameStarted = false;
        return _this;
    }
    Level19.prototype.onEnable = function () {
        this.MainCamera = cc.find('Canvas/Main Camera');
        this.sawAction();
        this.Sharp1Crl = this.Sharp1.getComponent(Sharp_1.default);
        this.schedule(this.updateCB);
    };
    Level19.prototype.updateCB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var a1, a2, a3, sq;
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.gameStarted) {
                    this.canTouch = false;
                    this.gameStarted = true;
                    a1 = cc.moveBy(3, cc.v2(750, 0));
                    a2 = cc.moveBy(3, cc.v2(-750, 0));
                    a3 = cc.callFunc(function () {
                        _this.canTouch = true;
                    });
                    sq = cc.sequence(a1, a2, a3);
                    this.MainCamera.runAction(sq);
                }
                if (!this.isGameOver) {
                    if (Utility_1.default.getWorldDis(this.playerNode, this.Saw) <= 100) {
                        this.loseCB();
                        return [2 /*return*/];
                    }
                    if (this.Sharp.isValid) {
                        if (Utility_1.default.getWorldDis(this.Sharp, this.GouPoint) <= 50) {
                            this.Sharp.destroy();
                            this.canTouch = true;
                        }
                    }
                    if (Utility_1.default.getWorldDis(this.playerNode, this.GouPoint) <= 50) {
                        this.loseCB();
                        return [2 /*return*/];
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    Level19.prototype.sawAction = function () {
        var a1 = cc.rotateBy(4.6, -960);
        var a3 = cc.delayTime(0.3);
        var a4 = cc.moveTo(2, cc.v2(0, 85));
        var a5 = cc.delayTime(0.3);
        var a6 = cc.moveTo(2, cc.v2(0, -55));
        var a7 = cc.sequence(a3, a4, a5, a6);
        var a9 = cc.spawn(a1, a7);
        this.Saw.runAction(cc.repeatForever(a9));
    };
    Level19.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 1:
                        _a.sent();
                        if (!(this.getNeedleCrlById(1).switchState > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 2:
                        _a.sent();
                        this.MainCamera.runAction(cc.moveBy(1, cc.v2(750, 0)));
                        return [4 /*yield*/, this.playerCrl.moveToPoint(3)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level19.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 1:
                        _a.sent();
                        this.MainCamera.runAction(cc.moveBy(1, cc.v2(750, 0)));
                        return [4 /*yield*/, this.playerCrl.moveToPoint(3)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level19.prototype.trigger11 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(9)];
                    case 1:
                        _a.sent();
                        if (!this.Electric.isValid) return [3 /*break*/, 2];
                        this.loseCB();
                        return [2 /*return*/];
                    case 2:
                        if (!(this.getNeedleCrlById(2).switchState > 0 && this.getNeedleCrlById(3).switchState > 0)) return [3 /*break*/, 4];
                        this.MainCamera.runAction(cc.moveBy(1, cc.v2(750, 0)));
                        return [4 /*yield*/, this.playerCrl.moveToPoint(10)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level19.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.SandNode.isValid) {
                    this.scheduleOnce(function () {
                        _this.Electric.destroy();
                        _this.SandNode.destroy();
                        _this.canTouch = true;
                    }, 2);
                }
                else {
                    this.canTouch = true;
                }
                return [2 /*return*/];
            });
        });
    };
    Level19.prototype.trigger30 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 0)) return [3 /*break*/, 1];
                        if (this.SandNode.isValid) {
                            this.scheduleOnce(function () {
                                _this.SandNode.destroy();
                                _this.canTouch = true;
                            }, 2);
                        }
                        else {
                            this.canTouch = true;
                        }
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(this.playerCrl.pointIndex == 9)) return [3 /*break*/, 3];
                        this.MainCamera.runAction(cc.moveBy(1, cc.v2(750, 0)));
                        return [4 /*yield*/, this.playerCrl.moveToPoint(10)];
                    case 2:
                        _a.sent();
                        this.canTouch = true;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Level19.prototype.trigger40 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 3)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 1:
                        _a.sent();
                        if (!(this.getNeedleCrlById(7).switchState > 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(5)];
                    case 2:
                        _a.sent();
                        if (!(this.getNeedleCrlById(6).switchState > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(7)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(8)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.playerCrl.moveToPoint(6)];
                    case 6:
                        _a.sent();
                        this.loseCB();
                        return [2 /*return*/];
                    case 7:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level19.prototype.trigger41 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 10)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.Sharp1Crl.moveToPoint(10)];
                    case 1:
                        _a.sent();
                        this.loseCB();
                        _a.label = 2;
                    case 2:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level19.prototype.trigger50 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Sharp1Crl.moveToPoint(7)];
                    case 1:
                        _a.sent();
                        this.Sharp1Crl.aniCrl.playAnimationByName(3);
                        this.scheduleOnce(function () { _this.Sharp1Crl.aniCrl.playAnimationByName(0); }, 0.5);
                        this.meatNode.destroy();
                        this.loseCB();
                        return [2 /*return*/];
                }
            });
        });
    };
    Level19.prototype.trigger60 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    Level19.prototype.trigger70 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.Sharp.isValid && this.SharpCrl.pointIndex == 4)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(5)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 2:
                        if (!(this.playerCrl.pointIndex == 4)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(5)];
                    case 3:
                        _a.sent();
                        if (!(this.getNeedleCrlById(6).switchState > 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(7)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(8)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.playerCrl.moveToPoint(6)];
                    case 7:
                        _a.sent();
                        this.loseCB();
                        return [2 /*return*/];
                    case 8:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Level19.prototype, "SandNode", void 0);
    __decorate([
        property(cc.Node)
    ], Level19.prototype, "Electric", void 0);
    __decorate([
        property(cc.Node)
    ], Level19.prototype, "Saw", void 0);
    __decorate([
        property(cc.Node)
    ], Level19.prototype, "Sharp1", void 0);
    __decorate([
        property(cc.Node)
    ], Level19.prototype, "Des1", void 0);
    __decorate([
        property(cc.Node)
    ], Level19.prototype, "GouNode", void 0);
    __decorate([
        property(cc.Node)
    ], Level19.prototype, "GouPoint", void 0);
    Level19 = __decorate([
        ccclass
    ], Level19);
    return Level19;
}(LevelBase_1.default));
exports.default = Level19;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxOS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QyxrQ0FBNkI7QUFDN0IseUNBQW9DO0FBRTlCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVM7SUFEOUM7UUFBQSxxRUE2TEM7UUExTEcsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFHMUIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBRXhCLFNBQUcsR0FBWSxJQUFJLENBQUE7UUFFbkIsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUN0QixlQUFTLEdBQVUsSUFBSSxDQUFBO1FBRXZCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBRXhCLGlCQUFXLEdBQVksS0FBSyxDQUFBOztJQXdLaEMsQ0FBQztJQXRLRywwQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDL0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVLLDBCQUFRLEdBQWQ7Ozs7O2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtvQkFDckIs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USxHQUFHLElBQUksQ0FBQTs7Ozs7S0FDdkI7SUF0TEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQWxCUCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBNEwzQjtJQUFELGNBQUM7Q0E1TEQsQUE0TEMsQ0E1TG9DLG1CQUFTLEdBNEw3QztrQkE1TG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vLi4vTW9kL1V0aWxpdHlcIjtcclxuaW1wb3J0IFNoYXJwIGZyb20gXCIuLi9TaGFycFwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuL0xldmVsQmFzZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsMTkgZXh0ZW5kcyBMZXZlbEJhc2Uge1xyXG5cclxuICAgIE1haW5DYW1lcmE6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTYW5kTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRWxlY3RyaWM6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFNhdzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU2hhcnAxOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgU2hhcnAxQ3JsOiBTaGFycCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRGVzMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR291Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR291UG9pbnQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgZ2FtZVN0YXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuTWFpbkNhbWVyYSA9IGNjLmZpbmQoJ0NhbnZhcy9NYWluIENhbWVyYScpXHJcbiAgICAgICAgdGhpcy5zYXdBY3Rpb24oKVxyXG4gICAgICAgIHRoaXMuU2hhcnAxQ3JsID0gdGhpcy5TaGFycDEuZ2V0Q29tcG9uZW50KFNoYXJwKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVDQilcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVDQigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGxldCBhMSA9IGNjLm1vdmVCeSgzLCBjYy52Mig3NTAsIDApKVxyXG4gICAgICAgICAgICBsZXQgYTIgPSBjYy5tb3ZlQnkoMywgY2MudjIoLTc1MCwgMCkpXHJcbiAgICAgICAgICAgIGxldCBhMyA9IGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxldCBzcSA9IGNjLnNlcXVlbmNlKGExLCBhMiwgYTMpXHJcbiAgICAgICAgICAgIHRoaXMuTWFpbkNhbWVyYS5ydW5BY3Rpb24oc3EpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNHYW1lT3Zlcikge1xyXG4gICAgICAgICAgICBpZiAoVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLnBsYXllck5vZGUsIHRoaXMuU2F3KSA8PSAxMDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5TaGFycC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLlNoYXJwLCB0aGlzLkdvdVBvaW50KSA8PSA1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2hhcnAuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5wbGF5ZXJOb2RlLCB0aGlzLkdvdVBvaW50KSA8PSA1MCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNhd0FjdGlvbigpIHtcclxuICAgICAgICBsZXQgYTEgPSBjYy5yb3RhdGVCeSg0LjYsIC05NjApXHJcblxyXG4gICAgICAgIGxldCBhMyA9IGNjLmRlbGF5VGltZSgwLjMpXHJcbiAgICAgICAgbGV0IGE0ID0gY2MubW92ZVRvKDIsIGNjLnYyKDAsIDg1KSlcclxuICAgICAgICBsZXQgYTUgPSBjYy5kZWxheVRpbWUoMC4zKVxyXG4gICAgICAgIGxldCBhNiA9IGNjLm1vdmVUbygyLCBjYy52MigwLCAtNTUpKVxyXG4gICAgICAgIGxldCBhNyA9IGNjLnNlcXVlbmNlKGEzLCBhNCwgYTUsIGE2KVxyXG5cclxuICAgICAgICBsZXQgYTkgPSBjYy5zcGF3bihhMSwgYTcpXHJcbiAgICAgICAgdGhpcy5TYXcucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoYTkpKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHRyaWdnZXIwMCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDEpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldE5lZWRsZUNybEJ5SWQoMSkuc3dpdGNoU3RhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5NYWluQ2FtZXJhLnJ1bkFjdGlvbihjYy5tb3ZlQnkoMSwgY2MudjIoNzUwLCAwKSkpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMTAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgyKVxyXG4gICAgICAgICAgICB0aGlzLk1haW5DYW1lcmEucnVuQWN0aW9uKGNjLm1vdmVCeSgxLCBjYy52Mig3NTAsIDApKSlcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIxMSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDkpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLkVsZWN0cmljLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgyKS5zd2l0Y2hTdGF0ZSA+IDAgJiYgdGhpcy5nZXROZWVkbGVDcmxCeUlkKDMpLnN3aXRjaFN0YXRlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5NYWluQ2FtZXJhLnJ1bkFjdGlvbihjYy5tb3ZlQnkoMSwgY2MudjIoNzUwLCAwKSkpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjIwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLlNhbmROb2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5FbGVjdHJpYy5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIHRoaXMuU2FuZE5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIzMCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLlNhbmROb2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlNhbmROb2RlLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSA5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuTWFpbkNhbWVyYS5ydW5BY3Rpb24oY2MubW92ZUJ5KDEsIGNjLnYyKDc1MCwgMCkpKVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxMClcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjQwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNClcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCg3KS5zd2l0Y2hTdGF0ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDUpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXROZWVkbGVDcmxCeUlkKDYpLnN3aXRjaFN0YXRlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDcpXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoOClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvc2VDQigpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyNDEoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMTApIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycDFDcmwubW92ZVRvUG9pbnQoMTApXHJcbiAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXI1MCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLlNoYXJwMUNybC5tb3ZlVG9Qb2ludCg3KVxyXG4gICAgICAgIHRoaXMuU2hhcnAxQ3JsLmFuaUNybC5wbGF5QW5pbWF0aW9uQnlOYW1lKDMpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLlNoYXJwMUNybC5hbmlDcmwucGxheUFuaW1hdGlvbkJ5TmFtZSgwKSB9LCAwLjUpXHJcbiAgICAgICAgdGhpcy5tZWF0Tm9kZS5kZXN0cm95KClcclxuICAgICAgICB0aGlzLmxvc2VDQigpXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyNjAoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXI3MCgpIHtcclxuICAgICAgICBpZiAodGhpcy5TaGFycC5pc1ZhbGlkICYmIHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCA9PSA0KSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoNSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gNCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg1KVxyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXROZWVkbGVDcmxCeUlkKDYpLnN3aXRjaFN0YXRlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNylcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg2KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgIH1cclxufVxyXG4iXX0=