"use strict";
cc._RF.push(module, 'e9b2cWfRAJI/5JKO1DRa7h5', 'RecentTwoNearCharSel');
// Scripts/RecentTwoNearCharSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentTwoNearCharSel = void 0;
var ICharSelection_1 = require("./ICharSelection");
var RecentTwoNearCharSel = /** @class */ (function () {
    function RecentTwoNearCharSel() {
    }
    RecentTwoNearCharSel.prototype.selectCharacterPair = function (e, t, o, r) {
        var a, l, s = r.recentCharsHistory.slice(-2), c = new Set(s), u = [];
        try {
            for (var p = __values(o), f = p.next(); !f.done; f = p.next()) {
                var d = f.value;
                u.push(c.has(d[0].resId) ? 100 : 1);
            }
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (l = p.return) && l.call(p);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        return ICharSelection_1.weightedRandomSelect(u);
    };
    return RecentTwoNearCharSel;
}());
exports.RecentTwoNearCharSel = RecentTwoNearCharSel;

cc._RF.pop();