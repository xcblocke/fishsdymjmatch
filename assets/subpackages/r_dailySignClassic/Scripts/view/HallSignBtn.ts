import BaseUI from '../../../../Scripts/framework/ui/BaseUI';
import ControllerManager from '../../../../Scripts/framework/manager/ControllerManager';
import DailySignClassicModel from '../model/DailySignClassicModel';
import I18NStrings from '../../../../Scripts/framework/data/I18NStrings';
import GameUtils from '../../../../Scripts/core/simulator/util/GameUtils';
import { DotGameBtnClick, EHomePageClickType } from '../../../../Scripts/dot/DGameBtnClick';
@mj.class
export default class HallSignBtn extends BaseUI {
  _redDot = null;
  _itemLock = null;
  _lb_level = null;
  _lb_sign = null;
  _effLock = null;
  static prefabUrl = "prefab/HallSignBtn";
  static bundleName = "r_dailySignClassic";
  get signModel() {
    return DailySignClassicModel.getInstance();
  }
  @mj.traitEvent("SignBtn_onLoad")
  onLoad() {
    var e, i, o;
    super.onLoad.call(this);
    this.OnButtonClick(this.node, this.onBtnClick.bind(this));
    this._redDot = cc.find("img_red", this.node);
    this._redDot;
    this._lb_sign = null === (e = cc.find("txt_sign", this.node)) || void 0 === e ? void 0 : e.getComponent(cc.Label);
    this._itemLock = cc.find("item_lock", this.node);
    if (this._itemLock) {
      this._lb_level = null === (i = cc.find("item_lock/txt_open", this.node)) || void 0 === i ? void 0 : i.getComponent(cc.Label);
      this._itemLock.active = false;
      this._effLock = null === (o = cc.find("item_lock/eff_lock", this.node)) || void 0 === o ? void 0 : o.getComponent(sp.Skeleton);
    }
    this.updateRedDot(false);
    this.updateLock();
  }
  @mj.traitEvent("SignBtn_click")
  onBtnClick() {
    if (this.signModel.isUnlocked()) {
      this.signModel.markSignViewOpened();
      ControllerManager.getInstance().pushViewByController("DailySignClassicController");
      DotGameBtnClick.dotHall(EHomePageClickType.DailySign);
    } else this.playLockAnim();
  }
  @mj.traitEvent("SignBtn_doLockAni")
  doPlayLockAnim() {
    var t = this;
    cc.isValid(this._effLock) && GameUtils.playSpine(this._effLock, "in", false, function () {
      cc.isValid(t._effLock) && GameUtils.playSpine(t._effLock, "init", true);
    });
  }
  playLockAnim() {
    this.doPlayLockAnim();
    var t = this.signModel.getConfig(),
      e = this.getOpenTips(t.unlockLevel);
    ControllerManager.getInstance().pushViewByController("LockTipsController", {
      isReuse: false,
      tips: e,
      noBlock: true,
      isGlobal: false,
      bgStyle: null,
      isShowAction: false
    });
  }
  @mj.traitEvent("SignBtn_updateRedDot")
  updateRedDot(t) {
    cc.isValid(this._redDot) && (this._redDot.active = t);
  }
  @mj.traitEvent("SignBtn_updateLock")
  updateLock(t = this.signModel.isUnlocked()) {
    var e = this.signModel.getConfig().unlockLevel;
    this._itemLock && (this._itemLock.active = !t);
    if (this._lb_level && !t) {
      var i = this.getLevel(e);
      this._lb_level.string = "Lv." + i;
    }
    this._lb_sign && (this._lb_sign.node.active = t);
  }
  @mj.traitEvent("SignBtn_checkRedDot")
  checkRedDot() {
    var t = this.signModel.checkTodaySigned(),
      e = this.signModel.isUnlocked() && !t;
    this.updateRedDot(e);
    return e;
  }
  @mj.traitEvent("SignBtn_getLv")
  getLevel(t) {
    return t;
  }
  @mj.traitEvent("SignBtn_getOTips")
  getOpenTips(t) {
    return I18NStrings.get("MahjongTiles_ProHint_2", "Unlock at Level {0}").replace("{0}", String(t));
  }
  onEnable() {
    super.onEnable && super.onEnable.call(this);
    this.dispatchEvent("MsgEnableHomeBtn", {
      type: "DailySign",
      node: this.node
    });
  }
  onDestroy() {
    super.onDestroy.call(this);
  }
}