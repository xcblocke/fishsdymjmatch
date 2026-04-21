import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("GameEndExpTrait")
export default class GameEndExpTrait extends Trait {
  static traitKey = "GameEndExp";
  onLoad() {
    super.onLoad.call(this);
    var e = this._traitData.i18nKeys;
    e && Object.keys(e).map(function (t) {
      var a, i;
      return t + "=" + (null !== (i = null === (a = e[t]) || void 0 === a ? void 0 : a.length) && void 0 !== i ? i : 0);
    }).join(", ");
  }
  onGameEndHighLT_getI18NKey(t, e) {
    var a,
      i,
      r = __read(t.args, 1)[0],
      o = this._traitData,
      n = "type" + r,
      c = null === (a = o.i18nKeys) || void 0 === a ? void 0 : a[n];
    if (c && 0 !== c.length) {
      var p = (null !== (i = o.keyPrefix) && void 0 !== i ? i : "MahjongBlast_GameEnd_Type") + c[Math.floor(Math.random() * c.length)];
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: p
      });
    } else e();
  }
}