import BaseUI from './BaseUI';
import { viewMode } from '../controller/ViewController';
@mj.class
export default class UIView extends BaseUI {
  delegate = null;
  clickBgClose = false;
  static prefabUrl = "";
  onLoad() {
    super.onLoad.call(this);
  }
  start() {
    var t = this;
    super.start && super.start.call(this);
    if (this.delegate) {
      if (this.delegate.viewClass === this.constructor) {
        this.delegate.onStart();
        this.clickBgClose && this.delegate.viewMode !== viewMode.SCENE && this.OnButtonClick(this.node, function () {
          t.delegate.close();
        });
      } else assert(false, "UIView的delegate类型不匹配。UIView需要和ViewController一对一配对，子界面请使用BaseUI: " + (mj.getClassName(this.constructor) || this.constructor.name));
    } else assert(false, "UIView需要和ViewController配对使用。如果是子界面，请使用BaseUI: " + (mj.getClassName(this.constructor) || this.constructor.name));
  }
  getRes(e, t = cc.Asset) {
    assert(false, "UIView中的资源获取应由delegate（Controller）管理：this.delegate.getRes() [" + mj.getClassName(this.constructor) + "]");
    return null;
  }
  async loadRes(e, t = cc.Asset) {
    assert(false, "UIView中的资源加载应由delegate（Controller）管理：this.delegate.loadRes() [" + mj.getClassName(this.constructor) + "]");
    return null;
  }
  onDestroy() {
    var t;
    super.onDestroy && super.onDestroy.call(this);
    null === (t = this.delegate) || void 0 === t || t.onUIDestroy();
  }
  onEnable() {
    var t;
    super.onEnable && super.onEnable.call(this);
    null === (t = this.delegate) || void 0 === t || t.onUIEnable();
  }
  onDisable() {
    var t;
    super.onDisable && super.onDisable.call(this);
    null === (t = this.delegate) || void 0 === t || t.onUIDisable();
  }
}