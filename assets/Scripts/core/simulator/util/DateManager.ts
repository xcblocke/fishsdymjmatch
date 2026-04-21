export var ETimePeriod = {
  Day: "day",
  Night: "night"
};
export default class DateManager {
  static DAY_START_HOUR = 5;
  static DAY_END_HOUR = 19;
  static _instance = null;
  static getInstance() {
    this._instance || (this._instance = new DateManager());
    return this._instance;
  }
  static isDayTimeByHour(e) {
    return e >= this.DAY_START_HOUR && e < this.DAY_END_HOUR;
  }
  static getTimePeriodText(e) {
    return this.isDayTimeByHour(e) ? "白天" : "夜晚";
  }
  getCurrentTime() {
    return new Date();
  }
  getCurrentHour() {
    return new Date().getHours();
  }
  getCurrentMinute() {
    return new Date().getMinutes();
  }
  getCurrentSecond() {
    return new Date().getSeconds();
  }
  getCurrentDayOfWeek() {
    return new Date().getDay();
  }
  isDayTime() {
    var t = this.getCurrentHour();
    return t >= DateManager.DAY_START_HOUR && t < DateManager.DAY_END_HOUR;
  }
  isNightTime() {
    return !this.isDayTime();
  }
  getCurrentTimePeriod() {
    return this.isDayTime() ? ETimePeriod.Day : ETimePeriod.Night;
  }
  getCurrentTimePeriodText() {
    return this.isDayTime() ? "白天" : "夜晚";
  }
  getFormattedTime(e = "HH:mm:ss") {
    var t = this.getCurrentTime(),
      o = this.padZero(t.getHours()),
      n = this.padZero(t.getMinutes()),
      i = this.padZero(t.getSeconds());
    return e.replace("HH", o).replace("mm", n).replace("ss", i);
  }
  getFormattedDate(e = "YYYY-MM-DD") {
    var t = this.getCurrentTime(),
      o = t.getFullYear().toString(),
      n = this.padZero(t.getMonth() + 1),
      i = this.padZero(t.getDate());
    return e.replace("YYYY", o).replace("MM", n).replace("DD", i);
  }
  getFormattedDateTime(e = "YYYY-MM-DD HH:mm:ss") {
    var t = this.getCurrentTime(),
      o = t.getFullYear().toString(),
      n = this.padZero(t.getMonth() + 1),
      i = this.padZero(t.getDate()),
      r = this.padZero(t.getHours()),
      a = this.padZero(t.getMinutes()),
      l = this.padZero(t.getSeconds());
    return e.replace("YYYY", o).replace("MM", n).replace("DD", i).replace("HH", r).replace("mm", a).replace("ss", l);
  }
  padZero(e) {
    return e < 10 ? "0" + e : "" + e;
  }
  getSecondsToNextPeriod() {
    var t = this.getCurrentTime(),
      o = t.getHours(),
      n = t.getMinutes(),
      i = t.getSeconds();
    return 3600 * (this.isDayTime() ? DateManager.DAY_END_HOUR : o < DateManager.DAY_START_HOUR ? DateManager.DAY_START_HOUR : DateManager.DAY_START_HOUR + 24) - (3600 * o + 60 * n + i);
  }
  getDebugInfo() {
    var e = this.getCurrentTimePeriodText(),
      t = this.getFormattedTime(),
      o = this.getSecondsToNextPeriod();
    return "[DateManager] 当前时间: " + t + ", 时间段: " + e + ", 距离下个时间段: " + Math.floor(o / 60) + "分钟";
  }
  isNewDay(e, t) {
    if (!e) return true;
    var o = new Date(e),
      n = new Date(t);
    return o.getFullYear() !== n.getFullYear() || o.getMonth() !== n.getMonth() || o.getDate() !== n.getDate();
  }
}