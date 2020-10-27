
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
        this.MainCamera = cc.find('Canvas/Main Camera');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDZDQUF3QztBQUN4Qyx5Q0FBb0M7QUFFOUIsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFxQywyQkFBUztJQUQ5QztRQUFBLHFFQXVJQztRQXBJRyxnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUcxQixlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsaUJBQVcsR0FBWSxLQUFLLENBQUE7UUFFNUIsa0JBQVksR0FBWSxLQUFLLENBQUE7UUFDN0IsZUFBUyxHQUFZLEtBQUssQ0FBQTs7SUFvSDlCLENBQUM7SUFsSEcsMEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFSywwQkFBUSxHQUFkOzs7Ozs7O3dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFOzRCQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTs0QkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7NEJBQ25CLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBOzRCQUNoQyxFQUFF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Y0FBYyxDQUFDLFdBQVcsQ0FBQztvQkFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBOzs7O0tBQ2xGO0lBQ0ssMkJBQVMsR0FBZjs7O2dCQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7O0tBQ3ZCO0lBQ0ssMkJBQVMsR0FBZjs7O2dCQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2dCQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTs7OztLQUM5RTtJQUNLLDJCQUFTLEdBQWY7OztnQkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7OztLQUN2QjtJQWhJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFiUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBc0kzQjtJQUFELGNBQUM7Q0F0SUQsQUFzSUMsQ0F0SW9DLG1CQUFTLEdBc0k3QztrQkF0SW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uLy4uL01vZC9VdGlsaXR5XCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwxMyBleHRlbmRzIExldmVsQmFzZSB7XHJcblxyXG4gICAgTWFpbkNhbWVyYTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEZpcmVOb2RlMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRmlyZU5vZGUyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBGaXJlTm9kZTM6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEZpcmVOb2RlNDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgV2F0ZXJOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIGdhbWVTdGFydGVkOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBtb3ZldG9TY2VuZTI6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgbW92ZXRvRGVzOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLk1haW5DYW1lcmEgPSBjYy5maW5kKCdDYW52YXMvTWFpbiBDYW1lcmEnKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVDQilcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVDQigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGxldCBhMSA9IGNjLm1vdmVCeSgzLCBjYy52Mig3NTAsIDApKVxyXG4gICAgICAgICAgICBsZXQgYTIgPSBjYy5tb3ZlQnkoMywgY2MudjIoLTc1MCwgMCkpXHJcbiAgICAgICAgICAgIGxldCBhMyA9IGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxldCBzcSA9IGNjLnNlcXVlbmNlKGExLCBhMiwgYTMpXHJcbiAgICAgICAgICAgIHRoaXMuTWFpbkNhbWVyYS5ydW5BY3Rpb24oc3EpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5tZWF0Tm9kZS5pc1ZhbGlkICYmIHRoaXMubWVhdE5vZGUueSA8PSAtMzI2KSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNHYW1lT3ZlciAmJiB0aGlzLm1lYXROb2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkZpcmVOb2RlMi5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBmID0gdGhpcy5GaXJlTm9kZTIuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgICAgIGlmIChmLm5hbWUgPT0gJ3l4el9kajZfMScpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICBpZiAoVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLm1lYXROb2RlLCBmKSA8PSA1NSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRmlyZU5vZGUzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGYgPSB0aGlzLkZpcmVOb2RlMy5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgaWYgKGYubmFtZSA9PSAneXh6X2RqNl8xJykgY29udGludWVcclxuICAgICAgICAgICAgICAgIGlmIChVdGlsaXR5LmdldFdvcmxkRGlzKHRoaXMubWVhdE5vZGUsIGYpIDw9IDU1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5GaXJlTm9kZTQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZiA9IHRoaXMuRmlyZU5vZGU0LmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgICAgICBpZiAoZi5uYW1lID09ICd5eHpfZGo2XzEnKSBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5tZWF0Tm9kZSwgZikgPD0gNTUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvc2VDQigpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldE5lZWRsZUNybEJ5SWQoMCkuc3dpdGNoU3RhdGUgPiAwICYmXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgxKS5zd2l0Y2hTdGF0ZSA+IDAgJiZcclxuICAgICAgICAgICAgdGhpcy5nZXROZWVkbGVDcmxCeUlkKDIpLnN3aXRjaFN0YXRlID4gMCAmJiAhdGhpcy5tb3ZldG9TY2VuZTIpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMubW92ZXRvU2NlbmUyID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLk1haW5DYW1lcmEucnVuQWN0aW9uKGNjLm1vdmVCeSgzLCBjYy52Mig3NTAsIDApKSlcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMClcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldE5lZWRsZUNybEJ5SWQoMykuc3dpdGNoU3RhdGUgPiAwICYmIHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCg1KS5zd2l0Y2hTdGF0ZSA9PSAyICYmICF0aGlzLm1vdmV0b0Rlcykge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5tb3ZldG9EZXMgPSB0cnVlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDMpXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHRyaWdnZXIwMCgpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXROZWVkbGVDcmxCeUlkKDEpLnN3aXRjaFN0YXRlID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgICAgICB9LCAzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjEwKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5GaXJlTm9kZTEuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIHRoaXMuV2F0ZXJOb2RlLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMjAoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIzMCgpIHtcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjQwKCkge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnRmlyZU5vZGU0JykuZ2V0Q2hpbGRCeU5hbWUoJ3l4el9kajZfMScpKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0ZpcmVOb2RlNCcpLmdldENoaWxkQnlOYW1lKCd5eHpfZGo2XzEnKS5kZXN0cm95KClcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXI1MCgpIHtcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0ZpcmVOb2RlNCcpLmdldENoaWxkQnlOYW1lKCd5eHpfZGo2XzEnKSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdGaXJlTm9kZTQnKS5nZXRDaGlsZEJ5TmFtZSgneXh6X2RqNl8xJykuZGVzdHJveSgpXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyNTEoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXI2MCgpIHtcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnRmlyZU5vZGUyJykuZ2V0Q2hpbGRCeU5hbWUoJ3l4el9kajZfMScpLmRlc3Ryb3koKVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnRmlyZU5vZGUzJykuZ2V0Q2hpbGRCeU5hbWUoJ3l4el9kajZfMScpLmRlc3Ryb3koKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjcwKCkge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbn1cclxuIl19