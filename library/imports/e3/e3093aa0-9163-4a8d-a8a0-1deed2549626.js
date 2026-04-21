"use strict";
cc._RF.push(module, 'e3093qgkWNKjaigHe7SVJYm', 'TweenEasing');
// Scripts/base/TweenEasing.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.easeCard5 = exports.easeCard4 = exports.easeCard3 = exports.easeCard2 = exports.easeCard = exports.makeCubicBezier = void 0;
function n(e, t, o, n) {
    var i = 1 - 3 * o + 3 * e, r = 3 * o - 6 * e, a = 3 * e, l = 1 - 3 * n + 3 * t, s = 3 * n - 6 * t, c = 3 * t, u = function u(e) {
        return ((l * e + s) * e + c) * e;
    }, p = function p(e) {
        return (3 * i * e + 2 * r) * e + a;
    };
    return function (e) {
        if (e <= 0)
            return 0;
        if (e >= 1)
            return 1;
        for (var t, o = e, n = 0; n < 8; n++) {
            var l = ((i * (t = o) + r) * t + a) * t - e;
            if (Math.abs(l) < 0.000001)
                break;
            var s = p(o);
            if (Math.abs(s) < 0.000001)
                break;
            o -= l / s;
        }
        return u(o);
    };
}
exports.makeCubicBezier = n;
exports.easeCard = n(0.45, 0, 0.9, 0.55);
exports.easeCard2 = n(0.25, 0.5, 0.75, 1);
exports.easeCard3 = n(0.2, 0, 0.8, 1);
exports.easeCard4 = n(0.17, 0.52, 0.58, 0.99);
exports.easeCard5 = n(0.42, 0, 0.58, 1);

cc._RF.pop();