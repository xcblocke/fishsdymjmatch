import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { SpiralShuffleEffect } from '../../../Scripts/SpiralShuffleEffect';
@mj.trait
@mj.class("ChangeRollShuffleEffectTrait")
export default class ChangeRollShuffleEffectTrait extends Trait {
  _effectLevel = 3;
  _efxDelay = 0.5;
  static traitKey = "ChangeRollShuffleEffect";
  static BUNDLE_NAME = "r_rollShuffleEffect";
  static SPINE_MAIN = "spine/gameplay_autoShuffle";
  static SPINE_EFX = "spine/gameplay_autoShuffle_efx";
  onLoad() {
    var e, r, a, i;
    super.onLoad.call(this);
    this._effectLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.effectLevel) && void 0 !== r ? r : 3;
    this._efxDelay = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.efxDelay) && void 0 !== i ? i : 0.5;
  }
  playMainAnimation(t) {
    var e = BaseSpine.create(ChangeRollShuffleEffectTrait.SPINE_MAIN, "in", 1, null, true, ChangeRollShuffleEffectTrait.BUNDLE_NAME);
    e.node.parent = t;
    e.node.position = cc.v3(0, 0, 0);
  }
  playEfxAnimation(t) {
    var e = BaseSpine.create(ChangeRollShuffleEffectTrait.SPINE_EFX, "in", 1, null, true, ChangeRollShuffleEffectTrait.BUNDLE_NAME);
    e.node.parent = t;
    e.node.position = cc.v3(0, 0, 0);
  }
  onSpiralShfStgy_gaDur(t, e) {
    var r;
    e({
      returnType: TraitCallbackReturnType.jump,
      returnVal: null !== (r = this._traitData.gatherDuration) && void 0 !== r ? r : 0.9
    });
  }
  onSpiralShfStgy_stayDur(t, e) {
    var r;
    e({
      returnType: TraitCallbackReturnType.jump,
      returnVal: null !== (r = this._traitData.stayDuration) && void 0 !== r ? r : 0.43
    });
  }
  onSpiralShfStgy_expDur(t, e) {
    var r;
    e({
      returnType: TraitCallbackReturnType.jump,
      returnVal: null !== (r = this._traitData.expandDuration) && void 0 !== r ? r : 0.96
    });
  }
  onIptShuffle_getEffect(t, e) {
    var r = new SpiralShuffleEffect({});
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: r
    });
  }
  onShuffUts_getPreTime(t, e) {
    var r,
      a,
      i = this,
      n = null === (r = t.args) || void 0 === r ? void 0 : r[0],
      o = null === (a = null == n ? void 0 : n.gameView) || void 0 === a ? void 0 : a.nodeTopEffectRoot;
    if (cc.isValid(o)) {
      var f = 0;
      switch (this._effectLevel) {
        case 1:
          f = 0;
          break;
        case 2:
          this.playEfxAnimation(o);
          f = 0;
          break;
        case 3:
        default:
          f = this._traitData.efxDelay;
          this.playMainAnimation(o);
          cc.tween({}).delay(this._efxDelay).call(function () {
            cc.isValid(o) && i.playEfxAnimation(o);
          }).start();
      }
      e({
        returnVal: f,
        returnType: TraitCallbackReturnType.jump
      });
    } else e();
  }
  onShuffUts_playRAnim(t, e) {
    if (1 != this._effectLevel) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else {
      e();
    }
  }
}