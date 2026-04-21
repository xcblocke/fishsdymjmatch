import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("RankOpenTrait")
export default class RankOpenTrait extends Trait {
  static traitKey = "RankOpen";
  static DEFAULT_RANK_LEVEL = 10;
  onLoad() {
    super.onLoad.call(this);
  }
  @mj.traitEvent("RankOpenTrait_getLv")
  getRankUnlockLevel() {
    var t, e;
    return null !== (e = null === (t = this._traitData) || void 0 === t ? void 0 : t.levelLimit) && void 0 !== e ? e : RankOpenTrait.DEFAULT_RANK_LEVEL;
  }
  getCurrentLevel() {
    return UserModel.getInstance().getGameDataByGameType(MjGameType.Normal).getLevelId();
  }
  @mj.traitEvent("RankOpenTrait_isUnlock")
  isRankUnlocked() {
    var t = this.getCurrentLevel(),
      e = this.getRankUnlockLevel();
    return 0 === e || t > e;
  }
  onRankTrait_getLimitLv(t, e) {
    var r = this.getRankUnlockLevel();
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: r
    });
  }
  onRankModel_getUnlockLevel(t, e) {
    var r = this.getRankUnlockLevel();
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: r
    });
  }
  onHallRankBLockTt_unlockLv(t, e) {
    var r = this.getRankUnlockLevel();
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: r
    });
  }
}