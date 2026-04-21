"use strict";
cc._RF.push(module, '51c19HLY0VBGaFDHxb22Fhj', 'DChampaignStart');
// Scripts/DChampaignStart.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DChampaignStart = void 0;
var EventData_1 = require("./base/event/EventData");
var EventTrackingManager_1 = require("./base/event/EventTrackingManager");
var DChampaignStart = /** @class */ (function () {
    function DChampaignStart() {
    }
    DChampaignStart.dot = function (e) {
        var t = e;
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.ChampaignStart, t);
    };
    return DChampaignStart;
}());
exports.DChampaignStart = DChampaignStart;

cc._RF.pop();