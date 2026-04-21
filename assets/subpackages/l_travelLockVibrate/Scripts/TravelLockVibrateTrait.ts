import Trait from '../../../Scripts/framework/trait/Trait';
import { EVibrateStrength } from '../../../Scripts/gamePlay/base/vibrate/VibrateManager';
@mj.trait
@mj.class("TravelLockVibrateTrait")
export default class TravelLockVibrateTrait extends Trait {
  static traitKey = "TravelLockVibrate";
  onElemLv_addLevelBtn(t, e) {
    var r,
      i = this._traitData.level || EVibrateStrength.DoubleWeak,
      o = t.ins,
      a = null === (r = t.args[2]) || void 0 === r ? void 0 : r.vibrateLevel;
    t.args[2] = Object.assign(Object.assign({}, t.args[2]), {
      vibrateLevel: function () {
        var t,
          e,
          r = null === (t = null == o ? void 0 : o.getLevelState) || void 0 === t ? void 0 : t.call(o),
          n = null === (e = null == o ? void 0 : o.isBadgeLevel) || void 0 === e ? void 0 : e.call(o);
        return 0 !== r || n ? "function" == typeof a ? a() : a : i;
      }
    });
    e();
  }
}