"use strict";
cc._RF.push(module, '33b3aexGPpJ2Kd2Qvp99u1e', 'SymmetricCoordSel');
// Scripts/SymmetricCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SymmetricCoordSel = void 0;
var SymmetricCoordSel = /** @class */ (function () {
    function SymmetricCoordSel() {
    }
    SymmetricCoordSel.prototype.calculatePriority = function (e, t) {
        var o = e.layer, n = e.gridPosY, i = e.gridPosX, r = t.layer, a = t.gridPosY, l = t.gridPosX;
        return o === r && n === a ? (i + l) % 2 == 0 ? {
            priority: 150,
            subScore: Math.random()
        } : {
            priority: 100,
            subScore: Math.random()
        } : o === r ? {
            priority: 50,
            subScore: Math.random()
        } : {
            priority: 10,
            subScore: Math.random()
        };
    };
    return SymmetricCoordSel;
}());
exports.SymmetricCoordSel = SymmetricCoordSel;

cc._RF.pop();