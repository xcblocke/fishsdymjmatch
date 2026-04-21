
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DAdVisit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6fd29h2aeBAnqnbhUW3C5sR', 'DAdVisit');
// Scripts/gamePlay/dot/DAdVisit.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotAdVisit = exports.EAdVisitAction = void 0;
var AdManager_1 = require("../../base/ad/AdManager");
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var UserModel_1 = require("../user/UserModel");
var DotUtil_1 = require("./DotUtil");
var DGameAdShow_1 = require("./DGameAdShow");
exports.EAdVisitAction = {
    Play: "play",
    Close: "close"
};
var DotAdVisit = /** @class */ (function () {
    function DotAdVisit() {
    }
    DotAdVisit.dot = function (e, t, o) {
        var c = UserModel_1.default.getInstance(), u = c.getCurrentGameType(), p = c.getCurrentGameData(), f = Math.floor((Date.now() - c.getAppStartTime()) / 1000), d = Math.floor((Date.now() - p.getStartGameTime()) / 1000), h = Math.floor(p.getCurrentRoundTime()), y = o ? AdManager_1.default.getInstance().checkInterAdIsReady() : AdManager_1.default.getInstance().checkVideoAdIsReady(), m = {
            ad_type: o ? DotUtil_1.DotUtil.getInterAdPoint() : DotUtil_1.DotUtil.getRewardAdPoint(),
            ad_visit_scene: e,
            ad_visit_action: t ? exports.EAdVisitAction.Play : exports.EAdVisitAction.Close,
            ad_is_ready: y ? 1 : 0,
            session_time: f,
            game_mode: DotUtil_1.DotUtil.getGameId(u),
            game_mode_name: DotUtil_1.DotUtil.getGameModeName(u),
            game_play_method: DotUtil_1.DotUtil.getGamePlayMethod(u),
            level: p.getCurrentLevelId(),
            mode_num: p.getGameCount(),
            mode_num_all: c.getTotalGames(),
            mode_winnum: p.getWinGames(),
            mode_winnum_all: c.getTotalWinGames(),
            game_time: d,
            game_time_real: h
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.AdVisit, m);
    };
    DotAdVisit.dotAdVisitRewardAD = function (t, o) {
        DotAdVisit.noAdPosition = t;
        var n = DGameAdShow_1.DGameAdShow.getAdPositionName(t);
        this.dot(n, o, false);
    };
    DotAdVisit.dotAdVisitInterAD = function (e) {
        var t = DGameAdShow_1.DGameAdShow.getAdPositionName(e);
        this.dot(t, true, true);
    };
    DotAdVisit.dotAdVisitNoAd = function (t) {
        var o = DGameAdShow_1.DGameAdShow.getAdPositionName(DotAdVisit.noAdPosition), n = DotAdVisit.noAdPosition;
        if (n == DGameAdShow_1.EAdPosition.InGameMotivation_Hint) {
            o = "无法加载广告-提示激励";
        }
        else {
            if (n == DGameAdShow_1.EAdPosition.InGameMotivation_Reshuffle) {
                o = "无法加载广告-重洗牌激励";
            }
            else {
                if (n == DGameAdShow_1.EAdPosition.InGameMotivation_Revive) {
                    o = "无法加载广告-复活激励";
                }
                else {
                    if (n == DGameAdShow_1.EAdPosition.InGameMotivation_Revive_Classic) {
                        o = "无法加载广告-复活激励-无尽";
                    }
                    else {
                        if (n == DGameAdShow_1.EAdPosition.OutGameMotivation) {
                            o = "无法加载广告-局外激励";
                        }
                        else {
                            if (n == DGameAdShow_1.EAdPosition.NoInterAdMotivation) {
                                o = "无法加载广告-免广激励";
                            }
                            else {
                                n == DGameAdShow_1.EAdPosition.InGameMotivation_GameContinue_Classic && (o = "无法加载广告-无尽-游戏继续");
                            }
                        }
                    }
                }
            }
        }
        this.dot(o, t, false);
    };
    DotAdVisit.noAdPosition = DGameAdShow_1.EAdPosition.OutGameMotivation;
    return DotAdVisit;
}());
exports.DotAdVisit = DotAdVisit;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9EQWRWaXNpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCx3REFBK0Q7QUFDL0QsOEVBQXlFO0FBQ3pFLCtDQUEwQztBQUMxQyxxQ0FBb0M7QUFDcEMsNkNBQXlEO0FBQzlDLFFBQUEsY0FBYyxHQUFHO0lBQzFCLElBQUksRUFBRSxNQUFNO0lBQ1osS0FBSyxFQUFFLE9BQU87Q0FDZixDQUFDO0FBQ0Y7SUFBQTtJQW9FQSxDQUFDO0lBbEVRLGNBQUcsR0FBVixVQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxFQUM3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLEVBQzFCLENBQUMsR0FBRyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsRUFDMUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQ3pELENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQzFELENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEVBQ3ZDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUMsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxFQUNyRyxDQUFDLEdBQUc7WUFDRixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBTyxDQUFDLGdCQUFnQixFQUFFO1lBQ25FLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxzQkFBYyxDQUFDLEtBQUs7WUFDL0QsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLFlBQVksRUFBRSxDQUFDO1lBQ2YsU0FBUyxFQUFFLGlCQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvQixjQUFjLEVBQUUsaUJBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzFDLGdCQUFnQixFQUFFLGlCQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQzlDLEtBQUssRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUU7WUFDNUIsUUFBUSxFQUFFLENBQUMsQ0FBQyxZQUFZLEVBQUU7WUFDMUIsWUFBWSxFQUFFLENBQUMsQ0FBQyxhQUFhLEVBQUU7WUFDL0IsV0FBVyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDNUIsZUFBZSxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyQyxTQUFTLEVBQUUsQ0FBQztZQUNaLGNBQWMsRUFBRSxDQUFDO1NBQ2xCLENBQUM7UUFDSiw4QkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsNkJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFDTSw2QkFBa0IsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsVUFBVSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNNLDRCQUFpQixHQUF4QixVQUF5QixDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLHlCQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTSx5QkFBYyxHQUFyQixVQUFzQixDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLHlCQUFXLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUM1RCxDQUFDLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSx5QkFBVyxDQUFDLHFCQUFxQixFQUFFO1lBQzFDLENBQUMsR0FBRyxhQUFhLENBQUM7U0FDbkI7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLHlCQUFXLENBQUMsMEJBQTBCLEVBQUU7Z0JBQy9DLENBQUMsR0FBRyxjQUFjLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUkseUJBQVcsQ0FBQyx1QkFBdUIsRUFBRTtvQkFDNUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQztpQkFDbkI7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLElBQUkseUJBQVcsQ0FBQywrQkFBK0IsRUFBRTt3QkFDcEQsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO3FCQUN0Qjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsSUFBSSx5QkFBVyxDQUFDLGlCQUFpQixFQUFFOzRCQUN0QyxDQUFDLEdBQUcsYUFBYSxDQUFDO3lCQUNuQjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsSUFBSSx5QkFBVyxDQUFDLG1CQUFtQixFQUFFO2dDQUN4QyxDQUFDLEdBQUcsYUFBYSxDQUFDOzZCQUNuQjtpQ0FBTTtnQ0FDTCxDQUFDLElBQUkseUJBQVcsQ0FBQyxxQ0FBcUMsSUFBSSxDQUFDLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDOzZCQUNsRjt5QkFDRjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQWxFTSx1QkFBWSxHQUFHLHlCQUFXLENBQUMsaUJBQWlCLENBQUM7SUFtRXRELGlCQUFDO0NBcEVELEFBb0VDLElBQUE7QUFwRVksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRNYW5hZ2VyIGZyb20gJy4uLy4uL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbmltcG9ydCB7IEV2ZW50VHJhY2tpbmdUeXBlIH0gZnJvbSAnLi4vLi4vYmFzZS9ldmVudC9FdmVudERhdGEnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uLy4uL2Jhc2UvZXZlbnQvRXZlbnRUcmFja2luZ01hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBEb3RVdGlsIH0gZnJvbSAnLi9Eb3RVdGlsJztcbmltcG9ydCB7IERHYW1lQWRTaG93LCBFQWRQb3NpdGlvbiB9IGZyb20gJy4vREdhbWVBZFNob3cnO1xuZXhwb3J0IHZhciBFQWRWaXNpdEFjdGlvbiA9IHtcbiAgUGxheTogXCJwbGF5XCIsXG4gIENsb3NlOiBcImNsb3NlXCJcbn07XG5leHBvcnQgY2xhc3MgRG90QWRWaXNpdCB7XG4gIHN0YXRpYyBub0FkUG9zaXRpb24gPSBFQWRQb3NpdGlvbi5PdXRHYW1lTW90aXZhdGlvbjtcbiAgc3RhdGljIGRvdChlLCB0LCBvKSB7XG4gICAgdmFyIGMgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIHUgPSBjLmdldEN1cnJlbnRHYW1lVHlwZSgpLFxuICAgICAgcCA9IGMuZ2V0Q3VycmVudEdhbWVEYXRhKCksXG4gICAgICBmID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIGMuZ2V0QXBwU3RhcnRUaW1lKCkpIC8gMTAwMCksXG4gICAgICBkID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIHAuZ2V0U3RhcnRHYW1lVGltZSgpKSAvIDEwMDApLFxuICAgICAgaCA9IE1hdGguZmxvb3IocC5nZXRDdXJyZW50Um91bmRUaW1lKCkpLFxuICAgICAgeSA9IG8gPyBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGVja0ludGVyQWRJc1JlYWR5KCkgOiBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGVja1ZpZGVvQWRJc1JlYWR5KCksXG4gICAgICBtID0ge1xuICAgICAgICBhZF90eXBlOiBvID8gRG90VXRpbC5nZXRJbnRlckFkUG9pbnQoKSA6IERvdFV0aWwuZ2V0UmV3YXJkQWRQb2ludCgpLFxuICAgICAgICBhZF92aXNpdF9zY2VuZTogZSxcbiAgICAgICAgYWRfdmlzaXRfYWN0aW9uOiB0ID8gRUFkVmlzaXRBY3Rpb24uUGxheSA6IEVBZFZpc2l0QWN0aW9uLkNsb3NlLFxuICAgICAgICBhZF9pc19yZWFkeTogeSA/IDEgOiAwLFxuICAgICAgICBzZXNzaW9uX3RpbWU6IGYsXG4gICAgICAgIGdhbWVfbW9kZTogRG90VXRpbC5nZXRHYW1lSWQodSksXG4gICAgICAgIGdhbWVfbW9kZV9uYW1lOiBEb3RVdGlsLmdldEdhbWVNb2RlTmFtZSh1KSxcbiAgICAgICAgZ2FtZV9wbGF5X21ldGhvZDogRG90VXRpbC5nZXRHYW1lUGxheU1ldGhvZCh1KSxcbiAgICAgICAgbGV2ZWw6IHAuZ2V0Q3VycmVudExldmVsSWQoKSxcbiAgICAgICAgbW9kZV9udW06IHAuZ2V0R2FtZUNvdW50KCksXG4gICAgICAgIG1vZGVfbnVtX2FsbDogYy5nZXRUb3RhbEdhbWVzKCksXG4gICAgICAgIG1vZGVfd2lubnVtOiBwLmdldFdpbkdhbWVzKCksXG4gICAgICAgIG1vZGVfd2lubnVtX2FsbDogYy5nZXRUb3RhbFdpbkdhbWVzKCksXG4gICAgICAgIGdhbWVfdGltZTogZCxcbiAgICAgICAgZ2FtZV90aW1lX3JlYWw6IGhcbiAgICAgIH07XG4gICAgRXZlbnRUcmFja2luZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS50cmFja0V2ZW50KEV2ZW50VHJhY2tpbmdUeXBlLkFkVmlzaXQsIG0pO1xuICB9XG4gIHN0YXRpYyBkb3RBZFZpc2l0UmV3YXJkQUQodCwgbykge1xuICAgIERvdEFkVmlzaXQubm9BZFBvc2l0aW9uID0gdDtcbiAgICB2YXIgbiA9IERHYW1lQWRTaG93LmdldEFkUG9zaXRpb25OYW1lKHQpO1xuICAgIHRoaXMuZG90KG4sIG8sIGZhbHNlKTtcbiAgfVxuICBzdGF0aWMgZG90QWRWaXNpdEludGVyQUQoZSkge1xuICAgIHZhciB0ID0gREdhbWVBZFNob3cuZ2V0QWRQb3NpdGlvbk5hbWUoZSk7XG4gICAgdGhpcy5kb3QodCwgdHJ1ZSwgdHJ1ZSk7XG4gIH1cbiAgc3RhdGljIGRvdEFkVmlzaXROb0FkKHQpIHtcbiAgICB2YXIgbyA9IERHYW1lQWRTaG93LmdldEFkUG9zaXRpb25OYW1lKERvdEFkVmlzaXQubm9BZFBvc2l0aW9uKSxcbiAgICAgIG4gPSBEb3RBZFZpc2l0Lm5vQWRQb3NpdGlvbjtcbiAgICBpZiAobiA9PSBFQWRQb3NpdGlvbi5JbkdhbWVNb3RpdmF0aW9uX0hpbnQpIHtcbiAgICAgIG8gPSBcIuaXoOazleWKoOi9veW5v+WRii3mj5DnpLrmv4DlirFcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG4gPT0gRUFkUG9zaXRpb24uSW5HYW1lTW90aXZhdGlvbl9SZXNodWZmbGUpIHtcbiAgICAgICAgbyA9IFwi5peg5rOV5Yqg6L295bm/5ZGKLemHjea0l+eJjOa/gOWKsVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG4gPT0gRUFkUG9zaXRpb24uSW5HYW1lTW90aXZhdGlvbl9SZXZpdmUpIHtcbiAgICAgICAgICBvID0gXCLml6Dms5XliqDovb3lub/lkYot5aSN5rS75r+A5YqxXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG4gPT0gRUFkUG9zaXRpb24uSW5HYW1lTW90aXZhdGlvbl9SZXZpdmVfQ2xhc3NpYykge1xuICAgICAgICAgICAgbyA9IFwi5peg5rOV5Yqg6L295bm/5ZGKLeWkjea0u+a/gOWKsS3ml6DlsL1cIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG4gPT0gRUFkUG9zaXRpb24uT3V0R2FtZU1vdGl2YXRpb24pIHtcbiAgICAgICAgICAgICAgbyA9IFwi5peg5rOV5Yqg6L295bm/5ZGKLeWxgOWklua/gOWKsVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKG4gPT0gRUFkUG9zaXRpb24uTm9JbnRlckFkTW90aXZhdGlvbikge1xuICAgICAgICAgICAgICAgIG8gPSBcIuaXoOazleWKoOi9veW5v+WRii3lhY3lub/mv4DlirFcIjtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuID09IEVBZFBvc2l0aW9uLkluR2FtZU1vdGl2YXRpb25fR2FtZUNvbnRpbnVlX0NsYXNzaWMgJiYgKG8gPSBcIuaXoOazleWKoOi9veW5v+WRii3ml6DlsL0t5ri45oiP57un57utXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZG90KG8sIHQsIGZhbHNlKTtcbiAgfVxufSJdfQ==