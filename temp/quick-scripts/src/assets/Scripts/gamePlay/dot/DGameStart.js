"use strict";
cc._RF.push(module, '2d993qFYnBCyZ3x6ujztUg5', 'DGameStart');
// Scripts/gamePlay/dot/DGameStart.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameStart = void 0;
var ExtractTool_1 = require("../../core/extractQuestion/ExtractTool");
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var DotUtil_1 = require("./DotUtil");
var DotGameStart = /** @class */ (function () {
    function DotGameStart() {
    }
    DotGameStart.dot = function (e) {
        var t = e.gameType, o = e.getGameData(), n = e.getTileMapObject(), s = o.getDimensionName(), c = ExtractTool_1.default.getInstance().getUserAllAbilityValue(s, t), u = {
            flower_theme_active: 0,
            flower_theme_id: "",
            base_theme_active: 0,
            base_theme_id: "",
            base_theme_map: "",
            game_type: DotUtil_1.DotUtil.getGameId(t),
            initial_holder: "",
            holder_num: 0,
            dt: new Date().format("YYYYmmdd"),
            special_tiles: o.getInitSpecialCards(),
            game_id: o.getGameId(),
            game_count: o.getGameCount(),
            level_id: o.getCurrentLevelId(),
            game_play_method: DotUtil_1.DotUtil.getGamePlayMethod(t),
            initial_board_id: o.getLevelIndex(),
            initial_board_string: o.getOriWithSpecialCards() || o.getOriginalLevelData(),
            initial_board: n.getCurBoardDimension(true),
            mahjong_cnt: o.getTotalTileCount(),
            initial_match_cnt: n.getCanMatchCardPairNum(),
            mahjong_match_cnt_array: DotUtil_1.DotUtil.getMahjongMatchCntArray(e),
            difficulty: o.getLevelDifficulty(),
            user_skill_new: c,
            source_csv: o.getLevelName(),
            initial_board_structure: o.getOriginalLevelDataWithCardId()
        };
        DotUtil_1.DotUtil.isTile2Game(t) && this.fixTile2Data(u, e);
        this.fixFlowerThemeData(u, e);
        this.addComplexData(u, e);
        this.adjustEventData(u, e);
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameStart, u);
    };
    DotGameStart.addComplexData = function () { };
    DotGameStart.adjustEventData = function () { };
    DotGameStart.fixTile2Data = function (e, t) {
        var o = t.getGameData().slotBarIds.map(function (e) {
            var o;
            return null === (o = t.getTileMapObject().getTileObjectByPosId(e)) || void 0 === o ? void 0 : o.cardId;
        });
        e.initial_holder = o.join(",");
        e.holder_num = t.getGameData().slotBarCount;
    };
    DotGameStart.fixFlowerThemeData = function (e, t) {
        var o = DotUtil_1.DotUtil.getFlowerTheme(t.gameType);
        e.flower_theme_active = o.active;
        e.flower_theme_id = o.id;
        var n = DotUtil_1.DotUtil.getBaseTheme(t.gameType);
        e.base_theme_active = n.active;
        e.base_theme_map = n.map.join(",");
        e.base_theme_id = n.id.toString();
    };
    __decorate([
        mj.traitEvent("DGameStart_addComplex")
    ], DotGameStart, "addComplexData", null);
    __decorate([
        mj.traitEvent("DGameStart_adjust")
    ], DotGameStart, "adjustEventData", null);
    return DotGameStart;
}());
exports.DotGameStart = DotGameStart;

cc._RF.pop();