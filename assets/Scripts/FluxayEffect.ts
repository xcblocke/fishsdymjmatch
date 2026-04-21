import { resManager } from './framework/manager/ResManager';
const {
  ccclass,
  property,
  executeInEditMode,
  requireComponent
} = cc._decorator;
var f = cc.Enum({
  type1: 0,
  type2: 1
});
@ccclass
@executeInEditMode
@requireComponent(cc.RenderComponent)
export default class FluxayEffect extends cc.Component {
  @property
  _fluxayColor = cc.Color.WHITE;
  @property
  _type = f.type2;
  @property
  _brightness = 25;
  @property
  _waveNum = 6;
  @property
  _lightAlphaThreshold = 0;
  @property
  _speed = 0.5;
  _renderComponent = null;
  _loadComplete = false;
  @property({
    type: cc.Color
  })
  get fluxayColor() {
    return this._fluxayColor;
  }
  set fluxayColor(e) {
    this._fluxayColor = e;
    this.updateProperties();
  }
  @property({
    type: f,
    tooltip: "type1为扫光,type2为波光"
  })
  get type() {
    return this._type;
  }
  set type(e) {
    this._type = e;
    this.updateProperties();
  }
  @property({
    type: cc.Integer,
    range: [0, 100],
    slide: true,
    tooltip: "反光强度"
  })
  get brightness() {
    return this._brightness;
  }
  set brightness(e) {
    this._brightness = e;
    this.updateProperties();
  }
  @property({
    type: cc.Integer,
    range: [0, 30],
    slide: true,
    tooltip: "水波密度"
  })
  get waveNum() {
    return this._waveNum;
  }
  set waveNum(e) {
    this._waveNum = e;
    this.updateProperties();
  }
  @property({
    type: cc.Float,
    range: [0, 1],
    slide: true,
    tooltip: "透明阈值，判断什么情况下进行效果计算"
  })
  get lightAlphaThreshold() {
    return this._lightAlphaThreshold;
  }
  set lightAlphaThreshold(e) {
    this._lightAlphaThreshold = e;
    this.updateProperties();
  }
  @property({
    type: cc.Float,
    range: [0, 1],
    slide: true,
    tooltip: "波光变化速度，默认0.5"
  })
  get speed() {
    return this._speed;
  }
  set speed(e) {
    this._speed = e;
    this.updateProperties();
  }
  onLoad() {
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
      resManager.loadRes("materials/FluxayEffect", cc.Material, "resources").then(function (e) {
        t(e);
      });
    }
  }
  updateProperties() {
    if (this._renderComponent && this._loadComplete) {
      this._renderComponent.getMaterial(0).setProperty("fluxayColor", this._fluxayColor);
      this._renderComponent.getMaterial(0).setProperty("lightAlphaThreshold", this._lightAlphaThreshold);
      this._renderComponent.getMaterial(0).setProperty("args", new cc.Vec4(this._type, this._brightness, this._waveNum, this._speed));
    }
  }
  start() {}
}