import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level9 extends LevelBase {

    @property(cc.Node)
    sawNode: cc.Node = null

    async trigger00() {
        await this.playerCrl.moveToPoint(0)
        if (this.sawNode.isValid) {
            this.loseCB()
        } else {
            await this.playerCrl.moveToPoint(1)
            await this.playerCrl.moveToPoint(2)
        }
    }
    async trigger10() {
        this.scheduleOnce(() => {
            this.sawNode.destroy()
            this.canTouch = true
        }, 2)
    }
}
