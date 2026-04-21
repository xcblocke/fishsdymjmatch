import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("CardBackTrait")
export default class CardBackTrait extends Trait {
  _curCardBackInd = -1;
  _curCardBack = "default";
  _switchType = CardBackTrait.TYPE_SEQUENTIAL;
  static traitKey = "CardBack";
  static BUNDLE_NAME = "r_cardBack";
  static TYPE_SEQUENTIAL = 1;
  static TYPE_RANDOM = 2;
  static CARD_BACKS = ["default", "blue", "cyan", "pink", "purple", "red"];
  onLoad() {
    var r;
    super.onLoad.call(this);
    this._switchType = (null === (r = this._traitData) || void 0 === r ? void 0 : r.t) || CardBackTrait.TYPE_SEQUENTIAL;
    var e = this.getCurCardBack(),
      i = !!this.localData.cardBack;
    this._switchType, CardBackTrait.TYPE_RANDOM;
    if (i && CardBackTrait.CARD_BACKS.includes(e)) {
      this._curCardBack = e;
      this._curCardBackInd = CardBackTrait.CARD_BACKS.indexOf(e);
      this.switchToNextCardBack();
    } else {
      this._curCardBackInd = -1;
      this._curCardBack = "default";
      this.setCurCardBack(this._curCardBack);
    }
  }
  getCurCardBack() {
    return this.localData.cardBack || "default";
  }
  setCurCardBack(t) {
    this.localData.cardBack = t;
    UserModel.getInstance().setCardBackColor(t);
  }
  switchToNextCardBack() {
    if (this._switchType === CardBackTrait.TYPE_RANDOM) {
      this._curCardBackInd = Math.floor(Math.random() * CardBackTrait.CARD_BACKS.length);
    } else {
      this._curCardBackInd = (this._curCardBackInd + 1) % CardBackTrait.CARD_BACKS.length;
    }
    (this._curCardBackInd < 0 || this._curCardBackInd >= CardBackTrait.CARD_BACKS.length) && (this._curCardBackInd = 0);
    this._curCardBack = CardBackTrait.CARD_BACKS[this._curCardBackInd];
    this.setCurCardBack(this._curCardBack);
  }
  onGsListener_onNewGame(t, r) {
    try {
      this.switchToNextCardBack();
      this._switchType, CardBackTrait.TYPE_RANDOM;
      r();
    } catch (t) {
      console.error("[" + CardBackTrait.traitKey + "] 切换卡背失败: " + (null == t ? void 0 : t.message));
      r();
    }
  }
  onGsListener_onReplayGame(t, r) {
    try {
      this.switchToNextCardBack();
      this._switchType, CardBackTrait.TYPE_RANDOM;
      r();
    } catch (t) {
      console.error("[" + CardBackTrait.traitKey + "] Replay切换卡背失败: " + (null == t ? void 0 : t.message));
      r();
    }
  }
  onMainGameBtnBack_onClick(t, r) {
    try {
      this.switchToNextCardBack();
      this._switchType, CardBackTrait.TYPE_RANDOM;
      r();
    } catch (t) {
      console.error("[" + CardBackTrait.traitKey + "] 返回大厅切换卡背失败: " + (null == t ? void 0 : t.message));
      r();
    }
  }
  onUISetBtnBack_onBtnClk(t, r) {
    try {
      this.switchToNextCardBack();
      this._switchType, CardBackTrait.TYPE_RANDOM;
      r();
    } catch (t) {
      console.error("[" + CardBackTrait.traitKey + "] 设置对话框返回切换卡背失败: " + (null == t ? void 0 : t.message));
      r();
    }
  }
  onCardUtil_atlasPathBundle(t, r) {
    var e;
    try {
      var i = null === (e = t.args) || void 0 === e ? void 0 : e[0];
      if ("gameplay_img_mj_dn" === i || "gameplay_img_mj_up" === i) {
        if ("default" === this._curCardBack) {
          r();
          return;
        }
        var c = "texture/" + this._curCardBack + "/" + i;
        r({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: {
            path: c,
            bundleName: CardBackTrait.BUNDLE_NAME,
            fromAtlas: false
          }
        });
        return;
      }
      r();
    } catch (t) {
      console.error("[" + CardBackTrait.traitKey + "] 劫持牌背图片失败: " + (null == t ? void 0 : t.message));
      r();
    }
  }
  onTileNodeObj_playAnim(t, r) {
    var e;
    try {
      if ("spine/rollcard/gameplay_flip" === (null === (e = t.args) || void 0 === e ? void 0 : e[0])) {
        if ("default" === this._curCardBack) {
          r();
          return;
        }
        var i = "spine/" + this._curCardBack + "/gameplay_flip";
        t.args[0] = i;
        t.args[6] = CardBackTrait.BUNDLE_NAME;
        r();
        return;
      }
      r();
    } catch (t) {
      console.error("[" + CardBackTrait.traitKey + "] 劫持翻转光效失败: " + (null == t ? void 0 : t.message));
      r();
    }
  }
}