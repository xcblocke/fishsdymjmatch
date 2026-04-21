
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DGameUnlock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZVVubG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUFrRTtBQUNsRSx3REFBK0Q7QUFDL0QsOEVBQXlFO0FBQ3pFLCtDQUEwQztBQUMxQyxJQUFZLGVBT1g7QUFQRCxXQUFZLGVBQWU7SUFDekIsbUVBQWUsQ0FBQTtJQUNmLHlEQUFVLENBQUE7SUFDVix5RUFBa0IsQ0FBQTtJQUNsQixxREFBUSxDQUFBO0lBQ1IsdUVBQWlCLENBQUE7SUFDakIsNkRBQVksQ0FBQTtBQUNkLENBQUMsRUFQVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQU8xQjtBQUNEO0lBQUE7SUEwREEsQ0FBQztJQXpEUSw2QkFBZSxHQUF0QixVQUF1QixDQUFDO1FBQ3RCLFFBQVEsQ0FBQyxFQUFFO1lBQ1QsS0FBSyxlQUFlLENBQUMsV0FBVztnQkFDOUIsT0FBTyxLQUFLLENBQUM7WUFDZixLQUFLLGVBQWUsQ0FBQyxNQUFNO2dCQUN6QixPQUFPLElBQUksQ0FBQztZQUNkLEtBQUssZUFBZSxDQUFDLGNBQWM7Z0JBQ2pDLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLEtBQUssZUFBZSxDQUFDLElBQUk7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxlQUFlLENBQUMsYUFBYTtnQkFDaEMsT0FBTyxJQUFJLENBQUM7WUFDZCxLQUFLLGVBQWUsQ0FBQyxRQUFRO2dCQUMzQixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFDTSxpQkFBRyxHQUFWLFVBQVcsQ0FBQztRQUNWLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQ3hFLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxFQUFFLEVBQzFDLENBQUMsR0FBRyxLQUFLLEVBQ1QsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNaLElBQUk7Z0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDN0QsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyx3QkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUM3QyxDQUFDLENBQUMsWUFBWSxDQUFDLHdCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7aUJBQ2xEO2FBQ0Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixDQUFDLEdBQUc7b0JBQ0YsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQzthQUNIO29CQUFTO2dCQUNSLElBQUk7b0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7d0JBQVM7b0JBQ1IsSUFBSSxDQUFDO3dCQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDdEI7YUFDRjtZQUNELENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDO0lBQ00sdUJBQVMsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLENBQUMsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsRCxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxHQUFHO2dCQUNOLGFBQWEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzthQUN2QyxDQUFDO1lBQ0YsOEJBQW9CLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLDZCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNwRjtJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBMURBLEFBMERDLElBQUE7QUExRFksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVGlsZVR5cGUgfSBmcm9tICcuLi8uLi9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCB7IEV2ZW50VHJhY2tpbmdUeXBlIH0gZnJvbSAnLi4vLi4vYmFzZS9ldmVudC9FdmVudERhdGEnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uLy4uL2Jhc2UvZXZlbnQvRXZlbnRUcmFja2luZ01hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi91c2VyL1VzZXJNb2RlbCc7XG5leHBvcnQgZW51bSBFRnVuY1VubG9ja1R5cGUge1xuICBMZWFkZXJib2FyZCA9IDAsXG4gIFRyYXZlbCA9IDEsXG4gIERhaWx5Q2hhbGxlbmdlID0gMixcbiAgVGFzayA9IDMsXG4gIERpc2NhcmRlZENhcmQgPSA0LFxuICBJdGVtQ2FyZCA9IDUsXG59XG5leHBvcnQgY2xhc3MgRG90R2FtZVVubG9jayB7XG4gIHN0YXRpYyBnZXRGdW5jdGlvbk5hbWUoZSkge1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBFRnVuY1VubG9ja1R5cGUuTGVhZGVyYm9hcmQ6XG4gICAgICAgIHJldHVybiBcIuaOkuihjOamnFwiO1xuICAgICAgY2FzZSBFRnVuY1VubG9ja1R5cGUuVHJhdmVsOlxuICAgICAgICByZXR1cm4gXCLml4XooYxcIjtcbiAgICAgIGNhc2UgRUZ1bmNVbmxvY2tUeXBlLkRhaWx5Q2hhbGxlbmdlOlxuICAgICAgICByZXR1cm4gXCLmr4/ml6XmjJHmiJhcIjtcbiAgICAgIGNhc2UgRUZ1bmNVbmxvY2tUeXBlLlRhc2s6XG4gICAgICAgIHJldHVybiBcIuS7u+WKoVwiO1xuICAgICAgY2FzZSBFRnVuY1VubG9ja1R5cGUuRGlzY2FyZGVkQ2FyZDpcbiAgICAgICAgcmV0dXJuIFwi5omj54mMXCI7XG4gICAgICBjYXNlIEVGdW5jVW5sb2NrVHlwZS5JdGVtQ2FyZDpcbiAgICAgICAgcmV0dXJuIFwi6YGT5YW354mMXCI7XG4gICAgfVxuICAgIHJldHVybiBcIuacquefpeWKn+iDveWQjVwiO1xuICB9XG4gIHN0YXRpYyBkb3QoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIGwgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0Z1bmN0aW9uVW5sb2NrZWQoRUZ1bmNVbmxvY2tUeXBlLkl0ZW1DYXJkKSxcbiAgICAgIHMgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0Z1bmN0aW9uVW5sb2NrZWQoRUZ1bmNVbmxvY2tUeXBlLkRpc2NhcmRlZENhcmQpO1xuICAgIGlmICghbCB8fCAhcykge1xuICAgICAgdmFyIHUgPSBlLmdldFRpbGVNYXBPYmplY3QoKS50aWxlT2JqZWN0TWFwKCksXG4gICAgICAgIHAgPSBmYWxzZSxcbiAgICAgICAgZiA9IGZhbHNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgZCA9IF9fdmFsdWVzKHUpLCBoID0gZC5uZXh0KCk7ICFoLmRvbmU7IGggPSBkLm5leHQoKSkge1xuICAgICAgICAgIHZhciB5ID0gX19yZWFkKGgudmFsdWUsIDIpLFxuICAgICAgICAgICAgbSA9ICh5WzBdLCB5WzFdKTtcbiAgICAgICAgICBtLmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuQm9tYikgJiYgKHAgPSB0cnVlKTtcbiAgICAgICAgICBtLmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuUm9sbENhcmQpICYmIChmID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBoICYmICFoLmRvbmUgJiYgKG8gPSBkLnJldHVybikgJiYgby5jYWxsKGQpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAhbCAmJiBwICYmIHRoaXMuZG90QnlUeXBlKEVGdW5jVW5sb2NrVHlwZS5JdGVtQ2FyZCk7XG4gICAgICAhcyAmJiBmICYmIHRoaXMuZG90QnlUeXBlKEVGdW5jVW5sb2NrVHlwZS5EaXNjYXJkZWRDYXJkKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGRvdEJ5VHlwZShlKSB7XG4gICAgaWYgKCFVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0Z1bmN0aW9uVW5sb2NrZWQoZSkpIHtcbiAgICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmFkZEZ1bmN0aW9uVW5sb2NrZWQoZSk7XG4gICAgICB2YXIgdCA9IHtcbiAgICAgICAgZnVuY3Rpb25fbmFtZTogdGhpcy5nZXRGdW5jdGlvbk5hbWUoZSlcbiAgICAgIH07XG4gICAgICBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyYWNrRXZlbnQoRXZlbnRUcmFja2luZ1R5cGUuRnVuY3Rpb25VbmxvY2ssIHQpO1xuICAgIH1cbiAgfVxufSJdfQ==