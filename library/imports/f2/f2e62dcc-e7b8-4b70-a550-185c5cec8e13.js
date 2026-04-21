"use strict";
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