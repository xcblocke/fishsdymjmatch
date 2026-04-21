import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
@mj.trait
@mj.class("StopFullComboInFirstTrait")
export default class StopFullComboInFirstTrait extends Trait {
  _isMainLineFirstLevel = false;
  static traitKey = "StopFullComboInFirst";
  onLoad() {
    super.onLoad.call(this);
  }
  isMainLineFirstLevel() {
    return this._isMainLineFirstLevel;
  }
  onInitViewBhv_crtTls(t, e) {
    var r,
      n,
      i,
      o = t.ins,
      a = (null == o ? void 0 : o.context) || (null == o ? void 0 : o._context),
      l = false,
      c = null === (n = null === (r = null == a ? void 0 : a.getTileMapObject) || void 0 === r ? void 0 : r.call(a)) || void 0 === n ? void 0 : n.gameContext;
    if ((null == c ? void 0 : c.gameType) === MjGameType.Normal) {
      var p = null === (i = null == c ? void 0 : c.getGameData) || void 0 === i ? void 0 : i.call(c),
        f = 1;
      if ("function" == typeof (null == p ? void 0 : p.getCurrentLevelId)) {
        f = p.getCurrentLevelId();
      } else {
        "function" == typeof (null == p ? void 0 : p.getLevelId) && (f = p.getLevelId());
      }
      if (1 === f) {
        l = true;
        ExtractTool.getInstance().isFixedLevel(1) || (l = false);
      }
    }
    this._isMainLineFirstLevel = l;
    e();
  }
  onFullComboChk_canFullCb(t, e) {
    if (this.isMainLineFirstLevel()) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: false
      });
    } else {
      e();
    }
  }
  onRwdComboChk_sTriNow(t, e) {
    if (this.isMainLineFirstLevel()) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: false
      });
    } else {
      e();
    }
  }
  onMotivWdsChk_canShow(t, e) {
    if (this.isMainLineFirstLevel()) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: false
      });
    } else {
      e();
    }
  }
  onComboChk_canShowCombo(t, e) {
    if (this.isMainLineFirstLevel()) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: false
      });
    } else {
      e();
    }
  }
  onDianZanTt_checkDZSpecial(t, e) {
    if (this.isMainLineFirstLevel()) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: false
      });
    } else {
      e();
    }
  }
}