
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