import PlayerDataMgr from "../Libs/PlayerDataMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FinishUI extends cc.Component {



    onLoad() { }

    start() {

    }

    backCB() {
        PlayerDataMgr.getPlayerData().grade++
        PlayerDataMgr.setPlayerData()
        cc.director.loadScene('StartScene')
    }

    nextCB() {
        PlayerDataMgr.getPlayerData().grade++
        PlayerDataMgr.setPlayerData()
        cc.director.loadScene('GameScene')
    }

    update(dt) { }
}
