import { UIManager, UIType } from "./UIManager";
import { ItemConfig } from "./Config/ItemConfig";
import AnswerItem from "./AnswerItem";
import Tips from "./Tips";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {
  @property(cc.Label)
  titleLabel: cc.Label = null;
  @property(cc.Label)
  numLabel: cc.Label = null;
  @property(cc.Node)
  gameNode: cc.Node = null;
  @property(cc.Prefab)
  answerItemPrefab: cc.Prefab = null;
  @property(cc.Node)
  answerParent: cc.Node = null;
  @property(Tips)
  tip: Tips = null;
  @property(cc.Node)
  showAnswerBtn: cc.Node = null;

  public static instance: Game = null;
  private _curItemId: number = 0;
  private _allItemList: cc.Node[] = [];
  private _wrongList: number[] = [];
  private _selectList: number[] = [];
  private _itemData = null;

  onLoad() {
    Game.instance = this;
    this.gameNode.active = false;
  }

  startGame() {
    this.gameNode.active = true;
    this._allItemList = [];
    this.answerParent.destroyAllChildren();
    this._selectList = [];
    this._itemData = null;
    this._curItemId = 0;
    this._wrongList = [];
    this._updateContent()
  }

  _updateContent() {
    this._allItemList.forEach(node => {
      node.active = false;
      node.getComponent(AnswerItem).toggle.isChecked = false;
    });
    this._selectList = [];
    this.showAnswerBtn.active = false;

    this._itemData = ItemConfig.getItemConfigById(this._curItemId);
    this.titleLabel.string = this._itemData.title;
    this.numLabel.string = (this._curItemId + 1).toString();
    this._itemData.options.forEach((option, i) => {
      let item = this._allItemList[i];
      if (!this._allItemList[i]) {
        item = cc.instantiate(this.answerItemPrefab);
        item.name = `answer${i}`;
        this._allItemList.push(item);
      } else {
        item.active = true;
      }
      item.parent = this.answerParent;
      item.getComponent(AnswerItem).init(this, option);
    });
  }

  updateSelectList(selectIndex: number) {
    if (this._selectList.includes(selectIndex)) {
      const index = this._selectList.indexOf(selectIndex);
      this._selectList.splice(index, 1);
    } else {
      this._selectList.push(selectIndex);
    }
    this._selectList.sort();
  }

  onClickEvent(evt, parm) {
    switch (parm) {
      case "submit":
        if (this._isEquals(this._selectList, this._itemData.answerIdList)) {
          this._curItemId++;
          const len = ItemConfig.getItemsLength();
          const isOver = this._curItemId > len - 1;
          if (isOver) {
            UIManager.instance.showUI(UIType.SecretUI, len - this._wrongList.length);
            return;
          }
          this.scheduleOnce(() => {
            this._updateContent();
          }, 0.5);
          this.tip.showTips(true);
        } else {
          this._recordWrongCount();
          this.tip.showTips(false);
          this.showAnswerBtn.active = true;
        }
        break;
      case "showAnswer":
        // 先清空之前的数据
        this._allItemList.forEach((node, index) => {
          node.getComponent(AnswerItem).toggle.isChecked = false;
        });
        this._selectList = [];
        for (let i = 0, len = this._allItemList.length; i < len; i++) {
          for (let j = 0, len = this._itemData.answerIdList.length; j < len; j++) {
            const item = this._allItemList[i].getComponent(AnswerItem);
            const answerId = this._itemData.answerIdList[j];
            if (item.getItemId() == answerId) {
              item.toggle.isChecked = true;
              this._selectList.push(item.getItemId());
            }
          }
        }
        break;
    }
  }

  _recordWrongCount() {
    if (!this._wrongList.includes(this._itemData.id)) {
      this._wrongList.push(this._itemData.id);
    }
  }

  _isEquals(a, b) {
    return JSON.stringify(a.sort()) === JSON.stringify(b.sort());
  }
}
