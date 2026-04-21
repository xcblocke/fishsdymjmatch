import I18NStrings from '../../../../Scripts/framework/data/I18NStrings';
import UIView from '../../../../Scripts/framework/ui/UIView';
import BaseSprite from '../../../../Scripts/gamePlay/base/ui/BaseSprite';
import { ETaskType } from '../TaskData';
import { TaskModel } from '../model/TaskModel';
import GameUtils from '../../../../Scripts/core/simulator/util/GameUtils';
import { EAudioID } from '../../../../Scripts/core/simulator/constant/GameTypeEnums';
import CardUtil from '../../../../Scripts/gamePlay/user/CardUtil';
@mj.class
export default class TaskBannerView extends UIView {
  DEFAULT_SHOW_DURATION = 0.5;
  DEFAULT_AUTO_HIDE_DELAY = 2000;
  PROGRESS_ANIM_DURATION = 0.5;
  DEFAULT_HIDE_DURATION = 0.3;
  BANNER_SLIDE_OFFSET = 800;
  contentNode = null;
  iconSprite = null;
  iconSpriteBg = null;
  nodeTitleIcon = null;
  nodeTitleNormal = null;
  descLabelWithIcon = null;
  descLabelNormal = null;
  progressLabel = null;
  progressBar = null;
  spineDone = null;
  _data = null;
  _isAnimating = false;
  _animTween = null;
  _autoHideTimer = 0;
  _progressTween = null;
  _flowId = 0;
  _autoHideFlowId = 0;
  oriContentY = 0;
  static prefabUrl = "prefabs/task/TaskBanner";
  onLoad() {
    super.onLoad.call(this);
    this.initUI();
    this.resetContent();
  }
  initUI() {
    var t, e, a, o, i, r, n;
    this.contentNode = this.node.getChildByName("content");
    this.contentNode.getComponent(cc.Widget).updateAlignment();
    this.oriContentY = this.contentNode.y;
    this.iconSprite = null === (t = cc.find("content/node_title_icon/node_mj/mj", this.node)) || void 0 === t ? void 0 : t.getComponent(cc.Sprite);
    this.iconSpriteBg = null === (e = cc.find("content/node_title_icon/node_mj/mj_bg", this.node)) || void 0 === e ? void 0 : e.getComponent(cc.Sprite);
    this.nodeTitleIcon = cc.find("content/node_title_icon", this.node);
    this.nodeTitleNormal = cc.find("content/node_title", this.node);
    this.descLabelWithIcon = null === (a = cc.find("content/node_title_icon/lb_title", this.node)) || void 0 === a ? void 0 : a.getComponent(cc.Label);
    this.descLabelNormal = null === (o = cc.find("content/node_title/lb_title", this.node)) || void 0 === o ? void 0 : o.getComponent(cc.Label);
    this.progressLabel = null === (i = cc.find("content/lb_progress", this.node)) || void 0 === i ? void 0 : i.getComponent(cc.Label);
    this.progressBar = null === (r = cc.find("content/progressBar", this.node)) || void 0 === r ? void 0 : r.getComponent(cc.ProgressBar);
    this.spineDone = null === (n = cc.find("content/spine_done", this.node)) || void 0 === n ? void 0 : n.getComponent(sp.Skeleton);
    this.spineDone && (this.spineDone.node.active = false);
  }
  resetContent() {
    this.contentNode.y = this.oriContentY + this.BANNER_SLIDE_OFFSET;
    this.contentNode.opacity = 0;
  }
  show(t, e, a) {
    if (t) {
      this._data = t;
      this.clearAutoHideTimer();
      this.updateUI();
      var o = null != e ? e : this.DEFAULT_SHOW_DURATION,
        i = null != a ? a : this.DEFAULT_AUTO_HIDE_DELAY;
      this.cancelFlow();
      var r = this._flowId;
      this.playShowAnimations(o, i, r);
    }
  }
  playShowAnimations(t, e, a) {
    var o = this;
    this.playSlideDownAnimation(t).then(function () {
      if (a === o._flowId) return o.playProgressAnimation(o.PROGRESS_ANIM_DURATION);
    }).then(function () {
      var t;
      if (a === o._flowId) {
        (null === (t = o._data) || void 0 === t ? void 0 : t.isCompleted) && o._data.currentProgress >= o._data.targetProgress && o.playSpineDoneAnimation();
        e > 0 && o.scheduleAutoHide(e, a);
      }
    }).catch(function () {
      o.delegate && o.delegate.close();
    });
  }
  hide() {
    this.clearAutoHideTimer();
    this.cancelFlow();
    var t = this._flowId;
    this.playHideAnimation(this.DEFAULT_HIDE_DURATION, t);
  }
  playHideAnimation(t, e) {
    var a = this;
    this.playSlideUpAnimation(t).then(function () {
      e === a._flowId && a.delegate && a.delegate.close();
    }).catch(function () {
      a.delegate && a.delegate.close();
    });
  }
  updateUI() {
    var t;
    if (this._data) {
      this.updateTitleNode();
      this.updateTaskDescription();
      var e = null !== (t = this._data.oldProgress) && void 0 !== t ? t : 0;
      this.progressLabel && (this.progressLabel.string = e + "/" + this._data.targetProgress);
      if (this.progressBar && this._data.targetProgress > 0) {
        var a = Math.min(e / this._data.targetProgress, 1);
        this.progressBar.progress = a;
      }
      this.spineDone && (this.spineDone.node.active = false);
      this.loadTaskIcon();
    }
  }
  updateTitleNode() {
    var t = this._data.taskType === ETaskType.ClearMahjong;
    this.nodeTitleIcon && (this.nodeTitleIcon.active = t);
    this.nodeTitleNormal && (this.nodeTitleNormal.active = !t);
  }
  updateTaskDescription() {
    var t = this._data.taskDesc || "未知任务";
    if (this._data.taskType === ETaskType.ClearMahjong) {
      this.descLabelWithIcon && I18NStrings.setText(this.descLabelWithIcon.node, "", t, [this._data.targetProgress]);
    } else {
      this.descLabelNormal && I18NStrings.setText(this.descLabelNormal.node, "", t, [this._data.targetProgress]);
    }
  }
  playSpineDoneAnimation() {
    var t = this;
    if (this.spineDone && cc.isValid(this.spineDone.node)) {
      this.spineDone.node.active = true;
      mj.audioManager.playEffect(EAudioID.TaskComplete);
      GameUtils.playSpine(this.spineDone, "in", false, function () {
        t.spineDone && cc.isValid(t.spineDone.node) && GameUtils.playSpine(t.spineDone, "init", true);
      });
    }
  }
  loadTaskIcon() {
    if (this.iconSprite && this.iconSpriteBg && this._data && this._data.taskType === ETaskType.ClearMahjong && void 0 !== this._data.targetCardId) {
      var t = TaskModel.getInstance().getCardResNameByCardId(this._data.targetCardId);
      if (t) {
        var e = CardUtil.getAtlasPathAndBundleName(t),
          a = e.path,
          o = e.bundleName,
          i = e.fromAtlas;
        BaseSprite.refreshWithNode(this.iconSprite.node, a, i, false, o);
        var r = CardUtil.getAtlasPathAndBundleName("gameplay_img_mj_up"),
          n = r.path,
          s = r.bundleName,
          u = r.fromAtlas;
        BaseSprite.refreshWithNode(this.iconSpriteBg.node, n, u, false, s);
      }
    }
  }
  playSlideDownAnimation(t) {
    var e = this;
    return new Promise(function (a) {
      if (e._animTween) {
        e._animTween.stop();
        e._animTween = null;
      }
      e._isAnimating = true;
      mj.audioManager.playEffect(EAudioID.TaskBanner);
      e.resetContent();
      e._animTween = cc.tween(e.contentNode).to(t, {
        y: e.oriContentY,
        opacity: 255
      }, {
        easing: "sineInOut"
      }).call(function () {
        e._isAnimating = false;
        e._animTween = null;
        a();
      }).start();
    });
  }
  playSlideUpAnimation(t) {
    var e = this;
    return new Promise(function (a) {
      if (e._animTween) {
        e._animTween.stop();
        e._animTween = null;
      }
      e._isAnimating = true;
      var o = e.oriContentY + e.BANNER_SLIDE_OFFSET;
      e._animTween = cc.tween(e.contentNode).to(t, {
        y: o,
        opacity: 0
      }, {
        easing: "sineInOut"
      }).call(function () {
        e._isAnimating = false;
        e._animTween = null;
        a();
      }).start();
    });
  }
  playProgressAnimation(t) {
    var e = this;
    return new Promise(function (a) {
      var o;
      if (!e.progressBar || !e._data || e._data.targetProgress <= 0) a();else {
        var i = null !== (o = e._data.oldProgress) && void 0 !== o ? o : 0,
          r = e._data.currentProgress,
          n = e._data.targetProgress,
          s = Math.min(i / n, 1),
          l = Math.min(r / n, 1);
        if (s !== l) {
          mj.audioManager.playEffect(EAudioID.WinCharge);
          var c = {
            value: s
          };
          if (e._progressTween) {
            e._progressTween.stop();
            e._progressTween = null;
          }
          e._progressTween = cc.tween(c).to(t, {
            value: l
          }, {
            easing: "sineInOut",
            progress: function (t, a, o, s) {
              var l = t + (a - t) * s;
              e.progressBar && cc.isValid(e.progressBar.node) && (e.progressBar.progress = l);
              if (e.progressLabel && cc.isValid(e.progressLabel.node)) {
                var c = Math.floor(i + (r - i) * s);
                e.progressLabel.string = c + "/" + n;
              }
              return l;
            }
          }).call(function () {
            e.progressBar && cc.isValid(e.progressBar.node) && (e.progressBar.progress = l);
            e.progressLabel && cc.isValid(e.progressLabel.node) && (e.progressLabel.string = r + "/" + n);
            e._progressTween = null;
            a();
          }).start();
        } else a();
      }
    });
  }
  stopAnimation() {
    if (this._animTween) {
      this._animTween.stop();
      this._animTween = null;
    }
    if (this._progressTween) {
      this._progressTween.stop();
      this._progressTween = null;
    }
    this._isAnimating = false;
  }
  cancelFlow() {
    this._flowId++;
    this.stopAnimation();
    this.clearAutoHideTimer();
  }
  scheduleAutoHide(t, e) {
    var a = this;
    this.clearAutoHideTimer();
    this._autoHideFlowId = e;
    this._autoHideTimer = setTimeout(function () {
      if (e === a._flowId && e === a._autoHideFlowId) {
        a._autoHideTimer = 0;
        a.hide();
      }
    }, t);
  }
  clearAutoHideTimer() {
    if (this._autoHideTimer > 0) {
      clearTimeout(this._autoHideTimer);
      this._autoHideTimer = 0;
    }
    this._autoHideFlowId = 0;
  }
  onDestroy() {
    this.stopAnimation();
    this.clearAutoHideTimer();
    super.onDestroy.call(this);
  }
}