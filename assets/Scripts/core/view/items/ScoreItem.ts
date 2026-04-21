import BaseUI from '../../../framework/ui/BaseUI';
import GameUtils from '../../simulator/util/GameUtils';
@mj.class
export default class ScoreItem extends BaseUI {
  _skeCombo = null;
  _skeShow = null;
  _lblNormalScore = null;
  _scoreDynamicAccum = null;
  _scaleAnimationTween = null;
  _isScaling = false;
  _isScrolling = false;
  _isAtMaxScale = false;
  _dynamicAccumComp = null;
  setDynamicAccumComp(e) {
    this._dynamicAccumComp = e;
  }
  onLoad() {
    super.onLoad.call(this);
    this._skeCombo = this.node.getChildByName("spin_combo").getComponent(sp.Skeleton);
    this._skeShow = this.node.getChildByName("spin_show").getComponent(sp.Skeleton);
    this._lblNormalScore = this.node.getChildByName("lbl_normal").getComponent(cc.Label);
    this._lblNormalScore.string = "0";
    this._skeCombo.node.active = false;
    this._skeShow.node.active = false;
    this.node.active = false;
    this.playComboAni();
  }
  @mj.traitEvent("ScoreItem_playComboAni")
  playComboAni() {
    GameUtils.playSpine(this._skeCombo, "init", true);
  }
  @mj.traitEvent("ScoreItem_updScore")
  updateScore(e, t, o) {
    var n = this;
    this.node.active || (this.node.active = true);
    this._skeCombo.node.active = o;
    if (e <= 0) this._lblNormalScore.string = t.toString();else if (!((Number(this._lblNormalScore.string) || 0) >= t)) {
      this._skeShow.node.active = true;
      GameUtils.playSpine(this._skeShow, o ? "in_2" : "in_1", false, function () {
        n._skeShow.node.active = false;
      });
      this.handleScoreAnimation(t);
    }
  }
  @mj.traitEvent("ScoreItem_getBaseScale")
  getScoreBaseScale() {
    return 1;
  }
  @mj.traitEvent("ScoreItem_forceUpdScore")
  forceUpdateScore(e) {
    this.cleanup();
    var t = this.getScoreBaseScale();
    this._lblNormalScore.node.scale = t;
    this._isScaling = false;
    this._isScrolling = false;
    this._isAtMaxScale = false;
    this._lblNormalScore.string = e.toString();
    this._skeCombo.node.active = false;
    this._skeShow.node.active = false;
  }
  handleScoreAnimation(e) {
    if (this._isScrolling) this.updateScrollAnimation(e);else {
      this.playScoreScaleUpAnimation();
      this.playScoreScrollAnimation(e);
    }
  }
  playScoreScaleUpAnimation() {
    var e = this;
    this._isScaling = true;
    var t = this.getScoreBaseScale();
    this._lblNormalScore.node.scale = t;
    this.stopScoreScaleAnimation();
    this._scaleAnimationTween = cc.tween(this._lblNormalScore.node).to(0.2, {
      scale: 1.3 * t
    }, {
      easing: "quintOut"
    }).call(function () {
      e._scaleAnimationTween = null;
      e._isScaling = false;
      e._isAtMaxScale = true;
    }).start();
  }
  playScoreScaleDownAnimation() {
    var e = this;
    if (this._isAtMaxScale && !this._isScaling) {
      this._isScaling = true;
      this.stopScoreScaleAnimation();
      var t = this.getScoreBaseScale();
      this._scaleAnimationTween = cc.tween(this._lblNormalScore.node).to(0.2, {
        scale: t
      }, {
        easing: "quintIn"
      }).call(function () {
        e._scaleAnimationTween = null;
        e._isScaling = false;
        e._isAtMaxScale = false;
      }).start();
    }
  }
  stopScoreScaleAnimation() {
    if (this._scaleAnimationTween) {
      this._scaleAnimationTween.stop();
      this._scaleAnimationTween = null;
    }
  }
  updateScrollAnimation(e) {
    this._scoreDynamicAccum && this._scoreDynamicAccum.updateTargetValue(e);
  }
  playScoreScrollAnimation(e) {
    var t = this,
      o = Number(this._lblNormalScore.string) || 0;
    if (!(o >= e)) if (this._scoreDynamicAccum) this._scoreDynamicAccum.updateTargetValue(e);else {
      this._isScrolling = true;
      this._scoreDynamicAccum = this._dynamicAccumComp.create(o, e, 0.5, function (e, o) {
        var n = Math.floor(e);
        t._lblNormalScore.string = n.toString();
        t.checkScaleDownTiming(o);
      }, function (e) {
        t._lblNormalScore.string = e.toString();
        t._scoreDynamicAccum = null;
        t._isScrolling = false;
      });
    }
  }
  checkScaleDownTiming(e) {
    this._isAtMaxScale && !this._isScaling && e >= 0.6 && this.playScoreScaleDownAnimation();
  }
  cleanup() {
    this.stopScoreScaleAnimation();
    if (this._scoreDynamicAccum) {
      this._dynamicAccumComp.removeHandler(this._scoreDynamicAccum);
      this._scoreDynamicAccum = null;
    }
    this._isScaling = false;
    this._isScrolling = false;
    this._isAtMaxScale = false;
  }
  resetForRestart() {
    this.forceUpdateScore(0);
  }
  onDestroy() {
    this.cleanup();
    super.onDestroy.call(this);
  }
}