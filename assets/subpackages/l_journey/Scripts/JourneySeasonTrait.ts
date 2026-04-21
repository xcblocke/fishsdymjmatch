import Trait from '../../../Scripts/framework/trait/Trait';
export default class JourneySeasonTrait extends Trait {
  static traitKey = "JourneySeason";
  onLoad() {
    super.onLoad.call(this);
  }
  onJourney_tryAddSeason(t, e) {
    var r = t.ins,
      o = r.getCachedJourney(),
      n = this.getSeasonKey();
    if (!o.includes(n)) {
      var i = {
        position: 0,
        session: n
      };
      mj.triggerInternalEvent("Journey_NewSeasonPos", this, [r, i]);
      o.splice(i.position, 0, n);
      r.cacheJourney(o);
    }
    this.localData.AddedSeason = true;
    e();
  }
}