import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import { BehaviorFactory } from '../../../Scripts/BehaviorFactory';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import ClearLayerBehavior from './ClearLayerBehavior';
import { ClearLayerEffect } from './ClearLayerEffect';
import NormalGameData from '../../../Scripts/core/simulator/data/NormalGameData';
@mj.trait
@mj.class("ClearLayerWordsTrait")
export default class ClearLayerWordsTrait extends Trait {
  static traitKey = "ClearLayerWords";
  get limitTop() {
    var e, r;
    return null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.limitTop) && void 0 !== r ? r : 10;
  }
  get limitBottom() {
    var e, r;
    return null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.limitBottom) && void 0 !== r ? r : 16;
  }
  get isBottomOrigin() {
    var e, r;
    return null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.bottomOrigin) && void 0 !== r && r;
  }
  get limitLevel() {
    var e, r;
    return null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.limitLevel) && void 0 !== r ? r : 1;
  }
  onLoad() {
    super.onLoad.call(this);
    BehaviorFactory.registerBehavior(BehaviorsMapping.ClearLayer, ClearLayerBehavior);
  }
  onClrNormHlp_tryShwMotWrd(e, r) {
    if (this.canShowClearLayerWords(e.ins)) {
      r({
        returnType: TraitCallbackReturnType.jump
      });
    } else {
      r();
    }
  }
  canShowClearLayerWords(e) {
    var r, t;
    if (!e || !e._baseInput || !e._baseInput._behaviorBuilder) return false;
    if (NormalGameData.getInstance().getLevelId() <= this.limitLevel) return false;
    var o = [BehaviorsMapping.ClearLayer, BehaviorsMapping.Fail, BehaviorsMapping.End];
    try {
      for (var i = __values(o), a = i.next(); !a.done; a = i.next()) {
        var s = a.value;
        if (e._baseInput._behaviorBuilder.findNodeByName(s)) return false;
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        a && !a.done && (t = i.return) && t.call(i);
      } finally {
        if (r) throw r.error;
      }
    }
    var l = e._options;
    if (l.isShowFullCombo || l.isShowRewardCombo) return false;
    var u = l.tileIds[0],
      p = l.tileIds[1],
      f = e._gameContext.getTileMapObject(),
      y = f.getTileObject(u),
      h = f.getTileObject(p);
    if (!y || !h) return false;
    var d = f.aliveTiles().reduce(function (e, r) {
        return Math.max(e, r.layer);
      }, 0),
      m = y.layer,
      _ = h.layer,
      b = Math.max(m, _);
    if (d >= b) return false;
    var g = b - 1;
    if (g < 0) return false;
    var C = e._gameContext.getGameData().getLayerTileCount();
    if (b >= C.length) return false;
    if (C[b] <= this.limitTop) return false;
    var B = f.mapLayers()[g];
    if (!B) return false;
    if (this.isBottomOrigin) {
      if (C[g] <= this.limitBottom) return false;
    } else {
      if (B.allCards.filter(function (e) {
        return e.isValid;
      }).length <= this.limitBottom) return false;
    }
    return true;
  }
  onClrNormHlp_pushClrFinish(e, r) {
    var t = e.ins;
    this.tryExecuteClearLayerWords(t);
    r();
  }
  tryExecuteClearLayerWords(e) {
    if (this.canShowClearLayerWords(e)) {
      var r = new ClearLayerEffect({});
      e._baseInput.pushEffect(r, EInsertType.Root);
    }
  }
  onClrDailyHlp_pushClrFinish(e, r) {
    var t = e.ins;
    this.tryExecuteClearLayerWords(t);
    r();
  }
}