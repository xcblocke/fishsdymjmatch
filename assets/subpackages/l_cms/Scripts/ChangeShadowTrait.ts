import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("ChangeShadowTrait")
export default class ChangeShadowTrait extends Trait {
  _minOpacity = 0.7;
  static traitKey = "ChangeShadow";
  onLoad() {
    super.onLoad.call(this);
    this._minOpacity = this._traitData.minOpacity || 0.7;
  }
  onInitViewBhv_crtTls(t, e) {
    for (var r, o, n, i, l = t.ins.context.getTileMapObject(), f = t.ins.context.getTileNodeMap(), u = l.maxLayerIndex, p = new Map(), y = 0; y <= u; y++) {
      var s = u - y,
        h = this.calculateLayerOpacity(u + 1, s, this._minOpacity),
        d = Math.floor(255 * h);
      p.set(y, d);
    }
    try {
      for (var _ = __values(f), v = _.next(); !v.done; v = _.next()) {
        var w = __read(v.value, 2),
          b = (w[0], w[1]);
        if ((null === (i = null === (n = null == b ? void 0 : b.info) || void 0 === n ? void 0 : n.tileObject) || void 0 === i ? void 0 : i.layer) && b.shadowNode) {
          y = b.info.tileObject.layer;
          void 0 !== (d = p.get(y)) && (b.shadowNode.opacity = d);
        }
      }
    } catch (t) {
      r = {
        error: t
      };
    } finally {
      try {
        v && !v.done && (o = _.return) && o.call(_);
      } finally {
        if (r) throw r.error;
      }
    }
    e();
  }
  calculateLayerOpacity(t, e, r) {
    return t <= 1 ? 1 : 0 === e ? r : e === t - 1 ? 1 : r + (1 - r) / (t - 1) * e;
  }
}