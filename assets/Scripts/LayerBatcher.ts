const {
  property
} = cc._decorator;
class c {
  key = "";
  hasMask = false;
  nodes = [];
  originalOpacities = [];
  originalChildren = [];
  next = null;
  prev = null;
  constructor(e) {
    this.key = e;
  }
  clear() {
    this.nodes.length = 0;
    this.originalOpacities.length = 0;
    this.originalChildren.length = 0;
    this.hasMask = false;
    this.next = null;
    this.prev = null;
  }
}
class u {
  items = {};
  head = null;
  get(e) {
    return this.items[e] || null;
  }
  set(e, t) {
    this.items[t.key] = t;
    if (this.head) {
      if (e) {
        t.next = e.next;
        t.prev = e;
        e.next = t;
        t.next && (t.next.prev = t);
      } else {
        t.next = this.head;
        this.head.prev = t;
        this.head = t;
      }
    } else this.head = t;
  }
  clear() {
    for (var e = this.head; e;) {
      var t = e.next;
      e.clear();
      e = t;
    }
    this.items = {};
    this.head = null;
  }
}
@mj.class
export class LayerBatcher extends cc.Component {
  queue = new u();
  originalChildren = [];
  _renderIndexCounter = 0;
  @property({
    tooltip: ""
  })
  useRenderIndex = true;
  @property({
    type: cc.Node,
    tooltip: ""
  })
  cullingViewport: cc.Node = null;
  onLoad() {
    cc.director.on(cc.Director.EVENT_BEFORE_DRAW, this.onBeforeDraw, this);
    cc.director.on(cc.Director.EVENT_AFTER_DRAW, this.onAfterDraw, this);
  }
  onDestroy() {
    cc.director.targetOff(this);
    this.queue.clear();
    this.originalChildren.length = 0;
  }
  onBeforeDraw() {
    this.node && this.node.isValid && this.node.active && this.reorganizeNodeTree();
  }
  onAfterDraw() {
    this.node && this.node.isValid && this.restoreNodeTree();
  }
  reorganizeNodeTree() {
    for (var e, t = null === (e = this.cullingViewport) || void 0 === e ? void 0 : e.getBoundingBoxToWorld(), o = this.node.children, n = 0; n < o.length; n++) {
      var i = o[n];
      if (i.activeInHierarchy) {
        if (t) {
          var r = i.getBoundingBoxToWorld();
          if (!t.intersects(r)) continue;
        }
        this.useRenderIndex && (this._renderIndexCounter = 0);
        this.collectRenderNodes(i, null, true, 0, 1);
      }
    }
    this.originalChildren = this.node._children;
    for (var a = [], s = this.queue.head; s;) {
      var c = s.nodes,
        u = s.originalChildren,
        p = s.hasMask;
      for (n = 0; n < c.length; n++) {
        u[n] = c[n]._children;
        p || (c[n]._children = []);
      }
      a.push.apply(a, [...c]);
      s = s.next;
    }
    this.node._children = a;
  }
  restoreNodeTree() {
    this.node._children.length = 0;
    this.node._children = this.originalChildren;
    for (var e = this.queue.head; e;) {
      for (var t = e.nodes, o = e.originalChildren, n = e.originalOpacities, i = 0; i < t.length; i++) {
        t[i]._children = o[i];
        t[i].opacity = n[i];
      }
      e = e.next;
    }
    this.queue.clear();
  }
  collectRenderNodes(e, t, o, n, i) {
    var r = e.getComponent(cc.RenderComponent),
      a = i * (e.opacity / 255),
      l = this.generateLayerKey(e, n),
      s = this.queue.get(l);
    if (!s) {
      s = new c(l);
      this.queue.set(t, s);
      if (r) {
        var u = e.getComponent(cc.Mask),
          p = e.noBatch;
        s.hasMask = null !== u || !!p;
        s.hasMask;
      }
    }
    t = s;
    if (r && o) {
      s.nodes.push(e);
      s.originalOpacities.push(e.opacity);
      e.opacity = Math.floor(255 * a);
    }
    if (s.hasMask) return t;
    for (var f = e.children, d = 0; d < f.length; d++) {
      var h = f[d],
        y = !!h.active && o;
      t = this.collectRenderNodes(h, t, y, n + 1, a);
    }
    return t;
  }
  generateLayerKey(e, t) {
    return this.useRenderIndex ? "" + this._renderIndexCounter++ : 0 === t ? "__root" : t + "_" + e.name;
  }
}