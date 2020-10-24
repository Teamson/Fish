
const { ccclass, property } = cc._decorator;

@ccclass
export default class Utility {

    public static loadSpriteFrame(spName: string, sprite: cc.Sprite, cb?: Function) {
        //加载SpriteAtlas(图集)，并获取其中一张图片
        cc.loader.loadRes(spName, cc.SpriteFrame, function (err, spriteFrame) {
            sprite.spriteFrame = spriteFrame
            cb && cb()
        })
    }

    public static loadSpAtlas(atlasName: string, spfName: string, sprite: cc.Sprite) {
        //加载SpriteAtlas(图集)，并获取其中一张图片
        cc.loader.loadRes(atlasName, cc.SpriteAtlas, function (err, atlas) {
            sprite.spriteFrame = atlas.getSpriteFrame(spfName);
        })
    }

    //打乱数组
    public static shuffleArr(arr: any[]) {
        let i = arr.length;
        while (i) {
            let j = Math.floor(Math.random() * i--);
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    //数字前补0
    public static joinZero(length: number, num: number) {
        return (Array(length).join('0') + num).slice(-length);
    }

    public static getWorldPos(node: cc.Node, point: cc.Vec2 = cc.v2(0, 0)): cc.Vec2 {
        return node.convertToWorldSpaceAR(point)
    }

    public static getWorldDis(node1: cc.Node, node2: cc.Node) {
        let p1: cc.Vec2 = this.getWorldPos(node1)
        let p2: cc.Vec2 = this.getWorldPos(node2)
        return (p1.sub(p2)).mag()
    }

    public static getWorldDir(from: cc.Node, to: cc.Node): cc.Vec2 {
        let p1: cc.Vec2 = this.getWorldPos(from)
        let p2: cc.Vec2 = this.getWorldPos(to)
        let dir = p2.sub(p1).normalizeSelf()
        return dir
    }

    public static delayActive(node: cc.Node, duration: number, target) {
        node.active = false
        target.scheduleOnce(() => { node.active = true }, duration)
    }

    public static getRandomItemInArr(arr: any[]): any {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    public static getRandomItemInArrWithoutSelf(self: any, arr: any[], count: number = 1) {
        let temp: any = [].concat(arr)
        temp.splice(temp.indexOf(self), 1)
        temp = this.shuffleArr(temp)
        return temp.slice(0, count)
    }

    public static rotateLoop(node: cc.Node, duration: number, rate: number) {
        let a1 = cc.rotateBy(duration, -rate)
        let a2 = cc.rotateBy(duration * 2, rate * 2)
        let a3 = cc.rotateBy(duration, -rate)
        let a4 = cc.sequence(a1, a2, a3)
        node.stopAllActions()
        node.runAction(cc.repeatForever(a4))
    }

    public static GetRandom(mix, max, isInt = true) {
        let w = max - mix
        let r1 = Math.random() * w
        r1 += mix
        return isInt ? Math.floor(r1) : r1
    }

    public static checkInsection(pNode: cc.Node, rNode: cc.Node) {
        let p1 = this.getWorldPos(pNode)
        let rPos = this.getWorldPos(rNode)
        let x1 = rPos.x - rNode.width / 2
        let x2 = rPos.x + rNode.width / 2
        let y1 = rPos.y - rNode.height / 2
        let y2 = rPos.y + rNode.height / 2
        return p1.x >= x1 && p1.x <= x2 && p1.y >= y1 && p1.y <= y2
    }
}
