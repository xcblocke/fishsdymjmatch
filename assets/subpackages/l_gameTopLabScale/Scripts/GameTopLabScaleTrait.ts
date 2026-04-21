import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("GameTopLabScaleTrait")
export default class GameTopLabScaleTrait extends Trait {
  static traitKey = "GameTopLabScale";
  get scale() {
    var e;
    return null !== (e = this._traitData.scale) && void 0 !== e ? e : 1.15;
  }
  onMainGmVw_initLayers(e, t) {
    var r = e.ins;
    this.scaleTopLab(r);
    t();
  }
  scaleTopLab(e) {
    cc.isValid(e) && cc.isValid(e.topRootNode) && this.scaleLabelRecursive(e.topRootNode);
  }
  onScoreItem_getBaseScale(e, t) {
    var r;
    t({
      returnVal: (null !== (r = e.beforReturnVal) && void 0 !== r ? r : 1) * this.scale
    });
  }
  scaleLabelRecursive(e) {
    var t, r;
    if (cc.isValid(e)) {
      e.getComponent(cc.Label) && e.setScale(e.scale * this.scale);
      try {
        for (var o = __values(e.children), n = o.next(); !n.done; n = o.next()) {
          var i = n.value;
          this.scaleLabelRecursive(i);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          n && !n.done && (r = o.return) && r.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
    }
  }
}