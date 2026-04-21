import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
@mj.trait
@mj.class("HallSignBtnRPTrait")
export default class HallSignBtnRPTrait extends Trait {
  _config = {};
  static traitKey = "HallSignBtnRP";
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
  isEnabled() {
    var t;
    return null !== (t = this._config.enabled) && void 0 !== t ? t : HallSignBtnRPTrait.DEFAULT_CONFIG.enabled;
  }
  getRedDotPath() {
    return this._config.redDotPath || HallSignBtnRPTrait.DEFAULT_CONFIG.redDotPath;
  }
  shouldShowRedDot() {
    var t, e;
    if (!this.isEnabled()) return false;
    if (this.isClicked) return false;
    var o = mj.getClassByName("DailySignClassicModel"),
      i = null === (t = null == o ? void 0 : o.getInstance) || void 0 === t ? void 0 : t.call(o);
    return !(null === (e = null == i ? void 0 : i.isUnlocked) || void 0 === e || !e.call(i));
  }
  updateRedDotOnNode(t, e) {
    if (cc.isValid(t)) {
      var o = t.getChildByName("unlockRedDot_sign");
      if (e) {
        var i = t.getChildByName("img_red");
        i && (i.active = false);
        if (o) o.active = true;else if (o = new cc.Node("unlockRedDot_sign")) {
          var r = o.addComponent(cc.Sprite);
          if (r) {
            r.sizeMode = cc.Sprite.SizeMode.RAW;
            r.trim = false;
          }
          BaseSprite.refreshWithNode(o, this.getRedDotPath(), false, false, "mainRes");
          o.setPosition(cc.v2(55, 70));
          t.addChild(o);
        }
      } else o && (o.active = false);
    }
  }
  onSignBtn_onLoad(t, e) {
    var o;
    try {
      var i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
      if (!cc.isValid(i)) {
        e();
        return;
      }
      var r = this.shouldShowRedDot();
      this.updateRedDotOnNode(i, r);
    } catch (t) {
      console.error("[HallSignBtnRPTrait] onSignBtn_onLoad 异常: " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onSignBtn_updateLock(t, e) {
    var o;
    try {
      var i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
      if (!cc.isValid(i)) {
        e();
        return;
      }
      var r = this.shouldShowRedDot();
      this.updateRedDotOnNode(i, r);
    } catch (t) {
      console.error("[HallSignBtnRPTrait] onSignBtn_updateLock 异常: " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onSignBtn_click(t, e) {
    var o,
      i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
    if (cc.isValid(i)) {
      var r = i.getChildByName("unlockRedDot_sign");
      if (r && r.active) {
        this.setClicked();
        r.active = false;
      }
    }
    e();
  }
  onSignBtn_checkRedDot(t, e) {
    var o,
      i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
    if (cc.isValid(i) && this.shouldShowRedDot()) {
      var r = i.getChildByName("img_red");
      r && (r.active = false);
    }
    e();
  }
  onSignBtn_updateRedDot(t, e) {
    if (this.shouldShowRedDot()) {
      e({
        isBreak: true
      });
    } else {
      e();
    }
  }
  onDSClassic_showPopVw(t, e) {
    var o, i;
    if (this.shouldShowRedDot()) {
      null === (i = null === (o = t.ins) || void 0 === o ? void 0 : o.updateSettingRedDot) || void 0 === i || i.call(o);
      e({
        returnVal: false,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
}