import Trait from '../../../Scripts/framework/trait/Trait';
import { DotGameMoveStep } from '../../../Scripts/gamePlay/dot/DGameMoveStep';
@mj.trait
@mj.class("MoveStepEndTrait")
export default class MoveStepEndTrait extends Trait {
  static traitKey = "MoveStepEnd";
  onDGameLog_dot(t, e) {
    this.dotGameMoveStep(t.args[0]);
    e();
  }
  onTrackerUtils_dotGmStep(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
  dotGameMoveStep(t) {
    var e,
      r,
      o = t.getGameTracker();
    if (o) {
      var n = o.stepAnalytics;
      Date.now();
      try {
        for (var i = __values(n), c = i.next(); !c.done; c = i.next()) {
          var u = c.value;
          DotGameMoveStep.dot(t, u);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          c && !c.done && (r = i.return) && r.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
    }
  }
}