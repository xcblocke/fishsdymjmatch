
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flowerClearTile2/Scripts/Tile2FlowerStepClearTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9a6egDXFpFNKrydFzg+5ax', 'Tile2FlowerStepClearTrait');
// subpackages/l_flowerClearTile2/Scripts/Tile2FlowerStepClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2FlowerStepClearTrait = /** @class */ (function (_super) {
    __extends(Tile2FlowerStepClearTrait, _super);
    function Tile2FlowerStepClearTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2FlowerStepClearTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2FlowerStepClearTrait.prototype.onT2FlowerClr_clearCon = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: {
                stepCount: this.traitData.stepCount || 0
            }
        });
    };
    Tile2FlowerStepClearTrait.traitKey = "Tile2FlowerStepClear";
    Tile2FlowerStepClearTrait = __decorate([
        mj.trait,
        mj.class("Tile2FlowerStepClearTrait")
    ], Tile2FlowerStepClearTrait);
    return Tile2FlowerStepClearTrait;
}(Trait_1.default));
exports.default = Tile2FlowerStepClearTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Zsb3dlckNsZWFyVGlsZTIvU2NyaXB0cy9UaWxlMkZsb3dlclN0ZXBDbGVhclRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBdUQsNkNBQUs7SUFBNUQ7O0lBY0EsQ0FBQztJQVpDLDBDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCwwREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUU7Z0JBQ1QsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLENBQUM7YUFDekM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBWk0sa0NBQVEsR0FBRyxzQkFBc0IsQ0FBQztJQUR0Qix5QkFBeUI7UUFGN0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDO09BQ2pCLHlCQUF5QixDQWM3QztJQUFELGdDQUFDO0NBZEQsQUFjQyxDQWRzRCxlQUFLLEdBYzNEO2tCQWRvQix5QkFBeUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUaWxlMkZsb3dlclN0ZXBDbGVhclRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMkZsb3dlclN0ZXBDbGVhclRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbGUyRmxvd2VyU3RlcENsZWFyXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvblQyRmxvd2VyQ2xyX2NsZWFyQ29uKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgc3RlcENvdW50OiB0aGlzLnRyYWl0RGF0YS5zdGVwQ291bnQgfHwgMFxuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il19