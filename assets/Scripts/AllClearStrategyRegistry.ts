export class AllClearStrategyRegistry {
  static _map = new Map();
  static register(e, t) {
    this._map.set(e, t);
  }
  static get(e) {
    var t;
    return null !== (t = this._map.get(e)) && void 0 !== t ? t : null;
  }
  static getOrDefault(e) {
    var t, o;
    return null !== (o = null !== (t = this._map.get(e)) && void 0 !== t ? t : this._map.get(1)) && void 0 !== o ? o : null;
  }
  static has(e) {
    return this._map.has(e);
  }
}