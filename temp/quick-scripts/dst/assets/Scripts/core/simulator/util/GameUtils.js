
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/util/GameUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRkFBNkU7QUFDN0Usb0VBQXFFO0FBQ3JFLG1FQUFvRTtBQUNwRSxrRkFBNkU7QUFDN0UscURBQWlFO0FBQ2pFLDhEQUF5RDtBQUN6RCxpRUFBNEQ7QUFDNUQsNEVBQTJFO0FBQzNFLDJFQUEyRTtBQUMzRSwyREFBb0U7QUFDcEUsbUVBQThEO0FBQzlEO0lBQUE7SUFzYkEsQ0FBQztJQXJiUSxtQkFBUyxHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ00scUJBQVcsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDTSxlQUFLLEdBQVosVUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDTSxjQUFJLEdBQVgsVUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDTSwwQkFBZ0IsR0FBdkIsVUFBd0IsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdB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RyxDQUFDLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUNyQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0F0YkEsQUFzYkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgeyBwbGF5U3BpbmVBbmltIH0gZnJvbSAnLi4vLi4vLi4vZnJhbWV3b3JrL3V0aWxzL0NvbW1vblV0aWxzJztcbmltcG9ydCB7IERvdEdhbWVHZXRJdGVtIH0gZnJvbSAnLi4vLi4vLi4vZ2FtZVBsYXkvZG90L0RHYW1lR2V0SXRlbSc7XG5pbXBvcnQgVHJhdmVsR2FtZU1vZGVsIGZyb20gJy4uLy4uLy4uL2dhbWVQbGF5L3RyYXZlbC9tb2RlbC9UcmF2ZWxHYW1lTW9kZWwnO1xuaW1wb3J0IHsgSXRlbVR5cGVLZXksIEVJdGVtVHlwZSB9IGZyb20gJy4uLy4uLy4uL3VzZXIvSVVzZXJEYXRhJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IEV4dHJhY3RUb29sIGZyb20gJy4uLy4uL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0VG9vbCc7XG5pbXBvcnQgeyBHYW1lSW50ZXJhY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9HYW1lSW50ZXJhY3Rpb24vR2FtZUludGVyYWN0aW9uJztcbmltcG9ydCB7IEVHYW1lSW5wdXRFbnVtIH0gZnJvbSAnLi4vLi4vLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSwgSXRlbVR5cGUySWQgfSBmcm9tICcuLi9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUaWxlMk5vcm1hbEdhbWVEYXRhIGZyb20gJy4uL2RhdGEvVGlsZTJOb3JtYWxHYW1lRGF0YSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVXRpbHMge1xuICBzdGF0aWMgcmFuZG9tSW50KGUsIHQpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHQgLSBlICsgMSkpICsgZTtcbiAgfVxuICBzdGF0aWMgcmFuZG9tRmxvYXQoZSwgdCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKHQgLSBlKSArIGU7XG4gIH1cbiAgc3RhdGljIGNsYW1wKGUsIHQsIG8pIHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoZSwgdCksIG8pO1xuICB9XG4gIHN0YXRpYyBsZXJwKGUsIHQsIG8pIHtcbiAgICByZXR1cm4gZSArICh0IC0gZSkgKiBvO1xuICB9XG4gIHN0YXRpYyBkZWdyZWVzVG9SYWRpYW5zKGUpIHtcbiAgICByZXR1cm4gZSAqIE1hdGguUEkgLyAxODA7XG4gIH1cbiAgc3RhdGljIHJhZGlhbnNUb0RlZ3JlZXMoZSkge1xuICAgIHJldHVybiAxODAgKiBlIC8gTWF0aC5QSTtcbiAgfVxuICBzdGF0aWMgZGlzdGFuY2UoZSwgdCwgbywgbikge1xuICAgIHZhciBpID0gbyAtIGUsXG4gICAgICByID0gbiAtIHQ7XG4gICAgcmV0dXJuIE1hdGguc3FydChpICogaSArIHIgKiByKTtcbiAgfVxuICBzdGF0aWMgZGlzdGFuY2UzRChlLCB0LCBvLCBuLCBpLCByKSB7XG4gICAgdmFyIGEgPSBuIC0gZSxcbiAgICAgIGwgPSBpIC0gdCxcbiAgICAgIHMgPSByIC0gbztcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGEgKiBhICsgbCAqIGwgKyBzICogcyk7XG4gIH1cbiAgc3RhdGljIHNodWZmbGVBcnJheShlKSB7XG4gICAgZm9yICh2YXIgdCwgbyA9IFsuLi5lXSwgciA9IG8ubGVuZ3RoIC0gMTsgciA+IDA7IHItLSkge1xuICAgICAgdmFyIGEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAociArIDEpKTtcbiAgICAgIHQgPSBfX3JlYWQoW29bYV0sIG9bcl1dLCAyKSwgb1tyXSA9IHRbMF0sIG9bYV0gPSB0WzFdO1xuICAgIH1cbiAgICByZXR1cm4gbztcbiAgfVxuICBzdGF0aWMgcmFuZG9tQ2hvaWNlKGUpIHtcbiAgICByZXR1cm4gMCA9PT0gZS5sZW5ndGggPyBudWxsIDogZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlLmxlbmd0aCldO1xuICB9XG4gIHN0YXRpYyByYW5kb21DaG9pY2VzKGUsIHQpIHtcbiAgICByZXR1cm4gdCA+PSBlLmxlbmd0aCA/IFsuLi5lXSA6IHRoaXMuc2h1ZmZsZUFycmF5KGUpLnNsaWNlKDAsIHQpO1xuICB9XG4gIHN0YXRpYyB1bmlxdWVBcnJheShlKSB7XG4gICAgcmV0dXJuIFsuLi5uZXcgU2V0KGUpXTtcbiAgfVxuICBzdGF0aWMgZ3JvdXBCeShlLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBuLFxuICAgICAgaSA9IG5ldyBNYXAoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYSA9IF9fdmFsdWVzKGUpLCBsID0gYS5uZXh0KCk7ICFsLmRvbmU7IGwgPSBhLm5leHQoKSkge1xuICAgICAgICB2YXIgcyA9IGwudmFsdWUsXG4gICAgICAgICAgYyA9IHQocyk7XG4gICAgICAgIGkuaGFzKGMpIHx8IGkuc2V0KGMsIFtdKTtcbiAgICAgICAgaS5nZXQoYykucHVzaChzKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChuID0gYS5yZXR1cm4pICYmIG4uY2FsbChhKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaTtcbiAgfVxuICBzdGF0aWMgZm9ybWF0TnVtYmVyKGUpIHtcbiAgICByZXR1cm4gZS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgfVxuICBzdGF0aWMgZm9ybWF0VGltZShlKSB7XG4gICAgdmFyIHQgPSBNYXRoLmZsb29yKGUgLyA2MCksXG4gICAgICBvID0gTWF0aC5mbG9vcihlICUgNjApO1xuICAgIHJldHVybiB0LnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpICsgXCI6XCIgKyBvLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICB9XG4gIHN0YXRpYyBmb3JtYXRUaW1lTG9uZyhlKSB7XG4gICAgdmFyIHQgPSBNYXRoLmZsb29yKGUgLyAzNjAwKSxcbiAgICAgIG8gPSBNYXRoLmZsb29yKGUgJSAzNjAwIC8gNjApLFxuICAgICAgbiA9IE1hdGguZmxvb3IoZSAlIDYwKTtcbiAgICByZXR1cm4gdC50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSArIFwiOlwiICsgby50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSArIFwiOlwiICsgbi50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgfVxuICBzdGF0aWMgcmFuZG9tU3RyaW5nKGUsIHQgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5XCIpIHtcbiAgICBmb3IgKHZhciBvID0gXCJcIiwgbiA9IDA7IG4gPCBlOyBuKyspIG8gKz0gdC5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdC5sZW5ndGgpKTtcbiAgICByZXR1cm4gbztcbiAgfVxuICBzdGF0aWMgY2FwaXRhbGl6ZShlKSB7XG4gICAgcmV0dXJuIGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBlLnNsaWNlKDEpO1xuICB9XG4gIHN0YXRpYyBkZWVwQ2xvbmUoZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAobnVsbCA9PT0gZSB8fCBcIm9iamVjdFwiICE9IHR5cGVvZiBlKSByZXR1cm4gZTtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIERhdGUpIHJldHVybiBuZXcgRGF0ZShlLmdldFRpbWUoKSk7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBBcnJheSkgcmV0dXJuIGUubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gdC5kZWVwQ2xvbmUoZSk7XG4gICAgfSk7XG4gICAgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIGUpIHtcbiAgICAgIHZhciBvID0ge307XG4gICAgICBmb3IgKHZhciBuIGluIGUpIGUuaGFzT3duUHJvcGVydHkobikgJiYgKG9bbl0gPSB0aGlzLmRlZXBDbG9uZShlW25dKSk7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgc3RhdGljIGlzRW1wdHkoZSkge1xuICAgIHJldHVybiBudWxsID09IGUgfHwgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgfHwgQXJyYXkuaXNBcnJheShlKSA/IDAgPT09IGUubGVuZ3RoIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZSAmJiAwID09PSBPYmplY3Qua2V5cyhlKS5sZW5ndGgpO1xuICB9XG4gIHN0YXRpYyBtZXJnZShlKSB7XG4gICAgZm9yICh2YXIgdCA9IFtdLCBvID0gMTsgbyA8IGFyZ3VtZW50cy5sZW5ndGg7IG8rKykgdFtvIC0gMV0gPSBhcmd1bWVudHNbb107XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24uYXBwbHkoT2JqZWN0LCBbLi4uW2VdLCAuLi50XSk7XG4gIH1cbiAgc3RhdGljIGdldFRpbWVzdGFtcCgpIHtcbiAgICByZXR1cm4gRGF0ZS5ub3coKTtcbiAgfVxuICBzdGF0aWMgZ2V0VGltZXN0YW1wU2Vjb25kcygpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gIH1cbiAgc3RhdGljIGdldERhdGVGb3JtYXRCeUxhbmd1YWdlKGUsIHQgPSB0cnVlLCBvID0gdHJ1ZSkge1xuICAgIGlmICghZSkgdHJ5IHtcbiAgICAgIHZhciBuID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJMb2dpbk1vZGVsXCIpO1xuICAgICAgaWYgKG4pIHtcbiAgICAgICAgdmFyIGkgPSBuLmdldEluc3RhbmNlKCk7XG4gICAgICAgIGUgPSAobnVsbCA9PSBpID8gdm9pZCAwIDogaS5sYW5ndWFnZSkgfHwgXCJFTl9VU1wiO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSBcIkVOX1VTXCI7XG4gICAgfVxuICAgIHZhciByID0gZS50b0xvd2VyQ2FzZSgpLnRyaW0oKS5yZXBsYWNlKC8tL2csIFwiX1wiKTtcbiAgICByZXR1cm4gXCJlbl91c1wiID09PSByID8gdCAmJiBvID8gXCJtbS9kZC9ZWVlZXCIgOiB0ICYmICFvID8gXCJtbS9ZWVlZXCIgOiBcIm1tL2RkXCIgOiBbXCJ6aF9jblwiLCBcInpoX2hrXCIsIFwiemhfdHdcIiwgXCJhclwiLCBcImphXCIsIFwia29cIiwgXCJ0aFwiLCBcInZpXCIsIFwiaGlcIiwgXCJpZFwiLCBcIm1zXCIsIFwia21cIiwgXCJoeVwiLCBcImF6XCJdLmluY2x1ZGVzKHIpID8gdCAmJiBvID8gXCJZWVlZLW1tLWRkXCIgOiB0ICYmICFvID8gXCJZWVlZLW1tXCIgOiBcIm1tLWRkXCIgOiB0ICYmIG8gPyBcImRkL21tL1lZWVlcIiA6IHQgJiYgIW8gPyBcIm1tL1lZWVlcIiA6IFwiZGQvbW1cIjtcbiAgfVxuICBzdGF0aWMgZ2V0TW9udGhEYXlGb3JtYXQoZSkge1xuICAgIHJldHVybiB0aGlzLmdldERhdGVGb3JtYXRCeUxhbmd1YWdlKGUsIGZhbHNlKTtcbiAgfVxuICBzdGF0aWMgZ2V0WWVhck1vbnRoRm9ybWF0KGUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREYXRlRm9ybWF0QnlMYW5ndWFnZShlLCB0cnVlLCBmYWxzZSk7XG4gIH1cbiAgc3RhdGljIGZvcm1hdE1vbnRoRGF5KGUsIHQpIHtcbiAgICB2YXIgbyA9IFwibnVtYmVyXCIgPT0gdHlwZW9mIGUgPyBuZXcgRGF0ZShlKSA6IGUsXG4gICAgICBuID0gdGhpcy5nZXRNb250aERheUZvcm1hdCh0KTtcbiAgICByZXR1cm4gby5mb3JtYXQobik7XG4gIH1cbiAgc3RhdGljIGZvcm1hdFllYXJNb250aChlLCB0KSB7XG4gICAgdmFyIG8gPSBcIm51bWJlclwiID09IHR5cGVvZiBlID8gbmV3IERhdGUoZSkgOiBlLFxuICAgICAgbiA9IHRoaXMuZ2V0WWVhck1vbnRoRm9ybWF0KHQpO1xuICAgIHJldHVybiBvLmZvcm1hdChuKTtcbiAgfVxuICBzdGF0aWMgZ2V0VG9kYXlTdHJpbmcoZSwgdCA9IHRydWUpIHtcbiAgICB2YXIgbyA9IHRoaXMuZ2V0RGF0ZUZvcm1hdEJ5TGFuZ3VhZ2UoZSwgdCk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZm9ybWF0KG8pO1xuICB9XG4gIHN0YXRpYyBnZXRUb2RheU1vbnRoRGF5KGUpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXRNb250aERheShuZXcgRGF0ZSgpLCBlKTtcbiAgfVxuICBzdGF0aWMgcGFyc2VEYXRlKGUsIHQpIHtcbiAgICBpZiAoIWUgfHwgXCJzdHJpbmdcIiAhPSB0eXBlb2YgZSkgcmV0dXJuIG51bGw7XG4gICAgZSA9IGUudHJpbSgpO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbyA9IHZvaWQgMCxcbiAgICAgICAgbiA9IHZvaWQgMCxcbiAgICAgICAgaSA9IHZvaWQgMDtcbiAgICAgIGlmICh0KSB7XG4gICAgICAgIHZhciByID0gZS5zcGxpdCgvWy1cXC9dLyksXG4gICAgICAgICAgYSA9IHQudG9Mb3dlckNhc2UoKS5zcGxpdCgvWy1cXC9dLyk7XG4gICAgICAgIGlmIChyLmxlbmd0aCAhPT0gYS5sZW5ndGgpIHJldHVybiBudWxsO1xuICAgICAgICBmb3IgKHZhciBsID0gMDsgbCA8IGEubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICB2YXIgcyA9IHBhcnNlSW50KHJbbF0sIDEwKTtcbiAgICAgICAgICBpZiAoaXNOYU4ocykpIHJldHVybiBudWxsO1xuICAgICAgICAgIGlmIChcInl5eXlcIiA9PT0gYVtsXSkge1xuICAgICAgICAgICAgbyA9IHM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcIm1tXCIgPT09IGFbbF0pIHtcbiAgICAgICAgICAgICAgbiA9IHM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBcImRkXCIgPT09IGFbbF0gJiYgKGkgPSBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjID0gZS5pbmNsdWRlcyhcIi1cIikgPyBcIi1cIiA6IFwiL1wiO1xuICAgICAgICBpZiAoMyAhPT0gKHIgPSBlLnNwbGl0KGMpLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZUludChlLCAxMCk7XG4gICAgICAgIH0pKS5sZW5ndGggfHwgci5zb21lKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGlzTmFOKGUpO1xuICAgICAgICB9KSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmIChyWzBdID4gMzEpIHtcbiAgICAgICAgICBvID0gclswXTtcbiAgICAgICAgICBuID0gclsxXTtcbiAgICAgICAgICBpID0gclsyXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIShyWzJdID4gMzEpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICBvID0gclsyXTtcbiAgICAgICAgICBpZiAoclswXSA+IDEyKSB7XG4gICAgICAgICAgICBpID0gclswXTtcbiAgICAgICAgICAgIG4gPSByWzFdO1xuICAgICAgICAgIH0gZWxzZSBpZiAoclsxXSA+IDEyKSB7XG4gICAgICAgICAgICBuID0gclswXTtcbiAgICAgICAgICAgIGkgPSByWzFdO1xuICAgICAgICAgIH0gZWxzZSBpZiAoXCItXCIgPT09IGMpIHtcbiAgICAgICAgICAgIGkgPSByWzBdO1xuICAgICAgICAgICAgbiA9IHJbMV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG4gPSByWzBdO1xuICAgICAgICAgICAgaSA9IHJbMV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodm9pZCAwID09PSBvIHx8IHZvaWQgMCA9PT0gbiB8fCB2b2lkIDAgPT09IGkpIHJldHVybiBudWxsO1xuICAgICAgaWYgKG4gPCAxIHx8IG4gPiAxMiB8fCBpIDwgMSB8fCBpID4gMzEpIHJldHVybiBudWxsO1xuICAgICAgdmFyIHUgPSBuZXcgRGF0ZShvLCBuIC0gMSwgaSk7XG4gICAgICByZXR1cm4gdS5nZXRGdWxsWWVhcigpICE9PSBvIHx8IHUuZ2V0TW9udGgoKSAhPT0gbiAtIDEgfHwgdS5nZXREYXRlKCkgIT09IGkgPyBudWxsIDogdTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGZvcm1hdERhdGVTdHJpbmdUb0xhbmd1YWdlKGUsIHQsIG8gPSB0cnVlLCBuID0gdHJ1ZSkge1xuICAgIHZhciBpID0gdGhpcy5wYXJzZURhdGUoZSk7XG4gICAgaWYgKCFpKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgciA9IHRoaXMuZ2V0RGF0ZUZvcm1hdEJ5TGFuZ3VhZ2UodCwgbywgbik7XG4gICAgcmV0dXJuIGkuZm9ybWF0KHIpO1xuICB9XG4gIHN0YXRpYyBmb3JtYXREYXRlU3RyaW5nTW9udGhEYXkoZSwgdCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGVTdHJpbmdUb0xhbmd1YWdlKGUsIHQsIGZhbHNlLCB0cnVlKTtcbiAgfVxuICBzdGF0aWMgZm9ybWF0RGF0ZVN0cmluZ1llYXJNb250aChlLCB0KSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZVN0cmluZ1RvTGFuZ3VhZ2UoZSwgdCwgdHJ1ZSwgZmFsc2UpO1xuICB9XG4gIHN0YXRpYyBkZWxheShlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gc2V0VGltZW91dCh0LCBlKTtcbiAgICB9KTtcbiAgfVxuICBzdGF0aWMgdGhyb3R0bGUoZSwgdCkge1xuICAgIHZhciBvID0gMDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgbiA9IFtdLCByID0gMDsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykgbltyXSA9IGFyZ3VtZW50c1tyXTtcbiAgICAgIHZhciBhID0gRGF0ZS5ub3coKTtcbiAgICAgIGlmIChhIC0gbyA+PSB0KSB7XG4gICAgICAgIG8gPSBhO1xuICAgICAgICByZXR1cm4gZS5hcHBseSh2b2lkIDAsIFsuLi5uXSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZGVib3VuY2UoZSwgdCkge1xuICAgIHZhciBvO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBuID0gW10sIHIgPSAwOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSBuW3JdID0gYXJndW1lbnRzW3JdO1xuICAgICAgY2xlYXJUaW1lb3V0KG8pO1xuICAgICAgbyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZS5hcHBseSh2b2lkIDAsIFsuLi5uXSk7XG4gICAgICB9LCB0KTtcbiAgICB9O1xuICB9XG4gIHN0YXRpYyBmaW5kQ2hpbGRSZWN1cnNpdmUoZSwgdCkge1xuICAgIGlmIChlLm5hbWUgPT09IHQpIHJldHVybiBlO1xuICAgIGZvciAodmFyIG8gPSAwOyBvIDwgZS5jaGlsZHJlbi5sZW5ndGg7IG8rKykge1xuICAgICAgdmFyIG4gPSBlLmNoaWxkcmVuW29dLFxuICAgICAgICBpID0gdGhpcy5maW5kQ2hpbGRSZWN1cnNpdmUobiwgdCk7XG4gICAgICBpZiAoaSkgcmV0dXJuIGk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHN0YXRpYyBmaW5kQWxsQ2hpbGRyZW5SZWN1cnNpdmUoZSwgdCkge1xuICAgIHZhciBvID0gW107XG4gICAgZS5uYW1lID09PSB0ICYmIG8ucHVzaChlKTtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IGUuY2hpbGRyZW4ubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciByID0gZS5jaGlsZHJlbltuXTtcbiAgICAgIG8ucHVzaC5hcHBseShvLCBbLi4udGhpcy5maW5kQWxsQ2hpbGRyZW5SZWN1cnNpdmUociwgdCldKTtcbiAgICB9XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgc3RhdGljIHNldEFjdGl2ZVJlY3Vyc2l2ZShlLCB0KSB7XG4gICAgZS5hY3RpdmUgPSB0O1xuICAgIGZvciAodmFyIG8gPSAwOyBvIDwgZS5jaGlsZHJlbi5sZW5ndGg7IG8rKykgdGhpcy5zZXRBY3RpdmVSZWN1cnNpdmUoZS5jaGlsZHJlbltvXSwgdCk7XG4gIH1cbiAgc3RhdGljIGRlc3Ryb3lSZWN1cnNpdmUoZSkge1xuICAgIGlmIChlICYmIGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgIGZvciAodmFyIHQgPSBlLmNoaWxkcmVuLmxlbmd0aCAtIDE7IHQgPj0gMDsgdC0tKSB0aGlzLmRlc3Ryb3lSZWN1cnNpdmUoZS5jaGlsZHJlblt0XSk7XG4gICAgICBlLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGhleFRvQ29sb3IoZSkge1xuICAgIHZhciB0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGUpO1xuICAgIHJldHVybiB0ID8gbmV3IGNjLkNvbG9yKHBhcnNlSW50KHRbMV0sIDE2KSwgcGFyc2VJbnQodFsyXSwgMTYpLCBwYXJzZUludCh0WzNdLCAxNiksIDI1NSkgOiBjYy5Db2xvci5XSElURTtcbiAgfVxuICBzdGF0aWMgY29sb3JUb0hleChlKSB7XG4gICAgcmV0dXJuIFwiI1wiICsgTWF0aC5yb3VuZChlLnIpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCBcIjBcIikgKyBNYXRoLnJvdW5kKGUuZykudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKSArIE1hdGgucm91bmQoZS5iKS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpO1xuICB9XG4gIHN0YXRpYyBpc1JhdGluZ0RpYWxvZ1JlYWR5KCkge1xuICAgIHZhciBlID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJSYXRpbmdEaWFsb2dUcmFpdFwiKTtcbiAgICByZXR1cm4gISEoZSAmJiBlLmdldEluc3RhbmNlICYmIGUuZ2V0SW5zdGFuY2UoKS5ldmVudEVuYWJsZWQgJiYgZS5nZXRJbnN0YW5jZSgpLnNob3VsZEJsb2NrT3RoZXJQb3B1cCgpKTtcbiAgfVxuICBzdGF0aWMgcGxheVNwaW5lKGUsIHQgPSBcImlkbGVcIiwgbyA9IGZhbHNlLCBuPywgaT8pIHtcbiAgICBpZiAoZSAmJiBlLnNrZWxldG9uRGF0YSkge1xuICAgICAgcGxheVNwaW5lQW5pbShlLCBvID8gLTEgOiAxLCB0LCBuLCBmYWxzZSwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG51bGwgPT0gbiB8fCBuKCk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBnZXRTcGluZUF0dGFjaGVkQ29tcG9uZW50KGUsIHQsIG8sIG4pIHtcbiAgICB2YXIgaSwgcjtcbiAgICBpZiAoIWUgfHwgIWNjLmlzVmFsaWQoZS5ub2RlKSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGEgPSBlLmF0dGFjaFV0aWw7XG4gICAgaWYgKGEpIHtcbiAgICAgIHZhciBsID0gYS5nZXRBdHRhY2hlZE5vZGVzKHQpO1xuICAgICAgaWYgKGwgJiYgbC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBzID0gbnVsbCA9PT0gKHIgPSBudWxsID09PSAoaSA9IGxbMF0pIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2V0Q2hpbGRCeU5hbWUobykpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuZ2V0Q29tcG9uZW50KG4pO1xuICAgICAgICBpZiAocykgcmV0dXJuIHM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHN0YXRpYyBnZXRSZW1haW5UaW1lUGFydHMoZSkge1xuICAgIGlmIChlIDw9IDApIHJldHVybiBbMCwgMCwgMCwgMF07XG4gICAgdmFyIHQgPSBNYXRoLmZsb29yKGUpO1xuICAgIHJldHVybiBbTWF0aC5mbG9vcih0IC8gODY0MDApLCBNYXRoLmZsb29yKHQgJSA4NjQwMCAvIDM2MDApLCBNYXRoLmZsb29yKHQgJSAzNjAwIC8gNjApLCB0ICUgNjBdO1xuICB9XG4gIHN0YXRpYyBpc1NhbWVEYXkoZSwgdCkge1xuICAgIGlmIChlIDwgMCB8fCB0IDwgMCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBvID0gbmV3IERhdGUoZSksXG4gICAgICBuID0gbmV3IERhdGUodCk7XG4gICAgcmV0dXJuIG8uZ2V0RnVsbFllYXIoKSA9PT0gbi5nZXRGdWxsWWVhcigpICYmIG8uZ2V0TW9udGgoKSA9PT0gbi5nZXRNb250aCgpICYmIG8uZ2V0RGF0ZSgpID09PSBuLmdldERhdGUoKTtcbiAgfVxuICBzdGF0aWMgaXNTYW1lV2VlayhlLCB0KSB7XG4gICAgaWYgKGUgPCAwIHx8IHQgPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIG8gPSBuZXcgRGF0ZShlKSxcbiAgICAgIG4gPSBuZXcgRGF0ZSh0KTtcbiAgICByZXR1cm4gdGhpcy5nZXRXZWVrU3RhcnRUaW1lc3RhbXAobykgPT09IHRoaXMuZ2V0V2Vla1N0YXJ0VGltZXN0YW1wKG4pO1xuICB9XG4gIHN0YXRpYyBnZXRXZWVrU3RhcnRUaW1lc3RhbXAoZSkge1xuICAgIHZhciB0ID0gbmV3IERhdGUoZS5nZXRUaW1lKCkpLFxuICAgICAgbyA9ICh0LmdldERheSgpIC0gMSArIDcpICUgNztcbiAgICB0LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHQuc2V0RGF0ZSh0LmdldERhdGUoKSAtIG8pO1xuICAgIHJldHVybiB0LmdldFRpbWUoKTtcbiAgfVxuICBzdGF0aWMgaXNUeXBlSGFyZExldmVsKGUsIHQpIHtcbiAgICByZXR1cm4gZSA9PT0gTWpHYW1lVHlwZS5UcmF2ZWwgPyBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0hhcmRMZXZlbCh0KSA6IEV4dHJhY3RUb29sLmdldEluc3RhbmNlKCkuaXNIYXJkTGV2ZWwodCk7XG4gIH1cbiAgc3RhdGljIHNldE5vZGVEYXJrKGUsIHQsIG8gPSAwLjcpIHtcbiAgICB2YXIgbiwgaTtcbiAgICBpZiAoY2MuaXNWYWxpZChlKSkge1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgZS5fX2Rhcmtfb3JpZ2luQ29sb3JfXyB8fCAoZS5fX2Rhcmtfb3JpZ2luQ29sb3JfXyA9IGUuY29sb3IuY2xvbmUoKSk7XG4gICAgICAgIHZhciBhID0gZS5fX2Rhcmtfb3JpZ2luQ29sb3JfXztcbiAgICAgICAgZS5jb2xvciA9IG5ldyBjYy5Db2xvcihNYXRoLmZsb29yKGEuciAqIG8pLCBNYXRoLmZsb29yKGEuZyAqIG8pLCBNYXRoLmZsb29yKGEuYiAqIG8pKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5fX2Rhcmtfb3JpZ2luQ29sb3JfXykge1xuICAgICAgICBlLmNvbG9yID0gZS5fX2Rhcmtfb3JpZ2luQ29sb3JfXy5jbG9uZSgpO1xuICAgICAgICBkZWxldGUgZS5fX2Rhcmtfb3JpZ2luQ29sb3JfXztcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGwgPSBfX3ZhbHVlcyhlLmNoaWxkcmVuKSwgcyA9IGwubmV4dCgpOyAhcy5kb25lOyBzID0gbC5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgYyA9IHMudmFsdWU7XG4gICAgICAgICAgdGhpcy5zZXROb2RlRGFyayhjLCB0LCBvKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBuID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHMgJiYgIXMuZG9uZSAmJiAoaSA9IGwucmV0dXJuKSAmJiBpLmNhbGwobCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RhdGljIGNsZWFyTm9kZURhcmsoZSkge1xuICAgIGNjLmlzVmFsaWQoZSkgJiYgZGVsZXRlIGUuX19kYXJrX29yaWdpbkNvbG9yX187XG4gIH1cbiAgc3RhdGljIGdldElucHV0QWRkUHJvcFR5cGUoZSkge1xuICAgIHJldHVybiBlID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsID8gRUdhbWVJbnB1dEVudW0uVGlsZTJBZGRQcm9wIDogRUdhbWVJbnB1dEVudW0uQWRkUHJvcDtcbiAgfVxuICBzdGF0aWMgZ2V0R2FtZUNvbnRyb2xsZXJCeVR5cGUoZSkge1xuICAgIGUgfHwgKGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSk7XG4gICAgdmFyIHQgPSBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBNakdhbWVUeXBlLk5vcm1hbDpcbiAgICAgICAgcmV0dXJuIHQuZ2V0Q29udHJvQnlOYW1lKFwiTWFpbkdhbWVDb250cm9sbGVyXCIpO1xuICAgICAgY2FzZSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsOlxuICAgICAgICByZXR1cm4gdC5nZXRDb250cm9CeU5hbWUoXCJUaWxlMkdhbWVDb250cm9sbGVyXCIpO1xuICAgICAgY2FzZSBNakdhbWVUeXBlLlRyYXZlbDpcbiAgICAgICAgcmV0dXJuIHQuZ2V0Q29udHJvQnlOYW1lKFwiVHJhdmVsR2FtZUNvbnRyb2xsZXJcIik7XG4gICAgICBjYXNlIE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2U6XG4gICAgICAgIHJldHVybiB0LmdldENvbnRyb0J5TmFtZShcIkRhaWx5Q2hhbGxlbmdlQ29udHJvbGxlclwiKTtcbiAgICAgIGNhc2UgTWpHYW1lVHlwZS5DbGFzc2ljOlxuICAgICAgICByZXR1cm4gdC5nZXRDb250cm9CeU5hbWUoXCJDbGFzc2ljQ29udHJvbGxlclwiKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0LmdldENvbnRyb0J5TmFtZShcIk1haW5HYW1lQ29udHJvbGxlclwiKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGRlbGl2ZXJQcm9wKHQpIHtcbiAgICB2YXIgbyA9IHQuaXNJbkdhbWUsXG4gICAgICBuID0gdC5yZWFzb25JZCxcbiAgICAgIGkgPSB0LnJlYXNvbkluZm8sXG4gICAgICByID0gdC5pdGVtVHlwZSxcbiAgICAgIGEgPSB0Lml0ZW1Db3VudDtcbiAgICBpZiAobykge1xuICAgICAgdmFyIGwgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSxcbiAgICAgICAgYyA9IHtcbiAgICAgICAgICBpbnB1dFR5cGU6IEdhbWVVdGlscy5nZXRJbnB1dEFkZFByb3BUeXBlKGwpLFxuICAgICAgICAgIHByb3BUeXBlOiBJdGVtVHlwZUtleVtyXSxcbiAgICAgICAgICBudW06IGEsXG4gICAgICAgICAgcmVhc29uSWQ6IG4sXG4gICAgICAgICAgcmVhc29uSW5mbzogaVxuICAgICAgICB9O1xuICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KGMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZiA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lRGF0YSgpLFxuICAgICAgICBoID0gMDtcbiAgICAgIGlmIChyID09PSBFSXRlbVR5cGUuU2h1ZmZsZSkge1xuICAgICAgICBmLmNoYW5nZVNodWZmbGVOdW1zKGEpO1xuICAgICAgICBoID0gZi5nZXRTaHVmZmxlTnVtcygpO1xuICAgICAgfSBlbHNlIGlmIChyID09PSBFSXRlbVR5cGUuSGludCkge1xuICAgICAgICBmLmNoYW5nZUhpdFRpcHNOdW1zKGEpO1xuICAgICAgICBoID0gZi5nZXRIaXRUaXBzTnVtcygpO1xuICAgICAgfSBlbHNlIGlmIChyID09PSBFSXRlbVR5cGUuVW5kbykge1xuICAgICAgICBmLmNoYW5nZVJldmVydE51bXMoYSk7XG4gICAgICAgIGggPSBmLmdldFJldmVydE51bXMoKTtcbiAgICAgIH1cbiAgICAgIERvdEdhbWVHZXRJdGVtLmRvdEdldEl0ZW0oZiwge1xuICAgICAgICBpdGVtSWQ6IEl0ZW1UeXBlMklkW3JdLFxuICAgICAgICBudW1iZXI6IGEsXG4gICAgICAgIGFmdGVyTnVtOiBoLFxuICAgICAgICByZWFzb25JZDogbixcbiAgICAgICAgcmVhc29uSW5mbzogaVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBpc0Z1bGxDb21ib1RyaWdnZXJlZCgpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgIGlmIChlLmdldE1haW5HYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsKSByZXR1cm4gVGlsZTJOb3JtYWxHYW1lRGF0YS5nZXRJbnN0YW5jZSgpLmdldEhhc1RyaWdnZXJlZEFsbENsZWFyKCk7XG4gICAgdmFyIHQgPSBlLmdldEN1cnJlbnRHYW1lRGF0YSgpLFxuICAgICAgbyA9IHQuZ2V0SGFzVHJpZ2dlcmVkRnVsbENvbWJvKCksXG4gICAgICBuID0gdC5nZXRIYXNUcmlnZ2VyZWRSZXdhcmRDb21ibygpO1xuICAgIHJldHVybiBvIHx8IG47XG4gIH1cbn0iXX0=