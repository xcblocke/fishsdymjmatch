
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/base/ui/BaseSpine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFDbEQsb0VBQXFFO0FBRW5FLElBQUEsUUFBUSxHQUNOLEVBQUUsQ0FBQyxVQUFVLFNBRFAsQ0FDUTtBQUVsQjtJQUF1Qyw2QkFBTTtJQUE3QztRQUFBLHFFQXVYQztRQXRYQyxnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixvQkFBYyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG9CQUFjLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDeEIsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUVoQixzQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUUxQixxQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUVyQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2Qiw4QkFBd0IsR0FBRyxJQUFJLENBQUM7UUFDaEMsMkJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLG9CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLHNCQUFnQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7O0lBaVcvQixDQUFDO2tCQXZYb0IsU0FBUztJQXVCNUIsc0JBQUksNEJBQUs7YUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNNLHlCQUFlLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxD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RSxDQUFDLEtBQUs7T0FDWSxTQUFTLENBdVg3QjtJQUFELGdCQUFDO0NBdlhELEFBdVhDLENBdlhzQyxnQkFBTSxHQXVYNUM7a0JBdlhvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCB7IHBsYXlTcGluZUFuaW0gfSBmcm9tICcuLi8uLi8uLi9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVXRpbHMnO1xuY29uc3Qge1xuICBwcm9wZXJ0eVxufSA9IGNjLl9kZWNvcmF0b3I7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VTcGluZSBleHRlbmRzIEJhc2VVSSB7XG4gIF9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgX2xvYWRpbmdQYXRoID0gXCJcIjtcbiAgX2xvYWRpbmdCdW5kbGUgPSB2b2lkIDA7XG4gIF9jdXJyZW50UGF0aCA9IFwiXCI7XG4gIF9jdXJyZW50QnVuZGxlID0gdm9pZCAwO1xuICBfaXNSZWFkeSA9IGZhbHNlO1xuICBAcHJvcGVydHlcbiAgX3NwaW5lUGF0aCA9IFwiXCI7XG4gIEBwcm9wZXJ0eVxuICBfc3BpbmVCdW5kbGVOYW1lID0gdm9pZCAwO1xuICBAcHJvcGVydHlcbiAgX3NwaW5lQW5pbWF0aW9uID0gXCJcIjtcbiAgQHByb3BlcnR5XG4gIF9zcGluZUxvb3AgPSAwO1xuICBfb25SZWFkeUNhbGxiYWNrID0gbnVsbDtcbiAgY2FjaGVBbmltYXRpb24gPSBudWxsO1xuICBjYWNoZUF0dGFjaE5vZGUgPSBudWxsO1xuICBjYWNoZUF0dGFjaE5vZGVXaXRoQWxwaGEgPSBudWxsO1xuICBjYWNoZVN0b3BBdEZpcnN0RnJhbWUgPSBudWxsO1xuICBhbmltYXRpb25RdWV1ZSA9IFtdO1xuICBpc1BsYXlpbmdRdWV1ZSA9IGZhbHNlO1xuICBhbHBoYVNjaGVkdWxlTWFwID0gbmV3IE1hcCgpO1xuICBnZXQgcmVhZHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzUmVhZHk7XG4gIH1cbiAgc3RhdGljIHJlZnJlc2hXaXRoTm9kZShlLCB0LCBuKSB7XG4gICAgdmFyIGkgPSBlLmdldENvbXBvbmVudChCYXNlU3BpbmUpO1xuICAgIGlmIChpKSB7XG4gICAgICBpLmxvYWRTcGluZSh0LCBuKTtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgICB2YXIgciA9IGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICBpZiAoIXIpIHtcbiAgICAgIChyID0gZS5hZGRDb21wb25lbnQoc3AuU2tlbGV0b24pKS5wcmVtdWx0aXBsaWVkQWxwaGEgPSBmYWxzZTtcbiAgICAgIHIuc2V0QW5pbWF0aW9uQ2FjaGVNb2RlKHNwLlNrZWxldG9uLkFuaW1hdGlvbkNhY2hlTW9kZS5TSEFSRURfQ0FDSEUpO1xuICAgIH1cbiAgICB2YXIgYSA9IGUuYWRkQ29tcG9uZW50KHRoaXMpO1xuICAgIGEubG9hZFNwaW5lKHQsIG4pO1xuICAgIHJldHVybiBhO1xuICB9XG4gIHN0YXRpYyBjcmVhdGUoZSwgdCwgbywgbiwgaSwgcikge1xuICAgIHZhciBhID0gbmV3IGNjLk5vZGUoKSxcbiAgICAgIGwgPSBhLmFkZENvbXBvbmVudCh0aGlzKSxcbiAgICAgIHMgPSBhLmFkZENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgcy5wcmVtdWx0aXBsaWVkQWxwaGEgPSBmYWxzZTtcbiAgICBzLnNldEFuaW1hdGlvbkNhY2hlTW9kZShzcC5Ta2VsZXRvbi5BbmltYXRpb25DYWNoZU1vZGUuU0hBUkVEX0NBQ0hFKTtcbiAgICBsLmxvYWRTcGluZShlLCByKTtcbiAgICBsLnNldEFuaW1hdGlvbih0LCBvIHx8IDEsIG4sIGkpO1xuICAgIHJldHVybiBsO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBpZiAodGhpcy5fc3BpbmVQYXRoICYmICF0aGlzLl9jdXJyZW50UGF0aCkge1xuICAgICAgdGhpcy5sb2FkU3BpbmUodGhpcy5fc3BpbmVQYXRoLCB0aGlzLl9zcGluZUJ1bmRsZU5hbWUpO1xuICAgICAgdGhpcy5fc3BpbmVBbmltYXRpb24gJiYgdGhpcy5zZXRBbmltYXRpb24odGhpcy5fc3BpbmVBbmltYXRpb24sIHRoaXMuX3NwaW5lTG9vcCk7XG4gICAgfVxuICB9XG4gIGdldFNrZWxldG9uKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgfVxuICBsb2FkU3BpbmUoZSwgdCkge1xuICAgIGlmIChlKSB7XG4gICAgICB0aGlzLl9zcGluZVBhdGggPSBlO1xuICAgICAgdGhpcy5fc3BpbmVCdW5kbGVOYW1lID0gdDtcbiAgICAgIGlmICh0aGlzLl9jdXJyZW50UGF0aCA9PT0gZSAmJiB0aGlzLl9jdXJyZW50QnVuZGxlID09PSB0KSB7XG4gICAgICAgIHZhciBvID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgIGlmIChvICYmIG8uc2tlbGV0b25EYXRhICYmIHRoaXMuX2lzUmVhZHkpIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faXNMb2FkaW5nIHx8IHRoaXMuX2xvYWRpbmdQYXRoICE9PSBlIHx8IHRoaXMuX2xvYWRpbmdCdW5kbGUgIT09IHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jdXJyZW50UGF0aCB8fCB0aGlzLl9jdXJyZW50UGF0aCA9PT0gZSAmJiB0aGlzLl9jdXJyZW50QnVuZGxlID09PSB0KSB7XG4gICAgICAgICAgdGhpcy5fY3VycmVudFBhdGggfHwgdGhpcy51cGRhdGVQYXRoKGUsIHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVzZXQoZSwgdCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICBuLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICBuLnNrZWxldG9uRGF0YSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkU3BpbmVBc3luYyhlLCB0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVzZXRTdGF0ZShlLCB0KSB7XG4gICAgaWYgKHRoaXMuX2xvYWRpbmdQYXRoID09PSBlICYmIHRoaXMuX2xvYWRpbmdCdW5kbGUgPT09IHQpIHtcbiAgICAgIHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fbG9hZGluZ1BhdGggPSBcIlwiO1xuICAgICAgdGhpcy5fbG9hZGluZ0J1bmRsZSA9IHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgbG9hZFNwaW5lQXN5bmMoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcztcbiAgICB0aGlzLl9sb2FkaW5nUGF0aCA9IGU7XG4gICAgdGhpcy5fbG9hZGluZ0J1bmRsZSA9IHQ7XG4gICAgaWYgKHRoaXMuZ2V0UmVzKGUsIHNwLlNrZWxldG9uRGF0YSwgdCkpIHtcbiAgICAgIHZhciBuID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICBpZiAobiAmJiBuLnNrZWxldG9uRGF0YSAmJiB0aGlzLl9pc1JlYWR5KSB7XG4gICAgICAgIHRoaXMubWFya1JlYWR5KGUsIHQpO1xuICAgICAgICB0aGlzLnJlc2V0U3RhdGUoZSwgdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmxvYWRSZXMoZSwgc3AuU2tlbGV0b25EYXRhLCB0KS50aGVuKGZ1bmN0aW9uIChuKSB7XG4gICAgICBpZiAobikge1xuICAgICAgICB2YXIgaSA9IEFycmF5LmlzQXJyYXkobikgPyBuWzBdIDogbjtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQoby5ub2RlKSkge1xuICAgICAgICAgIGlmIChvLl9sb2FkaW5nUGF0aCA9PT0gZSAmJiBvLl9sb2FkaW5nQnVuZGxlID09PSB0KSBpZiAoby5ub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikpIHtcbiAgICAgICAgICAgIHZhciByID0gby5ub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICBpZiAociAmJiBpKSB7XG4gICAgICAgICAgICAgIHIuc2tlbGV0b25EYXRhID0gaTtcbiAgICAgICAgICAgICAgci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgby5tYXJrUmVhZHkoZSwgdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvLnJlc2V0U3RhdGUoZSwgdCk7XG4gICAgICAgICAgfSBlbHNlIG8ucmVzZXRTdGF0ZShlLCB0KTtcbiAgICAgICAgfSBlbHNlIG8ucmVzZXRTdGF0ZShlLCB0KTtcbiAgICAgIH0gZWxzZSBvLnJlc2V0U3RhdGUoZSwgdCk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgby5yZXNldFN0YXRlKGUsIHQpO1xuICAgIH0pO1xuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmNsZWFyKCk7XG4gIH1cbiAgdXBkYXRlUGF0aChlLCB0KSB7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRQYXRoICE9PSBlIHx8IHRoaXMuX2N1cnJlbnRCdW5kbGUgIT09IHQpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRQYXRoID0gZTtcbiAgICAgIHRoaXMuX2N1cnJlbnRCdW5kbGUgPSB0O1xuICAgICAgdGhpcy5faXNSZWFkeSA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGVhckFsbENhY2hlZEFjdGlvbnMoKTtcbiAgICAgIHRoaXMuc3RvcEFsbEFscGhhU3luYygpO1xuICAgIH1cbiAgfVxuICByZXNldChlLCB0KSB7XG4gICAgdGhpcy5fY3VycmVudFBhdGggPSBlO1xuICAgIHRoaXMuX2N1cnJlbnRCdW5kbGUgPSB0O1xuICAgIHRoaXMuX2lzUmVhZHkgPSBmYWxzZTtcbiAgICB0aGlzLnN0b3BBbGxBbHBoYVN5bmMoKTtcbiAgICB2YXIgbyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgIGlmIChvKSB7XG4gICAgICBvLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XG4gICAgICBvLnNldEV2ZW50TGlzdGVuZXIobnVsbCk7XG4gICAgICBvLnNldFN0YXJ0TGlzdGVuZXIobnVsbCk7XG4gICAgICBvLnNldEVuZExpc3RlbmVyKG51bGwpO1xuICAgICAgdGhpcy5jbGVhckFsbENhY2hlZEFjdGlvbnMoKTtcbiAgICB9XG4gIH1cbiAgY2xlYXJBbGxDYWNoZWRBY3Rpb25zKCkge1xuICAgIGlmICh0aGlzLmNhY2hlQW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLmNhY2hlQW5pbWF0aW9uLmNiID0gbnVsbDtcbiAgICAgIHRoaXMuY2FjaGVBbmltYXRpb24gPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5jYWNoZUF0dGFjaE5vZGUpIHtcbiAgICAgIHRoaXMuY2FjaGVBdHRhY2hOb2RlLmNiID0gbnVsbDtcbiAgICAgIHRoaXMuY2FjaGVBdHRhY2hOb2RlID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2FjaGVBdHRhY2hOb2RlV2l0aEFscGhhKSB7XG4gICAgICB0aGlzLmNhY2hlQXR0YWNoTm9kZVdpdGhBbHBoYS5jYiA9IG51bGw7XG4gICAgICB0aGlzLmNhY2hlQXR0YWNoTm9kZVdpdGhBbHBoYSA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuY2FjaGVTdG9wQXRGaXJzdEZyYW1lICYmICh0aGlzLmNhY2hlU3RvcEF0Rmlyc3RGcmFtZSA9IG51bGwpO1xuICAgIHRoaXMuY2xlYXJRdWV1ZSgpO1xuICB9XG4gIG1hcmtSZWFkeShlLCB0KSB7XG4gICAgdmFyIG8sIG4sIGksIHI7XG4gICAgaWYgKGUgPT09IHRoaXMuX2N1cnJlbnRQYXRoICYmIHQgPT09IHRoaXMuX2N1cnJlbnRCdW5kbGUpIHtcbiAgICAgIHRoaXMuX2lzUmVhZHkgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuX29uUmVhZHlDYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9vblJlYWR5Q2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5fb25SZWFkeUNhbGxiYWNrID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLmNhY2hlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5zZXRBbmltYXRpb25JbW1lZGlhdGUodGhpcy5jYWNoZUFuaW1hdGlvbi5uYW1lLCB0aGlzLmNhY2hlQW5pbWF0aW9uLmxvb3AsIHRoaXMuY2FjaGVBbmltYXRpb24uY2IsIHRoaXMuY2FjaGVBbmltYXRpb24uaXNBdXRvUmVtb3ZlKTtcbiAgICAgICAgICB0aGlzLmNhY2hlQW5pbWF0aW9uLmNiID0gbnVsbDtcbiAgICAgICAgICB0aGlzLmNhY2hlQW5pbWF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jYWNoZUF0dGFjaE5vZGUpIHtcbiAgICAgICAgICB2YXIgYSA9IG51bGwgPT09IChuID0gKG8gPSB0aGlzLmNhY2hlQXR0YWNoTm9kZSkuY2IpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uY2FsbChvLCB0aGlzLm5vZGUpO1xuICAgICAgICAgIGNjLmlzVmFsaWQoYSkgJiYgdGhpcy5hdHRhY2hOb2RlSW1tZWRpYXRlKHRoaXMuY2FjaGVBdHRhY2hOb2RlLmJvbmVOYW1lLCBhKTtcbiAgICAgICAgICB0aGlzLmNhY2hlQXR0YWNoTm9kZS5jYiA9IG51bGw7XG4gICAgICAgICAgdGhpcy5jYWNoZUF0dGFjaE5vZGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNhY2hlQXR0YWNoTm9kZVdpdGhBbHBoYSkge1xuICAgICAgICAgIGEgPSBudWxsID09PSAociA9IChpID0gdGhpcy5jYWNoZUF0dGFjaE5vZGVXaXRoQWxwaGEpLmNiKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmNhbGwoaSwgdGhpcy5ub2RlKTtcbiAgICAgICAgICBjYy5pc1ZhbGlkKGEpICYmIHRoaXMuYXR0YWNoTm9kZVdpdGhBbHBoYUltbWVkaWF0ZSh0aGlzLmNhY2hlQXR0YWNoTm9kZVdpdGhBbHBoYS5ib25lTmFtZSwgYSwgdGhpcy5jYWNoZUF0dGFjaE5vZGVXaXRoQWxwaGEuc2xvdE5hbWUpO1xuICAgICAgICAgIHRoaXMuY2FjaGVBdHRhY2hOb2RlV2l0aEFscGhhLmNiID0gbnVsbDtcbiAgICAgICAgICB0aGlzLmNhY2hlQXR0YWNoTm9kZVdpdGhBbHBoYSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FjaGVTdG9wQXRGaXJzdEZyYW1lKSB7XG4gICAgICAgICAgdGhpcy5zdG9wQXRGaXJzdEZyYW1lT2ZJbW1lZGlhdGUodGhpcy5jYWNoZVN0b3BBdEZpcnN0RnJhbWUuYW5pbWF0aW9uTmFtZSk7XG4gICAgICAgICAgdGhpcy5jYWNoZVN0b3BBdEZpcnN0RnJhbWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLinYwgU3BpbmUg57yT5a2Y5pON5L2c5omn6KGM5byC5bi4OlwiLCBlKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltTcGluZVByb3h5XSDnvJPlrZjmk43kvZzmiafooYzlvILluLg6XCIgKyAobnVsbCA9PSBlID8gdm9pZCAwIDogZS5tZXNzYWdlKSArIFwiLHN0YWNrOlwiICsgKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuc3RhY2spICsgXCIscGF0aDpcIiArIHRoaXMuX2N1cnJlbnRQYXRoICsgXCIsYnVuZGxlOlwiICsgdGhpcy5fY3VycmVudEJ1bmRsZSk7XG4gICAgICAgIHRoaXMuY2xlYXJBbGxDYWNoZWRBY3Rpb25zKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNldEFuaW1hdGlvbihlLCB0LCBvLCBuID0gZmFsc2UsIGkgPSB0cnVlKSB7XG4gICAgaWYgKCFjYy5pc1ZhbGlkKHRoaXMubm9kZSkpIHJldHVybiBudWxsO1xuICAgIHRoaXMuX3NwaW5lQW5pbWF0aW9uID0gZSB8fCBcIlwiO1xuICAgIHRoaXMuX3NwaW5lTG9vcCA9IHQ7XG4gICAgaSAmJiAodGhpcy5pc1BsYXlpbmdRdWV1ZSB8fCB0aGlzLmFuaW1hdGlvblF1ZXVlLmxlbmd0aCA+IDApICYmIHRoaXMuY2xlYXJRdWV1ZSgpO1xuICAgIGlmICh0aGlzLl9pc1JlYWR5KSByZXR1cm4gdGhpcy5zZXRBbmltYXRpb25JbW1lZGlhdGUoZSwgdCwgbywgbik7XG4gICAgdGhpcy5jYWNoZUFuaW1hdGlvbiA9IHtcbiAgICAgIG5hbWU6IGUsXG4gICAgICBsb29wOiB0LFxuICAgICAgY2I6IG8sXG4gICAgICBpc0F1dG9SZW1vdmU6IG5cbiAgICB9O1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHNldEFuaW1hdGlvbkltbWVkaWF0ZShlLCB0LCBvLCBuID0gZmFsc2UpIHtcbiAgICB2YXIgaSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgIGlmICghaSkgcmV0dXJuIG51bGw7XG4gICAgcGxheVNwaW5lQW5pbShpLCB0LCBlLCBvLCBuKTtcbiAgfVxuICBzdG9wQXRGaXJzdEZyYW1lT2YoZSkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5ub2RlKSAmJiAodGhpcy5faXNSZWFkeSA/IHRoaXMuc3RvcEF0Rmlyc3RGcmFtZU9mSW1tZWRpYXRlKGUpIDogdGhpcy5jYWNoZVN0b3BBdEZpcnN0RnJhbWUgPSB7XG4gICAgICBhbmltYXRpb25OYW1lOiBlXG4gICAgfSk7XG4gIH1cbiAgc3RvcEF0Rmlyc3RGcmFtZU9mSW1tZWRpYXRlKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgIGlmICh0KSB7XG4gICAgICBwbGF5U3BpbmVBbmltKHQsIDEsIGUsIG51bGwsIGZhbHNlKTtcbiAgICAgIHQucGF1c2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgYXR0YWNoTm9kZShlLCB0KSB7XG4gICAgaWYgKHRoaXMuX2lzUmVhZHkpIHtcbiAgICAgIHZhciBvID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdCh0aGlzLm5vZGUpO1xuICAgICAgY2MuaXNWYWxpZChvKSAmJiB0aGlzLmF0dGFjaE5vZGVJbW1lZGlhdGUoZSwgbyk7XG4gICAgfSBlbHNlIHRoaXMuY2FjaGVBdHRhY2hOb2RlID0ge1xuICAgICAgYm9uZU5hbWU6IGUsXG4gICAgICBjYjogdFxuICAgIH07XG4gIH1cbiAgYXR0YWNoTm9kZVdpdGhBbHBoYShlLCB0LCBvKSB7XG4gICAgaWYgKHRoaXMuX2lzUmVhZHkpIHtcbiAgICAgIHZhciBuID0gbnVsbCA9PSBvID8gdm9pZCAwIDogbyh0aGlzLm5vZGUpO1xuICAgICAgY2MuaXNWYWxpZChuKSAmJiB0aGlzLmF0dGFjaE5vZGVXaXRoQWxwaGFJbW1lZGlhdGUoZSwgbiwgdCk7XG4gICAgfSBlbHNlIHRoaXMuY2FjaGVBdHRhY2hOb2RlV2l0aEFscGhhID0ge1xuICAgICAgYm9uZU5hbWU6IGUsXG4gICAgICBzbG90TmFtZTogdCxcbiAgICAgIGNiOiBvXG4gICAgfTtcbiAgfVxuICBhdHRhY2hOb2RlSW1tZWRpYXRlKGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgIGlmIChvICYmIGNjLmlzVmFsaWQodCkpIHtcbiAgICAgIHZhciBuID0gby5hdHRhY2hVdGlsO1xuICAgICAgaWYgKG4pIHtcbiAgICAgICAgdmFyIGkgPSBuLmdlbmVyYXRlQXR0YWNoZWROb2RlcyhlKTtcbiAgICAgICAgaWYgKGkgJiYgMCAhPT0gaS5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgciA9IGlbMF07XG4gICAgICAgICAgY2MuaXNWYWxpZChyKSAmJiB0LnBhcmVudCAhPSByICYmICh0LnBhcmVudCA9IHIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGF0dGFjaE5vZGVXaXRoQWxwaGFJbW1lZGlhdGUoZSwgdCwgbykge1xuICAgIHZhciBuID0gdGhpcztcbiAgICB0aGlzLmF0dGFjaE5vZGVJbW1lZGlhdGUoZSwgdCk7XG4gICAgdmFyIGkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICBpZiAoaSkge1xuICAgICAgdmFyIHIgPSBpLmZpbmRTbG90KG8pO1xuICAgICAgaWYgKHIpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxwaGFTeW5jKHQpO1xuICAgICAgICB2YXIgYSA9IGZ1bmN0aW9uIGEoKSB7XG4gICAgICAgICAgdmFyIGUsIG87XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQodCkpIHtcbiAgICAgICAgICAgIHZhciBhID0gbi5ub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICBpZiAoYSAmJiBhID09PSBpKSB7XG4gICAgICAgICAgICAgIHQub3BhY2l0eSA9IDI1NSAqIChudWxsICE9PSAobyA9IG51bGwgPT09IChlID0gbnVsbCA9PSByID8gdm9pZCAwIDogci5jb2xvcikgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5hKSAmJiB2b2lkIDAgIT09IG8gPyBvIDogMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuLnN0b3BBbHBoYVN5bmModCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIG4uc3RvcEFscGhhU3luYyh0KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hbHBoYVNjaGVkdWxlTWFwLnNldCh0LCBhKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZShhLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RvcEFscGhhU3luYyhlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmFscGhhU2NoZWR1bGVNYXAuZ2V0KGUpO1xuICAgIGlmICh0KSB7XG4gICAgICB0aGlzLnVuc2NoZWR1bGUodCk7XG4gICAgICB0aGlzLmFscGhhU2NoZWR1bGVNYXAuZGVsZXRlKGUpO1xuICAgIH1cbiAgfVxuICBzdG9wQWxsQWxwaGFTeW5jKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAodGhpcy5hbHBoYVNjaGVkdWxlTWFwLnNpemUgPiAwKSB7XG4gICAgICB0aGlzLmFscGhhU2NoZWR1bGVNYXAuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICBlLnVuc2NoZWR1bGUodCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYWxwaGFTY2hlZHVsZU1hcC5jbGVhcigpO1xuICAgIH1cbiAgfVxuICBjbGVhcihlID0gZmFsc2UpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSB7XG4gICAgICB0aGlzLmNsZWFyQWxsQ2FjaGVkQWN0aW9ucygpO1xuICAgICAgdGhpcy5zdG9wQWxsQWxwaGFTeW5jKCk7XG4gICAgICB2YXIgdCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgdC5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xuICAgICAgICB0LnNldEV2ZW50TGlzdGVuZXIobnVsbCk7XG4gICAgICAgIHQuc2V0U3RhcnRMaXN0ZW5lcihudWxsKTtcbiAgICAgICAgdC5zZXRFbmRMaXN0ZW5lcihudWxsKTtcbiAgICAgICAgaWYgKHQgJiYgdC5hdHRhY2hVdGlsICYmICFlKSB7XG4gICAgICAgICAgdmFyIG8gPSB0Lm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJBVFRBQ0hFRF9OT0RFX1RSRUVcIik7XG4gICAgICAgICAgaWYgKG8gJiYgY2MuaXNWYWxpZChvKSkge1xuICAgICAgICAgICAgby5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIG8uZGVzdHJveSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pc1JlYWR5ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHF1ZXVlQW5pbWF0aW9uKGUsIHQgPSAxLCBvPywgbiA9IGZhbHNlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uUXVldWUucHVzaCh7XG4gICAgICAgIG5hbWU6IGUsXG4gICAgICAgIGxvb3A6IHQsXG4gICAgICAgIGNiOiBvLFxuICAgICAgICBpc0F1dG9SZW1vdmU6IG5cbiAgICAgIH0pO1xuICAgICAgdGhpcy5pc1BsYXlpbmdRdWV1ZSB8fCB0aGlzLnBsYXlOZXh0SW5RdWV1ZSgpO1xuICAgIH1cbiAgfVxuICBwbGF5TmV4dEluUXVldWUoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubm9kZSkpIHtcbiAgICAgIGlmICgwICE9PSB0aGlzLmFuaW1hdGlvblF1ZXVlLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmlzUGxheWluZ1F1ZXVlID0gdHJ1ZTtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmFuaW1hdGlvblF1ZXVlLnNoaWZ0KCksXG4gICAgICAgICAgbyA9IHQuaXNBdXRvUmVtb3ZlICYmIDAgPT09IHRoaXMuYW5pbWF0aW9uUXVldWUubGVuZ3RoO1xuICAgICAgICB0aGlzLnNldEFuaW1hdGlvbih0Lm5hbWUsIHQubG9vcCwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICBpZiAoZS5pc1BsYXlpbmdRdWV1ZSkge1xuICAgICAgICAgICAgaWYgKHQuY2IpIHRyeSB7XG4gICAgICAgICAgICAgIHQuY2Iobyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLinYwgW0Jhc2VTcGluZV0g6Zif5YiX5Yqo55S75Zue6LCD5byC5bi4OiBcIiArIHQubmFtZSwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5pc1ZhbGlkKGUubm9kZSkgJiYgZS5wbGF5TmV4dEluUXVldWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIG8sIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB0aGlzLmlzUGxheWluZ1F1ZXVlID0gZmFsc2U7XG4gICAgfSBlbHNlIHRoaXMuY2xlYXJRdWV1ZSgpO1xuICB9XG4gIGNsZWFyUXVldWUoKSB7XG4gICAgdGhpcy5hbmltYXRpb25RdWV1ZS5sZW5ndGggPiAwICYmIHRoaXMuYW5pbWF0aW9uUXVldWUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZS5jYiAmJiAoZS5jYiA9IG51bGwpO1xuICAgIH0pO1xuICAgIHRoaXMuYW5pbWF0aW9uUXVldWUgPSBbXTtcbiAgICB0aGlzLmlzUGxheWluZ1F1ZXVlID0gZmFsc2U7XG4gIH1cbiAgc2V0T25SZWFkeUNhbGxiYWNrKGUpIHtcbiAgICBpZiAodGhpcy5yZWFkeSkge1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vblJlYWR5Q2FsbGJhY2sgPSBlO1xuICAgIH1cbiAgfVxuICBnZXRRdWV1ZUxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb25RdWV1ZS5sZW5ndGg7XG4gIH1cbn0iXX0=