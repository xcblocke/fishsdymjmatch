import { LevelUtil } from '../../core/simulator/config/LevelUtil';
import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
import CardUtil from '../user/CardUtil';
import { DotUtil } from './DotUtil';
export class DotGameClick {
  @mj.traitEvent("DotGmClk_dot")
  static dot(e, t, o) {
    if (o) {
      var n = e.getTile2DotTracker();
      if (n) {
        var i = e.getGameData(),
          u = this.getDeadType(e, t, o),
          p = u.slotBarCount,
          f = u.slotBarCardIds,
          d = u.isDead,
          h = e.getGameData().getRealPlayTime() - n.lastStepTime,
          y = n.lastClickFlipCount,
          m = n.lastDragTileCount,
          v = n.errorClicksList,
          g = v.map(function (e) {
            return e[0];
          }),
          _ = v.map(function (e) {
            return e[1];
          }),
          T = [o.gridPosX, o.gridPosY, o.layer].map(function (e) {
            return LevelUtil.translatePosToChar(e);
          }).join(""),
          C = DotUtil.getLevelDataAsCardId(t, true),
          b = t.getCurBoardDimension(true),
          E = o.cardId,
          S = CardUtil.getAtlasPathAndBundleName(o.resName),
          I = S.bundleName,
          w = (S.fromAtlas, I + ":" + S.path),
          B = o.resId,
          x = DotUtil.getSpecialTiles(t, true),
          M = DotUtil.getBlockStatusPositionList(t, true),
          O = DotUtil.getPreOpPairs(t, o),
          D = O.preOpPairs,
          P = O.preOpBlocks,
          A = O.preOpCrush,
          R = p,
          N = f.join(","),
          j = DotUtil.getReleaseCardId(t, o),
          k = n.lastShuffleCount,
          L = n.lastHintCount,
          G = n.lastRevertCount,
          F = n.rearrangedBoard,
          V = n.lastHintTiles,
          U = n.revertedBoard,
          H = n.lastToolType,
          W = n.lastMagnetCount,
          z = n.magnetBoard,
          Y = n.magnetHolder,
          K = {
            game_id: i.getGameId(),
            game_type: DotUtil.getGameId(e.gameType),
            level_id: i.getCurrentLevelId(),
            step_id: n.stepId,
            op_dur_sec: h,
            pre_err_click: y,
            pre_obs_click: m,
            click_list: g,
            click_time_list: _,
            pair_coordinate: T,
            board_string: C,
            board_xyz: b,
            is_dead: d,
            block_mahjong_id: E,
            flower_theme_id: w,
            res_id: B,
            special_tiles: x,
            suit_status_position_list: M,
            pre_op_crush: A,
            pre_op_pairs: D,
            pre_op_blocks: P,
            holder_num: R,
            holder_card_id: N,
            release_card_id: j,
            rearrange_usage_count: k,
            prompt_usage_count: L,
            back_usage_count: G,
            rearranged_board: F,
            prompt_block_mahjong: V,
            back_board: U,
            last_item: H,
            xitieshi_usage_count: W,
            xitieshi_board: z,
            xitieshi_holder: Y
          };
        EventTrackingManager.getInstance().trackEvent(EventTrackingType.GameTileClick, K);
      }
    }
  }
  static getDeadType(e, t, o) {
    var n,
      r,
      a,
      l,
      s = e.getGameData(),
      c = s.slotBarIds,
      u = s.slotBarCount,
      p = [];
    try {
      for (var f = __values(c), d = f.next(); !d.done; d = f.next()) {
        var h = d.value;
        (C = t.getTileObjectByPosId(h)) && p.push(C.cardId);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        d && !d.done && (r = f.return) && r.call(f);
      } finally {
        if (n) throw n.error;
      }
    }
    if (u - c.length <= 1 && !p.includes(o.cardId)) return {
      slotBarCount: u,
      slotBarCardIds: p,
      isDead: 1
    };
    o.isValid = false;
    var y = t.aliveTiles().filter(function (e) {
        return !e.getIsInSlotBar();
      }),
      m = new Set(),
      v = true,
      g = false;
    try {
      for (var _ = __values(y), T = _.next(); !T.done; T = _.next()) {
        var C;
        if (0 === (C = T.value).isCardLock()) {
          m.add(C.cardId);
          (p.includes(C.cardId) || C.cardId === o.cardId) && (g = true);
        } else v = false;
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        T && !T.done && (l = _.return) && l.call(_);
      } finally {
        if (a) throw a.error;
      }
    }
    o.isValid = true;
    return v ? {
      slotBarCount: u,
      slotBarCardIds: p,
      isDead: 10
    } : u - p.length != 2 || p.includes(o.cardId) || g ? {
      slotBarCount: u,
      slotBarCardIds: p,
      isDead: 0
    } : {
      slotBarCount: u,
      slotBarCardIds: p,
      isDead: 11
    };
  }
}