import {resManager} from "../manager/ResManager";
import {SingletonFactory} from "../utils/SingletonFactory";

export enum TraitEventPositionType {
    befor = 0,
    in = 1,
    after = 2,
}

export enum TraitCallbackReturnType {
    return = 0,
    continue = 1,
    jump = 2,
}

var c = new Set();
var u = function u(e, t = 0, o?, n?) {
    this.handler = e;
    this.priority = t;
    this.target = n;
    this.position = o;
};

class p {
    _pipes = [];
    eventName = "";

    set pipes(e) {
        this._pipes = e;
    }

    constructor(e) {
        this._pipes = e;
    }

    clear() {
        this._pipes = [];
    }

    execute(e, t) {
        var o = this;
        d(this._pipes.length > 0, "特性管线为空");
        this._pipes.sort(function (e, t) {
            return t.priority - e.priority;
        });
        var n = 0,
            i = this._pipes[n++],
            r = function r(l) {
                if (l) {
                    l.hasOwnProperty("returnVal") && (e.beforReturnVal = l.returnVal);
                    l.hasOwnProperty("returnType") && l.returnType != TraitCallbackReturnType.continue && (e.beforReturnType = l.returnType);
                }
                if ((null == l ? void 0 : l.isBreak) || n >= o._pipes.length) {
                    (l = l || {}).returnVal = e.beforReturnVal;
                    l.returnType = e.beforReturnType;
                    return t(l);
                }
                (i = o._pipes[n++]).handler.call(i.target, e, r);
            };
        i.handler.call(i.target, e, r);
    }
}

export default class TraitManager {
    _triggerEventMap = new Map();
    _traitDataMap = new Map();
    _traitDataArr = [];
    _traits = [];
    _conditionInfo = {};

    static getInstance() {
        return SingletonFactory.getInstance(this);
    }

    setConditionInfo(e) {
        this._conditionInfo = e;
    }

    getConditionInfo() {
        return this._conditionInfo;
    }

    registerTrait(e) {
        this._traits.push(e);
        this._traitDataMap.size > 0 && this.tryInitTrait(e);
    }

    tryInitTrait(e) {
        d(e.traitKey, "特性标识traitKey未定义:" + mj.getClassName(e));
        var t = this.getTraitData(e.traitKey);
        t && (e.getInstance().traitData || e.getInstance().__init(t));
    }

    isCountryFiltered(e) {
        var t = this._conditionInfo.country;
        if (!t || "" === t) return false;
        if (e.includeCountry && Array.isArray(e.includeCountry)) {
            return !e.includeCountry.includes(t);
        }
        if (e.filterCountry && Array.isArray(e.filterCountry)) {
            return e.filterCountry.includes(t);
        }
        return false;
    }

    isCountryIsoFiltered(e) {
        var t = (null == e ? void 0 : e.defaultCountryIso) || "",
            o = this._conditionInfo.countryIso || t;
        if (!o || "" === o) return false;
        if (e.includeCountryIso && Array.isArray(e.includeCountryIso)) {
            return !e.includeCountryIso.includes(o);
        }
        if (e.filterCountryIso && Array.isArray(e.filterCountryIso)) {
            return e.filterCountryIso.includes(o);
        }
        return false;
    }

    tryInitTraits() {
        var e = this;
        this._traits.forEach(function (t) {
            e.tryInitTrait(t);
        });
    }

    parseTraitData(e) {
        var t,
            o,
            n,
            r = this.resolveTraitConflicts(e),
            a = [];
        try {
            for (var l = __values(r), s = l.next(); !s.done; s = l.next()) {
                var c = s.value;
                if (null == c ? void 0 : c.key) {
                    a.push(c);
                    this._traitDataMap.set(c.key, c);
                } else {
                    console.error("特性配置缺少key字段，已跳过:", c);
                    null === (n = mj.reportError) || void 0 === n || n.call(mj, "特性配置缺少key: " + JSON.stringify(c));
                }
            }
        } catch (e) {
            t = {
                error: e
            };
        } finally {
            try {
                s && !s.done && (o = l.return) && o.call(l);
            } finally {
                if (t) throw t.error;
            }
        }
        this._traitDataArr = this._traitDataArr.concat(a);
        this.tryInitTraits();
        this.autoloadAllBundle();
    }

