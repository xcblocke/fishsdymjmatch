import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("LifeFirst10NoInterAdTrait")
export default class LifeFirst10NoInterAdTrait extends Trait {
  _freeInterAdCountLimit = LifeFirst10NoInterAdTrait.DEFAULT_FREE_INTER_AD_COUNT_LIMIT;
  static traitKey = "LifeFirst10NoInterAd";
  static DEFAULT_FREE_INTER_AD_COUNT_LIMIT = 10;
  onLoad() {
    var e;
    super.onLoad.call(this);
    var r = Number(null === (e = this._traitData) || void 0 === e ? void 0 : e.freeInterAdCountLimit);
    !Number.isNaN(r) && r >= 0 && (this._freeInterAdCountLimit = Math.floor(r));
    void 0 === this.localData.skipCount && (this.localData.skipCount = 0);
  }
  onGsListener_onReplayGame(t, e) {
    this.addEffectiveGameCount("replay");
    e();
  }
  onGsListener_onNewGame(t, e) {
    this.addEffectiveGameCount("newGame");
    e();
  }
  onInterAdStart_isSkip(t, e) {
    if (UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal) {
      e({
        returnVal: true,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      e();
    }
  }
  onAdMgr_chkInterAd(t, e) {
    if (UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal && this.shouldSkipInterAd()) {
      e({
        returnVal: false,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      e();
    }
  }
  addEffectiveGameCount() {
    if (!(this._freeInterAdCountLimit <= 0)) {
      var t = this.getEffectiveGameCount();
      if (!(t >= this._freeInterAdCountLimit)) {
        var e = t + 1;
        this.localData.skipCount = e;
      }
    }
  }
  getEffectiveGameCount() {
    var t = Number(this.localData.skipCount);
    return Number.isNaN(t) || t < 0 ? 0 : Math.floor(t);
  }
  shouldSkipInterAd() {
    return !(this._freeInterAdCountLimit <= 0) && this.getEffectiveGameCount() < this._freeInterAdCountLimit;
  }
}