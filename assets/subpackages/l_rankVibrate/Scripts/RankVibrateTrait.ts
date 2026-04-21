import Trait from '../../../Scripts/framework/trait/Trait';
import VibrateManager, { EVibrateStrength } from '../../../Scripts/gamePlay/base/vibrate/VibrateManager';
@mj.trait
@mj.class("RankVibrateTrait")
export default class RankVibrateTrait extends Trait {
  _rantUpVibrateTween = null;
  static traitKey = "RankVibrate";
  onLoad() {
    var r, e, n, i, a;
    super.onLoad.call(this);
    this._config = {
      rateUp: (null === (r = this._traitData) || void 0 === r ? void 0 : r.rateUp) || EVibrateStrength.Medium,
      cardCollect: (null === (e = this._traitData) || void 0 === e ? void 0 : e.cardCollect) || EVibrateStrength.Light,
      rankUp: (null === (n = this._traitData) || void 0 === n ? void 0 : n.rankUp) || EVibrateStrength.Light,
      rankSettle: (null === (i = this._traitData) || void 0 === i ? void 0 : i.rankSettle) || EVibrateStrength.Medium,
      rankUpInterval: (null === (a = this._traitData) || void 0 === a ? void 0 : a.rankUpInterval) || 0.1
    };
  }
  triggerVibrate(t) {
    VibrateManager.executeVibrate(t);
  }
  onRkBnsWinRate_playRtLvAni(t, r) {
    this._config.rateUp >= 0 && this.triggerVibrate(this._config.rateUp, 15);
    r();
  }
  onRankColEff_playLightEff(t, r) {
    this._config.cardCollect >= 0 && this.triggerVibrate(this._config.cardCollect, 16);
    r();
  }
  onRankColCard_onCardArrived(t, r) {
    r();
  }
  onRankBonusVw_rankUpStart(t, r) {
    var e = this,
      n = t.ins;
    if (this._config.rankUp >= 0) {
      this.triggerVibrate(this._config.rankUp, 17);
      var i = this._config.rankUpInterval;
      if (this._rantUpVibrateTween) {
        this._rantUpVibrateTween.stop();
        this._rantUpVibrateTween = null;
      }
      this._rantUpVibrateTween = cc.tween(n.node).delay(i).call(function () {
        var t;
        if (n && cc.isValid(n.node) && n.isUpRankPlaying && e._rantUpVibrateTween) e.triggerVibrate(e._config.rankUp, 17);else {
          null === (t = e._rantUpVibrateTween) || void 0 === t || t.stop();
          e._rantUpVibrateTween = null;
        }
      }).union().repeatForever().start();
    }
    r();
  }
  onRankBonusVw_rankUpEnd(t, r) {
    if (this._rantUpVibrateTween) {
      this._rantUpVibrateTween.stop();
      this._rantUpVibrateTween = null;
    }
    r();
  }
  onRkBnsListVw_rankUpStart(t, r) {
    var e = this,
      n = t.ins,
      i = this._config.rankUpInterval,
      a = Math.floor((t.args[1] || 0) / i) - 1;
    if (this._config.rankUp >= 0 && a > 0) {
      this.triggerVibrate(this._config.rankUp, 17);
      a > 1 && cc.tween(n.node).delay(i).call(function () {
        n && cc.isValid(n.node) && e.triggerVibrate(e._config.rankUp, 17);
      }).union().repeat(a - 1).start();
    }
    r();
  }
  onRankBonusItem_rankOutEff(t, r) {
    this._config.rankSettle >= 0 && this.triggerVibrate(this._config.rankSettle, 18);
    r();
  }
}