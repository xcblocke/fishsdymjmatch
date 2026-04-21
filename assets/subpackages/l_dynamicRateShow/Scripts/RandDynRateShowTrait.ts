import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
@mj.trait
@mj.class("RandDynRateShowTrait")
export default class RandDynRateShowTrait extends Trait {
  static traitKey = "RandDynRateShow";
  onLoad() {
    super.onLoad.call(this);
    this._traitData;
  }
  onDynRateShow_getRateTxt(t, e) {
    var r = __read(t.args, 3),
      a = r[0],
      o = r[1],
      i = r[2],
      c = this._traitData;
    if (void 0 === c.experimentType || c.experimentType === a) {
      var u = c.rateTextKeys;
      if (u && 0 !== u.length) {
        var p = u[Math.floor(Math.random() * u.length)],
          h = I18NStrings.get(p, "You beat {0} of players!"),
          f = o.toFixed(2) + "%";
        h.includes("{0}") && (h = h.replace("{0}", f));
        h.includes("{1}") && (h = h.replace("{1}", (100 * i).toFixed(1) + "%"));
        h = h.replace(f, "<color=#00ff00>" + f + "</color>");
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: h
        });
      } else e();
    } else e();
  }
}