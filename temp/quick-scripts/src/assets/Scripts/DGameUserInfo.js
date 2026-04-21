"use strict";
cc._RF.push(module, '74110Ko6OpNraJxtg/qBNdI', 'DGameUserInfo');
// Scripts/DGameUserInfo.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameUserInfo = exports.EAvatarButtonType = void 0;
var EventData_1 = require("./base/event/EventData");
var EventTrackingManager_1 = require("./base/event/EventTrackingManager");
var EAvatarButtonType;
(function (EAvatarButtonType) {
    EAvatarButtonType[EAvatarButtonType["GoToGet"] = 1] = "GoToGet";
    EAvatarButtonType[EAvatarButtonType["Save"] = 2] = "Save";
    EAvatarButtonType[EAvatarButtonType["WaitReturn"] = 3] = "WaitReturn";
})(EAvatarButtonType = exports.EAvatarButtonType || (exports.EAvatarButtonType = {}));
var DotGameUserInfo = /** @class */ (function () {
    function DotGameUserInfo() {
    }
    DotGameUserInfo.dotAvatarActive = function (e) {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.UserInfoAvatarActive, e);
    };
    DotGameUserInfo.dotAvatarCollect = function (e) {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.UserInfoAvatarCollect, e);
    };
    DotGameUserInfo.dotClickInfoPopup = function (e) {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.UserInfoClickBtnClick, e);
    };
    return DotGameUserInfo;
}());
exports.DotGameUserInfo = DotGameUserInfo;

cc._RF.pop();