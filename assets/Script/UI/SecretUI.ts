import { ItemConfig } from "../Config/ItemConfig";
import Game from "../Game";
import { UIManager, UIType } from "../UIManager";
import BaseUI from "./BaseUI";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SecretUI extends BaseUI {
    @property(cc.Label)
    totalNumLabel: cc.Label = null;
    @property(cc.Label)
    tickNumLabel: cc.Label = null;

    init(correctNum) {
        this.totalNumLabel.string = `总体数:${ItemConfig.getItemsLength()}`;
        this.tickNumLabel.string = `答对数:${correctNum}`;
    }

    clickBackGame() {
        this.hide();
        UIManager.instance.showUI(UIType.MenuUI);
    }

    clickAgainGame() {
        this.hide();
        Game.instance.startGame();
    }

}
