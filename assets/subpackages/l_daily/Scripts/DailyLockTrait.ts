import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import { ERedDotType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import NormalGameData from '../../../Scripts/core/simulator/data/NormalGameData';
import Trait from '../../../Scripts/framework/trait/Trait';
import { DotGameUnlock, EFuncUnlockType } from '../../../Scripts/gamePlay/dot/DGameUnlock';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import DailyModel from './DailyModel';
import HallDailyBtn from './HallDailyBtn';
@mj.trait
@mj.class("DailyLockTrait")
export default class DailyLockTrait extends Trait {
  static traitKey = "DailyLock";
  onLoad() {
    super.onLoad.call(this);
  }
  onDaily_checkHDBtn(t, e) {
    1 == this.traitData.isLock && (t.args[0] = true);
    e();
  }
  onDaily_updateBtnShow(t, e) {
    if (1 == this.traitData.isLock) {
      var i = this.isOpenDaily(),
        o = t.args[0],
        n = null == o ? void 0 : o.getComponent(HallDailyBtn);
      if (n) {
        var a = DailyModel.getInstance().getEnterCnt();
        if (n) {
          n.updateDay();
          if (1 == this.traitData.isLock) {
            n.updateLock(i, this.getLimitLevel());
            n.updateRed(1 == this.traitData.isRed && i && a <= 0);
          }
        }
      }
    }
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
  onHDailyBtn_onBClick(t, e) {
    if (this.isOpenDaily()) {
      mj.EventManager.emit(EGameEvent.RedDot_clearNotify, ERedDotType.DailyChallenge);
      e();
    } else {
      t.args[0] = false;
      e();
    }
  }
  onDaily_isOpenDaily(t, e) {
    var i = this.isOpenDaily();
    e({
      returnType: TraitCallbackReturnType.jump,
      returnVal: i
    });
  }
  isOpenDaily() {
    var t = DailyModel.getInstance();
    if (this.isInstallDayValid() && this.isLevelValid()) {
      DotGameUnlock.dotByType(EFuncUnlockType.DailyChallenge);
      t.setOpen(true);
      return true;
    }
    t.setOpen(false);
    return false;
  }
  @mj.traitEvent("DailyLockTt_getLimitLv")
  getLimitLevel() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.levelLimit) && void 0 !== e ? e : 20;
  }
  @mj.traitEvent("DailyLockTt_isLvValid")
  isLevelValid() {
    var t = NormalGameData.getInstance().getLevelId(),
      e = UserModel.getInstance().getMainGameData();
    e && (t = e.getLevelId());
    return t >= this.getLimitLevel();
  }
  isInstallDayValid() {
    UserModel.getInstance().getInstallTime();
    return UserModel.getInstance().getGameActiveDays() > this.traitData.installDay;
  }
  onWinVw_showWinVw(t, e) {
    var i = NormalGameData.getInstance().getLevelId(),
      o = UserModel.getInstance().getMainGameData();
    o && (i = o.getLevelId());
    i >= this.getLimitLevel() && 1 == this._traitData.isRed && DailyModel.getInstance().getEnterCnt() <= 0 && mj.EventManager.emit(EGameEvent.RedDot_addNotify, ERedDotType.DailyChallenge);
    e();
  }
}