
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tileTypes/ColorCardType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03fd5rm6vNGDaELbqebexyV', 'ColorCardType');
// Scripts/tileTypes/ColorCardType.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorCardType = void 0;
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var ColorCardType = /** @class */ (function () {
    function ColorCardType() {
    }
    ColorCardType.modify = function (e) {
        var t, o, l, s, c, u, p, f, d, h, y = e.getTileMapObject(), m = y.aliveTiles().filter(function (e) {
            return !!e.checkIsNormal() && e.cardId != GameTypeEnums_1.MjCardId.emFlowCardId && e.cardId != GameTypeEnums_1.MjCardId.emSeasonCardId;
        }), v = new Map();
        try {
            for (var g = __values(m), _ = g.next(); !_.done; _ = g.next()) {
                var T = (V = _.value).cardId;
                v.has(T) || v.set(T, []);
                v.get(T).push(V);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                _ && !_.done && (o = g.return) && o.call(g);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var C = Math.max(1, Math.floor(v.size / 6)), b = [];
        try {
            for (var E = __values(v), S = E.next(); !S.done; S = E.next()) {
                var I = __read(S.value, 2), w = (T = I[0], I[1]), B = 0;
                try {
                    for (var x = (c = void 0, __values(w)), M = x.next(); !M.done; M = x.next())
                        B += (V = M.value).layer;
                }
                catch (e) {
                    c = {
                        error: e
                    };
                }
                finally {
                    try {
                        M && !M.done && (u = x.return) && u.call(x);
                    }
                    finally {
                        if (c)
                            throw c.error;
                    }
                }
                var O = B / w.length;
                b.push({
                    cardId: T,
                    average: O
                });
            }
        }
        catch (e) {
            l = {
                error: e
            };
        }
        finally {
            try {
                S && !S.done && (s = E.return) && s.call(E);
            }
            finally {
                if (l)
                    throw l.error;
            }
        }
        b.sort(function (e, t) {
            return t.average - e.average;
        });
        var D = [];
        if (b.length >= 2) {
            D.push(b[0].cardId);
            D.push(b[1].cardId);
        }
        else
            1 === b.length && D.push(b[0].cardId);
        var P = D.length;
        if (P < C && b.length > 2) {
            var A = Math.min(C - P, b.length - 2), R = b.slice(2), N = e.randomGenerator.randomElements(R, A);
            try {
                for (var j = __values(N), k = j.next(); !k.done; k = j.next()) {
                    var L = k.value;
                    D.push(L.cardId);
                }
            }
            catch (e) {
                p = {
                    error: e
                };
            }
            finally {
                try {
                    k && !k.done && (f = j.return) && f.call(j);
                }
                finally {
                    if (p)
                        throw p.error;
                }
            }
        }
        try {
            for (var G = __values(m), F = G.next(); !F.done; F = G.next()) {
                var V = F.value;
                this.isColoreTile(D, V) && y.setTileType(V.id, TileTypeEnum_1.ETileType.ColorCard);
            }
        }
        catch (e) {
            d = {
                error: e
            };
        }
        finally {
            try {
                F && !F.done && (h = G.return) && h.call(G);
            }
            finally {
                if (d)
                    throw d.error;
            }
        }
    };
    ColorCardType.isColoreTile = function (e, t) {
        var o, i;
        try {
            for (var r = __values(e), a = r.next(); !a.done; a = r.next()) {
                var l = a.value;
                if (t.cardId === l)
                    return true;
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (i = r.return) && i.call(r);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return false;
    };
    return ColorCardType;
}());
exports.ColorCardType = ColorCardType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3RpbGVUeXBlcy9Db2xvckNhcmRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQW9FO0FBQ3BFLG1FQUErRDtBQUMvRDtJQUFBO0lBMElBLENBQUM7SUF6SVEsb0JBQU0sR0FBYixVQUFjLENBQUM7UUFDYixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLEVBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNuQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSx3QkFBUSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLHdCQUFRLENBQUMsY0FBYyxDQUFDO1FBQ3pHLENBQUMsQ0FBQyxFQUNGLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUM3QixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QixDQUFDLENBQUMsR0FB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S0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7SUFDSCxDQUFDO0lBQ00sMEJBQVksR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO29CQUFFLE9BQU8sSUFBSSxDQUFDO2FBQ2pDO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSCxvQkFBQztBQUFELENBMUlBLEFBMElDLElBQUE7QUExSVksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakNhcmRJZCB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5leHBvcnQgY2xhc3MgQ29sb3JDYXJkVHlwZSB7XG4gIHN0YXRpYyBtb2RpZnkoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIGwsXG4gICAgICBzLFxuICAgICAgYyxcbiAgICAgIHUsXG4gICAgICBwLFxuICAgICAgZixcbiAgICAgIGQsXG4gICAgICBoLFxuICAgICAgeSA9IGUuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgbSA9IHkuYWxpdmVUaWxlcygpLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gISFlLmNoZWNrSXNOb3JtYWwoKSAmJiBlLmNhcmRJZCAhPSBNakNhcmRJZC5lbUZsb3dDYXJkSWQgJiYgZS5jYXJkSWQgIT0gTWpDYXJkSWQuZW1TZWFzb25DYXJkSWQ7XG4gICAgICB9KSxcbiAgICAgIHYgPSBuZXcgTWFwKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGcgPSBfX3ZhbHVlcyhtKSwgXyA9IGcubmV4dCgpOyAhXy5kb25lOyBfID0gZy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIFQgPSAoViA9IF8udmFsdWUpLmNhcmRJZDtcbiAgICAgICAgdi5oYXMoVCkgfHwgdi5zZXQoVCwgW10pO1xuICAgICAgICB2LmdldChUKS5wdXNoKFYpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBfICYmICFfLmRvbmUgJiYgKG8gPSBnLnJldHVybikgJiYgby5jYWxsKGcpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBDID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih2LnNpemUgLyA2KSksXG4gICAgICBiID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIEUgPSBfX3ZhbHVlcyh2KSwgUyA9IEUubmV4dCgpOyAhUy5kb25lOyBTID0gRS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIEkgPSBfX3JlYWQoUy52YWx1ZSwgMiksXG4gICAgICAgICAgdyA9IChUID0gSVswXSwgSVsxXSksXG4gICAgICAgICAgQiA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgeCA9IChjID0gdm9pZCAwLCBfX3ZhbHVlcyh3KSksIE0gPSB4Lm5leHQoKTsgIU0uZG9uZTsgTSA9IHgubmV4dCgpKSBCICs9IChWID0gTS52YWx1ZSkubGF5ZXI7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBNICYmICFNLmRvbmUgJiYgKHUgPSB4LnJldHVybikgJiYgdS5jYWxsKHgpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoYykgdGhyb3cgYy5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIE8gPSBCIC8gdy5sZW5ndGg7XG4gICAgICAgIGIucHVzaCh7XG4gICAgICAgICAgY2FyZElkOiBULFxuICAgICAgICAgIGF2ZXJhZ2U6IE9cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIFMgJiYgIVMuZG9uZSAmJiAocyA9IEUucmV0dXJuKSAmJiBzLmNhbGwoRSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobCkgdGhyb3cgbC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgYi5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gdC5hdmVyYWdlIC0gZS5hdmVyYWdlO1xuICAgIH0pO1xuICAgIHZhciBEID0gW107XG4gICAgaWYgKGIubGVuZ3RoID49IDIpIHtcbiAgICAgIEQucHVzaChiWzBdLmNhcmRJZCk7XG4gICAgICBELnB1c2goYlsxXS5jYXJkSWQpO1xuICAgIH0gZWxzZSAxID09PSBiLmxlbmd0aCAmJiBELnB1c2goYlswXS5jYXJkSWQpO1xuICAgIHZhciBQID0gRC5sZW5ndGg7XG4gICAgaWYgKFAgPCBDICYmIGIubGVuZ3RoID4gMikge1xuICAgICAgdmFyIEEgPSBNYXRoLm1pbihDIC0gUCwgYi5sZW5ndGggLSAyKSxcbiAgICAgICAgUiA9IGIuc2xpY2UoMiksXG4gICAgICAgIE4gPSBlLnJhbmRvbUdlbmVyYXRvci5yYW5kb21FbGVtZW50cyhSLCBBKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGogPSBfX3ZhbHVlcyhOKSwgayA9IGoubmV4dCgpOyAhay5kb25lOyBrID0gai5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgTCA9IGsudmFsdWU7XG4gICAgICAgICAgRC5wdXNoKEwuY2FyZElkKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBwID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGsgJiYgIWsuZG9uZSAmJiAoZiA9IGoucmV0dXJuKSAmJiBmLmNhbGwoaik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHApIHRocm93IHAuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIEcgPSBfX3ZhbHVlcyhtKSwgRiA9IEcubmV4dCgpOyAhRi5kb25lOyBGID0gRy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIFYgPSBGLnZhbHVlO1xuICAgICAgICB0aGlzLmlzQ29sb3JlVGlsZShELCBWKSAmJiB5LnNldFRpbGVUeXBlKFYuaWQsIEVUaWxlVHlwZS5Db2xvckNhcmQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBGICYmICFGLmRvbmUgJiYgKGggPSBHLnJldHVybikgJiYgaC5jYWxsKEcpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGQpIHRocm93IGQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXRpYyBpc0NvbG9yZVRpbGUoZSwgdCkge1xuICAgIHZhciBvLCBpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciByID0gX192YWx1ZXMoZSksIGEgPSByLm5leHQoKTsgIWEuZG9uZTsgYSA9IHIubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gYS52YWx1ZTtcbiAgICAgICAgaWYgKHQuY2FyZElkID09PSBsKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYSAmJiAhYS5kb25lICYmIChpID0gci5yZXR1cm4pICYmIGkuY2FsbChyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iXX0=