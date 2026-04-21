
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_magnet/Scripts/Tile2MagnetTimeDownTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2548amGvS5OKYXGCdnb/sf8', 'Tile2MagnetTimeDownTrait');
// subpackages/l_magnet/Scripts/Tile2MagnetTimeDownTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2MagnetTimeDownTrait = /** @class */ (function (_super) {
    __extends(Tile2MagnetTimeDownTrait, _super);
    function Tile2MagnetTimeDownTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MagnetTimeDownTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2MagnetTimeDownTrait.prototype.onTile2MagnetBhv_downTime = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.traitData.downTime || 5
        });
    };
    Tile2MagnetTimeDownTrait.prototype.onTile2Magnet_slotLimit = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.traitData.slotBarLimit || 3
        });
    };
    Tile2MagnetTimeDownTrait.traitKey = "Tile2MagnetTimeDown";
    Tile2MagnetTimeDownTrait = __decorate([
        mj.trait,
        mj.class("Tile2MagnetTimeDownTrait")
    ], Tile2MagnetTimeDownTrait);
    return Tile2MagnetTimeDownTrait;
}(Trait_1.default));
exports.default = Tile2MagnetTimeDownTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hZ25ldC9TY3JpcHRzL1RpbGUyTWFnbmV0VGltZURvd25UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQXNELDRDQUFLO0lBQTNEOztJQW1CQSxDQUFDO0lBakJDLHlDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCw0REFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksQ0FBQztTQUN4QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsMERBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxJQUFJLENBQUM7U0FDNUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWpCTSxpQ0FBUSxHQUFHLHFCQUFxQixDQUFDO0lBRHJCLHdCQUF3QjtRQUY1QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBbUI1QztJQUFELCtCQUFDO0NBbkJELEFBbUJDLENBbkJxRCxlQUFLLEdBbUIxRDtrQkFuQm9CLHdCQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyTWFnbmV0VGltZURvd25UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJNYWduZXRUaW1lRG93blRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbGUyTWFnbmV0VGltZURvd25cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uVGlsZTJNYWduZXRCaHZfZG93blRpbWUodCwgZSkge1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogdGhpcy50cmFpdERhdGEuZG93blRpbWUgfHwgNVxuICAgIH0pO1xuICB9XG4gIG9uVGlsZTJNYWduZXRfc2xvdExpbWl0KHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IHRoaXMudHJhaXREYXRhLnNsb3RCYXJMaW1pdCB8fCAzXG4gICAgfSk7XG4gIH1cbn0iXX0=