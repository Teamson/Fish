"use strict";
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