    resolveTraitConflicts(e) {
        var t, o, n, r, a;
        try {
            var l = [],
                s = new Map();
            try {
                for (var c = __values(e), u = c.next(); !u.done; u = c.next()) {
                    var p = u.value;
                    d(p.key, "特性key是必需的");
                    if (!s.has(p.key)) {
                        s.set(p.key, []);
                        l.push(p.key);
                    }
                    s.get(p.key).push(p);
                }
            } catch (e) {
                t = {
                    error: e
                };
            } finally {
                try {
                    u && !u.done && (o = c.return) && o.call(c);
                } finally {
                    if (t) throw t.error;
                }
            }
            var f = [];
            try {
                for (var h = __values(l), y = h.next(); !y.done; y = h.next()) {
                    var m = y.value,
                        v = s.get(m),
                        g = this.selectTraitFromGroup(m, v);
                    g && f.push(g);
                }
            } catch (e) {
                n = {
                    error: e
                };
            } finally {
                try {
                    y && !y.done && (r = h.return) && r.call(h);
                } finally {
                    if (n) throw n.error;
                }
            }
            return f;
        } catch (t) {
            console.error("resolveTraitConflicts异常，回退使用原始数据:", t);
            null === (a = mj.reportError) || void 0 === a || a.call(mj, "resolveTraitConflicts异常: " + ((null == t ? void 0 : t.message) || t));
            return e;
        }
    }

    isActiveDayRangeConfig(e) {
        return Array.isArray(e.activeDayRange) && 2 === e.activeDayRange.length;
    }

    isActiveDayRangeSatisfied(e) {
        var t = this._conditionInfo.activeDays;
        return "number" == typeof t && t >= e.activeDayRange[0] && (t <= e.activeDayRange[1] || -1 === e.activeDayRange[1]);
    }

    selectTraitFromGroup(e, t) {
        var o,
            n,
            r,
            a = [];
        try {
            for (var l = __values(t), s = l.next(); !s.done; s = l.next()) {
                var c = s.value;
                this.isCountryFiltered(c) || this.isCountryIsoFiltered(c) || (this.isActiveDayRangeConfig(c) ? this.isActiveDayRangeSatisfied(c) && a.push(c) : a.push(c));
            }
        } catch (e) {
            o = {
                error: e
            };
        } finally {
            try {
                s && !s.done && (n = l.return) && n.call(l);
            } finally {
                if (o) throw o.error;
            }
        }
        if (0 === a.length) return null;
        try {
            return this.mergeTraitConfigs(a);
        } catch (t) {
            console.error("特性 " + e + " 合并配置异常，回退使用第一个配置:", t);
            null === (r = mj.reportError) || void 0 === r || r.call(mj, "mergeTraitConfigs异常[" + e + "]: " + ((null == t ? void 0 : t.message) || t));
            return a[0];
        }
    }

    mergeTraitConfigs(e) {
        var t, o, r, a, l, s;
        if (!e || 0 === e.length) return null;
        if (1 === e.length) return e[0];
        var c = e[0],
            u = Object.assign({}, c),
            p = new Set();
        try {
            for (var f = __values(e), d = f.next(); !d.done; d = f.next()) {
                var h = d.value;
                if (h && "object" == typeof h) try {
                    for (var y = (r = void 0, __values(Object.keys(h))), m = y.next(); !m.done; m = y.next()) {
                        var v = m.value;
                        p.add(v);
                    }
                } catch (e) {
                    r = {
                        error: e
                    };
                } finally {
                    try {
                        m && !m.done && (a = y.return) && a.call(y);
                    } finally {
                        if (r) throw r.error;
                    }
                }
            }
        } catch (e) {
            t = {
                error: e
            };
        } finally {
            try {
                d && !d.done && (o = f.return) && o.call(f);
            } finally {
                if (t) throw t.error;
            }
        }
        var g = {},
            _ = function _(t) {
                var o = e.map(function (e) {
                        return e && e.hasOwnProperty(t) ? e[t] : null;
                    }),
                    n = JSON.stringify(o[0]);
                o.some(function (e) {
                    return JSON.stringify(e) !== n;
                }) && (g[t] = o);
            };
        try {
            for (var T = __values(p), C = T.next(); !C.done; C = T.next()) _(C.value);
        } catch (e) {
            l = {
                error: e
            };
        } finally {
            try {
                C && !C.done && (s = T.return) && s.call(T);
            } finally {
                if (l) throw l.error;
            }
        }
        Object.keys(g).length > 0 && (u.conflictParams = g);
        return u;
    }

    insertTraitData(e, t) {
        d(!this.getTraitData(e.key), "特性key重复");
        if (!this.isCountryFiltered(e) && !this.isCountryIsoFiltered(e)) {
            if (null == t) {
                this._traitDataArr.push(e);
            } else {
                this._traitDataArr.splice(t, 0, e);
            }
            this._traitDataMap.set(e.key, e);
            var o = this._traits.find(function (t) {
                return t.traitKey === e.key;
            });
            if (o) {
                this.tryInitTrait(o);
            } else {
                this.hasBundle(e.bundle) && resManager.loadBundle(e.bundle);
            }
        }
    }

    getTraitData(e) {
        return this._traitDataMap.get(e);
    }

    getTraitIndex(e) {
        return this._traitDataArr.indexOf(e);
    }

