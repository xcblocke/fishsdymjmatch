"use strict";
cc._RF.push(module, '32104V3x1xMNLPNS60SkFJH', 'SymmetricShuffleCoordSel');
// Scripts/SymmetricShuffleCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SymmetricShuffleCoordSel = void 0;
var SymmetricShuffleCoordSel = /** @class */ (function () {
    function SymmetricShuffleCoordSel() {
    }
    SymmetricShuffleCoordSel.postProcessShuffle = function (t, o) {
        var a, l;
        if (!(t.length < 2))
            try {
                for (var s = __values(o), c = s.next(); !c.done; c = s.next()) {
                    var u = __read(c.value, 2), p = (u[0], u[1]), f = p.length;
                    if (!(f < 2))
                        for (var d = 0; d < f; d++) {
                            var h = __spreadArrays(p);
                            SymmetricShuffleCoordSel._shuffleArray(h);
                            for (var y = 0; y < h.length - 1; y += 2) {
                                var m = h[y], v = h[y + 1], g = t[m][1];
                                t[m][1] = t[v][1];
                                t[v][1] = g;
                            }
                        }
                }
            }
            catch (e) {
                a = {
                    error: e
                };
            }
            finally {
                try {
                    c && !c.done && (l = s.return) && l.call(s);
                }
                finally {
                    if (a)
                        throw a.error;
                }
            }
    };
    SymmetricShuffleCoordSel._shuffleArray = function (e) {
        for (var t, o = e.length - 1; o > 0; o--) {
            var n = Math.floor(Math.random() * (o + 1));
            t = __read([e[n], e[o]], 2), e[o] = t[0], e[n] = t[1];
        }
    };
    SymmetricShuffleCoordSel.prototype.calculatePriority = function () {
        return {
            priority: 0,
            subScore: Math.random()
        };
    };
    return SymmetricShuffleCoordSel;
}());
exports.SymmetricShuffleCoordSel = SymmetricShuffleCoordSel;

cc._RF.pop();