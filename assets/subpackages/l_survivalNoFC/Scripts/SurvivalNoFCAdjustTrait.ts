import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import Trait from '../../../Scripts/framework/trait/Trait';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
enum l {
  LESS = 1,
  LAST = 2,
  MODE_FORBID = 3,
  LEVEL_FORBID = 4,
}
@mj.trait
@mj.class("SurvivalNoFCAdjustTrait")
export default class SurvivalNoFCAdjustTrait extends Trait {
  _config = [];
  static traitKey = "SurvivalNoFCAdjust";
  onLoad() {
    var e, r;
    super.onLoad.call(this);
    this.updateLoginTime();
    this._config = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.config) && void 0 !== r ? r : [];
  }
  updateLoginTime() {
    var t = this.getLoginTime(),
      e = Date.now();
    if (!GameUtils.isSameDay(t, e)) {
      this.localData.loginTime = e;
      this.localData.lastDayLogin = this.isLastDayLogin(t, e);
    }
  }
  isLastDayLogin(t, e) {
    if (t <= 0 || e <= 0) return false;
    var r = new Date(t),
      o = new Date(e);
    r.setHours(0, 0, 0, 0);
    o.setHours(0, 0, 0, 0);
    return o.getTime() - r.getTime() <= 86400000;
  }
  getLoginTime() {
    this.isLocalEmpty(this.localData.loginTime) && (this.localData.loginTime = 0);
    return this.localData.loginTime;
  }
  getLastDayLogin() {
    this.isLocalEmpty(this.localData.lastDayLogin) && (this.localData.lastDayLogin = false);
    return this.localData.lastDayLogin;
  }
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  onSurvNoFCTrait_canActive(t, e) {
    var r = this.canActive();
    e({
      returnType: TraitCallbackReturnType.jump,
      returnVal: r
    });
  }
  getActiveDay() {
    return (LoginModel.getInstance().activeDay || 1) - 1;
  }
  canActive() {
    var t,
      e,
      r,
      o,
      i,
      n = UserModel.getInstance(),
      c = n.getCurrentGameType(),
      s = this.getActiveDay(),
      u = this.getLastDayLogin(),
      y = (null === (r = n.getCurrentGameData()) || void 0 === r ? void 0 : r.getLevelId()) || 0;
    try {
      for (var v = __values(this._config), d = v.next(); !d.done; d = v.next()) {
        var m = d.value,
          _ = m.type,
          h = null !== (o = null == m ? void 0 : m.limit) && void 0 !== o ? o : 0;
        if ((null !== (i = null == m ? void 0 : m.modes) && void 0 !== i ? i : [MjGameType.Normal, MjGameType.DailyChallenge]).includes(c)) {
          if (_ === l.LESS) return s < h;
          if (_ === l.LAST) return !u;
          if (_ === l.LEVEL_FORBID) return y <= h;
          if (_ === l.MODE_FORBID) return false;
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        d && !d.done && (e = v.return) && e.call(v);
      } finally {
        if (t) throw t.error;
      }
    }
    return true;
  }
}