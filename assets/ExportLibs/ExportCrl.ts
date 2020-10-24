import { ExportDir } from "./ExportUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ExportCrl extends cc.Component {

    onLoad() {
        this.node.setContentSize(cc.view.getVisibleSize())
        this.node.setPosition(cc.v2(this.node.getContentSize().width / 2, this.node.getContentSize().height / 2))
    }

    start() {

    }

    showJJUI(dir: ExportDir, param?: any, callback?: Function) {
        for (let i = 0; i < this.node.childrenCount; i++) {
            this.node.children[i].zIndex = this.node.children[i].name == dir ? 999 : 100
        }
        this.node.getChildByName(dir).getComponent(dir).showUI(callback, param)
    }

    closeJJUI(dir: ExportDir) {
        this.node.getChildByName(dir).active = false
    }

    closeAllJJUI() {
        for (let i = 0; i < this.node.childrenCount; i++) {
            this.node.children[i].active = false
            this.node.children[i].getComponent(this.node.children[i].name).unscheduleAllCallbacks()
        }
    }

    // update (dt) {}
}
