"use strict";
cc._RF.push(module, '613aaWvpedBbaaw4aPE8f5T', 'LongDistCoordSel');
// Scripts/LongDistCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LongDistCoordSel = void 0;
var LongDistCoordSel = /** @class */ (function () {
    function LongDistCoordSel() {
    }
    LongDistCoordSel.prototype.calculatePriority = function (e, t) {
        var o = this._calculate3DDistance(e, t);
        return o >= 11 ? {
            priority: 20,
            subScore: Math.random()
        } : o >= 8 ? {
            priority: 6,
            subScore: Math.random()
        } : {
            priority: 1,
            subScore: Math.random()
        };
    };
    LongDistCoordSel.prototype._calculate3DDistance = function (e, t) {
        var o = e.gridPosX - t.gridPosX, n = e.gridPosY - t.gridPosY, i = e.layer - t.layer;
        return Math.sqrt(o * o + n * n + i * i);
    };
    return LongDistCoordSel;
}());
exports.LongDistCoordSel = LongDistCoordSel;

cc._RF.pop();