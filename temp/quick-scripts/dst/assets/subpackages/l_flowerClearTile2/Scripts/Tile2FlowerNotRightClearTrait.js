
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flowerClearTile2/Scripts/Tile2FlowerNotRightClearTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '72f35oHC+hCqIQl+q8VjfOe', 'Tile2FlowerNotRightClearTrait');
// subpackages/l_flowerClearTile2/Scripts/Tile2FlowerNotRightClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2FlowerNotRightClearTrait = /** @class */ (function (_super) {
    __extends(Tile2FlowerNotRightClearTrait, _super);
    function Tile2FlowerNotRightClearTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2FlowerNotRightClearTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2FlowerNotRightClearTrait.prototype.onT2FlowerClr_clearCon = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: {
                notRightClearEnable: this.traitData.notRightClearEnable || false
            }
        });
    };
    Tile2FlowerNotRightClearTrait.traitKey = "Tile2FlowerNotRightClear";
    Tile2FlowerNotRightClearTrait = __decorate([
        mj.trait,
        mj.class("Tile2FlowerNotRightClearTrait")
    ], Tile2FlowerNotRightClearTrait);
    return Tile2FlowerNotRightClearTrait;
}(Trait_1.default));
exports.default = Tile2FlowerNotRightClearTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Zsb3dlckNsZWFyVGlsZTIvU2NyaXB0cy9UaWxlMkZsb3dlck5vdFJpZ2h0Q2xlYXJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQTJELGlEQUFLO0lBQWhFOztJQWNBLENBQUM7SUFaQyw4Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsOERBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFO2dCQUNULG1CQUFtQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLElBQUksS0FBSzthQUNqRTtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFaTSxzQ0FBUSxHQUFHLDBCQUEwQixDQUFDO0lBRDFCLDZCQUE2QjtRQUZqRCxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUM7T0FDckIsNkJBQTZCLENBY2pEO0lBQUQsb0NBQUM7Q0FkRCxBQWNDLENBZDBELGVBQUssR0FjL0Q7a0JBZG9CLDZCQUE2QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyRmxvd2VyTm90UmlnaHRDbGVhclRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMkZsb3dlck5vdFJpZ2h0Q2xlYXJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMkZsb3dlck5vdFJpZ2h0Q2xlYXJcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uVDJGbG93ZXJDbHJfY2xlYXJDb24odCwgZSkge1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDoge1xuICAgICAgICBub3RSaWdodENsZWFyRW5hYmxlOiB0aGlzLnRyYWl0RGF0YS5ub3RSaWdodENsZWFyRW5hYmxlIHx8IGZhbHNlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXX0=