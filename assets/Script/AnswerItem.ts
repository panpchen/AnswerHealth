// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Game from "./Game";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AnswerItem extends cc.Component {

    @property(cc.Toggle)
    toggle: cc.Toggle = null;
    @property(cc.Label)
    label: cc.Label = null;

    private _game: Game = null;
    private _itemId: number = 0;

    init(game: Game, text) {
        this._game = game;
        this._itemId = Number(this.node.name.replace(/[^0-9]/ig, ""));
        this.label.string = text;
        this.toggle.isChecked = false;
        // this.node.height = this.label.node.height;
    }

    onToggleEvent() {
        this._game.updateSelectList(this._itemId);
    }

    getItemId() {
        return this._itemId;
    }
}