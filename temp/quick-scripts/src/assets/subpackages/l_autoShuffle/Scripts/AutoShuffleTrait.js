"use strict";
cc._RF.push(module, '756fbxF5O1P1pDRr+nTCkzX', 'AutoShuffleTrait');
// subpackages/l_autoShuffle/Scripts/AutoShuffleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var AutoShuffleTrait = /** @class */ (function (_super) {
    __extends(AutoShuffleTrait, _super);
    function AutoShuffleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mode = 1;
        _this._gamesCount = 5;
        _this._minShuffleCount = 2;
        _this._isBoth = false;
        _this._failReplayCount = 0;
        _this._isFailAutoShuffleConditionMet = false;
        _this._isDeadlockWithAllConditions = false;
        return _this;
    }
    AutoShuffleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._mode = this._traitData.mode || 1;
        this._gamesCount = this._traitData.gamesCount || 5;
        this._minShuffleCount = this._traitData.minShuffleCount || 2;
        this._isBoth = this._traitData.isBoth || false;
        if (1 === this._mode) {
            this.localData.failReplayCount || (this.localData.failReplayCount = 0);
            this._failReplayCount = this.localData.failReplayCount;
        }
        3 === this._mode && mj.EventManager.on("OutOfMatches_AnimationComplete", this.onOutOfMatchesComplete, this);
    };
    AutoShuffleTrait.prototype.onFailBhv_start = function (t, e) {
        var i, o, a, n = t.ins, r = null === (o = null === (i = t.args[0]) || void 0 === i ? void 0 : i.data) || void 0 === o ? void 0 : o.isGM;
        if (!n || !n.context || r || n.context.getTileMapObject().checkIsDead([])) {
            var l = UserModel_1.default.getInstance().getGameDataByGameType(null === (a = null == n ? void 0 : n.context) || void 0 === a ? void 0 : a.gameType);
            if (l) {
                if (l.getShuffleNums() < this._minShuffleCount) {
                    this._isBoth && (this._isDeadlockWithAllConditions = false);
                    e();
                }
                else if (1 !== this._mode) {
                    var u = false;
                    switch (this._mode) {
                        case 2:
                            u = this.checkMode2(l);
                            break;
                        case 3:
                            u = true;
                    }
                    if (u) {
                        if (2 !== this._mode) {
                            if (3 !== this._mode)
                                e();
                            else {
                                var f = mj.getClassByName("OutOfMatchesTrait");
                                if (!f || !f.getInstance() || true !== f.getInstance().eventEnabled) {
                                    e();
                                    return;
                                }
                                e({
                                    isBreak: true
                                });
                            }
                        }
                        else {
                            this.triggerAutoShuffle();
                            e({
                                isBreak: true
                            });
                        }
                    }
                    else
                        e();
                }
                else {
                    var c = l.getUsedShuffle() > 0;
                    this._isFailAutoShuffleConditionMet = !c;
                    this._isDeadlockWithAllConditions = !c;
                    if (this._isFailAutoShuffleConditionMet && this._failReplayCount >= this._gamesCount - 1) {
                        this.triggerAutoShuffle();
                        this._failReplayCount = 0;
                        this.localData.failReplayCount = 0;
                        e({
                            isBreak: true
                        });
                        return;
                    }
                    e();
                }
            }
            else
                e();
        }
        else {
            this._isBoth && (this._isDeadlockWithAllConditions = false);
            e();
        }
    };
    AutoShuffleTrait.prototype.onFailVw_replay = function (t, e) {
        if (1 === this._mode && (this._isBoth ? this._isDeadlockWithAllConditions : this._isFailAutoShuffleConditionMet)) {
            this._failReplayCount++;
            this.localData.failReplayCount = this._failReplayCount;
        }
        e();
    };
    AutoShuffleTrait.prototype.checkMode2 = function (t) {
        return t.getUsedShuffle() > 0;
    };
    AutoShuffleTrait.prototype.triggerAutoShuffle = function () {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Shuffle,
            from: GameInputEnum_1.EShuffleFrom.Normal
        });
    };
    AutoShuffleTrait.prototype.playInterstitialAndRestart = function () {
        var t = this;
        AdManager_1.default.getInstance().playInterAd(DGameAdShow_1.EAdPosition.RearInsertScreen_Failure, {
            onSuccess: function () {
                t.restartCurrentLevel();
            },
            onFailed: function () {
                t.restartCurrentLevel();
            }
        }, "fail_show");
    };
    AutoShuffleTrait.prototype.restartCurrentLevel = function () {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Restart,
            callFrom: "fail"
        });
    };
    AutoShuffleTrait.prototype.onOutOfMatchesComplete = function () {
        var t = UserModel_1.default.getInstance(), e = t.getGameDataByGameType(t.getCurrentGameType());
        if (e) {
            e.getShuffleNums() < this._minShuffleCount || this.playInterstitialAndRestart();
        }
    };
    AutoShuffleTrait.traitKey = "AutoShuffle";
    AutoShuffleTrait = __decorate([
        mj.trait,
        mj.class("AutoShuffleTrait")
    ], AutoShuffleTrait);
    return AutoShuffleTrait;
}(Trait_1.default));
exports.default = AutoShuffleTrait;

cc._RF.pop();