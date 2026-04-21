import NormalGameData from '../../../Scripts/core/simulator/data/NormalGameData';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
@mj.class
export default class NormalNewRecordUI extends BaseUI {
  lbTitleNode = null;
  spineNode = null;
  lbScoreOriginal = null;
  lbTitleOriginal = null;
  static prefabUrl = "prefabs/ui/WinFullComboView";
  static SCORE_SCROLL_DURATION = 0.5;
  onLoad() {
    super.onLoad.call(this);
    this.initComponents();
    this.tryPlayAction();
  }
  tryPlayAction() {
    this.node.opacity = 255;
    this.playEnterAnimation();
  }
  initComponents() {
    var e,
      t = this;
    this.lbTitleNode = this.node.getChildByName("lb_title");
    this.spineNode = this.node.getChildByName("spine_score");
    this.animProxy = BaseSpine.refreshWithNode(this.spineNode);
    this.animProxy.markReady("");
    this.animProxy.attachNode("hook_txt", function () {
      return t.lbTitleNode;
    });
    this.node.opacity = 0;
    this.lbTitleNode.opacity = 0;
    var r = this.node.parent;
    this.lbTitleOriginal = r.getChildByName("lbl_scoreDec");
    this.lbScoreOriginal = null === (e = r.getChildByName("lbl_score")) || void 0 === e ? void 0 : e.getComponent(cc.Label);
    I18NStrings.setText(this.lbTitleNode, "New Record!", "Mahjong_NewRecord");
  }
  @mj.traitEvent("NorNewRrdUI_canRoll")
  canScoreRoll() {
    return true;
  }
  playEnterAnimation() {
    this.playSpine();
    this.playTitleAnimation();
    this.playTitleNormalAnimation();
    this.playScoreAnimation();
  }
  playSpine() {
    var e = this;
    this.animProxy && this.animProxy.setAnimation("in", 1, function () {
      e.animProxy && e.animProxy.setAnimation("init", -1);
    });
  }
  playTitleAnimation() {
    cc.isValid(this.lbTitleNode) && cc.tween(this.lbTitleNode).delay(1.73).to(0.2, {
      opacity: 255
    }, {
      easing: cc.easing.sineInOut
    }).start();
  }
  playTitleNormalAnimation() {
    this.lbTitleOriginal && cc.tween(this.lbTitleOriginal).delay(1.73).to(0.2, {
      opacity: 0
    }, {
      easing: cc.easing.sineInOut
    }).start();
  }
  playScoreAnimation() {
    var e = this;
    if (this.lbScoreOriginal) {
      var t = NormalGameData.getInstance().getPreBestScore(),
        o = NormalGameData.getInstance().getMaxScore();
      if (this.canScoreRoll()) {
        this.lbScoreOriginal.string = t.toString();
        this.scheduleOnce(function () {
          var i = t,
            n = o,
            a = NormalNewRecordUI.SCORE_SCROLL_DURATION,
            s = 0,
            c = function c(t) {
              s += t;
              var r = Math.min(s / a, 1),
                o = cc.easing.sineOut(r),
                l = Math.floor(i + (n - i) * o);
              e.lbScoreOriginal.string = l.toString();
              if (r >= 1) {
                e.unschedule(c);
                e.lbScoreOriginal.string = n.toString();
              }
            };
          e.schedule(c, 0);
        }, 2.67);
      }
    }
  }
  onDestroy() {
    this.unscheduleAllCallbacks();
    cc.Tween.stopAllByTarget(this.node);
    cc.isValid(this.lbTitleNode) && cc.Tween.stopAllByTarget(this.lbTitleNode);
    cc.isValid(this.lbScoreOriginal) && cc.Tween.stopAllByTarget(this.lbScoreOriginal);
    super.onDestroy && super.onDestroy.call(this);
  }
}