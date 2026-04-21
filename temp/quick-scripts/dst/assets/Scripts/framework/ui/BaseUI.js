
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/framework/ui/BaseUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBdUU7QUFDdkUsMERBQXFEO0FBQ3JELG9EQUFtRDtBQUNuRCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNyQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ1YsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixFQUFFO1FBQ2hDLENBQUMsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNuQixJQUFJLENBQUM7WUFBRSxJQUFJO2dCQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUNqQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ2pCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ1Y7eUJBQU07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RCxBQWtRQyxDQWxRbUMsRUFBRSxDQUFDLFNBQVMsR0FrUS9DO2tCQWxRb0IsTUFBTTtBQW1RM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7SUFDN0IsT0FBTyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztZQUNkLEtBQUssRUFBRSxFQUFFO1lBQ1QsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRztZQUNOLElBQUksRUFBRSxDQUFDO1lBQ1AsV0FBVyxFQUFFLENBQUM7U0FDZixDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDO0lBQ3JDLE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUc7WUFDTixJQUFJLEVBQUUsQ0FBQztZQUNQLFdBQVcsRUFBRSxDQUFDO1lBQ2QsYUFBYSxFQUFFLENBQUM7U0FDakIsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi4vLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgTWVtb3J5TWFuYWdlciBmcm9tICcuLi9tYW5hZ2VyL01lbW9yeU1hbmFnZXInO1xuaW1wb3J0IHsgcmVzTWFuYWdlciB9IGZyb20gJy4uL21hbmFnZXIvUmVzTWFuYWdlcic7XG52YXIgaCA9IFN5bWJvbChcIl9fbm9kZV9kZWNvcmF0b3JfX1wiKTtcbmZ1bmN0aW9uIHkoZSkge1xuICB2YXIgdCxcbiAgICBvLFxuICAgIG4sXG4gICAgaSxcbiAgICByID0gZVtoXTtcbiAgaWYgKHIgJiYgIWUuX19kZWNvcmF0b3JfbG9hZGVkX18pIHtcbiAgICBlLl9fZGVjb3JhdG9yX2xvYWRlZF9fID0gdHJ1ZTtcbiAgICB2YXIgYSA9IHIubm9kZXMsXG4gICAgICBsID0gci5jb21wb25lbnRzO1xuICAgIGlmIChhKSB0cnkge1xuICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKGEpLCB1ID0gYy5uZXh0KCk7ICF1LmRvbmU7IHUgPSBjLm5leHQoKSkge1xuICAgICAgICB2YXIgcCA9ICh2ID0gdS52YWx1ZSkucGF0aCxcbiAgICAgICAgICBmID0gdi5wcm9wZXJ0eUtleSxcbiAgICAgICAgICBkID0gY2MuZmluZChwLCBlLm5vZGUpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChkKSkge1xuICAgICAgICAgIGVbZl0gPSBkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVbZl0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHUgJiYgIXUuZG9uZSAmJiAobyA9IGMucmV0dXJuKSAmJiBvLmNhbGwoYyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGwpIHRyeSB7XG4gICAgICBmb3IgKHZhciB5ID0gX192YWx1ZXMobCksIG0gPSB5Lm5leHQoKTsgIW0uZG9uZTsgbSA9IHkubmV4dCgpKSB7XG4gICAgICAgIHAgPSAodiA9IG0udmFsdWUpLnBhdGgsIGYgPSB2LnByb3BlcnR5S2V5O1xuICAgICAgICB2YXIgdixcbiAgICAgICAgICBnID0gdi5jb21wb25lbnRUeXBlLFxuICAgICAgICAgIF8gPSBjYy5maW5kKHAsIGUubm9kZSk7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKF8pKSB7XG4gICAgICAgICAgdmFyIFQgPSBfLmdldENvbXBvbmVudChnKTtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZChUKSkge1xuICAgICAgICAgICAgZVtmXSA9IFQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVbZl0gPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGVbZl0gPSBudWxsO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG4gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBtICYmICFtLmRvbmUgJiYgKGkgPSB5LnJldHVybikgJiYgaS5jYWxsKHkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5leHBvcnQgdmFyIGluaXROb2RlRGVjb3JhdG9ycyA9IHk7XG52YXIgbSA9IERhdGUubm93KCk7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIF9jYWNoZWRBc3NldE1hcCA9IHt9O1xuICBkZWxlZ2F0ZSA9IG51bGw7XG4gIF9pZ25vcmVFdmVudE1lc3NhZ2UgPSBmYWxzZTtcbiAgX3RvdWNoTGlzdGVuZXJzID0gW107XG4gIHN0YXRpYyB6b29tU2NhbGUgPSAwLjk7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcIlwiO1xuICBzdGF0aWMgZ2V0VXJsKCkge1xuICAgIHJldHVybiB0aGlzLnByZWZhYlVybDtcbiAgfVxuICBzdGF0aWMgYXN5bmMgY3JlYXRlVUkoZSwgdCkge1xuICAgIHZhciBvLCBuO1xuICAgIG8gPSBhd2FpdCByZXNNYW5hZ2VyLmxvYWRSZXMoZSB8fCB0aGlzLnByZWZhYlVybCwgY2MuUHJlZmFiLCB0IHx8IHRoaXMuYnVuZGxlTmFtZSk7XG4gICAgKG4gPSBjYy5pbnN0YW50aWF0ZShvKSkuYWRkQ29tcG9uZW50KHRoaXMpLmNhY2hlUmVzKG8pO1xuICAgIHJldHVybiBuO1xuICB9XG4gIHN0YXRpYyBjcmVhdGVVSVN5bmMoZSkge1xuICAgIHZhciB0ID0gY2MuaW5zdGFudGlhdGUoZSk7XG4gICAgdC5hZGRDb21wb25lbnQodGhpcyk7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHkodGhpcyk7XG4gICAgdGhpcy5yZWdpc3Rlckxpc3RlbmVycygpO1xuICB9XG4gIHJlZ2lzdGVyVG91Y2hFdmVudChlLCB0LCBvLCBuLCBpID0gZmFsc2UpIHtcbiAgICB2YXIgciA9IGNjLkV2ZW50TGlzdGVuZXIuY3JlYXRlKHtcbiAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLlRPVUNIX09ORV9CWV9PTkUsXG4gICAgICBvd25lcjogdGhpcy5ub2RlLFxuICAgICAgc3dhbGxvd1RvdWNoZXM6IGksXG4gICAgICBvblRvdWNoQmVnYW46IGUsXG4gICAgICBvblRvdWNoTW92ZWQ6IHQsXG4gICAgICBvblRvdWNoRW5kZWQ6IG8sXG4gICAgICBvblRvdWNoQ2FuY2VsbGVkOiBuXG4gICAgfSk7XG4gICAgY2MuaW50ZXJuYWwuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5fdG91Y2hMaXN0ZW5lcnMucHVzaChyKTtcbiAgfVxuICByZWdpc3Rlckxpc3RlbmVycygpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gdGhpcy5nZXRNZXNzYWdlTGlzdGVuZXJzKCksXG4gICAgICBvID0gZnVuY3Rpb24gbyhvKSB7XG4gICAgICAgIG1qLkV2ZW50TWFuYWdlci5vbihvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgbltpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICBlLl9pZ25vcmVFdmVudE1lc3NhZ2UgJiYgIWUuZW5hYmxlZEluSGllcmFyY2h5IHx8IHRbb10uYXBwbHkodCwgWy4uLm5dKTtcbiAgICAgICAgfSwgbik7XG4gICAgICB9LFxuICAgICAgbiA9IHRoaXM7XG4gICAgZm9yICh2YXIgaSBpbiB0KSBvKGkpO1xuICB9XG4gIHNldElnbm9yZUV2ZW50TWVzc2FnZU9uRGlzYWJsZShlKSB7XG4gICAgdGhpcy5faWdub3JlRXZlbnRNZXNzYWdlID0gZTtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBjcmVhdGVVSVN5bmMoZSwgdCwgbykge1xuICAgIHZhciBuO1xuICAgIHQgPSB0IHx8IGUucHJlZmFiVXJsO1xuICAgIG8gPSBvIHx8IGUuYnVuZGxlTmFtZTtcbiAgICBuID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCA/IHRoaXMuZGVsZWdhdGUgPyB0aGlzLmRlbGVnYXRlLmdldFJlcyh0LCBjYy5QcmVmYWIsIG8pIDogdGhpcy5nZXRSZXModCwgY2MuUHJlZmFiLCBvKSA6IHQ7XG4gICAgaWYgKGNjLmlzVmFsaWQobikpIHtcbiAgICAgIHZhciBpID0gY2MuaW5zdGFudGlhdGUobik7XG4gICAgICBpLmFkZENvbXBvbmVudChlKS5kZWxlZ2F0ZSA9IHRoaXMuZGVsZWdhdGU7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgT25CdXR0b25DbGljayhlLCB0LCBuLCBpID0gZmFsc2UsIHIgPSB0cnVlLCBhID0gdHJ1ZSkge1xuICAgIHZhciBsID0gdGhpcztcbiAgICBuID0gbiB8fCB0aGlzLm5vZGU7XG4gICAgdmFyIHMgPSBlIGluc3RhbmNlb2YgY2MuTm9kZSA/IGUgOiBjYy5maW5kKGUsIG4pO1xuICAgIGFzc2VydChzLCBcIuacquaJvuWIsOaMiemSrjogXCIgKyBlKTtcbiAgICB2YXIgYyA9IG51bGwsXG4gICAgICB1ID0ge1xuICAgICAgICBldmVudFR5cGU6IGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgICAgY2xpY2tBdWRpbzogRUF1ZGlvSUQuQnRuQ2xpY2ssXG4gICAgICAgIGlnbm9yZUNsaWNrQXVkaW86IGZhbHNlLFxuICAgICAgICB0aW1lTGltaXQ6IDAuMixcbiAgICAgICAgdmlicmF0ZUxldmVsOiB2b2lkIDBcbiAgICAgIH07XG4gICAgaWYgKHQgaW5zdGFuY2VvZiBGdW5jdGlvbikgYyA9IHQ7ZWxzZSBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCkgYyA9IHRoaXNbdF0uYmluZCh0aGlzKTtlbHNlIHtcbiAgICAgIHZhciBmID0gdDtcbiAgICAgIGlmIChmLmZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICBjID0gZi5mdW5jO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZi5mdW5jICYmIChjID0gdGhpc1tmLmZ1bmNdLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgICAgdS5ldmVudFR5cGUgPSBmLmV2ZW50VHlwZSB8fCB1LmV2ZW50VHlwZTtcbiAgICAgIHUuY2xpY2tBdWRpbyA9IGYuY2xpY2tBdWRpbyB8fCB1LmNsaWNrQXVkaW87XG4gICAgICB1Lmlnbm9yZUNsaWNrQXVkaW8gPSBmLmlnbm9yZUNsaWNrQXVkaW8gfHwgZmFsc2U7XG4gICAgICB1LnRpbWVMaW1pdCA9IHZvaWQgMCAhPT0gZi50aW1lTGltaXQgPyBmLnRpbWVMaW1pdCA6IDAuMjtcbiAgICAgIHUudmlicmF0ZUxldmVsID0gdm9pZCAwICE9PSBmLnZpYnJhdGVMZXZlbCA/IGYudmlicmF0ZUxldmVsIDogdm9pZCAwO1xuICAgIH1cbiAgICBpZiAoYykge1xuICAgICAgdmFyIGQgPSBzLmdldENvbXBvbmVudChjYy5CdXR0b24pLFxuICAgICAgICBoID0gZnVuY3Rpb24gaChlKSB7XG4gICAgICAgICAgaWYgKCFkIHx8IGQuaW50ZXJhY3RhYmxlKSB7XG4gICAgICAgICAgICBpZiAoZCAmJiBkLnRyYW5zaXRpb24gPT09IGNjLkJ1dHRvbi5UcmFuc2l0aW9uLlNDQUxFICYmIGUudHlwZSA9PT0gY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMICYmIGQuX2dldFRhcmdldCgpID09PSBzKSB7XG4gICAgICAgICAgICAgIHZhciB0ID0gZS50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgICBzLnNldFNjYWxlKGQuX29yaWdpbmFsU2NhbGUpO1xuICAgICAgICAgICAgICBpZiAoIXMuX2hpdFRlc3QodCwgcykpIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKHUuZXZlbnRUeXBlID09PSBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQgJiYgTWF0aC5hYnMoRGF0ZS5ub3coKSAtIG0pIDwgMTAwMCAqIHUudGltZUxpbWl0KSkge1xuICAgICAgICAgICAgICBtID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgciAmJiBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gZS5nZXRTdGFydExvY2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKGUuZ2V0TG9jYXRpb24oKS5zdWIobykubWFnKCkgPiA1MCkgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGMoZSk7XG4gICAgICAgICAgICAgIGwuYnV0dG9uQ2xpY2tTb3VuZCh1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICBzLnRhcmdldE9mZihzKTtcbiAgICAgIHMub24odS5ldmVudFR5cGUsIGgsIHMsIGkpO1xuICAgICAgZCAmJiAoZC56b29tU2NhbGUgPSBCYXNlVUkuem9vbVNjYWxlKTtcbiAgICAgIGQgJiYgZC50cmFuc2l0aW9uID09PSBjYy5CdXR0b24uVHJhbnNpdGlvbi5TQ0FMRSAmJiB1LmV2ZW50VHlwZSA9PT0gY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EICYmIGQuX2dldFRhcmdldCgpID09PSBzICYmIHMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCBoLCBzLCBpKTtcbiAgICAgIHZhciB5ID0gY2MubWFjcm8uRU5BQkxFX01VTFRJX1RPVUNIO1xuICAgICAgcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB5ID0gY2MubWFjcm8uRU5BQkxFX01VTFRJX1RPVUNIO1xuICAgICAgICBjYy5tYWNyby5FTkFCTEVfTVVMVElfVE9VQ0ggPSBmYWxzZTtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiX191aV9idG5fdG91Y2hfbG9ja19fXCIpO1xuICAgICAgfSwgcywgaSk7XG4gICAgICBzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5tYWNyby5FTkFCTEVfTVVMVElfVE9VQ0ggPSB5O1xuICAgICAgfSwgcywgaSk7XG4gICAgICBzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5tYWNyby5FTkFCTEVfTVVMVElfVE9VQ0ggPSB5O1xuICAgICAgfSwgcywgaSk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQmFzZVVJX2J0bkNsaWNrXCIpXG4gIGJ1dHRvbkNsaWNrU291bmQoZSA9IHt9KSB7XG4gICAgZS5pZ25vcmVDbGlja0F1ZGlvIHx8IG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KGUuY2xpY2tBdWRpbyk7XG4gIH1cbiAgbWFwQnV0dG9uSGFuZGxlcnNDbGljayhlLCB0KSB7XG4gICAgZm9yICh2YXIgbyBpbiBlKSB7XG4gICAgICB2YXIgbiA9IGVbb107XG4gICAgICB0aGlzLk9uQnV0dG9uQ2xpY2sobywgbiwgdCk7XG4gICAgfVxuICB9XG4gIGRpc3BhdGNoRXZlbnQoZSkge1xuICAgIGZvciAodmFyIHQgPSBbXSwgbyA9IDE7IG8gPCBhcmd1bWVudHMubGVuZ3RoOyBvKyspIHRbbyAtIDFdID0gYXJndW1lbnRzW29dO1xuICAgIHQudW5zaGlmdChlKTtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdC5hcHBseShtai5FdmVudE1hbmFnZXIsIHQpO1xuICB9XG4gIHN0YXJ0KCkge31cbiAgb25EZXN0cm95KCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuX2NhY2hlZEFzc2V0TWFwKS5sZW5ndGg7XG4gICAgdGhpcy5yZWxlYXNlQ2FjaGUoKTtcbiAgICBtai5FdmVudE1hbmFnZXIudGFyZ2V0T2ZmKHRoaXMpO1xuICAgIHRoaXMuX3RvdWNoTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNjLmludGVybmFsLmV2ZW50TWFuYWdlci5yZW1vdmVMaXN0ZW5lcihlKTtcbiAgICB9KTtcbiAgfVxuICBoYXNSZXMoZSwgdCA9IHRoaXMuY29uc3RydWN0b3IuYnVuZGxlTmFtZSkge1xuICAgIHZhciBvID0gcmVzTWFuYWdlci5nZXRCdW5kbGUodCk7XG4gICAgcmV0dXJuICEhbyAmJiAhIW8uZ2V0SW5mb1dpdGhQYXRoKGUpO1xuICB9XG4gIGdldFJlcyhlLCB0ID0gY2MuQXNzZXQsIG8gPSB0aGlzLmNvbnN0cnVjdG9yLmJ1bmRsZU5hbWUpIHtcbiAgICB2YXIgbiA9IHJlc01hbmFnZXIuZ2V0QnVuZGxlKG8pLFxuICAgICAgaSA9IG51bGwgPT0gbiA/IHZvaWQgMCA6IG4uZ2V0KGUsIHQpO1xuICAgIGlmICghaSkgcmV0dXJuIG51bGw7XG4gICAgdGhpcy5jYWNoZVJlcyhpKTtcbiAgICByZXR1cm4gY2MuaXNWYWxpZCh0aGlzLm5vZGUpID8gaSA6IG51bGw7XG4gIH1cbiAgYXN5bmMgbG9hZFJlcyhlLCB0ID0gY2MuQXNzZXQsIG8/KSB7XG4gICAgdmFyIG4sIGksIHIsIGEsIGMsIHUsIHA7XG4gICAgbiA9IGF3YWl0IHJlc01hbmFnZXIubG9hZFJlcyhlLCB0LCBvKTtcbiAgICBpID0gQXJyYXkuaXNBcnJheShlKSA/IG4gOiBbbl07XG4gICAgaWYgKCFjYy5pc1ZhbGlkKHRoaXMubm9kZSkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAociA9IF9fdmFsdWVzKGkpLCBhID0gci5uZXh0KCk7ICFhLmRvbmU7IGEgPSByLm5leHQoKSkge1xuICAgICAgICAgIChjID0gYS52YWx1ZSkuYWRkUmVmKCk7XG4gICAgICAgICAgTWVtb3J5TWFuYWdlci5nZXRJbnN0YW5jZSgpLmNhY2hlRGVsYXlSZWxlYXNlUmVzKGMpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHUgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYSAmJiAhYS5kb25lICYmIChwID0gci5yZXR1cm4pICYmIHAuY2FsbChyKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodSkgdGhyb3cgdS5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRoaXMuY2FjaGVSZXMoaSk7XG4gICAgcmV0dXJuIG47XG4gIH1cbiAgcmVsZWFzZVJlcyhlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IEFycmF5LmlzQXJyYXkoZSkgPyBlIDogW2VdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMobiksIHIgPSBpLm5leHQoKTsgIXIuZG9uZTsgciA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBhID0gci52YWx1ZTtcbiAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICB2YXIgbCA9IGEuX3V1aWQ7XG4gICAgICAgICAgaWYgKHRoaXMuX2NhY2hlZEFzc2V0TWFwW2xdKSB7XG4gICAgICAgICAgICBNZW1vcnlNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2FjaGVEZWxheVJlbGVhc2VSZXMoYSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FjaGVkQXNzZXRNYXBbbF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHIgJiYgIXIuZG9uZSAmJiAobyA9IGkucmV0dXJuKSAmJiBvLmNhbGwoaSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVsZWFzZUNhY2hlKCkge1xuICAgIGZvciAodmFyIGUgaW4gdGhpcy5fY2FjaGVkQXNzZXRNYXApIHtcbiAgICAgIHZhciB0ID0gdGhpcy5fY2FjaGVkQXNzZXRNYXBbZV1bMF07XG4gICAgICBNZW1vcnlNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2FjaGVEZWxheVJlbGVhc2VSZXModCk7XG4gICAgfVxuICAgIHRoaXMuX2NhY2hlZEFzc2V0TWFwID0ge307XG4gIH1cbiAgY2FjaGVSZXMoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSBBcnJheS5pc0FycmF5KGUpID8gZSA6IFtlXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaSA9IF9fdmFsdWVzKG4pLCByID0gaS5uZXh0KCk7ICFyLmRvbmU7IHIgPSBpLm5leHQoKSkge1xuICAgICAgICB2YXIgYSA9IHIudmFsdWUsXG4gICAgICAgICAgbCA9IGEuX3V1aWQsXG4gICAgICAgICAgYyA9IHRoaXMuX2NhY2hlZEFzc2V0TWFwW2xdO1xuICAgICAgICBpZiAoYykgY1sxXSArPSAxO2Vsc2Uge1xuICAgICAgICAgIGEuYWRkUmVmKCk7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSkge1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVkQXNzZXRNYXBbbF0gPSBbYSwgMV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE1lbW9yeU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jYWNoZURlbGF5UmVsZWFzZVJlcyhhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgciAmJiAhci5kb25lICYmIChvID0gaS5yZXR1cm4pICYmIG8uY2FsbChpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxud2luZG93WydtaiddLm5vZGUgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHQsIG8pIHtcbiAgICB0W2hdIHx8ICh0W2hdID0ge1xuICAgICAgbm9kZXM6IFtdLFxuICAgICAgY29tcG9uZW50czogW11cbiAgICB9KTtcbiAgICB2YXIgbiA9IHtcbiAgICAgIHBhdGg6IGUsXG4gICAgICBwcm9wZXJ0eUtleTogb1xuICAgIH07XG4gICAgdFtoXS5ub2Rlcy5wdXNoKG4pO1xuICB9O1xufTtcbndpbmRvd1snbWonXS5jb21wb25lbnQgPSBmdW5jdGlvbiAoZSwgdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKG8sIG4pIHtcbiAgICBvW2hdIHx8IChvW2hdID0ge1xuICAgICAgbm9kZXM6IFtdLFxuICAgICAgY29tcG9uZW50czogW11cbiAgICB9KTtcbiAgICB2YXIgaSA9IHtcbiAgICAgIHBhdGg6IGUsXG4gICAgICBwcm9wZXJ0eUtleTogbixcbiAgICAgIGNvbXBvbmVudFR5cGU6IHRcbiAgICB9O1xuICAgIG9baF0uY29tcG9uZW50cy5wdXNoKGkpO1xuICB9O1xufTsiXX0=