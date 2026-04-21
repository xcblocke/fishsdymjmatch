import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { EGameInputEnum, EShuffleFrom } from '../../../Scripts/simulator/constant/GameInputEnum';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import AdManager from '../../../Scripts/base/ad/AdManager';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
@mj.trait
@mj.class("AutoShuffleTrait")
export default class AutoShuffleTrait extends Trait {
  _mode = 1;
  _gamesCount = 5;
  _minShuffleCount = 2;
  _isBoth = false;
  _failReplayCount = 0;
  _isFailAutoShuffleConditionMet = false;
  _isDeadlockWithAllConditions = false;
  static traitKey = "AutoShuffle";
  onLoad() {
    super.onLoad.call(this);
    this._mode = this._traitData.mode || 1;
    this._gamesCount = this._traitData.gamesCount || 5;
    this._minShuffleCount = this._traitData.minShuffleCount || 2;
    this._isBoth = this._traitData.isBoth || false;
    if (1 === this._mode) {
      this.localData.failReplayCount || (this.localData.failReplayCount = 0);
      this._failReplayCount = this.localData.failReplayCount;
    }
    3 === this._mode && mj.EventManager.on("OutOfMatches_AnimationComplete", this.onOutOfMatchesComplete, this);
  }
  onFailBhv_start(t, e) {
    var i,
      o,
      a,
      n = t.ins,
      r = null === (o = null === (i = t.args[0]) || void 0 === i ? void 0 : i.data) || void 0 === o ? void 0 : o.isGM;
    if (!n || !n.context || r || n.context.getTileMapObject().checkIsDead([])) {
      var l = UserModel.getInstance().getGameDataByGameType(null === (a = null == n ? void 0 : n.context) || void 0 === a ? void 0 : a.gameType);
      if (l) {
        if (l.getShuffleNums() < this._minShuffleCount) {
          this._isBoth && (this._isDeadlockWithAllConditions = false);
          e();
        } else if (1 !== this._mode) {
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
              if (3 !== this._mode) e();else {
                var f = mj.getClassByName("OutOfMatchesTrait");
                if (!f || !f.getInstance() || true !== f.getInstance().eventEnabled) {
                  e();
                  return;
                }
                e({
                  isBreak: true
                });
              }
            } else {
              this.triggerAutoShuffle();
              e({
                isBreak: true
              });
            }
          } else e();
        } else {
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
      } else e();
    } else {
      this._isBoth && (this._isDeadlockWithAllConditions = false);
      e();
    }
  }
  onFailVw_replay(t, e) {
    if (1 === this._mode && (this._isBoth ? this._isDeadlockWithAllConditions : this._isFailAutoShuffleConditionMet)) {
      this._failReplayCount++;
      this.localData.failReplayCount = this._failReplayCount;
    }
    e();
  }
  checkMode2(t) {
    return t.getUsedShuffle() > 0;
  }
  triggerAutoShuffle() {
    GameInteraction.input({
      inputType: EGameInputEnum.Shuffle,
      from: EShuffleFrom.Normal
    });
  }
  playInterstitialAndRestart() {
    var t = this;
    AdManager.getInstance().playInterAd(EAdPosition.RearInsertScreen_Failure, {
      onSuccess: function () {
        t.restartCurrentLevel();
      },
      onFailed: function () {
        t.restartCurrentLevel();
      }
    }, "fail_show");
  }
  restartCurrentLevel() {
    GameInteraction.input({
      inputType: EGameInputEnum.Restart,
      callFrom: "fail"
    });
  }
  onOutOfMatchesComplete() {
    var t = UserModel.getInstance(),
      e = t.getGameDataByGameType(t.getCurrentGameType());
    if (e) {
      e.getShuffleNums() < this._minShuffleCount || this.playInterstitialAndRestart();
    }
  }
}