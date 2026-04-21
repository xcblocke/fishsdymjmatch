"use strict";
cc._RF.push(module, '51600sBUohJk4ikrqwDlFF4', 'EventTrackingManager');
// Scripts/base/event/EventTrackingManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SingletonFactory_1 = require("../../framework/utils/SingletonFactory");
var EventTrackingManager = /** @class */ (function () {
    function EventTrackingManager() {
    }
    EventTrackingManager.getInstance = function () {
        return SingletonFactory_1.SingletonFactory.getInstance(this);
    };
    EventTrackingManager.prototype.trackEvent = function (e, t, o, n) {
        mj.sdk.report(e, t, o, n);
    };
    return EventTrackingManager;
}());
exports.default = EventTrackingManager;

cc._RF.pop();