import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("TravelFirstTrait")
export default class TravelFirstTrait extends Trait {
  static traitKey = "TravelFirst";
  get firstJourney() {
    return this.traitData.firstJourney;
  }
  onJourney_Order(t, r) {
    var e = t.ins,
      n = e.getCachedJourney(),
      o = this.firstJourney,
      i = n.indexOf(o);
    if (-1 !== i) {
      n.splice(i, 1);
      n.unshift(o);
      e.cacheJourney(n);
      r();
    } else r();
  }
}