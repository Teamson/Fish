
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level18.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc83epJsAJLF7AAHX8XkeTP', 'Level18');
// Scripts/Crl/Level/Level18.ts

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
var Level18 = /** @class */ (function (_super) {
    __extends(Level18, _super);
    function Level18() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Sharp1 = null;
        _this.Sharp1Crl = null;
        _this.Meat1 = null;
        _this.MeatDroped = false;
        return _this;
    }
    Level18.prototype.onEnable = function () {
        this.Sharp1Crl = this.Sharp1.getComponent(Sharp_1.default);
        this.schedule(this.updateCB);
    };
    Level18.prototype.updateCB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.isGameOver && this.Sharp1.isValid && this.meatNode.isValid) {
                    if (Utility_1.default.getWorldDis(this.Sharp1, this.meatNode) <= 50) {
                        this.meatNode.destroy();
                        this.loseCB();
                        return [2 /*return*/];
                    }
                }
                if (!this.isGameOver && this.Sharp.isValid && this.Meat1.isValid) {
                    if (Utility_1.default.getWorldDis(this.Sharp, this.Meat1) <= 50) {
                        this.Sharp.pauseAllActions();
                        this.SharpCrl.aniCrl.playAnimationByName(3);
                        this.scheduleOnce(function () { _this.Sharp.resumeAllActions(); }, 0.5);
                        this.Meat1.destroy();
                        return [2 /*return*/];
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    Level18.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playerCrl.moveToPoint(3)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 2:
                        _a.sent();
                        if (!(this.getNeedleCrlById(3).switchState > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(4)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        if (!(this.getNeedleCrlById(4).switchState > 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(5)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(6)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        this.canTouch = true;
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Level18.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.getNeedleCrlById(2).switchState > 0)) return [3 /*break*/, 9];
                        if (!(this.SharpCrl.pointIndex == 2)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 3:
                        if (!(this.SharpCrl.pointIndex == 4 && this.getNeedleCrlById(3).switchState > 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
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
    Level18.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.Meat1.isValid) {
                            this.MeatDroped = true;
                            this.Meat1.runAction(cc.moveBy(1, cc.v2(0, -170)));
                            this.scheduleOnce(function () {
                                _this.canTouch = true;
                            }, 1);
                        }
                        if (!(this.getNeedleCrlById(1).switchState > 0)) return [3 /*break*/, 8];
                        if (!(this.SharpCrl.pointIndex == 2)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 3:
                        if (!(this.SharpCrl.pointIndex == 4 && this.getNeedleCrlById(3).switchState > 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        if (!(this.SharpCrl.pointIndex == 4 && this.getNeedleCrlById(3).switchState > 0)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 9:
                        _a.sent();
                        this.canTouch = true;
                        _a.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    Level18.prototype.trigger30 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.SharpCrl.pointIndex == 2)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(4)];
                    case 1:
                        _a.sent();
                        if (this.Sharp1.isValid) {
                            this.SharpCrl.aniCrl.playAnimationByName(3);
                            this.scheduleOnce(function () { _this.SharpCrl.aniCrl.playAnimationByName(0); }, 0.5);
                            this.Sharp1.destroy();
                        }
                        this.canTouch = true;
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(this.SharpCrl.pointIndex == 4 && this.MeatDroped && this.Meat1.isValid)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 3:
                        _a.sent();
                        this.canTouch = true;
                        return [3 /*break*/, 5];
                    case 4:
                        this.canTouch = true;
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Level18.prototype.trigger40 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 4)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(5)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(6)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 3:
                        if (!(this.Sharp1.isValid && this.Sharp1Crl.pointIndex == 4)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.Sharp1Crl.moveToPoint(5)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 5:
                        if (!(this.SharpCrl.pointIndex == 4)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(5)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        this.canTouch = true;
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Level18.prototype, "Sharp1", void 0);
    __decorate([
        property(cc.Node)
    ], Level18.prototype, "Meat1", void 0);
    Level18 = __decorate([
        ccclass
    ], Level18);
    return Level18;
}(LevelBase_1.default));
exports.default = Level18;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxOC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QyxrQ0FBNkI7QUFDN0IseUNBQW9DO0FBRTlCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVM7SUFEOUM7UUFBQSxxRUFvSEM7UUFoSEcsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUN0QixlQUFTLEdBQVUsSUFBSSxDQUFBO1FBR3ZCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFDckIsZ0JBQVUsR0FBWSxLQUFLLENBQUE7O0lBMkcvQixDQUFDO0lBekdHLDBCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGVBQUssQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFSywwQkFBUSxHQUFkOzs7O2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNsRSxJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTt3QkFDdkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO3dCQUNiLHNCQUFNO3FCQUNUO2lCQUNKO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFL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QU87T0FDYSxPQUFPLENBbUgzQjtJQUFELGNBQUM7Q0FuSEQsQUFtSEMsQ0FuSG9DLG1CQUFTLEdBbUg3QztrQkFuSG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vLi4vTW9kL1V0aWxpdHlcIjtcclxuaW1wb3J0IFNoYXJwIGZyb20gXCIuLi9TaGFycFwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuL0xldmVsQmFzZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsMTggZXh0ZW5kcyBMZXZlbEJhc2Uge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU2hhcnAxOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgU2hhcnAxQ3JsOiBTaGFycCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE1lYXQxOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgTWVhdERyb3BlZDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5TaGFycDFDcmwgPSB0aGlzLlNoYXJwMS5nZXRDb21wb25lbnQoU2hhcnApXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUNCKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZUNCKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0dhbWVPdmVyICYmIHRoaXMuU2hhcnAxLmlzVmFsaWQgJiYgdGhpcy5tZWF0Tm9kZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChVdGlsaXR5LmdldFdvcmxkRGlzKHRoaXMuU2hhcnAxLCB0aGlzLm1lYXROb2RlKSA8PSA1MCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZWF0Tm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pc0dhbWVPdmVyICYmIHRoaXMuU2hhcnAuaXNWYWxpZCAmJiB0aGlzLk1lYXQxLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5TaGFycCwgdGhpcy5NZWF0MSkgPD0gNTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2hhcnAucGF1c2VBbGxBY3Rpb25zKClcclxuICAgICAgICAgICAgICAgIHRoaXMuU2hhcnBDcmwuYW5pQ3JsLnBsYXlBbmltYXRpb25CeU5hbWUoMylcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5TaGFycC5yZXN1bWVBbGxBY3Rpb25zKCkgfSwgMC41KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5NZWF0MS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyB0cmlnZ2VyMDAoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMylcclxuICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg0KVxyXG4gICAgICAgIGlmICh0aGlzLmdldE5lZWRsZUNybEJ5SWQoMykuc3dpdGNoU3RhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoNClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5nZXROZWVkbGVDcmxCeUlkKDQpLnN3aXRjaFN0YXRlID4gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg1KVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg2KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjEwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldE5lZWRsZUNybEJ5SWQoMikuc3dpdGNoU3RhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCA9PSA0ICYmIHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgzKS5zd2l0Y2hTdGF0ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIyMCgpIHtcclxuICAgICAgICBpZiAodGhpcy5NZWF0MS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuTWVhdERyb3BlZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5NZWF0MS5ydW5BY3Rpb24oY2MubW92ZUJ5KDEsIGNjLnYyKDAsIC0xNzApKSlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldE5lZWRsZUNybEJ5SWQoMSkuc3dpdGNoU3RhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCA9PSA0ICYmIHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgzKS5zd2l0Y2hTdGF0ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDQgJiYgdGhpcy5nZXROZWVkbGVDcmxCeUlkKDMpLnN3aXRjaFN0YXRlID4gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjMwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDQpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLlNoYXJwMS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoYXJwQ3JsLmFuaUNybC5wbGF5QW5pbWF0aW9uQnlOYW1lKDMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuU2hhcnBDcmwuYW5pQ3JsLnBsYXlBbmltYXRpb25CeU5hbWUoMCkgfSwgMC41KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGFycDEuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCA9PSA0ICYmIHRoaXMuTWVhdERyb3BlZCAmJiB0aGlzLk1lYXQxLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgyKVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjQwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDQpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNSlcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNilcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuU2hhcnAxLmlzVmFsaWQgJiYgdGhpcy5TaGFycDFDcmwucG9pbnRJbmRleCA9PSA0KSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnAxQ3JsLm1vdmVUb1BvaW50KDUpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gNCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19