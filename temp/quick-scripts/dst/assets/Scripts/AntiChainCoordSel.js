
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/AntiChainCoordSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FudGlDaGFpbkNvb3JkU2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQWlFQSxDQUFDO0lBaEVDLDZDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDekQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUNwQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFDcEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUM1QixDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQzdCLENBQUMsR0FBRyxLQUFLLEVBQ1QsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNaLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNoQixJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDbkMsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDVCxNQUFNO2lCQUNQO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDWixJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDbkMsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDVCxNQUFNO2lCQUNQO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixRQUFRLEVBQUUsQ0FBQztZQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO1NBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBQ0YsUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtTQUN4QixDQUFDLENBQUMsQ0FBQztZQUNGLFFBQVEsRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7U0FDeEIsQ0FBQztJQUNKLENBQUM7SUFDSCx3QkFBQztBQUFELENBakVBLEFBaUVDLElBQUE7QUFqRVksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFudGlDaGFpbkNvb3JkU2VsIHtcbiAgY2FsY3VsYXRlUHJpb3JpdHkoZSwgdCwgbykge1xuICAgIHZhciByLFxuICAgICAgYSxcbiAgICAgIGwsXG4gICAgICBzLFxuICAgICAgYyA9IF9fcmVhZChlLmdyaWRQb3NZIDw9IHQuZ3JpZFBvc1kgPyBbZSwgdF0gOiBbdCwgZV0sIDIpLFxuICAgICAgdSA9IGNbMF0sXG4gICAgICBwID0gY1sxXSxcbiAgICAgIGYgPSBvLnRpbGVUb0Nvb3JkKHUpLFxuICAgICAgZCA9IG8udGlsZVRvQ29vcmQocCksXG4gICAgICBoID0gby5nZXRFeHBhbmRlZChcImxlZnRcIiwgZiksXG4gICAgICB5ID0gby5nZXRFeHBhbmRlZChcInJpZ2h0XCIsIGYpLFxuICAgICAgbSA9IGZhbHNlLFxuICAgICAgdiA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBnID0gX192YWx1ZXMoaCksIF8gPSBnLm5leHQoKTsgIV8uZG9uZTsgXyA9IGcubmV4dCgpKSB7XG4gICAgICAgIHZhciBUID0gXy52YWx1ZTtcbiAgICAgICAgaWYgKG8uZ2V0RXhwYW5kZWQoXCJwcmVkXCIsIFQpLmhhcyhkKSkge1xuICAgICAgICAgIG0gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgciA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIF8gJiYgIV8uZG9uZSAmJiAoYSA9IGcucmV0dXJuKSAmJiBhLmNhbGwoZyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIEMgPSBfX3ZhbHVlcyh5KSwgYiA9IEMubmV4dCgpOyAhYi5kb25lOyBiID0gQy5uZXh0KCkpIHtcbiAgICAgICAgVCA9IGIudmFsdWU7XG4gICAgICAgIGlmIChvLmdldEV4cGFuZGVkKFwicHJlZFwiLCBUKS5oYXMoZCkpIHtcbiAgICAgICAgICB2ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGwgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBiICYmICFiLmRvbmUgJiYgKHMgPSBDLnJldHVybikgJiYgcy5jYWxsKEMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGwpIHRocm93IGwuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBFID0gTWF0aC5hYnModS5ncmlkUG9zWSAtIHAuZ3JpZFBvc1kpO1xuICAgIHJldHVybiBtIHx8IHYgPyBFID49IDIgPyB7XG4gICAgICBwcmlvcml0eTogMixcbiAgICAgIHN1YlNjb3JlOiBNYXRoLnJhbmRvbSgpXG4gICAgfSA6IHtcbiAgICAgIHByaW9yaXR5OiAxLFxuICAgICAgc3ViU2NvcmU6IE1hdGgucmFuZG9tKClcbiAgICB9IDoge1xuICAgICAgcHJpb3JpdHk6IDMsXG4gICAgICBzdWJTY29yZTogTWF0aC5yYW5kb20oKVxuICAgIH07XG4gIH1cbn0iXX0=