import { PoolName } from '../../../constant/enumRes';
export default class GameObjectPool {
  prefabs = new Map();
  objectPools = new Map();
  createObjectPool(e, t, o) {
    if (!this.objectPools.has(e)) {
      var n = new cc.NodePool();
      this.objectPools.set(e, n);
      this.prefabs.set(e, t);
      for (var i = 0; i < o; i++) {
        var r = cc.instantiate(t);
        n.put(r);
      }
    }
  }
  isHasPool(e) {
    return this.objectPools.has(e);
  }
  get(e) {
    var t = this.objectPools.get(e);
    if (null != t) {
      if (0 == t.size()) return e == PoolName.EmptyNode ? new cc.Node() : cc.instantiate(this.prefabs.get(e));
      var o = t.get();
      this.resetNode(o);
      return o;
    }
    return null;
  }
  push(e, t) {
    if (this.objectPools.has(e)) {
      t.active = false;
      this.objectPools.get(e).put(t);
    }
  }
  clearPool(e) {
    this.objectPools.has(e) && this.objectPools.get(e).clear();
  }
  initEmptyNode(e = PoolName.EmptyNode, t = 20) {
    var o = new cc.NodePool();
    this.objectPools.set(e, o);
    for (var i = 0; i < t; i++) {
      var r = new cc.Node();
      o.put(r);
    }
  }
  resetNode(e) {
    e.active = true;
    e.scale = 1;
    e.opacity = 255;
  }
  clearAllPools(e = true) {
    this.objectPools.forEach(function (e) {
      e.clear();
    });
    this.objectPools.clear();
    e && this.prefabs.clear();
  }
}