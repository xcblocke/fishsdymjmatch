import { EDCColor } from './types/Common';
export class FactoryCapability {
  static strategies = new Map();
  static register(e, t) {
    this.strategies.has(e) || this.strategies.set(e, t);
  }
  static logInfo(e, t = EDCColor.LAYER_CAPABILITY) {}
  static get(e) {
    var t = this.strategies.get(e);
    return t ? new t() : null;
  }
  static getAllNames() {
    return Array.from(this.strategies.keys());
  }
}
export var capabilityStrategy = function (e) {
  return function (t) {
    var o = function (e) {
      __extends(t, e);
      function t() {
        for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
        return e.apply(this, [...t]) || this;
      }
      t.prototype.updateCapability = function (t) {
        Date.now();
        e.prototype.updateCapability.call(this, t);
        Date.now();
      };
      return t;
    }(t);
    FactoryCapability.register(e, o);
    return o;
  };
};