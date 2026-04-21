
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/framework/controller/ViewController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZyYW1ld29yay9jb250cm9sbGVyL1ZpZXdDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBQTZEO0FBQzdELDBEQUFxRDtBQUNyRCxvREFBbUQ7QUFDbkQsSUFBWSxRQUlYO0FBSkQsV0FBWSxRQUFRO0lBQ2xCLHlDQUFTLENBQUE7SUFDVCx5Q0FBUyxDQUFBO0lBQ1QseUNBQVMsQ0FBQTtBQUNYLENBQUMsRUFKVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUluQjtBQUVEO0lBQUE7UUFDRSxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzFCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWix1QkFBa0IsR0FBRyxJQUFJLENBQUM7SUFnUDVCLENBQUM7SUEvT0MsNkJBQUksR0FBSixVQUFLLENBQUM7UUFDSixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFD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QUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xCLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDYjtTQUNGO0lBQ0gsQ0FBQztJQUNELHdDQUFlLEdBQWY7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xCLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDYjtZQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFDRCxzQ0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUExUGtCLGNBQWM7UUFEbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztPQUNOLGNBQWMsQ0EyUGxDO0lBQUQscUJBQUM7Q0EzUEQsQUEyUEMsSUFBQTtrQkEzUG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgTWVtb3J5TWFuYWdlciBmcm9tICcuLi9tYW5hZ2VyL01lbW9yeU1hbmFnZXInO1xuaW1wb3J0IHsgcmVzTWFuYWdlciB9IGZyb20gJy4uL21hbmFnZXIvUmVzTWFuYWdlcic7XG5leHBvcnQgZW51bSB2aWV3TW9kZSB7XG4gIFNDRU5FID0gMCxcbiAgUEFORUwgPSAxLFxuICBBTEVSVCA9IDIsXG59XG5AbWouY2xhc3MoXCJWaWV3Q29udHJvbGxlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBudWxsO1xuICByb290VmlldyA9IG51bGw7XG4gIF92aWV3Q29tcG9uZW50ID0gbnVsbDtcbiAgX2lzVUlEZXN0cm95ZWQgPSBmYWxzZTtcbiAgX2NhY2hlZEFzc2V0TWFwID0ge307XG4gIHBhcmVudENvbnRyb2xsZXIgPSBudWxsO1xuICBzdWJDb250cm9sbGVycyA9IFtdO1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLlNDRU5FO1xuICBwcmVsb2FkUmVzTWFwID0ge307XG4gIGFyZ3MgPSBudWxsO1xuICBfY29udHJvbGxlck1hbmFnZXIgPSBudWxsO1xuICBpbml0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5hcmdzID0gZSB8fCB7fTtcbiAgICB0aGlzLl9jb250cm9sbGVyTWFuYWdlciA9IENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgdGhpcy5yb290VmlldyA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgdGhpcy5yb290Vmlldy5uYW1lID0gbWouZ2V0Q2xhc3NOYW1lKHRoaXMudmlld0NsYXNzKSArIFwiX3Jvb3RWaWV3XCI7XG4gICAgdGhpcy5yb290Vmlldy5zZXRDb250ZW50U2l6ZSg0MDAwLCA0MDAwKTtcbiAgICAobnVsbCA9PSBlID8gdm9pZCAwIDogZS5ub0Jsb2NrKSB8fCB0aGlzLnJvb3RWaWV3LmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcbiAgICB0aGlzLnJvb3RWaWV3LmFkZENvbXBvbmVudChjYy5Db21wb25lbnQpLm9uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHQucm9vdFZpZXcgJiYgdC5jbG9zZSgpO1xuICAgIH07XG4gICAgdGhpcy5yZWdpc3Rlckxpc3RlbmVycygpO1xuICAgIHRoaXMuaW5pdERlcGVuZFJlcygpO1xuICAgIG1qLkV2ZW50TWFuYWdlci5vbihcInJlbW92ZVVudXNlZFJlc1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0LnJlbW92ZVVudXNlZFJlcygpO1xuICAgIH0sIHRoaXMpO1xuICB9XG4gIGluaXREZXBlbmRSZXMoKSB7fVxuICB2aWV3RGlkTG9hZCgpIHt9XG4gIHZpZXdEaWRTaG93KGUpIHtcbiAgICB0aGlzLmFyZ3MgPSBlIHx8IHRoaXMuYXJncztcbiAgfVxuICB2aWV3RGlkSGlkZSgpIHt9XG4gIHJlZnJlc2hGb3JSZXVzZShlKSB7XG4gICAgdGhpcy5hcmdzID0gZTtcbiAgfVxuICByZWdpc3Rlckxpc3RlbmVycygpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0TWVzc2FnZUxpc3RlbmVycygpLFxuICAgICAgdCA9IGZ1bmN0aW9uIHQodCkge1xuICAgICAgICBtai5FdmVudE1hbmFnZXIub24odCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZvciAodmFyIG8gPSBbXSwgbiA9IDA7IG4gPCBhcmd1bWVudHMubGVuZ3RoOyBuKyspIG9bbl0gPSBhcmd1bWVudHNbbl07XG4gICAgICAgICAgZVt0XS5hcHBseShlLCBbLi4ub10pO1xuICAgICAgICB9LCBvKTtcbiAgICAgIH0sXG4gICAgICBvID0gdGhpcztcbiAgICBmb3IgKHZhciBuIGluIGUpIHQobik7XG4gIH1cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgc2V0Vmlld0NvbXBvbmVudChlKSB7XG4gICAgdGhpcy5fdmlld0NvbXBvbmVudCA9IGU7XG4gICAgdGhpcy5faXNVSURlc3Ryb3llZCA9IGZhbHNlO1xuICB9XG4gIGhhc1ZpZXdDb21wb25lbnQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fdmlld0NvbXBvbmVudDtcbiAgfVxuICByZWFsQWN0aXZlKCkge1xuICAgIHJldHVybiAhdGhpcy5pc1ZpZXdEZXN0cm95ZWQoKSAmJiB0aGlzLnJvb3RWaWV3ICYmIHRoaXMucm9vdFZpZXcuYWN0aXZlSW5IaWVyYXJjaHk7XG4gIH1cbiAgdmlld0RvQWN0aW9uKGUpIHtcbiAgICBmb3IgKHZhciB0ID0gW10sIG8gPSAxOyBvIDwgYXJndW1lbnRzLmxlbmd0aDsgbysrKSB0W28gLSAxXSA9IGFyZ3VtZW50c1tvXTtcbiAgICBpZiAodGhpcy5oYXNWaWV3Q29tcG9uZW50KCkpIHtcbiAgICAgIHZhciBuID0gdGhpcy5fdmlld0NvbXBvbmVudFtlXTtcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG4pIHtcbiAgICAgICAgbi5hcHBseSh0aGlzLl92aWV3Q29tcG9uZW50LCB0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFzc2VydChmYWxzZSwgXCLop4blm77nu4Tku7ZcIiArIG1qLmdldENsYXNzTmFtZSh0aGlzLnZpZXdDbGFzcykgKyBcIuayoeacieaWueazlVwiICsgU3RyaW5nKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdXBkYXRlKCkge31cbiAgbGF0ZVVwZGF0ZSgpIHt9XG4gIG9uU3RhcnQoKSB7fVxuICBvblVJRGVzdHJveSgpIHt9XG4gIG9uVUlFbmFibGUoKSB7fVxuICBvblVJRGlzYWJsZSgpIHt9XG4gIGRpc3BhdGNoRXZlbnQoZSkge1xuICAgIGZvciAodmFyIHQgPSBbXSwgbyA9IDE7IG8gPCBhcmd1bWVudHMubGVuZ3RoOyBvKyspIHRbbyAtIDFdID0gYXJndW1lbnRzW29dO1xuICAgIHQudW5zaGlmdChlKTtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdC5hcHBseShtai5FdmVudE1hbmFnZXIsIHQpO1xuICB9XG4gIGFkZFByZWxvYWRSZXMoZSwgdCkge1xuICAgIHZhciBvLFxuICAgICAgbiA9IEFycmF5LmlzQXJyYXkodCkgPyB0IDogW3RdO1xuICAgIGlmICh0aGlzLnByZWxvYWRSZXNNYXBbZV0pIHtcbiAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiB0aGlzLnByZWxvYWRSZXNNYXBbZV0pIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnByZWxvYWRSZXNNYXBbZV07XG4gICAgICAgIHRoaXMucHJlbG9hZFJlc01hcFtlXSA9IFsuLi5baV0sIC4uLm5dO1xuICAgICAgfSBlbHNlIChvID0gdGhpcy5wcmVsb2FkUmVzTWFwW2VdKS5wdXNoLmFwcGx5KG8sIFsuLi5uXSk7XG4gICAgfSBlbHNlIHRoaXMucHJlbG9hZFJlc01hcFtlXSA9IFsuLi5uXTtcbiAgfVxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9jb250cm9sbGVyTWFuYWdlci5jbG9zZVZpZXcodGhpcyk7XG4gIH1cbiAgY2xvc2VWaWV3QnlOYW1lKGUpIHtcbiAgICB0aGlzLl9jb250cm9sbGVyTWFuYWdlci5jbG9zZVZpZXdCeU5hbWUoZSk7XG4gIH1cbiAgcHVzaENvbnRyb2xsZXIoKSB7XG4gICAgZm9yICh2YXIgZSA9IFtdLCB0ID0gMDsgdCA8IGFyZ3VtZW50cy5sZW5ndGg7IHQrKykgZVt0XSA9IGFyZ3VtZW50c1t0XTtcbiAgICByZXR1cm4gdGhpcy5fY29udHJvbGxlck1hbmFnZXIucHVzaFZpZXdCeUNvbnRyb2xsZXIuYXBwbHkodGhpcy5fY29udHJvbGxlck1hbmFnZXIsIGUpO1xuICB9XG4gIHBvcFRvVGFyZ2V0VmlldygpIHtcbiAgICBmb3IgKHZhciBlID0gW10sIHQgPSAwOyB0IDwgYXJndW1lbnRzLmxlbmd0aDsgdCsrKSBlW3RdID0gYXJndW1lbnRzW3RdO1xuICAgIHJldHVybiB0aGlzLl9jb250cm9sbGVyTWFuYWdlci5wb3BUb1RhcmdldFZpZXdCeU5hbWUuYXBwbHkodGhpcy5fY29udHJvbGxlck1hbmFnZXIsIGUpO1xuICB9XG4gIGNsb3NlQWxsUGFuZWwoKSB7XG4gICAgdGhpcy5zdWJDb250cm9sbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbiAgY2FjaGVSZXMoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSBBcnJheS5pc0FycmF5KGUpID8gZSA6IFtlXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaSA9IF9fdmFsdWVzKG4pLCByID0gaS5uZXh0KCk7ICFyLmRvbmU7IHIgPSBpLm5leHQoKSkge1xuICAgICAgICB2YXIgYSA9IHIudmFsdWUsXG4gICAgICAgICAgbCA9IGEuX3V1aWQsXG4gICAgICAgICAgYyA9IHRoaXMuX2NhY2hlZEFzc2V0TWFwW2xdO1xuICAgICAgICBpZiAoYykgY1sxXSArPSAxO2Vsc2Uge1xuICAgICAgICAgIGEuYWRkUmVmKCk7XG4gICAgICAgICAgaWYgKHRoaXMuaXNWaWV3RGVzdHJveWVkKCkpIHtcbiAgICAgICAgICAgIE1lbW9yeU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jYWNoZURlbGF5UmVsZWFzZVJlcyhhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVkQXNzZXRNYXBbbF0gPSBbYSwgMV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHIgJiYgIXIuZG9uZSAmJiAobyA9IGkucmV0dXJuKSAmJiBvLmNhbGwoaSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVsZWFzZUNhY2hlKCkge1xuICAgIGZvciAodmFyIGUgaW4gdGhpcy5fY2FjaGVkQXNzZXRNYXApIHtcbiAgICAgIHZhciB0ID0gdGhpcy5fY2FjaGVkQXNzZXRNYXBbZV1bMF07XG4gICAgICBNZW1vcnlNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2FjaGVEZWxheVJlbGVhc2VSZXModCk7XG4gICAgfVxuICAgIHRoaXMuX2NhY2hlZEFzc2V0TWFwID0ge307XG4gIH1cbiAgaGFzUmVzKGUsIHQgPSB0aGlzLmJ1bmRsZU5hbWUpIHtcbiAgICB2YXIgbyA9IHJlc01hbmFnZXIuZ2V0QnVuZGxlKHQpO1xuICAgIHJldHVybiAhIW8gJiYgISFvLmdldEluZm9XaXRoUGF0aChlKTtcbiAgfVxuICBnZXRSZXMoZSwgdCA9IGNjLkFzc2V0LCBvID0gdGhpcy5idW5kbGVOYW1lKSB7XG4gICAgdmFyIG4gPSByZXNNYW5hZ2VyLmdldEJ1bmRsZShvKSxcbiAgICAgIGkgPSBudWxsID09IG4gPyB2b2lkIDAgOiBuLmdldChlLCB0KTtcbiAgICBpZiAoIWkpIHJldHVybiBudWxsO1xuICAgIHRoaXMuY2FjaGVSZXMoaSk7XG4gICAgcmV0dXJuIGk7XG4gIH1cbiAgYXN5bmMgbG9hZFJlcyhlLCB0ID0gY2MuQXNzZXQsIG8gPSB0aGlzLmJ1bmRsZU5hbWUpIHtcbiAgICB2YXIgbjtcbiAgICBuID0gYXdhaXQgcmVzTWFuYWdlci5sb2FkUmVzKGUsIHQsIG8pO1xuICAgIHRoaXMuY2FjaGVSZXMobik7XG4gICAgaWYgKHRoaXMuaXNWaWV3RGVzdHJveWVkKCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbjtcbiAgICB9XG4gIH1cbiAgcmVsZWFzZVJlcyhlLCB0ID0gZmFsc2UpIHtcbiAgICB2YXIgbywgbjtcbiAgICB2YXIgaSA9IEFycmF5LmlzQXJyYXkoZSkgPyBlIDogW2VdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciByID0gX192YWx1ZXMoaSksIGEgPSByLm5leHQoKTsgIWEuZG9uZTsgYSA9IHIubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gYS52YWx1ZTtcbiAgICAgICAgaWYgKGwpIHtcbiAgICAgICAgICB2YXIgYyA9IGwuX3V1aWQsXG4gICAgICAgICAgICB1ID0gdGhpcy5fY2FjaGVkQXNzZXRNYXBbY107XG4gICAgICAgICAgaWYgKHUpIHtcbiAgICAgICAgICAgIHVbMV0tLTtcbiAgICAgICAgICAgIGlmICh0ICYmIHVbMV0gPD0gMCkge1xuICAgICAgICAgICAgICBsLmRlY1JlZigpO1xuICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FjaGVkQXNzZXRNYXBbY107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGEgJiYgIWEuZG9uZSAmJiAobiA9IHIucmV0dXJuKSAmJiBuLmNhbGwocik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVtb3ZlVW51c2VkUmVzKCkge1xuICAgIGZvciAodmFyIGUgaW4gdGhpcy5fY2FjaGVkQXNzZXRNYXApIHtcbiAgICAgIHZhciB0ID0gdGhpcy5fY2FjaGVkQXNzZXRNYXBbZV0sXG4gICAgICAgIG8gPSB0WzFdLFxuICAgICAgICBuID0gdFswXTtcbiAgICAgIGlmIChvIDw9IDApIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NhY2hlZEFzc2V0TWFwW2VdO1xuICAgICAgICBNZW1vcnlNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2FjaGVEZWxheVJlbGVhc2VSZXMobik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlzRW5hYmxlKCkge1xuICAgIHJldHVybiAhdGhpcy5pc1ZpZXdEZXN0cm95ZWQoKSAmJiB0aGlzLnJvb3RWaWV3LmFjdGl2ZTtcbiAgfVxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5pc1ZpZXdEZXN0cm95ZWQoKSB8fCAodGhpcy5yb290Vmlldy5hY3RpdmUgPSB0cnVlKTtcbiAgfVxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuaXNWaWV3RGVzdHJveWVkKCkgfHwgKHRoaXMucm9vdFZpZXcuYWN0aXZlID0gZmFsc2UpO1xuICB9XG4gIGRlc3RydWN0b3IoKSB7XG4gICAgbWouRXZlbnRNYW5hZ2VyLnRhcmdldE9mZih0aGlzKTtcbiAgICB0aGlzLlVJV2lsbERlc3Ryb3koKTtcbiAgICBpZiAodGhpcy5yb290Vmlldykge1xuICAgICAgdmFyIGUgPSB0aGlzLnJvb3RWaWV3O1xuICAgICAgdGhpcy5yb290VmlldyA9IG51bGw7XG4gICAgICBpZiAoZSAmJiBlLmlzVmFsaWQpIHtcbiAgICAgICAgZS5wYXJlbnQgPSBudWxsO1xuICAgICAgICBlLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaXNWaWV3RGVzdHJveWVkKCkge1xuICAgIHJldHVybiAhdGhpcy5yb290VmlldyB8fCAhY2MuaXNWYWxpZCh0aGlzLnJvb3RWaWV3KTtcbiAgfVxuICBVSVdpbGxEZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl92aWV3Q29tcG9uZW50KSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX3ZpZXdDb21wb25lbnQubm9kZTtcbiAgICAgIHRoaXMuX3ZpZXdDb21wb25lbnQgPSBudWxsO1xuICAgICAgdGhpcy5faXNVSURlc3Ryb3llZCA9IHRydWU7XG4gICAgICBpZiAoZSAmJiBlLmlzVmFsaWQpIHtcbiAgICAgICAgZS5wYXJlbnQgPSBudWxsO1xuICAgICAgICBlLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVsZWFzZUNhY2hlKCk7XG4gICAgfVxuICB9XG4gIGlzVUlEZXN0cm95ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVUlEZXN0cm95ZWQ7XG4gIH1cbn0iXX0=