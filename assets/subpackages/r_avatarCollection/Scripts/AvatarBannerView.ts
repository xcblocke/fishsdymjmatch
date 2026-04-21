import UIView from '../../../Scripts/framework/ui/UIView';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
import { getBundleName } from './Utils';
@mj.class
export default class AvatarBannerView extends UIView {
  SHOW_MOVE_DURATION = 0.17;
  SHOW_OPACITY_DURATION = 0.23;
  BOUNCE_DURATION = 0.06;
  WAIT_AFTER_SHOW = 0.1;
  PROGRESS_SEGMENT_DURATION = 0.17;
  WAIT_AFTER_COMPLETE = 0.17;
  HIDE_DURATION = 0.23;
  BOUNCE_OFFSET = 15;
  BANNER_SLIDE_OFFSET = 300;
  contentNode = null;
  iconSprite = null;
  progressLabel = null;
  progressBar = null;
  animTweens = [];
  oriContentY = 0;
  data = null;
  static prefabUrl = "prefabs/AvatarBanner";
  static bundleName = getBundleName();
  onLoad() {
    super.onLoad.call(this);
    this.initUI();
    this.resetToHiddenPosition();
  }
  onDestroy() {
    this.stopAllAnimations();
    super.onDestroy.call(this);
  }
  show(t) {
    this.data = null == t ? void 0 : t.data;
    this.stopAllAnimations();
    this.updateUI();
    this.playCompleteAnimation();
  }
  initUI() {
    var t, e, a, r;
    this.contentNode = this.node.getChildByName("content");
    null === (t = this.contentNode.getComponent(cc.Widget)) || void 0 === t || t.updateAlignment();
    this.oriContentY = this.contentNode.y;
    this.iconSprite = null === (e = cc.find("content/node_title_icon/node_mj/mj", this.node)) || void 0 === e ? void 0 : e.getComponent(cc.Sprite);
    this.progressLabel = null === (a = cc.find("content/lb_progress", this.node)) || void 0 === a ? void 0 : a.getComponent(cc.Label);
    this.progressBar = null === (r = cc.find("content/progressBar", this.node)) || void 0 === r ? void 0 : r.getComponent(cc.ProgressBar);
  }
  resetToHiddenPosition() {
    this.contentNode.y = this.oriContentY + this.BANNER_SLIDE_OFFSET;
    this.contentNode.opacity = 0;
  }
  updateUI() {
    var t = this.data.maxCount - 2,
      e = this.data.maxCount;
    this.progressLabel && (this.progressLabel.string = t + "/" + e);
    this.progressBar && (this.progressBar.progress = t / e);
    var a = CardUtil.getAtlasPathAndBundleName(this.data.resName),
      r = a.path,
      n = a.bundleName,
      o = a.fromAtlas;
    BaseSprite.refreshWithNode(this.iconSprite.node, r, o, false, n);
  }
  async playCompleteAnimation() {
    var t, e;
    await this.playSlideDownAnimation();
    await this.wait(this.WAIT_AFTER_SHOW);
    await this.playProgressAnimation();
    console.time("playSpineDoneAnimation");
    await this.playSpineDoneAnimation();
    console.timeEnd("playSpineDoneAnimation");
    await this.wait(this.WAIT_AFTER_COMPLETE);
    await this.playHideAnimation();
    null === (t = this.delegate) || void 0 === t || t.close();
    return;
  }
  playSlideDownAnimation() {
    var t = this;
    return new Promise(function (e) {
      var a = cc.tween(t.contentNode).to(t.SHOW_MOVE_DURATION, {
        y: t.oriContentY - t.BOUNCE_OFFSET,
        opacity: 255
      }, {
        easing: cc.easing.quadInOut
      }).to(t.SHOW_OPACITY_DURATION - t.SHOW_MOVE_DURATION, {
        y: t.oriContentY
      }).call(e).start();
      t.animTweens.push(a);
    });
  }
  playProgressAnimation() {
    var t = this;
    return new Promise(function (e) {
      var a = t.data.maxCount,
        r = {
          value: a - 2
        },
        n = cc.tween(r).to(2 * t.PROGRESS_SEGMENT_DURATION, {
          value: a
        }, {
          easing: "linear",
          progress: function (e, r, n, o) {
            if (cc.isValid(t.progressBar) && cc.isValid(t.progressLabel)) {
              var i = e + (r - e) * o;
              t.progressBar.progress = i / a;
              t.progressLabel.string = Math.floor(i) + "/" + a;
            }
          }
        }).call(e).start();
      t.animTweens.push(n.start());
    });
  }
  playSpineDoneAnimation() {
    var t = this;
    return new Promise(function (e) {
      var a = BaseSpine.create("spine/rank_progbar", "in_01", 1, function () {
        return e();
      }, false, getBundleName());
      a.node.parent = t.contentNode;
      a.node.position = cc.v3(0, 0, 0);
    });
  }
  playHideAnimation() {
    var t = this;
    return new Promise(function (e) {
      var a = cc.tween(t.contentNode).to(t.SHOW_MOVE_DURATION, {
        y: t.oriContentY - t.BOUNCE_OFFSET
      }, {
        easing: "sineOut"
      }).to(t.BOUNCE_DURATION, {
        y: t.oriContentY + t.BANNER_SLIDE_OFFSET
      }, {
        easing: "sineOut"
      }).call(e).start();
      t.animTweens.push(a);
    });
  }
  wait(t) {
    var e = this;
    return new Promise(function (a) {
      var r = cc.tween(e.node).delay(t).call(a).start();
      e.animTweens.push(r);
    });
  }
  stopAllAnimations() {
    this.animTweens.forEach(function (t) {
      return null == t ? void 0 : t.stop();
    });
    this.animTweens = [];
  }
}