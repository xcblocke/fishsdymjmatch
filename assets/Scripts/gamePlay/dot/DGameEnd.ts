import ExtractTool from '../../core/extractQuestion/ExtractTool';
import { EItemId, MjGameType } from '../../core/simulator/constant/GameTypeEnums';
import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
import UserModel from '../user/UserModel';
import { DotUtil } from './DotUtil';
export class DotGameEnd {
  static dot(e, t) {
    var o, n;
    if (!e.isVideo) {
      var p = e.gameType,
        f = e.getGameData(),
        d = f.getTotalTileCount(),
        h = f.getClearTileCount(),
        y = Math.floor(h / 2),
        m = f.getDimensionName(),
        v = ExtractTool.getInstance().getUserAllAbilityValue(m, p),
        g = t.win ? 1 : h / d,
        _ = [],
        T = [],
        C = [],
        b = [],
        E = [],
        S = e.getGameData().getToolUseRecords();
      try {
        for (var I = __values(S), w = I.next(); !w.done; w = I.next()) {
          var B = w.value;
          if (B[0] === EItemId.Shuffle) {
            _.push(B);
          } else {
            if (B[0] === EItemId.Revert) {
              T.push(B);
            } else {
              if (B[0] === EItemId.Hint) {
                C.push(B);
              } else {
                if (B[0] === EItemId.Revive) {
                  b.push(B);
                } else {
                  B[0] === EItemId.Magnet && E.push(B);
                }
              }
            }
          }
        }
      } catch (e) {
        o = {
          error: e
        };
      } finally {
        try {
          w && !w.done && (n = I.return) && n.call(I);
        } finally {
          if (o) throw o.error;
        }
      }
      var x = {
        special_tiles: f.getInitSpecialCards(),
        flower_theme_active: 0,
        flower_theme_id: "",
        base_theme_active: 0,
        base_theme_id: "",
        base_theme_map: "",
        end_holder: "",
        avg_holder: 0,
        game_holder_step: "",
        holder_num: 0,
        game_count: f.getGameCount(),
        game_id: f.getGameId(),
        level_id: f.getCurrentLevelId(),
        game_type: DotUtil.getGameId(p),
        game_play_method: DotUtil.getGamePlayMethod(p),
        process: g,
        is_success: t.win ? 1 : 0,
        end_combo: f.getCurMaxCombo(),
        score: Math.max(f.getScore(), f.getSettlementScore()),
        end_steps: y,
        mahjong_cnt: d,
        game_time_real: Math.floor(f.getCurrentRoundTime()),
        game_time_step: "",
        rearrange_usage_count: _.length,
        prompt_usage_count: C.length,
        back_usage_count: T.length,
        xitieshi_count: E.length,
        xitieshi_list: E.map(function (e) {
          return e[2];
        }).join(","),
        revive_list: b.map(function (e) {
          return e[2];
        }).join(","),
        rearrange_list: _.map(function (e) {
          return e[2];
        }).join(","),
        prompt_list: C.map(function (e) {
          return e[2];
        }).join(","),
        back_list: T.map(function (e) {
          return e[2];
        }).join(","),
        user_skill_new: v,
        auto_collect_tiles_type: 0,
        auto_collect_tiles_num: 0,
        source_csv: f.getLevelName(),
        initial_board_id: f.getLevelIndex(),
        initial_board_string: e.getGameData().getOriWithSpecialCards() || e.getGameData().getOriginalLevelData(),
        initial_board_structure: e.getGameData().getOriginalLevelDataWithCardId(),
        open_high_light: UserModel.getInstance().isLockHighlightEnabled() ? 1 : 0,
        real_steps: f.getNonAutoStepCount(),
        cur_ave_step_time: f.getAvgManualMatchTime(),
        cum_ave_step_time: f.getAvgManualMatchSampleValue(),
        cum_ave_step_time_sta: f.getAvgManualMatchSampleStd()
      };
      t.win || (x.end_reason = "setting" === t.from ? 1 : 0);
      DotUtil.isClassicGame(e.getGameData().gameType) && this.fixClassicData(x, e, t);
      if (DotUtil.isTile2Game(e.getGameData().gameType)) {
        this.fixTile2Data(x, e, t);
      } else {
        this.fixTile1Data(x, e, t);
      }
      this.fixFlowerThemeData(x, e, t);
      this.adjustEventData(x, e, t);
      EventTrackingManager.getInstance().trackEvent(EventTrackingType.GameEnd, x);
    }
  }
  static fixClassicData(e, t) {
    var o = t.getGameData();
    e.end_wave = o.getCurrentBatchId();
    e.game_score = o.getScore();
    e.max_score = o.getMaxScore();
  }
  static fixTile2Data(e, t) {
    var o,
      n,
      r = t.getGameData();
    e.auto_collect_tiles_type = r.getHasTriggeredAllClear() ? 1 : 0;
    e.auto_collect_tiles_num = r.getAutoCollectTilesNum();
    var a = t.getTileMapObject();
    e.holder_num = r.slotBarCount;
    var l = r.slotBarIds,
      s = [];
    try {
      for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
        var p = u.value,
          f = a.getTileObjectByPosId(p);
        f && s.push(f.cardId);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (n = c.return) && n.call(c);
      } finally {
        if (o) throw o.error;
      }
    }
    e.end_holder = s.join(",");
    var d = t.getTile2DotTracker();
    if (d) {
      e.end_steps = d.getStepCount();
      e.avg_holder = d.getAvgHolderUsageRate();
      e.game_holder_step = d.getHolderUsageRates().join(",");
      e.game_time_step = d.getStepDurationList().join(",");
    }
  }
  static fixTile1Data(e, t, o) {
    var n = t.getGameData(),
      i = n.getTotalTileCount(),
      r = n.getClearTileCount(),
      l = 0,
      s = n.getAutoCollectTilesNum();
    if (n.getHasTriggeredFullCombo()) l = 1;else if (n.getHasTriggeredRewardCombo()) l = 2;else if (n.gameType == MjGameType.Travel) {
      l = r === i ? 0 : 3;
      s = o.win ? i - r : 0;
    }
    e.auto_collect_tiles_type = l;
    e.auto_collect_tiles_num = s;
    var c = t.getGameTracker();
    c && (e.game_time_step = c.getStepDurationList().join(","));
  }
  static fixFlowerThemeData(e, t) {
    var o = DotUtil.getFlowerTheme(t.gameType);
    e.flower_theme_active = o.active;
    e.flower_theme_id = o.id;
    var n = DotUtil.getBaseTheme(t.gameType);
    e.base_theme_active = n.active;
    e.base_theme_map = n.map.join(",");
    e.base_theme_id = n.id.toString();
  }
  @mj.traitEvent("DGameEnd_adjust")
  static adjustEventData() {}
}