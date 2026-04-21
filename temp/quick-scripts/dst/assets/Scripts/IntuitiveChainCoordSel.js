
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/IntuitiveChainCoordSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b20a6HwvXtMXr8wVP2O0UkG', 'IntuitiveChainCoordSel');
// Scripts/IntuitiveChainCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.IntuitiveChainCoordSel = void 0;
var IntuitiveChainCoordSel = /** @class */ (function () {
    function IntuitiveChainCoordSel() {
    }
    IntuitiveChainCoordSel.prototype.calculatePriority = function (e, t, o) {
        var n = o.tileToCoord(e), i = o.tileToCoord(t), r = o.lastFreedCoords, a = r.has(n) || r.has(i), l = o.countFreedBlocks(n, i);
        return {
            priority: a ? l >= 2 ? 50 : l >= 1 ? 40 : 30 : l >= 2 ? 20 : l >= 1 ? 10 : 1,
            subScore: Math.random()
        };
    };
    return IntuitiveChainCoordSel;
}());
exports.IntuitiveChainCoordSel = IntuitiveChainCoordSel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ludHVpdGl2ZUNoYWluQ29vcmRTZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBWUEsQ0FBQztJQVhDLGtEQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFDdEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQ3BCLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxFQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixPQUFPO1lBQ0wsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7U0FDeEIsQ0FBQztJQUNKLENBQUM7SUFDSCw2QkFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksd0RBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEludHVpdGl2ZUNoYWluQ29vcmRTZWwge1xuICBjYWxjdWxhdGVQcmlvcml0eShlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSBvLnRpbGVUb0Nvb3JkKGUpLFxuICAgICAgaSA9IG8udGlsZVRvQ29vcmQodCksXG4gICAgICByID0gby5sYXN0RnJlZWRDb29yZHMsXG4gICAgICBhID0gci5oYXMobikgfHwgci5oYXMoaSksXG4gICAgICBsID0gby5jb3VudEZyZWVkQmxvY2tzKG4sIGkpO1xuICAgIHJldHVybiB7XG4gICAgICBwcmlvcml0eTogYSA/IGwgPj0gMiA/IDUwIDogbCA+PSAxID8gNDAgOiAzMCA6IGwgPj0gMiA/IDIwIDogbCA+PSAxID8gMTAgOiAxLFxuICAgICAgc3ViU2NvcmU6IE1hdGgucmFuZG9tKClcbiAgICB9O1xuICB9XG59Il19