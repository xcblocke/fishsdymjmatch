
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/framework/manager/ControllerManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBNEQ7QUFDNUQsK0RBQXNEO0FBQ3RELG9EQUFpRTtBQUNqRSxpREFBNEM7QUFDNUMsMkNBQXdDO0FBRXhDO0lBQUE7UUFDSSxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFnWnRCLENBQUM7SUE1WVUsNkJBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNJLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDekMsQ0FBQztJQUVELGdDQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO1FB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QUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWM7WUFBRSxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRztnQkFDNUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyQjtJQUNMLENBQUM7SUE5WU0sNkJBQVcsR0FBRyxLQUFLLENBQUM7SUFDcEIsMEJBQVEsR0FBRyxJQUFJLENBQUM7SUE4WTNCLHdCQUFDO0NBdFpELEFBc1pDLElBQUE7a0JBdFpvQixpQkFBaUI7QUF1WnRDLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRhcHRlciwge0FkanVzdFRweWV9IGZyb20gXCIuLi8uLi9jb21wb25lbnQvQWRhcHRlclwiO1xuaW1wb3J0IHt2aWV3TW9kZX0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7Y3JlYXRlU2luZ2xlQ29sb3JTY3JlZW5Ob2RlfSBmcm9tIFwiLi4vdXRpbHMvQ29tbW9uVXRpbHNcIjtcbmltcG9ydCBNZW1vcnlNYW5hZ2VyIGZyb20gXCIuL01lbW9yeU1hbmFnZXJcIjtcbmltcG9ydCB7cmVzTWFuYWdlcn0gZnJvbSBcIi4vUmVzTWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyTWFuYWdlciB7XG4gICAgX3N0YWdlTGF5ZXIgPSBudWxsO1xuICAgIF9hbGVydExheWVyID0gbnVsbDtcbiAgICBfY29udHJvbGxlcnMgPSBbXTtcbiAgICBfYWxlcnRDb250cm9sbGVycyA9IFtdO1xuICAgIF92aWV3TWFwID0ge307XG4gICAgc2VnWkluZGV4ID0gMTAwMDA7XG4gICAgc3RhdGljIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgc3RhdGljIF9tYW5hZ2VyID0gbnVsbDtcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgdGhpcy5fbWFuYWdlciB8fCAodGhpcy5fbWFuYWdlciA9IG5ldyBDb250cm9sbGVyTWFuYWdlcigpLmluaXQoKSk7XG4gICAgICAgIGlmICh0aGlzLmlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VyLmluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbWFuYWdlcjtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBDb250cm9sbGVyTWFuYWdlci5pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdmFyIGUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvb3ROb2RlXCIpO1xuICAgICAgICB0aGlzLl9zdGFnZUxheWVyID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgdGhpcy5fc3RhZ2VMYXllci5uYW1lID0gXCJzdGFnZUxheWVyXCI7XG4gICAgICAgIGUuYWRkQ2hpbGQodGhpcy5fc3RhZ2VMYXllcik7XG4gICAgICAgIEFkYXB0ZXIuYWRqdXN0Rm9yVHlwZSh0aGlzLl9zdGFnZUxheWVyLCBBZGp1c3RUcHllLkFMTCk7XG4gICAgICAgIHRoaXMuX2FsZXJ0TGF5ZXIgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICB0aGlzLl9hbGVydExheWVyLm5hbWUgPSBcImFsZXJ0TGF5ZXJcIjtcbiAgICAgICAgZS5hZGRDaGlsZCh0aGlzLl9hbGVydExheWVyKTtcbiAgICAgICAgQWRhcHRlci5hZGp1c3RGb3JUeXBlKHRoaXMuX2FsZXJ0TGF5ZXIsIEFkanVzdFRweWUuQUxMKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0QWxlcnRMYXllcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FsZXJ0TGF5ZXI7XG4gICAgfVxuXG4gICAgYXN5bmMgcHVzaFZpZXdCeUNvbnRyb2xsZXIoZSwgdCwgbykge1xuICAgICAgICB2YXIgbiwgciwgcywgYywgcCwgZiwgZCwgaCwgeSwgbSwgdiwgZywgXywgVCwgQywgYiwgRSwgUztcbiAgICAgICAgbiA9IHRoaXMuZ2V0VG9wU2NlbmVDb250cm9sbGVyKCk7XG4gICAgICAgIGlmIChyID0gdGhpcy5fdmlld01hcFtlXSkge1xuICAgICAgICAgICAgaWYgKHIgPT09IG4gfHwgciA9PT0gdGhpcy5nZXRUb3BWaWV3Q29udHJvbGxlcigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3RGlkU2hvdyhyLCB0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdCB8fCBmYWxzZSAhPT0gdC5pc1JldXNlKSByZXR1cm4gdGhpcy5yZXVzZUV4aXN0aW5nVmlldyhyLCB0LCBuLCBvKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3KHIpO1xuICAgICAgICB9XG4gICAgICAgIHQgPSB0IHx8IHt9O1xuICAgICAgICBzID0gbWouZ2V0Q2xhc3NCeU5hbWUoZSk7XG4gICAgICAgIGMgPSBtai5nZXRDbGFzc05hbWUocyk7XG4gICAgICAgIGFzc2VydChzICYmIGMsIFwi5pyq5om+5Yiw5o6n5Yi25Zmo57G7OiBcIiArIGUgKyBcIu+8jOaOp+WItuWZqOexu+mcgOimgeeUqEBtai5jbGFzc+ijhemlsO+8jOS4lOS4jeWPr+ecgeeVpeexu+WQjVwiKTtcbiAgICAgICAgKHAgPSBuZXcgcygpKS5pbml0KHQpO1xuICAgICAgICBmID0gbWouZ2V0Q2xhc3NOYW1lKHAudmlld0NsYXNzKTtcbiAgICAgICAgYXNzZXJ0KGYsIFwidmlld0NsYXNz6ZyA6KaB55SoQG1qLmNsYXNz6KOF6aWwXCIpO1xuICAgICAgICBkID0gbnVsbDtcbiAgICAgICAgaCA9IG51bGw7XG4gICAgICAgIHkgPSBbXTtcbiAgICAgICAgc3dpdGNoIChwLnZpZXdNb2RlKSB7XG4gICAgICAgICAgICBjYXNlIHZpZXdNb2RlLlNDRU5FOlxuICAgICAgICAgICAgICAgIGggPSB0aGlzLl9zdGFnZUxheWVyO1xuICAgICAgICAgICAgICAgIHkgPSB0aGlzLl9jb250cm9sbGVycztcbiAgICAgICAgICAgICAgICBkID0gbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugdmlld01vZGUuUEFORUw6XG4gICAgICAgICAgICAgICAgaCA9IG4ucm9vdFZpZXc7XG4gICAgICAgICAgICAgICAgcC5wYXJlbnRDb250cm9sbGVyID0gbjtcbiAgICAgICAgICAgICAgICB5ID0gbi5zdWJDb250cm9sbGVycztcbiAgICAgICAgICAgICAgICBkID0gbi5zdWJDb250cm9sbGVyc1tuLnN1YkNvbnRyb2xsZXJzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB2aWV3TW9kZS5BTEVSVDpcbiAgICAgICAgICAgICAgICBoID0gdGhpcy5fYWxlcnRMYXllcjtcbiAgICAgICAgICAgICAgICBpZiAoIXQuaXNHbG9iYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHRoaXMuX2FsZXJ0Q29udHJvbGxlcnM7XG4gICAgICAgICAgICAgICAgICAgIGQgPSB0aGlzLl9hbGVydENvbnRyb2xsZXJzW3RoaXMuX2FsZXJ0Q29udHJvbGxlcnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBhc3NlcnQoZmFsc2UsIFwi5LiN5pSv5oyB55qE6KeG5Zu+5qih5byPOiBcIiArIGUgKyBcIj0+XCIgKyBwLnZpZXdNb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBudWxsID09IHkgfHwgeS5wdXNoKHApO1xuICAgICAgICBwLnJvb3RWaWV3LnBhcmVudCA9IGg7XG4gICAgICAgIHAucm9vdFZpZXcuekluZGV4ID0gdGhpcy5zZWdaSW5kZXg7XG4gICAgICAgIHAucm9vdFZpZXcuc2V0U2libGluZ0luZGV4KC0xKTtcbiAgICAgICAgaWYgKHQuaXNSZXBsYWNlICYmIGQpIHtcbiAgICAgICAgICAgIChtID0geS5pbmRleE9mKGQpKSA+IC0xICYmIHkuc3BsaWNlKG0sIDEpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3ZpZXdNYXBbbWouZ2V0Q2xhc3NOYW1lKGQudmlld0NsYXNzKV07XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fdmlld01hcFttai5nZXRDbGFzc05hbWUoZC5jb25zdHJ1Y3RvcildO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZpZXdNYXBbbWouZ2V0Q2xhc3NOYW1lKHAudmlld0NsYXNzKV0gPSBwO1xuICAgICAgICB0aGlzLl92aWV3TWFwW21qLmdldENsYXNzTmFtZShzKV0gPSBwO1xuICAgICAgICB0aGlzLnNob3dCbGFja0xheWVyKHksIHAsIHQuYmdTdHlsZSwgdC5pc1Nob3dBY3Rpb24pO1xuICAgICAgICBwLnByZWxvYWRSZXNNYXAuQXNzZXQgPSBwLnByZWxvYWRSZXNNYXAuQXNzZXQgfHwgW107XG4gICAgICAgIHYgPSBwLnByZWxvYWRSZXNNYXAuQXNzZXQ7XG4gICAgICAgIGcgPSBwLnZpZXdDbGFzcy5nZXRVcmwoKTtcbiAgICAgICAgXyA9IHAuYnVuZGxlTmFtZTtcbiAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHYpIHtcbiAgICAgICAgICAgIHAucHJlbG9hZFJlc01hcC5Bc3NldCA9IFtnLCB2XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHYudW5zaGlmdChnKTtcbiAgICAgICAgfVxuICAgICAgICBUID0gYXdhaXQgcmVzTWFuYWdlci5sb2FkUmVzQnlNdWx0aUJ1bmRsZVR5cGVNYXAocC5wcmVsb2FkUmVzTWFwLCBfKTtcbiAgICAgICAgcC5jYWNoZVJlcyhUKTtcbiAgICAgICAgaWYgKHAuaXNWaWV3RGVzdHJveWVkKCkpIHtcbiAgICAgICAgICAgIHQuaXNSZXBsYWNlICYmIChudWxsID09IGQgPyB2b2lkIDAgOiBkLnJvb3RWaWV3KSAmJiB0aGlzLmNsb3NlVmlldyhkKTtcbiAgICAgICAgICAgIHAucm9vdFZpZXcgJiYgdGhpcy5jbG9zZVZpZXcocCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQyA9IHJlc01hbmFnZXIuZ2V0UmVzKGcsIF8pO1xuICAgICAgICAoYiA9IGNjLmluc3RhbnRpYXRlKEMpKS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgYi5wYXJlbnQgPSBwLnJvb3RWaWV3O1xuICAgICAgICBBZGFwdGVyLmFkanVzdEZvclR5cGUoYiwgQWRqdXN0VHB5ZS5BTEwpO1xuICAgICAgICBBZGFwdGVyLmFkYXB0QmdTaXplKGIuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSk7XG4gICAgICAgIChFID0gYi5nZXRDb21wb25lbnQocC52aWV3Q2xhc3MpKSB8fCAoRSA9IGIuYWRkQ29tcG9uZW50KHAudmlld0NsYXNzKSk7XG4gICAgICAgIGlmIChmYWxzZSAhPT0gdC5pc1Nob3dBY3Rpb24gJiYgKHAudmlld01vZGUgPT09IHZpZXdNb2RlLlBBTkVMIHx8IHAudmlld01vZGUgPT09IHZpZXdNb2RlLkFMRVJUKSkge1xuICAgICAgICAgICAgKFMgPSBiLmdldENvbXBvbmVudChjYy5XaWRnZXQpKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBiLnNjYWxlID0gMC44O1xuICAgICAgICAgICAgY2MudHdlZW4oYikudG8oMC4xLCB7XG4gICAgICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNjLmlzVmFsaWQoYikgJiYgKFMuZW5hYmxlZCA9IHRydWUpO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBFLmRlbGVnYXRlID0gcDtcbiAgICAgICAgcC5zZXRWaWV3Q29tcG9uZW50KEUpO1xuICAgICAgICBwLnZpZXdEaWRMb2FkKCk7XG4gICAgICAgIHRoaXMudmlld0RpZFNob3cocCk7XG4gICAgICAgIG51bGwgPT0gbyB8fCBvKHApO1xuICAgICAgICBpZiAodC5pc1JlcGxhY2UgJiYgZCkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXcoZCk7XG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfVxuICAgICAgICBkICYmIHRoaXMudmlld0RpZEhpZGUoZCk7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cblxuICAgIHNob3dCbGFja0xheWVyKGUsIHQsIG8sIG4pIHtcbiAgICAgICAgaWYgKHQudmlld01vZGUgIT09IHZpZXdNb2RlLlNDRU5FICYmIG51bGwgIT09IG8pIHtcbiAgICAgICAgICAgIHZhciBpID0gXCJudW1iZXJcIiA9PSB0eXBlb2YgKG8gPSBvIHx8IHt9KS5ibGFja09wYWNpdHkgPyBvLmJsYWNrT3BhY2l0eSA6IDE1MCxcbiAgICAgICAgICAgICAgICByID0gdC5yb290VmlldyxcbiAgICAgICAgICAgICAgICBhID0gci5nZXRDaGlsZEJ5TmFtZShcImRlZkJnXCIpO1xuICAgICAgICAgICAgaWYgKCFhKSB7XG4gICAgICAgICAgICAgICAgKGEgPSBjcmVhdGVTaW5nbGVDb2xvclNjcmVlbk5vZGUoKSkuekluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgYS5wYXJlbnQgPSByO1xuICAgICAgICAgICAgICAgIGEubmFtZSA9IFwiQmx1ckJnXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIGEub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4oYSkudG8oMC4xNiwge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBpXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBhLm9wYWNpdHkgPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmV1c2VFeGlzdGluZ1ZpZXcoZSwgdCwgbywgcikge1xuICAgICAgICB2YXIgbixcbiAgICAgICAgICAgIGEsXG4gICAgICAgICAgICBzLFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIHUgPSB0aGlzO1xuICAgICAgICB0ID0gdCB8fCB7fTtcbiAgICAgICAgZS5kaXNhYmxlKCk7XG4gICAgICAgIGUucmVmcmVzaEZvclJldXNlKHQpO1xuICAgICAgICBuID0gbnVsbDtcbiAgICAgICAgYSA9IFtdO1xuICAgICAgICBpZiAoZS52aWV3TW9kZSA9PT0gdmlld01vZGUuUEFORUwpIHtcbiAgICAgICAgICAgIG4gPSBvLnN1YkNvbnRyb2xsZXJzW28uc3ViQ29udHJvbGxlcnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBhID0gZS5wYXJlbnRDb250cm9sbGVyLnN1YkNvbnRyb2xsZXJzO1xuICAgICAgICAgICAgaWYgKGUucGFyZW50Q29udHJvbGxlciAhPT0gbykge1xuICAgICAgICAgICAgICAgIHMgPSBhLmluZGV4T2YoZSk7XG4gICAgICAgICAgICAgICAgby5zdWJDb250cm9sbGVycy5wdXNoKGEuc3BsaWNlKHMsIDEpWzBdKTtcbiAgICAgICAgICAgICAgICBlLnBhcmVudENvbnRyb2xsZXIgPSBvO1xuICAgICAgICAgICAgICAgIGUucm9vdFZpZXcucGFyZW50ID0gby5yb290VmlldztcbiAgICAgICAgICAgICAgICBhID0gby5zdWJDb250cm9sbGVycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLnZpZXdNb2RlID09PSB2aWV3TW9kZS5TQ0VORSkge1xuICAgICAgICAgICAgYSA9IHRoaXMuX2NvbnRyb2xsZXJzO1xuICAgICAgICAgICAgbiA9IG87XG4gICAgICAgIH1cbiAgICAgICAgKGMgPSBhLmluZGV4T2YoZSkpID4gLTEgJiYgYS5wdXNoKGEuc3BsaWNlKGMsIDEpWzBdKTtcbiAgICAgICAgdGhpcy5zaG93VmlldyhlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlLnZpZXdNb2RlID09PSB2aWV3TW9kZS5TQ0VORSAmJiB1LnZpZXdEaWRIaWRlKG4pO1xuICAgICAgICAgICAgdC5pc1JlcGxhY2UgJiYgbiAmJiB1LmNsb3NlVmlldyhuKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG51bGwgPT0gciB8fCByKGUpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG5cbiAgICBwb3BUb1RhcmdldFZpZXdCeU5hbWUoZSwgdCkge1xuICAgICAgICB2YXIgbyA9IHRoaXM7XG4gICAgICAgIHQgPSB0IHx8IHt9O1xuICAgICAgICB2YXIgbiA9IHRoaXMuX3ZpZXdNYXBbZV07XG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICBpZiAobiA9PT0gdGhpcy5nZXRUb3BWaWV3Q29udHJvbGxlcigpKSByZXR1cm4gbjtcbiAgICAgICAgICAgIHZhciBpID0gW107XG4gICAgICAgICAgICBpZiAobi52aWV3TW9kZSA9PT0gdmlld01vZGUuUEFORUwpIHtcbiAgICAgICAgICAgICAgICBpID0gbi5wYXJlbnRDb250cm9sbGVyLnN1YkNvbnRyb2xsZXJzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuLnZpZXdNb2RlID09PSB2aWV3TW9kZS5TQ0VORSAmJiAoaSA9IHRoaXMuX2NvbnRyb2xsZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByID0gaS5pbmRleE9mKG4pO1xuICAgICAgICAgICAgaWYgKC0xICE9PSByKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSByICsgMSxcbiAgICAgICAgICAgICAgICAgICAgcyA9IGkubGVuZ3RoIC0gYSxcbiAgICAgICAgICAgICAgICAgICAgYyA9IGkuc3BsaWNlKGEsIHMpO1xuICAgICAgICAgICAgICAgIG4ucm9vdFZpZXcuc2V0U2libGluZ0luZGV4KC0xKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dWaWV3KG4sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgYy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvLmNsb3NlVmlldyhlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZVZpZXcoZSkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIGlmICghZSB8fCBlLnJvb3RWaWV3KSB7XG4gICAgICAgICAgICB2YXIgbyA9IHRoaXMuZ2V0VG9wU2NlbmVDb250cm9sbGVyKCksXG4gICAgICAgICAgICAgICAgbiA9IHRoaXMuZ2V0VG9wVmlld0NvbnRyb2xsZXIoKTtcbiAgICAgICAgICAgIGUgPSBlIHx8IHRoaXMuZ2V0VG9wVmlld0NvbnRyb2xsZXJJbmNsdWRpbmdBbGVydHMoKTtcbiAgICAgICAgICAgIGlmIChvIHx8IGUudmlld01vZGUgPT09IHZpZXdNb2RlLkFMRVJUKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoZS52aWV3TW9kZSA9PT0gdmlld01vZGUuUEFORUwpIG4gPSAoaSA9IGUucGFyZW50Q29udHJvbGxlci5zdWJDb250cm9sbGVycylbaS5sZW5ndGggLSAxXTsgZWxzZSBpZiAoZS52aWV3TW9kZSA9PT0gdmlld01vZGUuU0NFTkUpIHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IHRoaXMuX2NvbnRyb2xsZXJzO1xuICAgICAgICAgICAgICAgICAgICBuID0gbztcbiAgICAgICAgICAgICAgICB9IGVsc2UgbiA9IChpID0gdGhpcy5fYWxlcnRDb250cm9sbGVycylbaS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICB2YXIgciA9IGkuaW5kZXhPZihlKTtcbiAgICAgICAgICAgICAgICByID4gLTEgJiYgaS5zcGxpY2UociwgMSk7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBmdW5jdGlvbiBhKCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdC5fdmlld01hcFttai5nZXRDbGFzc05hbWUoZS52aWV3Q2xhc3MpXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHQuX3ZpZXdNYXBbbWouZ2V0Q2xhc3NOYW1lKGUuY29uc3RydWN0b3IpXTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdWJDb250cm9sbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdC5fdmlld01hcFttai5nZXRDbGFzc05hbWUoZS52aWV3Q2xhc3MpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0Ll92aWV3TWFwW21qLmdldENsYXNzTmFtZShlLmNvbnN0cnVjdG9yKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmRlc3RydWN0b3IoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGUuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgICAgICAgICAgICBNZW1vcnlNYW5hZ2VyLmdldEluc3RhbmNlKCkudHJ5UmVsZWFzZUluTG93TWVtb3J5KCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoZS5pc0VuYWJsZSgpICYmIGUgPT09IG4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUudmlld01vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2Ugdmlld01vZGUuUEFORUw6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IGUucGFyZW50Q29udHJvbGxlci5zdWJDb250cm9sbGVyc1tlLnBhcmVudENvbnRyb2xsZXIuc3ViQ29udHJvbGxlcnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHZpZXdNb2RlLkFMRVJUOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSB0aGlzLl9hbGVydENvbnRyb2xsZXJzW3RoaXMuX2FsZXJ0Q29udHJvbGxlcnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHZpZXdNb2RlLlNDRU5FOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSB0aGlzLmdldFRvcFNjZW5lQ29udHJvbGxlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZpZXcocywgYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlVmlld0J5TmFtZShlKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5fdmlld01hcFtlXTtcbiAgICAgICAgdCAmJiB0aGlzLmNsb3NlVmlldyh0KTtcbiAgICB9XG5cbiAgICBnZXRDb250cm9CeU5hbWUoZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlld01hcFtlXTtcbiAgICB9XG5cbiAgICBnZXRUb3BTY2VuZUNvbnRyb2xsZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb250cm9sbGVyc1t0aGlzLl9jb250cm9sbGVycy5sZW5ndGggLSAxXTtcbiAgICB9XG5cbiAgICBnZXRUb3BWaWV3Q29udHJvbGxlcigpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmdldFRvcFNjZW5lQ29udHJvbGxlcigpO1xuICAgICAgICByZXR1cm4gKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuc3ViQ29udHJvbGxlcnNbZS5zdWJDb250cm9sbGVycy5sZW5ndGggLSAxXSkgfHwgZTtcbiAgICB9XG5cbiAgICBnZXRUb3BWaWV3Q29udHJvbGxlckluY2x1ZGluZ0FsZXJ0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FsZXJ0Q29udHJvbGxlcnMubGVuZ3RoID4gMCA/IHRoaXMuX2FsZXJ0Q29udHJvbGxlcnNbdGhpcy5fYWxlcnRDb250cm9sbGVycy5sZW5ndGggLSAxXSA6IHRoaXMuZ2V0VG9wVmlld0NvbnRyb2xsZXIoKTtcbiAgICB9XG5cbiAgICB2aWV3RGlkSGlkZShlKSB7XG4gICAgICAgIGlmICghZS5pc1ZpZXdEZXN0cm95ZWQoKSAmJiBlLmlzRW5hYmxlKCkpIHtcbiAgICAgICAgICAgIGUuZGlzYWJsZSgpO1xuICAgICAgICAgICAgZS52aWV3RGlkSGlkZSgpO1xuICAgICAgICAgICAgZS5zdWJDb250cm9sbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5pc0VuYWJsZSgpICYmIGUudmlld0RpZEhpZGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmlld0RpZFNob3coZSwgdCkge1xuICAgICAgICBpZiAoZS5pc0VuYWJsZSgpICYmIGUuaGFzVmlld0NvbXBvbmVudCgpICYmIGUucmVhbEFjdGl2ZSgpKSB7XG4gICAgICAgICAgICBlLnZpZXdEaWRTaG93KHQpO1xuICAgICAgICAgICAgZS5zdWJDb250cm9sbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5pc0VuYWJsZSgpICYmIGUuaGFzVmlld0NvbXBvbmVudCgpICYmIGUucmVhbEFjdGl2ZSgpICYmIGUudmlld0RpZFNob3coKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1ZpZXcoZSwgdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG8sIG4sIGwsIHMsIGMsIHAsIGYsIGQsIGgsIHksIG0sIHY7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGkubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlIHx8IGUuaXNWaWV3RGVzdHJveWVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsID09IHQgfHwgdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gZS5pc0VuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucm9vdFZpZXcuc2V0U2libGluZ0luZGV4KC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuaXNVSURlc3Ryb3llZCgpICYmIG4ucHVzaChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3ViQ29udHJvbGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuaXNVSURlc3Ryb3llZCgpICYmIGUuaXNFbmFibGUoKSAmJiBuLnB1c2goZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpLnRyeXMucHVzaChbMSwgNiwgNywgOF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IF9fdmFsdWVzKG4pLCBzID0gbC5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuZG9uZSkgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBzLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCByZXNNYW5hZ2VyLmxvYWRSZXNCeU11bHRpQnVuZGxlVHlwZU1hcChjLnByZWxvYWRSZXNNYXAsIGMuYnVuZGxlTmFtZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBwID0gaS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmNhY2hlUmVzKHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMuaXNWaWV3RGVzdHJveWVkKCkpIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICAoZiA9IGNjLmluc3RhbnRpYXRlKHJlc01hbmFnZXIuZ2V0UmVzKGMudmlld0NsYXNzLmdldFVybCgpLCBjLmJ1bmRsZU5hbWUpKSkuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkID0gbWouZ2V0Q2xhc3NOYW1lKGMudmlld0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYucGFyZW50ID0gYy5yb290VmlldztcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkYXB0ZXIuYWRqdXN0Rm9yVHlwZShmLCBBZGp1c3RUcHllLkFMTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGFwdGVyLmFkYXB0QmdTaXplKGYuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAoaCA9IGYuZ2V0Q29tcG9uZW50KGMudmlld0NsYXNzKSkgfHwgKGggPSBmLmFkZENvbXBvbmVudChkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoLmRlbGVnYXRlID0gYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuc2V0Vmlld0NvbXBvbmVudChoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMudmlld0RpZExvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gbC5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gaS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiB5XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzICYmICFzLmRvbmUgJiYgKHYgPSBsLnJldHVybikgJiYgdi5jYWxsKGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobSkgdGhyb3cgbS5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmlzVmlld0Rlc3Ryb3llZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA9PSB0IHx8IHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbyB8fCB0aGlzLnZpZXdEaWRTaG93KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA9PSB0IHx8IHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBvcFRvUm9vdFNjZW5lKCkge1xuICAgICAgICBmb3IgKHZhciBlID0gdGhpcy5fY29udHJvbGxlcnMubGVuZ3RoIC0gMSwgdCA9IDA7IHQgPCBlOyB0KyspIHRoaXMucG9wU2NlbmUoKTtcbiAgICB9XG5cbiAgICBwb3BWaWV3KCkge1xuICAgICAgICB0aGlzLmNsb3NlVmlldygpO1xuICAgIH1cblxuICAgIGlzTGFzdFZpZXcoKSB7XG4gICAgICAgIHJldHVybiAxID09PSB0aGlzLl9jb250cm9sbGVycy5sZW5ndGggJiYgMCA9PT0gdGhpcy5fY29udHJvbGxlcnNbMF0uc3ViQ29udHJvbGxlcnMubGVuZ3RoICYmIDAgPT09IHRoaXMuX2FsZXJ0Q29udHJvbGxlcnMubGVuZ3RoO1xuICAgIH1cblxuICAgIHBvcFNjZW5lKCkge1xuICAgICAgICB0aGlzLmNsb3NlVmlldyh0aGlzLmdldFRvcFNjZW5lQ29udHJvbGxlcigpKTtcbiAgICB9XG5cbiAgICBkZXN0cm95VW51c2VkVmlldygpIHtcbiAgICB9XG5cbiAgICBjbG9zZUFsbFBhbmVsc0FuZEFsZXJ0cygpIHtcbiAgICAgICAgZm9yICg7IHRoaXMuX2FsZXJ0Q29udHJvbGxlcnMubGVuZ3RoID4gMDspIHtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5fYWxlcnRDb250cm9sbGVyc1t0aGlzLl9hbGVydENvbnRyb2xsZXJzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXcoZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHQgPSB0aGlzLmdldFRvcFNjZW5lQ29udHJvbGxlcigpO1xuICAgICAgICBpZiAodCAmJiB0LnN1YkNvbnRyb2xsZXJzKSBmb3IgKDsgdC5zdWJDb250cm9sbGVycy5sZW5ndGggPiAwOykge1xuICAgICAgICAgICAgdmFyIG8gPSB0LnN1YkNvbnRyb2xsZXJzW3Quc3ViQ29udHJvbGxlcnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB0aGlzLmNsb3NlVmlldyhvKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNjLmpzLnNldENsYXNzTmFtZShcIkNvbnRyb2xsZXJNYW5hZ2VyXCIsIENvbnRyb2xsZXJNYW5hZ2VyKTsiXX0=