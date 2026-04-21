import { EDCColor } from './types/Common';
export class FactoryMapping {
  static strategies = new Map();
  static register(e, t) {
    this.strategies.has(e) || this.strategies.set(e, t);
  }
  static logInfo(e, t = EDCColor.LAYER_MAPPING) {}
  static get(e) {
    var t = this.strategies.get(e);
    return t ? new t() : null;
  }
  static getAllNames() {
    return Array.from(this.strategies.keys());
  }
}
export var mappingStrategy = function (e) {
  return function (t) {
    var o = function (e) {
      __extends(t, e);
      function t() {
        for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
        return e.apply(this, [...t]) || this;
      }
      t.prototype.mapping = function (t) {
        Date.now();
        var o = e.prototype.mapping.call(this, t);
        Date.now();
        return o;
      };
      return t;
    }(t);
    FactoryMapping.register(e, o);
    return o;
  };
};