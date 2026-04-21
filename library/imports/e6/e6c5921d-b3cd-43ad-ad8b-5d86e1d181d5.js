"use strict";
cc._RF.push(module, 'e6c59Ids81Dra2LXYbh0YHV', 'DDebugInfo');
// Scripts/gamePlay/dot/DDebugInfo.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DDebugInfo = void 0;
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var DDebugInfo = /** @class */ (function () {
    function DDebugInfo() {
    }
    DDebugInfo.dot = function (e) {
        var t = {
            g_debugInfo: e
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.DebugInfo, t);
    };
    return DDebugInfo;
}());
exports.DDebugInfo = DDebugInfo;

cc._RF.pop();