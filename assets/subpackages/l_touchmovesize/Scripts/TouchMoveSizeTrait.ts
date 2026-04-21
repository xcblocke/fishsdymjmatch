import Trait from '../../../Scripts/framework/trait/Trait';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
@mj.trait
@mj.class("TouchMoveSizeTrait")
export default class TouchMoveSizeTrait extends Trait {
  static traitKey = "TouchMoveSize";
  onLoad() {
    super.onLoad.call(this);
  }
  onTileSelector_exMultiple(t, e) {
    t.ins;
    var r,
      o,
      i,
      n,
      a,
      l,
      c = this._traitData.multiple || 1.5;
    if (null === (r = this._traitData) || void 0 === r ? void 0 : r.isUseMemLimit) {
      var p = (null === (o = this._traitData) || void 0 === o ? void 0 : o.allMemoryRange) || [5, 11],
        f = Number(null !== (i = p[0]) && void 0 !== i ? i : 5),
        s = Number(null !== (n = p[1]) && void 0 !== n ? n : 11),
        d = Number(null !== (l = null === (a = LoginModel.getInstance()) || void 0 === a ? void 0 : a.allMemory) && void 0 !== l ? l : 0);
      if (!(d > 1024 * f && d < 1024 * s)) {
        e();
        return;
      }
    }
    e({
      returnVal: c,
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
}