import { buildAllClearNodeInfos } from './IAllClearStrategy';
import { AllClearStrategyRegistry } from './AllClearStrategyRegistry';
import { AcHudieAnimPlayer } from './AcHudieAnimPlayer';
export class ACHudieStrategy {
  getName() {
    return "ACHudieStrategy";
  }
  play(e, t) {
    var o,
      r,
      l = buildAllClearNodeInfos(e, t);
    if (0 !== l.length) {
      var s = new AcHudieAnimPlayer(t);
      try {
        for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
          var p = u.value;
          s.hideFlowLight(p.cardNode1);
          s.hideFlowLight(p.cardNode2);
          p.cardNode1.active = true;
          p.cardNode2.active = true;
        }
      } catch (e) {
        o = {
          error: e
        };
      } finally {
        try {
          u && !u.done && (r = c.return) && r.call(c);
        } finally {
          if (o) throw o.error;
        }
      }
      s.setupPositions(l);
      s.play(l);
    } else t.onComplete();
  }
}
AllClearStrategyRegistry.register(5, new ACHudieStrategy());