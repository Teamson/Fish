import PlayerAni from "../Crl/PlayerAni";
import PlayerDataMgr from "../Libs/PlayerDataMgr";
import AdMgr from "../Mod/AdMgr";
import Utility from "../Mod/Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GetFishUI extends cc.Component {

    @property(cc.Node)
    rootNode: cc.Node = null
    @property(cc.Node)
    rootNode1: cc.Node = null

    @property(cc.Node)
    itemNode: cc.Node = null


    @property(cc.Label)
    fishLvNum: cc.Label = null
    @property(cc.Node)
    nameNode: cc.Node = null

    @property(PlayerAni)
    playerAni: PlayerAni = null

    // onLoad () {}

    start() {

    }

    onEnable() {
        Utility.rootAction(this.rootNode, true, 0.1)
        this.initItemNode()
    }

    onDisable() {
    }

    closeGetFishUI() {
        Utility.rootAction(this.rootNode, false, 0.1, () => { this.node.active = false })
    }

    initItemNode() {
        for (let i = 0; i < this.itemNode.childrenCount; i++) {
            let item = this.itemNode.children[i]
            let dkNode = item.getChildByName('dkNode')
            let navNode = item.getChildByName('navNode')
            dkNode.children.forEach(d => {
                d.active = false
            });
            navNode.children.forEach(n => {
                n.active = false
            });
            switch (i) {
                case 0:
                    if (PlayerDataMgr.getPlayerData().grade < 3) {
                        dkNode.children[2].active = true
                        navNode.children[2].active = true
                    } else {
                        dkNode.children[0].active = true
                        navNode.children[0].active = true
                    }
                    break
                case 1:
                    if (PlayerDataMgr.getPlayerData().grade >= 3 && PlayerDataMgr.getPlayerData().grade < 8) {
                        dkNode.children[2].active = true
                        navNode.children[2].active = true
                    } else if (PlayerDataMgr.getPlayerData().grade >= 8) {
                        dkNode.children[0].active = true
                        navNode.children[0].active = true
                    } else {
                        dkNode.children[1].active = true
                        navNode.children[1].active = true
                    }
                    break
                case 2:
                    if (PlayerDataMgr.getPlayerData().grade >= 8 && PlayerDataMgr.getPlayerData().grade < 13) {
                        dkNode.children[2].active = true
                        navNode.children[2].active = true
                    } else if (PlayerDataMgr.getPlayerData().grade >= 13) {
                        dkNode.children[0].active = true
                        navNode.children[0].active = true
                    } else {
                        dkNode.children[1].active = true
                        navNode.children[1].active = true
                    }
                    break
                case 3:
                    if (PlayerDataMgr.getPlayerData().grade >= 13 && PlayerDataMgr.getPlayerData().grade < 18) {
                        dkNode.children[2].active = true
                        navNode.children[2].active = true
                    } else if (PlayerDataMgr.getPlayerData().grade >= 18) {
                        dkNode.children[0].active = true
                        navNode.children[0].active = true
                    } else {
                        dkNode.children[1].active = true
                        navNode.children[1].active = true
                    }
                    break
                case 4:
                    if (PlayerDataMgr.getPlayerData().grade >= 18) {
                        dkNode.children[2].active = true
                        navNode.children[2].active = true
                    } else {
                        dkNode.children[1].active = true
                        navNode.children[1].active = true
                    }
                    break
            }

            item.off(cc.Node.EventType.TOUCH_END)
            item.on(cc.Node.EventType.TOUCH_END, () => { this.showDetail(i) }, this)
        }
    }

    showDetail(id: number) {
        this.rootNode.active = false
        Utility.rootAction(this.rootNode1, true, 0.1)
        this.initFishData(id)
    }

    initFishData(lv: number) {
        this.playerAni.changeSkin(lv)
        this.fishLvNum.string = (lv + 1).toString()
        for (let i = 0; i < this.nameNode.childrenCount; i++) {
            this.nameNode.children[i].active = i == lv
        }
    }

    closeDetail() {
        Utility.rootAction(this.rootNode1, false, 0.1, () => {
            this.rootNode1.active = false
            this.rootNode.active = true
        })
    }

    // update (dt) {}
}
