
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/FailBoardAnalyzeTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZhaWxCb2FyZEFuYWx5emVUb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHlEQUEyRDtBQUMzRDtJQVlFLDhCQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUF3QjtRQUF4QixrQkFBQSxFQUFBLElBQUksd0NBQW9CO1FBWGhELGdCQUFXLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN4QixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixxQkFBZ0IsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsb0JBQWUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzVCLGtCQUFhLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMxQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6Qiw0QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFDL0IsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDSyxzQ0FBTyxHQUFiOzs7Ozt3QkFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ3BCLHFCQUFNLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxFQUFBOzt3QkFBekMsU0FBeUMsQ0FBQzt3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U0FDRjtJQUNILENBQUM7SUFDSCwyQkFBQztBQUFELENBN1VBLEFBNlVDLElBQUE7QUE3VVksb0RBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF0aEFuYWx5c2VyIH0gZnJvbSAnLi9QYXRoQW5hbHlzZXInO1xuaW1wb3J0IHsgREVGQVVMVF9GUkFNRV9DT05GSUcgfSBmcm9tICcuL1BhdGhBbmFseXNlclR5cGVzJztcbmV4cG9ydCBjbGFzcyBGYWlsQm9hcmRBbmFseXplVG9vbCB7XG4gIF9nb29kQ29sb3JzID0gbmV3IFNldCgpO1xuICBfbG9ja0xvb3BMaXN0ID0gW107XG4gIF9jb2xvckNvdW50QXJyYXkgPSBuZXcgQXJyYXkoMjU2KS5maWxsKDApO1xuICBfbG9ja0Rvd25Db2xvcnMgPSBuZXcgTWFwKCk7XG4gIF9sb2NrVXBDb2xvcnMgPSBuZXcgTWFwKCk7XG4gIF9zdXNwZWN0Q29sb3JzID0gW107XG4gIF9sZXZlbCA9IG51bGw7XG4gIF9wYXJlbnQgPSBudWxsO1xuICBfdXNlbGVzc01vdmVDb3VudCA9IG51bGw7XG4gIF9yZWNvcmRCYWRHcm91cENhbGxiYWNrID0gbnVsbDtcbiAgX2ZyYW1lQ29uZmlnID0gbnVsbDtcbiAgY29uc3RydWN0b3IoZSwgdCwgbywgbiwgaSA9IERFRkFVTFRfRlJBTUVfQ09ORklHKSB7XG4gICAgdGhpcy5fbGV2ZWwgPSBlO1xuICAgIHRoaXMuX3BhcmVudCA9IHQ7XG4gICAgdGhpcy5fdXNlbGVzc01vdmVDb3VudCA9IG87XG4gICAgdGhpcy5fcmVjb3JkQmFkR3JvdXBDYWxsYmFjayA9IG47XG4gICAgdGhpcy5fZnJhbWVDb25maWcgPSBpO1xuICB9XG4gIGFzeW5jIGFuYWx5emUoKSB7XG4gICAgdGhpcy5pbml0QmFzZURhdGEoKTtcbiAgICBhd2FpdCB0aGlzLmFuYWx5emVDb2xvckxvY2tpbmdSZWxhdGlvbnMoKTtcbiAgICB0aGlzLmdldEJhZE1haGpvbmdHcm91cEF0TG9ja2luZ05ldCgpO1xuICAgIHRoaXMuanVkZ2VMZXZlbEJhZE1vdmVzKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGluaXRCYXNlRGF0YSgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvLFxuICAgICAgbixcbiAgICAgIGksXG4gICAgICBhLFxuICAgICAgbCA9IHRoaXMuX2xldmVsLm1vdmVMaXN0LFxuICAgICAgcyA9IGwubGVuZ3RoIC0gdGhpcy5fdXNlbGVzc01vdmVDb3VudDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKHRoaXMuX2xldmVsLnVubG9ja1RpbGVzKSwgdSA9IGMubmV4dCgpOyAhdS5kb25lOyB1ID0gYy5uZXh0KCkpIHtcbiAgICAgICAgZm9yICh2YXIgcCA9IChtID0gdS52YWx1ZSkuY2FyZElkLCBmID0gZmFsc2UsIGQgPSAwOyBkIDwgczsgZCsrKSBpZiAobFtkXS50aWxlMS5jYXJkSWQgPT09IHApIHtcbiAgICAgICAgICBmID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBmICYmIHRoaXMuX3N1c3BlY3RDb2xvcnMucHVzaChwKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdSAmJiAhdS5kb25lICYmICh0ID0gYy5yZXR1cm4pICYmIHQuY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaCA9IF9fdmFsdWVzKHRoaXMuX2xldmVsLmFsaXZlVGlsZXMpLCB5ID0gaC5uZXh0KCk7ICF5LmRvbmU7IHkgPSBoLm5leHQoKSkge1xuICAgICAgICB2YXIgbSA9IHkudmFsdWU7XG4gICAgICAgIHRoaXMuX2NvbG9yQ291bnRBcnJheVttLmNhcmRJZF0rKztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgeSAmJiAheS5kb25lICYmIChuID0gaC5yZXR1cm4pICYmIG4uY2FsbChoKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdiA9IF9fdmFsdWVzKHRoaXMuX3N1c3BlY3RDb2xvcnMpLCBnID0gdi5uZXh0KCk7ICFnLmRvbmU7IGcgPSB2Lm5leHQoKSkgcCA9IGcudmFsdWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGcgJiYgIWcuZG9uZSAmJiAoYSA9IHYucmV0dXJuKSAmJiBhLmNhbGwodik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYW5hbHl6ZUNvbG9yTG9ja2luZ1JlbGF0aW9ucygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGUsIHQsIG8sIG4sIGEsIGw7XG4gICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgc3dpdGNoIChpLmxhYmVsKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgaS5sYWJlbCA9IDE7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgaS50cnlzLnB1c2goWzEsIDYsIDcsIDhdKTtcbiAgICAgICAgICAgIGUgPSBfX3ZhbHVlcyh0aGlzLl9zdXNwZWN0Q29sb3JzKSwgdCA9IGUubmV4dCgpO1xuICAgICAgICAgICAgaS5sYWJlbCA9IDI7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaWYgKHQuZG9uZSkgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgIG8gPSB0LnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLnNldENvbG9yTG9ja2luZ0NvbG9yKG8pXTtcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBpLnNlbnQoKTtcbiAgICAgICAgICAgIGkubGFiZWwgPSA0O1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHQgPSBlLm5leHQoKTtcbiAgICAgICAgICAgIHJldHVybiBbMywgMl07XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBuID0gaS5zZW50KCk7XG4gICAgICAgICAgICBhID0ge1xuICAgICAgICAgICAgICBlcnJvcjogblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBbMywgOF07XG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdCAmJiAhdC5kb25lICYmIChsID0gZS5yZXR1cm4pICYmIGwuY2FsbChlKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGlmIChhKSB0aHJvdyBhLmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFs3XTtcbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBhc3luYyBzZXRDb2xvckxvY2tpbmdDb2xvcihlKSB7XG4gICAgdmFyIHQsIG8sIG4sIGEsIGwsIGMsIHUsIHAsIGYsIGQsIGg7XG4gICAgdCA9IHRoaXMuX2xldmVsLmNsb25lKCk7XG4gICAgbyA9IGF3YWl0IG5ldyBQYXRoQW5hbHlzZXIodCwgdGhpcy5fcGFyZW50LCBlLCB0aGlzLl9zdXNwZWN0Q29sb3JzLCB7XG4gICAgICBpc0NhbmNlbGxhdGlvblJlcXVlc3RlZDogZmFsc2UsXG4gICAgICBjYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0NhbmNlbGxhdGlvblJlcXVlc3RlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgdGhpcy5fZnJhbWVDb25maWcpLmFuYWx5emUoKTtcbiAgICBuID0gby5oaWdobGlnaHRDb2xvck1heENvdW50cztcbiAgICBhID0gbi5nZXQoZSkgfHwgMDtcbiAgICBpZiAodGhpcy5fY29sb3JDb3VudEFycmF5W2VdIC0gYSA8PSAxKSB7XG4gICAgICB0aGlzLm1hcmtDb2xvckFzR29vZENvbG9yKGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9sb2NrRG93bkNvbG9ycy5oYXMoZSkgfHwgdGhpcy5fbG9ja0Rvd25Db2xvcnMuc2V0KGUsIG5ldyBTZXQoKSk7XG4gICAgdGhpcy5fbG9ja1VwQ29sb3JzLmhhcyhlKSB8fCB0aGlzLl9sb2NrVXBDb2xvcnMuc2V0KGUsIG5ldyBTZXQoKSk7XG4gICAgdGhpcy5fbG9ja0Rvd25Db2xvcnMuZ2V0KGUpLmFkZChlKTtcbiAgICB0aGlzLl9sb2NrVXBDb2xvcnMuZ2V0KGUpLmFkZChlKTtcbiAgICBsID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAoYyA9IF9fdmFsdWVzKHRoaXMuX3N1c3BlY3RDb2xvcnMpLCB1ID0gYy5uZXh0KCk7ICF1LmRvbmU7IHUgPSBjLm5leHQoKSkge1xuICAgICAgICBwID0gdS52YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLmlzR29vZENvbG9yKHApICYmIGUgIT09IHApIHtcbiAgICAgICAgICBmID0gbi5nZXQocCkgfHwgMDtcbiAgICAgICAgICBpZiAodGhpcy5fY29sb3JDb3VudEFycmF5W3BdICE9PSBmKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NrRG93bkNvbG9ycy5nZXQoZSkuYWRkKHApO1xuICAgICAgICAgICAgdGhpcy5fbG9ja1VwQ29sb3JzLmhhcyhwKSB8fCB0aGlzLl9sb2NrVXBDb2xvcnMuc2V0KHAsIG5ldyBTZXQoKSk7XG4gICAgICAgICAgICB0aGlzLl9sb2NrVXBDb2xvcnMuZ2V0KHApLmFkZChlKTtcbiAgICAgICAgICAgIGwucHVzaChwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBkID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdSAmJiAhdS5kb25lICYmIChoID0gYy5yZXR1cm4pICYmIGguY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChkKSB0aHJvdyBkLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBsLmxlbmd0aDtcbiAgICByZXR1cm47XG4gIH1cbiAgaXNHb29kQ29sb3IoZSkge1xuICAgIHJldHVybiB0aGlzLl9nb29kQ29sb3JzLmhhcyhlKTtcbiAgfVxuICBtYXJrQ29sb3JBc0dvb2RDb2xvcihlKSB7XG4gICAgdmFyIHQsIG87XG4gICAgdGhpcy5fZ29vZENvbG9ycy5hZGQoZSk7XG4gICAgaWYgKHRoaXMuX2xvY2tVcENvbG9ycy5oYXMoZSkpIHtcbiAgICAgIHZhciBuID0gWy4uLnRoaXMuX2xvY2tVcENvbG9ycy5nZXQoZSldO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgaSA9IF9fdmFsdWVzKG4pLCBhID0gaS5uZXh0KCk7ICFhLmRvbmU7IGEgPSBpLm5leHQoKSkge1xuICAgICAgICAgIHZhciBzID0gYS52YWx1ZTtcbiAgICAgICAgICB0aGlzLl9sb2NrRG93bkNvbG9ycy5oYXMocykgJiYgdGhpcy5fbG9ja0Rvd25Db2xvcnMuZ2V0KHMpLmRlbGV0ZShlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGEgJiYgIWEuZG9uZSAmJiAobyA9IGkucmV0dXJuKSAmJiBvLmNhbGwoaSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0QmFkTWFoam9uZ0dyb3VwQXRMb2NraW5nTmV0KCkge1xuICAgIGZvciAodmFyIGUsIHQsIG8gPSBuZXcgU2V0KCksIG4gPSB0cnVlOyBuOykge1xuICAgICAgbiA9IGZhbHNlO1xuICAgICAgdmFyIGkgPSBmdW5jdGlvbiBpKGUpIHtcbiAgICAgICAgICB2YXIgdCwgaSwgcywgYztcbiAgICAgICAgICBpZiAoYS5pc0dvb2RDb2xvcihlKSB8fCBvLmhhcyhlKSkgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICB2YXIgdSA9IGEuX2xvY2tEb3duQ29sb3JzLmhhcyhlKSA/IG5ldyBTZXQoYS5fbG9ja0Rvd25Db2xvcnMuZ2V0KGUpKSA6IG5ldyBTZXQoKSxcbiAgICAgICAgICAgIHAgPSBhLl9sb2NrVXBDb2xvcnMuaGFzKGUpID8gbmV3IFNldChhLl9sb2NrVXBDb2xvcnMuZ2V0KGUpKSA6IG5ldyBTZXQoKTtcbiAgICAgICAgICBpZiAoIWEuc2V0c0VxdWFsKHUsIHApKSB7XG4gICAgICAgICAgICB2YXIgZjtcbiAgICAgICAgICAgIGYgPSB1LnNpemUgPiBwLnNpemUgPyBuZXcgU2V0KFsuLi51XS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICFwLmhhcyhlKTtcbiAgICAgICAgICAgIH0pKSA6IG5ldyBTZXQoWy4uLnVdLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcC5oYXMoZSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBkID0gKHQgPSB2b2lkIDAsIF9fdmFsdWVzKGYpKSwgaCA9IGQubmV4dCgpOyAhaC5kb25lOyBoID0gZC5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgeSA9IGgudmFsdWU7XG4gICAgICAgICAgICAgICAgYS5tYXJrQ29sb3JBc0dvb2RDb2xvcih5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICB0ID0ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGggJiYgIWguZG9uZSAmJiAoaSA9IGQucmV0dXJuKSAmJiBpLmNhbGwoZCk7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG4gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIG0gPSBbLi4udV07XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIHYgPSAocyA9IHZvaWQgMCwgX192YWx1ZXMobSkpLCBnID0gdi5uZXh0KCk7ICFnLmRvbmU7IGcgPSB2Lm5leHQoKSkge1xuICAgICAgICAgICAgICB2YXIgXyA9IGcudmFsdWU7XG4gICAgICAgICAgICAgIG8uYWRkKF8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHMgPSB7XG4gICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBnICYmICFnLmRvbmUgJiYgKGMgPSB2LnJldHVybikgJiYgYy5jYWxsKHYpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKHMpIHRocm93IHMuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGEuX2xvY2tMb29wTGlzdC5wdXNoKG0pO1xuICAgICAgICB9LFxuICAgICAgICBhID0gdGhpcztcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHMgPSAoZSA9IHZvaWQgMCwgX192YWx1ZXModGhpcy5fc3VzcGVjdENvbG9ycykpLCBjID0gcy5uZXh0KCk7ICFjLmRvbmUgJiYgXCJicmVha1wiICE9PSBpKGMudmFsdWUpOyBjID0gcy5uZXh0KCkpO1xuICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICBlID0ge1xuICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGMgJiYgIWMuZG9uZSAmJiAodCA9IHMucmV0dXJuKSAmJiB0LmNhbGwocyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2V0c0VxdWFsKGUsIHQpIHtcbiAgICB2YXIgbywgbjtcbiAgICBpZiAoZS5zaXplICE9PSB0LnNpemUpIHJldHVybiBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaSA9IF9fdmFsdWVzKGUpLCBhID0gaS5uZXh0KCk7ICFhLmRvbmU7IGEgPSBpLm5leHQoKSkge1xuICAgICAgICB2YXIgbCA9IGEudmFsdWU7XG4gICAgICAgIGlmICghdC5oYXMobCkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYSAmJiAhYS5kb25lICYmIChuID0gaS5yZXR1cm4pICYmIG4uY2FsbChpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBqdWRnZUxldmVsQmFkTW92ZXMoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICBpID0gdGhpcy5fbGV2ZWwubW92ZUxpc3QsXG4gICAgICBhID0gaS5sZW5ndGggLSB0aGlzLl91c2VsZXNzTW92ZUNvdW50O1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBsID0gX192YWx1ZXModGhpcy5fbG9ja0xvb3BMaXN0KSwgcyA9IGwubmV4dCgpOyAhcy5kb25lOyBzID0gbC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGMgPSBzLnZhbHVlLFxuICAgICAgICAgIHUgPSBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBwID0gKG8gPSB2b2lkIDAsIF9fdmFsdWVzKGMpKSwgZiA9IHAubmV4dCgpOyAhZi5kb25lOyBmID0gcC5uZXh0KCkpIGZvciAodmFyIGQgPSBmLnZhbHVlLCBoID0gMDsgaCA8IGE7IGgrKykge1xuICAgICAgICAgICAgdmFyIHkgPSBpW2hdO1xuICAgICAgICAgICAgaWYgKHkudGlsZTEuY2FyZElkID09PSBkKSB7XG4gICAgICAgICAgICAgIHUucHVzaCh5LnRpbGUxKTtcbiAgICAgICAgICAgICAgdS5wdXNoKHkudGlsZTIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIG8gPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGYgJiYgIWYuZG9uZSAmJiAobiA9IHAucmV0dXJuKSAmJiBuLmNhbGwocCk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1Lmxlbmd0aCA+IDAgJiYgdGhpcy5fcmVjb3JkQmFkR3JvdXBDYWxsYmFjayh1KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcyAmJiAhcy5kb25lICYmICh0ID0gbC5yZXR1cm4pICYmIHQuY2FsbChsKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ==