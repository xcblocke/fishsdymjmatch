import Trait from '../../../Scripts/framework/trait/Trait';
import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { MotivationalWordsEffect } from '../../../Scripts/MotivationalWordsEffect';
import { MotivationalWordsEffectEffect } from '../../../Scripts/MotivationalWordsEffectEffect';
@mj.trait
@mj.class("MotivationWordsBombTrait")
export default class MotivationWordsBombTrait extends Trait {
  static traitKey = "MotivationWordsBomb";
  onLoad() {
    super.onLoad.call(this);
  }
  onClrNormHlp_chkBombMotiv(t, o) {
    this.handleBombMotivationalWords(t);
    o({
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
  handleBombMotivationalWords(t) {
    var o = t.args[0],
      r = t.args[1],
      e = t.ins,
      i = e._gameContext,
      n = e._baseInput;
    if (i && n) {
      var a = i.motivationalWordsChecker.canShowMotivationalWords(),
        l = a.isShow,
        u = a.index;
      if (l && o && o.length >= 2) {
        var p = i.getGameData().getComboNum(),
          d = new MotivationalWordsEffect({
            index: u,
            comboNum: p,
            tileId1: o[1],
            tileId2: o[0]
          });
        n.pushEffect(d, EInsertType.Parallel, r, false);
        var v = new MotivationalWordsEffectEffect({
          index: u
        });
        n.pushEffect(v, EInsertType.Parallel, r, false);
      }
    }
  }
}