"use strict";
cc._RF.push(module, '1c39dNpaS5Ll6NBNDAzEJsr', 'RankUtil');
// subpackages/l_rank/Scripts/RankUtil.ts

Object.defineProperty(exports, "__esModule", { value: true });
var RankUtil = /** @class */ (function () {
    function RankUtil() {
    }
    RankUtil.formatCountdown = function (t) {
        if (t <= 0)
            return "00:00:00";
        var e = Math.floor(t / 1000), o = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), a = e % 60, i = function i(t) {
            return t.toString().padStart(2, "0");
        };
        return i(o) + ":" + i(n) + ":" + i(a);
    };
    RankUtil.formatCountdownDayHourMin = function (t) {
        if (t <= 0)
            return "00:00:00";
        if (t >= 86400)
            return Math.floor(t / 86400) + "d" + (o = Math.floor(t % 86400 / 3600)) + "h" + (n = Math.floor(t % 3600 / 60)) + "m";
        var e = Math.floor(t), o = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), a = e % 60, i = function i(t) {
            return t.toString().padStart(2, "0");
        };
        return i(o) + ":" + i(n) + ":" + i(a);
    };
    return RankUtil;
}());
exports.default = RankUtil;

cc._RF.pop();