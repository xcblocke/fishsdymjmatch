
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ShortDistCoordSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67192Xzq5hBP62akxUhEZOy', 'ShortDistCoordSel');
// Scripts/ShortDistCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortDistCoordSel = void 0;
var ShortDistCoordSel = /** @class */ (function () {
    function ShortDistCoordSel() {
    }
    ShortDistCoordSel.prototype.calculatePriority = function (e, t) {
        var o = this._calculate3DDistance(e, t);
        return o <= 3 ? {
            priority: 20,
            subScore: Math.random()
        } : o <= 6 ? {
            priority: 5,
            subScore: Math.random()
        } : {
            priority: 1,
            subScore: Math.random()
        };
    };
    ShortDistCoordSel.prototype._calculate3DDistance = function (e, t) {
        var o = e.gridPosX - t.gridPosX, n = e.gridPosY - t.gridPosY, i = e.layer - t.layer;
        return Math.sqrt(o * o + n * n + i * i);
    };
    return ShortDistCoordSel;
}());
exports.ShortDistCoordSel = ShortDistCoordSel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1Nob3J0RGlzdENvb3JkU2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQW9CQSxDQUFDO0lBbkJDLDZDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO1NBQ3hCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtTQUN4QixDQUFDLENBQUMsQ0FBQztZQUNGLFFBQVEsRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7U0FDeEIsQ0FBQztJQUNKLENBQUM7SUFDRCxnREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUM3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUMzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDSCx3QkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNob3J0RGlzdENvb3JkU2VsIHtcbiAgY2FsY3VsYXRlUHJpb3JpdHkoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcy5fY2FsY3VsYXRlM0REaXN0YW5jZShlLCB0KTtcbiAgICByZXR1cm4gbyA8PSAzID8ge1xuICAgICAgcHJpb3JpdHk6IDIwLFxuICAgICAgc3ViU2NvcmU6IE1hdGgucmFuZG9tKClcbiAgICB9IDogbyA8PSA2ID8ge1xuICAgICAgcHJpb3JpdHk6IDUsXG4gICAgICBzdWJTY29yZTogTWF0aC5yYW5kb20oKVxuICAgIH0gOiB7XG4gICAgICBwcmlvcml0eTogMSxcbiAgICAgIHN1YlNjb3JlOiBNYXRoLnJhbmRvbSgpXG4gICAgfTtcbiAgfVxuICBfY2FsY3VsYXRlM0REaXN0YW5jZShlLCB0KSB7XG4gICAgdmFyIG8gPSBlLmdyaWRQb3NYIC0gdC5ncmlkUG9zWCxcbiAgICAgIG4gPSBlLmdyaWRQb3NZIC0gdC5ncmlkUG9zWSxcbiAgICAgIGkgPSBlLmxheWVyIC0gdC5sYXllcjtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KG8gKiBvICsgbiAqIG4gKyBpICogaSk7XG4gIH1cbn0iXX0=