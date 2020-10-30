
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