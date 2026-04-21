import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("CardBack3Trait")
export default class CardBack3Trait extends Trait {
  _curCardBackInd = -1;
  _curCardBack = "default";
  _switchType = CardBack3Trait.TYPE_SEQUENTIAL;
  static traitKey = "CardBack3";
  static BUNDLE_NAME = "r_cardBack";
  static TYPE_SEQUENTIAL = 1;
  static TYPE_RANDOM = 2;
  static CARD_BACKS = ["default", "blue", "cyan", "pink", "purple", "red"];
  onLoad() {
    var r;
    super.onLoad.call(this);
    this._switchType = (null === (r = this._traitData) || void 0 === r ? void 0 : r.t) || CardBack3Trait.TYPE_SEQUENTIAL;
    this._switchType, CardBack3Trait.TYPE_RANDOM;
  }
  getCurrentGameType() {
    return UserModel.getInstance().getCurrentGameType();
  }
  getCurCardBack() {
    var t = this.getCurrentGameType();
    return this.localData[t] || "default";
  }
  setCurCardBack(t) {
    var r = this.getCurrentGameType();
    this.localData[r] = t;
    this.localData = this.localData;
  }
  switchToNextCardBack() {
    var t = this.getCurCardBack();
    if (t && CardBack3Trait.CARD_BACKS.includes(t)) {
      this._curCardBackInd = CardBack3Trait.CARD_BACKS.indexOf(t);
    } else {
      this._curCardBackInd = -1;
    }
    if (this._switchType === CardBack3Trait.TYPE_RANDOM) {
      this._curCardBackInd = Math.floor(Math.random() * CardBack3Trait.CARD_BACKS.length);
    } else {
      this._curCardBackInd = (this._curCardBackInd + 1) % CardBack3Trait.CARD_BACKS.length;
    }
    (this._curCardBackInd < 0 || this._curCardBackInd >= CardBack3Trait.CARD_BACKS.length) && (this._curCardBackInd = 0);
    this._curCardBack = CardBack3Trait.CARD_BACKS[this._curCardBackInd];
    this.setCurCardBack(this._curCardBack);
  }
  onGsListener_onNewGame(t, r) {
    try {
      this.getCurrentGameType();
      this.switchToNextCardBack();
      this._switchType, CardBack3Trait.TYPE_RANDOM;
      r();
    } catch (t) {
      console.error("[" + CardBack3Trait.traitKey + "] 切换卡背失败: " + (null == t ? void 0 : t.message));
      r();
    }
  }
  onCardUtil_atlasPathBundle(t, r) {
    var e;
    try {
      var i = null === (e = t.args) || void 0 === e ? void 0 : e[0];
      if ("gameplay_img_mj_dn" === i || "gameplay_img_mj_up" === i) {
        var c = this.getCurCardBack();
        this.getCurrentGameType();
        if ("default" === c) {
          r();
          return;
        }
        var n = "texture/" + c + "/" + i;
        r({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: {
            path: n,
            bundleName: CardBack3Trait.BUNDLE_NAME,
            fromAtlas: false
          }
        });
        return;
      }
      r();
    } catch (t) {
      console.error("[" + CardBack3Trait.traitKey + "] 劫持牌背图片失败: " + (null == t ? void 0 : t.message));
      r();
    }
  }
  onTileNodeObj_playAnim(t, r) {
    var e;
    try {
      if ("spine/rollcard/gameplay_flip" === (null === (e = t.args) || void 0 === e ? void 0 : e[0])) {
        var i = this.getCurCardBack();
        this.getCurrentGameType();
        if ("default" === i) {
          r();
          return;
        }
        var c = "spine/" + i + "/gameplay_flip";
        t.args[0] = c;
        t.args[6] = CardBack3Trait.BUNDLE_NAME;
        r();
        return;
      }
      r();
    } catch (t) {
      console.error("[" + CardBack3Trait.traitKey + "] 劫持翻转光效失败: " + (null == t ? void 0 : t.message));
      r();
    }
  }
  onUserModel_cardBackColor(t, r) {
    try {
      var e = this.getCurrentGameType(),
        i = this.localData[e] || "default";
      r({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: i
      });
    } catch (t) {
      console.error("[" + CardBack3Trait.traitKey + "] 劫持 UserModel.getCardBackColor 失败: " + (null == t ? void 0 : t.message));
      r();
    }
  }
}