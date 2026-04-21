"use strict";
cc._RF.push(module, '018bdM3JBJIKrgiEvBrSD66', 'AntiIntuitiveCoordSel');
// Scripts/AntiIntuitiveCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AntiIntuitiveCoordSel = void 0;
var AntiIntuitiveCoordSel = /** @class */ (function () {
    function AntiIntuitiveCoordSel() {
    }
    AntiIntuitiveCoordSel.prototype.calculatePriority = function (e, t, o) {
        var n = o.tileToCoord(e), i = o.tileToCoord(t), r = e.layer !== t.layer, a = this._calculateDistance(e, t), l = this._isAdjacent(e, t), s = o.hasNeighborSelectable(n), c = o.hasNeighborSelectable(i), u = s && c;
        return r && u && a >= 9 ? {
            priority: 100,
            subScore: Math.random()
        } : r && !l && u ? {
            priority: 50,
            subScore: Math.random()
        } : a >= 9 ? {
            priority: 10,
            subScore: Math.random()
        } : {
            priority: 1,
            subScore: Math.random()
        };
    };
    AntiIntuitiveCoordSel.prototype._calculateDistance = function (e, t) {
        var o = e.gridPosX - t.gridPosX, n = e.gridPosY - t.gridPosY, i = Math.sqrt(o * o + n * n), r = Math.abs(e.layer - t.layer);
        return 0 !== r ? i + Math.log(r) : i;
    };
    AntiIntuitiveCoordSel.prototype._isAdjacent = function (e, t) {
        return Math.abs(e.gridPosX - t.gridPosX) + Math.abs(e.gridPosY - t.gridPosY) + Math.abs(e.layer - t.layer) <= 1;
    };
    return AntiIntuitiveCoordSel;
}());
exports.AntiIntuitiveCoordSel = AntiIntuitiveCoordSel;

cc._RF.pop();