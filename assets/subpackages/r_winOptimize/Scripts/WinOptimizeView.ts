import BaseUI from '../../../Scripts/framework/ui/BaseUI';
@mj.class
export default class WinOptimizeView extends BaseUI {
  @mj.component("spine_victory", sp.Skeleton)
  spineVictory: "spine_victory" = null;
  @mj.component("lb_title_opt", cc.Label)
  lblTitleOpt: "lb_title_opt" = null;
  isShown = false;
  static prefabUrl = "prefabs/WinOptimize";
  static bundleName = "r_winOptimize";
  onLoad() {
    super.onLoad.call(this);
  }
  showUI(t) {
    if (!this.isShown) {
      this.isShown = true;
      var e = this.getTitleNode(t);
      if (e) {
        this.setTitle(e);
        this.playSpineAnimation();
        this.playTitleAnimation();
      }
    }
  }
  playTitleAnimation() {
    if (this.lblTitleOpt && cc.isValid(this.lblTitleOpt.node)) {
      this.lblTitleOpt.node.opacity = 255;
      this.lblTitleOpt.node.scale = 0;
      this.lblTitleOpt.node.stopAllActions();
      cc.tween(this.lblTitleOpt.node).delay(0.2).to(0.33, {
        scale: 1.2
      }, {
        easing: cc.easing.quartOut
      }).to(0.2, {
        scale: 1
      }, {
        easing: cc.easing.quartIn
      }).start();
    }
  }
  playSpineAnimation() {
    this.spineVictory && this.spineVictory.setAnimation(0, "in", false);
  }
  getTitleNode(t) {
    if (!cc.isValid(t)) return null;
    var e = t.getChildByName("lbl_title");
    return cc.isValid(e) ? e : null;
  }
  setTitle(t) {
    var e = t.getComponent(cc.Label);
    if (e) {
      t.active = false;
      cc.isValid(this.lblTitleOpt) && (this.lblTitleOpt.string = e.string);
    }
  }
  onDestroy() {
    var e;
    super.onDestroy.call(this);
    cc.isValid(null === (e = this.lblTitleOpt) || void 0 === e ? void 0 : e.node) && this.lblTitleOpt.node.stopAllActions();
    this.isShown = false;
  }
}