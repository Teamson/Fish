"use strict";
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