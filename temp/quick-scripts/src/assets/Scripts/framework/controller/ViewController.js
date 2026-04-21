"use strict";
cc._RF.push(module, 'f24d0nn5n5MmYDlDC2X6DDC', 'ViewController');
// Scripts/framework/controller/ViewController.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.viewMode = void 0;
var ControllerManager_1 = require("../manager/ControllerManager");
var MemoryManager_1 = require("../manager/MemoryManager");
var ResManager_1 = require("../manager/ResManager");
var viewMode;
(function (viewMode) {
    viewMode[viewMode["SCENE"] = 0] = "SCENE";
    viewMode[viewMode["PANEL"] = 1] = "PANEL";
    viewMode[viewMode["ALERT"] = 2] = "ALERT";
})(viewMode = exports.viewMode || (exports.viewMode = {}));
var ViewController = /** @class */ (function () {
    function ViewController() {
        this.viewClass = null;
        this.rootView = null;
        this._viewComponent = null;
        this._isUIDestroyed = false;
        this._cachedAssetMap = {};
        this.parentController = null;
        this.subControllers = [];
        this.viewMode = viewMode.SCENE;
        this.preloadResMap = {};
        this.args = null;
        this._controllerManager = null;
    }
    ViewController.prototype.init = function (e) {
        var t = this;
        this.args = e || {};
        this._controllerManager = ControllerManager_1.default.getInstance();
        this.rootView = new cc.Node();
        this.rootView.name = mj.getClassName(this.viewClass) + "_rootView";
        this.rootView.setContentSize(4000, 4000);
        (null == e ? void 0 : e.noBlock) || this.rootView.addComponent(cc.BlockInputEvents);
        this.rootView.addComponent(cc.Component).onDestroy = function () {
            t.rootView && t.close();
        };
        this.registerListeners();
        this.initDependRes();
        mj.EventManager.on("removeUnusedRes", function () {
            t.removeUnusedRes();
        }, this);
    };
    ViewController.prototype.initDependRes = function () { };
    ViewController.prototype.viewDidLoad = function () { };
    ViewController.prototype.viewDidShow = function (e) {
        this.args = e || this.args;
    };
    ViewController.prototype.viewDidHide = function () { };
    ViewController.prototype.refreshForReuse = function (e) {
        this.args = e;
    };
    ViewController.prototype.registerListeners = function () {
        var e = this.getMessageListeners(), t = function t(t) {
            mj.EventManager.on(t, function () {
                for (var o = [], n = 0; n < arguments.length; n++)
                    o[n] = arguments[n];
                e[t].apply(e, __spreadArrays(o));
            }, o);
        }, o = this;
        for (var n in e)
            t(n);
    };
    ViewController.prototype.getMessageListeners = function () {
        return {};
    };
    ViewController.prototype.setViewComponent = function (e) {
        this._viewComponent = e;
        this._isUIDestroyed = false;
    };
    ViewController.prototype.hasViewComponent = function () {
        return !!this._viewComponent;
    };
    ViewController.prototype.realActive = function () {
        return !this.isViewDestroyed() && this.rootView && this.rootView.activeInHierarchy;
    };
    ViewController.prototype.viewDoAction = function (e) {
        for (var t = [], o = 1; o < arguments.length; o++)
            t[o - 1] = arguments[o];
        if (this.hasViewComponent()) {
            var n = this._viewComponent[e];
            if ("function" == typeof n) {
                n.apply(this._viewComponent, t);
            }
            else {
                assert(false, "视图组件" + mj.getClassName(this.viewClass) + "没有方法" + String(e));
            }
        }
    };
    ViewController.prototype.update = function () { };
    ViewController.prototype.lateUpdate = function () { };
    ViewController.prototype.onStart = function () { };
    ViewController.prototype.onUIDestroy = function () { };
    ViewController.prototype.onUIEnable = function () { };
    ViewController.prototype.onUIDisable = function () { };
    ViewController.prototype.dispatchEvent = function (e) {
        for (var t = [], o = 1; o < arguments.length; o++)
            t[o - 1] = arguments[o];
        t.unshift(e);
        mj.EventManager.emit.apply(mj.EventManager, t);
    };
    ViewController.prototype.addPreloadRes = function (e, t) {
        var o, n = Array.isArray(t) ? t : [t];
        if (this.preloadResMap[e]) {
            if ("string" == typeof this.preloadResMap[e]) {
                var i = this.preloadResMap[e];
                this.preloadResMap[e] = __spreadArrays([i], n);
            }
            else
                (o = this.preloadResMap[e]).push.apply(o, __spreadArrays(n));
        }
        else
            this.preloadResMap[e] = __spreadArrays(n);
    };
    ViewController.prototype.close = function () {
        this._controllerManager.closeView(this);
    };
    ViewController.prototype.closeViewByName = function (e) {
        this._controllerManager.closeViewByName(e);
    };
    ViewController.prototype.pushController = function () {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return this._controllerManager.pushViewByController.apply(this._controllerManager, e);
    };
    ViewController.prototype.popToTargetView = function () {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return this._controllerManager.popToTargetViewByName.apply(this._controllerManager, e);
    };
    ViewController.prototype.closeAllPanel = function () {
        this.subControllers.forEach(function (e) {
            e.close();
        });
    };
    ViewController.prototype.cacheRes = function (e) {
        var t, o, n = Array.isArray(e) ? e : [e];
        try {
            for (var i = __values(n), r = i.next(); !r.done; r = i.next()) {
                var a = r.value, l = a._uuid, c = this._cachedAssetMap[l];
                if (c)
                    c[1] += 1;
                else {
                    a.addRef();
                    if (this.isViewDestroyed()) {
                        MemoryManager_1.default.getInstance().cacheDelayReleaseRes(a);
                    }
                    else {
                        this._cachedAssetMap[l] = [a, 1];
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
    ViewController.prototype.releaseCache = function () {
        for (var e in this._cachedAssetMap) {
            var t = this._cachedAssetMap[e][0];
            MemoryManager_1.default.getInstance().cacheDelayReleaseRes(t);
        }
        this._cachedAssetMap = {};
    };
    ViewController.prototype.hasRes = function (e, t) {
        if (t === void 0) { t = this.bundleName; }
        var o = ResManager_1.resManager.getBundle(t);
        return !!o && !!o.getInfoWithPath(e);
    };
    ViewController.prototype.getRes = function (e, t, o) {
        if (t === void 0) { t = cc.Asset; }
        if (o === void 0) { o = this.bundleName; }
        var n = ResManager_1.resManager.getBundle(o), i = null == n ? void 0 : n.get(e, t);
        if (!i)
            return null;
        this.cacheRes(i);
        return i;
    };
    ViewController.prototype.loadRes = function (e, t, o) {
        if (t === void 0) { t = cc.Asset; }
        if (o === void 0) { o = this.bundleName; }
        return __awaiter(this, void 0, void 0, function () {
            var n;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ResManager_1.resManager.loadRes(e, t, o)];
                    case 1:
                        n = _a.sent();
                        this.cacheRes(n);
                        if (this.isViewDestroyed()) {
                            return [2 /*return*/, null];
                        }
                        else {
                            return [2 /*return*/, n];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewController.prototype.releaseRes = function (e, t) {
        if (t === void 0) { t = false; }
        var o, n;
        var i = Array.isArray(e) ? e : [e];
        try {
            for (var r = __values(i), a = r.next(); !a.done; a = r.next()) {
                var l = a.value;
                if (l) {
                    var c = l._uuid, u = this._cachedAssetMap[c];
                    if (u) {
                        u[1]--;
                        if (t && u[1] <= 0) {
                            l.decRef();
                            delete this._cachedAssetMap[c];
                        }
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
                a && !a.done && (n = r.return) && n.call(r);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
    };
    ViewController.prototype.removeUnusedRes = function () {
        for (var e in this._cachedAssetMap) {
            var t = this._cachedAssetMap[e], o = t[1], n = t[0];
            if (o <= 0) {
                delete this._cachedAssetMap[e];
                MemoryManager_1.default.getInstance().cacheDelayReleaseRes(n);
            }
        }
    };
    ViewController.prototype.isEnable = function () {
        return !this.isViewDestroyed() && this.rootView.active;
    };
    ViewController.prototype.enable = function () {
        this.isViewDestroyed() || (this.rootView.active = true);
    };
    ViewController.prototype.disable = function () {
        this.isViewDestroyed() || (this.rootView.active = false);
    };
    ViewController.prototype.destructor = function () {
        mj.EventManager.targetOff(this);
        this.UIWillDestroy();
        if (this.rootView) {
            var e = this.rootView;
            this.rootView = null;
            if (e && e.isValid) {
                e.parent = null;
                e.destroy();
            }
        }
    };
    ViewController.prototype.isViewDestroyed = function () {
        return !this.rootView || !cc.isValid(this.rootView);
    };
    ViewController.prototype.UIWillDestroy = function () {
        if (this._viewComponent) {
            var e = this._viewComponent.node;
            this._viewComponent = null;
            this._isUIDestroyed = true;
            if (e && e.isValid) {
                e.parent = null;
                e.destroy();
            }
            this.releaseCache();
        }
    };
    ViewController.prototype.isUIDestroyed = function () {
        return this._isUIDestroyed;
    };
    ViewController = __decorate([
        mj.class("ViewController")
    ], ViewController);
    return ViewController;
}());
exports.default = ViewController;

cc._RF.pop();