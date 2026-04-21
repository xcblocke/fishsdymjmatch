import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
@mj.trait
@mj.class("HallTravelBtnRPTrait")
export default class HallTravelBtnRPTrait extends Trait {
  _config = {};
  _curSessionRed = false;
  static traitKey = "HallTravelBtnRP";
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
    this._curSessionRed = false;
    this._config = this._traitData || {};
  }
  isEnabled() {
    var t;
    return null !== (t = this._config.enabled) && void 0 !== t ? t : HallTravelBtnRPTrait.DEFAULT_CONFIG.enabled;
  }
  getRedDotPath() {
    return this._config.redDotPath || HallTravelBtnRPTrait.DEFAULT_CONFIG.redDotPath;
  }
  isTravelUnlocked() {
    try {
      var t = mj.getClassByName("JourneyTrait");
      if (null == t ? void 0 : t.getInstance) {
        var e = t.getInstance();
        if (null == e ? void 0 : e.isActiveJourney) return e.isActiveJourney();
      }
    } catch (t) {}
    return false;
  }
  shouldShowRedDot() {
    return !!this.isEnabled() && !!this.isTravelUnlocked() && !this.isClicked;
  }
  updateRedDotOnNode(t, e, o) {
    var i;
    if (cc.isValid(e)) {
      var r = e.getChildByName("unlockRedDot_travel");
      if (o) {
        t.redDotNode && cc.isValid(t.redDotNode) && (t.redDotNode.active = false);
        if (r) r.active = true;else if (r = new cc.Node("unlockRedDot_travel")) {
          r.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
          BaseSprite.refreshWithNode(r, this.getRedDotPath(), false, false, "mainRes");
          var n = this.getDotPos(t);
          r.setPosition(n);
          e.addChild(r);
        }
      } else {
        r && (r.active = false);
        null === (i = t.updateState) || void 0 === i || i.call(t);
      }
    }
  }
  @mj.traitEvent("HTravelBtnRP_getDotPos")
  getDotPos() {
    return cc.v2(294, 80);
  }
  onTravelBtn_updateUI(t, e) {
    var o;
    try {
      var i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
      if (!cc.isValid(i)) {
        e();
        return;
      }
      var r = this.shouldShowRedDot();
      r && (this._curSessionRed = true);
      this.updateRedDotOnNode(t.ins, i, r);
    } catch (t) {
      console.error("[HallTravelBtnRPTrait] onTravelBtn_updateUI 异常: " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onTravelBtn_onBtnClick(t, e) {
    var o,
      i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
    if (cc.isValid(i)) {
      var r = i.getChildByName("unlockRedDot_travel");
      if (r && r.active) {
        this.setClicked();
        r.active = false;
      }
    }
    e();
  }
  onJourney_ShowActiveVw(t, e) {
    if (this._curSessionRed) {
      e({
        returnVal: false,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      e();
    }
  }
}