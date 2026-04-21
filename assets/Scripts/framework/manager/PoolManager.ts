import { logManager } from './LogManager';
export var PoolNodeName = {
  SETUP: "Setup"
};
class r {
  _poolMap = new Map();
  _prefabMap = new Map();
  preInitNode(e, t) {
    if (e) {
      if (t && cc.isValid(t)) {
        if (Object.values(PoolNodeName).includes(e)) if (this._prefabMap.has(e)) logManager.logError("该同名节点已经缓存");else {
          this._prefabMap.set(e, t);
          var o = this.getPool(e);
          if (o) {
            var r = cc.instantiate(t);
            r.poolName = e;
            o.put(r);
          }
        }
      } else logManager.logError("prefab 不能为空");
    } else logManager.logError("nodeName 不能为空");
  }
  getNode(e) {
    if (!e) {
      logManager.logError("nodeName 不能为空");
      return null;
    }
    if (!Object.values(PoolNodeName).includes(e)) return null;
    var t = this.getPool(e);
    if (!t) return null;
    var o = t.get();
    if (o) return o;
    var r = this._prefabMap.get(e);
    if (r) {
      (o = cc.instantiate(r)).poolName = e;
      return o;
    }
    return null;
  }
  putNode(e) {
    if (e && cc.isValid(e)) {
      var t = e.poolName;
      if (t) {
        var o = this.getPool(t);
        o && o.put(e);
      }
    }
  }
  getPool(e) {
    if (!e) {
      console.error("节点名称不能为空");
      return null;
    }
    if (!Object.values(PoolNodeName).includes(e)) return null;
    if (this._poolMap.has(e)) return this._poolMap.get(e);
    var t = new cc.NodePool(e);
    this._poolMap.set(e, t);
    return t;
  }
  clearPool(e, t = false) {
    if (e) {
      if (Object.values(PoolNodeName).includes(e)) {
        var o = this._poolMap.get(e);
        o && o.clear();
        if (t) {
          this._poolMap.delete(e);
          this._prefabMap.delete(e);
        }
      }
    } else console.error("节点名称不能为空");
  }
}
export var poolManager = new r();