import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { DataReader } from '../../../Scripts/framework/data/DataReader';
import Trait from '../../../Scripts/framework/trait/Trait';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import NodeSkinTool from '../../../Scripts/NodeSkinTool';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("WinNextBtnRankCardTrait")
export default class WinNextBtnRankCardTrait extends Trait {
  static traitKey = "WinNextBtnRankCard";
  get haveCardConfigList() {
    var e,
      t = (null === (e = this.traitData.config) || void 0 === e ? void 0 : e.haveCardSkinKey) || "WinBtnLevelRankCard";
    return DataReader.getTypeList(ConfigType.mainGameTopSkin, "SkinKey", t);
  }
  get noCardConfigList() {
    var e,
      t = (null === (e = this.traitData.config) || void 0 === e ? void 0 : e.noCardSkinKey) || "WinBtnLevelNoCard";
    return DataReader.getTypeList(ConfigType.mainGameTopSkin, "SkinKey", t);
  }
  onTile2WinVw_onLoad(e, t) {
    try {
      var a = e.ins,
        i = null == a ? void 0 : a.btnNextNode;
      cc.isValid(i) && this.createCardNode(i);
    } catch (e) {
      console.error("[" + WinNextBtnRankCardTrait.traitKey + "] onTile2WinVw_onLoad 错误: " + (null == e ? void 0 : e.message));
    }
    t();
  }
  onWinVw_onLoad(e, t) {
    try {
      var a = e.ins,
        i = null == a ? void 0 : a.btnNextNode;
      cc.isValid(i) && this.createCardNode(i);
    } catch (e) {
      console.error("[" + WinNextBtnRankCardTrait.traitKey + "] onWinVw_onLoad 错误: " + (null == e ? void 0 : e.message));
    }
    t();
  }
  onTile2WinVw_show(e, t) {
    try {
      var a = e.ins,
        i = null == a ? void 0 : a.btnNextNode;
      this.updateCardDisplay(i);
    } catch (e) {
      console.error("[" + WinNextBtnRankCardTrait.traitKey + "] onTile2WinVw_show 错误: " + (null == e ? void 0 : e.message));
    }
    t();
  }
  onWinVw_showWinVw(e, t) {
    try {
      var a = e.ins,
        i = null == a ? void 0 : a.btnNextNode;
      this.updateCardDisplay(i);
    } catch (e) {
      console.error("[" + WinNextBtnRankCardTrait.traitKey + "] onWinVw_showWinVw 错误: " + (null == e ? void 0 : e.message));
    }
    t();
  }
  createCardNode(e) {
    var t = this.noCardConfigList;
    cc.isValid(e) && t && 0 !== t.length && NodeSkinTool.parseConfigList(e, t, MjGameType.Normal, e.name);
  }
  updateCardDisplay(e) {
    if (cc.isValid(e)) if (this.checkShouldShow()) {
      NodeSkinTool.parseConfigList(e, this.haveCardConfigList, MjGameType.Normal, e.name);
      this.updateCardBg(cc.find("cardNode/cardBg", e));
      this.updateCardSprite(cc.find("cardNode/card", e));
    } else NodeSkinTool.parseConfigList(e, this.noCardConfigList, MjGameType.Normal, e.name);
  }
  checkShouldShow() {
    var e, t, r;
    try {
      var a = mj.getClassByName("RankModel");
      if (!a) return false;
      var i = null === (e = a.getInstance) || void 0 === e ? void 0 : e.call(a);
      return null !== (r = null === (t = null == i ? void 0 : i.hasOpeningActivity) || void 0 === t ? void 0 : t.call(i)) && void 0 !== r && r;
    } catch (e) {
      return false;
    }
  }
  updateCardBg(e) {
    if (cc.isValid(e)) {
      var t = CardUtil.getAtlasPathAndBundleName("gameplay_special_mj_2"),
        r = t.path,
        a = t.bundleName,
        i = t.fromAtlas;
      BaseSprite.refreshWithNode(e, r, i, false, a);
    }
  }
  updateCardSprite(e) {
    cc.isValid(e) && this.updateImgCard(e);
  }
  updateImgCard(e) {
    var t = UserModel.getInstance().getRankCardResName(),
      r = CardUtil.getAtlasPathAndBundleName(t),
      a = r.path,
      i = r.bundleName,
      n = r.fromAtlas;
    BaseSprite.refreshWithNode(e, a, n, false, i);
  }
}