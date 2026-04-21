import BaseSpine from '../../../gamePlay/base/ui/BaseSpine';
import BaseUI from '../../../framework/ui/BaseUI';
@mj.class
export default class Tile2ScoreItem extends BaseUI {
  _spinCombo = null;
  _lblScore = null;
  _displayScore = 0;
  _targetScore = 0;
  _rollTimer = null;
  _scaleTween = null;
  ROLL_TARGET_DURATION = 1.2;
  ROLL_MIN_TIME_PER_SCORE = 0.003;
  ROLL_MAX_TOTAL_MS = 1000;
  ROLL_MIN_INTERVAL_MS = 2;
  onLoad() {
    var t;
    super.onLoad.call(this);
    this._lblScore = null === (t = this.node.getChildByName("lbl_normal")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
    this._lblScore && (this._lblScore.string = "0");
    this.initSpineCombo();
  }
  initSpineCombo() {
    var e = this.node.getChildByName("spin_combo");
    if (e) {
      this._spinCombo = BaseSpine.refreshWithNode(e, this.getComboSpinePath());
      this._spinCombo.setAnimation("init", -1);
      this._spinCombo.node.active = false;
    }
  }
  getComboSpinePath() {
    return "spine/score/gameplay_comboTips";
  }
  updateScore(e, t, o) {
    this.node.active || (this.node.active = true);
    this._spinCombo && (this._spinCombo.node.active = o);
    if (e <= 0) {
      this._displayScore = t;
      this._targetScore = t;
      this._lblScore && (this._lblScore.string = t.toString());
    } else t <= this._targetScore || this.startRolling(t);
  }
  showComboOnArrive(e) {
    this._spinCombo && (this._spinCombo.node.active = e);
  }
  startRolling(e) {
    var t = this,
      o = e - this._displayScore;
    if (o <= 0) {
      this._displayScore = e;
      this._targetScore = e;
      this._lblScore && (this._lblScore.string = e.toString());
    } else {
      this.stopRolling();
      this._targetScore = e;
      var n = Math.max(this.ROLL_TARGET_DURATION / o, this.ROLL_MIN_TIME_PER_SCORE),
        i = Math.max(1000 * n, this.ROLL_MIN_INTERVAL_MS),
        r = o * i,
        a = Math.min(r, this.ROLL_MAX_TOTAL_MS),
        l = Date.now(),
        s = this._displayScore;
      this._rollTimer = setInterval(function () {
        if (cc.isValid(t.node)) {
          var n = Date.now() - l;
          if (n >= a) {
            t._displayScore = e;
            t._lblScore && (t._lblScore.string = t._displayScore.toString());
            t.stopRolling();
          } else {
            var i = n / a;
            t._displayScore = Math.round(s + o * i);
            t._lblScore && (t._lblScore.string = t._displayScore.toString());
          }
        } else t.stopRolling();
      }, i);
      this.playScaleAnimation(a);
    }
  }
  stopRolling() {
    if (null !== this._rollTimer) {
      clearInterval(this._rollTimer);
      this._rollTimer = null;
    }
  }
  playScaleAnimation(e) {
    var t = this;
    if (this._lblScore) {
      var o = this._lblScore.node,
        n = this.getBaseScale(),
        i = Math.max(e / 1000, 0.1);
      if (this._scaleTween) {
        this._scaleTween.stop();
        this._scaleTween = null;
      }
      o.scale = n;
      this._scaleTween = cc.tween(o).to(0.15, {
        scale: 1.3 * n
      }, {
        easing: "sineOut"
      }).to(i, {
        scale: n
      }, {
        easing: "sineIn"
      }).call(function () {
        t._scaleTween = null;
      }).start();
    }
  }
  getBaseScale() {
    return 1;
  }
  resetForRestart() {
    this.stopRolling();
    if (this._scaleTween) {
      this._scaleTween.stop();
      this._scaleTween = null;
    }
    this._displayScore = 0;
    this._targetScore = 0;
    if (this._lblScore) {
      this._lblScore.node.scale = 1;
      this._lblScore.string = "0";
    }
    this._spinCombo && (this._spinCombo.node.active = false);
  }
  onDestroy() {
    this.stopRolling();
    super.onDestroy.call(this);
  }
}