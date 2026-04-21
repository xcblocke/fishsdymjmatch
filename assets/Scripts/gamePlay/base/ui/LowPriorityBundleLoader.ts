import { resManager } from '../../../framework/manager/ResManager';
import { DotGameBundleDelay } from '../../dot/DGameBundleDelay';
import LowPriorityModel from './LowPriorityModel';
enum r {
  Stopped = 0,
  Idle = 1,
  Processing = 2,
  Paused = 3,
  Resuming = 4,
  Delaying = 5,
  ProcessingCached = 6,
}
export enum ELowPriorityBundlePriority {
  DefaultLocal = 50,
  DefaultHightPriority = 100,
  DefaultCardXingyunHuaPai = 300,
  DefaultDaXiao = 500,
  Default = 1000,
}
export enum ELowPriorityDotType {
  XingyunHuapai = 1,
  Daxiao = 2,
}
export default class LowPriorityBundleLoader {
  _queue = [];
  _currentTask = null;
  _state = r.Stopped;
  _needsSort = false;
  _taskSequence = 0;
  TASK_INTERVAL_DELAY = 0.5;
  DOWNLOADED_PRIORITY_DELAY = 0.2;
  _stats = {
    totalDownloadTime: 0,
    completedBundleCount: 0,
    lastBundleStartTime: 0,
    lastBundleDownloadTime: 0,
    lastBundleAvgProgressTime: 0,
    lastProgressTime: 0,
    lastProgressFinished: 0,
    totalDelayTime: 0
  };
  _priorityLimitConfig = new Map();
  _priorityStats = new Map();
  _allowNonCached = false;
  _delayTimer = null;
  _priority2dotType = null;
  _hasDotType = new Map();
  static _instance = null;
  constructor() {
    var _e = {};
    _e[ELowPriorityBundlePriority.DefaultCardXingyunHuaPai] = ELowPriorityDotType.XingyunHuapai;
    _e[ELowPriorityBundlePriority.DefaultDaXiao] = ELowPriorityDotType.Daxiao;
    this._priority2dotType = _e;
  }
  static getInstance() {
    this._instance || (this._instance = new LowPriorityBundleLoader());
    return this._instance;
  }
  setPriorityLimit(e, t, o) {
    t <= 0 || o <= 0 || this._priorityLimitConfig.set(e, {
      maxContinuousCount: t,
      timeoutSeconds: o
    });
  }
  clearPriorityLimit(e) {
    if (void 0 !== e) {
      this._priorityLimitConfig.delete(e);
      this._priorityStats.delete(e);
    } else {
      this._priorityLimitConfig.clear();
      this._priorityStats.clear();
    }
  }
  @mj.traitEvent("LowBunLoader_onStart")
  onStart() {}
  changePriority(e, t) {
    var o, n;
    try {
      for (var r = __values(this._queue), a = r.next(); !a.done; a = r.next()) {
        var l = a.value;
        l.originalPriority == e && (l.priority = t);
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
    this._needsSort = true;
  }
  setAllowNonCached(e) {
    this._allowNonCached = e;
  }
  @mj.traitEvent("LowBunLoader_start")
  start(e = false) {
    e || this.onStart();
    if (e) {
      var t = !this._allowNonCached;
      this._allowNonCached = true;
      if (t && this._state === r.Paused) {
        this.resume();
        return;
      }
    }
    if (this._state === r.Stopped) {
      this._state = r.Idle;
      this._processNextTask();
    } else this._queue.length > 0 && this._state !== r.Paused && this._state !== r.Resuming && this._state !== r.Delaying && this._processNextTask();
  }
  addTask(e, t = ELowPriorityBundlePriority.Default, o = 1) {
    if (e && "string" == typeof e && !(resManager.isBundlePreLoaded(e) || this._currentTask && this._currentTask.bundleName === e)) {
      var n = this._queue.find(function (t) {
        return t.bundleName === e;
      });
      if (n) {
        n.priority = Math.min(n.priority, t);
        n.maxRetries = Math.max(n.maxRetries, o);
        this._needsSort = true;
      } else {
        var i = {
            bundleName: e,
            priority: t,
            originalPriority: t,
            sequence: ++this._taskSequence,
            maxRetries: o,
            currentRetries: 0,
            dotType: this._priority2dotType[t]
          },
          l = LowPriorityModel.getInstance().isHasDownloaded(e);
        i.isHasDownloaded = l;
        this._queue.push(i);
        this._needsSort = true;
        this._state === r.Idle && this._processNextTask();
      }
    }
  }
  isBundlePreLoaded(e) {
    return resManager.isBundlePreLoaded(e);
  }
  getAverageDownloadTime() {
    return 0 === this._stats.completedBundleCount ? 0 : this._stats.totalDownloadTime / this._stats.completedBundleCount;
  }
  getLastBundleDownloadTime() {
    return this._stats.lastBundleDownloadTime;
  }
  getLastBundleAvgProgressTime() {
    return this._stats.lastBundleAvgProgressTime;
  }
  getDownloadStats() {
    return {
      averageDownloadTime: this.getAverageDownloadTime(),
      lastBundleDownloadTime: this._stats.lastBundleDownloadTime,
      lastBundleAvgProgressTime: this._stats.lastBundleAvgProgressTime,
      completedCount: this._stats.completedBundleCount,
      totalDownloadTime: this._stats.totalDownloadTime,
      totalDelayTime: this._stats.totalDelayTime
    };
  }
  pause() {
    this._state !== r.Paused && (this._state = r.Paused);
  }
  resume() {
    if (this._state === r.Paused) {
      this._state = r.Resuming;
      this._processNextTask();
    }
  }
  stop() {
    if (null !== this._delayTimer) {
      clearTimeout(this._delayTimer);
      this._delayTimer = null;
    }
    this._state = r.Stopped;
    this._needsSort = false;
    this._currentTask = null;
    this._queue = [];
    this._allowNonCached = false;
    this._priorityStats.clear();
  }
  @mj.traitEvent("LowBunLoader_getDelay")
  _getNextTaskDelay(e) {
    return e && e.isHasDownloaded ? 0 : this.TASK_INTERVAL_DELAY;
  }
  _sortQueue() {
    if (this._queue.length <= 1) this._needsSort = false;else {
      this._queue.sort(function (e, t) {
        if (e.isHasDownloaded !== t.isHasDownloaded) return e.isHasDownloaded ? -1 : 1;
        var o = e.degradeRound || 0,
          n = t.degradeRound || 0;
        return o !== n ? o - n : e.priority !== t.priority ? e.priority - t.priority : e.sequence - t.sequence;
      });
      this._needsSort = false;
    }
  }
  _processNextTask() {
    this._canProcessTask() && this.pNextTask();
  }
  @mj.traitEvent("LowBunLoader_pNextTask")
  pNextTask() {
    var e = this,
      t = this._getNextTask();
    t && this._executeDownloadTask(t).then(function () {
      return e._handleTaskSuccess(t);
    }).catch(function (o) {
      return e._handleTaskFailure(t, o);
    }).then(function () {
      return e._continueAfterDelay(t);
    }).then(function () {
      return e._continueProcess();
    });
  }
  _continueProcess() {
    this._state === r.Delaying && (this._state = r.Idle);
    this._state !== r.Stopped && this._state !== r.Paused && this._processNextTask();
  }
  _canProcessTask() {
    this._state === r.Resuming && (this._state = r.Idle);
    if (this._state === r.Processing || this._state === r.ProcessingCached) {
      if (this._currentTask) return false;
      this._state = r.Idle;
    }
    if (this._state === r.Delaying) return false;
    if (this._state === r.Stopped || this._state === r.Paused) return false;
    if (0 === this._queue.length) {
      this._state = r.Idle;
      return false;
    }
    return true;
  }
  _getNextTask() {
    this._needsSort && this._sortQueue();
    if (this._allowNonCached) this._currentTask = this._queue.shift();else {
      var e = this._queue.findIndex(function (e) {
        return e.isHasDownloaded;
      });
      if (-1 === e) {
        this._state = r.Paused;
        return null;
      }
      this._currentTask = this._queue.splice(e, 1)[0];
    }
    if (!this._currentTask) return null;
    if (this._currentTask.isHasDownloaded) {
      this._state = r.ProcessingCached;
    } else {
      this._state = r.Processing;
    }
    return this._currentTask;
  }
  _clearAllDownloadedFlags() {
    var e, t;
    LowPriorityModel.getInstance().clearAllDownloadedFlags();
    try {
      for (var o = __values(this._queue), n = o.next(); !n.done; n = o.next()) {
        var r = n.value;
        r.isHasDownloaded && (r.isHasDownloaded = false);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (t = o.return) && t.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
    this._needsSort = true;
  }
  _checkCacheMissing(e) {
    if (e.isHasDownloaded) {
      this._stats.lastBundleAvgProgressTime > this.DOWNLOADED_PRIORITY_DELAY && this._clearAllDownloadedFlags();
    }
  }
  _checkPriorityLimit(e) {
    var t = e.priority,
      o = this._priorityLimitConfig.get(e.originalPriority);
    if (o) {
      var n = this._priorityStats.get(t);
      if (!n) {
        n = {
          continuousCount: 0,
          startTime: Date.now(),
          degradeRound: 1
        };
        this._priorityStats.set(t, n);
      }
      n.continuousCount++;
      var i = (Date.now() - n.startTime) / 1000,
        r = n.continuousCount >= o.maxContinuousCount,
        a = i > o.timeoutSeconds;
      if (r || a) {
        a && this._onPriorityTimeout(e, t, n.continuousCount, i, o.timeoutSeconds);
        this._degradePriorityTasks(t, n.degradeRound) > 0 && (r ? o.maxContinuousCount : (i.toFixed(2), o.timeoutSeconds));
        n.continuousCount = 0;
        n.startTime = Date.now();
        n.degradeRound++;
      }
    }
  }
  _degradePriorityTasks(e, t) {
    var o,
      n,
      r = 0;
    try {
      for (var a = __values(this._queue), l = a.next(); !l.done; l = a.next()) {
        var s = l.value,
          c = s.degradeRound || 0;
        if (s.priority === e && c === t - 1) {
          s.degradeRound = t;
          r++;
        }
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (n = a.return) && n.call(a);
      } finally {
        if (o) throw o.error;
      }
    }
    r > 0 && (this._needsSort = true);
    return r;
  }
  _onPriorityTimeout(e, t, o, n) {
    if (!this._hasDotType.has(e.originalPriority)) {
      this._hasDotType.set(e.originalPriority, true);
      e.originalPriority, n.toFixed(2);
      e.dotType && DotGameBundleDelay.dot(e.dotType);
    }
  }
  _continueAfterDelay(e) {
    var t = this._getNextTaskDelay(e);
    if (t > 0 && this._queue.length > 0) {
      this._state === r.Idle && (this._state = r.Delaying);
      var o = {
        duration: t
      };
      this._stats.totalDelayTime += t;
      return this._executeDelayTask(o);
    }
    return Promise.resolve();
  }
  @mj.traitEvent("LowBunLoader_taskSuccess")
  _handleTaskSuccess(e) {
    this._checkCacheMissing(e);
    this._checkPriorityLimit(e);
    this._currentTask = null;
    this._state !== r.Processing && this._state !== r.ProcessingCached || (this._state = r.Idle);
  }
  _handleTaskFailure(e) {
    e.isHasDownloaded && this._clearAllDownloadedFlags();
    e.currentRetries++;
    if (e.currentRetries < e.maxRetries) {
      this._queue.unshift(e);
      this._needsSort = true;
    }
    this._currentTask = null;
    this._state !== r.Processing && this._state !== r.ProcessingCached || (this._state = r.Idle);
  }
  _executeDelayTask(e) {
    var t = this;
    return new Promise(function (o) {
      null !== t._delayTimer && clearTimeout(t._delayTimer);
      t._delayTimer = setTimeout(function () {
        t._delayTimer = null;
        o();
      }, 1000 * e.duration);
    });
  }
  _executeDownloadTask(e) {
    return this._downloadBundle(e).then(function () {
      LowPriorityModel.getInstance().saveToLocal(e.bundleName);
    }).catch(function (e) {
      throw e;
    });
  }
  _downloadBundle(e) {
    var t = this;
    this._stats.lastBundleStartTime = Date.now();
    this._stats.lastProgressTime = this._stats.lastBundleStartTime;
    this._stats.lastProgressFinished = 0;
    var o = 0;
    return new Promise(function (n, i) {
      resManager.preDownLoadByDir("", function (e, n) {
        o = n;
        var i = Date.now();
        t._stats.lastProgressTime = i;
        t._stats.lastProgressFinished = e;
      }, function (e, r) {
        if (r) i(r);else {
          var a = (Date.now() - t._stats.lastBundleStartTime) / 1000;
          t._stats.lastBundleDownloadTime = a;
          t._stats.lastBundleAvgProgressTime = o > 0 ? a / o : 0;
          t._stats.totalDownloadTime += a;
          t._stats.completedBundleCount++;
          n();
        }
      }, e.bundleName);
    });
  }
}