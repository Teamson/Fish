import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level11 extends LevelBase {

    @property(cc.Node)
    Electric: cc.Node = null

    onEnable() {

    }

    async updateCB() {

    }

    async trigger00() {
        this.canTouch = false
        this.scheduleOnce(() => {
            this.Electric.destroy()
            this.canTouch = true
        }, 2)
    }
    async trigger10() {
        await this.playerCrl.moveToPoint(0)

        if (this.Electric.isValid) {
            this.loseCB()
            return
        }

        if (this.getNeedleCrlById(2).switchState > 0) {
            await this.playerCrl.moveToPoint(1)
            await this.playerCrl.moveToPoint(2)
        } else {
            this.canTouch = true
        }
    }
    async trigger20() {
        if (this.playerCrl.pointIndex == 0) {
            await this.playerCrl.moveToPoint(1)
            await this.playerCrl.moveToPoint(2)
        }
    }
}
