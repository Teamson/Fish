
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