import { EDCColor } from './types/Common';
export class FactoryLevelValue {
  static strategies = new Map();
  static register(e, t) {
    this.strategies.has(e) || this.strategies.set(e, t);
  }
  static logInfo(e, t = EDCColor.LAYER_LEVEL_VALUE) {}
  static get(e) {
    var t = this.strategies.get(e);
    return t ? new t() : null;
  }
  static getAllNames() {
    return Array.from(this.strategies.keys());
  }
}
export var levelStrategy = function (e) {
  return function (t) {
    var o = function (e) {
      __extends(t, e);
      function t() {
        for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
        return e.apply(this, [...t]) || this;
      }
      t.prototype.calculateLevelValue = function (t) {
        Date.now();
        var o = e.prototype.calculateLevelValue.call(this, t);
        Date.now();
        return o;
      };
      return t;
    }(t);
    FactoryLevelValue.register(e, o);
    return o;
  };
};