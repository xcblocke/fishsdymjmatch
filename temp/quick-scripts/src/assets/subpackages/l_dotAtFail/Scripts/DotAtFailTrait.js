"use strict";
cc._RF.push(module, '110dbPHkVBBpaV/vK+Ep5cN', 'DotAtFailTrait');
// subpackages/l_dotAtFail/Scripts/DotAtFailTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var EventData_1 = require("../../../Scripts/base/event/EventData");
var EventTrackingManager_1 = require("../../../Scripts/base/event/EventTrackingManager");
var DotUtil_1 = require("../../../Scripts/gamePlay/dot/DotUtil");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var i;
(function (i) {
    i[i["UseShuffle"] = 0] = "UseShuffle";
    i[i["UseAdShuffle"] = 1] = "UseAdShuffle";
    i[i["Replay"] = 2] = "Replay";
})(i || (i = {}));
var DotAtFailTrait = /** @class */ (function (_super) {
    __extends(DotAtFailTrait, _super);
    function DotAtFailTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DotAtFailTrait.prototype.onFailVw_show = function (t, e) {
        var r = this.generateData();
        this.dotPopup(r);
        e();
    };
    DotAtFailTrait.prototype.onFailVw_watchAdShuffle = function (t, e) {
        var r = this.generateData(true, i.UseAdShuffle);
        this.dotClick(r);
        e();
    };
    DotAtFailTrait.prototype.onFailVw_useShuffle = function (t, e) {
        var r = this.generateData(true, i.UseShuffle);
        this.dotClick(r);
        e();
    };
    DotAtFailTrait.prototype.onFailVw_replay = function (t, e) {
        var r = this.generateData(true, i.Replay);
        this.dotClick(r);
        e();
    };
    DotAtFailTrait.prototype.generateData = function (t, e) {
        if (t === void 0) { t = false; }
        if (e === void 0) { e = i.UseShuffle; }
        var r = UserModel_1.default.getInstance(), a = r.getCurrentGameType();
        if (a === GameTypeEnums_1.MjGameType.None)
            return null;
        var o = r.getGameDataByGameType(a), n = o.getClearTileCount() / o.getTotalTileCount(), l = o.getPopupFailCnt(), s = Math.floor(o.getCurrentRoundTime()), u = o.getShuffleNums(), d = u > 0 ? 0 : 1, y = {
            game_id: o.getGameId(),
            game_type: DotUtil_1.DotUtil.getGameId(a),
            process: n,
            deadlock_cnt: l,
            level_id: o.getCurrentLevelId(),
            game_time_real: s,
            popup_type: d
        };
        t && (e === i.UseShuffle ? y.click_target = 0 : e === i.UseAdShuffle ? y.click_target = 3 : e === i.Replay && (y.click_target = u > 0 ? 1 : 2));
        return y;
    };
    DotAtFailTrait.prototype.dotPopup = function (t) {
        t && EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameDeadLockPopup, t);
    };
    DotAtFailTrait.prototype.dotClick = function (t) {
        t && EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameDeadLockClick, t);
    };
    DotAtFailTrait.traitKey = "DotAtFail";
    DotAtFailTrait = __decorate([
        mj.trait,
        mj.class("DotAtFailTrait")
    ], DotAtFailTrait);
    return DotAtFailTrait;
}(Trait_1.default));
exports.default = DotAtFailTrait;

cc._RF.pop();