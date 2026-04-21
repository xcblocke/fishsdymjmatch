
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ChainMultiCoordSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '700f0pryEhPkphmKRxuy7NQ', 'ChainMultiCoordSel');
// Scripts/ChainMultiCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainMultiCoordSel = void 0;
var ChainMultiCoordSel = /** @class */ (function () {
    function ChainMultiCoordSel() {
    }
    ChainMultiCoordSel.prototype.calculatePriority = function (e, t, o) {
        var n = o.tileToCoord(e), i = o.tileToCoord(t), r = o.chainAgeCounter.get(n) || 0, a = o.chainAgeCounter.get(i) || 0, l = r + a, s = Math.max(r, a), c = Math.min(r, a), u = o.completedPairs, p = o.totalPairs - u;
        if ("mid" === (u < 5 ? "early" : p <= 10 ? "late" : "mid")) {
            var f = o.minChainAge, d = o.maxChainAge;
            if (r === f && a === d || r === d && a === f) {
                var h = o.countFreedBlocks(n, i);
                return {
                    priority: 30000 - Math.min(h, 200),
                    subScore: Math.random()
                };
            }
            return {
                priority: 10000 + 100 * l + s,
                subScore: Math.random()
            };
        }
        return {
            priority: 10000 + 10000 * l + 100 * s + c,
            subScore: Math.random()
        };
    };
    return ChainMultiCoordSel;
}());
exports.ChainMultiCoordSel = ChainMultiCoordSel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NoYWluTXVsdGlDb29yZFNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUErQkEsQ0FBQztJQTlCQyw4Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQ3RCLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUNwQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUNqQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUNqQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFDVCxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ2xCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDbEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQ3BCLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU87b0JBQ0wsUUFBUSxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7b0JBQ2xDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO2lCQUN4QixDQUFDO2FBQ0g7WUFDRCxPQUFPO2dCQUNMLFFBQVEsRUFBRSxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTthQUN4QixDQUFDO1NBQ0g7UUFDRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUN6QyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtTQUN4QixDQUFDO0lBQ0osQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2hhaW5NdWx0aUNvb3JkU2VsIHtcbiAgY2FsY3VsYXRlUHJpb3JpdHkoZSwgdCwgbykge1xuICAgIHZhciBuID0gby50aWxlVG9Db29yZChlKSxcbiAgICAgIGkgPSBvLnRpbGVUb0Nvb3JkKHQpLFxuICAgICAgciA9IG8uY2hhaW5BZ2VDb3VudGVyLmdldChuKSB8fCAwLFxuICAgICAgYSA9IG8uY2hhaW5BZ2VDb3VudGVyLmdldChpKSB8fCAwLFxuICAgICAgbCA9IHIgKyBhLFxuICAgICAgcyA9IE1hdGgubWF4KHIsIGEpLFxuICAgICAgYyA9IE1hdGgubWluKHIsIGEpLFxuICAgICAgdSA9IG8uY29tcGxldGVkUGFpcnMsXG4gICAgICBwID0gby50b3RhbFBhaXJzIC0gdTtcbiAgICBpZiAoXCJtaWRcIiA9PT0gKHUgPCA1ID8gXCJlYXJseVwiIDogcCA8PSAxMCA/IFwibGF0ZVwiIDogXCJtaWRcIikpIHtcbiAgICAgIHZhciBmID0gby5taW5DaGFpbkFnZSxcbiAgICAgICAgZCA9IG8ubWF4Q2hhaW5BZ2U7XG4gICAgICBpZiAociA9PT0gZiAmJiBhID09PSBkIHx8IHIgPT09IGQgJiYgYSA9PT0gZikge1xuICAgICAgICB2YXIgaCA9IG8uY291bnRGcmVlZEJsb2NrcyhuLCBpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwcmlvcml0eTogMzAwMDAgLSBNYXRoLm1pbihoLCAyMDApLFxuICAgICAgICAgIHN1YlNjb3JlOiBNYXRoLnJhbmRvbSgpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcmlvcml0eTogMTAwMDAgKyAxMDAgKiBsICsgcyxcbiAgICAgICAgc3ViU2NvcmU6IE1hdGgucmFuZG9tKClcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBwcmlvcml0eTogMTAwMDAgKyAxMDAwMCAqIGwgKyAxMDAgKiBzICsgYyxcbiAgICAgIHN1YlNjb3JlOiBNYXRoLnJhbmRvbSgpXG4gICAgfTtcbiAgfVxufSJdfQ==