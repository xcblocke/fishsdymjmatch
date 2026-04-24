import BaseUI from '../../../framework/ui/BaseUI';
import { playSpineAnim } from '../../../framework/utils/CommonUtils';
const {
  property
} = cc._decorator;
@mj.class
export default class BaseSpine extends BaseUI {
  _isLoading = false;
  _loadingPath = "";
  _loadingBundle = void 0;
  _currentPath = "";
  _currentBundle = void 0;
  _isReady = false;
  @property
  _spinePath = "";
  @property
  _spineBundleName = void 0;
  @property
  _spineAnimation = "";
  @property
  _spineLoop = 0;
  _onReadyCallback = null;
  cacheAnimation = null;
  cacheAttachNode = null;
  cacheAttachNodeWithAlpha = null;
  cacheStopAtFirstFrame = null;
  animationQueue = [];
  isPlayingQueue = false;
  alphaScheduleMap = new Map();
  get ready() {
    return this._isReady;
  }
  static refreshWithNode(e, t, n) {
    var i = e.getComponent(BaseSpine);
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
  }
  static create(e, t, o, n, i, r) {
    var a = new cc.Node(),
      l = a.addComponent(this),
      s = a.addComponent(sp.Skeleton);
    s.premultipliedAlpha = false;
    s.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
    l.loadSpine(e, r);
    l.setAnimation(t, o || 1, n, i);
    return l;
  }
  onLoad() {
    super.onLoad.call(this);
    if (this._spinePath && !this._currentPath) {
      this.loadSpine(this._spinePath, this._spineBundleName);
      this._spineAnimation && this.setAnimation(this._spineAnimation, this._spineLoop);
    }
  }
  getSkeleton() {
    return this.node.getComponent(sp.Skeleton);
  }
  loadSpine(e, t) {
    if (e) {
      this._spinePath = e;
      this._spineBundleName = t;
      if (this._currentPath === e && this._currentBundle === t) {
        var o = this.node.getComponent(sp.Skeleton);
        if (o && o.skeletonData && this._isReady) return;
      }
      if (!this._isLoading || this._loadingPath !== e || this._loadingBundle !== t) {
        if (!this._currentPath || this._currentPath === e && this._currentBundle === t) {
          this._currentPath || this.updatePath(e, t);
        } else {
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
  }
  resetState(e, t) {
    if (this._loadingPath === e && this._loadingBundle === t) {
      this._isLoading = false;
      this._loadingPath = "";
      this._loadingBundle = void 0;
    }
  }
  loadSpineAsync(e, t) {
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
          if (o._loadingPath === e && o._loadingBundle === t) if (o.node.getComponent(sp.Skeleton)) {
            var r = o.node.getComponent(sp.Skeleton);
            if (r && i) {
              r.skeletonData = i;
              r.enabled = true;
              o.markReady(e, t);
            }
            o.resetState(e, t);
          } else o.resetState(e, t);
        } else o.resetState(e, t);
      } else o.resetState(e, t);
    }).catch(function () {
      o.resetState(e, t);
    });
  }
  onDestroy() {
    super.onDestroy.call(this);
    this.clear();
  }
  updatePath(e, t) {
    if (this._currentPath !== e || this._currentBundle !== t) {
      this._currentPath = e;
      this._currentBundle = t;
      this._isReady = false;
      this.clearAllCachedActions();
      this.stopAllAlphaSync();
    }
  }
  reset(e, t) {
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
  }
  clearAllCachedActions() {
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
  }
  markReady(e, t) {
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
      } catch (e) {
        console.error("❌ Spine 缓存操作执行异常:", e);
        console.error("[SpineProxy] 缓存操作执行异常:" + (null == e ? void 0 : e.message) + ",stack:" + (null == e ? void 0 : e.stack) + ",path:" + this._currentPath + ",bundle:" + this._currentBundle);
        this.clearAllCachedActions();
      }
    }
  }
  setAnimation(e, t, o, n = false, i = true) {
    if (!cc.isValid(this.node)) return null;
    this._spineAnimation = e || "";
    this._spineLoop = t;
    i && (this.isPlayingQueue || this.animationQueue.length > 0) && this.clearQueue();
    if (this._isReady) return this.setAnimationImmediate(e, t, o, n);
    this.cacheAnimation = {
      name: e,
      loop: t,
      cb: o,
      isAutoRemove: n
    };
    return null;
  }
  setAnimationImmediate(e, t, o, n = false) {
    var i = this.node.getComponent(sp.Skeleton);
    if (!i) return null;
    console.log("[Spine] node=" + this.node.name + " path=" + this._currentPath + " anim=" + e + " loop=" + t + " autoRemove=" + n);
    playSpineAnim(i, t, e, o, n);
  }
  stopAtFirstFrameOf(e) {
    cc.isValid(this.node) && (this._isReady ? this.stopAtFirstFrameOfImmediate(e) : this.cacheStopAtFirstFrame = {
      animationName: e
    });
  }
  stopAtFirstFrameOfImmediate(e) {
    var t = this.node.getComponent(sp.Skeleton);
    if (t) {
      playSpineAnim(t, 1, e, null, false);
      t.paused = true;
    }
  }
  attachNode(e, t) {
    if (this._isReady) {
      var o = null == t ? void 0 : t(this.node);
      cc.isValid(o) && this.attachNodeImmediate(e, o);
    } else this.cacheAttachNode = {
      boneName: e,
      cb: t
    };
  }
  attachNodeWithAlpha(e, t, o) {
    if (this._isReady) {
      var n = null == o ? void 0 : o(this.node);
      cc.isValid(n) && this.attachNodeWithAlphaImmediate(e, n, t);
    } else this.cacheAttachNodeWithAlpha = {
      boneName: e,
      slotName: t,
      cb: o
    };
  }
  attachNodeImmediate(e, t) {
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
  }
  attachNodeWithAlphaImmediate(e, t, o) {
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
            } else {
              n.stopAlphaSync(t);
            }
          } else n.stopAlphaSync(t);
        };
        this.alphaScheduleMap.set(t, a);
        this.schedule(a, 0);
      }
    }
  }
  stopAlphaSync(e) {
    var t = this.alphaScheduleMap.get(e);
    if (t) {
      this.unschedule(t);
      this.alphaScheduleMap.delete(e);
    }
  }
  stopAllAlphaSync() {
    var e = this;
    if (this.alphaScheduleMap.size > 0) {
      this.alphaScheduleMap.forEach(function (t) {
        e.unschedule(t);
      });
      this.alphaScheduleMap.clear();
    }
  }
  clear(e = false) {
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
  }
  queueAnimation(e, t = 1, o?, n = false) {
    if (e) {
      this.animationQueue.push({
        name: e,
        loop: t,
        cb: o,
        isAutoRemove: n
      });
      this.isPlayingQueue || this.playNextInQueue();
    }
  }
  playNextInQueue() {
    var e = this;
    if (cc.isValid(this.node)) {
      if (0 !== this.animationQueue.length) {
        this.isPlayingQueue = true;
        var t = this.animationQueue.shift(),
          o = t.isAutoRemove && 0 === this.animationQueue.length;
        this.setAnimation(t.name, t.loop, function (o) {
          if (e.isPlayingQueue) {
            if (t.cb) try {
              t.cb(o);
            } catch (e) {
              console.error("❌ [BaseSpine] 队列动画回调异常: " + t.name, e);
            }
            cc.isValid(e.node) && e.playNextInQueue();
          }
        }, o, false);
      } else this.isPlayingQueue = false;
    } else this.clearQueue();
  }
  clearQueue() {
    this.animationQueue.length > 0 && this.animationQueue.forEach(function (e) {
      e.cb && (e.cb = null);
    });
    this.animationQueue = [];
    this.isPlayingQueue = false;
  }
  setOnReadyCallback(e) {
    if (this.ready) {
      e();
    } else {
      this._onReadyCallback = e;
    }
  }
  getQueueLength() {
    return this.animationQueue.length;
  }
}