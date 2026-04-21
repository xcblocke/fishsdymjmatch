import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("FrameRateTrait")
export default class FrameRateTrait extends Trait {
  _targetFrameRate = 60;
  static traitKey = "FrameRate";
  onLoad() {
    var e, r;
    super.onLoad.call(this);
    this._targetFrameRate = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.frameRate) && void 0 !== r ? r : 60;
    cc.game.setFrameRate(this._targetFrameRate);
  }
  getMessageListeners() {
    var _t = {};
    _t[EGameEvent.Behavior_ShuffleBehaviorFinish] = this.onShuffleFinish.bind(this);
    return _t;
  }
  boostFrameRate() {
    this._targetFrameRate < 60 && cc.game.setFrameRate(60);
  }
  restoreFrameRate() {
    this._targetFrameRate < 60 && cc.game.setFrameRate(this._targetFrameRate);
  }
  onEnterAniBhv_startPlay(t, e) {
    this.boostFrameRate("入场动画开始");
    e();
  }
  onEntAniFiBhv_start(t, e) {
    this.restoreFrameRate("入场动画结束");
    e();
  }
  onIptShuffle_exec(t, e) {
    this.boostFrameRate("洗牌动画开始");
    e();
  }
  onShuffleFinish() {
    this.restoreFrameRate("洗牌动画结束");
  }
}