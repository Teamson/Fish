
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