import PlayerDataMgr from "../../Libs/PlayerDataMgr";
import Utility from "../../Mod/Utility";
import GameLogic from "../GameLogic";
import Player from "../Player";
import Meat from "../Prop/Meat";
import Needle from "../Prop/Needle";
import Sharp from "../Sharp";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LevelBase extends cc.Component {
    public static Share: LevelBase

    playerNode: cc.Node = null
    meatNode: cc.Node = null
    playerCrl: Player = null
    meatCrl: Meat = null
    DesNode: cc.Node = null
    levelCrl: any = null
    NeedleNode: cc.Node = null
    Sharp: cc.Node = null
    SharpCrl: Sharp = null

    canTouch: boolean = true
    isGameOver: boolean = false
    isWin: boolean = false

    onLoad() {
        LevelBase.Share = this
        this.playerNode = this.node.getChildByName('Player')
        this.meatNode = this.node.getChildByName('Meat')
        this.DesNode = this.node.getChildByName('Des')
        this.playerCrl = this.playerNode.getComponent(Player)
        this.meatCrl = this.meatNode.getComponent(Meat)
        this.levelCrl = this.node.getComponent('Level' + PlayerDataMgr.getPlayerData().grade)
        this.NeedleNode = this.node.getChildByName('NeedleNode')
        this.Sharp = this.node.getChildByName('Sharp')
        if (this.Sharp)
            this.SharpCrl = this.Sharp.getComponent(Sharp)
    }

    start() {

    }

    triggerNeedle(index: number, pIndex: number) {
        this.canTouch = false
        this.levelCrl['trigger' + index.toString() + pIndex.toString()]()
    }

    checkGotDes() {
        if (this.isGameOver) return
        if (Utility.getWorldDis(this.playerNode, this.DesNode) <= 20) {
            if (this.playerCrl.gotMeat) {
                this.winCB()
            } else {
                this.loseCB()
            }
        }
    }

    winCB() {
        if (this.isGameOver) return
        this.isGameOver = true
        this.isWin = true
        this.playerNode.stopAllActions()
        if (this.Sharp) this.Sharp.stopAllActions()
        GameLogic.Share.showFinishUI()
    }

    loseCB() {
        if (this.isGameOver) return
        this.isGameOver = true
        this.isWin = false
        this.playerNode.stopAllActions()
        if (this.Sharp) this.Sharp.stopAllActions()
        GameLogic.Share.showDefeatUI()
    }

    getNeedleCrlById(id: number): Needle {
        return this.NeedleNode.children[id].getComponent(Needle)
    }

    update(dt) {
        this.checkGotDes()
    }
}
