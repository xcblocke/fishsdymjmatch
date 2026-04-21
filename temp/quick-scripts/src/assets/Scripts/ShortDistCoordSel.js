"use strict";
cc._RF.push(module, '67192Xzq5hBP62akxUhEZOy', 'ShortDistCoordSel');
// Scripts/ShortDistCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortDistCoordSel = void 0;
var ShortDistCoordSel = /** @class */ (function () {
    function ShortDistCoordSel() {
    }
    ShortDistCoordSel.prototype.calculatePriority = function (e, t) {
        var o = this._calculate3DDistance(e, t);
        return o <= 3 ? {
            priority: 20,
            subScore: Math.random()
        } : o <= 6 ? {
            priority: 5,
            subScore: Math.random()
        } : {
            priority: 1,
            subScore: Math.random()
        };
    };
    ShortDistCoordSel.prototype._calculate3DDistance = function (e, t) {
        var o = e.gridPosX - t.gridPosX, n = e.gridPosY - t.gridPosY, i = e.layer - t.layer;
        return Math.sqrt(o * o + n * n + i * i);
    };
    return ShortDistCoordSel;
}());
exports.ShortDistCoordSel = ShortDistCoordSel;

cc._RF.pop();