
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_winStreakReward/Scripts/WinStreakRewardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dpblN0cmVha1Jld2FyZC9TY3JpcHRzL1dpblN0cmVha1Jld2FyZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBc0c7QUFDdEcsNEVBQXVFO0FBQ3ZFLG9GQUFtRjtBQUNuRiwwRkFBcUY7QUFDckYsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUdqRTtJQUFrRCx3Q0FBSztJQUF2RDtRQUFBLHFFQXFNQztRQXBNQyxhQUFPLEdBQUc7WUFDUixTQUFTLEVBQUUsQ0FBQywwQkFBVSxDQUFDLE1BQU0sQ0FBQztTQUMvQixDQUFDO1FBQ0Ysa0JBQVksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLDRCQUFzQixHQUFHLEtBQUssQ0FBQzs7SUFnTWpDLENBQUM7SUE5TEMscUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLFNBQVMsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsMEJBQVUsQ0FBQyxNQUFNLENBQUM7U0FDMUksQ0FBQztRQUNGLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDRCwwREFBMkIsR0FBM0I7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcs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O1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQTlMTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBTmpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0FxTXhDO0lBQUQsMkJBQUM7Q0FyTUQsQUFxTUMsQ0FyTWlELGVBQUssR0FxTXREO2tCQXJNb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSwgRUdldEl0ZW1SZWFzb25JZCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IHsgR2FtZUludGVyYWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9HYW1lSW50ZXJhY3Rpb24vR2FtZUludGVyYWN0aW9uJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJXaW5TdHJlYWtSZXdhcmRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luU3RyZWFrUmV3YXJkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jb25maWcgPSB7XG4gICAgZ2FtZVR5cGVzOiBbTWpHYW1lVHlwZS5Ob3JtYWxdXG4gIH07XG4gIF9zdGF0ZUJ5TW9kZSA9IG5ldyBNYXAoKTtcbiAgX2lzUmVzdGFydEN1cnJlbnRMZXZlbCA9IGZhbHNlO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIldpblN0cmVha1Jld2FyZFwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIGk7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgZ2FtZVR5cGVzOiBudWxsICE9PSAoaSA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdhbWVUeXBlcykgJiYgdm9pZCAwICE9PSBpID8gaSA6IFtNakdhbWVUeXBlLk5vcm1hbF1cbiAgICB9O1xuICAgIHRoaXMuYXBwbHlDb2xkU3RhcnRSZXNpZHVhbENoZWNrKCk7XG4gIH1cbiAgYXBwbHlDb2xkU3RhcnRSZXNpZHVhbENoZWNrKCkge1xuICAgIHZhciB0LFxuICAgICAgZSxcbiAgICAgIGksXG4gICAgICBuLFxuICAgICAgbyA9IHRoaXMuX2NvbmZpZy5nYW1lVHlwZXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobykpIHtcbiAgICAgIHZhciByID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBzID0gX192YWx1ZXMobyksIGMgPSBzLm5leHQoKTsgIWMuZG9uZTsgYyA9IHMubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGwgPSBjLnZhbHVlLFxuICAgICAgICAgICAgZCA9IHIuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKGwpO1xuICAgICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgICB2YXIgcCA9IG51bGwgPT09IChpID0gZC5nZXRMZXZlbERhdGEpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuY2FsbChkKSxcbiAgICAgICAgICAgICAgaCA9IG51bGwgPT09IChuID0gZC5nZXRPcmlnaW5hbExldmVsRGF0YSkgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi5jYWxsKGQpO1xuICAgICAgICAgICAgcCAmJiBoICYmICh0aGlzLmdldFN0YXRlKGwpLmxhc3RSb3VuZEhhZERlYWRMb2NrID0gdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYyAmJiAhYy5kb25lICYmIChlID0gcy5yZXR1cm4pICYmIGUuY2FsbChzKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXRDdXJyZW50R2FtZVR5cGUoKSB7XG4gICAgcmV0dXJuIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICB9XG4gIGlzR2FtZVR5cGVFbmFibGVkKHQpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmdhbWVUeXBlcy5pbmNsdWRlcyh0KTtcbiAgfVxuICBnZXRTdGF0ZSh0KSB7XG4gICAgdGhpcy5fc3RhdGVCeU1vZGUuaGFzKHQpIHx8IHRoaXMuX3N0YXRlQnlNb2RlLnNldCh0LCB7XG4gICAgICBsYXN0Um91bmRXaW46IGZhbHNlLFxuICAgICAgbGFzdFJvdW5kSGFkRGVhZExvY2s6IGZhbHNlLFxuICAgICAgaGFkUG9zdEludGVyQWRUaGlzUm91bmQ6IGZhbHNlLFxuICAgICAgaGFkUHJlSW50ZXJBZFRoaXNSb3VuZDogZmFsc2UsXG4gICAgICBoYXNTaG93blJld2FyZDogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVCeU1vZGUuZ2V0KHQpO1xuICB9XG4gIGlzV2luU3RyZWFrKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0U3RhdGUodCk7XG4gICAgcmV0dXJuIGUubGFzdFJvdW5kV2luICYmICFlLmxhc3RSb3VuZEhhZERlYWRMb2NrO1xuICB9XG4gIHNob3VsZFNob3dSZXdhcmQodCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRTdGF0ZSh0KSxcbiAgICAgIGkgPSBlLmhhZFBvc3RJbnRlckFkVGhpc1JvdW5kIHx8IGUuaGFkUHJlSW50ZXJBZFRoaXNSb3VuZDtcbiAgICByZXR1cm4gdGhpcy5pc0dhbWVUeXBlRW5hYmxlZCh0KSAmJiB0aGlzLmlzV2luU3RyZWFrKHQpICYmIGkgJiYgIWUuaGFzU2hvd25SZXdhcmQ7XG4gIH1cbiAgcmVzZXRXaW5TdHJlYWsodCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRTdGF0ZSh0KTtcbiAgICBlLmxhc3RSb3VuZFdpbiA9IGZhbHNlO1xuICAgIGUubGFzdFJvdW5kSGFkRGVhZExvY2sgPSBmYWxzZTtcbiAgICBlLmhhZFBvc3RJbnRlckFkVGhpc1JvdW5kID0gZmFsc2U7XG4gICAgZS5oYWRQcmVJbnRlckFkVGhpc1JvdW5kID0gZmFsc2U7XG4gIH1cbiAgb25BZE1ncl9pbnRlckFkQ2xvc2UodCwgZSkge1xuICAgIHZhciBpLFxuICAgICAgbiA9IHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICBvID0gdGhpcy5nZXRTdGF0ZShuKSxcbiAgICAgIHIgPSBudWxsID09PSAoaSA9IHQuYXJncykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaVswXTtcbiAgICBpZiAoXCJiZWZvcmVJbnRlckFkXCIgPT09IChudWxsID09IHIgPyB2b2lkIDAgOiByLmFkVGltZVR5cGUpKSB7XG4gICAgICBvLmhhZFByZUludGVyQWRUaGlzUm91bmQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBcImFmdGVySW50ZXJBZFwiID09PSAobnVsbCA9PSByID8gdm9pZCAwIDogci5hZFRpbWVUeXBlKSAmJiAoby5oYWRQb3N0SW50ZXJBZFRoaXNSb3VuZCA9IHRydWUpO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25XaW5DdHJsX3ZpZXdTaG93KHQsIGUpIHtcbiAgICB2YXIgaSA9IHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICBuID0gdGhpcy5nZXRTdGF0ZShpKTtcbiAgICBuLmxhc3RSb3VuZFdpbiA9IHRydWU7XG4gICAgbi5oYXNTaG93blJld2FyZCA9IGZhbHNlO1xuICAgIGUoKTtcbiAgfVxuICBvblRMV2luVndfb25Mb2FkKHQsIGUpIHtcbiAgICB2YXIgaSA9IHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICBuID0gdGhpcy5nZXRTdGF0ZShpKTtcbiAgICBuLmxhc3RSb3VuZFdpbiA9IHRydWU7XG4gICAgbi5oYXNTaG93blJld2FyZCA9IGZhbHNlO1xuICAgIGUoKTtcbiAgfVxuICBvbkRDV2luVndfb25Mb2FkKHQsIGUpIHtcbiAgICB2YXIgaSA9IHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICBuID0gdGhpcy5nZXRTdGF0ZShpKTtcbiAgICBuLmxhc3RSb3VuZFdpbiA9IHRydWU7XG4gICAgbi5oYXNTaG93blJld2FyZCA9IGZhbHNlO1xuICAgIGUoKTtcbiAgfVxuICBvblRpbGUyV2luVndfb25Mb2FkKHQsIGUpIHtcbiAgICB2YXIgaSA9IHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICBuID0gdGhpcy5nZXRTdGF0ZShpKTtcbiAgICBuLmxhc3RSb3VuZFdpbiA9IHRydWU7XG4gICAgbi5oYXNTaG93blJld2FyZCA9IGZhbHNlO1xuICAgIGUoKTtcbiAgfVxuICBvbkZhaWxCaHZfc3RhcnQodCwgZSkge1xuICAgIHZhciBpID0gdGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICB0aGlzLmdldFN0YXRlKGkpLmxhc3RSb3VuZEhhZERlYWRMb2NrID0gdHJ1ZTtcbiAgICBlKCk7XG4gIH1cbiAgb25UaWxlMkZhaWxCaHZfc3RhcnQodCwgZSkge1xuICAgIHZhciBpID0gdGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICB0aGlzLmdldFN0YXRlKGkpLmxhc3RSb3VuZEhhZERlYWRMb2NrID0gdHJ1ZTtcbiAgICBlKCk7XG4gIH1cbiAgb25GYWlsVndfc2hvdyh0LCBlKSB7XG4gICAgdmFyIGkgPSB0aGlzLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgIHRoaXMuZ2V0U3RhdGUoaSkubGFzdFJvdW5kV2luID0gZmFsc2U7XG4gICAgZSgpO1xuICB9XG4gIG9uSXB0U2V0THZfbmV3R0NvbXAodCwgZSkge1xuICAgIHZhciBpID0gdC5pbnMsXG4gICAgICBuID0gbnVsbCA9PSBpID8gdm9pZCAwIDogaS5nYW1lQ29udGV4dCxcbiAgICAgIG8gPSAoISFuICYmIG4uZ2V0SXNOZXdHYW1lKCksICEhbiAmJiBuLmdldElzUmVzdGFydCgpKTtcbiAgICB0aGlzLl9pc1Jlc3RhcnRDdXJyZW50TGV2ZWwgPSBvO1xuICAgIGUoKTtcbiAgfVxuICBvbklwdFQyU2V0THZfbmV3R21Db21wbGV0ZSh0LCBlKSB7XG4gICAgdmFyIGkgPSB0LmlucyxcbiAgICAgIG4gPSBudWxsID09IGkgPyB2b2lkIDAgOiBpLmdhbWVDb250ZXh0LFxuICAgICAgbyA9ICEhbiAmJiBuLmdldElzUmVzdGFydCgpO1xuICAgIHRoaXMuX2lzUmVzdGFydEN1cnJlbnRMZXZlbCA9IG87XG4gICAgZSgpO1xuICB9XG4gIG9uRW50QW5pRmlCaHZfc3RhcnQodCwgZSkge1xuICAgIGlmICh0aGlzLl9pc1Jlc3RhcnRDdXJyZW50TGV2ZWwpIHtcbiAgICAgIHRoaXMuX2lzUmVzdGFydEN1cnJlbnRMZXZlbCA9IGZhbHNlO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaSA9IHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICAgIG4gPSB0aGlzLmdldFN0YXRlKGkpO1xuICAgICAgaWYgKHRoaXMuc2hvdWxkU2hvd1Jld2FyZChpKSkge1xuICAgICAgICBuLmhhc1Nob3duUmV3YXJkID0gdHJ1ZTtcbiAgICAgICAgbi5oYWRQb3N0SW50ZXJBZFRoaXNSb3VuZCA9IGZhbHNlO1xuICAgICAgICBuLmhhZFByZUludGVyQWRUaGlzUm91bmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93V2luU3RyZWFrUmV3YXJkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuLmhhc1Nob3duUmV3YXJkID0gZmFsc2U7XG4gICAgICAgIG4uaGFkUG9zdEludGVyQWRUaGlzUm91bmQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG4ubGFzdFJvdW5kSGFkRGVhZExvY2sgPSBmYWxzZTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgc2hvd1dpblN0cmVha1Jld2FyZCgpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0UmFuZG9tUmV3YXJkKCksXG4gICAgICBlID0gdGhpcy5nZXRSYW5kb21SZXdhcmQoKSxcbiAgICAgIGkgPSB0aGlzLmdldEN1cnJlbnRHYW1lVHlwZSgpLFxuICAgICAgbiA9IEdhbWVVdGlscy5nZXRJbnB1dEFkZFByb3BUeXBlKGkpO1xuICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IG4sXG4gICAgICBwcm9wVHlwZTogXCJzaHVmZmxlXCIsXG4gICAgICBudW06IHQsXG4gICAgICByZWFzb25JZDogRUdldEl0ZW1SZWFzb25JZC5XaW5TdHJlYWtSZXdhcmQsXG4gICAgICByZWFzb25JbmZvOiBcIui/nuiDnOWlluWKsVwiXG4gICAgfSk7XG4gICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgIGlucHV0VHlwZTogbixcbiAgICAgIHByb3BUeXBlOiBcImhpdFRpcHNcIixcbiAgICAgIG51bTogZSxcbiAgICAgIHJlYXNvbklkOiBFR2V0SXRlbVJlYXNvbklkLldpblN0cmVha1Jld2FyZCxcbiAgICAgIHJlYXNvbkluZm86IFwi6L+e6IOc5aWW5YqxXCJcbiAgICB9KTtcbiAgICB2YXIgbyA9IHtcbiAgICAgIGhpbnQ6IGUsXG4gICAgICBzaHVmZmxlOiB0XG4gICAgfTtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiV2luU3RyZWFrUmV3YXJkQ29udHJvbGxlclwiLCB7XG4gICAgICBjb25maWc6IG9cbiAgICB9KTtcbiAgfVxuICBnZXRSYW5kb21SZXdhcmQoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoMyAqIE1hdGgucmFuZG9tKCkpICsgMTtcbiAgfVxufSJdfQ==