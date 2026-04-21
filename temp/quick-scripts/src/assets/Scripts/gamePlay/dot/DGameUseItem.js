"use strict";
cc._RF.push(module, '78522Fk3olNJL7yRsd98P1O', 'DGameUseItem');
// Scripts/gamePlay/dot/DGameUseItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameUseItem = void 0;
var GameInputEnum_1 = require("../../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var DotUtil_1 = require("./DotUtil");
var DotGameUseItem = /** @class */ (function () {
    function DotGameUseItem() {
    }
    DotGameUseItem.dot = function (e, t) {
        var o = e.getGameData(), n = t.from === GameInputEnum_1.EShuffleFrom.ClassicRevive || t.from === GameInputEnum_1.EShuffleFrom.Revive ? 0 : 1, c = o.getClearTileCount(), u = o.getTotalTileCount(), p = u > 0 ? c / u : 0, f = {
            item_id: t.itemId,
            item_name: GameTypeEnums_1.EItemName[t.itemId],
            number: t.beforeNum - t.afterNum,
            before_num: t.beforeNum,
            after_num: t.afterNum,
            game_mode: DotUtil_1.DotUtil.getGameId(o.gameType),
            game_type: DotUtil_1.DotUtil.getGameId(o.gameType),
            game_play_method: DotUtil_1.DotUtil.getGamePlayMethod(o.gameType),
            level: o.getCurrentLevelId(),
            mode_num: o.getGameCount(),
            mode_num_all: o.userModel.getTotalGames(),
            reason: n,
            process: p,
            use_num: DotUtil_1.DotUtil.getGameUseNum(o, t.itemId),
            holder_num: 0,
            holder_card_id: "",
            board_string: o.getLevelData()
        };
        DotUtil_1.DotUtil.isClassicGame(e.gameType) && this.fixClassicData(f, e);
        DotUtil_1.DotUtil.isTile2Game(e.gameType) && this.fixTile2Data(f, e);
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.UseItem, f);
    };
    DotGameUseItem.fixTile2Data = function (e, t) {
        var o, i, r = t.getGameData(), a = t.getTileMapObject(), l = r.slotBarIds, s = [];
        try {
            for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
                var p = u.value, f = a.getTileObjectByPosId(p);
                f && s.push(f.cardId);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (i = c.return) && i.call(c);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        e.holder_card_id = s.join(",");
        e.holder_num = r.slotBarCount;
    };
    DotGameUseItem.fixClassicData = function (e, t) {
        var o = t.getGameData();
        e.wave = o.getCurrentBatchId();
    };
    return DotGameUseItem;
}());
exports.DotGameUseItem = DotGameUseItem;

cc._RF.pop();