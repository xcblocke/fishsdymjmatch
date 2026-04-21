
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ColorFarCharSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f4821fpTSpPU5/a0lhVmniL', 'ColorFarCharSel');
// Scripts/ColorFarCharSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorFarCharSel = void 0;
var ICharSelection_1 = require("./ICharSelection");
var ColorFarCharSel = /** @class */ (function () {
    function ColorFarCharSel() {
    }
    ColorFarCharSel.prototype.selectCharacterPair = function (e, t, o, i) {
        for (var l, s, c, u, p = i.recentCharsHistory.slice(-10), f = new Set(p), d = [], h = 0; h < o.length; h++)
            f.has(o[h][0].resId) || d.push(h);
        if (d.length > 0) {
            return d[Math.floor(Math.random() * d.length)];
        }
        var y = new Map();
        try {
            for (var m = __values(p), v = m.next(); !v.done; v = m.next()) {
                var g = v.value;
                y.set(g, (y.get(g) || 0) + 1);
            }
        }
        catch (e) {
            l = {
                error: e
            };
        }
        finally {
            try {
                v && !v.done && (s = m.return) && s.call(m);
            }
            finally {
                if (l)
                    throw l.error;
            }
        }
        var _ = Math.max.apply(Math, __spreadArrays(y.values(), [0])), T = [];
        try {
            for (var C = __values(o), b = C.next(); !b.done; b = C.next()) {
                var E = b.value, S = y.get(E[0].resId) || 0;
                T.push(_ - S + 1);
            }
        }
        catch (e) {
            c = {
                error: e
            };
        }
        finally {
            try {
                b && !b.done && (u = C.return) && u.call(C);
            }
            finally {
                if (c)
                    throw c.error;
            }
        }
        return ICharSelection_1.weightedRandomSelect(T);
    };
    return ColorFarCharSel;
}());
exports.ColorFarCharSel = ColorFarCharSel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NvbG9yRmFyQ2hhclNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUF3RDtBQUN4RDtJQUFBO0lBNENBLENBQUM7SUEzQ0MsNkNBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDNUIsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5SSxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLGlCQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ25ELENBQUMsR0FBRyxFQUFFLENBQUM7UUFDVCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDbkI7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU8scUNBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtBQTVDWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdlaWdodGVkUmFuZG9tU2VsZWN0IH0gZnJvbSAnLi9JQ2hhclNlbGVjdGlvbic7XG5leHBvcnQgY2xhc3MgQ29sb3JGYXJDaGFyU2VsIHtcbiAgc2VsZWN0Q2hhcmFjdGVyUGFpcihlLCB0LCBvLCBpKSB7XG4gICAgZm9yICh2YXIgbCwgcywgYywgdSwgcCA9IGkucmVjZW50Q2hhcnNIaXN0b3J5LnNsaWNlKC0xMCksIGYgPSBuZXcgU2V0KHApLCBkID0gW10sIGggPSAwOyBoIDwgby5sZW5ndGg7IGgrKykgZi5oYXMob1toXVswXS5yZXNJZCkgfHwgZC5wdXNoKGgpO1xuICAgIGlmIChkLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGQubGVuZ3RoKV07XG4gICAgfVxuICAgIHZhciB5ID0gbmV3IE1hcCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBtID0gX192YWx1ZXMocCksIHYgPSBtLm5leHQoKTsgIXYuZG9uZTsgdiA9IG0ubmV4dCgpKSB7XG4gICAgICAgIHZhciBnID0gdi52YWx1ZTtcbiAgICAgICAgeS5zZXQoZywgKHkuZ2V0KGcpIHx8IDApICsgMSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHYgJiYgIXYuZG9uZSAmJiAocyA9IG0ucmV0dXJuKSAmJiBzLmNhbGwobSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobCkgdGhyb3cgbC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIF8gPSBNYXRoLm1heC5hcHBseShNYXRoLCBbLi4ueS52YWx1ZXMoKSwgLi4uWzBdXSksXG4gICAgICBUID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIEMgPSBfX3ZhbHVlcyhvKSwgYiA9IEMubmV4dCgpOyAhYi5kb25lOyBiID0gQy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIEUgPSBiLnZhbHVlLFxuICAgICAgICAgIFMgPSB5LmdldChFWzBdLnJlc0lkKSB8fCAwO1xuICAgICAgICBULnB1c2goXyAtIFMgKyAxKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYiAmJiAhYi5kb25lICYmICh1ID0gQy5yZXR1cm4pICYmIHUuY2FsbChDKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChjKSB0aHJvdyBjLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gd2VpZ2h0ZWRSYW5kb21TZWxlY3QoVCk7XG4gIH1cbn0iXX0=