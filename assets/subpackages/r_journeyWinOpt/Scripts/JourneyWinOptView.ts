import BaseUI from '../../../Scripts/framework/ui/BaseUI';
@mj.class
export default class JourneyWinOptView extends BaseUI {
  @mj.component("spine_victory", sp.Skeleton)
  spineVictory: "spine_victory" = null;
  @mj.component("lb_title_opt", cc.Label)
  lblTitleOpt: "lb_title_opt" = null;
  @mj.node("progress_opt")
  progress_container: "progress_opt" = null;
  @mj.component("progress_opt/Progress", cc.ProgressBar)
  progress_bar: "progress_opt/Progress" = null;
  isShown = false;
  targetProgress = 0;
  static prefabUrl = "prefabs/JourneyWinOpt";
  static bundleName = "r_journeyWinOpt";
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
        this.dealProgress(t);
      }
    }
  }
  dealProgress(t) {
    var e = this;
    cc.isValid(this.progress_container) && (this.progress_container.active = false);
    var r = cc.find("progress", t),
      i = cc.find("progress/Progress", t);
    if (cc.isValid(i) && cc.isValid(r)) {
      var o = i.getComponent(cc.ProgressBar);
      if (o) {
        this.targetProgress = o.endProgress || 0;
        cc.isValid(this.progress_bar) && (this.progress_bar.progress = o.progress);
        i.active = false;
        var n = r.getSiblingIndex();
        this.node.setSiblingIndex(n);
        this.scheduleOnce(function () {
          e.playProgressBarAnimation();
        }, 0.6);
      }
    }
  }
  playTitleAnimation() {
    var t;
    if (cc.isValid(null === (t = this.lblTitleOpt) || void 0 === t ? void 0 : t.node)) {
      this.lblTitleOpt.node.opacity = 255;
      this.lblTitleOpt.node.scale = 0;
      this.lblTitleOpt.node.stopAllActions();
      cc.tween(this.lblTitleOpt.node).delay(0.5).to(0.2, {
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
  playProgressBarAnimation() {
    if (cc.isValid(this.progress_bar) && cc.isValid(this.progress_container)) {
      this.progress_container.active = true;
      this.progress_container.opacity = 0;
      this.progress_container.scale = 0.7;
      cc.Tween.stopAllByTarget(this.progress_container);
      cc.tween(this.progress_container).to(0.3, {
        opacity: 255,
        scale: 1.05
      }, {
        easing: cc.easing.quadOut
      }).to(0.14, {
        scale: 1
      }, {
        easing: cc.easing.quadIn
      }).start();
      cc.Tween.stopAllByTarget(this.progress_bar);
      cc.tween(this.progress_bar).delay(0.6).to(0.3, {
        progress: this.targetProgress
      }, {
        easing: cc.easing.quadInOut
      }).start();
    }
  }
  playSpineAnimation() {
    cc.isValid(this.spineVictory) && this.spineVictory.setAnimation(0, "in", false);
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
    this.isShown = false;
    this.unscheduleAllCallbacks();
    cc.isValid(this.progress_container) && cc.Tween.stopAllByTarget(this.progress_container);
    cc.isValid(this.progress_bar) && cc.Tween.stopAllByTarget(this.progress_bar);
    cc.isValid(null === (e = this.lblTitleOpt) || void 0 === e ? void 0 : e.node) && this.lblTitleOpt.node.stopAllActions();
  }
}