import { EDDAFilter } from '../../types/IDynamicCurve';
import { FactoryDDA } from '../../FactoryDDA';
import { EDCColor } from '../../types/Common';
export class LayerDDA {
  strategies = [];
  filter(e) {
    var t, o;
    this.strategies.sort(function (e, t) {
      return t.getPriority() - e.getPriority();
    });
    try {
      for (var a = __values(this.strategies), l = a.next(); !l.done; l = a.next()) {
        var s = l.value,
          c = __read(s.filter(e), 2),
          u = c[0],
          p = c[1];
        if (u === EDDAFilter.LEVEL) return [true, p];
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (o = a.return) && o.call(a);
      } finally {
        if (t) throw t.error;
      }
    }
    return [false, null];
  }
  pushStrategies(e) {
    var t, o;
    this.strategies = [];
    try {
      for (var i = __values(e), r = i.next(); !r.done; r = i.next()) {
        var l = r.value,
          s = FactoryDDA.get(l.name);
        if (s) {
          this.strategies.push(s);
          l.param && s.setStrategyParam(l.param);
          void 0 !== l.priority && s.setPriority(l.priority);
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (o = i.return) && o.call(i);
      } finally {
        if (t) throw t.error;
      }
    }
  }
  addStrategy(e) {
    var t = FactoryDDA.get(e.name);
    if (t) {
      this.strategies.push(t);
      e.param && t.setStrategyParam(e.param);
      void 0 !== e.priority && t.setPriority(e.priority);
    }
  }
  clearStrategies() {
    this.strategies = [];
  }
  getStrategyName() {
    return this.strategies.map(function (e) {
      return e.name;
    }).join(",");
  }
  logInfo(e, t = EDCColor.LAYER_DDA) {}
}