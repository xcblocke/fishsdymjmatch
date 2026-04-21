"use strict";
cc._RF.push(module, '30990FAp4JEm4cQtV1/23Cp', 'DFeedback');
// Scripts/DFeedback.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotFeedback = void 0;
var EventData_1 = require("./base/event/EventData");
var EventTrackingManager_1 = require("./base/event/EventTrackingManager");
var LoginModel_1 = require("./gamePlay/login/model/LoginModel");
var DotFeedback = /** @class */ (function () {
    function DotFeedback() {
    }
    DotFeedback.dot = function (e, t) {
        var o = {
            rating: e,
            language: LoginModel_1.default.getInstance().language,
            feedback: t
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.Feedback, o);
    };
    DotFeedback.dotPopupShow = function () {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.FeedbackPopupShow, {});
    };
    DotFeedback.dotPopupClose = function () {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.FeedbackPopupClose, {});
    };
    return DotFeedback;
}());
exports.DotFeedback = DotFeedback;

cc._RF.pop();