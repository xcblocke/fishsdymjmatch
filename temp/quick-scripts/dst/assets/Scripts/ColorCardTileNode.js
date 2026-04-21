
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ColorCardTileNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83e8aZU7XVDkLmgPjqsX9QR', 'ColorCardTileNode');
// Scripts/ColorCardTileNode.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorCardTileNode = void 0;
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var TileNodeObject_1 = require("./TileNodeObject");
var ColorCardTileNode = /** @class */ (function (_super) {
    __extends(ColorCardTileNode, _super);
    function ColorCardTileNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initType = TileTypeEnum_1.ETileNodeShowType.ColorCard;
        return _this;
    }
    ColorCardTileNode.prototype.updateImgCardBg = function () {
        var e = CardUtil_1.default.getAtlasPathAndBundleName("journey_special_mj_green", this), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this.imgCardBg, t, n, false, o);
    };
    return ColorCardTileNode;
}(TileNodeObject_1.TileNodeObject));
exports.ColorCardTileNode = ColorCardTileNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NvbG9yQ2FyZFRpbGVOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXVEO0FBQ3ZELHFEQUFnRDtBQUNoRCxrRUFBc0U7QUFDdEUsbURBQWtEO0FBQ2xEO0lBQXVDLHFDQUFjO0lBQXJEO1FBQUEscUVBU0M7UUFSQyxlQUFTLEdBQUcsZ0NBQWlCLENBQUMsU0FBUyxDQUFDOztJQVExQyxDQUFDO0lBUEMsMkNBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxHQUFHLGtCQUFRLENBQUMseUJBQXlCLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLEVBQzFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsQixvQkFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDSCx3QkFBQztBQUFELENBVEEsQUFTQyxDQVRzQywrQkFBYyxHQVNwRDtBQVRZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwnO1xuaW1wb3J0IHsgRVRpbGVOb2RlU2hvd1R5cGUgfSBmcm9tICcuL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IHsgVGlsZU5vZGVPYmplY3QgfSBmcm9tICcuL1RpbGVOb2RlT2JqZWN0JztcbmV4cG9ydCBjbGFzcyBDb2xvckNhcmRUaWxlTm9kZSBleHRlbmRzIFRpbGVOb2RlT2JqZWN0IHtcbiAgX2luaXRUeXBlID0gRVRpbGVOb2RlU2hvd1R5cGUuQ29sb3JDYXJkO1xuICB1cGRhdGVJbWdDYXJkQmcoKSB7XG4gICAgdmFyIGUgPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKFwiam91cm5leV9zcGVjaWFsX21qX2dyZWVuXCIsIHRoaXMpLFxuICAgICAgdCA9IGUucGF0aCxcbiAgICAgIG8gPSBlLmJ1bmRsZU5hbWUsXG4gICAgICBuID0gZS5mcm9tQXRsYXM7XG4gICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5pbWdDYXJkQmcsIHQsIG4sIGZhbHNlLCBvKTtcbiAgfVxufSJdfQ==