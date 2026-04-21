import { EDCColor } from './types/Common';
export class FactoryDDA {
  static strategies = new Map();
  static register(e) {
    this.strategies.has(e.name) || this.strategies.set(e.name, e);
  }
  static logInfo(e, t = EDCColor.LAYER_DDA) {}
  static get(e) {
    var t;
    return null !== (t = this.strategies.get(e)) && void 0 !== t ? t : null;
  }
  static getAllNames() {
    return Array.from(this.strategies.keys());
  }
  static getAllStrategies() {
    return Array.from(this.strategies.values());
  }
}
export var ddaStrategy = function (e) {
  return function (t) {
    var o = function (e) {
        __extends(t, e);
        function t() {
          for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
          return e.apply(this, [...t]) || this;
        }
        t.prototype.filter = function (t) {
          Date.now();
          var o = e.prototype.filter.call(this, t);
          Date.now();
          return o;
        };
        return t;
      }(t),
      n = new o();
    n.setPriority(e);
    FactoryDDA.register(n);
    return o;
  };
};