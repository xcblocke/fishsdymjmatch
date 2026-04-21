import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("RedDotCtrlTrait")
export default class RedDotCtrlTrait extends Trait {
  static traitKey = "RedDotCtrl";
  onLoad() {
    super.onLoad.call(this);
  }
  onRedDotCtrl_showRedDot(t, r) {
    var e = t.args;
    if (e && e.length > 0) {
      var o = e[0];
      o && (o.show = this._traitData.show);
    }
    r({
      returnType: TraitCallbackReturnType.return
    });
  }
}