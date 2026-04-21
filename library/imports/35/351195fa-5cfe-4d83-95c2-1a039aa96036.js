"use strict";
cc._RF.push(module, '35119X6XP5Ng5XCGgOaqWA2', 'ExtractTool');
// Scripts/core/extractQuestion/ExtractTool.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UserModel_1 = require("../../gamePlay/user/UserModel");
var DynamicCurve_1 = require("../../types/DynamicCurve");
var GameTypeEnums_1 = require("../simulator/constant/GameTypeEnums");
var ExtractNormalLevels_1 = require("./ExtractNormalLevels");
var ExtractSpecialHardLevels_1 = require("./ExtractSpecialHardLevels");
var ExtractTravelHardLevels_1 = require("./ExtractTravelHardLevels");
var ExtractStatic_1 = require("./ExtractStatic");
var Tile2CapabilityExtractRegistry_1 = require("../../Tile2CapabilityExtractRegistry");
var ExtractTool = /** @class */ (function () {
    function ExtractTool() {
        this.isInitMap = new Map();
    }
    ExtractTool_1 = ExtractTool;
    ExtractTool.getInstance = function () {
        this._instance || (this._instance = new ExtractTool_1());
        return this._instance;
    };
    ExtractTool.getCurrentGameType = function () {
        var e = UserModel_1.default.getInstance(), t = e.getCurrentGameType(), o = e.getGameDataByGameType(t);
        return o && o.gameType ? o.gameType : this._currentGameType;
    };
    ExtractTool.getCurrentJourneyType = function () {
        var e = UserModel_1.default.getInstance(), t = e.getCurrentGameType(), o = e.getGameDataByGameType(t);
        return o && "function" == typeof o.getJourneyType ? o.getJourneyType() : this._currentJourneyType;
    };
    ExtractTool.gameTypeFromNumber = function (e) {
        switch (e) {
            case 1:
                return GameTypeEnums_1.MjGameType.Normal;
            case 2:
                return GameTypeEnums_1.MjGameType.Travel;
            case 3:
                return GameTypeEnums_1.MjGameType.DailyChallenge;
            default:
                return GameTypeEnums_1.MjGameType.Normal;
        }
    };
    ExtractTool.prototype.getInitKey = function (e, t) {
        return "Travel" === e && t ? e + "_" + t : e;
    };
    ExtractTool.prototype.initData = function (e, o) {
        var n = this;
        if (void 0 !== e) {
            ExtractTool_1._currentGameType = e;
            ExtractTool_1._currentJourneyType = o || null;
        }
        this.initOtherData(e, o);
        DynamicCurve_1.default.instance.init();
        var i = this.getInitKey(e, o);
        return this.isInitMap.get(i) ? Promise.resolve() : ExtractNormalLevels_1.default.getInstance().initData().then(function (e) {
            e && n.isInitMap.set(i, true);
        });
    };
    ExtractTool.prototype.initOtherData = function () { };
    ExtractTool.prototype.getAllNamesData = function () {
        return ExtractNormalLevels_1.default.getInstance().getAllNamesData();
    };
    ExtractTool.prototype.isHardLevel = function (e) {
        return this.isHardUI(e) || this.isExpertUI(e);
    };
    ExtractTool.prototype.isFixedLevel = function (e) {
        return e <= 0;
    };
    ExtractTool.prototype.getFixedLevelStr = function () {
        return null;
    };
    ExtractTool.prototype.getHardLevelNum = function (e) {
        if (e < 10)
            return 0;
        var t = 0;
        t += Math.floor(e / 10);
        e >= 15 && (t += Math.floor((e - 15) / 10) + 1);
        return t;
    };
    ExtractTool.prototype.isHardUI = function (e) {
        return e >= 10 && e % 10 == 0;
    };
    ExtractTool.prototype.isExpertUI = function (e) {
        return e >= 10 && e % 10 == 5;
    };
    ExtractTool.prototype.getLevelType = function () {
        return 0;
    };
    ExtractTool.prototype.isHardUseFixedLevel = function () {
        return false;
    };
    ExtractTool.prototype.getHardContentData = function (e) {
        var o = this;
        return this.isHardUseFixedLevel(e.levelID) ? ((e.gameType || ExtractTool_1.getCurrentGameType()) === GameTypeEnums_1.MjGameType.Travel ? ExtractTravelHardLevels_1.default.getInstance() : ExtractSpecialHardLevels_1.default.getInstance()).getContent(e.levelID).then(function (t) {
            return t ? __spreadArrays(t, [false]) : o.getNormalContentData(e);
        }) : this.getNormalContentData(e);
    };
    ExtractTool.prototype.getRealLevelID = function (e) {
        var t = ExtractNormalLevels_1.ExtractDimension.getGuideNum();
        return e - this.getHardLevelNum(e) - t;
    };
    ExtractTool.prototype.getNormalContentData = function (e) {
        var t = this;
        e.reallyLevelID = Math.max(1, e.levelIndex);
        void 0 !== e.levelID && e.levelID;
        return ExtractNormalLevels_1.default.getInstance().getContent(e).then(function (o) {
            var n = void 0 !== e.levelID && t.isFixedLevel(e.levelID);
            return __spreadArrays(o, [!n]);
        });
    };
    ExtractTool.prototype.isOpenTravelHard = function () {
        return false;
    };
    ExtractTool.prototype.getTravelContentData = function (e) {
        var t = e.journeyType === GameTypeEnums_1.JourneyType.Yoga, o = mj.getClassByName("TravelGameModel");
        if (!t && o.getInstance().isHardLevel(e.levelID) && this.isOpenTravelHard())
            return this.getHardContentData(e);
        e.reallyLevelID = Math.max(1, e.levelIndex);
        return ExtractNormalLevels_1.default.getInstance().getContent(e).then(function (e) {
            return __spreadArrays(e, [true]);
        });
    };
    ExtractTool.prototype.getDailyChallengeContentData = function (e) {
        e.reallyLevelID = Math.max(1, e.levelIndex);
        e.challengeDate && e.challengeDate;
        return ExtractNormalLevels_1.default.getInstance().getContent(e).then(function (e) {
            return __spreadArrays(e, [true]);
        });
    };
    ExtractTool.prototype.getContentData = function (e) {
        ExtractTool_1._currentGameType = e.gameType || GameTypeEnums_1.MjGameType.Normal;
        ExtractTool_1._currentJourneyType = e.journeyType || null;
        if (e.levelID && this.isFixedLevel(e.levelID)) {
            var o = this.getFixedLevelStr(e.levelID);
            if (o)
                return Promise.resolve([o, 0, "fixed", "FixedLevel", "固定关", false]);
        }
        return DynamicCurve_1.default.instance.supportMode(e.gameType) ? this.getDynamicContentData(e) : this.getNonDynamicContentData(e);
    };
    ExtractTool.prototype.getDynamicContentData = function (e) {
        var t = this;
        return new Promise(function (o) {
            Date.now();
            DynamicCurve_1.default.instance.getContentData(e).then(function (n) {
                if (n && null !== n[0]) {
                    o(n);
                }
                else {
                    t.getNonDynamicContentData(e).then(function (e) {
                        o(e);
                    });
                }
            }).catch(function () {
                t.getNonDynamicContentData(e).then(function (e) {
                    o(e);
                });
            });
        });
    };
    ExtractTool.prototype.getNonDynamicContentData = function (e) {
        switch (e.gameType || GameTypeEnums_1.MjGameType.Normal) {
            case GameTypeEnums_1.MjGameType.Normal:
                return this.canUseStaticContentByLevelID(e.levelID) ? Promise.resolve(this.getStaticContentData(e)) : e.levelID && this.isHardLevel(e.levelID) ? this.getHardContentData(e) : this.getNormalContentData(e);
            case GameTypeEnums_1.MjGameType.Travel:
                return this.getTravelContentData(e);
            case GameTypeEnums_1.MjGameType.DailyChallenge:
                return this.getDailyChallengeContentData(e);
        }
    };
    ExtractTool.prototype.UpdateCapability = function (e, t, o, n, i) {
        return this.isSupportCapabilityUpdate(i) ? this.isStaticLevel(n) ? null : this.isHardLevel(n) && this.isHardUseFixedLevel(n) ? null : ExtractNormalLevels_1.ExtractDimension.getGuideNum() == n ? null : ExtractNormalLevels_1.default.getInstance().updateCapability(e, t, o) : null;
    };
    ExtractTool.prototype.isSupportCapabilityUpdate = function (e) {
        return e === GameTypeEnums_1.MjGameType.Tile2Normal ? Tile2CapabilityExtractRegistry_1.default.isEnabled() : e === GameTypeEnums_1.MjGameType.Normal;
    };
    ExtractTool.prototype.canUseStaticContentByLevelID = function (e) {
        return !this.isFixedLevel(e) && !!this.isStaticLevel(e);
    };
    ExtractTool.prototype.isStaticLevel = function () {
        return this.canUseStaticContent();
    };
    ExtractTool.prototype.canUseStaticContent = function () {
        return false;
    };
    ExtractTool.prototype.getStaticContentData = function (e) {
        return ExtractStatic_1.default.getInstance().getContent(e.levelID);
    };
    ExtractTool.prototype.getExpectTime = function (e, t) {
        if (DynamicCurve_1.default.instance.supportMode(t)) {
            var o = DynamicCurve_1.default.instance.getExtractInfo(t), n = o.ok, i = o.predictTime;
            if (n)
                return i;
        }
        return ExtractNormalLevels_1.ExtractDimension.getEt(e);
    };
    ExtractTool.prototype.getSolvers = function () {
        return null;
    };
    ExtractTool.prototype.getExtractInfo = function (e) {
        return DynamicCurve_1.default.instance.supportMode(e) ? DynamicCurve_1.default.instance.getExtractInfo(e) : null;
    };
    ExtractTool.prototype.getUserAllAbilityValue = function (e, t) {
        var o, n, i, r;
        if (DynamicCurve_1.default.instance.supportMode(t)) {
            var a = DynamicCurve_1.default.instance.getExtractInfo(t), s = a.ok, u = a.capability;
            if (s)
                return [u, -1, -1, -1];
        }
        if (!e || "" == e)
            return [-1, -1, -1, -1];
        var p = ExtractNormalLevels_1.default.getInstance().getData();
        return p && p.ru ? [p.ru, p.du, null !== (n = null === (o = p.subArr.find(function (t) {
                return t.dimensionName == e;
            })) || void 0 === o ? void 0 : o.ru) && void 0 !== n ? n : -1, null !== (r = null === (i = p.subArr.find(function (t) {
                return t.dimensionName == e;
            })) || void 0 === i ? void 0 : i.du) && void 0 !== r ? r : -1] : [-1, -1, -1, -1];
    };
    ExtractTool.prototype.getUsePatchArr = function (e) {
        var t = [];
        if (this.isFixedLevel(e) || this.isHardLevel(e))
            return t;
        ExtractNormalLevels_1.ExtractDimension.isOpenPatch1() && t.push(1);
        ExtractNormalLevels_1.ExtractDimension.isOpenPatch2() && t.push(2);
        ExtractNormalLevels_1.ExtractDimension.isOpenPatch3() && t.push(3);
        ExtractNormalLevels_1.ExtractDimension.isOpenPatch4() && t.push(4);
        return t;
    };
    var ExtractTool_1;
    ExtractTool.ExtractDimension = ExtractNormalLevels_1.ExtractDimension;
    ExtractTool._currentGameType = GameTypeEnums_1.MjGameType.Normal;
    ExtractTool._currentJourneyType = null;
    ExtractTool._instance = null;
    __decorate([
        mj.traitEvent("ExtractTool_initOther")
    ], ExtractTool.prototype, "initOtherData", null);
    __decorate([
        mj.traitEvent("ExtractTool_isFixedLevel")
    ], ExtractTool.prototype, "isFixedLevel", null);
    __decorate([
        mj.traitEvent("ExtractTool_getFixedLvStr")
    ], ExtractTool.prototype, "getFixedLevelStr", null);
    __decorate([
        mj.traitEvent("ExtractTool_isHardUI")
    ], ExtractTool.prototype, "isHardUI", null);
    __decorate([
        mj.traitEvent("ExtractTool_isExpertUI")
    ], ExtractTool.prototype, "isExpertUI", null);
    __decorate([
        mj.traitEvent("ExtractTool_getLvType")
    ], ExtractTool.prototype, "getLevelType", null);
    __decorate([
        mj.traitEvent("ExtractTool_isHardUseFix")
    ], ExtractTool.prototype, "isHardUseFixedLevel", null);
    __decorate([
        mj.traitEvent("ExtractTool_isTravelHard")
    ], ExtractTool.prototype, "isOpenTravelHard", null);
    __decorate([
        mj.traitEvent("ExtractTool_upCapability")
    ], ExtractTool.prototype, "UpdateCapability", null);
    __decorate([
        mj.traitEvent("ExtractTool_isSupCapUp")
    ], ExtractTool.prototype, "isSupportCapabilityUpdate", null);
    __decorate([
        mj.traitEvent("ExtractTool_isStaticLv")
    ], ExtractTool.prototype, "isStaticLevel", null);
    __decorate([
        mj.traitEvent("ExtractTool_canUseStatic")
    ], ExtractTool.prototype, "canUseStaticContent", null);
    __decorate([
        mj.traitEvent("ExtractTool_getSolvers")
    ], ExtractTool.prototype, "getSolvers", null);
    ExtractTool = ExtractTool_1 = __decorate([
        mj.class("ExtractTool")
    ], ExtractTool);
    return ExtractTool;
}());
exports.default = ExtractTool;

cc._RF.pop();