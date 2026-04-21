import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
@mj.trait
@mj.class("HallDailyBtnRPTrait")
export default class HallDailyBtnRPTrait extends Trait {
  _config = {};
  static traitKey = "HallDailyBtnRP";
  static DEFAULT_CONFIG = {
    enabled: true,
    redDotPath: "texture/gamePlay/gameplay_img_hongdian"
  };
  get isClicked() {
    return true === this.localData.clicked;
  }
  setClicked() {
    this.localData.clicked = true;
  }
  onLoad() {
    super.onLoad.call(this);
    this._config = this._traitData || {};
  }
  getRedDotPath() {
    return this._config.redDotPath || HallDailyBtnRPTrait.DEFAULT_CONFIG.redDotPath;
  }
  updateRedDotOnNode(t, e, o) {
    if (cc.isValid(e)) {
      var i = e.getChildByName("unlockRedDot_daily");
      if (o) {
        var r = null == e ? void 0 : e.getChildByName("img_red");
        r && (r.active = false);
        if (i) i.active = true;else if (i = new cc.Node("unlockRedDot_daily")) {
          var n = i.addComponent(cc.Sprite);
          if (n) {
            n.sizeMode = cc.Sprite.SizeMode.RAW;
            n.trim = false;
          }
          BaseSprite.refreshWithNode(i, this.getRedDotPath(), false, false, "mainRes");
          i.setPosition(cc.v2(64, 58));
          e.addChild(i);
        }
      } else i && (i.active = false);
    }
  }
  onHDailyBtn_updateRed(t, e) {
    var o;
    try {
      var i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
      if (!cc.isValid(i)) {
        e();
        return;
      }
      var r = t.args[0];
      this.updateRedDotOnNode(t.ins, i, r);
    } catch (t) {
      console.error("[HallDailyBtnRPTrait] onHDailyBtn_onLoad 异常: " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onHDailyBtn_onBClick(t, e) {
    var o,
      i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
    if (cc.isValid(i)) {
      var r = i.getChildByName("unlockRedDot_daily");
      if (r && r.active) {
        this.setClicked();
        r.active = false;
      }
    }
    e();
  }
  onDCMedalPush_showPopVw(t, e) {
    var o;
    if (this.isClicked) e();else {
      var i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
      null == i || i(false);
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    }
  }
}