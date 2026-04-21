import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("WinAnimSpeedTrait")
export default class WinAnimSpeedTrait extends Trait {
  static traitKey = "WinAnimSpeed";
  onLoad() {
    super.onLoad.call(this);
  }
  onWinVw_onLoad(t, e) {
    this.setViewAnimSpeed(t, "WinView");
    e();
  }
  onDCWinVw_onLoad(t, e) {
    this.setViewAnimSpeed(t, "DailyChallengeWinView");
    e();
  }
  onTLWinVw_onLoad(t, e) {
    this.setViewAnimSpeed(t, "TravelWinView");
    e();
  }
  setViewAnimSpeed(t) {
    var e,
      n = t.ins;
    if (n && cc.isValid(n.node)) {
      var i = 1 / ((null === (e = this._traitData) || void 0 === e ? void 0 : e.speedRate) || 1.5);
      "function" == typeof n.setAnimSpeedRate && n.setAnimSpeedRate(i);
    }
  }
}