import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
var n = {
  DEFAULT: "default",
  BLUE: "blue",
  CYAN: "cyan",
  PINK: "pink",
  PURPLE: "purple",
  RED: "red"
};
@mj.trait
@mj.class("Flip2dCardBackTrait")
export default class Flip2dCardBackTrait extends Trait {
  _curCardBackInd = -1;
  _curCardBack = n.DEFAULT;
  _switchType = Flip2dCardBackTrait.TYPE_SEQUENTIAL;
  static traitKey = "Flip2dCardBack";
  static BUNDLE_NAME = "r_flip2dCardBack";
  static TYPE_SEQUENTIAL = 1;
  static TYPE_RANDOM = 2;
  static CARD_BACKS = [n.DEFAULT, n.BLUE, n.CYAN, n.PINK, n.PURPLE, n.RED];
  onLoad() {
    var r;
    super.onLoad.call(this);
    this._switchType = (null === (r = this._traitData) || void 0 === r ? void 0 : r.t) || Flip2dCardBackTrait.TYPE_SEQUENTIAL;
    var e = this.getCurCardBack(),
      i = !!this.localData.cardBack;
    this._switchType, Flip2dCardBackTrait.TYPE_RANDOM;
    if (i && Flip2dCardBackTrait.CARD_BACKS.includes(e)) {
      this._curCardBack = e;
      this._curCardBackInd = Flip2dCardBackTrait.CARD_BACKS.indexOf(e);
      this.switchToNextCardBack();
    } else {
      this._curCardBackInd = -1;
      this._curCardBack = n.DEFAULT;
      this.setCurCardBack(this._curCardBack);
    }
  }
  getCurCardBack() {
    return this.localData.cardBack || n.DEFAULT;
  }
  setCurCardBack(t) {
    this.localData.cardBack = t;
    UserModel.getInstance().setCardBackColor(t);
  }
  switchToNextCardBack() {
    if (this._switchType === Flip2dCardBackTrait.TYPE_RANDOM) {
      this._curCardBackInd = Math.floor(Math.random() * Flip2dCardBackTrait.CARD_BACKS.length);
    } else {
      this._curCardBackInd = (this._curCardBackInd + 1) % Flip2dCardBackTrait.CARD_BACKS.length;
    }
    (this._curCardBackInd < 0 || this._curCardBackInd >= Flip2dCardBackTrait.CARD_BACKS.length) && (this._curCardBackInd = 0);
    this._curCardBack = Flip2dCardBackTrait.CARD_BACKS[this._curCardBackInd];
    this.setCurCardBack(this._curCardBack);
  }
  onGsListener_onNewGame(t, r) {
    this.switchToNextCardBack();
    this._switchType, Flip2dCardBackTrait.TYPE_RANDOM;
    r();
  }
  onGsListener_onReplayGame(t, r) {
    this.switchToNextCardBack();
    this._switchType, Flip2dCardBackTrait.TYPE_RANDOM;
    r();
  }
  onMainGameBtnBack_onClick(t, r) {
    this.switchToNextCardBack();
    this._switchType, Flip2dCardBackTrait.TYPE_RANDOM;
    r();
  }
  onUISetBtnBack_onBtnClk(t, r) {
    this.switchToNextCardBack();
    this._switchType, Flip2dCardBackTrait.TYPE_RANDOM;
    r();
  }
  onFlipCardEff_frontNode(t, r) {
    if ("default" !== this._curCardBack) {
      var e = BaseSprite.create("texture/" + this._curCardBack + "/gameplay_img_mj_up", Flip2dCardBackTrait.BUNDLE_NAME);
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: e.node
      });
    } else r();
  }
  onFlipCardEff_backNode(t, r) {
    if ("default" !== this._curCardBack) {
      var e = BaseSprite.create("texture/" + this._curCardBack + "/gameplay_img_mj_dn", Flip2dCardBackTrait.BUNDLE_NAME);
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: e.node
      });
    } else r();
  }
  onCardUtil_atlasPathBundle(t, r) {
    var e,
      i = null === (e = t.args) || void 0 === e ? void 0 : e[0];
    if ("gameplay_img_mj_dn" !== i && "gameplay_img_mj_up" !== i && "gameplay_select_mj" !== i) r();else {
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
          bundleName: Flip2dCardBackTrait.BUNDLE_NAME,
          fromAtlas: false
        }
      });
    }
  }
}