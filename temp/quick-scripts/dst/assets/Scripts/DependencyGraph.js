
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DependencyGraph.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c990eZ5YL9N5ZBIGG4sg3uF', 'DependencyGraph');
// Scripts/DependencyGraph.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DependencyGraph = void 0;
var DependencyGraph = /** @class */ (function () {
    function DependencyGraph() {
        this.coordToIndex = new Map();
        this.tileByCoord = new Map();
        this.predsBy = new Map();
        this.leftBy = new Map();
        this.rightBy = new Map();
        this.affectedBy = new Map();
        this.allTiles = [];
        this.tileMapObject = null;
        this.expandedCache = {
            pred: new Map(),
            left: new Map(),
            right: new Map()
        };
    }
    DependencyGraph.prototype.tileToCoord = function (e) {
        return e.layer + "_" + e.gridPosY + "_" + e.gridPosX;
    };
    DependencyGraph.prototype.init = function (e, t) {
        var o = this;
        this.coordToIndex.clear();
        this.tileByCoord.clear();
        this.predsBy.clear();
        this.leftBy.clear();
        this.rightBy.clear();
        this.affectedBy.clear();
        this.allTiles = e;
        this.tileMapObject = t;
        this.clearExpandedCache();
        e.forEach(function (e, t) {
            var n = o.tileToCoord(e);
            o.coordToIndex.set(n, t);
            o.tileByCoord.set(n, e);
        });
    };
    DependencyGraph.prototype.clearExpandedCache = function () {
        this.expandedCache = {
            pred: new Map(),
            left: new Map(),
            right: new Map()
        };
    };
    DependencyGraph.prototype.getTileByCoord = function (e) {
        return this.tileByCoord.get(e);
    };
    DependencyGraph.prototype.getLazyPredecessors = function (e) {
        var t, o, i, r;
        if (this.predsBy.has(e))
            return this.predsBy.get(e);
        var a = this.tileByCoord.get(e);
        if (!a)
            return [];
        var l = [], s = a.layer;
        try {
            for (var c = __values(this.allTiles), u = c.next(); !u.done; u = c.next()) {
                var p = u.value;
                p.layer > s && p.isValid && this.hasGridOverlap(a, p) && l.push(this.tileToCoord(p));
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
        this.predsBy.set(e, l);
        try {
            for (var f = __values(l), d = f.next(); !d.done; d = f.next()) {
                var h = d.value;
                this.affectedBy.has(h) || this.affectedBy.set(h, new Set());
                this.affectedBy.get(h).add(e);
            }
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                d && !d.done && (r = f.return) && r.call(f);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        return l;
    };
    DependencyGraph.prototype.getLazyLeftSemiPreds = function (e) {
        var t, o, i, r;
        if (this.leftBy.has(e))
            return this.leftBy.get(e);
        var a = this.tileByCoord.get(e);
        if (!a)
            return [];
        var l = [];
        if (this.tileMapObject) {
            var s = new Set(this.allTiles);
            try {
                for (var c = __values(this.tileMapObject.getAdjacentLeftCards(a)), u = c.next(); !u.done; u = c.next()) {
                    var p = u.value;
                    s.has(p) && p.isValid && l.push(this.tileToCoord(p));
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
        }
        this.leftBy.set(e, l);
        try {
            for (var f = __values(l), d = f.next(); !d.done; d = f.next()) {
                var h = d.value;
                this.affectedBy.has(h) || this.affectedBy.set(h, new Set());
                this.affectedBy.get(h).add(e);
            }
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                d && !d.done && (r = f.return) && r.call(f);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        return l;
    };
    DependencyGraph.prototype.getLazyRightSemiPreds = function (e) {
        var t, o, i, r;
        if (this.rightBy.has(e))
            return this.rightBy.get(e);
        var a = this.tileByCoord.get(e);
        if (!a)
            return [];
        var l = [];
        if (this.tileMapObject) {
            var s = new Set(this.allTiles);
            try {
                for (var c = __values(this.tileMapObject.getAdjacentRightCards(a)), u = c.next(); !u.done; u = c.next()) {
                    var p = u.value;
                    s.has(p) && p.isValid && l.push(this.tileToCoord(p));
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
        }
        this.rightBy.set(e, l);
        try {
            for (var f = __values(l), d = f.next(); !d.done; d = f.next()) {
                var h = d.value;
                this.affectedBy.has(h) || this.affectedBy.set(h, new Set());
                this.affectedBy.get(h).add(e);
            }
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                d && !d.done && (r = f.return) && r.call(f);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        return l;
    };
    DependencyGraph.prototype.getLazyAffectedBy = function (e) {
        return this.affectedBy.get(e) || new Set();
    };
    DependencyGraph.prototype.getExpanded = function (e, t) {
        var o, i, r = this;
        if (!t)
            return new Set();
        var a = this.expandedCache[e];
        if (a.has(t))
            return a.get(t);
        for (var l = function l(t) {
            switch (e) {
                case "pred":
                    return r.getLazyPredecessors(t);
                case "left":
                    return r.getLazyLeftSemiPreds(t);
                case "right":
                    return r.getLazyRightSemiPreds(t);
            }
        }, s = new Set(), c = [t]; c.length > 0;) {
            var u = c.pop();
            try {
                for (var p = (o = void 0, __values(l(u))), f = p.next(); !f.done; f = p.next()) {
                    var d = f.value;
                    if (!s.has(d)) {
                        s.add(d);
                        c.push(d);
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
                    f && !f.done && (i = p.return) && i.call(p);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
        }
        a.set(t, s);
        return s;
    };
    DependencyGraph.prototype.getTopologyLevel = function (e) {
        return this.getLazyPredecessors(e).length;
    };
    DependencyGraph.prototype.isTileSelectable = function (e, t, o) {
        var i, r, a, l, s, c, u = this.tileToCoord(e), p = this.getLazyPredecessors(u);
        try {
            for (var f = __values(p), d = f.next(); !d.done; d = f.next()) {
                var h = d.value, y = o.get(h);
                if (y && t.has(y))
                    return false;
            }
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                d && !d.done && (r = f.return) && r.call(f);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        var m = this.getLazyLeftSemiPreds(u), v = this.getLazyRightSemiPreds(u), g = false, _ = false;
        try {
            for (var T = __values(m), C = T.next(); !C.done; C = T.next()) {
                var b = C.value, E = o.get(b);
                if (E && t.has(E)) {
                    g = true;
                    break;
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
                C && !C.done && (l = T.return) && l.call(T);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        try {
            for (var S = __values(v), I = S.next(); !I.done; I = S.next()) {
                var w = I.value, B = o.get(w);
                if (B && t.has(B)) {
                    _ = true;
                    break;
                }
            }
        }
        catch (e) {
            s = {
                error: e
            };
        }
        finally {
            try {
                I && !I.done && (c = S.return) && c.call(S);
            }
            finally {
                if (s)
                    throw s.error;
            }
        }
        return !(g && _);
    };
    DependencyGraph.prototype.getSelectableTiles = function (e, t) {
        var o, i, r = [];
        try {
            for (var a = __values(e), l = a.next(); !l.done; l = a.next()) {
                var s = l.value;
                this.isTileSelectable(s, e, t) && r.push(s);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (i = a.return) && i.call(a);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return r;
    };
    DependencyGraph.prototype.wouldBecomeSelectable = function (e, t, o, i, r) {
        var a, l, s, c, u, p, f = this.tileToCoord(e), d = this.getLazyPredecessors(f);
        try {
            for (var h = __values(d), y = h.next(); !y.done; y = h.next()) {
                var m = y.value;
                if (m !== t && m !== o) {
                    var v = r.get(m);
                    if (v && i.has(v))
                        return false;
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
                y && !y.done && (l = h.return) && l.call(h);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        var g = this.getLazyLeftSemiPreds(f), _ = this.getLazyRightSemiPreds(f), T = false, C = false;
        try {
            for (var b = __values(g), E = b.next(); !E.done; E = b.next()) {
                var S = E.value;
                if (S !== t && S !== o) {
                    var I = r.get(S);
                    if (I && i.has(I)) {
                        T = true;
                        break;
                    }
                }
            }
        }
        catch (e) {
            s = {
                error: e
            };
        }
        finally {
            try {
                E && !E.done && (c = b.return) && c.call(b);
            }
            finally {
                if (s)
                    throw s.error;
            }
        }
        try {
            for (var w = __values(_), B = w.next(); !B.done; B = w.next()) {
                var x = B.value;
                if (x !== t && x !== o) {
                    var M = r.get(x);
                    if (M && i.has(M)) {
                        C = true;
                        break;
                    }
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
                B && !B.done && (p = w.return) && p.call(w);
            }
            finally {
                if (u)
                    throw u.error;
            }
        }
        return !(T && C);
    };
    DependencyGraph.prototype.hasGridOverlap = function (e, t) {
        var o, i, r, a, l = e.ownerGridIds, s = t.ownerGridIds;
        try {
            for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
                var p = u.value;
                try {
                    for (var f = (r = void 0, __values(s)), d = f.next(); !d.done; d = f.next())
                        if (p === d.value)
                            return true;
                }
                catch (e) {
                    r = {
                        error: e
                    };
                }
                finally {
                    try {
                        d && !d.done && (a = f.return) && a.call(f);
                    }
                    finally {
                        if (r)
                            throw r.error;
                    }
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
                u && !u.done && (i = c.return) && i.call(c);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return false;
    };
    return DependencyGraph;
}());
exports.DependencyGraph = DependencyGraph;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0RlcGVuZGVuY3lHcmFwaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7UUFDRSxpQkFBWSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDekIsZ0JBQVcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixrQkFBYSxHQUFHO1lBQ2QsSUFBSSxFQUFFLElBQUksR0FBRyxFQUFFO1lBQ2YsSUFBSSxFQUFFLElBQUksR0FBRyxFQUFFO1lBQ2YsS0FBSyxFQUFFLElBQUksR0FBRyxFQUFFO1NBQ2pCLENBQUM7SUFvYUosQ0FBQztJQW5hQyxxQ0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsOEJBQUksR0FBSixVQUFLLENBQUMsRUFBRSxDQUFDO1FBQ1AsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFB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QUFLLENBQUM7SUFDZixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQWpiQSxBQWliQyxJQUFBO0FBamJZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERlcGVuZGVuY3lHcmFwaCB7XG4gIGNvb3JkVG9JbmRleCA9IG5ldyBNYXAoKTtcbiAgdGlsZUJ5Q29vcmQgPSBuZXcgTWFwKCk7XG4gIHByZWRzQnkgPSBuZXcgTWFwKCk7XG4gIGxlZnRCeSA9IG5ldyBNYXAoKTtcbiAgcmlnaHRCeSA9IG5ldyBNYXAoKTtcbiAgYWZmZWN0ZWRCeSA9IG5ldyBNYXAoKTtcbiAgYWxsVGlsZXMgPSBbXTtcbiAgdGlsZU1hcE9iamVjdCA9IG51bGw7XG4gIGV4cGFuZGVkQ2FjaGUgPSB7XG4gICAgcHJlZDogbmV3IE1hcCgpLFxuICAgIGxlZnQ6IG5ldyBNYXAoKSxcbiAgICByaWdodDogbmV3IE1hcCgpXG4gIH07XG4gIHRpbGVUb0Nvb3JkKGUpIHtcbiAgICByZXR1cm4gZS5sYXllciArIFwiX1wiICsgZS5ncmlkUG9zWSArIFwiX1wiICsgZS5ncmlkUG9zWDtcbiAgfVxuICBpbml0KGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgdGhpcy5jb29yZFRvSW5kZXguY2xlYXIoKTtcbiAgICB0aGlzLnRpbGVCeUNvb3JkLmNsZWFyKCk7XG4gICAgdGhpcy5wcmVkc0J5LmNsZWFyKCk7XG4gICAgdGhpcy5sZWZ0QnkuY2xlYXIoKTtcbiAgICB0aGlzLnJpZ2h0QnkuY2xlYXIoKTtcbiAgICB0aGlzLmFmZmVjdGVkQnkuY2xlYXIoKTtcbiAgICB0aGlzLmFsbFRpbGVzID0gZTtcbiAgICB0aGlzLnRpbGVNYXBPYmplY3QgPSB0O1xuICAgIHRoaXMuY2xlYXJFeHBhbmRlZENhY2hlKCk7XG4gICAgZS5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICB2YXIgbiA9IG8udGlsZVRvQ29vcmQoZSk7XG4gICAgICBvLmNvb3JkVG9JbmRleC5zZXQobiwgdCk7XG4gICAgICBvLnRpbGVCeUNvb3JkLnNldChuLCBlKTtcbiAgICB9KTtcbiAgfVxuICBjbGVhckV4cGFuZGVkQ2FjaGUoKSB7XG4gICAgdGhpcy5leHBhbmRlZENhY2hlID0ge1xuICAgICAgcHJlZDogbmV3IE1hcCgpLFxuICAgICAgbGVmdDogbmV3IE1hcCgpLFxuICAgICAgcmlnaHQ6IG5ldyBNYXAoKVxuICAgIH07XG4gIH1cbiAgZ2V0VGlsZUJ5Q29vcmQoZSkge1xuICAgIHJldHVybiB0aGlzLnRpbGVCeUNvb3JkLmdldChlKTtcbiAgfVxuICBnZXRMYXp5UHJlZGVjZXNzb3JzKGUpIHtcbiAgICB2YXIgdCwgbywgaSwgcjtcbiAgICBpZiAodGhpcy5wcmVkc0J5LmhhcyhlKSkgcmV0dXJuIHRoaXMucHJlZHNCeS5nZXQoZSk7XG4gICAgdmFyIGEgPSB0aGlzLnRpbGVCeUNvb3JkLmdldChlKTtcbiAgICBpZiAoIWEpIHJldHVybiBbXTtcbiAgICB2YXIgbCA9IFtdLFxuICAgICAgcyA9IGEubGF5ZXI7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGMgPSBfX3ZhbHVlcyh0aGlzLmFsbFRpbGVzKSwgdSA9IGMubmV4dCgpOyAhdS5kb25lOyB1ID0gYy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHAgPSB1LnZhbHVlO1xuICAgICAgICBwLmxheWVyID4gcyAmJiBwLmlzVmFsaWQgJiYgdGhpcy5oYXNHcmlkT3ZlcmxhcChhLCBwKSAmJiBsLnB1c2godGhpcy50aWxlVG9Db29yZChwKSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHUgJiYgIXUuZG9uZSAmJiAobyA9IGMucmV0dXJuKSAmJiBvLmNhbGwoYyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcmVkc0J5LnNldChlLCBsKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgZiA9IF9fdmFsdWVzKGwpLCBkID0gZi5uZXh0KCk7ICFkLmRvbmU7IGQgPSBmLm5leHQoKSkge1xuICAgICAgICB2YXIgaCA9IGQudmFsdWU7XG4gICAgICAgIHRoaXMuYWZmZWN0ZWRCeS5oYXMoaCkgfHwgdGhpcy5hZmZlY3RlZEJ5LnNldChoLCBuZXcgU2V0KCkpO1xuICAgICAgICB0aGlzLmFmZmVjdGVkQnkuZ2V0KGgpLmFkZChlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZCAmJiAhZC5kb25lICYmIChyID0gZi5yZXR1cm4pICYmIHIuY2FsbChmKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbDtcbiAgfVxuICBnZXRMYXp5TGVmdFNlbWlQcmVkcyhlKSB7XG4gICAgdmFyIHQsIG8sIGksIHI7XG4gICAgaWYgKHRoaXMubGVmdEJ5LmhhcyhlKSkgcmV0dXJuIHRoaXMubGVmdEJ5LmdldChlKTtcbiAgICB2YXIgYSA9IHRoaXMudGlsZUJ5Q29vcmQuZ2V0KGUpO1xuICAgIGlmICghYSkgcmV0dXJuIFtdO1xuICAgIHZhciBsID0gW107XG4gICAgaWYgKHRoaXMudGlsZU1hcE9iamVjdCkge1xuICAgICAgdmFyIHMgPSBuZXcgU2V0KHRoaXMuYWxsVGlsZXMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKHRoaXMudGlsZU1hcE9iamVjdC5nZXRBZGphY2VudExlZnRDYXJkcyhhKSksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIHAgPSB1LnZhbHVlO1xuICAgICAgICAgIHMuaGFzKHApICYmIHAuaXNWYWxpZCAmJiBsLnB1c2godGhpcy50aWxlVG9Db29yZChwKSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB1ICYmICF1LmRvbmUgJiYgKG8gPSBjLnJldHVybikgJiYgby5jYWxsKGMpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubGVmdEJ5LnNldChlLCBsKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgZiA9IF9fdmFsdWVzKGwpLCBkID0gZi5uZXh0KCk7ICFkLmRvbmU7IGQgPSBmLm5leHQoKSkge1xuICAgICAgICB2YXIgaCA9IGQudmFsdWU7XG4gICAgICAgIHRoaXMuYWZmZWN0ZWRCeS5oYXMoaCkgfHwgdGhpcy5hZmZlY3RlZEJ5LnNldChoLCBuZXcgU2V0KCkpO1xuICAgICAgICB0aGlzLmFmZmVjdGVkQnkuZ2V0KGgpLmFkZChlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZCAmJiAhZC5kb25lICYmIChyID0gZi5yZXR1cm4pICYmIHIuY2FsbChmKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbDtcbiAgfVxuICBnZXRMYXp5UmlnaHRTZW1pUHJlZHMoZSkge1xuICAgIHZhciB0LCBvLCBpLCByO1xuICAgIGlmICh0aGlzLnJpZ2h0QnkuaGFzKGUpKSByZXR1cm4gdGhpcy5yaWdodEJ5LmdldChlKTtcbiAgICB2YXIgYSA9IHRoaXMudGlsZUJ5Q29vcmQuZ2V0KGUpO1xuICAgIGlmICghYSkgcmV0dXJuIFtdO1xuICAgIHZhciBsID0gW107XG4gICAgaWYgKHRoaXMudGlsZU1hcE9iamVjdCkge1xuICAgICAgdmFyIHMgPSBuZXcgU2V0KHRoaXMuYWxsVGlsZXMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKHRoaXMudGlsZU1hcE9iamVjdC5nZXRBZGphY2VudFJpZ2h0Q2FyZHMoYSkpLCB1ID0gYy5uZXh0KCk7ICF1LmRvbmU7IHUgPSBjLm5leHQoKSkge1xuICAgICAgICAgIHZhciBwID0gdS52YWx1ZTtcbiAgICAgICAgICBzLmhhcyhwKSAmJiBwLmlzVmFsaWQgJiYgbC5wdXNoKHRoaXMudGlsZVRvQ29vcmQocCkpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdSAmJiAhdS5kb25lICYmIChvID0gYy5yZXR1cm4pICYmIG8uY2FsbChjKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJpZ2h0Qnkuc2V0KGUsIGwpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBmID0gX192YWx1ZXMobCksIGQgPSBmLm5leHQoKTsgIWQuZG9uZTsgZCA9IGYubmV4dCgpKSB7XG4gICAgICAgIHZhciBoID0gZC52YWx1ZTtcbiAgICAgICAgdGhpcy5hZmZlY3RlZEJ5LmhhcyhoKSB8fCB0aGlzLmFmZmVjdGVkQnkuc2V0KGgsIG5ldyBTZXQoKSk7XG4gICAgICAgIHRoaXMuYWZmZWN0ZWRCeS5nZXQoaCkuYWRkKGUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGkgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBkICYmICFkLmRvbmUgJiYgKHIgPSBmLnJldHVybikgJiYgci5jYWxsKGYpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsO1xuICB9XG4gIGdldExhenlBZmZlY3RlZEJ5KGUpIHtcbiAgICByZXR1cm4gdGhpcy5hZmZlY3RlZEJ5LmdldChlKSB8fCBuZXcgU2V0KCk7XG4gIH1cbiAgZ2V0RXhwYW5kZWQoZSwgdCkge1xuICAgIHZhciBvLFxuICAgICAgaSxcbiAgICAgIHIgPSB0aGlzO1xuICAgIGlmICghdCkgcmV0dXJuIG5ldyBTZXQoKTtcbiAgICB2YXIgYSA9IHRoaXMuZXhwYW5kZWRDYWNoZVtlXTtcbiAgICBpZiAoYS5oYXModCkpIHJldHVybiBhLmdldCh0KTtcbiAgICBmb3IgKHZhciBsID0gZnVuY3Rpb24gbCh0KSB7XG4gICAgICAgIHN3aXRjaCAoZSkge1xuICAgICAgICAgIGNhc2UgXCJwcmVkXCI6XG4gICAgICAgICAgICByZXR1cm4gci5nZXRMYXp5UHJlZGVjZXNzb3JzKHQpO1xuICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICByZXR1cm4gci5nZXRMYXp5TGVmdFNlbWlQcmVkcyh0KTtcbiAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgIHJldHVybiByLmdldExhenlSaWdodFNlbWlQcmVkcyh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgcyA9IG5ldyBTZXQoKSwgYyA9IFt0XTsgYy5sZW5ndGggPiAwOykge1xuICAgICAgdmFyIHUgPSBjLnBvcCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgcCA9IChvID0gdm9pZCAwLCBfX3ZhbHVlcyhsKHUpKSksIGYgPSBwLm5leHQoKTsgIWYuZG9uZTsgZiA9IHAubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGQgPSBmLnZhbHVlO1xuICAgICAgICAgIGlmICghcy5oYXMoZCkpIHtcbiAgICAgICAgICAgIHMuYWRkKGQpO1xuICAgICAgICAgICAgYy5wdXNoKGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBvID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGYgJiYgIWYuZG9uZSAmJiAoaSA9IHAucmV0dXJuKSAmJiBpLmNhbGwocCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYS5zZXQodCwgcyk7XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgZ2V0VG9wb2xvZ3lMZXZlbChlKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGF6eVByZWRlY2Vzc29ycyhlKS5sZW5ndGg7XG4gIH1cbiAgaXNUaWxlU2VsZWN0YWJsZShlLCB0LCBvKSB7XG4gICAgdmFyIGksXG4gICAgICByLFxuICAgICAgYSxcbiAgICAgIGwsXG4gICAgICBzLFxuICAgICAgYyxcbiAgICAgIHUgPSB0aGlzLnRpbGVUb0Nvb3JkKGUpLFxuICAgICAgcCA9IHRoaXMuZ2V0TGF6eVByZWRlY2Vzc29ycyh1KTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgZiA9IF9fdmFsdWVzKHApLCBkID0gZi5uZXh0KCk7ICFkLmRvbmU7IGQgPSBmLm5leHQoKSkge1xuICAgICAgICB2YXIgaCA9IGQudmFsdWUsXG4gICAgICAgICAgeSA9IG8uZ2V0KGgpO1xuICAgICAgICBpZiAoeSAmJiB0Lmhhcyh5KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGkgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBkICYmICFkLmRvbmUgJiYgKHIgPSBmLnJldHVybikgJiYgci5jYWxsKGYpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBtID0gdGhpcy5nZXRMYXp5TGVmdFNlbWlQcmVkcyh1KSxcbiAgICAgIHYgPSB0aGlzLmdldExhenlSaWdodFNlbWlQcmVkcyh1KSxcbiAgICAgIGcgPSBmYWxzZSxcbiAgICAgIF8gPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgVCA9IF9fdmFsdWVzKG0pLCBDID0gVC5uZXh0KCk7ICFDLmRvbmU7IEMgPSBULm5leHQoKSkge1xuICAgICAgICB2YXIgYiA9IEMudmFsdWUsXG4gICAgICAgICAgRSA9IG8uZ2V0KGIpO1xuICAgICAgICBpZiAoRSAmJiB0LmhhcyhFKSkge1xuICAgICAgICAgIGcgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIEMgJiYgIUMuZG9uZSAmJiAobCA9IFQucmV0dXJuKSAmJiBsLmNhbGwoVCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYSkgdGhyb3cgYS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIFMgPSBfX3ZhbHVlcyh2KSwgSSA9IFMubmV4dCgpOyAhSS5kb25lOyBJID0gUy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHcgPSBJLnZhbHVlLFxuICAgICAgICAgIEIgPSBvLmdldCh3KTtcbiAgICAgICAgaWYgKEIgJiYgdC5oYXMoQikpIHtcbiAgICAgICAgICBfID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHMgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBJICYmICFJLmRvbmUgJiYgKGMgPSBTLnJldHVybikgJiYgYy5jYWxsKFMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHMpIHRocm93IHMuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAhKGcgJiYgXyk7XG4gIH1cbiAgZ2V0U2VsZWN0YWJsZVRpbGVzKGUsIHQpIHtcbiAgICB2YXIgbyxcbiAgICAgIGksXG4gICAgICByID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGEgPSBfX3ZhbHVlcyhlKSwgbCA9IGEubmV4dCgpOyAhbC5kb25lOyBsID0gYS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHMgPSBsLnZhbHVlO1xuICAgICAgICB0aGlzLmlzVGlsZVNlbGVjdGFibGUocywgZSwgdCkgJiYgci5wdXNoKHMpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBsICYmICFsLmRvbmUgJiYgKGkgPSBhLnJldHVybikgJiYgaS5jYWxsKGEpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG4gIHdvdWxkQmVjb21lU2VsZWN0YWJsZShlLCB0LCBvLCBpLCByKSB7XG4gICAgdmFyIGEsXG4gICAgICBsLFxuICAgICAgcyxcbiAgICAgIGMsXG4gICAgICB1LFxuICAgICAgcCxcbiAgICAgIGYgPSB0aGlzLnRpbGVUb0Nvb3JkKGUpLFxuICAgICAgZCA9IHRoaXMuZ2V0TGF6eVByZWRlY2Vzc29ycyhmKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaCA9IF9fdmFsdWVzKGQpLCB5ID0gaC5uZXh0KCk7ICF5LmRvbmU7IHkgPSBoLm5leHQoKSkge1xuICAgICAgICB2YXIgbSA9IHkudmFsdWU7XG4gICAgICAgIGlmIChtICE9PSB0ICYmIG0gIT09IG8pIHtcbiAgICAgICAgICB2YXIgdiA9IHIuZ2V0KG0pO1xuICAgICAgICAgIGlmICh2ICYmIGkuaGFzKHYpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBhID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgeSAmJiAheS5kb25lICYmIChsID0gaC5yZXR1cm4pICYmIGwuY2FsbChoKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChhKSB0aHJvdyBhLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgZyA9IHRoaXMuZ2V0TGF6eUxlZnRTZW1pUHJlZHMoZiksXG4gICAgICBfID0gdGhpcy5nZXRMYXp5UmlnaHRTZW1pUHJlZHMoZiksXG4gICAgICBUID0gZmFsc2UsXG4gICAgICBDID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGIgPSBfX3ZhbHVlcyhnKSwgRSA9IGIubmV4dCgpOyAhRS5kb25lOyBFID0gYi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIFMgPSBFLnZhbHVlO1xuICAgICAgICBpZiAoUyAhPT0gdCAmJiBTICE9PSBvKSB7XG4gICAgICAgICAgdmFyIEkgPSByLmdldChTKTtcbiAgICAgICAgICBpZiAoSSAmJiBpLmhhcyhJKSkge1xuICAgICAgICAgICAgVCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgRSAmJiAhRS5kb25lICYmIChjID0gYi5yZXR1cm4pICYmIGMuY2FsbChiKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChzKSB0aHJvdyBzLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdyA9IF9fdmFsdWVzKF8pLCBCID0gdy5uZXh0KCk7ICFCLmRvbmU7IEIgPSB3Lm5leHQoKSkge1xuICAgICAgICB2YXIgeCA9IEIudmFsdWU7XG4gICAgICAgIGlmICh4ICE9PSB0ICYmIHggIT09IG8pIHtcbiAgICAgICAgICB2YXIgTSA9IHIuZ2V0KHgpO1xuICAgICAgICAgIGlmIChNICYmIGkuaGFzKE0pKSB7XG4gICAgICAgICAgICBDID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHUgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBCICYmICFCLmRvbmUgJiYgKHAgPSB3LnJldHVybikgJiYgcC5jYWxsKHcpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHUpIHRocm93IHUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAhKFQgJiYgQyk7XG4gIH1cbiAgaGFzR3JpZE92ZXJsYXAoZSwgdCkge1xuICAgIHZhciBvLFxuICAgICAgaSxcbiAgICAgIHIsXG4gICAgICBhLFxuICAgICAgbCA9IGUub3duZXJHcmlkSWRzLFxuICAgICAgcyA9IHQub3duZXJHcmlkSWRzO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBjID0gX192YWx1ZXMobCksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgIHZhciBwID0gdS52YWx1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBmID0gKHIgPSB2b2lkIDAsIF9fdmFsdWVzKHMpKSwgZCA9IGYubmV4dCgpOyAhZC5kb25lOyBkID0gZi5uZXh0KCkpIGlmIChwID09PSBkLnZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGQgJiYgIWQuZG9uZSAmJiAoYSA9IGYucmV0dXJuKSAmJiBhLmNhbGwoZik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICB1ICYmICF1LmRvbmUgJiYgKGkgPSBjLnJldHVybikgJiYgaS5jYWxsKGMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSJdfQ==