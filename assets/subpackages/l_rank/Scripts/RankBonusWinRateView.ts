import { playSpineAnim } from '../../../Scripts/framework/utils/CommonUtils';
import { ERankAudioID } from './util/RankEnums';
import RankModel from './RankModel';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
@mj.class
export default class RankBonusWinRateView extends BaseUI {
  _barLabelNodes = [];
  _spRateBar = null;
  _addScoreLabel = null;
  _addScoreLabelNode = null;
  _addScoreOffsetPosition = cc.v3(0, 0, 0);
  onLoad() {
    super.onLoad.call(this);
    this._barLabelNodes = [[cc.find("lab_rate_1/select_rate", this.node), cc.find("lab_rate_1/normal_rate", this.node)], [cc.find("lab_rate_2/select_rate", this.node), cc.find("lab_rate_2/normal_rate", this.node)], [cc.find("lab_rate_3/select_rate", this.node), cc.find("lab_rate_3/normal_rate", this.node)]];
    this._spRateBar = cc.find("sp_rate_bar", this.node).getComponent(sp.Skeleton);
    this._addScoreLabelNode = cc.find("rate_add_node", this.node);
    if (this._addScoreLabelNode) {
      this._addScoreLabel = this._addScoreLabelNode.getChildByName("lab_add").getComponent(cc.Label);
      this._addScoreOffsetPosition = this._addScoreLabelNode.position.clone().subtract(this._barLabelNodes[0][0].parent.position);
      this._addScoreLabelNode.active = false;
    }
  }
  onDestroy() {
    super.onDestroy.call(this);
    this._barLabelNodes = null;
    this._spRateBar = null;
    this._addScoreLabel = null;
    this._addScoreLabelNode = null;
    this._addScoreOffsetPosition = null;
  }
  @mj.traitEvent("RkBnsWinRate_show")
  show() {
    this.node.opacity = 0;
    this._addScoreLabel && (this._addScoreLabel.string = "");
    this._addScoreLabelNode && (this._addScoreLabelNode.active = false);
  }
  updateWinStreakDisplay() {
    var t, e, o;
    if (this._barLabelNodes && this._spRateBar) {
      var n = RankModel.getInstance(),
        a = null === (e = null === (t = n.localData.rankGameData) || void 0 === t ? void 0 : t.joinActInfo) || void 0 === e ? void 0 : e.winStreakCount,
        i = n.localData.myWinStreakCount;
      i > a && (i = 0);
      var r = -1;
      i > 0 && (r = null === (o = RankModel.getInstance().getRobotLogic()) || void 0 === o ? void 0 : o.getWinStreakRateLevel(i));
      this._barLabelNodes.forEach(function (t, e) {
        t[0].active = e === r;
        t[1].active = e !== r;
      });
      this._spRateBar.setAnimation(0, "idle_" + (r + 1), false);
    }
  }
  getActiveBarPos() {
    if (!this._barLabelNodes || !this._spRateBar || !this._addScoreLabelNode) return null;
    for (var t = null, e = 0; e < this._barLabelNodes.length; e++) {
      var o = __read(this._barLabelNodes[e], 2),
        n = o[0];
      o[1];
      if (n && n.active) {
        t = n;
        break;
      }
    }
    t || (t = this._barLabelNodes[0][1]);
    if (!t) return null;
    var a = this.node.position,
      i = t.parent.position,
      s = t.position;
    this._addScoreLabelNode.position = this._addScoreOffsetPosition.clone().add(i);
    return cc.v2(a.x + i.x + s.x, a.y + i.y + s.y);
  }
  isRateLevelActive(t) {
    return !this._barLabelNodes || t < 0 || t >= this._barLabelNodes.length || this._barLabelNodes[t][0].active;
  }
  playEnterAnimation() {
    if (this.node && this.node.activeInHierarchy) {
      this.node.opacity = 255;
      this.node.scale = 0;
      cc.tween(this.node).delay(0.2).to(0.26, {
        scale: 1
      }, {
        easing: "backOut"
      }).start();
    }
  }
  @mj.traitEvent("RkBnsWinRate_playRtLvAni")
  playRateLevelAnimation(t, e) {
    var o = this;
    if (this._spRateBar && this._addScoreLabelNode && this._barLabelNodes) {
      this._addScoreLabelNode.position = this._barLabelNodes[t][0].parent.position.clone().add(this._addScoreOffsetPosition);
      this._barLabelNodes.forEach(function (e, o) {
        e[0].active = o === t;
        e[1].active = o !== t;
      });
      mj.audioManager.playEffect(ERankAudioID.Charge);
      playSpineAnim(this._spRateBar, 1, "in_" + (t + 1), function () {
        playSpineAnim(o._spRateBar, 1, "idle_" + (t + 1));
        e && e();
      });
    } else e && e();
  }
  playAddScoreAnimation(t) {
    if (this._addScoreLabel && this._addScoreLabelNode) {
      this._addScoreLabel.string = "+" + t;
      var e = this._addScoreLabelNode;
      e.active = true;
      e.scale = 0;
      e.opacity = 255;
      e.y = 0;
      cc.tween(e).to(0.16, {
        scale: 1
      }, {
        easing: "circOut"
      }).to(0.5, {
        y: 17
      }, {
        easing: "sineInOut"
      }).start();
      cc.tween(e).delay(0.5).to(0.16, {
        opacity: 0
      }, {
        easing: "sineInOut"
      }).start();
    }
  }
  cancelActions() {
    var t, e;
    null === (t = this._addScoreLabelNode) || void 0 === t || t.stopAllActions();
    null === (e = this.node) || void 0 === e || e.stopAllActions();
  }
}