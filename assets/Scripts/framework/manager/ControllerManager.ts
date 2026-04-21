import Adapter, {AdjustTpye} from "../../component/Adapter";
import {viewMode} from "../controller/ViewController";
import {createSingleColorScreenNode} from "../utils/CommonUtils";
import MemoryManager from "./MemoryManager";
import {resManager} from "./ResManager";

export default class ControllerManager {
    _stageLayer = null;
    _alertLayer = null;
    _controllers = [];
    _alertControllers = [];
    _viewMap = {};
    segZIndex = 10000;
    static isDestroyed = false;
    static _manager = null;

    static getInstance() {
        this._manager || (this._manager = new ControllerManager().init());
        if (this.isDestroyed) {
            this.isDestroyed = false;
            this._manager.init();
        }
        return this._manager;
    }

    destroy() {
        ControllerManager.isDestroyed = true;
    }

    init() {
        var e = cc.Canvas.instance.node.getChildByName("rootNode");
        this._stageLayer = new cc.Node();
        this._stageLayer.name = "stageLayer";
        e.addChild(this._stageLayer);
        Adapter.adjustForType(this._stageLayer, AdjustTpye.ALL);
        this._alertLayer = new cc.Node();
        this._alertLayer.name = "alertLayer";
        e.addChild(this._alertLayer);
        Adapter.adjustForType(this._alertLayer, AdjustTpye.ALL);
        return this;
    }

    getAlertLayer() {
        return this._alertLayer;
    }

    async pushViewByController(e, t, o) {
        var n, r, s, c, p, f, d, h, y, m, v, g, _, T, C, b, E, S;
        n = this.getTopSceneController();
        if (r = this._viewMap[e]) {
            if (r === n || r === this.getTopViewController()) {
                this.viewDidShow(r, t);
                return r;
            }
            if (!t || false !== t.isReuse) return this.reuseExistingView(r, t, n, o);
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
            case viewMode.SCENE:
                h = this._stageLayer;
                y = this._controllers;
                d = n;
                break;
            case viewMode.PANEL:
                h = n.rootView;
                p.parentController = n;
                y = n.subControllers;
                d = n.subControllers[n.subControllers.length - 1];
                break;
            case viewMode.ALERT:
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
        } else {
            v.unshift(g);
        }
        T = await resManager.loadResByMultiBundleTypeMap(p.preloadResMap, _);
        p.cacheRes(T);
        if (p.isViewDestroyed()) {
            t.isReplace && (null == d ? void 0 : d.rootView) && this.closeView(d);
            p.rootView && this.closeView(p);
            return;
        }
        C = resManager.getRes(g, _);
        (b = cc.instantiate(C)).setPosition(0, 0);
        b.parent = p.rootView;
        Adapter.adjustForType(b, AdjustTpye.ALL);
        Adapter.adaptBgSize(b.getChildByName("bg"));
        (E = b.getComponent(p.viewClass)) || (E = b.addComponent(p.viewClass));
        if (false !== t.isShowAction && (p.viewMode === viewMode.PANEL || p.viewMode === viewMode.ALERT)) {
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
            return p;
        }
        d && this.viewDidHide(d);
        return p;
    }

    showBlackLayer(e, t, o, n) {
        if (t.viewMode !== viewMode.SCENE && null !== o) {
            var i = "number" == typeof (o = o || {}).blackOpacity ? o.blackOpacity : 150,
                r = t.rootView,
                a = r.getChildByName("defBg");
            if (!a) {
                (a = createSingleColorScreenNode()).zIndex = -1;
                a.parent = r;
                a.name = "BlurBg";
            }
            if (n) {
                a.opacity = 0;
                cc.tween(a).to(0.16, {
                    opacity: i
                }).start();
            } else a.opacity = i;
        }
    }

    async reuseExistingView(e, t, o, r) {
        var n,
            a,
            s,
            c,
            u = this;
        t = t || {};
        e.disable();
        e.refreshForReuse(t);
        n = null;
        a = [];
        if (e.viewMode === viewMode.PANEL) {
            n = o.subControllers[o.subControllers.length - 1];
            a = e.parentController.subControllers;
            if (e.parentController !== o) {
                s = a.indexOf(e);
                o.subControllers.push(a.splice(s, 1)[0]);
                e.parentController = o;
                e.rootView.parent = o.rootView;
                a = o.subControllers;
            }
        } else if (e.viewMode === viewMode.SCENE) {
            a = this._controllers;
            n = o;
        }
        (c = a.indexOf(e)) > -1 && a.push(a.splice(c, 1)[0]);
        this.showView(e, function () {
            e.viewMode === viewMode.SCENE && u.viewDidHide(n);
            t.isReplace && n && u.closeView(n);
        });
        null == r || r(e);
        return e;
    }

