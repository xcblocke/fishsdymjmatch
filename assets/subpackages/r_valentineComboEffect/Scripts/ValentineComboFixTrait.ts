import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("ValentineComboFixTrait")
export default class ValentineComboFixTrait extends Trait {
  _valComboEff = null;
  static traitKey = "ValentineComboFix";
  onValComboEff_enter(t, e) {
    e();
    this._valComboEff = t.ins;
  }
  onInitViewBhv_crtTls(t, e) {
    var o, r;
    e();
    cc.isValid(this._valComboEff) && (null === (r = (o = this._valComboEff).loadResPools) || void 0 === r || r.call(o));
  }
}