
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_magnet/Scripts/Tile2MagnetPopLimitTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75df6Do6FpF9ZPRTlZuVqK7', 'Tile2MagnetPopLimitTrait');
// subpackages/l_magnet/Scripts/Tile2MagnetPopLimitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2MagnetPopLimitTrait = /** @class */ (function (_super) {
    __extends(Tile2MagnetPopLimitTrait, _super);
    function Tile2MagnetPopLimitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MagnetPopLimitTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2MagnetPopLimitTrait.prototype.isPreconMet = function () {
        return true === this.localData.isUsedRevive;
    };
    Tile2MagnetPopLimitTrait.prototype.onT2Revive_used = function (t, e) {
        this.localData.isUsedRevive || (this.localData.isUsedRevive = true);
        e();
    };
    Tile2MagnetPopLimitTrait.prototype.onTile2Magnet_preMet = function (t, e) {
        t.beforReturnVal && (t.beforReturnVal = this.isPreconMet());
        e({
            returnVal: t.beforReturnVal
        });
    };
    Tile2MagnetPopLimitTrait.prototype.onT2MagSlotStep_preMet = function (t, e) {
        t.beforReturnVal && (t.beforReturnVal = this.isPreconMet());
        e({
            returnVal: t.beforReturnVal
        });
    };
    Tile2MagnetPopLimitTrait.traitKey = "Tile2MagnetPopLimit";
    Tile2MagnetPopLimitTrait = __decorate([
        mj.trait,
        mj.class("Tile2MagnetPopLimitTrait")
    ], Tile2MagnetPopLimitTrait);
    return Tile2MagnetPopLimitTrait;
}(Trait_1.default));
exports.default = Tile2MagnetPopLimitTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hZ25ldC9TY3JpcHRzL1RpbGUyTWFnbmV0UG9wTGltaXRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQXNELDRDQUFLO0lBQTNEOztJQXdCQSxDQUFDO0lBdEJDLHlDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCw4Q0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7SUFDOUMsQ0FBQztJQUNELGtEQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNwRSxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCx1REFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDO1lBQ0EsU0FBUyxFQUFFLENBQUMsQ0FBQyxjQUFjO1NBQzVCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCx5REFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDO1lBQ0EsU0FBUyxFQUFFLENBQUMsQ0FBQyxjQUFjO1NBQzVCLENBQUMsQ0FBQztJQUNMLENBQUM7SUF0Qk0saUNBQVEsR0FBRyxxQkFBcUIsQ0FBQztJQURyQix3QkFBd0I7UUFGNUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDO09BQ2hCLHdCQUF3QixDQXdCNUM7SUFBRCwrQkFBQztDQXhCRCxBQXdCQyxDQXhCcUQsZUFBSyxHQXdCMUQ7a0JBeEJvQix3QkFBd0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUaWxlMk1hZ25ldFBvcExpbWl0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyTWFnbmV0UG9wTGltaXRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMk1hZ25ldFBvcExpbWl0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBpc1ByZWNvbk1ldCgpIHtcbiAgICByZXR1cm4gdHJ1ZSA9PT0gdGhpcy5sb2NhbERhdGEuaXNVc2VkUmV2aXZlO1xuICB9XG4gIG9uVDJSZXZpdmVfdXNlZCh0LCBlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuaXNVc2VkUmV2aXZlIHx8ICh0aGlzLmxvY2FsRGF0YS5pc1VzZWRSZXZpdmUgPSB0cnVlKTtcbiAgICBlKCk7XG4gIH1cbiAgb25UaWxlMk1hZ25ldF9wcmVNZXQodCwgZSkge1xuICAgIHQuYmVmb3JSZXR1cm5WYWwgJiYgKHQuYmVmb3JSZXR1cm5WYWwgPSB0aGlzLmlzUHJlY29uTWV0KCkpO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVmFsOiB0LmJlZm9yUmV0dXJuVmFsXG4gICAgfSk7XG4gIH1cbiAgb25UMk1hZ1Nsb3RTdGVwX3ByZU1ldCh0LCBlKSB7XG4gICAgdC5iZWZvclJldHVyblZhbCAmJiAodC5iZWZvclJldHVyblZhbCA9IHRoaXMuaXNQcmVjb25NZXQoKSk7XG4gICAgZSh7XG4gICAgICByZXR1cm5WYWw6IHQuYmVmb3JSZXR1cm5WYWxcbiAgICB9KTtcbiAgfVxufSJdfQ==