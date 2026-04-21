
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daxiaodaily/Scripts/DaxiaoDailyTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd2abXY/aJI7Yh7OAU9pMfp', 'DaxiaoDailyTrait');
// subpackages/l_daxiaodaily/Scripts/DaxiaoDailyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DaxiaoDailyTrait = /** @class */ (function (_super) {
    __extends(DaxiaoDailyTrait, _super);
    function DaxiaoDailyTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DaxiaoDailyTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DaxiaoDailyTrait.prototype.onDailyChCtrl_getTileTypes = function (t, r) {
        t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.DaxiaoCard;
        r({
            returnVal: t.beforReturnVal
        });
    };
    DaxiaoDailyTrait.prototype.onDaxiaoCardType_getCount = function (t, r) {
        r({
            returnVal: this._traitData.count || 0,
            returnType: TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    DaxiaoDailyTrait.prototype.onDaxiaoCardType_cenRange = function (t, r) {
        r({
            returnVal: this._traitData.cenRange || [3, 3],
            isBreak: true
        });
    };
    DaxiaoDailyTrait.prototype.onDaxiaoCardType_cInCenter = function (t, r) {
        r({
            returnVal: this._traitData.cInCenter || false,
            isBreak: true
        });
    };
    DaxiaoDailyTrait.traitKey = "DaxiaoDaily";
    DaxiaoDailyTrait = __decorate([
        mj.trait,
        mj.class("DaxiaoDailyTrait")
    ], DaxiaoDailyTrait);
    return DaxiaoDailyTrait;
}(Trait_1.default));
exports.default = DaxiaoDailyTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RheGlhb2RhaWx5L1NjcmlwdHMvRGF4aWFvRGFpbHlUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUZBQTZFO0FBQzdFLGdFQUEyRDtBQUczRDtJQUE4QyxvQ0FBSztJQUFuRDs7SUE4QkEsQ0FBQztJQTVCQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QscURBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLGNBQWMsR0FBRyxHQUFHLEdBQUcsd0JBQVMsQ0FBQyxVQUFVLENBQUM7UUFDakUsQ0FBQyxDQUFDO1lBQ0EsU0FBUyxFQUFFLENBQUMsQ0FBQyxjQUFjO1NBQzVCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxvREFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDO1lBQ0EsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUM7WUFDckMsVUFBVSxFQUFFLHVCQUF1QixDQUFDLElBQUk7WUFDeEMsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsb0RBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQztZQUNBLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0MsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QscURBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQztZQUNBLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxLQUFLO1lBQzdDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTVCTSx5QkFBUSxHQUFHLGFBQWEsQ0FBQztJQURiLGdCQUFnQjtRQUZwQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7T0FDUixnQkFBZ0IsQ0E4QnBDO0lBQUQsdUJBQUM7Q0E5QkQsQUE4QkMsQ0E5QjZDLGVBQUssR0E4QmxEO2tCQTlCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkRheGlhb0RhaWx5VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERheGlhb0RhaWx5VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRGF4aWFvRGFpbHlcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uRGFpbHlDaEN0cmxfZ2V0VGlsZVR5cGVzKHQsIHIpIHtcbiAgICB0LmJlZm9yUmV0dXJuVmFsID0gdC5iZWZvclJldHVyblZhbCArIFwiLFwiICsgRVRpbGVUeXBlLkRheGlhb0NhcmQ7XG4gICAgcih7XG4gICAgICByZXR1cm5WYWw6IHQuYmVmb3JSZXR1cm5WYWxcbiAgICB9KTtcbiAgfVxuICBvbkRheGlhb0NhcmRUeXBlX2dldENvdW50KHQsIHIpIHtcbiAgICByKHtcbiAgICAgIHJldHVyblZhbDogdGhpcy5fdHJhaXREYXRhLmNvdW50IHx8IDAsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgaXNCcmVhazogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIG9uRGF4aWFvQ2FyZFR5cGVfY2VuUmFuZ2UodCwgcikge1xuICAgIHIoe1xuICAgICAgcmV0dXJuVmFsOiB0aGlzLl90cmFpdERhdGEuY2VuUmFuZ2UgfHwgWzMsIDNdLFxuICAgICAgaXNCcmVhazogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIG9uRGF4aWFvQ2FyZFR5cGVfY0luQ2VudGVyKHQsIHIpIHtcbiAgICByKHtcbiAgICAgIHJldHVyblZhbDogdGhpcy5fdHJhaXREYXRhLmNJbkNlbnRlciB8fCBmYWxzZSxcbiAgICAgIGlzQnJlYWs6IHRydWVcbiAgICB9KTtcbiAgfVxufSJdfQ==