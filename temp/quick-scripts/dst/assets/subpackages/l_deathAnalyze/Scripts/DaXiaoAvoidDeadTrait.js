
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_deathAnalyze/Scripts/DaXiaoAvoidDeadTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69463pAIUlJeIyzoViCwTtz', 'DaXiaoAvoidDeadTrait');
// subpackages/l_deathAnalyze/Scripts/DaXiaoAvoidDeadTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DeathAnalyserMgr_1 = require("../../../Scripts/DeathAnalyserMgr");
var DaXiaoAvoidDeadTrait = /** @class */ (function (_super) {
    __extends(DaXiaoAvoidDeadTrait, _super);
    function DaXiaoAvoidDeadTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DaXiaoAvoidDeadTrait.prototype.onDaxiaoCkr_fixFinal = function (t, e) {
        var r, n, i = null === (r = t.ins) || void 0 === r ? void 0 : r.context;
        if (i) {
            var a = mj.getClassByName("DeathAnalyserTrait");
            if (a && a.getInstance() && a.getInstance().eventEnabled) {
                var l = DeathAnalyserMgr_1.default.instance.analyzeCardPair(null === (n = t.ins) || void 0 === n ? void 0 : n.gameContext);
                if (l.levelAllDeathPairs.length <= 0)
                    e();
                else {
                    var u = __read(t.args, 3), c = u[0], s = u[1], d = u[2];
                    this.fixFinalMatchInfos(i, c, s, l, d);
                    e();
                }
            }
            else
                e();
        }
        else
            e();
    };
    DaXiaoAvoidDeadTrait.prototype.fixFinalMatchInfos = function (t, e, r, n) {
        for (var i, a, u, c, f = t.getTileMapObject(), s = [], d = new Set(), y = 0; y < e.length; y++) {
            var h = e[y], p = f.getTileObject(h.tileId1), v = f.getTileObject(h.tileId2);
            if (p && v)
                if (this.isDeathGroup([p, v], n))
                    s.push(y);
                else {
                    d.add(h.tileId1);
                    d.add(h.tileId2);
                }
        }
        if (!(s.length <= 0)) {
            var D = [];
            try {
                for (var g = __values(r.entries()), _ = g.next(); !_.done; _ = g.next()) {
                    var m = __read(_.value, 2), b = (m[0], m[1]);
                    try {
                        for (var x = (u = void 0, __values(b)), T = x.next(); !T.done; T = x.next()) {
                            var A = T.value;
                            if (!d.has(A.id)) {
                                D.push(A);
                                d.add(A.id);
                            }
                        }
                    }
                    catch (t) {
                        u = {
                            error: t
                        };
                    }
                    finally {
                        try {
                            T && !T.done && (c = x.return) && c.call(x);
                        }
                        finally {
                            if (u)
                                throw u.error;
                        }
                    }
                }
            }
            catch (t) {
                i = {
                    error: t
                };
            }
            finally {
                try {
                    _ && !_.done && (a = g.return) && a.call(g);
                }
                finally {
                    if (i)
                        throw i.error;
                }
            }
            var j = f.aliveTiles(), w = this.findMatchTile(f, s, j, d, D, n);
            if (w.length == s.length)
                for (y = 0; y < w.length; y++) {
                    var O = w[y];
                    h = e[s[y]];
                    e[s[y]] = {
                        tileId1: O[0].id,
                        tileId2: O[1].id,
                        isFix: false,
                        y: O[0].gridPosY
                    };
                }
        }
    };
    DaXiaoAvoidDeadTrait.prototype.isDeathGroup = function (t, e) {
        var r, n, i, a, u = __read(t, 2), c = u[0], f = u[1];
        try {
            for (var s = __values(e.levelAllDeathPairs), d = s.next(); !d.done; d = s.next()) {
                var y = d.value;
                try {
                    for (var h = (i = void 0, __values(y)), p = h.next(); !p.done; p = h.next())
                        if (p.value.isEqual({
                            tile1Id: c.id,
                            tile2Id: f.id
                        }))
                            return true;
                }
                catch (t) {
                    i = {
                        error: t
                    };
                }
                finally {
                    try {
                        p && !p.done && (a = h.return) && a.call(h);
                    }
                    finally {
                        if (i)
                            throw i.error;
                    }
                }
            }
        }
        catch (t) {
            r = {
                error: t
            };
        }
        finally {
            try {
                d && !d.done && (n = s.return) && n.call(s);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return false;
    };
    DaXiaoAvoidDeadTrait.prototype.findMatchTile = function (t, e, r, n, i, a) {
        for (var o = this, c = r.filter(function (t) {
            return !n.has(t.id) && t.type == TileTypeEnum_1.ETileType.Normal;
        }), f = e.length, s = [], d = function d(e) {
            var r, u, d, y, h, p, v = i[e], D = null, g = c.filter(function (t) {
                return t.cardId === v.cardId && !o.isDeathGroup([v, t], a);
            });
            try {
                for (var _ = (r = void 0, __values(g)), m = _.next(); !m.done; m = _.next()) {
                    var b = m.value;
                    if (!t.isCardLock(b)) {
                        D = b;
                        break;
                    }
                }
            }
            catch (t) {
                r = {
                    error: t
                };
            }
            finally {
                try {
                    m && !m.done && (u = _.return) && u.call(_);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            if (!D)
                try {
                    for (var x = (d = void 0, __values(g)), T = x.next(); !T.done; T = x.next()) {
                        b = T.value;
                        if (!t.isHasCover(b)) {
                            D = b;
                            break;
                        }
                    }
                }
                catch (t) {
                    d = {
                        error: t
                    };
                }
                finally {
                    try {
                        T && !T.done && (y = x.return) && y.call(x);
                    }
                    finally {
                        if (d)
                            throw d.error;
                    }
                }
            if (!D)
                try {
                    for (var A = (h = void 0, __values(g)), j = A.next(); !j.done; j = A.next()) {
                        b = j.value;
                        (!D || b.layer > D.layer) && (D = b);
                    }
                }
                catch (t) {
                    h = {
                        error: t
                    };
                }
                finally {
                    try {
                        j && !j.done && (p = A.return) && p.call(A);
                    }
                    finally {
                        if (h)
                            throw h.error;
                    }
                }
            if (D) {
                s.push([v, D]);
                n.add(D.id);
                c = c.filter(function (t) {
                    return t.id != D.id;
                });
            }
            if (s.length >= f)
                return "break";
        }, y = 0; y < i.length && "break" !== d(y); y++)
            ;
        return s;
    };
    DaXiaoAvoidDeadTrait.traitKey = "DaXiaoAvoidDead";
    DaXiaoAvoidDeadTrait = __decorate([
        mj.trait,
        mj.class("DaXiaoAvoidDeadTrait")
    ], DaXiaoAvoidDeadTrait);
    return DaXiaoAvoidDeadTrait;
}(Trait_1.default));
exports.default = DaXiaoAvoidDeadTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RlYXRoQW5hbHl6ZS9TY3JpcHRzL0RhWGlhb0F2b2lkRGVhZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRkFBNkU7QUFDN0UsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUdqRTtJQUFrRCx3Q0FBSztJQUF2RDs7SUEyTUEsQ0FBQztJQXpNQyxtREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDaEUsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3hELElBQUksQ0FBQyxHQUFHLDBCQUFnQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pILElBQUksQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sSUFBSSxDQUFDO29CQUFFLENBQUMsRUFBRSxDQUFDO3FCQUFLO29CQUM3QyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENB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QUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBek1NLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFEakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQTJNeEM7SUFBRCwyQkFBQztDQTNNRCxBQTJNQyxDQTNNaUQsZUFBSyxHQTJNdEQ7a0JBM01vQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVGlsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBEZWF0aEFuYWx5c2VyTWdyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRGVhdGhBbmFseXNlck1ncic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkRhWGlhb0F2b2lkRGVhZFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYVhpYW9Bdm9pZERlYWRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEYVhpYW9Bdm9pZERlYWRcIjtcbiAgb25EYXhpYW9Da3JfZml4RmluYWwodCwgZSkge1xuICAgIHZhciByLFxuICAgICAgbixcbiAgICAgIGkgPSBudWxsID09PSAociA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmNvbnRleHQ7XG4gICAgaWYgKGkpIHtcbiAgICAgIHZhciBhID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJEZWF0aEFuYWx5c2VyVHJhaXRcIik7XG4gICAgICBpZiAoYSAmJiBhLmdldEluc3RhbmNlKCkgJiYgYS5nZXRJbnN0YW5jZSgpLmV2ZW50RW5hYmxlZCkge1xuICAgICAgICB2YXIgbCA9IERlYXRoQW5hbHlzZXJNZ3IuaW5zdGFuY2UuYW5hbHl6ZUNhcmRQYWlyKG51bGwgPT09IChuID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uZ2FtZUNvbnRleHQpO1xuICAgICAgICBpZiAobC5sZXZlbEFsbERlYXRoUGFpcnMubGVuZ3RoIDw9IDApIGUoKTtlbHNlIHtcbiAgICAgICAgICB2YXIgdSA9IF9fcmVhZCh0LmFyZ3MsIDMpLFxuICAgICAgICAgICAgYyA9IHVbMF0sXG4gICAgICAgICAgICBzID0gdVsxXSxcbiAgICAgICAgICAgIGQgPSB1WzJdO1xuICAgICAgICAgIHRoaXMuZml4RmluYWxNYXRjaEluZm9zKGksIGMsIHMsIGwsIGQpO1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGZpeEZpbmFsTWF0Y2hJbmZvcyh0LCBlLCByLCBuKSB7XG4gICAgZm9yICh2YXIgaSwgYSwgdSwgYywgZiA9IHQuZ2V0VGlsZU1hcE9iamVjdCgpLCBzID0gW10sIGQgPSBuZXcgU2V0KCksIHkgPSAwOyB5IDwgZS5sZW5ndGg7IHkrKykge1xuICAgICAgdmFyIGggPSBlW3ldLFxuICAgICAgICBwID0gZi5nZXRUaWxlT2JqZWN0KGgudGlsZUlkMSksXG4gICAgICAgIHYgPSBmLmdldFRpbGVPYmplY3QoaC50aWxlSWQyKTtcbiAgICAgIGlmIChwICYmIHYpIGlmICh0aGlzLmlzRGVhdGhHcm91cChbcCwgdl0sIG4pKSBzLnB1c2goeSk7ZWxzZSB7XG4gICAgICAgIGQuYWRkKGgudGlsZUlkMSk7XG4gICAgICAgIGQuYWRkKGgudGlsZUlkMik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghKHMubGVuZ3RoIDw9IDApKSB7XG4gICAgICB2YXIgRCA9IFtdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgZyA9IF9fdmFsdWVzKHIuZW50cmllcygpKSwgXyA9IGcubmV4dCgpOyAhXy5kb25lOyBfID0gZy5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgbSA9IF9fcmVhZChfLnZhbHVlLCAyKSxcbiAgICAgICAgICAgIGIgPSAobVswXSwgbVsxXSk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAodSA9IHZvaWQgMCwgX192YWx1ZXMoYikpLCBUID0geC5uZXh0KCk7ICFULmRvbmU7IFQgPSB4Lm5leHQoKSkge1xuICAgICAgICAgICAgICB2YXIgQSA9IFQudmFsdWU7XG4gICAgICAgICAgICAgIGlmICghZC5oYXMoQS5pZCkpIHtcbiAgICAgICAgICAgICAgICBELnB1c2goQSk7XG4gICAgICAgICAgICAgICAgZC5hZGQoQS5pZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgICB1ID0ge1xuICAgICAgICAgICAgICBlcnJvcjogdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgVCAmJiAhVC5kb25lICYmIChjID0geC5yZXR1cm4pICYmIGMuY2FsbCh4KTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGlmICh1KSB0aHJvdyB1LmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICBpID0ge1xuICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF8gJiYgIV8uZG9uZSAmJiAoYSA9IGcucmV0dXJuKSAmJiBhLmNhbGwoZyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBqID0gZi5hbGl2ZVRpbGVzKCksXG4gICAgICAgIHcgPSB0aGlzLmZpbmRNYXRjaFRpbGUoZiwgcywgaiwgZCwgRCwgbik7XG4gICAgICBpZiAody5sZW5ndGggPT0gcy5sZW5ndGgpIGZvciAoeSA9IDA7IHkgPCB3Lmxlbmd0aDsgeSsrKSB7XG4gICAgICAgIHZhciBPID0gd1t5XTtcbiAgICAgICAgaCA9IGVbc1t5XV07XG4gICAgICAgIGVbc1t5XV0gPSB7XG4gICAgICAgICAgdGlsZUlkMTogT1swXS5pZCxcbiAgICAgICAgICB0aWxlSWQyOiBPWzFdLmlkLFxuICAgICAgICAgIGlzRml4OiBmYWxzZSxcbiAgICAgICAgICB5OiBPWzBdLmdyaWRQb3NZXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlzRGVhdGhHcm91cCh0LCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIGEsXG4gICAgICB1ID0gX19yZWFkKHQsIDIpLFxuICAgICAgYyA9IHVbMF0sXG4gICAgICBmID0gdVsxXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKGUubGV2ZWxBbGxEZWF0aFBhaXJzKSwgZCA9IHMubmV4dCgpOyAhZC5kb25lOyBkID0gcy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHkgPSBkLnZhbHVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIGggPSAoaSA9IHZvaWQgMCwgX192YWx1ZXMoeSkpLCBwID0gaC5uZXh0KCk7ICFwLmRvbmU7IHAgPSBoLm5leHQoKSkgaWYgKHAudmFsdWUuaXNFcXVhbCh7XG4gICAgICAgICAgICB0aWxlMUlkOiBjLmlkLFxuICAgICAgICAgICAgdGlsZTJJZDogZi5pZFxuICAgICAgICAgIH0pKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICBlcnJvcjogdFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHAgJiYgIXAuZG9uZSAmJiAoYSA9IGgucmV0dXJuKSAmJiBhLmNhbGwoaCk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIHIgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBkICYmICFkLmRvbmUgJiYgKG4gPSBzLnJldHVybikgJiYgbi5jYWxsKHMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmaW5kTWF0Y2hUaWxlKHQsIGUsIHIsIG4sIGksIGEpIHtcbiAgICBmb3IgKHZhciBvID0gdGhpcywgYyA9IHIuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiAhbi5oYXModC5pZCkgJiYgdC50eXBlID09IEVUaWxlVHlwZS5Ob3JtYWw7XG4gICAgICB9KSwgZiA9IGUubGVuZ3RoLCBzID0gW10sIGQgPSBmdW5jdGlvbiBkKGUpIHtcbiAgICAgICAgdmFyIHIsXG4gICAgICAgICAgdSxcbiAgICAgICAgICBkLFxuICAgICAgICAgIHksXG4gICAgICAgICAgaCxcbiAgICAgICAgICBwLFxuICAgICAgICAgIHYgPSBpW2VdLFxuICAgICAgICAgIEQgPSBudWxsLFxuICAgICAgICAgIGcgPSBjLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuY2FyZElkID09PSB2LmNhcmRJZCAmJiAhby5pc0RlYXRoR3JvdXAoW3YsIHRdLCBhKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfID0gKHIgPSB2b2lkIDAsIF9fdmFsdWVzKGcpKSwgbSA9IF8ubmV4dCgpOyAhbS5kb25lOyBtID0gXy5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBiID0gbS52YWx1ZTtcbiAgICAgICAgICAgIGlmICghdC5pc0NhcmRMb2NrKGIpKSB7XG4gICAgICAgICAgICAgIEQgPSBiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICByID0ge1xuICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtICYmICFtLmRvbmUgJiYgKHUgPSBfLnJldHVybikgJiYgdS5jYWxsKF8pO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFEKSB0cnkge1xuICAgICAgICAgIGZvciAodmFyIHggPSAoZCA9IHZvaWQgMCwgX192YWx1ZXMoZykpLCBUID0geC5uZXh0KCk7ICFULmRvbmU7IFQgPSB4Lm5leHQoKSkge1xuICAgICAgICAgICAgYiA9IFQudmFsdWU7XG4gICAgICAgICAgICBpZiAoIXQuaXNIYXNDb3ZlcihiKSkge1xuICAgICAgICAgICAgICBEID0gYjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgZCA9IHtcbiAgICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgVCAmJiAhVC5kb25lICYmICh5ID0geC5yZXR1cm4pICYmIHkuY2FsbCh4KTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKGQpIHRocm93IGQuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghRCkgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBBID0gKGggPSB2b2lkIDAsIF9fdmFsdWVzKGcpKSwgaiA9IEEubmV4dCgpOyAhai5kb25lOyBqID0gQS5uZXh0KCkpIHtcbiAgICAgICAgICAgIGIgPSBqLnZhbHVlO1xuICAgICAgICAgICAgKCFEIHx8IGIubGF5ZXIgPiBELmxheWVyKSAmJiAoRCA9IGIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgIGggPSB7XG4gICAgICAgICAgICBlcnJvcjogdFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGogJiYgIWouZG9uZSAmJiAocCA9IEEucmV0dXJuKSAmJiBwLmNhbGwoQSk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChoKSB0aHJvdyBoLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoRCkge1xuICAgICAgICAgIHMucHVzaChbdiwgRF0pO1xuICAgICAgICAgIG4uYWRkKEQuaWQpO1xuICAgICAgICAgIGMgPSBjLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuaWQgIT0gRC5pZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocy5sZW5ndGggPj0gZikgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgIH0sIHkgPSAwOyB5IDwgaS5sZW5ndGggJiYgXCJicmVha1wiICE9PSBkKHkpOyB5KyspO1xuICAgIHJldHVybiBzO1xuICB9XG59Il19