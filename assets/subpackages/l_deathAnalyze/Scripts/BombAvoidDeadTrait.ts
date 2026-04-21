import ExtractNormalLevels from '../../../Scripts/core/extractQuestion/ExtractNormalLevels';
import Trait from '../../../Scripts/framework/trait/Trait';
import DeathAnalyserMgr from '../../../Scripts/DeathAnalyserMgr';
enum u {
  NonDeathGroup = 1,
  DeathGroup = 2,
  DeathRate = 3,
}
@mj.trait
@mj.class("BombAvoidDeadTrait")
export default class BombAvoidDeadTrait extends Trait {
  static traitKey = "BombAvoidDead";
  get deathLimit() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.deathLimit) && void 0 !== e ? e : 3;
  }
  get strategy() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.strategy) && void 0 !== e ? e : u.NonDeathGroup;
  }
  onBombCdTp_filterList(t, e) {
    var r = this,
      n = (null == t ? void 0 : t.beforReturnVal) || [];
    n.push({
      filter: function (t, e, n) {
        return r.filter(t, e, n);
      }
    });
    e({
      returnVal: n
    });
  }
  filter(t, e, r) {
    var n = mj.getClassByName("DeathAnalyserTrait");
    if (!n || !n.getInstance() || !n.getInstance().eventEnabled) return [false, 999];
    var i = DeathAnalyserMgr.instance.analyzeCardPair(t);
    if (i.levelAllDeathPairs.length <= 0) return [false, 999];
    if (this.isDeathGroup([e, r], i)) {
      return [true, this.getPriority()];
    }
    return [false, 999];
  }
  getPriority() {
    var t, e;
    switch (this.strategy) {
      case u.NonDeathGroup:
        return 999;
      case u.DeathGroup:
        return 0;
      case u.DeathRate:
        return (null !== (e = null === (t = ExtractNormalLevels.getInstance().getData()) || void 0 === t ? void 0 : t.dieDimensionValue) && void 0 !== e ? e : 1) >= this.deathLimit ? 0 : 999;
    }
    return 999;
  }
  isDeathGroup(t, e) {
    var r,
      n,
      i,
      a,
      u = __read(t, 2),
      c = u[0],
      f = u[1];
    try {
      for (var s = __values(e.levelAllDeathPairs), d = s.next(); !d.done; d = s.next()) {
        var y = d.value;
        try {
          for (var h = (i = void 0, __values(y)), p = h.next(); !p.done; p = h.next()) if (p.value.isEqual({
            tile1Id: c.id,
            tile2Id: f.id
          })) return true;
        } catch (t) {
          i = {
            error: t
          };
        } finally {
          try {
            p && !p.done && (a = h.return) && a.call(h);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    } catch (t) {
      r = {
        error: t
      };
    } finally {
      try {
        d && !d.done && (n = s.return) && n.call(s);
      } finally {
        if (r) throw r.error;
      }
    }
    return false;
  }
}