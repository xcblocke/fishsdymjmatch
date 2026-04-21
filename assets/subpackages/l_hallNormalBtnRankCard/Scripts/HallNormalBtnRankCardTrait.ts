import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { DataReader } from '../../../Scripts/framework/data/DataReader';
import Trait from '../../../Scripts/framework/trait/Trait';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import NodeSkinTool from '../../../Scripts/NodeSkinTool';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("HallNormalBtnRankCardTrait")
export default class HallNormalBtnRankCardTrait extends Trait {
  static traitKey = "HallNormalBtnRankCard";
  get haveCardConfigList() {
    var t,
      e = (null === (t = this.traitData.config) || void 0 === t ? void 0 : t.haveCardSkinKey) || "HallNormalBtnRankCard";
    return DataReader.getTypeList(ConfigType.mainGameTopSkin, "SkinKey", e);
  }
  get noCardConfigList() {
    var t,
      e = (null === (t = this.traitData.config) || void 0 === t ? void 0 : t.noCardSkinKey) || "HallNormalBtnNoCard";
    return DataReader.getTypeList(ConfigType.mainGameTopSkin, "SkinKey", e);
  }
  onLoad() {
    super.onLoad.call(this);
  }
  onHallNmlBtn_onLoad(t, e) {
    try {
      var r = t.ins,
        o = null == r ? void 0 : r.BgBtnNode;
      if (!cc.isValid(o)) {
        e();
        return;
      }
      this.createCardNode(o);
      e();
    } catch (t) {
      console.error("[" + HallNormalBtnRankCardTrait.traitKey + "] onHallNmlBtn_onLoad 错误: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onHallNmlBtn_updateUI(t, e) {
    try {
      var r = t.ins,
        o = null == r ? void 0 : r.BgBtnNode;
      this.updateCardDisplay(o);
      e();
    } catch (t) {
      console.error("[" + HallNormalBtnRankCardTrait.traitKey + "] onHallNmlBtn_updateUI 错误: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onHallNmlBtn_forceUpdate(t, e) {
    try {
      var r = t.ins,
        o = null == r ? void 0 : r.BgBtnNode;
      this.checkShouldShow();
      this.updateCardDisplay(o);
      e();
    } catch (t) {
      console.error("[" + HallNormalBtnRankCardTrait.traitKey + "] onHallNmlBtn_forceUpdate 错误: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  createCardNode(t) {
    var e = this.noCardConfigList;
    cc.isValid(t) && e && 0 !== e.length && NodeSkinTool.parseConfigList(t, e, MjGameType.Normal, t.name);
  }
  updateCardDisplay(t) {
    if (cc.isValid(t)) if (this.checkShouldShow()) {
      NodeSkinTool.parseConfigList(t, this.haveCardConfigList, MjGameType.Normal, t.name);
      this.updateCardBg(cc.find("cardNode/cardBg", t));
      this.updateCardSprite(cc.find("cardNode/card", t));
    } else NodeSkinTool.parseConfigList(t, this.noCardConfigList, MjGameType.Normal, t.name);
  }
  checkShouldShow() {
    var t, e, a;
    try {
      var r = mj.getClassByName("RankModel");
      if (!r) return false;
      var o = null === (t = r.getInstance) || void 0 === t ? void 0 : t.call(r);
      return null !== (a = null === (e = null == o ? void 0 : o.hasOpeningActivity) || void 0 === e ? void 0 : e.call(o)) && void 0 !== a && a;
    } catch (t) {
      return false;
    }
  }
  updateCardBg(t) {
    if (cc.isValid(t)) {
      var e = CardUtil.getAtlasPathAndBundleName("gameplay_special_mj_2"),
        a = e.path,
        r = e.bundleName,
        o = e.fromAtlas;
      BaseSprite.refreshWithNode(t, a, o, false, r);
    }
  }
  updateCardSprite(t) {
    cc.isValid(t) && this.updateImgCard(t);
  }
  updateImgCard(t) {
    var e = UserModel.getInstance().getRankCardResName(),
      a = CardUtil.getAtlasPathAndBundleName(e),
      r = a.path,
      o = a.bundleName,
      i = a.fromAtlas;
    BaseSprite.refreshWithNode(t, r, i, false, o);
  }
}