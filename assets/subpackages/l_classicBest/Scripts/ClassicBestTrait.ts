import Trait from '../../../Scripts/framework/trait/Trait';
import { BehaviorFactory } from '../../../Scripts/BehaviorFactory';
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import BreakBestScoreBehavior from './BreakBestScoreBehavior';
import { BreakBestScoreEffect } from './BreakBestScoreEffect';
import { EClassicBreakType } from './ClassicBestTypes';
import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
@mj.trait
@mj.class("ClassicBestTrait")
export default class ClassicBestTrait extends Trait {
  static traitKey = "ClassicBest";
  onLoad() {
    super.onLoad.call(this);
    BehaviorFactory.registerBehavior(BehaviorsMapping.BreakBestScore, BreakBestScoreBehavior);
  }
  onClrClsHlp_pushBreakBest(e, t) {
    var i = e.ins._options.breakBestState;
    if (i && 0 !== i.length) {
      var s = __read(i, 3),
        r = s[0],
        o = s[1],
        a = s[2];
      if (-1 !== i.findIndex(function (e) {
        return true === e;
      })) {
        var c = EClassicBreakType.None;
        if (r) {
          c = EClassicBreakType.Best;
        } else {
          if (o) {
            c = EClassicBreakType.Week;
          } else {
            a && (c = EClassicBreakType.Today);
          }
        }
        if (c !== EClassicBreakType.None) {
          var p = new BreakBestScoreEffect({
            breakType: c
          });
          t({
            returnVal: e.ins._baseInput.pushEffect(p, EInsertType.Parallel)
          });
        } else t();
      } else t();
    } else t();
  }
}