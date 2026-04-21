import Trait from '../../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../../Scripts/framework/trait/TraitManager';
import DailySignClassicModel from '../model/DailySignClassicModel';
import ControllerManager from '../../../../Scripts/framework/manager/ControllerManager';
import HallSignBtn from './HallSignBtn';
import { EGameEvent } from '../../../../Scripts/simulator/constant/GameEvent';
import { ERedDotType } from '../../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("DailySignClassicTrait")
export default class DailySignClassicTrait extends Trait {
  _hallParentNode = null;
  _hallSignBtnInstance = null;
  _isSignButtonCreated = false;
  static traitKey = "DailySignClassic";
  onLoad() {
    var e, i, o, n;
    super.onLoad.call(this);
    var a = DailySignClassicModel.getInstance(),
      s = (null === (e = this._traitData) || void 0 === e ? void 0 : e.rewards) || [];
    s.length > 0 && a.setWeeklyRewardsFromConfig(s);
    var r = (null === (i = this._traitData) || void 0 === i ? void 0 : i.longTermRewards) || [];
    r.length > 0 && a.setLongTermRewardsFromConfig(r);
    var c = null === (o = this._traitData) || void 0 === o ? void 0 : o.unlockLevel;
    void 0 !== c && (a.getConfig().unlockLevel = c);
    var d = null === (n = this._traitData) || void 0 === n ? void 0 : n.maxLongTermDays;
    void 0 !== d && (a.getConfig().maxLongTermDays = d);
    mj.EventManager.on("DAILY_SIGN_VIEW_CLOSED", this.onSignViewClosed, this);
  }
  onEntAniFiBhv_start(t, e) {
    e();
    this.updateSettingRedDot();
  }
  onHallVw_initBtns(t, e) {
    var i;
    this._hallParentNode = null === (i = t.ins) || void 0 === i ? void 0 : i.node;
    this.canShowSignButton() && this.createHallButton(this._hallParentNode);
    e();
  }
  onHallCtl_initRes(t, e) {
    t.ins.addPreloadRes("Prefab", "r_dailySignClassic:" + HallSignBtn.getUrl());
    e();
  }
  onHallVw_updateUI(t, e) {
    var i,
      o = this.canShowSignButton();
    this._hallParentNode = null === (i = t.ins) || void 0 === i ? void 0 : i.node;
    o && !this._isSignButtonCreated && this._hallParentNode && this.createHallButton(this._hallParentNode);
    this._hallSignBtnInstance && this.updateHallButtonShow();
    this.updateSettingRedDot();
    e();
  }
  onHallVw_onPopView(t, e) {
    e({
      isBreak: this.showSignPopView()
    });
  }
  @mj.traitEvent("DSClassic_showPopVw")
  showSignPopView() {
    var t = DailySignClassicModel.getInstance();
    this.updateSettingRedDot();
    if (!t.isUnlocked()) return false;
    if (t.checkTodaySigned()) return false;
    if (t.hasAutoPopedToday()) return false;
    t.markAutoPopedToday();
    t.markSignViewOpened();
    this.updateSettingRedDot();
    ControllerManager.getInstance().pushViewByController("DailySignClassicController");
    return true;
  }
  @mj.traitEvent("DSClassic_canShowBtn")
  canShowSignButton() {
    return true;
  }
  createHallButton(t) {
    var e = this;
    if (cc.isValid(t)) {
      this._isSignButtonCreated = true;
      HallSignBtn.createUI().then(function (i) {
        if (cc.isValid(i) && cc.isValid(t)) {
          t.addChild(i);
          e._hallSignBtnInstance = i.getComponent(HallSignBtn);
          e.updateHallButtonShow();
        }
      }).catch(function (t) {
        e._isSignButtonCreated = false;
        console.error("[" + DailySignClassicTrait.traitKey + "] 游戏内创建签到按钮失败:" + ((null == t ? void 0 : t.message) || "HallSignBtn按钮加载失败"));
      });
    }
  }
  updateHallButtonShow() {
    if (cc.isValid(this._hallSignBtnInstance)) {
      this._hallSignBtnInstance.updateLock();
      this.updateRedDot();
    }
  }
  updateRedDot() {
    cc.isValid(this._hallSignBtnInstance) && this._hallSignBtnInstance.checkRedDot();
  }
  getUnlockLevel() {
    return DailySignClassicModel.getInstance().getConfig().unlockLevel;
  }
  onSignViewClosed() {
    this.updateRedDot();
    this.updateSettingRedDot();
  }
  updateSettingRedDot() {
    var t = DailySignClassicModel.getInstance();
    if (t.isUnlocked() && !t.hasOpenedSignView()) {
      mj.EventManager.emit(EGameEvent.RedDot_addNotify, ERedDotType.DailySignClassic);
    } else {
      mj.EventManager.emit(EGameEvent.RedDot_clearNotify, ERedDotType.DailySignClassic);
    }
  }
  onHDailyBtn_onLoad(t, e) {
    e();
  }
  onMGBtnBackRP_hasRedDot(t, e) {
    var i = DailySignClassicModel.getInstance();
    if (i.isUnlocked() && !i.hasOpenedSignView()) {
      e({
        returnVal: true,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      e();
    }
  }
}