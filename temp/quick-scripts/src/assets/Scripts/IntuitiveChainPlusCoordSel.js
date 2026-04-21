"use strict";
cc._RF.push(module, 'b3aa2GGkF5GkaWGtoyQuvie', 'IntuitiveChainPlusCoordSel');
// Scripts/IntuitiveChainPlusCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.IntuitiveChainPlusCoordSel = void 0;
var IntuitiveChainPlusCoordSel = /** @class */ (function () {
    function IntuitiveChainPlusCoordSel() {
    }
    IntuitiveChainPlusCoordSel.prototype.calculatePriority = function (e, t, o) {
        var n = o.tileToCoord(e), i = o.tileToCoord(t), r = o.lastSecondCoord, a = o.lastFreedCoords, l = null, s = null, c = false;
        if (r) {
            var u = this._coordManhattanDistance(n, r), p = this._coordManhattanDistance(i, r);
            if (u <= 3) {
                l = e;
                s = t;
                c = true;
            }
            else if (p <= 3) {
                l = t;
                s = e;
                c = true;
            }
        }
        if (!c && a.size > 0)
            if (a.has(n)) {
                l = e;
                s = t;
            }
            else if (a.has(i)) {
                l = t;
                s = e;
            }
        if (l && s) {
            var f = 1, d = this._tileManhattanDistance(l, s);
            d >= 6 && d <= 10 && (f *= 2);
            s.layer === o.maxSelectableZ && (f *= 1.5);
            o.countFreedBlocks(n, i) > 0 && (f *= 5);
            var h = c ? 200 : 100;
            return {
                priority: Math.floor(h * f),
                subScore: Math.random()
            };
        }
        var y = o.countFreedBlocks(n, i), m = 1;
        if (y >= 2) {
            m = 5;
        }
        else {
            y >= 1 && (m = 3);
        }
        return {
            priority: m,
            subScore: Math.random()
        };
    };
    IntuitiveChainPlusCoordSel.prototype._coordManhattanDistance = function (e, t) {
        var o = e.split("_").map(Number), n = t.split("_").map(Number);
        return o.length < 3 || n.length < 3 ? Infinity : Math.abs(o[0] - n[0]) + Math.abs(o[1] - n[1]) + Math.abs(o[2] - n[2]);
    };
    IntuitiveChainPlusCoordSel.prototype._tileManhattanDistance = function (e, t) {
        return Math.abs(e.layer - t.layer) + Math.abs(e.gridPosY - t.gridPosY) + Math.abs(e.gridPosX - t.gridPosX);
    };
    return IntuitiveChainPlusCoordSel;
}());
exports.IntuitiveChainPlusCoordSel = IntuitiveChainPlusCoordSel;

cc._RF.pop();