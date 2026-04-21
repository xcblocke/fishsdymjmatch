import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
@mj.trait
@mj.class("LowDevicePerfTrait")
export default class LowDevicePerfTrait extends Trait {
  static traitKey = "LowDevicePerf";
  onLoad() {
    super.onLoad.call(this);
  }
  onAdMgr_loadVideoAd(e, t) {
    if (LoginModel.getInstance().isLowEndDevice()) {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      t();
    }
  }
  onAdMgr_loadInterAd(e, t) {
    if (LoginModel.getInstance().isLowEndDevice()) {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      t();
    }
  }
  onAdMgr_showBanner(e, t) {
    if (LoginModel.getInstance().isLowEndDevice()) {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      t();
    }
  }
  onAdMgr_chkInterAd(e, t) {
    if (LoginModel.getInstance().isLowEndDevice()) {
      t({
        returnVal: false,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      t();
    }
  }
  onAdMgr_chkVideoAd(e, t) {
    if (LoginModel.getInstance().isLowEndDevice()) {
      var r = e.ins;
      r && r.playVideoAdFailed && r.playVideoAdFailed(false);
      t({
        returnVal: false,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else t();
  }
  onAdMgr_chkVideoReady(e, t) {
    if (LoginModel.getInstance().isLowEndDevice()) {
      t({
        returnVal: false,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      t();
    }
  }
  onAdMgr_chkInterReady(e, t) {
    if (LoginModel.getInstance().isLowEndDevice()) {
      t({
        returnVal: false,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      t();
    }
  }
}