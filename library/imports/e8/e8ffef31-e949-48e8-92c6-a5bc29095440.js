"use strict";
cc._RF.push(module, 'e8ffe8x6UlI6JLGpbwpCVRA', 'PathAnalyser');
// Scripts/PathAnalyser.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PathAnalyser = void 0;
var PathAnalyserUtils_1 = require("./PathAnalyserUtils");
var FailBoardAnalyzeTool_1 = require("./FailBoardAnalyzeTool");
var PathAnalyserTypes_1 = require("./PathAnalyserTypes");
var s;
(function (s) {
    s[s["RemoveSoloCollect"] = 0] = "RemoveSoloCollect";
    s[s["RemoveFreeColors"] = 1] = "RemoveFreeColors";
    s[s["GetLegalMoves"] = 2] = "GetLegalMoves";
    s[s["ProcessMoves"] = 3] = "ProcessMoves";
    s[s["Done"] = 4] = "Done";
})(s || (s = {}));
var PathAnalyser = /** @class */ (function () {
    function PathAnalyser(e, t, o, n, i, r) {
        if (r === void 0) { r = PathAnalyserTypes_1.DEFAULT_FRAME_CONFIG; }
        this._soloCollectTileIds = new Set();
        this._highlightColorMaxCounts = new Map();
        this._dfsStack = [];
        this._frameStartTime = 0;
        this._isRunning = false;
        this._nodeCount = 0;
        this._pendingFailBoardTasks = [];
        this._originalLevel = null;
        this._parent = null;
        this._checkingBadColor = null;
        this._highlightColor = null;
        this._cancellationToken = null;
        this._frameConfig = null;
        this._originalLevel = e;
        this._parent = t;
        this._checkingBadColor = o;
        this._highlightColor = n;
        this._cancellationToken = i;
        this._frameConfig = r;
    }
    Object.defineProperty(PathAnalyser.prototype, "highlightColorMaxCounts", {
        get: function () {
            return this._highlightColorMaxCounts;
        },
        enumerable: false,
        configurable: true
    });
    PathAnalyser.prototype.analyze = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e, t, o, n, a, l, c, u, p, f, d;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        try {
                            for (e = __values(this._highlightColor), t = e.next(); !t.done; t = e.next()) {
                                o = t.value;
                                this._highlightColorMaxCounts.set(o, 0);
                            }
                        }
                        catch (e) {
                            u = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                t && !t.done && (p = e.return) && p.call(e);
                            }
                            finally {
                                if (u)
                                    throw u.error;
                            }
                        }
                        if (-1 !== this._checkingBadColor) {
                            this._highlightColorMaxCounts.has(this._checkingBadColor) || this._highlightColorMaxCounts.set(this._checkingBadColor, 0);
                            try {
                                for (n = __values(this._originalLevel.aliveTiles), a = n.next(); !a.done; a = n.next())
                                    (l = a.value).cardId === this._checkingBadColor && this._soloCollectTileIds.add(l.id);
                            }
                            catch (e) {
                                f = {
                                    error: e
                                };
                            }
                            finally {
                                try {
                                    a && !a.done && (d = n.return) && d.call(n);
                                }
                                finally {
                                    if (f)
                                        throw f.error;
                                }
                            }
                        }
                        this._dfsStack = [{
                                level: this._originalLevel,
                                phase: s.RemoveSoloCollect
                            }];
                        this._isRunning = true;
                        this._nodeCount = 0;
                        _a.label = 1;
                    case 1:
                        if (!!(!this._isRunning || !(this._dfsStack.length > 0 || this._pendingFailBoardTasks.length > 0))) return [3 /*break*/, 7];
                        this._frameStartTime = Date.now();
                        for (; this._dfsStack.length > 0 && !this.shouldYield();) {
                            if (this._cancellationToken.isCancellationRequested) {
                                this._isRunning = false;
                                return [2 /*return*/, {
                                        completed: false,
                                        cancelled: true,
                                        highlightColorMaxCounts: this._highlightColorMaxCounts,
                                        nodeCount: this._nodeCount
                                    }];
                            }
                            this.processOneStep();
                        }
                        _a.label = 2;
                    case 2:
                        if (!!(!(this._pendingFailBoardTasks.length > 0) || this.shouldYield())) return [3 /*break*/, 4];
                        if (this._cancellationToken.isCancellationRequested) {
                            this._isRunning = false;
                            return [2 /*return*/, {
                                    completed: false,
                                    cancelled: true,
                                    highlightColorMaxCounts: this._highlightColorMaxCounts,
                                    nodeCount: this._nodeCount
                                }];
                        }
                        c = this._pendingFailBoardTasks.shift();
                        return [4 /*yield*/, this.executeFailBoardAnalysis(c.level, c.uselessMoveCount)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 2];
                    case 4:
                        if (!((this._dfsStack.length > 0 || this._pendingFailBoardTasks.length > 0) && this._isRunning)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.waitNextFrame()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [3 /*break*/, 1];
                    case 7: return [2 /*return*/, {
                            completed: true,
                            cancelled: false,
                            highlightColorMaxCounts: this._highlightColorMaxCounts,
                            nodeCount: this._nodeCount
                        }];
                }
            });
        });
    };
    PathAnalyser.prototype.executeFailBoardAnalysis = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            var o;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        o = this;
                        return [4 /*yield*/, new FailBoardAnalyzeTool_1.FailBoardAnalyzeTool(e, this._parent, t, function (e) {
                                return o._parent.recordBadMahjongGroup(e);
                            }, this._frameConfig).analyze()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PathAnalyser.prototype.shouldYield = function () {
        return Date.now() - this._frameStartTime >= this._frameConfig.maxFrameTime;
    };
    PathAnalyser.prototype.waitNextFrame = function () {
        var e = this;
        return new Promise(function (t) {
            setTimeout(t, e._frameConfig.maxFrameTime);
        });
    };
    PathAnalyser.prototype.processOneStep = function () {
        if (0 !== this._dfsStack.length) {
            var e = this._dfsStack[this._dfsStack.length - 1];
            switch (e.phase) {
                case s.RemoveSoloCollect:
                    this.phaseRemoveSoloCollect(e);
                    break;
                case s.RemoveFreeColors:
                    this.phaseRemoveFreeColors(e);
                    break;
                case s.GetLegalMoves:
                    this.phaseGetLegalMoves(e);
                    break;
                case s.ProcessMoves:
                    this.phaseProcessMoves(e);
                    break;
                case s.Done:
                    this._dfsStack.pop();
            }
        }
    };
    PathAnalyser.prototype.phaseRemoveSoloCollect = function (e) {
        var t, o, n = e.level;
        if (0 !== n.aliveTileCount) {
            var i = false, a = n.unlockTiles;
            try {
                for (var l = __values(a), c = l.next(); !c.done; c = l.next()) {
                    var u = c.value;
                    if (this._soloCollectTileIds.has(u.id)) {
                        n.removeSingleTile(u);
                        i = true;
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
                    c && !c.done && (o = l.return) && o.call(l);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            i || (e.phase = s.RemoveFreeColors);
        }
        else
            e.phase = s.Done;
    };
    PathAnalyser.prototype.phaseRemoveFreeColors = function (e) {
        var t, o, n = this, i = e.level, a = PathAnalyserUtils_1.PathAnalyserUtils.getFreeColors(i, this._soloCollectTileIds);
        if (0 !== a.length) {
            var l = function l(e) {
                var t = i.unlockTiles.filter(function (t) {
                    return t.cardId === e && !n._soloCollectTileIds.has(t.id);
                });
                t.length;
                for (var o = Math.floor(t.length / 2), r = 0; r < o; r++)
                    i.makeMoveBySimple(t[2 * r], t[2 * r + 1]);
            };
            try {
                for (var u = __values(a), p = u.next(); !p.done; p = u.next())
                    l(p.value);
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    p && !p.done && (o = u.return) && o.call(u);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            e.phase = s.RemoveSoloCollect;
        }
        else
            e.phase = s.GetLegalMoves;
    };
    PathAnalyser.prototype.phaseGetLegalMoves = function (e) {
        var t = e.level, o = PathAnalyserUtils_1.PathAnalyserUtils.getLegalMoves(t, this._soloCollectTileIds);
        e.legalMoves = o;
        if (0 === o.length && t.aliveTileCount > 0) {
            this.analyzeFailData(t);
            e.phase = s.Done;
        }
        else if (0 !== t.aliveTileCount) {
            if (1 !== o.length) {
                if (this._parent.addNode(t, 0)) {
                    this._nodeCount++;
                    e.phase = s.ProcessMoves;
                    e.moveGroupState = this.initMoveGroupState(t, o);
                }
                else
                    e.phase = s.Done;
            }
            else {
                t.makeMove(o[0]);
                e.phase = s.RemoveSoloCollect;
            }
        }
        else
            e.phase = s.Done;
    };
    PathAnalyser.prototype.phaseProcessMoves = function (e) {
        var t, o, n = e.level, i = e.moveGroupState, a = e.legalMoves;
        if (i.targetLength > i.maxGroupLength) {
            0 === i.usableMoveGroup.length && this.analyzeFailData(n);
            e.phase = s.Done;
        }
        else {
            if (!i.generatorState) {
                i.generatorState = {
                    stack: [{
                            currentGroup: [],
                            nextIndex: 0
                        }],
                    done: false
                };
                i.checkingMoveIndexList = [];
                i.currentCheckIndex = 0;
            }
            if (!i.generatorState.done) {
                this.generateMoveGroupsBatch(i.targetLength, a, i.checkingMoveIndexList, i.skipIndexSet, i.usableMoveGroup, i.generatorState, 50);
                if (!i.generatorState.done)
                    return;
            }
            if (i.currentCheckIndex < i.checkingMoveIndexList.length) {
                var l = i.checkingMoveIndexList[i.currentCheckIndex];
                i.currentCheckIndex++;
                var c = n.clone(), u = [];
                try {
                    for (var p = __values(l), f = p.next(); !f.done; f = p.next()) {
                        var d = f.value;
                        d >= a.length || u.push(a[d]);
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
                if (u.length !== l.length)
                    return;
                if (this.judgeMoveGroupUtility(c, u, i)) {
                    i.usableMoveGroup.push(l);
                    1 === i.targetLength && i.skipIndexSet.add(l[0]);
                    this._dfsStack.push({
                        level: c,
                        phase: s.RemoveSoloCollect
                    });
                }
            }
            else {
                i.targetLength++;
                i.checkingMoveIndexList = [];
                i.currentCheckIndex = 0;
                i.generatorState = void 0;
            }
        }
    };
    PathAnalyser.prototype.initMoveGroupState = function (e, t) {
        var o, n, i, a, l = e.unlockTiles, s = new Array(256).fill(0), c = [];
        try {
            for (var u = __values(l), p = u.next(); !p.done; p = u.next()) {
                var f = p.value;
                if (!this._soloCollectTileIds.has(f.id)) {
                    0 === s[f.cardId] && c.push(f.cardId);
                    s[f.cardId]++;
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
                p && !p.done && (n = u.return) && n.call(u);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        c.sort(function (e, t) {
            return e - t;
        });
        var d = 0;
        try {
            for (var h = __values(c), y = h.next(); !y.done; y = h.next()) {
                var m = y.value;
                d += Math.floor(s[m] / 2);
            }
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                y && !y.done && (a = h.return) && a.call(h);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        return {
            targetLength: 1,
            maxGroupLength: d,
            checkingMoveIndexList: [],
            currentCheckIndex: 0,
            skipIndexSet: new Set(),
            usableMoveGroup: [],
            oldUnlockingColorCountArray: s,
            oldLegalMovesCount: t.length,
            allColors: c,
            generatorState: void 0
        };
    };
    PathAnalyser.prototype.generateMoveGroupsBatch = function (e, t, o, n, i, a, s) {
        for (var u, p, f = 0, d = a.stack; d.length > 0 && f < s;) {
            var h = d[d.length - 1], y = h.currentGroup;
            if (y.length !== e) {
                for (var m = 0 === y.length ? -1 : y[y.length - 1], v = e - y.length, g = t.length - v, _ = false, T = h.nextIndex; T <= g; T++)
                    if (!(n.has(T) || T <= m)) {
                        var C = t[T], b = false;
                        try {
                            for (var E = (u = void 0, __values(y)), S = E.next(); !S.done; S = E.next()) {
                                var I = S.value;
                                if (!(I >= t.length) && PathAnalyserUtils_1.PathAnalyserUtils.isConflict(t[I], C)) {
                                    b = true;
                                    break;
                                }
                            }
                        }
                        catch (e) {
                            u = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                S && !S.done && (p = E.return) && p.call(E);
                            }
                            finally {
                                if (u)
                                    throw u.error;
                            }
                        }
                        if (!b) {
                            var w = __spreadArrays(y, [T]);
                            if (!PathAnalyserUtils_1.PathAnalyserUtils.hasMoveGroupListSubSet(i, w)) {
                                h.nextIndex = T + 1;
                                d.push({
                                    currentGroup: w,
                                    nextIndex: T + 1
                                });
                                _ = true;
                                break;
                            }
                        }
                    }
                _ || d.pop();
            }
            else {
                o.push(__spreadArrays(y));
                f++;
                d.pop();
            }
        }
        0 === d.length && (a.done = true);
        return f;
    };
    PathAnalyser.prototype.judgeMoveGroupUtility = function (e, t, o) {
        var n, i, a, l, s = new Array(256).fill(0);
        try {
            for (var u = __values(t), p = u.next(); !p.done; p = u.next())
                s[d = (g = p.value).tile1.cardId] += 2;
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                p && !p.done && (i = u.return) && i.call(u);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        for (var f = 0, d = 0; d < s.length; d++)
            if (0 !== s[d]) {
                var h = o.oldUnlockingColorCountArray[d], y = h - s[d];
                f += h * (h - 1) / 2 - y * (y - 1) / 2;
            }
        try {
            for (var m = __values(t), v = m.next(); !v.done; v = m.next()) {
                var g = v.value;
                e.makeMove(g);
            }
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                v && !v.done && (l = m.return) && l.call(m);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        var _ = PathAnalyserUtils_1.PathAnalyserUtils.getLegalMoves(e, this._soloCollectTileIds);
        if (0 === _.length && e.aliveTileCount > 0) {
            this.analyzeFailData(e);
            return false;
        }
        if (o.oldLegalMovesCount - f < _.length)
            return true;
        var T = e.clone();
        this.canLevelSpread(T, true) || this.analyzeFailData(e);
        return false;
    };
    PathAnalyser.prototype.canLevelSpread = function (e) {
        var t, o, n = PathAnalyserUtils_1.PathAnalyserUtils.getLegalMoves(e, this._soloCollectTileIds);
        if (0 === n.length)
            return 0 === e.aliveTileCount;
        try {
            for (var i = __values(n), a = i.next(); !a.done; a = i.next()) {
                var l = a.value, s = e.clone();
                s.makeMove(l);
                if (PathAnalyserUtils_1.PathAnalyserUtils.getLegalMoves(s, this._soloCollectTileIds).length > 0 || 0 === s.aliveTileCount)
                    return true;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return false;
    };
    PathAnalyser.prototype.analyzeFailData = function (e) {
        for (var t, o, n, i, l = 0;;) {
            var s = PathAnalyserUtils_1.PathAnalyserUtils.getLegalMoves(e, this._soloCollectTileIds);
            if (0 === s.length)
                break;
            e.makeMove(s[0]);
            l++;
        }
        if (this._highlightColor.length > 0 || -1 !== this._checkingBadColor) {
            var u = new Array(256).fill(0), p = 0;
            try {
                for (var f = __values(e.aliveTiles), d = f.next(); !d.done; d = f.next()) {
                    var h = d.value;
                    if (this._soloCollectTileIds.has(h.id)) {
                        p++;
                    }
                    else {
                        u[h.cardId]++;
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
                    d && !d.done && (o = f.return) && o.call(f);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            try {
                for (var y = __values(this._highlightColorMaxCounts), m = y.next(); !m.done; m = y.next()) {
                    var v = __read(m.value, 2), g = v[0], _ = v[1];
                    if (g === this._checkingBadColor) {
                        _ < p && this._highlightColorMaxCounts.set(g, p);
                    }
                    else {
                        u[g] > _ && this._highlightColorMaxCounts.set(g, u[g]);
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
                    m && !m.done && (i = y.return) && i.call(y);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
        }
        this._parent.addNode(e, l) && -1 === this._checkingBadColor && this._pendingFailBoardTasks.push({
            level: e.clone(),
            uselessMoveCount: l
        });
    };
    return PathAnalyser;
}());
exports.PathAnalyser = PathAnalyser;

cc._RF.pop();