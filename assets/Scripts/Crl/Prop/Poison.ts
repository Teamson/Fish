import Utility from "../../Mod/Utility";
import Level1 from "../Level/Level1";
import LevelBase from "../Level/LevelBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Poison extends cc.Component {

    // onLoad () {}

    start() {

    }

    update(dt) {
        if (!LevelBase.Share.isGameOver) {
            if (Utility.getWorldDis(this.node, LevelBase.Share.playerNode) <= 20) {
                LevelBase.Share.loseCB()
            }
            if (LevelBase.Share.meatNode.isValid && Utility.getWorldDis(this.node, LevelBase.Share.meatNode) <= 20) {
                LevelBase.Share.loseCB()
            }
        }
    }
}
