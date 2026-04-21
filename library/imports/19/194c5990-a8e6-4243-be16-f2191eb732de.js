"use strict";
cc._RF.push(module, '194c5mQqOZCQ74W8hketzLe', 'DeadSelectUtils');
// subpackages/l_deathAnalyze/Scripts/DeadSelectUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DeadSelectUtils = void 0;
var DeadSelectUtils = /** @class */ (function () {
    function DeadSelectUtils() {
    }
    DeadSelectUtils.getAllMatchTiles = function (t) {
        for (var e = [], r = 0; r < t.length; r++)
            for (var n = r + 1; n < t.length; n++)
                e.push([t[r], t[n]]);
        return e;
    };
    return DeadSelectUtils;
}());
exports.DeadSelectUtils = DeadSelectUtils;

cc._RF.pop();