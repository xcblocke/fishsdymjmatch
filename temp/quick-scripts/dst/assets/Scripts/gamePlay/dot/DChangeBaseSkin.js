
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DChangeBaseSkin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00127Xn461P5YdhqCDafCSi', 'DChangeBaseSkin');
// Scripts/gamePlay/dot/DChangeBaseSkin.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotChangeBaseSkin = exports.BUNDLE_SKIN_ID_MAP = void 0;
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var UserModel_1 = require("../user/UserModel");
var DotUtil_1 = require("./DotUtil");
exports.BUNDLE_SKIN_ID_MAP = {
    l_lanCardEN: 1,
    l_lanCardFR: 2,
    l_lanCardDE: 3,
    l_lanCardPT: 4,
    l_lanCardES: 5,
    l_lanCardJP: 6,
    l_lanCardKO: 7,
    l_lanCardRU: 8,
    l_lanCardCN: 9,
    l_lanCardTW: 10
};
var DotChangeBaseSkin = /** @class */ (function () {
    function DotChangeBaseSkin() {
    }
    DotChangeBaseSkin._buildEventData = function (e) {
        var t, o, n, i, l = UserModel_1.default.getInstance(), s = l.getCurrentGameType(), c = l.getCurrentGameData();
        return {
            game_id: null !== (o = null === (t = null == c ? void 0 : c.getGameId) || void 0 === t ? void 0 : t.call(c)) && void 0 !== o ? o : "",
            game_type: DotUtil_1.DotUtil.getGameId(s),
            level_id: null !== (i = null === (n = null == c ? void 0 : c.getCurrentLevelId) || void 0 === n ? void 0 : n.call(c)) && void 0 !== i ? i : 1,
            language_skin_id: e
        };
    };
    DotChangeBaseSkin.dotPopupView = function (t) {
        var o = this.getLanguageSkinId(t);
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.g_game_language_skin_reward_popup_view, DotChangeBaseSkin._buildEventData(o));
    };
    DotChangeBaseSkin.dotPopupClick = function (t) {
        var o = this.getLanguageSkinId(t);
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.g_game_language_skin_reward_popup_click, DotChangeBaseSkin._buildEventData(o));
    };
    DotChangeBaseSkin.dotSkinUnlockSuccess = function (t) {
        var o = this.getLanguageSkinId(t);
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.g_game_language_skin_reward_unlock_success, DotChangeBaseSkin._buildEventData(o));
    };
    DotChangeBaseSkin.getLanguageSkinId = function (e) {
        var t;
        return null !== (t = exports.BUNDLE_SKIN_ID_MAP[e]) && void 0 !== t ? t : 1;
    };
    return DotChangeBaseSkin;
}());
exports.DotChangeBaseSkin = DotChangeBaseSkin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9EQ2hhbmdlQmFzZVNraW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBK0Q7QUFDL0QsOEVBQXlFO0FBQ3pFLCtDQUEwQztBQUMxQyxxQ0FBb0M7QUFDekIsUUFBQSxrQkFBa0IsR0FBRztJQUM5QixXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxXQUFXLEVBQUUsRUFBRTtDQUNoQixDQUFDO0FBQ0Y7SUFBQTtJQWdDQSxDQUFDO0lBL0JRLGlDQUFlLEdBQXRCLFVBQXVCLENBQUM7UUFDdEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLEVBQzNCLENBQUMsR0FBRyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsRUFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzdCLE9BQU87WUFDTCxPQUFPLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNySSxTQUFTLEVBQUUsaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQy9CLFFBQVEsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0ksZ0JBQWdCLEVBQUUsQ0FBQztTQUNwQixDQUFDO0lBQ0osQ0FBQztJQUNNLDhCQUFZLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLDhCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyw2QkFBaUIsQ0FBQyxzQ0FBc0MsRUFBRSxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoSixDQUFDO0lBQ00sK0JBQWEsR0FBcEIsVUFBcUIsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsOEJBQW9CLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLDZCQUFpQixDQUFDLHVDQUF1QyxFQUFFLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pKLENBQUM7SUFDTSxzQ0FBb0IsR0FBM0IsVUFBNEIsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsOEJBQW9CLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLDZCQUFpQixDQUFDLDBDQUEwQyxFQUFFLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BKLENBQUM7SUFDTSxtQ0FBaUIsR0FBeEIsVUFBeUIsQ0FBQztRQUN4QixJQUFJLENBQUMsQ0FBQztRQUNOLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLDBCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VHJhY2tpbmdUeXBlIH0gZnJvbSAnLi4vLi4vYmFzZS9ldmVudC9FdmVudERhdGEnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uLy4uL2Jhc2UvZXZlbnQvRXZlbnRUcmFja2luZ01hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBEb3RVdGlsIH0gZnJvbSAnLi9Eb3RVdGlsJztcbmV4cG9ydCB2YXIgQlVORExFX1NLSU5fSURfTUFQID0ge1xuICBsX2xhbkNhcmRFTjogMSxcbiAgbF9sYW5DYXJkRlI6IDIsXG4gIGxfbGFuQ2FyZERFOiAzLFxuICBsX2xhbkNhcmRQVDogNCxcbiAgbF9sYW5DYXJkRVM6IDUsXG4gIGxfbGFuQ2FyZEpQOiA2LFxuICBsX2xhbkNhcmRLTzogNyxcbiAgbF9sYW5DYXJkUlU6IDgsXG4gIGxfbGFuQ2FyZENOOiA5LFxuICBsX2xhbkNhcmRUVzogMTBcbn07XG5leHBvcnQgY2xhc3MgRG90Q2hhbmdlQmFzZVNraW4ge1xuICBzdGF0aWMgX2J1aWxkRXZlbnREYXRhKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIGwgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIHMgPSBsLmdldEN1cnJlbnRHYW1lVHlwZSgpLFxuICAgICAgYyA9IGwuZ2V0Q3VycmVudEdhbWVEYXRhKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdhbWVfaWQ6IG51bGwgIT09IChvID0gbnVsbCA9PT0gKHQgPSBudWxsID09IGMgPyB2b2lkIDAgOiBjLmdldEdhbWVJZCkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jYWxsKGMpKSAmJiB2b2lkIDAgIT09IG8gPyBvIDogXCJcIixcbiAgICAgIGdhbWVfdHlwZTogRG90VXRpbC5nZXRHYW1lSWQocyksXG4gICAgICBsZXZlbF9pZDogbnVsbCAhPT0gKGkgPSBudWxsID09PSAobiA9IG51bGwgPT0gYyA/IHZvaWQgMCA6IGMuZ2V0Q3VycmVudExldmVsSWQpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uY2FsbChjKSkgJiYgdm9pZCAwICE9PSBpID8gaSA6IDEsXG4gICAgICBsYW5ndWFnZV9za2luX2lkOiBlXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZG90UG9wdXBWaWV3KHQpIHtcbiAgICB2YXIgbyA9IHRoaXMuZ2V0TGFuZ3VhZ2VTa2luSWQodCk7XG4gICAgRXZlbnRUcmFja2luZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS50cmFja0V2ZW50KEV2ZW50VHJhY2tpbmdUeXBlLmdfZ2FtZV9sYW5ndWFnZV9za2luX3Jld2FyZF9wb3B1cF92aWV3LCBEb3RDaGFuZ2VCYXNlU2tpbi5fYnVpbGRFdmVudERhdGEobykpO1xuICB9XG4gIHN0YXRpYyBkb3RQb3B1cENsaWNrKHQpIHtcbiAgICB2YXIgbyA9IHRoaXMuZ2V0TGFuZ3VhZ2VTa2luSWQodCk7XG4gICAgRXZlbnRUcmFja2luZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS50cmFja0V2ZW50KEV2ZW50VHJhY2tpbmdUeXBlLmdfZ2FtZV9sYW5ndWFnZV9za2luX3Jld2FyZF9wb3B1cF9jbGljaywgRG90Q2hhbmdlQmFzZVNraW4uX2J1aWxkRXZlbnREYXRhKG8pKTtcbiAgfVxuICBzdGF0aWMgZG90U2tpblVubG9ja1N1Y2Nlc3ModCkge1xuICAgIHZhciBvID0gdGhpcy5nZXRMYW5ndWFnZVNraW5JZCh0KTtcbiAgICBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyYWNrRXZlbnQoRXZlbnRUcmFja2luZ1R5cGUuZ19nYW1lX2xhbmd1YWdlX3NraW5fcmV3YXJkX3VubG9ja19zdWNjZXNzLCBEb3RDaGFuZ2VCYXNlU2tpbi5fYnVpbGRFdmVudERhdGEobykpO1xuICB9XG4gIHN0YXRpYyBnZXRMYW5ndWFnZVNraW5JZChlKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gQlVORExFX1NLSU5fSURfTUFQW2VdKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogMTtcbiAgfVxufSJdfQ==