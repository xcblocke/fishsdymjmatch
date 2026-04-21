import { EnterAnimationManager } from '../../../Scripts/animation/manager/EnterAnimationManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("RandomEnterAnimTrait")
export default class RandomEnterAnimTrait extends Trait {
  static traitKey = "RandomEnterAnim";
  onLoad() {
    super.onLoad.call(this);
    this.localData.strategies = this.localData.strategies || {};
    this.registerEvent([{
      event: "IptT2SetLv_selEnterAnim"
    }]);
  }
  getCurrentGameType() {
    return UserModel.getInstance().getCurrentGameType();
  }
  getStrategy() {
    var t = this.getCurrentGameType();
    return this.localData.strategies[t] || "";
  }
  saveStrategy(t) {
    var e = this.getCurrentGameType();
    this.localData.strategies[e] = t;
    this.localData.strategies = this.localData.strategies;
  }
  selectRandomStrategy(t) {
    return t[Math.floor(Math.random() * t.length)];
  }
  onIptSetLv_selEnterAnim(t, e) {
    this.handleSelectEnterAnim(t, e);
  }
  onIptT2SetLv_selEnterAnim(t, e) {
    this.handleSelectEnterAnim(t, e);
  }
  handleSelectEnterAnim(t, e) {
    var r, n;
    try {
      var a = EnterAnimationManager.getInstance(),
        i = a.getAvailableStrategies();
      if (0 === i.length) return;
      var s = null !== (r = this._traitData.randomOnReplay) && void 0 !== r && r;
      null !== (n = this._traitData.enableTopMaskEnter) && void 0 !== n && n || (i = i.filter(function (t) {
        return "TopMaskEnter" !== t;
      }));
      if (0 === i.length) return;
      var c = t.args[0],
        l = t.args[1],
        p = void 0;
      if (c && !l || l && s) {
        p = this.selectRandomStrategy(i);
        this.saveStrategy(p);
      } else p = this.getStrategy();
      p && a.setStrategy(p);
    } catch (t) {} finally {
      e();
    }
  }
  onEnterAniBhv_startPlay(t, e) {
    try {
      t.ins.playEnterAnimation();
      e({
        returnType: TraitCallbackReturnType.jump
      });
    } catch (t) {
      e();
    }
  }
}