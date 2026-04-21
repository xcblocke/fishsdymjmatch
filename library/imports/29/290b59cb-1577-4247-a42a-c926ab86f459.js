"use strict";
cc._RF.push(module, '290b5nLFXdCR6QqySarhvRZ', 'DGameUnlock');
// Scripts/gamePlay/dot/DGameUnlock.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameUnlock = exports.EFuncUnlockType = void 0;
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var UserModel_1 = require("../user/UserModel");
var EFuncUnlockType;
(function (EFuncUnlockType) {
    EFuncUnlockType[EFuncUnlockType["Leaderboard"] = 0] = "Leaderboard";
    EFuncUnlockType[EFuncUnlockType["Travel"] = 1] = "Travel";
    EFuncUnlockType[EFuncUnlockType["DailyChallenge"] = 2] = "DailyChallenge";
    EFuncUnlockType[EFuncUnlockType["Task"] = 3] = "Task";
    EFuncUnlockType[EFuncUnlockType["DiscardedCard"] = 4] = "DiscardedCard";
    EFuncUnlockType[EFuncUnlockType["ItemCard"] = 5] = "ItemCard";
})(EFuncUnlockType = exports.EFuncUnlockType || (exports.EFuncUnlockType = {}));
var DotGameUnlock = /** @class */ (function () {
    function DotGameUnlock() {
    }
    DotGameUnlock.getFunctionName = function (e) {
        switch (e) {
            case EFuncUnlockType.Leaderboard:
                return "排行榜";
            case EFuncUnlockType.Travel:
                return "旅行";
            case EFuncUnlockType.DailyChallenge:
                return "每日挑战";
            case EFuncUnlockType.Task:
                return "任务";
            case EFuncUnlockType.DiscardedCard:
                return "扣牌";
            case EFuncUnlockType.ItemCard:
                return "道具牌";
        }
        return "未知功能名";
    };
    DotGameUnlock.dot = function (e) {
        var t, o, l = UserModel_1.default.getInstance().isFunctionUnlocked(EFuncUnlockType.ItemCard), s = UserModel_1.default.getInstance().isFunctionUnlocked(EFuncUnlockType.DiscardedCard);
        if (!l || !s) {
            var u = e.getTileMapObject().tileObjectMap(), p = false, f = false;
            try {
                for (var d = __values(u), h = d.next(); !h.done; h = d.next()) {
                    var y = __read(h.value, 2), m = (y[0], y[1]);
                    m.checkHasType(TileTypeEnum_1.ETileType.Bomb) && (p = true);
                    m.checkHasType(TileTypeEnum_1.ETileType.RollCard) && (f = true);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    h && !h.done && (o = d.return) && o.call(d);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            !l && p && this.dotByType(EFuncUnlockType.ItemCard);
            !s && f && this.dotByType(EFuncUnlockType.DiscardedCard);
        }
    };
    DotGameUnlock.dotByType = function (e) {
        if (!UserModel_1.default.getInstance().isFunctionUnlocked(e)) {
            UserModel_1.default.getInstance().addFunctionUnlocked(e);
            var t = {
                function_name: this.getFunctionName(e)
            };
            EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.FunctionUnlock, t);
        }
    };
    return DotGameUnlock;
}());
exports.DotGameUnlock = DotGameUnlock;

cc._RF.pop();