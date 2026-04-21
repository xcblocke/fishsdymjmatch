"use strict";
cc._RF.push(module, '809b2RnoNxH9p6KnenMrOXL', 'DateManager');
// Scripts/core/simulator/util/DateManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ETimePeriod = void 0;
exports.ETimePeriod = {
    Day: "day",
    Night: "night"
};
var DateManager = /** @class */ (function () {
    function DateManager() {
    }
    DateManager.getInstance = function () {
        this._instance || (this._instance = new DateManager());
        return this._instance;
    };
    DateManager.isDayTimeByHour = function (e) {
        return e >= this.DAY_START_HOUR && e < this.DAY_END_HOUR;
    };
    DateManager.getTimePeriodText = function (e) {
        return this.isDayTimeByHour(e) ? "白天" : "夜晚";
    };
    DateManager.prototype.getCurrentTime = function () {
        return new Date();
    };
    DateManager.prototype.getCurrentHour = function () {
        return new Date().getHours();
    };
    DateManager.prototype.getCurrentMinute = function () {
        return new Date().getMinutes();
    };
    DateManager.prototype.getCurrentSecond = function () {
        return new Date().getSeconds();
    };
    DateManager.prototype.getCurrentDayOfWeek = function () {
        return new Date().getDay();
    };
    DateManager.prototype.isDayTime = function () {
        var t = this.getCurrentHour();
        return t >= DateManager.DAY_START_HOUR && t < DateManager.DAY_END_HOUR;
    };
    DateManager.prototype.isNightTime = function () {
        return !this.isDayTime();
    };
    DateManager.prototype.getCurrentTimePeriod = function () {
        return this.isDayTime() ? exports.ETimePeriod.Day : exports.ETimePeriod.Night;
    };
    DateManager.prototype.getCurrentTimePeriodText = function () {
        return this.isDayTime() ? "白天" : "夜晚";
    };
    DateManager.prototype.getFormattedTime = function (e) {
        if (e === void 0) { e = "HH:mm:ss"; }
        var t = this.getCurrentTime(), o = this.padZero(t.getHours()), n = this.padZero(t.getMinutes()), i = this.padZero(t.getSeconds());
        return e.replace("HH", o).replace("mm", n).replace("ss", i);
    };
    DateManager.prototype.getFormattedDate = function (e) {
        if (e === void 0) { e = "YYYY-MM-DD"; }
        var t = this.getCurrentTime(), o = t.getFullYear().toString(), n = this.padZero(t.getMonth() + 1), i = this.padZero(t.getDate());
        return e.replace("YYYY", o).replace("MM", n).replace("DD", i);
    };
    DateManager.prototype.getFormattedDateTime = function (e) {
        if (e === void 0) { e = "YYYY-MM-DD HH:mm:ss"; }
        var t = this.getCurrentTime(), o = t.getFullYear().toString(), n = this.padZero(t.getMonth() + 1), i = this.padZero(t.getDate()), r = this.padZero(t.getHours()), a = this.padZero(t.getMinutes()), l = this.padZero(t.getSeconds());
        return e.replace("YYYY", o).replace("MM", n).replace("DD", i).replace("HH", r).replace("mm", a).replace("ss", l);
    };
    DateManager.prototype.padZero = function (e) {
        return e < 10 ? "0" + e : "" + e;
    };
    DateManager.prototype.getSecondsToNextPeriod = function () {
        var t = this.getCurrentTime(), o = t.getHours(), n = t.getMinutes(), i = t.getSeconds();
        return 3600 * (this.isDayTime() ? DateManager.DAY_END_HOUR : o < DateManager.DAY_START_HOUR ? DateManager.DAY_START_HOUR : DateManager.DAY_START_HOUR + 24) - (3600 * o + 60 * n + i);
    };
    DateManager.prototype.getDebugInfo = function () {
        var e = this.getCurrentTimePeriodText(), t = this.getFormattedTime(), o = this.getSecondsToNextPeriod();
        return "[DateManager] 当前时间: " + t + ", 时间段: " + e + ", 距离下个时间段: " + Math.floor(o / 60) + "分钟";
    };
    DateManager.prototype.isNewDay = function (e, t) {
        if (!e)
            return true;
        var o = new Date(e), n = new Date(t);
        return o.getFullYear() !== n.getFullYear() || o.getMonth() !== n.getMonth() || o.getDate() !== n.getDate();
    };
    DateManager.DAY_START_HOUR = 5;
    DateManager.DAY_END_HOUR = 19;
    DateManager._instance = null;
    return DateManager;
}());
exports.default = DateManager;

cc._RF.pop();