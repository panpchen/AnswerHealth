// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class BgAni extends cc.Component {

    private _aniList: cc.Node[] = [];
    private _lastAniId: number = -1;

    onLoad() {
        this._aniList = this.node.children;
        this._aniList.forEach(node => {
            node.active = false;
        });
    }

    loadBg(aniId: number) {
        if (this._lastAniId != -1) {
            this._aniList[this._lastAniId].active = false;
        }
        this._aniList[aniId].active = true;
        this._lastAniId = aniId;
    }
}
