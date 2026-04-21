
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PredTriggerCharSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87dceWUfklNUpoMMkw39+Vr', 'PredTriggerCharSel');
// Scripts/PredTriggerCharSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PredTriggerCharSel = void 0;
var PredTriggerCharSel = /** @class */ (function () {
    function PredTriggerCharSel() {
    }
    PredTriggerCharSel.prototype.selectCharacterPair = function (e, t, o, i) {
        var a, l, s, c, u = i.tileToCoord(e), p = i.tileToCoord(t), f = i.getExpanded("pred", u), d = i.getExpanded("pred", p), h = new Set(), y = new Set();
        try {
            for (var m = __values(f), v = m.next(); !v.done; v = m.next()) {
                var g = v.value;
                void 0 !== (w = i.assignedChars.get(g)) && h.add(w);
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
                void 0 !== (w = i.assignedChars.get(g)) && y.add(w);
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
        var C = o;
        if (i.mCharActive && null !== i.mCharResId) {
            var b = o.filter(function (e) {
                return e[0].resId !== i.mCharResId;
            });
            b.length > 0 && (C = b);
        }
        for (var E = [], S = [], I = 0; I < C.length; I++) {
            var w = C[I][0].resId, B = h.has(w), x = y.has(w);
            if (B && x) {
                E.push(I);
            }
            else {
                B || x || S.push(I);
            }
        }
        var M = __spreadArrays(E, S);
        0 === M.length && (M = C.map(function (e, t) {
            return t;
        }));
        if (M.length > 0) {
            var O = new Set(i.assignedChars.values()), D = M.filter(function (e) {
                return O.has(C[e][0].resId);
            }), P = D.length > 0 ? D : M, A = P[Math.floor(Math.random() * P.length)], R = C[A][0].resId, N = o.findIndex(function (e) {
                return e[0].resId === R;
            });
            -1 === N && (N = A);
            return N;
        }
        return Math.floor(Math.random() * o.length);
    };
    return PredTriggerCharSel;
}());
exports.PredTriggerCharSel = PredTriggerCharSel;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1ByZWRUcmlnZ2VyQ2hhclNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFpRkEsQ0FBQztJQWhGQyxnREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFDcEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQ3BCLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFDNUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUM1QixDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFDYixDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JEO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FD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LENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQ3ZDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDdEIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFDRixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDakIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO2dCQUN6QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQWpGQSxBQWlGQyxJQUFBO0FBakZZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQcmVkVHJpZ2dlckNoYXJTZWwge1xuICBzZWxlY3RDaGFyYWN0ZXJQYWlyKGUsIHQsIG8sIGkpIHtcbiAgICB2YXIgYSxcbiAgICAgIGwsXG4gICAgICBzLFxuICAgICAgYyxcbiAgICAgIHUgPSBpLnRpbGVUb0Nvb3JkKGUpLFxuICAgICAgcCA9IGkudGlsZVRvQ29vcmQodCksXG4gICAgICBmID0gaS5nZXRFeHBhbmRlZChcInByZWRcIiwgdSksXG4gICAgICBkID0gaS5nZXRFeHBhbmRlZChcInByZWRcIiwgcCksXG4gICAgICBoID0gbmV3IFNldCgpLFxuICAgICAgeSA9IG5ldyBTZXQoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbSA9IF9fdmFsdWVzKGYpLCB2ID0gbS5uZXh0KCk7ICF2LmRvbmU7IHYgPSBtLm5leHQoKSkge1xuICAgICAgICB2YXIgZyA9IHYudmFsdWU7XG4gICAgICAgIHZvaWQgMCAhPT0gKHcgPSBpLmFzc2lnbmVkQ2hhcnMuZ2V0KGcpKSAmJiBoLmFkZCh3KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBhID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdiAmJiAhdi5kb25lICYmIChsID0gbS5yZXR1cm4pICYmIGwuY2FsbChtKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChhKSB0aHJvdyBhLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgXyA9IF9fdmFsdWVzKGQpLCBUID0gXy5uZXh0KCk7ICFULmRvbmU7IFQgPSBfLm5leHQoKSkge1xuICAgICAgICBnID0gVC52YWx1ZTtcbiAgICAgICAgdm9pZCAwICE9PSAodyA9IGkuYXNzaWduZWRDaGFycy5nZXQoZykpICYmIHkuYWRkKHcpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHMgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBUICYmICFULmRvbmUgJiYgKGMgPSBfLnJldHVybikgJiYgYy5jYWxsKF8pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHMpIHRocm93IHMuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBDID0gbztcbiAgICBpZiAoaS5tQ2hhckFjdGl2ZSAmJiBudWxsICE9PSBpLm1DaGFyUmVzSWQpIHtcbiAgICAgIHZhciBiID0gby5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGVbMF0ucmVzSWQgIT09IGkubUNoYXJSZXNJZDtcbiAgICAgIH0pO1xuICAgICAgYi5sZW5ndGggPiAwICYmIChDID0gYik7XG4gICAgfVxuICAgIGZvciAodmFyIEUgPSBbXSwgUyA9IFtdLCBJID0gMDsgSSA8IEMubGVuZ3RoOyBJKyspIHtcbiAgICAgIHZhciB3ID0gQ1tJXVswXS5yZXNJZCxcbiAgICAgICAgQiA9IGguaGFzKHcpLFxuICAgICAgICB4ID0geS5oYXModyk7XG4gICAgICBpZiAoQiAmJiB4KSB7XG4gICAgICAgIEUucHVzaChJKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEIgfHwgeCB8fCBTLnB1c2goSSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBNID0gWy4uLkUsIC4uLlNdO1xuICAgIDAgPT09IE0ubGVuZ3RoICYmIChNID0gQy5tYXAoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiB0O1xuICAgIH0pKTtcbiAgICBpZiAoTS5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgTyA9IG5ldyBTZXQoaS5hc3NpZ25lZENoYXJzLnZhbHVlcygpKSxcbiAgICAgICAgRCA9IE0uZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIE8uaGFzKENbZV1bMF0ucmVzSWQpO1xuICAgICAgICB9KSxcbiAgICAgICAgUCA9IEQubGVuZ3RoID4gMCA/IEQgOiBNLFxuICAgICAgICBBID0gUFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBQLmxlbmd0aCldLFxuICAgICAgICBSID0gQ1tBXVswXS5yZXNJZCxcbiAgICAgICAgTiA9IG8uZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGVbMF0ucmVzSWQgPT09IFI7XG4gICAgICAgIH0pO1xuICAgICAgLTEgPT09IE4gJiYgKE4gPSBBKTtcbiAgICAgIHJldHVybiBOO1xuICAgIH1cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogby5sZW5ndGgpO1xuICB9XG59Il19