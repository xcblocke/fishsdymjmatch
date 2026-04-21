
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flowerCardSeries/Scripts/FlowerBaseSkinTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '255b2ObkxBFsqBN04IsdUHC', 'FlowerBaseSkinTrait');
// subpackages/l_flowerCardSeries/Scripts/FlowerBaseSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var FlowerBaseSkinTrait = /** @class */ (function (_super) {
    __extends(FlowerBaseSkinTrait, _super);
    function FlowerBaseSkinTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._enable = true;
        return _this;
    }
    FlowerBaseSkinTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._enable = false !== this._traitData.enable;
    };
    FlowerBaseSkinTrait.prototype.onFlowerCS_enableBase = function (e, t) {
        t();
    };
    FlowerBaseSkinTrait.traitKey = "FlowerBaseSkin";
    FlowerBaseSkinTrait = __decorate([
        mj.trait,
        mj.class("FlowerBaseSkinTrait")
    ], FlowerBaseSkinTrait);
    return FlowerBaseSkinTrait;
}(Trait_1.default));
exports.default = FlowerBaseSkinTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Zsb3dlckNhcmRTZXJpZXMvU2NyaXB0cy9GbG93ZXJCYXNlU2tpblRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBaUQsdUNBQUs7SUFBdEQ7UUFBQSxxRUFVQztRQVRDLGFBQU8sR0FBRyxJQUFJLENBQUM7O0lBU2pCLENBQUM7SUFQQyxvQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUNsRCxDQUFDO0lBQ0QsbURBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQVBNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFGaEIsbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQVV2QztJQUFELDBCQUFDO0NBVkQsQUFVQyxDQVZnRCxlQUFLLEdBVXJEO2tCQVZvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJGbG93ZXJCYXNlU2tpblRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG93ZXJCYXNlU2tpblRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfZW5hYmxlID0gdHJ1ZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGbG93ZXJCYXNlU2tpblwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fZW5hYmxlID0gZmFsc2UgIT09IHRoaXMuX3RyYWl0RGF0YS5lbmFibGU7XG4gIH1cbiAgb25GbG93ZXJDU19lbmFibGVCYXNlKGUsIHQpIHtcbiAgICB0KCk7XG4gIH1cbn0iXX0=