import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("TravelActiveOneTrait")
export default class TravelActiveOneTrait extends Trait {
  static traitKey = "TravelActiveOne";
  onLoad() {
    super.onLoad.call(this);
    this.isLocalEmpty(this.localData.lastShowTime) && (this.localData.lastShowTime = -1);
    this.isLocalEmpty(this.localData.lastShowSession) && (this.localData.lastShowSession = -1);
  }
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  onJourney_CanShowActiveVw(t, e) {
    e({
      returnVal: t.beforReturnVal && this.canShowActiveView(t.ins)
    });
  }
  canShowActiveView(t) {
    if (t.curSession != this.localData.lastShowSession) {
      this.localData.lastShowSession = t.curSession;
      this.localData.lastShowTime = Date.now();
      return true;
    }
    if (this.isSameDay(this.localData.lastShowTime, Date.now())) return false;
    this.localData.lastShowTime = Date.now();
    this.localData.lastShowSession = t.curSession;
    return true;
  }
  isSameDay(t, e) {
    if (t < 0 || e < 0) return false;
    var r = new Date(t),
      o = new Date(e);
    return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth() && r.getDate() === o.getDate();
  }
}