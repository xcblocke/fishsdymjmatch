import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("ValentineHallTrait")
export default class ValentineHallTrait extends Trait {
  static traitKey = "ValentineHall";
  get replaceAllHall() {
    var t, e;
    return null === (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.replaceAllHall) || void 0 === e || e;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  isEffectActive() {
    var t = mj.getClassByName("ValentineModel"),
      e = mj.getClassByName("ComplexValentineTrait");
    return !!(e && e.getInstance() && e.getInstance().eventEnabled && t && t.getInstance()) && t.getInstance().isEffectActive();
  }
  onHallVw_updateUI(t, e) {
    this.updateHallUI(t.ins);
    e();
  }
  onHallVw_forceUpdate(t, e) {
    this.updateHallUI(t.ins);
    e();
  }
  updateHallUI(t) {
    t.constructor.getUrl();
    cc.isValid(t.node) && (this.replaceAllHall || "Hall" !== t.hallTheme) && (this.isEffectActive() ? t.changeTheme("Hall4", false) : t.changeTheme(t.hallTheme, false));
  }
}