import ExtractTool from '../../core/extractQuestion/ExtractTool';
import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
import { DotUtil } from './DotUtil';
export class DotGameStart {
  static dot(e) {
    var t = e.gameType,
      o = e.getGameData(),
      n = e.getTileMapObject(),
      s = o.getDimensionName(),
      c = ExtractTool.getInstance().getUserAllAbilityValue(s, t),
      u = {
        flower_theme_active: 0,
        flower_theme_id: "",
        base_theme_active: 0,
        base_theme_id: "",
        base_theme_map: "",
        game_type: DotUtil.getGameId(t),
        initial_holder: "",
        holder_num: 0,
        dt: new Date().format("YYYYmmdd"),
        special_tiles: o.getInitSpecialCards(),
        game_id: o.getGameId(),
        game_count: o.getGameCount(),
        level_id: o.getCurrentLevelId(),
        game_play_method: DotUtil.getGamePlayMethod(t),
        initial_board_id: o.getLevelIndex(),
        initial_board_string: o.getOriWithSpecialCards() || o.getOriginalLevelData(),
        initial_board: n.getCurBoardDimension(true),
        mahjong_cnt: o.getTotalTileCount(),
        initial_match_cnt: n.getCanMatchCardPairNum(),
        mahjong_match_cnt_array: DotUtil.getMahjongMatchCntArray(e),
        difficulty: o.getLevelDifficulty(),
        user_skill_new: c,
        source_csv: o.getLevelName(),
        initial_board_structure: o.getOriginalLevelDataWithCardId()
      };
    DotUtil.isTile2Game(t) && this.fixTile2Data(u, e);
    this.fixFlowerThemeData(u, e);
    this.addComplexData(u, e);
    this.adjustEventData(u, e);
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.GameStart, u);
  }
  @mj.traitEvent("DGameStart_addComplex")
  static addComplexData() {}
  @mj.traitEvent("DGameStart_adjust")
  static adjustEventData() {}
  static fixTile2Data(e, t) {
    var o = t.getGameData().slotBarIds.map(function (e) {
      var o;
      return null === (o = t.getTileMapObject().getTileObjectByPosId(e)) || void 0 === o ? void 0 : o.cardId;
    });
    e.initial_holder = o.join(",");
    e.holder_num = t.getGameData().slotBarCount;
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
}