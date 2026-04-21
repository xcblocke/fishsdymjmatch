
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/LongDistCoordSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '613aaWvpedBbaaw4aPE8f5T', 'LongDistCoordSel');
// Scripts/LongDistCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LongDistCoordSel = void 0;
var LongDistCoordSel = /** @class */ (function () {
    function LongDistCoordSel() {
    }
    LongDistCoordSel.prototype.calculatePriority = function (e, t) {
        var o = this._calculate3DDistance(e, t);
        return o >= 11 ? {
            priority: 20,
            subScore: Math.random()
        } : o >= 8 ? {
            priority: 6,
            subScore: Math.random()
        } : {
            priority: 1,
            subScore: Math.random()
        };
    };
    LongDistCoordSel.prototype._calculate3DDistance = function (e, t) {
        var o = e.gridPosX - t.gridPosX, n = e.gridPosY - t.gridPosY, i = e.layer - t.layer;
        return Math.sqrt(o * o + n * n + i * i);
    };
    return LongDistCoordSel;
}());
exports.LongDistCoordSel = LongDistCoordSel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xvbmdEaXN0Q29vcmRTZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBb0JBLENBQUM7SUFuQkMsNENBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNmLFFBQVEsRUFBRSxFQUFFO1lBQ1osUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7U0FDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxRQUFRLEVBQUUsQ0FBQztZQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO1NBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBQ0YsUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtTQUN4QixDQUFDO0lBQ0osQ0FBQztJQUNELCtDQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQzdCLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQzNCLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTG9uZ0Rpc3RDb29yZFNlbCB7XG4gIGNhbGN1bGF0ZVByaW9yaXR5KGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXMuX2NhbGN1bGF0ZTNERGlzdGFuY2UoZSwgdCk7XG4gICAgcmV0dXJuIG8gPj0gMTEgPyB7XG4gICAgICBwcmlvcml0eTogMjAsXG4gICAgICBzdWJTY29yZTogTWF0aC5yYW5kb20oKVxuICAgIH0gOiBvID49IDggPyB7XG4gICAgICBwcmlvcml0eTogNixcbiAgICAgIHN1YlNjb3JlOiBNYXRoLnJhbmRvbSgpXG4gICAgfSA6IHtcbiAgICAgIHByaW9yaXR5OiAxLFxuICAgICAgc3ViU2NvcmU6IE1hdGgucmFuZG9tKClcbiAgICB9O1xuICB9XG4gIF9jYWxjdWxhdGUzRERpc3RhbmNlKGUsIHQpIHtcbiAgICB2YXIgbyA9IGUuZ3JpZFBvc1ggLSB0LmdyaWRQb3NYLFxuICAgICAgbiA9IGUuZ3JpZFBvc1kgLSB0LmdyaWRQb3NZLFxuICAgICAgaSA9IGUubGF5ZXIgLSB0LmxheWVyO1xuICAgIHJldHVybiBNYXRoLnNxcnQobyAqIG8gKyBuICogbiArIGkgKiBpKTtcbiAgfVxufSJdfQ==