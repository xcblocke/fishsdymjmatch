"use strict";
cc._RF.push(module, 'e1f04ISRtFJtrlel+5bV2n9', 'DChampaignEnd');
// Scripts/DChampaignEnd.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DChampaignEnd = void 0;
var EventData_1 = require("./base/event/EventData");
var EventTrackingManager_1 = require("./base/event/EventTrackingManager");
var DChampaignEnd = /** @class */ (function () {
    function DChampaignEnd() {
    }
    DChampaignEnd.dot = function (e) {
        var t = e;
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.ChampaignEnd, t);
    };
    return DChampaignEnd;
}());
exports.DChampaignEnd = DChampaignEnd;

cc._RF.pop();