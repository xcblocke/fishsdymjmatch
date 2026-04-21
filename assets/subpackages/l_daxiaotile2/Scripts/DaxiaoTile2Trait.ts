import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import Trait from '../../../Scripts/framework/trait/Trait';
import AdManager from '../../../Scripts/base/ad/AdManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
enum r {
  Tag1 = 1,
  Tag2 = 2,
  Tag3 = 3,
  Tag4 = 4,
  Tag5 = 5,
  Tag6 = 6,
}
@mj.trait
@mj.class("DaxiaoTile2Trait")
export default class DaxiaoTile2Trait extends Trait {
  static traitKey = "DaxiaoTile2";
  onLoad() {
    super.onLoad.call(this);
    this._tag = this._traitData.tag || r.Tag1;
    this._minLevel = this._traitData.minLevel || 18;
    this._count = this._traitData.count || 1;
    this.initLocalDataDefaults();
    this.applyColdStartBreak();
  }
  initLocalDataDefaults() {
    GameUtils.isEmpty(this.localData.lastRoundWin) && (this.localData.lastRoundWin = false);
    GameUtils.isEmpty(this.localData.lastRoundPopupRevive) && (this.localData.lastRoundPopupRevive = false);
    GameUtils.isEmpty(this.localData.lastRoundWatchedRewardAd) && (this.localData.lastRoundWatchedRewardAd = false);
    GameUtils.isEmpty(this.localData.lastRoundWatchedInterAd) && (this.localData.lastRoundWatchedInterAd = false);
    GameUtils.isEmpty(this.localData.lastRoundUsedItem) && (this.localData.lastRoundUsedItem = false);
    GameUtils.isEmpty(this.localData.winStreakCount) && (this.localData.winStreakCount = 0);
  }
  applyColdStartBreak() {
    this.localData.lastRoundWin = false;
    this._resetWinStreakCount();
  }
  isTile2Mode() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal;
  }
  getGameData() {
    return UserModel.getInstance().getGameDataByGameType(MjGameType.Tile2Normal);
  }
  isWinStreak() {
    return this.localData.lastRoundWin && !this.localData.lastRoundPopupRevive;
  }
  hasUsedItemLastRound() {
    return this.localData.lastRoundUsedItem;
  }
  shouldGenDaxiao() {
    var t = this.getGameData();
    if (!t) return false;
    switch (this._tag) {
      case r.Tag1:
        var a = t.getLevelId() >= this._minLevel,
          e = AdManager.getInstance().checkVideoAdIsReady();
        return a && e;
      case r.Tag2:
        return t.getLevelId() >= this._minLevel;
      case r.Tag3:
        return this.localData.lastRoundWatchedRewardAd;
      case r.Tag4:
        return this.localData.lastRoundWatchedInterAd;
      case r.Tag5:
        var o = this.localData.winStreakCount || 0,
          i = this.localData.lastRoundWatchedInterAd;
        return o >= 2 && i;
      case r.Tag6:
        o = this.localData.winStreakCount || 0;
        var n = this.hasUsedItemLastRound();
        return o >= 2 && n;
      default:
        return false;
    }
  }
  _addWinStreakCount() {
    this.localData.winStreakCount = (this.localData.winStreakCount || 0) + 1;
  }
  _resetWinStreakCount() {
    this.localData.winStreakCount = 0;
  }
  onT2GameCtrl_getTileTypes(t, a) {
    if (this.isWinStreak()) {
      this._addWinStreakCount();
    } else {
      this._resetWinStreakCount();
    }
    var e = this.shouldGenDaxiao();
    this.localData.lastRoundPopupRevive = false;
    this.localData.lastRoundWatchedInterAd = false;
    this.localData.lastRoundWatchedRewardAd = false;
    if (e) {
      this._resetWinStreakCount();
      a({
        returnVal: t.beforReturnVal + "," + ETileType.DaxiaoCard
      });
    } else a();
  }
  onDaxiaoCardType_getCount(t, a) {
    if (this.isTile2Mode()) {
      a({
        returnVal: this._count,
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else {
      a();
    }
  }
  onTile2WinVw_onLoad(t, a) {
    this._handleRoundEnd(true);
    a();
  }
  onTile2FailVw_onLoad(t, a) {
    this.localData.lastRoundPopupRevive = true;
    a();
  }
  onAdMgr_interAdClose(t, a) {
    var e;
    if (this.isTile2Mode()) {
      this.localData.lastRoundWatchedInterAd = true;
      null === (e = t.args) || void 0 === e || e[0];
      a();
    } else a();
  }
  onAdMgr_videoSuccess(t, a) {
    if (this.isTile2Mode()) {
      this.localData.lastRoundWatchedRewardAd = true;
      a();
    } else a();
  }
  _handleRoundEnd(t) {
    this.localData.lastRoundWin = t;
    var a = this.getGameData();
    a && (this.localData.lastRoundUsedItem = !!(a.getUsedShuffle() || a.getUsedHitTips() || a.getUsedRevert() || a.getUsedMagnet()));
  }
}