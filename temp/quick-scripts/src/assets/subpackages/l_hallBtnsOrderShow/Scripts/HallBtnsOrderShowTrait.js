"use strict";
cc._RF.push(module, '91b89a3vypBfY98NZ2tzPMz', 'HallBtnsOrderShowTrait');
// subpackages/l_hallBtnsOrderShow/Scripts/HallBtnsOrderShowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var l = {
    Task: "task",
    Rank: "rank",
    Travel: "travel",
    DailyChallenge: "dailyChallenge",
    DailySign: "dailySign"
};
var HallBtnsOrderShowTrait = /** @class */ (function (_super) {
    __extends(HallBtnsOrderShowTrait, _super);
    function HallBtnsOrderShowTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.featureTypeList = [];
        return _this;
    }
    Object.defineProperty(HallBtnsOrderShowTrait.prototype, "orderDataList", {
        get: function () {
            this.localData || (this.localData = {
                orderDataList: []
            });
            this.localData.orderDataList || (this.localData.orderDataList = []);
            return this.localData.orderDataList;
        },
        enumerable: false,
        configurable: true
    });
    HallBtnsOrderShowTrait.prototype.getLevelFromTrait = function (e, t, r) {
        var n, a = mj.getClassByName(e);
        if (!a)
            return null;
        var i = a.getInstance();
        if (!i || false === i.eventEnabled)
            return null;
        var o = null === (n = i[t]) || void 0 === n ? void 0 : n.call(i);
        return null == o ? null : r ? r(o) : o;
    };
    HallBtnsOrderShowTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initFeatureType();
    };
    HallBtnsOrderShowTrait.prototype.initFeatureType = function () {
        this.addFeatureType(l.DailySign);
        this.addFeatureType(l.Task);
        this.addFeatureType(l.Rank);
        this.addFeatureType(l.Travel);
        this.addFeatureType(l.DailyChallenge);
    };
    HallBtnsOrderShowTrait.prototype.syncFeatureTypeToOrderData = function () {
        var e, t, r = function r(e) {
            if (n.orderDataList.find(function (t) {
                return t.featureType === e;
            }))
                return "continue";
            var t = {
                featureType: e,
                unlockLevel: null,
                isShowed: false,
                isUnlocked: false
            };
            n.orderDataList.push(t);
        }, n = this;
        try {
            for (var a = __values(this.featureTypeList), i = a.next(); !i.done; i = a.next())
                r(i.value);
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                i && !i.done && (t = a.return) && t.call(a);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    HallBtnsOrderShowTrait.prototype.initOrderData = function () {
        var e, t;
        this.syncFeatureTypeToOrderData();
        var r = this.getCurrentLevel();
        try {
            for (var n = __values(this.orderDataList), a = n.next(); !a.done; a = n.next()) {
                var i = a.value;
                if (!i.isShowed) {
                    var l = this.getUnlockLevel(i.featureType);
                    if (null === l || l <= 0)
                        continue;
                    i.unlockLevel = l;
                }
                null !== i.unlockLevel && this.isLevelReached(i.featureType, r, i.unlockLevel) && (i.isUnlocked || (i.isUnlocked = true));
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                a && !a.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        this.sortOrderDataList();
    };
    HallBtnsOrderShowTrait.prototype.onHallCtl_viewDidLoad = function (e, t) {
        this.initOrderData();
        t();
    };
    HallBtnsOrderShowTrait.prototype.onWinVw_onLoad = function (e, t) {
        this.initOrderData();
        t();
    };
    HallBtnsOrderShowTrait.prototype.onFailVw_onLoad = function (e, t) {
        this.initOrderData();
        t();
    };
    HallBtnsOrderShowTrait.prototype.getUnlockLevel = function (e) {
        switch (e) {
            case l.Task:
                return this.getLevelFromTrait("TaskTrait", "getOpenCondition", function (e) {
                    return null == e ? void 0 : e.level;
                });
            case l.Rank:
                return this.getLevelFromTrait("RankTrait", "getLimitLevel");
            case l.Travel:
                return this.getLevelFromTrait("JourneyTrait", "getLimitLevel");
            case l.DailyChallenge:
                return this.getLevelFromTrait("DailyLockTrait", "getLimitLevel");
            case l.DailySign:
                return this.getLevelFromTrait("DailySignClassicTrait", "getUnlockLevel");
            default:
                return null;
        }
    };
    HallBtnsOrderShowTrait.prototype.addFeatureType = function (e) {
        this.featureTypeList.includes(e) || this.featureTypeList.push(e);
    };
    HallBtnsOrderShowTrait.prototype.changeIconShowed = function (e) {
        var t = this.shouldShowFeature(e);
        if (t) {
            var r = this.orderDataList.find(function (t) {
                return t.featureType === e;
            });
            if (r) {
                var n = false;
                if (!r.isShowed) {
                    r.isShowed = true;
                    n = true;
                }
                if (!r.isUnlocked && null !== r.unlockLevel) {
                    var a = this.getCurrentLevel();
                    if (this.isLevelReached(r.featureType, a, r.unlockLevel)) {
                        r.isUnlocked = true;
                        n = true;
                    }
                }
                n && (this.localData.orderDataList = this.orderDataList);
            }
        }
        return t;
    };
    HallBtnsOrderShowTrait.prototype.sortOrderDataList = function () {
        this.orderDataList.sort(function (e, t) {
            return null === e.unlockLevel && null === t.unlockLevel ? 0 : null === e.unlockLevel ? 1 : null === t.unlockLevel ? -1 : e.unlockLevel - t.unlockLevel;
        });
        this.localData.orderDataList = this.orderDataList;
    };
    HallBtnsOrderShowTrait.prototype.getCurrentLevel = function () {
        return UserModel_1.default.getInstance().getMainGameData().getLevelId();
    };
    HallBtnsOrderShowTrait.prototype.isLevelReached = function (e, t, r) {
        return e === l.Task || e === l.Rank ? t > r : t >= r;
    };
    HallBtnsOrderShowTrait.prototype.isFeatureUnlocked = function (e) {
        var t = this.orderDataList.find(function (t) {
            return t.featureType === e;
        });
        if (!t || null === t.unlockLevel)
            return true;
        var r = this.getCurrentLevel();
        if (this.isLevelReached(e, r, t.unlockLevel))
            return true;
        if (t.isShowed)
            return true;
        for (var n = -1, a = -1, i = -1, o = 0; o < this.orderDataList.length; o++) {
            var l = this.orderDataList[o];
            l.featureType === e && (n = o);
            l.isShowed && o > a && (a = o);
            null !== l.unlockLevel && this.isLevelReached(l.featureType, r, l.unlockLevel) && o > i && (i = o);
        }
        if (a > n)
            return true;
        if (i >= n)
            return true;
        var u = Math.max(a, i);
        if (u + 1 === n) {
            if (-1 === u)
                return true;
            var s = this.orderDataList[u];
            return !(!(null !== s.unlockLevel && this.isLevelReached(s.featureType, r, s.unlockLevel)) && !s.isUnlocked);
        }
        return false;
    };
    HallBtnsOrderShowTrait.prototype.shouldShowFeature = function (e) {
        0 === this.orderDataList.length && this.featureTypeList.length > 0 && this.initOrderData();
        var t = this.orderDataList.find(function (t) {
            return t.featureType === e;
        });
        if (!t)
            return true;
        if (null === t.unlockLevel) {
            var r = this.getUnlockLevel(e);
            if (!(null !== r && r > 0))
                return true;
            t.unlockLevel = r;
            this.sortOrderDataList();
        }
        return !!this.isFeatureUnlocked(e);
    };
    HallBtnsOrderShowTrait.prototype.onTaskTrait_canShowTaskBtn = function (e, t) {
        if (this.shouldShowFeature(l.Task)) {
            this.changeIconShowed(l.Task);
            t();
        }
        else
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: false
            });
    };
    HallBtnsOrderShowTrait.prototype.onRankTrait_checkLv = function (e, t) {
        if (this.shouldShowFeature(l.Rank)) {
            this.changeIconShowed(l.Rank);
            t();
        }
        else
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: false
            });
    };
    HallBtnsOrderShowTrait.prototype.onDSClassic_canShowBtn = function (e, t) {
        if (this.shouldShowFeature(l.DailySign)) {
            this.changeIconShowed(l.DailySign);
            t();
        }
        else
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: false
            });
    };
    HallBtnsOrderShowTrait.prototype.onJourney_CreateBtn = function (e, t) {
        if (this.shouldShowFeature(l.Travel)) {
            this.changeIconShowed(l.Travel);
            t();
        }
        else
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
    };
    HallBtnsOrderShowTrait.prototype.onDaily_checkHDBtn = function (e, t) {
        if (this.shouldShowFeature(l.DailyChallenge)) {
            this.changeIconShowed(l.DailyChallenge);
            t();
        }
        else {
            e.args[0] = false;
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
    };
    HallBtnsOrderShowTrait.prototype.onDaily_isOpenDaily = function (e, t) {
        if (this.shouldShowFeature(l.DailyChallenge)) {
            this.changeIconShowed(l.DailyChallenge);
            t();
        }
        else
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: false
            });
    };
    HallBtnsOrderShowTrait.traitKey = "HallBtnsOrderShow";
    __decorate([
        mj.traitEvent("HBtnsShow_initOrderData")
    ], HallBtnsOrderShowTrait.prototype, "initOrderData", null);
    __decorate([
        mj.traitEvent("HBtnsShow_getUnlockLevel")
    ], HallBtnsOrderShowTrait.prototype, "getUnlockLevel", null);
    __decorate([
        mj.traitEvent("HBtnsShow_addFeature")
    ], HallBtnsOrderShowTrait.prototype, "addFeatureType", null);
    __decorate([
        mj.traitEvent("HBtnsShow_chgIconShow")
    ], HallBtnsOrderShowTrait.prototype, "changeIconShowed", null);
    HallBtnsOrderShowTrait = __decorate([
        mj.trait,
        mj.class("HallBtnsOrderShowTrait")
    ], HallBtnsOrderShowTrait);
    return HallBtnsOrderShowTrait;
}(Trait_1.default));
exports.default = HallBtnsOrderShowTrait;

cc._RF.pop();