
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/DailyBadgeOpenTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca28cMt6QJJBYLSmVQZ3YXZ', 'DailyBadgeOpenTrait');
// subpackages/l_daily/Scripts/DailyBadgeOpenTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BadgeMode_1 = require("../../../Scripts/gamePlay/badge/mode/BadgeMode");
var DailyModel_1 = require("./DailyModel");
var DailyTypes_1 = require("./DailyTypes");
var DailyBadgeOpenTrait = /** @class */ (function (_super) {
    __extends(DailyBadgeOpenTrait, _super);
    function DailyBadgeOpenTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyBadgeOpenTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DailyBadgeOpenTrait.prototype.onDailyCollCtrl_getOpType = function (t, e) {
        var i = t.args[0], o = DailyTypes_1.DisplayType.Daily;
        i != BadgeMode_1.BadgeType.Journey && i != DailyTypes_1.DisplayType.Journey || (o = DailyTypes_1.DisplayType.Journey);
        DailyModel_1.default.getInstance().isOpen() || (o = DailyTypes_1.DisplayType.Journey);
        e({
            returnType: TraitCallbackReturnType.jump,
            returnVal: o
        });
    };
    DailyBadgeOpenTrait.traitKey = "DailyBadgeOpen";
    DailyBadgeOpenTrait = __decorate([
        mj.trait,
        mj.class("DailyBadgeOpenTrait")
    ], DailyBadgeOpenTrait);
    return DailyBadgeOpenTrait;
}(Trait_1.default));
exports.default = DailyBadgeOpenTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvRGFpbHlCYWRnZU9wZW5UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDRFQUEyRTtBQUMzRSwyQ0FBc0M7QUFDdEMsMkNBQTJDO0FBRzNDO0lBQWlELHVDQUFLO0lBQXREOztJQWVBLENBQUM7SUFiQyxvQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsdURBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2YsQ0FBQyxHQUFHLHdCQUFXLENBQUMsS0FBSyxDQUFDO1FBQ3hCLENBQUMsSUFBSSxxQkFBUyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksd0JBQVcsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsd0JBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRixvQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLHdCQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLElBQUk7WUFDeEMsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBYk0sNEJBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQURoQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBZXZDO0lBQUQsMEJBQUM7Q0FmRCxBQWVDLENBZmdELGVBQUssR0FlckQ7a0JBZm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBCYWRnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2JhZGdlL21vZGUvQmFkZ2VNb2RlJztcbmltcG9ydCBEYWlseU1vZGVsIGZyb20gJy4vRGFpbHlNb2RlbCc7XG5pbXBvcnQgeyBEaXNwbGF5VHlwZSB9IGZyb20gJy4vRGFpbHlUeXBlcyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkRhaWx5QmFkZ2VPcGVuVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhaWx5QmFkZ2VPcGVuVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRGFpbHlCYWRnZU9wZW5cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uRGFpbHlDb2xsQ3RybF9nZXRPcFR5cGUodCwgZSkge1xuICAgIHZhciBpID0gdC5hcmdzWzBdLFxuICAgICAgbyA9IERpc3BsYXlUeXBlLkRhaWx5O1xuICAgIGkgIT0gQmFkZ2VUeXBlLkpvdXJuZXkgJiYgaSAhPSBEaXNwbGF5VHlwZS5Kb3VybmV5IHx8IChvID0gRGlzcGxheVR5cGUuSm91cm5leSk7XG4gICAgRGFpbHlNb2RlbC5nZXRJbnN0YW5jZSgpLmlzT3BlbigpIHx8IChvID0gRGlzcGxheVR5cGUuSm91cm5leSk7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgcmV0dXJuVmFsOiBvXG4gICAgfSk7XG4gIH1cbn0iXX0=