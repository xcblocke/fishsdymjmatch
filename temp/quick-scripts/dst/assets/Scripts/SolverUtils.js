
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/SolverUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36d4epvDFREYqI+3DfAeaKp', 'SolverUtils');
// Scripts/SolverUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SolverUtils = void 0;
var SolverUtils = /** @class */ (function () {
    function SolverUtils() {
    }
    SolverUtils.parsePairings = function (e, t, o) {
        var i, r, a = new Map();
        t.forEach(function (e) {
            e.isValid && a.set(e.layer + "_" + e.gridPosY + "_" + e.gridPosX, e);
        });
        var l = [], s = [], c = function c(e) {
            var t = e.coord.z + "_" + e.coord.y + "_" + e.coord.x, n = a.get(t);
            if (!n)
                return "continue";
            if (o && o(n))
                return "continue";
            var i = n.cardId, r = s.findIndex(function (e) {
                return e.cardId === i;
            });
            if (r >= 0) {
                var c = s.splice(r, 1)[0];
                l.push({
                    paving: {
                        pos: c.pos,
                        tile: c.tile,
                        coord: c.coord
                    },
                    elim: {
                        pos: e.index,
                        tile: n,
                        coord: t
                    }
                });
            }
            else
                s.push({
                    pos: e.index,
                    tile: n,
                    coord: t,
                    cardId: i
                });
        };
        try {
            for (var u = __values(e), p = u.next(); !p.done; p = u.next())
                c(p.value);
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                p && !p.done && (r = u.return) && r.call(u);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        var f = s.map(function (e) {
            return {
                pos: e.pos,
                tile: e.tile,
                coord: e.coord
            };
        });
        return {
            pairs: l,
            unpaired: f
        };
    };
    SolverUtils.simulateOccupancy = function (e, t, o) {
        for (var n = [], i = [], r = function r(r) {
            var a = r + 1, l = e[r].coord, s = l.x + "-" + l.y + "-" + l.z, c = t.getTileObject(s);
            if (!c || !c.isValid)
                return "continue";
            n.push({
                tileId: s,
                cardId: c.cardId
            });
            var u = c.cardId;
            if (n.filter(function (e) {
                return e.cardId === u;
            }).length >= 2)
                for (var p = 0, f = n.length - 1; f >= 0 && p < 2; f--)
                    if (n[f].cardId === u) {
                        n.splice(f, 1);
                        p++;
                    }
            i.push({
                step: a,
                occupancyRate: n.length / o,
                tileId: s,
                cardId: u
            });
        }, a = 0; a < e.length; a++)
            r(a);
        return i;
    };
    return SolverUtils;
}());
exports.SolverUtils = SolverUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NvbHZlclV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQTRGQSxDQUFDO0lBM0ZRLHlCQUFhLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDbkIsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQ1IsQ0FBQyxHQUFHLEVBQUUsRUFDTixDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQ25ELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLENBQUM7Z0JBQUUsT0FBTyxVQUFVLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPLFVBQVUsQ0FBQztZQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUNkLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztnQkFDekIsT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLENB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SSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNqQixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUN0QixPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDO2dCQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7d0JBQzdGLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNmLENBQUMsRUFBRSxDQUFDO3FCQUNMO1lBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDTCxJQUFJLEVBQUUsQ0FBQztnQkFDUCxhQUFhLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUMzQixNQUFNLEVBQUUsQ0FBQztnQkFDVCxNQUFNLEVBQUUsQ0FBQzthQUNWLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDSCxrQkFBQztBQUFELENBNUZBLEFBNEZDLElBQUE7QUE1Rlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU29sdmVyVXRpbHMge1xuICBzdGF0aWMgcGFyc2VQYWlyaW5ncyhlLCB0LCBvKSB7XG4gICAgdmFyIGksXG4gICAgICByLFxuICAgICAgYSA9IG5ldyBNYXAoKTtcbiAgICB0LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuaXNWYWxpZCAmJiBhLnNldChlLmxheWVyICsgXCJfXCIgKyBlLmdyaWRQb3NZICsgXCJfXCIgKyBlLmdyaWRQb3NYLCBlKTtcbiAgICB9KTtcbiAgICB2YXIgbCA9IFtdLFxuICAgICAgcyA9IFtdLFxuICAgICAgYyA9IGZ1bmN0aW9uIGMoZSkge1xuICAgICAgICB2YXIgdCA9IGUuY29vcmQueiArIFwiX1wiICsgZS5jb29yZC55ICsgXCJfXCIgKyBlLmNvb3JkLngsXG4gICAgICAgICAgbiA9IGEuZ2V0KHQpO1xuICAgICAgICBpZiAoIW4pIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgIGlmIChvICYmIG8obikpIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgIHZhciBpID0gbi5jYXJkSWQsXG4gICAgICAgICAgciA9IHMuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5jYXJkSWQgPT09IGk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIGlmIChyID49IDApIHtcbiAgICAgICAgICB2YXIgYyA9IHMuc3BsaWNlKHIsIDEpWzBdO1xuICAgICAgICAgIGwucHVzaCh7XG4gICAgICAgICAgICBwYXZpbmc6IHtcbiAgICAgICAgICAgICAgcG9zOiBjLnBvcyxcbiAgICAgICAgICAgICAgdGlsZTogYy50aWxlLFxuICAgICAgICAgICAgICBjb29yZDogYy5jb29yZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsaW06IHtcbiAgICAgICAgICAgICAgcG9zOiBlLmluZGV4LFxuICAgICAgICAgICAgICB0aWxlOiBuLFxuICAgICAgICAgICAgICBjb29yZDogdFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Ugcy5wdXNoKHtcbiAgICAgICAgICBwb3M6IGUuaW5kZXgsXG4gICAgICAgICAgdGlsZTogbixcbiAgICAgICAgICBjb29yZDogdCxcbiAgICAgICAgICBjYXJkSWQ6IGlcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciB1ID0gX192YWx1ZXMoZSksIHAgPSB1Lm5leHQoKTsgIXAuZG9uZTsgcCA9IHUubmV4dCgpKSBjKHAudmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGkgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBwICYmICFwLmRvbmUgJiYgKHIgPSB1LnJldHVybikgJiYgci5jYWxsKHUpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBmID0gcy5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvczogZS5wb3MsXG4gICAgICAgIHRpbGU6IGUudGlsZSxcbiAgICAgICAgY29vcmQ6IGUuY29vcmRcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhaXJzOiBsLFxuICAgICAgdW5wYWlyZWQ6IGZcbiAgICB9O1xuICB9XG4gIHN0YXRpYyBzaW11bGF0ZU9jY3VwYW5jeShlLCB0LCBvKSB7XG4gICAgZm9yICh2YXIgbiA9IFtdLCBpID0gW10sIHIgPSBmdW5jdGlvbiByKHIpIHtcbiAgICAgICAgdmFyIGEgPSByICsgMSxcbiAgICAgICAgICBsID0gZVtyXS5jb29yZCxcbiAgICAgICAgICBzID0gbC54ICsgXCItXCIgKyBsLnkgKyBcIi1cIiArIGwueixcbiAgICAgICAgICBjID0gdC5nZXRUaWxlT2JqZWN0KHMpO1xuICAgICAgICBpZiAoIWMgfHwgIWMuaXNWYWxpZCkgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgbi5wdXNoKHtcbiAgICAgICAgICB0aWxlSWQ6IHMsXG4gICAgICAgICAgY2FyZElkOiBjLmNhcmRJZFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHUgPSBjLmNhcmRJZDtcbiAgICAgICAgaWYgKG4uZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUuY2FyZElkID09PSB1O1xuICAgICAgICB9KS5sZW5ndGggPj0gMikgZm9yICh2YXIgcCA9IDAsIGYgPSBuLmxlbmd0aCAtIDE7IGYgPj0gMCAmJiBwIDwgMjsgZi0tKSBpZiAobltmXS5jYXJkSWQgPT09IHUpIHtcbiAgICAgICAgICBuLnNwbGljZShmLCAxKTtcbiAgICAgICAgICBwKys7XG4gICAgICAgIH1cbiAgICAgICAgaS5wdXNoKHtcbiAgICAgICAgICBzdGVwOiBhLFxuICAgICAgICAgIG9jY3VwYW5jeVJhdGU6IG4ubGVuZ3RoIC8gbyxcbiAgICAgICAgICB0aWxlSWQ6IHMsXG4gICAgICAgICAgY2FyZElkOiB1XG4gICAgICAgIH0pO1xuICAgICAgfSwgYSA9IDA7IGEgPCBlLmxlbmd0aDsgYSsrKSByKGEpO1xuICAgIHJldHVybiBpO1xuICB9XG59Il19