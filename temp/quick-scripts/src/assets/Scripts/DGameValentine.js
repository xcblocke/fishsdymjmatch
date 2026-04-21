"use strict";
cc._RF.push(module, '53cf547eRlIe4pt3NdYffxx', 'DGameValentine');
// Scripts/DGameValentine.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameValentine = exports.EValentineClickTarget = exports.EValentineEffectSwitch = exports.EValentineStage = void 0;
var EventData_1 = require("./base/event/EventData");
var EventTrackingManager_1 = require("./base/event/EventTrackingManager");
var EValentineStage;
(function (EValentineStage) {
    EValentineStage[EValentineStage["Stage1"] = 1] = "Stage1";
    EValentineStage[EValentineStage["Stage2"] = 2] = "Stage2";
    EValentineStage[EValentineStage["Stage3"] = 3] = "Stage3";
})(EValentineStage = exports.EValentineStage || (exports.EValentineStage = {}));
exports.EValentineEffectSwitch = {
    Off: "off",
    On: "on"
};
exports.EValentineClickTarget = {
    Close: "close",
    Button: "button",
    Switch: "switch"
};
var DotGameValentine = /** @class */ (function () {
    function DotGameValentine() {
    }
    DotGameValentine.dotValentineClickIcon = function (e) {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.ValentineClickIcon, e);
    };
    DotGameValentine.dotValentineClickPopup = function (e) {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.ValentineClickPopup, e);
    };
    DotGameValentine.dotValentineViewIcon = function (e) {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.ValentineViewIcon, e);
    };
    DotGameValentine.dotValentineViewPopup = function (e) {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.ValentineViewPopup, e);
    };
    return DotGameValentine;
}());
exports.DotGameValentine = DotGameValentine;

cc._RF.pop();