import { EVT_MSG_KEY_EVENT_TOP_TOUCH_START } from '../../../Scripts/Config';
import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
@mj.trait
@mj.class("ValentineClickEffectTrait")
export default class ValentineClickEffectTrait extends Trait {
  _isValentineOpen = true;
  static traitKey = "ValentineClickEffect";
  static BUNDLE_NAME = "r_valentineClickEffect";
  get isValentineOpen() {
    return this._isValentineOpen;
  }
  get clickEffBundle() {
    return null != this._traitData.clickEffBundle ? this._traitData.clickEffBundle : "" + ValentineClickEffectTrait.BUNDLE_NAME;
  }
  get clickEffPath() {
    return null != this._traitData.clickEffPath ? this._traitData.clickEffPath : "spine/gameplay_touch";
  }
  getMessageListeners() {
    var _t = {};
    _t[EVT_MSG_KEY_EVENT_TOP_TOUCH_START] = this.onTopTouchStart.bind(this);
    return _t;
  }
  onTopTouchStart(t) {
    if (this.isClickEffectActive()) {
      var e = cc.Canvas.instance.node,
        n = BaseSpine.create(this.clickEffPath, "in", 1, null, true, this.clickEffBundle);
      n.node.zIndex = 999;
      n.node.parent = e;
      var i = t.getLocation(),
        r = e.convertToNodeSpaceAR(cc.v3(i.x, i.y, 0));
      n.node.position = r;
    }
  }
  isClickEffectActive() {
    if (null != this._traitData.clickEffect) return this._traitData.clickEffect;
    var t = mj.getClassByName("ValentineModel");
    return null != t && t.getInstance().isEffectActive();
  }
}