import Trait from '../../../Scripts/framework/trait/Trait';
import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
@mj.trait
@mj.class("HintAnimTrait")
export default class HintAnimTrait extends Trait {
  static traitKey = "HintAnim";
  onLoad() {
    super.onLoad.call(this);
    this._config = {
      enableShake: false !== this._traitData.enableShake,
      enableScale: false !== this._traitData.enableScale,
      scaleValue: this._traitData.scaleValue || 1.1,
      scaleDuration: this._traitData.scaleDuration || 0.2
    };
  }
  getMessageListeners() {
    var _t = {};
    _t[EGameEvent.TileNode_BeginSelected] = this.onTileNodeBeginSelected.bind(this);
    _t[EGameEvent.TileNode_UnSelectedFinish] = this.onTileNodeUnSelectedFinish.bind(this);
    _t[EGameEvent.TileNode_HidePropHint] = this.onTileNodeHidePropHint.bind(this);
    return _t;
  }
  onHitTipsBhv_trgHint(t, e) {
    var i = t.beforReturnVal || {},
      n = i.tileNode1,
      r = i.tileNode2,
      o = i.direction1,
      a = i.direction2;
    if (n && r) {
      this.playHintAnimation(n, o);
      this.playHintAnimation(r, a);
      e();
    } else e();
  }
  playHintAnimation(t, e) {
    var i = this;
    if (t) {
      var n = Object.assign(Object.assign({}, this._config), {
        direction: e
      });
      t.playHintAnimation(n, function () {
        mj.triggerInternalEvent("HintAnim_onEnd", i, [t]);
      });
    }
  }
  onTileNodeBeginSelected(t) {
    t && t.pauseHintShake();
  }
  onTileNodeUnSelectedFinish(t) {
    t && t.resumeHintShake();
  }
  onTileNodeHidePropHint(t) {
    t && t.exitHintAnimation();
  }
}