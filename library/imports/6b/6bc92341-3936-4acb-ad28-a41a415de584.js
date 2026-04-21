"use strict";
cc._RF.push(module, '6bc92NBOTZKy60opBpBXeWE', 'GameUtils');
// Scripts/core/simulator/util/GameUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager_1 = require("../../../framework/manager/ControllerManager");
var CommonUtils_1 = require("../../../framework/utils/CommonUtils");
var DGameGetItem_1 = require("../../../gamePlay/dot/DGameGetItem");
var TravelGameModel_1 = require("../../../gamePlay/travel/model/TravelGameModel");
var IUserData_1 = require("../../../user/IUserData");
var UserModel_1 = require("../../../gamePlay/user/UserModel");
var ExtractTool_1 = require("../../extractQuestion/ExtractTool");
var GameInteraction_1 = require("../../../GameInteraction/GameInteraction");
var GameInputEnum_1 = require("../../../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../constant/GameTypeEnums");
var Tile2NormalGameData_1 = require("../data/Tile2NormalGameData");
var GameUtils = /** @class */ (function () {
    function GameUtils() {
    }
    GameUtils.randomInt = function (e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e;
    };
    GameUtils.randomFloat = function (e, t) {
        return Math.random() * (t - e) + e;
    };
    GameUtils.clamp = function (e, t, o) {
        return Math.min(Math.max(e, t), o);
    };
    GameUtils.lerp = function (e, t, o) {
        return e + (t - e) * o;
    };
    GameUtils.degreesToRadians = function (e) {
        return e * Math.PI / 180;
    };
    GameUtils.radiansToDegrees = function (e) {
        return 180 * e / Math.PI;
    };
    GameUtils.distance = function (e, t, o, n) {
        var i = o - e, r = n - t;
        return Math.sqrt(i * i + r * r);
    };
    GameUtils.distance3D = function (e, t, o, n, i, r) {
        var a = n - e, l = i - t, s = r - o;
        return Math.sqrt(a * a + l * l + s * s);
    };
    GameUtils.shuffleArray = function (e) {
        for (var t, o = __spreadArrays(e), r = o.length - 1; r > 0; r--) {
            var a = Math.floor(Math.random() * (r + 1));
            t = __read([o[a], o[r]], 2), o[r] = t[0], o[a] = t[1];
        }
        return o;
    };
    GameUtils.randomChoice = function (e) {
        return 0 === e.length ? null : e[Math.floor(Math.random() * e.length)];
    };
    GameUtils.randomChoices = function (e, t) {
        return t >= e.length ? __spreadArrays(e) : this.shuffleArray(e).slice(0, t);
    };
    GameUtils.uniqueArray = function (e) {
        return __spreadArrays(new Set(e));
    };
    GameUtils.groupBy = function (e, t) {
        var o, n, i = new Map();
        try {
            for (var a = __values(e), l = a.next(); !l.done; l = a.next()) {
                var s = l.value, c = t(s);
                i.has(c) || i.set(c, []);
                i.get(c).push(s);
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
        return i;
    };
    GameUtils.formatNumber = function (e) {
        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    GameUtils.formatTime = function (e) {
        var t = Math.floor(e / 60), o = Math.floor(e % 60);
        return t.toString().padStart(2, "0") + ":" + o.toString().padStart(2, "0");
    };
    GameUtils.formatTimeLong = function (e) {
        var t = Math.floor(e / 3600), o = Math.floor(e % 3600 / 60), n = Math.floor(e % 60);
        return t.toString().padStart(2, "0") + ":" + o.toString().padStart(2, "0") + ":" + n.toString().padStart(2, "0");
    };
    GameUtils.randomString = function (e, t) {
        if (t === void 0) { t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; }
        for (var o = "", n = 0; n < e; n++)
            o += t.charAt(Math.floor(Math.random() * t.length));
        return o;
    };
    GameUtils.capitalize = function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
    };
    GameUtils.deepClone = function (e) {
        var t = this;
        if (null === e || "object" != typeof e)
            return e;
        if (e instanceof Date)
            return new Date(e.getTime());
        if (e instanceof Array)
            return e.map(function (e) {
                return t.deepClone(e);
            });
        if ("object" == typeof e) {
            var o = {};
            for (var n in e)
                e.hasOwnProperty(n) && (o[n] = this.deepClone(e[n]));
            return o;
        }
        return e;
    };
    GameUtils.isEmpty = function (e) {
        return null == e || ("string" == typeof e || Array.isArray(e) ? 0 === e.length : "object" == typeof e && 0 === Object.keys(e).length);
    };
    GameUtils.merge = function (e) {
        for (var t = [], o = 1; o < arguments.length; o++)
            t[o - 1] = arguments[o];
        return Object.assign.apply(Object, __spreadArrays([e], t));
    };
    GameUtils.getTimestamp = function () {
        return Date.now();
    };
    GameUtils.getTimestampSeconds = function () {
        return Math.floor(Date.now() / 1000);
    };
    GameUtils.getDateFormatByLanguage = function (e, t, o) {
        if (t === void 0) { t = true; }
        if (o === void 0) { o = true; }
        if (!e)
            try {
                var n = mj.getClassByName("LoginModel");
                if (n) {
                    var i = n.getInstance();
                    e = (null == i ? void 0 : i.language) || "EN_US";
                }
            }
            catch (t) {
                e = "EN_US";
            }
        var r = e.toLowerCase().trim().replace(/-/g, "_");
        return "en_us" === r ? t && o ? "mm/dd/YYYY" : t && !o ? "mm/YYYY" : "mm/dd" : ["zh_cn", "zh_hk", "zh_tw", "ar", "ja", "ko", "th", "vi", "hi", "id", "ms", "km", "hy", "az"].includes(r) ? t && o ? "YYYY-mm-dd" : t && !o ? "YYYY-mm" : "mm-dd" : t && o ? "dd/mm/YYYY" : t && !o ? "mm/YYYY" : "dd/mm";
    };
    GameUtils.getMonthDayFormat = function (e) {
        return this.getDateFormatByLanguage(e, false);
    };
    GameUtils.getYearMonthFormat = function (e) {
        return this.getDateFormatByLanguage(e, true, false);
    };
    GameUtils.formatMonthDay = function (e, t) {
        var o = "number" == typeof e ? new Date(e) : e, n = this.getMonthDayFormat(t);
        return o.format(n);
    };
    GameUtils.formatYearMonth = function (e, t) {
        var o = "number" == typeof e ? new Date(e) : e, n = this.getYearMonthFormat(t);
        return o.format(n);
    };
    GameUtils.getTodayString = function (e, t) {
        if (t === void 0) { t = true; }
        var o = this.getDateFormatByLanguage(e, t);
        return new Date().format(o);
    };
    GameUtils.getTodayMonthDay = function (e) {
        return this.formatMonthDay(new Date(), e);
    };
    GameUtils.parseDate = function (e, t) {
        if (!e || "string" != typeof e)
            return null;
        e = e.trim();
        try {
            var o = void 0, n = void 0, i = void 0;
            if (t) {
                var r = e.split(/[-\/]/), a = t.toLowerCase().split(/[-\/]/);
                if (r.length !== a.length)
                    return null;
                for (var l = 0; l < a.length; l++) {
                    var s = parseInt(r[l], 10);
                    if (isNaN(s))
                        return null;
                    if ("yyyy" === a[l]) {
                        o = s;
                    }
                    else {
                        if ("mm" === a[l]) {
                            n = s;
                        }
                        else {
                            "dd" === a[l] && (i = s);
                        }
                    }
                }
            }
            else {
                var c = e.includes("-") ? "-" : "/";
                if (3 !== (r = e.split(c).map(function (e) {
                    return parseInt(e, 10);
                })).length || r.some(function (e) {
                    return isNaN(e);
                }))
                    return null;
                if (r[0] > 31) {
                    o = r[0];
                    n = r[1];
                    i = r[2];
                }
                else {
                    if (!(r[2] > 31))
                        return null;
                    o = r[2];
                    if (r[0] > 12) {
                        i = r[0];
                        n = r[1];
                    }
                    else if (r[1] > 12) {
                        n = r[0];
                        i = r[1];
                    }
                    else if ("-" === c) {
                        i = r[0];
                        n = r[1];
                    }
                    else {
                        n = r[0];
                        i = r[1];
                    }
                }
            }
            if (void 0 === o || void 0 === n || void 0 === i)
                return null;
            if (n < 1 || n > 12 || i < 1 || i > 31)
                return null;
            var u = new Date(o, n - 1, i);
            return u.getFullYear() !== o || u.getMonth() !== n - 1 || u.getDate() !== i ? null : u;
        }
        catch (e) {
            return null;
        }
    };
    GameUtils.formatDateStringToLanguage = function (e, t, o, n) {
        if (o === void 0) { o = true; }
        if (n === void 0) { n = true; }
        var i = this.parseDate(e);
        if (!i)
            return null;
        var r = this.getDateFormatByLanguage(t, o, n);
        return i.format(r);
    };
    GameUtils.formatDateStringMonthDay = function (e, t) {
        return this.formatDateStringToLanguage(e, t, false, true);
    };
    GameUtils.formatDateStringYearMonth = function (e, t) {
        return this.formatDateStringToLanguage(e, t, true, false);
    };
    GameUtils.delay = function (e) {
        return new Promise(function (t) {
            return setTimeout(t, e);
        });
    };
    GameUtils.throttle = function (e, t) {
        var o = 0;
        return function () {
            for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            var a = Date.now();
            if (a - o >= t) {
                o = a;
                return e.apply(void 0, __spreadArrays(n));
            }
        };
    };
    GameUtils.debounce = function (e, t) {
        var o;
        return function () {
            for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            clearTimeout(o);
            o = setTimeout(function () {
                return e.apply(void 0, __spreadArrays(n));
            }, t);
        };
    };
    GameUtils.findChildRecursive = function (e, t) {
        if (e.name === t)
            return e;
        for (var o = 0; o < e.children.length; o++) {
            var n = e.children[o], i = this.findChildRecursive(n, t);
            if (i)
                return i;
        }
        return null;
    };
    GameUtils.findAllChildrenRecursive = function (e, t) {
        var o = [];
        e.name === t && o.push(e);
        for (var n = 0; n < e.children.length; n++) {
            var r = e.children[n];
            o.push.apply(o, __spreadArrays(this.findAllChildrenRecursive(r, t)));
        }
        return o;
    };
    GameUtils.setActiveRecursive = function (e, t) {
        e.active = t;
        for (var o = 0; o < e.children.length; o++)
            this.setActiveRecursive(e.children[o], t);
    };
    GameUtils.destroyRecursive = function (e) {
        if (e && cc.isValid(e)) {
            for (var t = e.children.length - 1; t >= 0; t--)
                this.destroyRecursive(e.children[t]);
            e.destroy();
        }
    };
    GameUtils.hexToColor = function (e) {
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? new cc.Color(parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), 255) : cc.Color.WHITE;
    };
    GameUtils.colorToHex = function (e) {
        return "#" + Math.round(e.r).toString(16).padStart(2, "0") + Math.round(e.g).toString(16).padStart(2, "0") + Math.round(e.b).toString(16).padStart(2, "0");
    };
    GameUtils.isRatingDialogReady = function () {
        var e = mj.getClassByName("RatingDialogTrait");
        return !!(e && e.getInstance && e.getInstance().eventEnabled && e.getInstance().shouldBlockOtherPopup());
    };
    GameUtils.playSpine = function (e, t, o, n, i) {
        if (t === void 0) { t = "idle"; }
        if (o === void 0) { o = false; }
        if (e && e.skeletonData) {
            CommonUtils_1.playSpineAnim(e, o ? -1 : 1, t, n, false, i);
        }
        else {
            null == n || n();
        }
    };
    GameUtils.getSpineAttachedComponent = function (e, t, o, n) {
        var i, r;
        if (!e || !cc.isValid(e.node))
            return null;
        var a = e.attachUtil;
        if (a) {
            var l = a.getAttachedNodes(t);
            if (l && l.length > 0) {
                var s = null === (r = null === (i = l[0]) || void 0 === i ? void 0 : i.getChildByName(o)) || void 0 === r ? void 0 : r.getComponent(n);
                if (s)
                    return s;
            }
        }
        return null;
    };
    GameUtils.getRemainTimeParts = function (e) {
        if (e <= 0)
            return [0, 0, 0, 0];
        var t = Math.floor(e);
        return [Math.floor(t / 86400), Math.floor(t % 86400 / 3600), Math.floor(t % 3600 / 60), t % 60];
    };
    GameUtils.isSameDay = function (e, t) {
        if (e < 0 || t < 0)
            return false;
        var o = new Date(e), n = new Date(t);
        return o.getFullYear() === n.getFullYear() && o.getMonth() === n.getMonth() && o.getDate() === n.getDate();
    };
    GameUtils.isSameWeek = function (e, t) {
        if (e < 0 || t < 0)
            return false;
        var o = new Date(e), n = new Date(t);
        return this.getWeekStartTimestamp(o) === this.getWeekStartTimestamp(n);
    };
    GameUtils.getWeekStartTimestamp = function (e) {
        var t = new Date(e.getTime()), o = (t.getDay() - 1 + 7) % 7;
        t.setHours(0, 0, 0, 0);
        t.setDate(t.getDate() - o);
        return t.getTime();
    };
    GameUtils.isTypeHardLevel = function (e, t) {
        return e === GameTypeEnums_1.MjGameType.Travel ? TravelGameModel_1.default.getInstance().isHardLevel(t) : ExtractTool_1.default.getInstance().isHardLevel(t);
    };
    GameUtils.setNodeDark = function (e, t, o) {
        if (o === void 0) { o = 0.7; }
        var n, i;
        if (cc.isValid(e)) {
            if (t) {
                e.__dark_originColor__ || (e.__dark_originColor__ = e.color.clone());
                var a = e.__dark_originColor__;
                e.color = new cc.Color(Math.floor(a.r * o), Math.floor(a.g * o), Math.floor(a.b * o));
            }
            else if (e.__dark_originColor__) {
                e.color = e.__dark_originColor__.clone();
                delete e.__dark_originColor__;
            }
            try {
                for (var l = __values(e.children), s = l.next(); !s.done; s = l.next()) {
                    var c = s.value;
                    this.setNodeDark(c, t, o);
                }
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    s && !s.done && (i = l.return) && i.call(l);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
        }
    };
    GameUtils.clearNodeDark = function (e) {
        cc.isValid(e) && delete e.__dark_originColor__;
    };
    GameUtils.getInputAddPropType = function (e) {
        return e === GameTypeEnums_1.MjGameType.Tile2Normal ? GameInputEnum_1.EGameInputEnum.Tile2AddProp : GameInputEnum_1.EGameInputEnum.AddProp;
    };
    GameUtils.getGameControllerByType = function (e) {
        e || (e = UserModel_1.default.getInstance().getCurrentGameType());
        var t = ControllerManager_1.default.getInstance();
        switch (e) {
            case GameTypeEnums_1.MjGameType.Normal:
                return t.getControByName("MainGameController");
            case GameTypeEnums_1.MjGameType.Tile2Normal:
                return t.getControByName("Tile2GameController");
            case GameTypeEnums_1.MjGameType.Travel:
                return t.getControByName("TravelGameController");
            case GameTypeEnums_1.MjGameType.DailyChallenge:
                return t.getControByName("DailyChallengeController");
            case GameTypeEnums_1.MjGameType.Classic:
                return t.getControByName("ClassicController");
            default:
                return t.getControByName("MainGameController");
        }
    };
    GameUtils.deliverProp = function (t) {
        var o = t.isInGame, n = t.reasonId, i = t.reasonInfo, r = t.itemType, a = t.itemCount;
        if (o) {
            var l = UserModel_1.default.getInstance().getCurrentGameType(), c = {
                inputType: GameUtils.getInputAddPropType(l),
                propType: IUserData_1.ItemTypeKey[r],
                num: a,
                reasonId: n,
                reasonInfo: i
            };
            GameInteraction_1.GameInteraction.input(c);
        }
        else {
            var f = UserModel_1.default.getInstance().getCurrentGameData(), h = 0;
            if (r === IUserData_1.EItemType.Shuffle) {
                f.changeShuffleNums(a);
                h = f.getShuffleNums();
            }
            else if (r === IUserData_1.EItemType.Hint) {
                f.changeHitTipsNums(a);
                h = f.getHitTipsNums();
            }
            else if (r === IUserData_1.EItemType.Undo) {
                f.changeRevertNums(a);
                h = f.getRevertNums();
            }
            DGameGetItem_1.DotGameGetItem.dotGetItem(f, {
                itemId: GameTypeEnums_1.ItemType2Id[r],
                number: a,
                afterNum: h,
                reasonId: n,
                reasonInfo: i
            });
        }
    };
    GameUtils.isFullComboTriggered = function () {
        var e = UserModel_1.default.getInstance();
        if (e.getMainGameType() === GameTypeEnums_1.MjGameType.Tile2Normal)
            return Tile2NormalGameData_1.default.getInstance().getHasTriggeredAllClear();
        var t = e.getCurrentGameData(), o = t.getHasTriggeredFullCombo(), n = t.getHasTriggeredRewardCombo();
        return o || n;
    };
    return GameUtils;
}());
exports.default = GameUtils;

cc._RF.pop();