import ExtractTool from '../../core/extractQuestion/ExtractTool';
import UserModel from '../user/UserModel';
import { EAdPosition, DGameAdShow } from './DGameAdShow';
import { DotUtil } from './DotUtil';
export class DGameAdRevenue {
  static gameAdRevenueData = null;
  static recordGameAdRevenueData() {
    this.gameAdRevenueData = this.getGameAdRevenueData();
  }
  static getGameAdRevenueData(e) {
    if (e === EAdPosition.FrontInsertScreen_GameNew || e === EAdPosition.RearInsertScreen_Success || e === EAdPosition.OutGameMotivation) {
      if (this.gameAdRevenueData) {
        this.gameAdRevenueData.ad_position = DGameAdShow.getAdPositionName(e);
        return this.gameAdRevenueData;
      }
      return null;
    }
    var t = UserModel.getInstance(),
      o = t.getCurrentGameData();
    if (o) {
      var n = o.gameType,
        c = this.getStepAndForwardStep(n),
        u = c.step,
        p = c.forwardStep,
        f = Math.floor((Date.now() - o.getStartGameTime()) / 1000),
        d = Math.floor(o.getCurrentRoundTime()),
        h = o.getGameCount(),
        y = t.getTotalGames(),
        m = o.getWinGames(),
        v = t.getTotalWinGames(),
        g = h > 0 ? m / h : 0,
        _ = y > 0 ? v / y : 0,
        T = o.getLast10GameRecord(),
        C = T.length > 0 ? T.filter(function (e) {
          return e.win;
        }).length / T.length : 0,
        b = Math.max.apply(Math, [...T.map(function (e) {
          return e.score;
        })]),
        E = ExtractTool.getInstance().getUserAllAbilityValue(o.getDimensionName(), n),
        S = o.getRealScore();
      return {
        ad_position: DGameAdShow.getAdPositionName(e),
        game_mode: DotUtil.getGameId(n),
        game_mode_name: DotUtil.getGameModeName(n),
        game_play_method: DotUtil.getGamePlayMethod(n),
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
  }
  static getStepAndForwardStep(e) {
    var t = null;
    return (t = DotUtil.isTile2Game(e) ? UserModel.getInstance().getCurrentDotTracker() : UserModel.getInstance().getCurrentGameTracker()) ? {
      step: t.getStepCount(),
      forwardStep: t.getForwardStepCount()
    } : {
      step: 0,
      forwardStep: 0
    };
  }
  static dot(e) {
    var t = this.getGameAdRevenueData(e);
    t && mj.sdk.callTrackGameEndRevenue(t);
  }
}