"use strict";
cc._RF.push(module, 'f0f59cmqCRF8KgSR53Re9P1', 'PredDepthCoordSel');
// Scripts/PredDepthCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PredDepthCoordSel = void 0;
var PredDepthCoordSel = /** @class */ (function () {
    function PredDepthCoordSel() {
    }
    PredDepthCoordSel.prototype.calculatePriority = function (e, t, o) {
        var n = o.tileToCoord(e), i = o.tileToCoord(t), r = o.getTopologyLevel(n), a = o.getTopologyLevel(i), l = 1;
        r === a && (l *= 10);
        r + a <= 2 && (l *= 3);
        return {
            priority: l,
            subScore: Math.random()
        };
    };
    return PredDepthCoordSel;
}());
exports.PredDepthCoordSel = PredDepthCoordSel;

cc._RF.pop();