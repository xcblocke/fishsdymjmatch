"use strict";
cc._RF.push(module, 'b20a6HwvXtMXr8wVP2O0UkG', 'IntuitiveChainCoordSel');
// Scripts/IntuitiveChainCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.IntuitiveChainCoordSel = void 0;
var IntuitiveChainCoordSel = /** @class */ (function () {
    function IntuitiveChainCoordSel() {
    }
    IntuitiveChainCoordSel.prototype.calculatePriority = function (e, t, o) {
        var n = o.tileToCoord(e), i = o.tileToCoord(t), r = o.lastFreedCoords, a = r.has(n) || r.has(i), l = o.countFreedBlocks(n, i);
        return {
            priority: a ? l >= 2 ? 50 : l >= 1 ? 40 : 30 : l >= 2 ? 20 : l >= 1 ? 10 : 1,
            subScore: Math.random()
        };
    };
    return IntuitiveChainCoordSel;
}());
exports.IntuitiveChainCoordSel = IntuitiveChainCoordSel;

cc._RF.pop();