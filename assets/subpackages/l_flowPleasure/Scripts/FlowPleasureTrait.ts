import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("FlowPleasureTrait")
export default class FlowPleasureTrait extends Trait {
  _pleasure = 0;
  static traitKey = "FlowPleasure";
  onLoad() {
    var e, r, a, i, o, l, n, s;
    super.onLoad.call(this);
    this._pleasurePerHit = null !== (e = this._traitData.pleasurePerHit) && void 0 !== e ? e : 2;
    this._pleasureThreshold = null !== (r = this._traitData.pleasureThreshold) && void 0 !== r ? r : 6;
    this._minHolderRemain = null !== (a = this._traitData.minHolderRemain) && void 0 !== a ? a : 2;
    this._minRounds = null !== (i = this._traitData.minRounds) && void 0 !== i ? i : 2;
    this._minStepRatio = null !== (o = this._traitData.minStepRatio) && void 0 !== o ? o : 0.5;
    this._introLevels = null !== (l = this._traitData.introLevels) && void 0 !== l ? l : 10;
    this._defaultStage = null !== (n = this._traitData.defaultStage) && void 0 !== n ? n : 2;
    this._upgradeStage = null !== (s = this._traitData.upgradeStage) && void 0 !== s ? s : 3;
    this.localData.fpStage || (this.localData.fpStage = this._defaultStage);
  }
  onDotGmClk_dot(t, e) {
    var r, a, i, o, n, s, f;
    try {
      if (!UserModel.getInstance().isGuideFinished()) {
        e();
        return;
      }
      var c = t.args[0],
        p = t.args[1],
        h = t.args[2];
      if (!c || !h) {
        e();
        return;
      }
      var d = c.getGameData(),
        _ = d.getTotalTileCount(),
        v = d.getClearTileCount();
      if ((_ > 0 ? v / _ : 0) < this._minStepRatio) {
        e();
        return;
      }
      var g = d.slotBarIds || [],
        y = h.cardId,
        m = [];
      try {
        for (var S = __values(g), T = S.next(); !T.done; T = S.next()) {
          var w = T.value,
            P = (null === (n = p.getTileObjectByPosId) || void 0 === n ? void 0 : n.call(p, w)) || (null === (f = null === (s = c.getTileMapObject()) || void 0 === s ? void 0 : s.getTileObjectByPosId) || void 0 === f ? void 0 : f.call(s, w));
          P && P.cardId === y && m.push(w);
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          T && !T.done && (a = S.return) && a.call(S);
        } finally {
          if (r) throw r.error;
        }
      }
      if (m.length < 1) {
        e();
        return;
      }
      if (g.length + 1 - 2 !== this._minHolderRemain) {
        e();
        return;
      }
      var b = c.tile2SlotBarData;
      if (!b) {
        e();
        return;
      }
      var D = 0;
      try {
        for (var R = __values(m), O = R.next(); !O.done; O = R.next()) {
          w = O.value;
          var j = b.getTileStep(w),
            x = j > 0 ? j - 1 : 0;
          x > D && (D = x);
        }
      } catch (t) {
        i = {
          error: t
        };
      } finally {
        try {
          O && !O.done && (o = R.return) && o.call(R);
        } finally {
          if (i) throw i.error;
        }
      }
      D >= this._minRounds && (this._pleasure += this._pleasurePerHit);
    } catch (t) {}
    e();
  }
  onIptRestart_excute(t, e) {
    this._pleasure = 0;
    e();
  }
  onFlwLv_getAbilStg(t, e) {
    var r = t.args[0] || 0;
    if (r > 0 && r <= this._introLevels) e();else {
      this._evaluatePleasure();
      var a = this.localData.fpStage || this._defaultStage;
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: a - 1
      });
    }
  }
  _evaluatePleasure() {
    var t,
      e = this._pleasure;
    this.localData.fpStage || this._defaultStage;
    t = e >= this._pleasureThreshold ? this._defaultStage : this._upgradeStage;
    this.localData.fpStage = t;
    this.localData.fpStage = this.localData.fpStage;
    this._pleasure = 0;
  }
}