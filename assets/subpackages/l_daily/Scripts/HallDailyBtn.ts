import { ERedDotType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import { playSpineAnim } from '../../../Scripts/framework/utils/CommonUtils';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import { DotGameBtnClick, EHomePageClickType } from '../../../Scripts/dot/DGameBtnClick';
import { DotGamePageShow, EPageShowType } from '../../../Scripts/dot/DGamePageShow';
import DailyModel from './DailyModel';
@mj.class
export default class HallDailyBtn extends BaseUI {
  @mj.component("eff_btn", sp.Skeleton)
  _effBtn: "eff_btn" = null;
  @mj.component("txt_day", cc.Label)
  _txtDay: "txt_day" = null;
  @mj.component("txt_daily", cc.Label)
  _txtDaily: "txt_daily" = null;
  @mj.node("img_red")
  _imgRed: "img_red" = null;
  @mj.node("item_lock")
  _itemLock: "item_lock" = null;
  _isOpen = true;
  _level = 10;
  @mj.component("item_lock/txt_open", cc.Label)
  _txtOpen: "item_lock/txt_open" = null;
  @mj.component("item_lock/eff_lock", sp.Skeleton)
  _effLock: "item_lock/eff_lock" = null;
  static prefabUrl = "prefabs/daily/HallDailyBtn";
  static bundleName = "mainRes";
  @mj.traitEvent("HDailyBtn_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this.OnButtonClick(this.node, {
      func: this.onBtnClick.bind(this)
    });
    this.initEffAnim();
  }
  onEnable() {
    super.onEnable && super.onEnable.call(this);
    this.dispatchEvent("MsgEnableHomeBtn", {
      type: "DailyChallenge",
      node: this.node
    });
  }
  onDisable() {
    super.onDisable && super.onDisable.call(this);
  }
  @mj.traitEvent("HDailyBtn_initEff")
  initEffAnim() {
    this.animProxy = BaseSpine.refreshWithNode(this._effBtn.node);
    this.animProxy.reset("");
    this.animProxy.markReady("");
    this.attachNode("hook_date", this._txtDay.node, 1);
    this.attachNode("hook_txtDaily", this._txtDaily.node, 1);
  }
  start() {
    super.start.call(this);
    this.updateDay();
  }
  @mj.traitEvent("HDailyBtn_updateDay")
  updateDay() {
    if (this._txtDay) {
      var t = new Date().getDate();
      this._txtDay.string = "" + t;
      this._isOpen && (this._isOpen = true);
    }
  }
  @mj.traitEvent("HDailyBtn_updateLock")
  updateLock(t, e) {
    if (cc.isValid(this._txtDaily)) {
      this._itemLock && (this._itemLock.active = !t);
      this._txtOpen && !t && (this._txtOpen.string = "Lv." + e);
      this._txtDaily.node.active = t;
      this._isOpen = t;
      this._level = e;
    }
  }
  @mj.traitEvent("HDailyBtn_updateRed")
  updateRed(t) {
    var e = {
      show: t,
      type: ERedDotType.DailyChallenge
    };
    mj.triggerInternalEvent("RedDotCtrl_showRedDot", this, [e]);
    this._imgRed && (this._imgRed.active = e.show);
  }
  @mj.traitEvent("HDailyBtn_doLockAni")
  doPlayLockAnim() {
    cc.isValid(this._effLock) && playSpineAnim(this._effLock, 1, "in", null, false);
  }
  playLockAnim() {
    this.doPlayLockAnim();
    var t = I18NStrings.stringFormat(I18NStrings.get("MahjongTiles_ProHint_1"), this._level);
    ControllerManager.getInstance().pushViewByController("LockTipsController", {
      isReuse: false,
      tips: t,
      noBlock: true,
      isGlobal: false,
      bgStyle: null,
      isShowAction: false
    });
  }
  attachNode(t, e, i = 1) {
    if (cc.isValid(this.animProxy) && cc.isValid(e)) {
      this.animProxy.attachNode(t, function () {
        return e;
      });
      e.setPosition(0, 0);
    }
  }
  @mj.traitEvent("HDailyBtn_onBClick")
  onBtnClick(t = true) {
    if (t) {
      DailyModel.getInstance().setOpenCnt(1);
      ControllerManager.getInstance().pushViewByController("DailyController", {
        timeStamp: new Date().format("YYYY-mm-dd"),
        isReuse: false,
        isShowAction: false
      });
      DotGamePageShow.dot(EPageShowType.DailyChallengePage);
      DotGameBtnClick.dotHall(EHomePageClickType.DailyChallenge);
    } else this.playLockAnim();
  }
}