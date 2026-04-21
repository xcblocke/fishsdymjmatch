
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DGameGetItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUdldEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBMEY7QUFDMUYsd0RBQStEO0FBQy9ELDhFQUF5RTtBQUN6RSxxQ0FBb0M7QUFDcEM7SUFBQTtJQXNGQSxDQUFDO0lBckZRLGtCQUFHLEdBQVYsVUFBVyxDQUFDLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFDckIsQ0FBQyxHQUFHO1lBQ0YsT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNO1lBQ2pCLFNBQVMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyx5QkFBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDeEQsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNO1lBQ2hCLFVBQVUsRUFBRSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLENBQUMsUUFBUTtZQUNyQixTQUFTLEVBQUUsaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN4QyxTQUFTLEVBQUUsaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN4QyxnQkFBZ0IsRUFBRSxpQkFBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDdkQsS0FBSyxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsRUFBRTtZQUM1QixRQUFRLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRTtZQUMxQixZQUFZLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7WUFDekMsU0FBUyxFQUFFLENBQUMsQ0FBQyxRQUFRO1lBQ3JCLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVTtZQUN6QixPQUFPLEVBQUUs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aWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFSXRlbU5hbWUsIEVHZXRJdGVtUmVhc29uSWQgfSBmcm9tICcuLi8uLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEV2ZW50VHJhY2tpbmdUeXBlIH0gZnJvbSAnLi4vLi4vYmFzZS9ldmVudC9FdmVudERhdGEnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uLy4uL2Jhc2UvZXZlbnQvRXZlbnRUcmFja2luZ01hbmFnZXInO1xuaW1wb3J0IHsgRG90VXRpbCB9IGZyb20gJy4vRG90VXRpbCc7XG5leHBvcnQgY2xhc3MgRG90R2FtZUdldEl0ZW0ge1xuICBzdGF0aWMgZG90KGUsIHQpIHtcbiAgICB2YXIgbyA9IGUuZ2V0R2FtZURhdGEoKSxcbiAgICAgIG4gPSB7XG4gICAgICAgIGl0ZW1faWQ6IHQuaXRlbUlkLFxuICAgICAgICBpdGVtX25hbWU6IHQuaXRlbU5hbWUgPyB0Lml0ZW1OYW1lIDogRUl0ZW1OYW1lW3QuaXRlbUlkXSxcbiAgICAgICAgbnVtYmVyOiB0Lm51bWJlcixcbiAgICAgICAgYmVmb3JlX251bTogdC5hZnRlck51bSAtIHQubnVtYmVyLFxuICAgICAgICBhZnRlcl9udW06IHQuYWZ0ZXJOdW0sXG4gICAgICAgIGdhbWVfdHlwZTogRG90VXRpbC5nZXRHYW1lSWQoby5nYW1lVHlwZSksXG4gICAgICAgIGdhbWVfbW9kZTogRG90VXRpbC5nZXRHYW1lSWQoby5nYW1lVHlwZSksXG4gICAgICAgIGdhbWVfcGxheV9tZXRob2Q6IERvdFV0aWwuZ2V0R2FtZVBsYXlNZXRob2Qoby5nYW1lVHlwZSksXG4gICAgICAgIGxldmVsOiBvLmdldEN1cnJlbnRMZXZlbElkKCksXG4gICAgICAgIG1vZGVfbnVtOiBvLmdldEdhbWVDb3VudCgpLFxuICAgICAgICBtb2RlX251bV9hbGw6IG8udXNlck1vZGVsLmdldFRvdGFsR2FtZXMoKSxcbiAgICAgICAgcmVhc29uX2lkOiB0LnJlYXNvbklkLFxuICAgICAgICByZWFzb25faW5mbzogdC5yZWFzb25JbmZvLFxuICAgICAgICBnZXRfbnVtOiAwLFxuICAgICAgICBob2xkZXJfbnVtOiAwLFxuICAgICAgICBob2xkZXJfY2FyZF9pZDogXCJcIixcbiAgICAgICAgcHJvY2VzczogMCxcbiAgICAgICAgYm9hcmRfc3RyaW5nOiBvLmdldExldmVsRGF0YSgpXG4gICAgICB9O1xuICAgIHRoaXMuZml4SW5HYW1lRGF0YShuLCBlLCB0KTtcbiAgICBEb3RVdGlsLmlzVGlsZTJHYW1lKG8uZ2FtZVR5cGUpICYmIHRoaXMuZml4VGlsZTJEYXRhKG4sIGUsIHQpO1xuICAgIEV2ZW50VHJhY2tpbmdNYW5hZ2VyLmdldEluc3RhbmNlKCkudHJhY2tFdmVudChFdmVudFRyYWNraW5nVHlwZS5HZXRJdGVtLCBuKTtcbiAgfVxuICBzdGF0aWMgZml4SW5HYW1lRGF0YShlLCB0LCBvKSB7XG4gICAgaWYgKG8ucmVhc29uSWQgPT09IEVHZXRJdGVtUmVhc29uSWQuQWRSZXdhcmQpIHtcbiAgICAgIHZhciBuID0gdC5nZXRHYW1lRGF0YSgpLFxuICAgICAgICByID0gbi5nZXRUb3RhbFRpbGVDb3VudCgpID4gMCA/IG4uZ2V0Q2xlYXJUaWxlQ291bnQoKSAvIG4uZ2V0VG90YWxUaWxlQ291bnQoKSA6IDA7XG4gICAgICBlLmdldF9udW0gPSBEb3RVdGlsLmdldEdhbWVHb3ROdW0odC5nZXRHYW1lRGF0YSgpLCBvLml0ZW1JZCk7XG4gICAgICBlLnByb2Nlc3MgPSByO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgZml4VGlsZTJEYXRhKGUsIHQsIG8pIHtcbiAgICB2YXIgciwgYTtcbiAgICBpZiAoby5yZWFzb25JZCA9PT0gRUdldEl0ZW1SZWFzb25JZC5BZFJld2FyZCkge1xuICAgICAgdmFyIGwgPSB0LmdldEdhbWVEYXRhKCksXG4gICAgICAgIHMgPSB0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgICAgYyA9IGwuc2xvdEJhcklkcyxcbiAgICAgICAgdSA9IFtdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgcCA9IF9fdmFsdWVzKGMpLCBmID0gcC5uZXh0KCk7ICFmLmRvbmU7IGYgPSBwLm5leHQoKSkge1xuICAgICAgICAgIHZhciBkID0gZi52YWx1ZSxcbiAgICAgICAgICAgIGggPSBzLmdldFRpbGVPYmplY3RCeVBvc0lkKGQpO1xuICAgICAgICAgIGggJiYgdS5wdXNoKGguY2FyZElkKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGYgJiYgIWYuZG9uZSAmJiAoYSA9IHAucmV0dXJuKSAmJiBhLmNhbGwocCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGUuaG9sZGVyX2NhcmRfaWQgPSB1LmpvaW4oXCIsXCIpO1xuICAgICAgZS5ob2xkZXJfbnVtID0gbC5zbG90QmFyQ291bnQ7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBkb3RHZXRJdGVtKGUsIHQpIHtcbiAgICB2YXIgbyA9IHtcbiAgICAgIGl0ZW1faWQ6IHQuaXRlbUlkLFxuICAgICAgaXRlbV9uYW1lOiB0Lml0ZW1OYW1lID8gdC5pdGVtTmFtZSA6IEVJdGVtTmFtZVt0Lml0ZW1JZF0sXG4gICAgICBudW1iZXI6IHQubnVtYmVyLFxuICAgICAgYmVmb3JlX251bTogdC5hZnRlck51bSAtIHQubnVtYmVyLFxuICAgICAgYWZ0ZXJfbnVtOiB0LmFmdGVyTnVtLFxuICAgICAgZ2FtZV90eXBlOiBEb3RVdGlsLmdldEdhbWVJZChlLmdhbWVUeXBlKSxcbiAgICAgIGdhbWVfbW9kZTogRG90VXRpbC5nZXRHYW1lSWQoZS5nYW1lVHlwZSksXG4gICAgICBnYW1lX3BsYXlfbWV0aG9kOiBEb3RVdGlsLmdldEdhbWVQbGF5TWV0aG9kKGUuZ2FtZVR5cGUpLFxuICAgICAgbGV2ZWw6IGUuZ2V0Q3VycmVudExldmVsSWQoKSxcbiAgICAgIG1vZGVfbnVtOiBlLmdldEdhbWVDb3VudCgpLFxuICAgICAgbW9kZV9udW1fYWxsOiBlLnVzZXJNb2RlbC5nZXRUb3RhbEdhbWVzKCksXG4gICAgICByZWFzb25faWQ6IHQucmVhc29uSWQsXG4gICAgICByZWFzb25faW5mbzogdC5yZWFzb25JbmZvLFxuICAgICAgZ2V0X251bTogMCxcbiAgICAgIGhvbGRlcl9udW06IDAsXG4gICAgICBob2xkZXJfY2FyZF9pZDogXCJcIixcbiAgICAgIHByb2Nlc3M6IDAsXG4gICAgICBib2FyZF9zdHJpbmc6IFwiXCJcbiAgICB9O1xuICAgIEV2ZW50VHJhY2tpbmdNYW5hZ2VyLmdldEluc3RhbmNlKCkudHJhY2tFdmVudChFdmVudFRyYWNraW5nVHlwZS5HZXRJdGVtLCBvKTtcbiAgfVxufSJdfQ==