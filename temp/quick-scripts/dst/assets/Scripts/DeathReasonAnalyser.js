
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DeathReasonAnalyser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cbe23FO1qxCJKQ6ZdLfSZad', 'DeathReasonAnalyser');
// Scripts/DeathReasonAnalyser.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DeathReasonAnalyser = void 0;
var SimpleBoard_1 = require("./SimpleBoard");
var PathAnalyser_1 = require("./PathAnalyser");
var PathAnalyserTypes_1 = require("./PathAnalyserTypes");
var DeathAnalyzeModel_1 = require("./DeathAnalyzeModel");
var d = {
    frameConfig: PathAnalyserTypes_1.DEFAULT_FRAME_CONFIG,
    maxNodeCount: Infinity,
    highlightColors: [],
    checkingBadColor: -1
};
var DeathReasonAnalyser = /** @class */ (function () {
    function DeathReasonAnalyser() {
        this._deadNodes = [];
        this._nodeCount = 0;
        this._startTime = 0;
        this._highlightColorMaxCounts = new Map();
        this._visitedStates = new Set();
        this._badMahjongGroups = [];
        this._mode = null;
        this._levelInfo = null;
        this._config = Object.assign({}, d);
        this._cancellationToken = PathAnalyserTypes_1.createCancellationToken();
    }
    Object.defineProperty(DeathReasonAnalyser.prototype, "cancellationToken", {
        get: function () {
            return this._cancellationToken;
        },
        enumerable: false,
        configurable: true
    });
    DeathReasonAnalyser.prototype.cancel = function () {
        this._cancellationToken.cancel();
    };
    DeathReasonAnalyser.prototype.isAnalyzed = function (e, t) {
        return this._mode === e && this._levelInfo === t;
    };
    DeathReasonAnalyser.prototype.startAnalyze = function (e, t, o, n, i) {
        this._mode = e;
        this._levelInfo = t;
        Date.now();
        var r = DeathAnalyzeModel_1.default.getInstance().getDeath(e, t);
        if (r) {
            this._badMahjongGroups = r.badMahjongGroups;
            n(this._badMahjongGroups);
        }
        else
            this.analyze(o).then(function (o) {
                if (o.completed) {
                    DeathAnalyzeModel_1.default.getInstance().saveDeath(e, t, o.badMahjongGroups);
                    n(o.badMahjongGroups);
                }
                else
                    i && i();
            }).catch(function () {
                i && i();
            });
    };
    DeathReasonAnalyser.prototype.analyze = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, o, n, i, s, p, f, d, h, y, m, v, g, _, T;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._startTime = Date.now();
                        this._deadNodes = [];
                        this._nodeCount = 0;
                        this._highlightColorMaxCounts.clear();
                        this._visitedStates.clear();
                        this._badMahjongGroups = [];
                        try {
                            for (t = __values(this._config.highlightColors), o = t.next(); !o.done; o = t.next()) {
                                d = o.value;
                                this._highlightColorMaxCounts.set(d, 0);
                            }
                        }
                        catch (e) {
                            v = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                o && !o.done && (g = t.return) && g.call(t);
                            }
                            finally {
                                if (v)
                                    throw v.error;
                            }
                        }
                        -1 !== this._config.checkingBadColor && this._highlightColorMaxCounts.set(this._config.checkingBadColor, 0);
                        (n = new SimpleBoard_1.SimpleBoard()).initFromTiles(e);
                        return [4 /*yield*/, new PathAnalyser_1.PathAnalyser(n, this, this._config.checkingBadColor, this._config.highlightColors, this._cancellationToken, this._config.frameConfig).analyze()];
                    case 1:
                        i = _a.sent();
                        try {
                            for (s = __values(i.highlightColorMaxCounts), p = s.next(); !p.done; p = s.next()) {
                                f = __read(p.value, 2), d = f[0], h = f[1];
                                y = this._highlightColorMaxCounts.get(d) || 0;
                                h > y && this._highlightColorMaxCounts.set(d, h);
                            }
                        }
                        catch (e) {
                            _ = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                p && !p.done && (T = s.return) && T.call(s);
                            }
                            finally {
                                if (_)
                                    throw _.error;
                            }
                        }
                        m = Date.now() - this._startTime;
                        return [2 /*return*/, {
                                completed: i.completed,
                                cancelled: i.cancelled,
                                deadNodes: this._deadNodes,
                                highlightColorMaxCounts: this._highlightColorMaxCounts,
                                duration: m,
                                totalNodeCount: this._nodeCount,
                                badMahjongGroups: this._badMahjongGroups
                            }];
                }
            });
        });
    };
    DeathReasonAnalyser.prototype.addNode = function (e, t) {
        var o, n;
        this._nodeCount++;
        if (this._nodeCount >= this._config.maxNodeCount) {
            this._cancellationToken.cancel();
            return false;
        }
        try {
            for (var i = __values(this._badMahjongGroups), r = i.next(); !r.done; r = i.next()) {
                var l = r.value;
                if (this.hasBadGroupUsed(e, l, t))
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
                r && !r.done && (n = i.return) && n.call(i);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        var c = e.getStateSignature();
        if (this._visitedStates.has(c))
            return false;
        this._visitedStates.add(c);
        if (e.aliveTileCount > 0 && t > 0) {
            var u = {
                moveHistory: __spreadArrays(e.moveList),
                uselessMoveCount: t,
                remainingTileCount: e.aliveTileCount
            };
            this._deadNodes.push(u);
        }
        return true;
    };
    DeathReasonAnalyser.prototype.hasBadGroupUsed = function (e, t, o) {
        for (var n = new Set(), i = e.moveList, r = i.length - o, a = 0; a < r; a++) {
            var l = i[a], s = l.tile1.cardId;
            if (t.colors.has(s)) {
                var c = l.tile1.id, u = l.tile2.id, p = t.tileIds.has(c), f = t.tileIds.has(u);
                if (p && f) {
                    n.add(c);
                    n.add(u);
                }
                else if ((p || f) && p !== f)
                    return false;
            }
        }
        return n.size === t.tiles.length;
    };
    DeathReasonAnalyser.prototype.recordBadMahjongGroup = function (e) {
        var t = e.map(function (e) {
            return e.id;
        }).sort().join(",");
        if (!this._badMahjongGroups.some(function (e) {
            return e.key === t;
        })) {
            var o = new Set(e.map(function (e) {
                return e.cardId;
            })), n = new Set(e.map(function (e) {
                return e.id;
            }));
            this._badMahjongGroups.push({
                key: t,
                colors: o,
                tileIds: n,
                tiles: e
            });
        }
    };
    DeathReasonAnalyser.prototype.getDeadNodes = function () {
        return this._deadNodes;
    };
    DeathReasonAnalyser.prototype.getNodeCount = function () {
        return this._nodeCount;
    };
    DeathReasonAnalyser.prototype.getBadMahjongGroups = function () {
        return this._badMahjongGroups || [];
    };
    return DeathReasonAnalyser;
}());
exports.DeathReasonAnalyser = DeathReasonAnalyser;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0RlYXRoUmVhc29uQW5hbHlzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFDNUMsK0NBQThDO0FBQzlDLHlEQUFvRjtBQUNwRix5REFBb0Q7QUFDcEQsSUFBSSxDQUFDLEdBQUc7SUFDTixXQUFXLEVBQUUsd0NBQW9CO0lBQ2pDLFlBQVksRUFBRSxRQUFRO0lBQ3RCLGVBQWUsRUFBRSxFQUFFO0lBQ25CLGdCQUFnQixFQUFFLENBQUMsQ0FBQztDQUNyQixDQUFDO0FBQ0Y7SUFBQTtRQUNFLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZiw2QkFBd0IsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3JDLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMzQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsWUFBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLHVCQUFrQixHQUFHLDJDQUF1QixFQUFFLENBQUM7SUFxS2pELENBQUM7SUFwS0Msc0JBQUksa0RBQWlCO2FBQXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFDRCxvQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDRCx3Q0FBVSxHQUFWLFVBQVcsQ0FBQyxFQUFFLENBQUM7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCwwQ0FBWSxH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O1FBQ3JCLENBQUMsQ0FBQyxFQUFFO1lBQ0YsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQkFDM0IsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLEdBQUcsRUFBRSxDQUFDO2dCQUNOLE1BQU0sRUFBRSxDQUFDO2dCQUNULE9BQU8sRUFBRSxDQUFDO2dCQUNWLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0QsMENBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsMENBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsaURBQW1CLEdBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFDSCwwQkFBQztBQUFELENBL0tBLEFBK0tDLElBQUE7QUEvS1ksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2ltcGxlQm9hcmQgfSBmcm9tICcuL1NpbXBsZUJvYXJkJztcbmltcG9ydCB7IFBhdGhBbmFseXNlciB9IGZyb20gJy4vUGF0aEFuYWx5c2VyJztcbmltcG9ydCB7IERFRkFVTFRfRlJBTUVfQ09ORklHLCBjcmVhdGVDYW5jZWxsYXRpb25Ub2tlbiB9IGZyb20gJy4vUGF0aEFuYWx5c2VyVHlwZXMnO1xuaW1wb3J0IERlYXRoQW5hbHl6ZU1vZGVsIGZyb20gJy4vRGVhdGhBbmFseXplTW9kZWwnO1xudmFyIGQgPSB7XG4gIGZyYW1lQ29uZmlnOiBERUZBVUxUX0ZSQU1FX0NPTkZJRyxcbiAgbWF4Tm9kZUNvdW50OiBJbmZpbml0eSxcbiAgaGlnaGxpZ2h0Q29sb3JzOiBbXSxcbiAgY2hlY2tpbmdCYWRDb2xvcjogLTFcbn07XG5leHBvcnQgY2xhc3MgRGVhdGhSZWFzb25BbmFseXNlciB7XG4gIF9kZWFkTm9kZXMgPSBbXTtcbiAgX25vZGVDb3VudCA9IDA7XG4gIF9zdGFydFRpbWUgPSAwO1xuICBfaGlnaGxpZ2h0Q29sb3JNYXhDb3VudHMgPSBuZXcgTWFwKCk7XG4gIF92aXNpdGVkU3RhdGVzID0gbmV3IFNldCgpO1xuICBfYmFkTWFoam9uZ0dyb3VwcyA9IFtdO1xuICBfbW9kZSA9IG51bGw7XG4gIF9sZXZlbEluZm8gPSBudWxsO1xuICBfY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgZCk7XG4gIF9jYW5jZWxsYXRpb25Ub2tlbiA9IGNyZWF0ZUNhbmNlbGxhdGlvblRva2VuKCk7XG4gIGdldCBjYW5jZWxsYXRpb25Ub2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FuY2VsbGF0aW9uVG9rZW47XG4gIH1cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX2NhbmNlbGxhdGlvblRva2VuLmNhbmNlbCgpO1xuICB9XG4gIGlzQW5hbHl6ZWQoZSwgdCkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlID09PSBlICYmIHRoaXMuX2xldmVsSW5mbyA9PT0gdDtcbiAgfVxuICBzdGFydEFuYWx5emUoZSwgdCwgbywgbiwgaSkge1xuICAgIHRoaXMuX21vZGUgPSBlO1xuICAgIHRoaXMuX2xldmVsSW5mbyA9IHQ7XG4gICAgRGF0ZS5ub3coKTtcbiAgICB2YXIgciA9IERlYXRoQW5hbHl6ZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0RGVhdGgoZSwgdCk7XG4gICAgaWYgKHIpIHtcbiAgICAgIHRoaXMuX2JhZE1haGpvbmdHcm91cHMgPSByLmJhZE1haGpvbmdHcm91cHM7XG4gICAgICBuKHRoaXMuX2JhZE1haGpvbmdHcm91cHMpO1xuICAgIH0gZWxzZSB0aGlzLmFuYWx5emUobykudGhlbihmdW5jdGlvbiAobykge1xuICAgICAgaWYgKG8uY29tcGxldGVkKSB7XG4gICAgICAgIERlYXRoQW5hbHl6ZU1vZGVsLmdldEluc3RhbmNlKCkuc2F2ZURlYXRoKGUsIHQsIG8uYmFkTWFoam9uZ0dyb3Vwcyk7XG4gICAgICAgIG4oby5iYWRNYWhqb25nR3JvdXBzKTtcbiAgICAgIH0gZWxzZSBpICYmIGkoKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBpICYmIGkoKTtcbiAgICB9KTtcbiAgfVxuICBhc3luYyBhbmFseXplKGUpIHtcbiAgICB2YXIgdCwgbywgbiwgaSwgcywgcCwgZiwgZCwgaCwgeSwgbSwgdiwgZywgXywgVDtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuX2RlYWROb2RlcyA9IFtdO1xuICAgIHRoaXMuX25vZGVDb3VudCA9IDA7XG4gICAgdGhpcy5faGlnaGxpZ2h0Q29sb3JNYXhDb3VudHMuY2xlYXIoKTtcbiAgICB0aGlzLl92aXNpdGVkU3RhdGVzLmNsZWFyKCk7XG4gICAgdGhpcy5fYmFkTWFoam9uZ0dyb3VwcyA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHQgPSBfX3ZhbHVlcyh0aGlzLl9jb25maWcuaGlnaGxpZ2h0Q29sb3JzKSwgbyA9IHQubmV4dCgpOyAhby5kb25lOyBvID0gdC5uZXh0KCkpIHtcbiAgICAgICAgZCA9IG8udmFsdWU7XG4gICAgICAgIHRoaXMuX2hpZ2hsaWdodENvbG9yTWF4Q291bnRzLnNldChkLCAwKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbyAmJiAhby5kb25lICYmIChnID0gdC5yZXR1cm4pICYmIGcuY2FsbCh0KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh2KSB0aHJvdyB2LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICAtMSAhPT0gdGhpcy5fY29uZmlnLmNoZWNraW5nQmFkQ29sb3IgJiYgdGhpcy5faGlnaGxpZ2h0Q29sb3JNYXhDb3VudHMuc2V0KHRoaXMuX2NvbmZpZy5jaGVja2luZ0JhZENvbG9yLCAwKTtcbiAgICAobiA9IG5ldyBTaW1wbGVCb2FyZCgpKS5pbml0RnJvbVRpbGVzKGUpO1xuICAgIGkgPSBhd2FpdCBuZXcgUGF0aEFuYWx5c2VyKG4sIHRoaXMsIHRoaXMuX2NvbmZpZy5jaGVja2luZ0JhZENvbG9yLCB0aGlzLl9jb25maWcuaGlnaGxpZ2h0Q29sb3JzLCB0aGlzLl9jYW5jZWxsYXRpb25Ub2tlbiwgdGhpcy5fY29uZmlnLmZyYW1lQ29uZmlnKS5hbmFseXplKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAocyA9IF9fdmFsdWVzKGkuaGlnaGxpZ2h0Q29sb3JNYXhDb3VudHMpLCBwID0gcy5uZXh0KCk7ICFwLmRvbmU7IHAgPSBzLm5leHQoKSkge1xuICAgICAgICBmID0gX19yZWFkKHAudmFsdWUsIDIpLCBkID0gZlswXSwgaCA9IGZbMV07XG4gICAgICAgIHkgPSB0aGlzLl9oaWdobGlnaHRDb2xvck1heENvdW50cy5nZXQoZCkgfHwgMDtcbiAgICAgICAgaCA+IHkgJiYgdGhpcy5faGlnaGxpZ2h0Q29sb3JNYXhDb3VudHMuc2V0KGQsIGgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIF8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBwICYmICFwLmRvbmUgJiYgKFQgPSBzLnJldHVybikgJiYgVC5jYWxsKHMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF8pIHRocm93IF8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIG0gPSBEYXRlLm5vdygpIC0gdGhpcy5fc3RhcnRUaW1lO1xuICAgIHJldHVybiB7XG4gICAgICBjb21wbGV0ZWQ6IGkuY29tcGxldGVkLFxuICAgICAgY2FuY2VsbGVkOiBpLmNhbmNlbGxlZCxcbiAgICAgIGRlYWROb2RlczogdGhpcy5fZGVhZE5vZGVzLFxuICAgICAgaGlnaGxpZ2h0Q29sb3JNYXhDb3VudHM6IHRoaXMuX2hpZ2hsaWdodENvbG9yTWF4Q291bnRzLFxuICAgICAgZHVyYXRpb246IG0sXG4gICAgICB0b3RhbE5vZGVDb3VudDogdGhpcy5fbm9kZUNvdW50LFxuICAgICAgYmFkTWFoam9uZ0dyb3VwczogdGhpcy5fYmFkTWFoam9uZ0dyb3Vwc1xuICAgIH07XG4gIH1cbiAgYWRkTm9kZShlLCB0KSB7XG4gICAgdmFyIG8sIG47XG4gICAgdGhpcy5fbm9kZUNvdW50Kys7XG4gICAgaWYgKHRoaXMuX25vZGVDb3VudCA+PSB0aGlzLl9jb25maWcubWF4Tm9kZUNvdW50KSB7XG4gICAgICB0aGlzLl9jYW5jZWxsYXRpb25Ub2tlbi5jYW5jZWwoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyh0aGlzLl9iYWRNYWhqb25nR3JvdXBzKSwgciA9IGkubmV4dCgpOyAhci5kb25lOyByID0gaS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGwgPSByLnZhbHVlO1xuICAgICAgICBpZiAodGhpcy5oYXNCYWRHcm91cFVzZWQoZSwgbCwgdCkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgciAmJiAhci5kb25lICYmIChuID0gaS5yZXR1cm4pICYmIG4uY2FsbChpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgYyA9IGUuZ2V0U3RhdGVTaWduYXR1cmUoKTtcbiAgICBpZiAodGhpcy5fdmlzaXRlZFN0YXRlcy5oYXMoYykpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLl92aXNpdGVkU3RhdGVzLmFkZChjKTtcbiAgICBpZiAoZS5hbGl2ZVRpbGVDb3VudCA+IDAgJiYgdCA+IDApIHtcbiAgICAgIHZhciB1ID0ge1xuICAgICAgICBtb3ZlSGlzdG9yeTogWy4uLmUubW92ZUxpc3RdLFxuICAgICAgICB1c2VsZXNzTW92ZUNvdW50OiB0LFxuICAgICAgICByZW1haW5pbmdUaWxlQ291bnQ6IGUuYWxpdmVUaWxlQ291bnRcbiAgICAgIH07XG4gICAgICB0aGlzLl9kZWFkTm9kZXMucHVzaCh1KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaGFzQmFkR3JvdXBVc2VkKGUsIHQsIG8pIHtcbiAgICBmb3IgKHZhciBuID0gbmV3IFNldCgpLCBpID0gZS5tb3ZlTGlzdCwgciA9IGkubGVuZ3RoIC0gbywgYSA9IDA7IGEgPCByOyBhKyspIHtcbiAgICAgIHZhciBsID0gaVthXSxcbiAgICAgICAgcyA9IGwudGlsZTEuY2FyZElkO1xuICAgICAgaWYgKHQuY29sb3JzLmhhcyhzKSkge1xuICAgICAgICB2YXIgYyA9IGwudGlsZTEuaWQsXG4gICAgICAgICAgdSA9IGwudGlsZTIuaWQsXG4gICAgICAgICAgcCA9IHQudGlsZUlkcy5oYXMoYyksXG4gICAgICAgICAgZiA9IHQudGlsZUlkcy5oYXModSk7XG4gICAgICAgIGlmIChwICYmIGYpIHtcbiAgICAgICAgICBuLmFkZChjKTtcbiAgICAgICAgICBuLmFkZCh1KTtcbiAgICAgICAgfSBlbHNlIGlmICgocCB8fCBmKSAmJiBwICE9PSBmKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuLnNpemUgPT09IHQudGlsZXMubGVuZ3RoO1xuICB9XG4gIHJlY29yZEJhZE1haGpvbmdHcm91cChlKSB7XG4gICAgdmFyIHQgPSBlLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUuaWQ7XG4gICAgfSkuc29ydCgpLmpvaW4oXCIsXCIpO1xuICAgIGlmICghdGhpcy5fYmFkTWFoam9uZ0dyb3Vwcy5zb21lKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5rZXkgPT09IHQ7XG4gICAgfSkpIHtcbiAgICAgIHZhciBvID0gbmV3IFNldChlLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlLmNhcmRJZDtcbiAgICAgICAgfSkpLFxuICAgICAgICBuID0gbmV3IFNldChlLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlLmlkO1xuICAgICAgICB9KSk7XG4gICAgICB0aGlzLl9iYWRNYWhqb25nR3JvdXBzLnB1c2goe1xuICAgICAgICBrZXk6IHQsXG4gICAgICAgIGNvbG9yczogbyxcbiAgICAgICAgdGlsZUlkczogbixcbiAgICAgICAgdGlsZXM6IGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBnZXREZWFkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlYWROb2RlcztcbiAgfVxuICBnZXROb2RlQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vZGVDb3VudDtcbiAgfVxuICBnZXRCYWRNYWhqb25nR3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLl9iYWRNYWhqb25nR3JvdXBzIHx8IFtdO1xuICB9XG59Il19