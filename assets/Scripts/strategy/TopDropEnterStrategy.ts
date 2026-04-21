export class TopDropEnterStrategy {
  MOVE_DURATION = 0.26;
  FADE_DURATION = 0.13;
  MIN_NODE_DELAY = 0.03;
  MAX_NODE_DELAY = 0.1;
  ROW_DELAY = 0.03;
  LAYER_DELAY = 0.13;
  DROP_OFFSET_Y = 60;
  totalDuration = 0;
  getName() {
    return "TopDropEnter";
  }
  @mj.traitEvent("TopDropStgy_genCfgs")
  generateAnimationConfigs(e) {
    var t,
      o,
      n = this,
      a = [],
      l = e.tileNodeMap,
      s = new Map();
    try {
      for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
        var p = __read(u.value, 2)[1];
        if (cc.isValid(p.cardNode) && cc.isValid(p.shadowNode)) {
          var f = p.info.layerIndex || 0,
            d = p.info.tileObject.gridPosY || 0,
            h = p.info.tileObject.gridPosX || 0;
          s.has(f) || s.set(f, new Map());
          var y = s.get(f);
          y.has(d) || y.set(d, []);
          y.get(d).push({
            cardNode: p.cardNode,
            shadowNode: p.shadowNode,
            layer: f,
            row: d,
            col: h
          });
        }
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
    if (0 === s.size) return a;
    var m = 0,
      v = 0,
      g = Array.from(s.keys()).sort(function (e, t) {
        return e - t;
      });
    g.forEach(function (e, t) {
      var o = s.get(e),
        i = v,
        r = Array.from(o.keys()).sort(function (e, t) {
          return e - t;
        }),
        l = 0;
      r.forEach(function (e) {
        var t = o.get(e),
          r = i + l;
        t.sort(function (e, t) {
          return e.col - t.col;
        });
        t.forEach(function (e) {
          var t = n.MIN_NODE_DELAY + Math.random() * (n.MAX_NODE_DELAY - n.MIN_NODE_DELAY),
            o = r + t;
          m = Math.max(m, o);
          var i = e.cardNode.position;
          a.push({
            node: e.cardNode,
            startOffset: cc.v2(0, n.DROP_OFFSET_Y),
            endPosition: i.clone(),
            delay: o,
            duration: n.MOVE_DURATION,
            easing: "backOut",
            metadata: {
              layer: e.layer,
              row: e.row,
              col: e.col,
              isLeft: false
            },
            customExecutor: function (e, t) {
              var o = t.endPosition.clone(),
                i = o.clone().add(cc.v3(t.startOffset.x, t.startOffset.y, 0));
              e.position = i;
              e.scale = 1.2;
              e.opacity = 0;
              var r = t.duration,
                a = r * (n.FADE_DURATION / n.MOVE_DURATION);
              return cc.tween(e).delay(t.delay).parallel(cc.tween().to(r, {
                position: o
              }, {
                easing: "backOut"
              }), cc.tween().to(r, {
                scale: 1
              }, {
                easing: "backOut"
              }), cc.tween().to(a, {
                opacity: 255
              }, {
                easing: "circOut"
              })).start();
            }
          });
          var l = e.shadowNode.position;
          a.push({
            node: e.shadowNode,
            startOffset: cc.v2(0, n.DROP_OFFSET_Y),
            endPosition: l.clone(),
            delay: o,
            duration: n.MOVE_DURATION,
            easing: "backOut",
            metadata: {
              layer: e.layer,
              row: e.row,
              col: e.col,
              isLeft: false
            },
            customExecutor: function (e, t) {
              var o = t.endPosition.clone(),
                i = o.clone().add(cc.v3(t.startOffset.x, t.startOffset.y, 0));
              e.position = i;
              e.scale = 1.2;
              e.opacity = 0;
              var r = t.duration,
                a = r * (n.FADE_DURATION / n.MOVE_DURATION);
              return cc.tween(e).delay(t.delay).parallel(cc.tween().to(r, {
                position: o
              }, {
                easing: "backOut"
              }), cc.tween().to(r, {
                scale: 1
              }, {
                easing: "backOut"
              }), cc.tween().to(a, {
                opacity: 255
              }, {
                easing: "circOut"
              })).start();
            }
          });
        });
        l += n.ROW_DELAY;
      });
      t < g.length - 1 && (v += n.LAYER_DELAY);
    });
    this.totalDuration = m + this.MOVE_DURATION;
    return a;
  }
  getTotalDuration() {
    return this.totalDuration;
  }
}