import Trait from '../../../Scripts/framework/trait/Trait';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
@mj.trait
@mj.class("SeasonRepeatTrait")
export default class SeasonRepeatTrait extends Trait {
  static traitKey = "SeasonRepeat";
  onLoad() {
    super.onLoad.call(this);
  }
  onJourney_NextSession(t, e) {
    var r = __read(this.getNextSession(t.ins), 2),
      o = r[0],
      n = r[1];
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: [o, n]
    });
  }
  @mj.traitEvent("SeasonRpt_getCurIndex")
  getCurSessionIndex() {
    return TravelGameModel.getInstance().getCurSessionIndex();
  }
  getNextSession(t) {
    var e = t.getJourneyList(),
      r = this.getCurSessionIndex(e);
    if (0 === e.length) return ["", -1];
    var o = this.getNextRepeatSession(t, r + 1, e, false);
    -1 === o && (o = this.getNextRepeatSession(t, r + 1, e, true));
    return o < 0 ? ["", -1] : [e[o], o];
  }
  getNextRepeatSession(t, e, r, o) {
    for (var n = TravelGameModel.getInstance(), i = r.length, a = 0; a < i; a++) {
      var s = (e + a) % i,
        l = r[s];
      if ((o || !n.isBadgeComplete(l)) && t.isSessionValid(s)) return s;
    }
    return -1;
  }
}