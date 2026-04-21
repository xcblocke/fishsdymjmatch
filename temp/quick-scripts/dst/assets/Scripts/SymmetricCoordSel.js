
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/SymmetricCoordSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33b3aexGPpJ2Kd2Qvp99u1e', 'SymmetricCoordSel');
// Scripts/SymmetricCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SymmetricCoordSel = void 0;
var SymmetricCoordSel = /** @class */ (function () {
    function SymmetricCoordSel() {
    }
    SymmetricCoordSel.prototype.calculatePriority = function (e, t) {
        var o = e.layer, n = e.gridPosY, i = e.gridPosX, r = t.layer, a = t.gridPosY, l = t.gridPosX;
        return o === r && n === a ? (i + l) % 2 == 0 ? {
            priority: 150,
            subScore: Math.random()
        } : {
            priority: 100,
            subScore: Math.random()
        } : o === r ? {
            priority: 50,
            subScore: Math.random()
        } : {
            priority: 10,
            subScore: Math.random()
        };
    };
    return SymmetricCoordSel;
}());
exports.SymmetricCoordSel = SymmetricCoordSel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1N5bW1ldHJpY0Nvb3JkU2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQXNCQSxDQUFDO0lBckJDLDZDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUNkLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUNkLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNYLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUNkLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxRQUFRLEVBQUUsR0FBRztZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO1NBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBQ0YsUUFBUSxFQUFFLEdBQUc7WUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtTQUN4QixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNaLFFBQVEsRUFBRSxFQUFFO1lBQ1osUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7U0FDeEIsQ0FBQyxDQUFDLENBQUM7WUFDRixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO1NBQ3hCLENBQUM7SUFDSixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTeW1tZXRyaWNDb29yZFNlbCB7XG4gIGNhbGN1bGF0ZVByaW9yaXR5KGUsIHQpIHtcbiAgICB2YXIgbyA9IGUubGF5ZXIsXG4gICAgICBuID0gZS5ncmlkUG9zWSxcbiAgICAgIGkgPSBlLmdyaWRQb3NYLFxuICAgICAgciA9IHQubGF5ZXIsXG4gICAgICBhID0gdC5ncmlkUG9zWSxcbiAgICAgIGwgPSB0LmdyaWRQb3NYO1xuICAgIHJldHVybiBvID09PSByICYmIG4gPT09IGEgPyAoaSArIGwpICUgMiA9PSAwID8ge1xuICAgICAgcHJpb3JpdHk6IDE1MCxcbiAgICAgIHN1YlNjb3JlOiBNYXRoLnJhbmRvbSgpXG4gICAgfSA6IHtcbiAgICAgIHByaW9yaXR5OiAxMDAsXG4gICAgICBzdWJTY29yZTogTWF0aC5yYW5kb20oKVxuICAgIH0gOiBvID09PSByID8ge1xuICAgICAgcHJpb3JpdHk6IDUwLFxuICAgICAgc3ViU2NvcmU6IE1hdGgucmFuZG9tKClcbiAgICB9IDoge1xuICAgICAgcHJpb3JpdHk6IDEwLFxuICAgICAgc3ViU2NvcmU6IE1hdGgucmFuZG9tKClcbiAgICB9O1xuICB9XG59Il19