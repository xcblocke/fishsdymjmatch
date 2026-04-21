import Trait from '../../../Scripts/framework/trait/Trait';
import TravelGameData from '../../../Scripts/core/simulator/data/TravelGameData';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Model from '../../../Scripts/framework/data/Model';
@mj.class("TravelInterAdModel")
class c extends Model {
  constructor() {
    super();
    this.isLocalEmpty(this.localData.globalChallengeCount) && (this.localData.globalChallengeCount = 0);
  }
  isLocalEmpty(e) {
    return null == e;
  }
  getGlobalChallengeCount() {
    return this.localData.globalChallengeCount;
  }
  addGlobalChallengeCount() {
    this.localData.globalChallengeCount++;
  }
  resetGlobalChallengeCount() {
    this.localData.globalChallengeCount = 0;
  }
}
@mj.trait
@mj.class("TravelInterAdTrait")
export default class TravelInterAdTrait extends Trait {
  _noAdLevels = [1];
  _adLevels = [2, 3, 4, 5, 6, 7, 8, 9];
  _challengesPerAd = 2;
  _isNewChallenge = false;
  static traitKey = "TravelInterAd";
  onLoad() {
    var t, r, a;
    super.onLoad.call(this);
    void 0 !== (null === (t = this._traitData) || void 0 === t ? void 0 : t.noAdLevels) && (this._noAdLevels = this._traitData.noAdLevels);
    void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.adLevels) && (this._adLevels = this._traitData.adLevels);
    void 0 !== (null === (a = this._traitData) || void 0 === a ? void 0 : a.challengesPerAd) && (this._challengesPerAd = this._traitData.challengesPerAd);
    this._model = c.getInstance();
  }
  isTravelGameType() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Travel;
  }
  getCurrentTravelLevel() {
    return TravelGameData.getInstance().getLevelId();
  }
  onIptRestart_excute(e, t) {
    if (this.isTravelGameType()) {
      var r = this.getCurrentTravelLevel();
      this._adLevels.includes(r) && (this._isNewChallenge = true);
      t();
    } else t();
  }
  onEntAniFiBhv_start(e, t) {
    if (this.isTravelGameType()) {
      var r = this.getCurrentTravelLevel(),
        a = r !== this.localData.lastLevel || this._isNewChallenge;
      this.localData.lastLevel = r;
      this._isNewChallenge = false;
      if (a) {
        if (this._noAdLevels.includes(r)) t();else if (this._adLevels.includes(r)) {
          this._model.addGlobalChallengeCount();
          t();
        } else t();
      } else t();
    } else t();
  }
  onAdMgr_chkInterAd(e, t) {
    if (this.isTravelGameType()) {
      var r = this.getCurrentTravelLevel();
      if (this._noAdLevels.includes(r)) t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: false
      });else if (this._adLevels.includes(r)) {
        if (this._model.getGlobalChallengeCount() >= this._challengesPerAd) {
          this._model.resetGlobalChallengeCount();
          t();
        } else t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: false
        });
      } else t();
    } else t();
  }
}