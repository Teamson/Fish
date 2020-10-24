const { ccclass, property } = cc._decorator;

@ccclass
export default class SoundMgr extends cc.Component {

    static Share: SoundMgr = new SoundMgr()

    currentMusic: string = ""

    static IsMute: boolean = false

    currentAid: number = -1

    waitBackgroundMuisc: string = ""

    buttonIns: boolean = false

    doneCB: Function = null

    public static MuteSW() {
        cc.audioEngine.stopAll()
        cc.audioEngine.stopMusic()
        SoundMgr.IsMute = !SoundMgr.IsMute
        SoundMgr.Share.node.active = !SoundMgr.IsMute
        if (SoundMgr.IsMute == false) {
            SoundMgr.Share.PlayBackground(SoundMgr.Share.currentMusic == "" ? SoundMgr.Share.waitBackgroundMuisc : SoundMgr.Share.currentMusic)
        }
    }

    public static initAll(cb: Function) {
        // let soundnode: cc.Node = new cc.Node()
        // let crl = soundnode.addComponent(SoundMgr)
        // soundnode.name = "SoundMgr"
        // crl.doneCB = cb
        // crl.loadSounds()
        // cc.director.getScene().addChild(soundnode)
        // cc.game.addPersistRootNode(soundnode)
    }

    loadSounds(cb: Function) {
        this.doneCB = cb
        cc.loader.loadResDir("Sound", cc.AudioClip, (err, sounds) => {
            sounds.forEach((sound) => {
                let clip = new cc.Node()
                let crl = clip.addComponent(cc.AudioSource)
                crl.clip = sound
                clip.name = sound.name
                this.node.addChild(clip)
            })
            this.doneCB()
            cc.log("loaded sound:", sounds.length)
        })
    }

    public static justMute() {
        SoundMgr.IsMute = true
    }

    onLoad() {
        cc.game.addPersistRootNode(this.node)
        SoundMgr.Share = this;
    }

    start() {
        //cc.game.addPersistRootNode(this.node)
    }

    PlaySound(key: string, loop: boolean = false) {
        if (this.node == null) {
            return null
        }
        if (!SoundMgr.IsMute) {
            let source = this.node.getChildByName(key)
            if (source == null) {
                cc.log("can't load sound", key)
                return null
            }
            return cc.audioEngine.play(this.node.getChildByName(key).getComponent(cc.AudioSource).clip, loop, 1)
        }
    }

    getMusicClip(key: string) {
        return this.node.getChildByName(key).getComponent(cc.AudioSource).clip
    }

    PlayMusic(key: string, loop: boolean = false) {
        if (this.node == null) {
            return
        }
        if (!SoundMgr.IsMute) {
            let source = this.node.getChildByName(key)
            if (source == null) {
                cc.log("can't load music", key)
                return
            }
            if (!this.node.getChildByName(key).getComponent(cc.AudioSource).isPlaying) {
                this.node.getChildByName(key).getComponent(cc.AudioSource).loop = loop
                this.node.getChildByName(key).getComponent(cc.AudioSource).play()
            }
            this.currentMusic = key
        }
    }

    PlayBackground(key: string) {
        if (this.node == null) {
            return
        }
        this.waitBackgroundMuisc = key
        if (SoundMgr.IsMute == false) {
            cc.log("playbackground ", key, SoundMgr.IsMute)
            let source = this.node.getChildByName(key)
            if (source == null) {
                cc.log("can't load PlayBackground", key)
                return
            }

            if (this.currentMusic != "") {
                this.StopMuisc(this.currentMusic)
                cc.log("stop muisc", this.currentMusic)
            }
            if (!cc.audioEngine.isMusicPlaying()/* this.node.getChildByName(key).getComponent(cc.AudioSource).isPlaying */) {
                // this.node.getChildByName(key).getComponent(cc.AudioSource).loop = true
                // this.node.getChildByName(key).getComponent(cc.AudioSource).play()
                cc.audioEngine.playMusic(this.node.getChildByName(key).getComponent(cc.AudioSource).clip, true)
            }
            this.currentMusic = key
        }
    }

    StopMuisc(key: string) {
        if (this.node == null) {
            return
        }
        this.node.getChildByName(key).getComponent(cc.AudioSource).stop()
    }
}
