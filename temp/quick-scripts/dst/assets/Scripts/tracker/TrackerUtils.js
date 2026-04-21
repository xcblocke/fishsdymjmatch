
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tracker/TrackerUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a0aaJTKpFNYpWYOho0BPDU', 'TrackerUtils');
// Scripts/tracker/TrackerUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameMoveStep_1 = require("../gamePlay/dot/DGameMoveStep");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var TrackerInterface_1 = require("./TrackerInterface");
var TrackerUtils = /** @class */ (function () {
    function TrackerUtils() {
    }
    TrackerUtils.id2position = function (e) {
        return e ? e.split("-").map(Number) : [0, 0, 0];
    };
    TrackerUtils.position2id = function (e) {
        return e ? e.join("-") : "";
    };
    TrackerUtils.object2position = function (e) {
        return e ? [e.gridPosX, e.gridPosY, e.layer] : [0, 0, 0];
    };
    TrackerUtils.getExposedPairInfo = function (e) {
        var t, o, n, a, l = {}, s = e.tileObjectMap();
        try {
            for (var c = __values(s), u = c.next(); !u.done; u = c.next()) {
                var p = __read(u.value, 2), f = (p[0], p[1]);
                l[f.cardId] || (l[f.cardId] = {
                    moveAble: [],
                    nonMoveAble: []
                });
                f.isValid && (0 === f.isCardLock() ? l[f.cardId].moveAble.push(f) : l[f.cardId].nonMoveAble.push(f));
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (o = c.return) && o.call(c);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var d = {};
        for (var h in l) {
            var y = l[h].moveAble, m = l[h].nonMoveAble;
            if (1 === y.length)
                try {
                    for (var v = (n = void 0, __values(m)), g = v.next(); !g.done; g = v.next()) {
                        var _ = g.value;
                        d[_.id] = _.cardId;
                    }
                }
                catch (e) {
                    n = {
                        error: e
                    };
                }
                finally {
                    try {
                        g && !g.done && (a = v.return) && a.call(v);
                    }
                    finally {
                        if (n)
                            throw n.error;
                    }
                }
        }
        return d;
    };
    TrackerUtils.getHalfExposedPairInfo = function (e) {
        var t = this.getExposedPairInfo(e), o = {};
        for (var n in t) {
            var i = e.getTileObject(n), r = t[n];
            i && e.isHasVisible(i) !== TileTypeEnum_1.ETileVisible.None && (o[n] = r);
        }
        return o;
    };
    TrackerUtils.getBlockingTileInfo = function (e) {
        var t = this.getHalfExposedPairInfo(e), o = {};
        for (var n in t) {
            var i = e.getTileObject(n), r = t[n];
            i && e.isHasCover(i) && (o[n] = r);
        }
        return o;
    };
    TrackerUtils.getLeftFreeRightCnt = function (e) {
        var t, o, n = 0, a = e.tileObjectMap();
        try {
            for (var l = __values(a), s = l.next(); !s.done; s = l.next()) {
                var c = __read(s.value, 2), u = (c[0], c[1]);
                if (u.isValid && 0 === u.isCardLock()) {
                    var p = u.isHasLeft(), f = u.isHasRight();
                    !p && f && n++;
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (o = l.return) && o.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return n;
    };
    TrackerUtils.getRightFreeLeftCnt = function (e) {
        var t, o, n = 0, a = e.tileObjectMap();
        try {
            for (var l = __values(a), s = l.next(); !s.done; s = l.next()) {
                var c = __read(s.value, 2), u = (c[0], c[1]);
                if (u.isValid && 0 === u.isCardLock()) {
                    var p = u.isHasLeft(), f = u.isHasRight();
                    p && !f && n++;
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (o = l.return) && o.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return n;
    };
    TrackerUtils.getBothSidesFreeCnt = function (e) {
        var t, o, n = 0, a = e.tileObjectMap();
        try {
            for (var l = __values(a), s = l.next(); !s.done; s = l.next()) {
                var c = __read(s.value, 2), u = (c[0], c[1]);
                if (u.isValid && 0 === u.isCardLock()) {
                    var p = u.isHasLeft(), f = u.isHasRight();
                    p || f || n++;
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (o = l.return) && o.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return n;
    };
    TrackerUtils.getPairsStepsArray = function (e) {
        var t = [], o = e.getGameTracker();
        if (!o)
            return [];
        var n = o.halfExposedSteps, i = o.initialHalfExposedPositions;
        for (var r in n) {
            var a = n[r];
            if (i[r]) {
                var l = i[r];
                t.push(l + ":" + a);
            }
        }
        return t;
    };
    TrackerUtils.getPairsStepsArrayIni = function (e) {
        var t = [], o = e.getGameTracker();
        if (!o)
            return [];
        var n = o.halfExposedSteps, i = o.initialHalfExposedPositions;
        for (var a in n) {
            var l = n[a];
            if (i[a]) {
                var s = i[a], c = __read(this.id2position(a), 3), u = c[0], p = c[1], f = c[2];
                t.push({
                    position: "[" + u + ", " + p + ", " + f + "]",
                    element_id: s,
                    step: l
                });
            }
        }
        return t;
    };
    TrackerUtils.getPairsStepsArrayCrush = function (e) {
        var t = e.getGameTracker();
        return t ? t.pairsCrushRecords.concat() : [];
    };
    TrackerUtils.getPairsStepsArrayOp = function (e) {
        var t = e.getGameTracker();
        return t ? t.pairsOpRecords.concat() : [];
    };
    TrackerUtils.getProcessTime = function (e) {
        var t = e.getGameData().getTotalTileCount(), o = e.getGameData().getClearTileCount();
        return 0 === t ? 1 : Number((o / t).toFixed(2));
    };
    TrackerUtils.startGameTracking = function (t, o) {
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
            var i = TrackerUtils.getHalfExposedPairInfo(o), r = n.initialHalfExposedPositions, a = n.initHalfExposedTiles;
            for (var l in i) {
                r[l] = i[l];
                a.push(l);
            }
            n.initHalfExposedTiles = a;
            n.initialHalfExposedPositions = r;
            TrackerUtils.recordInitialMovableTiles(t, o);
        }
    };
    TrackerUtils.recordInitialMovableTiles = function (e, t) {
        var o, n, a = e.getGameTracker();
        if (a) {
            var l = a.tileMovableStep, s = t.tileObjectMap();
            try {
                for (var c = __values(s), u = c.next(); !u.done; u = c.next()) {
                    var p = __read(u.value, 2), f = (p[0], p[1]);
                    f.isValid && 0 === f.isCardLock() && (l[f.id] = 0);
                }
            }
            catch (e) {
                o = {
                    error: e
                };
            }
            finally {
                try {
                    u && !u.done && (n = c.return) && n.call(c);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
            a.tileMovableStep = l;
            this.checkAndRecordOpPairs(e, t, 0);
        }
    };
    TrackerUtils.updateMovableTracking = function (e, t, o) {
        var n, a, l = e.getGameTracker();
        if (l) {
            var s = l.tileMovableStep, c = t.tileObjectMap();
            try {
                for (var u = __values(c), p = u.next(); !p.done; p = u.next()) {
                    var f = __read(p.value, 2), d = (f[0], f[1]);
                    !s[d.id] && d.isValid && 0 === d.isCardLock() && (s[d.id] = o);
                }
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    p && !p.done && (a = u.return) && a.call(u);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
            l.tileMovableStep = s;
            this.checkAndRecordOpPairs(e, t, o);
        }
    };
    TrackerUtils.checkAndRecordOpPairs = function (e, t, o) {
        var n, a, l, s, c, u, p = e.getGameTracker();
        if (p) {
            var f = new Map(), d = t.tileObjectMap();
            try {
                for (var h = __values(d), y = h.next(); !y.done; y = h.next()) {
                    var m = __read(y.value, 2), v = (m[0], m[1]);
                    if (v.isValid && 0 === v.isCardLock()) {
                        f.has(v.cardId) || f.set(v.cardId, []);
                        f.get(v.cardId).push(v.id);
                    }
                }
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    y && !y.done && (a = h.return) && a.call(h);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
            var g = p.recordedOpPairs, _ = p.pairsOpRecords, T = p.tileMovableStep;
            try {
                for (var C = __values(f), b = C.next(); !b.done; b = C.next()) {
                    var E = __read(b.value, 2), S = E[0], I = E[1];
                    if (I.length >= 2)
                        for (var w = 0; w < I.length; w++)
                            for (var B = w + 1; B < I.length; B++) {
                                var x = I[w], M = I[B], O = [x, M].sort().join("#");
                                if (!g.includes(O)) {
                                    var D = null !== (c = T[x]) && void 0 !== c ? c : o, P = null !== (u = T[M]) && void 0 !== u ? u : o, A = o - Math.min(D, P);
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
            }
            catch (e) {
                l = {
                    error: e
                };
            }
            finally {
                try {
                    b && !b.done && (s = C.return) && s.call(C);
                }
                finally {
                    if (l)
                        throw l.error;
                }
            }
            p.recordedOpPairs = g;
            p.pairsOpRecords = _;
        }
    };
    TrackerUtils.recordStep = function (e, t, o) {
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
    };
    TrackerUtils.cachePairsCrushRecords = function (e, t, o) {
        var n, i, r = e.getGameTracker();
        if (r) {
            var a = r.tileMovableStep, l = null !== (n = a[o.tileId1]) && void 0 !== n ? n : t, s = null !== (i = a[o.tileId2]) && void 0 !== i ? i : t, c = t - Math.min(l, s), u = r.pairsCrushRecords, p = {
                position1: o.tileId1,
                position2: o.tileId2,
                element_id: o.typeId,
                steps: c
            };
            u.push(p);
            r.pairsCrushRecords = u;
        }
    };
    TrackerUtils.cacheEliminatedPairs = function (e, t) {
        var o = e.getGameTracker();
        if (o) {
            var n = o.eliminatedPairs;
            n.push({
                tile1: t.tileId1,
                tile2: t.tileId2
            });
            o.eliminatedPairs = n;
        }
    };
    TrackerUtils.cacheGameStepData = function (e, t, o, n) {
        var i = e.getGameTracker();
        if (i) {
            var r = t.getCurTilesCnt(), a = t.getCanMatchCardPairNum(), l = i.gameSteps, s = {
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
    };
    TrackerUtils.updateHalfExposedSteps = function (e, t, o, n) {
        var r, a, l = e.getGameTracker();
        if (l) {
            var s = l.initHalfExposedTiles, c = l.halfExposedSteps;
            try {
                for (var u = __values([n.tileId1, n.tileId2]), p = u.next(); !p.done; p = u.next()) {
                    var f = p.value;
                    s.includes(f) && (c[f] = o);
                }
            }
            catch (e) {
                r = {
                    error: e
                };
            }
            finally {
                try {
                    p && !p.done && (a = u.return) && a.call(u);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            l.halfExposedSteps = c;
        }
    };
    TrackerUtils.updateReleasedPositions = function (e, t, o, n) {
        var a, l, s, c, u = e.getGameTracker();
        if (u) {
            var p = t.tileObjectMap(), f = t.getTileObject(n.tileId1), d = t.getTileObject(n.tileId2);
            if (f && d) {
                var h = [];
                try {
                    for (var y = __values(p), m = y.next(); !m.done; m = y.next()) {
                        var v = __read(m.value, 2);
                        v[0];
                        (C = v[1]).isValid && 0 === C.isCardLock() && h.push(C.id);
                    }
                }
                catch (e) {
                    a = {
                        error: e
                    };
                }
                finally {
                    try {
                        m && !m.done && (l = y.return) && l.call(y);
                    }
                    finally {
                        if (a)
                            throw a.error;
                    }
                }
                f.isValid = false;
                d.isValid = false;
                var g = [];
                try {
                    for (var _ = __values(p), T = _.next(); !T.done; T = _.next()) {
                        var C, b = __read(T.value, 2);
                        b[0];
                        (C = b[1]).isValid && 0 === C.isCardLock() && g.push(C.id);
                    }
                }
                catch (e) {
                    s = {
                        error: e
                    };
                }
                finally {
                    try {
                        T && !T.done && (c = _.return) && c.call(_);
                    }
                    finally {
                        if (s)
                            throw s.error;
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
    };
    TrackerUtils.generateStepAnalytics = function (e, t, o, n) {
        var i = n.tileId1, r = n.tileId2, a = n.clear, s = Date.now(), c = e.getGameTracker();
        if (c) {
            var u = c.lastStepTime <= 0 ? 0 : s - c.lastStepTime;
            c.lastStepTime = s;
            var p = t.getTileObject(i), f = t.getTileObject(r), d = this.getPairCoordinate(t, i, r), h = this.getCurrentBoardDimension(t);
            p.isValid = false;
            f.isValid = false;
            var y = this.findMatchingPairs(t);
            p.isValid = true;
            f.isValid = true;
            var m = 0 === y.length ? 1 : 0, v = p.cardId, g = this.countOperationalPairs(t), _ = this.countMovableTiles(t), T = c.cmds.concat().reverse(), C = this.getPreErrClicks(T, o), b = this.getRearrangedUsage(T, o), E = b.rearrangedUsageCount, S = b.rearrangedBoards, I = this.getPromptUsage(t, T, o), w = I.promptUsageCount, B = I.promptBlockMahjong, x = this.getClearStep(T, a), M = [];
            p.type === TileTypeEnum_1.ETileType.RollCard && M.push(p.id);
            f.type === TileTypeEnum_1.ETileType.RollCard && M.push(f.id);
            var O = M.join(";"), D = this.getBlockStatusPositionList(t), P = {
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
    };
    TrackerUtils.cacheStepAnalytic = function (e, t) {
        var o = e.getGameTracker();
        if (o) {
            var n = o.stepAnalytics;
            n.push(t);
            o.stepAnalytics = n;
        }
    };
    TrackerUtils.dotGameMoveStep = function (e, t) {
        DGameMoveStep_1.DotGameMoveStep.dot(e, t);
    };
    TrackerUtils.getPairCoordinate = function (e, t, o) {
        var n, i, a = {}, l = e.getTileObject(t), s = e.getTileObject(o), c = __read(this.object2position(l), 3), u = c[0], p = c[1], f = c[2], d = __read(this.object2position(s), 3), h = "[" + d[0] + "," + d[1] + "," + d[2] + "]";
        a["[" + u + "," + p + "," + f + "]"] = null !== (n = null == l ? void 0 : l.cardId) && void 0 !== n ? n : 0;
        a[h] = null !== (i = null == s ? void 0 : s.cardId) && void 0 !== i ? i : 0;
        return a;
    };
    TrackerUtils.getBlockMahjongIdNum = function (e, t) {
        var o, n, a = e.tileObjectMap(), l = 0;
        try {
            for (var s = __values(a), c = s.next(); !c.done; c = s.next()) {
                var u = __read(c.value, 2), p = (u[0], u[1]);
                p.cardId === t && p.isValid && 0 === p.isCardLock() && l++;
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (n = s.return) && n.call(s);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return l;
    };
    TrackerUtils.addComplexData = function (e, t, o, n, i) {
        var a = t.getGameTracker();
        if (a) {
            var l = o.getTileObject(i.tileId1), s = o.getTileObject(i.tileId2), c = __read(this.object2position(l), 3), u = c[0], p = c[1], f = c[2], d = __read(this.object2position(s), 3), h = d[0], y = d[1], m = d[2], v = this.position2id([u, p, f]), g = this.position2id([h, y, m]), _ = l.cardId, T = this.getBlockMahjongIdNum(o, _);
            e.block_mahjong_id_num = T;
            var C = Number(Math.sqrt(Math.pow(h - u, 2) + Math.pow(y - p, 2)).toFixed(2));
            e.pair_distance = C;
            var b = 0;
            (a.prevReleasedPosition.includes(v) || a.prevReleasedPosition.includes(g)) && (b = 1);
            e.is_prev_rel_flag = b;
            var E = [v, g], S = a.prevStepTiles, I = this.calculateVisualDistance(E, S);
            e.prev_vis_dist = I;
            a.prevStepTiles = E;
            var w = this.calculatePotentialOptions(o, _);
            e.potential_option = w;
            var B = __read(this.calculateReleaseCategories(o, l, s), 2), x = B[0], M = B[1];
            e.hor_rel_blocks = x;
            e.z_rel_blocks = M;
            var O = this.countVisibleTiles(o);
            e.pre_vis_blocks = O;
            var D = this.countTotallyVisibleTiles(o);
            e.pre_totalvis_blocks = D;
            var P = this.calculateOpPairsChange(o, l, s);
            e.op_pairs_cnt = P;
        }
    };
    TrackerUtils.getBlockStatusPositionList = function (e) {
        var t, o, n = e.tileObjectMap(), a = [];
        try {
            for (var c = __values(n), u = c.next(); !u.done; u = c.next()) {
                var p = __read(u.value, 2), f = (p[0], p[1]);
                if (f.isValid) {
                    var d = TrackerInterface_1.EBlockStatus.Invisible;
                    if (0 === f.isCardLock())
                        d = TrackerInterface_1.EBlockStatus.Movable;
                    else {
                        var h = e.isHasVisible(f);
                        h !== TileTypeEnum_1.ETileVisible.None && (d = h === TileTypeEnum_1.ETileVisible.All ? TrackerInterface_1.EBlockStatus.FullVisible : TrackerInterface_1.EBlockStatus.PartialVisible);
                    }
                    var y = __read(this.object2position(f), 3), m = y[0], v = y[1], g = y[2];
                    a.push({
                        suit: f.cardId,
                        status: d,
                        pos: this.position2id([m, v, g])
                    });
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (o = c.return) && o.call(c);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return a;
    };
    TrackerUtils.getPreErrClicks = function (e, t) {
        return e.filter(function (e) {
            return e.cmd === TrackerInterface_1.EGameStepCmd.Invalid && e.stepId === t - 1;
        }).length;
    };
    TrackerUtils.getRearrangedUsage = function (e, t) {
        var o = e.filter(function (e) {
            return e.cmd === TrackerInterface_1.EGameStepCmd.Shuffle && e.stepId === t - 1;
        });
        return {
            rearrangedUsageCount: o.length,
            rearrangedBoards: o.map(function (e) {
                return e.boardAfter;
            }).reverse()
        };
    };
    TrackerUtils.getPromptUsage = function (e, t, o) {
        var n = t.find(function (e) {
            return e.cmd === TrackerInterface_1.EGameStepCmd.Hint && e.stepId < o;
        }), i = 0, a = [];
        if (n) {
            var l = e.getTileObject(n.tileId1), c = e.getTileObject(n.tileId2);
            if (l && c && l.isValid && c.isValid) {
                i = 1;
                var u = __read(this.object2position(l), 3), p = u[0], f = u[1], d = u[2], h = __read(this.object2position(c), 3), y = "[" + p + "," + f + "," + d + "]", m = "[" + h[0] + "," + h[1] + "," + h[2] + "]";
                a.push(y + ":" + l.cardId);
                a.push(m + ":" + c.cardId);
            }
        }
        return {
            promptUsageCount: i,
            promptBlockMahjong: a
        };
    };
    TrackerUtils.getClearStep = function (e, t) {
        var o, n, r = 1;
        if (t == TrackerInterface_1.EClearType.Single || t == TrackerInterface_1.EClearType.Multi || t == TrackerInterface_1.EClearType.Drag)
            return r;
        try {
            for (var a = __values(e), l = a.next(); !l.done; l = a.next()) {
                var c = l.value;
                if (c.cmd === TrackerInterface_1.EGameStepCmd.KillPair || c.cmd === TrackerInterface_1.EGameStepCmd.AutoMerge) {
                    if (c.clear !== t)
                        break;
                    r++;
                }
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (n = a.return) && n.call(a);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return r;
    };
    TrackerUtils.calculateVisualDistance = function (e, t) {
        var o = this;
        if (!t || 2 !== t.length)
            return 0;
        var n = __read(e.map(function (e) {
            return o.id2position(e);
        }), 2), i = n[0], a = n[1], l = __read(t.map(function (e) {
            return o.id2position(e);
        }), 2), s = l[0], c = l[1], u = Math.sqrt(Math.pow(i[0] - s[0], 2) + Math.pow(i[1] - s[1], 2)) + Math.sqrt(Math.pow(a[0] - c[0], 2) + Math.pow(a[1] - c[1], 2)), p = Math.sqrt(Math.pow(a[0] - s[0], 2) + Math.pow(a[1] - s[1], 2)) + Math.sqrt(Math.pow(c[0] - i[0], 2) + Math.pow(c[1] - i[1], 2)), f = Math.min(u, p);
        return Number(f.toFixed(2));
    };
    TrackerUtils.calculatePotentialOptions = function (e, t) {
        var o, n, a, l, s = e.tileObjectMap(), c = [], u = [];
        try {
            for (var p = __values(s), f = p.next(); !f.done; f = p.next()) {
                var d = __read(f.value, 2), h = (d[0], d[1]);
                if (h.isValid && 0 === h.isCardLock()) {
                    c.push(h.id);
                    h.cardId === t && u.push(h);
                }
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (n = p.return) && n.call(p);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        var y = {}, m = function m(e) {
            var t, o, n = "[" + e.gridPosX + "," + e.gridPosY + "," + e.layer + "]";
            e.isValid = false;
            var a = [];
            try {
                for (var l = (t = void 0, __values(s)), u = l.next(); !u.done; u = l.next()) {
                    var p = __read(u.value, 2), f = (p[0], p[1]);
                    f.isValid && 0 === f.isCardLock() && a.push(f.id);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    u && !u.done && (o = l.return) && o.call(l);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            e.isValid = true;
            var d = a.filter(function (t) {
                return !c.includes(t) && t !== e.id;
            }).length;
            y[n] = d;
        };
        try {
            for (var v = __values(u), g = v.next(); !g.done; g = v.next())
                m(g.value);
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                g && !g.done && (l = v.return) && l.call(v);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        return y;
    };
    TrackerUtils.generateCurrentBoardString = function (e) {
        var t, o, n, r, a, l, s = [], c = [], u = e.mapLayers();
        try {
            for (var p = __values(u), f = p.next(); !f.done; f = p.next()) {
                var d = f.value, h = [], y = d.allCards.concat(), m = {}, v = [];
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
                }
                catch (e) {
                    n = {
                        error: e
                    };
                }
                finally {
                    try {
                        _ && !_.done && (r = g.return) && r.call(g);
                    }
                    finally {
                        if (n)
                            throw n.error;
                    }
                }
                v.sort(function (e, t) {
                    return e - t;
                });
                try {
                    for (var C = (a = void 0, __values(v)), b = C.next(); !b.done; b = C.next()) {
                        var E = b.value, S = m[E];
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
                }
                catch (e) {
                    a = {
                        error: e
                    };
                }
                finally {
                    try {
                        b && !b.done && (l = C.return) && l.call(C);
                    }
                    finally {
                        if (a)
                            throw a.error;
                    }
                }
                if (h.length > 0) {
                    var B;
                    B = 1 === h.length ? "" + d.layerIndex + h[0] : "" + d.layerIndex + h[0] + "." + h.slice(1).join(".");
                    s.push(B);
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (o = p.return) && o.call(p);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return s.join(";") + ":" + c.join("");
    };
    TrackerUtils.getCurrentBoardDimension = function (e) {
        var t, o, n = 0, a = 0, l = 0;
        try {
            for (var s = __values(e.tileObjectMap()), c = s.next(); !c.done; c = s.next()) {
                var u = __read(c.value, 2), p = (u[0], u[1]);
                if (p.isValid) {
                    n = Math.max(n, p.gridPosX);
                    a = Math.max(a, p.gridPosY);
                    l = Math.max(l, p.layer);
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (o = s.return) && o.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return [n + 2, a + 2, l];
    };
    TrackerUtils.findMatchingPairs = function (e) {
        var t, o, n = e.tileObjectMap(), a = [];
        try {
            for (var l = __values(n), s = l.next(); !s.done; s = l.next()) {
                var c = __read(s.value, 2), u = (c[0], c[1]);
                u.isValid && 0 === u.isCardLock() && a.push(u);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (o = l.return) && o.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        for (var p = [], f = 0; f < a.length; f++)
            for (var d = f + 1; d < a.length; d++) {
                var h = a[f], y = a[d];
                h.cardId === y.cardId && p.push([h.id, y.id]);
            }
        return p;
    };
    TrackerUtils.calculateReleaseCategories = function (e, t, o) {
        var n, a, l, s, c, u, p = [], f = e.tileObjectMap();
        try {
            for (var d = __values(f), h = d.next(); !h.done; h = d.next()) {
                var y = __read(h.value, 2);
                y[0];
                (_ = y[1]).isValid && 0 === _.isCardLock() && p.push(_.id);
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                h && !h.done && (a = d.return) && a.call(d);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        t.isValid = false;
        o.isValid = false;
        var m = [];
        try {
            for (var v = __values(f), g = v.next(); !g.done; g = v.next()) {
                var _, T = __read(g.value, 2);
                T[0];
                (_ = T[1]).isValid && 0 === _.isCardLock() && m.push(_.id);
            }
        }
        catch (e) {
            l = {
                error: e
            };
        }
        finally {
            try {
                g && !g.done && (s = v.return) && s.call(v);
            }
            finally {
                if (l)
                    throw l.error;
            }
        }
        var C = m.filter(function (e) {
            return !p.includes(e);
        }), b = 0, E = 0;
        try {
            for (var S = __values(C), I = S.next(); !I.done; I = S.next()) {
                var w = I.value, B = f.get(w);
                if (B) {
                    var x = this.wasHorizontallyBlockedByEliminatedTiles(B, [t, o]), M = this.wasVerticallyBlockedByEliminatedTiles(B, [t, o]);
                    x && b++;
                    M && E++;
                }
            }
        }
        catch (e) {
            c = {
                error: e
            };
        }
        finally {
            try {
                I && !I.done && (u = S.return) && u.call(S);
            }
            finally {
                if (c)
                    throw c.error;
            }
        }
        t.isValid = true;
        o.isValid = true;
        return [b, E];
    };
    TrackerUtils.wasHorizontallyBlockedByEliminatedTiles = function (e, t) {
        var o, n;
        try {
            for (var r = __values(t), a = r.next(); !a.done; a = r.next()) {
                var l = a.value, s = [[e.gridPosX - 2, e.gridPosY - 1].join("_"), [e.gridPosX - 2, e.gridPosY].join("_"), [e.gridPosX - 2, e.gridPosY + 1].join("_")], c = [[e.gridPosX + 2, e.gridPosY - 1].join("_"), [e.gridPosX + 2, e.gridPosY].join("_"), [e.gridPosX + 2, e.gridPosY + 1].join("_")], u = [l.gridPosX, l.gridPosY].join("_");
                if (s.includes(u) || c.includes(u))
                    return true;
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (n = r.return) && n.call(r);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return false;
    };
    TrackerUtils.wasVerticallyBlockedByEliminatedTiles = function (e, t) {
        var o, n;
        try {
            for (var r = __values(t), a = r.next(); !a.done; a = r.next()) {
                var l = a.value;
                if (!(l.layer <= e.layer)) {
                    var s = Math.max(e.gridPosX, l.gridPosX), c = Math.min(e.gridPosX + 2, l.gridPosX + 2), u = Math.max(e.gridPosY, l.gridPosY), p = Math.min(e.gridPosY + 2, l.gridPosY + 2);
                    if (s < c && u < p)
                        return true;
                }
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (n = r.return) && n.call(r);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return false;
    };
    TrackerUtils.countOperationalPairs = function (e) {
        var t, o, n = e.tileObjectMap(), a = {};
        try {
            for (var l = __values(n), s = l.next(); !s.done; s = l.next()) {
                var c = __read(s.value, 2), u = (c[0], c[1]);
                if (u.isValid && 0 === u.isCardLock()) {
                    a[u.cardId] || (a[u.cardId] = 0);
                    a[u.cardId]++;
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (o = l.return) && o.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var p = 0;
        for (var f in a) {
            var d = a[f];
            p += Math.floor(d / 2);
        }
        return p;
    };
    TrackerUtils.countMovableTiles = function (e) {
        var t, o, n = e.tileObjectMap(), a = 0;
        try {
            for (var l = __values(n), s = l.next(); !s.done; s = l.next()) {
                var c = __read(s.value, 2), u = (c[0], c[1]);
                u.isValid && 0 === u.isCardLock() && a++;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (o = l.return) && o.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return a;
    };
    TrackerUtils.countVisibleTiles = function (e) {
        var t, o, n = e.tileObjectMap(), a = 0;
        try {
            for (var s = __values(n), c = s.next(); !c.done; c = s.next()) {
                var u = __read(c.value, 2), p = (u[0], u[1]);
                e.isHasVisible(p) !== TileTypeEnum_1.ETileVisible.None && a++;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (o = s.return) && o.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return a;
    };
    TrackerUtils.countTotallyVisibleTiles = function (e) {
        var t, o, n = e.tileObjectMap(), a = 0;
        try {
            for (var s = __values(n), c = s.next(); !c.done; c = s.next()) {
                var u = __read(c.value, 2), p = (u[0], u[1]);
                e.isHasVisible(p) === TileTypeEnum_1.ETileVisible.All && a++;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (o = s.return) && o.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return a;
    };
    TrackerUtils.calculateOpPairsChange = function (e, t, o) {
        var n = this.countOperationalPairs(e);
        t.isValid = false;
        o.isValid = false;
        var i = this.countOperationalPairs(e);
        t.isValid = true;
        o.isValid = true;
        return i - n;
    };
    __decorate([
        mj.traitEvent("TrackerUtils_cheElimPair")
    ], TrackerUtils, "cacheEliminatedPairs", null);
    __decorate([
        mj.traitEvent("TrackerUtils_cheGmStep")
    ], TrackerUtils, "cacheGameStepData", null);
    __decorate([
        mj.traitEvent("TrackerUtils_upRelPos")
    ], TrackerUtils, "updateReleasedPositions", null);
    __decorate([
        mj.traitEvent("TrackerUtils_cacheStepAly")
    ], TrackerUtils, "cacheStepAnalytic", null);
    __decorate([
        mj.traitEvent("TrackerUtils_dotGmStep")
    ], TrackerUtils, "dotGameMoveStep", null);
    __decorate([
        mj.traitEvent("TrackerUtils_pairCoord")
    ], TrackerUtils, "getPairCoordinate", null);
    __decorate([
        mj.traitEvent("TrackerUtils_addComplex")
    ], TrackerUtils, "addComplexData", null);
    __decorate([
        mj.traitEvent("TrackerUtils_blockStatus")
    ], TrackerUtils, "getBlockStatusPositionList", null);
    return TrackerUtils;
}());
exports.default = TrackerUtils;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3RyYWNrZXIvVHJhY2tlclV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBZ0U7QUFDaEUsbUVBQTZFO0FBQzdFLHVEQUE0RTtBQUM1RTtJQUFBO0lBeXZDQSxDQUFDO0lBeHZDUSx3QkFBVyxHQUFsQixVQUFtQixDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDTSx3QkFBVyxHQUFsQixVQUFtQixDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNNLDRCQUFlLEdBQXRCLFVBQXVCLENBQUM7UUFDdEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDTSwrQkFBa0IsR0FBekIsVUFBMEIsQ0FBQztRQUN6QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsRUFBRSxFQUNOLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxD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TUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3RDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDakQsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ00saUNBQW9CLEdBQTNCLFVBQTRCLENBQUMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUs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QyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNuSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ25JLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNNLHNDQUF5QixHQUFoQyxVQUFpQyxDQUFDLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUNyQixDQUFDLEdBQUcsRUFBRSxFQUNOLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDVCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7b0JBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNiLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdCO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELElBQUksQ0FBQyxHQUFHLEVBQUUsRUFDUixDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2hFLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLElBQUk7Z0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUMzRSxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuQixDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ25EO2FBQ0Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixDQUFDLEdBQUc7b0JBQ0YsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQzthQUNIO29CQUFTO2dCQUNSLElBQUk7b0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7d0JBQVM7b0JBQ1IsSUFBSSxDQUFDO3dCQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDdEI7YUFDRjtZQUNELENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUMxQixPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDO1FBQ0osSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0U7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTSx1Q0FBMEIsR0FBakMsVUFBa0MsQ0FBQztRQUNqQyxJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxFQUFFLEVBQ04sQ0FBQyxHQUFHLEVBQUUsRUFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3BCLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNiLENBQUMsR0FBRyxFQUFFLEVBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQ3ZCLENBQUMsR0FBRyxFQUFFLEVBQ04sQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDVCxJQUFJO29CQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFDM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDaEIsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFOzRCQUNiLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dDQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQ0FDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7NkJBQ3BCOzRCQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUN2QjtxQkFDRjtpQkFDRjtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixDQUFDLEdBQUc7d0JBQ0YsS0FBSyxFQUFFLENBQUM7cUJBQ1QsQ0FBQztpQkFDSDt3QkFBUztvQkFDUixJQUFJO3dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzdDOzRCQUFTO3dCQUNSLElBQUksQ0FBQzs0QkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7cUJBQ3RCO2lCQUNGO2dCQUNELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUk7b0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO3dCQUMzRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDOzRCQUNuQixPQUFPLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQzt3QkFDakMsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs0QkFDaEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDOzRCQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0NBQ2pDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQ0FDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7NkJBQ3JCOzRCQUNELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ1g7cUJBQ0Y7aUJBQ0Y7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ1YsQ0FBQyxHQUFHO3dCQUNGLEtBQUssRUFBRSxDQUFDO3FCQUNULENBQUM7aUJBQ0g7d0JBQVM7b0JBQ1IsSUFBSTt3QkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM3Qzs0QkFBUzt3QkFDUixJQUFJLENBQUM7NEJBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO3FCQUN0QjtpQkFDRjtnQkFDRCxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNoQixJQUFJLENBQUMsQ0FBQztvQkFDTixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDWDthQUNGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNNLHFDQUF3QixHQUEvQixVQUFnQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxDQUFDLEVBQ0wsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNSLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RSxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7b0JBQ2IsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDNUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDNUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDMUI7YUFDRjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ00sOEJBQWlCLEdBQXhCLFVBQXlCLENBQUM7UUFDeEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQ3JCLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDVCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEQ7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1lBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNoRixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDL0M7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTSx1Q0FBMEIsR0FBakMsVUFBa0MsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLEVBQUUsRUFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hCLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzVEO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNsQixDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDNUQ7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxFQUNGLENBQUMsR0FBRyxDQUFDLEVBQ0wsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNSLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxFQUFFO29CQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDN0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUQsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO29CQUNULENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztpQkFDVjthQUNGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNqQixDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDTSxvREFBdUMsR0FBOUMsVUFBK0MsQ0FBQyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNwSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ3BJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUFFLE9BQU8sSUFBSSxDQUFDO2FBQ2pEO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDTSxrREFBcUMsR0FBNUMsVUFBNkMsQ0FBQyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN6QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUN0QyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUM1QyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFDcEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUFFLE9BQU8sSUFBSSxDQUFDO2lCQUNqQzthQUNGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDTSxrQ0FBcUIsR0FBNUIsVUFBNkIsQ0FBQztRQUM1QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFDckIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNULElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtvQkFDckMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztpQkFDZjthQUNGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4QjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNNLDhCQUFpQixHQUF4QixVQUF5QixDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUMxQztTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ00sOEJBQWlCLEdBQXhCLFVBQXlCLENBQUM7UUFDeEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSywyQkFBWSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNoRDtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ00scUNBQXdCLEdBQS9CLFVBQWdDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSywyQkFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUMvQztTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ00sbUNBQXNCLEdBQTdCLFVBQThCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbEIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFoMkJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQztrREFXekM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7K0NBbUJ2QztJQTRCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7cURBMkR0QztJQWlFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7K0NBUTFDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzZDQUd2QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzsrQ0FnQnZDO0lBMEJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQzs0Q0EyQ3hDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDO3dEQXVDekM7SUFvaUJILG1CQUFDO0NBenZDRCxBQXl2Q0MsSUFBQTtrQkF6dkNvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG90R2FtZU1vdmVTdGVwIH0gZnJvbSAnLi4vZ2FtZVBsYXkvZG90L0RHYW1lTW92ZVN0ZXAnO1xuaW1wb3J0IHsgRVRpbGVWaXNpYmxlLCBFVGlsZVR5cGUgfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCB7IEVCbG9ja1N0YXR1cywgRUdhbWVTdGVwQ21kLCBFQ2xlYXJUeXBlIH0gZnJvbSAnLi9UcmFja2VySW50ZXJmYWNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrZXJVdGlscyB7XG4gIHN0YXRpYyBpZDJwb3NpdGlvbihlKSB7XG4gICAgcmV0dXJuIGUgPyBlLnNwbGl0KFwiLVwiKS5tYXAoTnVtYmVyKSA6IFswLCAwLCAwXTtcbiAgfVxuICBzdGF0aWMgcG9zaXRpb24yaWQoZSkge1xuICAgIHJldHVybiBlID8gZS5qb2luKFwiLVwiKSA6IFwiXCI7XG4gIH1cbiAgc3RhdGljIG9iamVjdDJwb3NpdGlvbihlKSB7XG4gICAgcmV0dXJuIGUgPyBbZS5ncmlkUG9zWCwgZS5ncmlkUG9zWSwgZS5sYXllcl0gOiBbMCwgMCwgMF07XG4gIH1cbiAgc3RhdGljIGdldEV4cG9zZWRQYWlySW5mbyhlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbixcbiAgICAgIGEsXG4gICAgICBsID0ge30sXG4gICAgICBzID0gZS50aWxlT2JqZWN0TWFwKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGMgPSBfX3ZhbHVlcyhzKSwgdSA9IGMubmV4dCgpOyAhdS5kb25lOyB1ID0gYy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHAgPSBfX3JlYWQodS52YWx1ZSwgMiksXG4gICAgICAgICAgZiA9IChwWzBdLCBwWzFdKTtcbiAgICAgICAgbFtmLmNhcmRJZF0gfHwgKGxbZi5jYXJkSWRdID0ge1xuICAgICAgICAgIG1vdmVBYmxlOiBbXSxcbiAgICAgICAgICBub25Nb3ZlQWJsZTogW11cbiAgICAgICAgfSk7XG4gICAgICAgIGYuaXNWYWxpZCAmJiAoMCA9PT0gZi5pc0NhcmRMb2NrKCkgPyBsW2YuY2FyZElkXS5tb3ZlQWJsZS5wdXNoKGYpIDogbFtmLmNhcmRJZF0ubm9uTW92ZUFibGUucHVzaChmKSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHUgJiYgIXUuZG9uZSAmJiAobyA9IGMucmV0dXJuKSAmJiBvLmNhbGwoYyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGQgPSB7fTtcbiAgICBmb3IgKHZhciBoIGluIGwpIHtcbiAgICAgIHZhciB5ID0gbFtoXS5tb3ZlQWJsZSxcbiAgICAgICAgbSA9IGxbaF0ubm9uTW92ZUFibGU7XG4gICAgICBpZiAoMSA9PT0geS5sZW5ndGgpIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHYgPSAobiA9IHZvaWQgMCwgX192YWx1ZXMobSkpLCBnID0gdi5uZXh0KCk7ICFnLmRvbmU7IGcgPSB2Lm5leHQoKSkge1xuICAgICAgICAgIHZhciBfID0gZy52YWx1ZTtcbiAgICAgICAgICBkW18uaWRdID0gXy5jYXJkSWQ7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbiA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBnICYmICFnLmRvbmUgJiYgKGEgPSB2LnJldHVybikgJiYgYS5jYWxsKHYpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkO1xuICB9XG4gIHN0YXRpYyBnZXRIYWxmRXhwb3NlZFBhaXJJbmZvKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0RXhwb3NlZFBhaXJJbmZvKGUpLFxuICAgICAgbyA9IHt9O1xuICAgIGZvciAodmFyIG4gaW4gdCkge1xuICAgICAgdmFyIGkgPSBlLmdldFRpbGVPYmplY3QobiksXG4gICAgICAgIHIgPSB0W25dO1xuICAgICAgaSAmJiBlLmlzSGFzVmlzaWJsZShpKSAhPT0gRVRpbGVWaXNpYmxlLk5vbmUgJiYgKG9bbl0gPSByKTtcbiAgICB9XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgc3RhdGljIGdldEJsb2NraW5nVGlsZUluZm8oZSkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRIYWxmRXhwb3NlZFBhaXJJbmZvKGUpLFxuICAgICAgbyA9IHt9O1xuICAgIGZvciAodmFyIG4gaW4gdCkge1xuICAgICAgdmFyIGkgPSBlLmdldFRpbGVPYmplY3QobiksXG4gICAgICAgIHIgPSB0W25dO1xuICAgICAgaSAmJiBlLmlzSGFzQ292ZXIoaSkgJiYgKG9bbl0gPSByKTtcbiAgICB9XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgc3RhdGljIGdldExlZnRGcmVlUmlnaHRDbnQoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSAwLFxuICAgICAgYSA9IGUudGlsZU9iamVjdE1hcCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBsID0gX192YWx1ZXMoYSksIHMgPSBsLm5leHQoKTsgIXMuZG9uZTsgcyA9IGwubmV4dCgpKSB7XG4gICAgICAgIHZhciBjID0gX19yZWFkKHMudmFsdWUsIDIpLFxuICAgICAgICAgIHUgPSAoY1swXSwgY1sxXSk7XG4gICAgICAgIGlmICh1LmlzVmFsaWQgJiYgMCA9PT0gdS5pc0NhcmRMb2NrKCkpIHtcbiAgICAgICAgICB2YXIgcCA9IHUuaXNIYXNMZWZ0KCksXG4gICAgICAgICAgICBmID0gdS5pc0hhc1JpZ2h0KCk7XG4gICAgICAgICAgIXAgJiYgZiAmJiBuKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcyAmJiAhcy5kb25lICYmIChvID0gbC5yZXR1cm4pICYmIG8uY2FsbChsKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbjtcbiAgfVxuICBzdGF0aWMgZ2V0UmlnaHRGcmVlTGVmdENudChlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IDAsXG4gICAgICBhID0gZS50aWxlT2JqZWN0TWFwKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGwgPSBfX3ZhbHVlcyhhKSwgcyA9IGwubmV4dCgpOyAhcy5kb25lOyBzID0gbC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGMgPSBfX3JlYWQocy52YWx1ZSwgMiksXG4gICAgICAgICAgdSA9IChjWzBdLCBjWzFdKTtcbiAgICAgICAgaWYgKHUuaXNWYWxpZCAmJiAwID09PSB1LmlzQ2FyZExvY2soKSkge1xuICAgICAgICAgIHZhciBwID0gdS5pc0hhc0xlZnQoKSxcbiAgICAgICAgICAgIGYgPSB1LmlzSGFzUmlnaHQoKTtcbiAgICAgICAgICBwICYmICFmICYmIG4rKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBzICYmICFzLmRvbmUgJiYgKG8gPSBsLnJldHVybikgJiYgby5jYWxsKGwpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuO1xuICB9XG4gIHN0YXRpYyBnZXRCb3RoU2lkZXNGcmVlQ250KGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gMCxcbiAgICAgIGEgPSBlLnRpbGVPYmplY3RNYXAoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKGEpLCBzID0gbC5uZXh0KCk7ICFzLmRvbmU7IHMgPSBsLm5leHQoKSkge1xuICAgICAgICB2YXIgYyA9IF9fcmVhZChzLnZhbHVlLCAyKSxcbiAgICAgICAgICB1ID0gKGNbMF0sIGNbMV0pO1xuICAgICAgICBpZiAodS5pc1ZhbGlkICYmIDAgPT09IHUuaXNDYXJkTG9jaygpKSB7XG4gICAgICAgICAgdmFyIHAgPSB1LmlzSGFzTGVmdCgpLFxuICAgICAgICAgICAgZiA9IHUuaXNIYXNSaWdodCgpO1xuICAgICAgICAgIHAgfHwgZiB8fCBuKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcyAmJiAhcy5kb25lICYmIChvID0gbC5yZXR1cm4pICYmIG8uY2FsbChsKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbjtcbiAgfVxuICBzdGF0aWMgZ2V0UGFpcnNTdGVwc0FycmF5KGUpIHtcbiAgICB2YXIgdCA9IFtdLFxuICAgICAgbyA9IGUuZ2V0R2FtZVRyYWNrZXIoKTtcbiAgICBpZiAoIW8pIHJldHVybiBbXTtcbiAgICB2YXIgbiA9IG8uaGFsZkV4cG9zZWRTdGVwcyxcbiAgICAgIGkgPSBvLmluaXRpYWxIYWxmRXhwb3NlZFBvc2l0aW9ucztcbiAgICBmb3IgKHZhciByIGluIG4pIHtcbiAgICAgIHZhciBhID0gbltyXTtcbiAgICAgIGlmIChpW3JdKSB7XG4gICAgICAgIHZhciBsID0gaVtyXTtcbiAgICAgICAgdC5wdXNoKGwgKyBcIjpcIiArIGEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfVxuICBzdGF0aWMgZ2V0UGFpcnNTdGVwc0FycmF5SW5pKGUpIHtcbiAgICB2YXIgdCA9IFtdLFxuICAgICAgbyA9IGUuZ2V0R2FtZVRyYWNrZXIoKTtcbiAgICBpZiAoIW8pIHJldHVybiBbXTtcbiAgICB2YXIgbiA9IG8uaGFsZkV4cG9zZWRTdGVwcyxcbiAgICAgIGkgPSBvLmluaXRpYWxIYWxmRXhwb3NlZFBvc2l0aW9ucztcbiAgICBmb3IgKHZhciBhIGluIG4pIHtcbiAgICAgIHZhciBsID0gblthXTtcbiAgICAgIGlmIChpW2FdKSB7XG4gICAgICAgIHZhciBzID0gaVthXSxcbiAgICAgICAgICBjID0gX19yZWFkKHRoaXMuaWQycG9zaXRpb24oYSksIDMpLFxuICAgICAgICAgIHUgPSBjWzBdLFxuICAgICAgICAgIHAgPSBjWzFdLFxuICAgICAgICAgIGYgPSBjWzJdO1xuICAgICAgICB0LnB1c2goe1xuICAgICAgICAgIHBvc2l0aW9uOiBcIltcIiArIHUgKyBcIiwgXCIgKyBwICsgXCIsIFwiICsgZiArIFwiXVwiLFxuICAgICAgICAgIGVsZW1lbnRfaWQ6IHMsXG4gICAgICAgICAgc3RlcDogbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgc3RhdGljIGdldFBhaXJzU3RlcHNBcnJheUNydXNoKGUpIHtcbiAgICB2YXIgdCA9IGUuZ2V0R2FtZVRyYWNrZXIoKTtcbiAgICByZXR1cm4gdCA/IHQucGFpcnNDcnVzaFJlY29yZHMuY29uY2F0KCkgOiBbXTtcbiAgfVxuICBzdGF0aWMgZ2V0UGFpcnNTdGVwc0FycmF5T3AoZSkge1xuICAgIHZhciB0ID0gZS5nZXRHYW1lVHJhY2tlcigpO1xuICAgIHJldHVybiB0ID8gdC5wYWlyc09wUmVjb3Jkcy5jb25jYXQoKSA6IFtdO1xuICB9XG4gIHN0YXRpYyBnZXRQcm9jZXNzVGltZShlKSB7XG4gICAgdmFyIHQgPSBlLmdldEdhbWVEYXRhKCkuZ2V0VG90YWxUaWxlQ291bnQoKSxcbiAgICAgIG8gPSBlLmdldEdhbWVEYXRhKCkuZ2V0Q2xlYXJUaWxlQ291bnQoKTtcbiAgICByZXR1cm4gMCA9PT0gdCA/IDEgOiBOdW1iZXIoKG8gLyB0KS50b0ZpeGVkKDIpKTtcbiAgfVxuICBzdGF0aWMgc3RhcnRHYW1lVHJhY2tpbmcodCwgbykge1xuICAgIHZhciBuID0gdC5nZXRHYW1lVHJhY2tlcigpO1xuICAgIGlmIChuKSB7XG4gICAgICBuLmdhbWVTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgbi5nYW1lU3RlcHMgPSBbXTtcbiAgICAgIG4uZWxpbWluYXRlZFBhaXJzID0gW107XG4gICAgICBuLmhhbGZFeHBvc2VkU3RlcHMgPSB7fTtcbiAgICAgIG4uaW5pdGlhbEhhbGZFeHBvc2VkUG9zaXRpb25zID0ge307XG4gICAgICBuLmluaXRUaWxlc0NvdW50ID0gby5nZXRDb3VudCgpO1xuICAgICAgbi50aWxlTW92YWJsZVN0ZXAgPSB7fTtcbiAgICAgIG4ucGFpcnNDcnVzaFJlY29yZHMgPSBbXTtcbiAgICAgIG4ucGFpcnNPcFJlY29yZHMgPSBbXTtcbiAgICAgIG4ucmVjb3JkZWRPcFBhaXJzID0gW107XG4gICAgICBuLnN0ZXBBbmFseXRpY3MgPSBbXTtcbiAgICAgIG4ubGFzdFN0ZXBUaW1lID0gMDtcbiAgICAgIG4uaW5pdEhhbGZFeHBvc2VkVGlsZXMgPSBbXTtcbiAgICAgIHZhciBpID0gVHJhY2tlclV0aWxzLmdldEhhbGZFeHBvc2VkUGFpckluZm8obyksXG4gICAgICAgIHIgPSBuLmluaXRpYWxIYWxmRXhwb3NlZFBvc2l0aW9ucyxcbiAgICAgICAgYSA9IG4uaW5pdEhhbGZFeHBvc2VkVGlsZXM7XG4gICAgICBmb3IgKHZhciBsIGluIGkpIHtcbiAgICAgICAgcltsXSA9IGlbbF07XG4gICAgICAgIGEucHVzaChsKTtcbiAgICAgIH1cbiAgICAgIG4uaW5pdEhhbGZFeHBvc2VkVGlsZXMgPSBhO1xuICAgICAgbi5pbml0aWFsSGFsZkV4cG9zZWRQb3NpdGlvbnMgPSByO1xuICAgICAgVHJhY2tlclV0aWxzLnJlY29yZEluaXRpYWxNb3ZhYmxlVGlsZXModCwgbyk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyByZWNvcmRJbml0aWFsTW92YWJsZVRpbGVzKGUsIHQpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4sXG4gICAgICBhID0gZS5nZXRHYW1lVHJhY2tlcigpO1xuICAgIGlmIChhKSB7XG4gICAgICB2YXIgbCA9IGEudGlsZU1vdmFibGVTdGVwLFxuICAgICAgICBzID0gdC50aWxlT2JqZWN0TWFwKCk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBjID0gX192YWx1ZXMocyksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIHAgPSBfX3JlYWQodS52YWx1ZSwgMiksXG4gICAgICAgICAgICBmID0gKHBbMF0sIHBbMV0pO1xuICAgICAgICAgIGYuaXNWYWxpZCAmJiAwID09PSBmLmlzQ2FyZExvY2soKSAmJiAobFtmLmlkXSA9IDApO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG8gPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdSAmJiAhdS5kb25lICYmIChuID0gYy5yZXR1cm4pICYmIG4uY2FsbChjKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYS50aWxlTW92YWJsZVN0ZXAgPSBsO1xuICAgICAgdGhpcy5jaGVja0FuZFJlY29yZE9wUGFpcnMoZSwgdCwgMCk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyB1cGRhdGVNb3ZhYmxlVHJhY2tpbmcoZSwgdCwgbykge1xuICAgIHZhciBuLFxuICAgICAgYSxcbiAgICAgIGwgPSBlLmdldEdhbWVUcmFja2VyKCk7XG4gICAgaWYgKGwpIHtcbiAgICAgIHZhciBzID0gbC50aWxlTW92YWJsZVN0ZXAsXG4gICAgICAgIGMgPSB0LnRpbGVPYmplY3RNYXAoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhjKSwgcCA9IHUubmV4dCgpOyAhcC5kb25lOyBwID0gdS5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgZiA9IF9fcmVhZChwLnZhbHVlLCAyKSxcbiAgICAgICAgICAgIGQgPSAoZlswXSwgZlsxXSk7XG4gICAgICAgICAgIXNbZC5pZF0gJiYgZC5pc1ZhbGlkICYmIDAgPT09IGQuaXNDYXJkTG9jaygpICYmIChzW2QuaWRdID0gbyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbiA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBwICYmICFwLmRvbmUgJiYgKGEgPSB1LnJldHVybikgJiYgYS5jYWxsKHUpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsLnRpbGVNb3ZhYmxlU3RlcCA9IHM7XG4gICAgICB0aGlzLmNoZWNrQW5kUmVjb3JkT3BQYWlycyhlLCB0LCBvKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGNoZWNrQW5kUmVjb3JkT3BQYWlycyhlLCB0LCBvKSB7XG4gICAgdmFyIG4sXG4gICAgICBhLFxuICAgICAgbCxcbiAgICAgIHMsXG4gICAgICBjLFxuICAgICAgdSxcbiAgICAgIHAgPSBlLmdldEdhbWVUcmFja2VyKCk7XG4gICAgaWYgKHApIHtcbiAgICAgIHZhciBmID0gbmV3IE1hcCgpLFxuICAgICAgICBkID0gdC50aWxlT2JqZWN0TWFwKCk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBoID0gX192YWx1ZXMoZCksIHkgPSBoLm5leHQoKTsgIXkuZG9uZTsgeSA9IGgubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIG0gPSBfX3JlYWQoeS52YWx1ZSwgMiksXG4gICAgICAgICAgICB2ID0gKG1bMF0sIG1bMV0pO1xuICAgICAgICAgIGlmICh2LmlzVmFsaWQgJiYgMCA9PT0gdi5pc0NhcmRMb2NrKCkpIHtcbiAgICAgICAgICAgIGYuaGFzKHYuY2FyZElkKSB8fCBmLnNldCh2LmNhcmRJZCwgW10pO1xuICAgICAgICAgICAgZi5nZXQodi5jYXJkSWQpLnB1c2godi5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG4gPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgeSAmJiAheS5kb25lICYmIChhID0gaC5yZXR1cm4pICYmIGEuY2FsbChoKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGcgPSBwLnJlY29yZGVkT3BQYWlycyxcbiAgICAgICAgXyA9IHAucGFpcnNPcFJlY29yZHMsXG4gICAgICAgIFQgPSBwLnRpbGVNb3ZhYmxlU3RlcDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIEMgPSBfX3ZhbHVlcyhmKSwgYiA9IEMubmV4dCgpOyAhYi5kb25lOyBiID0gQy5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgRSA9IF9fcmVhZChiLnZhbHVlLCAyKSxcbiAgICAgICAgICAgIFMgPSBFWzBdLFxuICAgICAgICAgICAgSSA9IEVbMV07XG4gICAgICAgICAgaWYgKEkubGVuZ3RoID49IDIpIGZvciAodmFyIHcgPSAwOyB3IDwgSS5sZW5ndGg7IHcrKykgZm9yICh2YXIgQiA9IHcgKyAxOyBCIDwgSS5sZW5ndGg7IEIrKykge1xuICAgICAgICAgICAgdmFyIHggPSBJW3ddLFxuICAgICAgICAgICAgICBNID0gSVtCXSxcbiAgICAgICAgICAgICAgTyA9IFt4LCBNXS5zb3J0KCkuam9pbihcIiNcIik7XG4gICAgICAgICAgICBpZiAoIWcuaW5jbHVkZXMoTykpIHtcbiAgICAgICAgICAgICAgdmFyIEQgPSBudWxsICE9PSAoYyA9IFRbeF0pICYmIHZvaWQgMCAhPT0gYyA/IGMgOiBvLFxuICAgICAgICAgICAgICAgIFAgPSBudWxsICE9PSAodSA9IFRbTV0pICYmIHZvaWQgMCAhPT0gdSA/IHUgOiBvLFxuICAgICAgICAgICAgICAgIEEgPSBvIC0gTWF0aC5taW4oRCwgUCk7XG4gICAgICAgICAgICAgIGcucHVzaChPKTtcbiAgICAgICAgICAgICAgXy5wdXNoKHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjE6IHgsXG4gICAgICAgICAgICAgICAgcG9zaXRpb24yOiBNLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRfaWQ6IFMsXG4gICAgICAgICAgICAgICAgc3RlcHM6IEFcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGwgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYiAmJiAhYi5kb25lICYmIChzID0gQy5yZXR1cm4pICYmIHMuY2FsbChDKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAobCkgdGhyb3cgbC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcC5yZWNvcmRlZE9wUGFpcnMgPSBnO1xuICAgICAgcC5wYWlyc09wUmVjb3JkcyA9IF87XG4gICAgfVxuICB9XG4gIHN0YXRpYyByZWNvcmRTdGVwKGUsIHQsIG8pIHtcbiAgICBEYXRlLm5vdygpO1xuICAgIHZhciBuID0gZS5nZXRHYW1lVHJhY2tlcigpO1xuICAgIGlmIChuKSB7XG4gICAgICBuLnN0ZXBJZCArPSAxO1xuICAgICAgdmFyIGkgPSBuLnN0ZXBJZDtcbiAgICAgIHRoaXMudXBkYXRlTW92YWJsZVRyYWNraW5nKGUsIHQsIGkpO1xuICAgICAgdGhpcy51cGRhdGVIYWxmRXhwb3NlZFN0ZXBzKGUsIHQsIGksIG8pO1xuICAgICAgdGhpcy5jYWNoZVBhaXJzQ3J1c2hSZWNvcmRzKGUsIGksIG8pO1xuICAgICAgdGhpcy5jYWNoZUVsaW1pbmF0ZWRQYWlycyhlLCBvKTtcbiAgICAgIHRoaXMuY2FjaGVHYW1lU3RlcERhdGEoZSwgdCwgaSwgbyk7XG4gICAgICB0aGlzLmdlbmVyYXRlU3RlcEFuYWx5dGljcyhlLCB0LCBpLCBvKTtcbiAgICAgIHRoaXMudXBkYXRlUmVsZWFzZWRQb3NpdGlvbnMoZSwgdCwgaSwgbyk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBjYWNoZVBhaXJzQ3J1c2hSZWNvcmRzKGUsIHQsIG8pIHtcbiAgICB2YXIgbixcbiAgICAgIGksXG4gICAgICByID0gZS5nZXRHYW1lVHJhY2tlcigpO1xuICAgIGlmIChyKSB7XG4gICAgICB2YXIgYSA9IHIudGlsZU1vdmFibGVTdGVwLFxuICAgICAgICBsID0gbnVsbCAhPT0gKG4gPSBhW28udGlsZUlkMV0pICYmIHZvaWQgMCAhPT0gbiA/IG4gOiB0LFxuICAgICAgICBzID0gbnVsbCAhPT0gKGkgPSBhW28udGlsZUlkMl0pICYmIHZvaWQgMCAhPT0gaSA/IGkgOiB0LFxuICAgICAgICBjID0gdCAtIE1hdGgubWluKGwsIHMpLFxuICAgICAgICB1ID0gci5wYWlyc0NydXNoUmVjb3JkcyxcbiAgICAgICAgcCA9IHtcbiAgICAgICAgICBwb3NpdGlvbjE6IG8udGlsZUlkMSxcbiAgICAgICAgICBwb3NpdGlvbjI6IG8udGlsZUlkMixcbiAgICAgICAgICBlbGVtZW50X2lkOiBvLnR5cGVJZCxcbiAgICAgICAgICBzdGVwczogY1xuICAgICAgICB9O1xuICAgICAgdS5wdXNoKHApO1xuICAgICAgci5wYWlyc0NydXNoUmVjb3JkcyA9IHU7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVHJhY2tlclV0aWxzX2NoZUVsaW1QYWlyXCIpXG4gIHN0YXRpYyBjYWNoZUVsaW1pbmF0ZWRQYWlycyhlLCB0KSB7XG4gICAgdmFyIG8gPSBlLmdldEdhbWVUcmFja2VyKCk7XG4gICAgaWYgKG8pIHtcbiAgICAgIHZhciBuID0gby5lbGltaW5hdGVkUGFpcnM7XG4gICAgICBuLnB1c2goe1xuICAgICAgICB0aWxlMTogdC50aWxlSWQxLFxuICAgICAgICB0aWxlMjogdC50aWxlSWQyXG4gICAgICB9KTtcbiAgICAgIG8uZWxpbWluYXRlZFBhaXJzID0gbjtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUcmFja2VyVXRpbHNfY2hlR21TdGVwXCIpXG4gIHN0YXRpYyBjYWNoZUdhbWVTdGVwRGF0YShlLCB0LCBvLCBuKSB7XG4gICAgdmFyIGkgPSBlLmdldEdhbWVUcmFja2VyKCk7XG4gICAgaWYgKGkpIHtcbiAgICAgIHZhciByID0gdC5nZXRDdXJUaWxlc0NudCgpLFxuICAgICAgICBhID0gdC5nZXRDYW5NYXRjaENhcmRQYWlyTnVtKCksXG4gICAgICAgIGwgPSBpLmdhbWVTdGVwcyxcbiAgICAgICAgcyA9IHtcbiAgICAgICAgICBzdGVwX2lkOiBvLFxuICAgICAgICAgIHBhaXJzX2NvdW50OiBhLFxuICAgICAgICAgIHJlbWFpbmluZ190aWxlczogcixcbiAgICAgICAgICBlbGltaW5hdGVkX3BhaXI6IHtcbiAgICAgICAgICAgIHRpbGUxOiBuLnRpbGVJZDEsXG4gICAgICAgICAgICB0aWxlMjogbi50aWxlSWQyXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgbC5wdXNoKHMpO1xuICAgICAgaS5nYW1lU3RlcHMgPSBsO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgdXBkYXRlSGFsZkV4cG9zZWRTdGVwcyhlLCB0LCBvLCBuKSB7XG4gICAgdmFyIHIsXG4gICAgICBhLFxuICAgICAgbCA9IGUuZ2V0R2FtZVRyYWNrZXIoKTtcbiAgICBpZiAobCkge1xuICAgICAgdmFyIHMgPSBsLmluaXRIYWxmRXhwb3NlZFRpbGVzLFxuICAgICAgICBjID0gbC5oYWxmRXhwb3NlZFN0ZXBzO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKFtuLnRpbGVJZDEsIG4udGlsZUlkMl0pLCBwID0gdS5uZXh0KCk7ICFwLmRvbmU7IHAgPSB1Lm5leHQoKSkge1xuICAgICAgICAgIHZhciBmID0gcC52YWx1ZTtcbiAgICAgICAgICBzLmluY2x1ZGVzKGYpICYmIChjW2ZdID0gbyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgciA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBwICYmICFwLmRvbmUgJiYgKGEgPSB1LnJldHVybikgJiYgYS5jYWxsKHUpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsLmhhbGZFeHBvc2VkU3RlcHMgPSBjO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRyYWNrZXJVdGlsc191cFJlbFBvc1wiKVxuICBzdGF0aWMgdXBkYXRlUmVsZWFzZWRQb3NpdGlvbnMoZSwgdCwgbywgbikge1xuICAgIHZhciBhLFxuICAgICAgbCxcbiAgICAgIHMsXG4gICAgICBjLFxuICAgICAgdSA9IGUuZ2V0R2FtZVRyYWNrZXIoKTtcbiAgICBpZiAodSkge1xuICAgICAgdmFyIHAgPSB0LnRpbGVPYmplY3RNYXAoKSxcbiAgICAgICAgZiA9IHQuZ2V0VGlsZU9iamVjdChuLnRpbGVJZDEpLFxuICAgICAgICBkID0gdC5nZXRUaWxlT2JqZWN0KG4udGlsZUlkMik7XG4gICAgICBpZiAoZiAmJiBkKSB7XG4gICAgICAgIHZhciBoID0gW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgeSA9IF9fdmFsdWVzKHApLCBtID0geS5uZXh0KCk7ICFtLmRvbmU7IG0gPSB5Lm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIHYgPSBfX3JlYWQobS52YWx1ZSwgMik7XG4gICAgICAgICAgICB2WzBdO1xuICAgICAgICAgICAgKEMgPSB2WzFdKS5pc1ZhbGlkICYmIDAgPT09IEMuaXNDYXJkTG9jaygpICYmIGgucHVzaChDLmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBhID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtICYmICFtLmRvbmUgJiYgKGwgPSB5LnJldHVybikgJiYgbC5jYWxsKHkpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoYSkgdGhyb3cgYS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZi5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIGQuaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB2YXIgZyA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIF8gPSBfX3ZhbHVlcyhwKSwgVCA9IF8ubmV4dCgpOyAhVC5kb25lOyBUID0gXy5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBDLFxuICAgICAgICAgICAgICBiID0gX19yZWFkKFQudmFsdWUsIDIpO1xuICAgICAgICAgICAgYlswXTtcbiAgICAgICAgICAgIChDID0gYlsxXSkuaXNWYWxpZCAmJiAwID09PSBDLmlzQ2FyZExvY2soKSAmJiBnLnB1c2goQy5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgVCAmJiAhVC5kb25lICYmIChjID0gXy5yZXR1cm4pICYmIGMuY2FsbChfKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHMpIHRocm93IHMuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGYuaXNWYWxpZCA9IHRydWU7XG4gICAgICAgIGQuaXNWYWxpZCA9IHRydWU7XG4gICAgICAgIHZhciBFID0gZy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gIWguaW5jbHVkZXMoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB1LnByZXZSZWxlYXNlZFBvc2l0aW9uID0gRTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RhdGljIGdlbmVyYXRlU3RlcEFuYWx5dGljcyhlLCB0LCBvLCBuKSB7XG4gICAgdmFyIGkgPSBuLnRpbGVJZDEsXG4gICAgICByID0gbi50aWxlSWQyLFxuICAgICAgYSA9IG4uY2xlYXIsXG4gICAgICBzID0gRGF0ZS5ub3coKSxcbiAgICAgIGMgPSBlLmdldEdhbWVUcmFja2VyKCk7XG4gICAgaWYgKGMpIHtcbiAgICAgIHZhciB1ID0gYy5sYXN0U3RlcFRpbWUgPD0gMCA/IDAgOiBzIC0gYy5sYXN0U3RlcFRpbWU7XG4gICAgICBjLmxhc3RTdGVwVGltZSA9IHM7XG4gICAgICB2YXIgcCA9IHQuZ2V0VGlsZU9iamVjdChpKSxcbiAgICAgICAgZiA9IHQuZ2V0VGlsZU9iamVjdChyKSxcbiAgICAgICAgZCA9IHRoaXMuZ2V0UGFpckNvb3JkaW5hdGUodCwgaSwgciksXG4gICAgICAgIGggPSB0aGlzLmdldEN1cnJlbnRCb2FyZERpbWVuc2lvbih0KTtcbiAgICAgIHAuaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgZi5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICB2YXIgeSA9IHRoaXMuZmluZE1hdGNoaW5nUGFpcnModCk7XG4gICAgICBwLmlzVmFsaWQgPSB0cnVlO1xuICAgICAgZi5pc1ZhbGlkID0gdHJ1ZTtcbiAgICAgIHZhciBtID0gMCA9PT0geS5sZW5ndGggPyAxIDogMCxcbiAgICAgICAgdiA9IHAuY2FyZElkLFxuICAgICAgICBnID0gdGhpcy5jb3VudE9wZXJhdGlvbmFsUGFpcnModCksXG4gICAgICAgIF8gPSB0aGlzLmNvdW50TW92YWJsZVRpbGVzKHQpLFxuICAgICAgICBUID0gYy5jbWRzLmNvbmNhdCgpLnJldmVyc2UoKSxcbiAgICAgICAgQyA9IHRoaXMuZ2V0UHJlRXJyQ2xpY2tzKFQsIG8pLFxuICAgICAgICBiID0gdGhpcy5nZXRSZWFycmFuZ2VkVXNhZ2UoVCwgbyksXG4gICAgICAgIEUgPSBiLnJlYXJyYW5nZWRVc2FnZUNvdW50LFxuICAgICAgICBTID0gYi5yZWFycmFuZ2VkQm9hcmRzLFxuICAgICAgICBJID0gdGhpcy5nZXRQcm9tcHRVc2FnZSh0LCBULCBvKSxcbiAgICAgICAgdyA9IEkucHJvbXB0VXNhZ2VDb3VudCxcbiAgICAgICAgQiA9IEkucHJvbXB0QmxvY2tNYWhqb25nLFxuICAgICAgICB4ID0gdGhpcy5nZXRDbGVhclN0ZXAoVCwgYSksXG4gICAgICAgIE0gPSBbXTtcbiAgICAgIHAudHlwZSA9PT0gRVRpbGVUeXBlLlJvbGxDYXJkICYmIE0ucHVzaChwLmlkKTtcbiAgICAgIGYudHlwZSA9PT0gRVRpbGVUeXBlLlJvbGxDYXJkICYmIE0ucHVzaChmLmlkKTtcbiAgICAgIHZhciBPID0gTS5qb2luKFwiO1wiKSxcbiAgICAgICAgRCA9IHRoaXMuZ2V0QmxvY2tTdGF0dXNQb3NpdGlvbkxpc3QodCksXG4gICAgICAgIFAgPSB7XG4gICAgICAgICAgc3RlcF9pZDogbyxcbiAgICAgICAgICBvcF9kdXJfc2VjOiBOdW1iZXIoKHUgLyAxMDAwKS50b0ZpeGVkKDIpKSxcbiAgICAgICAgICBwcmVfZXJyX2NsaWNrczogQyxcbiAgICAgICAgICBwYWlyX2Nvb3JkaW5hdGU6IGQsXG4gICAgICAgICAgYm9hcmRfc3RyaW5nOiBlLmdldEdhbWVEYXRhKCkuZ2V0TGV2ZWxEYXRhKCksXG4gICAgICAgICAgYm9hcmRfeHl6OiBoLFxuICAgICAgICAgIGlzX2RlYWQ6IG0sXG4gICAgICAgICAgYmxvY2tfbWFoam9uZ19pZDogdixcbiAgICAgICAgICBwcmVfb3BfcGFpcnM6IGcsXG4gICAgICAgICAgcHJlX29wX2Jsb2NrczogXyxcbiAgICAgICAgICByZWFycmFuZ2VfdXNhZ2VfY291bnQ6IEUsXG4gICAgICAgICAgcHJvbXB0X3VzYWdlX2NvdW50OiB3LFxuICAgICAgICAgIHJlYXJyYW5nZWRfYm9hcmQ6IFMsXG4gICAgICAgICAgUHJvbXB0X2Jsb2NrX21haGpvbmc6IEIsXG4gICAgICAgICAgbGlnaHRuaW5nX2NydXNoOiBbYSwgeF0sXG4gICAgICAgICAgdHVybmFyb3VuZF9jcnVzaDogTyxcbiAgICAgICAgICBzdWl0X3N0YXR1c19wb3NpdGlvbl9saXN0OiBEXG4gICAgICAgIH07XG4gICAgICBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5hZGRDb21wbGV4RGF0YShQLCBlLCB0LCBvLCBuKTtcbiAgICAgIERhdGUubm93KCk7XG4gICAgICB0aGlzLmNhY2hlU3RlcEFuYWx5dGljKGUsIFApO1xuICAgICAgRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMuZG90R2FtZU1vdmVTdGVwKGUsIFApO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRyYWNrZXJVdGlsc19jYWNoZVN0ZXBBbHlcIilcbiAgc3RhdGljIGNhY2hlU3RlcEFuYWx5dGljKGUsIHQpIHtcbiAgICB2YXIgbyA9IGUuZ2V0R2FtZVRyYWNrZXIoKTtcbiAgICBpZiAobykge1xuICAgICAgdmFyIG4gPSBvLnN0ZXBBbmFseXRpY3M7XG4gICAgICBuLnB1c2godCk7XG4gICAgICBvLnN0ZXBBbmFseXRpY3MgPSBuO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRyYWNrZXJVdGlsc19kb3RHbVN0ZXBcIilcbiAgc3RhdGljIGRvdEdhbWVNb3ZlU3RlcChlLCB0KSB7XG4gICAgRG90R2FtZU1vdmVTdGVwLmRvdChlLCB0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRyYWNrZXJVdGlsc19wYWlyQ29vcmRcIilcbiAgc3RhdGljIGdldFBhaXJDb29yZGluYXRlKGUsIHQsIG8pIHtcbiAgICB2YXIgbixcbiAgICAgIGksXG4gICAgICBhID0ge30sXG4gICAgICBsID0gZS5nZXRUaWxlT2JqZWN0KHQpLFxuICAgICAgcyA9IGUuZ2V0VGlsZU9iamVjdChvKSxcbiAgICAgIGMgPSBfX3JlYWQodGhpcy5vYmplY3QycG9zaXRpb24obCksIDMpLFxuICAgICAgdSA9IGNbMF0sXG4gICAgICBwID0gY1sxXSxcbiAgICAgIGYgPSBjWzJdLFxuICAgICAgZCA9IF9fcmVhZCh0aGlzLm9iamVjdDJwb3NpdGlvbihzKSwgMyksXG4gICAgICBoID0gXCJbXCIgKyBkWzBdICsgXCIsXCIgKyBkWzFdICsgXCIsXCIgKyBkWzJdICsgXCJdXCI7XG4gICAgYVtcIltcIiArIHUgKyBcIixcIiArIHAgKyBcIixcIiArIGYgKyBcIl1cIl0gPSBudWxsICE9PSAobiA9IG51bGwgPT0gbCA/IHZvaWQgMCA6IGwuY2FyZElkKSAmJiB2b2lkIDAgIT09IG4gPyBuIDogMDtcbiAgICBhW2hdID0gbnVsbCAhPT0gKGkgPSBudWxsID09IHMgPyB2b2lkIDAgOiBzLmNhcmRJZCkgJiYgdm9pZCAwICE9PSBpID8gaSA6IDA7XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgc3RhdGljIGdldEJsb2NrTWFoam9uZ0lkTnVtKGUsIHQpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4sXG4gICAgICBhID0gZS50aWxlT2JqZWN0TWFwKCksXG4gICAgICBsID0gMDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKGEpLCBjID0gcy5uZXh0KCk7ICFjLmRvbmU7IGMgPSBzLm5leHQoKSkge1xuICAgICAgICB2YXIgdSA9IF9fcmVhZChjLnZhbHVlLCAyKSxcbiAgICAgICAgICBwID0gKHVbMF0sIHVbMV0pO1xuICAgICAgICBwLmNhcmRJZCA9PT0gdCAmJiBwLmlzVmFsaWQgJiYgMCA9PT0gcC5pc0NhcmRMb2NrKCkgJiYgbCsrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBjICYmICFjLmRvbmUgJiYgKG4gPSBzLnJldHVybikgJiYgbi5jYWxsKHMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVHJhY2tlclV0aWxzX2FkZENvbXBsZXhcIilcbiAgc3RhdGljIGFkZENvbXBsZXhEYXRhKGUsIHQsIG8sIG4sIGkpIHtcbiAgICB2YXIgYSA9IHQuZ2V0R2FtZVRyYWNrZXIoKTtcbiAgICBpZiAoYSkge1xuICAgICAgdmFyIGwgPSBvLmdldFRpbGVPYmplY3QoaS50aWxlSWQxKSxcbiAgICAgICAgcyA9IG8uZ2V0VGlsZU9iamVjdChpLnRpbGVJZDIpLFxuICAgICAgICBjID0gX19yZWFkKHRoaXMub2JqZWN0MnBvc2l0aW9uKGwpLCAzKSxcbiAgICAgICAgdSA9IGNbMF0sXG4gICAgICAgIHAgPSBjWzFdLFxuICAgICAgICBmID0gY1syXSxcbiAgICAgICAgZCA9IF9fcmVhZCh0aGlzLm9iamVjdDJwb3NpdGlvbihzKSwgMyksXG4gICAgICAgIGggPSBkWzBdLFxuICAgICAgICB5ID0gZFsxXSxcbiAgICAgICAgbSA9IGRbMl0sXG4gICAgICAgIHYgPSB0aGlzLnBvc2l0aW9uMmlkKFt1LCBwLCBmXSksXG4gICAgICAgIGcgPSB0aGlzLnBvc2l0aW9uMmlkKFtoLCB5LCBtXSksXG4gICAgICAgIF8gPSBsLmNhcmRJZCxcbiAgICAgICAgVCA9IHRoaXMuZ2V0QmxvY2tNYWhqb25nSWROdW0obywgXyk7XG4gICAgICBlLmJsb2NrX21haGpvbmdfaWRfbnVtID0gVDtcbiAgICAgIHZhciBDID0gTnVtYmVyKE1hdGguc3FydChNYXRoLnBvdyhoIC0gdSwgMikgKyBNYXRoLnBvdyh5IC0gcCwgMikpLnRvRml4ZWQoMikpO1xuICAgICAgZS5wYWlyX2Rpc3RhbmNlID0gQztcbiAgICAgIHZhciBiID0gMDtcbiAgICAgIChhLnByZXZSZWxlYXNlZFBvc2l0aW9uLmluY2x1ZGVzKHYpIHx8IGEucHJldlJlbGVhc2VkUG9zaXRpb24uaW5jbHVkZXMoZykpICYmIChiID0gMSk7XG4gICAgICBlLmlzX3ByZXZfcmVsX2ZsYWcgPSBiO1xuICAgICAgdmFyIEUgPSBbdiwgZ10sXG4gICAgICAgIFMgPSBhLnByZXZTdGVwVGlsZXMsXG4gICAgICAgIEkgPSB0aGlzLmNhbGN1bGF0ZVZpc3VhbERpc3RhbmNlKEUsIFMpO1xuICAgICAgZS5wcmV2X3Zpc19kaXN0ID0gSTtcbiAgICAgIGEucHJldlN0ZXBUaWxlcyA9IEU7XG4gICAgICB2YXIgdyA9IHRoaXMuY2FsY3VsYXRlUG90ZW50aWFsT3B0aW9ucyhvLCBfKTtcbiAgICAgIGUucG90ZW50aWFsX29wdGlvbiA9IHc7XG4gICAgICB2YXIgQiA9IF9fcmVhZCh0aGlzLmNhbGN1bGF0ZVJlbGVhc2VDYXRlZ29yaWVzKG8sIGwsIHMpLCAyKSxcbiAgICAgICAgeCA9IEJbMF0sXG4gICAgICAgIE0gPSBCWzFdO1xuICAgICAgZS5ob3JfcmVsX2Jsb2NrcyA9IHg7XG4gICAgICBlLnpfcmVsX2Jsb2NrcyA9IE07XG4gICAgICB2YXIgTyA9IHRoaXMuY291bnRWaXNpYmxlVGlsZXMobyk7XG4gICAgICBlLnByZV92aXNfYmxvY2tzID0gTztcbiAgICAgIHZhciBEID0gdGhpcy5jb3VudFRvdGFsbHlWaXNpYmxlVGlsZXMobyk7XG4gICAgICBlLnByZV90b3RhbHZpc19ibG9ja3MgPSBEO1xuICAgICAgdmFyIFAgPSB0aGlzLmNhbGN1bGF0ZU9wUGFpcnNDaGFuZ2UobywgbCwgcyk7XG4gICAgICBlLm9wX3BhaXJzX2NudCA9IFA7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVHJhY2tlclV0aWxzX2Jsb2NrU3RhdHVzXCIpXG4gIHN0YXRpYyBnZXRCbG9ja1N0YXR1c1Bvc2l0aW9uTGlzdChlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IGUudGlsZU9iamVjdE1hcCgpLFxuICAgICAgYSA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBjID0gX192YWx1ZXMobiksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgIHZhciBwID0gX19yZWFkKHUudmFsdWUsIDIpLFxuICAgICAgICAgIGYgPSAocFswXSwgcFsxXSk7XG4gICAgICAgIGlmIChmLmlzVmFsaWQpIHtcbiAgICAgICAgICB2YXIgZCA9IEVCbG9ja1N0YXR1cy5JbnZpc2libGU7XG4gICAgICAgICAgaWYgKDAgPT09IGYuaXNDYXJkTG9jaygpKSBkID0gRUJsb2NrU3RhdHVzLk1vdmFibGU7ZWxzZSB7XG4gICAgICAgICAgICB2YXIgaCA9IGUuaXNIYXNWaXNpYmxlKGYpO1xuICAgICAgICAgICAgaCAhPT0gRVRpbGVWaXNpYmxlLk5vbmUgJiYgKGQgPSBoID09PSBFVGlsZVZpc2libGUuQWxsID8gRUJsb2NrU3RhdHVzLkZ1bGxWaXNpYmxlIDogRUJsb2NrU3RhdHVzLlBhcnRpYWxWaXNpYmxlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHkgPSBfX3JlYWQodGhpcy5vYmplY3QycG9zaXRpb24oZiksIDMpLFxuICAgICAgICAgICAgbSA9IHlbMF0sXG4gICAgICAgICAgICB2ID0geVsxXSxcbiAgICAgICAgICAgIGcgPSB5WzJdO1xuICAgICAgICAgIGEucHVzaCh7XG4gICAgICAgICAgICBzdWl0OiBmLmNhcmRJZCxcbiAgICAgICAgICAgIHN0YXR1czogZCxcbiAgICAgICAgICAgIHBvczogdGhpcy5wb3NpdGlvbjJpZChbbSwgdiwgZ10pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdSAmJiAhdS5kb25lICYmIChvID0gYy5yZXR1cm4pICYmIG8uY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfVxuICBzdGF0aWMgZ2V0UHJlRXJyQ2xpY2tzKGUsIHQpIHtcbiAgICByZXR1cm4gZS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLmNtZCA9PT0gRUdhbWVTdGVwQ21kLkludmFsaWQgJiYgZS5zdGVwSWQgPT09IHQgLSAxO1xuICAgIH0pLmxlbmd0aDtcbiAgfVxuICBzdGF0aWMgZ2V0UmVhcnJhbmdlZFVzYWdlKGUsIHQpIHtcbiAgICB2YXIgbyA9IGUuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5jbWQgPT09IEVHYW1lU3RlcENtZC5TaHVmZmxlICYmIGUuc3RlcElkID09PSB0IC0gMTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVhcnJhbmdlZFVzYWdlQ291bnQ6IG8ubGVuZ3RoLFxuICAgICAgcmVhcnJhbmdlZEJvYXJkczogby5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuYm9hcmRBZnRlcjtcbiAgICAgIH0pLnJldmVyc2UoKVxuICAgIH07XG4gIH1cbiAgc3RhdGljIGdldFByb21wdFVzYWdlKGUsIHQsIG8pIHtcbiAgICB2YXIgbiA9IHQuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5jbWQgPT09IEVHYW1lU3RlcENtZC5IaW50ICYmIGUuc3RlcElkIDwgbztcbiAgICAgIH0pLFxuICAgICAgaSA9IDAsXG4gICAgICBhID0gW107XG4gICAgaWYgKG4pIHtcbiAgICAgIHZhciBsID0gZS5nZXRUaWxlT2JqZWN0KG4udGlsZUlkMSksXG4gICAgICAgIGMgPSBlLmdldFRpbGVPYmplY3Qobi50aWxlSWQyKTtcbiAgICAgIGlmIChsICYmIGMgJiYgbC5pc1ZhbGlkICYmIGMuaXNWYWxpZCkge1xuICAgICAgICBpID0gMTtcbiAgICAgICAgdmFyIHUgPSBfX3JlYWQodGhpcy5vYmplY3QycG9zaXRpb24obCksIDMpLFxuICAgICAgICAgIHAgPSB1WzBdLFxuICAgICAgICAgIGYgPSB1WzFdLFxuICAgICAgICAgIGQgPSB1WzJdLFxuICAgICAgICAgIGggPSBfX3JlYWQodGhpcy5vYmplY3QycG9zaXRpb24oYyksIDMpLFxuICAgICAgICAgIHkgPSBcIltcIiArIHAgKyBcIixcIiArIGYgKyBcIixcIiArIGQgKyBcIl1cIixcbiAgICAgICAgICBtID0gXCJbXCIgKyBoWzBdICsgXCIsXCIgKyBoWzFdICsgXCIsXCIgKyBoWzJdICsgXCJdXCI7XG4gICAgICAgIGEucHVzaCh5ICsgXCI6XCIgKyBsLmNhcmRJZCk7XG4gICAgICAgIGEucHVzaChtICsgXCI6XCIgKyBjLmNhcmRJZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBwcm9tcHRVc2FnZUNvdW50OiBpLFxuICAgICAgcHJvbXB0QmxvY2tNYWhqb25nOiBhXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZ2V0Q2xlYXJTdGVwKGUsIHQpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4sXG4gICAgICByID0gMTtcbiAgICBpZiAodCA9PSBFQ2xlYXJUeXBlLlNpbmdsZSB8fCB0ID09IEVDbGVhclR5cGUuTXVsdGkgfHwgdCA9PSBFQ2xlYXJUeXBlLkRyYWcpIHJldHVybiByO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBhID0gX192YWx1ZXMoZSksIGwgPSBhLm5leHQoKTsgIWwuZG9uZTsgbCA9IGEubmV4dCgpKSB7XG4gICAgICAgIHZhciBjID0gbC52YWx1ZTtcbiAgICAgICAgaWYgKGMuY21kID09PSBFR2FtZVN0ZXBDbWQuS2lsbFBhaXIgfHwgYy5jbWQgPT09IEVHYW1lU3RlcENtZC5BdXRvTWVyZ2UpIHtcbiAgICAgICAgICBpZiAoYy5jbGVhciAhPT0gdCkgYnJlYWs7XG4gICAgICAgICAgcisrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGwgJiYgIWwuZG9uZSAmJiAobiA9IGEucmV0dXJuKSAmJiBuLmNhbGwoYSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgc3RhdGljIGNhbGN1bGF0ZVZpc3VhbERpc3RhbmNlKGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgaWYgKCF0IHx8IDIgIT09IHQubGVuZ3RoKSByZXR1cm4gMDtcbiAgICB2YXIgbiA9IF9fcmVhZChlLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gby5pZDJwb3NpdGlvbihlKTtcbiAgICAgIH0pLCAyKSxcbiAgICAgIGkgPSBuWzBdLFxuICAgICAgYSA9IG5bMV0sXG4gICAgICBsID0gX19yZWFkKHQubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBvLmlkMnBvc2l0aW9uKGUpO1xuICAgICAgfSksIDIpLFxuICAgICAgcyA9IGxbMF0sXG4gICAgICBjID0gbFsxXSxcbiAgICAgIHUgPSBNYXRoLnNxcnQoTWF0aC5wb3coaVswXSAtIHNbMF0sIDIpICsgTWF0aC5wb3coaVsxXSAtIHNbMV0sIDIpKSArIE1hdGguc3FydChNYXRoLnBvdyhhWzBdIC0gY1swXSwgMikgKyBNYXRoLnBvdyhhWzFdIC0gY1sxXSwgMikpLFxuICAgICAgcCA9IE1hdGguc3FydChNYXRoLnBvdyhhWzBdIC0gc1swXSwgMikgKyBNYXRoLnBvdyhhWzFdIC0gc1sxXSwgMikpICsgTWF0aC5zcXJ0KE1hdGgucG93KGNbMF0gLSBpWzBdLCAyKSArIE1hdGgucG93KGNbMV0gLSBpWzFdLCAyKSksXG4gICAgICBmID0gTWF0aC5taW4odSwgcCk7XG4gICAgcmV0dXJuIE51bWJlcihmLnRvRml4ZWQoMikpO1xuICB9XG4gIHN0YXRpYyBjYWxjdWxhdGVQb3RlbnRpYWxPcHRpb25zKGUsIHQpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4sXG4gICAgICBhLFxuICAgICAgbCxcbiAgICAgIHMgPSBlLnRpbGVPYmplY3RNYXAoKSxcbiAgICAgIGMgPSBbXSxcbiAgICAgIHUgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcCA9IF9fdmFsdWVzKHMpLCBmID0gcC5uZXh0KCk7ICFmLmRvbmU7IGYgPSBwLm5leHQoKSkge1xuICAgICAgICB2YXIgZCA9IF9fcmVhZChmLnZhbHVlLCAyKSxcbiAgICAgICAgICBoID0gKGRbMF0sIGRbMV0pO1xuICAgICAgICBpZiAoaC5pc1ZhbGlkICYmIDAgPT09IGguaXNDYXJkTG9jaygpKSB7XG4gICAgICAgICAgYy5wdXNoKGguaWQpO1xuICAgICAgICAgIGguY2FyZElkID09PSB0ICYmIHUucHVzaChoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBmICYmICFmLmRvbmUgJiYgKG4gPSBwLnJldHVybikgJiYgbi5jYWxsKHApO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciB5ID0ge30sXG4gICAgICBtID0gZnVuY3Rpb24gbShlKSB7XG4gICAgICAgIHZhciB0LFxuICAgICAgICAgIG8sXG4gICAgICAgICAgbiA9IFwiW1wiICsgZS5ncmlkUG9zWCArIFwiLFwiICsgZS5ncmlkUG9zWSArIFwiLFwiICsgZS5sYXllciArIFwiXVwiO1xuICAgICAgICBlLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGEgPSBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBsID0gKHQgPSB2b2lkIDAsIF9fdmFsdWVzKHMpKSwgdSA9IGwubmV4dCgpOyAhdS5kb25lOyB1ID0gbC5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBwID0gX19yZWFkKHUudmFsdWUsIDIpLFxuICAgICAgICAgICAgICBmID0gKHBbMF0sIHBbMV0pO1xuICAgICAgICAgICAgZi5pc1ZhbGlkICYmIDAgPT09IGYuaXNDYXJkTG9jaygpICYmIGEucHVzaChmLmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0ID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB1ICYmICF1LmRvbmUgJiYgKG8gPSBsLnJldHVybikgJiYgby5jYWxsKGwpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZS5pc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdmFyIGQgPSBhLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiAhYy5pbmNsdWRlcyh0KSAmJiB0ICE9PSBlLmlkO1xuICAgICAgICB9KS5sZW5ndGg7XG4gICAgICAgIHlbbl0gPSBkO1xuICAgICAgfTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdiA9IF9fdmFsdWVzKHUpLCBnID0gdi5uZXh0KCk7ICFnLmRvbmU7IGcgPSB2Lm5leHQoKSkgbShnLnZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBhID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZyAmJiAhZy5kb25lICYmIChsID0gdi5yZXR1cm4pICYmIGwuY2FsbCh2KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChhKSB0aHJvdyBhLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geTtcbiAgfVxuICBzdGF0aWMgZ2VuZXJhdGVDdXJyZW50Qm9hcmRTdHJpbmcoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICByLFxuICAgICAgYSxcbiAgICAgIGwsXG4gICAgICBzID0gW10sXG4gICAgICBjID0gW10sXG4gICAgICB1ID0gZS5tYXBMYXllcnMoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcCA9IF9fdmFsdWVzKHUpLCBmID0gcC5uZXh0KCk7ICFmLmRvbmU7IGYgPSBwLm5leHQoKSkge1xuICAgICAgICB2YXIgZCA9IGYudmFsdWUsXG4gICAgICAgICAgaCA9IFtdLFxuICAgICAgICAgIHkgPSBkLmFsbENhcmRzLmNvbmNhdCgpLFxuICAgICAgICAgIG0gPSB7fSxcbiAgICAgICAgICB2ID0gW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgZyA9IChuID0gdm9pZCAwLCBfX3ZhbHVlcyh5KSksIF8gPSBnLm5leHQoKTsgIV8uZG9uZTsgXyA9IGcubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgVCA9IF8udmFsdWU7XG4gICAgICAgICAgICBpZiAoVC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGlmICghbVtULmdyaWRQb3NZXSkge1xuICAgICAgICAgICAgICAgIG1bVC5ncmlkUG9zWV0gPSBbXTtcbiAgICAgICAgICAgICAgICB2LnB1c2goVC5ncmlkUG9zWSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbVtULmdyaWRQb3NZXS5wdXNoKFQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIG4gPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF8gJiYgIV8uZG9uZSAmJiAociA9IGcucmV0dXJuKSAmJiByLmNhbGwoZyk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2LnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICByZXR1cm4gZSAtIHQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIEMgPSAoYSA9IHZvaWQgMCwgX192YWx1ZXModikpLCBiID0gQy5uZXh0KCk7ICFiLmRvbmU7IGIgPSBDLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIEUgPSBiLnZhbHVlLFxuICAgICAgICAgICAgICBTID0gbVtFXTtcbiAgICAgICAgICAgIFMuc29ydChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICByZXR1cm4gZS5ncmlkUG9zWCAtIHQuZ3JpZFBvc1g7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChTLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdmFyIEkgPSBcIlwiICsgRSArIFNbMF0uZ3JpZFBvc1g7XG4gICAgICAgICAgICAgIGMucHVzaChTWzBdLmNhcmRJZCk7XG4gICAgICAgICAgICAgIGZvciAodmFyIHcgPSAxOyB3IDwgUy5sZW5ndGg7IHcrKykge1xuICAgICAgICAgICAgICAgIEkgKz0gXCIsXCIgKyBTW3ddLmdyaWRQb3NYO1xuICAgICAgICAgICAgICAgIGMucHVzaChTW3ddLmNhcmRJZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaC5wdXNoKEkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGEgPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGIgJiYgIWIuZG9uZSAmJiAobCA9IEMucmV0dXJuKSAmJiBsLmNhbGwoQyk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChhKSB0aHJvdyBhLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIEI7XG4gICAgICAgICAgQiA9IDEgPT09IGgubGVuZ3RoID8gXCJcIiArIGQubGF5ZXJJbmRleCArIGhbMF0gOiBcIlwiICsgZC5sYXllckluZGV4ICsgaFswXSArIFwiLlwiICsgaC5zbGljZSgxKS5qb2luKFwiLlwiKTtcbiAgICAgICAgICBzLnB1c2goQik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZiAmJiAhZi5kb25lICYmIChvID0gcC5yZXR1cm4pICYmIG8uY2FsbChwKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcy5qb2luKFwiO1wiKSArIFwiOlwiICsgYy5qb2luKFwiXCIpO1xuICB9XG4gIHN0YXRpYyBnZXRDdXJyZW50Qm9hcmREaW1lbnNpb24oZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSAwLFxuICAgICAgYSA9IDAsXG4gICAgICBsID0gMDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKGUudGlsZU9iamVjdE1hcCgpKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBfX3JlYWQoYy52YWx1ZSwgMiksXG4gICAgICAgICAgcCA9ICh1WzBdLCB1WzFdKTtcbiAgICAgICAgaWYgKHAuaXNWYWxpZCkge1xuICAgICAgICAgIG4gPSBNYXRoLm1heChuLCBwLmdyaWRQb3NYKTtcbiAgICAgICAgICBhID0gTWF0aC5tYXgoYSwgcC5ncmlkUG9zWSk7XG4gICAgICAgICAgbCA9IE1hdGgubWF4KGwsIHAubGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGMgJiYgIWMuZG9uZSAmJiAobyA9IHMucmV0dXJuKSAmJiBvLmNhbGwocyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtuICsgMiwgYSArIDIsIGxdO1xuICB9XG4gIHN0YXRpYyBmaW5kTWF0Y2hpbmdQYWlycyhlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IGUudGlsZU9iamVjdE1hcCgpLFxuICAgICAgYSA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBsID0gX192YWx1ZXMobiksIHMgPSBsLm5leHQoKTsgIXMuZG9uZTsgcyA9IGwubmV4dCgpKSB7XG4gICAgICAgIHZhciBjID0gX19yZWFkKHMudmFsdWUsIDIpLFxuICAgICAgICAgIHUgPSAoY1swXSwgY1sxXSk7XG4gICAgICAgIHUuaXNWYWxpZCAmJiAwID09PSB1LmlzQ2FyZExvY2soKSAmJiBhLnB1c2godSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHMgJiYgIXMuZG9uZSAmJiAobyA9IGwucmV0dXJuKSAmJiBvLmNhbGwobCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgcCA9IFtdLCBmID0gMDsgZiA8IGEubGVuZ3RoOyBmKyspIGZvciAodmFyIGQgPSBmICsgMTsgZCA8IGEubGVuZ3RoOyBkKyspIHtcbiAgICAgIHZhciBoID0gYVtmXSxcbiAgICAgICAgeSA9IGFbZF07XG4gICAgICBoLmNhcmRJZCA9PT0geS5jYXJkSWQgJiYgcC5wdXNoKFtoLmlkLCB5LmlkXSk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9XG4gIHN0YXRpYyBjYWxjdWxhdGVSZWxlYXNlQ2F0ZWdvcmllcyhlLCB0LCBvKSB7XG4gICAgdmFyIG4sXG4gICAgICBhLFxuICAgICAgbCxcbiAgICAgIHMsXG4gICAgICBjLFxuICAgICAgdSxcbiAgICAgIHAgPSBbXSxcbiAgICAgIGYgPSBlLnRpbGVPYmplY3RNYXAoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgZCA9IF9fdmFsdWVzKGYpLCBoID0gZC5uZXh0KCk7ICFoLmRvbmU7IGggPSBkLm5leHQoKSkge1xuICAgICAgICB2YXIgeSA9IF9fcmVhZChoLnZhbHVlLCAyKTtcbiAgICAgICAgeVswXTtcbiAgICAgICAgKF8gPSB5WzFdKS5pc1ZhbGlkICYmIDAgPT09IF8uaXNDYXJkTG9jaygpICYmIHAucHVzaChfLmlkKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaCAmJiAhaC5kb25lICYmIChhID0gZC5yZXR1cm4pICYmIGEuY2FsbChkKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0LmlzVmFsaWQgPSBmYWxzZTtcbiAgICBvLmlzVmFsaWQgPSBmYWxzZTtcbiAgICB2YXIgbSA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciB2ID0gX192YWx1ZXMoZiksIGcgPSB2Lm5leHQoKTsgIWcuZG9uZTsgZyA9IHYubmV4dCgpKSB7XG4gICAgICAgIHZhciBfLFxuICAgICAgICAgIFQgPSBfX3JlYWQoZy52YWx1ZSwgMik7XG4gICAgICAgIFRbMF07XG4gICAgICAgIChfID0gVFsxXSkuaXNWYWxpZCAmJiAwID09PSBfLmlzQ2FyZExvY2soKSAmJiBtLnB1c2goXy5pZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGcgJiYgIWcuZG9uZSAmJiAocyA9IHYucmV0dXJuKSAmJiBzLmNhbGwodik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobCkgdGhyb3cgbC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIEMgPSBtLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gIXAuaW5jbHVkZXMoZSk7XG4gICAgICB9KSxcbiAgICAgIGIgPSAwLFxuICAgICAgRSA9IDA7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIFMgPSBfX3ZhbHVlcyhDKSwgSSA9IFMubmV4dCgpOyAhSS5kb25lOyBJID0gUy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHcgPSBJLnZhbHVlLFxuICAgICAgICAgIEIgPSBmLmdldCh3KTtcbiAgICAgICAgaWYgKEIpIHtcbiAgICAgICAgICB2YXIgeCA9IHRoaXMud2FzSG9yaXpvbnRhbGx5QmxvY2tlZEJ5RWxpbWluYXRlZFRpbGVzKEIsIFt0LCBvXSksXG4gICAgICAgICAgICBNID0gdGhpcy53YXNWZXJ0aWNhbGx5QmxvY2tlZEJ5RWxpbWluYXRlZFRpbGVzKEIsIFt0LCBvXSk7XG4gICAgICAgICAgeCAmJiBiKys7XG4gICAgICAgICAgTSAmJiBFKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgSSAmJiAhSS5kb25lICYmICh1ID0gUy5yZXR1cm4pICYmIHUuY2FsbChTKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChjKSB0aHJvdyBjLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0LmlzVmFsaWQgPSB0cnVlO1xuICAgIG8uaXNWYWxpZCA9IHRydWU7XG4gICAgcmV0dXJuIFtiLCBFXTtcbiAgfVxuICBzdGF0aWMgd2FzSG9yaXpvbnRhbGx5QmxvY2tlZEJ5RWxpbWluYXRlZFRpbGVzKGUsIHQpIHtcbiAgICB2YXIgbywgbjtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgciA9IF9fdmFsdWVzKHQpLCBhID0gci5uZXh0KCk7ICFhLmRvbmU7IGEgPSByLm5leHQoKSkge1xuICAgICAgICB2YXIgbCA9IGEudmFsdWUsXG4gICAgICAgICAgcyA9IFtbZS5ncmlkUG9zWCAtIDIsIGUuZ3JpZFBvc1kgLSAxXS5qb2luKFwiX1wiKSwgW2UuZ3JpZFBvc1ggLSAyLCBlLmdyaWRQb3NZXS5qb2luKFwiX1wiKSwgW2UuZ3JpZFBvc1ggLSAyLCBlLmdyaWRQb3NZICsgMV0uam9pbihcIl9cIildLFxuICAgICAgICAgIGMgPSBbW2UuZ3JpZFBvc1ggKyAyLCBlLmdyaWRQb3NZIC0gMV0uam9pbihcIl9cIiksIFtlLmdyaWRQb3NYICsgMiwgZS5ncmlkUG9zWV0uam9pbihcIl9cIiksIFtlLmdyaWRQb3NYICsgMiwgZS5ncmlkUG9zWSArIDFdLmpvaW4oXCJfXCIpXSxcbiAgICAgICAgICB1ID0gW2wuZ3JpZFBvc1gsIGwuZ3JpZFBvc1ldLmpvaW4oXCJfXCIpO1xuICAgICAgICBpZiAocy5pbmNsdWRlcyh1KSB8fCBjLmluY2x1ZGVzKHUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYSAmJiAhYS5kb25lICYmIChuID0gci5yZXR1cm4pICYmIG4uY2FsbChyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhdGljIHdhc1ZlcnRpY2FsbHlCbG9ja2VkQnlFbGltaW5hdGVkVGlsZXMoZSwgdCkge1xuICAgIHZhciBvLCBuO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciByID0gX192YWx1ZXModCksIGEgPSByLm5leHQoKTsgIWEuZG9uZTsgYSA9IHIubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gYS52YWx1ZTtcbiAgICAgICAgaWYgKCEobC5sYXllciA8PSBlLmxheWVyKSkge1xuICAgICAgICAgIHZhciBzID0gTWF0aC5tYXgoZS5ncmlkUG9zWCwgbC5ncmlkUG9zWCksXG4gICAgICAgICAgICBjID0gTWF0aC5taW4oZS5ncmlkUG9zWCArIDIsIGwuZ3JpZFBvc1ggKyAyKSxcbiAgICAgICAgICAgIHUgPSBNYXRoLm1heChlLmdyaWRQb3NZLCBsLmdyaWRQb3NZKSxcbiAgICAgICAgICAgIHAgPSBNYXRoLm1pbihlLmdyaWRQb3NZICsgMiwgbC5ncmlkUG9zWSArIDIpO1xuICAgICAgICAgIGlmIChzIDwgYyAmJiB1IDwgcCkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYSAmJiAhYS5kb25lICYmIChuID0gci5yZXR1cm4pICYmIG4uY2FsbChyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhdGljIGNvdW50T3BlcmF0aW9uYWxQYWlycyhlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IGUudGlsZU9iamVjdE1hcCgpLFxuICAgICAgYSA9IHt9O1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBsID0gX192YWx1ZXMobiksIHMgPSBsLm5leHQoKTsgIXMuZG9uZTsgcyA9IGwubmV4dCgpKSB7XG4gICAgICAgIHZhciBjID0gX19yZWFkKHMudmFsdWUsIDIpLFxuICAgICAgICAgIHUgPSAoY1swXSwgY1sxXSk7XG4gICAgICAgIGlmICh1LmlzVmFsaWQgJiYgMCA9PT0gdS5pc0NhcmRMb2NrKCkpIHtcbiAgICAgICAgICBhW3UuY2FyZElkXSB8fCAoYVt1LmNhcmRJZF0gPSAwKTtcbiAgICAgICAgICBhW3UuY2FyZElkXSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHMgJiYgIXMuZG9uZSAmJiAobyA9IGwucmV0dXJuKSAmJiBvLmNhbGwobCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHAgPSAwO1xuICAgIGZvciAodmFyIGYgaW4gYSkge1xuICAgICAgdmFyIGQgPSBhW2ZdO1xuICAgICAgcCArPSBNYXRoLmZsb29yKGQgLyAyKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgc3RhdGljIGNvdW50TW92YWJsZVRpbGVzKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gZS50aWxlT2JqZWN0TWFwKCksXG4gICAgICBhID0gMDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKG4pLCBzID0gbC5uZXh0KCk7ICFzLmRvbmU7IHMgPSBsLm5leHQoKSkge1xuICAgICAgICB2YXIgYyA9IF9fcmVhZChzLnZhbHVlLCAyKSxcbiAgICAgICAgICB1ID0gKGNbMF0sIGNbMV0pO1xuICAgICAgICB1LmlzVmFsaWQgJiYgMCA9PT0gdS5pc0NhcmRMb2NrKCkgJiYgYSsrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBzICYmICFzLmRvbmUgJiYgKG8gPSBsLnJldHVybikgJiYgby5jYWxsKGwpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG4gIHN0YXRpYyBjb3VudFZpc2libGVUaWxlcyhlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IGUudGlsZU9iamVjdE1hcCgpLFxuICAgICAgYSA9IDA7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhuKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBfX3JlYWQoYy52YWx1ZSwgMiksXG4gICAgICAgICAgcCA9ICh1WzBdLCB1WzFdKTtcbiAgICAgICAgZS5pc0hhc1Zpc2libGUocCkgIT09IEVUaWxlVmlzaWJsZS5Ob25lICYmIGErKztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYyAmJiAhYy5kb25lICYmIChvID0gcy5yZXR1cm4pICYmIG8uY2FsbChzKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfVxuICBzdGF0aWMgY291bnRUb3RhbGx5VmlzaWJsZVRpbGVzKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gZS50aWxlT2JqZWN0TWFwKCksXG4gICAgICBhID0gMDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKG4pLCBjID0gcy5uZXh0KCk7ICFjLmRvbmU7IGMgPSBzLm5leHQoKSkge1xuICAgICAgICB2YXIgdSA9IF9fcmVhZChjLnZhbHVlLCAyKSxcbiAgICAgICAgICBwID0gKHVbMF0sIHVbMV0pO1xuICAgICAgICBlLmlzSGFzVmlzaWJsZShwKSA9PT0gRVRpbGVWaXNpYmxlLkFsbCAmJiBhKys7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGMgJiYgIWMuZG9uZSAmJiAobyA9IHMucmV0dXJuKSAmJiBvLmNhbGwocyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgc3RhdGljIGNhbGN1bGF0ZU9wUGFpcnNDaGFuZ2UoZSwgdCwgbykge1xuICAgIHZhciBuID0gdGhpcy5jb3VudE9wZXJhdGlvbmFsUGFpcnMoZSk7XG4gICAgdC5pc1ZhbGlkID0gZmFsc2U7XG4gICAgby5pc1ZhbGlkID0gZmFsc2U7XG4gICAgdmFyIGkgPSB0aGlzLmNvdW50T3BlcmF0aW9uYWxQYWlycyhlKTtcbiAgICB0LmlzVmFsaWQgPSB0cnVlO1xuICAgIG8uaXNWYWxpZCA9IHRydWU7XG4gICAgcmV0dXJuIGkgLSBuO1xuICB9XG59Il19