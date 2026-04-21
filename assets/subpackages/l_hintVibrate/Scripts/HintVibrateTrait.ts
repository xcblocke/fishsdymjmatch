import Trait from '../../../Scripts/framework/trait/Trait';
import { EVibrateStrength } from '../../../Scripts/gamePlay/base/vibrate/VibrateManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("HintVibrateTrait")
export default class HintVibrateTrait extends Trait {
  static traitKey = "HintVibrate";
  onGameUI_addHintBtn(t, r) {
    var e = this._traitData.level || EVibrateStrength.DoubleWeak;
    t.args[2] = Object.assign(Object.assign({}, t.args[2]), {
      vibrateLevel: function () {
        var t, r;
        return ((null === (r = null === (t = UserModel.getInstance()) || void 0 === t ? void 0 : t.localData) || void 0 === r ? void 0 : r.hitTips) || 0) > 0 ? e : void 0;
      }
    });
    r();
  }
}