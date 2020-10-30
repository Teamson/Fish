
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