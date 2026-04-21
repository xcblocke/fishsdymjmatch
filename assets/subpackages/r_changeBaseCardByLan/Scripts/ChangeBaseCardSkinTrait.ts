import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("ChangeBaseCardSkinTrait")
export default class ChangeBaseCardSkinTrait extends Trait {
  _changeMaps = {};
  static traitKey = "ChangeBaseCardSkin";
  onLoad() {
    var e;
    super.onLoad.call(this);
    for (var a = (null === (e = this._traitData) || void 0 === e ? void 0 : e.changeList) || [], r = 0; r < a.length; r++) {
      var n = a[r];
      this._changeMaps[n[0]] = n[1];
    }
  }
  onChCardByLanTt_getRBName(t, e) {
    var a,
      r = null === (a = t.args) || void 0 === a ? void 0 : a[0];
    this._changeMaps && this._changeMaps[r] && (r = this._changeMaps[r]);
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: r
    });
  }
}