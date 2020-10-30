
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/ExportLibs/AutoScroll');
require('./assets/ExportLibs/ExportCrl');
require('./assets/ExportLibs/ExportHttpUtils');
require('./assets/ExportLibs/ExportUtils');
require('./assets/ExportLibs/View/DrawUI');
require('./assets/ExportLibs/View/FinishGameUI');
require('./assets/ExportLibs/View/FriendGameUI');
require('./assets/ExportLibs/View/FullGameUI');
require('./assets/ExportLibs/View/RecommendUI');
require('./assets/ExportLibs/View/ScrollUI');
require('./assets/Scripts/Crl/GameLogic');
require('./assets/Scripts/Crl/GuideFinger');
require('./assets/Scripts/Crl/Level/Level1');
require('./assets/Scripts/Crl/Level/Level10');
require('./assets/Scripts/Crl/Level/Level11');
require('./assets/Scripts/Crl/Level/Level12');
require('./assets/Scripts/Crl/Level/Level13');
require('./assets/Scripts/Crl/Level/Level14');
require('./assets/Scripts/Crl/Level/Level15');
require('./assets/Scripts/Crl/Level/Level16');
require('./assets/Scripts/Crl/Level/Level17');
require('./assets/Scripts/Crl/Level/Level18');
require('./assets/Scripts/Crl/Level/Level19');
require('./assets/Scripts/Crl/Level/Level2');
require('./assets/Scripts/Crl/Level/Level20');
require('./assets/Scripts/Crl/Level/Level3');
require('./assets/Scripts/Crl/Level/Level4');
require('./assets/Scripts/Crl/Level/Level5');
require('./assets/Scripts/Crl/Level/Level6');
require('./assets/Scripts/Crl/Level/Level7');
require('./assets/Scripts/Crl/Level/Level8');
require('./assets/Scripts/Crl/Level/Level9');
require('./assets/Scripts/Crl/Level/LevelBase');
require('./assets/Scripts/Crl/Player');
require('./assets/Scripts/Crl/PlayerAni');
require('./assets/Scripts/Crl/Prop/Fan');
require('./assets/Scripts/Crl/Prop/HeadNode');
require('./assets/Scripts/Crl/Prop/Meat');
require('./assets/Scripts/Crl/Prop/Needle');
require('./assets/Scripts/Crl/Prop/Poison');
require('./assets/Scripts/Crl/Prop/RotateNeedle');
require('./assets/Scripts/Crl/Prop/SlideNeedle');
require('./assets/Scripts/Crl/Prop/Stone');
require('./assets/Scripts/Crl/Prop/ThreeNeedle');
require('./assets/Scripts/Crl/Sharp');
require('./assets/Scripts/Crl/SharpAni');
require('./assets/Scripts/Libs/PlayerDataMgr');
require('./assets/Scripts/Libs/ScaleLoop');
require('./assets/Scripts/Libs/TimeCountMgr');
require('./assets/Scripts/Libs/WxApi');
require('./assets/Scripts/Mod/AdMgr');
require('./assets/Scripts/Mod/HttpMgr');
require('./assets/Scripts/Mod/ShareMgr');
require('./assets/Scripts/Mod/SoundMgr');
require('./assets/Scripts/Mod/Utility');
require('./assets/Scripts/UI/DefeatUI');
require('./assets/Scripts/UI/FinishUI');
require('./assets/Scripts/UI/GameUI');
require('./assets/Scripts/UI/GetFishUI');
require('./assets/Scripts/UI/GetPowerUI');
require('./assets/Scripts/UI/GetTipsUI');
require('./assets/Scripts/UI/LoadingUI');
require('./assets/Scripts/UI/MadUI');
require('./assets/Scripts/UI/StartUI');
require('./assets/Scripts/UI/WeChatUI');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level20.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ae85SwytBIRK2i7E2oD2H9', 'Level20');
// Scripts/Crl/Level/Level20.ts

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
var Level20 = /** @class */ (function (_super) {
    __extends(Level20, _super);
    function Level20() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Saw = null;
        _this.Poison = null;
        _this.rotateNode = null;
        return _this;
    }
    Level20.prototype.onEnable = function () {
        this.sawAction();
        this.schedule(this.updateCB);
    };
    Level20.prototype.updateCB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, p;
            return __generator(this, function (_a) {
                if (!this.isGameOver) {
                    if (Utility_1.default.getWorldDis(this.playerNode, this.Saw) <= 100) {
                        this.loseCB();
                        return [2 /*return*/];
                    }
                    for (i = 0; i < this.Poison.childrenCount; i++) {
                        p = this.Poison.children[i];
                        if (Utility_1.default.getWorldDis(p, this.playerNode) <= 50) {
                            this.loseCB();
                            return [2 /*return*/];
                        }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    Level20.prototype.sawAction = function () {
        var a1 = cc.rotateBy(4.6, -960);
        var a3 = cc.delayTime(0.3);
        var a4 = cc.moveTo(2, cc.v2(0, 85));
        var a5 = cc.delayTime(0.3);
        var a6 = cc.moveTo(2, cc.v2(0, -55));
        var a7 = cc.sequence(a3, a4, a5, a6);
        var a9 = cc.spawn(a1, a7);
        this.Saw.runAction(cc.repeatForever(a9));
    };
    Level20.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level20.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 2)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(3)];
                    case 1:
                        _a.sent();
                        if (!this.playerCrl.gotMeat) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.loseCB();
                        return [2 /*return*/];
                    case 4:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level20.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(3)];
                    case 1:
                        _a.sent();
                        if (!this.playerCrl.gotMeat) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.loseCB();
                        return [2 /*return*/];
                    case 4:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level20.prototype.trigger30 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 1:
                        _a.sent();
                        if (!(this.getNeedleCrlById(0).switchState > 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 2:
                        _a.sent();
                        if (!(this.getNeedleCrlById(1).switchState > 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(3)];
                    case 3:
                        _a.sent();
                        if (!this.playerCrl.gotMeat) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        this.loseCB();
                        return [2 /*return*/];
                    case 6:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Level20.prototype, "Saw", void 0);
    __decorate([
        property(cc.Node)
    ], Level20.prototype, "Poison", void 0);
    __decorate([
        property(cc.Node)
    ], Level20.prototype, "rotateNode", void 0);
    Level20 = __decorate([
        ccclass
    ], Level20);
    return Level20;
}(LevelBase_1.default));
exports.default = Level20;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwyMC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4Qyx5Q0FBb0M7QUFFOUIsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFxQywyQkFBUztJQUQ5QztRQUFBLHFFQThGQztRQTFGRyxTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7O0lBc0Y5QixDQUFDO0lBcEZHLDBCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVLLDBCQUFRLEdBQWQ7Ozs7Z0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2xCLElBQUksaUJBQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFO3dCQUN2RCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7d0JBQ2Isc0JBQU07cUJBQ1Q7b0JBRUQsS0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDNUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUMvQixJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFOzRCQUMvQyxJQUFJ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QyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs2QkFDL0IsQ0FBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQSxFQUF4Qyx3QkFBd0M7d0JBQ3hDLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs2QkFDL0IsQ0FBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQSxFQUF4Qyx3QkFBd0M7d0JBQ3hDLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs2QkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQXRCLHdCQUFzQjt3QkFDdEIscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBOzs7d0JBRW5DLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTt3QkFDYixzQkFBTTs7d0JBTXRCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7OztLQUN2QjtJQXpGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNDO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQVBULE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0E2RjNCO0lBQUQsY0FBQztDQTdGRCxBQTZGQyxDQTdGb0MsbUJBQVMsR0E2RjdDO2tCQTdGb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuL0xldmVsQmFzZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsMjAgZXh0ZW5kcyBMZXZlbEJhc2Uge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU2F3OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBQb2lzb246IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJvdGF0ZU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5zYXdBY3Rpb24oKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVDQilcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVDQigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNHYW1lT3Zlcikge1xyXG4gICAgICAgICAgICBpZiAoVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLnBsYXllck5vZGUsIHRoaXMuU2F3KSA8PSAxMDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuUG9pc29uLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSB0aGlzLlBvaXNvbi5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXMocCwgdGhpcy5wbGF5ZXJOb2RlKSA8PSA1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNhd0FjdGlvbigpIHtcclxuICAgICAgICBsZXQgYTEgPSBjYy5yb3RhdGVCeSg0LjYsIC05NjApXHJcblxyXG4gICAgICAgIGxldCBhMyA9IGNjLmRlbGF5VGltZSgwLjMpXHJcbiAgICAgICAgbGV0IGE0ID0gY2MubW92ZVRvKDIsIGNjLnYyKDAsIDg1KSlcclxuICAgICAgICBsZXQgYTUgPSBjYy5kZWxheVRpbWUoMC4zKVxyXG4gICAgICAgIGxldCBhNiA9IGNjLm1vdmVUbygyLCBjYy52MigwLCAtNTUpKVxyXG4gICAgICAgIGxldCBhNyA9IGNjLnNlcXVlbmNlKGEzLCBhNCwgYTUsIGE2KVxyXG5cclxuICAgICAgICBsZXQgYTkgPSBjYy5zcGF3bihhMSwgYTcpXHJcbiAgICAgICAgdGhpcy5TYXcucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoYTkpKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHRyaWdnZXIwMCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMTAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgzKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmwuZ290TWVhdCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMjAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgzKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmwuZ290TWVhdCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjMwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgwKS5zd2l0Y2hTdGF0ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXROZWVkbGVDcmxCeUlkKDEpLnN3aXRjaFN0YXRlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDMpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JsLmdvdE1lYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNClcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvc2VDQigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Libs/WxApi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1422d0RQTFIsqDE3wK3oZ2e', 'WxApi');
// Scripts/Libs/WxApi.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var PlayerDataMgr_1 = require("./PlayerDataMgr");
var AdMgr_1 = require("../Mod/AdMgr");
var WxApi = /** @class */ (function () {
    function WxApi() {
    }
    //微信登录
    WxApi.LoginWx = function (cb) {
        if (cc.sys.platform !== cc.sys.WECHAT_GAME)
            return;
        var launchData = window["wx"].getLaunchOptionsSync();
        window["wx"].login({
            success: function (res) {
                if (res.code) {
                    console.log('res.code:', res.code);
                    if (cb) {
                        cb(res.code, launchData.query);
                    }
                }
            }
        });
    };
    //监听启动
    //Usually get fun(obj) obj.query
    WxApi.GetLaunchParam = function (fun) {
        var _this = this;
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            this.OnShowFun = fun;
            fun(this.GetLaunchPassVar());
            window["wx"].onShow(function (para) {
                //check onshow Fun
                if (_this.OnShowFun != null) {
                    _this.OnShowFun(para);
                }
                console.log("wx on show");
            });
        }
    };
    WxApi.GetLaunchPassVar = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            return window["wx"].getLaunchOptionsSync();
        }
        else {
            return null;
        }
    };
    WxApi.WxOnHide = function (fun) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].onHide(fun);
        }
    };
    WxApi.WxOffHide = function (fun) {
        if (fun && cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].offHide(fun);
        }
    };
    WxApi.WxOnShow = function (fun) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].onShow(fun);
        }
    };
    WxApi.WxOffShow = function (fun) {
        if (fun && cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].offShow(fun);
        }
    };
    //震动
    WxApi.DoVibrate = function (isShort) {
        if (isShort === void 0) { isShort = true; }
        if (cc.sys.platform === cc.sys.WECHAT_GAME && this.isVibrate) {
            if (isShort) {
                window["wx"].vibrateShort();
            }
            else {
                window["wx"].vibrateLong();
            }
        }
    };
    //系统提示
    WxApi.OpenAlert = function (msg, dur, icon) {
        if (dur === void 0) { dur = 2000; }
        if (icon === void 0) { icon = false; }
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].showToast({
                title: msg,
                duration: dur,
                mask: false,
                icon: icon ? 'success' : 'none',
            });
        }
    };
    //跳转
    WxApi.NavigateApp = function (appid, path, title, cancelCB, successCB) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            var self = this;
            window["wx"].navigateToMiniProgram({
                appId: appid,
                path: path,
                success: function (res) {
                    // 打开成功
                    console.log('打开成功');
                    successCB();
                },
                fail: function (res) {
                    // 打开失败
                    console.log('打开失败');
                    cancelCB();
                }
            });
        }
    };
    //预览图片
    WxApi.preViewImage = function (url) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].previewImage({
                current: url,
                urls: [url] // 需要预览的图片http链接列表
            });
        }
    };
    //阿拉丁统计事件
    WxApi.aldEvent = function (str) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME)
            window["wx"].aldSendEvent(str);
    };
    //计算分享次数
    WxApi.calculateShareNumber = function () {
        if (localStorage.getItem('lastDate')) {
            if (new Date().getDate() == parseInt(localStorage.getItem('lastDate'))) {
                //同一天
                this.front_share_number = parseInt(localStorage.getItem('front_share_number'));
            }
            else {
                //新的一天
                this.front_share_number = ExportUtils_1.default.instance.exportCfg.front_share_number;
            }
        }
        else {
            //新的一天
            this.front_share_number = ExportUtils_1.default.instance.exportCfg.front_share_number;
        }
        if (!this.front_share_number)
            this.front_share_number = 0;
        console.log('this.front_share_number:', this.front_share_number);
    };
    //误触控制
    WxApi.fixBtnTouchPos = function (btn, startPosY, endPosY, target, cb) {
        if (this.isValidBanner()) {
            btn.y = startPosY;
            target.scheduleOnce(function () { AdMgr_1.default.instance.showBanner(); }, ExportUtils_1.default.instance.exportCfg.front_banner_appear / 1000);
            target.scheduleOnce(function () {
                btn.y = endPosY;
                cb && cb();
            }, ExportUtils_1.default.instance.exportCfg.front_button_up / 1000);
        }
        else {
            AdMgr_1.default.instance.showBanner();
            cb && cb();
        }
    };
    WxApi.isValidBanner = function () {
        return PlayerDataMgr_1.default.getPlayerData().grade >= ExportUtils_1.default.instance.exportCfg.front_pass_gate && ExportUtils_1.default.instance.exportCfg.is_allow_area == 1
            && this.allowScene();
    };
    WxApi.allowScene = function () {
        var s = ExportUtils_1.default.instance.exportCfg.front_wuchu_scene.toString();
        if (s.search('|') == -1) {
            var sInt = parseInt(s);
            return sInt == WxApi.sceneId;
        }
        var sArr = s.split('|');
        for (var i = 0; i < sArr.length; i++) {
            var sInt = parseInt(sArr[i]);
            if (sInt == WxApi.sceneId) {
                return true;
            }
        }
        return false;
    };
    WxApi.bannerWuChu2 = function () {
        var _this = this;
        clearTimeout(this.bannerTO2);
        AdMgr_1.default.instance.hideBanner();
        if (WxApi.isValidBanner()) {
            var upTime = ExportUtils_1.default.instance.exportCfg.front_export_banner_appear;
            var downTime_1 = upTime + ExportUtils_1.default.instance.exportCfg.front_export_banner_hide;
            this.bannerTO2 = setTimeout(function () {
                AdMgr_1.default.instance.showBanner();
                _this.bannerTO2 = setTimeout(function () {
                    AdMgr_1.default.instance.hideBanner();
                }, downTime_1);
            }, upTime);
        }
    };
    WxApi.bannerWuChu1 = function () {
        var _this = this;
        clearTimeout(this.bannerTO1);
        AdMgr_1.default.instance.hideBanner();
        if (WxApi.isValidBanner()) {
            var upTime = ExportUtils_1.default.instance.exportCfg.front_baokuan_banner_appear;
            var downTime_2 = upTime + ExportUtils_1.default.instance.exportCfg.front_baokuan_banner_hide;
            this.bannerTO1 = setTimeout(function () {
                AdMgr_1.default.instance.showBanner();
                _this.bannerTO1 = setTimeout(function () {
                    AdMgr_1.default.instance.hideBanner();
                }, downTime_2);
            }, upTime);
        }
    };
    WxApi.getIsExportValid = function () {
        return ExportUtils_1.default.instance.exportCfg.front_all_export_switch;
    };
    WxApi.splitSection = function () {
        var s = ExportUtils_1.default.instance.exportCfg.front_water_section.toString();
        if (s.search('|') == -1) {
            var sInt = parseInt(s);
            return [sInt];
        }
        var sArr = s.split('|');
        var iArr = [];
        for (var i = 0; i < sArr.length; i++) {
            var sInt = parseInt(sArr[i]);
            iArr.push(sInt);
        }
        return iArr;
    };
    WxApi.version = '1.0.1';
    WxApi.isVibrate = true;
    WxApi.isMusic = true;
    WxApi.OnShowFun = null;
    WxApi.scopeBtn = null;
    WxApi.shareCallback = null;
    WxApi.front_share_number = 0;
    WxApi.sceneId = 0;
    WxApi.isKillBossUI = false;
    WxApi.gotOfflineBounes = false;
    WxApi.configData = null;
    WxApi.crlConfig = null;
    WxApi.navData = [];
    WxApi.shareTime = 0;
    WxApi.firstShare = true;
    WxApi.hadShowFriendUI = false;
    WxApi.launchGameUI = false;
    WxApi.firstStartGame = false;
    WxApi.firstStartUI = false;
    WxApi.firstShowVideo = false;
    WxApi.madUICallback = null;
    WxApi.isFromSkinUI = false;
    WxApi.bannerTO2 = -1;
    WxApi.bannerTO1 = -1;
    return WxApi;
}());
exports.default = WxApi;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTGlic1xcV3hBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBZ0Q7QUFDaEQsaURBQTJDO0FBQzNDLHNDQUFnQztBQUVoQztJQUFBO0lBK1BBLENBQUM7SUFoT0csTUFBTTtJQUNRLGFBQU8sR0FBckIsVUFBc0IsRUFBWTtRQUM5QixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVztZQUFFLE9BQU07UUFDbEQsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNmLE9BQU8sWUFBQyxHQUFHO2dCQUNQLElBQUksR0FBRyxDQUFDLElBQUksRUFBRTtvQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ25DLElBQUksRUFBRSxFQUFFO3dCQUNKLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtxQkFDakM7aUJBQ0o7WUFDTCxDQUFDO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELE1BQU07SUFDTixnQ0FBZ0M7SUFDbEIsb0JBQWMsR0FBNUIsVUFBNkIsR0FBYTtRQUExQyxpQkFZQztRQVhHLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7WUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUE7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUk7Z0JBQ3JCLGtCQUFr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QWEsSUFBSSxDQUFBO0lBQzFCLGNBQVEsR0FBUSxJQUFJLENBQUE7SUFDcEIsbUJBQWEsR0FBYSxJQUFJLENBQUE7SUFDOUIsd0JBQWtCLEdBQVcsQ0FBQyxDQUFBO0lBQzlCLGFBQU8sR0FBVyxDQUFDLENBQUE7SUFDbkIsa0JBQVksR0FBWSxLQUFLLENBQUE7SUFFN0Isc0JBQWdCLEdBQVksS0FBSyxDQUFBO0lBQ2pDLGdCQUFVLEdBQVEsSUFBSSxDQUFBO0lBQ3RCLGVBQVMsR0FBUSxJQUFJLENBQUE7SUFDckIsYUFBTyxHQUFVLEVBQUUsQ0FBQTtJQUVuQixlQUFTLEdBQVcsQ0FBQyxDQUFBO0lBQ3JCLGdCQUFVLEdBQVksSUFBSSxDQUFBO0lBQzFCLHFCQUFlLEdBQVksS0FBSyxDQUFBO0lBRWhDLGtCQUFZLEdBQVksS0FBSyxDQUFBO0lBRTdCLG9CQUFjLEdBQVksS0FBSyxDQUFBO0lBQy9CLGtCQUFZLEdBQVksS0FBSyxDQUFBO0lBRTdCLG9CQUFjLEdBQVksS0FBSyxDQUFBO0lBRS9CLG1CQUFhLEdBQWEsSUFBSSxDQUFBO0lBRTlCLGtCQUFZLEdBQVksS0FBSyxDQUFBO0lBZ0w3QixlQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUE7SUFldEIsZUFBUyxHQUFXLENBQUMsQ0FBQyxDQUFBO0lBbUN4QyxZQUFDO0NBL1BELEFBK1BDLElBQUE7a0JBL1BvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpKTWdyIGZyb20gXCIuLi8uLi9FeHBvcnRMaWJzL0V4cG9ydFV0aWxzXCJcclxuaW1wb3J0IFBsYXllckRhdGFNZ3IgZnJvbSBcIi4vUGxheWVyRGF0YU1nclwiXHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vTW9kL0FkTWdyXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFd4QXBpIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgdmVyc2lvbjogc3RyaW5nID0gJzEuMC4xJ1xyXG4gICAgcHVibGljIHN0YXRpYyBpc1ZpYnJhdGU6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzTXVzaWM6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICBwdWJsaWMgc3RhdGljIE9uU2hvd0Z1bjogRnVuY3Rpb24gPSBudWxsXHJcbiAgICBwdWJsaWMgc3RhdGljIHNjb3BlQnRuOiBhbnkgPSBudWxsXHJcbiAgICBwdWJsaWMgc3RhdGljIHNoYXJlQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbFxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9udF9zaGFyZV9udW1iZXI6IG51bWJlciA9IDBcclxuICAgIHB1YmxpYyBzdGF0aWMgc2NlbmVJZDogbnVtYmVyID0gMFxyXG4gICAgcHVibGljIHN0YXRpYyBpc0tpbGxCb3NzVUk6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ290T2ZmbGluZUJvdW5lczogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbmZpZ0RhdGE6IGFueSA9IG51bGxcclxuICAgIHB1YmxpYyBzdGF0aWMgY3JsQ29uZmlnOiBhbnkgPSBudWxsXHJcbiAgICBwdWJsaWMgc3RhdGljIG5hdkRhdGE6IGFueVtdID0gW11cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNoYXJlVGltZTogbnVtYmVyID0gMFxyXG4gICAgcHVibGljIHN0YXRpYyBmaXJzdFNoYXJlOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgcHVibGljIHN0YXRpYyBoYWRTaG93RnJpZW5kVUk6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbGF1bmNoR2FtZVVJOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZpcnN0U3RhcnRHYW1lOiBib29sZWFuID0gZmFsc2VcclxuICAgIHB1YmxpYyBzdGF0aWMgZmlyc3RTdGFydFVJOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZpcnN0U2hvd1ZpZGVvOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1hZFVJQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbFxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNGcm9tU2tpblVJOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICAvL+W+ruS/oeeZu+W9lVxyXG4gICAgcHVibGljIHN0YXRpYyBMb2dpbld4KGNiOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gIT09IGNjLnN5cy5XRUNIQVRfR0FNRSkgcmV0dXJuXHJcbiAgICAgICAgbGV0IGxhdW5jaERhdGEgPSB3aW5kb3dbXCJ3eFwiXS5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgICAgIHdpbmRvd1tcInd4XCJdLmxvZ2luKHtcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXMuY29kZTonLCByZXMuY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKHJlcy5jb2RlLCBsYXVuY2hEYXRhLnF1ZXJ5KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy/nm5HlkKzlkK/liqhcclxuICAgIC8vVXN1YWxseSBnZXQgZnVuKG9iaikgb2JqLnF1ZXJ5XHJcbiAgICBwdWJsaWMgc3RhdGljIEdldExhdW5jaFBhcmFtKGZ1bjogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgdGhpcy5PblNob3dGdW4gPSBmdW5cclxuICAgICAgICAgICAgZnVuKHRoaXMuR2V0TGF1bmNoUGFzc1ZhcigpKVxyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS5vblNob3coKHBhcmEpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vY2hlY2sgb25zaG93IEZ1blxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuT25TaG93RnVuICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk9uU2hvd0Z1bihwYXJhKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3eCBvbiBzaG93XCIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRMYXVuY2hQYXNzVmFyKCk6IGFueSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbXCJ3eFwiXS5nZXRMYXVuY2hPcHRpb25zU3luYygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBXeE9uSGlkZShmdW46IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLm9uSGlkZShmdW4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBXeE9mZkhpZGUoZnVuOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChmdW4gJiYgY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ub2ZmSGlkZShmdW4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBXeE9uU2hvdyhmdW46IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLm9uU2hvdyhmdW4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBXeE9mZlNob3coZnVuOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChmdW4gJiYgY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ub2ZmU2hvdyhmdW4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v6ZyH5YqoXHJcbiAgICBwdWJsaWMgc3RhdGljIERvVmlicmF0ZShpc1Nob3J0OiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSAmJiB0aGlzLmlzVmlicmF0ZSkge1xyXG4gICAgICAgICAgICBpZiAoaXNTaG9ydCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93W1wid3hcIl0udmlicmF0ZVNob3J0KClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLnZpYnJhdGVMb25nKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+ezu+e7n+aPkOekulxyXG4gICAgcHVibGljIHN0YXRpYyBPcGVuQWxlcnQobXNnOiBzdHJpbmcsIGR1cjogbnVtYmVyID0gMjAwMCwgaWNvbjogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbXNnLC8v5o+Q56S65paH5a2XXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyLC8v5pi+56S65pe26ZW/XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwvL+aYr+WQpuaYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAj++8jOm7mOiupO+8mmZhbHNlICBcclxuICAgICAgICAgICAgICAgIGljb246IGljb24gPyAnc3VjY2VzcycgOiAnbm9uZScsIC8v5Zu+5qCH77yM5pSv5oyBXCJzdWNjZXNzXCLjgIFcImxvYWRpbmdcIiAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v6Lez6L2sXHJcbiAgICBwdWJsaWMgc3RhdGljIE5hdmlnYXRlQXBwKGFwcGlkOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgdGl0bGU6IHN0cmluZywgY2FuY2VsQ0I6IEZ1bmN0aW9uLCBzdWNjZXNzQ0I6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICAgICAgICAgICAgYXBwSWQ6IGFwcGlkLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5omT5byA5oiQ5YqfXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOaIkOWKnycpXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NCKClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaJk+W8gOWksei0pVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiZPlvIDlpLHotKUnKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbENCKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/pooTop4jlm77niYdcclxuICAgIHB1YmxpYyBzdGF0aWMgcHJlVmlld0ltYWdlKHVybCkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudDogdXJsLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXHJcbiAgICAgICAgICAgICAgICB1cmxzOiBbdXJsXSAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v6Zi/5ouJ5LiB57uf6K6h5LqL5Lu2XHJcbiAgICBwdWJsaWMgc3RhdGljIGFsZEV2ZW50KHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKVxyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS5hbGRTZW5kRXZlbnQoc3RyKVxyXG4gICAgfVxyXG5cclxuICAgIC8v6K6h566X5YiG5Lqr5qyh5pWwXHJcbiAgICBwdWJsaWMgc3RhdGljIGNhbGN1bGF0ZVNoYXJlTnVtYmVyKCkge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdERhdGUnKSkge1xyXG4gICAgICAgICAgICBpZiAobmV3IERhdGUoKS5nZXREYXRlKCkgPT0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhc3REYXRlJykpKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WQjOS4gOWkqVxyXG4gICAgICAgICAgICAgICAgdGhpcy5mcm9udF9zaGFyZV9udW1iZXIgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZnJvbnRfc2hhcmVfbnVtYmVyJykpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+aWsOeahOS4gOWkqVxyXG4gICAgICAgICAgICAgICAgdGhpcy5mcm9udF9zaGFyZV9udW1iZXIgPSBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfc2hhcmVfbnVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+aWsOeahOS4gOWkqVxyXG4gICAgICAgICAgICB0aGlzLmZyb250X3NoYXJlX251bWJlciA9IEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9zaGFyZV9udW1iZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmZyb250X3NoYXJlX251bWJlcikgdGhpcy5mcm9udF9zaGFyZV9udW1iZXIgPSAwXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuZnJvbnRfc2hhcmVfbnVtYmVyOicsIHRoaXMuZnJvbnRfc2hhcmVfbnVtYmVyKVxyXG4gICAgfVxyXG5cclxuICAgIC8v6K+v6Kem5o6n5Yi2XHJcbiAgICBwdWJsaWMgc3RhdGljIGZpeEJ0blRvdWNoUG9zKGJ0biwgc3RhcnRQb3NZLCBlbmRQb3NZLCB0YXJnZXQsIGNiPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkQmFubmVyKCkpIHtcclxuICAgICAgICAgICAgYnRuLnkgPSBzdGFydFBvc1lcclxuICAgICAgICAgICAgdGFyZ2V0LnNjaGVkdWxlT25jZSgoKSA9PiB7IEFkTWdyLmluc3RhbmNlLnNob3dCYW5uZXIoKSB9LCBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfYmFubmVyX2FwcGVhciAvIDEwMDApXHJcbiAgICAgICAgICAgIHRhcmdldC5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnRuLnkgPSBlbmRQb3NZXHJcbiAgICAgICAgICAgICAgICBjYiAmJiBjYigpXHJcbiAgICAgICAgICAgIH0sIEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9idXR0b25fdXAgLyAxMDAwKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEFkTWdyLmluc3RhbmNlLnNob3dCYW5uZXIoKVxyXG4gICAgICAgICAgICBjYiAmJiBjYigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNWYWxpZEJhbm5lcigpIHtcclxuICAgICAgICByZXR1cm4gUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkuZ3JhZGUgPj0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3Bhc3NfZ2F0ZSAmJiBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuaXNfYWxsb3dfYXJlYSA9PSAxXHJcbiAgICAgICAgICAgICYmIHRoaXMuYWxsb3dTY2VuZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhbGxvd1NjZW5lKCkge1xyXG4gICAgICAgIGxldCBzOiBzdHJpbmcgPSBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfd3VjaHVfc2NlbmUudG9TdHJpbmcoKVxyXG4gICAgICAgIGlmIChzLnNlYXJjaCgnfCcpID09IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBzSW50OiBudW1iZXIgPSBwYXJzZUludChzKVxyXG4gICAgICAgICAgICByZXR1cm4gc0ludCA9PSBXeEFwaS5zY2VuZUlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzQXJyOiBzdHJpbmdbXSA9IHMuc3BsaXQoJ3wnKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc0ludDogbnVtYmVyID0gcGFyc2VJbnQoc0FycltpXSlcclxuICAgICAgICAgICAgaWYgKHNJbnQgPT0gV3hBcGkuc2NlbmVJZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJhbm5lclRPMjogbnVtYmVyID0gLTFcclxuICAgIHB1YmxpYyBzdGF0aWMgYmFubmVyV3VDaHUyKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmJhbm5lclRPMilcclxuICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICBpZiAoV3hBcGkuaXNWYWxpZEJhbm5lcigpKSB7XHJcbiAgICAgICAgICAgIGxldCB1cFRpbWUgPSBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfZXhwb3J0X2Jhbm5lcl9hcHBlYXJcclxuICAgICAgICAgICAgbGV0IGRvd25UaW1lID0gdXBUaW1lICsgSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X2V4cG9ydF9iYW5uZXJfaGlkZVxyXG4gICAgICAgICAgICB0aGlzLmJhbm5lclRPMiA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQWRNZ3IuaW5zdGFuY2Uuc2hvd0Jhbm5lcigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lclRPMiA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFkTWdyLmluc3RhbmNlLmhpZGVCYW5uZXIoKVxyXG4gICAgICAgICAgICAgICAgfSwgZG93blRpbWUpXHJcbiAgICAgICAgICAgIH0sIHVwVGltZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGJhbm5lclRPMTogbnVtYmVyID0gLTFcclxuICAgIHB1YmxpYyBzdGF0aWMgYmFubmVyV3VDaHUxKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmJhbm5lclRPMSlcclxuICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICBpZiAoV3hBcGkuaXNWYWxpZEJhbm5lcigpKSB7XHJcbiAgICAgICAgICAgIGxldCB1cFRpbWUgPSBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfYmFva3Vhbl9iYW5uZXJfYXBwZWFyXHJcbiAgICAgICAgICAgIGxldCBkb3duVGltZSA9IHVwVGltZSArIEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9iYW9rdWFuX2Jhbm5lcl9oaWRlXHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyVE8xID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKClcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyVE8xID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQWRNZ3IuaW5zdGFuY2UuaGlkZUJhbm5lcigpXHJcbiAgICAgICAgICAgICAgICB9LCBkb3duVGltZSlcclxuICAgICAgICAgICAgfSwgdXBUaW1lKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldElzRXhwb3J0VmFsaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9hbGxfZXhwb3J0X3N3aXRjaFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3BsaXRTZWN0aW9uKCk6IG51bWJlcltdIHtcclxuICAgICAgICBsZXQgczogc3RyaW5nID0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3dhdGVyX3NlY3Rpb24udG9TdHJpbmcoKVxyXG4gICAgICAgIGlmIChzLnNlYXJjaCgnfCcpID09IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBzSW50OiBudW1iZXIgPSBwYXJzZUludChzKVxyXG4gICAgICAgICAgICByZXR1cm4gW3NJbnRdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzQXJyOiBzdHJpbmdbXSA9IHMuc3BsaXQoJ3wnKVxyXG4gICAgICAgIGxldCBpQXJyOiBudW1iZXJbXSA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzSW50OiBudW1iZXIgPSBwYXJzZUludChzQXJyW2ldKVxyXG4gICAgICAgICAgICBpQXJyLnB1c2goc0ludClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlBcnJcclxuICAgIH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/StartUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c440E0AN1GhoEwMJ/4egfp', 'StartUI');
// Scripts/UI/StartUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var TimeCountMgr_1 = require("../Libs/TimeCountMgr");
var WxApi_1 = require("../Libs/WxApi");
var AdMgr_1 = require("../Mod/AdMgr");
var ShareMgr_1 = require("../Mod/ShareMgr");
var Utility_1 = require("../Mod/Utility");
var MadUI_1 = require("./MadUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StartUI = /** @class */ (function (_super) {
    __extends(StartUI, _super);
    function StartUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GetFishUI = null;
        _this.GetPowerUI = null;
        _this.GetTipsUI = null;
        _this.powerNum = null;
        _this.powerTime = null;
        _this.tipsNum = null;
        _this.gradeNum = null;
        _this.fishLvNum = null;
        _this.nameNode = null;
        _this.leftLvNum = null;
        _this.drawBtn = null;
        _this.moreGameBtn = null;
        _this.navNode = null;
        _this.madCrl = null;
        return _this;
    }
    StartUI.prototype.onLoad = function () { };
    StartUI.prototype.start = function () {
        this.initFishData();
        if (!WxApi_1.default.isFromSkinUI) {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FRIENDGAME, null, function () {
                if (!WxApi_1.default.firstStartUI) {
                    WxApi_1.default.firstStartUI = true;
                    ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
                        AdMgr_1.default.instance.showBanner();
                    });
                }
                else {
                    AdMgr_1.default.instance.showBanner();
                }
            });
        }
        else {
            AdMgr_1.default.instance.showBanner();
            WxApi_1.default.isFromSkinUI = false;
        }
        this.chushihuaNav();
        for (var i = 0; i < this.navNode.childrenCount; i++) {
            Utility_1.default.rotateLoop(this.navNode.children[i], 0.5, 8);
        }
        this.schedule(this.chushihuaNav, 3);
        this.navNode.active = WxApi_1.default.getIsExportValid();
        this.drawBtn.active = WxApi_1.default.getIsExportValid();
        this.moreGameBtn.active = WxApi_1.default.getIsExportValid();
    };
    StartUI.prototype.initFishData = function () {
        this.fishLvNum.string = PlayerDataMgr_1.default.getPlayerLv().toString();
        for (var i = 0; i < this.nameNode.childrenCount; i++) {
            this.nameNode.children[i].active = i + 1 == PlayerDataMgr_1.default.getPlayerLv();
        }
        if (PlayerDataMgr_1.default.getLeftLv() == 0) {
            this.leftLvNum.node.parent.active = false;
        }
        else {
            this.leftLvNum.string = PlayerDataMgr_1.default.getLeftLv().toString();
        }
    };
    StartUI.prototype.startGameCB = function () {
        var _this = this;
        if (PlayerDataMgr_1.default.getPlayerData().power > 0) {
            PlayerDataMgr_1.default.changePower(-1);
            WxApi_1.default.aldEvent('点击开始游戏按钮人数');
            ExportUtils_1.default.instance.closeAllExportUI();
            var cb = function () {
                var cb1 = function () {
                    ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FULLGAMEUI, null, function () {
                        cc.director.loadScene('GameScene');
                    });
                };
                var curG = PlayerDataMgr_1.default.getPlayerData().grade;
                var gGap = (curG - ExportUtils_1.default.instance.exportCfg.front_water_start_level) % ExportUtils_1.default.instance.exportCfg.front_water_level_interval == 0 &&
                    curG >= ExportUtils_1.default.instance.exportCfg.front_water_start_level;
                if (gGap && !AdMgr_1.default.instance.isBannerError && WxApi_1.default.isValidBanner()) {
                    _this.madCrl.showUI(cb1);
                }
                else {
                    cc.director.loadScene('GameScene');
                }
            };
            if (WxApi_1.default.isValidBanner() && ExportUtils_1.default.instance.exportCfg.front_start_game_switch && !AdMgr_1.default.instance.videoIsError && !WxApi_1.default.firstShowVideo) {
                WxApi_1.default.firstShowVideo = true;
                AdMgr_1.default.instance.videoCloseCallback = cb;
                AdMgr_1.default.instance.showVideo(function () { });
            }
            else {
                cb();
            }
        }
        else {
            this.getPowerBtnCB();
        }
    };
    StartUI.prototype.getPower = function () {
        var cb = function () {
            PlayerDataMgr_1.default.changePower(3);
        };
        ShareMgr_1.default.instance.shareGame(cb);
    };
    StartUI.prototype.getFishBtnCB = function () {
        this.GetFishUI.active = true;
    };
    StartUI.prototype.getPowerBtnCB = function () {
        this.GetPowerUI.active = true;
    };
    StartUI.prototype.getTipsBtnCB = function () {
        this.GetTipsUI.active = true;
    };
    StartUI.prototype.calculatePowerTime = function () {
        var t = TimeCountMgr_1.default.Share.tCount;
        var m = Math.floor(t / 60);
        var s = Math.floor(t - m * 60);
        this.powerTime.string = m.toString() + ':' + s.toString();
        this.powerNum.string = PlayerDataMgr_1.default.getPlayerData().power.toString();
        this.powerTime.node.active = PlayerDataMgr_1.default.getPlayerData().power < PlayerDataMgr_1.default.powerMax;
    };
    StartUI.prototype.update = function (dt) {
        this.calculatePowerTime();
        this.gradeNum.string = PlayerDataMgr_1.default.getPlayerData().grade.toString();
        this.tipsNum.string = PlayerDataMgr_1.default.getPlayerData().tipsNum.toString();
    };
    StartUI.prototype.moreGameBtnCB = function () {
        WxApi_1.default.aldEvent('点我有惊喜按钮点击');
        ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FULLGAMEUI, null, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
                ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FRIENDGAME, null, function () {
                    AdMgr_1.default.instance.showBanner();
                });
            });
        });
    };
    StartUI.prototype.drawBtnCB = function () {
        WxApi_1.default.aldEvent('左边抽屉导出按钮点击');
        ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_DRAWUI);
    };
    StartUI.prototype.chushihuaNav = function () {
        var _this = this;
        var arr = [];
        for (var i = 0; i < ExportUtils_1.default.instance.navigateAppArr.length; i++) {
            arr.push(i);
        }
        arr = Utility_1.default.shuffleArr(arr);
        arr = arr.splice(0, 4);
        var _loop_1 = function (i) {
            var item = this_1.navNode.children[i];
            var icon = item.getChildByName('icon').getComponent(cc.Sprite);
            var name = item.getChildByName('name').getComponent(cc.Label);
            name.string = ExportUtils_1.default.instance.getSubtitle(arr[i]);
            ExportUtils_1.default.instance.loadImgByUrl(icon, ExportUtils_1.default.instance.navigateAppArr[arr[i]].icon);
            item.off(cc.Node.EventType.TOUCH_END);
            item.on(cc.Node.EventType.TOUCH_END, function (event) { _this.tiaozhuanCB(event, arr[i]); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.navNode.childrenCount; i++) {
            _loop_1(i);
        }
    };
    StartUI.prototype.tiaozhuanCB = function (event, id) {
        console.log('click id:', id);
        WxApi_1.default.aldEvent('首页导出位—总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
                AdMgr_1.default.instance.showBanner();
            });
        }, function () {
            WxApi_1.default.aldEvent('首页导出位—总成功跳转数');
        });
    };
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "GetFishUI", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "GetPowerUI", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "GetTipsUI", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "powerNum", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "powerTime", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "tipsNum", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "gradeNum", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "fishLvNum", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "nameNode", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "leftLvNum", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "drawBtn", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "moreGameBtn", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "navNode", void 0);
    __decorate([
        property(MadUI_1.default)
    ], StartUI.prototype, "madCrl", void 0);
    StartUI = __decorate([
        ccclass
    ], StartUI);
    return StartUI;
}(cc.Component));
exports.default = StartUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFN0YXJ0VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQWdFO0FBQ2hFLHVEQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQsdUNBQWtDO0FBQ2xDLHNDQUFpQztBQUNqQyw0Q0FBdUM7QUFDdkMsMENBQXFDO0FBQ3JDLGlDQUE0QjtBQUV0QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBRGpEO1FBQUEscUVBbU1DO1FBL0xHLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUd6QixjQUFRLEdBQWEsSUFBSSxDQUFBO1FBRXpCLGVBQVMsR0FBYSxJQUFJLENBQUE7UUFHMUIsYUFBTyxHQUFhLElBQUksQ0FBQTtRQUd4QixjQUFRLEdBQWEsSUFBSSxDQUFBO1FBR3pCLGVBQVMsR0FBYSxJQUFJLENBQUE7UUFFMUIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUd4QixlQUFTLEdBQWEsSUFBSSxDQUFBO1FBSTFCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0IsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUd2QixZQUFNLEdBQVUsSUFBSSxDQUFBOztJQTZKeEIsQ0FBQztJQTNKRyx3QkFBTSxHQUFOLGNBQVcsQ0FBQztJQUVaLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFFbkIsSUFBSSxDQUFDLGVBQUssQ0FBQyxZQUFZLEVBQUU7WUFDckIscUJBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLHVCQUFTLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRTtnQkFDekQsSUFBSSxDQUFDLGVBQUssQ0FBQyxZQUFZLEVBQUU7b0JBQ3JCLGVBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFBO29CQUN6QixxQkFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsdUJBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUU7d0JBQzFELGVBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7b0JBQy9CLENBQUMsQ0FBQyxDQUFBO2lCQUNMO3FCQUFNO29CQUNILGVBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7aUJBQzlCO1lBQ0wsQ0FBQyxDQUFDLENBQUE7U0FDTDthQUFNO1lBQ0gsZUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtZQUMzQixlQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQTtTQUM3QjtRQUVELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakQsaUJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQ3ZEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO0lBQ3RELENBQUM7SUFFRCw4QkFBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsdUJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUM5RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksdUJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtTQUMxRTtRQUNELElBQUksdUJBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7U0FDNUM7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7U0FDL0Q7SUFDTCxDQUFDO0lBRUQsNkJBQVcsR0FBWDtRQUFBLGlCQStCQztRQTlCRyxJQUFJLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUN6Qyx1QkFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzdCLGVBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDNUIscUJBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtZQUNqQyxJQUFJLEVBQUUsR0FBRztnQkFDTCxJQUFJLEdBQUcsR0FBRztvQkFDTixxQkFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsdUJBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFO3dCQUN6RCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtvQkFDdEMsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQyxDQUFBO2dCQUNELElBQUksSUFBSSxHQUFHLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxDQUFBO2dCQUM5QyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsMEJBQTBCLElBQUksQ0FBQztvQkFDM0gsSUFBSSxJQUFJLHFCQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQTtnQkFFNUQsSUFBSSxJQUFJLElBQUksQ0FBQyxlQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsSUFBSSxlQUFLLENBQUMsYUFBYSxFQUFFLEVBQUU7b0JBQ2hFLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lCQUMxQjtxQkFBTTtvQkFDSCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtpQkFDckM7WUFDTCxDQUFDLENBQUE7WUFDRCxJQUFJLGVBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLElBQUksQ0FBQyxlQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksSUFBSSxDQUFDLGVBQUssQ0FBQyxjQUFjLEVBQUU7Z0JBQ3BJLGVBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFBO2dCQUMzQixlQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQTtnQkFDdEMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBUSxDQUFDLENBQUMsQ0FBQTthQUN0QztpQkFBTTtnQkFDSCxFQUFFLEVBQUUsQ0FBQTthQUNQO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtTQUN2QjtJQUNMLENBQUM7SUFFRCwwQkFBUSxHQUFSO1FBQ0ksSUFBSSxFQUFFLEdBQUc7WUFDTCx1QkFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNoQyxDQUFDLENBQUE7UUFDRCxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELDhCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDaEMsQ0FBQztJQUVELCtCQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDakMsQ0FBQztJQUVELDhCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDaEMsQ0FBQztJQUVELG9DQUFrQixHQUFsQjtRQUNJLElBQUksQ0FBQyxHQUFHLHNCQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQTtRQUNqQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDckUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLHVCQUFhLENBQUMsUUFBUSxDQUFBO0lBQzdGLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3JFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzFFLENBQUM7SUFFRCwrQkFBYSxHQUFiO1FBQ0ksZUFBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMzQixxQkFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsdUJBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFO1lBQ3pELHFCQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyx1QkFBUyxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRTtnQkFDMUQscUJBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLHVCQUFTLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRTtvQkFDekQsZUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQkFDL0IsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDJCQUFTLEdBQVQ7UUFDSSxlQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzVCLHFCQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyx1QkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFFRCw4QkFBWSxHQUFaO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksR0FBRyxHQUFhLEVBQUUsQ0FBQTtRQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcscUJBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzRCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ2Q7UUFDRCxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDN0IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dDQUNiLENBQUM7WUFDTixJQUFJLElBQUksR0FBWSxPQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDNUMsSUFBSSxJQUFJLEdBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3pFLElBQUksSUFBSSxHQUFhLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN2RSxJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNoRCxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLHFCQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUU3RSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQUMsS0FBSyxJQUFPLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxTQUFPLENBQUE7OztRQVI5RixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFO29CQUExQyxDQUFDO1NBU1Q7SUFDTCxDQUFDO0lBQ0QsNkJBQVcsR0FBWCxVQUFZLEtBQUssRUFBRSxFQUFFO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQzVCLGVBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDNUIscUJBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRTtZQUMzQixxQkFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsdUJBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUU7Z0JBQzFELGVBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7WUFDL0IsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLEVBQUU7WUFDQyxlQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ2xDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTlMRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNPO0lBSTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLGVBQUssQ0FBQzsyQ0FDSTtJQXJDSCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBa00zQjtJQUFELGNBQUM7Q0FsTUQsQUFrTUMsQ0FsTW9DLEVBQUUsQ0FBQyxTQUFTLEdBa01oRDtrQkFsTW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSkpNZ3IsIHsgRXhwb3J0RGlyIH0gZnJvbSBcIi4uLy4uL0V4cG9ydExpYnMvRXhwb3J0VXRpbHNcIjtcclxuaW1wb3J0IFBsYXllckRhdGFNZ3IgZnJvbSBcIi4uL0xpYnMvUGxheWVyRGF0YU1nclwiO1xyXG5pbXBvcnQgVGltZUNvdW50TWdyIGZyb20gXCIuLi9MaWJzL1RpbWVDb3VudE1nclwiO1xyXG5pbXBvcnQgV3hBcGkgZnJvbSBcIi4uL0xpYnMvV3hBcGlcIjtcclxuaW1wb3J0IEFkTWdyIGZyb20gXCIuLi9Nb2QvQWRNZ3JcIjtcclxuaW1wb3J0IFNoYXJlTWdyIGZyb20gXCIuLi9Nb2QvU2hhcmVNZ3JcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uL01vZC9VdGlsaXR5XCI7XHJcbmltcG9ydCBNYWRVSSBmcm9tIFwiLi9NYWRVSVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0VUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR2V0RmlzaFVJOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBHZXRQb3dlclVJOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBHZXRUaXBzVUk6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcG93ZXJOdW06IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcG93ZXJUaW1lOiBjYy5MYWJlbCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aXBzTnVtOiBjYy5MYWJlbCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBncmFkZU51bTogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZmlzaEx2TnVtOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbmFtZU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGVmdEx2TnVtOiBjYy5MYWJlbCA9IG51bGxcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkcmF3QnRuOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtb3JlR2FtZUJ0bjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbmF2Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoTWFkVUkpXHJcbiAgICBtYWRDcmw6IE1hZFVJID0gbnVsbFxyXG5cclxuICAgIG9uTG9hZCgpIHsgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEZpc2hEYXRhKClcclxuXHJcbiAgICAgICAgaWYgKCFXeEFwaS5pc0Zyb21Ta2luVUkpIHtcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2Uuc2hvd0V4cG9ydFVJKEV4cG9ydERpci5WSUVXX0ZSSUVOREdBTUUsIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghV3hBcGkuZmlyc3RTdGFydFVJKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgV3hBcGkuZmlyc3RTdGFydFVJID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19SRUNPTU1FTkRVSSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKClcclxuICAgICAgICAgICAgV3hBcGkuaXNGcm9tU2tpblVJID0gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2h1c2hpaHVhTmF2KClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmF2Tm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgVXRpbGl0eS5yb3RhdGVMb29wKHRoaXMubmF2Tm9kZS5jaGlsZHJlbltpXSwgMC41LCA4KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY2h1c2hpaHVhTmF2LCAzKVxyXG4gICAgICAgIHRoaXMubmF2Tm9kZS5hY3RpdmUgPSBXeEFwaS5nZXRJc0V4cG9ydFZhbGlkKClcclxuICAgICAgICB0aGlzLmRyYXdCdG4uYWN0aXZlID0gV3hBcGkuZ2V0SXNFeHBvcnRWYWxpZCgpXHJcbiAgICAgICAgdGhpcy5tb3JlR2FtZUJ0bi5hY3RpdmUgPSBXeEFwaS5nZXRJc0V4cG9ydFZhbGlkKClcclxuICAgIH1cclxuXHJcbiAgICBpbml0RmlzaERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5maXNoTHZOdW0uc3RyaW5nID0gUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJMdigpLnRvU3RyaW5nKClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmFtZU5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZU5vZGUuY2hpbGRyZW5baV0uYWN0aXZlID0gaSArIDEgPT0gUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJMdigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChQbGF5ZXJEYXRhTWdyLmdldExlZnRMdigpID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0THZOdW0ubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRMdk51bS5zdHJpbmcgPSBQbGF5ZXJEYXRhTWdyLmdldExlZnRMdigpLnRvU3RyaW5nKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRHYW1lQ0IoKSB7XHJcbiAgICAgICAgaWYgKFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyID4gMCkge1xyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhTWdyLmNoYW5nZVBvd2VyKC0xKVxyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn54K55Ye75byA5aeL5ri45oiP5oyJ6ZKu5Lq65pWwJylcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2UuY2xvc2VBbGxFeHBvcnRVSSgpXHJcbiAgICAgICAgICAgIGxldCBjYiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjYjEgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2Uuc2hvd0V4cG9ydFVJKEV4cG9ydERpci5WSUVXX0ZVTExHQU1FVUksIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lU2NlbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyRyA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlXHJcbiAgICAgICAgICAgICAgICBsZXQgZ0dhcCA9IChjdXJHIC0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3dhdGVyX3N0YXJ0X2xldmVsKSAlIEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF93YXRlcl9sZXZlbF9pbnRlcnZhbCA9PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgY3VyRyA+PSBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfd2F0ZXJfc3RhcnRfbGV2ZWxcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZ0dhcCAmJiAhQWRNZ3IuaW5zdGFuY2UuaXNCYW5uZXJFcnJvciAmJiBXeEFwaS5pc1ZhbGlkQmFubmVyKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hZENybC5zaG93VUkoY2IxKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWVTY2VuZScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFd4QXBpLmlzVmFsaWRCYW5uZXIoKSAmJiBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfc3RhcnRfZ2FtZV9zd2l0Y2ggJiYgIUFkTWdyLmluc3RhbmNlLnZpZGVvSXNFcnJvciAmJiAhV3hBcGkuZmlyc3RTaG93VmlkZW8pIHtcclxuICAgICAgICAgICAgICAgIFd4QXBpLmZpcnN0U2hvd1ZpZGVvID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgQWRNZ3IuaW5zdGFuY2UudmlkZW9DbG9zZUNhbGxiYWNrID0gY2JcclxuICAgICAgICAgICAgICAgIEFkTWdyLmluc3RhbmNlLnNob3dWaWRlbygoKSA9PiB7IH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdldFBvd2VyQnRuQ0IoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3dlcigpIHtcclxuICAgICAgICBsZXQgY2IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIFBsYXllckRhdGFNZ3IuY2hhbmdlUG93ZXIoMylcclxuICAgICAgICB9XHJcbiAgICAgICAgU2hhcmVNZ3IuaW5zdGFuY2Uuc2hhcmVHYW1lKGNiKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEZpc2hCdG5DQigpIHtcclxuICAgICAgICB0aGlzLkdldEZpc2hVSS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG93ZXJCdG5DQigpIHtcclxuICAgICAgICB0aGlzLkdldFBvd2VyVUkuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRpcHNCdG5DQigpIHtcclxuICAgICAgICB0aGlzLkdldFRpcHNVSS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlUG93ZXJUaW1lKCkge1xyXG4gICAgICAgIGxldCB0ID0gVGltZUNvdW50TWdyLlNoYXJlLnRDb3VudFxyXG4gICAgICAgIGxldCBtID0gTWF0aC5mbG9vcih0IC8gNjApXHJcbiAgICAgICAgbGV0IHMgPSBNYXRoLmZsb29yKHQgLSBtICogNjApXHJcbiAgICAgICAgdGhpcy5wb3dlclRpbWUuc3RyaW5nID0gbS50b1N0cmluZygpICsgJzonICsgcy50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5wb3dlck51bS5zdHJpbmcgPSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5wb3dlci50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5wb3dlclRpbWUubm9kZS5hY3RpdmUgPSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5wb3dlciA8IFBsYXllckRhdGFNZ3IucG93ZXJNYXhcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVBvd2VyVGltZSgpXHJcbiAgICAgICAgdGhpcy5ncmFkZU51bS5zdHJpbmcgPSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZS50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy50aXBzTnVtLnN0cmluZyA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnRpcHNOdW0udG9TdHJpbmcoKVxyXG4gICAgfVxyXG5cclxuICAgIG1vcmVHYW1lQnRuQ0IoKSB7XHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+eCueaIkeacieaDiuWWnOaMiemSrueCueWHuycpXHJcbiAgICAgICAgSkpNZ3IuaW5zdGFuY2Uuc2hvd0V4cG9ydFVJKEV4cG9ydERpci5WSUVXX0ZVTExHQU1FVUksIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2Uuc2hvd0V4cG9ydFVJKEV4cG9ydERpci5WSUVXX1JFQ09NTUVORFVJLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBKSk1nci5pbnN0YW5jZS5zaG93RXhwb3J0VUkoRXhwb3J0RGlyLlZJRVdfRlJJRU5ER0FNRSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFkTWdyLmluc3RhbmNlLnNob3dCYW5uZXIoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdCdG5DQigpIHtcclxuICAgICAgICBXeEFwaS5hbGRFdmVudCgn5bem6L655oq95bGJ5a+85Ye65oyJ6ZKu54K55Ye7JylcclxuICAgICAgICBKSk1nci5pbnN0YW5jZS5zaG93RXhwb3J0VUkoRXhwb3J0RGlyLlZJRVdfRFJBV1VJKVxyXG4gICAgfVxyXG5cclxuICAgIGNodXNoaWh1YU5hdigpIHtcclxuICAgICAgICBsZXQgYXJyOiBudW1iZXJbXSA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaChpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhcnIgPSBVdGlsaXR5LnNodWZmbGVBcnIoYXJyKVxyXG4gICAgICAgIGFyciA9IGFyci5zcGxpY2UoMCwgNClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmF2Tm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW06IGNjLk5vZGUgPSB0aGlzLm5hdk5vZGUuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgbGV0IGljb246IGNjLlNwcml0ZSA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2ljb24nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgICAgICBsZXQgbmFtZTogY2MuTGFiZWwgPSBpdGVtLmdldENoaWxkQnlOYW1lKCduYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICBuYW1lLnN0cmluZyA9IEpKTWdyLmluc3RhbmNlLmdldFN1YnRpdGxlKGFycltpXSlcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2UubG9hZEltZ0J5VXJsKGljb24sIEpKTWdyLmluc3RhbmNlLm5hdmlnYXRlQXBwQXJyW2FycltpXV0uaWNvbilcclxuXHJcbiAgICAgICAgICAgIGl0ZW0ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORClcclxuICAgICAgICAgICAgaXRlbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudCkgPT4geyB0aGlzLnRpYW96aHVhbkNCKGV2ZW50LCBhcnJbaV0pIH0sIHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGlhb3podWFuQ0IoZXZlbnQsIGlkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrIGlkOicsIGlkKVxyXG4gICAgICAgIFd4QXBpLmFsZEV2ZW50KCfpppbpobXlr7zlh7rkvY3igJTmgLvngrnlh7vmlbAnKVxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLk5hdmlnYXRlQXBwKGlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19SRUNPTU1FTkRVSSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQWRNZ3IuaW5zdGFuY2Uuc2hvd0Jhbm5lcigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn6aaW6aG15a+85Ye65L2N4oCU5oC75oiQ5Yqf6Lez6L2s5pWwJylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/FinishGameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80640I/xFpMor6MfSekWPx9', 'FinishGameUI');
// ExportLibs/View/FinishGameUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var WxApi_1 = require("../../Scripts/Libs/WxApi");
var AdMgr_1 = require("../../Scripts/Mod/AdMgr");
var Utility_1 = require("../../Scripts/Mod/Utility");
var ExportUtils_1 = require("../ExportUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FinishGameUI = /** @class */ (function (_super) {
    __extends(FinishGameUI, _super);
    function FinishGameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        _this.navId = 0;
        _this.isOne = false;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    FinishGameUI.prototype.start = function () {
    };
    FinishGameUI.prototype.showUI = function (callback, param) {
        this.isOne = false;
        if (param && param.posY) {
            this.rootNode.y = param.posY;
        }
        if (param && param.one) {
            this.isOne = param.one;
        }
        this.node.active = true;
        if (this.isOne) {
            for (var i = 0; i < this.rootNode.childrenCount; i++) {
                this.rootNode.children[i].active = i < 3;
            }
        }
    };
    FinishGameUI.prototype.onEnable = function () {
        this._init();
        this.chushihuaNav();
    };
    FinishGameUI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    FinishGameUI.prototype._init = function () {
        this.navId = 0;
    };
    FinishGameUI.prototype.closeCB = function () {
        this.node.active = false;
    };
    FinishGameUI.prototype.cno = function (index) {
        var _this = this;
        var item = this.rootNode.children[index];
        var icon = item.getChildByName('icon').getComponent(cc.Sprite);
        ExportUtils_1.default.instance.loadImgByUrl(icon, ExportUtils_1.default.instance.navigateAppArr[this.navId].icon);
        var id = this.navId;
        item.off(cc.Node.EventType.TOUCH_END);
        item.on(cc.Node.EventType.TOUCH_END, function (event) { _this.tiaozhuanCB(event, id); }, this);
        this.navId++;
        if (this.navId >= ExportUtils_1.default.instance.navigateAppArr.length) {
            this.navId = 0;
        }
    };
    FinishGameUI.prototype.tiaozhuanCB = function (event, id) {
        console.log('click id:', id);
        WxApi_1.default.aldEvent('结算页 6 个 icon-总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FULLGAMEUI, null, function () {
                AdMgr_1.default.instance.showBanner();
            });
        }, function () {
            WxApi_1.default.aldEvent('结算页 6 个 icon-总跳转数');
        });
        var index = this.rootNode.children.indexOf(event.target);
        this.cno(index);
    };
    FinishGameUI.prototype.chushihuaNav = function () {
        var _this = this;
        var rArr = [0, 1, 2, 3, 4, 5];
        rArr = Utility_1.default.shuffleArr(rArr);
        var randNum = Math.floor(Math.random() * 6);
        var _loop_1 = function (i) {
            var item = this_1.rootNode.children[rArr[0]];
            rArr.splice(rArr.indexOf(rArr[0]), 1);
            var icon = item.getChildByName('icon').getComponent(cc.Sprite);
            var finger = item.getChildByName('finger');
            ExportUtils_1.default.instance.loadImgByUrl(icon, ExportUtils_1.default.instance.navigateAppArr[this_1.navId].icon);
            finger.active = randNum == i;
            var id = this_1.navId;
            item.off(cc.Node.EventType.TOUCH_END);
            item.on(cc.Node.EventType.TOUCH_END, function (event) { _this.tiaozhuanCB(event, id); }, this_1);
            this_1.navId++;
        };
        var this_1 = this;
        for (var i = 0; i < 6; i++) {
            _loop_1(i);
        }
    };
    __decorate([
        property(cc.Node)
    ], FinishGameUI.prototype, "rootNode", void 0);
    FinishGameUI = __decorate([
        ccclass
    ], FinishGameUI);
    return FinishGameUI;
}(cc.Component));
exports.default = FinishGameUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcRmluaXNoR2FtZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUE2QztBQUM3QyxpREFBNEM7QUFDNUMscURBQWdEO0FBQ2hELDhDQUFrRDtBQUU1QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBRHREO1FBQUEscUVBb0dDO1FBaEdHLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsV0FBSyxHQUFXLENBQUMsQ0FBQTtRQUVqQixXQUFLLEdBQVksS0FBSyxDQUFBOztRQTJGdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUExRkcsZUFBZTtJQUVmLDRCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLFFBQW1CLEVBQUUsS0FBVztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUE7U0FDL0I7UUFDRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQTtTQUN6QjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUV2QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxD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QVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNNO0lBSFAsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQW1HaEM7SUFBRCxtQkFBQztDQW5HRCxBQW1HQyxDQW5HeUMsRUFBRSxDQUFDLFNBQVMsR0FtR3JEO2tCQW5Hb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXeEFwaSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9MaWJzL1d4QXBpXCI7XHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vLi4vU2NyaXB0cy9Nb2QvQWRNZ3JcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uLy4uL1NjcmlwdHMvTW9kL1V0aWxpdHlcIjtcclxuaW1wb3J0IEpKTWdyLCB7IEV4cG9ydERpciB9IGZyb20gXCIuLi9FeHBvcnRVdGlsc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbmlzaEdhbWVVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByb290Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBuYXZJZDogbnVtYmVyID0gMFxyXG5cclxuICAgIGlzT25lOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1VJKGNhbGxiYWNrPzogRnVuY3Rpb24sIHBhcmFtPzogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pc09uZSA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHBhcmFtICYmIHBhcmFtLnBvc1kpIHtcclxuICAgICAgICAgICAgdGhpcy5yb290Tm9kZS55ID0gcGFyYW0ucG9zWVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyYW0gJiYgcGFyYW0ub25lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPbmUgPSBwYXJhbS5vbmVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzT25lKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb290Tm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdE5vZGUuY2hpbGRyZW5baV0uYWN0aXZlID0gaSA8IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLl9pbml0KClcclxuICAgICAgICB0aGlzLmNodXNoaWh1YU5hdigpXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICB9XHJcblxyXG4gICAgX2luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5uYXZJZCA9IDBcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUNCKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNubyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGl0ZW06IGNjLk5vZGUgPSB0aGlzLnJvb3ROb2RlLmNoaWxkcmVuW2luZGV4XVxyXG4gICAgICAgIGxldCBpY29uID0gaXRlbS5nZXRDaGlsZEJ5TmFtZSgnaWNvbicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpIGFzIGNjLlNwcml0ZVxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLmxvYWRJbWdCeVVybChpY29uLCBKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFyclt0aGlzLm5hdklkXS5pY29uKVxyXG4gICAgICAgIGxldCBpZCA9IHRoaXMubmF2SWRcclxuICAgICAgICBpdGVtLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpXHJcbiAgICAgICAgaXRlbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudCkgPT4geyB0aGlzLnRpYW96aHVhbkNCKGV2ZW50LCBpZCkgfSwgdGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5uYXZJZCsrXHJcbiAgICAgICAgaWYgKHRoaXMubmF2SWQgPj0gSkpNZ3IuaW5zdGFuY2UubmF2aWdhdGVBcHBBcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2SWQgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRpYW96aHVhbkNCKGV2ZW50LCBpZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGljayBpZDonLCBpZClcclxuICAgICAgICBXeEFwaS5hbGRFdmVudCgn57uT566X6aG1IDYg5LiqIGljb24t5oC754K55Ye75pWwJylcclxuICAgICAgICBKSk1nci5pbnN0YW5jZS5OYXZpZ2F0ZUFwcChpZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBKSk1nci5pbnN0YW5jZS5zaG93RXhwb3J0VUkoRXhwb3J0RGlyLlZJRVdfRlVMTEdBTUVVSSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQWRNZ3IuaW5zdGFuY2Uuc2hvd0Jhbm5lcigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn57uT566X6aG1IDYg5LiqIGljb24t5oC76Lez6L2s5pWwJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnJvb3ROb2RlLmNoaWxkcmVuLmluZGV4T2YoZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgIHRoaXMuY25vKGluZGV4KVxyXG4gICAgfVxyXG4gICAgY2h1c2hpaHVhTmF2KCkge1xyXG4gICAgICAgIGxldCByQXJyOiBudW1iZXJbXSA9IFswLCAxLCAyLCAzLCA0LCA1XVxyXG4gICAgICAgIHJBcnIgPSBVdGlsaXR5LnNodWZmbGVBcnIockFycilcclxuICAgICAgICBsZXQgcmFuZE51bTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNilcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbTogY2MuTm9kZSA9IHRoaXMucm9vdE5vZGUuY2hpbGRyZW5bckFyclswXV1cclxuICAgICAgICAgICAgckFyci5zcGxpY2UockFyci5pbmRleE9mKHJBcnJbMF0pLCAxKVxyXG4gICAgICAgICAgICBsZXQgaWNvbiA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2ljb24nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSBhcyBjYy5TcHJpdGVcclxuICAgICAgICAgICAgbGV0IGZpbmdlciA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2ZpbmdlcicpXHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLmxvYWRJbWdCeVVybChpY29uLCBKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFyclt0aGlzLm5hdklkXS5pY29uKVxyXG4gICAgICAgICAgICBmaW5nZXIuYWN0aXZlID0gcmFuZE51bSA9PSBpXHJcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMubmF2SWRcclxuICAgICAgICAgICAgaXRlbS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKVxyXG4gICAgICAgICAgICBpdGVtLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7IHRoaXMudGlhb3podWFuQ0IoZXZlbnQsIGlkKSB9LCB0aGlzKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5uYXZJZCsrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56680tb3D5EO7YROulSA49U', 'Level4');
// Scripts/Crl/Level/Level4.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level4 = /** @class */ (function (_super) {
    __extends(Level4, _super);
    function Level4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level4.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.SharpCrl.moveToPoint(3)];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level4.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.meatNode.isValid) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.meatCrl.triggerCB()];
                    case 1:
                        _a.sent();
                        if (!(this.SharpCrl.pointIndex == 3 && this.getNeedleCrlById(0).switchState > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        this.canTouch = true;
                        return [3 /*break*/, 12];
                    case 4:
                        if (!(this.SharpCrl.pointIndex == 2)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                    case 6:
                        if (!(this.SharpCrl.pointIndex == 3 && this.getNeedleCrlById(0).switchState > 0)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                    case 9: return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    Level4.prototype.trigger11 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.SharpCrl.pointIndex == 3 && this.playerCrl.pointIndex == 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        if (!(this.SharpCrl.pointIndex == 3 && this.playerCrl.pointIndex == 1)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Level4.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.meatCrl.isTriggered) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 2: return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level4 = __decorate([
        ccclass
    ], Level4);
    return Level4;
}(LevelBase_1.default));
exports.default = Level4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWw0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBRTlCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVM7SUFBN0M7O0lBK0NBLENBQUM7SUE3Q1MsMEJBQVMsR0FBZjs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUE7d0JBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7OztLQUN2QjtJQUNLLDBCQUFTLEdBQWY7Ozs7OzZCQUNRLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFyQix3QkFBcUI7d0JBQ3JCLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFBOzZCQUMxQixDQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQSxFQUF6RSx3QkFBeUU7d0JBQ3pFLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTt3QkFDbEMsc0JBQU07O3dCQUVWLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7NkJBRWhCLENBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFBLEVBQTdCLHdCQUE2Qjt3QkFDN0IscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFsQyxTQUFrQyxDQUFBO3dCQUNsQyxzQkFBTTs7NkJBQ0osQ0FBQSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUEsRUFBekUsd0JBQXlFO3dCQUMzRSxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUE7d0JBQ2xDLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTt3QkFDbEMsc0JBQU07NEJBRU4scUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUNuQyxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7Ozs7OztLQUc5QztJQUNLLDBCQUFTLEdBQWY7Ozs7OzZCQUNRLENBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQSxFQUEvRCx3QkFBK0Q7d0JBQy9ELHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTt3QkFDbEMsc0JBQU07OzZCQUNDLENBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQSxFQUEvRCx3QkFBK0Q7d0JBQ3RFLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTt3QkFDbEMscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFsQyxTQUFrQyxDQUFBOzs7Ozs7S0FFekM7SUFDSywwQkFBUyxHQUFmOzs7Ozs2QkFDTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUF6Qix3QkFBeUI7d0JBQ3hCLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs7NEJBRW5DLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUNuQyxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7Ozt3QkFFdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7O0tBQ3ZCO0lBOUNnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBK0MxQjtJQUFELGFBQUM7Q0EvQ0QsQUErQ0MsQ0EvQ21DLG1CQUFTLEdBK0M1QztrQkEvQ29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuL0xldmVsQmFzZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsNCBleHRlbmRzIExldmVsQmFzZSB7XHJcblxyXG4gICAgYXN5bmMgdHJpZ2dlcjAwKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMylcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjEwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1lYXROb2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5tZWF0Q3JsLnRyaWdnZXJDQigpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMyAmJiB0aGlzLmdldE5lZWRsZUNybEJ5SWQoMCkuc3dpdGNoU3RhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH0gaWYgKHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCA9PSAzICYmIHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgwKS5zd2l0Y2hTdGF0ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMTEoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCA9PSAzICYmIHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDApXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDMgJiYgdGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMClcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIyMCgpIHtcclxuICAgICAgICBpZighdGhpcy5tZWF0Q3JsLmlzVHJpZ2dlcmVkKXtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dfb5f4tupVJtZQnbhglHLq/', 'Level7');
// Scripts/Crl/Level/Level7.ts

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
var Stone_1 = require("../Prop/Stone");
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level7 = /** @class */ (function (_super) {
    __extends(Level7, _super);
    function Level7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level7.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Stone_1.default.Share.triggerCB()];
                    case 1:
                        _a.sent();
                        if (!(this.getNeedleCrlById(3).switchState > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Stone_1.default.Share.triggerCB()];
                    case 2:
                        _a.sent();
                        this.loseCB();
                        return [2 /*return*/];
                    case 3:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level7.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.meatCrl.triggerCB()];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level7.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 1:
                        _a.sent();
                        if (!(this.Sharp.isValid && this.SharpCrl.pointIndex == 2)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        if (!(this.Sharp.isValid && this.SharpCrl.pointIndex == 3 && this.getNeedleCrlById(3).switchState > 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                    case 6:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level7.prototype.trigger30 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.SharpCrl.moveToPoint(3)];
                    case 1:
                        _a.sent();
                        if (!Stone_1.default.Share.isTriggered) return [3 /*break*/, 3];
                        return [4 /*yield*/, Stone_1.default.Share.triggerCB()];
                    case 2:
                        _a.sent();
                        LevelBase_1.default.Share.loseCB();
                        return [2 /*return*/];
                    case 3:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level7.prototype.trigger40 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.Sharp.isValid && this.SharpCrl.pointIndex == 3)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        if (!(this.playerCrl.pointIndex == 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                    case 4:
                        if (!(this.playerCrl.pointIndex == 1)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(0)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [4 /*yield*/, this.playerCrl.moveToPoint(3)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    Level7 = __decorate([
        ccclass
    ], Level7);
    return Level7;
}(LevelBase_1.default));
exports.default = Level7;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWw3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBQ2xDLHlDQUFvQztBQUU5QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFTO0lBQTdDOztJQW1EQSxDQUFDO0lBakRTLDBCQUFTLEdBQWY7Ozs7NEJBQ0kscUJBQU0sZUFBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQTdCLFNBQTZCLENBQUE7NkJBQ3pCLENBQUEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUEsRUFBeEMsd0JBQXdDO3dCQUN4QyxxQkFBTSxlQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBN0IsU0FBNkIsQ0FBQTt3QkFDN0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO3dCQUNiLHNCQUFNOzt3QkFFVixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7Ozs7S0FDdkI7SUFDSywwQkFBUyxHQUFmOzs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFBO3dCQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7Ozs7S0FDdkI7SUFDSywwQkFBUyxHQUFmOzs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs2QkFDL0IsQ0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUEsRUFBbkQsd0JBQW1EO3dCQUNuRCxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUE7d0JBQ2xDLHNCQUFNOzs2QkFDQyxDQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQSxFQUEvRix3QkFBK0Y7d0JBQ3RHLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTt3QkFDbEMscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFsQyxTQUFrQyxDQUFBO3dCQUNsQyxzQkFBTTs7d0JBRVYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7O0tBQ3ZCO0lBQ0ssMEJBQVMsR0FBZjs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUE7NkJBQzlCLGVBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUF2Qix3QkFBdUI7d0JBQ3ZCLHFCQUFNLGVBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUE3QixTQUE2QixDQUFBO3dCQUM3QixtQkFBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQTt3QkFDeEIsc0JBQU07O3dCQUVWLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7OztLQUN2QjtJQUNLLDBCQUFTLEdBQWY7Ozs7OzZCQUNRLENBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFBLEVBQW5ELHdCQUFtRDt3QkFDbkQscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFsQyxTQUFrQyxDQUFBOzZCQUM5QixDQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQSxFQUE5Qix3QkFBOEI7d0JBQzlCLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTs7NEJBRXRDLHNCQUFNOzs2QkFFRixDQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQSxFQUE5Qix3QkFBOEI7d0JBQzlCLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs7NEJBRXZDLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBOzs7Ozs7S0FFMUM7SUFsRGdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FtRDFCO0lBQUQsYUFBQztDQW5ERCxBQW1EQyxDQW5EbUMsbUJBQVMsR0FtRDVDO2tCQW5Eb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdG9uZSBmcm9tIFwiLi4vUHJvcC9TdG9uZVwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuL0xldmVsQmFzZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsNyBleHRlbmRzIExldmVsQmFzZSB7XHJcblxyXG4gICAgYXN5bmMgdHJpZ2dlcjAwKCkge1xyXG4gICAgICAgIGF3YWl0IFN0b25lLlNoYXJlLnRyaWdnZXJDQigpXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgzKS5zd2l0Y2hTdGF0ZSA+IDApIHtcclxuICAgICAgICAgICAgYXdhaXQgU3RvbmUuU2hhcmUudHJpZ2dlckNCKClcclxuICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIxMCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLm1lYXRDcmwudHJpZ2dlckNCKClcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjIwKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDEpXHJcbiAgICAgICAgaWYgKHRoaXMuU2hhcnAuaXNWYWxpZCAmJiB0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDEpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5TaGFycC5pc1ZhbGlkICYmIHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCA9PSAzICYmIHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgzKS5zd2l0Y2hTdGF0ZSA+IDApIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgyKVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDEpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjMwKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMylcclxuICAgICAgICBpZiAoU3RvbmUuU2hhcmUuaXNUcmlnZ2VyZWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgU3RvbmUuU2hhcmUudHJpZ2dlckNCKClcclxuICAgICAgICAgICAgTGV2ZWxCYXNlLlNoYXJlLmxvc2VDQigpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjQwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwLmlzVmFsaWQgJiYgdGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgzKVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/ExportCrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7de57dSE4tEJaZ954yYkzmB', 'ExportCrl');
// ExportLibs/ExportCrl.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ExportCrl = /** @class */ (function (_super) {
    __extends(ExportCrl, _super);
    function ExportCrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExportCrl.prototype.onLoad = function () {
        this.node.setContentSize(cc.view.getVisibleSize());
        this.node.setPosition(cc.v2(this.node.getContentSize().width / 2, this.node.getContentSize().height / 2));
    };
    ExportCrl.prototype.start = function () {
    };
    ExportCrl.prototype.showJJUI = function (dir, param, callback) {
        for (var i = 0; i < this.node.childrenCount; i++) {
            this.node.children[i].zIndex = this.node.children[i].name == dir ? 999 : 100;
        }
        this.node.getChildByName(dir).getComponent(dir).showUI(callback, param);
    };
    ExportCrl.prototype.closeJJUI = function (dir) {
        this.node.getChildByName(dir).active = false;
    };
    ExportCrl.prototype.closeAllJJUI = function () {
        for (var i = 0; i < this.node.childrenCount; i++) {
            this.node.children[i].active = false;
            this.node.children[i].getComponent(this.node.children[i].name).unscheduleAllCallbacks();
        }
    };
    ExportCrl = __decorate([
        ccclass
    ], ExportCrl);
    return ExportCrl;
}(cc.Component));
exports.default = ExportCrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcRXhwb3J0Q3JsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7O0lBOEJBLENBQUM7SUE1QkcsMEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQTtRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzdHLENBQUM7SUFFRCx5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxHQUFjLEVBQUUsS0FBVyxFQUFFLFFBQW1CO1FBQ3JELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7U0FDL0U7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUFVLEdBQWM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUNoRCxDQUFDO0lBRUQsZ0NBQVksR0FBWjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO1NBQzFGO0lBQ0wsQ0FBQztJQTNCZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQThCN0I7SUFBRCxnQkFBQztDQTlCRCxBQThCQyxDQTlCc0MsRUFBRSxDQUFDLFNBQVMsR0E4QmxEO2tCQTlCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4cG9ydERpciB9IGZyb20gXCIuL0V4cG9ydFV0aWxzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwb3J0Q3JsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKSlcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY2MudjIodGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGggLyAyLCB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyAyKSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0pKVUkoZGlyOiBFeHBvcnREaXIsIHBhcmFtPzogYW55LCBjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltpXS56SW5kZXggPSB0aGlzLm5vZGUuY2hpbGRyZW5baV0ubmFtZSA9PSBkaXIgPyA5OTkgOiAxMDBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGRpcikuZ2V0Q29tcG9uZW50KGRpcikuc2hvd1VJKGNhbGxiYWNrLCBwYXJhbSlcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUpKVUkoZGlyOiBFeHBvcnREaXIpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoZGlyKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQWxsSkpVSSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQodGhpcy5ub2RlLmNoaWxkcmVuW2ldLm5hbWUpLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76dab/iNgFMwIBq7kOYxdpb', 'Player');
// Scripts/Crl/Player.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var LevelBase_1 = require("./Level/LevelBase");
var PlayerAni_1 = require("./PlayerAni");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.aniCrl = null;
        _this.pointNode = null;
        _this.gotMeat = false;
        _this.isMoving = false;
        _this.moveSpeed = 1;
        _this.pointIndex = 0;
        return _this;
        // update (dt) {}
    }
    Player.prototype.onLoad = function () {
        this.pointNode = LevelBase_1.default.Share.node.getChildByName('PointNode');
        this.aniCrl = this.node.children[0].getComponent(PlayerAni_1.default);
    };
    Player.prototype.start = function () {
    };
    //吃掉食物
    Player.prototype.eatMean = function () {
        var _this = this;
        this.node.pauseAllActions();
        this.aniCrl.playAnimationByName(3);
        this.scheduleOnce(function () {
            _this.aniCrl.playAnimationByName(_this.isMoving ? 1 : 0);
            _this.node.resumeAllActions();
        }, 1);
        this.gotMeat = true;
    };
    Player.prototype.moveToPoint = function (index) {
        var _this = this;
        return new Promise(function (rs, rj) {
            if (_this.isMoving) {
                rs();
                return;
            }
            var desPos = _this.pointNode.children[index].getPosition();
            _this.node.scaleX = Math.abs(_this.node.scaleX) * (desPos.x < _this.node.x ? 1 : -1);
            _this.aniCrl.playAnimationByName(1);
            _this.isMoving = true;
            var a1 = cc.moveTo(_this.moveSpeed, desPos);
            var a2 = cc.callFunc(function () {
                _this.pointIndex = index;
                _this.isMoving = false;
                _this.aniCrl.playAnimationByName(0);
                rs();
            });
            var a3 = cc.sequence(a1, a2);
            _this.node.runAction(a3);
        });
    };
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0NBQTBDO0FBQzFDLHlDQUFvQztBQUU5QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBRGhEO1FBQUEscUVBd0RDO1FBckRHLFlBQU0sR0FBYyxJQUFJLENBQUE7UUFFeEIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixhQUFPLEdBQVksS0FBSyxDQUFBO1FBRXhCLGNBQVEsR0FBWSxLQUFLLENBQUE7UUFDekIsZUFBUyxHQUFXLENBQUMsQ0FBQTtRQUNyQixnQkFBVSxHQUFXLENBQUMsQ0FBQTs7UUE0Q3RCLGlCQUFpQjtJQUNyQixDQUFDO0lBM0NHLHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDakUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFBO0lBQy9ELENBQUM7SUFFRCxzQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELE1BQU07SUFDTix3QkFBTyxHQUFQO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN0RCxLQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7UUFDaEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7SUFDdkIsQ0FBQztJQUVELDRCQUFXLEdBQVgsVUFBWSxLQUFhO1FBQXpCLGlCQW9CQztRQW5CRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsRUFBRSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNmLEVBQUUsRUFBRSxDQUFBO2dCQUNKLE9BQU07YUFDVDtZQUNELElBQUksTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQ3pELEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNqRixLQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2xDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1lBQ3BCLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUMxQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNqQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtnQkFDdkIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7Z0JBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ2xDLEVBQUUsRUFBRSxDQUFBO1lBQ1IsQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtZQUM1QixLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFwRGdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F1RDFCO0lBQUQsYUFBQztDQXZERCxBQXVEQyxDQXZEbUMsRUFBRSxDQUFDLFNBQVMsR0F1RC9DO2tCQXZEb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMZXZlbDEgZnJvbSBcIi4vTGV2ZWwvTGV2ZWwxXCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWwvTGV2ZWxCYXNlXCI7XHJcbmltcG9ydCBQbGF5ZXJBbmkgZnJvbSBcIi4vUGxheWVyQW5pXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBhbmlDcmw6IFBsYXllckFuaSA9IG51bGxcclxuXHJcbiAgICBwb2ludE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgZ290TWVhdDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgaXNNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgbW92ZVNwZWVkOiBudW1iZXIgPSAxXHJcbiAgICBwb2ludEluZGV4OiBudW1iZXIgPSAwXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucG9pbnROb2RlID0gTGV2ZWxCYXNlLlNoYXJlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1BvaW50Tm9kZScpXHJcbiAgICAgICAgdGhpcy5hbmlDcmwgPSB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KFBsYXllckFuaSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy/lkIPmjonpo5/nialcclxuICAgIGVhdE1lYW4oKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhdXNlQWxsQWN0aW9ucygpXHJcbiAgICAgICAgdGhpcy5hbmlDcmwucGxheUFuaW1hdGlvbkJ5TmFtZSgzKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmlDcmwucGxheUFuaW1hdGlvbkJ5TmFtZSh0aGlzLmlzTW92aW5nID8gMSA6IDApXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZXN1bWVBbGxBY3Rpb25zKClcclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIHRoaXMuZ290TWVhdCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9Qb2ludChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChycywgcmopID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJzKClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBkZXNQb3MgPSB0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbltpbmRleF0uZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gTWF0aC5hYnModGhpcy5ub2RlLnNjYWxlWCkgKiAoZGVzUG9zLnggPCB0aGlzLm5vZGUueCA/IDEgOiAtMSlcclxuICAgICAgICAgICAgdGhpcy5hbmlDcmwucGxheUFuaW1hdGlvbkJ5TmFtZSgxKVxyXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICBsZXQgYTEgPSBjYy5tb3ZlVG8odGhpcy5tb3ZlU3BlZWQsIGRlc1BvcylcclxuICAgICAgICAgICAgbGV0IGEyID0gY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludEluZGV4ID0gaW5kZXhcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmlDcmwucGxheUFuaW1hdGlvbkJ5TmFtZSgwKVxyXG4gICAgICAgICAgICAgICAgcnMoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsZXQgYTMgPSBjYy5zZXF1ZW5jZShhMSwgYTIpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYTMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level11.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3618K1JedBu4290RAeUsUq', 'Level11');
// Scripts/Crl/Level/Level11.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level11 = /** @class */ (function (_super) {
    __extends(Level11, _super);
    function Level11() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Electric = null;
        return _this;
    }
    Level11.prototype.onEnable = function () {
    };
    Level11.prototype.updateCB = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Level11.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.canTouch = false;
                this.scheduleOnce(function () {
                    _this.Electric.destroy();
                    _this.canTouch = true;
                }, 2);
                return [2 /*return*/];
            });
        });
    };
    Level11.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playerCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        if (this.Electric.isValid) {
                            this.loseCB();
                            return [2 /*return*/];
                        }
                        if (!(this.getNeedleCrlById(2).switchState > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.canTouch = true;
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Level11.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Level11.prototype, "Electric", void 0);
    Level11 = __decorate([
        ccclass
    ], Level11);
    return Level11;
}(LevelBase_1.default));
exports.default = Level11;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUU5QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFTO0lBRDlDO1FBQUEscUVBMENDO1FBdENHLGNBQVEsR0FBWSxJQUFJLENBQUE7O0lBc0M1QixDQUFDO0lBcENHLDBCQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUssMEJBQVEsR0FBZDs7Ozs7O0tBRUM7SUFFSywyQkFBUyxHQUFmOzs7O2dCQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO2dCQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUE7b0JBQ3ZCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2dCQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Ozs7S0FDUjtJQUNLLDJCQUFTLEdBQWY7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUVuQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFOzRCQUN2QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7NEJBQ2Isc0JBQU07eUJBQ1Q7NkJBRUcsQ0FBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQSxFQUF4Qyx3QkFBd0M7d0JBQ3hDLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBOzs7d0JBRW5DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7Ozs7S0FFM0I7SUFDSywyQkFBUyxHQUFmOzs7Ozs2QkFDUSxDQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQSxFQUE5Qix3QkFBOEI7d0JBQzlCLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBOzs7Ozs7S0FFMUM7SUFyQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUhQLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F5QzNCO0lBQUQsY0FBQztDQXpDRCxBQXlDQyxDQXpDb0MsbUJBQVMsR0F5QzdDO2tCQXpDb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwxMSBleHRlbmRzIExldmVsQmFzZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBFbGVjdHJpYzogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlQ0IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHRyaWdnZXIwMCgpIHtcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuRWxlY3RyaWMuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIxMCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgwKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5FbGVjdHJpYy5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5nZXROZWVkbGVDcmxCeUlkKDIpLnN3aXRjaFN0YXRlID4gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgyKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjIwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/Meat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0645KFQ2hFw7jXMP2cWpkN', 'Meat');
// Scripts/Crl/Prop/Meat.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../../Mod/Utility");
var LevelBase_1 = require("../Level/LevelBase");
var Player_1 = require("../Player");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Meat = /** @class */ (function (_super) {
    __extends(Meat, _super);
    function Meat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveByY = 0;
        _this.moveTime = 1;
        _this.playerNode = null;
        _this.isMoveing = false;
        _this.isTriggered = false;
        return _this;
    }
    // onLoad () {}
    Meat.prototype.start = function () {
        this.playerNode = LevelBase_1.default.Share.playerNode;
    };
    //触发事件
    Meat.prototype.triggerCB = function () {
        var _this = this;
        return new Promise(function (rs, rj) {
            _this.isMoveing = true;
            var a1 = cc.moveBy(_this.moveTime, cc.v2(0, _this.moveByY));
            var a2 = cc.callFunc(function () {
                _this.isMoveing = false;
                _this.isTriggered = true;
                rs();
            });
            var a3 = cc.sequence(a1, a2);
            _this.node.runAction(a3);
        });
    };
    //检测是否碰到美人鱼
    Meat.prototype.eatByPlayer = function () {
        if (this.playerNode) {
            var dis = Utility_1.default.getWorldDis(this.node, this.playerNode);
            if (dis <= 50 && !this.isMoveing) {
                //被吃掉
                this.playerNode.getComponent(Player_1.default).eatMean();
                this.node.destroy();
            }
        }
    };
    Meat.prototype.eatBySharp = function () {
        if (LevelBase_1.default.Share.Sharp && LevelBase_1.default.Share.Sharp.isValid) {
            var dis = Utility_1.default.getWorldDis(this.node, LevelBase_1.default.Share.Sharp);
            if (dis <= 50 && !this.isMoveing) {
                //被吃掉
                LevelBase_1.default.Share.SharpCrl.aniCrl.playAnimationByName(3);
                this.node.destroy();
                LevelBase_1.default.Share.loseCB();
            }
        }
    };
    Meat.prototype.update = function (dt) {
        this.eatByPlayer();
        this.eatBySharp();
    };
    __decorate([
        property
    ], Meat.prototype, "moveByY", void 0);
    __decorate([
        property
    ], Meat.prototype, "moveTime", void 0);
    Meat = __decorate([
        ccclass
    ], Meat);
    return Meat;
}(cc.Component));
exports.default = Meat;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxNZWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QyxnREFBMkM7QUFDM0Msb0NBQStCO0FBRXpCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFEOUM7UUFBQSxxRUErREM7UUEzREcsYUFBTyxHQUFXLENBQUMsQ0FBQTtRQUduQixjQUFRLEdBQVcsQ0FBQyxDQUFBO1FBRXBCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGVBQVMsR0FBWSxLQUFLLENBQUE7UUFDMUIsaUJBQVcsR0FBWSxLQUFLLENBQUE7O0lBbURoQyxDQUFDO0lBakRHLGVBQWU7SUFFZixvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUE7SUFDaEQsQ0FBQztJQUVELE1BQU07SUFDTix3QkFBUyxHQUFUO1FBQUEsaUJBWUM7UUFYRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsRUFBRSxFQUFFLEVBQUU7WUFDdEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7WUFDckIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1lBQ3pELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO2dCQUN0QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtnQkFDdkIsRUFBRSxFQUFFLENBQUE7WUFDUixDQUFDLENBQUMsQ0FBQTtZQUNGLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQzVCLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELFdBQVc7SUFDWCwwQkFBVyxHQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksR0FBRyxHQUFHLGlCQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3pELElBQUksR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQzlCLEtBQUs7Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO2FBQ3RCO1NBQ0o7SUFDTCxDQUFDO0lBRUQseUJBQVUsR0FBVjtRQUNJLElBQUksbUJBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLG1CQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDeEQsSUFBSSxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxtQkFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUMvRCxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUM5QixLQUFLO2dCQUNMLG1CQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ25CLG1CQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFBO2FBQzNCO1NBQ0o7SUFDTCxDQUFDO0lBRUQscUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUExREQ7UUFEQyxRQUFRO3lDQUNVO0lBR25CO1FBREMsUUFBUTswQ0FDVztJQU5ILElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E4RHhCO0lBQUQsV0FBQztDQTlERCxBQThEQyxDQTlEaUMsRUFBRSxDQUFDLFNBQVMsR0E4RDdDO2tCQTlEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuLi9MZXZlbC9MZXZlbEJhc2VcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtb3ZlQnlZOiBudW1iZXIgPSAwXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtb3ZlVGltZTogbnVtYmVyID0gMVxyXG5cclxuICAgIHBsYXllck5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgaXNNb3ZlaW5nOiBib29sZWFuID0gZmFsc2VcclxuICAgIGlzVHJpZ2dlcmVkOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllck5vZGUgPSBMZXZlbEJhc2UuU2hhcmUucGxheWVyTm9kZVxyXG4gICAgfVxyXG5cclxuICAgIC8v6Kem5Y+R5LqL5Lu2XHJcbiAgICB0cmlnZ2VyQ0IoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChycywgcmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdmVpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgIGxldCBhMSA9IGNjLm1vdmVCeSh0aGlzLm1vdmVUaW1lLCBjYy52MigwLCB0aGlzLm1vdmVCeVkpKVxyXG4gICAgICAgICAgICBsZXQgYTIgPSBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92ZWluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVHJpZ2dlcmVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgcnMoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsZXQgYTMgPSBjYy5zZXF1ZW5jZShhMSwgYTIpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYTMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+ajgOa1i+aYr+WQpueisOWIsOe+juS6uumxvFxyXG4gICAgZWF0QnlQbGF5ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyTm9kZSkge1xyXG4gICAgICAgICAgICBsZXQgZGlzID0gVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLm5vZGUsIHRoaXMucGxheWVyTm9kZSlcclxuICAgICAgICAgICAgaWYgKGRpcyA8PSA1MCAmJiAhdGhpcy5pc01vdmVpbmcpIHtcclxuICAgICAgICAgICAgICAgIC8v6KKr5ZCD5o6JXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllck5vZGUuZ2V0Q29tcG9uZW50KFBsYXllcikuZWF0TWVhbigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWF0QnlTaGFycCgpIHtcclxuICAgICAgICBpZiAoTGV2ZWxCYXNlLlNoYXJlLlNoYXJwICYmIExldmVsQmFzZS5TaGFyZS5TaGFycC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXMgPSBVdGlsaXR5LmdldFdvcmxkRGlzKHRoaXMubm9kZSwgTGV2ZWxCYXNlLlNoYXJlLlNoYXJwKVxyXG4gICAgICAgICAgICBpZiAoZGlzIDw9IDUwICYmICF0aGlzLmlzTW92ZWluZykge1xyXG4gICAgICAgICAgICAgICAgLy/ooqvlkIPmjolcclxuICAgICAgICAgICAgICAgIExldmVsQmFzZS5TaGFyZS5TaGFycENybC5hbmlDcmwucGxheUFuaW1hdGlvbkJ5TmFtZSgzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgTGV2ZWxCYXNlLlNoYXJlLmxvc2VDQigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5lYXRCeVBsYXllcigpXHJcbiAgICAgICAgdGhpcy5lYXRCeVNoYXJwKClcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Mod/ShareMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b4c7AXPuFDnarPbQkFRvnP', 'ShareMgr');
// Scripts/Mod/ShareMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WxApi_1 = require("../Libs/WxApi");
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var ShareMgr = /** @class */ (function () {
    function ShareMgr() {
        this.path = '';
        this.picCount = 3;
        this.preT = 0;
        this.shareTips = [
            '请分享到活跃的群！',
            '请分享到不同群！',
            '请分享给好友！',
            '请分享给20人以上的群！'
        ];
    }
    Object.defineProperty(ShareMgr, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new ShareMgr();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    //初始化分享  
    ShareMgr.prototype.initShare = function () {
        var _this = this;
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            //开启右上角的分享
            window["wx"].showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline']
            });
            var dir_1 = ExportUtils_1.default.instance.exportCfg.front_share_config.image;
            var content_1 = ExportUtils_1.default.instance.exportCfg.front_share_config.title;
            window["wx"].onShareAppMessage(function (res) {
                return {
                    title: content_1,
                    imageUrl: dir_1,
                };
            });
            // cc.loader.loadRes(dir, function (err, data) {
            //     window["wx"].onShareAppMessage(function (res) {
            //         return {
            //             title: content,
            //             imageUrl: data.url,
            //         }
            //     })
            // });
            window["wx"].onShow(function (para) {
                if (WxApi_1.default.shareCallback) {
                    var t = new Date().getTime();
                    var diff = t - WxApi_1.default.shareTime;
                    if (diff / 1000 >= 3 && !WxApi_1.default.firstShare) {
                        WxApi_1.default.shareCallback();
                        WxApi_1.default.front_share_number--;
                        window["wx"].showToast({
                            title: '分享成功',
                            icon: 'none',
                            duration: 2000
                        });
                        WxApi_1.default.shareCallback = null;
                    }
                    else {
                        WxApi_1.default.firstShare = false;
                        window["wx"].showModal({
                            title: '提示',
                            content: _this.shareTips[Math.floor(Math.random() * _this.shareTips.length)],
                            confirmText: '重新分享',
                            success: function (res) {
                                if (res.confirm) {
                                    console.log('用户点击确定');
                                    ShareMgr.instance.shareGame(WxApi_1.default.shareCallback);
                                }
                                else if (res.cancel) {
                                    console.log('用户点击取消');
                                }
                            }
                        });
                    }
                }
            });
        }
    };
    ShareMgr.prototype.shareGame = function (cb) {
        // if (WxApi.front_share_number <= 0) {
        //     AdMgr.instance.showVideo(cb)
        //     return
        // }
        WxApi_1.default.shareCallback = cb;
        if (cc.sys.platform !== cc.sys.WECHAT_GAME) {
            cb();
            return;
        }
        WxApi_1.default.shareTime = new Date().getTime();
        var dir = ExportUtils_1.default.instance.exportCfg.front_share_config.image;
        var content = ExportUtils_1.default.instance.exportCfg.front_share_config.title;
        window["wx"].shareAppMessage({
            title: content,
            imageUrl: dir
        });
        // cc.loader.loadRes(dir, (err, data) => {
        //     window["wx"].shareAppMessage({
        //         title: content,
        //         imageUrl: data.url
        //     })
        // });
    };
    return ShareMgr;
}());
exports.default = ShareMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kXFxTaGFyZU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHVDQUFpQztBQUNqQyw0REFBZ0Q7QUFHaEQ7SUFBQTtRQVNZLFNBQUksR0FBVyxFQUFFLENBQUE7UUFDakIsYUFBUSxHQUFXLENBQUMsQ0FBQTtRQUVwQixTQUFJLEdBQVcsQ0FBQyxDQUFBO1FBRXhCLGNBQVMsR0FBYTtZQUNsQixXQUFXO1lBQ1gsVUFBVTtZQUNWLFNBQVM7WUFDVCxjQUFjO1NBQUMsQ0FBQTtJQXdGdkIsQ0FBQztJQXhHRyxzQkFBa0Isb0JBQVE7YUFBMUI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFBO2FBQ2xDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7OztPQUFBO0lBYUQsU0FBUztJQUNULDRCQUFTLEdBQVQ7UUFBQSxpQkF5REM7UUF4REcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUN4QyxVQUFVO1lBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFDdkIsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLEtBQUssRUFBRSxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQzthQUM5QyxDQUFDLENBQUM7WUFFSCxJQUFJLEtBQUcsR0FBRyxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFBO1lBQzNELElBQUksU0FBTyxHQUFHLHFCQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUE7WUFDL0QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBRztnQkFD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UUFDN0IsU0FBUztRQUNULE1BQU07SUFDVixDQUFDO0lBRUwsZUFBQztBQUFELENBMUdBLEFBMEdDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEFkTWdyIGZyb20gXCIuL0FkTWdyXCJcclxuaW1wb3J0IFd4QXBpIGZyb20gXCIuLi9MaWJzL1d4QXBpXCJcclxuaW1wb3J0IEpKTWdyIGZyb20gXCIuLi8uLi9FeHBvcnRMaWJzL0V4cG9ydFV0aWxzXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFyZU1nciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFNoYXJlTWdyXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBTaGFyZU1nciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTaGFyZU1ncigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGF0aDogc3RyaW5nID0gJydcclxuICAgIHByaXZhdGUgcGljQ291bnQ6IG51bWJlciA9IDNcclxuXHJcbiAgICBwcml2YXRlIHByZVQ6IG51bWJlciA9IDBcclxuXHJcbiAgICBzaGFyZVRpcHM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICfor7fliIbkuqvliLDmtLvot4PnmoTnvqTvvIEnLFxyXG4gICAgICAgICfor7fliIbkuqvliLDkuI3lkIznvqTvvIEnLFxyXG4gICAgICAgICfor7fliIbkuqvnu5nlpb3lj4vvvIEnLFxyXG4gICAgICAgICfor7fliIbkuqvnu5kyMOS6uuS7peS4iueahOe+pO+8gSddXHJcblxyXG4gICAgLy/liJ3lp4vljJbliIbkuqsgIFxyXG4gICAgaW5pdFNoYXJlKCkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAvL+W8gOWQr+WPs+S4iuinkueahOWIhuS6q1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS5zaG93U2hhcmVNZW51KHtcclxuICAgICAgICAgICAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lbnVzOiBbJ3NoYXJlQXBwTWVzc2FnZScsICdzaGFyZVRpbWVsaW5lJ11cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlyID0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3NoYXJlX2NvbmZpZy5pbWFnZVxyXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9zaGFyZV9jb25maWcudGl0bGVcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogZGlyLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcyhkaXIsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gICAgIHdpbmRvd1tcInd4XCJdLm9uU2hhcmVBcHBNZXNzYWdlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aXRsZTogY29udGVudCxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ub25TaG93KChwYXJhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoV3hBcGkuc2hhcmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlmZiA9IHQgLSBXeEFwaS5zaGFyZVRpbWVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZiAvIDEwMDAgPj0gMyAmJiAhV3hBcGkuZmlyc3RTaGFyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBXeEFwaS5zaGFyZUNhbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgV3hBcGkuZnJvbnRfc2hhcmVfbnVtYmVyLS1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93W1wid3hcIl0uc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5YiG5Lqr5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFd4QXBpLnNoYXJlQ2FsbGJhY2sgPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgV3hBcGkuZmlyc3RTaGFyZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnNoYXJlVGlwc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnNoYXJlVGlwcy5sZW5ndGgpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn6YeN5paw5YiG5LqrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaGFyZU1nci5pbnN0YW5jZS5zaGFyZUdhbWUoV3hBcGkuc2hhcmVDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hhcmVHYW1lKGNiOiBGdW5jdGlvbikge1xyXG4gICAgICAgIC8vIGlmIChXeEFwaS5mcm9udF9zaGFyZV9udW1iZXIgPD0gMCkge1xyXG4gICAgICAgIC8vICAgICBBZE1nci5pbnN0YW5jZS5zaG93VmlkZW8oY2IpXHJcbiAgICAgICAgLy8gICAgIHJldHVyblxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgV3hBcGkuc2hhcmVDYWxsYmFjayA9IGNiXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSAhPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgV3hBcGkuc2hhcmVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgICBsZXQgZGlyID0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3NoYXJlX2NvbmZpZy5pbWFnZVxyXG4gICAgICAgIGxldCBjb250ZW50ID0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3NoYXJlX2NvbmZpZy50aXRsZVxyXG4gICAgICAgIHdpbmRvd1tcInd4XCJdLnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBjb250ZW50LFxyXG4gICAgICAgICAgICBpbWFnZVVybDogZGlyXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcyhkaXIsIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgICAvLyAgICAgd2luZG93W1wid3hcIl0uc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAvLyAgICAgICAgIHRpdGxlOiBjb250ZW50LFxyXG4gICAgICAgIC8vICAgICAgICAgaW1hZ2VVcmw6IGRhdGEudXJsXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/FullGameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab3few7iJVE6ZOrRaammn4s', 'FullGameUI');
// ExportLibs/View/FullGameUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ExportUtils_1 = require("../ExportUtils");
var Utility_1 = require("../../Scripts/Mod/Utility");
var WxApi_1 = require("../../Scripts/Libs/WxApi");
var AdMgr_1 = require("../../Scripts/Mod/AdMgr");
var PlayerDataMgr_1 = require("../../Scripts/Libs/PlayerDataMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FullGameUI = /** @class */ (function (_super) {
    __extends(FullGameUI, _super);
    function FullGameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.scroll = null;
        _this.content = null;
        _this.myNavArr = [];
        _this.hotArr = [];
        _this.closeCallback = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    FullGameUI.prototype.start = function () {
    };
    FullGameUI.prototype.showUI = function (callback, param) {
        if (callback) {
            this.closeCallback = callback;
        }
        this.node.active = true;
        WxApi_1.default.aldEvent('网红爆款全屏幕导出页出现次数');
    };
    FullGameUI.prototype.onEnable = function () {
        this.myNavArr = [].concat(ExportUtils_1.default.instance.navigateAppArr);
        this.getHotRandArr();
        this._init();
        if (ExportUtils_1.default.instance.exportCfg.front_all_screen_auto) {
            this.randomNav();
        }
        Utility_1.default.delayActive(this.node.getChildByName('continueBtn'), ExportUtils_1.default.instance.exportCfg.front_export_delay / 1000, this);
        AdMgr_1.default.instance.hideBanner();
        this.scheduleOnce(function () {
            WxApi_1.default.bannerWuChu2();
        }, ExportUtils_1.default.instance.exportCfg.front_export_delay / 1000);
        this.node.getChildByName('randomBtn').active = WxApi_1.default.isValidBanner() &&
            PlayerDataMgr_1.default.getPlayerData().grade >= ExportUtils_1.default.instance.exportCfg.front_randompaly_start_level;
    };
    FullGameUI.prototype.onDisable = function () {
        clearTimeout(WxApi_1.default.bannerTO2);
        AdMgr_1.default.instance.hideBanner();
        this.unscheduleAllCallbacks();
        this.content.destroyAllChildren();
        this.closeCallback && this.closeCallback();
        this.closeCallback = null;
    };
    FullGameUI.prototype.getHotRandArr = function () {
        this.hotArr = [];
        var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        arr = ExportUtils_1.default.instance.shuffleArr(arr);
        this.hotArr = arr.slice(0, 3);
    };
    FullGameUI.prototype._init = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var node = cc.instantiate(this_1.item);
            node.active = true;
            this_1.content.addChild(node);
            var colorBar = node.getChildByName('colorBar').getComponent(cc.Sprite);
            var name = node.getChildByName('name').getComponent(cc.Label);
            var icon = node.getChildByName('icon').getComponent(cc.Sprite);
            var hot = node.getChildByName('hot');
            ExportUtils_1.default.instance.loadSpriteFrame('ExportRes/' + (Math.floor(i % 9) + 1), colorBar);
            name.string = ExportUtils_1.default.instance.getSubtitle(i);
            ExportUtils_1.default.instance.loadImgByUrl(icon, this_1.myNavArr[i].icon);
            hot.active = this_1.hotArr.indexOf(i) != -1;
            node.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, i); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.myNavArr.length; i++) {
            _loop_1(i);
        }
    };
    FullGameUI.prototype.continueCB = function () {
        this.node.active = false;
    };
    FullGameUI.prototype.randomNav = function () {
        var id = Math.floor(Math.random() * 6);
        this.navCB(null, id);
    };
    FullGameUI.prototype.navCB = function (event, id) {
        console.log('click id:', id);
        WxApi_1.default.aldEvent('网红爆款全屏幕导出页-总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () { }, function () {
            WxApi_1.default.aldEvent('网红爆款全屏幕导出页-总成功跳转数');
        });
    };
    __decorate([
        property(cc.Node)
    ], FullGameUI.prototype, "item", void 0);
    __decorate([
        property(cc.ScrollView)
    ], FullGameUI.prototype, "scroll", void 0);
    __decorate([
        property(cc.Node)
    ], FullGameUI.prototype, "content", void 0);
    FullGameUI = __decorate([
        ccclass
    ], FullGameUI);
    return FullGameUI;
}(cc.Component));
exports.default = FullGameUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcRnVsbEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4Q0FBbUM7QUFDbkMscURBQWdEO0FBQ2hELGtEQUE2QztBQUM3QyxpREFBNEM7QUFDNUMsa0VBQTZEO0FBRXZELElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFEcEQ7UUFBQSxxRUF3R0M7UUFwR0csVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUc1QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBRXZCLGNBQVEsR0FBVSxFQUFFLENBQUE7UUFFcEIsWUFBTSxHQUFhLEVBQUUsQ0FBQTtRQUVyQixtQkFBYSxHQUFhLElBQUksQ0FBQTs7UUF1RjlCLGlCQUFpQjtJQUNyQixDQUFDO0lBdEZHLGVBQWU7SUFFZiwwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxRQUFtQixFQUFFLEtBQVc7UUFDbkMsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQTtTQUNoQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUN2QixlQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNaLElBQUkscUJBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHFCQUFxQixF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QVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQWpHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNFO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7OENBQ0k7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDSztJQVROLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F1RzlCO0lBQUQsaUJBQUM7Q0F2R0QsQUF1R0MsQ0F2R3VDLEVBQUUsQ0FBQyxTQUFTLEdBdUduRDtrQkF2R29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSkpIdHRwIGZyb20gXCIuLi9FeHBvcnRIdHRwVXRpbHNcIjtcclxuaW1wb3J0IEpKTWdyIGZyb20gXCIuLi9FeHBvcnRVdGlsc1wiO1xyXG5pbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgV3hBcGkgZnJvbSBcIi4uLy4uL1NjcmlwdHMvTGlicy9XeEFwaVwiO1xyXG5pbXBvcnQgQWRNZ3IgZnJvbSBcIi4uLy4uL1NjcmlwdHMvTW9kL0FkTWdyXCI7XHJcbmltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi8uLi9TY3JpcHRzL0xpYnMvUGxheWVyRGF0YU1nclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxHYW1lVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcclxuICAgIHNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgbXlOYXZBcnI6IGFueVtdID0gW11cclxuXHJcbiAgICBob3RBcnI6IG51bWJlcltdID0gW11cclxuXHJcbiAgICBjbG9zZUNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1VJKGNhbGxiYWNrPzogRnVuY3Rpb24sIHBhcmFtPzogYW55KSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VDYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+e9kee6oueIhuasvuWFqOWxj+W5leWvvOWHuumhteWHuueOsOasoeaVsCcpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5teU5hdkFyciA9IFtdLmNvbmNhdChKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFycilcclxuICAgICAgICB0aGlzLmdldEhvdFJhbmRBcnIoKVxyXG4gICAgICAgIHRoaXMuX2luaXQoKVxyXG4gICAgICAgIGlmIChKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfYWxsX3NjcmVlbl9hdXRvKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZG9tTmF2KClcclxuICAgICAgICB9XHJcbiAgICAgICAgVXRpbGl0eS5kZWxheUFjdGl2ZSh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2NvbnRpbnVlQnRuJyksIEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9leHBvcnRfZGVsYXkgLyAxMDAwLCB0aGlzKVxyXG5cclxuICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIFd4QXBpLmJhbm5lcld1Q2h1MigpXHJcbiAgICAgICAgfSwgSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X2V4cG9ydF9kZWxheSAvIDEwMDApXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncmFuZG9tQnRuJykuYWN0aXZlID0gV3hBcGkuaXNWYWxpZEJhbm5lcigpICYmXHJcbiAgICAgICAgICAgIFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlID49IEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9yYW5kb21wYWx5X3N0YXJ0X2xldmVsXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChXeEFwaS5iYW5uZXJUTzIpXHJcbiAgICAgICAgQWRNZ3IuaW5zdGFuY2UuaGlkZUJhbm5lcigpXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKClcclxuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgJiYgdGhpcy5jbG9zZUNhbGxiYWNrKClcclxuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SG90UmFuZEFycigpIHtcclxuICAgICAgICB0aGlzLmhvdEFyciA9IFtdXHJcbiAgICAgICAgbGV0IGFycjogbnVtYmVyW10gPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOF1cclxuICAgICAgICBhcnIgPSBKSk1nci5pbnN0YW5jZS5zaHVmZmxlQXJyKGFycilcclxuICAgICAgICB0aGlzLmhvdEFyciA9IGFyci5zbGljZSgwLCAzKVxyXG4gICAgfVxyXG5cclxuICAgIF9pbml0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5teU5hdkFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbSlcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChub2RlKVxyXG5cclxuICAgICAgICAgICAgbGV0IGNvbG9yQmFyOiBjYy5TcHJpdGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdjb2xvckJhcicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgICAgIGxldCBuYW1lOiBjYy5MYWJlbCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIGxldCBpY29uOiBjYy5TcHJpdGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdpY29uJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICAgICAgbGV0IGhvdDogY2MuTm9kZSA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2hvdCcpXHJcblxyXG4gICAgICAgICAgICBKSk1nci5pbnN0YW5jZS5sb2FkU3ByaXRlRnJhbWUoJ0V4cG9ydFJlcy8nICsgKE1hdGguZmxvb3IoaSAlIDkpICsgMSksIGNvbG9yQmFyKVxyXG4gICAgICAgICAgICBuYW1lLnN0cmluZyA9IEpKTWdyLmluc3RhbmNlLmdldFN1YnRpdGxlKGkpXHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLmxvYWRJbWdCeVVybChpY29uLCB0aGlzLm15TmF2QXJyW2ldLmljb24pXHJcbiAgICAgICAgICAgIGhvdC5hY3RpdmUgPSB0aGlzLmhvdEFyci5pbmRleE9mKGkpICE9IC0xXHJcblxyXG4gICAgICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7IHRoaXMubmF2Q0IoZXZlbnQsIGkpIH0sIHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRpbnVlQ0IoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tTmF2KCkge1xyXG4gICAgICAgIGxldCBpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpXHJcbiAgICAgICAgdGhpcy5uYXZDQihudWxsLCBpZClcclxuICAgIH1cclxuXHJcbiAgICBuYXZDQihldmVudDogY2MuRXZlbnQsIGlkOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2sgaWQ6JywgaWQpXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+e9kee6oueIhuasvuWFqOWxj+W5leWvvOWHuumhtS3mgLvngrnlh7vmlbAnKVxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLk5hdmlnYXRlQXBwKGlkLCAoKSA9PiB7IH0sICgpID0+IHtcclxuICAgICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+e9kee6oueIhuasvuWFqOWxj+W5leWvvOWHuumhtS3mgLvmiJDlip/ot7PovazmlbAnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/ExportHttpUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46bc0f0+qFCSpzEJp3chavH', 'ExportHttpUtils');
// ExportLibs/ExportHttpUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JJHttp = /** @class */ (function () {
    function JJHttp() {
    }
    Object.defineProperty(JJHttp, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new JJHttp();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    JJHttp.prototype.httpGet = function (url, callback) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                var respone = JSON.parse(xhr.responseText);
                callback(respone);
            }
        };
        xhr.open("GET", url, true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.timeout = 5000; // 5 seconds for timeout
        xhr.send();
    };
    JJHttp.prototype.httpPost = function (url, params, callback) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function () {
            //cc.log('xhr.readyState=' + xhr.readyState + '  xhr.status=' + xhr.status);
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                var respone = JSON.parse(xhr.responseText);
                callback(respone);
            }
        };
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.timeout = 5000; // 5 seconds for timeout
        xhr.send(params);
    };
    return JJHttp;
}());
exports.default = JJHttp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcRXhwb3J0SHR0cFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQXdDQSxDQUFDO0lBdENHLHNCQUFrQixrQkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUE7YUFDaEM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCx3QkFBTyxHQUFQLFVBQVEsR0FBRyxFQUFFLFFBQVE7UUFDakIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztZQUNyQixJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBRTtnQkFDakUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzNDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyQjtRQUNMLENBQUMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQixHQUFHLENBQUMsZ0JBQWdCLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekQsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUEsd0JBQXdCO1FBQzNDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCx5QkFBUSxHQUFSLFVBQVMsR0FBRyxFQUFFLE1BQU0sRUFBRSxRQUFRO1FBQzFCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4QyxHQUFHLENBQUMsa0JBQWtCLEdBQUc7WUFDckIsNEVBQTRFO1lBQzVFLElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUNqRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDM0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JCO1FBQ0wsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDekQsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQSx3QkFBd0I7UUFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVyQixDQUFDO0lBQ0wsYUFBQztBQUFELENBeENBLEFBd0NDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBKSkh0dHAge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBKSkh0dHBcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IEpKSHR0cCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBKSkh0dHAoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBodHRwR2V0KHVybCwgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbmUgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHhoci50aW1lb3V0ID0gNTAwMDsvLyA1IHNlY29uZHMgZm9yIHRpbWVvdXRcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGh0dHBQb3N0KHVybCwgcGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL2NjLmxvZygneGhyLnJlYWR5U3RhdGU9JyArIHhoci5yZWFkeVN0YXRlICsgJyAgeGhyLnN0YXR1cz0nICsgeGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNwb25lID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgeGhyLnRpbWVvdXQgPSA1MDAwOy8vIDUgc2Vjb25kcyBmb3IgdGltZW91dFxyXG4gICAgICAgIHhoci5zZW5kKHBhcmFtcyk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/FriendGameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6bf1qdOV5POYvxGOLUycuW', 'FriendGameUI');
// ExportLibs/View/FriendGameUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ExportUtils_1 = require("../ExportUtils");
var WxApi_1 = require("../../Scripts/Libs/WxApi");
var AdMgr_1 = require("../../Scripts/Mod/AdMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FriendGameUI = /** @class */ (function (_super) {
    __extends(FriendGameUI, _super);
    function FriendGameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.scroll = null;
        _this.content = null;
        _this.myNavArr = [];
        _this.closeCallback = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    FriendGameUI.prototype.start = function () {
    };
    FriendGameUI.prototype.showUI = function (callback, param) {
        if (callback) {
            this.closeCallback = callback;
        }
        this.node.active = true;
        WxApi_1.default.aldEvent('好友都在玩的爆款游戏弹窗出现次数');
    };
    FriendGameUI.prototype.onEnable = function () {
        var _this = this;
        this.myNavArr = [].concat(ExportUtils_1.default.instance.navigateAppArr);
        this._init();
        this.node.getChildByName('closeBtn').active = false;
        this.scheduleOnce(function () {
            _this.node.getChildByName('closeBtn').active = true;
            AdMgr_1.default.instance.hideBanner();
            WxApi_1.default.bannerWuChu1();
        }, 1.5);
    };
    FriendGameUI.prototype.onDisable = function () {
        clearTimeout(WxApi_1.default.bannerTO1);
        AdMgr_1.default.instance.hideBanner();
        this.unscheduleAllCallbacks();
        this.content.destroyAllChildren();
        this.closeCallback && this.closeCallback();
        this.closeCallback = null;
    };
    FriendGameUI.prototype._init = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var node = cc.instantiate(this_1.item);
            node.active = true;
            this_1.content.addChild(node);
            var name = node.getChildByName('name').getComponent(cc.Label);
            var icon = node.getChildByName('icon').getComponent(cc.Sprite);
            name.string = ExportUtils_1.default.instance.getSubtitle(i);
            ExportUtils_1.default.instance.loadImgByUrl(icon, this_1.myNavArr[i].icon);
            node.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, i); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.myNavArr.length; i++) {
            _loop_1(i);
        }
    };
    FriendGameUI.prototype.closeCB = function () {
        this.node.active = false;
    };
    FriendGameUI.prototype.navCB = function (event, id) {
        console.log('click id:', id);
        WxApi_1.default.aldEvent('好友都在玩的爆款游戏弹窗-总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FULLGAMEUI);
        }, function () {
            WxApi_1.default.aldEvent('好友都在玩的爆款游戏弹窗-总成功跳转数');
        });
    };
    __decorate([
        property(cc.Node)
    ], FriendGameUI.prototype, "item", void 0);
    __decorate([
        property(cc.ScrollView)
    ], FriendGameUI.prototype, "scroll", void 0);
    __decorate([
        property(cc.Node)
    ], FriendGameUI.prototype, "content", void 0);
    FriendGameUI = __decorate([
        ccclass
    ], FriendGameUI);
    return FriendGameUI;
}(cc.Component));
exports.default = FriendGameUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcRnJpZW5kR2FtZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUFrRDtBQUNsRCxrREFBNkM7QUFDN0MsaURBQTRDO0FBR3RDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFEdEQ7UUFBQSxxRUFpRkM7UUE3RUcsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUc1QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBRXZCLGNBQVEsR0FBVSxFQUFFLENBQUE7UUFFcEIsbUJBQWEsR0FBYSxJQUFJLENBQUE7O1FBa0U5QixpQkFBaUI7SUFDckIsQ0FBQztJQWpFRyxlQUFlO0lBRWYsNEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sUUFBbUIsRUFBRSxLQUFXO1FBQ25DLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUE7U0FDaEM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDdkIsZUFBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLElBQUksQ0FB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QUQsbUJBQUM7Q0FoRkQsQUFnRkMsQ0FoRnlDLEVBQUUsQ0FBQyxTQUFTLEdBZ0ZyRDtrQkFoRm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSkpNZ3IsIHsgRXhwb3J0RGlyIH0gZnJvbSBcIi4uL0V4cG9ydFV0aWxzXCI7XHJcbmltcG9ydCBXeEFwaSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9MaWJzL1d4QXBpXCI7XHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vLi4vU2NyaXB0cy9Nb2QvQWRNZ3JcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uLy4uL1NjcmlwdHMvTW9kL1V0aWxpdHlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRHYW1lVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcclxuICAgIHNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgbXlOYXZBcnI6IGFueVtdID0gW11cclxuXHJcbiAgICBjbG9zZUNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1VJKGNhbGxiYWNrPzogRnVuY3Rpb24sIHBhcmFtPzogYW55KSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VDYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+WlveWPi+mDveWcqOeOqeeahOeIhuasvua4uOaIj+W8ueeql+WHuueOsOasoeaVsCcpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5teU5hdkFyciA9IFtdLmNvbmNhdChKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFycilcclxuICAgICAgICB0aGlzLl9pbml0KClcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2Nsb3NlQnRuJykuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnY2xvc2VCdG4nKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIEFkTWdyLmluc3RhbmNlLmhpZGVCYW5uZXIoKVxyXG4gICAgICAgICAgICBXeEFwaS5iYW5uZXJXdUNodTEoKVxyXG4gICAgICAgIH0sIDEuNSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KFd4QXBpLmJhbm5lclRPMSlcclxuICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgIHRoaXMuY29udGVudC5kZXN0cm95QWxsQ2hpbGRyZW4oKVxyXG4gICAgICAgIHRoaXMuY2xvc2VDYWxsYmFjayAmJiB0aGlzLmNsb3NlQ2FsbGJhY2soKVxyXG4gICAgICAgIHRoaXMuY2xvc2VDYWxsYmFjayA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlOYXZBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pXHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQobm9kZSlcclxuXHJcbiAgICAgICAgICAgIGxldCBuYW1lOiBjYy5MYWJlbCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIGxldCBpY29uOiBjYy5TcHJpdGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdpY29uJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuXHJcbiAgICAgICAgICAgIG5hbWUuc3RyaW5nID0gSkpNZ3IuaW5zdGFuY2UuZ2V0U3VidGl0bGUoaSlcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2UubG9hZEltZ0J5VXJsKGljb24sIHRoaXMubXlOYXZBcnJbaV0uaWNvbilcclxuXHJcbiAgICAgICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHsgdGhpcy5uYXZDQihldmVudCwgaSkgfSwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VDQigpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBuYXZDQihldmVudDogY2MuRXZlbnQsIGlkOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2sgaWQ6JywgaWQpXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+WlveWPi+mDveWcqOeOqeeahOeIhuasvua4uOaIj+W8ueeqly3mgLvngrnlh7vmlbAnKVxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLk5hdmlnYXRlQXBwKGlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19GVUxMR0FNRVVJKVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+WlveWPi+mDveWcqOeOqeeahOeIhuasvua4uOaIj+W8ueeqly3mgLvmiJDlip/ot7PovazmlbAnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/PlayerAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0adb90D0AlGO4FZ+7Ni5j4p', 'PlayerAni');
// Scripts/Crl/PlayerAni.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerAni = /** @class */ (function (_super) {
    __extends(PlayerAni, _super);
    function PlayerAni() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoChangeSkin = true;
        _this._armatureDisPlay = null;
        _this._armature = null;
        return _this;
        // update (dt) {}
    }
    PlayerAni.prototype.onLoad = function () {
        this.getArmature();
    };
    PlayerAni.prototype.start = function () {
    };
    PlayerAni.prototype.getArmature = function () {
        //获取 ArmatureDisplay
        this._armatureDisPlay = this.getComponent(dragonBones.ArmatureDisplay);
        this.playAnimationByName(0);
        //获取 Armatrue
        this._armature = this._armatureDisPlay.armature();
        if (this.autoChangeSkin)
            this.changeSkin(PlayerDataMgr_1.default.getPlayerLv() - 1);
        //添加动画监听
        //this._armatureDisPlay.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this);
        //this._armatureDisPlay.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.loopAnimationEventHandler, this);
    };
    PlayerAni.prototype.playAnimationByName = function (index) {
        switch (index) {
            case 0:
                this._armatureDisPlay.playAnimation('Ani_Mermaid_Stand', 0);
                break;
            case 1:
                this._armatureDisPlay.playAnimation('Ani_Mermaid_Run', 0);
                break;
            case 2:
                this._armatureDisPlay.playAnimation('Ani_Mermaid_Die', 1);
                break;
            case 3:
                this._armatureDisPlay.playAnimation('Ani_Mermaid_Eat', 1);
                break;
            case 4:
                this._armatureDisPlay.playAnimation('Ani_Mermaid_Win', 1);
                break;
        }
        //this._armatureDisPlay.timeScale = 0.1;
    };
    PlayerAni.prototype.animationEventHandler = function (event) {
        // if (event.type == dragonBones.EventObject.COMPLETE) {
        //     //this._armatureDisPlay.stopAnimation();
        // }
    };
    PlayerAni.prototype.loopAnimationEventHandler = function (event) {
        //this._armatureDisPlay.enabled = false;
        //console.log(event);
        // if (event.type == dragonBones.EventObject.LOOP_COMPLETE) {
        // }
    };
    PlayerAni.prototype.changeSkin = function (index) {
        this._armature.getSlot('mry_js1_l').displayIndex = index;
        this._armature.getSlot('mry_js1_tf').displayIndex = index;
        this._armature.getSlot('mry_js1_st').displayIndex = index;
        this._armature.getSlot('mry_js1_s1').displayIndex = index;
        this._armature.getSlot('mry_js1_s2').displayIndex = index;
        this._armature.getSlot('mry_js2_pj').displayIndex = index;
    };
    __decorate([
        property
    ], PlayerAni.prototype, "autoChangeSkin", void 0);
    PlayerAni = __decorate([
        ccclass
    ], PlayerAni);
    return PlayerAni;
}(cc.Component));
exports.default = PlayerAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQbGF5ZXJBbmkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBRTVDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUEyRUM7UUF2RUcsb0JBQWMsR0FBWSxJQUFJLENBQUE7UUFFOUIsc0JBQWdCLEdBQWdDLElBQUksQ0FBQTtRQUNwRCxlQUFTLEdBQXlCLElBQUksQ0FBQTs7UUFtRXRDLGlCQUFpQjtJQUNyQixDQUFDO0lBbEVHLDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUVELHlCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNJLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLGFBQWE7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVsRCxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQWEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNwRCxRQUFRO1FBQ1IsNkdBQTZHO1FBQzdHLHNIQUFzSDtJQUMxSCxDQUFDO0lBQ0QsdUNBQW1CLEdBQW5CLFVBQW9CLEtBQUs7UUFDckIsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUQsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUQsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxNQUFNO1NBQ2I7UUFDRCx3Q0FBd0M7SUFDNUMsQ0FBQztJQUVELHlDQUFxQixHQUFyQixVQUFzQixLQUFLO1FBQ3ZCLHdEQUF3RDtRQUN4RCwrQ0FBK0M7UUFDL0MsSUFBSTtJQUNSLENBQUM7SUFFRCw2Q0FBeUIsR0FBekIsVUFBMEIsS0FBSztRQUMzQix3Q0FBd0M7UUFDeEMscUJBQXFCO1FBQ3JCLDZEQUE2RDtRQUU3RCxJQUFJO0lBQ1IsQ0FBQztJQUVELDhCQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUQsQ0FBQztJQXBFRDtRQURDLFFBQVE7cURBQ3FCO0lBSGIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTBFN0I7SUFBRCxnQkFBQztDQTFFRCxBQTBFQyxDQTFFc0MsRUFBRSxDQUFDLFNBQVMsR0EwRWxEO2tCQTFFb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJBbmkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgYXV0b0NoYW5nZVNraW46IGJvb2xlYW4gPSB0cnVlXHJcblxyXG4gICAgX2FybWF0dXJlRGlzUGxheTogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5ID0gbnVsbFxyXG4gICAgX2FybWF0dXJlOiBkcmFnb25Cb25lcy5Bcm1hdHVyZSA9IG51bGxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBcm1hdHVyZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEFybWF0dXJlKCkge1xyXG4gICAgICAgIC8v6I635Y+WIEFybWF0dXJlRGlzcGxheVxyXG4gICAgICAgIHRoaXMuX2FybWF0dXJlRGlzUGxheSA9IHRoaXMuZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uQnlOYW1lKDApO1xyXG4gICAgICAgIC8v6I635Y+WIEFybWF0cnVlXHJcbiAgICAgICAgdGhpcy5fYXJtYXR1cmUgPSB0aGlzLl9hcm1hdHVyZURpc1BsYXkuYXJtYXR1cmUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NoYW5nZVNraW4pXHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2tpbihQbGF5ZXJEYXRhTWdyLmdldFBsYXllckx2KCkgLSAxKVxyXG4gICAgICAgIC8v5re75Yqg5Yqo55S755uR5ZCsXHJcbiAgICAgICAgLy90aGlzLl9hcm1hdHVyZURpc1BsYXkuYWRkRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5DT01QTEVURSwgdGhpcy5hbmltYXRpb25FdmVudEhhbmRsZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5fYXJtYXR1cmVEaXNQbGF5LmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuTE9PUF9DT01QTEVURSwgdGhpcy5sb29wQW5pbWF0aW9uRXZlbnRIYW5kbGVyLCB0aGlzKTtcclxuICAgIH1cclxuICAgIHBsYXlBbmltYXRpb25CeU5hbWUoaW5kZXgpIHtcclxuICAgICAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FybWF0dXJlRGlzUGxheS5wbGF5QW5pbWF0aW9uKCdBbmlfTWVybWFpZF9TdGFuZCcsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FybWF0dXJlRGlzUGxheS5wbGF5QW5pbWF0aW9uKCdBbmlfTWVybWFpZF9SdW4nLCAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcm1hdHVyZURpc1BsYXkucGxheUFuaW1hdGlvbignQW5pX01lcm1haWRfRGllJywgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYXJtYXR1cmVEaXNQbGF5LnBsYXlBbmltYXRpb24oJ0FuaV9NZXJtYWlkX0VhdCcsIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FybWF0dXJlRGlzUGxheS5wbGF5QW5pbWF0aW9uKCdBbmlfTWVybWFpZF9XaW4nLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RoaXMuX2FybWF0dXJlRGlzUGxheS50aW1lU2NhbGUgPSAwLjE7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0aW9uRXZlbnRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gaWYgKGV2ZW50LnR5cGUgPT0gZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUpIHtcclxuICAgICAgICAvLyAgICAgLy90aGlzLl9hcm1hdHVyZURpc1BsYXkuc3RvcEFuaW1hdGlvbigpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBsb29wQW5pbWF0aW9uRXZlbnRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgLy90aGlzLl9hcm1hdHVyZURpc1BsYXkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIC8vIGlmIChldmVudC50eXBlID09IGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkxPT1BfQ09NUExFVEUpIHtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNraW4oaW5kZXgpIHtcclxuICAgICAgICB0aGlzLl9hcm1hdHVyZS5nZXRTbG90KCdtcnlfanMxX2wnKS5kaXNwbGF5SW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLl9hcm1hdHVyZS5nZXRTbG90KCdtcnlfanMxX3RmJykuZGlzcGxheUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5fYXJtYXR1cmUuZ2V0U2xvdCgnbXJ5X2pzMV9zdCcpLmRpc3BsYXlJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuX2FybWF0dXJlLmdldFNsb3QoJ21yeV9qczFfczEnKS5kaXNwbGF5SW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLl9hcm1hdHVyZS5nZXRTbG90KCdtcnlfanMxX3MyJykuZGlzcGxheUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5fYXJtYXR1cmUuZ2V0U2xvdCgnbXJ5X2pzMl9waicpLmRpc3BsYXlJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/ScrollUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '031b7VcdSJJzpl/U/4pTZPt', 'ScrollUI');
// ExportLibs/View/ScrollUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ExportUtils_1 = require("../ExportUtils");
var WxApi_1 = require("../../Scripts/Libs/WxApi");
var AdMgr_1 = require("../../Scripts/Mod/AdMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScrollUI = /** @class */ (function (_super) {
    __extends(ScrollUI, _super);
    function ScrollUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.scroll = null;
        _this.content = null;
        _this.isGameUI = false;
        _this.myNavArr = [];
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    ScrollUI.prototype.start = function () {
    };
    ScrollUI.prototype.showUI = function (callback, param) {
        this.node.active = true;
        if (this.isGameUI) {
            WxApi_1.default.aldEvent('顶部导出栏出现次数');
        }
        else {
            WxApi_1.default.aldEvent('底部导出栏出现次数');
        }
    };
    ScrollUI.prototype.onEnable = function () {
        this.myNavArr = [].concat(ExportUtils_1.default.instance.navigateAppArr);
        this._init();
    };
    ScrollUI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
        this.content.destroyAllChildren();
    };
    ScrollUI.prototype._init = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var node = cc.instantiate(this_1.item);
            node.active = true;
            node.setPosition(cc.v2(0, 0));
            this_1.content.addChild(node);
            var icon = node.getChildByName('icon').getComponent(cc.Sprite);
            ExportUtils_1.default.instance.loadImgByUrl(icon, this_1.myNavArr[i].icon);
            node.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, i); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.myNavArr.length; i++) {
            _loop_1(i);
        }
    };
    ScrollUI.prototype.closeCB = function () {
        this.node.active = false;
    };
    ScrollUI.prototype.navCB = function (event, id) {
        var _this = this;
        console.log('click id:', id);
        if (this.isGameUI) {
            WxApi_1.default.aldEvent('顶部导出栏-总点击数');
        }
        else {
            WxApi_1.default.aldEvent('底部导出栏-总点击数');
        }
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            if (_this.isGameUI)
                ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FULLGAMEUI, null, function () { AdMgr_1.default.instance.showBanner(); });
        }, function () {
            if (_this.isGameUI) {
                WxApi_1.default.aldEvent('顶部导出栏-总成功跳转数');
            }
            else {
                WxApi_1.default.aldEvent('底部导出栏-总成功跳转数');
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], ScrollUI.prototype, "item", void 0);
    __decorate([
        property(cc.ScrollView)
    ], ScrollUI.prototype, "scroll", void 0);
    __decorate([
        property(cc.Node)
    ], ScrollUI.prototype, "content", void 0);
    __decorate([
        property
    ], ScrollUI.prototype, "isGameUI", void 0);
    ScrollUI = __decorate([
        ccclass
    ], ScrollUI);
    return ScrollUI;
}(cc.Component));
exports.default = ScrollUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcU2Nyb2xsVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQWtEO0FBQ2xELGtEQUE2QztBQUM3QyxpREFBNEM7QUFFdEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQW9GQztRQWpGRyxVQUFJLEdBQVksSUFBSSxDQUFBO1FBR3BCLFlBQU0sR0FBa0IsSUFBSSxDQUFBO1FBRzVCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFHdkIsY0FBUSxHQUFZLEtBQUssQ0FBQTtRQUV6QixjQUFRLEdBQVUsRUFBRSxDQUFBOztRQXFFcEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFsRUcsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLFFBQW1CLEVBQUUsS0FBVztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFFdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsZUFBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUM5QjthQUFNO1lBQ0gsZUFBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUM5QjtJQUNMLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLHFCQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ3hELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUNyQyxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUFBLGlCQWFDO2dDQVpZLENBQUM7WUFDTixJQUFJLElBQUksR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQUssSUFBSSxDQUFDLENBQUE7WUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzdCLE9BQUssT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUUzQixJQUFJLElBQUksR0FBYyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7WUFFekUscUJBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxPQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV4RCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQUssSUFBTyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsU0FBTyxDQUFBOzs7UUFWbkYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtvQkFBcEMsQ0FBQztTQVdUO0lBQ0wsQ0FBQztJQUVELDBCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDNUIsQ0FBQztJQUVELHdCQUFLLEdBQUwsVUFBTSxLQUFlLEVBQUUsRUFBVTtRQUFqQyxpQkFrQkM7UUFqQkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFFNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsZUFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUMvQjthQUFNO1lBQ0gsZUFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUMvQjtRQUNELHFCQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsSUFBSSxLQUFJLENBQUMsUUFBUTtnQkFDYixxQkFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsdUJBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLGNBQVEsZUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzNHLENBQUMsRUFBRTtZQUNDLElBQUksS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixlQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFBO2FBQ2pDO2lCQUFNO2dCQUNILGVBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7YUFDakM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUE5RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDOzRDQUNJO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFHdkI7UUFEQyxRQUFROzhDQUNnQjtJQVhSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtRjVCO0lBQUQsZUFBQztDQW5GRCxBQW1GQyxDQW5GcUMsRUFBRSxDQUFDLFNBQVMsR0FtRmpEO2tCQW5Gb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKSk1nciwgeyBFeHBvcnREaXIgfSBmcm9tIFwiLi4vRXhwb3J0VXRpbHNcIjtcclxuaW1wb3J0IFd4QXBpIGZyb20gXCIuLi8uLi9TY3JpcHRzL0xpYnMvV3hBcGlcIjtcclxuaW1wb3J0IEFkTWdyIGZyb20gXCIuLi8uLi9TY3JpcHRzL01vZC9BZE1nclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcclxuICAgIHNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc0dhbWVVSTogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgbXlOYXZBcnI6IGFueVtdID0gW11cclxuXHJcblxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93VUkoY2FsbGJhY2s/OiBGdW5jdGlvbiwgcGFyYW0/OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVVSSkge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn6aG26YOo5a+85Ye65qCP5Ye6546w5qyh5pWwJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn5bqV6YOo5a+85Ye65qCP5Ye6546w5qyh5pWwJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5teU5hdkFyciA9IFtdLmNvbmNhdChKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFycilcclxuICAgICAgICB0aGlzLl9pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKClcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlOYXZBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pXHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQobm9kZSlcclxuXHJcbiAgICAgICAgICAgIGxldCBpY29uOiBjYy5TcHJpdGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdpY29uJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuXHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLmxvYWRJbWdCeVVybChpY29uLCB0aGlzLm15TmF2QXJyW2ldLmljb24pXHJcblxyXG4gICAgICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7IHRoaXMubmF2Q0IoZXZlbnQsIGkpIH0sIHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQ0IoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgbmF2Q0IoZXZlbnQ6IGNjLkV2ZW50LCBpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrIGlkOicsIGlkKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVVSSkge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn6aG26YOo5a+85Ye65qCPLeaAu+eCueWHu+aVsCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+W6lemDqOWvvOWHuuagjy3mgLvngrnlh7vmlbAnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBKSk1nci5pbnN0YW5jZS5OYXZpZ2F0ZUFwcChpZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0dhbWVVSSlcclxuICAgICAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19GVUxMR0FNRVVJLCBudWxsLCAoKSA9PiB7IEFkTWdyLmluc3RhbmNlLnNob3dCYW5uZXIoKSB9KVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNHYW1lVUkpIHtcclxuICAgICAgICAgICAgICAgIFd4QXBpLmFsZEV2ZW50KCfpobbpg6jlr7zlh7rmoI8t5oC75oiQ5Yqf6Lez6L2s5pWwJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFd4QXBpLmFsZEV2ZW50KCflupXpg6jlr7zlh7rmoI8t5oC75oiQ5Yqf6Lez6L2s5pWwJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/AutoScroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a75d1uQdLhKfJU99KUbdLWv', 'AutoScroll');
// ExportLibs/AutoScroll.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AutoScroll = /** @class */ (function (_super) {
    __extends(AutoScroll, _super);
    function AutoScroll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollSpeed = 2;
        _this.isVertical = true;
        _this.scroll = null;
        _this.isReady = false;
        _this.isDown = true;
        return _this;
    }
    AutoScroll.prototype.onLoad = function () {
        this.scroll = this.node.getComponent(cc.ScrollView);
    };
    AutoScroll.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () { _this.isReady = true; }, 1);
    };
    AutoScroll.prototype.onEnable = function () {
        var _this = this;
        this.scheduleOnce(function () { _this.isReady = true; }, 1);
    };
    AutoScroll.prototype.onDisable = function () {
        this.isReady = false;
    };
    AutoScroll.prototype.update = function (dt) {
        var _this = this;
        if (!this.isReady || this.scroll.isScrolling())
            return;
        var curV = this.isVertical ? this.scroll.getScrollOffset().y : -this.scroll.getScrollOffset().x;
        var maxV = this.isVertical ? this.scroll.getMaxScrollOffset().y : this.scroll.getMaxScrollOffset().x;
        if (this.isDown) {
            if (curV < maxV) {
                curV += 2;
                if (this.isVertical) {
                    this.scroll.scrollToOffset(cc.v2(0, curV));
                }
                else {
                    this.scroll.scrollToOffset(cc.v2(curV, 0));
                }
            }
            else {
                this.isDown = false;
                this.isReady = false;
                this.scheduleOnce(function () { _this.isReady = true; }, 1);
            }
        }
        else {
            if (curV > 0) {
                curV -= 2;
                if (this.isVertical) {
                    this.scroll.scrollToOffset(cc.v2(0, curV));
                }
                else {
                    this.scroll.scrollToOffset(cc.v2(curV, 0));
                }
            }
            else {
                this.isDown = true;
                this.isReady = false;
                this.scheduleOnce(function () { _this.isReady = true; }, 1);
            }
        }
    };
    __decorate([
        property
    ], AutoScroll.prototype, "scrollSpeed", void 0);
    __decorate([
        property
    ], AutoScroll.prototype, "isVertical", void 0);
    AutoScroll = __decorate([
        ccclass
    ], AutoScroll);
    return AutoScroll;
}(cc.Component));
exports.default = AutoScroll;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcQXV0b1Njcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBRHBEO1FBQUEscUVBK0RDO1FBM0RHLGlCQUFXLEdBQVcsQ0FBQyxDQUFBO1FBRXZCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLFlBQU0sR0FBa0IsSUFBSSxDQUFBO1FBRTVCLGFBQU8sR0FBWSxLQUFLLENBQUE7UUFDeEIsWUFBTSxHQUFZLElBQUksQ0FBQTs7SUFvRDFCLENBQUM7SUFsREcsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3ZELENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDdkQsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFBQSxpQkFFQztRQURHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBUSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN2RCxDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO0lBQ3hCLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUFULGlCQWdDQztRQS9CRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUFFLE9BQU07UUFFdEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDL0YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNwRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLElBQUksR0FBRyxJQUFJLEVBQUU7Z0JBQ2IsSUFBSSxJQUFJLENBQUMsQ0FBQTtnQkFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7aUJBQzdDO3FCQUFNO29CQUNILElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQzdDO2FBQ0o7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7Z0JBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO2dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7YUFDdEQ7U0FDSjthQUFNO1lBQ0gsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNWLElBQUksSUFBSSxDQUFDLENBQUE7Z0JBQ1QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFBO2lCQUM3QztxQkFBTTtvQkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO2lCQUM3QzthQUNKO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtnQkFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFRLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQ3REO1NBQ0o7SUFDTCxDQUFDO0lBekREO1FBREMsUUFBUTttREFDYztJQUV2QjtRQURDLFFBQVE7a0RBQ2lCO0lBTFQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQThEOUI7SUFBRCxpQkFBQztDQTlERCxBQThEQyxDQTlEdUMsRUFBRSxDQUFDLFNBQVMsR0E4RG5EO2tCQTlEb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b1Njcm9sbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzY3JvbGxTcGVlZDogbnVtYmVyID0gMlxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc1ZlcnRpY2FsOiBib29sZWFuID0gdHJ1ZVxyXG5cclxuICAgIHNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGxcclxuXHJcbiAgICBpc1JlYWR5OiBib29sZWFuID0gZmFsc2VcclxuICAgIGlzRG93bjogYm9vbGVhbiA9IHRydWVcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLmlzUmVhZHkgPSB0cnVlIH0sIDEpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLmlzUmVhZHkgPSB0cnVlIH0sIDEpXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhZHkgfHwgdGhpcy5zY3JvbGwuaXNTY3JvbGxpbmcoKSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGxldCBjdXJWID0gdGhpcy5pc1ZlcnRpY2FsID8gdGhpcy5zY3JvbGwuZ2V0U2Nyb2xsT2Zmc2V0KCkueSA6IC10aGlzLnNjcm9sbC5nZXRTY3JvbGxPZmZzZXQoKS54XHJcbiAgICAgICAgbGV0IG1heFYgPSB0aGlzLmlzVmVydGljYWwgPyB0aGlzLnNjcm9sbC5nZXRNYXhTY3JvbGxPZmZzZXQoKS55IDogdGhpcy5zY3JvbGwuZ2V0TWF4U2Nyb2xsT2Zmc2V0KCkueFxyXG4gICAgICAgIGlmICh0aGlzLmlzRG93bikge1xyXG4gICAgICAgICAgICBpZiAoY3VyViA8IG1heFYpIHtcclxuICAgICAgICAgICAgICAgIGN1clYgKz0gMlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnNjcm9sbFRvT2Zmc2V0KGNjLnYyKDAsIGN1clYpKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUb09mZnNldChjYy52MihjdXJWLCAwKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuaXNSZWFkeSA9IHRydWUgfSwgMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJWID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY3VyViAtPSAyXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwuc2Nyb2xsVG9PZmZzZXQoY2MudjIoMCwgY3VyVikpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnNjcm9sbFRvT2Zmc2V0KGNjLnYyKGN1clYsIDApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLmlzUmVhZHkgPSB0cnVlIH0sIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/ExportUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '708bb1sAQlLaqQxhqcGJbwg', 'ExportUtils');
// ExportLibs/ExportUtils.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExportHttpUtils_1 = require("./ExportHttpUtils");
var ExportCrl_1 = require("./ExportCrl");
var WxApi_1 = require("../Scripts/Libs/WxApi");
var ExportDir;
(function (ExportDir) {
    ExportDir["VIEW_FRIENDGAME"] = "FriendGameUI";
    ExportDir["VIEW_SCROLLUI"] = "ScrollUI";
    ExportDir["VIEW_RECOMMENDUI"] = "RecommendUI";
    ExportDir["VIEW_FULLGAMEUI"] = "FullGameUI";
    ExportDir["VIEW_FINISHGAMEUI"] = "FinishGameUI";
    ExportDir["VIEW_DRAWUI"] = "DrawUI";
    ExportDir["VIEW_PROGRAMUI"] = "ProgramUI";
    ExportDir["VIEW_WECHATUI"] = "WeChatUI";
})(ExportDir = exports.ExportDir || (exports.ExportDir = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var JJMgr = /** @class */ (function () {
    function JJMgr() {
        this.exportCfg = null;
        this.navigateAppArr = [];
        this.url = 'https://tthy.jiujiuhuyu.com/wx/bwmrenyu/config.json?version=';
        this.isFinished = false;
    }
    JJMgr_1 = JJMgr;
    Object.defineProperty(JJMgr, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new JJMgr_1();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    JJMgr.prototype.initJJ = function (version, completeCB) {
        var _this = this;
        if (version === void 0) { version = '1.0.0'; }
        ExportHttpUtils_1.default.instance.httpGet(this.url + version, function (res) {
            console.log('JJ config.json:', res);
            _this.exportCfg = res.data.config;
            _this.navigateAppArr = res.data.mores.remen_game;
            _this.isFinished = true;
            completeCB && completeCB();
        });
    };
    //显示UI
    JJMgr.prototype.showExportUI = function (dir, param, callback) {
        if (!this.exportCfg.front_all_export_switch && callback) {
            callback();
            return;
        }
        else if (!this.exportCfg.front_all_export_switch) {
            return;
        }
        cc.find('ExportNode').getComponent(ExportCrl_1.default).showJJUI(dir, param, callback);
    };
    //关闭UI
    JJMgr.prototype.closeExportUI = function (dir) {
        cc.find('ExportNode').getComponent(ExportCrl_1.default).closeJJUI(dir);
    };
    JJMgr.prototype.closeAllExportUI = function () {
        cc.find('ExportNode').getComponent(ExportCrl_1.default).closeAllJJUI();
    };
    //跳转
    JJMgr.prototype.NavigateApp = function (index, cancelCB, successCB) {
        var _this = this;
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            WxApi_1.default.aldEvent('导出-总点击数');
            window['wx'].navigateToMiniProgram({
                appId: this.navigateAppArr[index].appid,
                path: this.navigateAppArr[index].path,
                success: function (res) {
                    // 打开成功
                    successCB && successCB();
                    WxApi_1.default.aldEvent('导出成功-总用户数');
                    WxApi_1.default.aldEvent('导出成功-' + _this.navigateAppArr[index].title);
                },
                fail: function (res) {
                    // 打开失败
                    cancelCB && cancelCB();
                }
            });
        }
    };
    JJMgr.prototype.getSubtitle = function (index) {
        if (this.navigateAppArr[index].subtitle && this.navigateAppArr[index].subtitle != '') {
            return this.navigateAppArr[index].subtitle;
        }
        else {
            return this.navigateAppArr[index].title;
        }
    };
    //加载网络图片
    JJMgr.prototype.loadImgByUrl = function (sprite, remoteUrl, imageType, cb) {
        if (imageType === void 0) { imageType = 'png'; }
        cc.loader.load({
            url: remoteUrl,
            type: imageType
        }, function (err, texture) {
            if (err || !sprite || !texture || !sprite.spriteFrame) {
                return;
            }
            sprite.spriteFrame = new cc.SpriteFrame(texture);
            cb && cb();
        });
    };
    JJMgr.prototype.loadSpriteFrame = function (spName, sprite, cb) {
        cc.loader.loadRes(spName, cc.SpriteFrame, function (err, spriteFrame) {
            sprite.spriteFrame = spriteFrame;
            cb && cb();
        });
    };
    //打乱数组
    JJMgr.prototype.shuffleArr = function (arr) {
        var _a;
        var i = arr.length;
        while (i) {
            var j = Math.floor(Math.random() * i--);
            _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
        }
        return arr;
    };
    var JJMgr_1;
    JJMgr = JJMgr_1 = __decorate([
        ccclass
    ], JJMgr);
    return JJMgr;
}());
exports.default = JJMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcRXhwb3J0VXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBdUM7QUFDdkMseUNBQW9DO0FBQ3BDLCtDQUEwQztBQUUxQyxJQUFZLFNBU1g7QUFURCxXQUFZLFNBQVM7SUFDakIsNkNBQWdDLENBQUE7SUFDaEMsdUNBQTBCLENBQUE7SUFDMUIsNkNBQWdDLENBQUE7SUFDaEMsMkNBQThCLENBQUE7SUFDOUIsK0NBQWtDLENBQUE7SUFDbEMsbUNBQXNCLENBQUE7SUFDdEIseUNBQTRCLENBQUE7SUFDNUIsdUNBQTBCLENBQUE7QUFDOUIsQ0FBQyxFQVRXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBU3BCO0FBRUssSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQURBO1FBV0ksY0FBUyxHQUFRLElBQUksQ0FBQTtRQUNyQixtQkFBYyxHQUFVLEVBQUUsQ0FBQTtRQUUxQixRQUFHLEdBQVcsOERBQThELENBQUE7UUFFNUUsZUFBVSxHQUFZLEtBQUssQ0FBQTtJQTJGL0IsQ0FBQztjQTFHb0IsS0FBSztJQUd0QixzQkFBa0IsaUJBQVE7YUFBMUI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQUssRUFBRSxDQUFBO2FBQy9CO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7OztPQUFBO0lBU0Qsc0JBQU0sR0FBTixVQUFPLE9BQXlCLEVBQUUsVUFBcUI7UUFBdkQsaUJBUUM7UUFSTSx3QkFBQSxFQUFBLGlCQUF5QjtRQUM1Qix5QkFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLEVBQUUsVUFBQyxHQUFHO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlC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YSxLQUFLLENBMEd6QjtJQUFELFlBQUM7Q0ExR0QsQUEwR0MsSUFBQTtrQkExR29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSkpIdHRwIGZyb20gXCIuL0V4cG9ydEh0dHBVdGlsc1wiO1xyXG5pbXBvcnQgRXhwb3J0Q3JsIGZyb20gXCIuL0V4cG9ydENybFwiO1xyXG5pbXBvcnQgV3hBcGkgZnJvbSBcIi4uL1NjcmlwdHMvTGlicy9XeEFwaVwiO1xyXG5cclxuZXhwb3J0IGVudW0gRXhwb3J0RGlyIHtcclxuICAgIFZJRVdfRlJJRU5ER0FNRSA9ICdGcmllbmRHYW1lVUknLCAgIC8v5aW95Y+L6YO95Zyo546p55qE54iG5qy+5ri45oiP5by556qXXHJcbiAgICBWSUVXX1NDUk9MTFVJID0gJ1Njcm9sbFVJJywgICAgICAgICAvL+a4uOaIj+WGhea7muWKqOWvvOWHuuagj1xyXG4gICAgVklFV19SRUNPTU1FTkRVSSA9ICdSZWNvbW1lbmRVSScsICAgLy/ng63pl6jmjqjojZDlhajlsY/luZXlr7zlh7rpobVcclxuICAgIFZJRVdfRlVMTEdBTUVVSSA9ICdGdWxsR2FtZVVJJywgICAgIC8v5YWo5bGP5bmV5a+85Ye66aG1XHJcbiAgICBWSUVXX0ZJTklTSEdBTUVVSSA9ICdGaW5pc2hHYW1lVUknLCAvL+e7k+eul+mhtSA2IOS4qiBpY29uXHJcbiAgICBWSUVXX0RSQVdVSSA9ICdEcmF3VUknLCAgICAgICAgICAgICAvL+aKveWxiVxyXG4gICAgVklFV19QUk9HUkFNVUkgPSAnUHJvZ3JhbVVJJywgICAgICAgLy/muLjmiI/liJfooahcclxuICAgIFZJRVdfV0VDSEFUVUkgPSAnV2VDaGF0VUknXHJcbn1cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKSk1nciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBKSk1nclxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogSkpNZ3Ige1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgSkpNZ3IoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnRDZmc6IGFueSA9IG51bGxcclxuICAgIG5hdmlnYXRlQXBwQXJyOiBhbnlbXSA9IFtdXHJcblxyXG4gICAgdXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly90dGh5LmppdWppdWh1eXUuY29tL3d4L2J3bXJlbnl1L2NvbmZpZy5qc29uP3ZlcnNpb249J1xyXG5cclxuICAgIGlzRmluaXNoZWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIGluaXRKSih2ZXJzaW9uOiBzdHJpbmcgPSAnMS4wLjAnLCBjb21wbGV0ZUNCPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBKSkh0dHAuaW5zdGFuY2UuaHR0cEdldCh0aGlzLnVybCArIHZlcnNpb24sIChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0pKIGNvbmZpZy5qc29uOicsIHJlcylcclxuICAgICAgICAgICAgdGhpcy5leHBvcnRDZmcgPSByZXMuZGF0YS5jb25maWdcclxuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZUFwcEFyciA9IHJlcy5kYXRhLm1vcmVzLnJlbWVuX2dhbWVcclxuICAgICAgICAgICAgdGhpcy5pc0ZpbmlzaGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb21wbGV0ZUNCICYmIGNvbXBsZXRlQ0IoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy/mmL7npLpVSVxyXG4gICAgc2hvd0V4cG9ydFVJKGRpcjogRXhwb3J0RGlyLCBwYXJhbT86IGFueSwgY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmICghdGhpcy5leHBvcnRDZmcuZnJvbnRfYWxsX2V4cG9ydF9zd2l0Y2ggJiYgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmV4cG9ydENmZy5mcm9udF9hbGxfZXhwb3J0X3N3aXRjaCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZmluZCgnRXhwb3J0Tm9kZScpLmdldENvbXBvbmVudChFeHBvcnRDcmwpLnNob3dKSlVJKGRpciwgcGFyYW0sIGNhbGxiYWNrKVxyXG4gICAgfVxyXG5cclxuICAgIC8v5YWz6ZetVUlcclxuICAgIGNsb3NlRXhwb3J0VUkoZGlyOiBFeHBvcnREaXIpIHtcclxuICAgICAgICBjYy5maW5kKCdFeHBvcnROb2RlJykuZ2V0Q29tcG9uZW50KEV4cG9ydENybCkuY2xvc2VKSlVJKGRpcilcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUFsbEV4cG9ydFVJKCkge1xyXG4gICAgICAgIGNjLmZpbmQoJ0V4cG9ydE5vZGUnKS5nZXRDb21wb25lbnQoRXhwb3J0Q3JsKS5jbG9zZUFsbEpKVUkoKVxyXG4gICAgfVxyXG5cclxuICAgIC8v6Lez6L2sXHJcbiAgICBOYXZpZ2F0ZUFwcChpbmRleDogbnVtYmVyLCBjYW5jZWxDQj86IEZ1bmN0aW9uLCBzdWNjZXNzQ0I/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn5a+85Ye6LeaAu+eCueWHu+aVsCcpXHJcbiAgICAgICAgICAgIHdpbmRvd1snd3gnXS5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICAgICAgICAgICAgYXBwSWQ6IHRoaXMubmF2aWdhdGVBcHBBcnJbaW5kZXhdLmFwcGlkLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogdGhpcy5uYXZpZ2F0ZUFwcEFycltpbmRleF0ucGF0aCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmiZPlvIDmiJDlip9cclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ0IgJiYgc3VjY2Vzc0NCKClcclxuICAgICAgICAgICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn5a+85Ye65oiQ5YqfLeaAu+eUqOaIt+aVsCcpXHJcbiAgICAgICAgICAgICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+WvvOWHuuaIkOWKny0nICsgdGhpcy5uYXZpZ2F0ZUFwcEFycltpbmRleF0udGl0bGUpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaJk+W8gOWksei0pVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbENCICYmIGNhbmNlbENCKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3VidGl0bGUoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLm5hdmlnYXRlQXBwQXJyW2luZGV4XS5zdWJ0aXRsZSAmJiB0aGlzLm5hdmlnYXRlQXBwQXJyW2luZGV4XS5zdWJ0aXRsZSAhPSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZUFwcEFycltpbmRleF0uc3VidGl0bGVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZUFwcEFycltpbmRleF0udGl0bGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/liqDovb3nvZHnu5zlm77niYdcclxuICAgIHB1YmxpYyBsb2FkSW1nQnlVcmwoc3ByaXRlLCByZW1vdGVVcmwsIGltYWdlVHlwZTogc3RyaW5nID0gJ3BuZycsIGNiPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZCh7XHJcbiAgICAgICAgICAgIHVybDogcmVtb3RlVXJsLFxyXG4gICAgICAgICAgICB0eXBlOiBpbWFnZVR5cGVcclxuICAgICAgICB9LCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIgfHwgIXNwcml0ZSB8fCAhdGV4dHVyZSB8fCAhc3ByaXRlLnNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpXHJcbiAgICAgICAgICAgIGNiICYmIGNiKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFNwcml0ZUZyYW1lKHNwTmFtZTogc3RyaW5nLCBzcHJpdGU6IGNjLlNwcml0ZSwgY2I/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHNwTmFtZSwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lXHJcbiAgICAgICAgICAgIGNiICYmIGNiKClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8v5omT5Lmx5pWw57uEXHJcbiAgICBwdWJsaWMgc2h1ZmZsZUFycihhcnI6IGFueVtdKSB7XHJcbiAgICAgICAgbGV0IGkgPSBhcnIubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChpKSB7XHJcbiAgICAgICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaS0tKTtcclxuICAgICAgICAgICAgW2FycltqXSwgYXJyW2ldXSA9IFthcnJbaV0sIGFycltqXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/RecommendUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da209iyFA1FDbOBIynyh2YW', 'RecommendUI');
// ExportLibs/View/RecommendUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ExportUtils_1 = require("../ExportUtils");
var WxApi_1 = require("../../Scripts/Libs/WxApi");
var AdMgr_1 = require("../../Scripts/Mod/AdMgr");
var PlayerDataMgr_1 = require("../../Scripts/Libs/PlayerDataMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RecommendUI = /** @class */ (function (_super) {
    __extends(RecommendUI, _super);
    function RecommendUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.scroll = null;
        _this.content = null;
        _this.myNavArr = [];
        _this.closeCallback = null;
        return _this;
    }
    // onLoad () {}
    RecommendUI.prototype.start = function () {
    };
    RecommendUI.prototype.showUI = function (callback, param) {
        if (callback) {
            this.closeCallback = callback;
        }
        this.node.active = true;
        WxApi_1.default.aldEvent('热门推荐全屏幕导出页出现次数');
    };
    RecommendUI.prototype.onEnable = function () {
        this.myNavArr = [].concat(ExportUtils_1.default.instance.navigateAppArr);
        this._init();
        AdMgr_1.default.instance.hideBanner();
        if (ExportUtils_1.default.instance.exportCfg.front_remen_screen_auto) {
            this.randomNav();
        }
        this.node.getChildByName('continueBtn').active = false;
        if (WxApi_1.default.isValidBanner() && PlayerDataMgr_1.default.getPlayerData().grade >= ExportUtils_1.default.instance.exportCfg.front_continuegame_start_level) {
            this.node.getChildByName('continueBtn').active = true;
            WxApi_1.default.bannerWuChu2();
        }
    };
    RecommendUI.prototype.onDisable = function () {
        clearTimeout(WxApi_1.default.bannerTO2);
        AdMgr_1.default.instance.hideBanner();
        this.unscheduleAllCallbacks();
        this.content.destroyAllChildren();
        this.closeCallback && this.closeCallback();
        this.closeCallback = null;
    };
    RecommendUI.prototype._init = function () {
        var _this = this;
        var fingerNum = Math.floor(Math.random() * 6);
        var _loop_1 = function (i) {
            var node = cc.instantiate(this_1.item);
            node.active = true;
            this_1.content.addChild(node);
            var name = node.getChildByName('name').getComponent(cc.Label);
            var icon = node.getChildByName('icon').getComponent(cc.Sprite);
            var finger = node.getChildByName('finger');
            name.string = ExportUtils_1.default.instance.getSubtitle(i);
            ExportUtils_1.default.instance.loadImgByUrl(icon, this_1.myNavArr[i].icon);
            finger.active = i == fingerNum;
            node.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, i); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.myNavArr.length; i++) {
            _loop_1(i);
        }
    };
    RecommendUI.prototype.continueCB = function () {
        this.node.active = false;
    };
    RecommendUI.prototype.randomNav = function () {
        var id = Math.floor(Math.random() * 6);
        this.navCB(null, id);
    };
    RecommendUI.prototype.navCB = function (event, id) {
        console.log('click id:', id);
        WxApi_1.default.aldEvent('热门推荐全屏幕导出页-总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () { }, function () {
            WxApi_1.default.aldEvent('热门推荐全屏幕导出页-总成功跳转数');
        });
    };
    RecommendUI.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], RecommendUI.prototype, "item", void 0);
    __decorate([
        property(cc.ScrollView)
    ], RecommendUI.prototype, "scroll", void 0);
    __decorate([
        property(cc.Node)
    ], RecommendUI.prototype, "content", void 0);
    RecommendUI = __decorate([
        ccclass
    ], RecommendUI);
    return RecommendUI;
}(cc.Component));
exports.default = RecommendUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcUmVjb21tZW5kVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQWtEO0FBQ2xELGtEQUE2QztBQUM3QyxpREFBNEM7QUFFNUMsa0VBQTZEO0FBRXZELElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFEckQ7UUFBQSxxRUE0RkM7UUF6RkcsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUc1QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBRXZCLGNBQVEsR0FBVSxFQUFFLENBQUE7UUFFcEIsbUJBQWEsR0FBYSxJQUFJLENBQUE7O0lBK0VsQyxDQUFDO0lBN0VHLGVBQWU7SUFFZiwyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxRQUFtQixFQUFFLEtBQVc7UUFDbkMsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQTtTQUNoQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUN2QixlQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRVosZUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUMzQixJQUFJLHFCQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRTtZQUNsRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7U0FDbkI7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ZSxFQUFFLEVBQVU7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDNUIsZUFBSyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQ2pDLHFCQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsY0FBUSxDQUFDLEVBQUU7WUFDdEMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxFQUFFO0lBRVQsQ0FBQztJQXhGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNFO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7K0NBQ0k7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSztJQVJOLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EyRi9CO0lBQUQsa0JBQUM7Q0EzRkQsQUEyRkMsQ0EzRndDLEVBQUUsQ0FBQyxTQUFTLEdBMkZwRDtrQkEzRm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSkpNZ3IsIHsgRXhwb3J0RGlyIH0gZnJvbSBcIi4uL0V4cG9ydFV0aWxzXCI7XHJcbmltcG9ydCBXeEFwaSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9MaWJzL1d4QXBpXCI7XHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vLi4vU2NyaXB0cy9Nb2QvQWRNZ3JcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uLy4uL1NjcmlwdHMvTW9kL1V0aWxpdHlcIjtcclxuaW1wb3J0IFBsYXllckRhdGFNZ3IgZnJvbSBcIi4uLy4uL1NjcmlwdHMvTGlicy9QbGF5ZXJEYXRhTWdyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb21tZW5kVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpdGVtOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxyXG4gICAgc2Nyb2xsOiBjYy5TY3JvbGxWaWV3ID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY29udGVudDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBteU5hdkFycjogYW55W10gPSBbXVxyXG5cclxuICAgIGNsb3NlQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbFxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93VUkoY2FsbGJhY2s/OiBGdW5jdGlvbiwgcGFyYW0/OiBhbnkpIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUNhbGxiYWNrID0gY2FsbGJhY2tcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBXeEFwaS5hbGRFdmVudCgn54Ot6Zeo5o6o6I2Q5YWo5bGP5bmV5a+85Ye66aG15Ye6546w5qyh5pWwJylcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm15TmF2QXJyID0gW10uY29uY2F0KEpKTWdyLmluc3RhbmNlLm5hdmlnYXRlQXBwQXJyKVxyXG4gICAgICAgIHRoaXMuX2luaXQoKVxyXG5cclxuICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICBpZiAoSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3JlbWVuX3NjcmVlbl9hdXRvKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZG9tTmF2KClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdjb250aW51ZUJ0bicpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgaWYgKFd4QXBpLmlzVmFsaWRCYW5uZXIoKSAmJiBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSA+PSBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfY29udGludWVnYW1lX3N0YXJ0X2xldmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnY29udGludWVCdG4nKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIFd4QXBpLmJhbm5lcld1Q2h1MigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQoV3hBcGkuYmFubmVyVE8yKVxyXG4gICAgICAgIEFkTWdyLmluc3RhbmNlLmhpZGVCYW5uZXIoKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgdGhpcy5jb250ZW50LmRlc3Ryb3lBbGxDaGlsZHJlbigpXHJcbiAgICAgICAgdGhpcy5jbG9zZUNhbGxiYWNrICYmIHRoaXMuY2xvc2VDYWxsYmFjaygpXHJcbiAgICAgICAgdGhpcy5jbG9zZUNhbGxiYWNrID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIF9pbml0KCkge1xyXG4gICAgICAgIGxldCBmaW5nZXJOdW06IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm15TmF2QXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtKVxyXG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKG5vZGUpXHJcblxyXG4gICAgICAgICAgICBsZXQgbmFtZTogY2MuTGFiZWwgPSBub2RlLmdldENoaWxkQnlOYW1lKCduYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICBsZXQgaWNvbjogY2MuU3ByaXRlID0gbm9kZS5nZXRDaGlsZEJ5TmFtZSgnaWNvbicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgICAgIGxldCBmaW5nZXI6IGNjLk5vZGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdmaW5nZXInKVxyXG5cclxuICAgICAgICAgICAgbmFtZS5zdHJpbmcgPSBKSk1nci5pbnN0YW5jZS5nZXRTdWJ0aXRsZShpKVxyXG4gICAgICAgICAgICBKSk1nci5pbnN0YW5jZS5sb2FkSW1nQnlVcmwoaWNvbiwgdGhpcy5teU5hdkFycltpXS5pY29uKVxyXG4gICAgICAgICAgICBmaW5nZXIuYWN0aXZlID0gaSA9PSBmaW5nZXJOdW1cclxuXHJcbiAgICAgICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHsgdGhpcy5uYXZDQihldmVudCwgaSkgfSwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29udGludWVDQigpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21OYXYoKSB7XHJcbiAgICAgICAgbGV0IGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNilcclxuICAgICAgICB0aGlzLm5hdkNCKG51bGwsIGlkKVxyXG4gICAgfVxyXG5cclxuICAgIG5hdkNCKGV2ZW50OiBjYy5FdmVudCwgaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGljayBpZDonLCBpZClcclxuICAgICAgICBXeEFwaS5hbGRFdmVudCgn54Ot6Zeo5o6o6I2Q5YWo5bGP5bmV5a+85Ye66aG1LeaAu+eCueWHu+aVsCcpXHJcbiAgICAgICAgSkpNZ3IuaW5zdGFuY2UuTmF2aWdhdGVBcHAoaWQsICgpID0+IHsgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn54Ot6Zeo5o6o6I2Q5YWo5bGP5bmV5a+85Ye66aG1LeaAu+aIkOWKn+i3s+i9rOaVsCcpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/DrawUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '12943VnbVBF/JhC43WoEYow', 'DrawUI');
// ExportLibs/View/DrawUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ExportUtils_1 = require("../ExportUtils");
var WxApi_1 = require("../../Scripts/Libs/WxApi");
var AdMgr_1 = require("../../Scripts/Mod/AdMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DrawUI = /** @class */ (function (_super) {
    __extends(DrawUI, _super);
    function DrawUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.scroll = null;
        _this.content = null;
        _this.bgNode = null;
        _this.myNavArr = [];
        _this.closeCallback = null;
        _this.isAutoClose = false;
        _this.hadTouch = false;
        return _this;
    }
    // onLoad () {}
    DrawUI.prototype.start = function () {
    };
    DrawUI.prototype.showUI = function (callback, param) {
        if (callback) {
            this.closeCallback = callback;
        }
        if (param && param.isAutoClose) {
            this.isAutoClose = param.isAutoClose;
        }
        WxApi_1.default.aldEvent('左边抽屉导出弹窗出现次数');
        this.node.active = true;
        this.moveDraw(-375, function () { });
    };
    DrawUI.prototype.onEnable = function () {
        var _this = this;
        this.myNavArr = [].concat(ExportUtils_1.default.instance.navigateAppArr);
        this._init();
        if (this.isAutoClose) {
            this.scheduleOnce(function () {
                if (!_this.hadTouch)
                    _this.closeCB();
            }, 1.5);
        }
    };
    DrawUI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
        this.content.destroyAllChildren();
        this.closeCallback && this.closeCallback();
        this.closeCallback = null;
        this.bgNode.x = -1000;
        this.hadTouch = false;
    };
    DrawUI.prototype.moveDraw = function (x, cb) {
        var a1 = cc.moveTo(0.2, cc.v2(x, this.bgNode.y));
        var a2 = cc.callFunc(cb);
        this.bgNode.runAction(cc.sequence(a1, a2));
    };
    DrawUI.prototype._init = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var node = cc.instantiate(this_1.item);
            node.active = true;
            this_1.content.addChild(node);
            var name = node.getChildByName('name').getComponent(cc.Label);
            var icon = node.getChildByName('icon').getComponent(cc.Sprite);
            name.string = ExportUtils_1.default.instance.getSubtitle(i);
            ExportUtils_1.default.instance.loadImgByUrl(icon, this_1.myNavArr[i].icon);
            node.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, i); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.myNavArr.length; i++) {
            _loop_1(i);
        }
    };
    DrawUI.prototype.closeCB = function () {
        var _this = this;
        this.moveDraw(-1000, function () {
            _this.node.active = false;
        });
    };
    DrawUI.prototype.navCB = function (event, id) {
        var _this = this;
        console.log('click id:', id);
        this.hadTouch = true;
        WxApi_1.default.aldEvent('左边抽屉导出弹窗-总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
                _this.scheduleOnce(function () { AdMgr_1.default.instance.showBanner(); }, 0.1);
            });
        }, function () {
            WxApi_1.default.aldEvent('左边抽屉导出弹窗全-总成功跳转数');
        });
    };
    DrawUI.prototype.update = function (dt) {
        if (!this.hadTouch && this.scroll.isScrolling()) {
            this.hadTouch = true;
        }
    };
    __decorate([
        property(cc.Node)
    ], DrawUI.prototype, "item", void 0);
    __decorate([
        property(cc.ScrollView)
    ], DrawUI.prototype, "scroll", void 0);
    __decorate([
        property(cc.Node)
    ], DrawUI.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], DrawUI.prototype, "bgNode", void 0);
    DrawUI = __decorate([
        ccclass
    ], DrawUI);
    return DrawUI;
}(cc.Component));
exports.default = DrawUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcRHJhd1VJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUFrRDtBQUNsRCxrREFBNkM7QUFDN0MsaURBQTRDO0FBRXRDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFEaEQ7UUFBQSxxRUEwR0M7UUF0R0csVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUc1QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBR3ZCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsY0FBUSxHQUFVLEVBQUUsQ0FBQTtRQUVwQixtQkFBYSxHQUFhLElBQUksQ0FBQTtRQUU5QixpQkFBVyxHQUFZLEtBQUssQ0FBQTtRQUM1QixjQUFRLEdBQVksS0FBSyxDQUFBOztJQXNGN0IsQ0FBQztJQXBGRyxlQUFlO0lBRWYsc0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sUUFBbUIsRUFBRSxLQUFXO1FBQ25DLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUE7U0FDaEM7UUFDRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQTtTQUN2QztRQUNELGVBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsY0FBUSxDQUFDLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQseUJBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFFBQVEs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R29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSkpNZ3IsIHsgRXhwb3J0RGlyIH0gZnJvbSBcIi4uL0V4cG9ydFV0aWxzXCI7XHJcbmltcG9ydCBXeEFwaSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9MaWJzL1d4QXBpXCI7XHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vLi4vU2NyaXB0cy9Nb2QvQWRNZ3JcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3VUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcclxuICAgIHNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiZ05vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgbXlOYXZBcnI6IGFueVtdID0gW11cclxuXHJcbiAgICBjbG9zZUNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGxcclxuXHJcbiAgICBpc0F1dG9DbG9zZTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBoYWRUb3VjaDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3dVSShjYWxsYmFjaz86IEZ1bmN0aW9uLCBwYXJhbT86IGFueSkge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgPSBjYWxsYmFja1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyYW0gJiYgcGFyYW0uaXNBdXRvQ2xvc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0F1dG9DbG9zZSA9IHBhcmFtLmlzQXV0b0Nsb3NlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFd4QXBpLmFsZEV2ZW50KCflt6bovrnmir3lsYnlr7zlh7rlvLnnqpflh7rnjrDmrKHmlbAnKVxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tb3ZlRHJhdygtMzc1LCAoKSA9PiB7IH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5teU5hdkFyciA9IFtdLmNvbmNhdChKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFycilcclxuICAgICAgICB0aGlzLl9pbml0KClcclxuICAgICAgICBpZiAodGhpcy5pc0F1dG9DbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFkVG91Y2gpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUNCKClcclxuICAgICAgICAgICAgfSwgMS41KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKClcclxuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgJiYgdGhpcy5jbG9zZUNhbGxiYWNrKClcclxuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgPSBudWxsXHJcbiAgICAgICAgdGhpcy5iZ05vZGUueCA9IC0xMDAwXHJcbiAgICAgICAgdGhpcy5oYWRUb3VjaCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZURyYXcoeDogbnVtYmVyLCBjYjogRnVuY3Rpb24pIHtcclxuICAgICAgICBsZXQgYTEgPSBjYy5tb3ZlVG8oMC4yLCBjYy52Mih4LCB0aGlzLmJnTm9kZS55KSlcclxuICAgICAgICBsZXQgYTIgPSBjYy5jYWxsRnVuYyhjYilcclxuICAgICAgICB0aGlzLmJnTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYTEsIGEyKSlcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlOYXZBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pXHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQobm9kZSlcclxuXHJcbiAgICAgICAgICAgIGxldCBuYW1lOiBjYy5MYWJlbCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIGxldCBpY29uOiBjYy5TcHJpdGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdpY29uJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuXHJcbiAgICAgICAgICAgIG5hbWUuc3RyaW5nID0gSkpNZ3IuaW5zdGFuY2UuZ2V0U3VidGl0bGUoaSlcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2UubG9hZEltZ0J5VXJsKGljb24sIHRoaXMubXlOYXZBcnJbaV0uaWNvbilcclxuXHJcbiAgICAgICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHsgdGhpcy5uYXZDQihldmVudCwgaSkgfSwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VDQigpIHtcclxuICAgICAgICB0aGlzLm1vdmVEcmF3KC0xMDAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbmF2Q0IoZXZlbnQ6IGNjLkV2ZW50LCBpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrIGlkOicsIGlkKVxyXG4gICAgICAgIHRoaXMuaGFkVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+W3pui+ueaKveWxieWvvOWHuuW8ueeqly3mgLvngrnlh7vmlbAnKVxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLk5hdmlnYXRlQXBwKGlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19SRUNPTU1FTkRVSSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKCkgfSwgMC4xKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+W3pui+ueaKveWxieWvvOWHuuW8ueeql+WFqC3mgLvmiJDlip/ot7PovazmlbAnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhZFRvdWNoICYmIHRoaXMuc2Nyb2xsLmlzU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5oYWRUb3VjaCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Sharp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71123qtqFBE6ZXv3z84xy+B', 'Sharp');
// Scripts/Crl/Sharp.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../Mod/Utility");
var LevelBase_1 = require("./Level/LevelBase");
var SharpAni_1 = require("./SharpAni");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Sharp = /** @class */ (function (_super) {
    __extends(Sharp, _super);
    function Sharp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pointNode = null;
        _this.moveSpeed = 1;
        _this.isMoving = false;
        _this.pointIndex = 0;
        _this.aniCrl = null;
        return _this;
    }
    Sharp.prototype.onLoad = function () {
        this.pointNode = LevelBase_1.default.Share.node.getChildByName('PointNode');
        this.aniCrl = this.node.children[0].getComponent(SharpAni_1.default);
    };
    Sharp.prototype.start = function () {
    };
    Sharp.prototype.moveToPoint = function (index) {
        var _this = this;
        return new Promise(function (rs, rj) {
            if (_this.isMoving) {
                rs();
                return;
            }
            _this.aniCrl.playAnimationByName(1);
            _this.isMoving = true;
            var desPos = _this.pointNode.children[index].getPosition();
            _this.node.scaleX = Math.abs(_this.node.scaleX) * (desPos.x < _this.node.x ? 1 : -1);
            var dis = Utility_1.default.getWorldDis(_this.pointNode.children[index], _this.node);
            var a1 = cc.moveTo(dis / 300 /* this.moveSpeed */, desPos);
            var a2 = cc.callFunc(function () {
                _this.pointIndex = index;
                _this.isMoving = false;
                _this.aniCrl.playAnimationByName(0);
                rs();
            });
            var a3 = cc.sequence(a1, a2);
            _this.node.runAction(a3);
        });
    };
    Sharp.prototype.checkEatPlayer = function () {
        if (!LevelBase_1.default.Share.isGameOver) {
            if (Utility_1.default.getWorldDis(this.node, LevelBase_1.default.Share.playerNode) <= 50) {
                this.aniCrl.playAnimationByName(3);
                LevelBase_1.default.Share.loseCB();
            }
        }
    };
    Sharp.prototype.update = function (dt) {
        this.checkEatPlayer();
    };
    __decorate([
        property
    ], Sharp.prototype, "pointIndex", void 0);
    Sharp = __decorate([
        ccclass
    ], Sharp);
    return Sharp;
}(cc.Component));
exports.default = Sharp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxTaGFycC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBcUM7QUFFckMsK0NBQTBDO0FBQzFDLHVDQUFrQztBQUU1QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBRC9DO1FBQUEscUVBeURDO1FBdERHLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsZUFBUyxHQUFXLENBQUMsQ0FBQTtRQUVyQixjQUFRLEdBQVksS0FBSyxDQUFBO1FBRXpCLGdCQUFVLEdBQVcsQ0FBQyxDQUFBO1FBRXRCLFlBQU0sR0FBYSxJQUFJLENBQUE7O0lBOEMzQixDQUFDO0lBNUNHLHNCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDakUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFBO0lBQzlELENBQUM7SUFFRCxxQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDJCQUFXLEdBQVgsVUFBWSxLQUFhO1FBQXpCLGlCQXFCQztRQXBCRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsRUFBRSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNmLEVBQUUsRUFBRSxDQUFBO2dCQUNKLE9BQU07YUFDVDtZQUNELEtBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7WUFDcEIsSUFBSSxNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUE7WUFDekQsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2pGLElBQUksR0FBRyxHQUFHLGlCQUFPLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN4RSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUEsb0JBQW9CLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDekQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDakIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUE7Z0JBQ3ZCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO2dCQUNyQixLQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNsQyxFQUFFLEVBQUUsQ0FBQTtZQUNSLENBQUMsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDNUIsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsOEJBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDN0IsSUFBSSxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLG1CQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDbEMsbUJBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUE7YUFDM0I7U0FDSjtJQUNMLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBL0NEO1FBREMsUUFBUTs2Q0FDYTtJQVJMLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0F3RHpCO0lBQUQsWUFBQztDQXhERCxBQXdEQyxDQXhEa0MsRUFBRSxDQUFDLFNBQVMsR0F3RDlDO2tCQXhEb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgTGV2ZWwxIGZyb20gXCIuL0xldmVsL0xldmVsMVwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuL0xldmVsL0xldmVsQmFzZVwiO1xyXG5pbXBvcnQgU2hhcnBBbmkgZnJvbSBcIi4vU2hhcnBBbmlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFycCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcG9pbnROb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIG1vdmVTcGVlZDogbnVtYmVyID0gMVxyXG5cclxuICAgIGlzTW92aW5nOiBib29sZWFuID0gZmFsc2VcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcG9pbnRJbmRleDogbnVtYmVyID0gMFxyXG5cclxuICAgIGFuaUNybDogU2hhcnBBbmkgPSBudWxsXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucG9pbnROb2RlID0gTGV2ZWxCYXNlLlNoYXJlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1BvaW50Tm9kZScpXHJcbiAgICAgICAgdGhpcy5hbmlDcmwgPSB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KFNoYXJwQW5pKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9Qb2ludChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChycywgcmopID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJzKClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYW5pQ3JsLnBsYXlBbmltYXRpb25CeU5hbWUoMSlcclxuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICAgICAgbGV0IGRlc1BvcyA9IHRoaXMucG9pbnROb2RlLmNoaWxkcmVuW2luZGV4XS5nZXRQb3NpdGlvbigpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSBNYXRoLmFicyh0aGlzLm5vZGUuc2NhbGVYKSAqIChkZXNQb3MueCA8IHRoaXMubm9kZS54ID8gMSA6IC0xKVxyXG4gICAgICAgICAgICBsZXQgZGlzID0gVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbltpbmRleF0sIHRoaXMubm9kZSlcclxuICAgICAgICAgICAgbGV0IGExID0gY2MubW92ZVRvKGRpcyAvIDMwMC8qIHRoaXMubW92ZVNwZWVkICovLCBkZXNQb3MpXHJcbiAgICAgICAgICAgIGxldCBhMiA9IGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRJbmRleCA9IGluZGV4XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pQ3JsLnBsYXlBbmltYXRpb25CeU5hbWUoMClcclxuICAgICAgICAgICAgICAgIHJzKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IGEzID0gY2Muc2VxdWVuY2UoYTEsIGEyKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGEzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tFYXRQbGF5ZXIoKSB7XHJcbiAgICAgICAgaWYgKCFMZXZlbEJhc2UuU2hhcmUuaXNHYW1lT3Zlcikge1xyXG4gICAgICAgICAgICBpZiAoVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLm5vZGUsIExldmVsQmFzZS5TaGFyZS5wbGF5ZXJOb2RlKSA8PSA1MCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmlDcmwucGxheUFuaW1hdGlvbkJ5TmFtZSgzKVxyXG4gICAgICAgICAgICAgICAgTGV2ZWxCYXNlLlNoYXJlLmxvc2VDQigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0VhdFBsYXllcigpXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/SharpAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93dd4okGThA3YlpC3cehS2Y', 'SharpAni');
// Scripts/Crl/SharpAni.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SharpAni = /** @class */ (function (_super) {
    __extends(SharpAni, _super);
    function SharpAni() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isRed = false;
        _this._armatureDisPlay = null;
        _this._armature = null;
        return _this;
        // update (dt) {}
    }
    SharpAni.prototype.onLoad = function () {
        this.getArmature();
    };
    SharpAni.prototype.start = function () {
    };
    SharpAni.prototype.getArmature = function () {
        //获取 ArmatureDisplay
        this._armatureDisPlay = this.getComponent(dragonBones.ArmatureDisplay);
        this.playAnimationByName(0);
        //获取 Armatrue
        this._armature = this._armatureDisPlay.armature();
        //添加动画监听
        //this._armatureDisPlay.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this);
        //this._armatureDisPlay.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.loopAnimationEventHandler, this);
    };
    SharpAni.prototype.playAnimationByName = function (index) {
        switch (index) {
            case 0:
                this._armatureDisPlay.playAnimation(this.isRed ? 'Ani_Fish_Stand' : 'Ani_Shark_Stand', 0);
                break;
            case 1:
                this._armatureDisPlay.playAnimation(this.isRed ? 'Ani_Fish_Run' : 'Ani_Shark_Run', 0);
                break;
            case 2:
                this._armatureDisPlay.playAnimation(this.isRed ? 'Ani_Fish_Die' : 'Ani_Shark_Die', 1);
                break;
            case 3:
                this._armatureDisPlay.playAnimation(this.isRed ? 'Ani_Fish_Eat' : 'Ani_Shark_Eat', 1);
                break;
        }
        //this._armatureDisPlay.timeScale = 0.1;
    };
    SharpAni.prototype.animationEventHandler = function (event) {
        // if (event.type == dragonBones.EventObject.COMPLETE) {
        //     //this._armatureDisPlay.stopAnimation();
        // }
    };
    SharpAni.prototype.loopAnimationEventHandler = function (event) {
        //this._armatureDisPlay.enabled = false;
        //console.log(event);
        // if (event.type == dragonBones.EventObject.LOOP_COMPLETE) {
        // }
    };
    __decorate([
        property
    ], SharpAni.prototype, "isRed", void 0);
    SharpAni = __decorate([
        ccclass
    ], SharpAni);
    return SharpAni;
}(cc.Component));
exports.default = SharpAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxTaGFycEFuaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBNERDO1FBeERHLFdBQUssR0FBWSxLQUFLLENBQUE7UUFFdEIsc0JBQWdCLEdBQWdDLElBQUksQ0FBQTtRQUNwRCxlQUFTLEdBQXlCLElBQUksQ0FBQTs7UUFvRHRDLGlCQUFpQjtJQUNyQixDQUFDO0lBbkRHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLGFBQWE7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsRCxRQUFRO1FBQ1IsNkdBQTZHO1FBQzdHLHNIQUFzSDtJQUMxSCxDQUFDO0lBQ0Qsc0NBQW1CLEdBQW5CLFVBQW9CLEtBQUs7UUFDckIsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFGLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdEYsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0RixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RGLE1BQU07U0FDYjtRQUNELHdDQUF3QztJQUM1QyxDQUFDO0lBRUQsd0NBQXFCLEdBQXJCLFVBQXNCLEtBQUs7UUFDdkIsd0RBQXdEO1FBQ3hELCtDQUErQztRQUMvQyxJQUFJO0lBQ1IsQ0FBQztJQUVELDRDQUF5QixHQUF6QixVQUEwQixLQUFLO1FBQzNCLHdDQUF3QztRQUN4QyxxQkFBcUI7UUFDckIsNkRBQTZEO1FBRTdELElBQUk7SUFDUixDQUFDO0lBckREO1FBREMsUUFBUTsyQ0FDYTtJQUhMLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EyRDVCO0lBQUQsZUFBQztDQTNERCxBQTJEQyxDQTNEcUMsRUFBRSxDQUFDLFNBQVMsR0EyRGpEO2tCQTNEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFycEFuaSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc1JlZDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgX2FybWF0dXJlRGlzUGxheTogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5ID0gbnVsbFxyXG4gICAgX2FybWF0dXJlOiBkcmFnb25Cb25lcy5Bcm1hdHVyZSA9IG51bGxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBcm1hdHVyZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEFybWF0dXJlKCkge1xyXG4gICAgICAgIC8v6I635Y+WIEFybWF0dXJlRGlzcGxheVxyXG4gICAgICAgIHRoaXMuX2FybWF0dXJlRGlzUGxheSA9IHRoaXMuZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uQnlOYW1lKDApO1xyXG4gICAgICAgIC8v6I635Y+WIEFybWF0cnVlXHJcbiAgICAgICAgdGhpcy5fYXJtYXR1cmUgPSB0aGlzLl9hcm1hdHVyZURpc1BsYXkuYXJtYXR1cmUoKTtcclxuICAgICAgICAvL+a3u+WKoOWKqOeUu+ebkeWQrFxyXG4gICAgICAgIC8vdGhpcy5fYXJtYXR1cmVEaXNQbGF5LmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsIHRoaXMuYW5pbWF0aW9uRXZlbnRIYW5kbGVyLCB0aGlzKTtcclxuICAgICAgICAvL3RoaXMuX2FybWF0dXJlRGlzUGxheS5hZGRFdmVudExpc3RlbmVyKGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkxPT1BfQ09NUExFVEUsIHRoaXMubG9vcEFuaW1hdGlvbkV2ZW50SGFuZGxlciwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBwbGF5QW5pbWF0aW9uQnlOYW1lKGluZGV4KSB7XHJcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcm1hdHVyZURpc1BsYXkucGxheUFuaW1hdGlvbih0aGlzLmlzUmVkID8gJ0FuaV9GaXNoX1N0YW5kJyA6ICdBbmlfU2hhcmtfU3RhbmQnLCAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcm1hdHVyZURpc1BsYXkucGxheUFuaW1hdGlvbih0aGlzLmlzUmVkID8gJ0FuaV9GaXNoX1J1bicgOiAnQW5pX1NoYXJrX1J1bicsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FybWF0dXJlRGlzUGxheS5wbGF5QW5pbWF0aW9uKHRoaXMuaXNSZWQgPyAnQW5pX0Zpc2hfRGllJyA6ICdBbmlfU2hhcmtfRGllJywgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYXJtYXR1cmVEaXNQbGF5LnBsYXlBbmltYXRpb24odGhpcy5pc1JlZCA/ICdBbmlfRmlzaF9FYXQnIDogJ0FuaV9TaGFya19FYXQnLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RoaXMuX2FybWF0dXJlRGlzUGxheS50aW1lU2NhbGUgPSAwLjE7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0aW9uRXZlbnRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gaWYgKGV2ZW50LnR5cGUgPT0gZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUpIHtcclxuICAgICAgICAvLyAgICAgLy90aGlzLl9hcm1hdHVyZURpc1BsYXkuc3RvcEFuaW1hdGlvbigpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBsb29wQW5pbWF0aW9uRXZlbnRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgLy90aGlzLl9hcm1hdHVyZURpc1BsYXkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIC8vIGlmIChldmVudC50eXBlID09IGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkxPT1BfQ09NUExFVEUpIHtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f47dTdHCdHOYWgWn/A9zfd', 'Level2');
// Scripts/Crl/Level/Level2.ts

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
var GuideFinger_1 = require("../GuideFinger");
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level2 = /** @class */ (function (_super) {
    __extends(Level2, _super);
    function Level2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.guideFinger = null;
        return _this;
    }
    Level2.prototype.onEnable = function () {
        this.guideFinger.stepAction();
        this.schedule(this.updateCB);
    };
    Level2.prototype.updateCB = function () {
        this.WaterSwitch.children[0].active = this.getNeedleCrlById(1).switchState > 0;
    };
    Level2.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.guideFinger.step++;
                        this.guideFinger.stepAction();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 1:
                        _a.sent();
                        if (!(this.getNeedleCrlById(1).switchState > 0)) return [3 /*break*/, 4];
                        this.guideFinger.node.active = false;
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
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
    Level2.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 1)) return [3 /*break*/, 3];
                        this.guideFinger.node.active = false;
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
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
    Level2.prototype.trigger11 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.SharpCrl.moveToPoint(0);
                return [2 /*return*/];
            });
        });
    };
    Level2.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(GuideFinger_1.default)
    ], Level2.prototype, "guideFinger", void 0);
    Level2 = __decorate([
        ccclass
    ], Level2);
    return Level2;
}(LevelBase_1.default));
exports.default = Level2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBRXpDLHlDQUFvQztBQUU5QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFTO0lBRDdDO1FBQUEscUVBd0NDO1FBcENHLGlCQUFXLEdBQWdCLElBQUksQ0FBQTs7SUFvQ25DLENBQUM7SUFsQ0cseUJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVELHlCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUE7SUFDbEYsQ0FBQztJQUVLLDBCQUFTLEdBQWY7Ozs7O3dCQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUE7d0JBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUE7d0JBQzdCLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs2QkFDL0IsQ0FBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQSxFQUF4Qyx3QkFBd0M7d0JBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7d0JBQ3BDLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBOzs7d0JBRXZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7OztLQUN2QjtJQUNLLDBCQUFTLEdBQWY7Ozs7OzZCQUNRLENBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFBLEVBQTlCLHdCQUE4Qjt3QkFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTt3QkFDcEMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUNuQyxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7Ozt3QkFFdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7O0tBQ3ZCO0lBQ0ssMEJBQVMsR0FBZjs7O2dCQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBOzs7O0tBQy9CO0lBQ0ssMEJBQVMsR0FBZjs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUE7Ozs7O0tBQ3JDO0lBbkNEO1FBREMsUUFBUSxDQUFDLHFCQUFXLENBQUM7K0NBQ1M7SUFIZCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBdUMxQjtJQUFELGFBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q21DLG1CQUFTLEdBdUM1QztrQkF2Q29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR3VpZGVGaW5nZXIgZnJvbSBcIi4uL0d1aWRlRmluZ2VyXCI7XHJcbmltcG9ydCBOZWVkbGUgZnJvbSBcIi4uL1Byb3AvTmVlZGxlXCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwyIGV4dGVuZHMgTGV2ZWxCYXNlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoR3VpZGVGaW5nZXIpXHJcbiAgICBndWlkZUZpbmdlcjogR3VpZGVGaW5nZXIgPSBudWxsXHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5ndWlkZUZpbmdlci5zdGVwQWN0aW9uKClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlQ0IpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ0IoKSB7XHJcbiAgICAgICAgdGhpcy5XYXRlclN3aXRjaC5jaGlsZHJlblswXS5hY3RpdmUgPSB0aGlzLmdldE5lZWRsZUNybEJ5SWQoMSkuc3dpdGNoU3RhdGUgPiAwXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdHJpZ2dlcjAwKCkge1xyXG4gICAgICAgIHRoaXMuZ3VpZGVGaW5nZXIuc3RlcCsrXHJcbiAgICAgICAgdGhpcy5ndWlkZUZpbmdlci5zdGVwQWN0aW9uKClcclxuICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgIGlmICh0aGlzLmdldE5lZWRsZUNybEJ5SWQoMSkuc3dpdGNoU3RhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3VpZGVGaW5nZXIubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgyKVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg0KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjEwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5ndWlkZUZpbmdlci5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMTEoKSB7XHJcbiAgICAgICAgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjIwKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMilcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/GameLogic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b790dcAVrJK+Y2P3WTjeGtj', 'GameLogic');
// Scripts/Crl/GameLogic.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var WxApi_1 = require("../Libs/WxApi");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLogic = /** @class */ (function (_super) {
    __extends(GameLogic, _super);
    function GameLogic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.LevelNode = null;
        _this.FinishUI = null;
        _this.DefeatUI = null;
        return _this;
        // update (dt) {}
    }
    GameLogic_1 = GameLogic;
    GameLogic.prototype.onLoad = function () {
        GameLogic_1.Share = this;
        this.addLevelNode();
    };
    GameLogic.prototype.start = function () {
        if (PlayerDataMgr_1.default.getPlayerData().grade <= 10)
            WxApi_1.default.aldEvent('第' + PlayerDataMgr_1.default.getPlayerData().grade + '关成功进入游戏');
    };
    GameLogic.prototype.addLevelNode = function () {
        // cc.loader.loadRes('Prefabs/LevelNode/Level' + PlayerDataMgr.getPlayerData().grade, cc.Prefab, (err, prefab) => {
        //     if (prefab) {
        //         let p = cc.instantiate(prefab)
        //         this.LevelNode.addChild(p)
        //     }
        // })
        this.LevelNode.children[PlayerDataMgr_1.default.getPlayerData().grade - 1].active = true;
    };
    GameLogic.prototype.showFinishUI = function () {
        this.FinishUI.active = true;
    };
    GameLogic.prototype.showDefeatUI = function () {
        this.DefeatUI.active = true;
    };
    var GameLogic_1;
    __decorate([
        property(cc.Node)
    ], GameLogic.prototype, "LevelNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameLogic.prototype, "FinishUI", void 0);
    __decorate([
        property(cc.Node)
    ], GameLogic.prototype, "DefeatUI", void 0);
    GameLogic = GameLogic_1 = __decorate([
        ccclass
    ], GameLogic);
    return GameLogic;
}(cc.Component));
exports.default = GameLogic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxHYW1lTG9naWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELHVDQUFrQztBQUU1QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBRG5EO1FBQUEscUVBd0NDO1FBbkNHLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFBOztRQThCeEIsaUJBQWlCO0lBQ3JCLENBQUM7a0JBdkNvQixTQUFTO0lBVTFCLDBCQUFNLEdBQU47UUFDSSxXQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUN0QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDSSxJQUFJLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDekMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUE7SUFDN0UsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFDSSxtSEFBbUg7UUFDbkgsb0JBQW9CO1FBQ3BCLHlDQUF5QztRQUN6QyxxQ0FBcUM7UUFDckMsUUFBUTtRQUNSLEtBQUs7UUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO0lBQ2xGLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO0lBQy9CLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO0lBQy9CLENBQUM7O0lBaENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNNO0lBUlAsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXVDN0I7SUFBRCxnQkFBQztDQXZDRCxBQXVDQyxDQXZDc0MsRUFBRSxDQUFDLFNBQVMsR0F1Q2xEO2tCQXZDb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuaW1wb3J0IFd4QXBpIGZyb20gXCIuLi9MaWJzL1d4QXBpXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxvZ2ljIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgU2hhcmU6IEdhbWVMb2dpY1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgTGV2ZWxOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBGaW5pc2hVSTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRGVmZWF0VUk6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEdhbWVMb2dpYy5TaGFyZSA9IHRoaXNcclxuICAgICAgICB0aGlzLmFkZExldmVsTm9kZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlIDw9IDEwKVxyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn56ysJyArIFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlICsgJ+WFs+aIkOWKn+i/m+WFpea4uOaIjycpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGV2ZWxOb2RlKCkge1xyXG4gICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKCdQcmVmYWJzL0xldmVsTm9kZS9MZXZlbCcgKyBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHByZWZhYikge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IHAgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLkxldmVsTm9kZS5hZGRDaGlsZChwKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICB0aGlzLkxldmVsTm9kZS5jaGlsZHJlbltQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSAtIDFdLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBzaG93RmluaXNoVUkoKSB7XHJcbiAgICAgICAgdGhpcy5GaW5pc2hVSS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RlZmVhdFVJKCkge1xyXG4gICAgICAgIHRoaXMuRGVmZWF0VUkuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66a63zd4wlKDrcVYZCaguS3', 'Level3');
// Scripts/Crl/Level/Level3.ts

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
var Level3 = /** @class */ (function (_super) {
    __extends(Level3, _super);
    function Level3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.poisonNode = null;
        return _this;
    }
    Level3.prototype.onEnable = function () {
        this.schedule(this.updateCB);
    };
    Level3.prototype.updateCB = function () {
        if (this.meatNode.isValid && !this.isGameOver) {
            for (var i = 0; i < this.poisonNode.childrenCount; i++) {
                var p = this.poisonNode.children[i];
                if (Utility_1.default.getWorldDis(this.meatNode, p) <= 100) {
                    this.loseCB();
                    return;
                }
            }
        }
        if (!this.isGameOver) {
            for (var i = 0; i < this.poisonNode.childrenCount; i++) {
                var p = this.poisonNode.children[i];
                if (Utility_1.default.getWorldDis(this.playerNode, p) <= 100) {
                    this.loseCB();
                    return;
                }
            }
        }
    };
    Level3.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.meatCrl.triggerCB()];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level3.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playerCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Level3.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    Level3.prototype.trigger30 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Level3.prototype, "poisonNode", void 0);
    Level3 = __decorate([
        ccclass
    ], Level3);
    return Level3;
}(LevelBase_1.default));
exports.default = Level3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLHlDQUFvQztBQUU5QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFTO0lBRDdDO1FBQUEscUVBNkNDO1FBekNHLGdCQUFVLEdBQVksSUFBSSxDQUFBOztJQXlDOUIsQ0FBQztJQXZDRyx5QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVELHlCQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNuQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO29CQUM5QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7b0JBQ2IsT0FBTTtpQkFDVDthQUNKO1NBQ0o7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNuQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO29CQUNoRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7b0JBQ2IsT0FBTTtpQkFDVDthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUssMEJBQVMsR0FBZjs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBOUIsU0FBOEIsQ0FBQTt3QkFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7O0tBQ3ZCO0lBQ0ssMEJBQVMsR0FBZjs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7d0JBQ25DLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs7Ozs7S0FDdEM7SUFDSywwQkFBUyxHQUFmOzs7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7S0FDdkI7SUFDSywwQkFBUyxHQUFmOzs7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7S0FDdkI7SUF4Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUTtJQUhULE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E0QzFCO0lBQUQsYUFBQztDQTVDRCxBQTRDQyxDQTVDbUMsbUJBQVMsR0E0QzVDO2tCQTVDb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuL0xldmVsQmFzZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsMyBleHRlbmRzIExldmVsQmFzZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwb2lzb25Ob2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVDQilcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDQigpIHtcclxuICAgICAgICBpZiAodGhpcy5tZWF0Tm9kZS5pc1ZhbGlkICYmICF0aGlzLmlzR2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaXNvbk5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcCA9IHRoaXMucG9pc29uTm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5tZWF0Tm9kZSwgcCkgPD0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pc0dhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb2lzb25Ob2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSB0aGlzLnBvaXNvbk5vZGUuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgICAgIGlmIChVdGlsaXR5LmdldFdvcmxkRGlzKHRoaXMucGxheWVyTm9kZSwgcCkgPD0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHRyaWdnZXIwMCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLm1lYXRDcmwudHJpZ2dlckNCKClcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjEwKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDApXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIyMCgpIHtcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjMwKCkge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79c99Zl62hK57chV6G4niFD', 'Level5');
// Scripts/Crl/Level/Level5.ts

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
var GuideFinger_1 = require("../GuideFinger");
var Stone_1 = require("../Prop/Stone");
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level5 = /** @class */ (function (_super) {
    __extends(Level5, _super);
    function Level5() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.guideFinger = null;
        return _this;
    }
    Level5.prototype.onEnable = function () {
        this.guideFinger.stepAction();
        this.schedule(this.updateCB);
    };
    Level5.prototype.updateCB = function () {
        this.guideFinger.node.active = this.getNeedleCrlById(1).lostHead;
        Stone_1.default.Share.node.active = this.Sharp.isValid;
    };
    Level5.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Stone_1.default.Share.triggerCB()];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level5.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.Sharp && this.Sharp.isValid)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 2: return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(3)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Level5.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.Sharp && this.Sharp.isValid)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
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
    __decorate([
        property(GuideFinger_1.default)
    ], Level5.prototype, "guideFinger", void 0);
    Level5 = __decorate([
        ccclass
    ], Level5);
    return Level5;
}(LevelBase_1.default));
exports.default = Level5;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWw1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBQ3pDLHVDQUFrQztBQUNsQyx5Q0FBb0M7QUFFOUIsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFvQywwQkFBUztJQUQ3QztRQUFBLHFFQXVDQztRQW5DRyxpQkFBVyxHQUFnQixJQUFJLENBQUE7O0lBbUNuQyxDQUFDO0lBakNHLHlCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUE7UUFDaEUsZUFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO0lBQ2hELENBQUM7SUFFSywwQkFBUyxHQUFmOzs7OzRCQUNJLHFCQUFNLGVBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUE3QixTQUE2QixDQUFBO3dCQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7Ozs7S0FDdkI7SUFFSywwQkFBUyxHQUFmOzs7Ozs2QkFDUSxDQUFBLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUEsRUFBaEMsd0JBQWdDO3dCQUNoQyxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUE7OzRCQUVsQyxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7d0JBQ25DLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBOzs7Ozs7S0FFMUM7SUFFSywwQkFBUyxHQUFmOzs7Ozs2QkFDUSxDQUFBLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUEsRUFBaEMsd0JBQWdDO3dCQUNoQyxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUE7Ozt3QkFFbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7OztLQUUzQjtJQWpDRDtRQURDLFFBQVEsQ0FBQyxxQkFBVyxDQUFDOytDQUNTO0lBSGQsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXNDMUI7SUFBRCxhQUFDO0NBdENELEFBc0NDLENBdENtQyxtQkFBUyxHQXNDNUM7a0JBdENvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEd1aWRlRmluZ2VyIGZyb20gXCIuLi9HdWlkZUZpbmdlclwiO1xyXG5pbXBvcnQgU3RvbmUgZnJvbSBcIi4uL1Byb3AvU3RvbmVcIjtcclxuaW1wb3J0IExldmVsQmFzZSBmcm9tIFwiLi9MZXZlbEJhc2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbDUgZXh0ZW5kcyBMZXZlbEJhc2Uge1xyXG5cclxuICAgIEBwcm9wZXJ0eShHdWlkZUZpbmdlcilcclxuICAgIGd1aWRlRmluZ2VyOiBHdWlkZUZpbmdlciA9IG51bGxcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmd1aWRlRmluZ2VyLnN0ZXBBY3Rpb24oKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVDQilcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDQigpIHtcclxuICAgICAgICB0aGlzLmd1aWRlRmluZ2VyLm5vZGUuYWN0aXZlID0gdGhpcy5nZXROZWVkbGVDcmxCeUlkKDEpLmxvc3RIZWFkXHJcbiAgICAgICAgU3RvbmUuU2hhcmUubm9kZS5hY3RpdmUgPSB0aGlzLlNoYXJwLmlzVmFsaWRcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB0cmlnZ2VyMDAoKSB7XHJcbiAgICAgICAgYXdhaXQgU3RvbmUuU2hhcmUudHJpZ2dlckNCKClcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHRyaWdnZXIxMCgpIHtcclxuICAgICAgICBpZiAodGhpcy5TaGFycCAmJiB0aGlzLlNoYXJwLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgyKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDEpXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHRyaWdnZXIyMCgpIHtcclxuICAgICAgICBpZiAodGhpcy5TaGFycCAmJiB0aGlzLlNoYXJwLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level6.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c900dbUYdRBwqtoN0ujG3aE', 'Level6');
// Scripts/Crl/Level/Level6.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level6 = /** @class */ (function (_super) {
    __extends(Level6, _super);
    function Level6() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.meatMove = false;
        return _this;
    }
    Level6.prototype.onEnable = function () {
        this.schedule(this.updateCB);
    };
    Level6.prototype.updateCB = function () {
        var _this = this;
        if (this.meatNode && this.meatNode.isValid && this.meatNode.y <= 70 && !this.meatMove) {
            this.canTouch = false;
            this.playerCrl.moveToPoint(0);
            this.meatMove = true;
            this.scheduleOnce(function () { _this.canTouch = true; }, 1);
        }
    };
    Level6.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    Level6.prototype.trigger01 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getNeedleCrlById(0).node.active = false;
                return [2 /*return*/];
            });
        });
    };
    Level6.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Level6 = __decorate([
        ccclass
    ], Level6);
    return Level6;
}(LevelBase_1.default));
exports.default = Level6;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWw2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQW9DO0FBRTlCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVM7SUFEN0M7UUFBQSxxRUE0QkM7UUF6QkcsY0FBUSxHQUFZLEtBQUssQ0FBQTs7SUF5QjdCLENBQUM7SUF2QkcseUJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuRixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FDdkQ7SUFDTCxDQUFDO0lBRUssMEJBQVMsR0FBZjs7O2dCQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7O0tBQ3ZCO0lBQ0ssMEJBQVMsR0FBZjs7O2dCQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTs7OztLQUMvQztJQUNLLDBCQUFTLEdBQWY7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBOzs7OztLQUN0QztJQXpCZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTJCMUI7SUFBRCxhQUFDO0NBM0JELEFBMkJDLENBM0JtQyxtQkFBUyxHQTJCNUM7a0JBM0JvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uLy4uL01vZC9VdGlsaXR5XCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWw2IGV4dGVuZHMgTGV2ZWxCYXNlIHtcclxuXHJcbiAgICBtZWF0TW92ZTogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUNCKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNCKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1lYXROb2RlICYmIHRoaXMubWVhdE5vZGUuaXNWYWxpZCAmJiB0aGlzLm1lYXROb2RlLnkgPD0gNzAgJiYgIXRoaXMubWVhdE1vdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDApXHJcbiAgICAgICAgICAgIHRoaXMubWVhdE1vdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5jYW5Ub3VjaCA9IHRydWUgfSwgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdHJpZ2dlcjAwKCkge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMDEoKSB7XHJcbiAgICAgICAgdGhpcy5nZXROZWVkbGVDcmxCeUlkKDApLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIxMCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level9.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f68favbPQ1FbqFhzNHqLiYR', 'Level9');
// Scripts/Crl/Level/Level9.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level9 = /** @class */ (function (_super) {
    __extends(Level9, _super);
    function Level9() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.smoke = null;
        _this.sawNode = null;
        return _this;
    }
    Level9.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.smoke.destroy();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        if (!this.sawNode.isValid) return [3 /*break*/, 2];
                        this.loseCB();
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Level9.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.scheduleOnce(function () {
                    _this.sawNode.destroy();
                    _this.canTouch = true;
                }, 2);
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Level9.prototype, "smoke", void 0);
    __decorate([
        property(cc.Node)
    ], Level9.prototype, "sawNode", void 0);
    Level9 = __decorate([
        ccclass
    ], Level9);
    return Level9;
}(LevelBase_1.default));
exports.default = Level9;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWw5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBRTlCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVM7SUFEN0M7UUFBQSxxRUF3QkM7UUFwQkcsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixhQUFPLEdBQVksSUFBSSxDQUFBOztJQWtCM0IsQ0FBQztJQWhCUywwQkFBUyxHQUFmOzs7Ozt3QkFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFBO3dCQUNwQixxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7NkJBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFwQix3QkFBb0I7d0JBQ3BCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTs7NEJBRWIscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUNuQyxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7Ozs7OztLQUUxQztJQUNLLDBCQUFTLEdBQWY7Ozs7Z0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFBO29CQUN0QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtnQkFDeEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBOzs7O0tBQ1I7SUFuQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNLO0lBTE4sTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXVCMUI7SUFBRCxhQUFDO0NBdkJELEFBdUJDLENBdkJtQyxtQkFBUyxHQXVCNUM7a0JBdkJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExldmVsQmFzZSBmcm9tIFwiLi9MZXZlbEJhc2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbDkgZXh0ZW5kcyBMZXZlbEJhc2Uge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc21va2U6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNhd05vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgYXN5bmMgdHJpZ2dlcjAwKCkge1xyXG4gICAgICAgIHRoaXMuc21va2UuZGVzdHJveSgpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMClcclxuICAgICAgICBpZiAodGhpcy5zYXdOb2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDEpXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjEwKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zYXdOb2RlLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level8.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbffahfBQ5C6rof27BHiJtR', 'Level8');
// Scripts/Crl/Level/Level8.ts

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
var Stone_1 = require("../Prop/Stone");
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level8 = /** @class */ (function (_super) {
    __extends(Level8, _super);
    function Level8() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.waterNode = null;
        _this.desSwitch = false;
        return _this;
    }
    Level8.prototype.onEnable = function () {
        this.schedule(this.updateCB);
    };
    Level8.prototype.updateCB = function () {
        if (this.isGameOver)
            return;
        if (this.meatNode.isValid && Utility_1.default.getWorldDis(Stone_1.default.Share.node, this.meatNode) <= 100) {
            this.loseCB();
            return;
        }
        if (!this.desSwitch) {
            for (var i = 0; i < this.waterNode.childrenCount; i++) {
                var w = this.waterNode.children[i];
                if (Utility_1.default.getWorldDis(Stone_1.default.Share.node, w) <= 111) {
                    this.waterNode.destroyAllChildren();
                    Stone_1.default.Share.node.runAction(cc.scaleTo(0.5, 1.2));
                    break;
                }
            }
            for (var i = 0; i < this.waterNode.childrenCount; i++) {
                var w = this.waterNode.children[i];
                if (Utility_1.default.getWorldDis(this.DesNode, w) <= 50) {
                    Utility_1.default.loadSpriteFrame('Texture/Prop/yxz_dj13_1', this.DesNode.getComponent(cc.Sprite));
                    this.desSwitch = true;
                    if (this.Sharp.isValid) {
                        this.canTouch = false;
                        this.SharpCrl.moveToPoint(0);
                    }
                    break;
                }
            }
        }
    };
    Level8.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.scheduleOnce(function () {
                    _this.canTouch = true;
                }, 3);
                return [2 /*return*/];
            });
        });
    };
    Level8.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    Level8.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.getNeedleCrlById(3).isAwake = true;
                this.scheduleOnce(function () {
                    _this.canTouch = true;
                }, 3);
                return [2 /*return*/];
            });
        });
    };
    Level8.prototype.trigger30 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playerCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        if (!this.desSwitch) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        this.loseCB();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Level8.prototype, "waterNode", void 0);
    Level8 = __decorate([
        ccclass
    ], Level8);
    return Level8;
}(LevelBase_1.default));
exports.default = Level8;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWw4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLHVDQUFrQztBQUNsQyx5Q0FBb0M7QUFFOUIsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFvQywwQkFBUztJQUQ3QztRQUFBLHFFQXNFQztRQWxFRyxlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLGVBQVMsR0FBWSxLQUFLLENBQUE7O0lBZ0U5QixDQUFDO0lBOURHLHlCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRUQseUJBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFNO1FBRTNCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksaUJBQU8sQ0FBQyxXQUFXLENBQUMsZUFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRTtZQUN0RixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDYixPQUFNO1NBQ1Q7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNsQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLGVBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTtvQkFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO29CQUNuQyxlQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtvQkFDaEQsTUFBSztpQkFDUjthQUNKO1lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNuRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDbEMsSUFBSSxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDNUMsaUJBQU8sQ0FBQyxlQUFlLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7b0JBQ3hGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO29CQUNyQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO3dCQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTt3QkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7cUJBQy9CO29CQUVELE1BQUs7aUJBQ1I7YUFDSjtTQUNKO0lBRUwsQ0FBQztJQUVLLDBCQUFTLEdBQWY7Ozs7Z0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtnQkFDeEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBOzs7O0tBQ1I7SUFDSywwQkFBUyxHQUFmOzs7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7S0FDdkI7SUFDSywwQkFBUyxHQUFmOzs7O2dCQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO2dCQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2dCQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Ozs7S0FDUjtJQUNLLDBCQUFTLEdBQWY7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBOzZCQUMvQixJQUFJLENBQUMsU0FBUyxFQUFkLHdCQUFjO3dCQUNkLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMsc0JBQU07O3dCQUVOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTs7Ozs7O0tBRXBCO0lBakVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ087SUFIUixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBcUUxQjtJQUFELGFBQUM7Q0FyRUQsQUFxRUMsQ0FyRW1DLG1CQUFTLEdBcUU1QztrQkFyRW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vLi4vTW9kL1V0aWxpdHlcIjtcclxuaW1wb3J0IFN0b25lIGZyb20gXCIuLi9Qcm9wL1N0b25lXCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWw4IGV4dGVuZHMgTGV2ZWxCYXNlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdhdGVyTm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBkZXNTd2l0Y2g6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVDQilcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDQigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWVhdE5vZGUuaXNWYWxpZCAmJiBVdGlsaXR5LmdldFdvcmxkRGlzKFN0b25lLlNoYXJlLm5vZGUsIHRoaXMubWVhdE5vZGUpIDw9IDEwMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvc2VDQigpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmRlc1N3aXRjaCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2F0ZXJOb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHcgPSB0aGlzLndhdGVyTm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXMoU3RvbmUuU2hhcmUubm9kZSwgdykgPD0gMTExKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YXRlck5vZGUuZGVzdHJveUFsbENoaWxkcmVuKClcclxuICAgICAgICAgICAgICAgICAgICBTdG9uZS5TaGFyZS5ub2RlLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDAuNSwgMS4yKSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2F0ZXJOb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHcgPSB0aGlzLndhdGVyTm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5EZXNOb2RlLCB3KSA8PSA1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFV0aWxpdHkubG9hZFNwcml0ZUZyYW1lKCdUZXh0dXJlL1Byb3AveXh6X2RqMTNfMScsIHRoaXMuRGVzTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc1N3aXRjaCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5TaGFycC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB0cmlnZ2VyMDAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH0sIDMpXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMTAoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIyMCgpIHtcclxuICAgICAgICB0aGlzLmdldE5lZWRsZUNybEJ5SWQoMykuaXNBd2FrZSA9IHRydWVcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfSwgMylcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIzMCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgICAgIGlmICh0aGlzLmRlc1N3aXRjaCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvc2VDQigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/HeadNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0473N+vbFH0JHD6gLQmtb5', 'HeadNode');
// Scripts/Crl/Prop/HeadNode.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../../Mod/Utility");
var LevelBase_1 = require("../Level/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HeadNode = /** @class */ (function (_super) {
    __extends(HeadNode, _super);
    function HeadNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.num = null;
        _this.count = 1;
        return _this;
    }
    HeadNode.prototype.onLoad = function () { };
    HeadNode.prototype.start = function () {
        this.icon.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.icon.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.icon.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.icon.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    HeadNode.prototype.touchStart = function (event) {
    };
    HeadNode.prototype.touchMove = function (event) {
        if (this.count <= 0)
            return;
        var pos = event.getLocation();
        pos = this.node.convertToNodeSpaceAR(pos);
        this.icon.setPosition(pos);
    };
    HeadNode.prototype.touchEnd = function (event) {
        if (this.count <= 0)
            return;
        for (var i = 0; i < LevelBase_1.default.Share.NeedleNode.childrenCount; i++) {
            var n = LevelBase_1.default.Share.NeedleNode.children[i];
            var head = n.getChildByName('needle').getChildByName('yxz_dj1_2');
            if (head.active == false && Utility_1.default.getWorldDis(head, this.icon) <= 50) {
                head.active = true;
                this.count--;
                LevelBase_1.default.Share.getNeedleCrlById(i).lostHead = false;
                break;
            }
        }
        this.icon.setPosition(cc.v2(0, 10));
    };
    HeadNode.prototype.update = function (dt) {
        this.num.string = this.count.toString();
    };
    __decorate([
        property(cc.Node)
    ], HeadNode.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], HeadNode.prototype, "num", void 0);
    __decorate([
        property
    ], HeadNode.prototype, "count", void 0);
    HeadNode = __decorate([
        ccclass
    ], HeadNode);
    return HeadNode;
}(cc.Component));
exports.default = HeadNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxIZWFkTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsZ0RBQTJDO0FBRXJDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUFpREM7UUE3Q0csVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixTQUFHLEdBQWEsSUFBSSxDQUFBO1FBR3BCLFdBQUssR0FBVyxDQUFDLENBQUE7O0lBdUNyQixDQUFDO0lBckNHLHlCQUFNLEdBQU4sY0FBVyxDQUFDO0lBRVosd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFFRCw2QkFBVSxHQUFWLFVBQVcsS0FBMEI7SUFFckMsQ0FBQztJQUNELDRCQUFTLEdBQVQsVUFBVSxLQUEwQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQztZQUFFLE9BQU07UUFDM0IsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzdCLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFDRCwyQkFBUSxHQUFSLFVBQVMsS0FBMEI7UUFDL0IsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUM7WUFBRSxPQUFNO1FBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9ELElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDOUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDakUsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssSUFBSSxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDcEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDWixtQkFBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO2dCQUNwRCxNQUFLO2FBQ1I7U0FDSjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUdELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUMzQyxDQUFDO0lBNUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0U7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5Q0FDQztJQUdwQjtRQURDLFFBQVE7MkNBQ1E7SUFUQSxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0Q1QjtJQUFELGVBQUM7Q0FoREQsQUFnREMsQ0FoRHFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0RqRDtrQkFoRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vLi4vTW9kL1V0aWxpdHlcIjtcclxuaW1wb3J0IExldmVsQmFzZSBmcm9tIFwiLi4vTGV2ZWwvTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZE5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaWNvbjogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBudW06IGNjLkxhYmVsID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgY291bnQ6IG51bWJlciA9IDFcclxuXHJcbiAgICBvbkxvYWQoKSB7IH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmljb24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcylcclxuICAgICAgICB0aGlzLmljb24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5pY29uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgICAgICB0aGlzLmljb24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuXHJcbiAgICB9XHJcbiAgICB0b3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudCA8PSAwKSByZXR1cm5cclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgdGhpcy5pY29uLnNldFBvc2l0aW9uKHBvcylcclxuICAgIH1cclxuICAgIHRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnQgPD0gMCkgcmV0dXJuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBMZXZlbEJhc2UuU2hhcmUuTmVlZGxlTm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG4gPSBMZXZlbEJhc2UuU2hhcmUuTmVlZGxlTm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICBsZXQgaGVhZCA9IG4uZ2V0Q2hpbGRCeU5hbWUoJ25lZWRsZScpLmdldENoaWxkQnlOYW1lKCd5eHpfZGoxXzInKVxyXG4gICAgICAgICAgICBpZiAoaGVhZC5hY3RpdmUgPT0gZmFsc2UgJiYgVXRpbGl0eS5nZXRXb3JsZERpcyhoZWFkLCB0aGlzLmljb24pIDw9IDUwKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnQtLVxyXG4gICAgICAgICAgICAgICAgTGV2ZWxCYXNlLlNoYXJlLmdldE5lZWRsZUNybEJ5SWQoaSkubG9zdEhlYWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmljb24uc2V0UG9zaXRpb24oY2MudjIoMCwgMTApKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLm51bS5zdHJpbmcgPSB0aGlzLmNvdW50LnRvU3RyaW5nKClcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f40ds4/3JHJ4sfRhDGJa7p', 'Level1');
// Scripts/Crl/Level/Level1.ts

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
var GuideFinger_1 = require("../GuideFinger");
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level1 = /** @class */ (function (_super) {
    __extends(Level1, _super);
    function Level1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.guideFinger = null;
        return _this;
    }
    Level1.prototype.onEnable = function () {
        this.guideFinger.stepAction();
    };
    Level1.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.guideFinger.step++;
                        this.guideFinger.stepAction();
                        this.WaterSwitch.children[0].active = true;
                        return [4 /*yield*/, this.meatCrl.triggerCB()];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level1.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.guideFinger.node.active = false;
                        return [4 /*yield*/, this.playerCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 2:
                        _a.sent();
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(GuideFinger_1.default)
    ], Level1.prototype, "guideFinger", void 0);
    Level1 = __decorate([
        ccclass
    ], Level1);
    return Level1;
}(LevelBase_1.default));
exports.default = Level1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBR3pDLHlDQUFvQztBQUU5QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFTO0lBRDdDO1FBQUEscUVBdUJDO1FBbkJHLGlCQUFXLEdBQWdCLElBQUksQ0FBQTs7SUFtQm5DLENBQUM7SUFqQkcseUJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDakMsQ0FBQztJQUVLLDBCQUFTLEdBQWY7Ozs7O3dCQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUE7d0JBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUE7d0JBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7d0JBQzFDLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFBO3dCQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7Ozs7S0FDdkI7SUFDSywwQkFBUyxHQUFmOzs7Ozt3QkFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO3dCQUNwQyxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7d0JBQ25DLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7O0tBQ3ZCO0lBbEJEO1FBREMsUUFBUSxDQUFDLHFCQUFXLENBQUM7K0NBQ1M7SUFIZCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBc0IxQjtJQUFELGFBQUM7Q0F0QkQsQUFzQkMsQ0F0Qm1DLG1CQUFTLEdBc0I1QztrQkF0Qm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR3VpZGVGaW5nZXIgZnJvbSBcIi4uL0d1aWRlRmluZ2VyXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL1BsYXllclwiO1xyXG5pbXBvcnQgTWVhdCBmcm9tIFwiLi4vUHJvcC9NZWF0XCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwxIGV4dGVuZHMgTGV2ZWxCYXNlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoR3VpZGVGaW5nZXIpXHJcbiAgICBndWlkZUZpbmdlcjogR3VpZGVGaW5nZXIgPSBudWxsXHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5ndWlkZUZpbmdlci5zdGVwQWN0aW9uKClcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB0cmlnZ2VyMDAoKSB7XHJcbiAgICAgICAgdGhpcy5ndWlkZUZpbmdlci5zdGVwKytcclxuICAgICAgICB0aGlzLmd1aWRlRmluZ2VyLnN0ZXBBY3Rpb24oKVxyXG4gICAgICAgIHRoaXMuV2F0ZXJTd2l0Y2guY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGF3YWl0IHRoaXMubWVhdENybC50cmlnZ2VyQ0IoKVxyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMTAoKSB7XHJcbiAgICAgICAgdGhpcy5ndWlkZUZpbmdlci5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMClcclxuICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/RotateNeedle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c30cJVj/dHEZgFf08gDM4E', 'RotateNeedle');
// Scripts/Crl/Prop/RotateNeedle.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RotateNeedle = /** @class */ (function (_super) {
    __extends(RotateNeedle, _super);
    function RotateNeedle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.needle = null;
        _this.touchStartPos = cc.v2(0, 0);
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    RotateNeedle.prototype.start = function () {
        this.needle.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.needle.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.needle.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.needle.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    RotateNeedle.prototype.touchStart = function (event) {
        var pos = event.getLocation();
        this.touchStartPos = pos;
    };
    RotateNeedle.prototype.touchMove = function (event) {
        var pos = event.getLocation();
        this.needle.getComponent(cc.RigidBody).applyAngularImpulse(pos.x < this.touchStartPos.x ? 50000 : -50000, true);
        this.touchStartPos = pos;
    };
    RotateNeedle.prototype.touchEnd = function (event) {
    };
    __decorate([
        property(cc.Node)
    ], RotateNeedle.prototype, "needle", void 0);
    RotateNeedle = __decorate([
        ccclass
    ], RotateNeedle);
    return RotateNeedle;
}(cc.Component));
exports.default = RotateNeedle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxSb3RhdGVOZWVkbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUR0RDtRQUFBLHFFQWlDQztRQTdCRyxZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLG1CQUFhLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7O1FBMEJwQyxpQkFBaUI7SUFDckIsQ0FBQztJQXpCRyxlQUFlO0lBRWYsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3BFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3ZFLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsS0FBMEI7UUFDakMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFBO0lBQzVCLENBQUM7SUFDRCxnQ0FBUyxHQUFULFVBQVUsS0FBMEI7UUFDaEMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBRTdCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRS9HLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFBO0lBQzVCLENBQUM7SUFDRCwrQkFBUSxHQUFSLFVBQVMsS0FBMEI7SUFFbkMsQ0FBQztJQTFCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNJO0lBSEwsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWdDaEM7SUFBRCxtQkFBQztDQWhDRCxBQWdDQyxDQWhDeUMsRUFBRSxDQUFDLFNBQVMsR0FnQ3JEO2tCQWhDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm90YXRlTmVlZGxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5lZWRsZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICB0b3VjaFN0YXJ0UG9zOiBjYy5WZWMyID0gY2MudjIoMCwgMClcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5lZWRsZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKVxyXG4gICAgICAgIHRoaXMubmVlZGxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubmVlZGxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgICAgICB0aGlzLm5lZWRsZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0UG9zID0gcG9zXHJcbiAgICB9XHJcbiAgICB0b3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG5cclxuICAgICAgICB0aGlzLm5lZWRsZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5hcHBseUFuZ3VsYXJJbXB1bHNlKHBvcy54IDwgdGhpcy50b3VjaFN0YXJ0UG9zLnggPyA1MDAwMCA6IC01MDAwMCwgdHJ1ZSlcclxuXHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0UG9zID0gcG9zXHJcbiAgICB9XHJcbiAgICB0b3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/LevelBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8eb3fKy3TBPUYz0uZxx2D2O', 'LevelBase');
// Scripts/Crl/Level/LevelBase.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerDataMgr_1 = require("../../Libs/PlayerDataMgr");
var Utility_1 = require("../../Mod/Utility");
var GameLogic_1 = require("../GameLogic");
var Player_1 = require("../Player");
var Meat_1 = require("../Prop/Meat");
var Needle_1 = require("../Prop/Needle");
var Sharp_1 = require("../Sharp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelBase = /** @class */ (function (_super) {
    __extends(LevelBase, _super);
    function LevelBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playerNode = null;
        _this.meatNode = null;
        _this.playerCrl = null;
        _this.meatCrl = null;
        _this.DesNode = null;
        _this.levelCrl = null;
        _this.NeedleNode = null;
        _this.Sharp = null;
        _this.SharpCrl = null;
        _this.WaterSwitch = null;
        _this.canTouch = true;
        _this.isGameOver = false;
        _this.isWin = false;
        return _this;
    }
    LevelBase_1 = LevelBase;
    LevelBase.prototype.onLoad = function () {
        LevelBase_1.Share = this;
        this.playerNode = this.node.getChildByName('Player');
        this.meatNode = this.node.getChildByName('Meat');
        this.DesNode = this.node.getChildByName('Des');
        this.playerCrl = this.playerNode.getComponent(Player_1.default);
        this.meatCrl = this.meatNode.getComponent(Meat_1.default);
        this.levelCrl = this.node.getComponent('Level' + PlayerDataMgr_1.default.getPlayerData().grade);
        this.NeedleNode = this.node.getChildByName('NeedleNode');
        this.Sharp = this.node.getChildByName('Sharp');
        if (this.Sharp)
            this.SharpCrl = this.Sharp.getComponent(Sharp_1.default);
        this.WaterSwitch = this.node.getChildByName('WaterSwitch');
    };
    LevelBase.prototype.start = function () {
    };
    LevelBase.prototype.triggerNeedle = function (index, pIndex) {
        this.canTouch = false;
        this.levelCrl['trigger' + index.toString() + pIndex.toString()]();
    };
    LevelBase.prototype.checkGotDes = function () {
        if (this.isGameOver)
            return;
        if (Utility_1.default.getWorldDis(this.playerNode, this.DesNode) <= 20) {
            if (this.playerCrl.gotMeat) {
                this.winCB();
            }
            else {
                this.loseCB();
            }
        }
    };
    LevelBase.prototype.winCB = function () {
        if (this.isGameOver)
            return;
        this.isGameOver = true;
        this.isWin = true;
        this.playerNode.stopAllActions();
        if (this.Sharp)
            this.Sharp.stopAllActions();
        this.playerCrl.aniCrl.playAnimationByName(4);
        this.scheduleOnce(function () {
            GameLogic_1.default.Share.showFinishUI();
        }, 2);
    };
    LevelBase.prototype.loseCB = function () {
        if (this.isGameOver)
            return;
        this.isGameOver = true;
        this.isWin = false;
        this.playerNode.stopAllActions();
        if (this.Sharp)
            this.Sharp.stopAllActions();
        this.playerCrl.aniCrl.playAnimationByName(2);
        this.scheduleOnce(function () {
            GameLogic_1.default.Share.showDefeatUI();
        }, 2);
    };
    LevelBase.prototype.getNeedleCrlById = function (id) {
        return this.NeedleNode.children[id].getComponent(Needle_1.default);
    };
    LevelBase.prototype.update = function (dt) {
        this.checkGotDes();
    };
    var LevelBase_1;
    LevelBase = LevelBase_1 = __decorate([
        ccclass
    ], LevelBase);
    return LevelBase;
}(cc.Component));
exports.default = LevelBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWxCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCw2Q0FBd0M7QUFDeEMsMENBQXFDO0FBQ3JDLG9DQUErQjtBQUMvQixxQ0FBZ0M7QUFDaEMseUNBQW9DO0FBQ3BDLGtDQUE2QjtBQUV2QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBRG5EO1FBQUEscUVBdUZDO1FBbkZHLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBQzFCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFDeEIsZUFBUyxHQUFXLElBQUksQ0FBQTtRQUN4QixhQUFPLEdBQVMsSUFBSSxDQUFBO1FBQ3BCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFDdkIsY0FBUSxHQUFRLElBQUksQ0FBQTtRQUNwQixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUMxQixXQUFLLEdBQVksSUFBSSxDQUFBO1FBQ3JCLGNBQVEsR0FBVSxJQUFJLENBQUE7UUFFdEIsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0IsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUN4QixnQkFBVSxHQUFZLEtBQUssQ0FBQTtRQUMzQixXQUFLLEdBQVksS0FBSyxDQUFBOztJQXFFMUIsQ0FBQztrQkF0Rm9CLFNBQVM7SUFtQjFCLDBCQUFNLEdBQU47UUFDSSxXQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMs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QUFDO1lBQ2QsbUJBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDbEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQUVELG9DQUFnQixHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEIsQ0FBQzs7SUFyRmdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FzRjdCO0lBQUQsZ0JBQUM7Q0F0RkQsQUFzRkMsQ0F0RnNDLEVBQUUsQ0FBQyxTQUFTLEdBc0ZsRDtrQkF0Rm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyRGF0YU1nciBmcm9tIFwiLi4vLi4vTGlicy9QbGF5ZXJEYXRhTWdyXCI7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgR2FtZUxvZ2ljIGZyb20gXCIuLi9HYW1lTG9naWNcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XHJcbmltcG9ydCBNZWF0IGZyb20gXCIuLi9Qcm9wL01lYXRcIjtcclxuaW1wb3J0IE5lZWRsZSBmcm9tIFwiLi4vUHJvcC9OZWVkbGVcIjtcclxuaW1wb3J0IFNoYXJwIGZyb20gXCIuLi9TaGFycFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsQmFzZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNoYXJlOiBMZXZlbEJhc2VcclxuXHJcbiAgICBwbGF5ZXJOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgbWVhdE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBwbGF5ZXJDcmw6IFBsYXllciA9IG51bGxcclxuICAgIG1lYXRDcmw6IE1lYXQgPSBudWxsXHJcbiAgICBEZXNOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgbGV2ZWxDcmw6IGFueSA9IG51bGxcclxuICAgIE5lZWRsZU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBTaGFycDogY2MuTm9kZSA9IG51bGxcclxuICAgIFNoYXJwQ3JsOiBTaGFycCA9IG51bGxcclxuXHJcbiAgICBXYXRlclN3aXRjaDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBjYW5Ub3VjaDogYm9vbGVhbiA9IHRydWVcclxuICAgIGlzR2FtZU92ZXI6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgaXNXaW46IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBMZXZlbEJhc2UuU2hhcmUgPSB0aGlzXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdQbGF5ZXInKVxyXG4gICAgICAgIHRoaXMubWVhdE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ01lYXQnKVxyXG4gICAgICAgIHRoaXMuRGVzTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnRGVzJylcclxuICAgICAgICB0aGlzLnBsYXllckNybCA9IHRoaXMucGxheWVyTm9kZS5nZXRDb21wb25lbnQoUGxheWVyKVxyXG4gICAgICAgIHRoaXMubWVhdENybCA9IHRoaXMubWVhdE5vZGUuZ2V0Q29tcG9uZW50KE1lYXQpXHJcbiAgICAgICAgdGhpcy5sZXZlbENybCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoJ0xldmVsJyArIFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlKVxyXG4gICAgICAgIHRoaXMuTmVlZGxlTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnTmVlZGxlTm9kZScpXHJcbiAgICAgICAgdGhpcy5TaGFycCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU2hhcnAnKVxyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwKVxyXG4gICAgICAgICAgICB0aGlzLlNoYXJwQ3JsID0gdGhpcy5TaGFycC5nZXRDb21wb25lbnQoU2hhcnApXHJcblxyXG4gICAgICAgIHRoaXMuV2F0ZXJTd2l0Y2ggPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1dhdGVyU3dpdGNoJylcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyTmVlZGxlKGluZGV4OiBudW1iZXIsIHBJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5sZXZlbENybFsndHJpZ2dlcicgKyBpbmRleC50b1N0cmluZygpICsgcEluZGV4LnRvU3RyaW5nKCldKClcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0dvdERlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm5cclxuICAgICAgICBpZiAoVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLnBsYXllck5vZGUsIHRoaXMuRGVzTm9kZSkgPD0gMjApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JsLmdvdE1lYXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2luQ0IoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpbkNCKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHJldHVyblxyXG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWVcclxuICAgICAgICB0aGlzLmlzV2luID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMucGxheWVyTm9kZS5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgaWYgKHRoaXMuU2hhcnApIHRoaXMuU2hhcnAuc3RvcEFsbEFjdGlvbnMoKVxyXG4gICAgICAgIHRoaXMucGxheWVyQ3JsLmFuaUNybC5wbGF5QW5pbWF0aW9uQnlOYW1lKDQpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBHYW1lTG9naWMuU2hhcmUuc2hvd0ZpbmlzaFVJKClcclxuICAgICAgICB9LCAyKVxyXG4gICAgfVxyXG5cclxuICAgIGxvc2VDQigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm5cclxuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5pc1dpbiA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOb2RlLnN0b3BBbGxBY3Rpb25zKClcclxuICAgICAgICBpZiAodGhpcy5TaGFycCkgdGhpcy5TaGFycC5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDcmwuYW5pQ3JsLnBsYXlBbmltYXRpb25CeU5hbWUoMilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIEdhbWVMb2dpYy5TaGFyZS5zaG93RGVmZWF0VUkoKVxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmVlZGxlQ3JsQnlJZChpZDogbnVtYmVyKTogTmVlZGxlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5OZWVkbGVOb2RlLmNoaWxkcmVuW2lkXS5nZXRDb21wb25lbnQoTmVlZGxlKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tHb3REZXMoKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Libs/ScaleLoop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '990d6YJhU5HUbj0EGVi6QL6', 'ScaleLoop');
// Scripts/Libs/ScaleLoop.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScaleLoop = /** @class */ (function (_super) {
    __extends(ScaleLoop, _super);
    function ScaleLoop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originScale = 1;
        _this.targetScale = 1;
        _this.scaleDuration = 0.5;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    ScaleLoop.prototype.start = function () {
        var a1 = cc.scaleTo(this.scaleDuration, this.targetScale);
        var a2 = cc.scaleTo(this.scaleDuration, this.originScale);
        var a3 = cc.sequence(a1, a2);
        this.node.runAction(cc.repeatForever(a3));
    };
    __decorate([
        property
    ], ScaleLoop.prototype, "originScale", void 0);
    __decorate([
        property
    ], ScaleLoop.prototype, "targetScale", void 0);
    __decorate([
        property
    ], ScaleLoop.prototype, "scaleDuration", void 0);
    ScaleLoop = __decorate([
        ccclass
    ], ScaleLoop);
    return ScaleLoop;
}(cc.Component));
exports.default = ScaleLoop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTGlic1xcU2NhbGVMb29wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUFvQkM7UUFoQkcsaUJBQVcsR0FBVyxDQUFDLENBQUE7UUFFdkIsaUJBQVcsR0FBVyxDQUFDLENBQUE7UUFFdkIsbUJBQWEsR0FBVyxHQUFHLENBQUE7O1FBVzNCLGlCQUFpQjtJQUNyQixDQUFDO0lBVkcsZUFBZTtJQUVmLHlCQUFLLEdBQUw7UUFDSSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3pELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDekQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFiRDtRQURDLFFBQVE7a0RBQ2M7SUFFdkI7UUFEQyxRQUFRO2tEQUNjO0lBRXZCO1FBREMsUUFBUTtvREFDa0I7SUFQVixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBbUI3QjtJQUFELGdCQUFDO0NBbkJELEFBbUJDLENBbkJzQyxFQUFFLENBQUMsU0FBUyxHQW1CbEQ7a0JBbkJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2FsZUxvb3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgb3JpZ2luU2NhbGU6IG51bWJlciA9IDFcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGFyZ2V0U2NhbGU6IG51bWJlciA9IDFcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2NhbGVEdXJhdGlvbjogbnVtYmVyID0gMC41XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IGExID0gY2Muc2NhbGVUbyh0aGlzLnNjYWxlRHVyYXRpb24sIHRoaXMudGFyZ2V0U2NhbGUpXHJcbiAgICAgICAgbGV0IGEyID0gY2Muc2NhbGVUbyh0aGlzLnNjYWxlRHVyYXRpb24sIHRoaXMub3JpZ2luU2NhbGUpXHJcbiAgICAgICAgbGV0IGEzID0gY2Muc2VxdWVuY2UoYTEsIGEyKVxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihhMykpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/Needle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc428UI9wtJwYzz/r/7Ssrz', 'Needle');
// Scripts/Crl/Prop/Needle.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../../Mod/Utility");
var LevelBase_1 = require("../Level/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Needle = /** @class */ (function (_super) {
    __extends(Needle, _super);
    function Needle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lostHead = false;
        _this.onceTrigger = false;
        _this.isAwake = true;
        _this.twiceRemove = false;
        _this.needle = null;
        _this.pointNode = null;
        _this.isTouching = false;
        _this.switchState = 0;
        _this.myDir = cc.v2(0, 0);
        _this.middlePos = cc.v2(0, 0);
        _this.touchStartPos = cc.v2(0, 0);
        _this.needleStartPos = cc.v2(0, 0);
        _this.myId = 0;
        _this.needleLength = 0;
        return _this;
    }
    Needle.prototype.onLoad = function () {
        this.myId = this.node.parent.children.indexOf(this.node);
        this.needle = this.node.getChildByName('needle');
        this.myDir = cc.v2(this.needle.right.x, this.needle.right.y);
        this.pointNode = this.node.getChildByName('pointNode');
        var lastPoint = this.pointNode.children[this.pointNode.childrenCount - 1];
        this.needleLength = Utility_1.default.getWorldDis(lastPoint, this.needle);
        this.middlePos = this.needle.getPosition().add(this.myDir.mul(this.needleLength / 2));
        this.needleStartPos = this.needle.getPosition();
        this.needle.width += 100;
    };
    Needle.prototype.start = function () {
        this.needle.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.needle.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.needle.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.needle.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    Needle.prototype.touchStart = function (event) {
        if (this.isTouching || !LevelBase_1.default.Share.canTouch || this.lostHead || !this.isAwake)
            return;
        this.isTouching = true;
        var pos = event.getLocation();
        this.touchStartPos = pos;
    };
    Needle.prototype.touchMove = function (event) {
        if (!LevelBase_1.default.Share.canTouch || this.lostHead || !this.isAwake)
            return;
        var pos = event.getLocation();
        var touchDir = pos.sub(this.touchStartPos).normalizeSelf();
        var angle = cc.misc.radiansToDegrees(touchDir.angle(this.myDir));
        var isRight = Math.abs(angle) <= 90;
        var dt = pos.sub(this.touchStartPos).mag();
        dt = dt > 30 ? 30 : dt;
        dt = isRight ? dt : -dt;
        var desPos = this.needle.getPosition().add(this.myDir.mul(dt));
        if (desPos.sub(this.middlePos).mag() < this.needleLength / 2)
            this.needle.setPosition(desPos);
        this.checkIsTrigger();
        this.touchStartPos = pos;
    };
    Needle.prototype.touchEnd = function (event) {
        if (!LevelBase_1.default.Share.canTouch || this.lostHead || !this.isAwake)
            return;
        this.isTouching = false;
    };
    Needle.prototype.checkIsTrigger = function () {
        for (var i = 0; i < this.pointNode.childrenCount; i++) {
            var p = this.pointNode.children[i];
            if (p.active && Utility_1.default.getWorldDis(p, this.needle) <= 50) {
                if (this.onceTrigger) {
                    this.node.active = false;
                    this.switchState = 2;
                }
                else {
                    this.switchState = i + 1;
                    this.needle.setPosition(p.getPosition());
                    if (this.twiceRemove && this.switchState == 2) {
                        this.node.active = false;
                    }
                }
                this.pointNode.children.forEach(function (c) { c.active = true; });
                p.active = false;
                LevelBase_1.default.Share.triggerNeedle(this.myId, i);
                break;
            }
        }
        if (this.switchState != 0) {
            if (this.needle.getPosition().sub(this.needleStartPos).mag() <= 20) {
                this.switchState = 0;
                this.needle.setPosition(this.needleStartPos);
                this.pointNode.children.forEach(function (c) { c.active = true; });
            }
        }
    };
    Needle.prototype.update = function (dt) {
        if (this.node.getComponentInChildren(cc.RigidBody)) {
            this.node.getComponentInChildren(cc.RigidBody).syncPosition(true);
        }
    };
    __decorate([
        property
    ], Needle.prototype, "lostHead", void 0);
    __decorate([
        property
    ], Needle.prototype, "onceTrigger", void 0);
    __decorate([
        property
    ], Needle.prototype, "isAwake", void 0);
    __decorate([
        property
    ], Needle.prototype, "twiceRemove", void 0);
    Needle = __decorate([
        ccclass
    ], Needle);
    return Needle;
}(cc.Component));
exports.default = Needle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxOZWVkbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQXdDO0FBQ3hDLGdEQUEyQztBQUVyQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBRGhEO1FBQUEscUVBa0hDO1FBOUdHLGNBQVEsR0FBWSxLQUFLLENBQUE7UUFFekIsaUJBQVcsR0FBWSxLQUFLLENBQUE7UUFFNUIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixpQkFBVyxHQUFZLEtBQUssQ0FBQTtRQUU1QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBQ3RCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsZ0JBQVUsR0FBWSxLQUFLLENBQUE7UUFFM0IsaUJBQVcsR0FBVyxDQUFDLENBQUE7UUFDdkIsV0FBSyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzVCLGVBQVMsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNoQyxtQkFBYSxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLG9CQUFjLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFckMsVUFBSSxHQUFXLENBQUMsQ0FBQTtRQUNoQixrQkFBWSxHQUFXLENBQUMsQ0FBQTs7SUEwRjVCLENBQUM7SUF4RkcsdUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJ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QUUsRUFBRTtnQkFDaEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUE7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtnQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxJQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDOUQ7U0FDSjtJQUNMLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3BFO0lBQ0wsQ0FBQztJQTdHRDtRQURDLFFBQVE7NENBQ2dCO0lBRXpCO1FBREMsUUFBUTsrQ0FDbUI7SUFFNUI7UUFEQyxRQUFROzJDQUNjO0lBRXZCO1FBREMsUUFBUTsrQ0FDbUI7SUFUWCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBaUgxQjtJQUFELGFBQUM7Q0FqSEQsQUFpSEMsQ0FqSG1DLEVBQUUsQ0FBQyxTQUFTLEdBaUgvQztrQkFqSG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyRGF0YU1nciBmcm9tIFwiLi4vLi4vTGlicy9QbGF5ZXJEYXRhTWdyXCI7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuLi9MZXZlbC9MZXZlbEJhc2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZWVkbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbG9zdEhlYWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBvbmNlVHJpZ2dlcjogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGlzQXdha2U6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHR3aWNlUmVtb3ZlOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBuZWVkbGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBwb2ludE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgaXNUb3VjaGluZzogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgc3dpdGNoU3RhdGU6IG51bWJlciA9IDBcclxuICAgIG15RGlyOiBjYy5WZWMyID0gY2MudjIoMCwgMClcclxuICAgIG1pZGRsZVBvczogY2MuVmVjMiA9IGNjLnYyKDAsIDApXHJcbiAgICB0b3VjaFN0YXJ0UG9zOiBjYy5WZWMyID0gY2MudjIoMCwgMClcclxuICAgIG5lZWRsZVN0YXJ0UG9zOiBjYy5WZWMyID0gY2MudjIoMCwgMClcclxuXHJcbiAgICBteUlkOiBudW1iZXIgPSAwXHJcbiAgICBuZWVkbGVMZW5ndGg6IG51bWJlciA9IDBcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5teUlkID0gdGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLm5lZWRsZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnbmVlZGxlJylcclxuICAgICAgICB0aGlzLm15RGlyID0gY2MudjIodGhpcy5uZWVkbGUucmlnaHQueCwgdGhpcy5uZWVkbGUucmlnaHQueSlcclxuICAgICAgICB0aGlzLnBvaW50Tm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncG9pbnROb2RlJylcclxuICAgICAgICBsZXQgbGFzdFBvaW50ID0gdGhpcy5wb2ludE5vZGUuY2hpbGRyZW5bdGhpcy5wb2ludE5vZGUuY2hpbGRyZW5Db3VudCAtIDFdXHJcbiAgICAgICAgdGhpcy5uZWVkbGVMZW5ndGggPSBVdGlsaXR5LmdldFdvcmxkRGlzKGxhc3RQb2ludCwgdGhpcy5uZWVkbGUpXHJcbiAgICAgICAgdGhpcy5taWRkbGVQb3MgPSB0aGlzLm5lZWRsZS5nZXRQb3NpdGlvbigpLmFkZCh0aGlzLm15RGlyLm11bCh0aGlzLm5lZWRsZUxlbmd0aCAvIDIpKVxyXG4gICAgICAgIHRoaXMubmVlZGxlU3RhcnRQb3MgPSB0aGlzLm5lZWRsZS5nZXRQb3NpdGlvbigpXHJcblxyXG4gICAgICAgIHRoaXMubmVlZGxlLndpZHRoICs9IDEwMFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubmVlZGxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5uZWVkbGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5uZWVkbGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubmVlZGxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUb3VjaGluZyB8fCAhTGV2ZWxCYXNlLlNoYXJlLmNhblRvdWNoIHx8IHRoaXMubG9zdEhlYWQgfHwgIXRoaXMuaXNBd2FrZSkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5pc1RvdWNoaW5nID0gdHJ1ZVxyXG5cclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IHBvc1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghTGV2ZWxCYXNlLlNoYXJlLmNhblRvdWNoIHx8IHRoaXMubG9zdEhlYWQgfHwgIXRoaXMuaXNBd2FrZSkgcmV0dXJuXHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuXHJcbiAgICAgICAgbGV0IHRvdWNoRGlyID0gcG9zLnN1Yih0aGlzLnRvdWNoU3RhcnRQb3MpLm5vcm1hbGl6ZVNlbGYoKVxyXG4gICAgICAgIGxldCBhbmdsZSA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyh0b3VjaERpci5hbmdsZSh0aGlzLm15RGlyKSlcclxuICAgICAgICBsZXQgaXNSaWdodCA9IE1hdGguYWJzKGFuZ2xlKSA8PSA5MFxyXG5cclxuICAgICAgICBsZXQgZHQgPSBwb3Muc3ViKHRoaXMudG91Y2hTdGFydFBvcykubWFnKClcclxuICAgICAgICBkdCA9IGR0ID4gMzAgPyAzMCA6IGR0XHJcbiAgICAgICAgZHQgPSBpc1JpZ2h0ID8gZHQgOiAtZHRcclxuXHJcbiAgICAgICAgbGV0IGRlc1BvcyA9IHRoaXMubmVlZGxlLmdldFBvc2l0aW9uKCkuYWRkKHRoaXMubXlEaXIubXVsKGR0KSlcclxuICAgICAgICBpZiAoZGVzUG9zLnN1Yih0aGlzLm1pZGRsZVBvcykubWFnKCkgPCB0aGlzLm5lZWRsZUxlbmd0aCAvIDIpXHJcbiAgICAgICAgICAgIHRoaXMubmVlZGxlLnNldFBvc2l0aW9uKGRlc1BvcylcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0lzVHJpZ2dlcigpXHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0UG9zID0gcG9zXHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIUxldmVsQmFzZS5TaGFyZS5jYW5Ub3VjaCB8fCB0aGlzLmxvc3RIZWFkIHx8ICF0aGlzLmlzQXdha2UpIHJldHVyblxyXG4gICAgICAgIHRoaXMuaXNUb3VjaGluZyA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJc1RyaWdnZXIoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHAgPSB0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICBpZiAocC5hY3RpdmUgJiYgVXRpbGl0eS5nZXRXb3JsZERpcyhwLCB0aGlzLm5lZWRsZSkgPD0gNTApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uY2VUcmlnZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hTdGF0ZSA9IDJcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hTdGF0ZSA9IGkgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWVkbGUuc2V0UG9zaXRpb24ocC5nZXRQb3NpdGlvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnR3aWNlUmVtb3ZlICYmIHRoaXMuc3dpdGNoU3RhdGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludE5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoYykgPT4geyBjLmFjdGl2ZSA9IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIHAuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIExldmVsQmFzZS5TaGFyZS50cmlnZ2VyTmVlZGxlKHRoaXMubXlJZCwgaSlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3dpdGNoU3RhdGUgIT0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5uZWVkbGUuZ2V0UG9zaXRpb24oKS5zdWIodGhpcy5uZWVkbGVTdGFydFBvcykubWFnKCkgPD0gMjApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoU3RhdGUgPSAwXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5lZWRsZS5zZXRQb3NpdGlvbih0aGlzLm5lZWRsZVN0YXJ0UG9zKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludE5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoYykgPT4geyBjLmFjdGl2ZSA9IHRydWUgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuUmlnaWRCb2R5KSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5SaWdpZEJvZHkpLnN5bmNQb3NpdGlvbih0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/Poison.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8e7563uHIJDx5dngN1srY26', 'Poison');
// Scripts/Crl/Prop/Poison.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../../Mod/Utility");
var LevelBase_1 = require("../Level/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Poison = /** @class */ (function (_super) {
    __extends(Poison, _super);
    function Poison() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // onLoad () {}
    Poison.prototype.start = function () {
    };
    Poison.prototype.update = function (dt) {
        if (!LevelBase_1.default.Share.isGameOver) {
            if (Utility_1.default.getWorldDis(this.node, LevelBase_1.default.Share.playerNode) <= 20) {
                LevelBase_1.default.Share.loseCB();
            }
            if (LevelBase_1.default.Share.meatNode.isValid && Utility_1.default.getWorldDis(this.node, LevelBase_1.default.Share.meatNode) <= 20) {
                LevelBase_1.default.Share.loseCB();
            }
        }
    };
    Poison = __decorate([
        ccclass
    ], Poison);
    return Poison;
}(cc.Component));
exports.default = Poison;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxQb2lzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBRXhDLGdEQUEyQztBQUVyQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEOztJQWtCQSxDQUFDO0lBaEJHLGVBQWU7SUFFZixzQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLG1CQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUM3QixJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsbUJBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNsRSxtQkFBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQTthQUMzQjtZQUNELElBQUksbUJBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLG1CQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDcEcsbUJBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUE7YUFDM0I7U0FDSjtJQUNMLENBQUM7SUFqQmdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FrQjFCO0lBQUQsYUFBQztDQWxCRCxBQWtCQyxDQWxCbUMsRUFBRSxDQUFDLFNBQVMsR0FrQi9DO2tCQWxCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgTGV2ZWwxIGZyb20gXCIuLi9MZXZlbC9MZXZlbDFcIjtcclxuaW1wb3J0IExldmVsQmFzZSBmcm9tIFwiLi4vTGV2ZWwvTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pc29uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKCFMZXZlbEJhc2UuU2hhcmUuaXNHYW1lT3Zlcikge1xyXG4gICAgICAgICAgICBpZiAoVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLm5vZGUsIExldmVsQmFzZS5TaGFyZS5wbGF5ZXJOb2RlKSA8PSAyMCkge1xyXG4gICAgICAgICAgICAgICAgTGV2ZWxCYXNlLlNoYXJlLmxvc2VDQigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKExldmVsQmFzZS5TaGFyZS5tZWF0Tm9kZS5pc1ZhbGlkICYmIFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5ub2RlLCBMZXZlbEJhc2UuU2hhcmUubWVhdE5vZGUpIDw9IDIwKSB7XHJcbiAgICAgICAgICAgICAgICBMZXZlbEJhc2UuU2hhcmUubG9zZUNCKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/SlideNeedle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '212abZTd0dDl6qZeddjUuSu', 'SlideNeedle');
// Scripts/Crl/Prop/SlideNeedle.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SlideNeedle = /** @class */ (function (_super) {
    __extends(SlideNeedle, _super);
    function SlideNeedle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topY = 0;
        _this.bottomY = 0;
        _this.isBottom = true;
        _this.validTouch = true;
        _this.moveCB = null;
        _this.touchStartPos = cc.v2(0, 0);
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    SlideNeedle.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    SlideNeedle.prototype.touchStart = function (event) {
        if (!this.validTouch)
            return;
        var pos = event.getLocation();
        this.touchStartPos = pos;
    };
    SlideNeedle.prototype.touchMove = function (event) {
        if (!this.validTouch)
            return;
        var pos = event.getLocation();
        var dty = pos.y - this.touchStartPos.y;
        if (dty > 30)
            dty = 30;
        this.node.y += dty;
        if (this.node.y < this.bottomY) {
            this.node.y = this.bottomY;
            this.isBottom = true;
            this.moveCB && this.moveCB(0);
            return;
        }
        if (this.node.y > this.topY) {
            this.node.y = this.topY;
            this.isBottom = false;
            this.moveCB && this.moveCB(0);
            return;
        }
        this.moveCB && this.moveCB(dty);
        this.touchStartPos = pos;
    };
    SlideNeedle.prototype.touchEnd = function (event) {
        if (!this.validTouch)
            return;
    };
    __decorate([
        property
    ], SlideNeedle.prototype, "topY", void 0);
    __decorate([
        property
    ], SlideNeedle.prototype, "bottomY", void 0);
    SlideNeedle = __decorate([
        ccclass
    ], SlideNeedle);
    return SlideNeedle;
}(cc.Component));
exports.default = SlideNeedle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxTbGlkZU5lZWRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBRHJEO1FBQUEscUVBd0RDO1FBckRHLFVBQUksR0FBVSxDQUFDLENBQUE7UUFFZixhQUFPLEdBQVUsQ0FBQyxDQUFBO1FBRWxCLGNBQVEsR0FBVyxJQUFJLENBQUE7UUFDdkIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFDMUIsWUFBTSxHQUFhLElBQUksQ0FBQTtRQUN2QixtQkFBYSxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBOztRQTZDcEMsaUJBQWlCO0lBQ3JCLENBQUM7SUE1Q0csZUFBZTtJQUVmLDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNyRSxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLEtBQTBCO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU07UUFDNUIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFBO0lBQzVCLENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsS0FBMEI7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTTtRQUU1QixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDN0IsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxJQUFJLEdBQUcsR0FBRyxFQUFFO1lBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUE7UUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7WUFDcEIsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzdCLE9BQU07U0FDVDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO1lBQ3JCLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUM3QixPQUFNO1NBQ1Q7UUFFRCxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUE7SUFDNUIsQ0FBQztJQUVELDhCQUFRLEdBQVIsVUFBUyxLQUEwQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFNO0lBQ2hDLENBQUM7SUFsREQ7UUFEQyxRQUFROzZDQUNNO0lBRWY7UUFEQyxRQUFRO2dEQUNTO0lBSkQsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXVEL0I7SUFBRCxrQkFBQztDQXZERCxBQXVEQyxDQXZEd0MsRUFBRSxDQUFDLFNBQVMsR0F1RHBEO2tCQXZEb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVOZWVkbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0b3BZOm51bWJlciA9IDBcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgYm90dG9tWTpudW1iZXIgPSAwXHJcblxyXG4gICAgaXNCb3R0b206Ym9vbGVhbiA9IHRydWVcclxuICAgIHZhbGlkVG91Y2g6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICBtb3ZlQ0I6IEZ1bmN0aW9uID0gbnVsbFxyXG4gICAgdG91Y2hTdGFydFBvczogY2MuVmVjMiA9IGNjLnYyKDAsIDApXHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkVG91Y2gpIHJldHVyblxyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0UG9zID0gcG9zXHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkVG91Y2gpIHJldHVyblxyXG5cclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIGxldCBkdHkgPSBwb3MueSAtIHRoaXMudG91Y2hTdGFydFBvcy55XHJcbiAgICAgICAgaWYgKGR0eSA+IDMwKSBkdHkgPSAzMFxyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IGR0eVxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueSA8IHRoaXMuYm90dG9tWSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMuYm90dG9tWVxyXG4gICAgICAgICAgICB0aGlzLmlzQm90dG9tID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm1vdmVDQiAmJiB0aGlzLm1vdmVDQigwKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS55ID4gdGhpcy50b3BZKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy50b3BZXHJcbiAgICAgICAgICAgIHRoaXMuaXNCb3R0b20gPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLm1vdmVDQiAmJiB0aGlzLm1vdmVDQigwKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubW92ZUNCICYmIHRoaXMubW92ZUNCKGR0eSlcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRQb3MgPSBwb3NcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy52YWxpZFRvdWNoKSByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/ThreeNeedle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7da151k1dGGK5FMo7zyWxI', 'ThreeNeedle');
// Scripts/Crl/Prop/ThreeNeedle.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ThreeNeedle = /** @class */ (function (_super) {
    __extends(ThreeNeedle, _super);
    function ThreeNeedle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topY = 0;
        _this.bottomY = 0;
        _this.validTouch = false;
        _this.touchStartPos = cc.v2(0, 0);
        _this.isClosed = true;
        _this.closeCB = null;
        _this.openCB = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    ThreeNeedle.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    ThreeNeedle.prototype.touchStart = function (event) {
        var pos = event.getLocation();
        this.touchStartPos = pos;
        pos = this.node.convertToNodeSpaceAR(pos);
        this.validTouch = cc.Intersection.pointInPolygon(pos, this.getComponent(cc.PolygonCollider).points);
    };
    ThreeNeedle.prototype.touchMove = function (event) {
        if (!this.validTouch)
            return;
        var pos = event.getLocation();
        var dty = pos.y - this.touchStartPos.y;
        if (dty > 30)
            dty = 30;
        this.node.y += dty;
        if (this.node.y < this.bottomY) {
            this.node.y = this.bottomY;
            !this.isClosed && this.closeCB && this.closeCB();
            this.validTouch = false;
            this.isClosed = true;
        }
        if (this.node.y > this.topY) {
            this.node.y = this.topY;
            this.isClosed && this.openCB && this.openCB();
            this.validTouch = false;
            this.isClosed = false;
        }
        this.touchStartPos = pos;
    };
    ThreeNeedle.prototype.touchEnd = function (event) {
        if (!this.validTouch)
            return;
        this.validTouch = false;
    };
    __decorate([
        property
    ], ThreeNeedle.prototype, "topY", void 0);
    __decorate([
        property
    ], ThreeNeedle.prototype, "bottomY", void 0);
    ThreeNeedle = __decorate([
        ccclass
    ], ThreeNeedle);
    return ThreeNeedle;
}(cc.Component));
exports.default = ThreeNeedle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxUaHJlZU5lZWRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBRHJEO1FBQUEscUVBNkRDO1FBekRHLFVBQUksR0FBVSxDQUFDLENBQUE7UUFFZixhQUFPLEdBQVUsQ0FBQyxDQUFBO1FBRWxCLGdCQUFVLEdBQVksS0FBSyxDQUFBO1FBRTNCLG1CQUFhLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFcEMsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUN4QixhQUFPLEdBQWEsSUFBSSxDQUFBO1FBQ3hCLFlBQU0sR0FBYSxJQUFJLENBQUE7O1FBOEN2QixpQkFBaUI7SUFDckIsQ0FBQztJQTdDRyxlQUFlO0lBRWYsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsS0FBMEI7UUFDakMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFBO1FBQ3hCLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3ZHLENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsS0FBMEI7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTTtRQUM1QixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUE7UUFFN0IsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxJQUFJLEdBQUcsR0FBRyxFQUFFO1lBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUE7UUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7WUFDMUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1NBQ3ZCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDdkIsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtTQUN4QjtRQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFBO0lBQzVCLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsS0FBMEI7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTTtRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtJQUMzQixDQUFDO0lBdEREO1FBREMsUUFBUTs2Q0FDTTtJQUVmO1FBREMsUUFBUTtnREFDUztJQUxELFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E0RC9CO0lBQUQsa0JBQUM7Q0E1REQsQUE0REMsQ0E1RHdDLEVBQUUsQ0FBQyxTQUFTLEdBNERwRDtrQkE1RG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRocmVlTmVlZGxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRvcFk6bnVtYmVyID0gMFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBib3R0b21ZOm51bWJlciA9IDBcclxuXHJcbiAgICB2YWxpZFRvdWNoOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICB0b3VjaFN0YXJ0UG9zOiBjYy5WZWMyID0gY2MudjIoMCwgMClcclxuXHJcbiAgICBpc0Nsb3NlZDogYm9vbGVhbiA9IHRydWVcclxuICAgIGNsb3NlQ0I6IEZ1bmN0aW9uID0gbnVsbFxyXG4gICAgb3BlbkNCOiBGdW5jdGlvbiA9IG51bGxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcylcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IHBvc1xyXG4gICAgICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgdGhpcy52YWxpZFRvdWNoID0gY2MuSW50ZXJzZWN0aW9uLnBvaW50SW5Qb2x5Z29uKHBvcywgdGhpcy5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKS5wb2ludHMpXHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkVG91Y2gpIHJldHVyblxyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcblxyXG4gICAgICAgIGxldCBkdHkgPSBwb3MueSAtIHRoaXMudG91Y2hTdGFydFBvcy55XHJcbiAgICAgICAgaWYgKGR0eSA+IDMwKSBkdHkgPSAzMFxyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IGR0eVxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueSA8IHRoaXMuYm90dG9tWSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMuYm90dG9tWVxyXG4gICAgICAgICAgICAhdGhpcy5pc0Nsb3NlZCAmJiB0aGlzLmNsb3NlQ0IgJiYgdGhpcy5jbG9zZUNCKClcclxuICAgICAgICAgICAgdGhpcy52YWxpZFRvdWNoID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc0Nsb3NlZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS55ID4gdGhpcy50b3BZKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy50b3BZXHJcbiAgICAgICAgICAgIHRoaXMuaXNDbG9zZWQgJiYgdGhpcy5vcGVuQ0IgJiYgdGhpcy5vcGVuQ0IoKVxyXG4gICAgICAgICAgICB0aGlzLnZhbGlkVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzQ2xvc2VkID0gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IHBvc1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkVG91Y2gpIHJldHVyblxyXG4gICAgICAgIHRoaXMudmFsaWRUb3VjaCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/Fan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5220c2yqfBMa4m1Vb1Gatu3', 'Fan');
// Scripts/Crl/Prop/Fan.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Fan = /** @class */ (function (_super) {
    __extends(Fan, _super);
    function Fan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.needle = null;
        _this.touchStartPos = cc.v2(0, 0);
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    Fan.prototype.start = function () {
        this.needle.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.needle.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.needle.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.needle.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    Fan.prototype.touchStart = function (event) {
        var pos = event.getLocation();
        this.touchStartPos = pos;
    };
    Fan.prototype.touchMove = function (event) {
        var pos = event.getLocation();
        //this.needle.getComponent(cc.RigidBody).applyAngularImpulse(pos.x < this.touchStartPos.x ? 50000 : -50000, true)
        var dtx = pos.x < this.touchStartPos.x ? 2 : -2;
        this.needle.angle += dtx;
        this.touchStartPos = pos;
    };
    Fan.prototype.touchEnd = function (event) {
    };
    __decorate([
        property(cc.Node)
    ], Fan.prototype, "needle", void 0);
    Fan = __decorate([
        ccclass
    ], Fan);
    return Fan;
}(cc.Component));
exports.default = Fan;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxGYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFpQyx1QkFBWTtJQUQ3QztRQUFBLHFFQW1DQztRQS9CRyxZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLG1CQUFhLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7O1FBNEJwQyxpQkFBaUI7SUFDckIsQ0FBQztJQTNCRyxlQUFlO0lBRWYsbUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3BFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3ZFLENBQUM7SUFFRCx3QkFBVSxHQUFWLFVBQVcsS0FBMEI7UUFDakMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFBO0lBQzVCLENBQUM7SUFDRCx1QkFBUyxHQUFULFVBQVUsS0FBMEI7UUFDaEMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBRTdCLGlIQUFpSDtRQUNqSCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQTtRQUV4QixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQTtJQUM1QixDQUFDO0lBQ0Qsc0JBQVEsR0FBUixVQUFTLEtBQTBCO0lBRW5DLENBQUM7SUE1QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDSTtJQUhMLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0FrQ3ZCO0lBQUQsVUFBQztDQWxDRCxBQWtDQyxDQWxDZ0MsRUFBRSxDQUFDLFNBQVMsR0FrQzVDO2tCQWxDb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5lZWRsZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICB0b3VjaFN0YXJ0UG9zOiBjYy5WZWMyID0gY2MudjIoMCwgMClcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5lZWRsZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKVxyXG4gICAgICAgIHRoaXMubmVlZGxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubmVlZGxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgICAgICB0aGlzLm5lZWRsZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0UG9zID0gcG9zXHJcbiAgICB9XHJcbiAgICB0b3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG5cclxuICAgICAgICAvL3RoaXMubmVlZGxlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmFwcGx5QW5ndWxhckltcHVsc2UocG9zLnggPCB0aGlzLnRvdWNoU3RhcnRQb3MueCA/IDUwMDAwIDogLTUwMDAwLCB0cnVlKVxyXG4gICAgICAgIGxldCBkdHggPSBwb3MueCA8IHRoaXMudG91Y2hTdGFydFBvcy54ID8gMiA6IC0yXHJcbiAgICAgICAgdGhpcy5uZWVkbGUuYW5nbGUgKz0gZHR4XHJcblxyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IHBvc1xyXG4gICAgfVxyXG4gICAgdG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Libs/TimeCountMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f0a4fRQMHxNH7nYx2FY6BmU', 'TimeCountMgr');
// Scripts/Libs/TimeCountMgr.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerDataMgr_1 = require("./PlayerDataMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TimeCountMgr = /** @class */ (function (_super) {
    __extends(TimeCountMgr, _super);
    function TimeCountMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tCount = 0;
        return _this;
    }
    TimeCountMgr_1 = TimeCountMgr;
    TimeCountMgr.prototype.onLoad = function () {
        TimeCountMgr_1.Share = this;
        cc.game.addPersistRootNode(this.node);
        this.init();
    };
    TimeCountMgr.prototype.init = function () {
        var _this = this;
        if (localStorage.getItem('powerTime')) {
            this.tCount = parseInt(localStorage.getItem('powerTime'));
        }
        else {
            localStorage.setItem('power', '0');
        }
        this.calculateExitTime();
        if (CC_WECHATGAME) {
            window["wx"].onShow(function (para) {
                _this.calculateExitTime();
            });
            window["wx"].onHide(function (para) {
                localStorage.setItem('powerTime', _this.tCount.toString());
                localStorage.setItem('exitTime', new Date().getTime().toString());
            });
        }
        this.schedule(this.calculateTime, 1);
    };
    TimeCountMgr.prototype.calculateExitTime = function () {
        var exitTime = 0;
        if (localStorage.getItem('exitTime')) {
            exitTime = new Date().getTime() - parseInt(localStorage.getItem('exitTime'));
        }
        if (exitTime <= 0)
            return;
        exitTime /= 1000;
        var t = Math.floor(exitTime / 300);
        PlayerDataMgr_1.default.getPlayerData().power += t;
        if (PlayerDataMgr_1.default.getPlayerData().power > PlayerDataMgr_1.default.powerMax) {
            PlayerDataMgr_1.default.getPlayerData().power = PlayerDataMgr_1.default.powerMax;
            PlayerDataMgr_1.default.setPlayerData();
        }
    };
    TimeCountMgr.prototype.calculateTime = function () {
        if (this.tCount <= 0) {
            if (PlayerDataMgr_1.default.getPlayerData().power < PlayerDataMgr_1.default.powerMax) {
                this.tCount = 300;
            }
            else {
                this.tCount = 0;
            }
            return;
        }
        this.tCount--;
        if (this.tCount <= 0) {
            if (PlayerDataMgr_1.default.getPlayerData().power < PlayerDataMgr_1.default.powerMax) {
                PlayerDataMgr_1.default.getPlayerData().power += 1;
                PlayerDataMgr_1.default.setPlayerData();
                this.tCount = PlayerDataMgr_1.default.getPlayerData().power < PlayerDataMgr_1.default.powerMax ? 300 : 0;
            }
        }
    };
    var TimeCountMgr_1;
    TimeCountMgr = TimeCountMgr_1 = __decorate([
        ccclass
    ], TimeCountMgr);
    return TimeCountMgr;
}(cc.Component));
exports.default = TimeCountMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTGlic1xcVGltZUNvdW50TWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUEyQztBQUVyQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBRHREO1FBQUEscUVBd0VDO1FBbkVHLFlBQU0sR0FBVyxDQUFDLENBQUE7O0lBbUV0QixDQUFDO3FCQXZFb0IsWUFBWTtJQU03Qiw2QkFBTSxHQUFOO1FBQ0ksY0FBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDekIsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2YsQ0FBQztJQUVELDJCQUFJLEdBQUo7UUFBQSxpQkFvQkM7UUFuQkcsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtTQUM1RDthQUFNO1lBQ0gsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FDckM7UUFFRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtRQUV4QixJQUFJLGFBQWEsRUFBRTtZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJO2dCQUNyQixLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtZQUM1QixDQUFDLENBQUMsQ0FBQTtZQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJO2dCQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7Z0JBQ3pELFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtZQUNyRSxDQUFDLENBQUMsQ0FBQTtTQUNMO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFFRCx3Q0FBaUIsR0FBakI7UUFDSSxJQUFJLFFBQVEsR0FBVyxDQUFDLENBQUE7UUFDeEIsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2xDLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7U0FDL0U7UUFFRCxJQUFJLFFBQVEsSUFBSSxDQUFDO1lBQUUsT0FBTTtRQUV6QixRQUFRLElBQUksSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBQ2xDLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQTtRQUN4QyxJQUFJLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLHVCQUFhLENBQUMsUUFBUSxFQUFFO1lBQzlELHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLHVCQUFhLENBQUMsUUFBUSxDQUFBO1lBQzVELHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUE7U0FDaEM7SUFDTCxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEIsSUFBSSx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssR0FBRyx1QkFBYSxDQUFDLFFBQVEsRUFBRTtnQkFDOUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7YUFDcEI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7YUFDbEI7WUFDRCxPQUFNO1NBQ1Q7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7UUFFYixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEdBQUcsdUJBQWEsQ0FBQyxRQUFRLEVBQUU7Z0JBQzlELHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQTtnQkFDeEMsdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssR0FBRyx1QkFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDdkY7U0FDSjtJQUNMLENBQUM7O0lBckVnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBdUVoQztJQUFELG1CQUFDO0NBdkVELEFBdUVDLENBdkV5QyxFQUFFLENBQUMsU0FBUyxHQXVFckQ7a0JBdkVvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllckRhdGFNZ3IgZnJvbSBcIi4vUGxheWVyRGF0YU1nclwiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZUNvdW50TWdyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFNoYXJlOiBUaW1lQ291bnRNZ3JcclxuXHJcbiAgICB0Q291bnQ6IG51bWJlciA9IDBcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgVGltZUNvdW50TWdyLlNoYXJlID0gdGhpc1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3dlclRpbWUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRDb3VudCA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3dlclRpbWUnKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG93ZXInLCAnMCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZUV4aXRUaW1lKClcclxuXHJcbiAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ub25TaG93KChwYXJhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUV4aXRUaW1lKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ub25IaWRlKChwYXJhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG93ZXJUaW1lJywgdGhpcy50Q291bnQudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdleGl0VGltZScsIG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY2FsY3VsYXRlVGltZSwgMSlcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVFeGl0VGltZSgpIHtcclxuICAgICAgICBsZXQgZXhpdFRpbWU6IG51bWJlciA9IDBcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2V4aXRUaW1lJykpIHtcclxuICAgICAgICAgICAgZXhpdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdleGl0VGltZScpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGV4aXRUaW1lIDw9IDApIHJldHVyblxyXG5cclxuICAgICAgICBleGl0VGltZSAvPSAxMDAwXHJcbiAgICAgICAgbGV0IHQgPSBNYXRoLmZsb29yKGV4aXRUaW1lIC8gMzAwKVxyXG4gICAgICAgIFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyICs9IHRcclxuICAgICAgICBpZiAoUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkucG93ZXIgPiBQbGF5ZXJEYXRhTWdyLnBvd2VyTWF4KSB7XHJcbiAgICAgICAgICAgIFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyID0gUGxheWVyRGF0YU1nci5wb3dlck1heFxyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhTWdyLnNldFBsYXllckRhdGEoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVUaW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5wb3dlciA8IFBsYXllckRhdGFNZ3IucG93ZXJNYXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudENvdW50ID0gMzAwXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRDb3VudCA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50Q291bnQtLVxyXG5cclxuICAgICAgICBpZiAodGhpcy50Q291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICBpZiAoUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkucG93ZXIgPCBQbGF5ZXJEYXRhTWdyLnBvd2VyTWF4KSB7XHJcbiAgICAgICAgICAgICAgICBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5wb3dlciArPSAxXHJcbiAgICAgICAgICAgICAgICBQbGF5ZXJEYXRhTWdyLnNldFBsYXllckRhdGEoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50Q291bnQgPSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5wb3dlciA8IFBsYXllckRhdGFNZ3IucG93ZXJNYXggPyAzMDAgOiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/Stone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ead0i5Y2hHIaJFLKQdJamx', 'Stone');
// Scripts/Crl/Prop/Stone.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../../Mod/Utility");
var LevelBase_1 = require("../Level/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Stone = /** @class */ (function (_super) {
    __extends(Stone, _super);
    function Stone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveByY = 0;
        _this.moveTime = 1;
        _this.playerNode = null;
        _this.isMoveing = false;
        _this.isTriggered = false;
        return _this;
    }
    Stone_1 = Stone;
    Stone.prototype.onLoad = function () {
        Stone_1.Share = this;
        this.playerNode = LevelBase_1.default.Share.playerNode;
    };
    Stone.prototype.start = function () {
    };
    //触发事件
    Stone.prototype.triggerCB = function () {
        var _this = this;
        return new Promise(function (rs, rj) {
            _this.isMoveing = true;
            var a1 = cc.moveBy(_this.moveTime, cc.v2(0, _this.moveByY));
            var a2 = cc.callFunc(function () {
                _this.isMoveing = false;
                _this.isTriggered = true;
                rs();
            });
            var a3 = cc.sequence(a1, a2);
            _this.node.runAction(a3);
        });
    };
    //检测是否碰到美人鱼
    Stone.prototype.collByPlayer = function () {
        if (this.playerNode) {
            var dis = Utility_1.default.getWorldDis(this.node, this.playerNode);
            if (dis <= 20 && !this.isMoveing) {
                this.playerNode.stopAllActions();
                this.node.destroy();
                LevelBase_1.default.Share.loseCB();
            }
        }
    };
    Stone.prototype.collBySharp = function () {
        if (LevelBase_1.default.Share.Sharp && LevelBase_1.default.Share.Sharp.isValid) {
            var dis = Utility_1.default.getWorldDis(this.node, LevelBase_1.default.Share.Sharp);
            if (dis <= 50 && !this.isMoveing) {
                LevelBase_1.default.Share.Sharp.stopAllActions();
                LevelBase_1.default.Share.Sharp.destroy();
            }
        }
    };
    Stone.prototype.update = function (dt) {
        this.collByPlayer();
        this.collBySharp();
    };
    var Stone_1;
    __decorate([
        property
    ], Stone.prototype, "moveByY", void 0);
    __decorate([
        property
    ], Stone.prototype, "moveTime", void 0);
    Stone = Stone_1 = __decorate([
        ccclass
    ], Stone);
    return Stone;
}(cc.Component));
exports.default = Stone;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxTdG9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsZ0RBQTJDO0FBR3JDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFEL0M7UUFBQSxxRUFpRUM7UUE1REcsYUFBTyxHQUFXLENBQUMsQ0FBQTtRQUduQixjQUFRLEdBQVcsQ0FBQyxDQUFBO1FBRXBCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGVBQVMsR0FBWSxLQUFLLENBQUE7UUFDMUIsaUJBQVcsR0FBWSxLQUFLLENBQUE7O0lBb0RoQyxDQUFDO2NBaEVvQixLQUFLO0lBY3RCLHNCQUFNLEdBQU47UUFDSSxPQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQTtJQUNoRCxDQUFDO0lBRUQscUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxNQUFNO0lBQ04seUJBQVMsR0FBVDtRQUFBLGlCQVlDO1FBWEcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3RCLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1lBQ3JCLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtZQUN6RCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNqQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtnQkFDdEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7Z0JBQ3ZCLEVBQUUsRUFBRSxDQUFBO1lBQ1IsQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtZQUM1QixLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxXQUFXO0lBQ1gsNEJBQVksR0FBWjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLEdBQUcsR0FBRyxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN6RCxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFBO2dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUNuQixtQkFBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQTthQUMzQjtTQUNKO0lBQ0wsQ0FBQztJQUVELDJCQUFXLEdBQVg7UUFDSSxJQUFJLG1CQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxtQkFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3hELElBQUksR0FBRyxHQUFHLGlCQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsbUJBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDL0QsSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDOUIsbUJBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO2dCQUN0QyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUE7YUFDbEM7U0FDSjtJQUNMLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEIsQ0FBQzs7SUEzREQ7UUFEQyxRQUFROzBDQUNVO0lBR25CO1FBREMsUUFBUTsyQ0FDVztJQVBILEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FnRXpCO0lBQUQsWUFBQztDQWhFRCxBQWdFQyxDQWhFa0MsRUFBRSxDQUFDLFNBQVMsR0FnRTlDO2tCQWhFb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuLi9MZXZlbC9MZXZlbEJhc2VcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyBTaGFyZTogU3RvbmVcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1vdmVCeVk6IG51bWJlciA9IDBcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1vdmVUaW1lOiBudW1iZXIgPSAxXHJcblxyXG4gICAgcGxheWVyTm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBpc01vdmVpbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgaXNUcmlnZ2VyZWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBTdG9uZS5TaGFyZSA9IHRoaXNcclxuICAgICAgICB0aGlzLnBsYXllck5vZGUgPSBMZXZlbEJhc2UuU2hhcmUucGxheWVyTm9kZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+inpuWPkeS6i+S7tlxyXG4gICAgdHJpZ2dlckNCKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocnMsIHJqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZlaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICBsZXQgYTEgPSBjYy5tb3ZlQnkodGhpcy5tb3ZlVGltZSwgY2MudjIoMCwgdGhpcy5tb3ZlQnlZKSlcclxuICAgICAgICAgICAgbGV0IGEyID0gY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmVpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RyaWdnZXJlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHJzKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IGEzID0gY2Muc2VxdWVuY2UoYTEsIGEyKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGEzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy/mo4DmtYvmmK/lkKbnorDliLDnvo7kurrpsbxcclxuICAgIGNvbGxCeVBsYXllcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJOb2RlKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXMgPSBVdGlsaXR5LmdldFdvcmxkRGlzKHRoaXMubm9kZSwgdGhpcy5wbGF5ZXJOb2RlKVxyXG4gICAgICAgICAgICBpZiAoZGlzIDw9IDIwICYmICF0aGlzLmlzTW92ZWluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJOb2RlLnN0b3BBbGxBY3Rpb25zKClcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIExldmVsQmFzZS5TaGFyZS5sb3NlQ0IoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxCeVNoYXJwKCkge1xyXG4gICAgICAgIGlmIChMZXZlbEJhc2UuU2hhcmUuU2hhcnAgJiYgTGV2ZWxCYXNlLlNoYXJlLlNoYXJwLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgbGV0IGRpcyA9IFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5ub2RlLCBMZXZlbEJhc2UuU2hhcmUuU2hhcnApXHJcbiAgICAgICAgICAgIGlmIChkaXMgPD0gNTAgJiYgIXRoaXMuaXNNb3ZlaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBMZXZlbEJhc2UuU2hhcmUuU2hhcnAuc3RvcEFsbEFjdGlvbnMoKVxyXG4gICAgICAgICAgICAgICAgTGV2ZWxCYXNlLlNoYXJlLlNoYXJwLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuY29sbEJ5UGxheWVyKClcclxuICAgICAgICB0aGlzLmNvbGxCeVNoYXJwKClcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Libs/PlayerDataMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '11da5Tk8/dEdb4yQ71R6Ymx', 'PlayerDataMgr');
// Scripts/Libs/PlayerDataMgr.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerData = /** @class */ (function () {
    function PlayerData() {
        this.grade = 1;
        this.coin = 0;
        this.power = 5;
        this.tipsNum = 1;
        this.exitTime = 0;
    }
    return PlayerData;
}());
exports.PlayerData = PlayerData;
var PlayerDataMgr = /** @class */ (function () {
    function PlayerDataMgr() {
    }
    //获取用户数据
    PlayerDataMgr.getPlayerData = function () {
        if (!localStorage.getItem('playerData')) {
            this._playerData = new PlayerData();
            this._playerData.power = this.powerMax;
            localStorage.setItem('playerData', JSON.stringify(this._playerData));
        }
        else {
            if (this._playerData == null) {
                this._playerData = JSON.parse(localStorage.getItem('playerData'));
            }
        }
        return this._playerData;
    };
    //设置用户数据
    PlayerDataMgr.setPlayerData = function () {
        localStorage.setItem('playerData', JSON.stringify(this._playerData));
    };
    PlayerDataMgr.changeCoin = function (dt) {
        this._playerData.coin += dt;
        this.setPlayerData();
    };
    PlayerDataMgr.changePower = function (dt) {
        this._playerData.power += dt;
        this.setPlayerData();
    };
    PlayerDataMgr.getPlayerLv = function () {
        if (this._playerData.grade < 3) {
            return 1;
        }
        else if (this._playerData.grade >= 3 && this._playerData.grade < 8) {
            return 2;
        }
        else if (this._playerData.grade >= 8 && this._playerData.grade < 13) {
            return 3;
        }
        else if (this._playerData.grade >= 13 && this._playerData.grade < 18) {
            return 4;
        }
        else {
            return 5;
        }
    };
    PlayerDataMgr.getLeftLv = function () {
        if (this._playerData.grade < 3) {
            return 3 - this._playerData.grade;
        }
        else if (this._playerData.grade < 8) {
            return 8 - this._playerData.grade;
        }
        else if (this._playerData.grade < 13) {
            return 13 - this._playerData.grade;
        }
        else if (this._playerData.grade < 18) {
            return 18 - this._playerData.grade;
        }
        else {
            return 0;
        }
    };
    PlayerDataMgr.getNextLvPer = function () {
        var curLv = this.getPlayerLv();
        var curG = this._playerData.grade;
        if (curLv == 1) {
            return curG / 2;
        }
        else if (curLv == 2) {
            return curG / 7;
        }
        else if (curLv == 3) {
            return curG / 12;
        }
        else if (curLv == 4) {
            return curG / 17;
        }
        else if (curLv == 5) {
            return 1;
        }
    };
    PlayerDataMgr._playerData = null;
    PlayerDataMgr.powerMax = 5;
    PlayerDataMgr = __decorate([
        ccclass
    ], PlayerDataMgr);
    return PlayerDataMgr;
}());
exports.default = PlayerDataMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTGlic1xcUGxheWVyRGF0YU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFFNUM7SUFBQTtRQUNJLFVBQUssR0FBVyxDQUFDLENBQUE7UUFDakIsU0FBSSxHQUFXLENBQUMsQ0FBQTtRQUNoQixVQUFLLEdBQVcsQ0FBQyxDQUFBO1FBQ2pCLFlBQU8sR0FBVyxDQUFDLENBQUE7UUFDbkIsYUFBUSxHQUFXLENBQUMsQ0FBQTtJQUN4QixDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLGdDQUFVO0FBUXZCO0lBQUE7SUE0RUEsQ0FBQztJQXhFRyxRQUFRO0lBQ00sMkJBQWEsR0FBM0I7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUE7WUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQTtZQUN0QyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO1NBQ3ZFO2FBQU07WUFDSCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO2dCQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBZSxDQUFBO2FBQ2xGO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7SUFDM0IsQ0FBQztJQUVELFFBQVE7SUFDTSwyQkFBYSxHQUEzQjtRQUNJLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FB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QztDQTVFRCxBQTRFQyxJQUFBO2tCQTVFb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi9Nb2QvVXRpbGl0eVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJEYXRhIHtcclxuICAgIGdyYWRlOiBudW1iZXIgPSAxXHJcbiAgICBjb2luOiBudW1iZXIgPSAwXHJcbiAgICBwb3dlcjogbnVtYmVyID0gNVxyXG4gICAgdGlwc051bTogbnVtYmVyID0gMVxyXG4gICAgZXhpdFRpbWU6IG51bWJlciA9IDBcclxufVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJEYXRhTWdyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9wbGF5ZXJEYXRhOiBQbGF5ZXJEYXRhID0gbnVsbFxyXG4gICAgcHVibGljIHN0YXRpYyBwb3dlck1heDogbnVtYmVyID0gNVxyXG5cclxuICAgIC8v6I635Y+W55So5oi35pWw5o2uXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFBsYXllckRhdGEoKTogUGxheWVyRGF0YSB7XHJcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxheWVyRGF0YScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllckRhdGEgPSBuZXcgUGxheWVyRGF0YSgpXHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllckRhdGEucG93ZXIgPSB0aGlzLnBvd2VyTWF4XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkodGhpcy5fcGxheWVyRGF0YSkpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3BsYXllckRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllckRhdGEnKSkgYXMgUGxheWVyRGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJEYXRhXHJcbiAgICB9XHJcblxyXG4gICAgLy/orr7nva7nlKjmiLfmlbDmja5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0UGxheWVyRGF0YSgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVyRGF0YScsIEpTT04uc3RyaW5naWZ5KHRoaXMuX3BsYXllckRhdGEpKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hhbmdlQ29pbihkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyRGF0YS5jb2luICs9IGR0XHJcbiAgICAgICAgdGhpcy5zZXRQbGF5ZXJEYXRhKClcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hhbmdlUG93ZXIoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3BsYXllckRhdGEucG93ZXIgKz0gZHRcclxuICAgICAgICB0aGlzLnNldFBsYXllckRhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UGxheWVyTHYoKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodGhpcy5fcGxheWVyRGF0YS5ncmFkZSA8IDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDFcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3BsYXllckRhdGEuZ3JhZGUgPj0gMyAmJiB0aGlzLl9wbGF5ZXJEYXRhLmdyYWRlIDwgOCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMlxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGxheWVyRGF0YS5ncmFkZSA+PSA4ICYmIHRoaXMuX3BsYXllckRhdGEuZ3JhZGUgPCAxMykge1xyXG4gICAgICAgICAgICByZXR1cm4gM1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGxheWVyRGF0YS5ncmFkZSA+PSAxMyAmJiB0aGlzLl9wbGF5ZXJEYXRhLmdyYWRlIDwgMTgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gNVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldExlZnRMdigpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0aGlzLl9wbGF5ZXJEYXRhLmdyYWRlIDwgMykge1xyXG4gICAgICAgICAgICByZXR1cm4gMyAtIHRoaXMuX3BsYXllckRhdGEuZ3JhZGVcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3BsYXllckRhdGEuZ3JhZGUgPCA4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiA4IC0gdGhpcy5fcGxheWVyRGF0YS5ncmFkZVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGxheWVyRGF0YS5ncmFkZSA8IDEzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxMyAtIHRoaXMuX3BsYXllckRhdGEuZ3JhZGVcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3BsYXllckRhdGEuZ3JhZGUgPCAxOCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTggLSB0aGlzLl9wbGF5ZXJEYXRhLmdyYWRlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXROZXh0THZQZXIoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgY3VyTHYgPSB0aGlzLmdldFBsYXllckx2KClcclxuICAgICAgICBsZXQgY3VyRyA9IHRoaXMuX3BsYXllckRhdGEuZ3JhZGVcclxuICAgICAgICBpZiAoY3VyTHYgPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VyRyAvIDJcclxuICAgICAgICB9IGVsc2UgaWYgKGN1ckx2ID09IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1ckcgLyA3XHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJMdiA9PSAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJHIC8gMTJcclxuICAgICAgICB9IGVsc2UgaWYgKGN1ckx2ID09IDQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1ckcgLyAxN1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VyTHYgPT0gNSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Mod/HttpMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '517d16YfqhMdL6fvXxxOsbl', 'HttpMgr');
// Scripts/Mod/HttpMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpMgr = /** @class */ (function () {
    function HttpMgr() {
    }
    Object.defineProperty(HttpMgr, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new HttpMgr();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    HttpMgr.prototype.httpGet = function (url, callback) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                var respone = JSON.parse(xhr.responseText);
                callback(respone);
            }
        };
        xhr.open("GET", url, true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.timeout = 5000; // 5 seconds for timeout
        xhr.send();
    };
    HttpMgr.prototype.httpPost = function (url, params, callback) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function () {
            //cc.log('xhr.readyState=' + xhr.readyState + '  xhr.status=' + xhr.status);
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                var respone = JSON.parse(xhr.responseText);
                callback(respone);
            }
        };
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.timeout = 5000; // 5 seconds for timeout
        xhr.send(params);
    };
    return HttpMgr;
}());
exports.default = HttpMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kXFxIdHRwTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQXdDQSxDQUFDO0lBdENHLHNCQUFrQixtQkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUE7YUFDakM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCx5QkFBTyxHQUFQLFVBQVEsR0FBRyxFQUFFLFFBQVE7UUFDakIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztZQUNyQixJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBRTtnQkFDakUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzNDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyQjtRQUNMLENBQUMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQixHQUFHLENBQUMsZ0JBQWdCLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekQsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUEsd0JBQXdCO1FBQzNDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCwwQkFBUSxHQUFSLFVBQVMsR0FBRyxFQUFFLE1BQU0sRUFBRSxRQUFRO1FBQzFCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4QyxHQUFHLENBQUMsa0JBQWtCLEdBQUc7WUFDckIsNEVBQTRFO1lBQzVFLElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUNqRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDM0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JCO1FBQ0wsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDekQsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQSx3QkFBd0I7UUFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVyQixDQUFDO0lBQ0wsY0FBQztBQUFELENBeENBLEFBd0NDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwTWdyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogSHR0cE1nclxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogSHR0cE1nciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBIdHRwTWdyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgaHR0cEdldCh1cmwsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNwb25lID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICB4aHIudGltZW91dCA9IDUwMDA7Ly8gNSBzZWNvbmRzIGZvciB0aW1lb3V0XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBodHRwUG9zdCh1cmwsIHBhcmFtcywgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9jYy5sb2coJ3hoci5yZWFkeVN0YXRlPScgKyB4aHIucmVhZHlTdGF0ZSArICcgIHhoci5zdGF0dXM9JyArIHhoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHhoci50aW1lb3V0ID0gNTAwMDsvLyA1IHNlY29uZHMgZm9yIHRpbWVvdXRcclxuICAgICAgICB4aHIuc2VuZChwYXJhbXMpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Mod/Utility.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '08ebfwGkANOp4sXiyeJ4qrB', 'Utility');
// Scripts/Mod/Utility.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.loadSpriteFrame = function (spName, sprite, cb) {
        //加载SpriteAtlas(图集)，并获取其中一张图片
        cc.loader.loadRes(spName, cc.SpriteFrame, function (err, spriteFrame) {
            sprite.spriteFrame = spriteFrame;
            cb && cb();
        });
    };
    Utility.loadSpAtlas = function (atlasName, spfName, sprite) {
        //加载SpriteAtlas(图集)，并获取其中一张图片
        cc.loader.loadRes(atlasName, cc.SpriteAtlas, function (err, atlas) {
            sprite.spriteFrame = atlas.getSpriteFrame(spfName);
        });
    };
    //打乱数组
    Utility.shuffleArr = function (arr) {
        var _a;
        var i = arr.length;
        while (i) {
            var j = Math.floor(Math.random() * i--);
            _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
        }
        return arr;
    };
    //数字前补0
    Utility.joinZero = function (length, num) {
        return (Array(length).join('0') + num).slice(-length);
    };
    Utility.getWorldPos = function (node, point) {
        if (point === void 0) { point = cc.v2(0, 0); }
        return node.convertToWorldSpaceAR(point);
    };
    Utility.getWorldDis = function (node1, node2) {
        var p1 = this.getWorldPos(node1);
        var p2 = this.getWorldPos(node2);
        return (p1.sub(p2)).mag();
    };
    Utility.getWorldDir = function (from, to) {
        var p1 = this.getWorldPos(from);
        var p2 = this.getWorldPos(to);
        var dir = p2.sub(p1).normalizeSelf();
        return dir;
    };
    Utility.delayActive = function (node, duration, target) {
        node.active = false;
        target.scheduleOnce(function () { node.active = true; }, duration);
    };
    Utility.getRandomItemInArr = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };
    Utility.getRandomItemInArrWithoutSelf = function (self, arr, count) {
        if (count === void 0) { count = 1; }
        var temp = [].concat(arr);
        temp.splice(temp.indexOf(self), 1);
        temp = this.shuffleArr(temp);
        return temp.slice(0, count);
    };
    Utility.rotateLoop = function (node, duration, rate) {
        var a1 = cc.rotateBy(duration, -rate);
        var a2 = cc.rotateBy(duration * 2, rate * 2);
        var a3 = cc.rotateBy(duration, -rate);
        var a4 = cc.sequence(a1, a2, a3);
        node.stopAllActions();
        node.runAction(cc.repeatForever(a4));
    };
    Utility.GetRandom = function (mix, max, isInt) {
        if (isInt === void 0) { isInt = true; }
        var w = max - mix;
        var r1 = Math.random() * w;
        r1 += mix;
        return isInt ? Math.floor(r1) : r1;
    };
    Utility.checkInsection = function (pNode, rNode) {
        var p1 = this.getWorldPos(pNode);
        var rPos = this.getWorldPos(rNode);
        var x1 = rPos.x - rNode.width / 2;
        var x2 = rPos.x + rNode.width / 2;
        var y1 = rPos.y - rNode.height / 2;
        var y2 = rPos.y + rNode.height / 2;
        return p1.x >= x1 && p1.x <= x2 && p1.y >= y1 && p1.y <= y2;
    };
    Utility.rootAction = function (rootNode, active, duration, cb) {
        if (active)
            rootNode.active = true;
        rootNode.scale = active ? 0.1 : 1;
        var a1 = cc.scaleTo(duration, active ? 1 : 0.1);
        var a2 = cc.callFunc(function () { cb && cb(); });
        var a3 = cc.sequence(a1, a2);
        rootNode.runAction(a3);
    };
    Utility = __decorate([
        ccclass
    ], Utility);
    return Utility;
}());
exports.default = Utility;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kXFxVdGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFBO0lBbUdBLENBQUM7SUFqR2lCLHVCQUFlLEdBQTdCLFVBQThCLE1BQWMsRUFBRSxNQUFpQixFQUFFLEVBQWE7UUFDMUUsNkJBQTZCO1FBQzdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsR0FBRyxFQUFFLFdBQVc7WUFDaEUsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7WUFDaEMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFBO1FBQ2QsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRWEsbUJBQVcsR0FBekIsVUFBMEIsU0FBaUIsRUFBRSxPQUFlLEVBQUUsTUFBaUI7UUFDM0UsNkJBQTZCO1FBQzdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUs7WUFDN0QsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELE1BQU07SUFDUSxrQkFBVSxHQUF4QixVQUF5QixHQUFVOztRQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxFQUFFO1lBQ04sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QyxxQkFBbUMsRUFBbEMsY0FBTSxFQUFFLGNBQU0sQ0FBcUI7U0FDdkM7UUFDRCxP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QUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDL0QsQ0FBQztJQUVhLGtCQUFVLEdBQXhCLFVBQXlCLFFBQWlCLEVBQUUsTUFBZSxFQUFFLFFBQWdCLEVBQUUsRUFBYTtRQUN4RixJQUFJLE1BQU07WUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNsQyxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDakMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQy9DLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBUSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUM1QixRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFsR2dCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FtRzNCO0lBQUQsY0FBQztDQW5HRCxBQW1HQyxJQUFBO2tCQW5Hb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbGl0eSB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkU3ByaXRlRnJhbWUoc3BOYW1lOiBzdHJpbmcsIHNwcml0ZTogY2MuU3ByaXRlLCBjYj86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgLy/liqDovb1TcHJpdGVBdGxhcyjlm77pm4Yp77yM5bm26I635Y+W5YW25Lit5LiA5byg5Zu+54mHXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoc3BOYW1lLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWVcclxuICAgICAgICAgICAgY2IgJiYgY2IoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkU3BBdGxhcyhhdGxhc05hbWU6IHN0cmluZywgc3BmTmFtZTogc3RyaW5nLCBzcHJpdGU6IGNjLlNwcml0ZSkge1xyXG4gICAgICAgIC8v5Yqg6L29U3ByaXRlQXRsYXMo5Zu+6ZuGKe+8jOW5tuiOt+WPluWFtuS4reS4gOW8oOWbvueJh1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKGF0bGFzTmFtZSwgY2MuU3ByaXRlQXRsYXMsIGZ1bmN0aW9uIChlcnIsIGF0bGFzKSB7XHJcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IGF0bGFzLmdldFNwcml0ZUZyYW1lKHNwZk5hbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy/miZPkubHmlbDnu4RcclxuICAgIHB1YmxpYyBzdGF0aWMgc2h1ZmZsZUFycihhcnI6IGFueVtdKSB7XHJcbiAgICAgICAgbGV0IGkgPSBhcnIubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChpKSB7XHJcbiAgICAgICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaS0tKTtcclxuICAgICAgICAgICAgW2FycltqXSwgYXJyW2ldXSA9IFthcnJbaV0sIGFycltqXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mlbDlrZfliY3ooaUwXHJcbiAgICBwdWJsaWMgc3RhdGljIGpvaW5aZXJvKGxlbmd0aDogbnVtYmVyLCBudW06IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiAoQXJyYXkobGVuZ3RoKS5qb2luKCcwJykgKyBudW0pLnNsaWNlKC1sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0V29ybGRQb3Mobm9kZTogY2MuTm9kZSwgcG9pbnQ6IGNjLlZlYzIgPSBjYy52MigwLCAwKSk6IGNjLlZlYzIge1xyXG4gICAgICAgIHJldHVybiBub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb2ludClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFdvcmxkRGlzKG5vZGUxOiBjYy5Ob2RlLCBub2RlMjogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBwMTogY2MuVmVjMiA9IHRoaXMuZ2V0V29ybGRQb3Mobm9kZTEpXHJcbiAgICAgICAgbGV0IHAyOiBjYy5WZWMyID0gdGhpcy5nZXRXb3JsZFBvcyhub2RlMilcclxuICAgICAgICByZXR1cm4gKHAxLnN1YihwMikpLm1hZygpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRXb3JsZERpcihmcm9tOiBjYy5Ob2RlLCB0bzogY2MuTm9kZSk6IGNjLlZlYzIge1xyXG4gICAgICAgIGxldCBwMTogY2MuVmVjMiA9IHRoaXMuZ2V0V29ybGRQb3MoZnJvbSlcclxuICAgICAgICBsZXQgcDI6IGNjLlZlYzIgPSB0aGlzLmdldFdvcmxkUG9zKHRvKVxyXG4gICAgICAgIGxldCBkaXIgPSBwMi5zdWIocDEpLm5vcm1hbGl6ZVNlbGYoKVxyXG4gICAgICAgIHJldHVybiBkaXJcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlbGF5QWN0aXZlKG5vZGU6IGNjLk5vZGUsIGR1cmF0aW9uOiBudW1iZXIsIHRhcmdldCkge1xyXG4gICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0YXJnZXQuc2NoZWR1bGVPbmNlKCgpID0+IHsgbm9kZS5hY3RpdmUgPSB0cnVlIH0sIGR1cmF0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmFuZG9tSXRlbUluQXJyKGFycjogYW55W10pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBhcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCldXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRSYW5kb21JdGVtSW5BcnJXaXRob3V0U2VsZihzZWxmOiBhbnksIGFycjogYW55W10sIGNvdW50OiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgbGV0IHRlbXA6IGFueSA9IFtdLmNvbmNhdChhcnIpXHJcbiAgICAgICAgdGVtcC5zcGxpY2UodGVtcC5pbmRleE9mKHNlbGYpLCAxKVxyXG4gICAgICAgIHRlbXAgPSB0aGlzLnNodWZmbGVBcnIodGVtcClcclxuICAgICAgICByZXR1cm4gdGVtcC5zbGljZSgwLCBjb3VudClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJvdGF0ZUxvb3Aobm9kZTogY2MuTm9kZSwgZHVyYXRpb246IG51bWJlciwgcmF0ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGExID0gY2Mucm90YXRlQnkoZHVyYXRpb24sIC1yYXRlKVxyXG4gICAgICAgIGxldCBhMiA9IGNjLnJvdGF0ZUJ5KGR1cmF0aW9uICogMiwgcmF0ZSAqIDIpXHJcbiAgICAgICAgbGV0IGEzID0gY2Mucm90YXRlQnkoZHVyYXRpb24sIC1yYXRlKVxyXG4gICAgICAgIGxldCBhNCA9IGNjLnNlcXVlbmNlKGExLCBhMiwgYTMpXHJcbiAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihhNCkpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb20obWl4LCBtYXgsIGlzSW50ID0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCB3ID0gbWF4IC0gbWl4XHJcbiAgICAgICAgbGV0IHIxID0gTWF0aC5yYW5kb20oKSAqIHdcclxuICAgICAgICByMSArPSBtaXhcclxuICAgICAgICByZXR1cm4gaXNJbnQgPyBNYXRoLmZsb29yKHIxKSA6IHIxXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjaGVja0luc2VjdGlvbihwTm9kZTogY2MuTm9kZSwgck5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgcDEgPSB0aGlzLmdldFdvcmxkUG9zKHBOb2RlKVxyXG4gICAgICAgIGxldCByUG9zID0gdGhpcy5nZXRXb3JsZFBvcyhyTm9kZSlcclxuICAgICAgICBsZXQgeDEgPSByUG9zLnggLSByTm9kZS53aWR0aCAvIDJcclxuICAgICAgICBsZXQgeDIgPSByUG9zLnggKyByTm9kZS53aWR0aCAvIDJcclxuICAgICAgICBsZXQgeTEgPSByUG9zLnkgLSByTm9kZS5oZWlnaHQgLyAyXHJcbiAgICAgICAgbGV0IHkyID0gclBvcy55ICsgck5vZGUuaGVpZ2h0IC8gMlxyXG4gICAgICAgIHJldHVybiBwMS54ID49IHgxICYmIHAxLnggPD0geDIgJiYgcDEueSA+PSB5MSAmJiBwMS55IDw9IHkyXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByb290QWN0aW9uKHJvb3ROb2RlOiBjYy5Ob2RlLCBhY3RpdmU6IGJvb2xlYW4sIGR1cmF0aW9uOiBudW1iZXIsIGNiPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAoYWN0aXZlKSByb290Tm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgcm9vdE5vZGUuc2NhbGUgPSBhY3RpdmUgPyAwLjEgOiAxXHJcbiAgICAgICAgbGV0IGExID0gY2Muc2NhbGVUbyhkdXJhdGlvbiwgYWN0aXZlID8gMSA6IDAuMSlcclxuICAgICAgICBsZXQgYTIgPSBjYy5jYWxsRnVuYygoKSA9PiB7IGNiICYmIGNiKCkgfSlcclxuICAgICAgICBsZXQgYTMgPSBjYy5zZXF1ZW5jZShhMSwgYTIpXHJcbiAgICAgICAgcm9vdE5vZGUucnVuQWN0aW9uKGEzKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Mod/SoundMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa199+MokBA1ak/l2nJ16BK', 'SoundMgr');
// Scripts/Mod/SoundMgr.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundMgr = /** @class */ (function (_super) {
    __extends(SoundMgr, _super);
    function SoundMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentMusic = "";
        _this.currentAid = -1;
        _this.waitBackgroundMuisc = "";
        _this.buttonIns = false;
        _this.doneCB = null;
        return _this;
    }
    SoundMgr_1 = SoundMgr;
    SoundMgr.MuteSW = function () {
        cc.audioEngine.stopAll();
        cc.audioEngine.stopMusic();
        SoundMgr_1.IsMute = !SoundMgr_1.IsMute;
        SoundMgr_1.Share.node.active = !SoundMgr_1.IsMute;
        if (SoundMgr_1.IsMute == false) {
            SoundMgr_1.Share.PlayBackground(SoundMgr_1.Share.currentMusic == "" ? SoundMgr_1.Share.waitBackgroundMuisc : SoundMgr_1.Share.currentMusic);
        }
    };
    SoundMgr.initAll = function (cb) {
        // let soundnode: cc.Node = new cc.Node()
        // let crl = soundnode.addComponent(SoundMgr)
        // soundnode.name = "SoundMgr"
        // crl.doneCB = cb
        // crl.loadSounds()
        // cc.director.getScene().addChild(soundnode)
        // cc.game.addPersistRootNode(soundnode)
    };
    SoundMgr.prototype.loadSounds = function (cb) {
        var _this = this;
        this.doneCB = cb;
        cc.loader.loadResDir("Sound", cc.AudioClip, function (err, sounds) {
            sounds.forEach(function (sound) {
                var clip = new cc.Node();
                var crl = clip.addComponent(cc.AudioSource);
                crl.clip = sound;
                clip.name = sound.name;
                _this.node.addChild(clip);
            });
            _this.doneCB();
            cc.log("loaded sound:", sounds.length);
        });
    };
    SoundMgr.justMute = function () {
        SoundMgr_1.IsMute = true;
    };
    SoundMgr.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
        SoundMgr_1.Share = this;
    };
    SoundMgr.prototype.start = function () {
        //cc.game.addPersistRootNode(this.node)
    };
    SoundMgr.prototype.PlaySound = function (key, loop) {
        if (loop === void 0) { loop = false; }
        if (this.node == null) {
            return null;
        }
        if (!SoundMgr_1.IsMute) {
            var source = this.node.getChildByName(key);
            if (source == null) {
                cc.log("can't load sound", key);
                return null;
            }
            return cc.audioEngine.play(this.node.getChildByName(key).getComponent(cc.AudioSource).clip, loop, 1);
        }
    };
    SoundMgr.prototype.getMusicClip = function (key) {
        return this.node.getChildByName(key).getComponent(cc.AudioSource).clip;
    };
    SoundMgr.prototype.PlayMusic = function (key, loop) {
        if (loop === void 0) { loop = false; }
        if (this.node == null) {
            return;
        }
        if (!SoundMgr_1.IsMute) {
            var source = this.node.getChildByName(key);
            if (source == null) {
                cc.log("can't load music", key);
                return;
            }
            if (!this.node.getChildByName(key).getComponent(cc.AudioSource).isPlaying) {
                this.node.getChildByName(key).getComponent(cc.AudioSource).loop = loop;
                this.node.getChildByName(key).getComponent(cc.AudioSource).play();
            }
            this.currentMusic = key;
        }
    };
    SoundMgr.prototype.PlayBackground = function (key) {
        if (this.node == null) {
            return;
        }
        this.waitBackgroundMuisc = key;
        if (SoundMgr_1.IsMute == false) {
            cc.log("playbackground ", key, SoundMgr_1.IsMute);
            var source = this.node.getChildByName(key);
            if (source == null) {
                cc.log("can't load PlayBackground", key);
                return;
            }
            if (this.currentMusic != "") {
                this.StopMuisc(this.currentMusic);
                cc.log("stop muisc", this.currentMusic);
            }
            if (!cc.audioEngine.isMusicPlaying() /* this.node.getChildByName(key).getComponent(cc.AudioSource).isPlaying */) {
                // this.node.getChildByName(key).getComponent(cc.AudioSource).loop = true
                // this.node.getChildByName(key).getComponent(cc.AudioSource).play()
                cc.audioEngine.playMusic(this.node.getChildByName(key).getComponent(cc.AudioSource).clip, true);
            }
            this.currentMusic = key;
        }
    };
    SoundMgr.prototype.StopMuisc = function (key) {
        if (this.node == null) {
            return;
        }
        this.node.getChildByName(key).getComponent(cc.AudioSource).stop();
    };
    var SoundMgr_1;
    SoundMgr.Share = new SoundMgr_1();
    SoundMgr.IsMute = false;
    SoundMgr = SoundMgr_1 = __decorate([
        ccclass
    ], SoundMgr);
    return SoundMgr;
}(cc.Component));
exports.default = SoundMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kXFxTb3VuZE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBcUlDO1FBaElHLGtCQUFZLEdBQVcsRUFBRSxDQUFBO1FBSXpCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDLENBQUE7UUFFdkIseUJBQW1CLEdBQVcsRUFBRSxDQUFBO1FBRWhDLGVBQVMsR0FBWSxLQUFLLENBQUE7UUFFMUIsWUFBTSxHQUFhLElBQUksQ0FBQTs7SUFzSDNCLENBQUM7aUJBcElvQixRQUFRO0lBZ0JYLGVBQU0sR0FBcEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDMUIsVUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLFVBQVEsQ0FBQyxNQUFNLENBQUE7UUFDbEMsVUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsVUFBUSxDQUFDLE1BQU0sQ0FBQTtRQUM3QyxJQUFJLFVBQVEsQ0FBQyxNQUFNLElBQUksS0FBSyxFQUFFO1lBQzFCLFVBQVEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFVBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBUSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsVUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUN0STtJQUNMLENBQUM7SUFFYSxnQkFBTyxHQUFyQixVQUFzQixFQUFZO1FBQzlCLHlDQUF5QztRQUN6Qyw2Q0FBNkM7UUFDN0MsOEJBQThCO1FBQzlCLGtCQUFrQjtRQUNsQixtQkFBbUI7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RSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO2FBQzFDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUEsMEVBQTBFLEVBQUU7Z0JBQzVHLHlFQUF5RTtnQkFDekUsb0VBQW9FO2dCQUNwRSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTthQUNsRztZQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFBO1NBQzFCO0lBQ0wsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxHQUFXO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDbkIsT0FBTTtTQUNUO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNyRSxDQUFDOztJQWpJTSxjQUFLLEdBQWEsSUFBSSxVQUFRLEVBQUUsQ0FBQTtJQUloQyxlQUFNLEdBQVksS0FBSyxDQUFBO0lBTmIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9JNUI7SUFBRCxlQUFDO0NBcElELEFBb0lDLENBcElxQyxFQUFFLENBQUMsU0FBUyxHQW9JakQ7a0JBcElvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kTWdyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgU2hhcmU6IFNvdW5kTWdyID0gbmV3IFNvdW5kTWdyKClcclxuXHJcbiAgICBjdXJyZW50TXVzaWM6IHN0cmluZyA9IFwiXCJcclxuXHJcbiAgICBzdGF0aWMgSXNNdXRlOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBjdXJyZW50QWlkOiBudW1iZXIgPSAtMVxyXG5cclxuICAgIHdhaXRCYWNrZ3JvdW5kTXVpc2M6IHN0cmluZyA9IFwiXCJcclxuXHJcbiAgICBidXR0b25JbnM6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIGRvbmVDQjogRnVuY3Rpb24gPSBudWxsXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBNdXRlU1coKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKClcclxuICAgICAgICBTb3VuZE1nci5Jc011dGUgPSAhU291bmRNZ3IuSXNNdXRlXHJcbiAgICAgICAgU291bmRNZ3IuU2hhcmUubm9kZS5hY3RpdmUgPSAhU291bmRNZ3IuSXNNdXRlXHJcbiAgICAgICAgaWYgKFNvdW5kTWdyLklzTXV0ZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBTb3VuZE1nci5TaGFyZS5QbGF5QmFja2dyb3VuZChTb3VuZE1nci5TaGFyZS5jdXJyZW50TXVzaWMgPT0gXCJcIiA/IFNvdW5kTWdyLlNoYXJlLndhaXRCYWNrZ3JvdW5kTXVpc2MgOiBTb3VuZE1nci5TaGFyZS5jdXJyZW50TXVzaWMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdEFsbChjYjogRnVuY3Rpb24pIHtcclxuICAgICAgICAvLyBsZXQgc291bmRub2RlOiBjYy5Ob2RlID0gbmV3IGNjLk5vZGUoKVxyXG4gICAgICAgIC8vIGxldCBjcmwgPSBzb3VuZG5vZGUuYWRkQ29tcG9uZW50KFNvdW5kTWdyKVxyXG4gICAgICAgIC8vIHNvdW5kbm9kZS5uYW1lID0gXCJTb3VuZE1nclwiXHJcbiAgICAgICAgLy8gY3JsLmRvbmVDQiA9IGNiXHJcbiAgICAgICAgLy8gY3JsLmxvYWRTb3VuZHMoKVxyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQoc291bmRub2RlKVxyXG4gICAgICAgIC8vIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHNvdW5kbm9kZSlcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU291bmRzKGNiOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuZG9uZUNCID0gY2JcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0RpcihcIlNvdW5kXCIsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgc291bmRzKSA9PiB7XHJcbiAgICAgICAgICAgIHNvdW5kcy5mb3JFYWNoKChzb3VuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaXAgPSBuZXcgY2MuTm9kZSgpXHJcbiAgICAgICAgICAgICAgICBsZXQgY3JsID0gY2xpcC5hZGRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICAgICAgICAgICAgICBjcmwuY2xpcCA9IHNvdW5kXHJcbiAgICAgICAgICAgICAgICBjbGlwLm5hbWUgPSBzb3VuZC5uYW1lXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoY2xpcClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5kb25lQ0IoKVxyXG4gICAgICAgICAgICBjYy5sb2coXCJsb2FkZWQgc291bmQ6XCIsIHNvdW5kcy5sZW5ndGgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGp1c3RNdXRlKCkge1xyXG4gICAgICAgIFNvdW5kTWdyLklzTXV0ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKVxyXG4gICAgICAgIFNvdW5kTWdyLlNoYXJlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvL2NjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSlcclxuICAgIH1cclxuXHJcbiAgICBQbGF5U291bmQoa2V5OiBzdHJpbmcsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVNvdW5kTWdyLklzTXV0ZSkge1xyXG4gICAgICAgICAgICBsZXQgc291cmNlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGtleSlcclxuICAgICAgICAgICAgaWYgKHNvdXJjZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJjYW4ndCBsb2FkIHNvdW5kXCIsIGtleSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGtleSkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwLCBsb29wLCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRNdXNpY0NsaXAoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGtleSkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwXHJcbiAgICB9XHJcblxyXG4gICAgUGxheU11c2ljKGtleTogc3RyaW5nLCBsb29wOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghU291bmRNZ3IuSXNNdXRlKSB7XHJcbiAgICAgICAgICAgIGxldCBzb3VyY2UgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoa2V5KVxyXG4gICAgICAgICAgICBpZiAoc291cmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcImNhbid0IGxvYWQgbXVzaWNcIiwga2V5KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoa2V5KS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGtleSkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5sb29wID0gbG9vcFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGtleSkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNdXNpYyA9IGtleVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBQbGF5QmFja2dyb3VuZChrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53YWl0QmFja2dyb3VuZE11aXNjID0ga2V5XHJcbiAgICAgICAgaWYgKFNvdW5kTWdyLklzTXV0ZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJwbGF5YmFja2dyb3VuZCBcIiwga2V5LCBTb3VuZE1nci5Jc011dGUpXHJcbiAgICAgICAgICAgIGxldCBzb3VyY2UgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoa2V5KVxyXG4gICAgICAgICAgICBpZiAoc291cmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcImNhbid0IGxvYWQgUGxheUJhY2tncm91bmRcIiwga2V5KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNdXNpYyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0b3BNdWlzYyh0aGlzLmN1cnJlbnRNdXNpYylcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcInN0b3AgbXVpc2NcIiwgdGhpcy5jdXJyZW50TXVzaWMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFjYy5hdWRpb0VuZ2luZS5pc011c2ljUGxheWluZygpLyogdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGtleSkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5pc1BsYXlpbmcgKi8pIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShrZXkpLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkubG9vcCA9IHRydWVcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShrZXkpLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGtleSkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwLCB0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE11c2ljID0ga2V5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFN0b3BNdWlzYyhrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGtleSkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5zdG9wKClcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Mod/AdMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'effbdHfqBlJkYv2xufFb3CW', 'AdMgr');
// Scripts/Mod/AdMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WxApi_1 = require("../Libs/WxApi");
var ShareMgr_1 = require("./ShareMgr");
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var AdMgr = /** @class */ (function () {
    function AdMgr() {
        this.bannerUnitId = ['adunit-8ceebcafa271d4d2', 'adunit-28f839dc57be0edd'];
        this.videoUnitId = 'adunit-43095a0d9b35d115';
        this.bannerAd = null;
        this.videoAd = null;
        this.videoCallback = null;
        this.videoCloseCallback = null;
        this.curBannerId = 0;
        this.showBannerCount = 0;
        this.videoIsError = true;
        this.videoLoaded = false;
        this.isBannerError = true;
    }
    Object.defineProperty(AdMgr, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new AdMgr();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    AdMgr.prototype.initAd = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            this.initBanner();
            this.initVideo();
        }
    };
    //初始化banner
    AdMgr.prototype.initBanner = function () {
        var _this = this;
        this.isBannerError = false;
        //适配iphoneX
        var isIphonex = false;
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].getSystemInfo({
                success: function (res) {
                    var modelmes = res.model;
                    if (modelmes.search('iPhone X') != -1) {
                        isIphonex = true;
                    }
                }
            });
        }
        var winSize = window["wx"].getSystemInfoSync();
        //初始化banner
        this.bannerAd = window["wx"].createBannerAd({
            adUnitId: this.bannerUnitId[this.curBannerId],
            style: {
                left: 0,
                top: 0,
                width: 0,
                height: 300
            }
        });
        //监听banner尺寸修正
        this.bannerAd.onResize(function (res) {
            if (isIphonex) {
                _this.bannerAd.style.top = winSize.windowHeight - _this.bannerAd.style.realHeight - 10;
            }
            else {
                _this.bannerAd.style.top = winSize.windowHeight - _this.bannerAd.style.realHeight;
            }
            _this.bannerAd.style.left = winSize.windowWidth / 2 - _this.bannerAd.style.realWidth / 2;
        });
        this.bannerAd.onError(function (res) {
            // 错误事件
            console.log('banner error:', JSON.stringify(res));
            _this.isBannerError = true;
        });
    };
    //隐藏banner
    AdMgr.prototype.hideBanner = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME && this.bannerAd) {
            if (this.isBannerError) {
                ExportUtils_1.default.instance.closeExportUI(ExportUtils_1.ExportDir.VIEW_SCROLLUI);
            }
            else {
                this.bannerAd.hide();
                if (ExportUtils_1.default.instance.exportCfg != null && this.showBannerCount >= parseInt(ExportUtils_1.default.instance.exportCfg.front_banner_number)) {
                    this.showBannerCount = 0;
                    this.curBannerId++;
                    if (this.curBannerId >= this.bannerUnitId.length) {
                        this.curBannerId = 0;
                    }
                    console.log('destroy banner');
                    this.bannerAd.destroy();
                    this.bannerAd = null;
                    this.initBanner();
                }
            }
        }
        else {
            ExportUtils_1.default.instance.closeExportUI(ExportUtils_1.ExportDir.VIEW_SCROLLUI);
        }
    };
    // countBanner() {
    //     if (JJMgr.instance.dataConfig != null && this.showBannerCount > parseInt(JJMgr.instance.dataConfig.front_banner_number)) {
    //         this.bannerAd.hide()
    //         this.showBannerCount = 0
    //         this.curBannerId++
    //         if (this.curBannerId >= this.bannerUnitId.length) {
    //             this.curBannerId = 0
    //         }
    //         console.log('destroy banner')
    //         this.bannerAd.destroy()
    //         this.bannerAd = null
    //         this.initBanner()
    //         this.showBanner()
    //     }
    // }
    //显示banner
    AdMgr.prototype.showBanner = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME && this.bannerAd) {
            this.showBannerCount++;
            if (this.isBannerError && !WxApi_1.default.isKillBossUI) {
                ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_SCROLLUI);
            }
            else {
                this.bannerAd.show();
            }
        }
        else {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_SCROLLUI);
        }
    };
    //销毁banner
    AdMgr.prototype.destroyBanner = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME && this.bannerAd) {
            this.bannerAd.destroy();
            this.bannerAd = null;
        }
    };
    AdMgr.prototype.initVideo = function () {
        var _this = this;
        if (cc.sys.platform !== cc.sys.WECHAT_GAME) {
            return;
        }
        //初始化视频
        if (!this.videoAd) {
            this.videoAd = window["wx"].createRewardedVideoAd({
                adUnitId: this.videoUnitId
            });
        }
        this.loadVideo();
        this.videoAd.onLoad(function () {
            console.log('激励视频加载成功');
            _this.videoLoaded = true;
        });
        //视频加载出错
        this.videoAd.onError(function (res) {
            console.log('video Error:', JSON.stringify(res));
            _this.videoIsError = true;
        });
    };
    AdMgr.prototype.loadVideo = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME && this.videoAd != null) {
            this.videoIsError = false;
            this.videoAd.load();
        }
    };
    //初始化激励视频
    AdMgr.prototype.showVideo = function (cb) {
        var _this = this;
        this.videoCallback = cb;
        if (cc.sys.platform !== cc.sys.WECHAT_GAME) {
            this.videoCallback();
            this.videoCloseCallback && this.videoCloseCallback();
            this.videoCloseCallback = null;
            return;
        }
        if (this.videoIsError) {
            ShareMgr_1.default.instance.shareGame(cb);
            this.loadVideo();
            return;
        }
        if (this.videoLoaded == false) {
            WxApi_1.default.OpenAlert('视频正在加载中！');
            return;
        }
        if (this.videoAd) {
            this.videoAd.offClose();
        }
        //关闭声音
        //监听关闭视频
        this.videoAd.onClose(function (res) {
            if (res && res.isEnded || res === undefined) {
                console.log('正常播放结束，可以下发游戏奖励');
                _this.videoCallback();
            }
            else {
                console.log('播放中途退出，不下发游戏奖励');
            }
            _this.videoCloseCallback && _this.videoCloseCallback();
            _this.videoCloseCallback = null;
            //恢复声音
            _this.videoLoaded = false;
            _this.loadVideo();
        });
        this.videoAd.show();
    };
    return AdMgr;
}());
exports.default = AdMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kXFxBZE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVDQUFrQztBQUNsQyx1Q0FBa0M7QUFDbEMsNERBQWdFO0FBRWhFO0lBQUE7UUFTWSxpQkFBWSxHQUFhLENBQUMseUJBQXlCLEVBQUUseUJBQXlCLENBQUMsQ0FBQTtRQUMvRSxnQkFBVyxHQUFXLHlCQUF5QixDQUFBO1FBQy9DLGFBQVEsR0FBUSxJQUFJLENBQUE7UUFDcEIsWUFBTyxHQUFRLElBQUksQ0FBQTtRQUNwQixrQkFBYSxHQUFhLElBQUksQ0FBQTtRQUM5Qix1QkFBa0IsR0FBYSxJQUFJLENBQUE7UUFDbEMsZ0JBQVcsR0FBVyxDQUFDLENBQUE7UUFDeEIsb0JBQWUsR0FBVyxDQUFDLENBQUE7UUFFM0IsaUJBQVksR0FBWSxJQUFJLENBQUE7UUFDM0IsZ0JBQVcsR0FBWSxLQUFLLENBQUE7UUFDN0Isa0JBQWEsR0FBWSxJQUFJLENBQUE7SUFpTXhDLENBQUM7SUFuTkcsc0JBQWtCLGlCQUFRO2FBQTFCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQTthQUMvQjtZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN6QixDQUFDOzs7T0FBQTtJQWVELHNCQUFNLEdBQU47UUFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtZQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7U0FDbkI7SUFDTCxDQUFDO0lBRUQsV0FBVztJQUNYLDBCQUFVLEdBQVY7UUFBQSxpQkEwQ0M7UUF6Q0csSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUE7UUFDMUIsV0FBVztRQUNYLElBQUks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QkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO2dCQUM5QixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7YUFDdkI7aUJBQ0k7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO2FBQ2hDO1lBQ0QsS0FBSSxDQUFDLGtCQUFrQixJQUFJLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO1lBQ3BELEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUE7WUFDOUIsTUFBTTtZQUVOLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFBO1lBQ3hCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUVMLFlBQUM7QUFBRCxDQXJOQSxBQXFOQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vVXRpbGl0eVwiO1xyXG5pbXBvcnQgV3hBcGkgZnJvbSBcIi4uL0xpYnMvV3hBcGlcIjtcclxuaW1wb3J0IFNoYXJlTWdyIGZyb20gXCIuL1NoYXJlTWdyXCI7XHJcbmltcG9ydCBKSk1nciwgeyBFeHBvcnREaXIgfSBmcm9tIFwiLi4vLi4vRXhwb3J0TGlicy9FeHBvcnRVdGlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRNZ3Ige1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBBZE1nclxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogQWRNZ3Ige1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQWRNZ3IoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJhbm5lclVuaXRJZDogc3RyaW5nW10gPSBbJ2FkdW5pdC04Y2VlYmNhZmEyNzFkNGQyJywgJ2FkdW5pdC0yOGY4MzlkYzU3YmUwZWRkJ11cclxuICAgIHByaXZhdGUgdmlkZW9Vbml0SWQ6IHN0cmluZyA9ICdhZHVuaXQtNDMwOTVhMGQ5YjM1ZDExNSdcclxuICAgIHByaXZhdGUgYmFubmVyQWQ6IGFueSA9IG51bGxcclxuICAgIHByaXZhdGUgdmlkZW9BZDogYW55ID0gbnVsbFxyXG4gICAgcHVibGljIHZpZGVvQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbFxyXG4gICAgcHVibGljIHZpZGVvQ2xvc2VDYWxsYmFjazogRnVuY3Rpb24gPSBudWxsXHJcbiAgICBwcml2YXRlIGN1ckJhbm5lcklkOiBudW1iZXIgPSAwXHJcbiAgICBwdWJsaWMgc2hvd0Jhbm5lckNvdW50OiBudW1iZXIgPSAwXHJcblxyXG4gICAgcHVibGljIHZpZGVvSXNFcnJvcjogYm9vbGVhbiA9IHRydWVcclxuICAgIHByaXZhdGUgdmlkZW9Mb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgcHVibGljIGlzQmFubmVyRXJyb3I6IGJvb2xlYW4gPSB0cnVlXHJcblxyXG4gICAgaW5pdEFkKCkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRCYW5uZXIoKVxyXG4gICAgICAgICAgICB0aGlzLmluaXRWaWRlbygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyWYmFubmVyXHJcbiAgICBpbml0QmFubmVyKCkge1xyXG4gICAgICAgIHRoaXMuaXNCYW5uZXJFcnJvciA9IGZhbHNlXHJcbiAgICAgICAgLy/pgILphY1pcGhvbmVYXHJcbiAgICAgICAgbGV0IGlzSXBob25leCA9IGZhbHNlXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLmdldFN5c3RlbUluZm8oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbW9kZWxtZXMgPSByZXMubW9kZWxcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWxtZXMuc2VhcmNoKCdpUGhvbmUgWCcpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSXBob25leCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgd2luU2l6ZSA9IHdpbmRvd1tcInd4XCJdLmdldFN5c3RlbUluZm9TeW5jKClcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJZiYW5uZXJcclxuICAgICAgICB0aGlzLmJhbm5lckFkID0gd2luZG93W1wid3hcIl0uY3JlYXRlQmFubmVyQWQoe1xyXG4gICAgICAgICAgICBhZFVuaXRJZDogdGhpcy5iYW5uZXJVbml0SWRbdGhpcy5jdXJCYW5uZXJJZF0sXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL+ebkeWQrGJhbm5lcuWwuuWvuOS/ruato1xyXG4gICAgICAgIHRoaXMuYmFubmVyQWQub25SZXNpemUocmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzSXBob25leCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5zdHlsZS50b3AgPSB3aW5TaXplLndpbmRvd0hlaWdodCAtIHRoaXMuYmFubmVyQWQuc3R5bGUucmVhbEhlaWdodCAtIDEwXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lckFkLnN0eWxlLnRvcCA9IHdpblNpemUud2luZG93SGVpZ2h0IC0gdGhpcy5iYW5uZXJBZC5zdHlsZS5yZWFsSGVpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5zdHlsZS5sZWZ0ID0gd2luU2l6ZS53aW5kb3dXaWR0aCAvIDIgLSB0aGlzLmJhbm5lckFkLnN0eWxlLnJlYWxXaWR0aCAvIDJcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmJhbm5lckFkLm9uRXJyb3IocmVzID0+IHtcclxuICAgICAgICAgICAgLy8g6ZSZ6K+v5LqL5Lu2XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiYW5uZXIgZXJyb3I6JywgSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuICAgICAgICAgICAgdGhpcy5pc0Jhbm5lckVycm9yID0gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+makOiXj2Jhbm5lclxyXG4gICAgaGlkZUJhbm5lcigpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUgJiYgdGhpcy5iYW5uZXJBZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0Jhbm5lckVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBKSk1nci5pbnN0YW5jZS5jbG9zZUV4cG9ydFVJKEV4cG9ydERpci5WSUVXX1NDUk9MTFVJKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5oaWRlKClcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnICE9IG51bGwgJiYgdGhpcy5zaG93QmFubmVyQ291bnQgPj0gcGFyc2VJbnQoSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X2Jhbm5lcl9udW1iZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93QmFubmVyQ291bnQgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJCYW5uZXJJZCsrXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VyQmFubmVySWQgPj0gdGhpcy5iYW5uZXJVbml0SWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyQmFubmVySWQgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVzdHJveSBiYW5uZXInKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyQWQuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJBZCA9IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRCYW5uZXIoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2UuY2xvc2VFeHBvcnRVSShFeHBvcnREaXIuVklFV19TQ1JPTExVSSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY291bnRCYW5uZXIoKSB7XHJcbiAgICAvLyAgICAgaWYgKEpKTWdyLmluc3RhbmNlLmRhdGFDb25maWcgIT0gbnVsbCAmJiB0aGlzLnNob3dCYW5uZXJDb3VudCA+IHBhcnNlSW50KEpKTWdyLmluc3RhbmNlLmRhdGFDb25maWcuZnJvbnRfYmFubmVyX251bWJlcikpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5iYW5uZXJBZC5oaWRlKClcclxuICAgIC8vICAgICAgICAgdGhpcy5zaG93QmFubmVyQ291bnQgPSAwXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY3VyQmFubmVySWQrK1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5jdXJCYW5uZXJJZCA+PSB0aGlzLmJhbm5lclVuaXRJZC5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY3VyQmFubmVySWQgPSAwXHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdkZXN0cm95IGJhbm5lcicpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuYmFubmVyQWQuZGVzdHJveSgpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuYmFubmVyQWQgPSBudWxsXHJcbiAgICAvLyAgICAgICAgIHRoaXMuaW5pdEJhbm5lcigpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2hvd0Jhbm5lcigpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8v5pi+56S6YmFubmVyXHJcbiAgICBzaG93QmFubmVyKCkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSAmJiB0aGlzLmJhbm5lckFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Jhbm5lckNvdW50KytcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNCYW5uZXJFcnJvciAmJiAhV3hBcGkuaXNLaWxsQm9zc1VJKSB7XHJcbiAgICAgICAgICAgICAgICBKSk1nci5pbnN0YW5jZS5zaG93RXhwb3J0VUkoRXhwb3J0RGlyLlZJRVdfU0NST0xMVUkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lckFkLnNob3coKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2Uuc2hvd0V4cG9ydFVJKEV4cG9ydERpci5WSUVXX1NDUk9MTFVJKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6ZSA5q+BYmFubmVyXHJcbiAgICBkZXN0cm95QmFubmVyKCkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSAmJiB0aGlzLmJhbm5lckFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRWaWRlbygpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtICE9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yid5aeL5YyW6KeG6aKRXHJcbiAgICAgICAgaWYgKCF0aGlzLnZpZGVvQWQpIHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0FkID0gd2luZG93W1wid3hcIl0uY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiB0aGlzLnZpZGVvVW5pdElkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvYWRWaWRlbygpXHJcbiAgICAgICAgdGhpcy52aWRlb0FkLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopHliqDovb3miJDlip8nKVxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvTG9hZGVkID0gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy/op4bpopHliqDovb3lh7rplJlcclxuICAgICAgICB0aGlzLnZpZGVvQWQub25FcnJvcihyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gRXJyb3I6JywgSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuICAgICAgICAgICAgdGhpcy52aWRlb0lzRXJyb3IgPSB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVmlkZW8oKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FICYmIHRoaXMudmlkZW9BZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Jc0Vycm9yID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy52aWRlb0FkLmxvYWQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMlua/gOWKseinhumikVxyXG4gICAgc2hvd1ZpZGVvKGNiOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMudmlkZW9DYWxsYmFjayA9IGNiXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSAhPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9DYWxsYmFjaygpXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9DbG9zZUNhbGxiYWNrICYmIHRoaXMudmlkZW9DbG9zZUNhbGxiYWNrKClcclxuICAgICAgICAgICAgdGhpcy52aWRlb0Nsb3NlQ2FsbGJhY2sgPSBudWxsXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9Jc0Vycm9yKSB7XHJcbiAgICAgICAgICAgIFNoYXJlTWdyLmluc3RhbmNlLnNoYXJlR2FtZShjYilcclxuICAgICAgICAgICAgdGhpcy5sb2FkVmlkZW8oKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZGVvTG9hZGVkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIFd4QXBpLk9wZW5BbGVydCgn6KeG6aKR5q2j5Zyo5Yqg6L295Lit77yBJylcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52aWRlb0FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZC5vZmZDbG9zZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5YWz6Zet5aOw6Z+zXHJcblxyXG4gICAgICAgIC8v55uR5ZCs5YWz6Zet6KeG6aKRXHJcbiAgICAgICAgdGhpcy52aWRlb0FkLm9uQ2xvc2UocmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuaXNFbmRlZCB8fCByZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ato+W4uOaSreaUvue7k+adn++8jOWPr+S7peS4i+WPkea4uOaIj+WlluWKsScpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQ2FsbGJhY2soKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aSreaUvuS4remAlOmAgOWHuu+8jOS4jeS4i+WPkea4uOaIj+WlluWKsScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy52aWRlb0Nsb3NlQ2FsbGJhY2sgJiYgdGhpcy52aWRlb0Nsb3NlQ2FsbGJhY2soKVxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQ2xvc2VDYWxsYmFjayA9IG51bGxcclxuICAgICAgICAgICAgLy/mgaLlpI3lo7Dpn7NcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Mb2FkZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRWaWRlbygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy52aWRlb0FkLnNob3coKVxyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/GameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76fb7AiQUxPIqPSsg68ljvt', 'GameUI');
// Scripts/UI/GameUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var LevelBase_1 = require("../Crl/Level/LevelBase");
var PlayerAni_1 = require("../Crl/PlayerAni");
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var TimeCountMgr_1 = require("../Libs/TimeCountMgr");
var WxApi_1 = require("../Libs/WxApi");
var AdMgr_1 = require("../Mod/AdMgr");
var ShareMgr_1 = require("../Mod/ShareMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameUI = /** @class */ (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GetPowerUI = null;
        _this.powerNum = null;
        _this.powerTime = null;
        _this.gradeNum = null;
        _this.tipsNum = null;
        _this.NextPlayerAni = null;
        _this.lvNum = null;
        _this.lvBar = null;
        _this.lvNode = null;
        return _this;
    }
    GameUI.prototype.onLoad = function () { };
    GameUI.prototype.start = function () {
        this.lvNode.active = PlayerDataMgr_1.default.getPlayerLv() < 5;
        this.lvNum.string = PlayerDataMgr_1.default.getPlayerLv().toString();
        this.lvBar.progress = PlayerDataMgr_1.default.getNextLvPer();
        var nextLv = PlayerDataMgr_1.default.getPlayerLv();
        this.NextPlayerAni.changeSkin(nextLv <= 4 ? nextLv : 4);
        AdMgr_1.default.instance.hideBanner();
        if (WxApi_1.default.isValidBanner() && ExportUtils_1.default.instance.exportCfg.front_main_banner_switch) {
            AdMgr_1.default.instance.showBanner();
        }
    };
    GameUI.prototype.getPowerBtnCB = function () {
        if (LevelBase_1.default.Share.isGameOver)
            return;
        this.GetPowerUI.active = true;
    };
    GameUI.prototype.skipBtnCB = function () {
        if (LevelBase_1.default.Share.isGameOver)
            return;
        var cb = function () {
            LevelBase_1.default.Share.winCB();
        };
        ShareMgr_1.default.instance.shareGame(cb);
    };
    GameUI.prototype.tipsBtnCB = function () {
    };
    GameUI.prototype.calculatePowerTime = function () {
        var t = TimeCountMgr_1.default.Share.tCount;
        var m = Math.floor(t / 60);
        var s = Math.floor(t - m * 60);
        this.powerTime.string = m.toString() + ':' + s.toString();
        this.powerNum.string = PlayerDataMgr_1.default.getPlayerData().power.toString();
        this.powerTime.node.active = PlayerDataMgr_1.default.getPlayerData().power < PlayerDataMgr_1.default.powerMax;
    };
    GameUI.prototype.update = function (dt) {
        this.calculatePowerTime();
        this.gradeNum.string = PlayerDataMgr_1.default.getPlayerData().grade.toString();
        this.tipsNum.string = PlayerDataMgr_1.default.getPlayerData().tipsNum.toString();
    };
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "GetPowerUI", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "powerNum", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "powerTime", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "gradeNum", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "tipsNum", void 0);
    __decorate([
        property(PlayerAni_1.default)
    ], GameUI.prototype, "NextPlayerAni", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "lvNum", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], GameUI.prototype, "lvBar", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "lvNode", void 0);
    GameUI = __decorate([
        ccclass
    ], GameUI);
    return GameUI;
}(cc.Component));
exports.default = GameUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBaUQ7QUFDakQsb0RBQStDO0FBQy9DLDhDQUF5QztBQUN6Qyx1REFBa0Q7QUFDbEQscURBQWdEO0FBQ2hELHVDQUFrQztBQUNsQyxzQ0FBaUM7QUFDakMsNENBQXVDO0FBRWpDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFEaEQ7UUFBQSxxRUF1RUM7UUFuRUcsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFHMUIsY0FBUSxHQUFhLElBQUksQ0FBQTtRQUV6QixlQUFTLEdBQWEsSUFBSSxDQUFBO1FBRzFCLGNBQVEsR0FBYSxJQUFJLENBQUE7UUFFekIsYUFBTyxHQUFhLElBQUksQ0FBQTtRQUd4QixtQkFBYSxHQUFjLElBQUksQ0FBQTtRQUUvQixXQUFLLEdBQWEsSUFBSSxDQUFBO1FBRXRCLFdBQUssR0FBbUIsSUFBSSxDQUFBO1FBRTVCLFlBQU0sR0FBWSxJQUFJLENBQUE7O0lBZ0QxQixDQUFDO0lBOUNHLHVCQUFNLEdBQU4sY0FBVyxDQUFDO0lBRVosc0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsdUJBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNsRCxJQUFJLE1BQU0sR0FBRyx1QkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxD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c0VDLENBdEVtQyxFQUFFLENBQUMsU0FBUyxHQXNFL0M7a0JBdEVvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpKTWdyIGZyb20gXCIuLi8uLi9FeHBvcnRMaWJzL0V4cG9ydFV0aWxzXCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4uL0NybC9MZXZlbC9MZXZlbEJhc2VcIjtcclxuaW1wb3J0IFBsYXllckFuaSBmcm9tIFwiLi4vQ3JsL1BsYXllckFuaVwiO1xyXG5pbXBvcnQgUGxheWVyRGF0YU1nciBmcm9tIFwiLi4vTGlicy9QbGF5ZXJEYXRhTWdyXCI7XHJcbmltcG9ydCBUaW1lQ291bnRNZ3IgZnJvbSBcIi4uL0xpYnMvVGltZUNvdW50TWdyXCI7XHJcbmltcG9ydCBXeEFwaSBmcm9tIFwiLi4vTGlicy9XeEFwaVwiO1xyXG5pbXBvcnQgQWRNZ3IgZnJvbSBcIi4uL01vZC9BZE1nclwiO1xyXG5pbXBvcnQgU2hhcmVNZ3IgZnJvbSBcIi4uL01vZC9TaGFyZU1nclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBHZXRQb3dlclVJOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBvd2VyTnVtOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBvd2VyVGltZTogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZ3JhZGVOdW06IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGlwc051bTogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KFBsYXllckFuaSlcclxuICAgIE5leHRQbGF5ZXJBbmk6IFBsYXllckFuaSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGx2TnVtOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIGx2QmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbHZOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIG9uTG9hZCgpIHsgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubHZOb2RlLmFjdGl2ZSA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyTHYoKSA8IDVcclxuICAgICAgICB0aGlzLmx2TnVtLnN0cmluZyA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyTHYoKS50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5sdkJhci5wcm9ncmVzcyA9IFBsYXllckRhdGFNZ3IuZ2V0TmV4dEx2UGVyKClcclxuICAgICAgICBsZXQgbmV4dEx2ID0gUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJMdigpXHJcbiAgICAgICAgdGhpcy5OZXh0UGxheWVyQW5pLmNoYW5nZVNraW4obmV4dEx2IDw9IDQgPyBuZXh0THYgOiA0KVxyXG4gICAgICAgIFxyXG4gICAgICAgIEFkTWdyLmluc3RhbmNlLmhpZGVCYW5uZXIoKVxyXG4gICAgICAgIGlmIChXeEFwaS5pc1ZhbGlkQmFubmVyKCkgJiYgSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X21haW5fYmFubmVyX3N3aXRjaCkge1xyXG4gICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG93ZXJCdG5DQigpIHtcclxuICAgICAgICBpZiAoTGV2ZWxCYXNlLlNoYXJlLmlzR2FtZU92ZXIpIHJldHVyblxyXG4gICAgICAgIHRoaXMuR2V0UG93ZXJVSS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEJ0bkNCKCkge1xyXG4gICAgICAgIGlmIChMZXZlbEJhc2UuU2hhcmUuaXNHYW1lT3ZlcikgcmV0dXJuXHJcbiAgICAgICAgbGV0IGNiID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBMZXZlbEJhc2UuU2hhcmUud2luQ0IoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBTaGFyZU1nci5pbnN0YW5jZS5zaGFyZUdhbWUoY2IpXHJcbiAgICB9XHJcblxyXG4gICAgdGlwc0J0bkNCKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVQb3dlclRpbWUoKSB7XHJcbiAgICAgICAgbGV0IHQgPSBUaW1lQ291bnRNZ3IuU2hhcmUudENvdW50XHJcbiAgICAgICAgbGV0IG0gPSBNYXRoLmZsb29yKHQgLyA2MClcclxuICAgICAgICBsZXQgcyA9IE1hdGguZmxvb3IodCAtIG0gKiA2MClcclxuICAgICAgICB0aGlzLnBvd2VyVGltZS5zdHJpbmcgPSBtLnRvU3RyaW5nKCkgKyAnOicgKyBzLnRvU3RyaW5nKClcclxuICAgICAgICB0aGlzLnBvd2VyTnVtLnN0cmluZyA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyLnRvU3RyaW5nKClcclxuICAgICAgICB0aGlzLnBvd2VyVGltZS5ub2RlLmFjdGl2ZSA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyIDwgUGxheWVyRGF0YU1nci5wb3dlck1heFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUG93ZXJUaW1lKClcclxuICAgICAgICB0aGlzLmdyYWRlTnVtLnN0cmluZyA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlLnRvU3RyaW5nKClcclxuICAgICAgICB0aGlzLnRpcHNOdW0uc3RyaW5nID0gUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkudGlwc051bS50b1N0cmluZygpXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/FinishUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd30bbeCSLVH8azIwmyFk0IW', 'FinishUI');
// Scripts/UI/FinishUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var TimeCountMgr_1 = require("../Libs/TimeCountMgr");
var WxApi_1 = require("../Libs/WxApi");
var AdMgr_1 = require("../Mod/AdMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FinishUI = /** @class */ (function (_super) {
    __extends(FinishUI, _super);
    function FinishUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GetPowerUI = null;
        _this.GetTipsUI = null;
        _this.powerNum = null;
        _this.powerTime = null;
        _this.tipsNum = null;
        _this.gradeNum = null;
        _this.nextBtn = null;
        return _this;
    }
    FinishUI.prototype.onLoad = function () { };
    FinishUI.prototype.start = function () {
        if (PlayerDataMgr_1.default.getPlayerData().grade <= 10)
            WxApi_1.default.aldEvent('第' + PlayerDataMgr_1.default.getPlayerData().grade + '关通关成功');
        ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FINISHGAMEUI, { posY: 0 });
        AdMgr_1.default.instance.hideBanner();
        WxApi_1.default.fixBtnTouchPos(this.nextBtn, -250, 0, this);
    };
    FinishUI.prototype.backCB = function () {
        PlayerDataMgr_1.default.getPlayerData().grade++;
        if (PlayerDataMgr_1.default.getPlayerData().grade > 20)
            PlayerDataMgr_1.default.getPlayerData().grade = 1;
        PlayerDataMgr_1.default.setPlayerData();
        ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
            AdMgr_1.default.instance.hideBanner();
            ExportUtils_1.default.instance.closeAllExportUI();
            cc.director.loadScene('StartScene');
        });
    };
    FinishUI.prototype.nextCB = function () {
        if (PlayerDataMgr_1.default.getPlayerData().power > 0) {
            PlayerDataMgr_1.default.getPlayerData().grade++;
            if (PlayerDataMgr_1.default.getPlayerData().grade > 20)
                PlayerDataMgr_1.default.getPlayerData().grade = 1;
            PlayerDataMgr_1.default.changePower(-1);
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
                AdMgr_1.default.instance.hideBanner();
                ExportUtils_1.default.instance.closeAllExportUI();
                cc.director.loadScene('GameScene');
            });
        }
        else {
            this.getPowerBtnCB();
        }
    };
    FinishUI.prototype.getPowerBtnCB = function () {
        this.GetPowerUI.active = true;
    };
    FinishUI.prototype.getTipsBtnCB = function () {
        this.GetTipsUI.active = true;
    };
    FinishUI.prototype.calculatePowerTime = function () {
        var t = TimeCountMgr_1.default.Share.tCount;
        var m = Math.floor(t / 60);
        var s = Math.floor(t - m * 60);
        this.powerTime.string = m.toString() + ':' + s.toString();
        this.powerNum.string = PlayerDataMgr_1.default.getPlayerData().power.toString();
        this.powerTime.node.active = PlayerDataMgr_1.default.getPlayerData().power < PlayerDataMgr_1.default.powerMax;
    };
    FinishUI.prototype.update = function (dt) {
        this.calculatePowerTime();
        this.gradeNum.string = PlayerDataMgr_1.default.getPlayerData().grade.toString();
        this.tipsNum.string = PlayerDataMgr_1.default.getPlayerData().tipsNum.toString();
    };
    __decorate([
        property(cc.Node)
    ], FinishUI.prototype, "GetPowerUI", void 0);
    __decorate([
        property(cc.Node)
    ], FinishUI.prototype, "GetTipsUI", void 0);
    __decorate([
        property(cc.Label)
    ], FinishUI.prototype, "powerNum", void 0);
    __decorate([
        property(cc.Label)
    ], FinishUI.prototype, "powerTime", void 0);
    __decorate([
        property(cc.Label)
    ], FinishUI.prototype, "tipsNum", void 0);
    __decorate([
        property(cc.Label)
    ], FinishUI.prototype, "gradeNum", void 0);
    __decorate([
        property(cc.Node)
    ], FinishUI.prototype, "nextBtn", void 0);
    FinishUI = __decorate([
        ccclass
    ], FinishUI);
    return FinishUI;
}(cc.Component));
exports.default = FinishUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEZpbmlzaFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUFnRTtBQUNoRSx1REFBa0Q7QUFDbEQscURBQWdEO0FBQ2hELHVDQUFrQztBQUNsQyxzQ0FBaUM7QUFFM0IsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQW1GQztRQS9FRyxnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUUxQixlQUFTLEdBQVksSUFBSSxDQUFBO1FBR3pCLGNBQVEsR0FBYSxJQUFJLENBQUE7UUFFekIsZUFBUyxHQUFhLElBQUksQ0FBQTtRQUcxQixhQUFPLEdBQWEsSUFBSSxDQUFBO1FBR3hCLGNBQVEsR0FBYSxJQUFJLENBQUE7UUFHekIsYUFBTyxHQUFZLElBQUksQ0FBQTs7SUErRDNCLENBQUM7SUE3REcseUJBQU0sR0FBTixjQUFXLENBQUM7SUFFWix3QkFBSyxHQUFMO1FBRUksSUFBSSx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3pDLGVBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFBO1FBRXZFLHFCQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyx1QkFBUyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDckUsZUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUMzQixlQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksdUJB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QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUMxRSxDQUFDO0lBOUVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFuQk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtGNUI7SUFBRCxlQUFDO0NBbEZELEFBa0ZDLENBbEZxQyxFQUFFLENBQUMsU0FBUyxHQWtGakQ7a0JBbEZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpKTWdyLCB7IEV4cG9ydERpciB9IGZyb20gXCIuLi8uLi9FeHBvcnRMaWJzL0V4cG9ydFV0aWxzXCI7XHJcbmltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuaW1wb3J0IFRpbWVDb3VudE1nciBmcm9tIFwiLi4vTGlicy9UaW1lQ291bnRNZ3JcIjtcclxuaW1wb3J0IFd4QXBpIGZyb20gXCIuLi9MaWJzL1d4QXBpXCI7XHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vTW9kL0FkTWdyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmluaXNoVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR2V0UG93ZXJVSTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR2V0VGlwc1VJOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBvd2VyTnVtOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBvd2VyVGltZTogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGlwc051bTogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZ3JhZGVOdW06IGNjLkxhYmVsID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbmV4dEJ0bjogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBvbkxvYWQoKSB7IH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgaWYgKFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlIDw9IDEwKVxyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn56ysJyArIFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlICsgJ+WFs+mAmuWFs+aIkOWKnycpXHJcblxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19GSU5JU0hHQU1FVUksIHsgcG9zWTogMCB9KVxyXG4gICAgICAgIEFkTWdyLmluc3RhbmNlLmhpZGVCYW5uZXIoKVxyXG4gICAgICAgIFd4QXBpLmZpeEJ0blRvdWNoUG9zKHRoaXMubmV4dEJ0biwgLTI1MCwgMCwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICBiYWNrQ0IoKSB7XHJcbiAgICAgICAgUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkuZ3JhZGUrK1xyXG4gICAgICAgIGlmIChQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSA+IDIwKSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSA9IDFcclxuICAgICAgICBQbGF5ZXJEYXRhTWdyLnNldFBsYXllckRhdGEoKVxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19SRUNPTU1FTkRVSSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2UuY2xvc2VBbGxFeHBvcnRVSSgpXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnU3RhcnRTY2VuZScpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBuZXh0Q0IoKSB7XHJcbiAgICAgICAgaWYgKFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyID4gMCkge1xyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSsrXHJcbiAgICAgICAgICAgIGlmIChQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSA+IDIwKSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSA9IDFcclxuICAgICAgICAgICAgUGxheWVyRGF0YU1nci5jaGFuZ2VQb3dlcigtMSlcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2Uuc2hvd0V4cG9ydFVJKEV4cG9ydERpci5WSUVXX1JFQ09NTUVORFVJLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLmNsb3NlQWxsRXhwb3J0VUkoKVxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lU2NlbmUnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRQb3dlckJ0bkNCKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG93ZXJCdG5DQigpIHtcclxuICAgICAgICB0aGlzLkdldFBvd2VyVUkuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRpcHNCdG5DQigpIHtcclxuICAgICAgICB0aGlzLkdldFRpcHNVSS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlUG93ZXJUaW1lKCkge1xyXG4gICAgICAgIGxldCB0ID0gVGltZUNvdW50TWdyLlNoYXJlLnRDb3VudFxyXG4gICAgICAgIGxldCBtID0gTWF0aC5mbG9vcih0IC8gNjApXHJcbiAgICAgICAgbGV0IHMgPSBNYXRoLmZsb29yKHQgLSBtICogNjApXHJcbiAgICAgICAgdGhpcy5wb3dlclRpbWUuc3RyaW5nID0gbS50b1N0cmluZygpICsgJzonICsgcy50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5wb3dlck51bS5zdHJpbmcgPSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5wb3dlci50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5wb3dlclRpbWUubm9kZS5hY3RpdmUgPSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5wb3dlciA8IFBsYXllckRhdGFNZ3IucG93ZXJNYXhcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVBvd2VyVGltZSgpXHJcbiAgICAgICAgdGhpcy5ncmFkZU51bS5zdHJpbmcgPSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZS50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy50aXBzTnVtLnN0cmluZyA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnRpcHNOdW0udG9TdHJpbmcoKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/GetPowerUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be6f4pjXkVH75s9XxyfOpIn', 'GetPowerUI');
// Scripts/UI/GetPowerUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var ShareMgr_1 = require("../Mod/ShareMgr");
var Utility_1 = require("../Mod/Utility");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GetPowerUI = /** @class */ (function (_super) {
    __extends(GetPowerUI, _super);
    function GetPowerUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    GetPowerUI.prototype.start = function () {
    };
    GetPowerUI.prototype.onEnable = function () {
        Utility_1.default.rootAction(this.rootNode, true, 0.1);
    };
    GetPowerUI.prototype.onDisable = function () {
    };
    GetPowerUI.prototype.getPowerBtnCB = function () {
        var _this = this;
        var cb = function () {
            PlayerDataMgr_1.default.changePower(3);
            _this.closeGetPowerUI();
        };
        ShareMgr_1.default.instance.shareGame(cb);
    };
    GetPowerUI.prototype.closeGetPowerUI = function () {
        var _this = this;
        Utility_1.default.rootAction(this.rootNode, false, 0.1, function () { _this.node.active = false; });
    };
    __decorate([
        property(cc.Node)
    ], GetPowerUI.prototype, "rootNode", void 0);
    GetPowerUI = __decorate([
        ccclass
    ], GetPowerUI);
    return GetPowerUI;
}(cc.Component));
exports.default = GetPowerUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEdldFBvd2VyVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBRWxELDRDQUF1QztBQUN2QywwQ0FBcUM7QUFFL0IsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQURwRDtRQUFBLHFFQWdDQztRQTVCRyxjQUFRLEdBQVksSUFBSSxDQUFBOztRQTJCeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUExQkcsZUFBZTtJQUVmLDBCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNkJBQVEsR0FBUjtRQUNJLGlCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFRCw4QkFBUyxHQUFUO0lBQ0EsQ0FBQztJQUVELGtDQUFhLEdBQWI7UUFBQSxpQkFNQztRQUxHLElBQUksRUFBRSxHQUFHO1lBQ0wsdUJBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDNUIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQzFCLENBQUMsQ0FBQTtRQUNELGtCQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsb0NBQWUsR0FBZjtRQUFBLGlCQUVDO1FBREcsaUJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLGNBQVEsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDckYsQ0FBQztJQXpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNNO0lBSFAsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQStCOUI7SUFBRCxpQkFBQztDQS9CRCxBQStCQyxDQS9CdUMsRUFBRSxDQUFDLFNBQVMsR0ErQm5EO2tCQS9Cb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuaW1wb3J0IEFkTWdyIGZyb20gXCIuLi9Nb2QvQWRNZ3JcIjtcclxuaW1wb3J0IFNoYXJlTWdyIGZyb20gXCIuLi9Nb2QvU2hhcmVNZ3JcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uL01vZC9VdGlsaXR5XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2V0UG93ZXJVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByb290Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgVXRpbGl0eS5yb290QWN0aW9uKHRoaXMucm9vdE5vZGUsIHRydWUsIDAuMSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG93ZXJCdG5DQigpIHtcclxuICAgICAgICBsZXQgY2IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIFBsYXllckRhdGFNZ3IuY2hhbmdlUG93ZXIoMylcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUdldFBvd2VyVUkoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBTaGFyZU1nci5pbnN0YW5jZS5zaGFyZUdhbWUoY2IpXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VHZXRQb3dlclVJKCkge1xyXG4gICAgICAgIFV0aWxpdHkucm9vdEFjdGlvbih0aGlzLnJvb3ROb2RlLCBmYWxzZSwgMC4xLCAoKSA9PiB7IHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/GetFishUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7bb27NMaedArJvryinLEib4', 'GetFishUI');
// Scripts/UI/GetFishUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerAni_1 = require("../Crl/PlayerAni");
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var Utility_1 = require("../Mod/Utility");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GetFishUI = /** @class */ (function (_super) {
    __extends(GetFishUI, _super);
    function GetFishUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        _this.rootNode1 = null;
        _this.itemNode = null;
        _this.fishLvNum = null;
        _this.nameNode = null;
        _this.playerAni = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    GetFishUI.prototype.start = function () {
    };
    GetFishUI.prototype.onEnable = function () {
        Utility_1.default.rootAction(this.rootNode, true, 0.1);
        this.initItemNode();
    };
    GetFishUI.prototype.onDisable = function () {
    };
    GetFishUI.prototype.closeGetFishUI = function () {
        var _this = this;
        Utility_1.default.rootAction(this.rootNode, false, 0.1, function () { _this.node.active = false; });
    };
    GetFishUI.prototype.initItemNode = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var item = this_1.itemNode.children[i];
            var dkNode = item.getChildByName('dkNode');
            var navNode = item.getChildByName('navNode');
            dkNode.children.forEach(function (d) {
                d.active = false;
            });
            navNode.children.forEach(function (n) {
                n.active = false;
            });
            switch (i) {
                case 0:
                    if (PlayerDataMgr_1.default.getPlayerData().grade < 3) {
                        dkNode.children[2].active = true;
                        navNode.children[2].active = true;
                    }
                    else {
                        dkNode.children[0].active = true;
                        navNode.children[0].active = true;
                    }
                    break;
                case 1:
                    if (PlayerDataMgr_1.default.getPlayerData().grade >= 3 && PlayerDataMgr_1.default.getPlayerData().grade < 8) {
                        dkNode.children[2].active = true;
                        navNode.children[2].active = true;
                    }
                    else if (PlayerDataMgr_1.default.getPlayerData().grade >= 8) {
                        dkNode.children[0].active = true;
                        navNode.children[0].active = true;
                    }
                    else {
                        dkNode.children[1].active = true;
                        navNode.children[1].active = true;
                    }
                    break;
                case 2:
                    if (PlayerDataMgr_1.default.getPlayerData().grade >= 8 && PlayerDataMgr_1.default.getPlayerData().grade < 13) {
                        dkNode.children[2].active = true;
                        navNode.children[2].active = true;
                    }
                    else if (PlayerDataMgr_1.default.getPlayerData().grade >= 13) {
                        dkNode.children[0].active = true;
                        navNode.children[0].active = true;
                    }
                    else {
                        dkNode.children[1].active = true;
                        navNode.children[1].active = true;
                    }
                    break;
                case 3:
                    if (PlayerDataMgr_1.default.getPlayerData().grade >= 13 && PlayerDataMgr_1.default.getPlayerData().grade < 18) {
                        dkNode.children[2].active = true;
                        navNode.children[2].active = true;
                    }
                    else if (PlayerDataMgr_1.default.getPlayerData().grade >= 18) {
                        dkNode.children[0].active = true;
                        navNode.children[0].active = true;
                    }
                    else {
                        dkNode.children[1].active = true;
                        navNode.children[1].active = true;
                    }
                    break;
                case 4:
                    if (PlayerDataMgr_1.default.getPlayerData().grade >= 18) {
                        dkNode.children[2].active = true;
                        navNode.children[2].active = true;
                    }
                    else {
                        dkNode.children[1].active = true;
                        navNode.children[1].active = true;
                    }
                    break;
            }
            item.off(cc.Node.EventType.TOUCH_END);
            item.on(cc.Node.EventType.TOUCH_END, function () { _this.showDetail(i); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.itemNode.childrenCount; i++) {
            _loop_1(i);
        }
    };
    GetFishUI.prototype.showDetail = function (id) {
        this.rootNode.active = false;
        Utility_1.default.rootAction(this.rootNode1, true, 0.1);
        this.initFishData(id);
    };
    GetFishUI.prototype.initFishData = function (lv) {
        this.playerAni.changeSkin(lv);
        this.fishLvNum.string = (lv + 1).toString();
        for (var i = 0; i < this.nameNode.childrenCount; i++) {
            this.nameNode.children[i].active = i == lv;
        }
    };
    GetFishUI.prototype.closeDetail = function () {
        var _this = this;
        Utility_1.default.rootAction(this.rootNode1, false, 0.1, function () {
            _this.rootNode1.active = false;
            _this.rootNode.active = true;
        });
    };
    __decorate([
        property(cc.Node)
    ], GetFishUI.prototype, "rootNode", void 0);
    __decorate([
        property(cc.Node)
    ], GetFishUI.prototype, "rootNode1", void 0);
    __decorate([
        property(cc.Node)
    ], GetFishUI.prototype, "itemNode", void 0);
    __decorate([
        property(cc.Label)
    ], GetFishUI.prototype, "fishLvNum", void 0);
    __decorate([
        property(cc.Node)
    ], GetFishUI.prototype, "nameNode", void 0);
    __decorate([
        property(PlayerAni_1.default)
    ], GetFishUI.prototype, "playerAni", void 0);
    GetFishUI = __decorate([
        ccclass
    ], GetFishUI);
    return GetFishUI;
}(cc.Component));
exports.default = GetFishUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEdldEZpc2hVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUM7QUFDekMsdURBQWtEO0FBRWxELDBDQUFxQztBQUUvQixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBRG5EO1FBQUEscUVBcUlDO1FBaklHLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBSXhCLGVBQVMsR0FBYSxJQUFJLENBQUE7UUFFMUIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUd4QixlQUFTLEdBQWMsSUFBSSxDQUFBOztRQWtIM0IsaUJBQWlCO0lBQ3JCLENBQUM7SUFqSEcsZUFBZTtJQUVmLHlCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNJLGlCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzVDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBRUQsNkJBQVMsR0FBVDtJQUNBLENBQUM7SUFFRCxrQ0FBYyxHQUFkO1FBQUEsaUJBRUM7UUFERyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsY0FBUSxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNyRixDQUFDO0lBRUQsZ0NBQVksR0FBWjtRQUFBLGlCQXVFQztnQ0F0RVksQ0FBQztZQUNOLElBQUksSUFBSSxHQUFHLE9BQUssUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNwQyxJQUFJLE1BQU0s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QUFHLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDN0M7SUFDTCxDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUFBLGlCQUtDO1FBSkcsaUJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQzNDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUM3QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDL0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBOUhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNNO0lBSXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDO2dEQUNPO0lBakJWLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FvSTdCO0lBQUQsZ0JBQUM7Q0FwSUQsQUFvSUMsQ0FwSXNDLEVBQUUsQ0FBQyxTQUFTLEdBb0lsRDtrQkFwSW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyQW5pIGZyb20gXCIuLi9DcmwvUGxheWVyQW5pXCI7XHJcbmltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuaW1wb3J0IEFkTWdyIGZyb20gXCIuLi9Nb2QvQWRNZ3JcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uL01vZC9VdGlsaXR5XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2V0RmlzaFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJvb3ROb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByb290Tm9kZTE6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpdGVtTm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZmlzaEx2TnVtOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbmFtZU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KFBsYXllckFuaSlcclxuICAgIHBsYXllckFuaTogUGxheWVyQW5pID0gbnVsbFxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBVdGlsaXR5LnJvb3RBY3Rpb24odGhpcy5yb290Tm9kZSwgdHJ1ZSwgMC4xKVxyXG4gICAgICAgIHRoaXMuaW5pdEl0ZW1Ob2RlKClcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VHZXRGaXNoVUkoKSB7XHJcbiAgICAgICAgVXRpbGl0eS5yb290QWN0aW9uKHRoaXMucm9vdE5vZGUsIGZhbHNlLCAwLjEsICgpID0+IHsgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEl0ZW1Ob2RlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtTm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1Ob2RlLmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgIGxldCBka05vZGUgPSBpdGVtLmdldENoaWxkQnlOYW1lKCdka05vZGUnKVxyXG4gICAgICAgICAgICBsZXQgbmF2Tm9kZSA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ25hdk5vZGUnKVxyXG4gICAgICAgICAgICBka05vZGUuY2hpbGRyZW4uZm9yRWFjaChkID0+IHtcclxuICAgICAgICAgICAgICAgIGQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG5hdk5vZGUuY2hpbGRyZW4uZm9yRWFjaChuID0+IHtcclxuICAgICAgICAgICAgICAgIG4uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoaSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSA8IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGtOb2RlLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2Tm9kZS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGtOb2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2Tm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlID49IDMgJiYgUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkuZ3JhZGUgPCA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRrTm9kZS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdk5vZGUuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkuZ3JhZGUgPj0gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBka05vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZOb2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBka05vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZOb2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkuZ3JhZGUgPj0gOCAmJiBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSA8IDEzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRrTm9kZS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdk5vZGUuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkuZ3JhZGUgPj0gMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGtOb2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2Tm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGtOb2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2Tm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlID49IDEzICYmIFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlIDwgMTgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGtOb2RlLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2Tm9kZS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSA+PSAxOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBka05vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZOb2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBka05vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZOb2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkuZ3JhZGUgPj0gMTgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGtOb2RlLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2Tm9kZS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGtOb2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2Tm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGl0ZW0ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORClcclxuICAgICAgICAgICAgaXRlbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHsgdGhpcy5zaG93RGV0YWlsKGkpIH0sIHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZXRhaWwoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucm9vdE5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBVdGlsaXR5LnJvb3RBY3Rpb24odGhpcy5yb290Tm9kZTEsIHRydWUsIDAuMSlcclxuICAgICAgICB0aGlzLmluaXRGaXNoRGF0YShpZClcclxuICAgIH1cclxuXHJcbiAgICBpbml0RmlzaERhdGEobHY6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucGxheWVyQW5pLmNoYW5nZVNraW4obHYpXHJcbiAgICAgICAgdGhpcy5maXNoTHZOdW0uc3RyaW5nID0gKGx2ICsgMSkudG9TdHJpbmcoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uYW1lTm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lTm9kZS5jaGlsZHJlbltpXS5hY3RpdmUgPSBpID09IGx2XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlRGV0YWlsKCkge1xyXG4gICAgICAgIFV0aWxpdHkucm9vdEFjdGlvbih0aGlzLnJvb3ROb2RlMSwgZmFsc2UsIDAuMSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3ROb2RlMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnJvb3ROb2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/GetTipsUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8fde6IUoBdMG7w+SfixDloE', 'GetTipsUI');
// Scripts/UI/GetTipsUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../Mod/Utility");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GetTipsUI = /** @class */ (function (_super) {
    __extends(GetTipsUI, _super);
    function GetTipsUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    GetTipsUI.prototype.start = function () {
    };
    GetTipsUI.prototype.onEnable = function () {
        Utility_1.default.rootAction(this.rootNode, true, 0.1);
    };
    GetTipsUI.prototype.onDisable = function () {
    };
    GetTipsUI.prototype.closeGetTipsUI = function () {
        var _this = this;
        Utility_1.default.rootAction(this.rootNode, false, 0.1, function () { _this.node.active = false; });
    };
    __decorate([
        property(cc.Node)
    ], GetTipsUI.prototype, "rootNode", void 0);
    GetTipsUI = __decorate([
        ccclass
    ], GetTipsUI);
    return GetTipsUI;
}(cc.Component));
exports.default = GetTipsUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEdldFRpcHNVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBcUM7QUFFL0IsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQURuRDtRQUFBLHFFQXlCQztRQXJCRyxjQUFRLEdBQVksSUFBSSxDQUFBOztRQW9CeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFuQkcsZUFBZTtJQUVmLHlCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNJLGlCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFRCw2QkFBUyxHQUFUO0lBRUEsQ0FBQztJQUVELGtDQUFjLEdBQWQ7UUFBQSxpQkFFQztRQURHLGlCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxjQUFRLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JGLENBQUM7SUFsQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQUhQLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F3QjdCO0lBQUQsZ0JBQUM7Q0F4QkQsQUF3QkMsQ0F4QnNDLEVBQUUsQ0FBQyxTQUFTLEdBd0JsRDtrQkF4Qm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vTW9kL1V0aWxpdHlcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2V0VGlwc1VJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJvb3ROb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBVdGlsaXR5LnJvb3RBY3Rpb24odGhpcy5yb290Tm9kZSwgdHJ1ZSwgMC4xKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VHZXRUaXBzVUkoKSB7XHJcbiAgICAgICAgVXRpbGl0eS5yb290QWN0aW9uKHRoaXMucm9vdE5vZGUsIGZhbHNlLCAwLjEsICgpID0+IHsgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/GuideFinger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d16d5Wq9ZDgquKSde2W/8b', 'GuideFinger');
// Scripts/Crl/GuideFinger.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GuideFinger = /** @class */ (function (_super) {
    __extends(GuideFinger, _super);
    function GuideFinger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startPosArr = [];
        _this.endPosArr = [];
        _this.step = 0;
        return _this;
    }
    GuideFinger.prototype.onLoad = function () { };
    GuideFinger.prototype.start = function () {
    };
    GuideFinger.prototype.stepAction = function () {
        var _this = this;
        var sp = this.startPosArr[this.step];
        var ep = this.endPosArr[this.step];
        this.node.stopAllActions();
        var a1 = cc.callFunc(function () { _this.node.setPosition(sp); });
        var a2 = cc.moveTo(1.5, ep);
        var a3 = cc.sequence(a1, a2);
        this.node.runAction(cc.repeatForever(a3));
    };
    GuideFinger.prototype.update = function (dt) { };
    __decorate([
        property(cc.Vec2)
    ], GuideFinger.prototype, "startPosArr", void 0);
    __decorate([
        property(cc.Vec2)
    ], GuideFinger.prototype, "endPosArr", void 0);
    GuideFinger = __decorate([
        ccclass
    ], GuideFinger);
    return GuideFinger;
}(cc.Component));
exports.default = GuideFinger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxHdWlkZUZpbmdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBRHJEO1FBQUEscUVBMkJDO1FBdkJHLGlCQUFXLEdBQWMsRUFBRSxDQUFBO1FBRTNCLGVBQVMsR0FBYyxFQUFFLENBQUE7UUFFekIsVUFBSSxHQUFXLENBQUMsQ0FBQTs7SUFtQnBCLENBQUM7SUFqQkcsNEJBQU0sR0FBTixjQUFXLENBQUM7SUFFWiwyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFBQSxpQkFRQztRQVBHLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDMUIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFRLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDekQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDM0IsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sRUFBRSxJQUFJLENBQUM7SUF0QmQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNPO0lBTFIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTBCL0I7SUFBRCxrQkFBQztDQTFCRCxBQTBCQyxDQTFCd0MsRUFBRSxDQUFDLFNBQVMsR0EwQnBEO2tCQTFCb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpZGVGaW5nZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxyXG4gICAgc3RhcnRQb3NBcnI6IGNjLlZlYzJbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuVmVjMilcclxuICAgIGVuZFBvc0FycjogY2MuVmVjMltdID0gW11cclxuXHJcbiAgICBzdGVwOiBudW1iZXIgPSAwXHJcblxyXG4gICAgb25Mb2FkKCkgeyB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0ZXBBY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IHNwID0gdGhpcy5zdGFydFBvc0Fyclt0aGlzLnN0ZXBdXHJcbiAgICAgICAgbGV0IGVwID0gdGhpcy5lbmRQb3NBcnJbdGhpcy5zdGVwXVxyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgbGV0IGExID0gY2MuY2FsbEZ1bmMoKCkgPT4geyB0aGlzLm5vZGUuc2V0UG9zaXRpb24oc3ApIH0pXHJcbiAgICAgICAgbGV0IGEyID0gY2MubW92ZVRvKDEuNSwgZXApXHJcbiAgICAgICAgbGV0IGEzID0gY2Muc2VxdWVuY2UoYTEsIGEyKVxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihhMykpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7IH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/MadUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9f8dQB2vlLnJ9itYsKp7L5', 'MadUI');
// Scripts/UI/MadUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var WxApi_1 = require("../Libs/WxApi");
var AdMgr_1 = require("../Mod/AdMgr");
var Utility_1 = require("../Mod/Utility");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MadUI = /** @class */ (function (_super) {
    __extends(MadUI, _super);
    function MadUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.pBar = null;
        _this.lightPt = null;
        _this.gun = null;
        _this.hadShowBanner = false;
        _this.hadClick = false;
        _this.closeCallback = null;
        _this.wuchuType = 1;
        _this.sectionNum = 0;
        _this.ptIsPlaying = false;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    MadUI.prototype.start = function () {
    };
    MadUI.prototype.onEnable = function () {
    };
    MadUI.prototype.onDisable = function () {
        this.closeCallback && this.closeCallback();
        WxApi_1.default.isKillBossUI = false;
    };
    MadUI.prototype.showUI = function (closeCallback) {
        var _this = this;
        AdMgr_1.default.instance.hideBanner();
        this.closeCallback = closeCallback;
        this.node.active = true;
        this.closeBtn.active = false;
        this.sectionNum = Utility_1.default.getRandomItemInArr(WxApi_1.default.splitSection());
        var randNum = Math.random() * 100;
        if (randNum <= ExportUtils_1.default.instance.exportCfg.front_water_type_chance) {
            this.wuchuType = 1;
        }
        else {
            this.wuchuType = 2;
        }
        this.schedule(this.jianshaoBar);
        WxApi_1.default.isKillBossUI = true;
        var self = this;
        WxApi_1.default.WxOffHide(WxApi_1.default.madUICallback);
        WxApi_1.default.madUICallback = function () {
            if (WxApi_1.default.isKillBossUI) {
                self.unschedule(_this.jianshaoBar);
                self.node.active = false;
                var num = Math.floor(Math.random() * 300 + 200);
                PlayerDataMgr_1.default.changeCoin(num);
                WxApi_1.default.OpenAlert('成功领取' + num + '金币');
            }
        };
        WxApi_1.default.WxOnHide(WxApi_1.default.madUICallback);
    };
    MadUI.prototype.closeCB = function () {
        this.node.active = false;
    };
    MadUI.prototype.closeBtnCB = function () {
        this.node.active = false;
    };
    MadUI.prototype.clickCB = function () {
        var _this = this;
        if (!this.hadClick) {
            this.hadClick = true;
            this.scheduleOnce(this.closeCB, ExportUtils_1.default.instance.exportCfg.front_water_hide / 1000);
            Utility_1.default.delayActive(this.closeBtn, ExportUtils_1.default.instance.exportCfg.front_close_appear / 1000, this);
        }
        if (!this.hadShowBanner) {
            if (this.wuchuType == 1) {
                this.hadShowBanner = true;
                this.scheduleOnce(function () {
                    _this.unschedule(_this.jianshaoBar);
                    AdMgr_1.default.instance.showBanner();
                }, 1);
            }
            else {
                if (this.pBar.progress * 100 >= this.sectionNum) {
                    this.hadShowBanner = true;
                    this.unschedule(this.jianshaoBar);
                    AdMgr_1.default.instance.showBanner();
                }
            }
        }
        this.pBar.progress += 0.1;
        if (this.pBar.progress > 0.7) {
            this.pBar.progress = 0.7;
        }
        if (!this.ptIsPlaying) {
            this.gun.angle = -30;
            this.gun.stopAllActions();
            this.gun.runAction(cc.rotateTo(0.2, 0));
            this.ptIsPlaying = true;
            this.lightPt.active = true;
            this.scheduleOnce(function () {
                _this.lightPt.active = false;
                _this.ptIsPlaying = false;
            }, 0.1);
        }
    };
    MadUI.prototype.jianshaoBar = function () {
        this.pBar.progress -= 0.003;
        if (this.pBar.progress < 0) {
            this.pBar.progress = 0;
        }
    };
    __decorate([
        property(cc.Node)
    ], MadUI.prototype, "closeBtn", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], MadUI.prototype, "pBar", void 0);
    __decorate([
        property(cc.Node)
    ], MadUI.prototype, "lightPt", void 0);
    __decorate([
        property(cc.Node)
    ], MadUI.prototype, "gun", void 0);
    MadUI = __decorate([
        ccclass
    ], MadUI);
    return MadUI;
}(cc.Component));
exports.default = MadUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXE1hZFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUFpRDtBQUNqRCx1REFBa0Q7QUFDbEQsdUNBQWtDO0FBQ2xDLHNDQUFpQztBQUNqQywwQ0FBcUM7QUFFL0IsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUQvQztRQUFBLHFFQWtJQztRQTlIRyxjQUFRLEdBQVksSUFBSSxDQUFBO1FBR3hCLFVBQUksR0FBbUIsSUFBSSxDQUFBO1FBRzNCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixtQkFBYSxHQUFZLEtBQUssQ0FBQTtRQUM5QixjQUFRLEdBQVksS0FBSyxDQUFBO1FBRXpCLG1CQUFhLEdBQWEsSUFBSSxDQUFBO1FBQzlCLGVBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIsZ0JBQVUsR0FBVyxDQUFDLENBQUE7UUFFdEIsaUJBQVcsR0FBWSxLQUFLLENBQUE7O1FBNEc1QixpQkFBaUI7SUFDckIsQ0FBQztJQTNHRyxlQUFlO0lBRWYscUJBQUssR0FBTDtJQUVBLENBQUM7SUFDRCx3QkFBUSxHQUFSO0lBRUEsQ0FBQztJQUVELHlCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUMxQyxlQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQTtJQUM5QixDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFPLGFBQXdCO1FBQS9CLGlCQWlDQztRQS9CRyxlQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUN2QixJ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Q0FBQzsyQ0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3VDQUNFO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzQ0FDQztJQVhGLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FpSXpCO0lBQUQsWUFBQztDQWpJRCxBQWlJQyxDQWpJa0MsRUFBRSxDQUFDLFNBQVMsR0FpSTlDO2tCQWpJb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKSk1nciBmcm9tIFwiLi4vLi4vRXhwb3J0TGlicy9FeHBvcnRVdGlsc1wiO1xyXG5pbXBvcnQgUGxheWVyRGF0YU1nciBmcm9tIFwiLi4vTGlicy9QbGF5ZXJEYXRhTWdyXCI7XHJcbmltcG9ydCBXeEFwaSBmcm9tIFwiLi4vTGlicy9XeEFwaVwiO1xyXG5pbXBvcnQgQWRNZ3IgZnJvbSBcIi4uL01vZC9BZE1nclwiO1xyXG5pbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vTW9kL1V0aWxpdHlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWRVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjbG9zZUJ0bjogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpZ2h0UHQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGd1bjogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBoYWRTaG93QmFubmVyOiBib29sZWFuID0gZmFsc2VcclxuICAgIGhhZENsaWNrOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBjbG9zZUNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGxcclxuICAgIHd1Y2h1VHlwZTogbnVtYmVyID0gMVxyXG4gICAgc2VjdGlvbk51bTogbnVtYmVyID0gMFxyXG5cclxuICAgIHB0SXNQbGF5aW5nOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBvbkVuYWJsZSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VDYWxsYmFjayAmJiB0aGlzLmNsb3NlQ2FsbGJhY2soKVxyXG4gICAgICAgIFd4QXBpLmlzS2lsbEJvc3NVSSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1VJKGNsb3NlQ2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG5cclxuICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgPSBjbG9zZUNhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmNsb3NlQnRuLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIHRoaXMuc2VjdGlvbk51bSA9IFV0aWxpdHkuZ2V0UmFuZG9tSXRlbUluQXJyKFd4QXBpLnNwbGl0U2VjdGlvbigpKVxyXG5cclxuICAgICAgICBsZXQgcmFuZE51bTogbnVtYmVyID0gTWF0aC5yYW5kb20oKSAqIDEwMFxyXG4gICAgICAgIGlmIChyYW5kTnVtIDw9IEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF93YXRlcl90eXBlX2NoYW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLnd1Y2h1VHlwZSA9IDFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnd1Y2h1VHlwZSA9IDJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5qaWFuc2hhb0JhcilcclxuXHJcbiAgICAgICAgV3hBcGkuaXNLaWxsQm9zc1VJID0gdHJ1ZVxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xyXG5cclxuICAgICAgICBXeEFwaS5XeE9mZkhpZGUoV3hBcGkubWFkVUlDYWxsYmFjaylcclxuICAgICAgICBXeEFwaS5tYWRVSUNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoV3hBcGkuaXNLaWxsQm9zc1VJKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnVuc2NoZWR1bGUodGhpcy5qaWFuc2hhb0JhcilcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMDAgKyAyMDApXHJcbiAgICAgICAgICAgICAgICBQbGF5ZXJEYXRhTWdyLmNoYW5nZUNvaW4obnVtKVxyXG4gICAgICAgICAgICAgICAgV3hBcGkuT3BlbkFsZXJ0KCfmiJDlip/pooblj5YnICsgbnVtICsgJ+mHkeW4gScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgV3hBcGkuV3hPbkhpZGUoV3hBcGkubWFkVUlDYWxsYmFjaylcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUNCKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQnRuQ0IoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tDQigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFkQ2xpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5oYWRDbGljayA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5jbG9zZUNCLCBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfd2F0ZXJfaGlkZSAvIDEwMDApXHJcblxyXG4gICAgICAgICAgICBVdGlsaXR5LmRlbGF5QWN0aXZlKHRoaXMuY2xvc2VCdG4sIEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9jbG9zZV9hcHBlYXIgLyAxMDAwLCB0aGlzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmhhZFNob3dCYW5uZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMud3VjaHVUeXBlID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFkU2hvd0Jhbm5lciA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5qaWFuc2hhb0JhcilcclxuICAgICAgICAgICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKClcclxuICAgICAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wQmFyLnByb2dyZXNzICogMTAwID49IHRoaXMuc2VjdGlvbk51bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFkU2hvd0Jhbm5lciA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5qaWFuc2hhb0JhcilcclxuICAgICAgICAgICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBCYXIucHJvZ3Jlc3MgKz0gMC4xXHJcbiAgICAgICAgaWYgKHRoaXMucEJhci5wcm9ncmVzcyA+IDAuNykge1xyXG4gICAgICAgICAgICB0aGlzLnBCYXIucHJvZ3Jlc3MgPSAwLjdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wdElzUGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLmd1bi5hbmdsZSA9IC0zMFxyXG4gICAgICAgICAgICB0aGlzLmd1bi5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgICAgIHRoaXMuZ3VuLnJ1bkFjdGlvbihjYy5yb3RhdGVUbygwLjIsIDApKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wdElzUGxheWluZyA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5saWdodFB0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saWdodFB0LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnB0SXNQbGF5aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgfSwgMC4xKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBqaWFuc2hhb0JhcigpIHtcclxuICAgICAgICB0aGlzLnBCYXIucHJvZ3Jlc3MgLT0gMC4wMDNcclxuICAgICAgICBpZiAodGhpcy5wQmFyLnByb2dyZXNzIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnBCYXIucHJvZ3Jlc3MgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/LoadingUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42c8fUg6hhEcLJMTeLa+i1R', 'LoadingUI');
// Scripts/UI/LoadingUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var WxApi_1 = require("../Libs/WxApi");
var ShareMgr_1 = require("../Mod/ShareMgr");
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pBar = null;
        return _this;
        // update (dt) {}
    }
    LoadingUI.prototype.onLoad = function () {
        //localStorage.clear()
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
        //cc.director.getPhysicsManager().debugDrawFlags = 1
        cc.find('ExportNode').zIndex = 999;
        cc.game.addPersistRootNode(cc.find('ExportNode'));
        //AdMgr.instance.initAd()
        WxApi_1.default.WxOnHide(function () {
            localStorage.setItem('lastDate', new Date().getDate().toString());
            localStorage.setItem('front_share_number', WxApi_1.default.front_share_number.toString());
        });
    };
    LoadingUI.prototype.start = function () {
        var _this = this;
        WxApi_1.default.aldEvent('进入游戏加载页的人数');
        ExportUtils_1.default.instance.initJJ(WxApi_1.default.version, function () {
            ShareMgr_1.default.instance.initShare();
            PlayerDataMgr_1.default.powerMax = ExportUtils_1.default.instance.exportCfg.front_energy_value;
            PlayerDataMgr_1.default.getPlayerData();
            WxApi_1.default.calculateShareNumber();
            //获取场景值
            if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                WxApi_1.default.sceneId = WxApi_1.default.GetLaunchPassVar().scene;
                console.log('sceneId:', WxApi_1.default.sceneId);
            }
            var self = _this;
            if (!CC_WECHATGAME) {
                cc.director.preloadScene('StartScene', function (completeCount, totalCount) {
                    self.pBar.progress = completeCount / totalCount;
                }, function () {
                    WxApi_1.default.aldEvent('成功加载进入游戏内人数');
                    cc.director.loadScene('StartScene');
                });
            }
            else {
                cc.loader.downloader.loadSubpackage('Texture', function (err) {
                    if (err) {
                        return console.error(err);
                    }
                    cc.director.preloadScene('StartScene', function (completeCount, totalCount) {
                        self.pBar.progress = completeCount / totalCount;
                    }, function () {
                        WxApi_1.default.aldEvent('成功加载进入游戏内人数');
                        cc.director.loadScene('StartScene');
                    });
                    console.log('load subpackage successfully.');
                });
            }
            // SoundMgr.Share.loadSounds(() => {
            //     cc.director.preloadScene('StartScene', (completeCount: number, totalCount: number) => {
            //         this.pBar.progress = completeCount / totalCount
            //     }, () => {
            //         WxApi.aldEvent('成功加载进入游戏内人数')
            //         cc.director.loadScene('StartScene')
            //     })
            // })
        });
    };
    __decorate([
        property(cc.ProgressBar)
    ], LoadingUI.prototype, "pBar", void 0);
    LoadingUI = __decorate([
        ccclass
    ], LoadingUI);
    return LoadingUI;
}(cc.Component));
exports.default = LoadingUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXExvYWRpbmdVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFFbEMsNENBQXVDO0FBR3ZDLHVEQUFrRDtBQUNsRCw0REFBaUQ7QUFHM0MsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQURuRDtRQUFBLHFFQXFFQztRQWpFRyxVQUFJLEdBQW1CLElBQUksQ0FBQTs7UUFnRTNCLGlCQUFpQjtJQUNyQixDQUFDO0lBL0RHLDBCQUFNLEdBQU47UUFDSSxzQkFBc0I7UUFDdEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFDaEQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFDOUMsb0RBQW9EO1FBQ3BELEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtRQUNsQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtRQUVqRCx5QkFBeUI7UUFFekIsZUFBSyxDQUFDLFFBQVEsQ0FBQztZQUNYLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtZQUNqRSxZQUFZLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLGVBQUssQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQ25GLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFBQSxpQkE0Q0M7UUEzQ0csZUFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM1QixxQkFBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsZUFBSyxDQUFDLE9BQU8sRUFBRTtZQUNqQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUM3Qix1QkFBYSxDQUFDLFFBQVEsR0FBRyxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUE7WUFDcEUsdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtZQUM3QixlQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtZQUM1QixPQUFPO1lBQ1AsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtnQkFDeEMsZUFBSyxDQUFDLE9BQU8sR0FBRyxlQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxLQUFLLENBQUE7Z0JBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGVBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUN6QztZQUVELElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQTtZQUNmLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ2hCLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxVQUFDLGFBQXFCLEVBQUUsVUFBa0I7b0JBQzdFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsR0FBRyxVQUFVLENBQUE7Z0JBQ25ELENBQUMsRUFBRTtvQkFDQyxlQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFBO29CQUM3QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtnQkFDdkMsQ0FBQyxDQUFDLENBQUE7YUFDTDtpQkFBTTtnQkFDSCxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRztvQkFDL0MsSUFBSSxHQUFHLEVBQUU7d0JBQ0wsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUM3QjtvQkFDRCxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsVUFBQyxhQUFxQixFQUFFLFVBQWtCO3dCQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLEdBQUcsVUFBVSxDQUFBO29CQUNuRCxDQUFDLEVBQUU7d0JBQ0MsZUFBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQTt3QkFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUE7b0JBQ3ZDLENBQUMsQ0FBQyxDQUFBO29CQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUNELG9DQUFvQztZQUNwQyw4RkFBOEY7WUFDOUYsMERBQTBEO1lBQzFELGlCQUFpQjtZQUNqQix3Q0FBd0M7WUFDeEMsOENBQThDO1lBQzlDLFNBQVM7WUFDVCxLQUFLO1FBQ1QsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBOUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ0U7SUFIVixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBb0U3QjtJQUFELGdCQUFDO0NBcEVELEFBb0VDLENBcEVzQyxFQUFFLENBQUMsU0FBUyxHQW9FbEQ7a0JBcEVvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFd4QXBpIGZyb20gXCIuLi9MaWJzL1d4QXBpXCI7XHJcbmltcG9ydCBIdHRwTWdyIGZyb20gXCIuLi9Nb2QvSHR0cE1nclwiO1xyXG5pbXBvcnQgU2hhcmVNZ3IgZnJvbSBcIi4uL01vZC9TaGFyZU1nclwiO1xyXG5pbXBvcnQgQWRNZ3IgZnJvbSBcIi4uL01vZC9BZE1nclwiO1xyXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL01vZC9Tb3VuZE1nclwiO1xyXG5pbXBvcnQgUGxheWVyRGF0YU1nciBmcm9tIFwiLi4vTGlicy9QbGF5ZXJEYXRhTWdyXCI7XHJcbmltcG9ydCBKSk1nciBmcm9tIFwiLi4vLi4vRXhwb3J0TGlicy9FeHBvcnRVdGlsc1wiO1xyXG5pbXBvcnQgVGltZUNvdW50TWdyIGZyb20gXCIuLi9MaWJzL1RpbWVDb3VudE1nclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgcEJhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vbG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgLy9jYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gMVxyXG4gICAgICAgIGNjLmZpbmQoJ0V4cG9ydE5vZGUnKS56SW5kZXggPSA5OTlcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZShjYy5maW5kKCdFeHBvcnROb2RlJykpXHJcblxyXG4gICAgICAgIC8vQWRNZ3IuaW5zdGFuY2UuaW5pdEFkKClcclxuXHJcbiAgICAgICAgV3hBcGkuV3hPbkhpZGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFzdERhdGUnLCBuZXcgRGF0ZSgpLmdldERhdGUoKS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZnJvbnRfc2hhcmVfbnVtYmVyJywgV3hBcGkuZnJvbnRfc2hhcmVfbnVtYmVyLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBXeEFwaS5hbGRFdmVudCgn6L+b5YWl5ri45oiP5Yqg6L296aG155qE5Lq65pWwJylcclxuICAgICAgICBKSk1nci5pbnN0YW5jZS5pbml0SkooV3hBcGkudmVyc2lvbiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBTaGFyZU1nci5pbnN0YW5jZS5pbml0U2hhcmUoKVxyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhTWdyLnBvd2VyTWF4ID0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X2VuZXJneV92YWx1ZVxyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKVxyXG4gICAgICAgICAgICBXeEFwaS5jYWxjdWxhdGVTaGFyZU51bWJlcigpXHJcbiAgICAgICAgICAgIC8v6I635Y+W5Zy65pmv5YC8XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgV3hBcGkuc2NlbmVJZCA9IFd4QXBpLkdldExhdW5jaFBhc3NWYXIoKS5zY2VuZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NjZW5lSWQ6JywgV3hBcGkuc2NlbmVJZClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgICAgICAgIGlmICghQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdTdGFydFNjZW5lJywgKGNvbXBsZXRlQ291bnQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wQmFyLnByb2dyZXNzID0gY29tcGxldGVDb3VudCAvIHRvdGFsQ291bnRcclxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn5oiQ5Yqf5Yqg6L296L+b5YWl5ri45oiP5YaF5Lq65pWwJylcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1N0YXJ0U2NlbmUnKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5kb3dubG9hZGVyLmxvYWRTdWJwYWNrYWdlKCdUZXh0dXJlJywgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdTdGFydFNjZW5lJywgKGNvbXBsZXRlQ291bnQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucEJhci5wcm9ncmVzcyA9IGNvbXBsZXRlQ291bnQgLyB0b3RhbENvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn5oiQ5Yqf5Yqg6L296L+b5YWl5ri45oiP5YaF5Lq65pWwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTdGFydFNjZW5lJylcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkIHN1YnBhY2thZ2Ugc3VjY2Vzc2Z1bGx5LicpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU291bmRNZ3IuU2hhcmUubG9hZFNvdW5kcygoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ1N0YXJ0U2NlbmUnLCAoY29tcGxldGVDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnBCYXIucHJvZ3Jlc3MgPSBjb21wbGV0ZUNvdW50IC8gdG90YWxDb3VudFxyXG4gICAgICAgICAgICAvLyAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIFd4QXBpLmFsZEV2ZW50KCfmiJDlip/liqDovb3ov5vlhaXmuLjmiI/lhoXkurrmlbAnKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnU3RhcnRTY2VuZScpXHJcbiAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/WeChatUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41e53a5Wv1KTp5KIBsXoHlf', 'WeChatUI');
// Scripts/UI/WeChatUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../Mod/Utility");
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var WxApi_1 = require("../Libs/WxApi");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WeChatUI = /** @class */ (function (_super) {
    __extends(WeChatUI, _super);
    function WeChatUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        _this.playerName = null;
        _this.gameName = null;
        _this.playerNames = ["有个小可爱", "大妈杀手", "神秘靓仔", "超级飞侠乐迪", "几一鸡", "爱喝可乐", "卖葫芦的葫芦娃", "多啦ABCD梦", "坏女孩", "沙雕网友"];
        _this.gameIndex = 0;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    WeChatUI.prototype.start = function () {
    };
    WeChatUI.prototype.showUI = function (callback, param) {
        this.node.active = true;
        WxApi_1.default.aldEvent('好友消息提示横幅出现次数');
    };
    WeChatUI.prototype.onEnable = function () {
        this.rootNode.runAction(cc.moveBy(0.5, cc.v2(0, -200)));
        this.initData();
    };
    WeChatUI.prototype.onDisable = function () {
        this.rootNode.y = cc.view.getVisibleSize().height / 2;
    };
    WeChatUI.prototype.initData = function () {
        var _this = this;
        var nArr = [].concat(this.playerNames);
        nArr = Utility_1.default.shuffleArr(nArr);
        this.playerName.string = nArr[0];
        this.gameName.string = ExportUtils_1.default.instance.navigateAppArr[this.gameIndex].title;
        var id = this.gameIndex;
        this.rootNode.off(cc.Node.EventType.TOUCH_END);
        this.rootNode.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, id); }, this);
        this.gameIndex++;
        if (this.gameIndex >= 6) {
            this.gameIndex = 0;
        }
    };
    WeChatUI.prototype.navCB = function (event, id) {
        var _this = this;
        console.log('click id:', id);
        WxApi_1.default.aldEvent('好友消息提示横幅-总点击数');
        this.node.active = false;
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            _this.scheduleOnce(function () { _this.node.active = true; }, 1);
        }, function () {
            WxApi_1.default.aldEvent('好友消息提示横幅-总成功跳转数');
        });
    };
    __decorate([
        property(cc.Node)
    ], WeChatUI.prototype, "rootNode", void 0);
    __decorate([
        property(cc.Label)
    ], WeChatUI.prototype, "playerName", void 0);
    __decorate([
        property(cc.Label)
    ], WeChatUI.prototype, "gameName", void 0);
    WeChatUI = __decorate([
        ccclass
    ], WeChatUI);
    return WeChatUI;
}(cc.Component));
exports.default = WeChatUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFdlQ2hhdFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUFxQztBQUNyQyw0REFBaUQ7QUFDakQsdUNBQWtDO0FBRTVCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUErREM7UUEzREcsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixnQkFBVSxHQUFhLElBQUksQ0FBQTtRQUUzQixjQUFRLEdBQWEsSUFBSSxDQUFBO1FBRXpCLGlCQUFXLEdBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVoSCxlQUFTLEdBQVcsQ0FBQyxDQUFBOztRQWtEckIsaUJBQWlCO0lBQ3JCLENBQUM7SUFqREcsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLFFBQW1CLEVBQUUsS0FBVztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDdkIsZUFBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUFBLGlCQWVDO1FBZEcsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDdEMsSUFBSSxHQUFHLGlCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUVoQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUUxRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQUssSUFBTyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUV6RixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDaEIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtTQUNyQjtJQUNMLENBQUM7SUFFRCx3QkFBSyxHQUFMLFVBQU0sS0FBSyxFQUFFLEVBQUU7UUFBZixpQkFTQztRQVJHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQzVCLGVBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ3hCLHFCQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFRLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMzRCxDQUFDLEVBQUU7WUFDQyxlQUFLLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDckMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBeEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNNO0lBUFIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThENUI7SUFBRCxlQUFDO0NBOURELEFBOERDLENBOURxQyxFQUFFLENBQUMsU0FBUyxHQThEakQ7a0JBOURvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uL01vZC9VdGlsaXR5XCI7XHJcbmltcG9ydCBKSk1nciBmcm9tIFwiLi4vLi4vRXhwb3J0TGlicy9FeHBvcnRVdGlsc1wiO1xyXG5pbXBvcnQgV3hBcGkgZnJvbSBcIi4uL0xpYnMvV3hBcGlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZUNoYXRVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByb290Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBsYXllck5hbWU6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZ2FtZU5hbWU6IGNjLkxhYmVsID0gbnVsbFxyXG5cclxuICAgIHBsYXllck5hbWVzOiBzdHJpbmdbXSA9IFtcIuacieS4quWwj+WPr+eIsVwiLCBcIuWkp+WmiOadgOaJi1wiLCBcIuelnuenmOmdk+S7lFwiLCBcIui2hee6p+mjnuS+oOS5kOi/qlwiLCBcIuWHoOS4gOm4oVwiLCBcIueIseWWneWPr+S5kFwiLCBcIuWNluiRq+iKpueahOiRq+iKpuWog1wiLCBcIuWkmuWVpkFCQ0TmoqZcIiwgXCLlnY/lpbPlralcIiwgXCLmspnpm5XnvZHlj4tcIl07XHJcblxyXG4gICAgZ2FtZUluZGV4OiBudW1iZXIgPSAwXHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3dVSShjYWxsYmFjaz86IEZ1bmN0aW9uLCBwYXJhbT86IGFueSkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+WlveWPi+a2iOaBr+aPkOekuuaoquW5heWHuueOsOasoeaVsCcpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yb290Tm9kZS5ydW5BY3Rpb24oY2MubW92ZUJ5KDAuNSwgY2MudjIoMCwgLTIwMCkpKVxyXG4gICAgICAgIHRoaXMuaW5pdERhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJvb3ROb2RlLnkgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCkuaGVpZ2h0IC8gMlxyXG4gICAgfVxyXG5cclxuICAgIGluaXREYXRhKCkge1xyXG4gICAgICAgIGxldCBuQXJyID0gW10uY29uY2F0KHRoaXMucGxheWVyTmFtZXMpXHJcbiAgICAgICAgbkFyciA9IFV0aWxpdHkuc2h1ZmZsZUFycihuQXJyKVxyXG4gICAgICAgIHRoaXMucGxheWVyTmFtZS5zdHJpbmcgPSBuQXJyWzBdXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZU5hbWUuc3RyaW5nID0gSkpNZ3IuaW5zdGFuY2UubmF2aWdhdGVBcHBBcnJbdGhpcy5nYW1lSW5kZXhdLnRpdGxlXHJcblxyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuZ2FtZUluZGV4XHJcbiAgICAgICAgdGhpcy5yb290Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKVxyXG4gICAgICAgIHRoaXMucm9vdE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHsgdGhpcy5uYXZDQihldmVudCwgaWQpIH0sIHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUluZGV4KytcclxuICAgICAgICBpZiAodGhpcy5nYW1lSW5kZXggPj0gNikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbmRleCA9IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmF2Q0IoZXZlbnQsIGlkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrIGlkOicsIGlkKVxyXG4gICAgICAgIFd4QXBpLmFsZEV2ZW50KCflpb3lj4vmtojmga/mj5DnpLrmqKrluYUt5oC754K55Ye75pWwJylcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBKSk1nci5pbnN0YW5jZS5OYXZpZ2F0ZUFwcChpZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlIH0sIDEpXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn5aW95Y+L5raI5oGv5o+Q56S65qiq5bmFLeaAu+aIkOWKn+i3s+i9rOaVsCcpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/DefeatUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a25f1j+vOhC2Ztq68OT4qOh', 'DefeatUI');
// Scripts/UI/DefeatUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var TimeCountMgr_1 = require("../Libs/TimeCountMgr");
var WxApi_1 = require("../Libs/WxApi");
var AdMgr_1 = require("../Mod/AdMgr");
var ShareMgr_1 = require("../Mod/ShareMgr");
var Utility_1 = require("../Mod/Utility");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DefeatUI = /** @class */ (function (_super) {
    __extends(DefeatUI, _super);
    function DefeatUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GetPowerUI = null;
        _this.GetTipsUI = null;
        _this.powerNum = null;
        _this.powerTime = null;
        _this.tipsNum = null;
        _this.gradeNum = null;
        _this.rootNode = null;
        _this.closeBtn = null;
        _this.reviveTime = null;
        _this.timeNum = 5;
        return _this;
    }
    // onLoad () {}
    DefeatUI.prototype.start = function () {
        if (PlayerDataMgr_1.default.getPlayerData().grade <= 10)
            WxApi_1.default.aldEvent('第' + PlayerDataMgr_1.default.getPlayerData().grade + '关通关失败');
        Utility_1.default.rootAction(this.rootNode, true, 0.1);
        this.schedule(this.countTime, 1, 4);
        ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FINISHGAMEUI, { posY: 200, one: true });
        AdMgr_1.default.instance.hideBanner();
        WxApi_1.default.fixBtnTouchPos(this.closeBtn, -550, -350, this);
    };
    DefeatUI.prototype.countTime = function () {
        this.timeNum--;
        this.reviveTime.string = this.timeNum.toString();
        if (this.timeNum <= 0) {
            //this.closeBtnCB()
        }
    };
    DefeatUI.prototype.reviveBtnCB = function () {
        var cb = function () {
            PlayerDataMgr_1.default.changePower(2);
            AdMgr_1.default.instance.hideBanner();
            ExportUtils_1.default.instance.closeAllExportUI();
            cc.director.loadScene('GameScene');
        };
        ShareMgr_1.default.instance.shareGame(cb);
    };
    DefeatUI.prototype.closeBtnCB = function () {
        Utility_1.default.rootAction(this.rootNode, false, 0.1, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
                AdMgr_1.default.instance.hideBanner();
                ExportUtils_1.default.instance.closeAllExportUI();
                cc.director.loadScene('StartScene');
            });
        });
    };
    DefeatUI.prototype.getPowerBtnCB = function () {
        this.GetPowerUI.active = true;
    };
    DefeatUI.prototype.getTipsBtnCB = function () {
        this.GetTipsUI.active = true;
    };
    DefeatUI.prototype.calculatePowerTime = function () {
        var t = TimeCountMgr_1.default.Share.tCount;
        var m = Math.floor(t / 60);
        var s = Math.floor(t - m * 60);
        this.powerTime.string = m.toString() + ':' + s.toString();
        this.powerNum.string = PlayerDataMgr_1.default.getPlayerData().power.toString();
        this.powerTime.node.active = PlayerDataMgr_1.default.getPlayerData().power < PlayerDataMgr_1.default.powerMax;
    };
    DefeatUI.prototype.update = function (dt) {
        this.calculatePowerTime();
        this.gradeNum.string = PlayerDataMgr_1.default.getPlayerData().grade.toString();
        this.tipsNum.string = PlayerDataMgr_1.default.getPlayerData().tipsNum.toString();
    };
    __decorate([
        property(cc.Node)
    ], DefeatUI.prototype, "GetPowerUI", void 0);
    __decorate([
        property(cc.Node)
    ], DefeatUI.prototype, "GetTipsUI", void 0);
    __decorate([
        property(cc.Label)
    ], DefeatUI.prototype, "powerNum", void 0);
    __decorate([
        property(cc.Label)
    ], DefeatUI.prototype, "powerTime", void 0);
    __decorate([
        property(cc.Label)
    ], DefeatUI.prototype, "tipsNum", void 0);
    __decorate([
        property(cc.Label)
    ], DefeatUI.prototype, "gradeNum", void 0);
    __decorate([
        property(cc.Node)
    ], DefeatUI.prototype, "rootNode", void 0);
    __decorate([
        property(cc.Node)
    ], DefeatUI.prototype, "closeBtn", void 0);
    __decorate([
        property(cc.Label)
    ], DefeatUI.prototype, "reviveTime", void 0);
    DefeatUI = __decorate([
        ccclass
    ], DefeatUI);
    return DefeatUI;
}(cc.Component));
exports.default = DefeatUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXERlZmVhdFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUFnRTtBQUNoRSx1REFBa0Q7QUFDbEQscURBQWdEO0FBQ2hELHVDQUFrQztBQUNsQyxzQ0FBaUM7QUFDakMsNENBQXVDO0FBQ3ZDLDBDQUFxQztBQUUvQixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBMkZDO1FBeEZHLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFHekIsY0FBUSxHQUFhLElBQUksQ0FBQTtRQUV6QixlQUFTLEdBQWEsSUFBSSxDQUFBO1FBRzFCLGFBQU8sR0FBYSxJQUFJLENBQUE7UUFHeEIsY0FBUSxHQUFhLElBQUksQ0FBQTtRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBRXhCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFHeEIsZ0JBQVUsR0FBYSxJQUFJLENBQUE7UUFDM0IsYUFBTyxHQUFXLENBQUMsQ0FBQTs7SUFrRXZCLENBQUM7SUFoRUcsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDekMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUE7UUFDdkUsaUJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFFNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUVuQyxxQkFBSyxDQUFDLFFBQVEsQ0FB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QUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3JFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzFFLENBQUM7SUF2RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ1E7SUF2QlYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBGNUI7SUFBRCxlQUFDO0NBMUZELEFBMEZDLENBMUZxQyxFQUFFLENBQUMsU0FBUyxHQTBGakQ7a0JBMUZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpKTWdyLCB7IEV4cG9ydERpciB9IGZyb20gXCIuLi8uLi9FeHBvcnRMaWJzL0V4cG9ydFV0aWxzXCI7XHJcbmltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuaW1wb3J0IFRpbWVDb3VudE1nciBmcm9tIFwiLi4vTGlicy9UaW1lQ291bnRNZ3JcIjtcclxuaW1wb3J0IFd4QXBpIGZyb20gXCIuLi9MaWJzL1d4QXBpXCI7XHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vTW9kL0FkTWdyXCI7XHJcbmltcG9ydCBTaGFyZU1nciBmcm9tIFwiLi4vTW9kL1NoYXJlTWdyXCI7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi9Nb2QvVXRpbGl0eVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmVhdFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR2V0UG93ZXJVSTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR2V0VGlwc1VJOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBvd2VyTnVtOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBvd2VyVGltZTogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGlwc051bTogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZ3JhZGVOdW06IGNjLkxhYmVsID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcm9vdE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNsb3NlQnRuOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHJldml2ZVRpbWU6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgdGltZU51bTogbnVtYmVyID0gNVxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmIChQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSA8PSAxMClcclxuICAgICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+esrCcgKyBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSArICflhbPpgJrlhbPlpLHotKUnKVxyXG4gICAgICAgIFV0aWxpdHkucm9vdEFjdGlvbih0aGlzLnJvb3ROb2RlLCB0cnVlLCAwLjEpXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5jb3VudFRpbWUsIDEsIDQpXHJcblxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19GSU5JU0hHQU1FVUksIHsgcG9zWTogMjAwLCBvbmU6IHRydWUgfSlcclxuICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICBXeEFwaS5maXhCdG5Ub3VjaFBvcyh0aGlzLmNsb3NlQnRuLCAtNTUwLCAtMzUwLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvdW50VGltZSgpIHtcclxuICAgICAgICB0aGlzLnRpbWVOdW0tLVxyXG4gICAgICAgIHRoaXMucmV2aXZlVGltZS5zdHJpbmcgPSB0aGlzLnRpbWVOdW0udG9TdHJpbmcoKVxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVOdW0gPD0gMCkge1xyXG4gICAgICAgICAgICAvL3RoaXMuY2xvc2VCdG5DQigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldml2ZUJ0bkNCKCkge1xyXG4gICAgICAgIGxldCBjYiA9ICgpID0+IHtcclxuICAgICAgICAgICAgUGxheWVyRGF0YU1nci5jaGFuZ2VQb3dlcigyKVxyXG4gICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2UuY2xvc2VBbGxFeHBvcnRVSSgpXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZVNjZW5lJylcclxuICAgICAgICB9XHJcbiAgICAgICAgU2hhcmVNZ3IuaW5zdGFuY2Uuc2hhcmVHYW1lKGNiKVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQnRuQ0IoKSB7XHJcbiAgICAgICAgVXRpbGl0eS5yb290QWN0aW9uKHRoaXMucm9vdE5vZGUsIGZhbHNlLCAwLjEsICgpID0+IHtcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2Uuc2hvd0V4cG9ydFVJKEV4cG9ydERpci5WSUVXX1JFQ09NTUVORFVJLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLmNsb3NlQWxsRXhwb3J0VUkoKVxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTdGFydFNjZW5lJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBvd2VyQnRuQ0IoKSB7XHJcbiAgICAgICAgdGhpcy5HZXRQb3dlclVJLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaXBzQnRuQ0IoKSB7XHJcbiAgICAgICAgdGhpcy5HZXRUaXBzVUkuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVBvd2VyVGltZSgpIHtcclxuICAgICAgICBsZXQgdCA9IFRpbWVDb3VudE1nci5TaGFyZS50Q291bnRcclxuICAgICAgICBsZXQgbSA9IE1hdGguZmxvb3IodCAvIDYwKVxyXG4gICAgICAgIGxldCBzID0gTWF0aC5mbG9vcih0IC0gbSAqIDYwKVxyXG4gICAgICAgIHRoaXMucG93ZXJUaW1lLnN0cmluZyA9IG0udG9TdHJpbmcoKSArICc6JyArIHMudG9TdHJpbmcoKVxyXG4gICAgICAgIHRoaXMucG93ZXJOdW0uc3RyaW5nID0gUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkucG93ZXIudG9TdHJpbmcoKVxyXG4gICAgICAgIHRoaXMucG93ZXJUaW1lLm5vZGUuYWN0aXZlID0gUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkucG93ZXIgPCBQbGF5ZXJEYXRhTWdyLnBvd2VyTWF4XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQb3dlclRpbWUoKVxyXG4gICAgICAgIHRoaXMuZ3JhZGVOdW0uc3RyaW5nID0gUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkuZ3JhZGUudG9TdHJpbmcoKVxyXG4gICAgICAgIHRoaXMudGlwc051bS5zdHJpbmcgPSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS50aXBzTnVtLnRvU3RyaW5nKClcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
                        this.WaterSwitch.children[0].active = this.getNeedleCrlById(2).switchState > 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtDQUE2QjtBQUM3Qix5Q0FBb0M7QUFFOUIsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFxQywyQkFBUztJQUQ5QztRQUFBLHFFQTRHQztRQXpHRyxnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUcxQixjQUFRLEdBQVksSUFBSSxDQUFBO1FBQ3hCLGlCQUFXLEdBQVUsSUFBSSxDQUFBO1FBR3pCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixpQkFBVyxHQUFZLEtBQUssQ0FBQTs7SUE4RmhDLENBQUM7SUE1RkcsMEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUE7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVLLDBCQUFRLEdBQWQ7Ozs7Ozs7d0JBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFBO3dCQUU5RSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTs0QkFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7NEJBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxD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Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hhcnAgZnJvbSBcIi4uL1NoYXJwXCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwxMiBleHRlbmRzIExldmVsQmFzZSB7XHJcblxyXG4gICAgTWFpbkNhbWVyYTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFNoYXJwUmVkOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgU2hhcnBSZWRDcmw6IFNoYXJwID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRWxlY3RyaWM6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEVsZWN0cmljMTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBnYW1lU3RhcnRlZDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5NYWluQ2FtZXJhID0gY2MuZmluZCgnQ2FudmFzL01haW4gQ2FtZXJhJylcclxuICAgICAgICB0aGlzLlNoYXJwUmVkQ3JsID0gdGhpcy5TaGFycFJlZC5nZXRDb21wb25lbnQoU2hhcnApXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUNCKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZUNCKCkge1xyXG4gICAgICAgIHRoaXMuV2F0ZXJTd2l0Y2guY2hpbGRyZW5bMF0uYWN0aXZlID0gdGhpcy5nZXROZWVkbGVDcmxCeUlkKDIpLnN3aXRjaFN0YXRlID4gMFxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGxldCBhMSA9IGNjLm1vdmVCeSg1LCBjYy52Mig3NTAgKiAyLCAwKSlcclxuICAgICAgICAgICAgbGV0IGEyID0gY2MubW92ZUJ5KDUsIGNjLnYyKC03NTAgKiAyLCAwKSlcclxuICAgICAgICAgICAgbGV0IGEzID0gY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IHNxID0gY2Muc2VxdWVuY2UoYTEsIGEyLCBhMylcclxuICAgICAgICAgICAgdGhpcy5NYWluQ2FtZXJhLnJ1bkFjdGlvbihzcSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5TaGFycENybC5pc01vdmluZyAmJiB0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMiAmJiB0aGlzLmdldE5lZWRsZUNybEJ5SWQoMikuc3dpdGNoU3RhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDQpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5TaGFycFJlZENybC5pc01vdmluZyAmJiB0aGlzLlNoYXJwUmVkQ3JsLnBvaW50SW5kZXggPT0gMyAmJiB0aGlzLmdldE5lZWRsZUNybEJ5SWQoMikuc3dpdGNoU3RhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwUmVkQ3JsLm1vdmVUb1BvaW50KDUpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHRyaWdnZXIwMCgpIHtcclxuICAgICAgICBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDEpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDApXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gNCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXROZWVkbGVDcmxCeUlkKDIpLnN3aXRjaFN0YXRlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNilcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDQpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk1haW5DYW1lcmEucnVuQWN0aW9uKGNjLm1vdmVCeSgyLCBjYy52Mig3NTAsIDApKSlcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDYpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg3KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIxMCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIyMCgpIHtcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjMwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLkVsZWN0cmljLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuTWFpbkNhbWVyYS5ydW5BY3Rpb24oY2MubW92ZUJ5KDEsIGNjLnYyKDc1MCwgMCkpKVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg4KVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXI0MCgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuRWxlY3RyaWMuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXI1MCgpIHtcclxuICAgICAgICBpZiAodGhpcy5FbGVjdHJpYzEuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvc2VDQigpXHJcbiAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoOSlcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMTApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjYwKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5FbGVjdHJpYzEuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxMC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQyxtREFBOEM7QUFDOUMsbURBQThDO0FBQzlDLDZDQUF3QztBQUVsQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFTO0lBRDlDO1FBQUEscUVBeUlDO1FBcklHLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRTVCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFHekIsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0IsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0Isb0JBQWMsR0FBZ0IsSUFBSSxDQUFBO1FBQ2xDLG9CQUFjLEdBQWdCLElBQUksQ0FBQTs7SUEySHRDLENBQUM7SUF6SEcsMEJBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUE7UUFDaEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUE7UUFFaEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsY0FBUSxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsY0FBUSxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUE7UUFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsVUFBQyxHQUFHLElBQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQTtJQUNoRSxDQUFDO0lBRUssMEJBQVEsR0FBZDs7Ozs7O3dCQUVJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQTt3QkFDbEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFBO3dCQUUvRSxJQUFJLElBQUksQ0FBQyxVQUFVOzRCQUFFLHNCQUFNO3dCQUMzQixLQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUMvQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7NEJBQ2xDLElBQUksaUJBQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO2dDQUNqRixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUE7Z0NBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFO29DQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQ0FDL0I7Z0NBQ0QsTUFBSzs2QkFDUjt5QkFDSjt3QkFDRCxLQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUMvQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7NEJBQ2xDLElBQUksaUJBQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO2dDQUMzRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUE7Z0NBQzVCLE1BQUs7NkJBQ1I7eUJBQ0o7d0JBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRTs0QkFDakUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO3lCQUN6Qzs2QkFBTTs0QkFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO3lCQUNqRDs2QkFFRyxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFBLEVBQXRHLHdCQUFzRzt3QkFDdEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7d0JBQ3JCLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7OzZCQUdwQixDQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFROzRCQUNoSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFBLEVBRHZCLHdCQUN1Qjt3QkFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7d0JBQ3JCLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTs7Ozs7O0tBRXpDO0lBRUQsMkJBQVMsR0FBVDtJQUVBLENBQUM7SUFDSywwQkFBUSxHQUFkOzs7Ozs2QkFDUSxDQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQSxFQUE5RCx3QkFBOEQ7d0JBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO3dCQUNyQixxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUE7d0JBQ2xDLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTs7OzZCQUMzQixDQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQSxFQUE5RCx3QkFBOEQ7d0JBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO3dCQUNyQixxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUE7d0JBQ2xDLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTt3QkFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs2QkFDYixDQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQSxFQUE5Qix3QkFBOEI7d0JBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO3dCQUNyQixxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUE7Ozs2QkFDM0IsQ0FBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUEsRUFBOUIseUJBQThCO3dCQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTt3QkFDckIscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7OzZCQUdwQixDQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFBLEVBQTlELHlCQUE4RDt3QkFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7d0JBQ3JCLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTt3QkFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs2QkFDYixDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUEsRUFBakcseUJBQWlHO3dCQUN4RyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTt3QkFDckIscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFsQyxTQUFrQyxDQUFBO3dCQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7Ozs7O0tBRTNCO0lBRUssMEJBQVEsR0FBZCxVQUFlLEdBQUc7Ozs7OzZCQUNWLENBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQSxFQUFoRSx3QkFBZ0U7d0JBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQTs2QkFDcEIsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUM7NEJBQzFELENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUEsRUFEN0Qsd0JBQzZEO3dCQUM3RCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTt3QkFDckIscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7OzZCQUNiLENBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQSxFQUFoRyx3QkFBZ0c7d0JBQ3ZHLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO3dCQUNyQixxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7d0JBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7d0JBRzVCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTs0QkFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFBOzRCQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUU7Z0NBQ2pHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBOzZCQUMvQjt5QkFDSjs7Ozs7S0FDSjtJQUVLLDJCQUFTLEdBQWY7Ozs7OzZCQUNRLENBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFBLEVBQTlCLHdCQUE4Qjt3QkFDOUIscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7OzZCQUNiLENBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFBLEVBQTlCLHdCQUE4Qjt3QkFDckMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7Ozs7O0tBRTNCO0lBQ0ssMkJBQVMsR0FBZjs7Ozs7O0tBRUM7SUFwSUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQVZWLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F3STNCO0lBQUQsY0FBQztDQXhJRCxBQXdJQyxDQXhJb0MsbUJBQVMsR0F3STdDO2tCQXhJb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XHJcbmltcG9ydCBUaHJlZU5lZWRsZSBmcm9tIFwiLi4vUHJvcC9UaHJlZU5lZWRsZVwiO1xyXG5pbXBvcnQgU2xpZGVOZWVkbGUgZnJvbSBcIi4uL1Byb3AvU2xpZGVOZWVkbGVcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uLy4uL01vZC9VdGlsaXR5XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwxMCBleHRlbmRzIExldmVsQmFzZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBXYXRlclN3aXRjaDE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvaW50Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFRocmVlTmVlZGxlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTbGlkZU5lZWRsZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBUaHJlZU5lZWRsZUNybDogVGhyZWVOZWVkbGUgPSBudWxsXHJcbiAgICBTbGlkZU5lZWRsZUNybDogU2xpZGVOZWVkbGUgPSBudWxsXHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUNCKVxyXG4gICAgICAgIHRoaXMuVGhyZWVOZWVkbGVDcmwgPSB0aGlzLlRocmVlTmVlZGxlLmdldENvbXBvbmVudChUaHJlZU5lZWRsZSlcclxuICAgICAgICB0aGlzLlNsaWRlTmVlZGxlQ3JsID0gdGhpcy5TbGlkZU5lZWRsZS5nZXRDb21wb25lbnQoU2xpZGVOZWVkbGUpXHJcblxyXG4gICAgICAgIHRoaXMuVGhyZWVOZWVkbGVDcmwuY2xvc2VDQiA9ICgpID0+IHsgdGhpcy5UTkNsb3NlQ0IoKSB9XHJcbiAgICAgICAgdGhpcy5UaHJlZU5lZWRsZUNybC5vcGVuQ0IgPSAoKSA9PiB7IHRoaXMuVE5PcGVuQ0IoKSB9XHJcbiAgICAgICAgdGhpcy5TbGlkZU5lZWRsZUNybC5tb3ZlQ0IgPSAoZHR5KSA9PiB7IHRoaXMuU05Nb3ZlQ0IoZHR5KSB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlQ0IoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuV2F0ZXJTd2l0Y2guY2hpbGRyZW5bMF0uYWN0aXZlID0gdGhpcy5TbGlkZU5lZWRsZUNybC5pc0JvdHRvbVxyXG4gICAgICAgIHRoaXMuV2F0ZXJTd2l0Y2gxLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgxKS5zd2l0Y2hTdGF0ZSA+IDBcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHAgPSB0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICBpZiAoVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLnBsYXllck5vZGUsIHApIDw9IDUwICYmIHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggIT0gaSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9IGlcclxuICAgICAgICAgICAgICAgIGlmIChpID09IDIgJiYgIXRoaXMuVGhyZWVOZWVkbGVDcmwuaXNDbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb2ludE5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwID0gdGhpcy5wb2ludE5vZGUuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5TaGFycCwgcCkgPD0gNTAgJiYgdGhpcy5TaGFycENybC5wb2ludEluZGV4ICE9IGkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCA9IGlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDAgJiYgIXRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5TbGlkZU5lZWRsZUNybC52YWxpZFRvdWNoID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLlNsaWRlTmVlZGxlQ3JsLnZhbGlkVG91Y2ggPSB0aGlzLmNhblRvdWNoXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMucGxheWVyQ3JsLmlzTW92aW5nICYmIHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gNSAmJiB0aGlzLmdldE5lZWRsZUNybEJ5SWQoMSkuc3dpdGNoU3RhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg2KVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg3KVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCA9PSA1ICYmICF0aGlzLlNoYXJwQ3JsLmlzTW92aW5nICYmIHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgxKS5zd2l0Y2hTdGF0ZSA+IDAgJiYgIXRoaXMucGxheWVyQ3JsLmlzTW92aW5nICYmXHJcbiAgICAgICAgICAgICF0aGlzLnBsYXllckNybC5nb3RNZWF0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDYpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFROQ2xvc2VDQigpIHtcclxuXHJcbiAgICB9XHJcbiAgICBhc3luYyBUTk9wZW5DQigpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAwICYmIHRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAxICYmIHRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDUpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDUgJiYgIXRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMylcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICB9IGVsc2UgaWYgKCh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMyB8fCB0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMikgJiYgIXRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoNSlcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgU05Nb3ZlQ0IoZHR5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMCB8fCB0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOb2RlLnkgKz0gZHR5XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXJDcmwuaXNNb3ZpbmcgJiYgdGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAyICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5TbGlkZU5lZWRsZUNybC5pc0JvdHRvbSAmJiB0aGlzLlRocmVlTmVlZGxlQ3JsLmlzQ2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMiAmJiAhdGhpcy5TbGlkZU5lZWRsZUNybC5pc0JvdHRvbSAmJiAhdGhpcy5UaHJlZU5lZWRsZUNybC5pc0Nsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg1KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDAgfHwgdGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5TaGFycC55ICs9IGR0eVxyXG4gICAgICAgICAgICBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDIgJiYgIXRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20gJiYgIXRoaXMuVGhyZWVOZWVkbGVDcmwuaXNDbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoNSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB0cmlnZ2VyMDAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDApXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjEwKCkge1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level16.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73a4bYenNxF75qjNAF6M/ru', 'Level16');
// Scripts/Crl/Level/Level16.ts

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
var Utility_1 = require("../../Mod/Utility");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level16 = /** @class */ (function (_super) {
    __extends(Level16, _super);
    function Level16() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FireNode = null;
        return _this;
    }
    Level16.prototype.onEnable = function () {
        this.schedule(this.updateCB);
    };
    Level16.prototype.updateCB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, f, i, f;
            return __generator(this, function (_a) {
                if (this.meatNode.isValid) {
                    for (i = 0; i < this.FireNode.childrenCount; i++) {
                        f = this.FireNode.children[i];
                        if (Utility_1.default.getWorldDis(this.meatNode, f) <= 75) {
                            this.meatNode.destroy();
                            this.loseCB();
                            return [2 /*return*/];
                        }
                    }
                }
                if (!this.isGameOver) {
                    for (i = 0; i < this.FireNode.childrenCount; i++) {
                        f = this.FireNode.children[i];
                        if (Utility_1.default.getWorldDis(this.playerNode, f) <= 50) {
                            this.loseCB();
                            return [2 /*return*/];
                        }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    Level16.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    Level16.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.FireNode.getChildByName('yxz_dj6_1'))
                    this.FireNode.getChildByName('yxz_dj6_1').destroy();
                this.scheduleOnce(function () {
                    _this.canTouch = true;
                }, 2);
                return [2 /*return*/];
            });
        });
    };
    Level16.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.FireNode.getChildByName('yxz_dj6_1'))
                    this.FireNode.getChildByName('yxz_dj6_1').destroy();
                this.scheduleOnce(function () {
                    if (_this.playerCrl.pointIndex == 0) {
                        _this.loseCB();
                    }
                    else {
                        _this.canTouch = true;
                    }
                }, 2);
                return [2 /*return*/];
            });
        });
    };
    Level16.prototype.trigger30 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 1:
                        _a.sent();
                        if (!(this.getNeedleCrlById(4).switchState > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 2:
                        _a.sent();
                        this.loseCB();
                        return [2 /*return*/];
                    case 3: return [4 /*yield*/, this.playerCrl.moveToPoint(3)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Level16.prototype.trigger40 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Level16.prototype, "FireNode", void 0);
    Level16 = __decorate([
        ccclass
    ], Level16);
    return Level16;
}(LevelBase_1.default));
exports.default = Level16;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxNi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQyw2Q0FBd0M7QUFFbEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFxQywyQkFBUztJQUQ5QztRQUFBLHFFQW9FQztRQWhFRyxjQUFRLEdBQVksSUFBSSxDQUFBOztJQWdFNUIsQ0FBQztJQTlERywwQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVLLDBCQUFRLEdBQWQ7Ozs7Z0JBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtvQkFDdkIsS0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDOUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUNqQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFOzRCQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBOzRCQUN2QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7NEJBQ2Isc0JBQU07eUJBQ1Q7cUJBQ0o7aUJBQ0o7Z0JBRUQsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUM7b0JBQ2hCLEtBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQzlDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDakMsSUFBSSxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTs0QkFDL0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBOzRCQUNiLHNCQUFNO3lCQUNUO3FCQUNKO2lCQUNKOzs7O0tBQ0o7SUFHSywyQkFBUyxHQUFmOzs7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7S0FDdkI7SUFDSywyQkFBUyxHQUFmOzs7O2dCQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO29CQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtnQkFDdkQsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtnQkFDeEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBOzs7O0tBQ1I7SUFDSywyQkFBUyxHQUFmOzs7O2dCQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO29CQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtnQkFDdkQsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTt3QkFDaEMsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO3FCQUNoQjt5QkFBTTt3QkFDSCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtxQkFDdkI7Z0JBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBOzs7O0tBQ1I7SUFDSywyQkFBUyxHQUFmOzs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs2QkFDL0IsQ0FBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQSxFQUF4Qyx3QkFBd0M7d0JBQ3hDLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO3dCQUNiLHNCQUFNOzRCQUVOLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs7Ozs7O0tBRTFDO0lBQ0ssMkJBQVMsR0FBZjs7O2dCQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7O0tBQ3ZCO0lBL0REO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFIUCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBbUUzQjtJQUFELGNBQUM7Q0FuRUQsQUFtRUMsQ0FuRW9DLG1CQUFTLEdBbUU3QztrQkFuRW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuL0xldmVsQmFzZVwiO1xyXG5pbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vLi4vTW9kL1V0aWxpdHlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbDE2IGV4dGVuZHMgTGV2ZWxCYXNlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEZpcmVOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVDQilcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVDQigpIHtcclxuICAgICAgICBpZiAodGhpcy5tZWF0Tm9kZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5GaXJlTm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBmID0gdGhpcy5GaXJlTm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5tZWF0Tm9kZSwgZikgPD0gNzUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lYXROb2RlLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIXRoaXMuaXNHYW1lT3Zlcil7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5GaXJlTm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBmID0gdGhpcy5GaXJlTm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5wbGF5ZXJOb2RlLCBmKSA8PSA1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgdHJpZ2dlcjAwKCkge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMTAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuRmlyZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3l4el9kajZfMScpKVxyXG4gICAgICAgICAgICB0aGlzLkZpcmVOb2RlLmdldENoaWxkQnlOYW1lKCd5eHpfZGo2XzEnKS5kZXN0cm95KClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIyMCgpIHtcclxuICAgICAgICBpZiAodGhpcy5GaXJlTm9kZS5nZXRDaGlsZEJ5TmFtZSgneXh6X2RqNl8xJykpXHJcbiAgICAgICAgICAgIHRoaXMuRmlyZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3l4el9kajZfMScpLmRlc3Ryb3koKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMzAoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgICAgICBpZiAodGhpcy5nZXROZWVkbGVDcmxCeUlkKDQpLnN3aXRjaFN0YXRlID4gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgyKVxyXG4gICAgICAgICAgICB0aGlzLmxvc2VDQigpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjQwKCkge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QyxrQ0FBNkI7QUFDN0IseUNBQW9DO0FBRTlCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVM7SUFEOUM7UUFBQSxxRUF1R0M7UUFuR0csWUFBTSxHQUFZLElBQUksQ0FBQTtRQUN0QixlQUFTLEdBQVUsSUFBSSxDQUFBO1FBR3ZCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsWUFBTSxHQUFZLElBQUksQ0FBQTs7SUE2RjFCLENBQUM7SUEzRkcsMEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVLLDBCQUFRLEdBQWQ7Ozs7Z0JBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtvQkFDckIsS0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDNUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUMvQixJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFOzRCQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBOzRCQUNyQixJQUFJLENBQUMsTUFBTSxD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QUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQVRMLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FzRzNCO0lBQUQsY0FBQztDQXRHRCxBQXNHQyxDQXRHb0MsbUJBQVMsR0FzRzdDO2tCQXRHb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgU2hhcnAgZnJvbSBcIi4uL1NoYXJwXCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwxNCBleHRlbmRzIExldmVsQmFzZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTaGFycDE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBTaGFycDFDcmw6IFNoYXJwID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRmlyZU5vZGUxOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBQb2lzb246IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5TaGFycDFDcmwgPSB0aGlzLlNoYXJwMS5nZXRDb21wb25lbnQoU2hhcnApXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUNCKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZUNCKCkge1xyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwMS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5Qb2lzb24uY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcCA9IHRoaXMuUG9pc29uLmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgICAgICBpZiAoVXRpbGl0eS5nZXRXb3JsZERpcyhwLCB0aGlzLlNoYXJwMSkgPD0gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlNoYXJwMS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlBvaXNvbi5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkZpcmVOb2RlMS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBwID0gdGhpcy5GaXJlTm9kZTEuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgICAgIGlmIChVdGlsaXR5LmdldFdvcmxkRGlzKHAsIHRoaXMuU2hhcnApIDw9IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TaGFycC5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNHYW1lT3Zlcikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRmlyZU5vZGUxLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSB0aGlzLkZpcmVOb2RlMS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXMocCwgdGhpcy5wbGF5ZXJOb2RlKSA8PSA1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB0cmlnZ2VyMDAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMTAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuU2hhcnAxLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycDFDcmwubW92ZVRvUG9pbnQoMClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIyMCgpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXROZWVkbGVDcmxCeUlkKDMpLnN3aXRjaFN0YXRlID09IDApIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgyKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXROZWVkbGVDcmxCeUlkKDUpLnN3aXRjaFN0YXRlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNSlcclxuICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCg0KS5zd2l0Y2hTdGF0ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDMpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg0KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIzMCgpIHtcclxuICAgICAgICB0aGlzLkZpcmVOb2RlMS5jaGlsZHJlblt0aGlzLkZpcmVOb2RlMS5jaGlsZHJlbkNvdW50IC0gMV0uZGVzdHJveSgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLmNhblRvdWNoID0gdHJ1ZSB9LCAxKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjQwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDMpXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjUwKCkge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level15.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c210bu+tPRNhJrlL3sT3GHf', 'Level15');
// Scripts/Crl/Level/Level15.ts

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
var Utility_1 = require("../../Mod/Utility");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level15 = /** @class */ (function (_super) {
    __extends(Level15, _super);
    function Level15() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Stone = null;
        _this.movetoDes = false;
        return _this;
    }
    Level15.prototype.onEnable = function () {
        this.schedule(this.updateCB);
    };
    Level15.prototype.updateCB = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isGameOver && this.playerNode.isValid && this.Stone.isValid) {
                            if (Utility_1.default.getWorldDis(this.playerNode, this.Stone) <= 50) {
                                this.loseCB();
                                return [2 /*return*/];
                            }
                        }
                        if (this.meatNode.isValid && !this.isGameOver && this.Stone.isValid) {
                            if (Utility_1.default.getWorldDis(this.meatNode, this.Stone) <= 50) {
                                this.meatNode.destroy();
                                this.loseCB();
                                return [2 /*return*/];
                            }
                        }
                        if (this.Sharp.isValid && this.Stone.isValid) {
                            if (Utility_1.default.getWorldDis(this.Sharp, this.Stone) <= 50) {
                                this.Sharp.destroy();
                                this.canTouch = true;
                            }
                        }
                        if (!!this.isGameOver) return [3 /*break*/, 6];
                        if (!(this.getNeedleCrlById(0).switchState == 2 && this.getNeedleCrlById(1).switchState == 2 &&
                            this.getNeedleCrlById(2).switchState == 2 && this.getNeedleCrlById(3).switchState == 2 &&
                            !this.movetoDes)) return [3 /*break*/, 6];
                        this.movetoDes = true;
                        this.canTouch = false;
                        return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(5)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(6)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(7)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Level15.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.Sharp.isValid && this.SharpCrl.pointIndex == 3)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [3 /*break*/, 3];
                    case 2:
                        this.canTouch = true;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Level15.prototype.trigger01 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.Sharp.isValid && this.SharpCrl.pointIndex == 3)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        if (!(this.Sharp.isValid && this.SharpCrl.pointIndex == 2)) return [3 /*break*/, 7];
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
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Level15.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    Level15.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    Level15.prototype.trigger30 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Level15.prototype, "Stone", void 0);
    Level15 = __decorate([
        ccclass
    ], Level15);
    return Level15;
}(LevelBase_1.default));
exports.default = Level15;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxNS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQyw2Q0FBd0M7QUFFbEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFxQywyQkFBUztJQUQ5QztRQUFBLHFFQWdGQztRQTVFRyxXQUFLLEdBQVksSUFBSSxDQUFBO1FBRXJCLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBMEUvQixDQUFDO0lBeEVHLDBCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRUssMEJBQVEsR0FBZDs7Ozs7d0JBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7NEJBQ25FLElBQUksaUJBQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFO2dDQUN4RCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7Z0NBQ2Isc0JBQU07NkJBQ1Q7eUJBQ0o7d0JBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7NEJBQ2pFLElBQUksaUJBQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFO2dDQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO2dD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QUFuRCx3QkFBbUQ7d0JBQzFELHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTt3QkFDbEMscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFsQyxTQUFrQyxDQUFBOzs7d0JBRWxDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7Ozs7S0FFM0I7SUFDSywyQkFBUyxHQUFmOzs7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7S0FDdkI7SUFDSywyQkFBUyxHQUFmOzs7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7S0FDdkI7SUFDSywyQkFBUyxHQUFmOzs7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7S0FDdkI7SUEzRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUhKLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0ErRTNCO0lBQUQsY0FBQztDQS9FRCxBQStFQyxDQS9Fb0MsbUJBQVMsR0ErRTdDO2tCQS9Fb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsMTUgZXh0ZW5kcyBMZXZlbEJhc2Uge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU3RvbmU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgbW92ZXRvRGVzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUNCKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZUNCKCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNHYW1lT3ZlciAmJiB0aGlzLnBsYXllck5vZGUuaXNWYWxpZCAmJiB0aGlzLlN0b25lLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5wbGF5ZXJOb2RlLCB0aGlzLlN0b25lKSA8PSA1MCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1lYXROb2RlLmlzVmFsaWQgJiYgIXRoaXMuaXNHYW1lT3ZlciAmJiB0aGlzLlN0b25lLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5tZWF0Tm9kZSwgdGhpcy5TdG9uZSkgPD0gNTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVhdE5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvc2VDQigpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5TaGFycC5pc1ZhbGlkICYmIHRoaXMuU3RvbmUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBpZiAoVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLlNoYXJwLCB0aGlzLlN0b25lKSA8PSA1MCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGFycC5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc0dhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldE5lZWRsZUNybEJ5SWQoMCkuc3dpdGNoU3RhdGUgPT0gMiAmJiB0aGlzLmdldE5lZWRsZUNybEJ5SWQoMSkuc3dpdGNoU3RhdGUgPT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXROZWVkbGVDcmxCeUlkKDIpLnN3aXRjaFN0YXRlID09IDIgJiYgdGhpcy5nZXROZWVkbGVDcmxCeUlkKDMpLnN3aXRjaFN0YXRlID09IDIgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLm1vdmV0b0Rlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZldG9EZXMgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDEpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg0KVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNSlcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDYpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg3KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyB0cmlnZ2VyMDAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuU2hhcnAuaXNWYWxpZCAmJiB0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMykge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMDEoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuU2hhcnAuaXNWYWxpZCAmJiB0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMykge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5TaGFycC5pc1ZhbGlkICYmIHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjEwKCkge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMjAoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIzMCgpIHtcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level17.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a5ddzmmDxOqpRWWUcR8fcX', 'Level17');
// Scripts/Crl/Level/Level17.ts

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
var SlideNeedle_1 = require("../Prop/SlideNeedle");
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level17 = /** @class */ (function (_super) {
    __extends(Level17, _super);
    function Level17() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.WaterSwitch1 = null;
        _this.pointNode = null;
        _this.SlideNeedle = null;
        _this.SlideNeedleCrl = null;
        return _this;
    }
    Level17.prototype.onEnable = function () {
        var _this = this;
        this.schedule(this.updateCB);
        this.SlideNeedleCrl = this.SlideNeedle.getComponent(SlideNeedle_1.default);
        this.SlideNeedleCrl.moveCB = function (dty) { _this.SNMoveCB(dty); };
    };
    Level17.prototype.updateCB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, p, i, p;
            return __generator(this, function (_a) {
                this.WaterSwitch.children[0].active = this.SlideNeedleCrl.isBottom;
                this.WaterSwitch1.children[0].active = this.getNeedleCrlById(2).switchState > 0;
                for (i = 0; i < this.pointNode.childrenCount; i++) {
                    p = this.pointNode.children[i];
                    if (Utility_1.default.getWorldDis(this.playerNode, p) <= 50 && this.playerCrl.pointIndex != i) {
                        this.playerCrl.pointIndex = i;
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
                if (this.SharpCrl.pointIndex == 0 && !this.SlideNeedleCrl.isBottom) {
                    this.SlideNeedleCrl.validTouch = false;
                }
                else {
                    this.SlideNeedleCrl.validTouch = this.canTouch;
                }
                return [2 /*return*/];
            });
        });
    };
    Level17.prototype.SNMoveCB = function (dty) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 0 || this.playerCrl.pointIndex == 1)) return [3 /*break*/, 2];
                        this.playerNode.y += dty;
                        if (!(this.SharpCrl.pointIndex == 3 && this.getNeedleCrlById(0).switchState > 0 && this.SlideNeedleCrl.isBottom)) return [3 /*break*/, 2];
                        this.canTouch = false;
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (this.SharpCrl.pointIndex == 0 || this.SharpCrl.pointIndex == 1) {
                            this.Sharp.y += dty;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Level17.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.SharpCrl.pointIndex == 3)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(this.SharpCrl.pointIndex == 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(3)];
                    case 3:
                        _a.sent();
                        this.canTouch = true;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Level17.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.SharpCrl.pointIndex == 3)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(4)];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(this.playerCrl.pointIndex == 3)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(5)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        this.canTouch = true;
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Level17.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 1)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(3)];
                    case 2:
                        _a.sent();
                        if (!(this.getNeedleCrlById(1).switchState > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(5)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                    case 5:
                        if (!(this.getNeedleCrlById(0).switchState > 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(3)];
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
    __decorate([
        property(cc.Node)
    ], Level17.prototype, "WaterSwitch1", void 0);
    __decorate([
        property(cc.Node)
    ], Level17.prototype, "pointNode", void 0);
    __decorate([
        property(cc.Node)
    ], Level17.prototype, "SlideNeedle", void 0);
    Level17 = __decorate([
        ccclass
    ], Level17);
    return Level17;
}(LevelBase_1.default));
exports.default = Level17;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxNy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QyxtREFBOEM7QUFDOUMseUNBQW9DO0FBRTlCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVM7SUFEOUM7UUFBQSxxRUFpR0M7UUE3Rkcsa0JBQVksR0FBWSxJQUFJLENBQUE7UUFFNUIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUMzQixvQkFBYyxHQUFnQixJQUFJLENBQUE7O0lBd0Z0QyxDQUFDO0lBdEZHLDBCQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxDQUFBO1FBRWhFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLFVBQUMsR0FBRyxJQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUE7SUFDaEUsQ0FBQztJQUVLLDBCQUFRLEdBQWQ7Ozs7Z0JBRUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFBO2dCQUNsRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUE7Z0JBRS9F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V0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUNuQyxzQkFBTTs7NkJBRUQsQ0FBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQSxFQUF4Qyx3QkFBd0M7d0JBQzdDLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTs7O3dCQUVsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7Ozt3QkFHeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7OztLQUUzQjtJQTVGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQVBWLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FnRzNCO0lBQUQsY0FBQztDQWhHRCxBQWdHQyxDQWhHb0MsbUJBQVMsR0FnRzdDO2tCQWhHb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgU2xpZGVOZWVkbGUgZnJvbSBcIi4uL1Byb3AvU2xpZGVOZWVkbGVcIjtcclxuaW1wb3J0IExldmVsQmFzZSBmcm9tIFwiLi9MZXZlbEJhc2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbDE3IGV4dGVuZHMgTGV2ZWxCYXNlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFdhdGVyU3dpdGNoMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcG9pbnROb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTbGlkZU5lZWRsZTogY2MuTm9kZSA9IG51bGxcclxuICAgIFNsaWRlTmVlZGxlQ3JsOiBTbGlkZU5lZWRsZSA9IG51bGxcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlQ0IpXHJcbiAgICAgICAgdGhpcy5TbGlkZU5lZWRsZUNybCA9IHRoaXMuU2xpZGVOZWVkbGUuZ2V0Q29tcG9uZW50KFNsaWRlTmVlZGxlKVxyXG5cclxuICAgICAgICB0aGlzLlNsaWRlTmVlZGxlQ3JsLm1vdmVDQiA9IChkdHkpID0+IHsgdGhpcy5TTk1vdmVDQihkdHkpIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVDQigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5XYXRlclN3aXRjaC5jaGlsZHJlblswXS5hY3RpdmUgPSB0aGlzLlNsaWRlTmVlZGxlQ3JsLmlzQm90dG9tXHJcbiAgICAgICAgdGhpcy5XYXRlclN3aXRjaDEuY2hpbGRyZW5bMF0uYWN0aXZlID0gdGhpcy5nZXROZWVkbGVDcmxCeUlkKDIpLnN3aXRjaFN0YXRlID4gMFxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnROb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcCA9IHRoaXMucG9pbnROb2RlLmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgIGlmIChVdGlsaXR5LmdldFdvcmxkRGlzKHRoaXMucGxheWVyTm9kZSwgcCkgPD0gNTAgJiYgdGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCAhPSBpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID0gaVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnROb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcCA9IHRoaXMucG9pbnROb2RlLmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgIGlmIChVdGlsaXR5LmdldFdvcmxkRGlzKHRoaXMuU2hhcnAsIHApIDw9IDUwICYmIHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCAhPSBpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPSBpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDAgJiYgIXRoaXMuU2xpZGVOZWVkbGVDcmwuaXNCb3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5TbGlkZU5lZWRsZUNybC52YWxpZFRvdWNoID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLlNsaWRlTmVlZGxlQ3JsLnZhbGlkVG91Y2ggPSB0aGlzLmNhblRvdWNoXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIFNOTW92ZUNCKGR0eSkge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDAgfHwgdGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTm9kZS55ICs9IGR0eVxyXG4gICAgICAgICAgICBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDMgJiYgdGhpcy5nZXROZWVkbGVDcmxCeUlkKDApLnN3aXRjaFN0YXRlID4gMCAmJiB0aGlzLlNsaWRlTmVlZGxlQ3JsLmlzQm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDAgfHwgdGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5TaGFycC55ICs9IGR0eVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdHJpZ2dlcjAwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMykge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDApXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDMpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjEwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMykge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDQpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllckNybC5wb2ludEluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNClcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIyMCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDMpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldE5lZWRsZUNybEJ5SWQoMSkuc3dpdGNoU3RhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg0KVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgwKS5zd2l0Y2hTdGF0ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
