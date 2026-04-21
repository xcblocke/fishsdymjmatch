import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import NormalGameData from '../../../Scripts/core/simulator/data/NormalGameData';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import VibrateManager, { EVibrateStrength, EVibratePoint } from '../../../Scripts/gamePlay/base/vibrate/VibrateManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.class
export default class WinFullComboOptView extends BaseUI {
  lbScore = null;
  @mj.component("lb_title", cc.Label)
  lbTitleFullCombo: "lb_title" = null;
  @mj.component("spine_score", sp.Skeleton)
  spineScore: "spine_score" = null;
  nodeTitleNormal = null;
  isShown = false;
  _score = 0;
  _settlementScore = 0;
  static prefabUrl = "prefabs/WinFullComboOptView";
  static bundleName = "r_winFullComboOpt";
  static SCORE_SCROLL_DURATION = 0.5;
  onLoad() {
    super.onLoad.call(this);
    this.initComponents();
    this.initNodeStates();
  }
  showFullComboUI(e, t) {
    var i;
    if (!this.isShown) {
      var o = e.data;
      this._score = o.score;
      this._settlementScore = o.settlementScore;
      this.nodeTitleNormal = t.getChildByName("lbl_scoreDec");
      this.lbScore = null === (i = t.getChildByName("lbl_score")) || void 0 === i ? void 0 : i.getComponent(cc.Label);
      this.spineScore && this.lbScore && (this.spineScore.node.y = this.lbScore.node.y);
      this.lbTitleFullCombo && I18NStrings.setText(this.lbTitleFullCombo.node, "", this.getTitleKey());
      this.isShown = true;
      this.playEnterAnimation();
    }
  }
  @mj.traitEvent("WinFullComboOpt_getKey")
  getTitleKey() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal ? "TILE_FullCombo" : NormalGameData.getInstance().getHasTriggeredFullCombo() ? "TILE_FullCombo" : "MahjongTiles_EpicPlay";
  }
  initComponents() {
    this.spineScore && this.initSpineScore();
  }
  initSpineScore() {
    var e = this;
    this.animProxy = BaseSpine.refreshWithNode(this.spineScore.node);
    this.animProxy.reset("");
    this.animProxy.markReady("");
    this.animProxy.attachNode("hook_txt", function () {
      return e.lbTitleFullCombo.node;
    });
  }
  initNodeStates() {
    this.lbTitleFullCombo && (this.lbTitleFullCombo.node.opacity = 0);
    this.lbScore && (this.lbScore.node.opacity = 255);
  }
  playEnterAnimation() {
    this.playSpine();
    this.playVibrateBombo();
    this.playTitleAnimation();
    this.playTitleNormalAnimation();
    this.playScoreAnimation();
  }
  playVibrateBombo() {
    var e = this;
    this.scheduleOnce(function () {
      cc.isValid(e.animProxy) && VibrateManager.executeVibrate(EVibrateStrength.Strong, EVibratePoint.Tile2WinViewBomb);
    }, 1.93);
  }
  playSpine() {
    var e = this;
    this.animProxy && this.animProxy.setAnimation("in", 1, function () {
      e.animProxy && e.animProxy.setAnimation("init", -1);
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
    var e = this;
    if (this.lbScore && this._settlementScore > this._score) {
      this.lbScore.string = this._score.toString();
      this.scheduleOnce(function () {
        var t = e._score,
          o = e._settlementScore,
          r = WinFullComboOptView.SCORE_SCROLL_DURATION,
          n = 0,
          s = function s(i) {
            n += i;
            var l = Math.min(n / r, 1),
              a = cc.easing.sineOut(l),
              _ = Math.floor(t + (o - t) * a);
            e.lbScore.string = _.toString();
            if (l >= 1) {
              e.unschedule(s);
              e.lbScore.string = o.toString();
            }
          };
        e.schedule(s, 0);
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