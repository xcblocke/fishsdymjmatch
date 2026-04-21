"use strict";
cc._RF.push(module, '1bf5eaMp+RKq6QAMEf3CQ3Q', 'WinStreakRewardTrait');
// subpackages/l_winStreakReward/Scripts/WinStreakRewardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var WinStreakRewardTrait = /** @class */ (function (_super) {
    __extends(WinStreakRewardTrait, _super);
    function WinStreakRewardTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {
            gameTypes: [GameTypeEnums_1.MjGameType.Normal]
        };
        _this._stateByMode = new Map();
        _this._isRestartCurrentLevel = false;
        return _this;
    }
    WinStreakRewardTrait.prototype.onLoad = function () {
        var e, i;
        _super.prototype.onLoad.call(this);
        this._config = {
            gameTypes: null !== (i = null === (e = this._traitData) || void 0 === e ? void 0 : e.gameTypes) && void 0 !== i ? i : [GameTypeEnums_1.MjGameType.Normal]
        };
        this.applyColdStartResidualCheck();
    };
    WinStreakRewardTrait.prototype.applyColdStartResidualCheck = function () {
        var t, e, i, n, o = this._config.gameTypes;
        if (Array.isArray(o)) {
            var r = UserModel_1.default.getInstance();
            try {
                for (var s = __values(o), c = s.next(); !c.done; c = s.next()) {
                    var l = c.value, d = r.getGameDataByGameType(l);
                    if (d) {
                        var p = null === (i = d.getLevelData) || void 0 === i ? void 0 : i.call(d), h = null === (n = d.getOriginalLevelData) || void 0 === n ? void 0 : n.call(d);
                        p && h && (this.getState(l).lastRoundHadDeadLock = true);
                    }
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    c && !c.done && (e = s.return) && e.call(s);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
    };
    WinStreakRewardTrait.prototype.getCurrentGameType = function () {
        return UserModel_1.default.getInstance().getCurrentGameType();
    };
    WinStreakRewardTrait.prototype.isGameTypeEnabled = function (t) {
        return this._config.gameTypes.includes(t);
    };
    WinStreakRewardTrait.prototype.getState = function (t) {
        this._stateByMode.has(t) || this._stateByMode.set(t, {
            lastRoundWin: false,
            lastRoundHadDeadLock: false,
            hadPostInterAdThisRound: false,
            hadPreInterAdThisRound: false,
            hasShownReward: false
        });
        return this._stateByMode.get(t);
    };
    WinStreakRewardTrait.prototype.isWinStreak = function (t) {
        var e = this.getState(t);
        return e.lastRoundWin && !e.lastRoundHadDeadLock;
    };
    WinStreakRewardTrait.prototype.shouldShowReward = function (t) {
        var e = this.getState(t), i = e.hadPostInterAdThisRound || e.hadPreInterAdThisRound;
        return this.isGameTypeEnabled(t) && this.isWinStreak(t) && i && !e.hasShownReward;
    };
    WinStreakRewardTrait.prototype.resetWinStreak = function (t) {
        var e = this.getState(t);
        e.lastRoundWin = false;
        e.lastRoundHadDeadLock = false;
        e.hadPostInterAdThisRound = false;
        e.hadPreInterAdThisRound = false;
    };
    WinStreakRewardTrait.prototype.onAdMgr_interAdClose = function (t, e) {
        var i, n = this.getCurrentGameType(), o = this.getState(n), r = null === (i = t.args) || void 0 === i ? void 0 : i[0];
        if ("beforeInterAd" === (null == r ? void 0 : r.adTimeType)) {
            o.hadPreInterAdThisRound = true;
        }
        else {
            "afterInterAd" === (null == r ? void 0 : r.adTimeType) && (o.hadPostInterAdThisRound = true);
        }
        e();
    };
    WinStreakRewardTrait.prototype.onWinCtrl_viewShow = function (t, e) {
        var i = this.getCurrentGameType(), n = this.getState(i);
        n.lastRoundWin = true;
        n.hasShownReward = false;
        e();
    };
    WinStreakRewardTrait.prototype.onTLWinVw_onLoad = function (t, e) {
        var i = this.getCurrentGameType(), n = this.getState(i);
        n.lastRoundWin = true;
        n.hasShownReward = false;
        e();
    };
    WinStreakRewardTrait.prototype.onDCWinVw_onLoad = function (t, e) {
        var i = this.getCurrentGameType(), n = this.getState(i);
        n.lastRoundWin = true;
        n.hasShownReward = false;
        e();
    };
    WinStreakRewardTrait.prototype.onTile2WinVw_onLoad = function (t, e) {
        var i = this.getCurrentGameType(), n = this.getState(i);
        n.lastRoundWin = true;
        n.hasShownReward = false;
        e();
    };
    WinStreakRewardTrait.prototype.onFailBhv_start = function (t, e) {
        var i = this.getCurrentGameType();
        this.getState(i).lastRoundHadDeadLock = true;
        e();
    };
    WinStreakRewardTrait.prototype.onTile2FailBhv_start = function (t, e) {
        var i = this.getCurrentGameType();
        this.getState(i).lastRoundHadDeadLock = true;
        e();
    };
    WinStreakRewardTrait.prototype.onFailVw_show = function (t, e) {
        var i = this.getCurrentGameType();
        this.getState(i).lastRoundWin = false;
        e();
    };
    WinStreakRewardTrait.prototype.onIptSetLv_newGComp = function (t, e) {
        var i = t.ins, n = null == i ? void 0 : i.gameContext, o = (!!n && n.getIsNewGame(), !!n && n.getIsRestart());
        this._isRestartCurrentLevel = o;
        e();
    };
    WinStreakRewardTrait.prototype.onIptT2SetLv_newGmComplete = function (t, e) {
        var i = t.ins, n = null == i ? void 0 : i.gameContext, o = !!n && n.getIsRestart();
        this._isRestartCurrentLevel = o;
        e();
    };
    WinStreakRewardTrait.prototype.onEntAniFiBhv_start = function (t, e) {
        if (this._isRestartCurrentLevel) {
            this._isRestartCurrentLevel = false;
            e();
        }
        else {
            var i = this.getCurrentGameType(), n = this.getState(i);
            if (this.shouldShowReward(i)) {
                n.hasShownReward = true;
                n.hadPostInterAdThisRound = false;
                n.hadPreInterAdThisRound = false;
                this.showWinStreakReward();
            }
            else {
                n.hasShownReward = false;
                n.hadPostInterAdThisRound = false;
            }
            n.lastRoundHadDeadLock = false;
            e();
        }
    };
    WinStreakRewardTrait.prototype.showWinStreakReward = function () {
        var t = this.getRandomReward(), e = this.getRandomReward(), i = this.getCurrentGameType(), n = GameUtils_1.default.getInputAddPropType(i);
        GameInteraction_1.GameInteraction.input({
            inputType: n,
            propType: "shuffle",
            num: t,
            reasonId: GameTypeEnums_1.EGetItemReasonId.WinStreakReward,
            reasonInfo: "连胜奖励"
        });
        GameInteraction_1.GameInteraction.input({
            inputType: n,
            propType: "hitTips",
            num: e,
            reasonId: GameTypeEnums_1.EGetItemReasonId.WinStreakReward,
            reasonInfo: "连胜奖励"
        });
        var o = {
            hint: e,
            shuffle: t
        };
        ControllerManager_1.default.getInstance().pushViewByController("WinStreakRewardController", {
            config: o
        });
    };
    WinStreakRewardTrait.prototype.getRandomReward = function () {
        return Math.floor(3 * Math.random()) + 1;
    };
    WinStreakRewardTrait.traitKey = "WinStreakReward";
    WinStreakRewardTrait = __decorate([
        mj.trait,
        mj.class("WinStreakRewardTrait")
    ], WinStreakRewardTrait);
    return WinStreakRewardTrait;
}(Trait_1.default));
exports.default = WinStreakRewardTrait;

cc._RF.pop();