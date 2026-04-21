"use strict";
cc._RF.push(module, '9839aBTXWhFjL5N3uTAkUW/', 'PredCoordCharSel');
// Scripts/PredCoordCharSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PredCoordCharSel = void 0;
var PredCoordCharSel = /** @class */ (function () {
    function PredCoordCharSel() {
    }
    PredCoordCharSel.prototype.selectCharacterPair = function (e, t, o, i) {
        var a, l, s, c, u = i.tileToCoord(e), p = i.tileToCoord(t), f = i.getExpanded("pred", u), d = i.getExpanded("pred", p), h = new Set(), y = new Set();
        try {
            for (var m = __values(f), v = m.next(); !v.done; v = m.next()) {
                var g = v.value;
                void 0 !== (S = i.assignedChars.get(g)) && h.add(S);
            }
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                v && !v.done && (l = m.return) && l.call(m);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        try {
            for (var _ = __values(d), T = _.next(); !T.done; T = _.next()) {
                g = T.value;
                void 0 !== (S = i.assignedChars.get(g)) && y.add(S);
            }
        }
        catch (e) {
            s = {
                error: e
            };
        }
        finally {
            try {
                T && !T.done && (c = _.return) && c.call(_);
            }
            finally {
                if (s)
                    throw s.error;
            }
        }
        for (var C = [], b = [], E = 0; E < o.length; E++) {
            var S = o[E][0].resId, I = h.has(S), w = y.has(S);
            if (I && w) {
                C.push(E);
            }
            else {
                I || w || b.push(E);
            }
        }
        var B = __spreadArrays(C, b);
        if (B.length > 0) {
            var x = new Set(i.assignedChars.values()), M = B.filter(function (e) {
                return x.has(o[e][0].resId);
            }), O = M.length > 0 ? M : B, D = O[Math.floor(Math.random() * O.length)];
            o[D], C.includes(D);
            return D;
        }
        var P = Math.floor(Math.random() * o.length);
        o[P];
        return P;
    };
    return PredCoordCharSel;
}());
exports.PredCoordCharSel = PredCoordCharSel;

cc._RF.pop();