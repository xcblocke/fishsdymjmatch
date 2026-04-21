
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DGameAdShowStage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6890fUd5XVNGLcZpVEAR25b', 'DGameAdShowStage');
// Scripts/gamePlay/dot/DGameAdShowStage.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameAdShowStage = void 0;
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var DotUtil_1 = require("./DotUtil");
var DotGameAdShowStage = /** @class */ (function () {
    function DotGameAdShowStage() {
    }
    DotGameAdShowStage.dot = function (e, t, o, a, l) {
        var s = {
            ad_type: e ? DotUtil_1.DotUtil.getInterAdPoint() : DotUtil_1.DotUtil.getRewardAdPoint(),
            ad_stage: t,
            result: o || "",
            success: a || "",
            reason: l || ""
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameAdShowStage, s);
    };
    return DotGameAdShowStage;
}());
exports.DotGameAdShowStage = DotGameAdShowStage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUFkU2hvd1N0YWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQStEO0FBQy9ELDhFQUF5RTtBQUN6RSxxQ0FBb0M7QUFDcEM7SUFBQTtJQVdBLENBQUM7SUFWUSxzQkFBRyxHQUFWLFVBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUc7WUFDTixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBTyxDQUFDLGdCQUFnQixFQUFFO1lBQ25FLFFBQVEsRUFBRSxDQUFDO1lBQ1gsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQ2YsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRTtTQUNoQixDQUFDO1FBQ0YsOEJBQW9CLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLDZCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VHJhY2tpbmdUeXBlIH0gZnJvbSAnLi4vLi4vYmFzZS9ldmVudC9FdmVudERhdGEnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uLy4uL2Jhc2UvZXZlbnQvRXZlbnRUcmFja2luZ01hbmFnZXInO1xuaW1wb3J0IHsgRG90VXRpbCB9IGZyb20gJy4vRG90VXRpbCc7XG5leHBvcnQgY2xhc3MgRG90R2FtZUFkU2hvd1N0YWdlIHtcbiAgc3RhdGljIGRvdChlLCB0LCBvLCBhLCBsKSB7XG4gICAgdmFyIHMgPSB7XG4gICAgICBhZF90eXBlOiBlID8gRG90VXRpbC5nZXRJbnRlckFkUG9pbnQoKSA6IERvdFV0aWwuZ2V0UmV3YXJkQWRQb2ludCgpLFxuICAgICAgYWRfc3RhZ2U6IHQsXG4gICAgICByZXN1bHQ6IG8gfHwgXCJcIixcbiAgICAgIHN1Y2Nlc3M6IGEgfHwgXCJcIixcbiAgICAgIHJlYXNvbjogbCB8fCBcIlwiXG4gICAgfTtcbiAgICBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyYWNrRXZlbnQoRXZlbnRUcmFja2luZ1R5cGUuR2FtZUFkU2hvd1N0YWdlLCBzKTtcbiAgfVxufSJdfQ==