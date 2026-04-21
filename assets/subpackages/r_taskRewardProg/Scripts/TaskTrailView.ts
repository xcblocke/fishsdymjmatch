import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import TaskTrailEffView, { TrailEffType } from './TaskTrailEffView';
@mj.class
export default class TaskTrailView extends BaseUI {
  @mj.node("trail")
  trailNode: "trail" = null;
  isPlaying = false;
  batchCompleteCallback = null;
  isAnimationCompleted = false;
  static prefabUrl = "prefabs/TaskTrail";
  static bundleName = "r_taskRewardProg";
  onLoad() {
    super.onLoad.call(this);
    this.node.active = false;
  }
  playBatchTrailAnimation(e, t, i, n) {
    var o = this;
    this.batchCompleteCallback = i || null;
    this.isAnimationCompleted = false;
    if (cc.isValid(e)) {
      var r = e._taskListView;
      if (r && r._tableView) {
        var a = r._tableView,
          s = [0, 1, 2],
          l = cc.find("content/progressBar", e.node);
        if (cc.isValid(l)) {
          var c = l.getComponent(cc.ProgressBar);
          if (c) {
            var p = this.calculateStageProgressIncrement(t),
              d = c.progress,
              u = 0,
              f = s.length;
            s.forEach(function (t, r) {
              setTimeout(function () {
                var s = a.getCellByIndex(t);
                if (cc.isValid(s)) {
                  var l = cc.find("TaskItem/content/sp_done", s);
                  if (cc.isValid(l)) {
                    var h = l.convertToWorldSpaceAR(cc.v2(0, 0)),
                      y = Math.min(1, d + r * p),
                      g = o.getProgressBarCurrentPos(c.node, y);
                    o.playTaskItemDoneAnimation(e, s);
                    o.createTrailInstance(e, h, g, function () {
                      u++;
                      n && n(p);
                      if (u >= f) {
                        o.markAnimationCompleted();
                        null == i || i();
                      }
                    });
                  } else if (++u >= f) {
                    o.markAnimationCompleted();
                    null == i || i();
                  }
                } else if (++u >= f) {
                  o.markAnimationCompleted();
                  null == i || i();
                }
              }, 330 * r);
            });
          } else {
            this.markAnimationCompleted();
            null == i || i();
          }
        } else {
          this.markAnimationCompleted();
          null == i || i();
        }
      } else {
        this.markAnimationCompleted();
        null == i || i();
      }
    } else {
      this.markAnimationCompleted();
      null == i || i();
    }
  }
  playSingleAnimation(e, t, i = 0.5, n?) {
    var o = this;
    if (this.isPlaying) null == n || n();else if (cc.isValid(this.node.parent)) {
      this.isPlaying = true;
      var r = this.node.parent.convertToNodeSpaceAR(e),
        a = this.node.parent.convertToNodeSpaceAR(t);
      this.node.setPosition(r);
      this.node.active = true;
      this.trailNode && (this.trailNode.active = true);
      this.playTrailEffect(e, TrailEffType.START);
      var l = (r.x + a.x) / 2,
        c = Math.max(r.y, a.y) + 20,
        p = [cc.v2(r.x + 0.5 * (l - r.x), r.y + 0.8 * (c - r.y)), cc.v2(l + 0.5 * (a.x - l), c), a],
        d = cc.bezierTo(i, p).easing(cc.easeIn(2)),
        u = cc.callFunc(function () {
          o.playTrailEffect(t, TrailEffType.END);
          o.isPlaying = false;
          o.stopAllAnimations();
          null == n || n();
        }),
        f = cc.sequence(d, u);
      this.node.runAction(f);
    } else null == n || n();
  }
  calculateStageProgressIncrement(e) {
    var t = mj.getClassByName("TaskModel"),
      i = null == t ? void 0 : t.getInstance();
    if (!i || !i.STAGE_WEIGHTS) return 0;
    var n = i.STAGE_WEIGHTS,
      o = e > 1 ? n[e - 2] : 0;
    return ((n[e - 1] || 1) - o) / 3;
  }
  playTrailEffect(e, t) {
    if (cc.isValid(this.node) && cc.isValid(this.node.parent)) {
      for (var i = this.node.parent, n = null; cc.isValid(i) && !n;) (n = i.getComponent("TaskView")) || (i = i.parent);
      if (n) {
        var o = n.createUISync(TaskTrailEffView);
        if (cc.isValid(o)) {
          n.node.addChild(o);
          var r = o.getComponent(TaskTrailEffView);
          if (r) {
            r.playEffect(e, t, function () {
              cc.isValid(o) && o.destroy();
            });
          } else {
            cc.isValid(o) && o.destroy();
          }
        }
      }
    }
  }
  createTrailInstance(e, t, n, o) {
    var r = e.createUISync(TaskTrailView);
    if (cc.isValid(r)) {
      e.node.addChild(r);
      var a = r.getComponent(TaskTrailView);
      if (a) a.playSingleAnimation(t, n, 0.5, function () {
        cc.isValid(r) && r.destroy();
        null == o || o();
      });else {
        cc.isValid(r) && r.destroy();
        null == o || o();
      }
    } else null == o || o();
  }
  getProgressBarCurrentPos(e, t) {
    if (!cc.isValid(e)) return cc.v2(0, 0);
    var i = e.getChildByName("bar");
    if (cc.isValid(i)) {
      var n = i.width,
        o = (t - i.anchorX) * n,
        r = cc.v2(o, 0);
      return i.convertToWorldSpaceAR(r);
    }
    var a = e.width,
      s = (t - e.anchorX) * a,
      l = cc.v2(s, 0);
    return e.convertToWorldSpaceAR(l);
  }
  playTaskItemDoneAnimation(e, t) {
    if (cc.isValid(e) && cc.isValid(t)) {
      var i = cc.find("TaskItem/content/sp_done", t);
      cc.isValid(i) && (i.opacity = 0);
      var n = mj.getClassByName("TaskItemView");
      if (n) {
        var o = t.getComponent(n);
        if (o && cc.isValid(o.node)) {
          var r = mj.getClassByName("TaskItemLightView");
          if (r) {
            var a = e.createUISync(r);
            if (cc.isValid(a)) {
              o.node.addChild(a);
              var s = a.getComponent(r);
              if (s) {
                s.alignToTarget && s.alignToTarget(o);
                s.playDoneAnimation && s.playDoneAnimation();
              } else cc.isValid(a) && a.destroy();
            }
          }
        }
      }
    }
  }
  stopAllAnimations() {
    cc.Tween.stopAllByTarget(this.node);
    this.node.active = false;
    this.trailNode && (this.trailNode.active = false);
  }
  markAnimationCompleted() {
    this.isAnimationCompleted = true;
    this.batchCompleteCallback = null;
  }
  onDestroy() {
    super.onDestroy.call(this);
    this.stopAllAnimations();
    this.isPlaying = false;
    if (!this.isAnimationCompleted && this.batchCompleteCallback) {
      var t = this.batchCompleteCallback;
      this.batchCompleteCallback = null;
      this.isAnimationCompleted = true;
      t();
    }
  }
}