    autoloadAllBundle() {
        var e = this,
            t = this._traitDataArr.slice();
        t.sort(function (e, t) {
            var o = e.priority ? e.priority + 1000 * e.priority / e.priority : 0;
            return (t.priority ? t.priority + 1000 * t.priority / t.priority : 0) - o;
        });
        t.forEach(function (t) {
            e.hasBundle(t.bundle) && resManager.loadBundle(t.bundle);
        });
    }

    preloadAllRes(e, t, o) {
        this.hasBundle(e) && resManager.preDownLoadByDir("", o, t, e);
    }

    hasBundle(e) {
        if (!e) return false;
        if (!G_Cfg.baseVersion) return true;
        var t = cc.assetManager.downloader.bundleVers;
        return !t || !!t[e];
    }

    registerEvent(e, t = 0, o?, n?, i?) {
        var r = new u(o, t, n, i);
        if (this._triggerEventMap.has(e)) {
            this._triggerEventMap.get(e).push(r);
        } else {
            this._triggerEventMap.set(e, [r]);
        }
    }

    removeEvent(e, t) {
        if (this._triggerEventMap.has(e)) {
            var o = this._triggerEventMap.get(e),
                n = o.findIndex(function (e) {
                    return e.handler === t;
                });
            -1 !== n && o.splice(n, 1);
        }
    }

    removeEventByTarget(e) {
        this._triggerEventMap.forEach(function (t) {
            var o = t.findIndex(function (t) {
                return t.target === e;
            });
            -1 !== o && t.splice(o, 1);
        });
    }

    triggerMethodEvent(e, t, o, n, i) {
        var l = null;
        if (!this._triggerEventMap.has(e)) return o.apply(t, n);
        var s = this._triggerEventMap.get(e),
            c = {
                ins: t,
                args: n,
                extra: i
            },
            u = function u(t, o) {
                var n = new p(t);
                n.eventName = e;
                n.execute(c, o);
            },
            f = s.filter(function (e) {
                return e.position === TraitEventPositionType.befor && e.target.eventEnabled;
            }),
            d = s.filter(function (e) {
                return e.position === TraitEventPositionType.after && e.target.eventEnabled;
            });
        if (f.length > 0) u(f, function (e) {
            l = null == e ? void 0 : e.returnVal;
            if ((null == e ? void 0 : e.returnType) !== TraitCallbackReturnType.return) {
                (null == e ? void 0 : e.returnType) !== TraitCallbackReturnType.jump && (l = o.apply(t, n));
                if (d.length > 0) {
                    c.beforReturnVal = l;
                    u(d, function (e) {
                        e && e.hasOwnProperty("returnVal") && (l = e.returnVal);
                    });
                }
            }
        }); else {
            l = o.apply(t, n);
            if (d.length > 0) {
                c.beforReturnVal = l;
                u(d, function (e) {
                    e && e.hasOwnProperty("returnVal") && (l = e.returnVal);
                });
            }
        }
        return l;
    }

    triggerInternalEvent(e, t, o, n) {
        if (!this._triggerEventMap.has(e)) return false;
        var i = this._triggerEventMap.get(e).filter(function (e) {
            return e.position === TraitEventPositionType.in && e.target.eventEnabled;
        });
        if (0 === i.length) return false;
        var l,
            s = {
                ins: t,
                args: o,
                extra: n
            },
            c = new p(i);
        c.eventName = e;
        c.execute(s, function (e) {
            l = e;
        });
        return (null == l ? void 0 : l.returnType) === TraitCallbackReturnType.return;
    }

    removeAllEvent() {
        this._triggerEventMap.clear();
    }
}
cc.js.setClassName("TraitManager", TraitManager);
var d = window["assert"] || function (e, t) {
    var o;
    if (!e) {
        var n = new Error(t),
            i = n.stack.split("\n"),
            r = (i[1] || "") + "\n";
        r += (i[2] || "") + "\n";
        r += i[3] || "";
        n.message = n.message + "\n" + r;
        if (!cc.sys.isNative) throw n;
        null === (o = window["_reportError"]) || void 0 === o || o.call(window, n.message);
    }
};
window["mj"].trait = function (e) {
    d(mj.getClassName(e), "className是必需的，trait装饰器只能用于mj类");
    TraitManager.getInstance().registerTrait(e);
};
window["mj"].traitEvent = function (e) {
    c.has(e) && d(false, "事件名称重复，请重新调整: " + e);
    c.add(e);
    return function (t, o, n) {
        var i = n.value;
        n.value = function () {
            for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
            return TraitManager.getInstance().triggerMethodEvent(e, this, i, t);
        };
    };
};
window["mj"].triggerInternalEvent = TraitManager.getInstance().triggerInternalEvent.bind(TraitManager.getInstance());