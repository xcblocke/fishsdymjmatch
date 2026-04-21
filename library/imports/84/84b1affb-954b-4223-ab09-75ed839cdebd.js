"use strict";
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