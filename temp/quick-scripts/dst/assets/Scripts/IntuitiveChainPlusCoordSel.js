
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/IntuitiveChainPlusCoordSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3aa2GGkF5GkaWGtoyQuvie', 'IntuitiveChainPlusCoordSel');
// Scripts/IntuitiveChainPlusCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.IntuitiveChainPlusCoordSel = void 0;
var IntuitiveChainPlusCoordSel = /** @class */ (function () {
    function IntuitiveChainPlusCoordSel() {
    }
    IntuitiveChainPlusCoordSel.prototype.calculatePriority = function (e, t, o) {
        var n = o.tileToCoord(e), i = o.tileToCoord(t), r = o.lastSecondCoord, a = o.lastFreedCoords, l = null, s = null, c = false;
        if (r) {
            var u = this._coordManhattanDistance(n, r), p = this._coordManhattanDistance(i, r);
            if (u <= 3) {
                l = e;
                s = t;
                c = true;
            }
            else if (p <= 3) {
                l = t;
                s = e;
                c = true;
            }
        }
        if (!c && a.size > 0)
            if (a.has(n)) {
                l = e;
                s = t;
            }
            else if (a.has(i)) {
                l = t;
                s = e;
            }
        if (l && s) {
            var f = 1, d = this._tileManhattanDistance(l, s);
            d >= 6 && d <= 10 && (f *= 2);
            s.layer === o.maxSelectableZ && (f *= 1.5);
            o.countFreedBlocks(n, i) > 0 && (f *= 5);
            var h = c ? 200 : 100;
            return {
                priority: Math.floor(h * f),
                subScore: Math.random()
            };
        }
        var y = o.countFreedBlocks(n, i), m = 1;
        if (y >= 2) {
            m = 5;
        }
        else {
            y >= 1 && (m = 3);
        }
        return {
            priority: m,
            subScore: Math.random()
        };
    };
    IntuitiveChainPlusCoordSel.prototype._coordManhattanDistance = function (e, t) {
        var o = e.split("_").map(Number), n = t.split("_").map(Number);
        return o.length < 3 || n.length < 3 ? Infinity : Math.abs(o[0] - n[0]) + Math.abs(o[1] - n[1]) + Math.abs(o[2] - n[2]);
    };
    IntuitiveChainPlusCoordSel.prototype._tileManhattanDistance = function (e, t) {
        return Math.abs(e.layer - t.layer) + Math.abs(e.gridPosY - t.gridPosY) + Math.abs(e.gridPosX - t.gridPosX);
    };
    return IntuitiveChainPlusCoordSel;
}());
exports.IntuitiveChainPlusCoordSel = IntuitiveChainPlusCoordSel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ludHVpdGl2ZUNoYWluUGx1c0Nvb3JkU2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQTZEQSxDQUFDO0lBNURDLHNEQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFDdEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQ3BCLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxFQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFDckIsQ0FBQyxHQUFHLElBQUksRUFDUixDQUFDLEdBQUcsSUFBSSxFQUNSLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDWixJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3hDLENBQUMsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ04sQ0FBQyxHQUFHLElBQUksQ0FBQzthQUNWO2lCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDakIsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNOLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDVjtTQUNGO1FBQ0QsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7WUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xDLENBQUMsR0FBRyxD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REEsQUE2REMsSUFBQTtBQTdEWSxnRUFBMEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSW50dWl0aXZlQ2hhaW5QbHVzQ29vcmRTZWwge1xuICBjYWxjdWxhdGVQcmlvcml0eShlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSBvLnRpbGVUb0Nvb3JkKGUpLFxuICAgICAgaSA9IG8udGlsZVRvQ29vcmQodCksXG4gICAgICByID0gby5sYXN0U2Vjb25kQ29vcmQsXG4gICAgICBhID0gby5sYXN0RnJlZWRDb29yZHMsXG4gICAgICBsID0gbnVsbCxcbiAgICAgIHMgPSBudWxsLFxuICAgICAgYyA9IGZhbHNlO1xuICAgIGlmIChyKSB7XG4gICAgICB2YXIgdSA9IHRoaXMuX2Nvb3JkTWFuaGF0dGFuRGlzdGFuY2UobiwgciksXG4gICAgICAgIHAgPSB0aGlzLl9jb29yZE1hbmhhdHRhbkRpc3RhbmNlKGksIHIpO1xuICAgICAgaWYgKHUgPD0gMykge1xuICAgICAgICBsID0gZTtcbiAgICAgICAgcyA9IHQ7XG4gICAgICAgIGMgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChwIDw9IDMpIHtcbiAgICAgICAgbCA9IHQ7XG4gICAgICAgIHMgPSBlO1xuICAgICAgICBjID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFjICYmIGEuc2l6ZSA+IDApIGlmIChhLmhhcyhuKSkge1xuICAgICAgbCA9IGU7XG4gICAgICBzID0gdDtcbiAgICB9IGVsc2UgaWYgKGEuaGFzKGkpKSB7XG4gICAgICBsID0gdDtcbiAgICAgIHMgPSBlO1xuICAgIH1cbiAgICBpZiAobCAmJiBzKSB7XG4gICAgICB2YXIgZiA9IDEsXG4gICAgICAgIGQgPSB0aGlzLl90aWxlTWFuaGF0dGFuRGlzdGFuY2UobCwgcyk7XG4gICAgICBkID49IDYgJiYgZCA8PSAxMCAmJiAoZiAqPSAyKTtcbiAgICAgIHMubGF5ZXIgPT09IG8ubWF4U2VsZWN0YWJsZVogJiYgKGYgKj0gMS41KTtcbiAgICAgIG8uY291bnRGcmVlZEJsb2NrcyhuLCBpKSA+IDAgJiYgKGYgKj0gNSk7XG4gICAgICB2YXIgaCA9IGMgPyAyMDAgOiAxMDA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcmlvcml0eTogTWF0aC5mbG9vcihoICogZiksXG4gICAgICAgIHN1YlNjb3JlOiBNYXRoLnJhbmRvbSgpXG4gICAgICB9O1xuICAgIH1cbiAgICB2YXIgeSA9IG8uY291bnRGcmVlZEJsb2NrcyhuLCBpKSxcbiAgICAgIG0gPSAxO1xuICAgIGlmICh5ID49IDIpIHtcbiAgICAgIG0gPSA1O1xuICAgIH0gZWxzZSB7XG4gICAgICB5ID49IDEgJiYgKG0gPSAzKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHByaW9yaXR5OiBtLFxuICAgICAgc3ViU2NvcmU6IE1hdGgucmFuZG9tKClcbiAgICB9O1xuICB9XG4gIF9jb29yZE1hbmhhdHRhbkRpc3RhbmNlKGUsIHQpIHtcbiAgICB2YXIgbyA9IGUuc3BsaXQoXCJfXCIpLm1hcChOdW1iZXIpLFxuICAgICAgbiA9IHQuc3BsaXQoXCJfXCIpLm1hcChOdW1iZXIpO1xuICAgIHJldHVybiBvLmxlbmd0aCA8IDMgfHwgbi5sZW5ndGggPCAzID8gSW5maW5pdHkgOiBNYXRoLmFicyhvWzBdIC0gblswXSkgKyBNYXRoLmFicyhvWzFdIC0gblsxXSkgKyBNYXRoLmFicyhvWzJdIC0gblsyXSk7XG4gIH1cbiAgX3RpbGVNYW5oYXR0YW5EaXN0YW5jZShlLCB0KSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKGUubGF5ZXIgLSB0LmxheWVyKSArIE1hdGguYWJzKGUuZ3JpZFBvc1kgLSB0LmdyaWRQb3NZKSArIE1hdGguYWJzKGUuZ3JpZFBvc1ggLSB0LmdyaWRQb3NYKTtcbiAgfVxufSJdfQ==