"use strict";
cc._RF.push(module, '8cd8e8LDnlPpYGoqsBgrNzR', 'BaseUI');
// Scripts/framework/ui/BaseUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.initNodeDecorators = void 0;
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var MemoryManager_1 = require("../manager/MemoryManager");
var ResManager_1 = require("../manager/ResManager");
var h = Symbol("__node_decorator__");
function y(e) {
    var t, o, n, i, r = e[h];
    if (r && !e.__decorator_loaded__) {
        e.__decorator_loaded__ = true;
        var a = r.nodes, l = r.components;
        if (a)
            try {
                for (var c = __values(a), u = c.next(); !u.done; u = c.next()) {
                    var p = (v = u.value).path, f = v.propertyKey, d = cc.find(p, e.node);
                    if (cc.isValid(d)) {
                        e[f] = d;
                    }
                    else {
                        e[f] = null;
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
                    u && !u.done && (o = c.return) && o.call(c);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        if (l)
            try {
                for (var y = __values(l), m = y.next(); !m.done; m = y.next()) {
                    p = (v = m.value).path, f = v.propertyKey;
                    var v, g = v.componentType, _ = cc.find(p, e.node);
                    if (cc.isValid(_)) {
                        var T = _.getComponent(g);
                        if (cc.isValid(T)) {
                            e[f] = T;
                        }
                        else {
                            e[f] = null;
                        }
                    }
                    else
                        e[f] = null;
                }
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    m && !m.done && (i = y.return) && i.call(y);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
    }
}
exports.initNodeDecorators = y;
var m = Date.now();
var BaseUI = /** @class */ (function (_super) {
    __extends(BaseUI, _super);
    function BaseUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cachedAssetMap = {};
        _this.delegate = null;
        _this._ignoreEventMessage = false;
        _this._touchListeners = [];
        return _this;
    }
    BaseUI_1 = BaseUI;
    BaseUI.getUrl = function () {
        return this.prefabUrl;
    };
    BaseUI.createUI = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            var o, n;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ResManager_1.resManager.loadRes(e || this.prefabUrl, cc.Prefab, t || this.bundleName)];
                    case 1:
                        o = _a.sent();
                        (n = cc.instantiate(o)).addComponent(this).cacheRes(o);
                        return [2 /*return*/, n];
                }
            });
        });
    };
    BaseUI.createUISync = function (e) {
        var t = cc.instantiate(e);
        t.addComponent(this);
        return t;
    };
    BaseUI.prototype.onLoad = function () {
        y(this);
        this.registerListeners();
    };
    BaseUI.prototype.registerTouchEvent = function (e, t, o, n, i) {
        if (i === void 0) { i = false; }
        var r = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            owner: this.node,
            swallowTouches: i,
            onTouchBegan: e,
            onTouchMoved: t,
            onTouchEnded: o,
            onTouchCancelled: n
        });
        cc.internal.eventManager.addListener(r, this.node);
        this._touchListeners.push(r);
    };
    BaseUI.prototype.registerListeners = function () {
        var e = this, t = this.getMessageListeners(), o = function o(o) {
            mj.EventManager.on(o, function () {
                for (var n = [], i = 0; i < arguments.length; i++)
                    n[i] = arguments[i];
                e._ignoreEventMessage && !e.enabledInHierarchy || t[o].apply(t, __spreadArrays(n));
            }, n);
        }, n = this;
        for (var i in t)
            o(i);
    };
    BaseUI.prototype.setIgnoreEventMessageOnDisable = function (e) {
        this._ignoreEventMessage = e;
    };
    BaseUI.prototype.getMessageListeners = function () {
        return {};
    };
    BaseUI.prototype.createUISync = function (e, t, o) {
        var n;
        t = t || e.prefabUrl;
        o = o || e.bundleName;
        n = "string" == typeof t ? this.delegate ? this.delegate.getRes(t, cc.Prefab, o) : this.getRes(t, cc.Prefab, o) : t;
        if (cc.isValid(n)) {
            var i = cc.instantiate(n);
            i.addComponent(e).delegate = this.delegate;
            return i;
        }
        return null;
    };
    BaseUI.prototype.OnButtonClick = function (e, t, n, i, r, a) {
        if (i === void 0) { i = false; }
        if (r === void 0) { r = true; }
        if (a === void 0) { a = true; }
        var l = this;
        n = n || this.node;
        var s = e instanceof cc.Node ? e : cc.find(e, n);
        assert(s, "未找到按钮: " + e);
        var c = null, u = {
            eventType: cc.Node.EventType.TOUCH_END,
            clickAudio: GameTypeEnums_1.EAudioID.BtnClick,
            ignoreClickAudio: false,
            timeLimit: 0.2,
            vibrateLevel: void 0
        };
        if (t instanceof Function)
            c = t;
        else if ("string" == typeof t)
            c = this[t].bind(this);
        else {
            var f = t;
            if (f.func instanceof Function) {
                c = f.func;
            }
            else {
                "string" == typeof f.func && (c = this[f.func].bind(this));
            }
            u.eventType = f.eventType || u.eventType;
            u.clickAudio = f.clickAudio || u.clickAudio;
            u.ignoreClickAudio = f.ignoreClickAudio || false;
            u.timeLimit = void 0 !== f.timeLimit ? f.timeLimit : 0.2;
            u.vibrateLevel = void 0 !== f.vibrateLevel ? f.vibrateLevel : void 0;
        }
        if (c) {
            var d = s.getComponent(cc.Button), h = function h(e) {
                if (!d || d.interactable) {
                    if (d && d.transition === cc.Button.Transition.SCALE && e.type === cc.Node.EventType.TOUCH_CANCEL && d._getTarget() === s) {
                        var t = e.touch.getLocation();
                        s.setScale(d._originalScale);
                        if (!s._hitTest(t, s))
                            return;
                    }
                    if (!(u.eventType === cc.Node.EventType.TOUCH_END && Math.abs(Date.now() - m) < 1000 * u.timeLimit)) {
                        m = Date.now();
                        r && e.stopPropagation();
                        if (a) {
                            var o = e.getStartLocation();
                            if (e.getLocation().sub(o).mag() > 50)
                                return;
                        }
                        c(e);
                        l.buttonClickSound(u);
                    }
                }
            };
            s.targetOff(s);
            s.on(u.eventType, h, s, i);
            d && (d.zoomScale = BaseUI_1.zoomScale);
            d && d.transition === cc.Button.Transition.SCALE && u.eventType === cc.Node.EventType.TOUCH_END && d._getTarget() === s && s.on(cc.Node.EventType.TOUCH_CANCEL, h, s, i);
            var y = cc.macro.ENABLE_MULTI_TOUCH;
            s.on(cc.Node.EventType.TOUCH_START, function () {
                y = cc.macro.ENABLE_MULTI_TOUCH;
                cc.macro.ENABLE_MULTI_TOUCH = false;
                cc.game.emit("__ui_btn_touch_lock__");
            }, s, i);
            s.on(cc.Node.EventType.TOUCH_END, function () {
                cc.macro.ENABLE_MULTI_TOUCH = y;
            }, s, i);
            s.on(cc.Node.EventType.TOUCH_CANCEL, function () {
                cc.macro.ENABLE_MULTI_TOUCH = y;
            }, s, i);
        }
    };
    BaseUI.prototype.buttonClickSound = function (e) {
        if (e === void 0) { e = {}; }
        e.ignoreClickAudio || mj.audioManager.playEffect(e.clickAudio);
    };
    BaseUI.prototype.mapButtonHandlersClick = function (e, t) {
        for (var o in e) {
            var n = e[o];
            this.OnButtonClick(o, n, t);
        }
    };
    BaseUI.prototype.dispatchEvent = function (e) {
        for (var t = [], o = 1; o < arguments.length; o++)
            t[o - 1] = arguments[o];
        t.unshift(e);
        mj.EventManager.emit.apply(mj.EventManager, t);
    };
    BaseUI.prototype.start = function () { };
    BaseUI.prototype.onDestroy = function () {
        Object.keys(this._cachedAssetMap).length;
        this.releaseCache();
        mj.EventManager.targetOff(this);
        this._touchListeners.forEach(function (e) {
            cc.internal.eventManager.removeListener(e);
        });
    };
    BaseUI.prototype.hasRes = function (e, t) {
        if (t === void 0) { t = this.constructor.bundleName; }
        var o = ResManager_1.resManager.getBundle(t);
        return !!o && !!o.getInfoWithPath(e);
    };
    BaseUI.prototype.getRes = function (e, t, o) {
        if (t === void 0) { t = cc.Asset; }
        if (o === void 0) { o = this.constructor.bundleName; }
        var n = ResManager_1.resManager.getBundle(o), i = null == n ? void 0 : n.get(e, t);
        if (!i)
            return null;
        this.cacheRes(i);
        return cc.isValid(this.node) ? i : null;
    };
    BaseUI.prototype.loadRes = function (e, t, o) {
        if (t === void 0) { t = cc.Asset; }
        return __awaiter(this, void 0, void 0, function () {
            var n, i, r, a, c, u, p;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ResManager_1.resManager.loadRes(e, t, o)];
                    case 1:
                        n = _a.sent();
                        i = Array.isArray(e) ? n : [n];
                        if (!cc.isValid(this.node)) {
                            try {
                                for (r = __values(i), a = r.next(); !a.done; a = r.next()) {
                                    (c = a.value).addRef();
                                    MemoryManager_1.default.getInstance().cacheDelayReleaseRes(c);
                                }
                            }
                            catch (e) {
                                u = {
                                    error: e
                                };
                            }
                            finally {
                                try {
                                    a && !a.done && (p = r.return) && p.call(r);
                                }
                                finally {
                                    if (u)
                                        throw u.error;
                                }
                            }
                            return [2 /*return*/, null];
                        }
                        this.cacheRes(i);
                        return [2 /*return*/, n];
                }
            });
        });
    };
    BaseUI.prototype.releaseRes = function (e) {
        var t, o, n = Array.isArray(e) ? e : [e];
        try {
            for (var i = __values(n), r = i.next(); !r.done; r = i.next()) {
                var a = r.value;
                if (a) {
                    var l = a._uuid;
                    if (this._cachedAssetMap[l]) {
                        MemoryManager_1.default.getInstance().cacheDelayReleaseRes(a);
                        delete this._cachedAssetMap[l];
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
                r && !r.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    BaseUI.prototype.releaseCache = function () {
        for (var e in this._cachedAssetMap) {
            var t = this._cachedAssetMap[e][0];
            MemoryManager_1.default.getInstance().cacheDelayReleaseRes(t);
        }
        this._cachedAssetMap = {};
    };
    BaseUI.prototype.cacheRes = function (e) {
        var t, o, n = Array.isArray(e) ? e : [e];
        try {
            for (var i = __values(n), r = i.next(); !r.done; r = i.next()) {
                var a = r.value, l = a._uuid, c = this._cachedAssetMap[l];
                if (c)
                    c[1] += 1;
                else {
                    a.addRef();
                    if (cc.isValid(this.node)) {
                        this._cachedAssetMap[l] = [a, 1];
                    }
                    else {
                        MemoryManager_1.default.getInstance().cacheDelayReleaseRes(a);
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
                r && !r.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    var BaseUI_1;
    BaseUI.zoomScale = 0.9;
    BaseUI.prefabUrl = "";
    __decorate([
        mj.traitEvent("BaseUI_btnClick")
    ], BaseUI.prototype, "buttonClickSound", null);
    BaseUI = BaseUI_1 = __decorate([
        mj.class
    ], BaseUI);
    return BaseUI;
}(cc.Component));
exports.default = BaseUI;
window['mj'].node = function (e) {
    return function (t, o) {
        t[h] || (t[h] = {
            nodes: [],
            components: []
        });
        var n = {
            path: e,
            propertyKey: o
        };
        t[h].nodes.push(n);
    };
};
window['mj'].component = function (e, t) {
    return function (o, n) {
        o[h] || (o[h] = {
            nodes: [],
            components: []
        });
        var i = {
            path: e,
            propertyKey: n,
            componentType: t
        };
        o[h].components.push(i);
    };
};

cc._RF.pop();