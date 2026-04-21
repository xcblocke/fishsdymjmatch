
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daxiaotravel/Scripts/DaxiaoTravelTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70ca5b+28tI35RT6Q7g7+aB', 'DaxiaoTravelTrait');
// subpackages/l_daxiaotravel/Scripts/DaxiaoTravelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DaxiaoTravelTrait = /** @class */ (function (_super) {
    __extends(DaxiaoTravelTrait, _super);
    function DaxiaoTravelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DaxiaoTravelTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DaxiaoTravelTrait.prototype.onTravelGaCtl_gTileTypes = function (t, e) {
        t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.DaxiaoCard;
        e({
            returnVal: t.beforReturnVal
        });
    };
    DaxiaoTravelTrait.prototype.onDaxiaoCardType_getCount = function (t, e) {
        e({
            returnVal: this._traitData.count || 0,
            returnType: TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    DaxiaoTravelTrait.prototype.onIptInCollectCd_cTileTypes = function (t, e) {
        var r = t.beforReturnVal || "";
        e({
            returnVal: r = r.replace(TileTypeEnum_1.ETileType.DaxiaoCard, "")
        });
    };
    DaxiaoTravelTrait.prototype.onDaxiaoCardType_cenRange = function (t, e) {
        e({
            returnVal: this._traitData.cenRange || [3, 3],
            isBreak: true
        });
    };
    DaxiaoTravelTrait.prototype.onDaxiaoCardType_cInCenter = function (t, e) {
        e({
            returnVal: this._traitData.cInCenter || false,
            isBreak: true
        });
    };
    DaxiaoTravelTrait.traitKey = "DaxiaoTravel";
    DaxiaoTravelTrait = __decorate([
        mj.trait,
        mj.class("DaxiaoTravelTrait")
    ], DaxiaoTravelTrait);
    return DaxiaoTravelTrait;
}(Trait_1.default));
exports.default = DaxiaoTravelTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RheGlhb3RyYXZlbC9TY3JpcHRzL0RheGlhb1RyYXZlbFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRkFBNkU7QUFDN0UsZ0VBQTJEO0FBRzNEO0lBQStDLHFDQUFLO0lBQXBEOztJQW9DQSxDQUFDO0lBbENDLGtDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsY0FBYyxHQUFHLEdBQUcsR0FBRyx3QkFBUyxDQUFDLFVBQVUsQ0FBQztRQUNqRSxDQUFDLENBQUM7WUFDQSxTQUFTLEVBQUUsQ0FBQyxDQUFDLGNBQWM7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHFEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUM7WUFDQSxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksQ0FBQztZQUNyQyxVQUFVLEVBQUUsdUJBQXVCLENBQUMsSUFBSTtZQUN4QyxPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCx1REFBMkIsR0FBM0IsVUFBNEIsQ0FBQyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUM7UUFDL0IsQ0FBQyxDQUFDO1lBQ0EsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLHdCQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztTQUNuRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QscURBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQztZQUNBLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0MsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsc0RBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQztZQUNBLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxLQUFLO1lBQzdDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWxDTSwwQkFBUSxHQUFHLGNBQWMsQ0FBQztJQURkLGlCQUFpQjtRQUZyQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7T0FDVCxpQkFBaUIsQ0FvQ3JDO0lBQUQsd0JBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQzhDLGVBQUssR0FvQ25EO2tCQXBDb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkRheGlhb1RyYXZlbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXhpYW9UcmF2ZWxUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEYXhpYW9UcmF2ZWxcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uVHJhdmVsR2FDdGxfZ1RpbGVUeXBlcyh0LCBlKSB7XG4gICAgdC5iZWZvclJldHVyblZhbCA9IHQuYmVmb3JSZXR1cm5WYWwgKyBcIixcIiArIEVUaWxlVHlwZS5EYXhpYW9DYXJkO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVmFsOiB0LmJlZm9yUmV0dXJuVmFsXG4gICAgfSk7XG4gIH1cbiAgb25EYXhpYW9DYXJkVHlwZV9nZXRDb3VudCh0LCBlKSB7XG4gICAgZSh7XG4gICAgICByZXR1cm5WYWw6IHRoaXMuX3RyYWl0RGF0YS5jb3VudCB8fCAwLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcCxcbiAgICAgIGlzQnJlYWs6IHRydWVcbiAgICB9KTtcbiAgfVxuICBvbklwdEluQ29sbGVjdENkX2NUaWxlVHlwZXModCwgZSkge1xuICAgIHZhciByID0gdC5iZWZvclJldHVyblZhbCB8fCBcIlwiO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVmFsOiByID0gci5yZXBsYWNlKEVUaWxlVHlwZS5EYXhpYW9DYXJkLCBcIlwiKVxuICAgIH0pO1xuICB9XG4gIG9uRGF4aWFvQ2FyZFR5cGVfY2VuUmFuZ2UodCwgZSkge1xuICAgIGUoe1xuICAgICAgcmV0dXJuVmFsOiB0aGlzLl90cmFpdERhdGEuY2VuUmFuZ2UgfHwgWzMsIDNdLFxuICAgICAgaXNCcmVhazogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIG9uRGF4aWFvQ2FyZFR5cGVfY0luQ2VudGVyKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblZhbDogdGhpcy5fdHJhaXREYXRhLmNJbkNlbnRlciB8fCBmYWxzZSxcbiAgICAgIGlzQnJlYWs6IHRydWVcbiAgICB9KTtcbiAgfVxufSJdfQ==