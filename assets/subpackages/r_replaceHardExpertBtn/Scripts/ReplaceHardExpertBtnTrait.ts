import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import TravelGameData from '../../../Scripts/core/simulator/data/TravelGameData';
import Trait from '../../../Scripts/framework/trait/Trait';
import { EVT_MSG_HALL_FORCE_UPDATE } from '../../../Scripts/base/event/EventDefine';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("ReplaceHardExpertBtnTrait")
export default class ReplaceHardExpertBtnTrait extends Trait {
  static traitKey = "ReplaceHardExpertBtn";
  static BUNDLE_NAME = "r_replaceHardExpertBtn";
  onHallVw_updateUI(t, e) {
    this.dispatchEvent(EVT_MSG_HALL_FORCE_UPDATE);
    e();
  }
  onHallNmlBtn_updateUI(t, e) {
    this.isValentineEffectActive() || this.updateHallNormalBtn(t.ins);
    e();
  }
  onHallNmlBtn_forceUpdate(t, e) {
    this.isValentineEffectActive() || this.updateHallNormalBtn(t.ins);
    e();
  }
  onTLMapVw_viewShow(t, e) {
    this.updateTravelMapBtn(t.ins);
    e();
  }
  onWinVw_showWinVw(t, e) {
    this.updateWinViewBtn(t.ins);
    e();
  }
  onTLWinVw_showTLWinVw(t, e) {
    this.updateTLWinViewBtn(t.ins);
    e();
  }
  updateWinViewBtn(t) {
    if (cc.isValid(t.node)) {
      var e = this.isNormalHard(),
        n = this.isNormalExpert(),
        a = t._btnNext,
        i = cc.find("content/bg_up", a);
      if (e || n) {
        var o = n ? "texture/main_btn_red_up" : "texture/main_btn_purple_up";
        BaseSprite.refreshWithNode(i, o, false, true, ReplaceHardExpertBtnTrait.BUNDLE_NAME);
      } else BaseSprite.refreshWithNode(i, "texture/win/result_btn_up", false, true);
    }
  }
  updateTLWinViewBtn(t) {
    if (cc.isValid(t.node)) {
      var e = this.isTravelHard(),
        n = t._btnNext,
        a = cc.find("content/bg_up", n);
      if (e) {
        BaseSprite.refreshWithNode(a, "texture/main_btn_purple_up", false, true, ReplaceHardExpertBtnTrait.BUNDLE_NAME);
      } else {
        BaseSprite.refreshWithNode(a, "texture/win/result_btn_up", false, true);
      }
    }
  }
  updateTravelMapBtn(t) {
    if (cc.isValid(t.node)) {
      var e = this.isTravelHard(),
        n = cc.find("Bottom/LevelBtn/BgBtn", t.node);
      if (e) {
        BaseSprite.refreshWithNode(n, "texture/main_btn_purple_up", false, true, ReplaceHardExpertBtnTrait.BUNDLE_NAME);
      } else {
        BaseSprite.refreshWithNode(n, "texture/win/result_btn_up", false, true);
      }
    }
  }
  updateHallNormalBtn(t) {
    if (cc.isValid(t.node)) {
      var e = this.isNormalHard(),
        n = this.isNormalExpert(),
        a = cc.find("BgBtn", t.node);
      if (e || n) {
        var i = n ? "texture/main_btn_red_up" : "texture/main_btn_purple_up";
        BaseSprite.refreshWithNode(a, i, false, true, ReplaceHardExpertBtnTrait.BUNDLE_NAME);
      } else BaseSprite.refreshWithNode(a, "texture/win/result_btn_up", false, true);
    }
  }
  isNormalHard() {
    var t = UserModel.getInstance().getMainGameData().getLevelId();
    return ExtractTool.getInstance().isHardUI(t);
  }
  isNormalExpert() {
    var t = UserModel.getInstance().getMainGameData().getLevelId();
    return ExtractTool.getInstance().isExpertUI(t);
  }
  isTravelHard() {
    var t = TravelGameData.getInstance().getLevelId();
    return TravelGameModel.getInstance().isHardLevel(t);
  }
  isValentineEffectActive() {
    var t,
      e = mj.getClassByName("ValentineModel");
    return null != e && (null === (t = e.getInstance()) || void 0 === t ? void 0 : t.isEffectActive());
  }
}