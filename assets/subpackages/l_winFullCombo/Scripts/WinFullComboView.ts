import NormalGameData from '../../../Scripts/core/simulator/data/NormalGameData';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
@mj.class
export default class WinFullComboView extends BaseUI {
  lbScore = null;
  @mj.component("lb_title", cc.Label)
  lbTitleFullCombo: "lb_title" = null;
  @mj.component("spine_score", sp.Skeleton)
  spineScore: "spine_score" = null;
  nodeTitleNormal = null;
  isShown = false;
  _score = 0;
  _settlementScore = 0;
  static prefabUrl = "prefabs/ui/WinFullComboView";
  static SCORE_SCROLL_DURATION = 0.5;
  showFullComboUI(t, e) {
    var o;
    if (!this.isShown) {
      var i = t.data;
      this._score = i.score;
      this._settlementScore = i.settlementScore;
      this.nodeTitleNormal = e.getChildByName("lbl_scoreDec");
      this.lbScore = null === (o = e.getChildByName("lbl_score")) || void 0 === o ? void 0 : o.getComponent(cc.Label);
      this.lbTitleFullCombo && (NormalGameData.getInstance().getHasTriggeredFullCombo() ? I18NStrings.setText(this.lbTitleFullCombo.node, "", "TILE_FullCombo") : I18NStrings.setText(this.lbTitleFullCombo.node, "", "MahjongTiles_EpicPlay"));
      this.isShown = true;
      this.playEnterAnimation();
    }
  }
  onLoad() {
    super.onLoad.call(this);
    this.initComponents();
    this.initNodeStates();
  }
  initComponents() {
    this.spineScore && this.initSpineScore();
  }
  initSpineScore() {
    var t = this;
    this.animProxy = BaseSpine.refreshWithNode(this.spineScore.node);
    this.animProxy.reset("");
    this.animProxy.markReady("");
    this.animProxy.attachNode("hook_txt", function () {
      return t.lbTitleFullCombo.node;
    });
  }
  initNodeStates() {
    this.lbTitleFullCombo && (this.lbTitleFullCombo.node.opacity = 0);
    this.lbScore && (this.lbScore.node.opacity = 255);
  }
  playEnterAnimation() {
    this.playSpine();
    this.playTitleAnimation();
    this.playTitleNormalAnimation();
    this.playScoreAnimation();
  }
  playSpine() {
    var t = this;
    this.animProxy && this.animProxy.setAnimation("in", 1, function () {
      t.animProxy && t.animProxy.setAnimation("init", -1);
    });
  }
  playTitleAnimation() {
    this.lbTitleFullCombo && cc.tween(this.lbTitleFullCombo.node).delay(1.73).to(0.2, {
      opacity: 255
    }, {
      easing: cc.easing.sineInOut
    }).start();
  }
  playTitleNormalAnimation() {
    this.nodeTitleNormal && cc.tween(this.nodeTitleNormal).delay(1.73).to(0.2, {
      opacity: 0
    }, {
      easing: cc.easing.sineInOut
    }).start();
  }
  playScoreAnimation() {
    var t = this;
    if (this.lbScore && this._settlementScore > this._score) {
      this.lbScore.string = this._score.toString();
      this.scheduleOnce(function () {
        var e = t._score,
          i = t._settlementScore,
          r = WinFullComboView.SCORE_SCROLL_DURATION,
          n = 0,
          l = function l(o) {
            n += o;
            var a = Math.min(n / r, 1),
              s = cc.easing.sineOut(a),
              c = Math.floor(e + (i - e) * s);
            t.lbScore.string = c.toString();
            if (a >= 1) {
              t.unschedule(l);
              t.lbScore.string = i.toString();
            }
          };
        t.schedule(l, 0);
      }, 2.67);
    }
  }
  onDestroy() {
    this.unscheduleAllCallbacks();
    cc.Tween.stopAllByTarget(this.node);
    this.lbTitleFullCombo && cc.Tween.stopAllByTarget(this.lbTitleFullCombo);
    this.lbScore && cc.Tween.stopAllByTarget(this.lbScore);
    super.onDestroy && super.onDestroy.call(this);
  }
}