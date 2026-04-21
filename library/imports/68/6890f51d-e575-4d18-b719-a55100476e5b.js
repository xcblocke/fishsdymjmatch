"use strict";
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