"use strict";
cc._RF.push(module, '01b975VVftEJKQ9ZRVL/Wmo', 'TimeStatManager');
// Scripts/gamePlay/base/TimeStat/TimeStatManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../../../Config");
var UserModel_1 = require("../../user/UserModel");
var TimeStatManager = /** @class */ (function () {
    function TimeStatManager() {
        this._timingStartPoint = 0;
        this._scheduleTimer = null;
        this.SYNC_INTERVAL = 3;
        this._isPaused = false;
    }
    TimeStatManager_1 = TimeStatManager;
    TimeStatManager.getInstance = function () {
        TimeStatManager_1._instance || (TimeStatManager_1._instance = new TimeStatManager_1());
        return TimeStatManager_1._instance;
    };
    TimeStatManager.prototype.init = function (e) {
        var t = this;
        if (!this._scheduleTimer) {
            this._timingStartPoint = Date.now();
            this._scheduleTimer = e.schedule(function () {
                t.syncTimeStats();
            }, this.SYNC_INTERVAL);
            cc.sys.os === cc.sys.OS_IOS && this.registerAdEvents();
        }
    };
    TimeStatManager.prototype.syncTimeStats = function () {
        if (!this._isPaused) {
            var e = Date.now(), t = e - this._timingStartPoint, o = Math.floor(t / 1000);
            if (o > 0) {
                this._timingStartPoint = e;
                UserModel_1.default.getInstance().addAppUseSecondsTime(o);
                mj.EventManager.emit(Config_1.EVT_TIME_STAT_UPDATE, o);
            }
        }
    };
    TimeStatManager.prototype.resetStartPoint = function () {
        this._timingStartPoint = Date.now();
    };
    TimeStatManager.prototype.getStartPoint = function () {
        return this._timingStartPoint;
    };
    TimeStatManager.prototype.isPaused = function () {
        return this._isPaused;
    };
    TimeStatManager.prototype.registerAdEvents = function () {
        mj.EventManager.on(Config_1.EVT_AD_SHOW_START, this.onAdShowStart, this);
        mj.EventManager.on(Config_1.EVT_AD_SHOW_END, this.onAdShowEnd, this);
    };
    TimeStatManager.prototype.unregisterAdEvents = function () {
        mj.EventManager.off(Config_1.EVT_AD_SHOW_START, this.onAdShowStart, this);
        mj.EventManager.off(Config_1.EVT_AD_SHOW_END, this.onAdShowEnd, this);
    };
    TimeStatManager.prototype.onAdShowStart = function () {
        this.syncTimeStats();
        this._isPaused = true;
    };
    TimeStatManager.prototype.onAdShowEnd = function () {
        this._isPaused = false;
        this.resetStartPoint();
    };
    TimeStatManager.prototype.destroy = function () {
        cc.sys.os === cc.sys.OS_IOS && this.unregisterAdEvents();
        this._scheduleTimer = null;
        this._isPaused = false;
    };
    var TimeStatManager_1;
    TimeStatManager._instance = null;
    TimeStatManager = TimeStatManager_1 = __decorate([
        mj.class("TimeStatManager")
    ], TimeStatManager);
    return TimeStatManager;
}());
exports.default = TimeStatManager;

cc._RF.pop();