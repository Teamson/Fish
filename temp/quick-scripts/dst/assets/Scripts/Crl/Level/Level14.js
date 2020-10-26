
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level14.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3297a3AzmpBeYJK0g3Pry72', 'Level14');
// Scripts/Crl/Level/Level14.ts

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
var Level14 = /** @class */ (function (_super) {
    __extends(Level14, _super);
    function Level14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Sharp1 = null;
        _this.Sharp1Crl = null;
        _this.FireNode1 = null;
        _this.Poison = null;
        return _this;
    }
    Level14.prototype.onEnable = function () {
        this.Sharp1Crl = this.Sharp1.getComponent(Sharp_1.default);
        this.schedule(this.updateCB);
    };
    Level14.prototype.updateCB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, p, i, p, i, p;
            return __generator(this, function (_a) {
                if (this.Sharp1.isValid) {
                    for (i = 0; i < this.Poison.childrenCount; i++) {
                        p = this.Poison.children[i];
                        if (Utility_1.default.getWorldDis(p, this.Sharp1) <= 20) {
                            this.Sharp1.destroy();
                            this.Poison.destroy();
                            break;
                        }
                    }
                }
                if (this.Sharp.isValid) {
                    for (i = 0; i < this.FireNode1.childrenCount; i++) {
                        p = this.FireNode1.children[i];
                        if (Utility_1.default.getWorldDis(p, this.Sharp) <= 20) {
                            this.Sharp.destroy();
                            break;
                        }
                    }
                }
                if (!this.isGameOver) {
                    for (i = 0; i < this.FireNode1.childrenCount; i++) {
                        p = this.FireNode1.children[i];
                        if (Utility_1.default.getWorldDis(p, this.playerNode) <= 50) {
                            this.loseCB();
                            break;
                        }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    Level14.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.scheduleOnce(function () {
                    _this.canTouch = true;
                }, 2);
                return [2 /*return*/];
            });
        });
    };
    Level14.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.Sharp1.isValid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.Sharp1Crl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.canTouch = true;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Level14.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.getNeedleCrlById(3).switchState == 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 1:
                        _a.sent();
                        this.loseCB();
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 4:
                        _a.sent();
                        if (!(this.getNeedleCrlById(5).switchState > 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(5)];
                    case 5:
                        _a.sent();
                        this.loseCB();
                        return [2 /*return*/];
                    case 6:
                        if (!(this.getNeedleCrlById(4).switchState > 0)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(3)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        this.canTouch = true;
                        _a.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    Level14.prototype.trigger30 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.FireNode1.children[this.FireNode1.childrenCount - 1].destroy();
                this.scheduleOnce(function () { _this.canTouch = true; }, 1);
                return [2 /*return*/];
            });
        });
    };
    Level14.prototype.trigger40 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.Sharp.isValid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(3)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.canTouch = true;
                        _a.label = 3;
                    case 3:
                        if (!(this.playerCrl.pointIndex == 2)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(3)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Level14.prototype.trigger50 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Level14.prototype, "Sharp1", void 0);
    __decorate([
        property(cc.Node)
    ], Level14.prototype, "FireNode1", void 0);
    __decorate([
        property(cc.Node)
    ], Level14.prototype, "Poison", void 0);
    Level14 = __decorate([
        ccclass
    ], Level14);
    return Level14;
}(LevelBase_1.default));
exports.default = Level14;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QyxrQ0FBNkI7QUFDN0IseUNBQW9DO0FBRTlCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVM7SUFEOUM7UUFBQSxxRUF1R0M7UUFuR0csWUFBTSxHQUFZLElBQUksQ0FBQTtRQUN0QixlQUFTLEdBQVUsSUFBSSxDQUFBO1FBR3ZCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsWUFBTSxHQUFZLElBQUksQ0FBQTs7SUE2RjFCLENBQUM7SUEzRkcsMEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVLLDBCQUFRLEdBQWQ7Ozs7Z0JBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtvQkFDckIsS0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDNUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUMvQixJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFOzRCQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBOzRCQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBOzRCQUNyQixNQUFLO3lCQUNSO3FCQUNKO2lCQUNKO2dCQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLEtBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQy9DLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDbEMsSUFBSSxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRTs0QkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQTs0QkFDcEIsTUFBSzt5QkFDUjtxQkFDSjtpQkFDSjtnQkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbEIsS0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDL0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUNsQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFOzRCQUMvQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7NEJBQ2IsTUFBSzt5QkFDUjtxQkFDSjtpQkFDSjs7OztLQUVKO0lBRUssMkJBQVMsR0FBZjs7OztnQkFDSSxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2dCQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Ozs7S0FDUjtJQUNLLDJCQUFTLEdBQWY7Ozs7OzZCQUNRLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFuQix3QkFBbUI7d0JBQ25CLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs7O3dCQUVuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7Ozs7O0tBRTNCO0lBQ0ssMkJBQVMsR0FBZjs7Ozs7NkJBQ1EsQ0FBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQSxFQUF6Qyx3QkFBeUM7d0JBQ3pDLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO3dCQUNiLHNCQUFNOzRCQUVOLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBOzZCQUMvQixDQUFBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFBLEVBQXhDLHdCQUF3Qzt3QkFDeEMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUNuQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7d0JBQ2Isc0JBQU07OzZCQUVELENBQUEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUEsRUFBeEMsd0JBQXdDO3dCQUM3QyxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7d0JBQ25DLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs7O3dCQUVuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7Ozs7O0tBRy9CO0lBQ0ssMkJBQVMsR0FBZjs7OztnQkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtnQkFDbkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFRLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBOzs7O0tBQ3ZEO0lBQ0ssMkJBQVMsR0FBZjs7Ozs7NkJBQ1EsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQWxCLHdCQUFrQjt3QkFDbEIscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFsQyxTQUFrQyxDQUFBOzs7d0JBRWxDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7NkJBR3BCLENBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFBLEVBQTlCLHdCQUE4Qjt3QkFDOUIscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUNuQyxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7Ozs7OztLQUUxQztJQUNLLDJCQUFTLEdBQWY7OztnQkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7OztLQUN2QjtJQWpHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBSXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQVRMLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FzRzNCO0lBQUQsY0FBQztDQXRHRCxBQXNHQyxDQXRHb0MsbUJBQVMsR0FzRzdDO2tCQXRHb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgU2hhcnAgZnJvbSBcIi4uL1NoYXJwXCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwxNCBleHRlbmRzIExldmVsQmFzZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTaGFycDE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBTaGFycDFDcmw6IFNoYXJwID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRmlyZU5vZGUxOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBQb2lzb246IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5TaGFycDFDcmwgPSB0aGlzLlNoYXJwMS5nZXRDb21wb25lbnQoU2hhcnApXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUNCKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZUNCKCkge1xyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwMS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5Qb2lzb24uY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcCA9IHRoaXMuUG9pc29uLmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgICAgICBpZiAoVXRpbGl0eS5nZXRXb3JsZERpcyhwLCB0aGlzLlNoYXJwMSkgPD0gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlNoYXJwMS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlBvaXNvbi5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkZpcmVOb2RlMS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBwID0gdGhpcy5GaXJlTm9kZTEuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgICAgIGlmIChVdGlsaXR5LmdldFdvcmxkRGlzKHAsIHRoaXMuU2hhcnApIDw9IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TaGFycC5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNHYW1lT3Zlcikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRmlyZU5vZGUxLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSB0aGlzLkZpcmVOb2RlMS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXMocCwgdGhpcy5wbGF5ZXJOb2RlKSA8PSA1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB0cmlnZ2VyMDAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMTAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuU2hhcnAxLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycDFDcmwubW92ZVRvUG9pbnQoMClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIyMCgpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXROZWVkbGVDcmxCeUlkKDMpLnN3aXRjaFN0YXRlID09IDApIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgyKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXROZWVkbGVDcmxCeUlkKDUpLnN3aXRjaFN0YXRlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNSlcclxuICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCg0KS5zd2l0Y2hTdGF0ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDMpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg0KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIzMCgpIHtcclxuICAgICAgICB0aGlzLkZpcmVOb2RlMS5jaGlsZHJlblt0aGlzLkZpcmVOb2RlMS5jaGlsZHJlbkNvdW50IC0gMV0uZGVzdHJveSgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLmNhblRvdWNoID0gdHJ1ZSB9LCAxKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjQwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDMpXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjUwKCkge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==