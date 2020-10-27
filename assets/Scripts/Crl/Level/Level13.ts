
import Utility from "../../Mod/Utility";
import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level13 extends LevelBase {

    MainCamera: cc.Node = null

    @property(cc.Node)
    FireNode1: cc.Node = null
    @property(cc.Node)
    FireNode2: cc.Node = null
    @property(cc.Node)
    FireNode3: cc.Node = null
    @property(cc.Node)
    FireNode4: cc.Node = null
    @property(cc.Node)
    WaterNode: cc.Node = null

    gameStarted: boolean = false

    movetoScene2: boolean = false
    movetoDes: boolean = false

    onEnable() {
        this.MainCamera = cc.find('Canvas/Main Camera')
        this.schedule(this.updateCB)
    }

    async updateCB() {
        if (!this.gameStarted) {
            this.canTouch = false
            this.gameStarted = true
            let a1 = cc.moveBy(3, cc.v2(750, 0))
            let a2 = cc.moveBy(3, cc.v2(-750, 0))
            let a3 = cc.callFunc(() => {
                this.canTouch = true
            })
            let sq = cc.sequence(a1, a2, a3)
            this.MainCamera.runAction(sq)
        }

        if (this.meatNode.isValid && this.meatNode.y <= -326) {
            this.loseCB()
            return
        }

        if (!this.isGameOver && this.meatNode.isValid) {
            for (let i = 0; i < this.FireNode2.childrenCount; i++) {
                let f = this.FireNode2.children[i]
                if (f.name == 'yxz_dj6_1') continue
                if (Utility.getWorldDis(this.meatNode, f) <= 55) {
                    this.loseCB()
                    return
                }
            }
            for (let i = 0; i < this.FireNode3.childrenCount; i++) {
                let f = this.FireNode3.children[i]
                if (f.name == 'yxz_dj6_1') continue
                if (Utility.getWorldDis(this.meatNode, f) <= 55) {
                    this.loseCB()
                    return
                }
            }
            for (let i = 0; i < this.FireNode4.childrenCount; i++) {
                let f = this.FireNode4.children[i]
                if (f.name == 'yxz_dj6_1') continue
                if (Utility.getWorldDis(this.meatNode, f) <= 55) {
                    this.loseCB()
                    return
                }
            }
        }

        if (this.getNeedleCrlById(0).switchState > 0 &&
            this.getNeedleCrlById(1).switchState > 0 &&
            this.getNeedleCrlById(2).switchState > 0 && !this.movetoScene2) {
            this.canTouch = false
            this.movetoScene2 = true
            this.MainCamera.runAction(cc.moveBy(3, cc.v2(750, 0)))
            await this.playerCrl.moveToPoint(0)
            await this.playerCrl.moveToPoint(1)
            this.canTouch = true
        }

        if (this.getNeedleCrlById(3).switchState > 0 && this.getNeedleCrlById(5).switchState == 2 && !this.movetoDes) {
            this.canTouch = false
            this.movetoDes = true
            await this.playerCrl.moveToPoint(2)
            await this.playerCrl.moveToPoint(3)
            await this.playerCrl.moveToPoint(2)
            await this.playerCrl.moveToPoint(4)
        }
    }

    async trigger00() {
        if (this.getNeedleCrlById(1).switchState == 0) {
            this.scheduleOnce(() => {
                this.loseCB()
            }, 3)
        } else {
            this.canTouch = true
        }
    }
    async trigger10() {
        this.scheduleOnce(() => {
            this.FireNode1.destroy()
            this.WaterNode.destroy()
            this.canTouch = true
        }, 2)
    }
    async trigger20() {
        this.canTouch = true
    }
    async trigger30() {
        this.canTouch = true
    }
    async trigger40() {
        this.canTouch = true
        if (this.node.getChildByName('FireNode4').getChildByName('yxz_dj6_1'))
            this.node.getChildByName('FireNode4').getChildByName('yxz_dj6_1').destroy()
    }
    async trigger50() {
        this.canTouch = true
        if (this.node.getChildByName('FireNode4').getChildByName('yxz_dj6_1'))
            this.node.getChildByName('FireNode4').getChildByName('yxz_dj6_1').destroy()
    }
    async trigger51() {
        this.canTouch = true
    }
    async trigger60() {
        this.canTouch = true
        this.node.getChildByName('FireNode2').getChildByName('yxz_dj6_1').destroy()
        this.node.getChildByName('FireNode3').getChildByName('yxz_dj6_1').destroy()
    }
    async trigger70() {
        this.canTouch = true
    }
}
