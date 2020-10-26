
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level13.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a16aPGoMJGP5aStsHFy2jx', 'Level13');
// Scripts/Crl/Level/Level13.ts

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
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level13 = /** @class */ (function (_super) {
    __extends(Level13, _super);
    function Level13() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MainCamera = null;
        _this.FireNode1 = null;
        _this.FireNode2 = null;
        _this.FireNode3 = null;
        _this.FireNode4 = null;
        _this.WaterNode = null;
        _this.gameStarted = false;
        _this.movetoScene2 = false;
        _this.movetoDes = false;
        return _this;
    }
    Level13.prototype.onEnable = function () {
        this.schedule(this.updateCB);
    };
    Level13.prototype.updateCB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var a1, a2, a3, sq, i, f, i, f, i, f;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                        if (this.meatNode.isValid && this.meatNode.y <= -326) {
                            this.loseCB();
                            return [2 /*return*/];
                        }
                        if (!this.isGameOver && this.meatNode.isValid) {
                            for (i = 0; i < this.FireNode2.childrenCount; i++) {
                                f = this.FireNode2.children[i];
                                if (f.name == 'yxz_dj6_1')
                                    continue;
                                if (Utility_1.default.getWorldDis(this.meatNode, f) <= 55) {
                                    this.loseCB();
                                    return [2 /*return*/];
                                }
                            }
                            for (i = 0; i < this.FireNode3.childrenCount; i++) {
                                f = this.FireNode3.children[i];
                                if (f.name == 'yxz_dj6_1')
                                    continue;
                                if (Utility_1.default.getWorldDis(this.meatNode, f) <= 55) {
                                    this.loseCB();
                                    return [2 /*return*/];
                                }
                            }
                            for (i = 0; i < this.FireNode4.childrenCount; i++) {
                                f = this.FireNode4.children[i];
                                if (f.name == 'yxz_dj6_1')
                                    continue;
                                if (Utility_1.default.getWorldDis(this.meatNode, f) <= 55) {
                                    this.loseCB();
                                    return [2 /*return*/];
                                }
                            }
                        }
                        if (!(this.getNeedleCrlById(0).switchState > 0 &&
                            this.getNeedleCrlById(1).switchState > 0 &&
                            this.getNeedleCrlById(2).switchState > 0 && !this.movetoScene2)) return [3 /*break*/, 3];
                        this.canTouch = false;
                        this.movetoScene2 = true;
                        this.MainCamera.runAction(cc.moveBy(3, cc.v2(750, 0)));
                        return [4 /*yield*/, this.playerCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 2:
                        _a.sent();
                        this.canTouch = true;
                        _a.label = 3;
                    case 3:
                        if (!(this.getNeedleCrlById(3).switchState > 0 && this.getNeedleCrlById(5).switchState == 2 && !this.movetoDes)) return [3 /*break*/, 8];
                        this.canTouch = false;
                        this.movetoDes = true;
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(3)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Level13.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.getNeedleCrlById(1).switchState == 0) {
                    this.scheduleOnce(function () {
                        _this.loseCB();
                    }, 3);
                }
                else {
                    this.canTouch = true;
                }
                return [2 /*return*/];
            });
        });
    };
    Level13.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.scheduleOnce(function () {
                    _this.FireNode1.destroy();
                    _this.WaterNode.destroy();
                    _this.canTouch = true;
                }, 2);
                return [2 /*return*/];
            });
        });
    };
    Level13.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    Level13.prototype.trigger30 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    Level13.prototype.trigger40 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                if (this.node.getChildByName('FireNode4').getChildByName('yxz_dj6_1'))
                    this.node.getChildByName('FireNode4').getChildByName('yxz_dj6_1').destroy();
                return [2 /*return*/];
            });
        });
    };
    Level13.prototype.trigger50 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                if (this.node.getChildByName('FireNode4').getChildByName('yxz_dj6_1'))
                    this.node.getChildByName('FireNode4').getChildByName('yxz_dj6_1').destroy();
                return [2 /*return*/];
            });
        });
    };
    Level13.prototype.trigger51 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    Level13.prototype.trigger60 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                this.node.getChildByName('FireNode2').getChildByName('yxz_dj6_1').destroy();
                this.node.getChildByName('FireNode3').getChildByName('yxz_dj6_1').destroy();
                return [2 /*return*/];
            });
        });
    };
    Level13.prototype.trigger70 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Level13.prototype, "MainCamera", void 0);
    __decorate([
        property(cc.Node)
    ], Level13.prototype, "FireNode1", void 0);
    __decorate([
        property(cc.Node)
    ], Level13.prototype, "FireNode2", void 0);
    __decorate([
        property(cc.Node)
    ], Level13.prototype, "FireNode3", void 0);
    __decorate([
        property(cc.Node)
    ], Level13.prototype, "FireNode4", void 0);
    __decorate([
        property(cc.Node)
    ], Level13.prototype, "WaterNode", void 0);
    Level13 = __decorate([
        ccclass
    ], Level13);
    return Level13;
}(LevelBase_1.default));
exports.default = Level13;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDZDQUF3QztBQUN4Qyx5Q0FBb0M7QUFFOUIsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFxQywyQkFBUztJQUQ5QztRQUFBLHFFQXVJQztRQW5JRyxnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUcxQixlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsaUJBQVcsR0FBWSxLQUFLLENBQUE7UUFFNUIsa0JBQVksR0FBWSxLQUFLLENBQUE7UUFDN0IsZUFBUyxHQUFZLEtBQUssQ0FBQTs7SUFtSDlCLENBQUM7SUFqSEcsMEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFSywwQkFBUSxHQUFkOzs7Ozs7O3dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFOzRCQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTs0QkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7NEJBQ25CLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBOzRCQUNoQyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdB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QUFDLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBOzs7O0tBQ2xGO0lBQ0ssMkJBQVMsR0FBZjs7O2dCQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7O0tBQ3ZCO0lBQ0ssMkJBQVMsR0FBZjs7O2dCQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2dCQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTs7OztLQUM5RTtJQUNLLDJCQUFTLEdBQWY7OztnQkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7OztLQUN2QjtJQWxJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQWRSLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FzSTNCO0lBQUQsY0FBQztDQXRJRCxBQXNJQyxDQXRJb0MsbUJBQVMsR0FzSTdDO2tCQXRJb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vLi4vTW9kL1V0aWxpdHlcIjtcclxuaW1wb3J0IExldmVsQmFzZSBmcm9tIFwiLi9MZXZlbEJhc2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbDEzIGV4dGVuZHMgTGV2ZWxCYXNlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE1haW5DYW1lcmE6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBGaXJlTm9kZTE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEZpcmVOb2RlMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRmlyZU5vZGUzOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBGaXJlTm9kZTQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFdhdGVyTm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBnYW1lU3RhcnRlZDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgbW92ZXRvU2NlbmUyOiBib29sZWFuID0gZmFsc2VcclxuICAgIG1vdmV0b0RlczogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUNCKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZUNCKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5nYW1lU3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhcnRlZCA9IHRydWVcclxuICAgICAgICAgICAgbGV0IGExID0gY2MubW92ZUJ5KDMsIGNjLnYyKDc1MCwgMCkpXHJcbiAgICAgICAgICAgIGxldCBhMiA9IGNjLm1vdmVCeSgzLCBjYy52MigtNzUwLCAwKSlcclxuICAgICAgICAgICAgbGV0IGEzID0gY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IHNxID0gY2Muc2VxdWVuY2UoYTEsIGEyLCBhMylcclxuICAgICAgICAgICAgdGhpcy5NYWluQ2FtZXJhLnJ1bkFjdGlvbihzcSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1lYXROb2RlLmlzVmFsaWQgJiYgdGhpcy5tZWF0Tm9kZS55IDw9IC0zMjYpIHtcclxuICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc0dhbWVPdmVyICYmIHRoaXMubWVhdE5vZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRmlyZU5vZGUyLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGYgPSB0aGlzLkZpcmVOb2RlMi5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgaWYgKGYubmFtZSA9PSAneXh6X2RqNl8xJykgY29udGludWVcclxuICAgICAgICAgICAgICAgIGlmIChVdGlsaXR5LmdldFdvcmxkRGlzKHRoaXMubWVhdE5vZGUsIGYpIDw9IDU1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5GaXJlTm9kZTMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZiA9IHRoaXMuRmlyZU5vZGUzLmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgICAgICBpZiAoZi5uYW1lID09ICd5eHpfZGo2XzEnKSBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5tZWF0Tm9kZSwgZikgPD0gNTUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvc2VDQigpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkZpcmVOb2RlNC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBmID0gdGhpcy5GaXJlTm9kZTQuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgICAgIGlmIChmLm5hbWUgPT0gJ3l4el9kajZfMScpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICBpZiAoVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLm1lYXROb2RlLCBmKSA8PSA1NSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgwKS5zd2l0Y2hTdGF0ZSA+IDAgJiZcclxuICAgICAgICAgICAgdGhpcy5nZXROZWVkbGVDcmxCeUlkKDEpLnN3aXRjaFN0YXRlID4gMCAmJlxyXG4gICAgICAgICAgICB0aGlzLmdldE5lZWRsZUNybEJ5SWQoMikuc3dpdGNoU3RhdGUgPiAwICYmICF0aGlzLm1vdmV0b1NjZW5lMikge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5tb3ZldG9TY2VuZTIgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuTWFpbkNhbWVyYS5ydW5BY3Rpb24oY2MubW92ZUJ5KDMsIGNjLnYyKDc1MCwgMCkpKVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgzKS5zd2l0Y2hTdGF0ZSA+IDAgJiYgdGhpcy5nZXROZWVkbGVDcmxCeUlkKDUpLnN3aXRjaFN0YXRlID09IDIgJiYgIXRoaXMubW92ZXRvRGVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLm1vdmV0b0RlcyA9IHRydWVcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMylcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdHJpZ2dlcjAwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldE5lZWRsZUNybEJ5SWQoMSkuc3dpdGNoU3RhdGUgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvc2VDQigpXHJcbiAgICAgICAgICAgIH0sIDMpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMTAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkZpcmVOb2RlMS5kZXN0cm95KClcclxuICAgICAgICAgICAgdGhpcy5XYXRlck5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIyMCgpIHtcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjMwKCkge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyNDAoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICBpZiAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdGaXJlTm9kZTQnKS5nZXRDaGlsZEJ5TmFtZSgneXh6X2RqNl8xJykpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnRmlyZU5vZGU0JykuZ2V0Q2hpbGRCeU5hbWUoJ3l4el9kajZfMScpLmRlc3Ryb3koKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjUwKCkge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnRmlyZU5vZGU0JykuZ2V0Q2hpbGRCeU5hbWUoJ3l4el9kajZfMScpKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0ZpcmVOb2RlNCcpLmdldENoaWxkQnlOYW1lKCd5eHpfZGo2XzEnKS5kZXN0cm95KClcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXI1MSgpIHtcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjYwKCkge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdGaXJlTm9kZTInKS5nZXRDaGlsZEJ5TmFtZSgneXh6X2RqNl8xJykuZGVzdHJveSgpXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdGaXJlTm9kZTMnKS5nZXRDaGlsZEJ5TmFtZSgneXh6X2RqNl8xJykuZGVzdHJveSgpXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyNzAoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgIH1cclxufVxyXG4iXX0=