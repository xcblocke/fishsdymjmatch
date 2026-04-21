
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tileTypes/DaxiaoCardType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0dbe0XckdEophg6V/1IgYV', 'DaxiaoCardType');
// Scripts/tileTypes/DaxiaoCardType.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var DaxiaoCardType = /** @class */ (function () {
    function DaxiaoCardType() {
    }
    DaxiaoCardType.isGen = function () {
        return true;
    };
    DaxiaoCardType.modify = function (e) {
        var t, o, n = this;
        if (this.isGen(e)) {
            var a = e.getTileMapObject(), l = a.maxLayerIndex, s = null, c = a.aliveTiles().filter(function (t) {
                if (!t.checkIsNormal())
                    return false;
                if (l - t.layer > 1)
                    return false;
                if (n.checkInCenter()) {
                    s || (s = n.getCenterArea(e));
                    if (!n.checkInArea(s, t))
                        return false;
                }
                return true;
            }), u = e.randomGenerator, p = this.getCount(e), f = u.randomElements(c, p);
            try {
                for (var d = __values(f), h = d.next(); !h.done; h = d.next()) {
                    var y = h.value;
                    a.setTileType(y.id, TileTypeEnum_1.ETileType.DaxiaoCard);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    h && !h.done && (o = d.return) && o.call(d);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
    };
    DaxiaoCardType.getCenterArea = function (e) {
        var t, o, n = e.getTileMapObject().aliveTiles();
        if (0 === n.length)
            return null;
        var r = Infinity, a = -Infinity, l = Infinity, s = -Infinity;
        try {
            for (var c = __values(n), u = c.next(); !u.done; u = c.next()) {
                var p = u.value, f = p.gridPosX, d = p.gridPosY;
                f < r && (r = f);
                f + 1 > a && (a = f + 1);
                d < l && (l = d);
                d + 1 > s && (s = d + 1);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (o = c.return) && o.call(c);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var h = 2 * this.getCenterRange()[0], y = 2 * this.getCenterRange()[1], m = a - r + 1, v = s - l + 1;
        return {
            startX: r + Math.floor((m - h) / 2),
            endX: r + Math.floor((m - h) / 2) + h - 1,
            startY: l + Math.floor((v - y) / 2),
            endY: l + Math.floor((v - y) / 2) + y - 1
        };
    };
    DaxiaoCardType.getCenterRange = function () {
        return [3, 3];
    };
    DaxiaoCardType.checkInArea = function (e, t) {
        if (!e)
            return false;
        for (var o = t.gridPosX, n = t.gridPosY, i = 0; i <= 1; i++)
            for (var r = 0; r <= 1; r++) {
                var a = o + i, l = n + r;
                if (a >= e.startX && a <= e.endX && l >= e.startY && l <= e.endY)
                    return true;
            }
        return false;
    };
    DaxiaoCardType.checkInCenter = function () {
        return false;
    };
    DaxiaoCardType.getCount = function () {
        return 1;
    };
    __decorate([
        mj.traitEvent("DaxiaoCardType_isGen")
    ], DaxiaoCardType, "isGen", null);
    __decorate([
        mj.traitEvent("DaxiaoCardType_cenRange")
    ], DaxiaoCardType, "getCenterRange", null);
    __decorate([
        mj.traitEvent("DaxiaoCardType_cInCenter")
    ], DaxiaoCardType, "checkInCenter", null);
    __decorate([
        mj.traitEvent("DaxiaoCardType_getCount")
    ], DaxiaoCardType, "getCount", null);
    return DaxiaoCardType;
}());
exports.default = DaxiaoCardType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3RpbGVUeXBlcy9EYXhpYW9DYXJkVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQStEO0FBQy9EO0lBQUE7SUF5R0EsQ0FBQztJQXZHUSxvQkFBSyxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ00scUJBQU0sR0FBYixVQUFjLENBQUM7UUFDYixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNYLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsRUFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQ25CLENBQUMsR0FBRyxJQUFJLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRTtvQkFBRSxPQUFPLEtBQUssQ0FBQztnQkFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDO29CQUFFLE9BQU8sS0FBSyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtvQkFDckIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFBRSxPQUFPLEtBQUssQ0FBQztpQkFDeEM7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUMsRUFDRixDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFDckIsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVB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LEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFDWCxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDWixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTtvQkFBRSxPQUFPLElBQUksQ0FBQzthQUMvRTtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVNLDRCQUFhLEdBQXBCO1FBQ0UsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0sdUJBQVEsR0FBZjtRQUNFLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXRHRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7cUNBR3JDO0lBaUZEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQzs4Q0FHeEM7SUFXRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7NkNBR3pDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO3dDQUd4QztJQUNILHFCQUFDO0NBekdELEFBeUdDLElBQUE7a0JBekdvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXhpYW9DYXJkVHlwZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiRGF4aWFvQ2FyZFR5cGVfaXNHZW5cIilcbiAgc3RhdGljIGlzR2VuKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHN0YXRpYyBtb2RpZnkoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSB0aGlzO1xuICAgIGlmICh0aGlzLmlzR2VuKGUpKSB7XG4gICAgICB2YXIgYSA9IGUuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgICBsID0gYS5tYXhMYXllckluZGV4LFxuICAgICAgICBzID0gbnVsbCxcbiAgICAgICAgYyA9IGEuYWxpdmVUaWxlcygpLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIGlmICghdC5jaGVja0lzTm9ybWFsKCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBpZiAobCAtIHQubGF5ZXIgPiAxKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgaWYgKG4uY2hlY2tJbkNlbnRlcigpKSB7XG4gICAgICAgICAgICBzIHx8IChzID0gbi5nZXRDZW50ZXJBcmVhKGUpKTtcbiAgICAgICAgICAgIGlmICghbi5jaGVja0luQXJlYShzLCB0KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSksXG4gICAgICAgIHUgPSBlLnJhbmRvbUdlbmVyYXRvcixcbiAgICAgICAgcCA9IHRoaXMuZ2V0Q291bnQoZSksXG4gICAgICAgIGYgPSB1LnJhbmRvbUVsZW1lbnRzKGMsIHApO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgZCA9IF9fdmFsdWVzKGYpLCBoID0gZC5uZXh0KCk7ICFoLmRvbmU7IGggPSBkLm5leHQoKSkge1xuICAgICAgICAgIHZhciB5ID0gaC52YWx1ZTtcbiAgICAgICAgICBhLnNldFRpbGVUeXBlKHkuaWQsIEVUaWxlVHlwZS5EYXhpYW9DYXJkKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGggJiYgIWguZG9uZSAmJiAobyA9IGQucmV0dXJuKSAmJiBvLmNhbGwoZCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RhdGljIGdldENlbnRlckFyZWEoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSBlLmdldFRpbGVNYXBPYmplY3QoKS5hbGl2ZVRpbGVzKCk7XG4gICAgaWYgKDAgPT09IG4ubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgciA9IEluZmluaXR5LFxuICAgICAgYSA9IC1JbmZpbml0eSxcbiAgICAgIGwgPSBJbmZpbml0eSxcbiAgICAgIHMgPSAtSW5maW5pdHk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGMgPSBfX3ZhbHVlcyhuKSwgdSA9IGMubmV4dCgpOyAhdS5kb25lOyB1ID0gYy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHAgPSB1LnZhbHVlLFxuICAgICAgICAgIGYgPSBwLmdyaWRQb3NYLFxuICAgICAgICAgIGQgPSBwLmdyaWRQb3NZO1xuICAgICAgICBmIDwgciAmJiAociA9IGYpO1xuICAgICAgICBmICsgMSA+IGEgJiYgKGEgPSBmICsgMSk7XG4gICAgICAgIGQgPCBsICYmIChsID0gZCk7XG4gICAgICAgIGQgKyAxID4gcyAmJiAocyA9IGQgKyAxKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdSAmJiAhdS5kb25lICYmIChvID0gYy5yZXR1cm4pICYmIG8uY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgaCA9IDIgKiB0aGlzLmdldENlbnRlclJhbmdlKClbMF0sXG4gICAgICB5ID0gMiAqIHRoaXMuZ2V0Q2VudGVyUmFuZ2UoKVsxXSxcbiAgICAgIG0gPSBhIC0gciArIDEsXG4gICAgICB2ID0gcyAtIGwgKyAxO1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydFg6IHIgKyBNYXRoLmZsb29yKChtIC0gaCkgLyAyKSxcbiAgICAgIGVuZFg6IHIgKyBNYXRoLmZsb29yKChtIC0gaCkgLyAyKSArIGggLSAxLFxuICAgICAgc3RhcnRZOiBsICsgTWF0aC5mbG9vcigodiAtIHkpIC8gMiksXG4gICAgICBlbmRZOiBsICsgTWF0aC5mbG9vcigodiAtIHkpIC8gMikgKyB5IC0gMVxuICAgIH07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEYXhpYW9DYXJkVHlwZV9jZW5SYW5nZVwiKVxuICBzdGF0aWMgZ2V0Q2VudGVyUmFuZ2UoKSB7XG4gICAgcmV0dXJuIFszLCAzXTtcbiAgfVxuICBzdGF0aWMgY2hlY2tJbkFyZWEoZSwgdCkge1xuICAgIGlmICghZSkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAodmFyIG8gPSB0LmdyaWRQb3NYLCBuID0gdC5ncmlkUG9zWSwgaSA9IDA7IGkgPD0gMTsgaSsrKSBmb3IgKHZhciByID0gMDsgciA8PSAxOyByKyspIHtcbiAgICAgIHZhciBhID0gbyArIGksXG4gICAgICAgIGwgPSBuICsgcjtcbiAgICAgIGlmIChhID49IGUuc3RhcnRYICYmIGEgPD0gZS5lbmRYICYmIGwgPj0gZS5zdGFydFkgJiYgbCA8PSBlLmVuZFkpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEYXhpYW9DYXJkVHlwZV9jSW5DZW50ZXJcIilcbiAgc3RhdGljIGNoZWNrSW5DZW50ZXIoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRGF4aWFvQ2FyZFR5cGVfZ2V0Q291bnRcIilcbiAgc3RhdGljIGdldENvdW50KCkge1xuICAgIHJldHVybiAxO1xuICB9XG59Il19