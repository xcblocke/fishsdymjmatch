
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_magnet/Scripts/Tile2MagnetMatchesTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79980Wi+xpOWL+szrp62ITQ', 'Tile2MagnetMatchesTrait');
// subpackages/l_magnet/Scripts/Tile2MagnetMatchesTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2MagnetMatchesTrait = /** @class */ (function (_super) {
    __extends(Tile2MagnetMatchesTrait, _super);
    function Tile2MagnetMatchesTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MagnetMatchesTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2MagnetMatchesTrait.prototype.onT2MagnetChk_magnetCnt = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.traitData.matchPair || 1
        });
    };
    Tile2MagnetMatchesTrait.traitKey = "Tile2MagnetMatches";
    Tile2MagnetMatchesTrait = __decorate([
        mj.trait,
        mj.class("Tile2MagnetMatchesTrait")
    ], Tile2MagnetMatchesTrait);
    return Tile2MagnetMatchesTrait;
}(Trait_1.default));
exports.default = Tile2MagnetMatchesTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hZ25ldC9TY3JpcHRzL1RpbGUyTWFnbmV0TWF0Y2hlc1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBcUQsMkNBQUs7SUFBMUQ7O0lBWUEsQ0FBQztJQVZDLHdDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCx5REFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksQ0FBQztTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBVk0sZ0NBQVEsR0FBRyxvQkFBb0IsQ0FBQztJQURwQix1QkFBdUI7UUFGM0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO09BQ2YsdUJBQXVCLENBWTNDO0lBQUQsOEJBQUM7Q0FaRCxBQVlDLENBWm9ELGVBQUssR0FZekQ7a0JBWm9CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyTWFnbmV0TWF0Y2hlc1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMk1hZ25ldE1hdGNoZXNUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMk1hZ25ldE1hdGNoZXNcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uVDJNYWduZXRDaGtfbWFnbmV0Q250KHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IHRoaXMudHJhaXREYXRhLm1hdGNoUGFpciB8fCAxXG4gICAgfSk7XG4gIH1cbn0iXX0=