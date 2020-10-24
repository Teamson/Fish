
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