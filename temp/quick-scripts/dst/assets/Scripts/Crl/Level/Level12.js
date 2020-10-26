
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level12.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    ], Level12.prototype, "MainCamera", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtDQUE2QjtBQUM3Qix5Q0FBb0M7QUFFOUIsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFxQywyQkFBUztJQUQ5QztRQUFBLHFFQTBHQztRQXRHRyxnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUcxQixjQUFRLEdBQVksSUFBSSxDQUFBO1FBQ3hCLGlCQUFXLEdBQVUsSUFBSSxDQUFBO1FBR3pCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixpQkFBVyxHQUFZLEtBQUssQ0FBQTs7SUEyRmhDLENBQUM7SUF6RkcsMEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUE7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVLLDBCQUFRLEdBQWQ7Ozs7Ozs7d0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7NEJBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBOzRCQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTs0QkFDbkIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBOzRCQUNwQyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFD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QUNRLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUF0Qix3QkFBc0I7d0JBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUM7NEJBQ2QsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO3dCQUNqQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7OzRCQUVMLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUE7O3dCQUFwQyxTQUFvQyxDQUFBOzs7Ozs7S0FFM0M7SUFDSywyQkFBUyxHQUFmOzs7O2dCQUNJLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtvQkFDeEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Z0JBQ3hCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTs7OztLQUNSO0lBcEdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUl4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFaUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBeUczQjtJQUFELGNBQUM7Q0F6R0QsQUF5R0MsQ0F6R29DLG1CQUFTLEdBeUc3QztrQkF6R29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hhcnAgZnJvbSBcIi4uL1NoYXJwXCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwxMiBleHRlbmRzIExldmVsQmFzZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBNYWluQ2FtZXJhOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU2hhcnBSZWQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBTaGFycFJlZENybDogU2hhcnAgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBFbGVjdHJpYzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRWxlY3RyaWMxOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIGdhbWVTdGFydGVkOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLlNoYXJwUmVkQ3JsID0gdGhpcy5TaGFycFJlZC5nZXRDb21wb25lbnQoU2hhcnApXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUNCKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZUNCKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5nYW1lU3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhcnRlZCA9IHRydWVcclxuICAgICAgICAgICAgbGV0IGExID0gY2MubW92ZUJ5KDUsIGNjLnYyKDc1MCAqIDIsIDApKVxyXG4gICAgICAgICAgICBsZXQgYTIgPSBjYy5tb3ZlQnkoNSwgY2MudjIoLTc1MCAqIDIsIDApKVxyXG4gICAgICAgICAgICBsZXQgYTMgPSBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsZXQgc3EgPSBjYy5zZXF1ZW5jZShhMSwgYTIsIGEzKVxyXG4gICAgICAgICAgICB0aGlzLk1haW5DYW1lcmEucnVuQWN0aW9uKHNxKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLlNoYXJwQ3JsLmlzTW92aW5nICYmIHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCA9PSAyICYmIHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgyKS5zd2l0Y2hTdGF0ZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoNClcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLlNoYXJwUmVkQ3JsLmlzTW92aW5nICYmIHRoaXMuU2hhcnBSZWRDcmwucG9pbnRJbmRleCA9PSAzICYmIHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgyKS5zd2l0Y2hTdGF0ZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBSZWRDcmwubW92ZVRvUG9pbnQoNSlcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdHJpZ2dlcjAwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDApXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDEpXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMClcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCA9PSA0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldE5lZWRsZUNybEJ5SWQoMikuc3dpdGNoU3RhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg2KVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuTWFpbkNhbWVyYS5ydW5BY3Rpb24oY2MubW92ZUJ5KDIsIGNjLnYyKDc1MCwgMCkpKVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNilcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjEwKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjIwKCkge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMzAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuRWxlY3RyaWMuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvc2VDQigpXHJcbiAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5NYWluQ2FtZXJhLnJ1bkFjdGlvbihjYy5tb3ZlQnkoMSwgY2MudjIoNzUwLCAwKSkpXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDgpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjQwKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5FbGVjdHJpYy5kZXN0cm95KClcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICB9LCAyKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjUwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLkVsZWN0cmljMS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgfSwgMilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg5KVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxMClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyNjAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkVsZWN0cmljMS5kZXN0cm95KClcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICB9LCAyKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=