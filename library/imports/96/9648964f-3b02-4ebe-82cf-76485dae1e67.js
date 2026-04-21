"use strict";
cc._RF.push(module, '96489ZPOwJOvoLPdkhdrh5n', 'DGameOpen');
// Scripts/gamePlay/dot/DGameOpen.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameOpen = void 0;
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var UserModel_1 = require("../user/UserModel");
var DotUtil_1 = require("./DotUtil");
var DotGameOpen = /** @class */ (function () {
    function DotGameOpen() {
    }
    DotGameOpen.isCheckCanDot = function () {
        if (this._isCanDot)
            return false;
        this._isCanDot = true;
        return true;
    };
    DotGameOpen.dot = function () {
        var e = UserModel_1.default.getInstance(), t = e.isFirstOpen, o = e.getCurrentGameType(), l = {
            is_first_open: t ? 1 : 0,
            game_play_method: DotUtil_1.DotUtil.getGamePlayMethod(o),
            game_mode: DotUtil_1.DotUtil.getGameId(o),
            game_mode_name: DotUtil_1.DotUtil.getGameModeName(o)
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameOpen, l);
    };
    DotGameOpen._isCanDot = false;
    return DotGameOpen;
}());
exports.DotGameOpen = DotGameOpen;

cc._RF.pop();