import { DeathReasonAnalyser } from './DeathReasonAnalyser';
import { CardPairUtils, TileInGameSteps, CurrentBoardState } from './CardPairTypes';
export default class DeathAnalyserMgr {
  _curAnalyser = null;
  _badGroupMap = new Map();
  _cachedResult = null;
  _cachedMode = null;
  static get instance() {
    this._instance || (this._instance = new DeathAnalyserMgr());
    return this._instance;
  }
  startDeathAnalyser(e) {
    var t = this;
    if (e) {
      var o = e.gameType,
        n = e.getGameData().getLevelData(),
        i = e.getTileMapObject().aliveTiles();
      this.clearCache();
      if (this._curAnalyser) {
        this._curAnalyser.cancel();
        this._curAnalyser = null;
        this._curAnalyser = new DeathReasonAnalyser();
      } else this._curAnalyser = new DeathReasonAnalyser();
      this._badGroupMap.set(o, {
        status: false,
        badGroups: []
      });
      this._curAnalyser.startAnalyze(o, n, i, function (e) {
        t._badGroupMap.set(o, {
          status: true,
          badGroups: e
        });
        mj.EventManager.emit("DeathAnalyserComplete", e);
      }, function () {});
    }
  }
  cancelAnalyze() {
    if (this._curAnalyser) {
      this._curAnalyser.cancel();
      this._curAnalyser = null;
    }
  }
  getBadGroupMap(e) {
    if (!e) return [];
    var t = e.gameType,
      o = this._badGroupMap.get(t);
    return o && o.status ? o.badGroups : this._curAnalyser ? this._curAnalyser.getBadMahjongGroups() : [];
  }
  printBadGroups(e) {
    for (var t = 0; t < e.length; t++) e[t];
  }
  analyzeCardPair(e, t = false) {
    var o;
    if (!e) return this.createEmptyResult();
    var n = e.gameType;
    if (!t && this._cachedResult && this._cachedMode === n && this._cachedResult.isAnalyzeCompleted) {
      this.assembleCurrentInfo(e, this._cachedResult);
      return this._cachedResult;
    }
    var i = this.createEmptyResult(),
      r = this.getBadGroupMap(e);
    i.levelAllDeathPairs = CardPairUtils.generateDeathPairsFromBadGroups(r);
    var a = this._badGroupMap.get(n);
    i.isAnalyzeCompleted = null !== (o = null == a ? void 0 : a.status) && void 0 !== o && o;
    this.assembleCurrentInfo(e, i);
    this._cachedResult = i;
    this._cachedMode = n;
    return i;
  }
  assembleCurrentInfo(e, t) {
    var o, a, s, c, u, p, f, d;
    t.curDeadPairs = [];
    t.curAlivePairs = [];
    t.curAllUnlockPairs = [];
    t.curSuspiciousPairs = [];
    var h = e.getTileMapObject(),
      y = new Map(),
      m = h.getCanMatchTiles();
    try {
      for (var v = __values(m), g = v.next(); !g.done; g = v.next()) {
        var _ = __read(g.value, 2),
          T = _[0],
          C = _[1];
        if (C && C.length >= 2) {
          var b = C.map(function (e) {
            return {
              id: e.id,
              resId: e.resId,
              cardId: e.cardId,
              gridPosX: e.gridPosX,
              gridPosY: e.gridPosY,
              layer: e.layer,
              ownerGridIds: [...e.ownerGridIds],
              isValid: e.isValid
            };
          });
          y.set(T, b);
        }
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        g && !g.done && (a = v.return) && a.call(v);
      } finally {
        if (o) throw o.error;
      }
    }
    t.curAllUnlockPairs = CardPairUtils.generateUnlockPairs(y);
    var E = this.getGameStepPairs(e);
    try {
      for (var S = __values(t.curAllUnlockPairs), I = S.next(); !I.done; I = S.next()) {
        var w = I.value,
          B = false,
          x = false;
        try {
          for (var M = (u = void 0, __values(t.levelAllDeathPairs)), O = M.next(); !O.done; O = M.next()) {
            var D = O.value,
              P = 0,
              A = false,
              R = null;
            try {
              for (var N = (f = void 0, __values(D)), j = N.next(); !j.done; j = N.next()) {
                var k = j.value;
                switch (CardPairUtils.checkTileInGameSteps(k, E)) {
                  case TileInGameSteps.Trigger:
                    P++;
                    break;
                  case TileInGameSteps.Block:
                    A = true;
                    break;
                  case TileInGameSteps.None:
                    k.isEqual(w) && (R = w);
                }
                if (A) break;
              }
            } catch (e) {
              f = {
                error: e
              };
            } finally {
              try {
                j && !j.done && (d = N.return) && d.call(N);
              } finally {
                if (f) throw f.error;
              }
            }
            !A && R && (x = true);
            if (P === D.length - 1 && R) {
              B = true;
              break;
            }
          }
        } catch (e) {
          u = {
            error: e
          };
        } finally {
          try {
            O && !O.done && (p = M.return) && p.call(M);
          } finally {
            if (u) throw u.error;
          }
        }
        if (B) {
          t.curDeadPairs.push(w);
        } else {
          t.curAlivePairs.push(w);
        }
        x && t.curSuspiciousPairs.push(w);
      }
    } catch (e) {
      s = {
        error: e
      };
    } finally {
      try {
        I && !I.done && (c = S.return) && c.call(S);
      } finally {
        if (s) throw s.error;
      }
    }
  }
  getGameStepPairs(e) {
    var t = e.getGameData();
    if (!t) return [];
    var o = t.getClearRecords();
    return CardPairUtils.fromClearRecords(o);
  }
  getCurrentBoardState(e) {
    var t, o, i, r;
    if (!e) return CurrentBoardState.Unknown;
    var a = this.analyzeCardPair(e, false);
    if (!a.isAnalyzeCompleted) return CurrentBoardState.Unknown;
    if (0 === a.levelAllDeathPairs.length) return CurrentBoardState.EnsuredAlive;
    var s = this.getGameStepPairs(e),
      c = 0;
    try {
      for (var u = __values(a.levelAllDeathPairs), p = u.next(); !p.done; p = u.next()) {
        var f = p.value,
          d = 0,
          h = false;
        try {
          for (var y = (i = void 0, __values(f)), m = y.next(); !m.done; m = y.next()) {
            var v = m.value;
            switch (CardPairUtils.checkTileInGameSteps(v, s)) {
              case TileInGameSteps.Trigger:
                d++;
                break;
              case TileInGameSteps.Block:
                h = true;
            }
            if (h) break;
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            m && !m.done && (r = y.return) && r.call(y);
          } finally {
            if (i) throw i.error;
          }
        }
        if (d === f.length) return CurrentBoardState.TriggerDead;
        h && c++;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        p && !p.done && (o = u.return) && o.call(u);
      } finally {
        if (t) throw t.error;
      }
    }
    return c === a.levelAllDeathPairs.length ? CurrentBoardState.BlockedDead : CurrentBoardState.Unknown;
  }
  getCurAllUnlockPairs(e) {
    return this.analyzeCardPair(e, false).curAllUnlockPairs;
  }
  getLevelAllDeathPairs(e) {
    return this.analyzeCardPair(e, false).levelAllDeathPairs;
  }
  getFindDeadPairs(e) {
    return this.analyzeCardPair(e, false).curDeadPairs;
  }
  getFindAlivePairs(e) {
    return this.analyzeCardPair(e, false).curAlivePairs;
  }
  getSuspiciousPairs(e) {
    return this.analyzeCardPair(e, false).curSuspiciousPairs;
  }
  isAnalyzeCompleted(e) {
    var t;
    if (!e) return false;
    var o = e.gameType,
      n = this._badGroupMap.get(o);
    return null !== (t = null == n ? void 0 : n.status) && void 0 !== t && t;
  }
  createEmptyResult() {
    return {
      isAnalyzeCompleted: false,
      curDeadPairs: [],
      curAlivePairs: [],
      curAllUnlockPairs: [],
      levelAllDeathPairs: [],
      curSuspiciousPairs: []
    };
  }
  clearCache() {
    this._cachedResult = null;
    this._cachedMode = null;
  }
}