import Trait from '../../../Scripts/framework/trait/Trait';
import { EVibrateStrength } from '../../../Scripts/gamePlay/base/vibrate/VibrateManager';
@mj.trait
@mj.class("TravelCupVibrateTrait")
export default class TravelCupVibrateTrait extends Trait {
  static traitKey = "TravelCupVibrate";
  onElemLv_addLevelBtn(t, r) {
    var e,
      i = this._traitData.level || EVibrateStrength.LockCup,
      n = t.ins,
      a = null === (e = t.args[2]) || void 0 === e ? void 0 : e.vibrateLevel;
    t.args[2] = Object.assign(Object.assign({}, t.args[2]), {
      vibrateLevel: function () {
        var t;
        return (null === (t = null == n ? void 0 : n.isBadgeLevel) || void 0 === t ? void 0 : t.call(n)) ? i : "function" == typeof a ? a() : a;
      }
    });
    r();
  }
}