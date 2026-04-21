import { resManager } from './framework/manager/ResManager';
const {
  ccclass,
  property,
  executeInEditMode,
  requireComponent
} = cc._decorator;
@ccclass
@executeInEditMode
@requireComponent(cc.RenderComponent)
export default class BrightSaturaContrastUniform extends cc.Component {
  _renderComponent = null;
  _loadComplete = false;
  @property
  _brightness = 1;
  @property
  _saturation = 1;
  @property
  _constrast = 1;
  @property({
    type: cc.Float,
    range: [0, 5],
    slide: true
  })
  get brightness() {
    return this._brightness;
  }
  set brightness(e) {
    this._brightness = e;
    this.updateProperties();
  }
  @property({
    type: cc.Float,
    range: [0, 5],
    slide: true
  })
  get saturation() {
    return this._saturation;
  }
  set saturation(e) {
    this._saturation = e;
    this.updateProperties();
  }
  @property({
    type: cc.Float,
    range: [0, 5],
    slide: true
  })
  get constrast() {
    return this._constrast;
  }
  set constrast(e) {
    this._constrast = e;
    this.updateProperties();
  }
  onEnable() {
    var e = this;
    if (!this._renderComponent) {
      this._renderComponent = this.getComponent(cc.RenderComponent);
      var t = function t(t) {
        t.addRef();
        e._loadComplete = true;
        var o = cc.MaterialVariant.create(t, e._renderComponent);
        e._renderComponent.setMaterial(0, o);
        e.updateProperties();
      };
      resManager.loadRes("materials/BrightSaturaContrastUniform", cc.Material, "resources").then(function (e) {
        t(e);
      });
    }
    this.updateProperties();
  }
  updateProperties() {
    if (this._renderComponent && this._loadComplete) {
      this._renderComponent.getMaterial(0).setProperty("brightness", this._brightness);
      this._renderComponent.getMaterial(0).setProperty("saturation", this._saturation);
      this._renderComponent.getMaterial(0).setProperty("constrast", this._constrast);
    }
  }
}