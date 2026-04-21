"use strict";
cc._RF.push(module, '904deT0Wd5K2ql8zFSWARrF', 'BaseSpine');
// Scripts/gamePlay/base/ui/BaseSpine.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../framework/ui/BaseUI");
var CommonUtils_1 = require("../../../framework/utils/CommonUtils");
var property = cc._decorator.property;
var BaseSpine = /** @class */ (function (_super) {
    __extends(BaseSpine, _super);
    function BaseSpine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isLoading = false;
        _this._loadingPath = "";
        _this._loadingBundle = void 0;
        _this._currentPath = "";
        _this._currentBundle = void 0;
        _this._isReady = false;
        _this._spinePath = "";
        _this._spineBundleName = void 0;
        _this._spineAnimation = "";
        _this._spineLoop = 0;
        _this._onReadyCallback = null;
        _this.cacheAnimation = null;
        _this.cacheAttachNode = null;
        _this.cacheAttachNodeWithAlpha = null;
        _this.cacheStopAtFirstFrame = null;
        _this.animationQueue = [];
        _this.isPlayingQueue = false;
        _this.alphaScheduleMap = new Map();
        return _this;
    }
    BaseSpine_1 = BaseSpine;
    Object.defineProperty(BaseSpine.prototype, "ready", {
        get: function () {
            return this._isReady;
        },
        enumerable: false,
        configurable: true
    });
    BaseSpine.refreshWithNode = function (e, t, n) {
        var i = e.getComponent(BaseSpine_1);
        if (i) {
            i.loadSpine(t, n);
            return i;
        }
        var r = e.getComponent(sp.Skeleton);
        if (!r) {
            (r = e.addComponent(sp.Skeleton)).premultipliedAlpha = false;
            r.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
        }
        var a = e.addComponent(this);
        a.loadSpine(t, n);
        return a;
    };
    BaseSpine.create = function (e, t, o, n, i, r) {
        var a = new cc.Node(), l = a.addComponent(this), s = a.addComponent(sp.Skeleton);
        s.premultipliedAlpha = false;
        s.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
        l.loadSpine(e, r);
        l.setAnimation(t, o || 1, n, i);
        return l;
    };
    BaseSpine.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (this._spinePath && !this._currentPath) {
            this.loadSpine(this._spinePath, this._spineBundleName);
            this._spineAnimation && this.setAnimation(this._spineAnimation, this._spineLoop);
        }
    };
    BaseSpine.prototype.getSkeleton = function () {
        return this.node.getComponent(sp.Skeleton);
    };
    BaseSpine.prototype.loadSpine = function (e, t) {
        if (e) {
            this._spinePath = e;
            this._spineBundleName = t;
            if (this._currentPath === e && this._currentBundle === t) {
                var o = this.node.getComponent(sp.Skeleton);
                if (o && o.skeletonData && this._isReady)
                    return;
            }
            if (!this._isLoading || this._loadingPath !== e || this._loadingBundle !== t) {
                if (!this._currentPath || this._currentPath === e && this._currentBundle === t) {
                    this._currentPath || this.updatePath(e, t);
                }
                else {
                    this.reset(e, t);
                }
                var n = this.node.getComponent(sp.Skeleton);
                if (n) {
                    n.enabled = false;
                    n.skeletonData = null;
                }
                this.loadSpineAsync(e, t);
            }
        }
    };
    BaseSpine.prototype.resetState = function (e, t) {
        if (this._loadingPath === e && this._loadingBundle === t) {
            this._isLoading = false;
            this._loadingPath = "";
            this._loadingBundle = void 0;
        }
    };
    BaseSpine.prototype.loadSpineAsync = function (e, t) {
        var o = this;
        this._loadingPath = e;
        this._loadingBundle = t;
        if (this.getRes(e, sp.SkeletonData, t)) {
            var n = this.node.getComponent(sp.Skeleton);
            if (n && n.skeletonData && this._isReady) {
                this.markReady(e, t);
                this.resetState(e, t);
                return;
            }
        }
        this._isLoading = true;
        this.loadRes(e, sp.SkeletonData, t).then(function (n) {
            if (n) {
                var i = Array.isArray(n) ? n[0] : n;
                if (cc.isValid(o.node)) {
                    if (o._loadingPath === e && o._loadingBundle === t)
                        if (o.node.getComponent(sp.Skeleton)) {
                            var r = o.node.getComponent(sp.Skeleton);
                            if (r && i) {
                                r.skeletonData = i;
                                r.enabled = true;
                                o.markReady(e, t);
                            }
                            o.resetState(e, t);
                        }
                        else
                            o.resetState(e, t);
                }
                else
                    o.resetState(e, t);
            }
            else
                o.resetState(e, t);
        }).catch(function () {
            o.resetState(e, t);
        });
    };
    BaseSpine.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.clear();
    };
    BaseSpine.prototype.updatePath = function (e, t) {
        if (this._currentPath !== e || this._currentBundle !== t) {
            this._currentPath = e;
            this._currentBundle = t;
            this._isReady = false;
            this.clearAllCachedActions();
            this.stopAllAlphaSync();
        }
    };
    BaseSpine.prototype.reset = function (e, t) {
        this._currentPath = e;
        this._currentBundle = t;
        this._isReady = false;
        this.stopAllAlphaSync();
        var o = this.node.getComponent(sp.Skeleton);
        if (o) {
            o.setCompleteListener(null);
            o.setEventListener(null);
            o.setStartListener(null);
            o.setEndListener(null);
            this.clearAllCachedActions();
        }
    };
    BaseSpine.prototype.clearAllCachedActions = function () {
        if (this.cacheAnimation) {
            this.cacheAnimation.cb = null;
            this.cacheAnimation = null;
        }
        if (this.cacheAttachNode) {
            this.cacheAttachNode.cb = null;
            this.cacheAttachNode = null;
        }
        if (this.cacheAttachNodeWithAlpha) {
            this.cacheAttachNodeWithAlpha.cb = null;
            this.cacheAttachNodeWithAlpha = null;
        }
        this.cacheStopAtFirstFrame && (this.cacheStopAtFirstFrame = null);
        this.clearQueue();
    };
    BaseSpine.prototype.markReady = function (e, t) {
        var o, n, i, r;
        if (e === this._currentPath && t === this._currentBundle) {
            this._isReady = true;
            if (this._onReadyCallback) {
                this._onReadyCallback();
                this._onReadyCallback = null;
            }
            try {
                if (this.cacheAnimation) {
                    this.setAnimationImmediate(this.cacheAnimation.name, this.cacheAnimation.loop, this.cacheAnimation.cb, this.cacheAnimation.isAutoRemove);
                    this.cacheAnimation.cb = null;
                    this.cacheAnimation = null;
                }
                if (this.cacheAttachNode) {
                    var a = null === (n = (o = this.cacheAttachNode).cb) || void 0 === n ? void 0 : n.call(o, this.node);
                    cc.isValid(a) && this.attachNodeImmediate(this.cacheAttachNode.boneName, a);
                    this.cacheAttachNode.cb = null;
                    this.cacheAttachNode = null;
                }
                if (this.cacheAttachNodeWithAlpha) {
                    a = null === (r = (i = this.cacheAttachNodeWithAlpha).cb) || void 0 === r ? void 0 : r.call(i, this.node);
                    cc.isValid(a) && this.attachNodeWithAlphaImmediate(this.cacheAttachNodeWithAlpha.boneName, a, this.cacheAttachNodeWithAlpha.slotName);
                    this.cacheAttachNodeWithAlpha.cb = null;
                    this.cacheAttachNodeWithAlpha = null;
                }
                if (this.cacheStopAtFirstFrame) {
                    this.stopAtFirstFrameOfImmediate(this.cacheStopAtFirstFrame.animationName);
                    this.cacheStopAtFirstFrame = null;
                }
            }
            catch (e) {
                console.error("❌ Spine 缓存操作执行异常:", e);
                console.error("[SpineProxy] 缓存操作执行异常:" + (null == e ? void 0 : e.message) + ",stack:" + (null == e ? void 0 : e.stack) + ",path:" + this._currentPath + ",bundle:" + this._currentBundle);
                this.clearAllCachedActions();
            }
        }
    };
    BaseSpine.prototype.setAnimation = function (e, t, o, n, i) {
        if (n === void 0) { n = false; }
        if (i === void 0) { i = true; }
        if (!cc.isValid(this.node))
            return null;
        this._spineAnimation = e || "";
        this._spineLoop = t;
        i && (this.isPlayingQueue || this.animationQueue.length > 0) && this.clearQueue();
        if (this._isReady)
            return this.setAnimationImmediate(e, t, o, n);
        this.cacheAnimation = {
            name: e,
            loop: t,
            cb: o,
            isAutoRemove: n
        };
        return null;
    };
    BaseSpine.prototype.setAnimationImmediate = function (e, t, o, n) {
        if (n === void 0) { n = false; }
        var i = this.node.getComponent(sp.Skeleton);
        if (!i)
            return null;
        CommonUtils_1.playSpineAnim(i, t, e, o, n);
    };
    BaseSpine.prototype.stopAtFirstFrameOf = function (e) {
        cc.isValid(this.node) && (this._isReady ? this.stopAtFirstFrameOfImmediate(e) : this.cacheStopAtFirstFrame = {
            animationName: e
        });
    };
    BaseSpine.prototype.stopAtFirstFrameOfImmediate = function (e) {
        var t = this.node.getComponent(sp.Skeleton);
        if (t) {
            CommonUtils_1.playSpineAnim(t, 1, e, null, false);
            t.paused = true;
        }
    };
    BaseSpine.prototype.attachNode = function (e, t) {
        if (this._isReady) {
            var o = null == t ? void 0 : t(this.node);
            cc.isValid(o) && this.attachNodeImmediate(e, o);
        }
        else
            this.cacheAttachNode = {
                boneName: e,
                cb: t
            };
    };
    BaseSpine.prototype.attachNodeWithAlpha = function (e, t, o) {
        if (this._isReady) {
            var n = null == o ? void 0 : o(this.node);
            cc.isValid(n) && this.attachNodeWithAlphaImmediate(e, n, t);
        }
        else
            this.cacheAttachNodeWithAlpha = {
                boneName: e,
                slotName: t,
                cb: o
            };
    };
    BaseSpine.prototype.attachNodeImmediate = function (e, t) {
        var o = this.node.getComponent(sp.Skeleton);
        if (o && cc.isValid(t)) {
            var n = o.attachUtil;
            if (n) {
                var i = n.generateAttachedNodes(e);
                if (i && 0 !== i.length) {
                    var r = i[0];
                    cc.isValid(r) && t.parent != r && (t.parent = r);
                }
            }
        }
    };
    BaseSpine.prototype.attachNodeWithAlphaImmediate = function (e, t, o) {
        var n = this;
        this.attachNodeImmediate(e, t);
        var i = this.node.getComponent(sp.Skeleton);
        if (i) {
            var r = i.findSlot(o);
            if (r) {
                this.stopAlphaSync(t);
                var a = function a() {
                    var e, o;
                    if (cc.isValid(t)) {
                        var a = n.node.getComponent(sp.Skeleton);
                        if (a && a === i) {
                            t.opacity = 255 * (null !== (o = null === (e = null == r ? void 0 : r.color) || void 0 === e ? void 0 : e.a) && void 0 !== o ? o : 1);
                        }
                        else {
                            n.stopAlphaSync(t);
                        }
                    }
                    else
                        n.stopAlphaSync(t);
                };
                this.alphaScheduleMap.set(t, a);
                this.schedule(a, 0);
            }
        }
    };
    BaseSpine.prototype.stopAlphaSync = function (e) {
        var t = this.alphaScheduleMap.get(e);
        if (t) {
            this.unschedule(t);
            this.alphaScheduleMap.delete(e);
        }
    };
    BaseSpine.prototype.stopAllAlphaSync = function () {
        var e = this;
        if (this.alphaScheduleMap.size > 0) {
            this.alphaScheduleMap.forEach(function (t) {
                e.unschedule(t);
            });
            this.alphaScheduleMap.clear();
        }
    };
    BaseSpine.prototype.clear = function (e) {
        if (e === void 0) { e = false; }
        if (cc.isValid(this.node)) {
            this.clearAllCachedActions();
            this.stopAllAlphaSync();
            var t = this.node.getComponent(sp.Skeleton);
            if (t) {
                t.setCompleteListener(null);
                t.setEventListener(null);
                t.setStartListener(null);
                t.setEndListener(null);
                if (t && t.attachUtil && !e) {
                    var o = t.node.getChildByName("ATTACHED_NODE_TREE");
                    if (o && cc.isValid(o)) {
                        o.destroyAllChildren();
                        o.destroy();
                    }
                }
                this._isReady = false;
            }
        }
    };
    BaseSpine.prototype.queueAnimation = function (e, t, o, n) {
        if (t === void 0) { t = 1; }
        if (n === void 0) { n = false; }
        if (e) {
            this.animationQueue.push({
                name: e,
                loop: t,
                cb: o,
                isAutoRemove: n
            });
            this.isPlayingQueue || this.playNextInQueue();
        }
    };
    BaseSpine.prototype.playNextInQueue = function () {
        var e = this;
        if (cc.isValid(this.node)) {
            if (0 !== this.animationQueue.length) {
                this.isPlayingQueue = true;
                var t = this.animationQueue.shift(), o = t.isAutoRemove && 0 === this.animationQueue.length;
                this.setAnimation(t.name, t.loop, function (o) {
                    if (e.isPlayingQueue) {
                        if (t.cb)
                            try {
                                t.cb(o);
                            }
                            catch (e) {
                                console.error("❌ [BaseSpine] 队列动画回调异常: " + t.name, e);
                            }
                        cc.isValid(e.node) && e.playNextInQueue();
                    }
                }, o, false);
            }
            else
                this.isPlayingQueue = false;
        }
        else
            this.clearQueue();
    };
    BaseSpine.prototype.clearQueue = function () {
        this.animationQueue.length > 0 && this.animationQueue.forEach(function (e) {
            e.cb && (e.cb = null);
        });
        this.animationQueue = [];
        this.isPlayingQueue = false;
    };
    BaseSpine.prototype.setOnReadyCallback = function (e) {
        if (this.ready) {
            e();
        }
        else {
            this._onReadyCallback = e;
        }
    };
    BaseSpine.prototype.getQueueLength = function () {
        return this.animationQueue.length;
    };
    var BaseSpine_1;
    __decorate([
        property
    ], BaseSpine.prototype, "_spinePath", void 0);
    __decorate([
        property
    ], BaseSpine.prototype, "_spineBundleName", void 0);
    __decorate([
        property
    ], BaseSpine.prototype, "_spineAnimation", void 0);
    __decorate([
        property
    ], BaseSpine.prototype, "_spineLoop", void 0);
    BaseSpine = BaseSpine_1 = __decorate([
        mj.class
    ], BaseSpine);
    return BaseSpine;
}(BaseUI_1.default));
exports.default = BaseSpine;

cc._RF.pop();