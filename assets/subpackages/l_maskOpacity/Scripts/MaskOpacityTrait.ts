import Trait from '../../../Scripts/framework/trait/Trait';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
@mj.trait
@mj.class("MaskOpacityTrait")
export default class MaskOpacityTrait extends Trait {
  _defaultOpacity = 200;
  _excludeControllers = new Set(["WinController", "TravelWinController", "DailyChallengeWinController", "NormalBoxController", "TravelBoxController", "RankBoxController", "LevelBoxController", "DailyRewardController", "AgeSurveyRewardController", "TravelRewardController"]);
  _originalShowBlackLayer = null;
  static traitKey = "MaskOpacity";
  onLoad() {
    var r, e;
    super.onLoad.call(this);
    this._defaultOpacity = null !== (e = null === (r = this.traitData.config) || void 0 === r ? void 0 : r.defaultOpacity) && void 0 !== e ? e : 200;
    var o = ControllerManager.getInstance();
    this._originalShowBlackLayer = o.showBlackLayer.bind(o);
    o.showBlackLayer = this._showBlackLayerOverride.bind(this);
  }
  _showBlackLayerOverride(t, r, e, o) {
    var a, n, l;
    if (null !== e) {
      var c = mj.getClassName(null == r ? void 0 : r.constructor) || "";
      if (this._excludeControllers.has(c)) null === (n = this._originalShowBlackLayer) || void 0 === n || n.call(this, t, r, e, o);else {
        var s = e ? Object.assign({}, e) : {};
        "number" != typeof s.blackOpacity && (s.blackOpacity = this._defaultOpacity);
        null === (l = this._originalShowBlackLayer) || void 0 === l || l.call(this, t, r, s, o);
      }
    } else null === (a = this._originalShowBlackLayer) || void 0 === a || a.call(this, t, r, e, o);
  }
}