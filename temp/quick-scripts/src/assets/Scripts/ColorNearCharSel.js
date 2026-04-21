"use strict";
cc._RF.push(module, 'c7126rzrtZJwqU+072yy1P8', 'ColorNearCharSel');
// Scripts/ColorNearCharSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorNearCharSel = void 0;
var ICharSelection_1 = require("./ICharSelection");
var ColorNearCharSel = /** @class */ (function () {
    function ColorNearCharSel() {
    }
    ColorNearCharSel.prototype.selectCharacterPair = function (e, t, o, r) {
        var a, l, s = new Set(r.recentCharsHistory.slice(-10)), c = [];
        try {
            for (var u = __values(o), p = u.next(); !p.done; p = u.next()) {
                var f = p.value, d = s.has(f[0].resId);
                c.push(d ? 10 : 1);
            }
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                p && !p.done && (l = u.return) && l.call(u);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        var h = ICharSelection_1.weightedRandomSelect(c), y = o[h];
        s.has(y[0].resId);
        return h;
    };
    return ColorNearCharSel;
}());
exports.ColorNearCharSel = ColorNearCharSel;

cc._RF.pop();