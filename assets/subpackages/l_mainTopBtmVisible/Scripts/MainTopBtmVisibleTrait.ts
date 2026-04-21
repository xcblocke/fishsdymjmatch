import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("MainTopBtmVisibleTrait")
export default class MainTopBtmVisibleTrait extends Trait {
  static traitKey = "MainTopBtmVisible";
  onLoad() {
    super.onLoad.call(this);
  }
  onMainGmVw_calcAreaSz(t, o) {
    var e, r;
    (null === (e = t.ins) || void 0 === e ? void 0 : e.topRootNode) && (t.ins.topRootNode.active = false);
    (null === (r = t.ins) || void 0 === r ? void 0 : r.bottomRootNode) && (t.ins.bottomRootNode.active = false);
    o();
  }
  onInitViewBhv_crtTls(t, o) {
    var e,
      r,
      i = null === (r = null === (e = t.ins) || void 0 === e ? void 0 : e.context) || void 0 === r ? void 0 : r.gameView;
    (null == i ? void 0 : i.topRootNode) && (i.topRootNode.active = true);
    (null == i ? void 0 : i.bottomRootNode) && (i.bottomRootNode.active = true);
    o();
  }
}