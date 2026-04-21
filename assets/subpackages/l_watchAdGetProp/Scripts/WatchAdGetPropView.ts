import UIView from '../../../Scripts/framework/ui/UIView';
import { DotAdVisit } from '../../../Scripts/gamePlay/dot/DAdVisit';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { DotAdRewardEnter } from '../../../Scripts/gamePlay/dot/DAdRewardEnter';
import { EFreeItemClickType, DotGameBtnClick } from '../../../Scripts/dot/DGameBtnClick';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
export enum WatchAdGetPropType {
  shuffle = 0,
  hitTips = 1,
  revert = 2,
}
@mj.class
export default class WatchAdGetPropView extends UIView {
  _contentNode = null;
  _titleLabel = null;
  _descLabel = null;
  _btnLabel = null;
  _iconSprite = null;
  _btnClose = null;
  _btnConfirm = null;
  static prefabUrl = "prefabs/ui/WatchAdGetPropsView";
  static bundleName = "mainRes";
  static getConfig(t) {
    switch (t) {
      case WatchAdGetPropType.shuffle:
        return {
          type: WatchAdGetPropType.shuffle,
          title: "Free Shuffle",
          desc: "Watch an ad to get a Shuffle",
          titleKey: "MahjongTiles_PropPurchase_Title_1",
          descKey: "MahjongTiles_PropPurchase_Purchase_1",
          btnKey: "MahjongTiles_Revive_Option_1",
          iconPath: "texture/common/ad_icon_refresh"
        };
      case WatchAdGetPropType.hitTips:
        return {
          type: WatchAdGetPropType.hitTips,
          title: "Free Hint",
          desc: "Watch an ad to get a Hint",
          titleKey: "MahjongTiles_PropPurchase_Title_2",
          descKey: "MahjongTiles_PropPurchase_Purchase_2",
          btnKey: "MahjongTiles_PropPurchase_Get_1",
          iconPath: "texture/common/ad_icon_hint"
        };
      case WatchAdGetPropType.revert:
        return {
          type: WatchAdGetPropType.revert,
          title: "Free Revert",
          desc: "Watch an ad to get a Revert",
          titleKey: "Tiles_PropPurchase_Title_3",
          descKey: "MahjongTiles_PropPurchase_Purchase_3",
          btnKey: "MahjongTiles_PropPurchase_Get_1",
          iconPath: "texture/common/ad_icon_revert"
        };
      default:
        return null;
    }
  }
  getDescNode() {
    var t, e;
    return null !== (e = null === (t = this._descLabel) || void 0 === t ? void 0 : t.node) && void 0 !== e ? e : null;
  }
  @mj.traitEvent("WatchAdVw_onLoad")
  onLoad() {
    var e, r, o;
    super.onLoad.call(this);
    this._contentNode = this.node.getChildByName("content_node");
    if (this._contentNode) {
      this._titleLabel = null === (e = this._contentNode.getChildByName("title")) || void 0 === e ? void 0 : e.getComponent(cc.Label);
      this._descLabel = null === (r = this._contentNode.getChildByName("desc")) || void 0 === r ? void 0 : r.getComponent(cc.Label);
      this._iconSprite = null === (o = this._contentNode.getChildByName("icon")) || void 0 === o ? void 0 : o.getComponent(cc.Sprite);
      this._btnClose = this._contentNode.getChildByName("btn_close");
      this._btnConfirm = this._contentNode.getChildByName("btn_sure");
      this._btnConfirm && (this._btnLabel = this._btnConfirm.getComponentInChildren(cc.Label));
      this.registerButtons();
    } else console.error("[WatchAdGetPropView] 找不到 content_node");
  }
  registerButtons() {
    this._btnClose && this.OnButtonClick(this._btnClose, this.onCloseClick.bind(this));
    this._btnConfirm && this.OnButtonClick(this._btnConfirm, this.onConfirmClick.bind(this));
  }
  @mj.traitEvent("WatchAdVw_setContent")
  async setContent(t) {
    var e, o;
    var i, n;
    if (!(i = WatchAdGetPropView.getConfig(t))) {
      console.error("[WatchAdGetPropView] 无效的道具类型:", t);
      return;
    }
    (null === (e = this._titleLabel) || void 0 === e ? void 0 : e.node) && I18NStrings.setText(this._titleLabel.node, i.title, i.titleKey);
    (null === (o = this._descLabel) || void 0 === o ? void 0 : o.node) && I18NStrings.setText(this._descLabel.node, i.desc, i.descKey);
    this._btnLabel && I18NStrings.setText(this._btnLabel.node, "Sure", i.btnKey);
    await this.loadIcon(i.iconPath);
    n = t === WatchAdGetPropType.shuffle ? EFreeItemClickType.shuffleDisplayed : t === WatchAdGetPropType.hitTips ? EFreeItemClickType.hintDisplayed : EFreeItemClickType.revertDisplayed;
    DotGameBtnClick.dotFreeItem(n);
    return;
  }
  async loadIcon(t) {
    var e = this;
    if (!this._iconSprite) {
      console.error("[WatchAdGetPropView] 找不到图标Sprite组件");
      return;
    }
    try {
      this._iconSprite.node.active = false;
      this.delegate.loadRes(t, cc.SpriteFrame, "mainRes").then(function (t) {
        if (t && cc.isValid(e._iconSprite)) {
          e._iconSprite.node.active = true;
          e._iconSprite.spriteFrame = t;
        }
      });
    } catch (e) {
      console.error("[WatchAdGetPropView] 图标加载失败:", t, e);
    }
    return;
  }
  @mj.traitEvent("WatchAdVw_closeClick")
  onCloseClick() {
    var t,
      e = this.delegate.getPropType(),
      r = this._getAdPosition(e);
    t = e === WatchAdGetPropType.shuffle ? EFreeItemClickType.shuffleClosed : e === WatchAdGetPropType.hitTips ? EFreeItemClickType.hintClosed : EFreeItemClickType.revertClosed;
    DotAdVisit.dotAdVisitRewardAD(r, false);
    DotGameBtnClick.dotFreeItem(t);
    this.delegate.close();
  }
  _getAdPosition(t) {
    return t === WatchAdGetPropType.shuffle ? EAdPosition.InGameMotivation_Reshuffle : t === WatchAdGetPropType.hitTips ? EAdPosition.InGameMotivation_Hint : t === WatchAdGetPropType.revert ? EAdPosition.InGameMotivation_Revert : EAdPosition.InGameMotivation_Hint;
  }
  onConfirmClick() {
    var t,
      e = this.delegate.getPropType(),
      r = this._getAdPosition(e);
    t = e === WatchAdGetPropType.shuffle ? EFreeItemClickType.shuffleGain : e === WatchAdGetPropType.hitTips ? EFreeItemClickType.hintGain : EFreeItemClickType.revertGain;
    DotAdVisit.dotAdVisitRewardAD(r, true);
    DotAdRewardEnter.dot(false, r);
    DotGameBtnClick.dotFreeItem(t);
    this.delegate.playAd();
  }
}