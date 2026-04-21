import ControllerManager from '../manager/ControllerManager';
import MemoryManager from '../manager/MemoryManager';
import { resManager } from '../manager/ResManager';
export enum viewMode {
  SCENE = 0,
  PANEL = 1,
  ALERT = 2,
}
@mj.class("ViewController")
export default class ViewController {
  viewClass = null;
  rootView = null;
  _viewComponent = null;
  _isUIDestroyed = false;
  _cachedAssetMap = {};
  parentController = null;
  subControllers = [];
  viewMode = viewMode.SCENE;
  preloadResMap = {};
  args = null;
  _controllerManager = null;
  init(e) {
    var t = this;
    this.args = e || {};
    this._controllerManager = ControllerManager.getInstance();
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
  }
  initDependRes() {}
  viewDidLoad() {}
  viewDidShow(e) {
    this.args = e || this.args;
  }
  viewDidHide() {}
  refreshForReuse(e) {
    this.args = e;
  }
  registerListeners() {
    var e = this.getMessageListeners(),
      t = function t(t) {
        mj.EventManager.on(t, function () {
          for (var o = [], n = 0; n < arguments.length; n++) o[n] = arguments[n];
          e[t].apply(e, [...o]);
        }, o);
      },
      o = this;
    for (var n in e) t(n);
  }
  getMessageListeners() {
    return {};
  }
  setViewComponent(e) {
    this._viewComponent = e;
    this._isUIDestroyed = false;
  }
  hasViewComponent() {
    return !!this._viewComponent;
  }
  realActive() {
    return !this.isViewDestroyed() && this.rootView && this.rootView.activeInHierarchy;
  }
  viewDoAction(e) {
    for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
    if (this.hasViewComponent()) {
      var n = this._viewComponent[e];
      if ("function" == typeof n) {
        n.apply(this._viewComponent, t);
      } else {
        assert(false, "视图组件" + mj.getClassName(this.viewClass) + "没有方法" + String(e));
      }
    }
  }
  update() {}
  lateUpdate() {}
  onStart() {}
  onUIDestroy() {}
  onUIEnable() {}
  onUIDisable() {}
  dispatchEvent(e) {
    for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
    t.unshift(e);
    mj.EventManager.emit.apply(mj.EventManager, t);
  }
  addPreloadRes(e, t) {
    var o,
      n = Array.isArray(t) ? t : [t];
    if (this.preloadResMap[e]) {
      if ("string" == typeof this.preloadResMap[e]) {
        var i = this.preloadResMap[e];
        this.preloadResMap[e] = [...[i], ...n];
      } else (o = this.preloadResMap[e]).push.apply(o, [...n]);
    } else this.preloadResMap[e] = [...n];
  }
  close() {
    this._controllerManager.closeView(this);
  }
  closeViewByName(e) {
    this._controllerManager.closeViewByName(e);
  }
  pushController() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return this._controllerManager.pushViewByController.apply(this._controllerManager, e);
  }
  popToTargetView() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return this._controllerManager.popToTargetViewByName.apply(this._controllerManager, e);
  }
  closeAllPanel() {
    this.subControllers.forEach(function (e) {
      e.close();
    });
  }
  cacheRes(e) {
    var t,
      o,
      n = Array.isArray(e) ? e : [e];
    try {
      for (var i = __values(n), r = i.next(); !r.done; r = i.next()) {
        var a = r.value,
          l = a._uuid,
          c = this._cachedAssetMap[l];
        if (c) c[1] += 1;else {
          a.addRef();
          if (this.isViewDestroyed()) {
            MemoryManager.getInstance().cacheDelayReleaseRes(a);
          } else {
            this._cachedAssetMap[l] = [a, 1];
          }
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (o = i.return) && o.call(i);
      } finally {
        if (t) throw t.error;
      }
    }
  }
  releaseCache() {
    for (var e in this._cachedAssetMap) {
      var t = this._cachedAssetMap[e][0];
      MemoryManager.getInstance().cacheDelayReleaseRes(t);
    }
    this._cachedAssetMap = {};
  }
  hasRes(e, t = this.bundleName) {
    var o = resManager.getBundle(t);
    return !!o && !!o.getInfoWithPath(e);
  }
  getRes(e, t = cc.Asset, o = this.bundleName) {
    var n = resManager.getBundle(o),
      i = null == n ? void 0 : n.get(e, t);
    if (!i) return null;
    this.cacheRes(i);
    return i;
  }
  async loadRes(e, t = cc.Asset, o = this.bundleName) {
    var n;
    n = await resManager.loadRes(e, t, o);
    this.cacheRes(n);
    if (this.isViewDestroyed()) {
      return null;
    } else {
      return n;
    }
  }
  releaseRes(e, t = false) {
    var o, n;
    var i = Array.isArray(e) ? e : [e];
    try {
      for (var r = __values(i), a = r.next(); !a.done; a = r.next()) {
        var l = a.value;
        if (l) {
          var c = l._uuid,
            u = this._cachedAssetMap[c];
          if (u) {
            u[1]--;
            if (t && u[1] <= 0) {
              l.decRef();
              delete this._cachedAssetMap[c];
            }
          }
        }
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        a && !a.done && (n = r.return) && n.call(r);
      } finally {
        if (o) throw o.error;
      }
    }
  }
  removeUnusedRes() {
    for (var e in this._cachedAssetMap) {
      var t = this._cachedAssetMap[e],
        o = t[1],
        n = t[0];
      if (o <= 0) {
        delete this._cachedAssetMap[e];
        MemoryManager.getInstance().cacheDelayReleaseRes(n);
      }
    }
  }
  isEnable() {
    return !this.isViewDestroyed() && this.rootView.active;
  }
  enable() {
    this.isViewDestroyed() || (this.rootView.active = true);
  }
  disable() {
    this.isViewDestroyed() || (this.rootView.active = false);
  }
  destructor() {
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
  }
  isViewDestroyed() {
    return !this.rootView || !cc.isValid(this.rootView);
  }
  UIWillDestroy() {
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
  }
  isUIDestroyed() {
    return this._isUIDestroyed;
  }
}