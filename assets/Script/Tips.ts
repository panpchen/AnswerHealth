// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Tips extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;
    @property(cc.Sprite)
    icon: cc.Sprite = null;
    @property(cc.SpriteFrame)
    textures: cc.SpriteFrame[] = [];

    private _isTweenOver = true;

    showTips(isCorrect: boolean) {
        if (!this._isTweenOver) {
            return;
        }
        this._isTweenOver = false;
        this.node.opacity = 255;
        this.node.scale = 1.2;
        if (isCorrect) {
            this.label.string = "答对了哦！";
            this.label.node.color = cc.color().fromHEX("#37D200");
            this.icon.spriteFrame = this.textures[0];
        } else {
            this.label.string = "答错了哦！";
            this.label.node.color = cc.color().fromHEX("#D28200");
            this.icon.spriteFrame = this.textures[1];
        }
        cc.tween(this.node)
            .to(0.2, { scale: 0.9 })
            .to(0.2, { scale: 1.2 })
            .delay(0.3)
            .to(0.2, { opacity: 0 })
            .call(() => {
                this._isTweenOver = true;
            })
            .start();
    }

}
