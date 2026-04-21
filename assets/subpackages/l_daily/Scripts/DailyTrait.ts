import NormalGameData from '../../../Scripts/core/simulator/data/NormalGameData';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import { DotGameUnlock, EFuncUnlockType } from '../../../Scripts/gamePlay/dot/DGameUnlock';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import DailyModel from './DailyModel';
import { DailyStatus } from './DailyTypes';
import HallDailyBtn from './HallDailyBtn';
@mj.trait
@mj.class("DailyTrait")
export default class DailyTrait extends Trait {
  _dailyBtn = null;
  static traitKey = "Daily";
  onLoad() {
    super.onLoad.call(this);
    this.registerEvent([{
      event: "HallCtl_initRes"
    }]);
  }
  onHallCtl_initRes(t, e) {
    e();
    t.ins.addPreloadRes("Prefab", ["mainRes:prefabs/daily/HallDailyBtn"]);
  }
  onHallVw_initBtns(t, e) {
    e();
  }
  onHallVw_updateUI(t, e) {
    var i;
    this.checkHallDailyButton(this.isOpenDaily(), null === (i = t.ins) || void 0 === i ? void 0 : i.node);
    e();
  }
  @mj.traitEvent("Daily_isOpenDaily")
  isOpenDaily() {
    var t = DailyModel.getInstance();
    if (t.isOpen()) return true;
    if (this.isInstallDayValid() && this.isLevelValid()) {
      t.setOpen(true);
      DotGameUnlock.dotByType(EFuncUnlockType.DailyChallenge);
      return true;
    }
    return false;
  }
  isLevelValid() {
    var t = NormalGameData.getInstance().getLevelId(),
      e = UserModel.getInstance().getMainGameData();
    e && (t = e.getLevelId());
    return t > this.traitData.levelLimit;
  }
  isInstallDayValid() {
    UserModel.getInstance().getInstallTime();
    return UserModel.getInstance().getGameActiveDays() > this.traitData.installDay;
  }
  @mj.traitEvent("Daily_checkHDBtn")
  checkHallDailyButton(t, e) {
    t && this.createHallButton(e);
  }
  createHallButton(t) {
    var e = this;
    if (this._dailyBtn && this._dailyBtn.parent && cc.isValid(this._dailyBtn)) {
      this.updateBtnShow(this._dailyBtn);
    } else {
      cc.isValid(t) && HallDailyBtn.createUI().then(function (i) {
        e._dailyBtn = i;
        cc.isValid(i) && cc.isValid(t) && t.addChild(i);
        e.updateBtnShow(e._dailyBtn);
      }).catch(function (t) {
        console.error("[" + DailyTrait.traitKey + "] 游戏内创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallDailyBtn按钮加载失败"));
      });
    }
  }
  @mj.traitEvent("Daily_updateBtnShow")
  updateBtnShow() {
    var t = this._dailyBtn.getComponent(HallDailyBtn);
    t && t.updateDay();
  }
  onDCWinVw_showWinVw(t, e) {
    DailyModel.getInstance().saveDailyData();
    e();
  }
  onDCWinVw_onNextClick(t, e) {
    var i = DailyModel.getInstance().getSelectedData();
    DailyModel.getInstance().showDoneDay = {
      id: null == i ? void 0 : i.id,
      day: null == i ? void 0 : i.day,
      timestamp: null == i ? void 0 : i.timestamp
    };
    ControllerManager.getInstance().pushViewByController("DailyController", {
      isReplace: true,
      isShowAction: false,
      specifiedDate: true,
      success: true,
      isReuse: true,
      id: null == i ? void 0 : i.id,
      day: null == i ? void 0 : i.day,
      showReward: true
    });
    if ((null == i ? void 0 : i.preState) != DailyStatus.Completed && DailyModel.getInstance().isMonthCompleted(null == i ? void 0 : i.id)) {
      var o = DailyModel.getInstance().getMonthRewardItemId(null == i ? void 0 : i.id);
      ControllerManager.getInstance().pushViewByController("DailyRewardController", {
        itemId: o,
        isGetReward: true,
        dailyId: null == i ? void 0 : i.id
      });
    }
    e();
  }
  onUISetBtnBack_onBtnClk(t, e) {
    e();
  }
}