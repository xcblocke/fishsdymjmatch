"use strict";
cc._RF.push(module, '0107fwzw9xNbIEhTi5Q33dr', 'QRCodeUtils');
// Scripts/QRCodeUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCorrectLevel = void 0;
var QRCodeUtils = /** @class */ (function () {
    function QRCodeUtils() {
    }
    QRCodeUtils.drawQRCode = function (e, t, o, r) {
        var a = Object.assign(Object.assign({}, {
            errorCorrectLevel: QRCode.ErrorCorrectLevel.M,
            foregroundColor: cc.Color.BLACK,
            backgroundColor: cc.Color.WHITE,
            margin: 1
        }), r), l = new QRCode.Generator(0, a.errorCorrectLevel);
        l.addData(t);
        l.make();
        var s = l.getModuleCount(), c = o / (s + 2 * a.margin), u = o / 2;
        e.clear();
        e.fillColor = a.backgroundColor;
        e.rect(-u, -u, o, o);
        e.fill();
        e.fillColor = a.foregroundColor;
        for (var p = 0; p < s; p++)
            for (var f = 0; f < s; f++)
                if (l.isDark(p, f)) {
                    var d = (f + a.margin) * c - u, h = u - (p + a.margin + 1) * c;
                    e.rect(d, h, c, c);
                }
        e.fill();
    };
    QRCodeUtils.createQRCodeNode = function (e, t, o) {
        var n = new cc.Node("QRCode");
        n.setContentSize(t, t);
        var i = n.addComponent(cc.Graphics);
        this.drawQRCode(i, e, t, o);
        return n;
    };
    QRCodeUtils.getQRCodeMatrix = function (e, t) {
        if (t === void 0) { t = QRCode.ErrorCorrectLevel.M; }
        var o = new QRCode.Generator(0, t);
        o.addData(e);
        o.make();
        return o.getModules();
    };
    return QRCodeUtils;
}());
exports.default = QRCodeUtils;
exports.ErrorCorrectLevel = QRCode.ErrorCorrectLevel;

cc._RF.pop();