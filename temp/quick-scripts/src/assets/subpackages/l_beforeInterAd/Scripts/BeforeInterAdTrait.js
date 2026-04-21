"use strict";
cc._RF.push(module, '07c4fVVAxtClKxwJuMRS7rr', 'BeforeInterAdTrait');
// subpackages/l_beforeInterAd/Scripts/BeforeInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var SimulatorEvent_1 = require("../../../Scripts/core/simulator/events/SimulatorEvent");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DAdVisit_1 = require("../../../Scripts/gamePlay/dot/DAdVisit");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var BeforeInterAdTrait = /** @class */ (function (_super) {
    __extends(BeforeInterAdTrait, _super);
    function BeforeInterAdTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BeforeInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BeforeInterAdTrait.prototype.isNormalGameType = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal;
    };
    BeforeInterAdTrait.prototype.isTravelGameType = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Travel;
    };
    BeforeInterAdTrait.prototype.isDailyChallengeGameType = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.DailyChallenge;
    };
    BeforeInterAdTrait.prototype.playInterAd = function (e, t, n, r) {
        DGameAdShowStage_1.DotGameAdShowStage.dot(true, "clickAdLock");
        AdManager_1.default.getInstance().playInterAd(t, {
            onSuccess: function () {
                n && n();
            },
            onFailed: function () {
                r && r();
            }
        }, e, {
            adTimeType: "beforeInterAd"
        });
    };
    BeforeInterAdTrait.prototype.onWinVw_onNextClick = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.isNormalGameType()) {
                var n = e.ins;
                if (cc.isValid(n.node)) {
                    DGameBtnClick_1.DotGameBtnClick.doNextLevel(n._curLv);
                    n.delegate.close();
                    this.playInterAd("result_next_level", DGameAdShow_1.EAdPosition.FrontInsertScreen_GameNew, function () {
                        mj.EventManager.emit(SimulatorEvent_1.EVT_MSG_KEY_SIMULATOR_NEXTLEVEL);
                        t({
                            isBreak: true,
                            returnType: TraitCallbackReturnType.return
                        });
                    }, function () {
                        mj.EventManager.emit(SimulatorEvent_1.EVT_MSG_KEY_SIMULATOR_NEXTLEVEL);
                        t({
                            isBreak: true,
                            returnType: TraitCallbackReturnType.return
                        });
                    });
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    BeforeInterAdTrait.prototype.onUISetDlg_onReplay = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var n = e.ins;
            if (cc.isValid(n.node)) {
                DGameBtnClick_1.DotGameBtnClick.dotSetting(DGameBtnClick_1.EGameSettingClickType.InGameSetting_Restart);
                n.delegate.close();
                this.playInterAd("settings_replay", DGameAdShow_1.EAdPosition.FrontInsertScreen_ActiveRestart, function () {
                    GameInteraction_1.GameInteraction.input({
                        inputType: GameInputEnum_1.EGameInputEnum.Restart,
                        callFrom: "setting"
                    });
                    t({
                        isBreak: true,
                        returnType: TraitCallbackReturnType.return
                    });
                }, function () {
                    GameInteraction_1.GameInteraction.input({
                        inputType: GameInputEnum_1.EGameInputEnum.Restart,
                        callFrom: "setting"
                    });
                    t({
                        isBreak: true,
                        returnType: TraitCallbackReturnType.return
                    });
                });
            }
            else
                t();
        }
        else
            t();
    };
    BeforeInterAdTrait.prototype.onFailVw_replay = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var n = e.ins;
            if (cc.isValid(n.node)) {
                DGameBtnClick_1.DotGameBtnClick.dotRevive(DGameBtnClick_1.EReviveClickType.Restart);
                DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(DGameAdShow_1.EAdPosition.InGameMotivation_Revive, false);
                n.delegate.close();
                this.playInterAd("fail_replay", DGameAdShow_1.EAdPosition.FrontInsertScreen_FailRestart, function () {
                    GameInteraction_1.GameInteraction.input({
                        inputType: GameInputEnum_1.EGameInputEnum.Restart,
                        dieResult: 0,
                        callFrom: "fail"
                    });
                    t({
                        isBreak: true,
                        returnType: TraitCallbackReturnType.return
                    });
                }, function () {
                    GameInteraction_1.GameInteraction.input({
                        inputType: GameInputEnum_1.EGameInputEnum.Restart,
                        dieResult: 0,
                        callFrom: "fail"
                    });
                    t({
                        isBreak: true,
                        returnType: TraitCallbackReturnType.return
                    });
                });
            }
            else
                t();
        }
        else
            t();
    };
    BeforeInterAdTrait.prototype.onTLWinVw_gotoNextLv = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic && this.isTravelGameType()) {
            this.playInterAd("result_next_level", DGameAdShow_1.EAdPosition.FrontInsertScreen_GameNew, function () {
                t();
            }, function () {
                t();
            });
        }
        else {
            t();
        }
    };
    BeforeInterAdTrait.prototype.onTLMapVw_goTravelGm = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.playInterAd("travel_map_enter", DGameAdShow_1.EAdPosition.RearInsertScreen_TravelEnter, function () {
                t();
            }, function () {
                t();
            });
        }
        else {
            t();
        }
    };
    BeforeInterAdTrait.prototype.onDailyView_onPlayClick = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.playInterAd("daily_challenge_enter", DGameAdShow_1.EAdPosition.RearInsertScreen_DailyChallengeEnter, function () {
                t();
            }, function () {
                t();
            });
        }
        else {
            t();
        }
    };
    BeforeInterAdTrait.prototype.onTaskItemVw_goToGame = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.playInterAd("task_reward", DGameAdShow_1.EAdPosition.RearInsertScreen_DailyTaskPlay, function () {
                t();
            }, function () {
                t();
            });
        }
        else {
            t();
        }
    };
    BeforeInterAdTrait.prototype.onHallNmlBtn_onBtnClk = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.playInterAd("hall_normal_play", DGameAdShow_1.EAdPosition.RearInsertScreen_HallPlay, function () {
                t();
            }, function () {
                t();
            });
        }
        else {
            t();
        }
    };
    BeforeInterAdTrait.prototype.onRankVw_onBtnGoClick = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.playInterAd("rank_go", DGameAdShow_1.EAdPosition.RearInsertScreen_RankGo, function () {
                t();
            }, function () {
                t();
            });
        }
        else {
            t();
        }
    };
    BeforeInterAdTrait.traitKey = "BeforeInterAd";
    BeforeInterAdTrait.nextTimeOut = 900;
    BeforeInterAdTrait = __decorate([
        mj.trait,
        mj.class("BeforeInterAdTrait")
    ], BeforeInterAdTrait);
    return BeforeInterAdTrait;
}(Trait_1.default));
exports.default = BeforeInterAdTrait;

cc._RF.pop();