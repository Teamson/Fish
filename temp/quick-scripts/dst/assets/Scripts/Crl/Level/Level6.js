
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