import Trait from '../../../Scripts/framework/trait/Trait';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
@mj.trait
@mj.class("SeasonRepeatFixTrait")
export default class SeasonRepeatFixTrait extends Trait {
  static traitKey = "SeasonRepeatFix";
  onLoad() {
    super.onLoad.call(this);
  }
  onSeasonRpt_getCurIndex(t, e) {
    var r = t.args[0],
      o = TravelGameModel.getInstance(),
      n = o.getCurJourney(),
      i = o.getHistoryJourneys(),
      a = this.getCurSessionIndex(n, r, i);
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: a
    });
  }
  getCurSessionIndex(t, e, r) {
    var o = e.indexOf(t);
    if (-1 !== o) return o;
    if (r.length < 1) return -1;
    for (var n = r.length - 1; n >= 0; n--) {
      var i = r[n],
        a = e.indexOf(i);
      if (-1 !== a) return a;
    }
    return -1;
  }
}