    popToTargetViewByName(e, t) {
        var o = this;
        t = t || {};
        var n = this._viewMap[e];
        if (n) {
            if (n === this.getTopViewController()) return n;
            var i = [];
            if (n.viewMode === viewMode.PANEL) {
                i = n.parentController.subControllers;
            } else {
                n.viewMode === viewMode.SCENE && (i = this._controllers);
            }
            var r = i.indexOf(n);
            if (-1 !== r) {
                var a = r + 1,
                    s = i.length - a,
                    c = i.splice(a, s);
                n.rootView.setSiblingIndex(-1);
                this.showView(n, function () {
                    c.forEach(function (e) {
                        o.closeView(e);
                    });
                });
                return n;
            }
        }
    }

    closeView(e) {
        var t = this;
        if (!e || e.rootView) {
            var o = this.getTopSceneController(),
                n = this.getTopViewController();
            e = e || this.getTopViewControllerIncludingAlerts();
            if (o || e.viewMode === viewMode.ALERT) {
                var i = [];
                if (e.viewMode === viewMode.PANEL) n = (i = e.parentController.subControllers)[i.length - 1]; else if (e.viewMode === viewMode.SCENE) {
                    i = this._controllers;
                    n = o;
                } else n = (i = this._alertControllers)[i.length - 1];
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
                    MemoryManager.getInstance().tryReleaseInLowMemory();
                };
                if (e.isEnable() && e === n) {
                    var s = null;
                    switch (e.viewMode) {
                        case viewMode.PANEL:
                            s = e.parentController.subControllers[e.parentController.subControllers.length - 1];
                            break;
                        case viewMode.ALERT:
                            s = this._alertControllers[this._alertControllers.length - 1];
                            break;
                        case viewMode.SCENE:
                            s = this.getTopSceneController();
                    }
                    this.showView(s, a);
                } else a();
            }
        }
    }

    closeViewByName(e) {
        var t = this._viewMap[e];
        t && this.closeView(t);
    }

    getControByName(e) {
        return this._viewMap[e];
    }

    getTopSceneController() {
        return this._controllers[this._controllers.length - 1];
    }

    getTopViewController() {
        var e = this.getTopSceneController();
        return (null == e ? void 0 : e.subControllers[e.subControllers.length - 1]) || e;
    }

    getTopViewControllerIncludingAlerts() {
        return this._alertControllers.length > 0 ? this._alertControllers[this._alertControllers.length - 1] : this.getTopViewController();
    }

    viewDidHide(e) {
        if (!e.isViewDestroyed() && e.isEnable()) {
            e.disable();
            e.viewDidHide();
            e.subControllers.forEach(function (e) {
                e.isEnable() && e.viewDidHide();
            });
        }
    }

    viewDidShow(e, t) {
        if (e.isEnable() && e.hasViewComponent() && e.realActive()) {
            e.viewDidShow(t);
            e.subControllers.forEach(function (e) {
                e.isEnable() && e.hasViewComponent() && e.realActive() && e.viewDidShow();
            });
        }
    }

    showView(e, t) {
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
                        if (s.done) return [3, 5];
                        c = s.value;
                        return [4, resManager.loadResByMultiBundleTypeMap(c.preloadResMap, c.bundleName)];
                    case 3:
                        p = i.sent();
                        c.cacheRes(p);
                        if (c.isViewDestroyed()) return [3, 4];
                        (f = cc.instantiate(resManager.getRes(c.viewClass.getUrl(), c.bundleName))).setPosition(0, 0);
                        d = mj.getClassName(c.viewClass);
                        f.parent = c.rootView;
                        Adapter.adjustForType(f, AdjustTpye.ALL);
                        Adapter.adaptBgSize(f.getChildByName("bg"));
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
                        } finally {
                            if (m) throw m.error;
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
    }

    popToRootScene() {
        for (var e = this._controllers.length - 1, t = 0; t < e; t++) this.popScene();
    }

    popView() {
        this.closeView();
    }

    isLastView() {
        return 1 === this._controllers.length && 0 === this._controllers[0].subControllers.length && 0 === this._alertControllers.length;
    }

    popScene() {
        this.closeView(this.getTopSceneController());
    }

    destroyUnusedView() {
    }

    closeAllPanelsAndAlerts() {
        for (; this._alertControllers.length > 0;) {
            var e = this._alertControllers[this._alertControllers.length - 1];
            this.closeView(e);
        }
        var t = this.getTopSceneController();
        if (t && t.subControllers) for (; t.subControllers.length > 0;) {
            var o = t.subControllers[t.subControllers.length - 1];
            this.closeView(o);
        }
    }
}
cc.js.setClassName("ControllerManager", ControllerManager);