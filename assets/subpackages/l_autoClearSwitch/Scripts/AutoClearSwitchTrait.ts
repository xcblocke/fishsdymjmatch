import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import UIAutoClearSwitch from './UIAutoClearSwitch';
import FullComboItem from '../../../Scripts/items/FullComboItem';
import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("AutoClearSwitchTrait")
export default class AutoClearSwitchTrait extends Trait {
  _fullComboSkipped = false;
  _rewardComboSkipped = false;
  static traitKey = "AutoClearSwitch";
  onLoad() {
    super.onLoad.call(this);
    "boolean" != typeof this.localData.autoClearEnabled && (this.localData.autoClearEnabled = true);
    UserModel.getInstance().setAutoClearEnabled(this.localData.autoClearEnabled);
  }
  onEntAniFiBhv_start(t, e) {
    this._fullComboSkipped = false;
    this._rewardComboSkipped = false;
    e();
  }
  onUISetDlgCtrl_initDRes(t, e) {
    this.addPreloadRes(t);
    e();
  }
  addPreloadRes(t) {
    var e = t.ins;
    e && "function" == typeof e.addPreloadRes && e.addPreloadRes("Prefab", UIAutoClearSwitch.getUrl());
  }
  onUISetDlg_adjustPH(t, e) {
    this.adjustPanelHeight(t, function () {
      e();
    });
  }
  adjustPanelHeight(t, e) {
    UIAutoClearSwitch.createUI().then(function (o) {
      if (cc.isValid(o) && (null == t ? void 0 : t.args)) {
        var r = t.args[0] || [];
        o.CustomSlibingIndex = 0;
        r.push(o);
        t.args[0] = r;
      }
      e();
    }).catch(function (t) {
      console.error("[" + AutoClearSwitchTrait.traitKey + "] 创建按钮失败:" + ((null == t ? void 0 : t.message) || "AutoClear 按钮加载失败"));
      e();
    });
  }
  toggleSwitch() {
    var t = !this.localData.autoClearEnabled;
    this.localData.autoClearEnabled = t;
    UserModel.getInstance().setAutoClearEnabled(t);
  }
  isAutoClearEnabled() {
    return this.localData.autoClearEnabled;
  }
  onFullComboBhv_shouldSkip(t, e) {
    if (this.localData.autoClearEnabled) e();else {
      this._fullComboSkipped = true;
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: true
      });
    }
  }
  onRwdComboBhv_shouldSkip(t, e) {
    if (this.localData.autoClearEnabled) e();else {
      this._rewardComboSkipped = true;
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: true
      });
    }
  }
  onBeforeWinBhv_doOthLgc(t, e) {
    this.handleBeforeWinLogic(t, e, "主线模式");
  }
  onBeforeDCWinBhv_doOthLgc(t, e) {
    this.handleBeforeWinLogic(t, e, "每日挑战");
  }
  handleBeforeWinLogic(t, e) {
    if (this._fullComboSkipped && this.checkFullComboTriggered()) {
      var o = t.ins.context.gameView.effectNode;
      this.showFullComboAnimation(o, function () {
        e();
      });
      this._fullComboSkipped = false;
    } else e();
  }
  checkFullComboTriggered() {
    var t = UserModel.getInstance().getCurrentGameData();
    return !!t && t.getHasTriggeredFullCombo();
  }
  showFullComboAnimation(t, e) {
    FullComboItem.createUI().then(function (o) {
      if (o && cc.isValid(t)) {
        o.setParent(t);
        o.position = cc.v3(0, 0, 0);
        var r = o.getComponent(FullComboItem);
        if (r) {
          mj.audioManager.playEffect(EAudioID.FullCombo);
          r.startPlayAni(o, function () {}, function () {
            e();
          });
        } else {
          o.destroy();
          e();
        }
      } else e();
    }).catch(function () {
      e();
    });
  }
  onClrNormHlp_shldChkFail(t, e) {
    var o = t.args[0],
      r = t.args[1];
    if (this._fullComboSkipped || this._rewardComboSkipped || (o || r) && !this.localData.autoClearEnabled) {
      e({
        returnType: TraitCallbackReturnType.jump,
        returnVal: true
      });
    } else {
      e();
    }
  }
  onClrDailyHlp_shldChkFail(t, e) {
    var o = t.args[0],
      r = t.args[1];
    if (this._fullComboSkipped || this._rewardComboSkipped || (o || r) && !this.localData.autoClearEnabled) {
      e({
        returnType: TraitCallbackReturnType.jump,
        returnVal: true
      });
    } else {
      e();
    }
  }
}