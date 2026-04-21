
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_beforeInterAd/Scripts/BeforeInterAdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JlZm9yZUludGVyQWQvU2NyaXB0cy9CZWZvcmVJbnRlckFkVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1GQUFtRjtBQUNuRix3RkFBb0Y7QUFDcEYsd0ZBQXdHO0FBQ3hHLG9GQUFtRjtBQUNuRixnRUFBMkQ7QUFDM0QsZ0VBQTJEO0FBQzNELG1FQUFvRTtBQUNwRSx5RUFBd0U7QUFDeEUsbUZBQW9GO0FBQ3BGLG9FQUE4RztBQUM5RyxzRUFBaUU7QUFHakU7SUFBZ0Qsc0NBQUs7SUFBckQ7O0lBaUxBLENBQUM7SUE5S0MsbUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDZDQUFnQixHQUFoQjtRQUNFLE9BQU8sbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsTUFBTSxDQUFDO0lBQzVFLENBQUM7SUFDRCw2Q0FBZ0IsR0FBaEI7UUFDRSxPQUFPLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLE1BQU0sQ0FBQztJQUM1RSxDQUFDO0lBQ0QscURBQXdCLEdBQXhCO1FBQ0UsT0FBTyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxjQUFjLENBQUM7SUFDcEYsQ0FBQztJQUNELHdDQUFXLEdBQVgsVUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3BCLHFDQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDNUMsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLFNBQVMsRUFBRTtnQkFDVCxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7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QUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQS9LTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQUMzQiw4QkFBVyxHQUFHLEdBQUcsQ0FBQztJQUZOLGtCQUFrQjtRQUZ0QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0FpTHRDO0lBQUQseUJBQUM7Q0FqTEQsQUFpTEMsQ0FqTCtDLGVBQUssR0FpTHBEO2tCQWpMb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRVZUX01TR19LRVlfU0lNVUxBVE9SX05FWFRMRVZFTCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvZXZlbnRzL1NpbXVsYXRvckV2ZW50JztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvR2FtZUludGVyYWN0aW9uL0dhbWVJbnRlcmFjdGlvbic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbmltcG9ydCB7IERvdEFkVmlzaXQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9EQWRWaXNpdCc7XG5pbXBvcnQgeyBFQWRQb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0RHYW1lQWRTaG93JztcbmltcG9ydCB7IERvdEdhbWVBZFNob3dTdGFnZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0RHYW1lQWRTaG93U3RhZ2UnO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFUmV2aXZlQ2xpY2tUeXBlLCBFR2FtZVNldHRpbmdDbGlja1R5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2RvdC9ER2FtZUJ0bkNsaWNrJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkJlZm9yZUludGVyQWRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVmb3JlSW50ZXJBZFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkJlZm9yZUludGVyQWRcIjtcbiAgc3RhdGljIG5leHRUaW1lT3V0ID0gOTAwO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgaXNOb3JtYWxHYW1lVHlwZSgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuTm9ybWFsO1xuICB9XG4gIGlzVHJhdmVsR2FtZVR5cGUoKSB7XG4gICAgcmV0dXJuIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLlRyYXZlbDtcbiAgfVxuICBpc0RhaWx5Q2hhbGxlbmdlR2FtZVR5cGUoKSB7XG4gICAgcmV0dXJuIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlO1xuICB9XG4gIHBsYXlJbnRlckFkKGUsIHQsIG4sIHIpIHtcbiAgICBEb3RHYW1lQWRTaG93U3RhZ2UuZG90KHRydWUsIFwiY2xpY2tBZExvY2tcIik7XG4gICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUludGVyQWQodCwge1xuICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG4gJiYgbigpO1xuICAgICAgfSxcbiAgICAgIG9uRmFpbGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHIgJiYgcigpO1xuICAgICAgfVxuICAgIH0sIGUsIHtcbiAgICAgIGFkVGltZVR5cGU6IFwiYmVmb3JlSW50ZXJBZFwiXG4gICAgfSk7XG4gIH1cbiAgb25XaW5Wd19vbk5leHRDbGljayhlLCB0KSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIGlmICh0aGlzLmlzTm9ybWFsR2FtZVR5cGUoKSkge1xuICAgICAgICB2YXIgbiA9IGUuaW5zO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChuLm5vZGUpKSB7XG4gICAgICAgICAgRG90R2FtZUJ0bkNsaWNrLmRvTmV4dExldmVsKG4uX2N1ckx2KTtcbiAgICAgICAgICBuLmRlbGVnYXRlLmNsb3NlKCk7XG4gICAgICAgICAgdGhpcy5wbGF5SW50ZXJBZChcInJlc3VsdF9uZXh0X2xldmVsXCIsIEVBZFBvc2l0aW9uLkZyb250SW5zZXJ0U2NyZWVuX0dhbWVOZXcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVWVF9NU0dfS0VZX1NJTVVMQVRPUl9ORVhUTEVWRUwpO1xuICAgICAgICAgICAgdCh7XG4gICAgICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRVZUX01TR19LRVlfU0lNVUxBVE9SX05FWFRMRVZFTCk7XG4gICAgICAgICAgICB0KHtcbiAgICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHQoKTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvblVJU2V0RGxnX29uUmVwbGF5KGUsIHQpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgdmFyIG4gPSBlLmlucztcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG4ubm9kZSkpIHtcbiAgICAgICAgRG90R2FtZUJ0bkNsaWNrLmRvdFNldHRpbmcoRUdhbWVTZXR0aW5nQ2xpY2tUeXBlLkluR2FtZVNldHRpbmdfUmVzdGFydCk7XG4gICAgICAgIG4uZGVsZWdhdGUuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5wbGF5SW50ZXJBZChcInNldHRpbmdzX3JlcGxheVwiLCBFQWRQb3NpdGlvbi5Gcm9udEluc2VydFNjcmVlbl9BY3RpdmVSZXN0YXJ0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgICAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uUmVzdGFydCxcbiAgICAgICAgICAgIGNhbGxGcm9tOiBcInNldHRpbmdcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHQoe1xuICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgICAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uUmVzdGFydCxcbiAgICAgICAgICAgIGNhbGxGcm9tOiBcInNldHRpbmdcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHQoe1xuICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbkZhaWxWd19yZXBsYXkoZSwgdCkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB2YXIgbiA9IGUuaW5zO1xuICAgICAgaWYgKGNjLmlzVmFsaWQobi5ub2RlKSkge1xuICAgICAgICBEb3RHYW1lQnRuQ2xpY2suZG90UmV2aXZlKEVSZXZpdmVDbGlja1R5cGUuUmVzdGFydCk7XG4gICAgICAgIERvdEFkVmlzaXQuZG90QWRWaXNpdFJld2FyZEFEKEVBZFBvc2l0aW9uLkluR2FtZU1vdGl2YXRpb25fUmV2aXZlLCBmYWxzZSk7XG4gICAgICAgIG4uZGVsZWdhdGUuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5wbGF5SW50ZXJBZChcImZhaWxfcmVwbGF5XCIsIEVBZFBvc2l0aW9uLkZyb250SW5zZXJ0U2NyZWVuX0ZhaWxSZXN0YXJ0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgICAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uUmVzdGFydCxcbiAgICAgICAgICAgIGRpZVJlc3VsdDogMCxcbiAgICAgICAgICAgIGNhbGxGcm9tOiBcImZhaWxcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHQoe1xuICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgICAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uUmVzdGFydCxcbiAgICAgICAgICAgIGRpZVJlc3VsdDogMCxcbiAgICAgICAgICAgIGNhbGxGcm9tOiBcImZhaWxcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHQoe1xuICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvblRMV2luVndfZ290b05leHRMdihlLCB0KSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMgJiYgdGhpcy5pc1RyYXZlbEdhbWVUeXBlKCkpIHtcbiAgICAgIHRoaXMucGxheUludGVyQWQoXCJyZXN1bHRfbmV4dF9sZXZlbFwiLCBFQWRQb3NpdGlvbi5Gcm9udEluc2VydFNjcmVlbl9HYW1lTmV3LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQoKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdCgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgb25UTE1hcFZ3X2dvVHJhdmVsR20oZSwgdCkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB0aGlzLnBsYXlJbnRlckFkKFwidHJhdmVsX21hcF9lbnRlclwiLCBFQWRQb3NpdGlvbi5SZWFySW5zZXJ0U2NyZWVuX1RyYXZlbEVudGVyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQoKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdCgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgb25EYWlseVZpZXdfb25QbGF5Q2xpY2soZSwgdCkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB0aGlzLnBsYXlJbnRlckFkKFwiZGFpbHlfY2hhbGxlbmdlX2VudGVyXCIsIEVBZFBvc2l0aW9uLlJlYXJJbnNlcnRTY3JlZW5fRGFpbHlDaGFsbGVuZ2VFbnRlciwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0KCk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG4gIG9uVGFza0l0ZW1Wd19nb1RvR2FtZShlLCB0KSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIHRoaXMucGxheUludGVyQWQoXCJ0YXNrX3Jld2FyZFwiLCBFQWRQb3NpdGlvbi5SZWFySW5zZXJ0U2NyZWVuX0RhaWx5VGFza1BsYXksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdCgpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0KCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBvbkhhbGxObWxCdG5fb25CdG5DbGsoZSwgdCkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB0aGlzLnBsYXlJbnRlckFkKFwiaGFsbF9ub3JtYWxfcGxheVwiLCBFQWRQb3NpdGlvbi5SZWFySW5zZXJ0U2NyZWVuX0hhbGxQbGF5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQoKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdCgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgb25SYW5rVndfb25CdG5Hb0NsaWNrKGUsIHQpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgdGhpcy5wbGF5SW50ZXJBZChcInJhbmtfZ29cIiwgRUFkUG9zaXRpb24uUmVhckluc2VydFNjcmVlbl9SYW5rR28sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdCgpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0KCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxufSJdfQ==