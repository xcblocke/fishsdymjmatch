
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_bomb/Scripts/BombTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50d6dkyD5lFqbU/S9M/dvpE', 'BombTrait');
// subpackages/l_bomb/Scripts/BombTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BombTrait = /** @class */ (function (_super) {
    __extends(BombTrait, _super);
    function BombTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BombTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BombTrait.prototype.onMainGameCtrl_getTile = function (t, e) {
        t.args[0].getLevelId() >= this._traitData.level && this._traitData.level > 0 && (t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.Bomb);
        e({
            returnVal: t.beforReturnVal
        });
    };
    BombTrait.traitKey = "Bomb";
    BombTrait = __decorate([
        mj.trait,
        mj.class("BombTrait")
    ], BombTrait);
    return BombTrait;
}(Trait_1.default));
exports.default = BombTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JvbWIvU2NyaXB0cy9Cb21iVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlGQUE2RTtBQUM3RSxnRUFBMkQ7QUFHM0Q7SUFBdUMsNkJBQUs7SUFBNUM7O0lBV0EsQ0FBQztJQVRDLDBCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCwwQ0FBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxjQUFjLEdBQUcsR0FBRyxHQUFHLHdCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0ksQ0FBQyxDQUFDO1lBQ0EsU0FBUyxFQUFFLENBQUMsQ0FBQyxjQUFjO1NBQzVCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFUTSxrQkFBUSxHQUFHLE1BQU0sQ0FBQztJQUROLFNBQVM7UUFGN0IsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztPQUNELFNBQVMsQ0FXN0I7SUFBRCxnQkFBQztDQVhELEFBV0MsQ0FYc0MsZUFBSyxHQVczQztrQkFYb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJCb21iVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvbWJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJCb21iXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbk1haW5HYW1lQ3RybF9nZXRUaWxlKHQsIGUpIHtcbiAgICB0LmFyZ3NbMF0uZ2V0TGV2ZWxJZCgpID49IHRoaXMuX3RyYWl0RGF0YS5sZXZlbCAmJiB0aGlzLl90cmFpdERhdGEubGV2ZWwgPiAwICYmICh0LmJlZm9yUmV0dXJuVmFsID0gdC5iZWZvclJldHVyblZhbCArIFwiLFwiICsgRVRpbGVUeXBlLkJvbWIpO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVmFsOiB0LmJlZm9yUmV0dXJuVmFsXG4gICAgfSk7XG4gIH1cbn0iXX0=