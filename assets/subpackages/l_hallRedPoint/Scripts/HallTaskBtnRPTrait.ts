import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
@mj.trait
@mj.class("HallTaskBtnRPTrait")
export default class HallTaskBtnRPTrait extends Trait {
  _config = {};
  static traitKey = "HallTaskBtnRP";
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
    return null !== (t = this._config.enabled) && void 0 !== t ? t : HallTaskBtnRPTrait.DEFAULT_CONFIG.enabled;
  }
  getRedDotPath() {
    return this._config.redDotPath || HallTaskBtnRPTrait.DEFAULT_CONFIG.redDotPath;
  }
  shouldShowRedDot() {
    var t, e;
    if (!this.isEnabled()) return false;
    if (this.isClicked) return false;
    var o = null === (e = null === (t = mj.getClassByName("TaskModel")) || void 0 === t ? void 0 : t.getInstance) || void 0 === e ? void 0 : e.call(t);
    return !(null == o || !o.isTaskOpen());
  }
  updateRedDotOnNode(t, e) {
    if (cc.isValid(t)) {
      var o = t.getChildByName("unlockRedDot_task");
      if (e) {
        var i = cc.find("Bg/item_lock", t);
        i && (i.active = false);
        var r = cc.find("Bg/sp_red", t);
        r && (r.active = false);
        if (o) o.active = true;else if (o = new cc.Node("unlockRedDot_task")) {
          var n = o.addComponent(cc.Sprite);
          n && (n.sizeMode = cc.Sprite.SizeMode.RAW);
          BaseSprite.refreshWithNode(o, this.getRedDotPath(), false, false, "mainRes");
          o.setPosition(cc.v2(60, 70));
          t.addChild(o);
        }
      } else o && (o.active = false);
    }
  }
  onTaskTt_updateLock(t, e) {
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
      console.error("[HallTaskBtnRPTrait] onTaskTt_updateLock 异常: " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onTaskTt_onBtnClick(t, e) {
    var o,
      i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
    if (cc.isValid(i)) {
      var r = i.getChildByName("unlockRedDot_task");
      if (r && r.active) {
        this.setClicked();
        r.active = false;
      }
    }
    e();
  }
  onTaskAutoPopT_showPopVw(t, e) {
    var o;
    if (this.shouldShowRedDot()) {
      var i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
      null == i || i(false);
      e({
        returnVal: false,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
  onDSSimple_showPopVw(t, e) {
    if (this.shouldShowRedDot()) {
      e({
        returnVal: false,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      e();
    }
  }
  onDailyTaskPush_showTaskVw(t, e) {
    var o;
    if (this.shouldShowRedDot()) {
      var i = null === (o = t.args) || void 0 === o ? void 0 : o[1];
      null == i || i(false);
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
}