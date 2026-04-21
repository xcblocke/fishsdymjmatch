import UIView from '../../../Scripts/framework/ui/UIView';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import { DotAdRewardEnter } from '../../../Scripts/gamePlay/dot/DAdRewardEnter';
import { DotAdVisit } from '../../../Scripts/gamePlay/dot/DAdVisit';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
@mj.class
export class UILanguageLockView extends UIView {
  @mj.component("imgCardBg/imgCard", cc.Sprite)
  _imgCard: "imgCardBg/imgCard" = null;
  @mj.node("content_node/btn_sure")
  _btnSure: "content_node/btn_sure" = null;
  @mj.node("item_adFailTips")
  _itemAdFailTips: "item_adFailTips" = null;
  @mj.component("item_adFailTips/desc2", cc.Label)
  _desc2: "item_adFailTips/desc2" = null;
  @mj.node("btn_close")
  _closeBtn: "btn_close" = null;
  @mj.node("btn_close/img_line")
  _imgLine: "btn_close/img_line" = null;
  @mj.node("btn_close/txt_close")
  _txtClose: "btn_close/txt_close" = null;
  static prefabUrl = "prefab/UILanguageLockView";
  static bundleName = "r_changeBaseCardByLan";
  onLoad() {
    var e = this;
    super.onLoad.call(this);
    this.initEvents();
    cc.director.once(cc.Director.EVENT_AFTER_UPDATE, function () {
      e._imgLine.width = e._txtClose.width;
    });
  }
  initEvents() {
    this._closeBtn && this.OnButtonClick(this._closeBtn, this.onCloseClick.bind(this));
    this._btnSure && this.OnButtonClick(this._btnSure, this.onSureClick.bind(this));
  }
  onSureClick() {
    var t = EAdPosition.OpenSkinByLanguageAd;
    DotAdVisit.dotAdVisitRewardAD(t, true);
    DotAdRewardEnter.dot(false, t);
    this.delegate.playAd();
  }
  onCloseClick() {
    var t = EAdPosition.OpenSkinByLanguageAd;
    DotAdVisit.dotAdVisitRewardAD(t, false);
    this.delegate.close();
  }
  setCard(t, e) {
    if (this._imgCard && cc.isValid(this._imgCard.node)) {
      "l_lanCardJP" == e && (e = "mainRes");
      BaseSprite.refreshWithNode(this._imgCard.node, "atlas/cardIcon/" + t, true, true, e);
    }
  }
  onFail() {
    if (cc.isValid(this._itemAdFailTips)) {
      var t = this._itemAdFailTips;
      cc.Tween.stopAllByTarget(t);
      t.active = true;
      t.y = -100;
      t.scale = 0;
      t.opacity = 0;
      cc.tween(t).to(0.166, {
        y: 0,
        scale: 1,
        opacity: 255
      }, {
        easing: cc.easing.quartOut
      }).delay(0.494).to(0.24, {
        opacity: 0
      }).call(function () {
        cc.isValid(t) && (t.active = false);
      }).start();
    }
  }
}