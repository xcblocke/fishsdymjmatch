import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("ClearAnimTrait")
export default class ClearAnimTrait extends Trait {
  static traitKey = "ClearAnim";
  onClearBhv_playMove(t, r) {
    try {
      var n = __read(t.args, 6),
        i = n[0],
        o = n[1],
        c = n[2],
        u = n[3],
        f = n[4],
        s = n[5],
        p = Math.abs(u[0].x - u[1].x),
        y = c,
        _ = cc.easing.cubicIn;
      if (p < 2 * i.width) {
        y = c + 0.05;
        _ = cc.easing.expoIn;
      }
      if (i && cc.isValid(i) && u && u.length > 0) cc.tween(i).to(o, {
        position: u[0]
      }, {
        easing: cc.easing.circOut
      }).to(y, {
        position: u[1]
      }, {
        easing: _
      }).call(function () {
        null == f || f();
        null == s || s();
      }).start();else {
        null == f || f();
        null == s || s();
      }
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } catch (t) {
      console.error("[" + ClearAnimTrait.traitKey + "] 消除动画异常: " + t.message);
      r();
    }
  }
}