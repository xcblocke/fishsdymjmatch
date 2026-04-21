import { DotGameMoveStep } from '../gamePlay/dot/DGameMoveStep';
import { ETileVisible, ETileType } from '../simulator/constant/TileTypeEnum';
import { EBlockStatus, EGameStepCmd, EClearType } from './TrackerInterface';
export default class TrackerUtils {
  static id2position(e) {
    return e ? e.split("-").map(Number) : [0, 0, 0];
  }
  static position2id(e) {
    return e ? e.join("-") : "";
  }
  static object2position(e) {
    return e ? [e.gridPosX, e.gridPosY, e.layer] : [0, 0, 0];
  }
  static getExposedPairInfo(e) {
    var t,
      o,
      n,
      a,
      l = {},
      s = e.tileObjectMap();
    try {
      for (var c = __values(s), u = c.next(); !u.done; u = c.next()) {
        var p = __read(u.value, 2),
          f = (p[0], p[1]);
        l[f.cardId] || (l[f.cardId] = {
          moveAble: [],
          nonMoveAble: []
        });
        f.isValid && (0 === f.isCardLock() ? l[f.cardId].moveAble.push(f) : l[f.cardId].nonMoveAble.push(f));
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (o = c.return) && o.call(c);
      } finally {
        if (t) throw t.error;
      }
    }
    var d = {};
    for (var h in l) {
      var y = l[h].moveAble,
        m = l[h].nonMoveAble;
      if (1 === y.length) try {
        for (var v = (n = void 0, __values(m)), g = v.next(); !g.done; g = v.next()) {
          var _ = g.value;
          d[_.id] = _.cardId;
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          g && !g.done && (a = v.return) && a.call(v);
        } finally {
          if (n) throw n.error;
        }
      }
    }
    return d;
  }
  static getHalfExposedPairInfo(e) {
    var t = this.getExposedPairInfo(e),
      o = {};
    for (var n in t) {
      var i = e.getTileObject(n),
        r = t[n];
      i && e.isHasVisible(i) !== ETileVisible.None && (o[n] = r);
    }
    return o;
  }
  static getBlockingTileInfo(e) {
    var t = this.getHalfExposedPairInfo(e),
      o = {};
    for (var n in t) {
      var i = e.getTileObject(n),
        r = t[n];
      i && e.isHasCover(i) && (o[n] = r);
    }
    return o;
  }
  static getLeftFreeRightCnt(e) {
    var t,
      o,
      n = 0,
      a = e.tileObjectMap();
    try {
      for (var l = __values(a), s = l.next(); !s.done; s = l.next()) {
        var c = __read(s.value, 2),
          u = (c[0], c[1]);
        if (u.isValid && 0 === u.isCardLock()) {
          var p = u.isHasLeft(),
            f = u.isHasRight();
          !p && f && n++;
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (o = l.return) && o.call(l);
      } finally {
        if (t) throw t.error;
      }
    }
    return n;
  }
  static getRightFreeLeftCnt(e) {
    var t,
      o,
      n = 0,
      a = e.tileObjectMap();
    try {
      for (var l = __values(a), s = l.next(); !s.done; s = l.next()) {
        var c = __read(s.value, 2),
          u = (c[0], c[1]);
        if (u.isValid && 0 === u.isCardLock()) {
          var p = u.isHasLeft(),
            f = u.isHasRight();
          p && !f && n++;
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (o = l.return) && o.call(l);
      } finally {
        if (t) throw t.error;
      }
    }
    return n;
  }
  static getBothSidesFreeCnt(e) {
    var t,
      o,
      n = 0,
      a = e.tileObjectMap();
    try {
      for (var l = __values(a), s = l.next(); !s.done; s = l.next()) {
        var c = __read(s.value, 2),
          u = (c[0], c[1]);
        if (u.isValid && 0 === u.isCardLock()) {
          var p = u.isHasLeft(),
            f = u.isHasRight();
          p || f || n++;
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (o = l.return) && o.call(l);
      } finally {
        if (t) throw t.error;
      }
    }
    return n;
  }
  static getPairsStepsArray(e) {
    var t = [],
      o = e.getGameTracker();
    if (!o) return [];
    var n = o.halfExposedSteps,
      i = o.initialHalfExposedPositions;
    for (var r in n) {
      var a = n[r];
      if (i[r]) {
        var l = i[r];
        t.push(l + ":" + a);
      }
    }
    return t;
  }
  static getPairsStepsArrayIni(e) {
    var t = [],
      o = e.getGameTracker();
    if (!o) return [];
    var n = o.halfExposedSteps,
      i = o.initialHalfExposedPositions;
    for (var a in n) {
      var l = n[a];
      if (i[a]) {
        var s = i[a],
          c = __read(this.id2position(a), 3),
          u = c[0],
          p = c[1],
          f = c[2];
        t.push({
          position: "[" + u + ", " + p + ", " + f + "]",
          element_id: s,
          step: l
        });
      }
    }
    return t;
  }
  static getPairsStepsArrayCrush(e) {
    var t = e.getGameTracker();
    return t ? t.pairsCrushRecords.concat() : [];
  }
  static getPairsStepsArrayOp(e) {
    var t = e.getGameTracker();
    return t ? t.pairsOpRecords.concat() : [];
  }
  static getProcessTime(e) {
    var t = e.getGameData().getTotalTileCount(),
      o = e.getGameData().getClearTileCount();
    return 0 === t ? 1 : Number((o / t).toFixed(2));
  }
  static startGameTracking(t, o) {
    var n = t.getGameTracker();
    if (n) {
      n.gameStartTime = Date.now();
      n.gameSteps = [];
      n.eliminatedPairs = [];
      n.halfExposedSteps = {};
      n.initialHalfExposedPositions = {};
      n.initTilesCount = o.getCount();
      n.tileMovableStep = {};
      n.pairsCrushRecords = [];
      n.pairsOpRecords = [];
      n.recordedOpPairs = [];
      n.stepAnalytics = [];
      n.lastStepTime = 0;
      n.initHalfExposedTiles = [];
      var i = TrackerUtils.getHalfExposedPairInfo(o),
        r = n.initialHalfExposedPositions,
        a = n.initHalfExposedTiles;
      for (var l in i) {
        r[l] = i[l];
        a.push(l);
      }
      n.initHalfExposedTiles = a;
      n.initialHalfExposedPositions = r;
      TrackerUtils.recordInitialMovableTiles(t, o);
    }
  }
  static recordInitialMovableTiles(e, t) {
    var o,
      n,
      a = e.getGameTracker();
    if (a) {
      var l = a.tileMovableStep,
        s = t.tileObjectMap();
      try {
        for (var c = __values(s), u = c.next(); !u.done; u = c.next()) {
          var p = __read(u.value, 2),
            f = (p[0], p[1]);
          f.isValid && 0 === f.isCardLock() && (l[f.id] = 0);
        }
      } catch (e) {
        o = {
          error: e
        };
      } finally {
        try {
          u && !u.done && (n = c.return) && n.call(c);
        } finally {
          if (o) throw o.error;
        }
      }
      a.tileMovableStep = l;
      this.checkAndRecordOpPairs(e, t, 0);
    }
  }
  static updateMovableTracking(e, t, o) {
    var n,
      a,
      l = e.getGameTracker();
    if (l) {
      var s = l.tileMovableStep,
        c = t.tileObjectMap();
      try {
        for (var u = __values(c), p = u.next(); !p.done; p = u.next()) {
          var f = __read(p.value, 2),
            d = (f[0], f[1]);
          !s[d.id] && d.isValid && 0 === d.isCardLock() && (s[d.id] = o);
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          p && !p.done && (a = u.return) && a.call(u);
        } finally {
          if (n) throw n.error;
        }
      }
      l.tileMovableStep = s;
      this.checkAndRecordOpPairs(e, t, o);
    }
  }
  static checkAndRecordOpPairs(e, t, o) {
    var n,
      a,
      l,
      s,
      c,
      u,
      p = e.getGameTracker();
    if (p) {
      var f = new Map(),
        d = t.tileObjectMap();
      try {
        for (var h = __values(d), y = h.next(); !y.done; y = h.next()) {
          var m = __read(y.value, 2),
            v = (m[0], m[1]);
          if (v.isValid && 0 === v.isCardLock()) {
            f.has(v.cardId) || f.set(v.cardId, []);
            f.get(v.cardId).push(v.id);
          }
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          y && !y.done && (a = h.return) && a.call(h);
        } finally {
          if (n) throw n.error;
        }
      }
      var g = p.recordedOpPairs,
        _ = p.pairsOpRecords,
        T = p.tileMovableStep;
      try {
        for (var C = __values(f), b = C.next(); !b.done; b = C.next()) {
          var E = __read(b.value, 2),
            S = E[0],
            I = E[1];
          if (I.length >= 2) for (var w = 0; w < I.length; w++) for (var B = w + 1; B < I.length; B++) {
            var x = I[w],
              M = I[B],
              O = [x, M].sort().join("#");
            if (!g.includes(O)) {
              var D = null !== (c = T[x]) && void 0 !== c ? c : o,
                P = null !== (u = T[M]) && void 0 !== u ? u : o,
                A = o - Math.min(D, P);
              g.push(O);
              _.push({
                position1: x,
                position2: M,
                element_id: S,
                steps: A
              });
            }
          }
        }
      } catch (e) {
        l = {
          error: e
        };
      } finally {
        try {
          b && !b.done && (s = C.return) && s.call(C);
        } finally {
          if (l) throw l.error;
        }
      }
      p.recordedOpPairs = g;
      p.pairsOpRecords = _;
    }
  }
  static recordStep(e, t, o) {
    Date.now();
    var n = e.getGameTracker();
    if (n) {
      n.stepId += 1;
      var i = n.stepId;
      this.updateMovableTracking(e, t, i);
      this.updateHalfExposedSteps(e, t, i, o);
      this.cachePairsCrushRecords(e, i, o);
      this.cacheEliminatedPairs(e, o);
      this.cacheGameStepData(e, t, i, o);
      this.generateStepAnalytics(e, t, i, o);
      this.updateReleasedPositions(e, t, i, o);
    }
  }
  static cachePairsCrushRecords(e, t, o) {
    var n,
      i,
      r = e.getGameTracker();
    if (r) {
      var a = r.tileMovableStep,
        l = null !== (n = a[o.tileId1]) && void 0 !== n ? n : t,
        s = null !== (i = a[o.tileId2]) && void 0 !== i ? i : t,
        c = t - Math.min(l, s),
        u = r.pairsCrushRecords,
        p = {
          position1: o.tileId1,
          position2: o.tileId2,
          element_id: o.typeId,
          steps: c
        };
      u.push(p);
      r.pairsCrushRecords = u;
    }
  }
  @mj.traitEvent("TrackerUtils_cheElimPair")
  static cacheEliminatedPairs(e, t) {
    var o = e.getGameTracker();
    if (o) {
      var n = o.eliminatedPairs;
      n.push({
        tile1: t.tileId1,
        tile2: t.tileId2
      });
      o.eliminatedPairs = n;
    }
  }
  @mj.traitEvent("TrackerUtils_cheGmStep")
  static cacheGameStepData(e, t, o, n) {
    var i = e.getGameTracker();
    if (i) {
      var r = t.getCurTilesCnt(),
        a = t.getCanMatchCardPairNum(),
        l = i.gameSteps,
        s = {
          step_id: o,
          pairs_count: a,
          remaining_tiles: r,
          eliminated_pair: {
            tile1: n.tileId1,
            tile2: n.tileId2
          }
        };
      l.push(s);
      i.gameSteps = l;
    }
  }
  static updateHalfExposedSteps(e, t, o, n) {
    var r,
      a,
      l = e.getGameTracker();
    if (l) {
      var s = l.initHalfExposedTiles,
        c = l.halfExposedSteps;
      try {
        for (var u = __values([n.tileId1, n.tileId2]), p = u.next(); !p.done; p = u.next()) {
          var f = p.value;
          s.includes(f) && (c[f] = o);
        }
      } catch (e) {
        r = {
          error: e
        };
      } finally {
        try {
          p && !p.done && (a = u.return) && a.call(u);
        } finally {
          if (r) throw r.error;
        }
      }
      l.halfExposedSteps = c;
    }
  }
  @mj.traitEvent("TrackerUtils_upRelPos")
  static updateReleasedPositions(e, t, o, n) {
    var a,
      l,
      s,
      c,
      u = e.getGameTracker();
    if (u) {
      var p = t.tileObjectMap(),
        f = t.getTileObject(n.tileId1),
        d = t.getTileObject(n.tileId2);
      if (f && d) {
        var h = [];
        try {
          for (var y = __values(p), m = y.next(); !m.done; m = y.next()) {
            var v = __read(m.value, 2);
            v[0];
            (C = v[1]).isValid && 0 === C.isCardLock() && h.push(C.id);
          }
        } catch (e) {
          a = {
            error: e
          };
        } finally {
          try {
            m && !m.done && (l = y.return) && l.call(y);
          } finally {
            if (a) throw a.error;
          }
        }
        f.isValid = false;
        d.isValid = false;
        var g = [];
        try {
          for (var _ = __values(p), T = _.next(); !T.done; T = _.next()) {
            var C,
              b = __read(T.value, 2);
            b[0];
            (C = b[1]).isValid && 0 === C.isCardLock() && g.push(C.id);
          }
        } catch (e) {
          s = {
            error: e
          };
        } finally {
          try {
            T && !T.done && (c = _.return) && c.call(_);
          } finally {
            if (s) throw s.error;
          }
        }
        f.isValid = true;
        d.isValid = true;
        var E = g.filter(function (e) {
          return !h.includes(e);
        });
        u.prevReleasedPosition = E;
      }
    }
  }
  static generateStepAnalytics(e, t, o, n) {
    var i = n.tileId1,
      r = n.tileId2,
      a = n.clear,
      s = Date.now(),
      c = e.getGameTracker();
    if (c) {
      var u = c.lastStepTime <= 0 ? 0 : s - c.lastStepTime;
      c.lastStepTime = s;
      var p = t.getTileObject(i),
        f = t.getTileObject(r),
        d = this.getPairCoordinate(t, i, r),
        h = this.getCurrentBoardDimension(t);
      p.isValid = false;
      f.isValid = false;
      var y = this.findMatchingPairs(t);
      p.isValid = true;
      f.isValid = true;
      var m = 0 === y.length ? 1 : 0,
        v = p.cardId,
        g = this.countOperationalPairs(t),
        _ = this.countMovableTiles(t),
        T = c.cmds.concat().reverse(),
        C = this.getPreErrClicks(T, o),
        b = this.getRearrangedUsage(T, o),
        E = b.rearrangedUsageCount,
        S = b.rearrangedBoards,
        I = this.getPromptUsage(t, T, o),
        w = I.promptUsageCount,
        B = I.promptBlockMahjong,
        x = this.getClearStep(T, a),
        M = [];
      p.type === ETileType.RollCard && M.push(p.id);
      f.type === ETileType.RollCard && M.push(f.id);
      var O = M.join(";"),
        D = this.getBlockStatusPositionList(t),
        P = {
          step_id: o,
          op_dur_sec: Number((u / 1000).toFixed(2)),
          pre_err_clicks: C,
          pair_coordinate: d,
          board_string: e.getGameData().getLevelData(),
          board_xyz: h,
          is_dead: m,
          block_mahjong_id: v,
          pre_op_pairs: g,
          pre_op_blocks: _,
          rearrange_usage_count: E,
          prompt_usage_count: w,
          rearranged_board: S,
          Prompt_block_mahjong: B,
          lightning_crush: [a, x],
          turnaround_crush: O,
          suit_status_position_list: D
        };
      Date.now();
      this.addComplexData(P, e, t, o, n);
      Date.now();
      this.cacheStepAnalytic(e, P);
      Date.now();
      this.dotGameMoveStep(e, P);
    }
  }
  @mj.traitEvent("TrackerUtils_cacheStepAly")
  static cacheStepAnalytic(e, t) {
    var o = e.getGameTracker();
    if (o) {
      var n = o.stepAnalytics;
      n.push(t);
      o.stepAnalytics = n;
    }
  }
  @mj.traitEvent("TrackerUtils_dotGmStep")
  static dotGameMoveStep(e, t) {
    DotGameMoveStep.dot(e, t);
  }
  @mj.traitEvent("TrackerUtils_pairCoord")
  static getPairCoordinate(e, t, o) {
    var n,
      i,
      a = {},
      l = e.getTileObject(t),
      s = e.getTileObject(o),
      c = __read(this.object2position(l), 3),
      u = c[0],
      p = c[1],
      f = c[2],
      d = __read(this.object2position(s), 3),
      h = "[" + d[0] + "," + d[1] + "," + d[2] + "]";
    a["[" + u + "," + p + "," + f + "]"] = null !== (n = null == l ? void 0 : l.cardId) && void 0 !== n ? n : 0;
    a[h] = null !== (i = null == s ? void 0 : s.cardId) && void 0 !== i ? i : 0;
    return a;
  }
  static getBlockMahjongIdNum(e, t) {
    var o,
      n,
      a = e.tileObjectMap(),
      l = 0;
    try {
      for (var s = __values(a), c = s.next(); !c.done; c = s.next()) {
        var u = __read(c.value, 2),
          p = (u[0], u[1]);
        p.cardId === t && p.isValid && 0 === p.isCardLock() && l++;
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        c && !c.done && (n = s.return) && n.call(s);
      } finally {
        if (o) throw o.error;
      }
    }
    return l;
  }
  @mj.traitEvent("TrackerUtils_addComplex")
  static addComplexData(e, t, o, n, i) {
    var a = t.getGameTracker();
    if (a) {
      var l = o.getTileObject(i.tileId1),
        s = o.getTileObject(i.tileId2),
        c = __read(this.object2position(l), 3),
        u = c[0],
        p = c[1],
        f = c[2],
        d = __read(this.object2position(s), 3),
        h = d[0],
        y = d[1],
        m = d[2],
        v = this.position2id([u, p, f]),
        g = this.position2id([h, y, m]),
        _ = l.cardId,
        T = this.getBlockMahjongIdNum(o, _);
      e.block_mahjong_id_num = T;
      var C = Number(Math.sqrt(Math.pow(h - u, 2) + Math.pow(y - p, 2)).toFixed(2));
      e.pair_distance = C;
      var b = 0;
      (a.prevReleasedPosition.includes(v) || a.prevReleasedPosition.includes(g)) && (b = 1);
      e.is_prev_rel_flag = b;
      var E = [v, g],
        S = a.prevStepTiles,
        I = this.calculateVisualDistance(E, S);
      e.prev_vis_dist = I;
      a.prevStepTiles = E;
      var w = this.calculatePotentialOptions(o, _);
      e.potential_option = w;
      var B = __read(this.calculateReleaseCategories(o, l, s), 2),
        x = B[0],
        M = B[1];
      e.hor_rel_blocks = x;
      e.z_rel_blocks = M;
      var O = this.countVisibleTiles(o);
      e.pre_vis_blocks = O;
      var D = this.countTotallyVisibleTiles(o);
      e.pre_totalvis_blocks = D;
      var P = this.calculateOpPairsChange(o, l, s);
      e.op_pairs_cnt = P;
    }
  }
  @mj.traitEvent("TrackerUtils_blockStatus")
  static getBlockStatusPositionList(e) {
    var t,
      o,
      n = e.tileObjectMap(),
      a = [];
    try {
      for (var c = __values(n), u = c.next(); !u.done; u = c.next()) {
        var p = __read(u.value, 2),
          f = (p[0], p[1]);
        if (f.isValid) {
          var d = EBlockStatus.Invisible;
          if (0 === f.isCardLock()) d = EBlockStatus.Movable;else {
            var h = e.isHasVisible(f);
            h !== ETileVisible.None && (d = h === ETileVisible.All ? EBlockStatus.FullVisible : EBlockStatus.PartialVisible);
          }
          var y = __read(this.object2position(f), 3),
            m = y[0],
            v = y[1],
            g = y[2];
          a.push({
            suit: f.cardId,
            status: d,
            pos: this.position2id([m, v, g])
          });
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (o = c.return) && o.call(c);
      } finally {
        if (t) throw t.error;
      }
    }
    return a;
  }
  static getPreErrClicks(e, t) {
    return e.filter(function (e) {
      return e.cmd === EGameStepCmd.Invalid && e.stepId === t - 1;
    }).length;
  }
  static getRearrangedUsage(e, t) {
    var o = e.filter(function (e) {
      return e.cmd === EGameStepCmd.Shuffle && e.stepId === t - 1;
    });
    return {
      rearrangedUsageCount: o.length,
      rearrangedBoards: o.map(function (e) {
        return e.boardAfter;
      }).reverse()
    };
  }
  static getPromptUsage(e, t, o) {
    var n = t.find(function (e) {
        return e.cmd === EGameStepCmd.Hint && e.stepId < o;
      }),
      i = 0,
      a = [];
    if (n) {
      var l = e.getTileObject(n.tileId1),
        c = e.getTileObject(n.tileId2);
      if (l && c && l.isValid && c.isValid) {
        i = 1;
        var u = __read(this.object2position(l), 3),
          p = u[0],
          f = u[1],
          d = u[2],
          h = __read(this.object2position(c), 3),
          y = "[" + p + "," + f + "," + d + "]",
          m = "[" + h[0] + "," + h[1] + "," + h[2] + "]";
        a.push(y + ":" + l.cardId);
        a.push(m + ":" + c.cardId);
      }
    }
    return {
      promptUsageCount: i,
      promptBlockMahjong: a
    };
  }
  static getClearStep(e, t) {
    var o,
      n,
      r = 1;
    if (t == EClearType.Single || t == EClearType.Multi || t == EClearType.Drag) return r;
    try {
      for (var a = __values(e), l = a.next(); !l.done; l = a.next()) {
        var c = l.value;
        if (c.cmd === EGameStepCmd.KillPair || c.cmd === EGameStepCmd.AutoMerge) {
          if (c.clear !== t) break;
          r++;
        }
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (n = a.return) && n.call(a);
      } finally {
        if (o) throw o.error;
      }
    }
    return r;
  }
  static calculateVisualDistance(e, t) {
    var o = this;
    if (!t || 2 !== t.length) return 0;
    var n = __read(e.map(function (e) {
        return o.id2position(e);
      }), 2),
      i = n[0],
      a = n[1],
      l = __read(t.map(function (e) {
        return o.id2position(e);
      }), 2),
      s = l[0],
      c = l[1],
      u = Math.sqrt(Math.pow(i[0] - s[0], 2) + Math.pow(i[1] - s[1], 2)) + Math.sqrt(Math.pow(a[0] - c[0], 2) + Math.pow(a[1] - c[1], 2)),
      p = Math.sqrt(Math.pow(a[0] - s[0], 2) + Math.pow(a[1] - s[1], 2)) + Math.sqrt(Math.pow(c[0] - i[0], 2) + Math.pow(c[1] - i[1], 2)),
      f = Math.min(u, p);
    return Number(f.toFixed(2));
  }
  static calculatePotentialOptions(e, t) {
    var o,
      n,
      a,
      l,
      s = e.tileObjectMap(),
      c = [],
      u = [];
    try {
      for (var p = __values(s), f = p.next(); !f.done; f = p.next()) {
        var d = __read(f.value, 2),
          h = (d[0], d[1]);
        if (h.isValid && 0 === h.isCardLock()) {
          c.push(h.id);
          h.cardId === t && u.push(h);
        }
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        f && !f.done && (n = p.return) && n.call(p);
      } finally {
        if (o) throw o.error;
      }
    }
    var y = {},
      m = function m(e) {
        var t,
          o,
          n = "[" + e.gridPosX + "," + e.gridPosY + "," + e.layer + "]";
        e.isValid = false;
        var a = [];
        try {
          for (var l = (t = void 0, __values(s)), u = l.next(); !u.done; u = l.next()) {
            var p = __read(u.value, 2),
              f = (p[0], p[1]);
            f.isValid && 0 === f.isCardLock() && a.push(f.id);
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            u && !u.done && (o = l.return) && o.call(l);
          } finally {
            if (t) throw t.error;
          }
        }
        e.isValid = true;
        var d = a.filter(function (t) {
          return !c.includes(t) && t !== e.id;
        }).length;
        y[n] = d;
      };
    try {
      for (var v = __values(u), g = v.next(); !g.done; g = v.next()) m(g.value);
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        g && !g.done && (l = v.return) && l.call(v);
      } finally {
        if (a) throw a.error;
      }
    }
    return y;
  }
  static generateCurrentBoardString(e) {
    var t,
      o,
      n,
      r,
      a,
      l,
      s = [],
      c = [],
      u = e.mapLayers();
    try {
      for (var p = __values(u), f = p.next(); !f.done; f = p.next()) {
        var d = f.value,
          h = [],
          y = d.allCards.concat(),
          m = {},
          v = [];
        try {
          for (var g = (n = void 0, __values(y)), _ = g.next(); !_.done; _ = g.next()) {
            var T = _.value;
            if (T.isValid) {
              if (!m[T.gridPosY]) {
                m[T.gridPosY] = [];
                v.push(T.gridPosY);
              }
              m[T.gridPosY].push(T);
            }
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            _ && !_.done && (r = g.return) && r.call(g);
          } finally {
            if (n) throw n.error;
          }
        }
        v.sort(function (e, t) {
          return e - t;
        });
        try {
          for (var C = (a = void 0, __values(v)), b = C.next(); !b.done; b = C.next()) {
            var E = b.value,
              S = m[E];
            S.sort(function (e, t) {
              return e.gridPosX - t.gridPosX;
            });
            if (S.length > 0) {
              var I = "" + E + S[0].gridPosX;
              c.push(S[0].cardId);
              for (var w = 1; w < S.length; w++) {
                I += "," + S[w].gridPosX;
                c.push(S[w].cardId);
              }
              h.push(I);
            }
          }
        } catch (e) {
          a = {
            error: e
          };
        } finally {
          try {
            b && !b.done && (l = C.return) && l.call(C);
          } finally {
            if (a) throw a.error;
          }
        }
        if (h.length > 0) {
          var B;
          B = 1 === h.length ? "" + d.layerIndex + h[0] : "" + d.layerIndex + h[0] + "." + h.slice(1).join(".");
          s.push(B);
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        f && !f.done && (o = p.return) && o.call(p);
      } finally {
        if (t) throw t.error;
      }
    }
    return s.join(";") + ":" + c.join("");
  }
  static getCurrentBoardDimension(e) {
    var t,
      o,
      n = 0,
      a = 0,
      l = 0;
    try {
      for (var s = __values(e.tileObjectMap()), c = s.next(); !c.done; c = s.next()) {
        var u = __read(c.value, 2),
          p = (u[0], u[1]);
        if (p.isValid) {
          n = Math.max(n, p.gridPosX);
          a = Math.max(a, p.gridPosY);
          l = Math.max(l, p.layer);
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        c && !c.done && (o = s.return) && o.call(s);
      } finally {
        if (t) throw t.error;
      }
    }
    return [n + 2, a + 2, l];
  }
  static findMatchingPairs(e) {
    var t,
      o,
      n = e.tileObjectMap(),
      a = [];
    try {
      for (var l = __values(n), s = l.next(); !s.done; s = l.next()) {
        var c = __read(s.value, 2),
          u = (c[0], c[1]);
        u.isValid && 0 === u.isCardLock() && a.push(u);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (o = l.return) && o.call(l);
      } finally {
        if (t) throw t.error;
      }
    }
    for (var p = [], f = 0; f < a.length; f++) for (var d = f + 1; d < a.length; d++) {
      var h = a[f],
        y = a[d];
      h.cardId === y.cardId && p.push([h.id, y.id]);
    }
    return p;
  }
  static calculateReleaseCategories(e, t, o) {
    var n,
      a,
      l,
      s,
      c,
      u,
      p = [],
      f = e.tileObjectMap();
    try {
      for (var d = __values(f), h = d.next(); !h.done; h = d.next()) {
        var y = __read(h.value, 2);
        y[0];
        (_ = y[1]).isValid && 0 === _.isCardLock() && p.push(_.id);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        h && !h.done && (a = d.return) && a.call(d);
      } finally {
        if (n) throw n.error;
      }
    }
    t.isValid = false;
    o.isValid = false;
    var m = [];
    try {
      for (var v = __values(f), g = v.next(); !g.done; g = v.next()) {
        var _,
          T = __read(g.value, 2);
        T[0];
        (_ = T[1]).isValid && 0 === _.isCardLock() && m.push(_.id);
      }
    } catch (e) {
      l = {
        error: e
      };
    } finally {
      try {
        g && !g.done && (s = v.return) && s.call(v);
      } finally {
        if (l) throw l.error;
      }
    }
    var C = m.filter(function (e) {
        return !p.includes(e);
      }),
      b = 0,
      E = 0;
    try {
      for (var S = __values(C), I = S.next(); !I.done; I = S.next()) {
        var w = I.value,
          B = f.get(w);
        if (B) {
          var x = this.wasHorizontallyBlockedByEliminatedTiles(B, [t, o]),
            M = this.wasVerticallyBlockedByEliminatedTiles(B, [t, o]);
          x && b++;
          M && E++;
        }
      }
    } catch (e) {
      c = {
        error: e
      };
    } finally {
      try {
        I && !I.done && (u = S.return) && u.call(S);
      } finally {
        if (c) throw c.error;
      }
    }
    t.isValid = true;
    o.isValid = true;
    return [b, E];
  }
  static wasHorizontallyBlockedByEliminatedTiles(e, t) {
    var o, n;
    try {
      for (var r = __values(t), a = r.next(); !a.done; a = r.next()) {
        var l = a.value,
          s = [[e.gridPosX - 2, e.gridPosY - 1].join("_"), [e.gridPosX - 2, e.gridPosY].join("_"), [e.gridPosX - 2, e.gridPosY + 1].join("_")],
          c = [[e.gridPosX + 2, e.gridPosY - 1].join("_"), [e.gridPosX + 2, e.gridPosY].join("_"), [e.gridPosX + 2, e.gridPosY + 1].join("_")],
          u = [l.gridPosX, l.gridPosY].join("_");
        if (s.includes(u) || c.includes(u)) return true;
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        a && !a.done && (n = r.return) && n.call(r);
      } finally {
        if (o) throw o.error;
      }
    }
    return false;
  }
  static wasVerticallyBlockedByEliminatedTiles(e, t) {
    var o, n;
    try {
      for (var r = __values(t), a = r.next(); !a.done; a = r.next()) {
        var l = a.value;
        if (!(l.layer <= e.layer)) {
          var s = Math.max(e.gridPosX, l.gridPosX),
            c = Math.min(e.gridPosX + 2, l.gridPosX + 2),
            u = Math.max(e.gridPosY, l.gridPosY),
            p = Math.min(e.gridPosY + 2, l.gridPosY + 2);
          if (s < c && u < p) return true;
        }
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        a && !a.done && (n = r.return) && n.call(r);
      } finally {
        if (o) throw o.error;
      }
    }
    return false;
  }
  static countOperationalPairs(e) {
    var t,
      o,
      n = e.tileObjectMap(),
      a = {};
    try {
      for (var l = __values(n), s = l.next(); !s.done; s = l.next()) {
        var c = __read(s.value, 2),
          u = (c[0], c[1]);
        if (u.isValid && 0 === u.isCardLock()) {
          a[u.cardId] || (a[u.cardId] = 0);
          a[u.cardId]++;
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (o = l.return) && o.call(l);
      } finally {
        if (t) throw t.error;
      }
    }
    var p = 0;
    for (var f in a) {
      var d = a[f];
      p += Math.floor(d / 2);
    }
    return p;
  }
  static countMovableTiles(e) {
    var t,
      o,
      n = e.tileObjectMap(),
      a = 0;
    try {
      for (var l = __values(n), s = l.next(); !s.done; s = l.next()) {
        var c = __read(s.value, 2),
          u = (c[0], c[1]);
        u.isValid && 0 === u.isCardLock() && a++;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (o = l.return) && o.call(l);
      } finally {
        if (t) throw t.error;
      }
    }
    return a;
  }
  static countVisibleTiles(e) {
    var t,
      o,
      n = e.tileObjectMap(),
      a = 0;
    try {
      for (var s = __values(n), c = s.next(); !c.done; c = s.next()) {
        var u = __read(c.value, 2),
          p = (u[0], u[1]);
        e.isHasVisible(p) !== ETileVisible.None && a++;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        c && !c.done && (o = s.return) && o.call(s);
      } finally {
        if (t) throw t.error;
      }
    }
    return a;
  }
  static countTotallyVisibleTiles(e) {
    var t,
      o,
      n = e.tileObjectMap(),
      a = 0;
    try {
      for (var s = __values(n), c = s.next(); !c.done; c = s.next()) {
        var u = __read(c.value, 2),
          p = (u[0], u[1]);
        e.isHasVisible(p) === ETileVisible.All && a++;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        c && !c.done && (o = s.return) && o.call(s);
      } finally {
        if (t) throw t.error;
      }
    }
    return a;
  }
  static calculateOpPairsChange(e, t, o) {
    var n = this.countOperationalPairs(e);
    t.isValid = false;
    o.isValid = false;
    var i = this.countOperationalPairs(e);
    t.isValid = true;
    o.isValid = true;
    return i - n;
  }
}