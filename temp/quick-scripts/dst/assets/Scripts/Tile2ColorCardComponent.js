
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2ColorCardComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb50dXIEk9PjbrUvj2i2R6x', 'Tile2ColorCardComponent');
// Scripts/Tile2ColorCardComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ColorCardComponent = void 0;
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var TileNodeComponent_1 = require("./TileNodeComponent");
var Tile2ColorCardComponent = /** @class */ (function (_super) {
    __extends(Tile2ColorCardComponent, _super);
    function Tile2ColorCardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2ColorCardComponent.prototype.onUpdateImgCardBg = function () {
        var e = CardUtil_1.default.getAtlasPathAndBundleName("journey_special_mj_green", this._host), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._host.imgCardBg, t, n, false, o);
        return true;
    };
    return Tile2ColorCardComponent;
}(TileNodeComponent_1.TileNodeComponent));
exports.Tile2ColorCardComponent = Tile2ColorCardComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyQ29sb3JDYXJkQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXVEO0FBQ3ZELHFEQUFnRDtBQUNoRCx5REFBd0Q7QUFDeEQ7SUFBNkMsMkNBQWlCO0lBQTlEOztJQVNBLENBQUM7SUFSQyxtREFBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsR0FBRyxrQkFBUSxDQUFDLHlCQUF5QixDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFDaEYsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xCLG9CQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FUQSxBQVNDLENBVDRDLHFDQUFpQixHQVM3RDtBQVRZLDBEQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwnO1xuaW1wb3J0IHsgVGlsZU5vZGVDb21wb25lbnQgfSBmcm9tICcuL1RpbGVOb2RlQ29tcG9uZW50JztcbmV4cG9ydCBjbGFzcyBUaWxlMkNvbG9yQ2FyZENvbXBvbmVudCBleHRlbmRzIFRpbGVOb2RlQ29tcG9uZW50IHtcbiAgb25VcGRhdGVJbWdDYXJkQmcoKSB7XG4gICAgdmFyIGUgPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKFwiam91cm5leV9zcGVjaWFsX21qX2dyZWVuXCIsIHRoaXMuX2hvc3QpLFxuICAgICAgdCA9IGUucGF0aCxcbiAgICAgIG8gPSBlLmJ1bmRsZU5hbWUsXG4gICAgICBuID0gZS5mcm9tQXRsYXM7XG4gICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5faG9zdC5pbWdDYXJkQmcsIHQsIG4sIGZhbHNlLCBvKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSJdfQ==