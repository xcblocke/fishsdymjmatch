import Trait from '../../../Scripts/framework/trait/Trait';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
@mj.trait
@mj.class("TravelCountryTrait")
export default class TravelCountryTrait extends Trait {
  static traitKey = "TravelCountry";
  get orderList() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.orderList) && void 0 !== e ? e : [];
  }
  get filterCountry() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.countries) && void 0 !== e ? e : [];
  }
  get country() {
    return LoginModel.getInstance().country || "";
  }
  onJourney_Order(t, e) {
    var r = t.ins;
    this.country, this.filterCountry;
    if (this.filterCountry.includes(this.country)) {
      var n = this.orderList;
      if (n.length <= 0) e();else {
        var o = r.getCachedJourney();
        o.sort(function (t, e) {
          return n.includes(t) && n.includes(e) ? n.indexOf(t) - n.indexOf(e) : 0;
        });
        r.cacheJourney(o);
        e();
      }
    } else e();
  }
}