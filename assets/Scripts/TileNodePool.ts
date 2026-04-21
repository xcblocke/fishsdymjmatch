import { ETileNodeNames, ETileShadowNodeNames, TileAnimNodeName, TileNodeName, TileNodeZIndexMap, TileShadowNodeZIndexMap } from './BaseTileNode';
export class TileNodePool {
  _maxPoolSize = 500;
  _maxShadowPoolSize = 500;
  _nodePool = new cc.NodePool();
  _nodeShadowPool = new cc.NodePool();
  _nameList = [ETileNodeNames.imgCardBg, ETileNodeNames.imgCard];
  _optionalNameList = [ETileNodeNames.imgSelectedCardBg, ETileNodeNames.imgLockBg, ETileNodeNames.imgSelected, ETileNodeNames.effectPropHint, ETileNodeNames.effectSelected];
  _shadowNameList = [ETileShadowNodeNames.imgShadow];
  PREFILL_COUNT = 150;
  _nameSet = new Set([...this._nameList, ...this._optionalNameList]);
  _shadowNameSet = new Set(this._shadowNameList);
  static getInstance() {
    TileNodePool._instance || (TileNodePool._instance = new TileNodePool());
    return TileNodePool._instance;
  }
  preLoadNode() {
    this.prefillPool(this.PREFILL_COUNT);
  }
  pushCacheNode(e) {
    e && cc.isValid(e) && (this._nodePool.size() >= this._maxPoolSize ? e.destroy() : this.resetCacheNode(e) ? this._nodePool.put(e) : e.destroy());
  }
  getCacheNode() {
    return this._nodePool.size() > 0 ? this._nodePool.get() : this.createNode();
  }
  resetNode(e) {
    e.setPosition(0, 0, 0);
    e.scale = 1;
    e.angle = 0;
    e.setAnchorPoint(0.5, 0.5);
    e.setContentSize(0, 0);
    e.opacity = 255;
    e.zIndex = 0;
    e.active = true;
    e.color = new cc.Color(255, 255, 255, 255);
    var t = e.getComponent(cc.Sprite);
    if (t) {
      t.sizeMode = cc.Sprite.SizeMode.CUSTOM;
      t.trim = false;
    }
    cc.Tween.stopAllByTarget(e);
  }
  getAndCleanNode(e, t) {
    var o = e.getChildByName(t);
    o && this.resetNode(o);
    return o;
  }
  cleanupChildren(e, t) {
    for (var o = "string" == typeof t ? new Set([t]) : t, n = e.children, i = n.length - 1; i >= 0; i--) {
      var r = n[i];
      o.has(r.name) || r.destroy();
    }
  }
  resetCacheNode(e) {
    var t, o, n, i;
    this.resetNode(e);
    var l = this.getAndCleanNode(e, TileAnimNodeName);
    if (!l) return false;
    this.cleanupChildren(e, TileAnimNodeName);
    var s = this.getAndCleanNode(l, TileNodeName);
    if (!s) return false;
    this.cleanupChildren(l, TileNodeName);
    try {
      for (var c = __values(this._nameList), u = c.next(); !u.done; u = c.next()) {
        var p = u.value,
          f = this.getAndCleanNode(s, p);
        if (!f) return false;
        f.zIndex = TileNodeZIndexMap[p];
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (o = c.return) && o.call(c);
      } finally {
        if (t) throw t.error;
      }
    }
    try {
      for (var d = __values(this._optionalNameList), h = d.next(); !h.done; h = d.next()) {
        p = h.value;
        var y = this.getAndCleanNode(s, p);
        if (y) {
          y.zIndex = TileNodeZIndexMap[p];
          y.active = false;
        }
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        h && !h.done && (i = d.return) && i.call(d);
      } finally {
        if (n) throw n.error;
      }
    }
    this.cleanupChildren(s, this._nameSet);
    return true;
  }
  createNode() {
    var e,
      t,
      o = new cc.Node();
    o.name = "CardNode";
    var n = new cc.Node();
    n.name = TileAnimNodeName;
    n.parent = o;
    n.setPosition(0, 0, 0);
    n.setScale(1);
    var i = new cc.Node();
    i.name = TileNodeName;
    i.parent = n;
    i.setPosition(0, 0, 0);
    i.setScale(1);
    i.setAnchorPoint(0.5, 0.5);
    try {
      for (var l = __values(this._nameList), s = l.next(); !s.done; s = l.next()) {
        var c = s.value,
          u = new cc.Node();
        u.name = c;
        u.parent = i;
        u.zIndex = TileNodeZIndexMap[c];
        u.setAnchorPoint(0.5, 0.5);
        u.setPosition(0, 0, 0);
        var p = u.addComponent(cc.Sprite);
        p.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        p.trim = false;
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        s && !s.done && (t = l.return) && t.call(l);
      } finally {
        if (e) throw e.error;
      }
    }
    return o;
  }
  createShadowNode() {
    var e,
      t,
      o = new cc.Node();
    o.name = "shadowCardNode";
    o.setPosition(0, 0, 0);
    o.setScale(1, 1, 1);
    try {
      for (var n = __values(this._shadowNameList), i = n.next(); !i.done; i = n.next()) {
        var l = i.value,
          s = new cc.Node();
        s.name = l;
        s.parent = o;
        s.zIndex = TileShadowNodeZIndexMap[l];
        s.setPosition(0, 0, 0);
        s.setAnchorPoint(0.5, 0.5);
        var c = s.addComponent(cc.Sprite);
        c.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        c.trim = false;
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        i && !i.done && (t = n.return) && t.call(n);
      } finally {
        if (e) throw e.error;
      }
    }
    return o;
  }
  resetCacheShadowNode(e) {
    var t, o;
    this.resetNode(e);
    try {
      for (var n = __values(this._shadowNameList), i = n.next(); !i.done; i = n.next()) {
        var l = i.value,
          s = this.getAndCleanNode(e, l);
        if (!s) return false;
        s.zIndex = TileShadowNodeZIndexMap[l];
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        i && !i.done && (o = n.return) && o.call(n);
      } finally {
        if (t) throw t.error;
      }
    }
    this.cleanupChildren(e, this._shadowNameSet);
    return true;
  }
  pushCacheShadowNode(e) {
    e && cc.isValid(e) && (this._nodeShadowPool.size() >= this._maxShadowPoolSize ? e.destroy() : this.resetCacheShadowNode(e) ? this._nodeShadowPool.put(e) : e.destroy());
  }
  getCacheShadowNode() {
    return this._nodeShadowPool.size() > 0 ? this._nodeShadowPool.get() : this.createShadowNode();
  }
  prefillPool(e) {
    var t = this._nodePool.size(),
      o = this._nodeShadowPool.size();
    Date.now();
    if (t < e) for (var n = e - t, i = 0; i < n; i++) {
      var r = this.createNode();
      this._nodePool.put(r);
    }
    if (o < e) for (n = e - o, i = 0; i < n; i++) {
      r = this.createShadowNode();
      this._nodeShadowPool.put(r);
    }
  }
  clean() {
    this._nodePool.clear();
    this._nodeShadowPool.clear();
  }
}