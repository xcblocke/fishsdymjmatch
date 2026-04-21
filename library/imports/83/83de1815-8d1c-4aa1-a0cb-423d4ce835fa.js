"use strict";
cc._RF.push(module, '83de1gVjRxKoaDLQj1M6DX6', 'ControllerManager');
// Scripts/framework/manager/ControllerManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Adapter_1 = require("../../component/Adapter");
var ViewController_1 = require("../controller/ViewController");
var CommonUtils_1 = require("../utils/CommonUtils");
var MemoryManager_1 = require("./MemoryManager");
var ResManager_1 = require("./ResManager");
var ControllerManager = /** @class */ (function () {
    function ControllerManager() {
        this._stageLayer = null;
        this._alertLayer = null;
        this._controllers = [];
        this._alertControllers = [];
        this._viewMap = {};
        this.segZIndex = 10000;
    }
    ControllerManager.getInstance = function () {
        this._manager || (this._manager = new ControllerManager().init());
        if (this.isDestroyed) {
            this.isDestroyed = false;
            this._manager.init();
        }
        return this._manager;
    };
    ControllerManager.prototype.destroy = function () {
        ControllerManager.isDestroyed = true;
    };
    ControllerManager.prototype.init = function () {
        var e = cc.Canvas.instance.node.getChildByName("rootNode");
        this._stageLayer = new cc.Node();
        this._stageLayer.name = "stageLayer";
        e.addChild(this._stageLayer);
        Adapter_1.default.adjustForType(this._stageLayer, Adapter_1.AdjustTpye.ALL);
        this._alertLayer = new cc.Node();
        this._alertLayer.name = "alertLayer";
        e.addChild(this._alertLayer);
        Adapter_1.default.adjustForType(this._alertLayer, Adapter_1.AdjustTpye.ALL);
        return this;
    };
    ControllerManager.prototype.getAlertLayer = function () {
        return this._alertLayer;
    };
    ControllerManager.prototype.pushViewByController = function (e, t, o) {
        return __awaiter(this, void 0, void 0, function () {
            var n, r, s, c, p, f, d, h, y, m, v, g, _, T, C, b, E, S;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        n = this.getTopSceneController();
                        if (r = this._viewMap[e]) {
                            if (r === n || r === this.getTopViewController()) {
                                this.viewDidShow(r, t);
                                return [2 /*return*/, r];
                            }
                            if (!t || false !== t.isReuse)
                                return [2 /*return*/, this.reuseExistingView(r, t, n, o)];
                            this.closeView(r);
                        }
                        t = t || {};
                        s = mj.getClassByName(e);
                        c = mj.getClassName(s);
                        assert(s && c, "未找到控制器类: " + e + "，控制器类需要用@mj.class装饰，且不可省略类名");
                        (p = new s()).init(t);
                        f = mj.getClassName(p.viewClass);
                        assert(f, "viewClass需要用@mj.class装饰");
                        d = null;
                        h = null;
                        y = [];
                        switch (p.viewMode) {
                            case ViewController_1.viewMode.SCENE:
                                h = this._stageLayer;
                                y = this._controllers;
                                d = n;
                                break;
                            case ViewController_1.viewMode.PANEL:
                                h = n.rootView;
                                p.parentController = n;
                                y = n.subControllers;
                                d = n.subControllers[n.subControllers.length - 1];
                                break;
                            case ViewController_1.viewMode.ALERT:
                                h = this._alertLayer;
                                if (!t.isGlobal) {
                                    y = this._alertControllers;
                                    d = this._alertControllers[this._alertControllers.length - 1];
                                }
                                break;
                            default:
                                assert(false, "不支持的视图模式: " + e + "=>" + p.viewMode);
                        }
                        null == y || y.push(p);
                        p.rootView.parent = h;
                        p.rootView.zIndex = this.segZIndex;
                        p.rootView.setSiblingIndex(-1);
                        if (t.isReplace && d) {
                            (m = y.indexOf(d)) > -1 && y.splice(m, 1);
                            delete this._viewMap[mj.getClassName(d.viewClass)];
                            delete this._viewMap[mj.getClassName(d.constructor)];
                        }
                        this._viewMap[mj.getClassName(p.viewClass)] = p;
                        this._viewMap[mj.getClassName(s)] = p;
                        this.showBlackLayer(y, p, t.bgStyle, t.isShowAction);
                        p.preloadResMap.Asset = p.preloadResMap.Asset || [];
                        v = p.preloadResMap.Asset;
                        g = p.viewClass.getUrl();
                        _ = p.bundleName;
                        if ("string" == typeof v) {
                            p.preloadResMap.Asset = [g, v];
                        }
                        else {
                            v.unshift(g);
                        }
                        return [4 /*yield*/, ResManager_1.resManager.loadResByMultiBundleTypeMap(p.preloadResMap, _)];
                    case 1:
                        T = _a.sent();
                        p.cacheRes(T);
                        if (p.isViewDestroyed()) {
                            t.isReplace && (null == d ? void 0 : d.rootView) && this.closeView(d);
                            p.rootView && this.closeView(p);
                            return [2 /*return*/];
                        }
                        C = ResManager_1.resManager.getRes(g, _);
                        (b = cc.instantiate(C)).setPosition(0, 0);
                        b.parent = p.rootView;
                        Adapter_1.default.adjustForType(b, Adapter_1.AdjustTpye.ALL);
                        Adapter_1.default.adaptBgSize(b.getChildByName("bg"));
                        (E = b.getComponent(p.viewClass)) || (E = b.addComponent(p.viewClass));
                        if (false !== t.isShowAction && (p.viewMode === ViewController_1.viewMode.PANEL || p.viewMode === ViewController_1.viewMode.ALERT)) {
                            (S = b.getComponent(cc.Widget)).enabled = false;
                            b.scale = 0.8;
                            cc.tween(b).to(0.1, {
                                scale: 1
                            }).call(function () {
                                cc.isValid(b) && (S.enabled = true);
                            }).start();
                        }
                        E.delegate = p;
                        p.setViewComponent(E);
                        p.viewDidLoad();
                        this.viewDidShow(p);
                        null == o || o(p);
                        if (t.isReplace && d) {
                            this.closeView(d);
                            return [2 /*return*/, p];
                        }
                        d && this.viewDidHide(d);
                        return [2 /*return*/, p];
                }
            });
        });
    };
    ControllerManager.prototype.showBlackLayer = function (e, t, o, n) {
        if (t.viewMode !== ViewController_1.viewMode.SCENE && null !== o) {
            var i = "number" == typeof (o = o || {}).blackOpacity ? o.blackOpacity : 150, r = t.rootView, a = r.getChildByName("defBg");
            if (!a) {
                (a = CommonUtils_1.createSingleColorScreenNode()).zIndex = -1;
                a.parent = r;
                a.name = "BlurBg";
            }
            if (n) {
                a.opacity = 0;
                cc.tween(a).to(0.16, {
                    opacity: i
                }).start();
            }
            else
                a.opacity = i;
        }
    };
    ControllerManager.prototype.reuseExistingView = function (e, t, o, r) {
        return __awaiter(this, void 0, void 0, function () {
            var n, a, s, c, u;
            return __generator(this, function (_a) {
                u = this;
                t = t || {};
                e.disable();
                e.refreshForReuse(t);
                n = null;
                a = [];
                if (e.viewMode === ViewController_1.viewMode.PANEL) {
                    n = o.subControllers[o.subControllers.length - 1];
                    a = e.parentController.subControllers;
                    if (e.parentController !== o) {
                        s = a.indexOf(e);
                        o.subControllers.push(a.splice(s, 1)[0]);
                        e.parentController = o;
                        e.rootView.parent = o.rootView;
                        a = o.subControllers;
                    }
                }
                else if (e.viewMode === ViewController_1.viewMode.SCENE) {
                    a = this._controllers;
                    n = o;
                }
                (c = a.indexOf(e)) > -1 && a.push(a.splice(c, 1)[0]);
                this.showView(e, function () {
                    e.viewMode === ViewController_1.viewMode.SCENE && u.viewDidHide(n);
                    t.isReplace && n && u.closeView(n);
                });
                null == r || r(e);
                return [2 /*return*/, e];
            });
        });
    };
    ControllerManager.prototype.popToTargetViewByName = function (e, t) {
        var o = this;
        t = t || {};
        var n = this._viewMap[e];
        if (n) {
            if (n === this.getTopViewController())
                return n;
            var i = [];
            if (n.viewMode === ViewController_1.viewMode.PANEL) {
                i = n.parentController.subControllers;
            }
            else {
                n.viewMode === ViewController_1.viewMode.SCENE && (i = this._controllers);
            }
            var r = i.indexOf(n);
            if (-1 !== r) {
                var a = r + 1, s = i.length - a, c = i.splice(a, s);
                n.rootView.setSiblingIndex(-1);
                this.showView(n, function () {
                    c.forEach(function (e) {
                        o.closeView(e);
                    });
                });
                return n;
            }
        }
    };
    ControllerManager.prototype.closeView = function (e) {
        var t = this;
        if (!e || e.rootView) {
            var o = this.getTopSceneController(), n = this.getTopViewController();
            e = e || this.getTopViewControllerIncludingAlerts();
            if (o || e.viewMode === ViewController_1.viewMode.ALERT) {
                var i = [];
                if (e.viewMode === ViewController_1.viewMode.PANEL)
                    n = (i = e.parentController.subControllers)[i.length - 1];
                else if (e.viewMode === ViewController_1.viewMode.SCENE) {
                    i = this._controllers;
                    n = o;
                }
                else
                    n = (i = this._alertControllers)[i.length - 1];
                var r = i.indexOf(e);
                r > -1 && i.splice(r, 1);
                var a = function a() {
                    delete t._viewMap[mj.getClassName(e.viewClass)];
                    delete t._viewMap[mj.getClassName(e.constructor)];
                    e.subControllers.forEach(function (e) {
                        delete t._viewMap[mj.getClassName(e.viewClass)];
                        delete t._viewMap[mj.getClassName(e.constructor)];
                        e.destructor();
                    });
                    e.destructor();
                    MemoryManager_1.default.getInstance().tryReleaseInLowMemory();
                };
                if (e.isEnable() && e === n) {
                    var s = null;
                    switch (e.viewMode) {
                        case ViewController_1.viewMode.PANEL:
                            s = e.parentController.subControllers[e.parentController.subControllers.length - 1];
                            break;
                        case ViewController_1.viewMode.ALERT:
                            s = this._alertControllers[this._alertControllers.length - 1];
                            break;
                        case ViewController_1.viewMode.SCENE:
                            s = this.getTopSceneController();
                    }
                    this.showView(s, a);
                }
                else
                    a();
            }
        }
    };
    ControllerManager.prototype.closeViewByName = function (e) {
        var t = this._viewMap[e];
        t && this.closeView(t);
    };
    ControllerManager.prototype.getControByName = function (e) {
        return this._viewMap[e];
    };
    ControllerManager.prototype.getTopSceneController = function () {
        return this._controllers[this._controllers.length - 1];
    };
    ControllerManager.prototype.getTopViewController = function () {
        var e = this.getTopSceneController();
        return (null == e ? void 0 : e.subControllers[e.subControllers.length - 1]) || e;
    };
    ControllerManager.prototype.getTopViewControllerIncludingAlerts = function () {
        return this._alertControllers.length > 0 ? this._alertControllers[this._alertControllers.length - 1] : this.getTopViewController();
    };
    ControllerManager.prototype.viewDidHide = function (e) {
        if (!e.isViewDestroyed() && e.isEnable()) {
            e.disable();
            e.viewDidHide();
            e.subControllers.forEach(function (e) {
                e.isEnable() && e.viewDidHide();
            });
        }
    };
    ControllerManager.prototype.viewDidShow = function (e, t) {
        if (e.isEnable() && e.hasViewComponent() && e.realActive()) {
            e.viewDidShow(t);
            e.subControllers.forEach(function (e) {
                e.isEnable() && e.hasViewComponent() && e.realActive() && e.viewDidShow();
            });
        }
    };
    ControllerManager.prototype.showView = function (e, t) {
        return __awaiter(this, void 0, Promise, function () {
            var o, n, l, s, c, p, f, d, h, y, m, v;
            return __generator(this, function (i) {
                switch (i.label) {
                    case 0:
                        if (!e || e.isViewDestroyed()) {
                            null == t || t();
                            return [2];
                        }
                        o = e.isEnable();
                        e.enable();
                        e.rootView.setSiblingIndex(-1);
                        n = [];
                        e.isUIDestroyed() && n.push(e);
                        e.subControllers.forEach(function (e) {
                            e.isUIDestroyed() && e.isEnable() && n.push(e);
                        });
                        i.label = 1;
                    case 1:
                        i.trys.push([1, 6, 7, 8]);
                        l = __values(n), s = l.next();
                        i.label = 2;
                    case 2:
                        if (s.done)
                            return [3, 5];
                        c = s.value;
                        return [4, ResManager_1.resManager.loadResByMultiBundleTypeMap(c.preloadResMap, c.bundleName)];
                    case 3:
                        p = i.sent();
                        c.cacheRes(p);
                        if (c.isViewDestroyed())
                            return [3, 4];
                        (f = cc.instantiate(ResManager_1.resManager.getRes(c.viewClass.getUrl(), c.bundleName))).setPosition(0, 0);
                        d = mj.getClassName(c.viewClass);
                        f.parent = c.rootView;
                        Adapter_1.default.adjustForType(f, Adapter_1.AdjustTpye.ALL);
                        Adapter_1.default.adaptBgSize(f.getChildByName("bg"));
                        (h = f.getComponent(c.viewClass)) || (h = f.addComponent(d));
                        h.delegate = c;
                        c.setViewComponent(h);
                        c.viewDidLoad();
                        i.label = 4;
                    case 4:
                        s = l.next();
                        return [3, 2];
                    case 5:
                        return [3, 8];
                    case 6:
                        y = i.sent();
                        m = {
                            error: y
                        };
                        return [3, 8];
                    case 7:
                        try {
                            s && !s.done && (v = l.return) && v.call(l);
                        }
                        finally {
                            if (m)
                                throw m.error;
                        }
                        return [7];
                    case 8:
                        if (e.isViewDestroyed()) {
                            null == t || t();
                            return [2];
                        }
                        o || this.viewDidShow(e);
                        null == t || t();
                        return [2];
                }
            });
        });
    };
    ControllerManager.prototype.popToRootScene = function () {
        for (var e = this._controllers.length - 1, t = 0; t < e; t++)
            this.popScene();
    };
    ControllerManager.prototype.popView = function () {
        this.closeView();
    };
    ControllerManager.prototype.isLastView = function () {
        return 1 === this._controllers.length && 0 === this._controllers[0].subControllers.length && 0 === this._alertControllers.length;
    };
    ControllerManager.prototype.popScene = function () {
        this.closeView(this.getTopSceneController());
    };
    ControllerManager.prototype.destroyUnusedView = function () {
    };
    ControllerManager.prototype.closeAllPanelsAndAlerts = function () {
        for (; this._alertControllers.length > 0;) {
            var e = this._alertControllers[this._alertControllers.length - 1];
            this.closeView(e);
        }
        var t = this.getTopSceneController();
        if (t && t.subControllers)
            for (; t.subControllers.length > 0;) {
                var o = t.subControllers[t.subControllers.length - 1];
                this.closeView(o);
            }
    };
    ControllerManager.isDestroyed = false;
    ControllerManager._manager = null;
    return ControllerManager;
}());
exports.default = ControllerManager;
cc.js.setClassName("ControllerManager", ControllerManager);

cc._RF.pop();