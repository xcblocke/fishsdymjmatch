import { LevelUtil } from '../../../Scripts/core/simulator/config/LevelUtil';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { TileMapSimulator } from '../../../Scripts/objects/TileMapSimulator';
import { SolverUtils } from '../../../Scripts/SolverUtils';
import Trait from '../../../Scripts/framework/trait/Trait';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("Tile2PreFillTrait")
export default class Tile2PreFillTrait extends Trait {
  static traitKey = "Tile2PreFill";
  onLoad() {
    var e, i, r, o, a, l, n, s, c;
    super.onLoad.call(this);
    this._config = {
      minDay: null !== (e = this._traitData.minDay) && void 0 !== e ? e : 2,
      minLevel: null !== (i = this._traitData.minLevel) && void 0 !== i ? i : 31,
      afterTriggerWeight: null !== (r = this._traitData.afterTriggerWeight) && void 0 !== r ? r : 0,
      nonTriggerThreshold: null !== (o = this._traitData.nonTriggerThreshold) && void 0 !== o ? o : 2,
      increaseAmount: null !== (a = this._traitData.increaseAmount) && void 0 !== a ? a : 0.25,
      countWeights: null !== (l = this._traitData.countWeights) && void 0 !== l ? l : [1, 1, 1],
      relativePositions: null !== (n = this._traitData.relativePositions) && void 0 !== n ? n : [0.5, 0.5],
      threshold1: null !== (s = this._traitData.threshold1) && void 0 !== s ? s : 0.75,
      threshold2: null !== (c = this._traitData.threshold2) && void 0 !== c ? c : 0.5
    };
    this.isEmptyField(this.localData.consecutiveNonTrigger) && (this.localData.consecutiveNonTrigger = 0);
    this.isEmptyField(this.localData.hasEverTriggered) && (this.localData.hasEverTriggered = false);
    this.isEmptyField(this.localData.preFilledSlotBarIds) && (this.localData.preFilledSlotBarIds = []);
  }
  isEmptyField(t) {
    return null == t || "" === t;
  }
  isSupportMode(t) {
    return t === MjGameType.Tile2Normal;
  }
  isTriggered() {
    return this.localData.preFilledSlotBarIds.length > 0;
  }
  resetTriggeredInfo() {
    this.localData.preFilledSlotBarIds = [];
  }
  onIptT2SetLv_newGmComplete(t, e) {
    var i = t.ins.gameContext;
    if (this.isSupportMode(i.gameType)) {
      if (i.getIsRestart()) {
        this.isTriggered() && i.getGameData().resetSlotBarIds(this.localData.preFilledSlotBarIds);
        e();
      } else if (i.getIsNewGame()) {
        try {
          this.tryPreFill(i);
        } catch (t) {
          console.error("[Tile2PreFill] 预填块异常: " + ((null == t ? void 0 : t.message) || "未知错误"));
        }
        e();
      } else e();
    } else e();
  }
  getActiveDays() {
    var t;
    return null !== (t = LoginModel.getInstance().activeDay) && void 0 !== t ? t : 1;
  }
  getNormalLevel() {
    return UserModel.getInstance().getMainGameData().getLevelId() || 0;
  }
  tryPreFill(t) {
    var e = this.getActiveDays(),
      i = this.getNormalLevel();
    if (!(e < this._config.minDay || i < this._config.minLevel)) {
      this.resetTriggeredInfo();
      if (this.checkProbability()) {
        var r = t.getGameData(),
          o = TileMapSimulator.createSim(t),
          a = r.getSolvers();
        if (a) {
          var l = LevelUtil.parseStepSolver(a);
          if (l && 0 !== l.length) {
            var n = r.slotBarCount;
            if (n <= 0) this.updateProbabilityState(false);else {
              var c = SolverUtils.simulateOccupancy(l, o, n);
              if (0 !== c.length) {
                var f = this.selectTiles(c, o, n);
                if (0 !== f.length) {
                  var h = f.map(function (t) {
                    return t.saveKey();
                  });
                  this.localData.preFilledSlotBarIds = h;
                  r.resetSlotBarIds(h);
                  this.updateProbabilityState(true);
                } else this.updateProbabilityState(false);
              } else this.updateProbabilityState(false);
            }
          } else this.updateProbabilityState(false);
        } else this.updateProbabilityState(false);
      } else this.updateProbabilityState(false);
    }
  }
  checkProbability() {
    if (!this.localData.hasEverTriggered) return true;
    var t = this.localData.consecutiveNonTrigger,
      e = this._config.nonTriggerThreshold,
      i = this._config.increaseAmount,
      r = this._config.afterTriggerWeight,
      o = e > 0 ? Math.floor(t / e) : 0,
      a = Math.min(1, r + o * i);
    return Math.random() < a;
  }
  updateProbabilityState(t) {
    if (t) {
      this.localData.hasEverTriggered = true;
      this.localData.consecutiveNonTrigger = 0;
    } else this.localData.consecutiveNonTrigger = (this.localData.consecutiveNonTrigger || 0) + 1;
  }
  selectTiles(t, e) {
    var i,
      r,
      o,
      a,
      l = this._config,
      n = this.weightedRandomSelect(l.countWeights) + 1,
      s = t.find(function (t) {
        return t.occupancyRate >= l.threshold1;
      }),
      c = t.find(function (t) {
        return t.occupancyRate >= l.threshold2;
      }),
      u = [],
      d = new Set(),
      f = new Set();
    if (n >= 1 && s) {
      var h = this.findTileAtRelativePosition(t, e, s.step, l.relativePositions[0], d, f);
      if (h) {
        u.push(h.tile);
        d.add(h.tileId);
        f.add(h.tile.cardId);
      }
    }
    var p = u.length > 0 && null !== (r = null === (i = t.find(function (t) {
      return t.tileId === u[0].id;
    })) || void 0 === i ? void 0 : i.step) && void 0 !== r ? r : Infinity;
    if (n >= 2 && c) {
      var v = Math.min(c.step, p),
        g = this.findTileAtRelativePosition(t, e, v, l.relativePositions[1], d, f);
      if (g) {
        u.push(g.tile);
        d.add(g.tileId);
        f.add(g.tile.cardId);
      }
    }
    var y = u.length > 1 && null !== (a = null === (o = t.find(function (t) {
      return t.tileId === u[1].id;
    })) || void 0 === o ? void 0 : o.step) && void 0 !== a ? a : Infinity;
    if (n >= 3 && y < Infinity) {
      var m = this.findMatchableTile(t, e, y, d, f);
      m && u.push(m);
    }
    return u;
  }
  findTileAtRelativePosition(t, e, i, r, o, a) {
    var n,
      s,
      c = t.filter(function (t) {
        return t.step < i && !o.has(t.tileId);
      });
    if (0 === c.length) return null;
    var u = Math.round(i * r);
    c.sort(function (t, e) {
      return Math.abs(t.step - u) - Math.abs(e.step - u);
    });
    try {
      for (var d = __values(c), f = d.next(); !f.done; f = d.next()) {
        var h = f.value,
          p = e.getTileObject(h.tileId);
        if (p && p.isValid && !p.getIsInSlotBar() && !a.has(p.cardId)) return {
          tile: p,
          tileId: h.tileId
        };
      }
    } catch (t) {
      n = {
        error: t
      };
    } finally {
      try {
        f && !f.done && (s = d.return) && s.call(d);
      } finally {
        if (n) throw n.error;
      }
    }
    return null;
  }
  findMatchableTile(t, e, i, r, o) {
    var a,
      s,
      c,
      u,
      d = new Map(),
      f = new Set();
    try {
      for (var h = __values(e.tileObjectMap()), p = h.next(); !p.done; p = h.next()) {
        var v = __read(p.value, 2),
          g = v[0];
        if ((_ = v[1]).isValid && !_.getIsInSlotBar() && 0 === e.isCardLock(_)) {
          d.set(_.cardId, (d.get(_.cardId) || 0) + 1);
          f.add(g);
        }
      }
    } catch (t) {
      a = {
        error: t
      };
    } finally {
      try {
        p && !p.done && (s = h.return) && s.call(h);
      } finally {
        if (a) throw a.error;
      }
    }
    var y = t.filter(function (t) {
      return t.step < i && !r.has(t.tileId);
    });
    try {
      for (var m = __values(y), T = m.next(); !T.done; T = m.next()) {
        var _,
          b = T.value;
        if ((_ = e.getTileObject(b.tileId)) && f.has(_.id) && !o.has(_.cardId) && (d.get(_.cardId) || 0) >= 2) return _;
      }
    } catch (t) {
      c = {
        error: t
      };
    } finally {
      try {
        T && !T.done && (u = m.return) && u.call(m);
      } finally {
        if (c) throw c.error;
      }
    }
    return null;
  }
  weightedRandomSelect(t) {
    var e = t.reduce(function (t, e) {
      return t + e;
    }, 0);
    if (e <= 0) return 0;
    for (var i = Math.random() * e, r = 0; r < t.length; r++) if ((i -= t[r]) <= 0) return r;
    return t.length - 1;
  }
}