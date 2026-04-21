
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/framework/trait/TraitManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '238792wWJRAZpN+ad7YbyGZ', 'TraitManager');
// Scripts/framework/trait/TraitManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TraitCallbackReturnType = exports.TraitEventPositionType = void 0;
var ResManager_1 = require("../manager/ResManager");
var SingletonFactory_1 = require("../utils/SingletonFactory");
var TraitEventPositionType;
(function (TraitEventPositionType) {
    TraitEventPositionType[TraitEventPositionType["befor"] = 0] = "befor";
    TraitEventPositionType[TraitEventPositionType["in"] = 1] = "in";
    TraitEventPositionType[TraitEventPositionType["after"] = 2] = "after";
})(TraitEventPositionType = exports.TraitEventPositionType || (exports.TraitEventPositionType = {}));
var TraitCallbackReturnType;
(function (TraitCallbackReturnType) {
    TraitCallbackReturnType[TraitCallbackReturnType["return"] = 0] = "return";
    TraitCallbackReturnType[TraitCallbackReturnType["continue"] = 1] = "continue";
    TraitCallbackReturnType[TraitCallbackReturnType["jump"] = 2] = "jump";
})(TraitCallbackReturnType = exports.TraitCallbackReturnType || (exports.TraitCallbackReturnType = {}));
var c = new Set();
var u = function u(e, t, o, n) {
    if (t === void 0) { t = 0; }
    this.handler = e;
    this.priority = t;
    this.target = n;
    this.position = o;
};
var p = /** @class */ (function () {
    function p(e) {
        this._pipes = [];
        this.eventName = "";
        this._pipes = e;
    }
    Object.defineProperty(p.prototype, "pipes", {
        set: function (e) {
            this._pipes = e;
        },
        enumerable: false,
        configurable: true
    });
    p.prototype.clear = function () {
        this._pipes = [];
    };
    p.prototype.execute = function (e, t) {
        var o = this;
        d(this._pipes.length > 0, "特性管线为空");
        this._pipes.sort(function (e, t) {
            return t.priority - e.priority;
        });
        var n = 0, i = this._pipes[n++], r = function r(l) {
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
    };
    return p;
}());
var TraitManager = /** @class */ (function () {
    function TraitManager() {
        this._triggerEventMap = new Map();
        this._traitDataMap = new Map();
        this._traitDataArr = [];
        this._traits = [];
        this._conditionInfo = {};
    }
    TraitManager.getInstance = function () {
        return SingletonFactory_1.SingletonFactory.getInstance(this);
    };
    TraitManager.prototype.setConditionInfo = function (e) {
        this._conditionInfo = e;
    };
    TraitManager.prototype.getConditionInfo = function () {
        return this._conditionInfo;
    };
    TraitManager.prototype.registerTrait = function (e) {
        this._traits.push(e);
        this._traitDataMap.size > 0 && this.tryInitTrait(e);
    };
    TraitManager.prototype.tryInitTrait = function (e) {
        d(e.traitKey, "特性标识traitKey未定义:" + mj.getClassName(e));
        var t = this.getTraitData(e.traitKey);
        t && (e.getInstance().traitData || e.getInstance().__init(t));
    };
    TraitManager.prototype.isCountryFiltered = function (e) {
        var t = this._conditionInfo.country;
        if (!t || "" === t)
            return false;
        if (e.includeCountry && Array.isArray(e.includeCountry)) {
            return !e.includeCountry.includes(t);
        }
        if (e.filterCountry && Array.isArray(e.filterCountry)) {
            return e.filterCountry.includes(t);
        }
        return false;
    };
    TraitManager.prototype.isCountryIsoFiltered = function (e) {
        var t = (null == e ? void 0 : e.defaultCountryIso) || "", o = this._conditionInfo.countryIso || t;
        if (!o || "" === o)
            return false;
        if (e.includeCountryIso && Array.isArray(e.includeCountryIso)) {
            return !e.includeCountryIso.includes(o);
        }
        if (e.filterCountryIso && Array.isArray(e.filterCountryIso)) {
            return e.filterCountryIso.includes(o);
        }
        return false;
    };
    TraitManager.prototype.tryInitTraits = function () {
        var e = this;
        this._traits.forEach(function (t) {
            e.tryInitTrait(t);
        });
    };
    TraitManager.prototype.parseTraitData = function (e) {
        var t, o, n, r = this.resolveTraitConflicts(e), a = [];
        try {
            for (var l = __values(r), s = l.next(); !s.done; s = l.next()) {
                var c = s.value;
                if (null == c ? void 0 : c.key) {
                    a.push(c);
                    this._traitDataMap.set(c.key, c);
                }
                else {
                    console.error("特性配置缺少key字段，已跳过:", c);
                    null === (n = mj.reportError) || void 0 === n || n.call(mj, "特性配置缺少key: " + JSON.stringify(c));
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
                s && !s.done && (o = l.return) && o.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        this._traitDataArr = this._traitDataArr.concat(a);
        this.tryInitTraits();
        this.autoloadAllBundle();
    };
    TraitManager.prototype.resolveTraitConflicts = function (e) {
        var t, o, n, r, a;
        try {
            var l = [], s = new Map();
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
            var f = [];
            try {
                for (var h = __values(l), y = h.next(); !y.done; y = h.next()) {
                    var m = y.value, v = s.get(m), g = this.selectTraitFromGroup(m, v);
                    g && f.push(g);
                }
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    y && !y.done && (r = h.return) && r.call(h);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
            return f;
        }
        catch (t) {
            console.error("resolveTraitConflicts异常，回退使用原始数据:", t);
            null === (a = mj.reportError) || void 0 === a || a.call(mj, "resolveTraitConflicts异常: " + ((null == t ? void 0 : t.message) || t));
            return e;
        }
    };
    TraitManager.prototype.isActiveDayRangeConfig = function (e) {
        return Array.isArray(e.activeDayRange) && 2 === e.activeDayRange.length;
    };
    TraitManager.prototype.isActiveDayRangeSatisfied = function (e) {
        var t = this._conditionInfo.activeDays;
        return "number" == typeof t && t >= e.activeDayRange[0] && (t <= e.activeDayRange[1] || -1 === e.activeDayRange[1]);
    };
    TraitManager.prototype.selectTraitFromGroup = function (e, t) {
        var o, n, r, a = [];
        try {
            for (var l = __values(t), s = l.next(); !s.done; s = l.next()) {
                var c = s.value;
                this.isCountryFiltered(c) || this.isCountryIsoFiltered(c) || (this.isActiveDayRangeConfig(c) ? this.isActiveDayRangeSatisfied(c) && a.push(c) : a.push(c));
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (n = l.return) && n.call(l);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        if (0 === a.length)
            return null;
        try {
            return this.mergeTraitConfigs(a);
        }
        catch (t) {
            console.error("特性 " + e + " 合并配置异常，回退使用第一个配置:", t);
            null === (r = mj.reportError) || void 0 === r || r.call(mj, "mergeTraitConfigs异常[" + e + "]: " + ((null == t ? void 0 : t.message) || t));
            return a[0];
        }
    };
    TraitManager.prototype.mergeTraitConfigs = function (e) {
        var t, o, r, a, l, s;
        if (!e || 0 === e.length)
            return null;
        if (1 === e.length)
            return e[0];
        var c = e[0], u = Object.assign({}, c), p = new Set();
        try {
            for (var f = __values(e), d = f.next(); !d.done; d = f.next()) {
                var h = d.value;
                if (h && "object" == typeof h)
                    try {
                        for (var y = (r = void 0, __values(Object.keys(h))), m = y.next(); !m.done; m = y.next()) {
                            var v = m.value;
                            p.add(v);
                        }
                    }
                    catch (e) {
                        r = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            m && !m.done && (a = y.return) && a.call(y);
                        }
                        finally {
                            if (r)
                                throw r.error;
                        }
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
        var g = {}, _ = function _(t) {
            var o = e.map(function (e) {
                return e && e.hasOwnProperty(t) ? e[t] : null;
            }), n = JSON.stringify(o[0]);
            o.some(function (e) {
                return JSON.stringify(e) !== n;
            }) && (g[t] = o);
        };
        try {
            for (var T = __values(p), C = T.next(); !C.done; C = T.next())
                _(C.value);
        }
        catch (e) {
            l = {
                error: e
            };
        }
        finally {
            try {
                C && !C.done && (s = T.return) && s.call(T);
            }
            finally {
                if (l)
                    throw l.error;
            }
        }
        Object.keys(g).length > 0 && (u.conflictParams = g);
        return u;
    };
    TraitManager.prototype.insertTraitData = function (e, t) {
        d(!this.getTraitData(e.key), "特性key重复");
        if (!this.isCountryFiltered(e) && !this.isCountryIsoFiltered(e)) {
            if (null == t) {
                this._traitDataArr.push(e);
            }
            else {
                this._traitDataArr.splice(t, 0, e);
            }
            this._traitDataMap.set(e.key, e);
            var o = this._traits.find(function (t) {
                return t.traitKey === e.key;
            });
            if (o) {
                this.tryInitTrait(o);
            }
            else {
                this.hasBundle(e.bundle) && ResManager_1.resManager.loadBundle(e.bundle);
            }
        }
    };
    TraitManager.prototype.getTraitData = function (e) {
        return this._traitDataMap.get(e);
    };
    TraitManager.prototype.getTraitIndex = function (e) {
        return this._traitDataArr.indexOf(e);
    };
    TraitManager.prototype.autoloadAllBundle = function () {
        var e = this, t = this._traitDataArr.slice();
        t.sort(function (e, t) {
            var o = e.priority ? e.priority + 1000 * e.priority / e.priority : 0;
            return (t.priority ? t.priority + 1000 * t.priority / t.priority : 0) - o;
        });
        t.forEach(function (t) {
            e.hasBundle(t.bundle) && ResManager_1.resManager.loadBundle(t.bundle);
        });
    };
    TraitManager.prototype.preloadAllRes = function (e, t, o) {
        this.hasBundle(e) && ResManager_1.resManager.preDownLoadByDir("", o, t, e);
    };
    TraitManager.prototype.hasBundle = function (e) {
        if (!e)
            return false;
        if (!G_Cfg.baseVersion)
            return true;
        var t = cc.assetManager.downloader.bundleVers;
        return !t || !!t[e];
    };
    TraitManager.prototype.registerEvent = function (e, t, o, n, i) {
        if (t === void 0) { t = 0; }
        var r = new u(o, t, n, i);
        if (this._triggerEventMap.has(e)) {
            this._triggerEventMap.get(e).push(r);
        }
        else {
            this._triggerEventMap.set(e, [r]);
        }
    };
    TraitManager.prototype.removeEvent = function (e, t) {
        if (this._triggerEventMap.has(e)) {
            var o = this._triggerEventMap.get(e), n = o.findIndex(function (e) {
                return e.handler === t;
            });
            -1 !== n && o.splice(n, 1);
        }
    };
    TraitManager.prototype.removeEventByTarget = function (e) {
        this._triggerEventMap.forEach(function (t) {
            var o = t.findIndex(function (t) {
                return t.target === e;
            });
            -1 !== o && t.splice(o, 1);
        });
    };
    TraitManager.prototype.triggerMethodEvent = function (e, t, o, n, i) {
        var l = null;
        if (!this._triggerEventMap.has(e))
            return o.apply(t, n);
        var s = this._triggerEventMap.get(e), c = {
            ins: t,
            args: n,
            extra: i
        }, u = function u(t, o) {
            var n = new p(t);
            n.eventName = e;
            n.execute(c, o);
        }, f = s.filter(function (e) {
            return e.position === TraitEventPositionType.befor && e.target.eventEnabled;
        }), d = s.filter(function (e) {
            return e.position === TraitEventPositionType.after && e.target.eventEnabled;
        });
        if (f.length > 0)
            u(f, function (e) {
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
            });
        else {
            l = o.apply(t, n);
            if (d.length > 0) {
                c.beforReturnVal = l;
                u(d, function (e) {
                    e && e.hasOwnProperty("returnVal") && (l = e.returnVal);
                });
            }
        }
        return l;
    };
    TraitManager.prototype.triggerInternalEvent = function (e, t, o, n) {
        if (!this._triggerEventMap.has(e))
            return false;
        var i = this._triggerEventMap.get(e).filter(function (e) {
            return e.position === TraitEventPositionType.in && e.target.eventEnabled;
        });
        if (0 === i.length)
            return false;
        var l, s = {
            ins: t,
            args: o,
            extra: n
        }, c = new p(i);
        c.eventName = e;
        c.execute(s, function (e) {
            l = e;
        });
        return (null == l ? void 0 : l.returnType) === TraitCallbackReturnType.return;
    };
    TraitManager.prototype.removeAllEvent = function () {
        this._triggerEventMap.clear();
    };
    return TraitManager;
}());
exports.default = TraitManager;
cc.js.setClassName("TraitManager", TraitManager);
var d = window["assert"] || function (e, t) {
    var o;
    if (!e) {
        var n = new Error(t), i = n.stack.split("\n"), r = (i[1] || "") + "\n";
        r += (i[2] || "") + "\n";
        r += i[3] || "";
        n.message = n.message + "\n" + r;
        if (!cc.sys.isNative)
            throw n;
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
            for (var t = [], o = 0; o < arguments.length; o++)
                t[o] = arguments[o];
            return TraitManager.getInstance().triggerMethodEvent(e, this, i, t);
        };
    };
};
window["mj"].triggerInternalEvent = TraitManager.getInstance().triggerInternalEvent.bind(TraitManager.getInstance());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBaUQ7QUFDakQsOERBQTJEO0FBRTNELElBQVksc0JBSVg7QUFKRCxXQUFZLHNCQUFzQjtJQUM5QixxRUFBUyxDQUFBO0lBQ1QsK0RBQU0sQ0FBQTtJQUNOLHFFQUFTLENBQUE7QUFDYixDQUFDLEVBSlcsc0JBQXNCLEdBQXRCLDhCQUFzQixLQUF0Qiw4QkFBc0IsUUFJakM7QUFFRCxJQUFZLHVCQUlYO0FBSkQsV0FBWSx1QkFBdUI7SUFDL0IseUVBQVUsQ0FBQTtJQUNWLDZFQUFZLENBQUE7SUFDWixxRUFBUSxDQUFBO0FBQ1osQ0FBQyxFQUpXLHVCQUF1QixHQUF2QiwrQkFBdUIsS0FBdkIsK0JBQXVCLFFBSWxDO0FBRUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNsQixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBSyxFQUFFLENBQUUsRUFBRSxDQUFFO0lBQWIsa0JBQUEsRUFBQSxLQUFLO0lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQUVGO0lBUUksV0FBWSxDQUFDO1FBUGIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFPWCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBTkQsc0JBQUksb0JBQUs7YUFBVCxVQUFVLENBQUM7WUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDOzs7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QUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLE9BQU8sWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsR0FBRyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXNNYW5hZ2VyfSBmcm9tIFwiLi4vbWFuYWdlci9SZXNNYW5hZ2VyXCI7XG5pbXBvcnQge1NpbmdsZXRvbkZhY3Rvcnl9IGZyb20gXCIuLi91dGlscy9TaW5nbGV0b25GYWN0b3J5XCI7XG5cbmV4cG9ydCBlbnVtIFRyYWl0RXZlbnRQb3NpdGlvblR5cGUge1xuICAgIGJlZm9yID0gMCxcbiAgICBpbiA9IDEsXG4gICAgYWZ0ZXIgPSAyLFxufVxuXG5leHBvcnQgZW51bSBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB7XG4gICAgcmV0dXJuID0gMCxcbiAgICBjb250aW51ZSA9IDEsXG4gICAganVtcCA9IDIsXG59XG5cbnZhciBjID0gbmV3IFNldCgpO1xudmFyIHUgPSBmdW5jdGlvbiB1KGUsIHQgPSAwLCBvPywgbj8pIHtcbiAgICB0aGlzLmhhbmRsZXIgPSBlO1xuICAgIHRoaXMucHJpb3JpdHkgPSB0O1xuICAgIHRoaXMudGFyZ2V0ID0gbjtcbiAgICB0aGlzLnBvc2l0aW9uID0gbztcbn07XG5cbmNsYXNzIHAge1xuICAgIF9waXBlcyA9IFtdO1xuICAgIGV2ZW50TmFtZSA9IFwiXCI7XG5cbiAgICBzZXQgcGlwZXMoZSkge1xuICAgICAgICB0aGlzLl9waXBlcyA9IGU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZSkge1xuICAgICAgICB0aGlzLl9waXBlcyA9IGU7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuX3BpcGVzID0gW107XG4gICAgfVxuXG4gICAgZXhlY3V0ZShlLCB0KSB7XG4gICAgICAgIHZhciBvID0gdGhpcztcbiAgICAgICAgZCh0aGlzLl9waXBlcy5sZW5ndGggPiAwLCBcIueJueaAp+euoee6v+S4uuepulwiKTtcbiAgICAgICAgdGhpcy5fcGlwZXMuc29ydChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgcmV0dXJuIHQucHJpb3JpdHkgLSBlLnByaW9yaXR5O1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG4gPSAwLFxuICAgICAgICAgICAgaSA9IHRoaXMuX3BpcGVzW24rK10sXG4gICAgICAgICAgICByID0gZnVuY3Rpb24gcihsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbC5oYXNPd25Qcm9wZXJ0eShcInJldHVyblZhbFwiKSAmJiAoZS5iZWZvclJldHVyblZhbCA9IGwucmV0dXJuVmFsKTtcbiAgICAgICAgICAgICAgICAgICAgbC5oYXNPd25Qcm9wZXJ0eShcInJldHVyblR5cGVcIikgJiYgbC5yZXR1cm5UeXBlICE9IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmNvbnRpbnVlICYmIChlLmJlZm9yUmV0dXJuVHlwZSA9IGwucmV0dXJuVHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgobnVsbCA9PSBsID8gdm9pZCAwIDogbC5pc0JyZWFrKSB8fCBuID49IG8uX3BpcGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAobCA9IGwgfHwge30pLnJldHVyblZhbCA9IGUuYmVmb3JSZXR1cm5WYWw7XG4gICAgICAgICAgICAgICAgICAgIGwucmV0dXJuVHlwZSA9IGUuYmVmb3JSZXR1cm5UeXBlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdChsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKGkgPSBvLl9waXBlc1tuKytdKS5oYW5kbGVyLmNhbGwoaS50YXJnZXQsIGUsIHIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgaS5oYW5kbGVyLmNhbGwoaS50YXJnZXQsIGUsIHIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhaXRNYW5hZ2VyIHtcbiAgICBfdHJpZ2dlckV2ZW50TWFwID0gbmV3IE1hcCgpO1xuICAgIF90cmFpdERhdGFNYXAgPSBuZXcgTWFwKCk7XG4gICAgX3RyYWl0RGF0YUFyciA9IFtdO1xuICAgIF90cmFpdHMgPSBbXTtcbiAgICBfY29uZGl0aW9uSW5mbyA9IHt9O1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gU2luZ2xldG9uRmFjdG9yeS5nZXRJbnN0YW5jZSh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRDb25kaXRpb25JbmZvKGUpIHtcbiAgICAgICAgdGhpcy5fY29uZGl0aW9uSW5mbyA9IGU7XG4gICAgfVxuXG4gICAgZ2V0Q29uZGl0aW9uSW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmRpdGlvbkluZm87XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJUcmFpdChlKSB7XG4gICAgICAgIHRoaXMuX3RyYWl0cy5wdXNoKGUpO1xuICAgICAgICB0aGlzLl90cmFpdERhdGFNYXAuc2l6ZSA+IDAgJiYgdGhpcy50cnlJbml0VHJhaXQoZSk7XG4gICAgfVxuXG4gICAgdHJ5SW5pdFRyYWl0KGUpIHtcbiAgICAgICAgZChlLnRyYWl0S2V5LCBcIueJueaAp+agh+ivhnRyYWl0S2V55pyq5a6a5LmJOlwiICsgbWouZ2V0Q2xhc3NOYW1lKGUpKTtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmdldFRyYWl0RGF0YShlLnRyYWl0S2V5KTtcbiAgICAgICAgdCAmJiAoZS5nZXRJbnN0YW5jZSgpLnRyYWl0RGF0YSB8fCBlLmdldEluc3RhbmNlKCkuX19pbml0KHQpKTtcbiAgICB9XG5cbiAgICBpc0NvdW50cnlGaWx0ZXJlZChlKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5fY29uZGl0aW9uSW5mby5jb3VudHJ5O1xuICAgICAgICBpZiAoIXQgfHwgXCJcIiA9PT0gdCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoZS5pbmNsdWRlQ291bnRyeSAmJiBBcnJheS5pc0FycmF5KGUuaW5jbHVkZUNvdW50cnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gIWUuaW5jbHVkZUNvdW50cnkuaW5jbHVkZXModCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUuZmlsdGVyQ291bnRyeSAmJiBBcnJheS5pc0FycmF5KGUuZmlsdGVyQ291bnRyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmZpbHRlckNvdW50cnkuaW5jbHVkZXModCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlzQ291bnRyeUlzb0ZpbHRlcmVkKGUpIHtcbiAgICAgICAgdmFyIHQgPSAobnVsbCA9PSBlID8gdm9pZCAwIDogZS5kZWZhdWx0Q291bnRyeUlzbykgfHwgXCJcIixcbiAgICAgICAgICAgIG8gPSB0aGlzLl9jb25kaXRpb25JbmZvLmNvdW50cnlJc28gfHwgdDtcbiAgICAgICAgaWYgKCFvIHx8IFwiXCIgPT09IG8pIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGUuaW5jbHVkZUNvdW50cnlJc28gJiYgQXJyYXkuaXNBcnJheShlLmluY2x1ZGVDb3VudHJ5SXNvKSkge1xuICAgICAgICAgICAgcmV0dXJuICFlLmluY2x1ZGVDb3VudHJ5SXNvLmluY2x1ZGVzKG8pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLmZpbHRlckNvdW50cnlJc28gJiYgQXJyYXkuaXNBcnJheShlLmZpbHRlckNvdW50cnlJc28pKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5maWx0ZXJDb3VudHJ5SXNvLmluY2x1ZGVzKG8pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0cnlJbml0VHJhaXRzKCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3RyYWl0cy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBlLnRyeUluaXRUcmFpdCh0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGFyc2VUcmFpdERhdGEoZSkge1xuICAgICAgICB2YXIgdCxcbiAgICAgICAgICAgIG8sXG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgciA9IHRoaXMucmVzb2x2ZVRyYWl0Q29uZmxpY3RzKGUpLFxuICAgICAgICAgICAgYSA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKHIpLCBzID0gbC5uZXh0KCk7ICFzLmRvbmU7IHMgPSBsLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBjID0gcy52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSBjID8gdm9pZCAwIDogYy5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5wdXNoKGMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmFpdERhdGFNYXAuc2V0KGMua2V5LCBjKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi54m55oCn6YWN572u57y65bCRa2V55a2X5q6177yM5bey6Lez6L+HOlwiLCBjKTtcbiAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT0gKG4gPSBtai5yZXBvcnRFcnJvcikgfHwgdm9pZCAwID09PSBuIHx8IG4uY2FsbChtaiwgXCLnibnmgKfphY3nva7nvLrlsJFrZXk6IFwiICsgSlNPTi5zdHJpbmdpZnkoYykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcyAmJiAhcy5kb25lICYmIChvID0gbC5yZXR1cm4pICYmIG8uY2FsbChsKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdHJhaXREYXRhQXJyID0gdGhpcy5fdHJhaXREYXRhQXJyLmNvbmNhdChhKTtcbiAgICAgICAgdGhpcy50cnlJbml0VHJhaXRzKCk7XG4gICAgICAgIHRoaXMuYXV0b2xvYWRBbGxCdW5kbGUoKTtcbiAgICB9XG5cbiAgICByZXNvbHZlVHJhaXRDb25mbGljdHMoZSkge1xuICAgICAgICB2YXIgdCwgbywgbiwgciwgYTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBsID0gW10sXG4gICAgICAgICAgICAgICAgcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKGUpLCB1ID0gYy5uZXh0KCk7ICF1LmRvbmU7IHUgPSBjLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGQocC5rZXksIFwi54m55oCna2V55piv5b+F6ZyA55qEXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXMuaGFzKHAua2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zZXQocC5rZXksIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGwucHVzaChwLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcy5nZXQocC5rZXkpLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdSAmJiAhdS5kb25lICYmIChvID0gYy5yZXR1cm4pICYmIG8uY2FsbChjKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZiA9IFtdO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBoID0gX192YWx1ZXMobCksIHkgPSBoLm5leHQoKTsgIXkuZG9uZTsgeSA9IGgubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtID0geS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBzLmdldChtKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGcgPSB0aGlzLnNlbGVjdFRyYWl0RnJvbUdyb3VwKG0sIHYpO1xuICAgICAgICAgICAgICAgICAgICBnICYmIGYucHVzaChnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB5ICYmICF5LmRvbmUgJiYgKHIgPSBoLnJldHVybikgJiYgci5jYWxsKGgpO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwicmVzb2x2ZVRyYWl0Q29uZmxpY3Rz5byC5bi477yM5Zue6YCA5L2/55So5Y6f5aeL5pWw5o2uOlwiLCB0KTtcbiAgICAgICAgICAgIG51bGwgPT09IChhID0gbWoucmVwb3J0RXJyb3IpIHx8IHZvaWQgMCA9PT0gYSB8fCBhLmNhbGwobWosIFwicmVzb2x2ZVRyYWl0Q29uZmxpY3Rz5byC5bi4OiBcIiArICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSB8fCB0KSk7XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzQWN0aXZlRGF5UmFuZ2VDb25maWcoZSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShlLmFjdGl2ZURheVJhbmdlKSAmJiAyID09PSBlLmFjdGl2ZURheVJhbmdlLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpc0FjdGl2ZURheVJhbmdlU2F0aXNmaWVkKGUpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLl9jb25kaXRpb25JbmZvLmFjdGl2ZURheXM7XG4gICAgICAgIHJldHVybiBcIm51bWJlclwiID09IHR5cGVvZiB0ICYmIHQgPj0gZS5hY3RpdmVEYXlSYW5nZVswXSAmJiAodCA8PSBlLmFjdGl2ZURheVJhbmdlWzFdIHx8IC0xID09PSBlLmFjdGl2ZURheVJhbmdlWzFdKTtcbiAgICB9XG5cbiAgICBzZWxlY3RUcmFpdEZyb21Hcm91cChlLCB0KSB7XG4gICAgICAgIHZhciBvLFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHIsXG4gICAgICAgICAgICBhID0gW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBsID0gX192YWx1ZXModCksIHMgPSBsLm5leHQoKTsgIXMuZG9uZTsgcyA9IGwubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBzLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb3VudHJ5RmlsdGVyZWQoYykgfHwgdGhpcy5pc0NvdW50cnlJc29GaWx0ZXJlZChjKSB8fCAodGhpcy5pc0FjdGl2ZURheVJhbmdlQ29uZmlnKGMpID8gdGhpcy5pc0FjdGl2ZURheVJhbmdlU2F0aXNmaWVkKGMpICYmIGEucHVzaChjKSA6IGEucHVzaChjKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIG8gPSB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHMgJiYgIXMuZG9uZSAmJiAobiA9IGwucmV0dXJuKSAmJiBuLmNhbGwobCk7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgwID09PSBhLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tZXJnZVRyYWl0Q29uZmlncyhhKTtcbiAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIueJueaApyBcIiArIGUgKyBcIiDlkIjlubbphY3nva7lvILluLjvvIzlm57pgIDkvb/nlKjnrKzkuIDkuKrphY3nva46XCIsIHQpO1xuICAgICAgICAgICAgbnVsbCA9PT0gKHIgPSBtai5yZXBvcnRFcnJvcikgfHwgdm9pZCAwID09PSByIHx8IHIuY2FsbChtaiwgXCJtZXJnZVRyYWl0Q29uZmlnc+W8guW4uFtcIiArIGUgKyBcIl06IFwiICsgKChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpIHx8IHQpKTtcbiAgICAgICAgICAgIHJldHVybiBhWzBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWVyZ2VUcmFpdENvbmZpZ3MoZSkge1xuICAgICAgICB2YXIgdCwgbywgciwgYSwgbCwgcztcbiAgICAgICAgaWYgKCFlIHx8IDAgPT09IGUubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKDEgPT09IGUubGVuZ3RoKSByZXR1cm4gZVswXTtcbiAgICAgICAgdmFyIGMgPSBlWzBdLFxuICAgICAgICAgICAgdSA9IE9iamVjdC5hc3NpZ24oe30sIGMpLFxuICAgICAgICAgICAgcCA9IG5ldyBTZXQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIGYgPSBfX3ZhbHVlcyhlKSwgZCA9IGYubmV4dCgpOyAhZC5kb25lOyBkID0gZi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IGQudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGggJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgaCkgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IChyID0gdm9pZCAwLCBfX3ZhbHVlcyhPYmplY3Qua2V5cyhoKSkpLCBtID0geS5uZXh0KCk7ICFtLmRvbmU7IG0gPSB5Lm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBtLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcC5hZGQodik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtICYmICFtLmRvbmUgJiYgKGEgPSB5LnJldHVybikgJiYgYS5jYWxsKHkpO1xuICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGQgJiYgIWQuZG9uZSAmJiAobyA9IGYucmV0dXJuKSAmJiBvLmNhbGwoZik7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBnID0ge30sXG4gICAgICAgICAgICBfID0gZnVuY3Rpb24gXyh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSBlLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgJiYgZS5oYXNPd25Qcm9wZXJ0eSh0KSA/IGVbdF0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgbiA9IEpTT04uc3RyaW5naWZ5KG9bMF0pO1xuICAgICAgICAgICAgICAgIG8uc29tZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZSkgIT09IG47XG4gICAgICAgICAgICAgICAgfSkgJiYgKGdbdF0gPSBvKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBUID0gX192YWx1ZXMocCksIEMgPSBULm5leHQoKTsgIUMuZG9uZTsgQyA9IFQubmV4dCgpKSBfKEMudmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsID0ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBDICYmICFDLmRvbmUgJiYgKHMgPSBULnJldHVybikgJiYgcy5jYWxsKFQpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAobCkgdGhyb3cgbC5lcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBPYmplY3Qua2V5cyhnKS5sZW5ndGggPiAwICYmICh1LmNvbmZsaWN0UGFyYW1zID0gZyk7XG4gICAgICAgIHJldHVybiB1O1xuICAgIH1cblxuICAgIGluc2VydFRyYWl0RGF0YShlLCB0KSB7XG4gICAgICAgIGQoIXRoaXMuZ2V0VHJhaXREYXRhKGUua2V5KSwgXCLnibnmgKdrZXnph43lpI1cIik7XG4gICAgICAgIGlmICghdGhpcy5pc0NvdW50cnlGaWx0ZXJlZChlKSAmJiAhdGhpcy5pc0NvdW50cnlJc29GaWx0ZXJlZChlKSkge1xuICAgICAgICAgICAgaWYgKG51bGwgPT0gdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYWl0RGF0YUFyci5wdXNoKGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFpdERhdGFBcnIuc3BsaWNlKHQsIDAsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdHJhaXREYXRhTWFwLnNldChlLmtleSwgZSk7XG4gICAgICAgICAgICB2YXIgbyA9IHRoaXMuX3RyYWl0cy5maW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQudHJhaXRLZXkgPT09IGUua2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgIHRoaXMudHJ5SW5pdFRyYWl0KG8pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0J1bmRsZShlLmJ1bmRsZSkgJiYgcmVzTWFuYWdlci5sb2FkQnVuZGxlKGUuYnVuZGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRyYWl0RGF0YShlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFpdERhdGFNYXAuZ2V0KGUpO1xuICAgIH1cblxuICAgIGdldFRyYWl0SW5kZXgoZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJhaXREYXRhQXJyLmluZGV4T2YoZSk7XG4gICAgfVxuXG4gICAgYXV0b2xvYWRBbGxCdW5kbGUoKSB7XG4gICAgICAgIHZhciBlID0gdGhpcyxcbiAgICAgICAgICAgIHQgPSB0aGlzLl90cmFpdERhdGFBcnIuc2xpY2UoKTtcbiAgICAgICAgdC5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICB2YXIgbyA9IGUucHJpb3JpdHkgPyBlLnByaW9yaXR5ICsgMTAwMCAqIGUucHJpb3JpdHkgLyBlLnByaW9yaXR5IDogMDtcbiAgICAgICAgICAgIHJldHVybiAodC5wcmlvcml0eSA/IHQucHJpb3JpdHkgKyAxMDAwICogdC5wcmlvcml0eSAvIHQucHJpb3JpdHkgOiAwKSAtIG87XG4gICAgICAgIH0pO1xuICAgICAgICB0LmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGUuaGFzQnVuZGxlKHQuYnVuZGxlKSAmJiByZXNNYW5hZ2VyLmxvYWRCdW5kbGUodC5idW5kbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcmVsb2FkQWxsUmVzKGUsIHQsIG8pIHtcbiAgICAgICAgdGhpcy5oYXNCdW5kbGUoZSkgJiYgcmVzTWFuYWdlci5wcmVEb3duTG9hZEJ5RGlyKFwiXCIsIG8sIHQsIGUpO1xuICAgIH1cblxuICAgIGhhc0J1bmRsZShlKSB7XG4gICAgICAgIGlmICghZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIUdfQ2ZnLmJhc2VWZXJzaW9uKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdmFyIHQgPSBjYy5hc3NldE1hbmFnZXIuZG93bmxvYWRlci5idW5kbGVWZXJzO1xuICAgICAgICByZXR1cm4gIXQgfHwgISF0W2VdO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnQoZSwgdCA9IDAsIG8/LCBuPywgaT8pIHtcbiAgICAgICAgdmFyIHIgPSBuZXcgdShvLCB0LCBuLCBpKTtcbiAgICAgICAgaWYgKHRoaXMuX3RyaWdnZXJFdmVudE1hcC5oYXMoZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyaWdnZXJFdmVudE1hcC5nZXQoZSkucHVzaChyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3RyaWdnZXJFdmVudE1hcC5zZXQoZSwgW3JdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUV2ZW50KGUsIHQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RyaWdnZXJFdmVudE1hcC5oYXMoZSkpIHtcbiAgICAgICAgICAgIHZhciBvID0gdGhpcy5fdHJpZ2dlckV2ZW50TWFwLmdldChlKSxcbiAgICAgICAgICAgICAgICBuID0gby5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuaGFuZGxlciA9PT0gdDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC0xICE9PSBuICYmIG8uc3BsaWNlKG4sIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnRCeVRhcmdldChlKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJFdmVudE1hcC5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB2YXIgbyA9IHQuZmluZEluZGV4KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQudGFyZ2V0ID09PSBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAtMSAhPT0gbyAmJiB0LnNwbGljZShvLCAxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJpZ2dlck1ldGhvZEV2ZW50KGUsIHQsIG8sIG4sIGkpIHtcbiAgICAgICAgdmFyIGwgPSBudWxsO1xuICAgICAgICBpZiAoIXRoaXMuX3RyaWdnZXJFdmVudE1hcC5oYXMoZSkpIHJldHVybiBvLmFwcGx5KHQsIG4pO1xuICAgICAgICB2YXIgcyA9IHRoaXMuX3RyaWdnZXJFdmVudE1hcC5nZXQoZSksXG4gICAgICAgICAgICBjID0ge1xuICAgICAgICAgICAgICAgIGluczogdCxcbiAgICAgICAgICAgICAgICBhcmdzOiBuLFxuICAgICAgICAgICAgICAgIGV4dHJhOiBpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdSA9IGZ1bmN0aW9uIHUodCwgbykge1xuICAgICAgICAgICAgICAgIHZhciBuID0gbmV3IHAodCk7XG4gICAgICAgICAgICAgICAgbi5ldmVudE5hbWUgPSBlO1xuICAgICAgICAgICAgICAgIG4uZXhlY3V0ZShjLCBvKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmID0gcy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5wb3NpdGlvbiA9PT0gVHJhaXRFdmVudFBvc2l0aW9uVHlwZS5iZWZvciAmJiBlLnRhcmdldC5ldmVudEVuYWJsZWQ7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGQgPSBzLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlLnBvc2l0aW9uID09PSBUcmFpdEV2ZW50UG9zaXRpb25UeXBlLmFmdGVyICYmIGUudGFyZ2V0LmV2ZW50RW5hYmxlZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBpZiAoZi5sZW5ndGggPiAwKSB1KGYsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsID0gbnVsbCA9PSBlID8gdm9pZCAwIDogZS5yZXR1cm5WYWw7XG4gICAgICAgICAgICBpZiAoKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUucmV0dXJuVHlwZSkgIT09IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybikge1xuICAgICAgICAgICAgICAgIChudWxsID09IGUgPyB2b2lkIDAgOiBlLnJldHVyblR5cGUpICE9PSBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wICYmIChsID0gby5hcHBseSh0LCBuKSk7XG4gICAgICAgICAgICAgICAgaWYgKGQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjLmJlZm9yUmV0dXJuVmFsID0gbDtcbiAgICAgICAgICAgICAgICAgICAgdShkLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZSAmJiBlLmhhc093blByb3BlcnR5KFwicmV0dXJuVmFsXCIpICYmIChsID0gZS5yZXR1cm5WYWwpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pOyBlbHNlIHtcbiAgICAgICAgICAgIGwgPSBvLmFwcGx5KHQsIG4pO1xuICAgICAgICAgICAgaWYgKGQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGMuYmVmb3JSZXR1cm5WYWwgPSBsO1xuICAgICAgICAgICAgICAgIHUoZCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZSAmJiBlLmhhc093blByb3BlcnR5KFwicmV0dXJuVmFsXCIpICYmIChsID0gZS5yZXR1cm5WYWwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsO1xuICAgIH1cblxuICAgIHRyaWdnZXJJbnRlcm5hbEV2ZW50KGUsIHQsIG8sIG4pIHtcbiAgICAgICAgaWYgKCF0aGlzLl90cmlnZ2VyRXZlbnRNYXAuaGFzKGUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBpID0gdGhpcy5fdHJpZ2dlckV2ZW50TWFwLmdldChlKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLnBvc2l0aW9uID09PSBUcmFpdEV2ZW50UG9zaXRpb25UeXBlLmluICYmIGUudGFyZ2V0LmV2ZW50RW5hYmxlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICgwID09PSBpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgbCxcbiAgICAgICAgICAgIHMgPSB7XG4gICAgICAgICAgICAgICAgaW5zOiB0LFxuICAgICAgICAgICAgICAgIGFyZ3M6IG8sXG4gICAgICAgICAgICAgICAgZXh0cmE6IG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjID0gbmV3IHAoaSk7XG4gICAgICAgIGMuZXZlbnROYW1lID0gZTtcbiAgICAgICAgYy5leGVjdXRlKHMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsID0gZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAobnVsbCA9PSBsID8gdm9pZCAwIDogbC5yZXR1cm5UeXBlKSA9PT0gVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuO1xuICAgIH1cblxuICAgIHJlbW92ZUFsbEV2ZW50KCkge1xuICAgICAgICB0aGlzLl90cmlnZ2VyRXZlbnRNYXAuY2xlYXIoKTtcbiAgICB9XG59XG5jYy5qcy5zZXRDbGFzc05hbWUoXCJUcmFpdE1hbmFnZXJcIiwgVHJhaXRNYW5hZ2VyKTtcbnZhciBkID0gd2luZG93W1wiYXNzZXJ0XCJdIHx8IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgdmFyIG87XG4gICAgaWYgKCFlKSB7XG4gICAgICAgIHZhciBuID0gbmV3IEVycm9yKHQpLFxuICAgICAgICAgICAgaSA9IG4uc3RhY2suc3BsaXQoXCJcXG5cIiksXG4gICAgICAgICAgICByID0gKGlbMV0gfHwgXCJcIikgKyBcIlxcblwiO1xuICAgICAgICByICs9IChpWzJdIHx8IFwiXCIpICsgXCJcXG5cIjtcbiAgICAgICAgciArPSBpWzNdIHx8IFwiXCI7XG4gICAgICAgIG4ubWVzc2FnZSA9IG4ubWVzc2FnZSArIFwiXFxuXCIgKyByO1xuICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSkgdGhyb3cgbjtcbiAgICAgICAgbnVsbCA9PT0gKG8gPSB3aW5kb3dbXCJfcmVwb3J0RXJyb3JcIl0pIHx8IHZvaWQgMCA9PT0gbyB8fCBvLmNhbGwod2luZG93LCBuLm1lc3NhZ2UpO1xuICAgIH1cbn07XG53aW5kb3dbXCJtalwiXS50cmFpdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgZChtai5nZXRDbGFzc05hbWUoZSksIFwiY2xhc3NOYW1l5piv5b+F6ZyA55qE77yMdHJhaXToo4XppbDlmajlj6rog73nlKjkuo5tauexu1wiKTtcbiAgICBUcmFpdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZWdpc3RlclRyYWl0KGUpO1xufTtcbndpbmRvd1tcIm1qXCJdLnRyYWl0RXZlbnQgPSBmdW5jdGlvbiAoZSkge1xuICAgIGMuaGFzKGUpICYmIGQoZmFsc2UsIFwi5LqL5Lu25ZCN56ew6YeN5aSN77yM6K+36YeN5paw6LCD5pW0OiBcIiArIGUpO1xuICAgIGMuYWRkKGUpO1xuICAgIHJldHVybiBmdW5jdGlvbiAodCwgbywgbikge1xuICAgICAgICB2YXIgaSA9IG4udmFsdWU7XG4gICAgICAgIG4udmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB0ID0gW10sIG8gPSAwOyBvIDwgYXJndW1lbnRzLmxlbmd0aDsgbysrKSB0W29dID0gYXJndW1lbnRzW29dO1xuICAgICAgICAgICAgcmV0dXJuIFRyYWl0TWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyaWdnZXJNZXRob2RFdmVudChlLCB0aGlzLCBpLCB0KTtcbiAgICAgICAgfTtcbiAgICB9O1xufTtcbndpbmRvd1tcIm1qXCJdLnRyaWdnZXJJbnRlcm5hbEV2ZW50ID0gVHJhaXRNYW5hZ2VyLmdldEluc3RhbmNlKCkudHJpZ2dlckludGVybmFsRXZlbnQuYmluZChUcmFpdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKSk7Il19