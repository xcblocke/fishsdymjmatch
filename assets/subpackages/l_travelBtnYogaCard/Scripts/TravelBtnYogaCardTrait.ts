import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { DataReader } from '../../../Scripts/framework/data/DataReader';
import Trait from '../../../Scripts/framework/trait/Trait';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import NodeSkinTool from '../../../Scripts/NodeSkinTool';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
@mj.trait
@mj.class("TravelBtnYogaCardTrait")
export default class TravelBtnYogaCardTrait extends Trait {
  static traitKey = "TravelBtnYogaCard";
  get haveCardConfigList() {
    var e,
      t = (null === (e = this.traitData.config) || void 0 === e ? void 0 : e.haveCardSkinKey) || "HallTravelBtnHaveCard";
    return DataReader.getTypeList(ConfigType.mainGameTopSkin, "SkinKey", t);
  }
  get noCardConfigList() {
    var e,
      t = (null === (e = this.traitData.config) || void 0 === e ? void 0 : e.noCardSkinKey) || "HallTravelBtnNoCard";
    return DataReader.getTypeList(ConfigType.mainGameTopSkin, "SkinKey", t);
  }
  onTravelBtn_onLoad(e, t) {
    try {
      var a = e.ins,
        o = null == a ? void 0 : a.rootNode;
      if (!cc.isValid(o)) {
        t();
        return;
      }
      this.createCardNode(o);
      t();
    } catch (e) {
      console.error("[" + TravelBtnYogaCardTrait.traitKey + "] onTravelBtn_onLoad 错误: " + (null == e ? void 0 : e.message));
      t();
    }
  }
  onTravelBtn_updateUI(e, t) {
    try {
      var a = e.ins,
        o = null == a ? void 0 : a.rootNode;
      this.updateCardDisplay(o, null == a ? void 0 : a.journeyKey);
      t();
    } catch (e) {
      console.error("[" + TravelBtnYogaCardTrait.traitKey + "] onTravelBtn_updateUI 错误: " + (null == e ? void 0 : e.message));
      t();
    }
  }
  createCardNode(e) {
    var t = this.noCardConfigList;
    cc.isValid(e) && t && 0 !== t.length && NodeSkinTool.parseConfigList(e, t, MjGameType.Normal, e.name);
  }
  updateCardDisplay(e, t) {
    if (cc.isValid(e)) {
      var r = TravelGameModel.getInstance().isUnlocked();
      if (t && r) {
        NodeSkinTool.parseConfigList(e, this.haveCardConfigList, MjGameType.Normal, e.name);
        this.updateCardSprite(cc.find("cardNode/card", e), t);
      } else {
        NodeSkinTool.parseConfigList(e, this.noCardConfigList, MjGameType.Normal, e.name);
        if (!r) {
          var a = e.getChildByName("Title");
          a && (a.x = 30);
        }
      }
    }
  }
  updateCardSprite(e, t) {
    if (cc.isValid(e)) try {
      var a = TravelGameModel.getInstance().getConfig(t);
      if (!(null == a ? void 0 : a.yoga)) return;
      var o = "texture/journey/yoga/" + a.yoga;
      BaseSprite.refreshWithNode(e, o, false, false, "mainRes");
    } catch (e) {
      console.error("[" + TravelBtnYogaCardTrait.traitKey + "] 刷新瑜伽牌图片失败: " + (null == e ? void 0 : e.message));
    }
  }
}