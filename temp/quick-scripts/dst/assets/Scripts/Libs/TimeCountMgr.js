
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
        this.schedule(this.calculateExitTime);
    };
    TimeCountMgr.prototype.calculateExitTime = function () {
        var exitTime = 0;
        if (localStorage.getItem('exitTime')) {
            exitTime = new Date().getTime() - parseInt(localStorage.getItem('exitTime'));
        }
        if (exitTime <= 0)
            return;
        exitTime /= 1000;
        var t = Math.floor(exitTime / 600);
        PlayerDataMgr_1.default.getPlayerData().power += t;
        if (PlayerDataMgr_1.default.getPlayerData().power > 10) {
            PlayerDataMgr_1.default.getPlayerData().power = 10;
            PlayerDataMgr_1.default.setPlayerData();
        }
    };
    TimeCountMgr.prototype.calculateTime = function () {
        if (this.tCount <= 0) {
            if (PlayerDataMgr_1.default.getPlayerData().power < 10) {
                this.tCount = 600;
            }
            else {
                this.tCount = 0;
            }
            return;
        }
        this.tCount--;
        if (this.tCount <= 0) {
            if (PlayerDataMgr_1.default.getPlayerData().power < 10) {
                PlayerDataMgr_1.default.getPlayerData().power += 1;
                PlayerDataMgr_1.default.setPlayerData();
                this.tCount = PlayerDataMgr_1.default.getPlayerData().power < 10 ? 600 : 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTGlic1xcVGltZUNvdW50TWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUEyQztBQUVyQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBRHREO1FBQUEscUVBd0VDO1FBbkVHLFlBQU0sR0FBVyxDQUFDLENBQUE7O0lBbUV0QixDQUFDO3FCQXZFb0IsWUFBWTtJQU03Qiw2QkFBTSxHQUFOO1FBQ0ksY0FBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDekIsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2YsQ0FBQztJQUVELDJCQUFJLEdBQUo7UUFBQSxpQkFvQkM7UUFuQkcsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtTQUM1RDthQUFNO1lBQ0gsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FDckM7UUFFRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtRQUV4QixJQUFJLGFBQWEsRUFBRTtZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJO2dCQUNyQixLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtZQUM1QixDQUFDLENBQUMsQ0FBQTtZQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJO2dCQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7Z0JBQ3pELFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtZQUNyRSxDQUFDLENBQUMsQ0FBQTtTQUNMO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsd0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxRQUFRLEdBQVcsQ0FBQyxDQUFBO1FBQ3hCLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNsQyxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1NBQy9FO1FBRUQsSUFBSSxRQUFRLElBQUksQ0FBQztZQUFFLE9BQU07UUFFekIsUUFBUSxJQUFJLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQTtRQUNsQyx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUE7UUFDeEMsSUFBSSx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUU7WUFDMUMsdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO1lBQ3hDLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUE7U0FDaEM7SUFDTCxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEIsSUFBSSx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO2FBQ3BCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO2FBQ2xCO1lBQ0QsT0FBTTtTQUNUO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBRWIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRTtnQkFDMUMsdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFBO2dCQUN4Qyx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDbkU7U0FDSjtJQUNMLENBQUM7O0lBckVnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBdUVoQztJQUFELG1CQUFDO0NBdkVELEFBdUVDLENBdkV5QyxFQUFFLENBQUMsU0FBUyxHQXVFckQ7a0JBdkVvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllckRhdGFNZ3IgZnJvbSBcIi4vUGxheWVyRGF0YU1nclwiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZUNvdW50TWdyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFNoYXJlOiBUaW1lQ291bnRNZ3JcclxuXHJcbiAgICB0Q291bnQ6IG51bWJlciA9IDBcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgVGltZUNvdW50TWdyLlNoYXJlID0gdGhpc1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3dlclRpbWUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRDb3VudCA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3dlclRpbWUnKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG93ZXInLCAnMCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZUV4aXRUaW1lKClcclxuXHJcbiAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ub25TaG93KChwYXJhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUV4aXRUaW1lKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ub25IaWRlKChwYXJhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG93ZXJUaW1lJywgdGhpcy50Q291bnQudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdleGl0VGltZScsIG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY2FsY3VsYXRlRXhpdFRpbWUpXHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlRXhpdFRpbWUoKSB7XHJcbiAgICAgICAgbGV0IGV4aXRUaW1lOiBudW1iZXIgPSAwXHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdleGl0VGltZScpKSB7XHJcbiAgICAgICAgICAgIGV4aXRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhpdFRpbWUnKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChleGl0VGltZSA8PSAwKSByZXR1cm5cclxuXHJcbiAgICAgICAgZXhpdFRpbWUgLz0gMTAwMFxyXG4gICAgICAgIGxldCB0ID0gTWF0aC5mbG9vcihleGl0VGltZSAvIDYwMClcclxuICAgICAgICBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5wb3dlciArPSB0XHJcbiAgICAgICAgaWYgKFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyID4gMTApIHtcclxuICAgICAgICAgICAgUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkucG93ZXIgPSAxMFxyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhTWdyLnNldFBsYXllckRhdGEoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVUaW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5wb3dlciA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRDb3VudCA9IDYwMFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50Q291bnQgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudENvdW50LS1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudENvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgaWYgKFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyIDwgMTApIHtcclxuICAgICAgICAgICAgICAgIFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyICs9IDFcclxuICAgICAgICAgICAgICAgIFBsYXllckRhdGFNZ3Iuc2V0UGxheWVyRGF0YSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRDb3VudCA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyIDwgMTAgPyA2MDAgOiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19