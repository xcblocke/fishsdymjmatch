"use strict";
cc._RF.push(module, '5784b8ndy5Gz5CA67YmgHpz', 'FailBoardAnalyzeTool');
// Scripts/FailBoardAnalyzeTool.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FailBoardAnalyzeTool = void 0;
var PathAnalyser_1 = require("./PathAnalyser");
var PathAnalyserTypes_1 = require("./PathAnalyserTypes");
var FailBoardAnalyzeTool = /** @class */ (function () {
    function FailBoardAnalyzeTool(e, t, o, n, i) {
        if (i === void 0) { i = PathAnalyserTypes_1.DEFAULT_FRAME_CONFIG; }
        this._goodColors = new Set();
        this._lockLoopList = [];
        this._colorCountArray = new Array(256).fill(0);
        this._lockDownColors = new Map();
        this._lockUpColors = new Map();
        this._suspectColors = [];
        this._level = null;
        this._parent = null;
        this._uselessMoveCount = null;
        this._recordBadGroupCallback = null;
        this._frameConfig = null;
        this._level = e;
        this._parent = t;
        this._uselessMoveCount = o;
        this._recordBadGroupCallback = n;
        this._frameConfig = i;
    }
    FailBoardAnalyzeTool.prototype.analyze = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.initBaseData();
                        return [4 /*yield*/, this.analyzeColorLockingRelations()];
                    case 1:
                        _a.sent();
                        this.getBadMahjongGroupAtLockingNet();
                        this.judgeLevelBadMoves();
                        return [2 /*return*/];
                }
            });
        });
    };
    FailBoardAnalyzeTool.prototype.initBaseData = function () {
        var e, t, o, n, i, a, l = this._level.moveList, s = l.length - this._uselessMoveCount;
        try {
            for (var c = __values(this._level.unlockTiles), u = c.next(); !u.done; u = c.next()) {
                for (var p = (m = u.value).cardId, f = false, d = 0; d < s; d++)
                    if (l[d].tile1.cardId === p) {
                        f = true;
                        break;
                    }
                f && this._suspectColors.push(p);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                u && !u.done && (t = c.return) && t.call(c);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        try {
            for (var h = __values(this._level.aliveTiles), y = h.next(); !y.done; y = h.next()) {
                var m = y.value;
                this._colorCountArray[m.cardId]++;
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                y && !y.done && (n = h.return) && n.call(h);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        try {
            for (var v = __values(this._suspectColors), g = v.next(); !g.done; g = v.next())
                p = g.value;
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                g && !g.done && (a = v.return) && a.call(v);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
    };
    FailBoardAnalyzeTool.prototype.analyzeColorLockingRelations = function () {
        return __awaiter(this, void 0, Promise, function () {
            var e, t, o, n, a, l;
            return __generator(this, function (i) {
                switch (i.label) {
                    case 0:
                        i.label = 1;
                    case 1:
                        i.trys.push([1, 6, 7, 8]);
                        e = __values(this._suspectColors), t = e.next();
                        i.label = 2;
                    case 2:
                        if (t.done)
                            return [3, 5];
                        o = t.value;
                        return [4, this.setColorLockingColor(o)];
                    case 3:
                        i.sent();
                        i.label = 4;
                    case 4:
                        t = e.next();
                        return [3, 2];
                    case 5:
                        return [3, 8];
                    case 6:
                        n = i.sent();
                        a = {
                            error: n
                        };
                        return [3, 8];
                    case 7:
                        try {
                            t && !t.done && (l = e.return) && l.call(e);
                        }
                        finally {
                            if (a)
                                throw a.error;
                        }
                        return [7];
                    case 8:
                        return [2];
                }
            });
        });
    };
    FailBoardAnalyzeTool.prototype.setColorLockingColor = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, o, n, a, l, c, u, p, f, d, h;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        t = this._level.clone();
                        return [4 /*yield*/, new PathAnalyser_1.PathAnalyser(t, this._parent, e, this._suspectColors, {
                                isCancellationRequested: false,
                                cancel: function () {
                                    this.isCancellationRequested = true;
                                }
                            }, this._frameConfig).analyze()];
                    case 1:
                        o = _a.sent();
                        n = o.highlightColorMaxCounts;
                        a = n.get(e) || 0;
                        if (this._colorCountArray[e] - a <= 1) {
                            this.markColorAsGoodColor(e);
                            return [2 /*return*/];
                        }
                        this._lockDownColors.has(e) || this._lockDownColors.set(e, new Set());
                        this._lockUpColors.has(e) || this._lockUpColors.set(e, new Set());
                        this._lockDownColors.get(e).add(e);
                        this._lockUpColors.get(e).add(e);
                        l = [];
                        try {
                            for (c = __values(this._suspectColors), u = c.next(); !u.done; u = c.next()) {
                                p = u.value;
                                if (!this.isGoodColor(p) && e !== p) {
                                    f = n.get(p) || 0;
                                    if (this._colorCountArray[p] !== f) {
                                        this._lockDownColors.get(e).add(p);
                                        this._lockUpColors.has(p) || this._lockUpColors.set(p, new Set());
                                        this._lockUpColors.get(p).add(e);
                                        l.push(p);
                                    }
                                }
                            }
                        }
                        catch (e) {
                            d = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                u && !u.done && (h = c.return) && h.call(c);
                            }
                            finally {
                                if (d)
                                    throw d.error;
                            }
                        }
                        l.length;
                        return [2 /*return*/];
                }
            });
        });
    };
    FailBoardAnalyzeTool.prototype.isGoodColor = function (e) {
        return this._goodColors.has(e);
    };
    FailBoardAnalyzeTool.prototype.markColorAsGoodColor = function (e) {
        var t, o;
        this._goodColors.add(e);
        if (this._lockUpColors.has(e)) {
            var n = __spreadArrays(this._lockUpColors.get(e));
            try {
                for (var i = __values(n), a = i.next(); !a.done; a = i.next()) {
                    var s = a.value;
                    this._lockDownColors.has(s) && this._lockDownColors.get(s).delete(e);
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
        }
    };
    FailBoardAnalyzeTool.prototype.getBadMahjongGroupAtLockingNet = function () {
        for (var e, t, o = new Set(), n = true; n;) {
            n = false;
            var i = function i(e) {
                var t, i, s, c;
                if (a.isGoodColor(e) || o.has(e))
                    return "continue";
                var u = a._lockDownColors.has(e) ? new Set(a._lockDownColors.get(e)) : new Set(), p = a._lockUpColors.has(e) ? new Set(a._lockUpColors.get(e)) : new Set();
                if (!a.setsEqual(u, p)) {
                    var f;
                    f = u.size > p.size ? new Set(__spreadArrays(u).filter(function (e) {
                        return !p.has(e);
                    })) : new Set(__spreadArrays(u).filter(function (e) {
                        return p.has(e);
                    }));
                    try {
                        for (var d = (t = void 0, __values(f)), h = d.next(); !h.done; h = d.next()) {
                            var y = h.value;
                            a.markColorAsGoodColor(y);
                        }
                    }
                    catch (e) {
                        t = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            h && !h.done && (i = d.return) && i.call(d);
                        }
                        finally {
                            if (t)
                                throw t.error;
                        }
                    }
                    n = true;
                    return "break";
                }
                var m = __spreadArrays(u);
                try {
                    for (var v = (s = void 0, __values(m)), g = v.next(); !g.done; g = v.next()) {
                        var _ = g.value;
                        o.add(_);
                    }
                }
                catch (e) {
                    s = {
                        error: e
                    };
                }
                finally {
                    try {
                        g && !g.done && (c = v.return) && c.call(v);
                    }
                    finally {
                        if (s)
                            throw s.error;
                    }
                }
                a._lockLoopList.push(m);
            }, a = this;
            try {
                for (var s = (e = void 0, __values(this._suspectColors)), c = s.next(); !c.done && "break" !== i(c.value); c = s.next())
                    ;
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    c && !c.done && (t = s.return) && t.call(s);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
        }
    };
    FailBoardAnalyzeTool.prototype.setsEqual = function (e, t) {
        var o, n;
        if (e.size !== t.size)
            return false;
        try {
            for (var i = __values(e), a = i.next(); !a.done; a = i.next()) {
                var l = a.value;
                if (!t.has(l))
                    return false;
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (n = i.return) && n.call(i);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return true;
    };
    FailBoardAnalyzeTool.prototype.judgeLevelBadMoves = function () {
        var e, t, o, n, i = this._level.moveList, a = i.length - this._uselessMoveCount;
        try {
            for (var l = __values(this._lockLoopList), s = l.next(); !s.done; s = l.next()) {
                var c = s.value, u = [];
                try {
                    for (var p = (o = void 0, __values(c)), f = p.next(); !f.done; f = p.next())
                        for (var d = f.value, h = 0; h < a; h++) {
                            var y = i[h];
                            if (y.tile1.cardId === d) {
                                u.push(y.tile1);
                                u.push(y.tile2);
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
                u.length > 0 && this._recordBadGroupCallback(u);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                s && !s.done && (t = l.return) && t.call(l);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    return FailBoardAnalyzeTool;
}());
exports.FailBoardAnalyzeTool = FailBoardAnalyzeTool;

cc._RF.pop();