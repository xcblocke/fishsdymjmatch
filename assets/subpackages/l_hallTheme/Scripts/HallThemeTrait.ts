import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("HallThemeTrait")
export default class HallThemeTrait extends Trait {
  static traitKey = "HallTheme";
  get hallTheme() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.theme) && void 0 !== e ? e : "";
  }
  onLoad() {
    super.onLoad.call(this);
  }
  onHallVw_chgTheme(t, e) {
    if (t.args[1]) {
      t.args[0] = this.hallTheme;
      e({
        isBreak: true
      });
    } else e();
  }
}