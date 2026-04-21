
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/SymmetricShuffleCoordSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1N5bW1ldHJpY1NodWZmbGVDb29yZFNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUE0Q0EsQ0FBQztJQTNDUSwyQ0FBa0IsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFBRSxJQUFJO2dCQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUM3RCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDZixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7NEJBQ3hDLElBQUksQ0FBQyxrQkFBTyxDQUFDLENBQUMsQ0FBQzs0QkFDZix3QkFBd0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dDQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzZCQUNiO3lCQUNGO2lCQUNGO2FBQ0Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixDQUFDLEdBQUc7b0JBQ0YsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQzthQUNIO29CQUFTO2dCQUNSLElBQUk7b0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7d0JBQVM7b0JBQ1IsSUFBSSxDQUFDO3dCQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDdEI7YUFDRjtJQUNILENBQUM7SUFDTSxzQ0FBYSxHQUFwQixVQUFxQixDQUFDO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7SUFDRCxvREFBaUIsR0FBakI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtTQUN4QixDQUFDO0lBQ0osQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtBQTVDWSw0REFBd0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3ltbWV0cmljU2h1ZmZsZUNvb3JkU2VsIHtcbiAgc3RhdGljIHBvc3RQcm9jZXNzU2h1ZmZsZSh0LCBvKSB7XG4gICAgdmFyIGEsIGw7XG4gICAgaWYgKCEodC5sZW5ndGggPCAyKSkgdHJ5IHtcbiAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhvKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBfX3JlYWQoYy52YWx1ZSwgMiksXG4gICAgICAgICAgcCA9ICh1WzBdLCB1WzFdKSxcbiAgICAgICAgICBmID0gcC5sZW5ndGg7XG4gICAgICAgIGlmICghKGYgPCAyKSkgZm9yICh2YXIgZCA9IDA7IGQgPCBmOyBkKyspIHtcbiAgICAgICAgICB2YXIgaCA9IFsuLi5wXTtcbiAgICAgICAgICBTeW1tZXRyaWNTaHVmZmxlQ29vcmRTZWwuX3NodWZmbGVBcnJheShoKTtcbiAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IGgubGVuZ3RoIC0gMTsgeSArPSAyKSB7XG4gICAgICAgICAgICB2YXIgbSA9IGhbeV0sXG4gICAgICAgICAgICAgIHYgPSBoW3kgKyAxXSxcbiAgICAgICAgICAgICAgZyA9IHRbbV1bMV07XG4gICAgICAgICAgICB0W21dWzFdID0gdFt2XVsxXTtcbiAgICAgICAgICAgIHRbdl1bMV0gPSBnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGEgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBjICYmICFjLmRvbmUgJiYgKGwgPSBzLnJldHVybikgJiYgbC5jYWxsKHMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGEpIHRocm93IGEuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXRpYyBfc2h1ZmZsZUFycmF5KGUpIHtcbiAgICBmb3IgKHZhciB0LCBvID0gZS5sZW5ndGggLSAxOyBvID4gMDsgby0tKSB7XG4gICAgICB2YXIgbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChvICsgMSkpO1xuICAgICAgdCA9IF9fcmVhZChbZVtuXSwgZVtvXV0sIDIpLCBlW29dID0gdFswXSwgZVtuXSA9IHRbMV07XG4gICAgfVxuICB9XG4gIGNhbGN1bGF0ZVByaW9yaXR5KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwcmlvcml0eTogMCxcbiAgICAgIHN1YlNjb3JlOiBNYXRoLnJhbmRvbSgpXG4gICAgfTtcbiAgfVxufSJdfQ==