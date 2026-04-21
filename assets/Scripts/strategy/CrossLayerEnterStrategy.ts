export class CrossLayerEnterStrategy {
  ENTER_DURATION = 0.4;
  DELAY_PER_LAYER = 0.16;
  DELAY_PER_ITEM = 0.03;
  OFFSET_RATIO = 1;
  totalDuration = 0;
  getName() {
    return "CrossLayerEnter";
  }
  @mj.traitEvent("CrossLayerStgy_genCfgs")
  generateAnimationConfigs(e) {
    var t,
      o,
      n = this,
      a = [],
      l = e.tileNodeMap,
      s = (e.cardLayoutConfig, e.screenSize.width * this.OFFSET_RATIO),
      c = new Map();
    try {
      for (var u = __values(l), p = u.next(); !p.done; p = u.next()) {
        var f = __read(p.value, 2),
          d = (f[0], f[1]);
        if (cc.isValid(d.cardNode) && cc.isValid(d.shadowNode)) {
          var h = d.info.layerIndex || 0,
            y = d.info.tileObject.gridPosY || 0,
            m = d.info.tileObject.gridPosX || 0;
          c.has(h) || c.set(h, []);
          c.get(h).push({
            cardNode: d.cardNode,
            shadowNode: d.shadowNode,
            layer: h,
            row: y,
            col: m
          });
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        p && !p.done && (o = u.return) && o.call(u);
      } finally {
        if (t) throw t.error;
      }
    }
    if (0 === c.size) return a;
    var v = Array.from(c.keys()).sort(function (e, t) {
        return e - t;
      }),
      g = 0;
    v.forEach(function (e, t) {
      var o = c.get(e),
        i = t * n.DELAY_PER_LAYER,
        r = new Map();
      o.forEach(function (e) {
        r.has(e.row) || r.set(e.row, []);
        r.get(e.row).push(e);
      });
      Array.from(r.keys()).sort(function (e, t) {
        return e - t;
      }).forEach(function (e, t) {
        var o = r.get(e),
          l = t % 2 == 0;
        o.sort(function (e, t) {
          return l ? t.cardNode.position.x - e.cardNode.position.x : e.cardNode.position.x - t.cardNode.position.x;
        });
        o.forEach(function (e, t) {
          var o = i + t * n.DELAY_PER_ITEM;
          g = Math.max(g, o);
          var r = l ? -s : s;
          a.push({
            node: e.cardNode,
            startOffset: cc.v2(r, 0),
            endPosition: e.cardNode.position.clone(),
            delay: o,
            duration: n.ENTER_DURATION,
            easing: "cubicOut",
            metadata: {
              layer: e.layer,
              row: e.row,
              col: e.col,
              isLeft: l
            }
          });
          a.push({
            node: e.shadowNode,
            startOffset: cc.v2(r, 0),
            endPosition: e.shadowNode.position.clone(),
            delay: o,
            duration: n.ENTER_DURATION,
            easing: "cubicOut",
            metadata: {
              layer: e.layer,
              row: e.row,
              col: e.col,
              isLeft: l
            }
          });
        });
      });
    });
    this.totalDuration = g + this.ENTER_DURATION;
    return a;
  }
  getTotalDuration() {
    return this.totalDuration;
  }
}