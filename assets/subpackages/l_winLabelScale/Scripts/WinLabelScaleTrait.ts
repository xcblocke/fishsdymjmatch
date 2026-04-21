import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("WinLabelScaleTrait")
export default class WinLabelScaleTrait extends Trait {
  static traitKey = "WinLabelScale";
  get scale() {
    var e;
    return null !== (e = this._traitData.scale) && void 0 !== e ? e : 1.15;
  }
  onWinVw_showWinVw(e, t) {
    var n = e.ins;
    this.scaleWinLab(null == n ? void 0 : n.node);
    t();
  }
  onTLWinVw_showTLWinVw(e, t) {
    var n = e.ins;
    this.scaleWinLab(null == n ? void 0 : n.node);
    t();
  }
  onDCWinVw_showWinVw(e, t) {
    var n = e.ins;
    this.scaleWinLab(null == n ? void 0 : n.node);
    t();
  }
  onTile2WinVw_show(e, t) {
    var n = e.ins;
    this.scaleWinLab(null == n ? void 0 : n.node);
    t();
  }
  scaleWinLab(e) {
    var t = new Set(["btn_next"]);
    cc.isValid(e) && this.scaleLabelRecursive(e, t);
  }
  scaleLabelRecursive(e, t) {
    var n, r;
    if (cc.isValid(e)) {
      var i = e.getComponent(cc.Label) || e.getComponent(cc.RichText);
      if (i) {
        i.fontSize = i.fontSize * this.scale;
        i.lineHeight = i.lineHeight * this.scale;
      }
      try {
        for (var o = __values(e.children), c = o.next(); !c.done; c = o.next()) {
          var l = c.value;
          t.has(l.name) || this.scaleLabelRecursive(l, t);
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          c && !c.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
    }
  }
}