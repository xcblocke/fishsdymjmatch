import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("RankSynBoxTipsTrait")
export default class RankSynBoxTipsTrait extends Trait {
  rankViewUpBgNode = null;
  rankViewDownBgNode = null;
  rankViewScrollRootNode = null;
  rankIntroViewIns = null;
  static traitKey = "RankSynBoxTips";
  isTouchInRankViewUpDown(t) {
    if (!cc.isValid(this.rankViewUpBgNode) || !cc.isValid(this.rankViewDownBgNode)) return false;
    var e = this.rankViewUpBgNode.getBoundingBoxToWorld(),
      r = this.rankViewDownBgNode.getBoundingBoxToWorld(),
      n = t.getLocation();
    return e.contains(n) || r.contains(n);
  }
  hasRankIntroView() {
    return cc.isValid(this.rankIntroViewIns);
  }
  onRankBoxTips_touchStart(t, e) {
    var r = t.args[0];
    if (this.isTouchInRankViewUpDown(r) || this.hasRankIntroView()) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      e();
    }
  }
  onRankVw_show(t, e) {
    this.rankViewUpBgNode = t.ins._upBgNode;
    this.rankViewDownBgNode = t.ins._downBgNode;
    this.rankViewScrollRootNode = t.ins._contentNode;
    e();
  }
  onRankIntroVw_show(t, e) {
    this.rankIntroViewIns = t.ins;
    e();
  }
  onRankVw_getTipsParent(t, e) {
    if (cc.isValid(this.rankViewScrollRootNode)) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: this.rankViewScrollRootNode
      });
    } else {
      e();
    }
  }
}