"use strict";
cc._RF.push(module, 'c3f9dgpRJtCerQ6L0YVo7s9', 'AntiChainCoordSel');
// Scripts/AntiChainCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AntiChainCoordSel = void 0;
var AntiChainCoordSel = /** @class */ (function () {
    function AntiChainCoordSel() {
    }
    AntiChainCoordSel.prototype.calculatePriority = function (e, t, o) {
        var r, a, l, s, c = __read(e.gridPosY <= t.gridPosY ? [e, t] : [t, e], 2), u = c[0], p = c[1], f = o.tileToCoord(u), d = o.tileToCoord(p), h = o.getExpanded("left", f), y = o.getExpanded("right", f), m = false, v = false;
        try {
            for (var g = __values(h), _ = g.next(); !_.done; _ = g.next()) {
                var T = _.value;
                if (o.getExpanded("pred", T).has(d)) {
                    m = true;
                    break;
                }
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                _ && !_.done && (a = g.return) && a.call(g);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        try {
            for (var C = __values(y), b = C.next(); !b.done; b = C.next()) {
                T = b.value;
                if (o.getExpanded("pred", T).has(d)) {
                    v = true;
                    break;
                }
            }
        }
        catch (e) {
            l = {
                error: e
            };
        }
        finally {
            try {
                b && !b.done && (s = C.return) && s.call(C);
            }
            finally {
                if (l)
                    throw l.error;
            }
        }
        var E = Math.abs(u.gridPosY - p.gridPosY);
        return m || v ? E >= 2 ? {
            priority: 2,
            subScore: Math.random()
        } : {
            priority: 1,
            subScore: Math.random()
        } : {
            priority: 3,
            subScore: Math.random()
        };
    };
    return AntiChainCoordSel;
}());
exports.AntiChainCoordSel = AntiChainCoordSel;

cc._RF.pop();