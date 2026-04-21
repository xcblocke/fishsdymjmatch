
export default class QRCodeUtils {
  static drawQRCode(e, t, o, r) {
    var a = Object.assign(Object.assign({},  {
          errorCorrectLevel: QRCode.ErrorCorrectLevel.M,
          foregroundColor: cc.Color.BLACK,
          backgroundColor: cc.Color.WHITE,
          margin: 1
        }), r),
      l = new QRCode.Generator(0, a.errorCorrectLevel);
    l.addData(t);
    l.make();
    var s = l.getModuleCount(),
      c = o / (s + 2 * a.margin),
      u = o / 2;
    e.clear();
    e.fillColor = a.backgroundColor;
    e.rect(-u, -u, o, o);
    e.fill();
    e.fillColor = a.foregroundColor;
    for (var p = 0; p < s; p++) for (var f = 0; f < s; f++) if (l.isDark(p, f)) {
      var d = (f + a.margin) * c - u,
        h = u - (p + a.margin + 1) * c;
      e.rect(d, h, c, c);
    }
    e.fill();
  }
  static createQRCodeNode(e, t, o) {
    var n = new cc.Node("QRCode");
    n.setContentSize(t, t);
    var i = n.addComponent(cc.Graphics);
    this.drawQRCode(i, e, t, o);
    return n;
  }
  static getQRCodeMatrix(e, t = QRCode.ErrorCorrectLevel.M) {
    var o = new QRCode.Generator(0, t);
    o.addData(e);
    o.make();
    return o.getModules();
  }
}
export var ErrorCorrectLevel = QRCode.ErrorCorrectLevel;