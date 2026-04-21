import { EDCColor } from '../../types/Common';
import { FactoryMapping } from '../../FactoryMapping';
export class LayerMapping {
  strategies = [];
  static getAvailableStrategies() {
    return FactoryMapping.getAllNames();
  }
  pushStrategy(e) {
    var t = FactoryMapping.get(e.name);
    if (t) {
      this.strategies.push(t);
      e.param && t.setStrategyParam(e.param);
    }
  }
  setStrategies(e) {
    var t, o;
    this.strategies = [];
    try {
      for (var i = __values(e), r = i.next(); !r.done; r = i.next()) {
        var a = r.value;
        this.pushStrategy(a);
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
    this.pushStrategy({
      name: "Mapping0"
    });
  }
  getStrategyName() {
    return this.strategies.map(function (e) {
      return e.name;
    }).join(",");
  }
  mapping(e) {
    var t, o;
    if (0 === this.strategies.length) return null;
    try {
      for (var i = __values(this.strategies), r = i.next(); !r.done; r = i.next()) {
        var a = r.value.mapping(e);
        if (a) return a;
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
    return null;
  }
  logInfo(e, t = EDCColor.LAYER_MAPPING) {}
}