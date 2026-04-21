"use strict";
cc._RF.push(module, '81f8dGkR3BDrJqjo+Bl9TTq', 'DGameGetItem');
// Scripts/gamePlay/dot/DGameGetItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameGetItem = void 0;
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var DotUtil_1 = require("./DotUtil");
var DotGameGetItem = /** @class */ (function () {
    function DotGameGetItem() {
    }
    DotGameGetItem.dot = function (e, t) {
        var o = e.getGameData(), n = {
            item_id: t.itemId,
            item_name: t.itemName ? t.itemName : GameTypeEnums_1.EItemName[t.itemId],
            number: t.number,
            before_num: t.afterNum - t.number,
            after_num: t.afterNum,
            game_type: DotUtil_1.DotUtil.getGameId(o.gameType),
            game_mode: DotUtil_1.DotUtil.getGameId(o.gameType),
            game_play_method: DotUtil_1.DotUtil.getGamePlayMethod(o.gameType),
            level: o.getCurrentLevelId(),
            mode_num: o.getGameCount(),
            mode_num_all: o.userModel.getTotalGames(),
            reason_id: t.reasonId,
            reason_info: t.reasonInfo,
            get_num: 0,
            holder_num: 0,
            holder_card_id: "",
            process: 0,
            board_string: o.getLevelData()
        };
        this.fixInGameData(n, e, t);
        DotUtil_1.DotUtil.isTile2Game(o.gameType) && this.fixTile2Data(n, e, t);
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GetItem, n);
    };
    DotGameGetItem.fixInGameData = function (e, t, o) {
        if (o.reasonId === GameTypeEnums_1.EGetItemReasonId.AdReward) {
            var n = t.getGameData(), r = n.getTotalTileCount() > 0 ? n.getClearTileCount() / n.getTotalTileCount() : 0;
            e.get_num = DotUtil_1.DotUtil.getGameGotNum(t.getGameData(), o.itemId);
            e.process = r;
        }
    };
    DotGameGetItem.fixTile2Data = function (e, t, o) {
        var r, a;
        if (o.reasonId === GameTypeEnums_1.EGetItemReasonId.AdReward) {
            var l = t.getGameData(), s = t.getTileMapObject(), c = l.slotBarIds, u = [];
            try {
                for (var p = __values(c), f = p.next(); !f.done; f = p.next()) {
                    var d = f.value, h = s.getTileObjectByPosId(d);
                    h && u.push(h.cardId);
                }
            }
            catch (e) {
                r = {
                    error: e
                };
            }
            finally {
                try {
                    f && !f.done && (a = p.return) && a.call(p);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            e.holder_card_id = u.join(",");
            e.holder_num = l.slotBarCount;
        }
    };
    DotGameGetItem.dotGetItem = function (e, t) {
        var o = {
            item_id: t.itemId,
            item_name: t.itemName ? t.itemName : GameTypeEnums_1.EItemName[t.itemId],
            number: t.number,
            before_num: t.afterNum - t.number,
            after_num: t.afterNum,
            game_type: DotUtil_1.DotUtil.getGameId(e.gameType),
            game_mode: DotUtil_1.DotUtil.getGameId(e.gameType),
            game_play_method: DotUtil_1.DotUtil.getGamePlayMethod(e.gameType),
            level: e.getCurrentLevelId(),
            mode_num: e.getGameCount(),
            mode_num_all: e.userModel.getTotalGames(),
            reason_id: t.reasonId,
            reason_info: t.reasonInfo,
            get_num: 0,
            holder_num: 0,
            holder_card_id: "",
            process: 0,
            board_string: ""
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GetItem, o);
    };
    return DotGameGetItem;
}());
exports.DotGameGetItem = DotGameGetItem;

cc._RF.pop();