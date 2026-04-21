
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2StaLvTFilter/Scripts/Tile2StaLvTFilterTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2e623M57hLcKVQGFxc7I4T', 'Tile2StaLvTFilterTrait');
// subpackages/l_tile2StaLvTFilter/Scripts/Tile2StaLvTFilterTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
function u(r) {
    if (!r || r.length < 2)
        return null;
    var t = Number(r[0]), e = Number(r[1]);
    return Number.isNaN(t) || Number.isNaN(e) ? null : t <= e ? [t, e] : [e, t];
}
function c(r) {
    var t, e, n = {};
    if (!r || "object" != typeof r || Array.isArray(r))
        return n;
    var i = r;
    try {
        for (var a = __values(Object.keys(i)), o = a.next(); !o.done; o = a.next()) {
            var f = o.value, c = u(i[f]);
            c && (n[f] = c);
        }
    }
    catch (r) {
        t = {
            error: r
        };
    }
    finally {
        try {
            o && !o.done && (e = a.return) && e.call(a);
        }
        finally {
            if (t)
                throw t.error;
        }
    }
    return n;
}
function s(r, t) {
    var e, n;
    try {
        for (var i = __values(Object.keys(t)), a = i.next(); !a.done; a = i.next()) {
            var o = a.value, u = __read(t[o], 2), c = u[0], s = u[1], y = r[o];
            if (null != y) {
                var v = Number(y);
                if (Number.isNaN(v) || v < c || v > s)
                    return false;
            }
        }
    }
    catch (r) {
        e = {
            error: r
        };
    }
    finally {
        try {
            a && !a.done && (n = i.return) && n.call(i);
        }
        finally {
            if (e)
                throw e.error;
        }
    }
    return true;
}
var Tile2StaLvTFilterTrait = /** @class */ (function (_super) {
    __extends(Tile2StaLvTFilterTrait, _super);
    function Tile2StaLvTFilterTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._filterMap = new Map();
        _this._cache = new Map();
        return _this;
    }
    Tile2StaLvTFilterTrait.prototype.onLoad = function () {
        var t, e;
        _super.prototype.onLoad.call(this);
        var n, i = this._traitData.conflictParams;
        if (i && i.levelTypes && i.filter)
            this._filterMap = this.mergeConflictFilters(i.levelTypes, i.filter);
        else {
            var o = (n = this._traitData.levelTypes) && Array.isArray(n) ? n.map(function (r) {
                return Number(r);
            }).filter(function (r) {
                return r > 0;
            }) : [], f = c(this._traitData.filter);
            try {
                for (var u = __values(o), s = u.next(); !s.done; s = u.next()) {
                    var y = s.value;
                    this._filterMap.set(y, Object.assign({}, f));
                }
            }
            catch (r) {
                t = {
                    error: r
                };
            }
            finally {
                try {
                    s && !s.done && (e = u.return) && e.call(u);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
    };
    Tile2StaLvTFilterTrait.prototype.mergeConflictFilters = function (r, t) {
        for (var e, n, i, a, o, f, u, s, y = new Map(), v = Math.min(r.length, t.length), h = new Set(), p = 0; p < v; p++)
            if (Array.isArray(r[p]))
                try {
                    for (var d = (e = void 0, __values(r[p])), _ = d.next(); !_.done; _ = d.next()) {
                        var b = _.value;
                        h.add(Number(b));
                    }
                }
                catch (r) {
                    e = {
                        error: r
                    };
                }
                finally {
                    try {
                        _ && !_.done && (n = d.return) && n.call(d);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
        try {
            for (var g = __values(h), m = g.next(); !m.done; m = g.next()) {
                b = m.value;
                var w = null;
                for (p = 0; p < v; p++)
                    if (Array.isArray(r[p]) && !(r[p].indexOf(b) < 0)) {
                        var x = c(t[p]);
                        if (w)
                            try {
                                for (var T = (u = void 0, __values(Object.keys(x))), O = T.next(); !O.done; O = T.next())
                                    if (w[S = O.value]) {
                                        w[S] = [Math.max(w[S][0], x[S][0]), Math.min(w[S][1], x[S][1])];
                                    }
                                    else {
                                        w[S] = [x[S][0], x[S][1]];
                                    }
                            }
                            catch (r) {
                                u = {
                                    error: r
                                };
                            }
                            finally {
                                try {
                                    O && !O.done && (s = T.return) && s.call(T);
                                }
                                finally {
                                    if (u)
                                        throw u.error;
                                }
                            }
                        else {
                            w = {};
                            try {
                                for (var j = (o = void 0, __values(Object.keys(x))), N = j.next(); !N.done; N = j.next()) {
                                    var S;
                                    w[S = N.value] = [x[S][0], x[S][1]];
                                }
                            }
                            catch (r) {
                                o = {
                                    error: r
                                };
                            }
                            finally {
                                try {
                                    N && !N.done && (f = j.return) && f.call(j);
                                }
                                finally {
                                    if (o)
                                        throw o.error;
                                }
                            }
                        }
                    }
                w && Object.keys(w).length > 0 && y.set(b, w);
            }
        }
        catch (r) {
            i = {
                error: r
            };
        }
        finally {
            try {
                m && !m.done && (a = g.return) && a.call(g);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        return y;
    };
    Tile2StaLvTFilterTrait.prototype.onT2StaLvT_filterPool = function (r, t) {
        var e = r.beforReturnVal, n = r.args && r.args.length > 1 ? Number(r.args[1]) : 0, i = r.args && r.args.length > 2 ? String(r.args[2]) : "";
        if (e && 0 !== e.length && n) {
            var a = this._filterMap.get(n);
            if (a && 0 !== Object.keys(a).length) {
                var o = i + "|t" + n, l = this._cache.get(o);
                if (l && l.source === e)
                    t({
                        returnVal: l.filtered
                    });
                else {
                    var f = e.filter(function (r) {
                        return s(r, a);
                    });
                    this._cache.set(o, {
                        source: e,
                        filtered: f
                    });
                    t({
                        returnVal: f
                    });
                }
            }
            else
                t();
        }
        else
            t();
    };
    Tile2StaLvTFilterTrait.traitKey = "Tile2StaLvTFilter";
    Tile2StaLvTFilterTrait = __decorate([
        mj.trait,
        mj.class("Tile2StaLvTFilterTrait")
    ], Tile2StaLvTFilterTrait);
    return Tile2StaLvTFilterTrait;
}(Trait_1.default));
exports.default = Tile2StaLvTFilterTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyU3RhTHZURmlsdGVyL1NjcmlwdHMvVGlsZTJTdGFMdlRGaWx0ZXJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDVixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ3BDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDbEIsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUUsQ0FBQztBQUNELFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDVixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNULElBQUksQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsSUFBSTtRQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFB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QUMsQ0FBQyxRQUFRO3FCQUN0QixDQUFDLENBQUM7cUJBQUs7b0JBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7d0JBQzFCLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakIsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUNqQixNQUFNLEVBQUUsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsQ0FBQztxQkFDWixDQUFDLENBQUM7b0JBQ0gsQ0FBQyxDQUFDO3dCQUNBLFNBQVMsRUFBRSxDQUFDO3FCQUNiLENBQUMsQ0FBQztpQkFDSjthQUNGOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQWxJTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBSG5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FzSTFDO0lBQUQsNkJBQUM7Q0F0SUQsQUFzSUMsQ0F0SW1ELGVBQUssR0FzSXhEO2tCQXRJb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmZ1bmN0aW9uIHUocikge1xuICBpZiAoIXIgfHwgci5sZW5ndGggPCAyKSByZXR1cm4gbnVsbDtcbiAgdmFyIHQgPSBOdW1iZXIoclswXSksXG4gICAgZSA9IE51bWJlcihyWzFdKTtcbiAgcmV0dXJuIE51bWJlci5pc05hTih0KSB8fCBOdW1iZXIuaXNOYU4oZSkgPyBudWxsIDogdCA8PSBlID8gW3QsIGVdIDogW2UsIHRdO1xufVxuZnVuY3Rpb24gYyhyKSB7XG4gIHZhciB0LFxuICAgIGUsXG4gICAgbiA9IHt9O1xuICBpZiAoIXIgfHwgXCJvYmplY3RcIiAhPSB0eXBlb2YgciB8fCBBcnJheS5pc0FycmF5KHIpKSByZXR1cm4gbjtcbiAgdmFyIGkgPSByO1xuICB0cnkge1xuICAgIGZvciAodmFyIGEgPSBfX3ZhbHVlcyhPYmplY3Qua2V5cyhpKSksIG8gPSBhLm5leHQoKTsgIW8uZG9uZTsgbyA9IGEubmV4dCgpKSB7XG4gICAgICB2YXIgZiA9IG8udmFsdWUsXG4gICAgICAgIGMgPSB1KGlbZl0pO1xuICAgICAgYyAmJiAobltmXSA9IGMpO1xuICAgIH1cbiAgfSBjYXRjaCAocikge1xuICAgIHQgPSB7XG4gICAgICBlcnJvcjogclxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIG8gJiYgIW8uZG9uZSAmJiAoZSA9IGEucmV0dXJuKSAmJiBlLmNhbGwoYSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbjtcbn1cbmZ1bmN0aW9uIHMociwgdCkge1xuICB2YXIgZSwgbjtcbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBpID0gX192YWx1ZXMoT2JqZWN0LmtleXModCkpLCBhID0gaS5uZXh0KCk7ICFhLmRvbmU7IGEgPSBpLm5leHQoKSkge1xuICAgICAgdmFyIG8gPSBhLnZhbHVlLFxuICAgICAgICB1ID0gX19yZWFkKHRbb10sIDIpLFxuICAgICAgICBjID0gdVswXSxcbiAgICAgICAgcyA9IHVbMV0sXG4gICAgICAgIHkgPSByW29dO1xuICAgICAgaWYgKG51bGwgIT0geSkge1xuICAgICAgICB2YXIgdiA9IE51bWJlcih5KTtcbiAgICAgICAgaWYgKE51bWJlci5pc05hTih2KSB8fCB2IDwgYyB8fCB2ID4gcykgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAocikge1xuICAgIGUgPSB7XG4gICAgICBlcnJvcjogclxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGEgJiYgIWEuZG9uZSAmJiAobiA9IGkucmV0dXJuKSAmJiBuLmNhbGwoaSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGlsZTJTdGFMdlRGaWx0ZXJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJTdGFMdlRGaWx0ZXJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2ZpbHRlck1hcCA9IG5ldyBNYXAoKTtcbiAgX2NhY2hlID0gbmV3IE1hcCgpO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbGUyU3RhTHZURmlsdGVyXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB2YXIgbixcbiAgICAgIGkgPSB0aGlzLl90cmFpdERhdGEuY29uZmxpY3RQYXJhbXM7XG4gICAgaWYgKGkgJiYgaS5sZXZlbFR5cGVzICYmIGkuZmlsdGVyKSB0aGlzLl9maWx0ZXJNYXAgPSB0aGlzLm1lcmdlQ29uZmxpY3RGaWx0ZXJzKGkubGV2ZWxUeXBlcywgaS5maWx0ZXIpO2Vsc2Uge1xuICAgICAgdmFyIG8gPSAobiA9IHRoaXMuX3RyYWl0RGF0YS5sZXZlbFR5cGVzKSAmJiBBcnJheS5pc0FycmF5KG4pID8gbi5tYXAoZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyKHIpO1xuICAgICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICByZXR1cm4gciA+IDA7XG4gICAgICAgIH0pIDogW10sXG4gICAgICAgIGYgPSBjKHRoaXMuX3RyYWl0RGF0YS5maWx0ZXIpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKG8pLCBzID0gdS5uZXh0KCk7ICFzLmRvbmU7IHMgPSB1Lm5leHQoKSkge1xuICAgICAgICAgIHZhciB5ID0gcy52YWx1ZTtcbiAgICAgICAgICB0aGlzLl9maWx0ZXJNYXAuc2V0KHksIE9iamVjdC5hc3NpZ24oe30sIGYpKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAocikge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIGVycm9yOiByXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHMgJiYgIXMuZG9uZSAmJiAoZSA9IHUucmV0dXJuKSAmJiBlLmNhbGwodSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbWVyZ2VDb25mbGljdEZpbHRlcnMociwgdCkge1xuICAgIGZvciAodmFyIGUsIG4sIGksIGEsIG8sIGYsIHUsIHMsIHkgPSBuZXcgTWFwKCksIHYgPSBNYXRoLm1pbihyLmxlbmd0aCwgdC5sZW5ndGgpLCBoID0gbmV3IFNldCgpLCBwID0gMDsgcCA8IHY7IHArKykgaWYgKEFycmF5LmlzQXJyYXkocltwXSkpIHRyeSB7XG4gICAgICBmb3IgKHZhciBkID0gKGUgPSB2b2lkIDAsIF9fdmFsdWVzKHJbcF0pKSwgXyA9IGQubmV4dCgpOyAhXy5kb25lOyBfID0gZC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGIgPSBfLnZhbHVlO1xuICAgICAgICBoLmFkZChOdW1iZXIoYikpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiByXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBfICYmICFfLmRvbmUgJiYgKG4gPSBkLnJldHVybikgJiYgbi5jYWxsKGQpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBnID0gX192YWx1ZXMoaCksIG0gPSBnLm5leHQoKTsgIW0uZG9uZTsgbSA9IGcubmV4dCgpKSB7XG4gICAgICAgIGIgPSBtLnZhbHVlO1xuICAgICAgICB2YXIgdyA9IG51bGw7XG4gICAgICAgIGZvciAocCA9IDA7IHAgPCB2OyBwKyspIGlmIChBcnJheS5pc0FycmF5KHJbcF0pICYmICEocltwXS5pbmRleE9mKGIpIDwgMCkpIHtcbiAgICAgICAgICB2YXIgeCA9IGModFtwXSk7XG4gICAgICAgICAgaWYgKHcpIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBUID0gKHUgPSB2b2lkIDAsIF9fdmFsdWVzKE9iamVjdC5rZXlzKHgpKSksIE8gPSBULm5leHQoKTsgIU8uZG9uZTsgTyA9IFQubmV4dCgpKSBpZiAod1tTID0gTy52YWx1ZV0pIHtcbiAgICAgICAgICAgICAgd1tTXSA9IFtNYXRoLm1heCh3W1NdWzBdLCB4W1NdWzBdKSwgTWF0aC5taW4od1tTXVsxXSwgeFtTXVsxXSldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd1tTXSA9IFt4W1NdWzBdLCB4W1NdWzFdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChyKSB7XG4gICAgICAgICAgICB1ID0ge1xuICAgICAgICAgICAgICBlcnJvcjogclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgTyAmJiAhTy5kb25lICYmIChzID0gVC5yZXR1cm4pICYmIHMuY2FsbChUKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGlmICh1KSB0aHJvdyB1LmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3ID0ge307XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBqID0gKG8gPSB2b2lkIDAsIF9fdmFsdWVzKE9iamVjdC5rZXlzKHgpKSksIE4gPSBqLm5leHQoKTsgIU4uZG9uZTsgTiA9IGoubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIFM7XG4gICAgICAgICAgICAgICAgd1tTID0gTi52YWx1ZV0gPSBbeFtTXVswXSwgeFtTXVsxXV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgICAgICAgICAgbyA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogclxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBOICYmICFOLmRvbmUgJiYgKGYgPSBqLnJldHVybikgJiYgZi5jYWxsKGopO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHcgJiYgT2JqZWN0LmtleXModykubGVuZ3RoID4gMCAmJiB5LnNldChiLCB3KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChyKSB7XG4gICAgICBpID0ge1xuICAgICAgICBlcnJvcjogclxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbSAmJiAhbS5kb25lICYmIChhID0gZy5yZXR1cm4pICYmIGEuY2FsbChnKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geTtcbiAgfVxuICBvblQyU3RhTHZUX2ZpbHRlclBvb2wociwgdCkge1xuICAgIHZhciBlID0gci5iZWZvclJldHVyblZhbCxcbiAgICAgIG4gPSByLmFyZ3MgJiYgci5hcmdzLmxlbmd0aCA+IDEgPyBOdW1iZXIoci5hcmdzWzFdKSA6IDAsXG4gICAgICBpID0gci5hcmdzICYmIHIuYXJncy5sZW5ndGggPiAyID8gU3RyaW5nKHIuYXJnc1syXSkgOiBcIlwiO1xuICAgIGlmIChlICYmIDAgIT09IGUubGVuZ3RoICYmIG4pIHtcbiAgICAgIHZhciBhID0gdGhpcy5fZmlsdGVyTWFwLmdldChuKTtcbiAgICAgIGlmIChhICYmIDAgIT09IE9iamVjdC5rZXlzKGEpLmxlbmd0aCkge1xuICAgICAgICB2YXIgbyA9IGkgKyBcInx0XCIgKyBuLFxuICAgICAgICAgIGwgPSB0aGlzLl9jYWNoZS5nZXQobyk7XG4gICAgICAgIGlmIChsICYmIGwuc291cmNlID09PSBlKSB0KHtcbiAgICAgICAgICByZXR1cm5WYWw6IGwuZmlsdGVyZWRcbiAgICAgICAgfSk7ZWxzZSB7XG4gICAgICAgICAgdmFyIGYgPSBlLmZpbHRlcihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgcmV0dXJuIHMociwgYSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5fY2FjaGUuc2V0KG8sIHtcbiAgICAgICAgICAgIHNvdXJjZTogZSxcbiAgICAgICAgICAgIGZpbHRlcmVkOiBmXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdCh7XG4gICAgICAgICAgICByZXR1cm5WYWw6IGZcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG59Il19