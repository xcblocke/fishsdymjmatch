"use strict";
cc._RF.push(module, 'fe5b0sMGQZMUq55QGX6enWL', 'DGameUserSetting');
// Scripts/DGameUserSetting.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameUserSetting = void 0;
var EventData_1 = require("./base/event/EventData");
var EventTrackingManager_1 = require("./base/event/EventTrackingManager");
var UserModel_1 = require("./gamePlay/user/UserModel");
var DotGameUserSetting = /** @class */ (function () {
    function DotGameUserSetting() {
    }
    DotGameUserSetting.dot = function () {
        var e = UserModel_1.default.getInstance(), t = {
            vibration: e.isVibrationEnabled() ? 1 : 0,
            sound: e.isSoundEnabled() ? 1 : 0,
            music: e.isMusicEnabled() ? 1 : 0,
            highlight_free_tiles: e.isLockHighlightEnabled() ? 1 : 0
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.UserSetting, t);
    };
    return DotGameUserSetting;
}());
exports.DotGameUserSetting = DotGameUserSetting;

cc._RF.pop();