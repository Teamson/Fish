"use strict";
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