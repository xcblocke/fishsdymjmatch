"use strict";
cc._RF.push(module, '22f3asmg6ZPrZqwZstsw2jE', 'UnifyUtils');
// subpackages/l_unifyLibFormat/Scripts/UnifyUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
var JsonManager_1 = require("../../../Scripts/JsonManager");
var UnifyUtils = /** @class */ (function () {
    function UnifyUtils() {
    }
    UnifyUtils.parseLevelData = function (t) {
        var e, r, i = t.dimensions, a = t.header, o = t.rows, l = [];
        try {
            for (var c = __values(o), s = c.next(); !s.done; s = c.next()) {
                for (var u = s.value, f = {}, p = 0; p < u.length; p++)
                    if ("dimension" === a[p]) {
                        f.dimension = i[u[p]];
                    }
                    else {
                        f[a[p]] = u[p];
                    }
                l.push(f);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                s && !s.done && (r = c.return) && r.call(c);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return l;
    };
    UnifyUtils.mergeLibraryData = function (t) {
        var e, r, i, o = {
            header: [],
            rows: [],
            dimensions: [],
            config: {}
        }, l = false, c = false, s = false, u = 0;
        try {
            for (var f = __values(t), p = f.next(); !p.done; p = f.next()) {
                var y = p.value;
                if (y) {
                    if (l) {
                        if (y.header.join(",") !== o.header.join(",")) {
                            u++;
                            continue;
                        }
                    }
                    else {
                        o.header = y.header;
                        l = true;
                    }
                    if (!c) {
                        o.dimensions = y.dimensions;
                        c = true;
                    }
                    if (!s) {
                        o.config = y.config;
                        s = true;
                    }
                    (i = o.rows).push.apply(i, __spreadArrays(y.rows));
                }
                else
                    u++;
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                p && !p.done && (r = f.return) && r.call(f);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return l && c && s ? {
            allData: o,
            failCount: u
        } : {
            allData: null,
            failCount: u
        };
    };
    UnifyUtils.loadLibraries = function (t) {
        var e = this, r = t.length;
        return new Promise(function (n) {
            Promise.all(t.map(function (t) {
                return JsonManager_1.default.getInstance().loadJson(t.path, t.bundle, t.timeout);
            })).then(function (i) {
                for (var a = [], o = 0; o < i.length; o++)
                    i[o] || a.push(t[o].path + "-" + t[o].bundle);
                var l = e.mergeLibraryData(i), c = l.allData, s = l.failCount;
                n({
                    allData: c,
                    totalCount: r,
                    failCount: s
                });
            }).catch(function () {
                n({
                    allData: null,
                    totalCount: r,
                    failCount: r
                });
            });
        });
    };
    return UnifyUtils;
}());
exports.default = UnifyUtils;

cc._RF.pop();