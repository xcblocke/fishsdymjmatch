"use strict";
cc._RF.push(module, '5fceejY2UdCsYX/gZof07Dw', 'HeightPairCoordSel');
// Scripts/HeightPairCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HeightPairCoordSel = void 0;
var HeightPairCoordSel = /** @class */ (function () {
    function HeightPairCoordSel() {
    }
    HeightPairCoordSel.prototype.calculatePriority = function (e, t) {
        return {
            priority: 50 * (e.layer + t.layer),
            subScore: Math.random()
        };
    };
    return HeightPairCoordSel;
}());
exports.HeightPairCoordSel = HeightPairCoordSel;

cc._RF.pop();