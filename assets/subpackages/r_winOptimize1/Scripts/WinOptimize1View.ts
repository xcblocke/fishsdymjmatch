import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import { playSpineAnim } from '../../../Scripts/framework/utils/CommonUtils';
@mj.class
export default class WinOptimize1View extends BaseUI {
  @mj.component("spine_victory", sp.Skeleton)
  spineVictory: "spine_victory" = null;
  @mj.component("spine_score", sp.Skeleton)
  spineScore: "spine_score" = null;
  @mj.component("lb_title_opt", cc.Label)
  lblTitleOpt: "lb_title_opt" = null;
  isShown = false;
  static prefabUrl = "prefabs/WinOptimize1";
  static bundleName = "r_winOptimize1";
  onLoad() {
    super.onLoad.call(this);
  }
  showUI(t) {
    if (!this.isShown) {
      this.isShown = true;
      var i = this.getTitleNode(t);
      if (i) {
        this.hideOriginalSpine(t);
        this.setTitle(i);
        this.alignSpineScore(t);
        this.playSpineAnimation();
        this.playTitleAnimation();
      }
    }
  }
  playTitleAnimation() {
    if (this.lblTitleOpt && cc.isValid(this.lblTitleOpt.node)) {
      this.lblTitleOpt.node.scale = 1.8;
      this.lblTitleOpt.node.opacity = 0;
      this.lblTitleOpt.node.stopAllActions();
      cc.tween(this.lblTitleOpt.node).to(0.2, {
        scale: 0.7
      }, {
        easing: cc.easing.sineInOut
      }).to(0.13, {
        scale: 1.05
      }, {
        easing: cc.easing.sineInOut
      }).to(0.1, {
        scale: 1
      }, {
        easing: cc.easing.quadIn
      }).start();
      cc.tween(this.lblTitleOpt.node).to(0.43, {
        opacity: 255
      }).start();
    }
  }
  alignSpineScore(t) {
    if (cc.isValid(t) && cc.isValid(this.spineScore)) {
      var i = t.getChildByName("lbl_score");
      cc.isValid(i) && (this.spineScore.node.y = i.y);
    }
  }
  playSpineAnimation() {
    var t = this;
    this.spineVictory && playSpineAnim(this.spineVictory, 1, "in_1", function () {
      playSpineAnim(t.spineVictory, -1, "init");
    });
    this.spineScore && playSpineAnim(this.spineScore, 1, "in_2");
  }
  hideOriginalSpine(t) {
    if (cc.isValid(t)) {
      var i = t.getChildByName("spin_wellDone");
      cc.isValid(i) && (i.active = false);
      var e = t.getChildByName("light_node");
      cc.isValid(e) && (e.active = false);
    }
  }
  getTitleNode(t) {
    if (!cc.isValid(t)) return null;
    var i = t.getChildByName("lbl_title");
    return cc.isValid(i) ? i : null;
  }
  setTitle(t) {
    var i = t.getComponent(cc.Label);
    if (i) {
      t.active = false;
      cc.isValid(this.lblTitleOpt) && (this.lblTitleOpt.string = i.string);
    }
  }
  onDestroy() {
    var i;
    super.onDestroy.call(this);
    cc.isValid(null === (i = this.lblTitleOpt) || void 0 === i ? void 0 : i.node) && this.lblTitleOpt.node.stopAllActions();
    this.isShown = false;
  }
}