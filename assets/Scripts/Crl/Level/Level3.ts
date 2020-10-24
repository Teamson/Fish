import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level3 extends LevelBase {

    async trigger00() {
        await this.meatCrl.triggerCB()
        this.canTouch = true
    }
    async trigger10() {
        await this.playerCrl.moveToPoint(0)
        await this.playerCrl.moveToPoint(1)
    }
    async trigger20() {
        
    }
    async trigger30() {
        
    }
}
