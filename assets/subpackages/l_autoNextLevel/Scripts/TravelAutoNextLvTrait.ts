import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("TravelAutoNextLvTrait")
export default class TravelAutoNextLvTrait extends Trait {
  canAutoNextLevel = false;
  triggeredAuto = false;
  static traitKey = "TravelAutoNextLv";
  get delayTime() {
    var t, e;
    return null !== (e = null === (t = this._traitData) || void 0 === t ? void 0 : t.delayTime) && void 0 !== e ? e : 6;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  onTLWinVw_showTLWinVw(t, e) {
    var r = this;
    this.canAutoNextLevel = false;
    this.triggeredAuto = false;
    cc.isValid(t.ins) && t.ins.scheduleOnce(function () {
      if (cc.isValid(t.ins) && r.canAutoNextLevel && !r.triggeredAuto) {
        r.triggeredAuto = true;
        t.ins.onBtnNextClick();
      }
    }, this.delayTime);
    e();
  }
  onTLWinVw_popNextView(t, e) {
    var r,
      o,
      i,
      n,
      a = null !== (o = null === (r = t.args[0]) || void 0 === r ? void 0 : r.hasBoxReward) && void 0 !== o && o,
      u = null !== (n = null === (i = t.args[0]) || void 0 === i ? void 0 : i.hasTaskReward) && void 0 !== n && n;
    this.canAutoNextLevel = !a && !u;
    e();
  }
  onAdMgr_chkInterAd(t, e) {
    var r,
      o = null === (r = t.args) || void 0 === r ? void 0 : r[3];
    if ("beforeInterAd" === (null == o ? void 0 : o.adTimeType)) {
      if (UserModel.getInstance().getCurrentGameType() === MjGameType.Travel) {
        if (this.triggeredAuto) {
          this.triggeredAuto = false;
          e({
            returnVal: false,
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
        } else e();
      } else e();
    } else e();
  }
}