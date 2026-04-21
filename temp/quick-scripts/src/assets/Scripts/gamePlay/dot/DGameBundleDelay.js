"use strict";
cc._RF.push(module, 'a06533S/fJK6pOjUwGxWXLi', 'DGameBundleDelay');
// Scripts/gamePlay/dot/DGameBundleDelay.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameBundleDelay = void 0;
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var DotGameBundleDelay = /** @class */ (function () {
    function DotGameBundleDelay() {
    }
    DotGameBundleDelay.dot = function (e) {
        var t = {
            bundle_type: e
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameBundleDelay, t);
    };
    return DotGameBundleDelay;
}());
exports.DotGameBundleDelay = DotGameBundleDelay;

cc._RF.pop();