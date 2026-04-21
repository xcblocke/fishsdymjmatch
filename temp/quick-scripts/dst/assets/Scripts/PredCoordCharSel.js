
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PredCoordCharSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1ByZWRDb29yZENoYXJTZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBcUVBLENBQUM7SUFwRUMsOENBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQ3BCLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUNwQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQzVCLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFDNUIsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLEVBQ2IsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyRDtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7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Q0FBQyxDQUFDO1NBQ1Y7UUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQXJFQSxBQXFFQyxJQUFBO0FBckVZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQcmVkQ29vcmRDaGFyU2VsIHtcbiAgc2VsZWN0Q2hhcmFjdGVyUGFpcihlLCB0LCBvLCBpKSB7XG4gICAgdmFyIGEsXG4gICAgICBsLFxuICAgICAgcyxcbiAgICAgIGMsXG4gICAgICB1ID0gaS50aWxlVG9Db29yZChlKSxcbiAgICAgIHAgPSBpLnRpbGVUb0Nvb3JkKHQpLFxuICAgICAgZiA9IGkuZ2V0RXhwYW5kZWQoXCJwcmVkXCIsIHUpLFxuICAgICAgZCA9IGkuZ2V0RXhwYW5kZWQoXCJwcmVkXCIsIHApLFxuICAgICAgaCA9IG5ldyBTZXQoKSxcbiAgICAgIHkgPSBuZXcgU2V0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG0gPSBfX3ZhbHVlcyhmKSwgdiA9IG0ubmV4dCgpOyAhdi5kb25lOyB2ID0gbS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGcgPSB2LnZhbHVlO1xuICAgICAgICB2b2lkIDAgIT09IChTID0gaS5hc3NpZ25lZENoYXJzLmdldChnKSkgJiYgaC5hZGQoUyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHYgJiYgIXYuZG9uZSAmJiAobCA9IG0ucmV0dXJuKSAmJiBsLmNhbGwobSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYSkgdGhyb3cgYS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF8gPSBfX3ZhbHVlcyhkKSwgVCA9IF8ubmV4dCgpOyAhVC5kb25lOyBUID0gXy5uZXh0KCkpIHtcbiAgICAgICAgZyA9IFQudmFsdWU7XG4gICAgICAgIHZvaWQgMCAhPT0gKFMgPSBpLmFzc2lnbmVkQ2hhcnMuZ2V0KGcpKSAmJiB5LmFkZChTKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgVCAmJiAhVC5kb25lICYmIChjID0gXy5yZXR1cm4pICYmIGMuY2FsbChfKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChzKSB0aHJvdyBzLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBDID0gW10sIGIgPSBbXSwgRSA9IDA7IEUgPCBvLmxlbmd0aDsgRSsrKSB7XG4gICAgICB2YXIgUyA9IG9bRV1bMF0ucmVzSWQsXG4gICAgICAgIEkgPSBoLmhhcyhTKSxcbiAgICAgICAgdyA9IHkuaGFzKFMpO1xuICAgICAgaWYgKEkgJiYgdykge1xuICAgICAgICBDLnB1c2goRSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBJIHx8IHcgfHwgYi5wdXNoKEUpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgQiA9IFsuLi5DLCAuLi5iXTtcbiAgICBpZiAoQi5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgeCA9IG5ldyBTZXQoaS5hc3NpZ25lZENoYXJzLnZhbHVlcygpKSxcbiAgICAgICAgTSA9IEIuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIHguaGFzKG9bZV1bMF0ucmVzSWQpO1xuICAgICAgICB9KSxcbiAgICAgICAgTyA9IE0ubGVuZ3RoID4gMCA/IE0gOiBCLFxuICAgICAgICBEID0gT1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBPLmxlbmd0aCldO1xuICAgICAgb1tEXSwgQy5pbmNsdWRlcyhEKTtcbiAgICAgIHJldHVybiBEO1xuICAgIH1cbiAgICB2YXIgUCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG8ubGVuZ3RoKTtcbiAgICBvW1BdO1xuICAgIHJldHVybiBQO1xuICB9XG59Il19