const {
  ccclass,
  property,
  executeInEditMode,
  requireComponent,
  menu
} = cc._decorator;
@ccclass
@executeInEditMode
@requireComponent(cc.RenderComponent)
@menu("i18n:MAIN_MENU.component.renderers/ColorAssembler2D")
export default class ColorAssembler2D extends cc.Component {
  @property
  _colors = [];
  _tempColor = new cc.Color();
  @property({
    type: [cc.Color]
  })
  get colors() {
    return this._colors;
  }
  set colors(e) {
    this._colors = e;
    this._updateColors();
  }
  onLoad() {
    var e = this;
    this._updateColors();
    var t = this.getComponent(cc.RenderComponent),
      o = t._updateColor;
    t._updateColor = function () {
      o && o.call(t);
      e._updateColors();
    };
  }
  onEnable() {}
  onDisable() {
    this.node._renderFlag |= cc.RenderFlow.FLAG_COLOR;
  }
  update() {}
  lateUpdate() {
    this._updateColors();
  }
  _updateColors() {
    var e = this.getComponent(cc.RenderComponent);
    if (e) {
      var t = e._assembler;
      if (t instanceof cc.Assembler2D) {
        var o = t._renderData.uintVDatas[0];
        if (o) for (var n = this.node.color, i = this.node.opacity, r = t.floatsPerVert, a = 0, l = [2, 3, 0, 1], s = t.colorOffset, c = o.length; s < c; s += r) {
          var u = this.colors[l[a++]];
          if (u) {
            cc.Color.set(this._tempColor, u.r, u.g, u.b, u.a * i / 255);
          } else {
            cc.Color.set(this._tempColor, n.r, n.g, n.b, n.a * i / 255);
          }
          o[s] = this._tempColor._val;
        }
      }
    }
  }
}