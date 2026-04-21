import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
@mj.trait
@mj.class("HallRankBtnRPTrait")
export default class HallRankBtnRPTrait extends Trait {
  _config = {};
  static traitKey = "HallRankBtnRP";
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
    return null !== (t = this._config.enabled) && void 0 !== t ? t : HallRankBtnRPTrait.DEFAULT_CONFIG.enabled;
  }
  getRedDotPath() {
    return this._config.redDotPath || HallRankBtnRPTrait.DEFAULT_CONFIG.redDotPath;
  }
  shouldShowRedDot() {
    if (!this.isEnabled()) return false;
    if (this.isClicked) return false;
    var t = mj.getClassByName("HallRankBtnLockTrait"),
      e = null == t ? void 0 : t.getInstance();
    return !(true === (null == e ? void 0 : e.eventEnabled) && !e.isRankOpen());
  }
  updateRedDotOnNode(t, e) {
    if (cc.isValid(t)) {
      var o = t.getChildByName("unlockRedDot_rank");
      if (e) {
        if (o) o.active = true;else if (o = new cc.Node("unlockRedDot_rank")) {
          var i = o.addComponent(cc.Sprite);
          if (i) {
            i.sizeMode = cc.Sprite.SizeMode.RAW;
            i.trim = false;
          }
          BaseSprite.refreshWithNode(o, this.getRedDotPath(), false, false, "mainRes");
          o.setPosition(55, 78);
          t.addChild(o);
        }
      } else o && (o.active = false);
    }
  }
  onRankBtn_updateAll(t, e) {
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
      console.error("[HallRankBtnRPTrait] onRankBtn_updateAll 异常: " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onRankBtn_click(t, e) {
    var o,
      i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
    if (cc.isValid(i)) {
      var r = i.getChildByName("unlockRedDot_rank");
      if (r && r.active) {
        this.setClicked();
        r.active = false;
      }
    }
    e();
  }
}