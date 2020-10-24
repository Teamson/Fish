import LevelBase from "./LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level4 extends LevelBase {

    async trigger00() {
        await this.SharpCrl.moveToPoint(3)
        this.canTouch = true
    }
    async trigger10() {
        if (this.meatNode.isValid) {
            await this.meatCrl.triggerCB()
            if (this.SharpCrl.pointIndex == 3 && this.getNeedleCrlById(0).switchState > 0) {
                await this.SharpCrl.moveToPoint(2)
                return
            }
            this.canTouch = true
        } else {
            if (this.SharpCrl.pointIndex == 2) {
                await this.SharpCrl.moveToPoint(1)
                return
            } if (this.SharpCrl.pointIndex == 3 && this.getNeedleCrlById(0).switchState > 0) {
                await this.SharpCrl.moveToPoint(2)
                await this.SharpCrl.moveToPoint(1)
                return
            } else {
                await this.playerCrl.moveToPoint(2)
                await this.playerCrl.moveToPoint(4)
            }
        }
    }
    async trigger11() {
        if (this.SharpCrl.pointIndex == 3 && this.playerCrl.pointIndex == 0) {
            await this.SharpCrl.moveToPoint(0)
            return
        } else if (this.SharpCrl.pointIndex == 3 && this.playerCrl.pointIndex == 1) {
            await this.SharpCrl.moveToPoint(0)
            await this.SharpCrl.moveToPoint(1)
        }
    }
    async trigger20() {
        if(!this.meatCrl.isTriggered){
            await this.playerCrl.moveToPoint(1)
        }else{
            await this.playerCrl.moveToPoint(1)
            await this.playerCrl.moveToPoint(2)
            await this.playerCrl.moveToPoint(4)
        }
        this.canTouch = true
    }
}
