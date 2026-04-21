import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("ChangeCardLayoutTrait")
export default class ChangeCardLayoutTrait extends Trait {
  static traitKey = "ChangeCardLayout";
  onLoad() {
    super.onLoad.call(this);
  }
  getGmCardSpaceOffset() {
    return null;
  }
  onMainGameCtrl_crtCardLyt(t, r) {
    var e = t.beforReturnVal;
    if (e) {
      var a = this._traitData.cardSpaceOffset;
      this.getGmCardSpaceOffset();
      if (a && 2 === a.length) {
        var n = [e.cardSpace[0] + a[0], e.cardSpace[1] + a[1]],
          i = Object.assign(Object.assign({}, e), {
            cardSpace: n
          });
        r({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: i
        });
      } else r();
    } else r();
  }
}