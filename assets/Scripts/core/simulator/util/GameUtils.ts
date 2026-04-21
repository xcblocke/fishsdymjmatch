import ControllerManager from '../../../framework/manager/ControllerManager';
import { playSpineAnim } from '../../../framework/utils/CommonUtils';
import { DotGameGetItem } from '../../../gamePlay/dot/DGameGetItem';
import TravelGameModel from '../../../gamePlay/travel/model/TravelGameModel';
import { ItemTypeKey, EItemType } from '../../../user/IUserData';
import UserModel from '../../../gamePlay/user/UserModel';
import ExtractTool from '../../extractQuestion/ExtractTool';
import { GameInteraction } from '../../../GameInteraction/GameInteraction';
import { EGameInputEnum } from '../../../simulator/constant/GameInputEnum';
import { MjGameType, ItemType2Id } from '../constant/GameTypeEnums';
import Tile2NormalGameData from '../data/Tile2NormalGameData';
export default class GameUtils {
  static randomInt(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
  }
  static randomFloat(e, t) {
    return Math.random() * (t - e) + e;
  }
  static clamp(e, t, o) {
    return Math.min(Math.max(e, t), o);
  }
  static lerp(e, t, o) {
    return e + (t - e) * o;
  }
  static degreesToRadians(e) {
    return e * Math.PI / 180;
  }
  static radiansToDegrees(e) {
    return 180 * e / Math.PI;
  }
  static distance(e, t, o, n) {
    var i = o - e,
      r = n - t;
    return Math.sqrt(i * i + r * r);
  }
  static distance3D(e, t, o, n, i, r) {
    var a = n - e,
      l = i - t,
      s = r - o;
    return Math.sqrt(a * a + l * l + s * s);
  }
  static shuffleArray(e) {
    for (var t, o = [...e], r = o.length - 1; r > 0; r--) {
      var a = Math.floor(Math.random() * (r + 1));
      t = __read([o[a], o[r]], 2), o[r] = t[0], o[a] = t[1];
    }
    return o;
  }
  static randomChoice(e) {
    return 0 === e.length ? null : e[Math.floor(Math.random() * e.length)];
  }
  static randomChoices(e, t) {
    return t >= e.length ? [...e] : this.shuffleArray(e).slice(0, t);
  }
  static uniqueArray(e) {
    return [...new Set(e)];
  }
  static groupBy(e, t) {
    var o,
      n,
      i = new Map();
    try {
      for (var a = __values(e), l = a.next(); !l.done; l = a.next()) {
        var s = l.value,
          c = t(s);
        i.has(c) || i.set(c, []);
        i.get(c).push(s);
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
    return i;
  }
  static formatNumber(e) {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  static formatTime(e) {
    var t = Math.floor(e / 60),
      o = Math.floor(e % 60);
    return t.toString().padStart(2, "0") + ":" + o.toString().padStart(2, "0");
  }
  static formatTimeLong(e) {
    var t = Math.floor(e / 3600),
      o = Math.floor(e % 3600 / 60),
      n = Math.floor(e % 60);
    return t.toString().padStart(2, "0") + ":" + o.toString().padStart(2, "0") + ":" + n.toString().padStart(2, "0");
  }
  static randomString(e, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    for (var o = "", n = 0; n < e; n++) o += t.charAt(Math.floor(Math.random() * t.length));
    return o;
  }
  static capitalize(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  static deepClone(e) {
    var t = this;
    if (null === e || "object" != typeof e) return e;
    if (e instanceof Date) return new Date(e.getTime());
    if (e instanceof Array) return e.map(function (e) {
      return t.deepClone(e);
    });
    if ("object" == typeof e) {
      var o = {};
      for (var n in e) e.hasOwnProperty(n) && (o[n] = this.deepClone(e[n]));
      return o;
    }
    return e;
  }
  static isEmpty(e) {
    return null == e || ("string" == typeof e || Array.isArray(e) ? 0 === e.length : "object" == typeof e && 0 === Object.keys(e).length);
  }
  static merge(e) {
    for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
    return Object.assign.apply(Object, [...[e], ...t]);
  }
  static getTimestamp() {
    return Date.now();
  }
  static getTimestampSeconds() {
    return Math.floor(Date.now() / 1000);
  }
  static getDateFormatByLanguage(e, t = true, o = true) {
    if (!e) try {
      var n = mj.getClassByName("LoginModel");
      if (n) {
        var i = n.getInstance();
        e = (null == i ? void 0 : i.language) || "EN_US";
      }
    } catch (t) {
      e = "EN_US";
    }
    var r = e.toLowerCase().trim().replace(/-/g, "_");
    return "en_us" === r ? t && o ? "mm/dd/YYYY" : t && !o ? "mm/YYYY" : "mm/dd" : ["zh_cn", "zh_hk", "zh_tw", "ar", "ja", "ko", "th", "vi", "hi", "id", "ms", "km", "hy", "az"].includes(r) ? t && o ? "YYYY-mm-dd" : t && !o ? "YYYY-mm" : "mm-dd" : t && o ? "dd/mm/YYYY" : t && !o ? "mm/YYYY" : "dd/mm";
  }
  static getMonthDayFormat(e) {
    return this.getDateFormatByLanguage(e, false);
  }
  static getYearMonthFormat(e) {
    return this.getDateFormatByLanguage(e, true, false);
  }
  static formatMonthDay(e, t) {
    var o = "number" == typeof e ? new Date(e) : e,
      n = this.getMonthDayFormat(t);
    return o.format(n);
  }
  static formatYearMonth(e, t) {
    var o = "number" == typeof e ? new Date(e) : e,
      n = this.getYearMonthFormat(t);
    return o.format(n);
  }
  static getTodayString(e, t = true) {
    var o = this.getDateFormatByLanguage(e, t);
    return new Date().format(o);
  }
  static getTodayMonthDay(e) {
    return this.formatMonthDay(new Date(), e);
  }
  static parseDate(e, t) {
    if (!e || "string" != typeof e) return null;
    e = e.trim();
    try {
      var o = void 0,
        n = void 0,
        i = void 0;
      if (t) {
        var r = e.split(/[-\/]/),
          a = t.toLowerCase().split(/[-\/]/);
        if (r.length !== a.length) return null;
        for (var l = 0; l < a.length; l++) {
          var s = parseInt(r[l], 10);
          if (isNaN(s)) return null;
          if ("yyyy" === a[l]) {
            o = s;
          } else {
            if ("mm" === a[l]) {
              n = s;
            } else {
              "dd" === a[l] && (i = s);
            }
          }
        }
      } else {
        var c = e.includes("-") ? "-" : "/";
        if (3 !== (r = e.split(c).map(function (e) {
          return parseInt(e, 10);
        })).length || r.some(function (e) {
          return isNaN(e);
        })) return null;
        if (r[0] > 31) {
          o = r[0];
          n = r[1];
          i = r[2];
        } else {
          if (!(r[2] > 31)) return null;
          o = r[2];
          if (r[0] > 12) {
            i = r[0];
            n = r[1];
          } else if (r[1] > 12) {
            n = r[0];
            i = r[1];
          } else if ("-" === c) {
            i = r[0];
            n = r[1];
          } else {
            n = r[0];
            i = r[1];
          }
        }
      }
      if (void 0 === o || void 0 === n || void 0 === i) return null;
      if (n < 1 || n > 12 || i < 1 || i > 31) return null;
      var u = new Date(o, n - 1, i);
      return u.getFullYear() !== o || u.getMonth() !== n - 1 || u.getDate() !== i ? null : u;
    } catch (e) {
      return null;
    }
  }
  static formatDateStringToLanguage(e, t, o = true, n = true) {
    var i = this.parseDate(e);
    if (!i) return null;
    var r = this.getDateFormatByLanguage(t, o, n);
    return i.format(r);
  }
  static formatDateStringMonthDay(e, t) {
    return this.formatDateStringToLanguage(e, t, false, true);
  }
  static formatDateStringYearMonth(e, t) {
    return this.formatDateStringToLanguage(e, t, true, false);
  }
  static delay(e) {
    return new Promise(function (t) {
      return setTimeout(t, e);
    });
  }
  static throttle(e, t) {
    var o = 0;
    return function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var a = Date.now();
      if (a - o >= t) {
        o = a;
        return e.apply(void 0, [...n]);
      }
    };
  }
  static debounce(e, t) {
    var o;
    return function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      clearTimeout(o);
      o = setTimeout(function () {
        return e.apply(void 0, [...n]);
      }, t);
    };
  }
  static findChildRecursive(e, t) {
    if (e.name === t) return e;
    for (var o = 0; o < e.children.length; o++) {
      var n = e.children[o],
        i = this.findChildRecursive(n, t);
      if (i) return i;
    }
    return null;
  }
  static findAllChildrenRecursive(e, t) {
    var o = [];
    e.name === t && o.push(e);
    for (var n = 0; n < e.children.length; n++) {
      var r = e.children[n];
      o.push.apply(o, [...this.findAllChildrenRecursive(r, t)]);
    }
    return o;
  }
  static setActiveRecursive(e, t) {
    e.active = t;
    for (var o = 0; o < e.children.length; o++) this.setActiveRecursive(e.children[o], t);
  }
  static destroyRecursive(e) {
    if (e && cc.isValid(e)) {
      for (var t = e.children.length - 1; t >= 0; t--) this.destroyRecursive(e.children[t]);
      e.destroy();
    }
  }
  static hexToColor(e) {
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? new cc.Color(parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), 255) : cc.Color.WHITE;
  }
  static colorToHex(e) {
    return "#" + Math.round(e.r).toString(16).padStart(2, "0") + Math.round(e.g).toString(16).padStart(2, "0") + Math.round(e.b).toString(16).padStart(2, "0");
  }
  static isRatingDialogReady() {
    var e = mj.getClassByName("RatingDialogTrait");
    return !!(e && e.getInstance && e.getInstance().eventEnabled && e.getInstance().shouldBlockOtherPopup());
  }
  static playSpine(e, t = "idle", o = false, n?, i?) {
    if (e && e.skeletonData) {
      playSpineAnim(e, o ? -1 : 1, t, n, false, i);
    } else {
      null == n || n();
    }
  }
  static getSpineAttachedComponent(e, t, o, n) {
    var i, r;
    if (!e || !cc.isValid(e.node)) return null;
    var a = e.attachUtil;
    if (a) {
      var l = a.getAttachedNodes(t);
      if (l && l.length > 0) {
        var s = null === (r = null === (i = l[0]) || void 0 === i ? void 0 : i.getChildByName(o)) || void 0 === r ? void 0 : r.getComponent(n);
        if (s) return s;
      }
    }
    return null;
  }
  static getRemainTimeParts(e) {
    if (e <= 0) return [0, 0, 0, 0];
    var t = Math.floor(e);
    return [Math.floor(t / 86400), Math.floor(t % 86400 / 3600), Math.floor(t % 3600 / 60), t % 60];
  }
  static isSameDay(e, t) {
    if (e < 0 || t < 0) return false;
    var o = new Date(e),
      n = new Date(t);
    return o.getFullYear() === n.getFullYear() && o.getMonth() === n.getMonth() && o.getDate() === n.getDate();
  }
  static isSameWeek(e, t) {
    if (e < 0 || t < 0) return false;
    var o = new Date(e),
      n = new Date(t);
    return this.getWeekStartTimestamp(o) === this.getWeekStartTimestamp(n);
  }
  static getWeekStartTimestamp(e) {
    var t = new Date(e.getTime()),
      o = (t.getDay() - 1 + 7) % 7;
    t.setHours(0, 0, 0, 0);
    t.setDate(t.getDate() - o);
    return t.getTime();
  }
  static isTypeHardLevel(e, t) {
    return e === MjGameType.Travel ? TravelGameModel.getInstance().isHardLevel(t) : ExtractTool.getInstance().isHardLevel(t);
  }
  static setNodeDark(e, t, o = 0.7) {
    var n, i;
    if (cc.isValid(e)) {
      if (t) {
        e.__dark_originColor__ || (e.__dark_originColor__ = e.color.clone());
        var a = e.__dark_originColor__;
        e.color = new cc.Color(Math.floor(a.r * o), Math.floor(a.g * o), Math.floor(a.b * o));
      } else if (e.__dark_originColor__) {
        e.color = e.__dark_originColor__.clone();
        delete e.__dark_originColor__;
      }
      try {
        for (var l = __values(e.children), s = l.next(); !s.done; s = l.next()) {
          var c = s.value;
          this.setNodeDark(c, t, o);
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          s && !s.done && (i = l.return) && i.call(l);
        } finally {
          if (n) throw n.error;
        }
      }
    }
  }
  static clearNodeDark(e) {
    cc.isValid(e) && delete e.__dark_originColor__;
  }
  static getInputAddPropType(e) {
    return e === MjGameType.Tile2Normal ? EGameInputEnum.Tile2AddProp : EGameInputEnum.AddProp;
  }
  static getGameControllerByType(e) {
    e || (e = UserModel.getInstance().getCurrentGameType());
    var t = ControllerManager.getInstance();
    switch (e) {
      case MjGameType.Normal:
        return t.getControByName("MainGameController");
      case MjGameType.Tile2Normal:
        return t.getControByName("Tile2GameController");
      case MjGameType.Travel:
        return t.getControByName("TravelGameController");
      case MjGameType.DailyChallenge:
        return t.getControByName("DailyChallengeController");
      case MjGameType.Classic:
        return t.getControByName("ClassicController");
      default:
        return t.getControByName("MainGameController");
    }
  }
  static deliverProp(t) {
    var o = t.isInGame,
      n = t.reasonId,
      i = t.reasonInfo,
      r = t.itemType,
      a = t.itemCount;
    if (o) {
      var l = UserModel.getInstance().getCurrentGameType(),
        c = {
          inputType: GameUtils.getInputAddPropType(l),
          propType: ItemTypeKey[r],
          num: a,
          reasonId: n,
          reasonInfo: i
        };
      GameInteraction.input(c);
    } else {
      var f = UserModel.getInstance().getCurrentGameData(),
        h = 0;
      if (r === EItemType.Shuffle) {
        f.changeShuffleNums(a);
        h = f.getShuffleNums();
      } else if (r === EItemType.Hint) {
        f.changeHitTipsNums(a);
        h = f.getHitTipsNums();
      } else if (r === EItemType.Undo) {
        f.changeRevertNums(a);
        h = f.getRevertNums();
      }
      DotGameGetItem.dotGetItem(f, {
        itemId: ItemType2Id[r],
        number: a,
        afterNum: h,
        reasonId: n,
        reasonInfo: i
      });
    }
  }
  static isFullComboTriggered() {
    var e = UserModel.getInstance();
    if (e.getMainGameType() === MjGameType.Tile2Normal) return Tile2NormalGameData.getInstance().getHasTriggeredAllClear();
    var t = e.getCurrentGameData(),
      o = t.getHasTriggeredFullCombo(),
      n = t.getHasTriggeredRewardCombo();
    return o || n;
  }
}