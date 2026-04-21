
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PathAnalyser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1BhdGhBbmFseXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUF3RDtBQUN4RCwrREFBOEQ7QUFDOUQseURBQTJEO0FBQzNELElBQUssQ0FNSjtBQU5ELFdBQUssQ0FBQztJQUNKLG1EQUFxQixDQUFBO0lBQ3JCLGlEQUFvQixDQUFBO0lBQ3BCLDJDQUFpQixDQUFBO0lBQ2pCLHlDQUFnQixDQUFBO0lBQ2hCLHlCQUFRLENBQUE7QUFDVixDQUFDLEVBTkksQ0FBQyxLQUFELENBQUMsUUFNTDtBQUNEO0lBaUJFLHNCQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBd0I7UUFBeEIsa0JBQUEsRUFBQSxJQUFJLHdDQUFvQjtRQWhCbkQsd0JBQW1CLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNoQyw2QkFBd0IsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3JDLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2Qix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFLbEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLENB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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXRoQW5hbHlzZXJVdGlscyB9IGZyb20gJy4vUGF0aEFuYWx5c2VyVXRpbHMnO1xuaW1wb3J0IHsgRmFpbEJvYXJkQW5hbHl6ZVRvb2wgfSBmcm9tICcuL0ZhaWxCb2FyZEFuYWx5emVUb29sJztcbmltcG9ydCB7IERFRkFVTFRfRlJBTUVfQ09ORklHIH0gZnJvbSAnLi9QYXRoQW5hbHlzZXJUeXBlcyc7XG5lbnVtIHMge1xuICBSZW1vdmVTb2xvQ29sbGVjdCA9IDAsXG4gIFJlbW92ZUZyZWVDb2xvcnMgPSAxLFxuICBHZXRMZWdhbE1vdmVzID0gMixcbiAgUHJvY2Vzc01vdmVzID0gMyxcbiAgRG9uZSA9IDQsXG59XG5leHBvcnQgY2xhc3MgUGF0aEFuYWx5c2VyIHtcbiAgX3NvbG9Db2xsZWN0VGlsZUlkcyA9IG5ldyBTZXQoKTtcbiAgX2hpZ2hsaWdodENvbG9yTWF4Q291bnRzID0gbmV3IE1hcCgpO1xuICBfZGZzU3RhY2sgPSBbXTtcbiAgX2ZyYW1lU3RhcnRUaW1lID0gMDtcbiAgX2lzUnVubmluZyA9IGZhbHNlO1xuICBfbm9kZUNvdW50ID0gMDtcbiAgX3BlbmRpbmdGYWlsQm9hcmRUYXNrcyA9IFtdO1xuICBfb3JpZ2luYWxMZXZlbCA9IG51bGw7XG4gIF9wYXJlbnQgPSBudWxsO1xuICBfY2hlY2tpbmdCYWRDb2xvciA9IG51bGw7XG4gIF9oaWdobGlnaHRDb2xvciA9IG51bGw7XG4gIF9jYW5jZWxsYXRpb25Ub2tlbiA9IG51bGw7XG4gIF9mcmFtZUNvbmZpZyA9IG51bGw7XG4gIGdldCBoaWdobGlnaHRDb2xvck1heENvdW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5faGlnaGxpZ2h0Q29sb3JNYXhDb3VudHM7XG4gIH1cbiAgY29uc3RydWN0b3IoZSwgdCwgbywgbiwgaSwgciA9IERFRkFVTFRfRlJBTUVfQ09ORklHKSB7XG4gICAgdGhpcy5fb3JpZ2luYWxMZXZlbCA9IGU7XG4gICAgdGhpcy5fcGFyZW50ID0gdDtcbiAgICB0aGlzLl9jaGVja2luZ0JhZENvbG9yID0gbztcbiAgICB0aGlzLl9oaWdobGlnaHRDb2xvciA9IG47XG4gICAgdGhpcy5fY2FuY2VsbGF0aW9uVG9rZW4gPSBpO1xuICAgIHRoaXMuX2ZyYW1lQ29uZmlnID0gcjtcbiAgfVxuICBhc3luYyBhbmFseXplKCkge1xuICAgIHZhciBlLCB0LCBvLCBuLCBhLCBsLCBjLCB1LCBwLCBmLCBkO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKGUgPSBfX3ZhbHVlcyh0aGlzLl9oaWdobGlnaHRDb2xvciksIHQgPSBlLm5leHQoKTsgIXQuZG9uZTsgdCA9IGUubmV4dCgpKSB7XG4gICAgICAgIG8gPSB0LnZhbHVlO1xuICAgICAgICB0aGlzLl9oaWdobGlnaHRDb2xvck1heENvdW50cy5zZXQobywgMCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHQgJiYgIXQuZG9uZSAmJiAocCA9IGUucmV0dXJuKSAmJiBwLmNhbGwoZSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodSkgdGhyb3cgdS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKC0xICE9PSB0aGlzLl9jaGVja2luZ0JhZENvbG9yKSB7XG4gICAgICB0aGlzLl9oaWdobGlnaHRDb2xvck1heENvdW50cy5oYXModGhpcy5fY2hlY2tpbmdCYWRDb2xvcikgfHwgdGhpcy5faGlnaGxpZ2h0Q29sb3JNYXhDb3VudHMuc2V0KHRoaXMuX2NoZWNraW5nQmFkQ29sb3IsIDApO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChuID0gX192YWx1ZXModGhpcy5fb3JpZ2luYWxMZXZlbC5hbGl2ZVRpbGVzKSwgYSA9IG4ubmV4dCgpOyAhYS5kb25lOyBhID0gbi5uZXh0KCkpIChsID0gYS52YWx1ZSkuY2FyZElkID09PSB0aGlzLl9jaGVja2luZ0JhZENvbG9yICYmIHRoaXMuX3NvbG9Db2xsZWN0VGlsZUlkcy5hZGQobC5pZCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGYgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYSAmJiAhYS5kb25lICYmIChkID0gbi5yZXR1cm4pICYmIGQuY2FsbChuKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoZikgdGhyb3cgZi5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9kZnNTdGFjayA9IFt7XG4gICAgICBsZXZlbDogdGhpcy5fb3JpZ2luYWxMZXZlbCxcbiAgICAgIHBoYXNlOiBzLlJlbW92ZVNvbG9Db2xsZWN0XG4gICAgfV07XG4gICAgdGhpcy5faXNSdW5uaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9ub2RlQ291bnQgPSAwO1xuICAgIHdoaWxlICghKCF0aGlzLl9pc1J1bm5pbmcgfHwgISh0aGlzLl9kZnNTdGFjay5sZW5ndGggPiAwIHx8IHRoaXMuX3BlbmRpbmdGYWlsQm9hcmRUYXNrcy5sZW5ndGggPiAwKSkpIHtcbiAgICAgIHRoaXMuX2ZyYW1lU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIGZvciAoOyB0aGlzLl9kZnNTdGFjay5sZW5ndGggPiAwICYmICF0aGlzLnNob3VsZFlpZWxkKCk7KSB7XG4gICAgICAgIGlmICh0aGlzLl9jYW5jZWxsYXRpb25Ub2tlbi5pc0NhbmNlbGxhdGlvblJlcXVlc3RlZCkge1xuICAgICAgICAgIHRoaXMuX2lzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY2FuY2VsbGVkOiB0cnVlLFxuICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3JNYXhDb3VudHM6IHRoaXMuX2hpZ2hsaWdodENvbG9yTWF4Q291bnRzLFxuICAgICAgICAgICAgbm9kZUNvdW50OiB0aGlzLl9ub2RlQ291bnRcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvY2Vzc09uZVN0ZXAoKTtcbiAgICAgIH1cbiAgICAgIHdoaWxlICghKCEodGhpcy5fcGVuZGluZ0ZhaWxCb2FyZFRhc2tzLmxlbmd0aCA+IDApIHx8IHRoaXMuc2hvdWxkWWllbGQoKSkpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhbmNlbGxhdGlvblRva2VuLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKSB7XG4gICAgICAgICAgdGhpcy5faXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgICBjYW5jZWxsZWQ6IHRydWUsXG4gICAgICAgICAgICBoaWdobGlnaHRDb2xvck1heENvdW50czogdGhpcy5faGlnaGxpZ2h0Q29sb3JNYXhDb3VudHMsXG4gICAgICAgICAgICBub2RlQ291bnQ6IHRoaXMuX25vZGVDb3VudFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgYyA9IHRoaXMuX3BlbmRpbmdGYWlsQm9hcmRUYXNrcy5zaGlmdCgpO1xuICAgICAgICBhd2FpdCB0aGlzLmV4ZWN1dGVGYWlsQm9hcmRBbmFseXNpcyhjLmxldmVsLCBjLnVzZWxlc3NNb3ZlQ291bnQpO1xuICAgICAgfVxuICAgICAgaWYgKCh0aGlzLl9kZnNTdGFjay5sZW5ndGggPiAwIHx8IHRoaXMuX3BlbmRpbmdGYWlsQm9hcmRUYXNrcy5sZW5ndGggPiAwKSAmJiB0aGlzLl9pc1J1bm5pbmcpIHtcbiAgICAgICAgYXdhaXQgdGhpcy53YWl0TmV4dEZyYW1lKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjb21wbGV0ZWQ6IHRydWUsXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlLFxuICAgICAgaGlnaGxpZ2h0Q29sb3JNYXhDb3VudHM6IHRoaXMuX2hpZ2hsaWdodENvbG9yTWF4Q291bnRzLFxuICAgICAgbm9kZUNvdW50OiB0aGlzLl9ub2RlQ291bnRcbiAgICB9O1xuICB9XG4gIGFzeW5jIGV4ZWN1dGVGYWlsQm9hcmRBbmFseXNpcyhlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzO1xuICAgIGF3YWl0IG5ldyBGYWlsQm9hcmRBbmFseXplVG9vbChlLCB0aGlzLl9wYXJlbnQsIHQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gby5fcGFyZW50LnJlY29yZEJhZE1haGpvbmdHcm91cChlKTtcbiAgICB9LCB0aGlzLl9mcmFtZUNvbmZpZykuYW5hbHl6ZSgpO1xuICAgIHJldHVybjtcbiAgfVxuICBzaG91bGRZaWVsZCgpIHtcbiAgICByZXR1cm4gRGF0ZS5ub3coKSAtIHRoaXMuX2ZyYW1lU3RhcnRUaW1lID49IHRoaXMuX2ZyYW1lQ29uZmlnLm1heEZyYW1lVGltZTtcbiAgfVxuICB3YWl0TmV4dEZyYW1lKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHNldFRpbWVvdXQodCwgZS5fZnJhbWVDb25maWcubWF4RnJhbWVUaW1lKTtcbiAgICB9KTtcbiAgfVxuICBwcm9jZXNzT25lU3RlcCgpIHtcbiAgICBpZiAoMCAhPT0gdGhpcy5fZGZzU3RhY2subGVuZ3RoKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2Rmc1N0YWNrW3RoaXMuX2Rmc1N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgc3dpdGNoIChlLnBoYXNlKSB7XG4gICAgICAgIGNhc2Ugcy5SZW1vdmVTb2xvQ29sbGVjdDpcbiAgICAgICAgICB0aGlzLnBoYXNlUmVtb3ZlU29sb0NvbGxlY3QoZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugcy5SZW1vdmVGcmVlQ29sb3JzOlxuICAgICAgICAgIHRoaXMucGhhc2VSZW1vdmVGcmVlQ29sb3JzKGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHMuR2V0TGVnYWxNb3ZlczpcbiAgICAgICAgICB0aGlzLnBoYXNlR2V0TGVnYWxNb3ZlcyhlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBzLlByb2Nlc3NNb3ZlczpcbiAgICAgICAgICB0aGlzLnBoYXNlUHJvY2Vzc01vdmVzKGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHMuRG9uZTpcbiAgICAgICAgICB0aGlzLl9kZnNTdGFjay5wb3AoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcGhhc2VSZW1vdmVTb2xvQ29sbGVjdChlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IGUubGV2ZWw7XG4gICAgaWYgKDAgIT09IG4uYWxpdmVUaWxlQ291bnQpIHtcbiAgICAgIHZhciBpID0gZmFsc2UsXG4gICAgICAgIGEgPSBuLnVubG9ja1RpbGVzO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKGEpLCBjID0gbC5uZXh0KCk7ICFjLmRvbmU7IGMgPSBsLm5leHQoKSkge1xuICAgICAgICAgIHZhciB1ID0gYy52YWx1ZTtcbiAgICAgICAgICBpZiAodGhpcy5fc29sb0NvbGxlY3RUaWxlSWRzLmhhcyh1LmlkKSkge1xuICAgICAgICAgICAgbi5yZW1vdmVTaW5nbGVUaWxlKHUpO1xuICAgICAgICAgICAgaSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYyAmJiAhYy5kb25lICYmIChvID0gbC5yZXR1cm4pICYmIG8uY2FsbChsKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaSB8fCAoZS5waGFzZSA9IHMuUmVtb3ZlRnJlZUNvbG9ycyk7XG4gICAgfSBlbHNlIGUucGhhc2UgPSBzLkRvbmU7XG4gIH1cbiAgcGhhc2VSZW1vdmVGcmVlQ29sb3JzKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gdGhpcyxcbiAgICAgIGkgPSBlLmxldmVsLFxuICAgICAgYSA9IFBhdGhBbmFseXNlclV0aWxzLmdldEZyZWVDb2xvcnMoaSwgdGhpcy5fc29sb0NvbGxlY3RUaWxlSWRzKTtcbiAgICBpZiAoMCAhPT0gYS5sZW5ndGgpIHtcbiAgICAgIHZhciBsID0gZnVuY3Rpb24gbChlKSB7XG4gICAgICAgIHZhciB0ID0gaS51bmxvY2tUaWxlcy5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByZXR1cm4gdC5jYXJkSWQgPT09IGUgJiYgIW4uX3NvbG9Db2xsZWN0VGlsZUlkcy5oYXModC5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0Lmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgbyA9IE1hdGguZmxvb3IodC5sZW5ndGggLyAyKSwgciA9IDA7IHIgPCBvOyByKyspIGkubWFrZU1vdmVCeVNpbXBsZSh0WzIgKiByXSwgdFsyICogciArIDFdKTtcbiAgICAgIH07XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciB1ID0gX192YWx1ZXMoYSksIHAgPSB1Lm5leHQoKTsgIXAuZG9uZTsgcCA9IHUubmV4dCgpKSBsKHAudmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHAgJiYgIXAuZG9uZSAmJiAobyA9IHUucmV0dXJuKSAmJiBvLmNhbGwodSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGUucGhhc2UgPSBzLlJlbW92ZVNvbG9Db2xsZWN0O1xuICAgIH0gZWxzZSBlLnBoYXNlID0gcy5HZXRMZWdhbE1vdmVzO1xuICB9XG4gIHBoYXNlR2V0TGVnYWxNb3ZlcyhlKSB7XG4gICAgdmFyIHQgPSBlLmxldmVsLFxuICAgICAgbyA9IFBhdGhBbmFseXNlclV0aWxzLmdldExlZ2FsTW92ZXModCwgdGhpcy5fc29sb0NvbGxlY3RUaWxlSWRzKTtcbiAgICBlLmxlZ2FsTW92ZXMgPSBvO1xuICAgIGlmICgwID09PSBvLmxlbmd0aCAmJiB0LmFsaXZlVGlsZUNvdW50ID4gMCkge1xuICAgICAgdGhpcy5hbmFseXplRmFpbERhdGEodCk7XG4gICAgICBlLnBoYXNlID0gcy5Eb25lO1xuICAgIH0gZWxzZSBpZiAoMCAhPT0gdC5hbGl2ZVRpbGVDb3VudCkge1xuICAgICAgaWYgKDEgIT09IG8ubGVuZ3RoKSB7XG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQuYWRkTm9kZSh0LCAwKSkge1xuICAgICAgICAgIHRoaXMuX25vZGVDb3VudCsrO1xuICAgICAgICAgIGUucGhhc2UgPSBzLlByb2Nlc3NNb3ZlcztcbiAgICAgICAgICBlLm1vdmVHcm91cFN0YXRlID0gdGhpcy5pbml0TW92ZUdyb3VwU3RhdGUodCwgbyk7XG4gICAgICAgIH0gZWxzZSBlLnBoYXNlID0gcy5Eb25lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdC5tYWtlTW92ZShvWzBdKTtcbiAgICAgICAgZS5waGFzZSA9IHMuUmVtb3ZlU29sb0NvbGxlY3Q7XG4gICAgICB9XG4gICAgfSBlbHNlIGUucGhhc2UgPSBzLkRvbmU7XG4gIH1cbiAgcGhhc2VQcm9jZXNzTW92ZXMoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSBlLmxldmVsLFxuICAgICAgaSA9IGUubW92ZUdyb3VwU3RhdGUsXG4gICAgICBhID0gZS5sZWdhbE1vdmVzO1xuICAgIGlmIChpLnRhcmdldExlbmd0aCA+IGkubWF4R3JvdXBMZW5ndGgpIHtcbiAgICAgIDAgPT09IGkudXNhYmxlTW92ZUdyb3VwLmxlbmd0aCAmJiB0aGlzLmFuYWx5emVGYWlsRGF0YShuKTtcbiAgICAgIGUucGhhc2UgPSBzLkRvbmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghaS5nZW5lcmF0b3JTdGF0ZSkge1xuICAgICAgICBpLmdlbmVyYXRvclN0YXRlID0ge1xuICAgICAgICAgIHN0YWNrOiBbe1xuICAgICAgICAgICAgY3VycmVudEdyb3VwOiBbXSxcbiAgICAgICAgICAgIG5leHRJbmRleDogMFxuICAgICAgICAgIH1dLFxuICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIGkuY2hlY2tpbmdNb3ZlSW5kZXhMaXN0ID0gW107XG4gICAgICAgIGkuY3VycmVudENoZWNrSW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgaWYgKCFpLmdlbmVyYXRvclN0YXRlLmRvbmUpIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU1vdmVHcm91cHNCYXRjaChpLnRhcmdldExlbmd0aCwgYSwgaS5jaGVja2luZ01vdmVJbmRleExpc3QsIGkuc2tpcEluZGV4U2V0LCBpLnVzYWJsZU1vdmVHcm91cCwgaS5nZW5lcmF0b3JTdGF0ZSwgNTApO1xuICAgICAgICBpZiAoIWkuZ2VuZXJhdG9yU3RhdGUuZG9uZSkgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGkuY3VycmVudENoZWNrSW5kZXggPCBpLmNoZWNraW5nTW92ZUluZGV4TGlzdC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGwgPSBpLmNoZWNraW5nTW92ZUluZGV4TGlzdFtpLmN1cnJlbnRDaGVja0luZGV4XTtcbiAgICAgICAgaS5jdXJyZW50Q2hlY2tJbmRleCsrO1xuICAgICAgICB2YXIgYyA9IG4uY2xvbmUoKSxcbiAgICAgICAgICB1ID0gW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgcCA9IF9fdmFsdWVzKGwpLCBmID0gcC5uZXh0KCk7ICFmLmRvbmU7IGYgPSBwLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIGQgPSBmLnZhbHVlO1xuICAgICAgICAgICAgZCA+PSBhLmxlbmd0aCB8fCB1LnB1c2goYVtkXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZiAmJiAhZi5kb25lICYmIChvID0gcC5yZXR1cm4pICYmIG8uY2FsbChwKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh1Lmxlbmd0aCAhPT0gbC5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuanVkZ2VNb3ZlR3JvdXBVdGlsaXR5KGMsIHUsIGkpKSB7XG4gICAgICAgICAgaS51c2FibGVNb3ZlR3JvdXAucHVzaChsKTtcbiAgICAgICAgICAxID09PSBpLnRhcmdldExlbmd0aCAmJiBpLnNraXBJbmRleFNldC5hZGQobFswXSk7XG4gICAgICAgICAgdGhpcy5fZGZzU3RhY2sucHVzaCh7XG4gICAgICAgICAgICBsZXZlbDogYyxcbiAgICAgICAgICAgIHBoYXNlOiBzLlJlbW92ZVNvbG9Db2xsZWN0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkudGFyZ2V0TGVuZ3RoKys7XG4gICAgICAgIGkuY2hlY2tpbmdNb3ZlSW5kZXhMaXN0ID0gW107XG4gICAgICAgIGkuY3VycmVudENoZWNrSW5kZXggPSAwO1xuICAgICAgICBpLmdlbmVyYXRvclN0YXRlID0gdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpbml0TW92ZUdyb3VwU3RhdGUoZSwgdCkge1xuICAgIHZhciBvLFxuICAgICAgbixcbiAgICAgIGksXG4gICAgICBhLFxuICAgICAgbCA9IGUudW5sb2NrVGlsZXMsXG4gICAgICBzID0gbmV3IEFycmF5KDI1NikuZmlsbCgwKSxcbiAgICAgIGMgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKGwpLCBwID0gdS5uZXh0KCk7ICFwLmRvbmU7IHAgPSB1Lm5leHQoKSkge1xuICAgICAgICB2YXIgZiA9IHAudmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5fc29sb0NvbGxlY3RUaWxlSWRzLmhhcyhmLmlkKSkge1xuICAgICAgICAgIDAgPT09IHNbZi5jYXJkSWRdICYmIGMucHVzaChmLmNhcmRJZCk7XG4gICAgICAgICAgc1tmLmNhcmRJZF0rKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBwICYmICFwLmRvbmUgJiYgKG4gPSB1LnJldHVybikgJiYgbi5jYWxsKHUpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGMuc29ydChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIGUgLSB0O1xuICAgIH0pO1xuICAgIHZhciBkID0gMDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaCA9IF9fdmFsdWVzKGMpLCB5ID0gaC5uZXh0KCk7ICF5LmRvbmU7IHkgPSBoLm5leHQoKSkge1xuICAgICAgICB2YXIgbSA9IHkudmFsdWU7XG4gICAgICAgIGQgKz0gTWF0aC5mbG9vcihzW21dIC8gMik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHkgJiYgIXkuZG9uZSAmJiAoYSA9IGgucmV0dXJuKSAmJiBhLmNhbGwoaCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhcmdldExlbmd0aDogMSxcbiAgICAgIG1heEdyb3VwTGVuZ3RoOiBkLFxuICAgICAgY2hlY2tpbmdNb3ZlSW5kZXhMaXN0OiBbXSxcbiAgICAgIGN1cnJlbnRDaGVja0luZGV4OiAwLFxuICAgICAgc2tpcEluZGV4U2V0OiBuZXcgU2V0KCksXG4gICAgICB1c2FibGVNb3ZlR3JvdXA6IFtdLFxuICAgICAgb2xkVW5sb2NraW5nQ29sb3JDb3VudEFycmF5OiBzLFxuICAgICAgb2xkTGVnYWxNb3Zlc0NvdW50OiB0Lmxlbmd0aCxcbiAgICAgIGFsbENvbG9yczogYyxcbiAgICAgIGdlbmVyYXRvclN0YXRlOiB2b2lkIDBcbiAgICB9O1xuICB9XG4gIGdlbmVyYXRlTW92ZUdyb3Vwc0JhdGNoKGUsIHQsIG8sIG4sIGksIGEsIHMpIHtcbiAgICBmb3IgKHZhciB1LCBwLCBmID0gMCwgZCA9IGEuc3RhY2s7IGQubGVuZ3RoID4gMCAmJiBmIDwgczspIHtcbiAgICAgIHZhciBoID0gZFtkLmxlbmd0aCAtIDFdLFxuICAgICAgICB5ID0gaC5jdXJyZW50R3JvdXA7XG4gICAgICBpZiAoeS5sZW5ndGggIT09IGUpIHtcbiAgICAgICAgZm9yICh2YXIgbSA9IDAgPT09IHkubGVuZ3RoID8gLTEgOiB5W3kubGVuZ3RoIC0gMV0sIHYgPSBlIC0geS5sZW5ndGgsIGcgPSB0Lmxlbmd0aCAtIHYsIF8gPSBmYWxzZSwgVCA9IGgubmV4dEluZGV4OyBUIDw9IGc7IFQrKykgaWYgKCEobi5oYXMoVCkgfHwgVCA8PSBtKSkge1xuICAgICAgICAgIHZhciBDID0gdFtUXSxcbiAgICAgICAgICAgIGIgPSBmYWxzZTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgRSA9ICh1ID0gdm9pZCAwLCBfX3ZhbHVlcyh5KSksIFMgPSBFLm5leHQoKTsgIVMuZG9uZTsgUyA9IEUubmV4dCgpKSB7XG4gICAgICAgICAgICAgIHZhciBJID0gUy52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKCEoSSA+PSB0Lmxlbmd0aCkgJiYgUGF0aEFuYWx5c2VyVXRpbHMuaXNDb25mbGljdCh0W0ldLCBDKSkge1xuICAgICAgICAgICAgICAgIGIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdSA9IHtcbiAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIFMgJiYgIVMuZG9uZSAmJiAocCA9IEUucmV0dXJuKSAmJiBwLmNhbGwoRSk7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICBpZiAodSkgdGhyb3cgdS5lcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICB2YXIgdyA9IFsuLi55LCAuLi5bVF1dO1xuICAgICAgICAgICAgaWYgKCFQYXRoQW5hbHlzZXJVdGlscy5oYXNNb3ZlR3JvdXBMaXN0U3ViU2V0KGksIHcpKSB7XG4gICAgICAgICAgICAgIGgubmV4dEluZGV4ID0gVCArIDE7XG4gICAgICAgICAgICAgIGQucHVzaCh7XG4gICAgICAgICAgICAgICAgY3VycmVudEdyb3VwOiB3LFxuICAgICAgICAgICAgICAgIG5leHRJbmRleDogVCArIDFcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIF8gPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXyB8fCBkLnBvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgby5wdXNoKFsuLi55XSk7XG4gICAgICAgIGYrKztcbiAgICAgICAgZC5wb3AoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgMCA9PT0gZC5sZW5ndGggJiYgKGEuZG9uZSA9IHRydWUpO1xuICAgIHJldHVybiBmO1xuICB9XG4gIGp1ZGdlTW92ZUdyb3VwVXRpbGl0eShlLCB0LCBvKSB7XG4gICAgdmFyIG4sXG4gICAgICBpLFxuICAgICAgYSxcbiAgICAgIGwsXG4gICAgICBzID0gbmV3IEFycmF5KDI1NikuZmlsbCgwKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKHQpLCBwID0gdS5uZXh0KCk7ICFwLmRvbmU7IHAgPSB1Lm5leHQoKSkgc1tkID0gKGcgPSBwLnZhbHVlKS50aWxlMS5jYXJkSWRdICs9IDI7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbiA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHAgJiYgIXAuZG9uZSAmJiAoaSA9IHUucmV0dXJuKSAmJiBpLmNhbGwodSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgcy5sZW5ndGg7IGQrKykgaWYgKDAgIT09IHNbZF0pIHtcbiAgICAgIHZhciBoID0gby5vbGRVbmxvY2tpbmdDb2xvckNvdW50QXJyYXlbZF0sXG4gICAgICAgIHkgPSBoIC0gc1tkXTtcbiAgICAgIGYgKz0gaCAqIChoIC0gMSkgLyAyIC0geSAqICh5IC0gMSkgLyAyO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbSA9IF9fdmFsdWVzKHQpLCB2ID0gbS5uZXh0KCk7ICF2LmRvbmU7IHYgPSBtLm5leHQoKSkge1xuICAgICAgICB2YXIgZyA9IHYudmFsdWU7XG4gICAgICAgIGUubWFrZU1vdmUoZyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHYgJiYgIXYuZG9uZSAmJiAobCA9IG0ucmV0dXJuKSAmJiBsLmNhbGwobSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYSkgdGhyb3cgYS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIF8gPSBQYXRoQW5hbHlzZXJVdGlscy5nZXRMZWdhbE1vdmVzKGUsIHRoaXMuX3NvbG9Db2xsZWN0VGlsZUlkcyk7XG4gICAgaWYgKDAgPT09IF8ubGVuZ3RoICYmIGUuYWxpdmVUaWxlQ291bnQgPiAwKSB7XG4gICAgICB0aGlzLmFuYWx5emVGYWlsRGF0YShlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG8ub2xkTGVnYWxNb3Zlc0NvdW50IC0gZiA8IF8ubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgVCA9IGUuY2xvbmUoKTtcbiAgICB0aGlzLmNhbkxldmVsU3ByZWFkKFQsIHRydWUpIHx8IHRoaXMuYW5hbHl6ZUZhaWxEYXRhKGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjYW5MZXZlbFNwcmVhZChlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IFBhdGhBbmFseXNlclV0aWxzLmdldExlZ2FsTW92ZXMoZSwgdGhpcy5fc29sb0NvbGxlY3RUaWxlSWRzKTtcbiAgICBpZiAoMCA9PT0gbi5sZW5ndGgpIHJldHVybiAwID09PSBlLmFsaXZlVGlsZUNvdW50O1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMobiksIGEgPSBpLm5leHQoKTsgIWEuZG9uZTsgYSA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gYS52YWx1ZSxcbiAgICAgICAgICBzID0gZS5jbG9uZSgpO1xuICAgICAgICBzLm1ha2VNb3ZlKGwpO1xuICAgICAgICBpZiAoUGF0aEFuYWx5c2VyVXRpbHMuZ2V0TGVnYWxNb3ZlcyhzLCB0aGlzLl9zb2xvQ29sbGVjdFRpbGVJZHMpLmxlbmd0aCA+IDAgfHwgMCA9PT0gcy5hbGl2ZVRpbGVDb3VudCkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGEgJiYgIWEuZG9uZSAmJiAobyA9IGkucmV0dXJuKSAmJiBvLmNhbGwoaSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGFuYWx5emVGYWlsRGF0YShlKSB7XG4gICAgZm9yICh2YXIgdCwgbywgbiwgaSwgbCA9IDA7Oykge1xuICAgICAgdmFyIHMgPSBQYXRoQW5hbHlzZXJVdGlscy5nZXRMZWdhbE1vdmVzKGUsIHRoaXMuX3NvbG9Db2xsZWN0VGlsZUlkcyk7XG4gICAgICBpZiAoMCA9PT0gcy5sZW5ndGgpIGJyZWFrO1xuICAgICAgZS5tYWtlTW92ZShzWzBdKTtcbiAgICAgIGwrKztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hpZ2hsaWdodENvbG9yLmxlbmd0aCA+IDAgfHwgLTEgIT09IHRoaXMuX2NoZWNraW5nQmFkQ29sb3IpIHtcbiAgICAgIHZhciB1ID0gbmV3IEFycmF5KDI1NikuZmlsbCgwKSxcbiAgICAgICAgcCA9IDA7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBmID0gX192YWx1ZXMoZS5hbGl2ZVRpbGVzKSwgZCA9IGYubmV4dCgpOyAhZC5kb25lOyBkID0gZi5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgaCA9IGQudmFsdWU7XG4gICAgICAgICAgaWYgKHRoaXMuX3NvbG9Db2xsZWN0VGlsZUlkcy5oYXMoaC5pZCkpIHtcbiAgICAgICAgICAgIHArKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdVtoLmNhcmRJZF0rKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkICYmICFkLmRvbmUgJiYgKG8gPSBmLnJldHVybikgJiYgby5jYWxsKGYpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciB5ID0gX192YWx1ZXModGhpcy5faGlnaGxpZ2h0Q29sb3JNYXhDb3VudHMpLCBtID0geS5uZXh0KCk7ICFtLmRvbmU7IG0gPSB5Lm5leHQoKSkge1xuICAgICAgICAgIHZhciB2ID0gX19yZWFkKG0udmFsdWUsIDIpLFxuICAgICAgICAgICAgZyA9IHZbMF0sXG4gICAgICAgICAgICBfID0gdlsxXTtcbiAgICAgICAgICBpZiAoZyA9PT0gdGhpcy5fY2hlY2tpbmdCYWRDb2xvcikge1xuICAgICAgICAgICAgXyA8IHAgJiYgdGhpcy5faGlnaGxpZ2h0Q29sb3JNYXhDb3VudHMuc2V0KGcsIHApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1W2ddID4gXyAmJiB0aGlzLl9oaWdobGlnaHRDb2xvck1heENvdW50cy5zZXQoZywgdVtnXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG4gPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbSAmJiAhbS5kb25lICYmIChpID0geS5yZXR1cm4pICYmIGkuY2FsbCh5KTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9wYXJlbnQuYWRkTm9kZShlLCBsKSAmJiAtMSA9PT0gdGhpcy5fY2hlY2tpbmdCYWRDb2xvciAmJiB0aGlzLl9wZW5kaW5nRmFpbEJvYXJkVGFza3MucHVzaCh7XG4gICAgICBsZXZlbDogZS5jbG9uZSgpLFxuICAgICAgdXNlbGVzc01vdmVDb3VudDogbFxuICAgIH0pO1xuICB9XG59Il19