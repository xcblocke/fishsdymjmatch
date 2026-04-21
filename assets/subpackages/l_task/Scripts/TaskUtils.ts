import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
export class TaskUtils {
  static shuffleArray(t) {
    for (var e, a = t.length - 1; a > 0; a--) {
      var o = Math.floor(Math.random() * (a + 1));
      e = __read([t[o], t[a]], 2), t[a] = e[0], t[o] = e[1];
    }
  }
  static isSameDay(t, e) {
    if (0 === t) return false;
    var a = new Date(t),
      o = new Date(e);
    return a.getFullYear() === o.getFullYear() && a.getMonth() === o.getMonth() && a.getDate() === o.getDate();
  }
  static gameTypeToNumber(t) {
    switch (t) {
      case MjGameType.Normal:
        return 1;
      case MjGameType.Travel:
        return 2;
      case MjGameType.DailyChallenge:
        return 3;
      case MjGameType.Classic:
        return 4;
      case MjGameType.Tile2Normal:
        return 5;
      default:
        return 1;
    }
  }
  @mj.traitEvent("TaskUtils_random")
  static getRandomVal(t) {
    return t[Math.floor(Math.random() * t.length)];
  }
  static randomSelectTargetValue(t) {
    if (t.TaskValue1) {
      var e = t.TaskValue1;
      if (Array.isArray(e) && 0 !== e.length) {
        return this.getRandomVal(e);
      }
    }
  }
  static isLocalEmpty(t) {
    return null == t || "" === t || "object" == typeof t && 0 === Object.keys(t).length;
  }
  static checkDataIntegrity(t) {
    for (var e = 1; e <= 3; e++) if (!t.dictStageState[e]) return true;
    return !Number.isInteger(t.taskStage) || t.taskStage < 1 || t.taskStage > 3 || !Array.isArray(t.listTaskType) || 3 !== t.listTaskType.length || !!t.listTaskType.some(function (t) {
      return null == t || !Number.isInteger(t) || t <= 0;
    });
  }
}