
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DGameUseItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZVVzZUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RUFBc0U7QUFDdEUsNkVBQXdFO0FBQ3hFLHdEQUErRDtBQUMvRCw4RUFBeUU7QUFDekUscUNBQW9DO0FBQ3BDO0lBQUE7SUE2REEsQ0FBQztJQTVEUSxrQkFBRyxHQUFWLFVBQVcsQ0FBQyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLDRCQUFZLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssNEJBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNuRixDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLEVBQ3pCLENBQUMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsRUFDekIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDckIsQ0FBQyxHQUFHO1lBQ0YsT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNO1lBQ2pCLFNBQVMsRUFBRSx5QkFBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDOUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFFBQVE7WUFDaEMsVUFBVSxFQUFFLENBQUMsQ0FBQyxTQUFTO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDLENBQUMsUUFBUTtZQUNyQixTQUFTLEVBQUUsaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN4QyxTQUFTLEVBQUUsaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN4QyxnQkFBZ0IsRUFB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bGVGcm9tIH0gZnJvbSAnLi4vLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgRUl0ZW1OYW1lIH0gZnJvbSAnLi4vLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBFdmVudFRyYWNraW5nVHlwZSB9IGZyb20gJy4uLy4uL2Jhc2UvZXZlbnQvRXZlbnREYXRhJztcbmltcG9ydCBFdmVudFRyYWNraW5nTWFuYWdlciBmcm9tICcuLi8uLi9iYXNlL2V2ZW50L0V2ZW50VHJhY2tpbmdNYW5hZ2VyJztcbmltcG9ydCB7IERvdFV0aWwgfSBmcm9tICcuL0RvdFV0aWwnO1xuZXhwb3J0IGNsYXNzIERvdEdhbWVVc2VJdGVtIHtcbiAgc3RhdGljIGRvdChlLCB0KSB7XG4gICAgdmFyIG8gPSBlLmdldEdhbWVEYXRhKCksXG4gICAgICBuID0gdC5mcm9tID09PSBFU2h1ZmZsZUZyb20uQ2xhc3NpY1Jldml2ZSB8fCB0LmZyb20gPT09IEVTaHVmZmxlRnJvbS5SZXZpdmUgPyAwIDogMSxcbiAgICAgIGMgPSBvLmdldENsZWFyVGlsZUNvdW50KCksXG4gICAgICB1ID0gby5nZXRUb3RhbFRpbGVDb3VudCgpLFxuICAgICAgcCA9IHUgPiAwID8gYyAvIHUgOiAwLFxuICAgICAgZiA9IHtcbiAgICAgICAgaXRlbV9pZDogdC5pdGVtSWQsXG4gICAgICAgIGl0ZW1fbmFtZTogRUl0ZW1OYW1lW3QuaXRlbUlkXSxcbiAgICAgICAgbnVtYmVyOiB0LmJlZm9yZU51bSAtIHQuYWZ0ZXJOdW0sXG4gICAgICAgIGJlZm9yZV9udW06IHQuYmVmb3JlTnVtLFxuICAgICAgICBhZnRlcl9udW06IHQuYWZ0ZXJOdW0sXG4gICAgICAgIGdhbWVfbW9kZTogRG90VXRpbC5nZXRHYW1lSWQoby5nYW1lVHlwZSksXG4gICAgICAgIGdhbWVfdHlwZTogRG90VXRpbC5nZXRHYW1lSWQoby5nYW1lVHlwZSksXG4gICAgICAgIGdhbWVfcGxheV9tZXRob2Q6IERvdFV0aWwuZ2V0R2FtZVBsYXlNZXRob2Qoby5nYW1lVHlwZSksXG4gICAgICAgIGxldmVsOiBvLmdldEN1cnJlbnRMZXZlbElkKCksXG4gICAgICAgIG1vZGVfbnVtOiBvLmdldEdhbWVDb3VudCgpLFxuICAgICAgICBtb2RlX251bV9hbGw6IG8udXNlck1vZGVsLmdldFRvdGFsR2FtZXMoKSxcbiAgICAgICAgcmVhc29uOiBuLFxuICAgICAgICBwcm9jZXNzOiBwLFxuICAgICAgICB1c2VfbnVtOiBEb3RVdGlsLmdldEdhbWVVc2VOdW0obywgdC5pdGVtSWQpLFxuICAgICAgICBob2xkZXJfbnVtOiAwLFxuICAgICAgICBob2xkZXJfY2FyZF9pZDogXCJcIixcbiAgICAgICAgYm9hcmRfc3RyaW5nOiBvLmdldExldmVsRGF0YSgpXG4gICAgICB9O1xuICAgIERvdFV0aWwuaXNDbGFzc2ljR2FtZShlLmdhbWVUeXBlKSAmJiB0aGlzLmZpeENsYXNzaWNEYXRhKGYsIGUpO1xuICAgIERvdFV0aWwuaXNUaWxlMkdhbWUoZS5nYW1lVHlwZSkgJiYgdGhpcy5maXhUaWxlMkRhdGEoZiwgZSk7XG4gICAgRXZlbnRUcmFja2luZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS50cmFja0V2ZW50KEV2ZW50VHJhY2tpbmdUeXBlLlVzZUl0ZW0sIGYpO1xuICB9XG4gIHN0YXRpYyBmaXhUaWxlMkRhdGEoZSwgdCkge1xuICAgIHZhciBvLFxuICAgICAgaSxcbiAgICAgIHIgPSB0LmdldEdhbWVEYXRhKCksXG4gICAgICBhID0gdC5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICBsID0gci5zbG90QmFySWRzLFxuICAgICAgcyA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBjID0gX192YWx1ZXMobCksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgIHZhciBwID0gdS52YWx1ZSxcbiAgICAgICAgICBmID0gYS5nZXRUaWxlT2JqZWN0QnlQb3NJZChwKTtcbiAgICAgICAgZiAmJiBzLnB1c2goZi5jYXJkSWQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICB1ICYmICF1LmRvbmUgJiYgKGkgPSBjLnJldHVybikgJiYgaS5jYWxsKGMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGUuaG9sZGVyX2NhcmRfaWQgPSBzLmpvaW4oXCIsXCIpO1xuICAgIGUuaG9sZGVyX251bSA9IHIuc2xvdEJhckNvdW50O1xuICB9XG4gIHN0YXRpYyBmaXhDbGFzc2ljRGF0YShlLCB0KSB7XG4gICAgdmFyIG8gPSB0LmdldEdhbWVEYXRhKCk7XG4gICAgZS53YXZlID0gby5nZXRDdXJyZW50QmF0Y2hJZCgpO1xuICB9XG59Il19