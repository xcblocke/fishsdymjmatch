"use strict";
cc._RF.push(module, '3dcdfsAOUZMjqmV/lOlOtSs', 'DGameBannerRevenue');
// Scripts/gamePlay/dot/DGameBannerRevenue.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DGameBannerRevenue = void 0;
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var UserModel_1 = require("../user/UserModel");
var DotUtil_1 = require("./DotUtil");
var DGameBannerRevenue = /** @class */ (function () {
    function DGameBannerRevenue() {
    }
    DGameBannerRevenue.dot = function () {
        var e = mj.sdk.callGetBannerRevenueSum();
        if (!(e <= 0)) {
            var t = UserModel_1.default.getInstance().getCurrentGameData(), o = {
                revenue: e,
                game_mode_name: DotUtil_1.DotUtil.getGameModeName(t.gameType),
                game_play_method: DotUtil_1.DotUtil.getGamePlayMethod(t.gameType),
                game_mode: DotUtil_1.DotUtil.getGameId(t.gameType)
            };
            EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameBannerRevenue, o);
        }
    };
    return DGameBannerRevenue;
}());
exports.DGameBannerRevenue = DGameBannerRevenue;

cc._RF.pop();