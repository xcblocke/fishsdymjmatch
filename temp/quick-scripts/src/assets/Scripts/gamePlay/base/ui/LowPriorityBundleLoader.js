"use strict";
cc._RF.push(module, 'e79a01hI1VFMLwSDllMWRBU', 'LowPriorityBundleLoader');
// Scripts/gamePlay/base/ui/LowPriorityBundleLoader.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ELowPriorityDotType = exports.ELowPriorityBundlePriority = void 0;
var ResManager_1 = require("../../../framework/manager/ResManager");
var DGameBundleDelay_1 = require("../../dot/DGameBundleDelay");
var LowPriorityModel_1 = require("./LowPriorityModel");
var r;
(function (r) {
    r[r["Stopped"] = 0] = "Stopped";
    r[r["Idle"] = 1] = "Idle";
    r[r["Processing"] = 2] = "Processing";
    r[r["Paused"] = 3] = "Paused";
    r[r["Resuming"] = 4] = "Resuming";
    r[r["Delaying"] = 5] = "Delaying";
    r[r["ProcessingCached"] = 6] = "ProcessingCached";
})(r || (r = {}));
var ELowPriorityBundlePriority;
(function (ELowPriorityBundlePriority) {
    ELowPriorityBundlePriority[ELowPriorityBundlePriority["DefaultLocal"] = 50] = "DefaultLocal";
    ELowPriorityBundlePriority[ELowPriorityBundlePriority["DefaultHightPriority"] = 100] = "DefaultHightPriority";
    ELowPriorityBundlePriority[ELowPriorityBundlePriority["DefaultCardXingyunHuaPai"] = 300] = "DefaultCardXingyunHuaPai";
    ELowPriorityBundlePriority[ELowPriorityBundlePriority["DefaultDaXiao"] = 500] = "DefaultDaXiao";
    ELowPriorityBundlePriority[ELowPriorityBundlePriority["Default"] = 1000] = "Default";
})(ELowPriorityBundlePriority = exports.ELowPriorityBundlePriority || (exports.ELowPriorityBundlePriority = {}));
var ELowPriorityDotType;
(function (ELowPriorityDotType) {
    ELowPriorityDotType[ELowPriorityDotType["XingyunHuapai"] = 1] = "XingyunHuapai";
    ELowPriorityDotType[ELowPriorityDotType["Daxiao"] = 2] = "Daxiao";
})(ELowPriorityDotType = exports.ELowPriorityDotType || (exports.ELowPriorityDotType = {}));
var LowPriorityBundleLoader = /** @class */ (function () {
    function LowPriorityBundleLoader() {
        this._queue = [];
        this._currentTask = null;
        this._state = r.Stopped;
        this._needsSort = false;
        this._taskSequence = 0;
        this.TASK_INTERVAL_DELAY = 0.5;
        this.DOWNLOADED_PRIORITY_DELAY = 0.2;
        this._stats = {
            totalDownloadTime: 0,
            completedBundleCount: 0,
            lastBundleStartTime: 0,
            lastBundleDownloadTime: 0,
            lastBundleAvgProgressTime: 0,
            lastProgressTime: 0,
            lastProgressFinished: 0,
            totalDelayTime: 0
        };
        this._priorityLimitConfig = new Map();
        this._priorityStats = new Map();
        this._allowNonCached = false;
        this._delayTimer = null;
        this._priority2dotType = null;
        this._hasDotType = new Map();
        var _e = {};
        _e[ELowPriorityBundlePriority.DefaultCardXingyunHuaPai] = ELowPriorityDotType.XingyunHuapai;
        _e[ELowPriorityBundlePriority.DefaultDaXiao] = ELowPriorityDotType.Daxiao;
        this._priority2dotType = _e;
    }
    LowPriorityBundleLoader.getInstance = function () {
        this._instance || (this._instance = new LowPriorityBundleLoader());
        return this._instance;
    };
    LowPriorityBundleLoader.prototype.setPriorityLimit = function (e, t, o) {
        t <= 0 || o <= 0 || this._priorityLimitConfig.set(e, {
            maxContinuousCount: t,
            timeoutSeconds: o
        });
    };
    LowPriorityBundleLoader.prototype.clearPriorityLimit = function (e) {
        if (void 0 !== e) {
            this._priorityLimitConfig.delete(e);
            this._priorityStats.delete(e);
        }
        else {
            this._priorityLimitConfig.clear();
            this._priorityStats.clear();
        }
    };
    LowPriorityBundleLoader.prototype.onStart = function () { };
    LowPriorityBundleLoader.prototype.changePriority = function (e, t) {
        var o, n;
        try {
            for (var r = __values(this._queue), a = r.next(); !a.done; a = r.next()) {
                var l = a.value;
                l.originalPriority == e && (l.priority = t);
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
        this._needsSort = true;
    };
    LowPriorityBundleLoader.prototype.setAllowNonCached = function (e) {
        this._allowNonCached = e;
    };
    LowPriorityBundleLoader.prototype.start = function (e) {
        if (e === void 0) { e = false; }
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
        }
        else
            this._queue.length > 0 && this._state !== r.Paused && this._state !== r.Resuming && this._state !== r.Delaying && this._processNextTask();
    };
    LowPriorityBundleLoader.prototype.addTask = function (e, t, o) {
        if (t === void 0) { t = ELowPriorityBundlePriority.Default; }
        if (o === void 0) { o = 1; }
        if (e && "string" == typeof e && !(ResManager_1.resManager.isBundlePreLoaded(e) || this._currentTask && this._currentTask.bundleName === e)) {
            var n = this._queue.find(function (t) {
                return t.bundleName === e;
            });
            if (n) {
                n.priority = Math.min(n.priority, t);
                n.maxRetries = Math.max(n.maxRetries, o);
                this._needsSort = true;
            }
            else {
                var i = {
                    bundleName: e,
                    priority: t,
                    originalPriority: t,
                    sequence: ++this._taskSequence,
                    maxRetries: o,
                    currentRetries: 0,
                    dotType: this._priority2dotType[t]
                }, l = LowPriorityModel_1.default.getInstance().isHasDownloaded(e);
                i.isHasDownloaded = l;
                this._queue.push(i);
                this._needsSort = true;
                this._state === r.Idle && this._processNextTask();
            }
        }
    };
    LowPriorityBundleLoader.prototype.isBundlePreLoaded = function (e) {
        return ResManager_1.resManager.isBundlePreLoaded(e);
    };
    LowPriorityBundleLoader.prototype.getAverageDownloadTime = function () {
        return 0 === this._stats.completedBundleCount ? 0 : this._stats.totalDownloadTime / this._stats.completedBundleCount;
    };
    LowPriorityBundleLoader.prototype.getLastBundleDownloadTime = function () {
        return this._stats.lastBundleDownloadTime;
    };
    LowPriorityBundleLoader.prototype.getLastBundleAvgProgressTime = function () {
        return this._stats.lastBundleAvgProgressTime;
    };
    LowPriorityBundleLoader.prototype.getDownloadStats = function () {
        return {
            averageDownloadTime: this.getAverageDownloadTime(),
            lastBundleDownloadTime: this._stats.lastBundleDownloadTime,
            lastBundleAvgProgressTime: this._stats.lastBundleAvgProgressTime,
            completedCount: this._stats.completedBundleCount,
            totalDownloadTime: this._stats.totalDownloadTime,
            totalDelayTime: this._stats.totalDelayTime
        };
    };
    LowPriorityBundleLoader.prototype.pause = function () {
        this._state !== r.Paused && (this._state = r.Paused);
    };
    LowPriorityBundleLoader.prototype.resume = function () {
        if (this._state === r.Paused) {
            this._state = r.Resuming;
            this._processNextTask();
        }
    };
    LowPriorityBundleLoader.prototype.stop = function () {
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
    };
    LowPriorityBundleLoader.prototype._getNextTaskDelay = function (e) {
        return e && e.isHasDownloaded ? 0 : this.TASK_INTERVAL_DELAY;
    };
    LowPriorityBundleLoader.prototype._sortQueue = function () {
        if (this._queue.length <= 1)
            this._needsSort = false;
        else {
            this._queue.sort(function (e, t) {
                if (e.isHasDownloaded !== t.isHasDownloaded)
                    return e.isHasDownloaded ? -1 : 1;
                var o = e.degradeRound || 0, n = t.degradeRound || 0;
                return o !== n ? o - n : e.priority !== t.priority ? e.priority - t.priority : e.sequence - t.sequence;
            });
            this._needsSort = false;
        }
    };
    LowPriorityBundleLoader.prototype._processNextTask = function () {
        this._canProcessTask() && this.pNextTask();
    };
    LowPriorityBundleLoader.prototype.pNextTask = function () {
        var e = this, t = this._getNextTask();
        t && this._executeDownloadTask(t).then(function () {
            return e._handleTaskSuccess(t);
        }).catch(function (o) {
            return e._handleTaskFailure(t, o);
        }).then(function () {
            return e._continueAfterDelay(t);
        }).then(function () {
            return e._continueProcess();
        });
    };
    LowPriorityBundleLoader.prototype._continueProcess = function () {
        this._state === r.Delaying && (this._state = r.Idle);
        this._state !== r.Stopped && this._state !== r.Paused && this._processNextTask();
    };
    LowPriorityBundleLoader.prototype._canProcessTask = function () {
        this._state === r.Resuming && (this._state = r.Idle);
        if (this._state === r.Processing || this._state === r.ProcessingCached) {
            if (this._currentTask)
                return false;
            this._state = r.Idle;
        }
        if (this._state === r.Delaying)
            return false;
        if (this._state === r.Stopped || this._state === r.Paused)
            return false;
        if (0 === this._queue.length) {
            this._state = r.Idle;
            return false;
        }
        return true;
    };
    LowPriorityBundleLoader.prototype._getNextTask = function () {
        this._needsSort && this._sortQueue();
        if (this._allowNonCached)
            this._currentTask = this._queue.shift();
        else {
            var e = this._queue.findIndex(function (e) {
                return e.isHasDownloaded;
            });
            if (-1 === e) {
                this._state = r.Paused;
                return null;
            }
            this._currentTask = this._queue.splice(e, 1)[0];
        }
        if (!this._currentTask)
            return null;
        if (this._currentTask.isHasDownloaded) {
            this._state = r.ProcessingCached;
        }
        else {
            this._state = r.Processing;
        }
        return this._currentTask;
    };
    LowPriorityBundleLoader.prototype._clearAllDownloadedFlags = function () {
        var e, t;
        LowPriorityModel_1.default.getInstance().clearAllDownloadedFlags();
        try {
            for (var o = __values(this._queue), n = o.next(); !n.done; n = o.next()) {
                var r = n.value;
                r.isHasDownloaded && (r.isHasDownloaded = false);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (t = o.return) && t.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        this._needsSort = true;
    };
    LowPriorityBundleLoader.prototype._checkCacheMissing = function (e) {
        if (e.isHasDownloaded) {
            this._stats.lastBundleAvgProgressTime > this.DOWNLOADED_PRIORITY_DELAY && this._clearAllDownloadedFlags();
        }
    };
    LowPriorityBundleLoader.prototype._checkPriorityLimit = function (e) {
        var t = e.priority, o = this._priorityLimitConfig.get(e.originalPriority);
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
            var i = (Date.now() - n.startTime) / 1000, r = n.continuousCount >= o.maxContinuousCount, a = i > o.timeoutSeconds;
            if (r || a) {
                a && this._onPriorityTimeout(e, t, n.continuousCount, i, o.timeoutSeconds);
                this._degradePriorityTasks(t, n.degradeRound) > 0 && (r ? o.maxContinuousCount : (i.toFixed(2), o.timeoutSeconds));
                n.continuousCount = 0;
                n.startTime = Date.now();
                n.degradeRound++;
            }
        }
    };
    LowPriorityBundleLoader.prototype._degradePriorityTasks = function (e, t) {
        var o, n, r = 0;
        try {
            for (var a = __values(this._queue), l = a.next(); !l.done; l = a.next()) {
                var s = l.value, c = s.degradeRound || 0;
                if (s.priority === e && c === t - 1) {
                    s.degradeRound = t;
                    r++;
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
                l && !l.done && (n = a.return) && n.call(a);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        r > 0 && (this._needsSort = true);
        return r;
    };
    LowPriorityBundleLoader.prototype._onPriorityTimeout = function (e, t, o, n) {
        if (!this._hasDotType.has(e.originalPriority)) {
            this._hasDotType.set(e.originalPriority, true);
            e.originalPriority, n.toFixed(2);
            e.dotType && DGameBundleDelay_1.DotGameBundleDelay.dot(e.dotType);
        }
    };
    LowPriorityBundleLoader.prototype._continueAfterDelay = function (e) {
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
    };
    LowPriorityBundleLoader.prototype._handleTaskSuccess = function (e) {
        this._checkCacheMissing(e);
        this._checkPriorityLimit(e);
        this._currentTask = null;
        this._state !== r.Processing && this._state !== r.ProcessingCached || (this._state = r.Idle);
    };
    LowPriorityBundleLoader.prototype._handleTaskFailure = function (e) {
        e.isHasDownloaded && this._clearAllDownloadedFlags();
        e.currentRetries++;
        if (e.currentRetries < e.maxRetries) {
            this._queue.unshift(e);
            this._needsSort = true;
        }
        this._currentTask = null;
        this._state !== r.Processing && this._state !== r.ProcessingCached || (this._state = r.Idle);
    };
    LowPriorityBundleLoader.prototype._executeDelayTask = function (e) {
        var t = this;
        return new Promise(function (o) {
            null !== t._delayTimer && clearTimeout(t._delayTimer);
            t._delayTimer = setTimeout(function () {
                t._delayTimer = null;
                o();
            }, 1000 * e.duration);
        });
    };
    LowPriorityBundleLoader.prototype._executeDownloadTask = function (e) {
        return this._downloadBundle(e).then(function () {
            LowPriorityModel_1.default.getInstance().saveToLocal(e.bundleName);
        }).catch(function (e) {
            throw e;
        });
    };
    LowPriorityBundleLoader.prototype._downloadBundle = function (e) {
        var t = this;
        this._stats.lastBundleStartTime = Date.now();
        this._stats.lastProgressTime = this._stats.lastBundleStartTime;
        this._stats.lastProgressFinished = 0;
        var o = 0;
        return new Promise(function (n, i) {
            ResManager_1.resManager.preDownLoadByDir("", function (e, n) {
                o = n;
                var i = Date.now();
                t._stats.lastProgressTime = i;
                t._stats.lastProgressFinished = e;
            }, function (e, r) {
                if (r)
                    i(r);
                else {
                    var a = (Date.now() - t._stats.lastBundleStartTime) / 1000;
                    t._stats.lastBundleDownloadTime = a;
                    t._stats.lastBundleAvgProgressTime = o > 0 ? a / o : 0;
                    t._stats.totalDownloadTime += a;
                    t._stats.completedBundleCount++;
                    n();
                }
            }, e.bundleName);
        });
    };
    LowPriorityBundleLoader._instance = null;
    __decorate([
        mj.traitEvent("LowBunLoader_onStart")
    ], LowPriorityBundleLoader.prototype, "onStart", null);
    __decorate([
        mj.traitEvent("LowBunLoader_start")
    ], LowPriorityBundleLoader.prototype, "start", null);
    __decorate([
        mj.traitEvent("LowBunLoader_getDelay")
    ], LowPriorityBundleLoader.prototype, "_getNextTaskDelay", null);
    __decorate([
        mj.traitEvent("LowBunLoader_pNextTask")
    ], LowPriorityBundleLoader.prototype, "pNextTask", null);
    __decorate([
        mj.traitEvent("LowBunLoader_taskSuccess")
    ], LowPriorityBundleLoader.prototype, "_handleTaskSuccess", null);
    return LowPriorityBundleLoader;
}());
exports.default = LowPriorityBundleLoader;

cc._RF.pop();