
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flowerCardSeries/Scripts/FlowerDrawModeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9baa2finiVNYZRfzCWtFjpg', 'FlowerDrawModeTrait');
// subpackages/l_flowerCardSeries/Scripts/FlowerDrawModeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FlowerCardSeriesTrait_1 = require("./FlowerCardSeriesTrait");
var FlowerDrawModeTrait = /** @class */ (function (_super) {
    __extends(FlowerDrawModeTrait, _super);
    function FlowerDrawModeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mode = FlowerCardSeriesTrait_1.EFlowerDrawMode.Sequence;
        return _this;
    }
    FlowerDrawModeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._mode = this._traitData.mode || FlowerCardSeriesTrait_1.EFlowerDrawMode.Sequence;
    };
    FlowerDrawModeTrait.prototype.onFlowerCS_drawMode = function (e, t) {
        t({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._mode
        });
    };
    FlowerDrawModeTrait.traitKey = "FlowerDrawMode";
    FlowerDrawModeTrait = __decorate([
        mj.trait,
        mj.class("FlowerDrawModeTrait")
    ], FlowerDrawModeTrait);
    return FlowerDrawModeTrait;
}(Trait_1.default));
exports.default = FlowerDrawModeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Zsb3dlckNhcmRTZXJpZXMvU2NyaXB0cy9GbG93ZXJEcmF3TW9kZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLGlFQUEwRDtBQUcxRDtJQUFpRCx1Q0FBSztJQUF0RDtRQUFBLHFFQWNDO1FBYkMsV0FBSyxHQUFHLHVDQUFlLENBQUMsUUFBUSxDQUFDOztJQWFuQyxDQUFDO0lBWEMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSx1Q0FBZSxDQUFDLFFBQVEsQ0FBQztJQUNoRSxDQUFDO0lBQ0QsaURBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFYTSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBRmhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0FjdkM7SUFBRCwwQkFBQztDQWRELEFBY0MsQ0FkZ0QsZUFBSyxHQWNyRDtrQkFkb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IEVGbG93ZXJEcmF3TW9kZSB9IGZyb20gJy4vRmxvd2VyQ2FyZFNlcmllc1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRmxvd2VyRHJhd01vZGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvd2VyRHJhd01vZGVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX21vZGUgPSBFRmxvd2VyRHJhd01vZGUuU2VxdWVuY2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRmxvd2VyRHJhd01vZGVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX21vZGUgPSB0aGlzLl90cmFpdERhdGEubW9kZSB8fCBFRmxvd2VyRHJhd01vZGUuU2VxdWVuY2U7XG4gIH1cbiAgb25GbG93ZXJDU19kcmF3TW9kZShlLCB0KSB7XG4gICAgdCh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLl9tb2RlXG4gICAgfSk7XG4gIH1cbn0iXX0=