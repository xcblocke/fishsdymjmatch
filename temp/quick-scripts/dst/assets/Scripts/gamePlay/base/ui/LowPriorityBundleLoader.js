
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/base/ui/LowPriorityBundleLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRUFBbUU7QUFDbkUsK0RBQWdFO0FBQ2hFLHVEQUFrRDtBQUNsRCxJQUFLLENBUUo7QUFSRCxXQUFLLENBQUM7SUFDSiwrQkFBVyxDQUFBO0lBQ1gseUJBQVEsQ0FBQTtJQUNSLHFDQUFjLENBQUE7SUFDZCw2QkFBVSxDQUFBO0lBQ1YsaUNBQVksQ0FBQTtJQUNaLGlDQUFZLENBQUE7SUFDWixpREFBb0IsQ0FBQTtBQUN0QixDQUFDLEVBUkksQ0FBQyxLQUFELENBQUMsUUFRTDtBQUNELElBQVksMEJBTVg7QUFORCxXQUFZLDBCQUEwQjtJQUNwQyw0RkFBaUIsQ0FBQTtJQUNqQiw2R0FBMEIsQ0FBQTtJQUMxQixxSEFBOEIsQ0FBQTtJQUM5QiwrRkFBbUIsQ0FBQTtJQUNuQixvRkFBYyxDQUFBO0FBQ2hCLENBQUMsRUFOVywwQkFBMEIsR0FBMUIsa0NBQTBCLEtBQTFCLGtDQUEwQixRQU1yQztBQUNELElBQVksbUJBR1g7QUFIRCxXQUFZLG1CQUFtQjtJQUM3QiwrRUFBaUIsQ0FBQTtJQUNqQixpRUFBVSxDQUFBO0FBQ1osQ0FBQyxFQUhXLG1CQUFtQixHQUFuQiwyQkFBbUIsS0FBbkIsMkJBQW1CLFFBRzlCO0FBQ0Q7SUF5QkU7UUF4QkEsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFdBQU0sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsd0JBQW1CLEdBQUcsR0FBRyxDQUFDO1FBQzFCLDhCQUF5QixHQUFHLEdBQUcsQ0FBQztRQUNoQyxXQUFNLEdBQUc7WUFDUCxpQkFBaUIsRUFBRSxDQUFDO1lBQ3BCLG9CQUFv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RCxBQW1ZQyxJQUFBO2tCQW5Zb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1Jlc01hbmFnZXInO1xuaW1wb3J0IHsgRG90R2FtZUJ1bmRsZURlbGF5IH0gZnJvbSAnLi4vLi4vZG90L0RHYW1lQnVuZGxlRGVsYXknO1xuaW1wb3J0IExvd1ByaW9yaXR5TW9kZWwgZnJvbSAnLi9Mb3dQcmlvcml0eU1vZGVsJztcbmVudW0gciB7XG4gIFN0b3BwZWQgPSAwLFxuICBJZGxlID0gMSxcbiAgUHJvY2Vzc2luZyA9IDIsXG4gIFBhdXNlZCA9IDMsXG4gIFJlc3VtaW5nID0gNCxcbiAgRGVsYXlpbmcgPSA1LFxuICBQcm9jZXNzaW5nQ2FjaGVkID0gNixcbn1cbmV4cG9ydCBlbnVtIEVMb3dQcmlvcml0eUJ1bmRsZVByaW9yaXR5IHtcbiAgRGVmYXVsdExvY2FsID0gNTAsXG4gIERlZmF1bHRIaWdodFByaW9yaXR5ID0gMTAwLFxuICBEZWZhdWx0Q2FyZFhpbmd5dW5IdWFQYWkgPSAzMDAsXG4gIERlZmF1bHREYVhpYW8gPSA1MDAsXG4gIERlZmF1bHQgPSAxMDAwLFxufVxuZXhwb3J0IGVudW0gRUxvd1ByaW9yaXR5RG90VHlwZSB7XG4gIFhpbmd5dW5IdWFwYWkgPSAxLFxuICBEYXhpYW8gPSAyLFxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIge1xuICBfcXVldWUgPSBbXTtcbiAgX2N1cnJlbnRUYXNrID0gbnVsbDtcbiAgX3N0YXRlID0gci5TdG9wcGVkO1xuICBfbmVlZHNTb3J0ID0gZmFsc2U7XG4gIF90YXNrU2VxdWVuY2UgPSAwO1xuICBUQVNLX0lOVEVSVkFMX0RFTEFZID0gMC41O1xuICBET1dOTE9BREVEX1BSSU9SSVRZX0RFTEFZID0gMC4yO1xuICBfc3RhdHMgPSB7XG4gICAgdG90YWxEb3dubG9hZFRpbWU6IDAsXG4gICAgY29tcGxldGVkQnVuZGxlQ291bnQ6IDAsXG4gICAgbGFzdEJ1bmRsZVN0YXJ0VGltZTogMCxcbiAgICBsYXN0QnVuZGxlRG93bmxvYWRUaW1lOiAwLFxuICAgIGxhc3RCdW5kbGVBdmdQcm9ncmVzc1RpbWU6IDAsXG4gICAgbGFzdFByb2dyZXNzVGltZTogMCxcbiAgICBsYXN0UHJvZ3Jlc3NGaW5pc2hlZDogMCxcbiAgICB0b3RhbERlbGF5VGltZTogMFxuICB9O1xuICBfcHJpb3JpdHlMaW1pdENvbmZpZyA9IG5ldyBNYXAoKTtcbiAgX3ByaW9yaXR5U3RhdHMgPSBuZXcgTWFwKCk7XG4gIF9hbGxvd05vbkNhY2hlZCA9IGZhbHNlO1xuICBfZGVsYXlUaW1lciA9IG51bGw7XG4gIF9wcmlvcml0eTJkb3RUeXBlID0gbnVsbDtcbiAgX2hhc0RvdFR5cGUgPSBuZXcgTWFwKCk7XG4gIHN0YXRpYyBfaW5zdGFuY2UgPSBudWxsO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB2YXIgX2UgPSB7fTtcbiAgICBfZVtFTG93UHJpb3JpdHlCdW5kbGVQcmlvcml0eS5EZWZhdWx0Q2FyZFhpbmd5dW5IdWFQYWldID0gRUxvd1ByaW9yaXR5RG90VHlwZS5YaW5neXVuSHVhcGFpO1xuICAgIF9lW0VMb3dQcmlvcml0eUJ1bmRsZVByaW9yaXR5LkRlZmF1bHREYVhpYW9dID0gRUxvd1ByaW9yaXR5RG90VHlwZS5EYXhpYW87XG4gICAgdGhpcy5fcHJpb3JpdHkyZG90VHlwZSA9IF9lO1xuICB9XG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICB0aGlzLl9pbnN0YW5jZSB8fCAodGhpcy5faW5zdGFuY2UgPSBuZXcgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIoKSk7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG4gIHNldFByaW9yaXR5TGltaXQoZSwgdCwgbykge1xuICAgIHQgPD0gMCB8fCBvIDw9IDAgfHwgdGhpcy5fcHJpb3JpdHlMaW1pdENvbmZpZy5zZXQoZSwge1xuICAgICAgbWF4Q29udGludW91c0NvdW50OiB0LFxuICAgICAgdGltZW91dFNlY29uZHM6IG9cbiAgICB9KTtcbiAgfVxuICBjbGVhclByaW9yaXR5TGltaXQoZSkge1xuICAgIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICAgIHRoaXMuX3ByaW9yaXR5TGltaXRDb25maWcuZGVsZXRlKGUpO1xuICAgICAgdGhpcy5fcHJpb3JpdHlTdGF0cy5kZWxldGUoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ByaW9yaXR5TGltaXRDb25maWcuY2xlYXIoKTtcbiAgICAgIHRoaXMuX3ByaW9yaXR5U3RhdHMuY2xlYXIoKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJMb3dCdW5Mb2FkZXJfb25TdGFydFwiKVxuICBvblN0YXJ0KCkge31cbiAgY2hhbmdlUHJpb3JpdHkoZSwgdCkge1xuICAgIHZhciBvLCBuO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciByID0gX192YWx1ZXModGhpcy5fcXVldWUpLCBhID0gci5uZXh0KCk7ICFhLmRvbmU7IGEgPSByLm5leHQoKSkge1xuICAgICAgICB2YXIgbCA9IGEudmFsdWU7XG4gICAgICAgIGwub3JpZ2luYWxQcmlvcml0eSA9PSBlICYmIChsLnByaW9yaXR5ID0gdCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGEgJiYgIWEuZG9uZSAmJiAobiA9IHIucmV0dXJuKSAmJiBuLmNhbGwocik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fbmVlZHNTb3J0ID0gdHJ1ZTtcbiAgfVxuICBzZXRBbGxvd05vbkNhY2hlZChlKSB7XG4gICAgdGhpcy5fYWxsb3dOb25DYWNoZWQgPSBlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTG93QnVuTG9hZGVyX3N0YXJ0XCIpXG4gIHN0YXJ0KGUgPSBmYWxzZSkge1xuICAgIGUgfHwgdGhpcy5vblN0YXJ0KCk7XG4gICAgaWYgKGUpIHtcbiAgICAgIHZhciB0ID0gIXRoaXMuX2FsbG93Tm9uQ2FjaGVkO1xuICAgICAgdGhpcy5fYWxsb3dOb25DYWNoZWQgPSB0cnVlO1xuICAgICAgaWYgKHQgJiYgdGhpcy5fc3RhdGUgPT09IHIuUGF1c2VkKSB7XG4gICAgICAgIHRoaXMucmVzdW1lKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0YXRlID09PSByLlN0b3BwZWQpIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gci5JZGxlO1xuICAgICAgdGhpcy5fcHJvY2Vzc05leHRUYXNrKCk7XG4gICAgfSBlbHNlIHRoaXMuX3F1ZXVlLmxlbmd0aCA+IDAgJiYgdGhpcy5fc3RhdGUgIT09IHIuUGF1c2VkICYmIHRoaXMuX3N0YXRlICE9PSByLlJlc3VtaW5nICYmIHRoaXMuX3N0YXRlICE9PSByLkRlbGF5aW5nICYmIHRoaXMuX3Byb2Nlc3NOZXh0VGFzaygpO1xuICB9XG4gIGFkZFRhc2soZSwgdCA9IEVMb3dQcmlvcml0eUJ1bmRsZVByaW9yaXR5LkRlZmF1bHQsIG8gPSAxKSB7XG4gICAgaWYgKGUgJiYgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSAmJiAhKHJlc01hbmFnZXIuaXNCdW5kbGVQcmVMb2FkZWQoZSkgfHwgdGhpcy5fY3VycmVudFRhc2sgJiYgdGhpcy5fY3VycmVudFRhc2suYnVuZGxlTmFtZSA9PT0gZSkpIHtcbiAgICAgIHZhciBuID0gdGhpcy5fcXVldWUuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5idW5kbGVOYW1lID09PSBlO1xuICAgICAgfSk7XG4gICAgICBpZiAobikge1xuICAgICAgICBuLnByaW9yaXR5ID0gTWF0aC5taW4obi5wcmlvcml0eSwgdCk7XG4gICAgICAgIG4ubWF4UmV0cmllcyA9IE1hdGgubWF4KG4ubWF4UmV0cmllcywgbyk7XG4gICAgICAgIHRoaXMuX25lZWRzU29ydCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaSA9IHtcbiAgICAgICAgICAgIGJ1bmRsZU5hbWU6IGUsXG4gICAgICAgICAgICBwcmlvcml0eTogdCxcbiAgICAgICAgICAgIG9yaWdpbmFsUHJpb3JpdHk6IHQsXG4gICAgICAgICAgICBzZXF1ZW5jZTogKyt0aGlzLl90YXNrU2VxdWVuY2UsXG4gICAgICAgICAgICBtYXhSZXRyaWVzOiBvLFxuICAgICAgICAgICAgY3VycmVudFJldHJpZXM6IDAsXG4gICAgICAgICAgICBkb3RUeXBlOiB0aGlzLl9wcmlvcml0eTJkb3RUeXBlW3RdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsID0gTG93UHJpb3JpdHlNb2RlbC5nZXRJbnN0YW5jZSgpLmlzSGFzRG93bmxvYWRlZChlKTtcbiAgICAgICAgaS5pc0hhc0Rvd25sb2FkZWQgPSBsO1xuICAgICAgICB0aGlzLl9xdWV1ZS5wdXNoKGkpO1xuICAgICAgICB0aGlzLl9uZWVkc1NvcnQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9PT0gci5JZGxlICYmIHRoaXMuX3Byb2Nlc3NOZXh0VGFzaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpc0J1bmRsZVByZUxvYWRlZChlKSB7XG4gICAgcmV0dXJuIHJlc01hbmFnZXIuaXNCdW5kbGVQcmVMb2FkZWQoZSk7XG4gIH1cbiAgZ2V0QXZlcmFnZURvd25sb2FkVGltZSgpIHtcbiAgICByZXR1cm4gMCA9PT0gdGhpcy5fc3RhdHMuY29tcGxldGVkQnVuZGxlQ291bnQgPyAwIDogdGhpcy5fc3RhdHMudG90YWxEb3dubG9hZFRpbWUgLyB0aGlzLl9zdGF0cy5jb21wbGV0ZWRCdW5kbGVDb3VudDtcbiAgfVxuICBnZXRMYXN0QnVuZGxlRG93bmxvYWRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0cy5sYXN0QnVuZGxlRG93bmxvYWRUaW1lO1xuICB9XG4gIGdldExhc3RCdW5kbGVBdmdQcm9ncmVzc1RpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRzLmxhc3RCdW5kbGVBdmdQcm9ncmVzc1RpbWU7XG4gIH1cbiAgZ2V0RG93bmxvYWRTdGF0cygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXZlcmFnZURvd25sb2FkVGltZTogdGhpcy5nZXRBdmVyYWdlRG93bmxvYWRUaW1lKCksXG4gICAgICBsYXN0QnVuZGxlRG93bmxvYWRUaW1lOiB0aGlzLl9zdGF0cy5sYXN0QnVuZGxlRG93bmxvYWRUaW1lLFxuICAgICAgbGFzdEJ1bmRsZUF2Z1Byb2dyZXNzVGltZTogdGhpcy5fc3RhdHMubGFzdEJ1bmRsZUF2Z1Byb2dyZXNzVGltZSxcbiAgICAgIGNvbXBsZXRlZENvdW50OiB0aGlzLl9zdGF0cy5jb21wbGV0ZWRCdW5kbGVDb3VudCxcbiAgICAgIHRvdGFsRG93bmxvYWRUaW1lOiB0aGlzLl9zdGF0cy50b3RhbERvd25sb2FkVGltZSxcbiAgICAgIHRvdGFsRGVsYXlUaW1lOiB0aGlzLl9zdGF0cy50b3RhbERlbGF5VGltZVxuICAgIH07XG4gIH1cbiAgcGF1c2UoKSB7XG4gICAgdGhpcy5fc3RhdGUgIT09IHIuUGF1c2VkICYmICh0aGlzLl9zdGF0ZSA9IHIuUGF1c2VkKTtcbiAgfVxuICByZXN1bWUoKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlID09PSByLlBhdXNlZCkge1xuICAgICAgdGhpcy5fc3RhdGUgPSByLlJlc3VtaW5nO1xuICAgICAgdGhpcy5fcHJvY2Vzc05leHRUYXNrKCk7XG4gICAgfVxuICB9XG4gIHN0b3AoKSB7XG4gICAgaWYgKG51bGwgIT09IHRoaXMuX2RlbGF5VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kZWxheVRpbWVyKTtcbiAgICAgIHRoaXMuX2RlbGF5VGltZXIgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZSA9IHIuU3RvcHBlZDtcbiAgICB0aGlzLl9uZWVkc1NvcnQgPSBmYWxzZTtcbiAgICB0aGlzLl9jdXJyZW50VGFzayA9IG51bGw7XG4gICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB0aGlzLl9hbGxvd05vbkNhY2hlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3ByaW9yaXR5U3RhdHMuY2xlYXIoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkxvd0J1bkxvYWRlcl9nZXREZWxheVwiKVxuICBfZ2V0TmV4dFRhc2tEZWxheShlKSB7XG4gICAgcmV0dXJuIGUgJiYgZS5pc0hhc0Rvd25sb2FkZWQgPyAwIDogdGhpcy5UQVNLX0lOVEVSVkFMX0RFTEFZO1xuICB9XG4gIF9zb3J0UXVldWUoKSB7XG4gICAgaWYgKHRoaXMuX3F1ZXVlLmxlbmd0aCA8PSAxKSB0aGlzLl9uZWVkc1NvcnQgPSBmYWxzZTtlbHNlIHtcbiAgICAgIHRoaXMuX3F1ZXVlLnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgaWYgKGUuaXNIYXNEb3dubG9hZGVkICE9PSB0LmlzSGFzRG93bmxvYWRlZCkgcmV0dXJuIGUuaXNIYXNEb3dubG9hZGVkID8gLTEgOiAxO1xuICAgICAgICB2YXIgbyA9IGUuZGVncmFkZVJvdW5kIHx8IDAsXG4gICAgICAgICAgbiA9IHQuZGVncmFkZVJvdW5kIHx8IDA7XG4gICAgICAgIHJldHVybiBvICE9PSBuID8gbyAtIG4gOiBlLnByaW9yaXR5ICE9PSB0LnByaW9yaXR5ID8gZS5wcmlvcml0eSAtIHQucHJpb3JpdHkgOiBlLnNlcXVlbmNlIC0gdC5zZXF1ZW5jZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fbmVlZHNTb3J0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIF9wcm9jZXNzTmV4dFRhc2soKSB7XG4gICAgdGhpcy5fY2FuUHJvY2Vzc1Rhc2soKSAmJiB0aGlzLnBOZXh0VGFzaygpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTG93QnVuTG9hZGVyX3BOZXh0VGFza1wiKVxuICBwTmV4dFRhc2soKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IHRoaXMuX2dldE5leHRUYXNrKCk7XG4gICAgdCAmJiB0aGlzLl9leGVjdXRlRG93bmxvYWRUYXNrKHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGUuX2hhbmRsZVRhc2tTdWNjZXNzKHQpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gZS5faGFuZGxlVGFza0ZhaWx1cmUodCwgbyk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZS5fY29udGludWVBZnRlckRlbGF5KHQpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGUuX2NvbnRpbnVlUHJvY2VzcygpO1xuICAgIH0pO1xuICB9XG4gIF9jb250aW51ZVByb2Nlc3MoKSB7XG4gICAgdGhpcy5fc3RhdGUgPT09IHIuRGVsYXlpbmcgJiYgKHRoaXMuX3N0YXRlID0gci5JZGxlKTtcbiAgICB0aGlzLl9zdGF0ZSAhPT0gci5TdG9wcGVkICYmIHRoaXMuX3N0YXRlICE9PSByLlBhdXNlZCAmJiB0aGlzLl9wcm9jZXNzTmV4dFRhc2soKTtcbiAgfVxuICBfY2FuUHJvY2Vzc1Rhc2soKSB7XG4gICAgdGhpcy5fc3RhdGUgPT09IHIuUmVzdW1pbmcgJiYgKHRoaXMuX3N0YXRlID0gci5JZGxlKTtcbiAgICBpZiAodGhpcy5fc3RhdGUgPT09IHIuUHJvY2Vzc2luZyB8fCB0aGlzLl9zdGF0ZSA9PT0gci5Qcm9jZXNzaW5nQ2FjaGVkKSB7XG4gICAgICBpZiAodGhpcy5fY3VycmVudFRhc2spIHJldHVybiBmYWxzZTtcbiAgICAgIHRoaXMuX3N0YXRlID0gci5JZGxlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhdGUgPT09IHIuRGVsYXlpbmcpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodGhpcy5fc3RhdGUgPT09IHIuU3RvcHBlZCB8fCB0aGlzLl9zdGF0ZSA9PT0gci5QYXVzZWQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoMCA9PT0gdGhpcy5fcXVldWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHIuSWRsZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgX2dldE5leHRUYXNrKCkge1xuICAgIHRoaXMuX25lZWRzU29ydCAmJiB0aGlzLl9zb3J0UXVldWUoKTtcbiAgICBpZiAodGhpcy5fYWxsb3dOb25DYWNoZWQpIHRoaXMuX2N1cnJlbnRUYXNrID0gdGhpcy5fcXVldWUuc2hpZnQoKTtlbHNlIHtcbiAgICAgIHZhciBlID0gdGhpcy5fcXVldWUuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmlzSGFzRG93bmxvYWRlZDtcbiAgICAgIH0pO1xuICAgICAgaWYgKC0xID09PSBlKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gci5QYXVzZWQ7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5fY3VycmVudFRhc2sgPSB0aGlzLl9xdWV1ZS5zcGxpY2UoZSwgMSlbMF07XG4gICAgfVxuICAgIGlmICghdGhpcy5fY3VycmVudFRhc2spIHJldHVybiBudWxsO1xuICAgIGlmICh0aGlzLl9jdXJyZW50VGFzay5pc0hhc0Rvd25sb2FkZWQpIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gci5Qcm9jZXNzaW5nQ2FjaGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHIuUHJvY2Vzc2luZztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRUYXNrO1xuICB9XG4gIF9jbGVhckFsbERvd25sb2FkZWRGbGFncygpIHtcbiAgICB2YXIgZSwgdDtcbiAgICBMb3dQcmlvcml0eU1vZGVsLmdldEluc3RhbmNlKCkuY2xlYXJBbGxEb3dubG9hZGVkRmxhZ3MoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbyA9IF9fdmFsdWVzKHRoaXMuX3F1ZXVlKSwgbiA9IG8ubmV4dCgpOyAhbi5kb25lOyBuID0gby5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHIgPSBuLnZhbHVlO1xuICAgICAgICByLmlzSGFzRG93bmxvYWRlZCAmJiAoci5pc0hhc0Rvd25sb2FkZWQgPSBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG4gJiYgIW4uZG9uZSAmJiAodCA9IG8ucmV0dXJuKSAmJiB0LmNhbGwobyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fbmVlZHNTb3J0ID0gdHJ1ZTtcbiAgfVxuICBfY2hlY2tDYWNoZU1pc3NpbmcoZSkge1xuICAgIGlmIChlLmlzSGFzRG93bmxvYWRlZCkge1xuICAgICAgdGhpcy5fc3RhdHMubGFzdEJ1bmRsZUF2Z1Byb2dyZXNzVGltZSA+IHRoaXMuRE9XTkxPQURFRF9QUklPUklUWV9ERUxBWSAmJiB0aGlzLl9jbGVhckFsbERvd25sb2FkZWRGbGFncygpO1xuICAgIH1cbiAgfVxuICBfY2hlY2tQcmlvcml0eUxpbWl0KGUpIHtcbiAgICB2YXIgdCA9IGUucHJpb3JpdHksXG4gICAgICBvID0gdGhpcy5fcHJpb3JpdHlMaW1pdENvbmZpZy5nZXQoZS5vcmlnaW5hbFByaW9yaXR5KTtcbiAgICBpZiAobykge1xuICAgICAgdmFyIG4gPSB0aGlzLl9wcmlvcml0eVN0YXRzLmdldCh0KTtcbiAgICAgIGlmICghbikge1xuICAgICAgICBuID0ge1xuICAgICAgICAgIGNvbnRpbnVvdXNDb3VudDogMCxcbiAgICAgICAgICBzdGFydFRpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgZGVncmFkZVJvdW5kOiAxXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3ByaW9yaXR5U3RhdHMuc2V0KHQsIG4pO1xuICAgICAgfVxuICAgICAgbi5jb250aW51b3VzQ291bnQrKztcbiAgICAgIHZhciBpID0gKERhdGUubm93KCkgLSBuLnN0YXJ0VGltZSkgLyAxMDAwLFxuICAgICAgICByID0gbi5jb250aW51b3VzQ291bnQgPj0gby5tYXhDb250aW51b3VzQ291bnQsXG4gICAgICAgIGEgPSBpID4gby50aW1lb3V0U2Vjb25kcztcbiAgICAgIGlmIChyIHx8IGEpIHtcbiAgICAgICAgYSAmJiB0aGlzLl9vblByaW9yaXR5VGltZW91dChlLCB0LCBuLmNvbnRpbnVvdXNDb3VudCwgaSwgby50aW1lb3V0U2Vjb25kcyk7XG4gICAgICAgIHRoaXMuX2RlZ3JhZGVQcmlvcml0eVRhc2tzKHQsIG4uZGVncmFkZVJvdW5kKSA+IDAgJiYgKHIgPyBvLm1heENvbnRpbnVvdXNDb3VudCA6IChpLnRvRml4ZWQoMiksIG8udGltZW91dFNlY29uZHMpKTtcbiAgICAgICAgbi5jb250aW51b3VzQ291bnQgPSAwO1xuICAgICAgICBuLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIG4uZGVncmFkZVJvdW5kKys7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIF9kZWdyYWRlUHJpb3JpdHlUYXNrcyhlLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBuLFxuICAgICAgciA9IDA7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGEgPSBfX3ZhbHVlcyh0aGlzLl9xdWV1ZSksIGwgPSBhLm5leHQoKTsgIWwuZG9uZTsgbCA9IGEubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gbC52YWx1ZSxcbiAgICAgICAgICBjID0gcy5kZWdyYWRlUm91bmQgfHwgMDtcbiAgICAgICAgaWYgKHMucHJpb3JpdHkgPT09IGUgJiYgYyA9PT0gdCAtIDEpIHtcbiAgICAgICAgICBzLmRlZ3JhZGVSb3VuZCA9IHQ7XG4gICAgICAgICAgcisrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGwgJiYgIWwuZG9uZSAmJiAobiA9IGEucmV0dXJuKSAmJiBuLmNhbGwoYSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgciA+IDAgJiYgKHRoaXMuX25lZWRzU29ydCA9IHRydWUpO1xuICAgIHJldHVybiByO1xuICB9XG4gIF9vblByaW9yaXR5VGltZW91dChlLCB0LCBvLCBuKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNEb3RUeXBlLmhhcyhlLm9yaWdpbmFsUHJpb3JpdHkpKSB7XG4gICAgICB0aGlzLl9oYXNEb3RUeXBlLnNldChlLm9yaWdpbmFsUHJpb3JpdHksIHRydWUpO1xuICAgICAgZS5vcmlnaW5hbFByaW9yaXR5LCBuLnRvRml4ZWQoMik7XG4gICAgICBlLmRvdFR5cGUgJiYgRG90R2FtZUJ1bmRsZURlbGF5LmRvdChlLmRvdFR5cGUpO1xuICAgIH1cbiAgfVxuICBfY29udGludWVBZnRlckRlbGF5KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX2dldE5leHRUYXNrRGVsYXkoZSk7XG4gICAgaWYgKHQgPiAwICYmIHRoaXMuX3F1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX3N0YXRlID09PSByLklkbGUgJiYgKHRoaXMuX3N0YXRlID0gci5EZWxheWluZyk7XG4gICAgICB2YXIgbyA9IHtcbiAgICAgICAgZHVyYXRpb246IHRcbiAgICAgIH07XG4gICAgICB0aGlzLl9zdGF0cy50b3RhbERlbGF5VGltZSArPSB0O1xuICAgICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGVEZWxheVRhc2sobyk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkxvd0J1bkxvYWRlcl90YXNrU3VjY2Vzc1wiKVxuICBfaGFuZGxlVGFza1N1Y2Nlc3MoZSkge1xuICAgIHRoaXMuX2NoZWNrQ2FjaGVNaXNzaW5nKGUpO1xuICAgIHRoaXMuX2NoZWNrUHJpb3JpdHlMaW1pdChlKTtcbiAgICB0aGlzLl9jdXJyZW50VGFzayA9IG51bGw7XG4gICAgdGhpcy5fc3RhdGUgIT09IHIuUHJvY2Vzc2luZyAmJiB0aGlzLl9zdGF0ZSAhPT0gci5Qcm9jZXNzaW5nQ2FjaGVkIHx8ICh0aGlzLl9zdGF0ZSA9IHIuSWRsZSk7XG4gIH1cbiAgX2hhbmRsZVRhc2tGYWlsdXJlKGUpIHtcbiAgICBlLmlzSGFzRG93bmxvYWRlZCAmJiB0aGlzLl9jbGVhckFsbERvd25sb2FkZWRGbGFncygpO1xuICAgIGUuY3VycmVudFJldHJpZXMrKztcbiAgICBpZiAoZS5jdXJyZW50UmV0cmllcyA8IGUubWF4UmV0cmllcykge1xuICAgICAgdGhpcy5fcXVldWUudW5zaGlmdChlKTtcbiAgICAgIHRoaXMuX25lZWRzU29ydCA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuX2N1cnJlbnRUYXNrID0gbnVsbDtcbiAgICB0aGlzLl9zdGF0ZSAhPT0gci5Qcm9jZXNzaW5nICYmIHRoaXMuX3N0YXRlICE9PSByLlByb2Nlc3NpbmdDYWNoZWQgfHwgKHRoaXMuX3N0YXRlID0gci5JZGxlKTtcbiAgfVxuICBfZXhlY3V0ZURlbGF5VGFzayhlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAobykge1xuICAgICAgbnVsbCAhPT0gdC5fZGVsYXlUaW1lciAmJiBjbGVhclRpbWVvdXQodC5fZGVsYXlUaW1lcik7XG4gICAgICB0Ll9kZWxheVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQuX2RlbGF5VGltZXIgPSBudWxsO1xuICAgICAgICBvKCk7XG4gICAgICB9LCAxMDAwICogZS5kdXJhdGlvbik7XG4gICAgfSk7XG4gIH1cbiAgX2V4ZWN1dGVEb3dubG9hZFRhc2soZSkge1xuICAgIHJldHVybiB0aGlzLl9kb3dubG9hZEJ1bmRsZShlKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIExvd1ByaW9yaXR5TW9kZWwuZ2V0SW5zdGFuY2UoKS5zYXZlVG9Mb2NhbChlLmJ1bmRsZU5hbWUpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH0pO1xuICB9XG4gIF9kb3dubG9hZEJ1bmRsZShlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMuX3N0YXRzLmxhc3RCdW5kbGVTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuX3N0YXRzLmxhc3RQcm9ncmVzc1RpbWUgPSB0aGlzLl9zdGF0cy5sYXN0QnVuZGxlU3RhcnRUaW1lO1xuICAgIHRoaXMuX3N0YXRzLmxhc3RQcm9ncmVzc0ZpbmlzaGVkID0gMDtcbiAgICB2YXIgbyA9IDA7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICByZXNNYW5hZ2VyLnByZURvd25Mb2FkQnlEaXIoXCJcIiwgZnVuY3Rpb24gKGUsIG4pIHtcbiAgICAgICAgbyA9IG47XG4gICAgICAgIHZhciBpID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdC5fc3RhdHMubGFzdFByb2dyZXNzVGltZSA9IGk7XG4gICAgICAgIHQuX3N0YXRzLmxhc3RQcm9ncmVzc0ZpbmlzaGVkID0gZTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlLCByKSB7XG4gICAgICAgIGlmIChyKSBpKHIpO2Vsc2Uge1xuICAgICAgICAgIHZhciBhID0gKERhdGUubm93KCkgLSB0Ll9zdGF0cy5sYXN0QnVuZGxlU3RhcnRUaW1lKSAvIDEwMDA7XG4gICAgICAgICAgdC5fc3RhdHMubGFzdEJ1bmRsZURvd25sb2FkVGltZSA9IGE7XG4gICAgICAgICAgdC5fc3RhdHMubGFzdEJ1bmRsZUF2Z1Byb2dyZXNzVGltZSA9IG8gPiAwID8gYSAvIG8gOiAwO1xuICAgICAgICAgIHQuX3N0YXRzLnRvdGFsRG93bmxvYWRUaW1lICs9IGE7XG4gICAgICAgICAgdC5fc3RhdHMuY29tcGxldGVkQnVuZGxlQ291bnQrKztcbiAgICAgICAgICBuKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGUuYnVuZGxlTmFtZSk7XG4gICAgfSk7XG4gIH1cbn0iXX0=