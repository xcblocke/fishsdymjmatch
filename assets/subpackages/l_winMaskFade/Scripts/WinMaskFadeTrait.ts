import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
@mj.trait
@mj.class("WinMaskFadeTrait")
export default class WinMaskFadeTrait extends Trait {
  _isHideBonusView = false;
  _blackOpacity = 215;
  _maskOpacity = 255;
  static traitKey = "WinMaskFade";
  onLoad() {
    var e, i;
    super.onLoad.call(this);
    this._blackOpacity = (null === (e = this.traitData.config) || void 0 === e ? void 0 : e.blackOpacity) || 215;
    this._maskOpacity = (null === (i = this.traitData.config) || void 0 === i ? void 0 : i.maskOpacity) || 255;
  }
  onRankBonusVw_destroy(t, e) {
    this._isHideBonusView = true;
    e();
  }
  onWinVw_onLoad(t, e) {
    if (this._isHideBonusView) {
      var i = t.ins;
      (null == i ? void 0 : i.maskNode) && (i.maskNode.opacity = 0);
    }
    e();
  }
  onWinBhv_pushWinView(t, e) {
    if (this._isHideBonusView) {
      var i = t.args[0];
      ControllerManager.getInstance().pushViewByController("WinController", {
        data: i.data,
        bgStyle: {
          blackOpacity: this._blackOpacity
        },
        isShowAction: false
      }, null);
      e({
        returnType: TraitCallbackReturnType.jump
      });
    } else e();
  }
  onWinVw_playMaskFadeIn(t, e) {
    var i, r;
    if (this._isHideBonusView) {
      this._isHideBonusView = false;
      var o = t.ins;
      if (o) {
        var a = null === (i = o.node.parent) || void 0 === i ? void 0 : i.getChildByName("BlurBg");
        a && (a.opacity = 0);
        null === (r = o.stopMaskAnimation) || void 0 === r || r.call(o);
        o.maskNode && (o.maskNode.opacity = this._maskOpacity);
      }
      e({
        returnType: TraitCallbackReturnType.jump
      });
    } else e();
  }
}