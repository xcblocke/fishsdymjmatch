
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DGameAdRevenue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84b1a/7lUtCI6sJde2DnN69', 'DGameAdRevenue');
// Scripts/gamePlay/dot/DGameAdRevenue.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DGameAdRevenue = void 0;
var ExtractTool_1 = require("../../core/extractQuestion/ExtractTool");
var UserModel_1 = require("../user/UserModel");
var DGameAdShow_1 = require("./DGameAdShow");
var DotUtil_1 = require("./DotUtil");
var DGameAdRevenue = /** @class */ (function () {
    function DGameAdRevenue() {
    }
    DGameAdRevenue.recordGameAdRevenueData = function () {
        this.gameAdRevenueData = this.getGameAdRevenueData();
    };
    DGameAdRevenue.getGameAdRevenueData = function (e) {
        if (e === DGameAdShow_1.EAdPosition.FrontInsertScreen_GameNew || e === DGameAdShow_1.EAdPosition.RearInsertScreen_Success || e === DGameAdShow_1.EAdPosition.OutGameMotivation) {
            if (this.gameAdRevenueData) {
                this.gameAdRevenueData.ad_position = DGameAdShow_1.DGameAdShow.getAdPositionName(e);
                return this.gameAdRevenueData;
            }
            return null;
        }
        var t = UserModel_1.default.getInstance(), o = t.getCurrentGameData();
        if (o) {
            var n = o.gameType, c = this.getStepAndForwardStep(n), u = c.step, p = c.forwardStep, f = Math.floor((Date.now() - o.getStartGameTime()) / 1000), d = Math.floor(o.getCurrentRoundTime()), h = o.getGameCount(), y = t.getTotalGames(), m = o.getWinGames(), v = t.getTotalWinGames(), g = h > 0 ? m / h : 0, _ = y > 0 ? v / y : 0, T = o.getLast10GameRecord(), C = T.length > 0 ? T.filter(function (e) {
                return e.win;
            }).length / T.length : 0, b = Math.max.apply(Math, __spreadArrays(T.map(function (e) {
                return e.score;
            }))), E = ExtractTool_1.default.getInstance().getUserAllAbilityValue(o.getDimensionName(), n), S = o.getRealScore();
            return {
                ad_position: DGameAdShow_1.DGameAdShow.getAdPositionName(e),
                game_mode: DotUtil_1.DotUtil.getGameId(n),
                game_mode_name: DotUtil_1.DotUtil.getGameModeName(n),
                game_play_method: DotUtil_1.DotUtil.getGamePlayMethod(n),
                level: o.getCurrentLevelId(),
                puzzle_library: o.getLevelName(),
                puzzle_file: o.getLevelIndex(),
                puzzle: o.getOriginalLevelData(),
                level_skill: o.getLevelDifficulty(),
                user_skill: E[0],
                mode_num: h,
                mode_num_all: y,
                mode_winnum: m,
                mode_winnum_all: v,
                mode_last_10_win_rate: C,
                mode_win_rate: g,
                win_rate: _,
                mode_win_streak: o.getWinStreak(),
                mode_last_10_max_score: b,
                mode_max_score: o.getMaxScore(),
                max_score: t.getMaxScore(),
                game_score: S,
                game_time: f,
                game_time_real: d,
                step: u,
                forward_step: p,
                game_end_board: o.getLevelData()
            };
        }
    };
    DGameAdRevenue.getStepAndForwardStep = function (e) {
        var t = null;
        return (t = DotUtil_1.DotUtil.isTile2Game(e) ? UserModel_1.default.getInstance().getCurrentDotTracker() : UserModel_1.default.getInstance().getCurrentGameTracker()) ? {
            step: t.getStepCount(),
            forwardStep: t.getForwardStepCount()
        } : {
            step: 0,
            forwardStep: 0
        };
    };
    DGameAdRevenue.dot = function (e) {
        var t = this.getGameAdRevenueData(e);
        t && mj.sdk.callTrackGameEndRevenue(t);
    };
    DGameAdRevenue.gameAdRevenueData = null;
    return DGameAdRevenue;
}());
exports.DGameAdRevenue = DGameAdRevenue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUFkUmV2ZW51ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUFpRTtBQUNqRSwrQ0FBMEM7QUFDMUMsNkNBQXlEO0FBQ3pELHFDQUFvQztBQUNwQztJQUFBO0lBa0ZBLENBQUM7SUFoRlEsc0NBQXVCLEdBQTlCO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFDTSxtQ0FBb0IsR0FBM0IsVUFBNEIsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyx5QkFBVyxDQUFDLHlCQUF5QixJQUFJLENBQUMsS0FBSyx5QkFBVyxDQUFDLHdCQUF3QixJQUFJLENBQUMsS0FBSyx5QkFBVyxDQUFDLGlCQUFpQixFQUFFO1lBQ3BJLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxHQUFHLHlCQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO2FBQy9CO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLEVBQzdCLENBQUMsR0FBRyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQ2hCLENBQUMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQ2pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUNqQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxD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LG9DQUFxQixHQUE1QixVQUE2QixDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLE9BQU8sQ0FBQyxDQUFDLEdBQUcsaUJBQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZJLElBQUksRUFBRSxDQUFDLENBQUMsWUFBWSxFQUFFO1lBQ3RCLFdBQVcsRUFBRSxDQUFDLENBQUMsbUJBQW1CLEVBQUU7U0FDckMsQ0FBQyxDQUFDLENBQUM7WUFDRixJQUFJLEVBQUUsQ0FBQztZQUNQLFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQztJQUNKLENBQUM7SUFDTSxrQkFBRyxHQUFWLFVBQVcsQ0FBQztRQUNWLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBaEZNLGdDQUFpQixHQUFHLElBQUksQ0FBQztJQWlGbEMscUJBQUM7Q0FsRkQsQUFrRkMsSUFBQTtBQWxGWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHRyYWN0VG9vbCBmcm9tICcuLi8uLi9jb3JlL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0VG9vbCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IEVBZFBvc2l0aW9uLCBER2FtZUFkU2hvdyB9IGZyb20gJy4vREdhbWVBZFNob3cnO1xuaW1wb3J0IHsgRG90VXRpbCB9IGZyb20gJy4vRG90VXRpbCc7XG5leHBvcnQgY2xhc3MgREdhbWVBZFJldmVudWUge1xuICBzdGF0aWMgZ2FtZUFkUmV2ZW51ZURhdGEgPSBudWxsO1xuICBzdGF0aWMgcmVjb3JkR2FtZUFkUmV2ZW51ZURhdGEoKSB7XG4gICAgdGhpcy5nYW1lQWRSZXZlbnVlRGF0YSA9IHRoaXMuZ2V0R2FtZUFkUmV2ZW51ZURhdGEoKTtcbiAgfVxuICBzdGF0aWMgZ2V0R2FtZUFkUmV2ZW51ZURhdGEoZSkge1xuICAgIGlmIChlID09PSBFQWRQb3NpdGlvbi5Gcm9udEluc2VydFNjcmVlbl9HYW1lTmV3IHx8IGUgPT09IEVBZFBvc2l0aW9uLlJlYXJJbnNlcnRTY3JlZW5fU3VjY2VzcyB8fCBlID09PSBFQWRQb3NpdGlvbi5PdXRHYW1lTW90aXZhdGlvbikge1xuICAgICAgaWYgKHRoaXMuZ2FtZUFkUmV2ZW51ZURhdGEpIHtcbiAgICAgICAgdGhpcy5nYW1lQWRSZXZlbnVlRGF0YS5hZF9wb3NpdGlvbiA9IERHYW1lQWRTaG93LmdldEFkUG9zaXRpb25OYW1lKGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQWRSZXZlbnVlRGF0YTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgdCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgbyA9IHQuZ2V0Q3VycmVudEdhbWVEYXRhKCk7XG4gICAgaWYgKG8pIHtcbiAgICAgIHZhciBuID0gby5nYW1lVHlwZSxcbiAgICAgICAgYyA9IHRoaXMuZ2V0U3RlcEFuZEZvcndhcmRTdGVwKG4pLFxuICAgICAgICB1ID0gYy5zdGVwLFxuICAgICAgICBwID0gYy5mb3J3YXJkU3RlcCxcbiAgICAgICAgZiA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSBvLmdldFN0YXJ0R2FtZVRpbWUoKSkgLyAxMDAwKSxcbiAgICAgICAgZCA9IE1hdGguZmxvb3Ioby5nZXRDdXJyZW50Um91bmRUaW1lKCkpLFxuICAgICAgICBoID0gby5nZXRHYW1lQ291bnQoKSxcbiAgICAgICAgeSA9IHQuZ2V0VG90YWxHYW1lcygpLFxuICAgICAgICBtID0gby5nZXRXaW5HYW1lcygpLFxuICAgICAgICB2ID0gdC5nZXRUb3RhbFdpbkdhbWVzKCksXG4gICAgICAgIGcgPSBoID4gMCA/IG0gLyBoIDogMCxcbiAgICAgICAgXyA9IHkgPiAwID8gdiAvIHkgOiAwLFxuICAgICAgICBUID0gby5nZXRMYXN0MTBHYW1lUmVjb3JkKCksXG4gICAgICAgIEMgPSBULmxlbmd0aCA+IDAgPyBULmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlLndpbjtcbiAgICAgICAgfSkubGVuZ3RoIC8gVC5sZW5ndGggOiAwLFxuICAgICAgICBiID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgWy4uLlQubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUuc2NvcmU7XG4gICAgICAgIH0pXSksXG4gICAgICAgIEUgPSBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmdldFVzZXJBbGxBYmlsaXR5VmFsdWUoby5nZXREaW1lbnNpb25OYW1lKCksIG4pLFxuICAgICAgICBTID0gby5nZXRSZWFsU2NvcmUoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFkX3Bvc2l0aW9uOiBER2FtZUFkU2hvdy5nZXRBZFBvc2l0aW9uTmFtZShlKSxcbiAgICAgICAgZ2FtZV9tb2RlOiBEb3RVdGlsLmdldEdhbWVJZChuKSxcbiAgICAgICAgZ2FtZV9tb2RlX25hbWU6IERvdFV0aWwuZ2V0R2FtZU1vZGVOYW1lKG4pLFxuICAgICAgICBnYW1lX3BsYXlfbWV0aG9kOiBEb3RVdGlsLmdldEdhbWVQbGF5TWV0aG9kKG4pLFxuICAgICAgICBsZXZlbDogby5nZXRDdXJyZW50TGV2ZWxJZCgpLFxuICAgICAgICBwdXp6bGVfbGlicmFyeTogby5nZXRMZXZlbE5hbWUoKSxcbiAgICAgICAgcHV6emxlX2ZpbGU6IG8uZ2V0TGV2ZWxJbmRleCgpLFxuICAgICAgICBwdXp6bGU6IG8uZ2V0T3JpZ2luYWxMZXZlbERhdGEoKSxcbiAgICAgICAgbGV2ZWxfc2tpbGw6IG8uZ2V0TGV2ZWxEaWZmaWN1bHR5KCksXG4gICAgICAgIHVzZXJfc2tpbGw6IEVbMF0sXG4gICAgICAgIG1vZGVfbnVtOiBoLFxuICAgICAgICBtb2RlX251bV9hbGw6IHksXG4gICAgICAgIG1vZGVfd2lubnVtOiBtLFxuICAgICAgICBtb2RlX3dpbm51bV9hbGw6IHYsXG4gICAgICAgIG1vZGVfbGFzdF8xMF93aW5fcmF0ZTogQyxcbiAgICAgICAgbW9kZV93aW5fcmF0ZTogZyxcbiAgICAgICAgd2luX3JhdGU6IF8sXG4gICAgICAgIG1vZGVfd2luX3N0cmVhazogby5nZXRXaW5TdHJlYWsoKSxcbiAgICAgICAgbW9kZV9sYXN0XzEwX21heF9zY29yZTogYixcbiAgICAgICAgbW9kZV9tYXhfc2NvcmU6IG8uZ2V0TWF4U2NvcmUoKSxcbiAgICAgICAgbWF4X3Njb3JlOiB0LmdldE1heFNjb3JlKCksXG4gICAgICAgIGdhbWVfc2NvcmU6IFMsXG4gICAgICAgIGdhbWVfdGltZTogZixcbiAgICAgICAgZ2FtZV90aW1lX3JlYWw6IGQsXG4gICAgICAgIHN0ZXA6IHUsXG4gICAgICAgIGZvcndhcmRfc3RlcDogcCxcbiAgICAgICAgZ2FtZV9lbmRfYm9hcmQ6IG8uZ2V0TGV2ZWxEYXRhKClcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHN0YXRpYyBnZXRTdGVwQW5kRm9yd2FyZFN0ZXAoZSkge1xuICAgIHZhciB0ID0gbnVsbDtcbiAgICByZXR1cm4gKHQgPSBEb3RVdGlsLmlzVGlsZTJHYW1lKGUpID8gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudERvdFRyYWNrZXIoKSA6IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHJhY2tlcigpKSA/IHtcbiAgICAgIHN0ZXA6IHQuZ2V0U3RlcENvdW50KCksXG4gICAgICBmb3J3YXJkU3RlcDogdC5nZXRGb3J3YXJkU3RlcENvdW50KClcbiAgICB9IDoge1xuICAgICAgc3RlcDogMCxcbiAgICAgIGZvcndhcmRTdGVwOiAwXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZG90KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0R2FtZUFkUmV2ZW51ZURhdGEoZSk7XG4gICAgdCAmJiBtai5zZGsuY2FsbFRyYWNrR2FtZUVuZFJldmVudWUodCk7XG4gIH1cbn0iXX0=