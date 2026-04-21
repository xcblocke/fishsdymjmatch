
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_magnet/Scripts/Tile2MagnetPopupTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9706Ph9ZVGE4KvQDX9jhCo', 'Tile2MagnetPopupTrait');
// subpackages/l_magnet/Scripts/Tile2MagnetPopupTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2MagnetPopupTrait = /** @class */ (function (_super) {
    __extends(Tile2MagnetPopupTrait, _super);
    function Tile2MagnetPopupTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MagnetPopupTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2MagnetPopupTrait.prototype.onTile2Magnet_popCnt = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.traitData.popupCount || 2
        });
    };
    Tile2MagnetPopupTrait.traitKey = "Tile2MagnetPopup";
    Tile2MagnetPopupTrait = __decorate([
        mj.trait,
        mj.class("Tile2MagnetPopupTrait")
    ], Tile2MagnetPopupTrait);
    return Tile2MagnetPopupTrait;
}(Trait_1.default));
exports.default = Tile2MagnetPopupTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hZ25ldC9TY3JpcHRzL1RpbGUyTWFnbmV0UG9wdXBUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQW1ELHlDQUFLO0lBQXhEOztJQVlBLENBQUM7SUFWQyxzQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUM7U0FDMUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVZNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFEbEIscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQVl6QztJQUFELDRCQUFDO0NBWkQsQUFZQyxDQVprRCxlQUFLLEdBWXZEO2tCQVpvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUaWxlMk1hZ25ldFBvcHVwVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyTWFnbmV0UG9wdXBUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMk1hZ25ldFBvcHVwXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvblRpbGUyTWFnbmV0X3BvcENudCh0LCBlKSB7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLnRyYWl0RGF0YS5wb3B1cENvdW50IHx8IDJcbiAgICB9KTtcbiAgfVxufSJdfQ==