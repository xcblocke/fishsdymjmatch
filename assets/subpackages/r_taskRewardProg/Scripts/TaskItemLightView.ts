import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import { playSpineAnim } from '../../../Scripts/framework/utils/CommonUtils';
@mj.class
export default class TaskItemLightView extends BaseUI {
  @mj.component("spine_bg", sp.Skeleton)
  spineBg: "spine_bg" = null;
  @mj.component("spine_done", sp.Skeleton)
  spineDone: "spine_done" = null;
  @mj.node("progressGlow")
  progressGlow: "progressGlow" = null;
  isShown = false;
  PROGRESS_ANIM_DURATION = 0.5;
  progressTween = null;
  static prefabUrl = "prefabs/TaskItemLight";
  static bundleName = "r_taskRewardProg";
  static playProgressAnimationFor(e, t, n, o, r) {
    if (cc.isValid(e) && cc.isValid(e.node)) {
      var a = e.node.getChildByName("TaskItemLightView");
      if (cc.isValid(a)) {
        var s = a.getComponent(TaskItemLightView);
        if (s) {
          s.playProgressAnimation(e, t, n, o, r);
        } else {
          null == r || r();
        }
      } else {
        a = e.createUISync(TaskItemLightView);
        if (cc.isValid(a)) {
          e.node.addChild(a);
          var l = a.getComponent(TaskItemLightView);
          if (l) {
            l.playProgressAnimation(e, t, n, o, r);
          } else {
            null == r || r();
          }
        } else null == r || r();
      }
    } else null == r || r();
  }
  @mj.traitEvent("TaskItemLtVw_onLoad")
  onLoad() {
    super.onLoad.call(this);
  }
  playProgressAnimation(e, t, i, n, o) {
    var r = this;
    if (cc.isValid(e) && cc.isValid(e.node)) {
      this.updateProgressUI(e, t, n);
      e.scheduleOnce(function () {
        r.animateProgress(e, t, i, n, function () {
          if (i >= n) {
            r.playAnimation(e, o);
          } else {
            null == o || o();
          }
        });
      }, 0);
    } else null == o || o();
  }
  playAnimation(e, t) {
    if (this.isShown) null == t || t();else {
      this.isShown = true;
      this.playProgressGlowAnimation(e);
      this.alignToTarget(e);
      this.playAnimationSequence(t);
    }
  }
  playProgressGlowAnimation(e) {
    if (cc.isValid(this.progressGlow) && cc.isValid(e) && cc.isValid(e.node) && cc.isValid(e._cellUI)) {
      this.progressGlow.active = true;
      var t = cc.find("content/progressBar/progressImgBar", e._cellUI);
      if (cc.isValid(t)) {
        this.alignNodeToTarget(this.progressGlow, t);
        this.progressGlow.opacity = 70;
        cc.tween(this.progressGlow).to(1, {
          opacity: 0
        }, {
          easing: "sineOut"
        }).call(function () {}).start();
      }
    }
  }
  updateProgressUI(e, t, i) {
    if (cc.isValid(e._cellUI)) {
      var n = cc.find("content/lb_progress", e._cellUI);
      if (n) {
        var o = n.getComponent(cc.Label);
        o && (o.string = t + "/" + i);
      }
      var r = cc.find("content/progressBar", e._cellUI);
      if (r && i > 0) {
        var a = r.getComponent(cc.ProgressBar);
        if (a) {
          var s = Math.min(t / i, 1);
          a.progress = s;
        }
      }
    }
  }
  animateProgress(e, t, i, n, o) {
    var r = this;
    if (!cc.isValid(e._cellUI) || n <= 0) null == o || o();else {
      var a = cc.find("content/progressBar", e._cellUI);
      if (a) {
        var s = a.getComponent(cc.ProgressBar);
        if (s) {
          var l = cc.find("content/lb_progress", e._cellUI),
            c = null == l ? void 0 : l.getComponent(cc.Label),
            p = Math.min(t / n, 1),
            d = Math.min(i / n, 1);
          if (p !== d) {
            var u = {
              value: p
            };
            if (this.progressTween) {
              this.progressTween.stop();
              this.progressTween = null;
            }
            this.progressTween = cc.tween(u).to(this.PROGRESS_ANIM_DURATION, {
              value: d
            }, {
              easing: "sineInOut",
              progress: function (e, o, r, a) {
                var l = e + (o - e) * a;
                s && cc.isValid(s.node) && (s.progress = l);
                if (c && cc.isValid(c.node)) {
                  var p = Math.floor(t + (i - t) * a);
                  c.string = p + "/" + n;
                }
                return l;
              }
            }).call(function () {
              s && cc.isValid(s.node) && (s.progress = d);
              c && cc.isValid(c.node) && (c.string = i + "/" + n);
              r.progressTween = null;
              null == o || o();
            }).start();
          } else null == o || o();
        } else null == o || o();
      } else null == o || o();
    }
  }
  alignToTarget(e) {
    if (cc.isValid(this.node) && cc.isValid(null == e ? void 0 : e.node) && cc.isValid(e._cellUI) && this.spineBg && cc.isValid(this.spineBg.node) && this.spineDone && cc.isValid(this.spineDone.node)) {
      var t = this.spineBg.node.x - this.spineDone.node.x,
        i = this.spineBg.node.y - this.spineDone.node.y,
        n = cc.find("content/sp_done", e._cellUI);
      if (cc.isValid(n)) {
        this.alignNodeToTarget(this.spineDone.node, n);
        this.spineBg.node.setPosition(this.spineDone.node.x + t, this.spineDone.node.y + i, 0);
        n.opacity = 0;
      }
    }
  }
  alignNodeToTarget(e, t) {
    if (cc.isValid(e) && cc.isValid(t) && cc.isValid(e.parent)) {
      var i = t.convertToWorldSpaceAR(cc.v2(0, 0)),
        n = e.parent.convertToNodeSpaceAR(i);
      e.setPosition(cc.v3(n.x, n.y, 0));
    }
  }
  playAnimationSequence(e) {
    this.playBgAnimation(function () {
      null == e || e();
    });
    this.playDoneAnimation();
  }
  playBgAnimation(e) {
    if (this.spineBg && cc.isValid(this.spineBg.node)) {
      this.spineBg.node.active = true;
      playSpineAnim(this.spineBg, 1, "in2", function () {
        null == e || e();
      });
    } else null == e || e();
  }
  playDoneAnimation() {
    var e = this;
    if (this.spineDone && cc.isValid(this.spineDone.node)) {
      this.spineDone.node.active = true;
      playSpineAnim(this.spineDone, 1, "in1", function () {
        playSpineAnim(e.spineDone, -1, "init1");
      });
    }
  }
  onDestroy() {
    super.onDestroy.call(this);
    this.isShown = false;
    if (this.progressTween) {
      this.progressTween.stop();
      this.progressTween = null;
    }
  }
}