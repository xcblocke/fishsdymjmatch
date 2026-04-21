import { EGameInputEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { EVT_MSG_KEY_SIMULATOR_NEXTLEVEL } from '../../../Scripts/core/simulator/events/SimulatorEvent';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import Trait from '../../../Scripts/framework/trait/Trait';
import AdManager from '../../../Scripts/base/ad/AdManager';
import { DotAdVisit } from '../../../Scripts/gamePlay/dot/DAdVisit';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { DotGameAdShowStage } from '../../../Scripts/gamePlay/dot/DGameAdShowStage';
import { DotGameBtnClick, EReviveClickType, EGameSettingClickType } from '../../../Scripts/dot/DGameBtnClick';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("BeforeInterAdTrait")
export default class BeforeInterAdTrait extends Trait {
  static traitKey = "BeforeInterAd";
  static nextTimeOut = 900;
  onLoad() {
    super.onLoad.call(this);
  }
  isNormalGameType() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Normal;
  }
  isTravelGameType() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Travel;
  }
  isDailyChallengeGameType() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.DailyChallenge;
  }
  playInterAd(e, t, n, r) {
    DotGameAdShowStage.dot(true, "clickAdLock");
    AdManager.getInstance().playInterAd(t, {
      onSuccess: function () {
        n && n();
      },
      onFailed: function () {
        r && r();
      }
    }, e, {
      adTimeType: "beforeInterAd"
    });
  }
  onWinVw_onNextClick(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this.isNormalGameType()) {
        var n = e.ins;
        if (cc.isValid(n.node)) {
          DotGameBtnClick.doNextLevel(n._curLv);
          n.delegate.close();
          this.playInterAd("result_next_level", EAdPosition.FrontInsertScreen_GameNew, function () {
            mj.EventManager.emit(EVT_MSG_KEY_SIMULATOR_NEXTLEVEL);
            t({
              isBreak: true,
              returnType: TraitCallbackReturnType.return
            });
          }, function () {
            mj.EventManager.emit(EVT_MSG_KEY_SIMULATOR_NEXTLEVEL);
            t({
              isBreak: true,
              returnType: TraitCallbackReturnType.return
            });
          });
        } else t();
      } else t();
    } else t();
  }
  onUISetDlg_onReplay(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      var n = e.ins;
      if (cc.isValid(n.node)) {
        DotGameBtnClick.dotSetting(EGameSettingClickType.InGameSetting_Restart);
        n.delegate.close();
        this.playInterAd("settings_replay", EAdPosition.FrontInsertScreen_ActiveRestart, function () {
          GameInteraction.input({
            inputType: EGameInputEnum.Restart,
            callFrom: "setting"
          });
          t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
        }, function () {
          GameInteraction.input({
            inputType: EGameInputEnum.Restart,
            callFrom: "setting"
          });
          t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
        });
      } else t();
    } else t();
  }
  onFailVw_replay(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      var n = e.ins;
      if (cc.isValid(n.node)) {
        DotGameBtnClick.dotRevive(EReviveClickType.Restart);
        DotAdVisit.dotAdVisitRewardAD(EAdPosition.InGameMotivation_Revive, false);
        n.delegate.close();
        this.playInterAd("fail_replay", EAdPosition.FrontInsertScreen_FailRestart, function () {
          GameInteraction.input({
            inputType: EGameInputEnum.Restart,
            dieResult: 0,
            callFrom: "fail"
          });
          t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
        }, function () {
          GameInteraction.input({
            inputType: EGameInputEnum.Restart,
            dieResult: 0,
            callFrom: "fail"
          });
          t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
        });
      } else t();
    } else t();
  }
  onTLWinVw_gotoNextLv(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic && this.isTravelGameType()) {
      this.playInterAd("result_next_level", EAdPosition.FrontInsertScreen_GameNew, function () {
        t();
      }, function () {
        t();
      });
    } else {
      t();
    }
  }
  onTLMapVw_goTravelGm(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this.playInterAd("travel_map_enter", EAdPosition.RearInsertScreen_TravelEnter, function () {
        t();
      }, function () {
        t();
      });
    } else {
      t();
    }
  }
  onDailyView_onPlayClick(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this.playInterAd("daily_challenge_enter", EAdPosition.RearInsertScreen_DailyChallengeEnter, function () {
        t();
      }, function () {
        t();
      });
    } else {
      t();
    }
  }
  onTaskItemVw_goToGame(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this.playInterAd("task_reward", EAdPosition.RearInsertScreen_DailyTaskPlay, function () {
        t();
      }, function () {
        t();
      });
    } else {
      t();
    }
  }
  onHallNmlBtn_onBtnClk(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this.playInterAd("hall_normal_play", EAdPosition.RearInsertScreen_HallPlay, function () {
        t();
      }, function () {
        t();
      });
    } else {
      t();
    }
  }
  onRankVw_onBtnGoClick(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this.playInterAd("rank_go", EAdPosition.RearInsertScreen_RankGo, function () {
        t();
      }, function () {
        t();
      });
    } else {
      t();
    }
  }
}