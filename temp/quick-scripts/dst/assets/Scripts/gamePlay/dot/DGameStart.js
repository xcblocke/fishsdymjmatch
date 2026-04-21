
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DGameStart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZVN0YXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQWlFO0FBQ2pFLHdEQUErRDtBQUMvRCw4RUFBeUU7QUFDekUscUNBQW9DO0FBQ3BDO0lBQUE7SUE0REEsQ0FBQztJQTNEUSxnQkFBRyxHQUFWLFVBQVcsQ0FBQztRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQ25CLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUN4QixDQUFDLEdBQUcscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQzFELENBQUMsR0FBRztZQUNGLG1CQUFtQixFQUFFLENBQUM7WUFDdEIsZUFBZSxFQUFFLEVBQUU7WUFDbkIsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQixhQUFhLEVBQUUsRUFBRTtZQUNqQixjQUFjLEVBQUUsRUFBRTtZQUNsQixTQUFTLEVBQUUsaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQy9CLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLFVBQVUsRUFBRSxDQUFDO1lBQ2IsRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNqQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixFQUFFO1lBQ3RDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQ3RCLFVBQVUsRUFBRSxDQUFDLENBQUMsWUFBWSxFQUFFO1lBQzVCLFFBQVEsRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUU7WUFDL0IsZ0JBQWdCLEVBQUUsaUJBQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFD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Q0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7NkNBQ1I7SUFrQjdCLG1CQUFDO0NBNURELEFBNERDLElBQUE7QUE1RFksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFjdFRvb2wgZnJvbSAnLi4vLi4vY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdFRvb2wnO1xuaW1wb3J0IHsgRXZlbnRUcmFja2luZ1R5cGUgfSBmcm9tICcuLi8uLi9iYXNlL2V2ZW50L0V2ZW50RGF0YSc7XG5pbXBvcnQgRXZlbnRUcmFja2luZ01hbmFnZXIgZnJvbSAnLi4vLi4vYmFzZS9ldmVudC9FdmVudFRyYWNraW5nTWFuYWdlcic7XG5pbXBvcnQgeyBEb3RVdGlsIH0gZnJvbSAnLi9Eb3RVdGlsJztcbmV4cG9ydCBjbGFzcyBEb3RHYW1lU3RhcnQge1xuICBzdGF0aWMgZG90KGUpIHtcbiAgICB2YXIgdCA9IGUuZ2FtZVR5cGUsXG4gICAgICBvID0gZS5nZXRHYW1lRGF0YSgpLFxuICAgICAgbiA9IGUuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgcyA9IG8uZ2V0RGltZW5zaW9uTmFtZSgpLFxuICAgICAgYyA9IEV4dHJhY3RUb29sLmdldEluc3RhbmNlKCkuZ2V0VXNlckFsbEFiaWxpdHlWYWx1ZShzLCB0KSxcbiAgICAgIHUgPSB7XG4gICAgICAgIGZsb3dlcl90aGVtZV9hY3RpdmU6IDAsXG4gICAgICAgIGZsb3dlcl90aGVtZV9pZDogXCJcIixcbiAgICAgICAgYmFzZV90aGVtZV9hY3RpdmU6IDAsXG4gICAgICAgIGJhc2VfdGhlbWVfaWQ6IFwiXCIsXG4gICAgICAgIGJhc2VfdGhlbWVfbWFwOiBcIlwiLFxuICAgICAgICBnYW1lX3R5cGU6IERvdFV0aWwuZ2V0R2FtZUlkKHQpLFxuICAgICAgICBpbml0aWFsX2hvbGRlcjogXCJcIixcbiAgICAgICAgaG9sZGVyX251bTogMCxcbiAgICAgICAgZHQ6IG5ldyBEYXRlKCkuZm9ybWF0KFwiWVlZWW1tZGRcIiksXG4gICAgICAgIHNwZWNpYWxfdGlsZXM6IG8uZ2V0SW5pdFNwZWNpYWxDYXJkcygpLFxuICAgICAgICBnYW1lX2lkOiBvLmdldEdhbWVJZCgpLFxuICAgICAgICBnYW1lX2NvdW50OiBvLmdldEdhbWVDb3VudCgpLFxuICAgICAgICBsZXZlbF9pZDogby5nZXRDdXJyZW50TGV2ZWxJZCgpLFxuICAgICAgICBnYW1lX3BsYXlfbWV0aG9kOiBEb3RVdGlsLmdldEdhbWVQbGF5TWV0aG9kKHQpLFxuICAgICAgICBpbml0aWFsX2JvYXJkX2lkOiBvLmdldExldmVsSW5kZXgoKSxcbiAgICAgICAgaW5pdGlhbF9ib2FyZF9zdHJpbmc6IG8uZ2V0T3JpV2l0aFNwZWNpYWxDYXJkcygpIHx8IG8uZ2V0T3JpZ2luYWxMZXZlbERhdGEoKSxcbiAgICAgICAgaW5pdGlhbF9ib2FyZDogbi5nZXRDdXJCb2FyZERpbWVuc2lvbih0cnVlKSxcbiAgICAgICAgbWFoam9uZ19jbnQ6IG8uZ2V0VG90YWxUaWxlQ291bnQoKSxcbiAgICAgICAgaW5pdGlhbF9tYXRjaF9jbnQ6IG4uZ2V0Q2FuTWF0Y2hDYXJkUGFpck51bSgpLFxuICAgICAgICBtYWhqb25nX21hdGNoX2NudF9hcnJheTogRG90VXRpbC5nZXRNYWhqb25nTWF0Y2hDbnRBcnJheShlKSxcbiAgICAgICAgZGlmZmljdWx0eTogby5nZXRMZXZlbERpZmZpY3VsdHkoKSxcbiAgICAgICAgdXNlcl9za2lsbF9uZXc6IGMsXG4gICAgICAgIHNvdXJjZV9jc3Y6IG8uZ2V0TGV2ZWxOYW1lKCksXG4gICAgICAgIGluaXRpYWxfYm9hcmRfc3RydWN0dXJlOiBvLmdldE9yaWdpbmFsTGV2ZWxEYXRhV2l0aENhcmRJZCgpXG4gICAgICB9O1xuICAgIERvdFV0aWwuaXNUaWxlMkdhbWUodCkgJiYgdGhpcy5maXhUaWxlMkRhdGEodSwgZSk7XG4gICAgdGhpcy5maXhGbG93ZXJUaGVtZURhdGEodSwgZSk7XG4gICAgdGhpcy5hZGRDb21wbGV4RGF0YSh1LCBlKTtcbiAgICB0aGlzLmFkanVzdEV2ZW50RGF0YSh1LCBlKTtcbiAgICBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyYWNrRXZlbnQoRXZlbnRUcmFja2luZ1R5cGUuR2FtZVN0YXJ0LCB1KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRHYW1lU3RhcnRfYWRkQ29tcGxleFwiKVxuICBzdGF0aWMgYWRkQ29tcGxleERhdGEoKSB7fVxuICBAbWoudHJhaXRFdmVudChcIkRHYW1lU3RhcnRfYWRqdXN0XCIpXG4gIHN0YXRpYyBhZGp1c3RFdmVudERhdGEoKSB7fVxuICBzdGF0aWMgZml4VGlsZTJEYXRhKGUsIHQpIHtcbiAgICB2YXIgbyA9IHQuZ2V0R2FtZURhdGEoKS5zbG90QmFySWRzLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG87XG4gICAgICByZXR1cm4gbnVsbCA9PT0gKG8gPSB0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0QnlQb3NJZChlKSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5jYXJkSWQ7XG4gICAgfSk7XG4gICAgZS5pbml0aWFsX2hvbGRlciA9IG8uam9pbihcIixcIik7XG4gICAgZS5ob2xkZXJfbnVtID0gdC5nZXRHYW1lRGF0YSgpLnNsb3RCYXJDb3VudDtcbiAgfVxuICBzdGF0aWMgZml4Rmxvd2VyVGhlbWVEYXRhKGUsIHQpIHtcbiAgICB2YXIgbyA9IERvdFV0aWwuZ2V0Rmxvd2VyVGhlbWUodC5nYW1lVHlwZSk7XG4gICAgZS5mbG93ZXJfdGhlbWVfYWN0aXZlID0gby5hY3RpdmU7XG4gICAgZS5mbG93ZXJfdGhlbWVfaWQgPSBvLmlkO1xuICAgIHZhciBuID0gRG90VXRpbC5nZXRCYXNlVGhlbWUodC5nYW1lVHlwZSk7XG4gICAgZS5iYXNlX3RoZW1lX2FjdGl2ZSA9IG4uYWN0aXZlO1xuICAgIGUuYmFzZV90aGVtZV9tYXAgPSBuLm1hcC5qb2luKFwiLFwiKTtcbiAgICBlLmJhc2VfdGhlbWVfaWQgPSBuLmlkLnRvU3RyaW5nKCk7XG4gIH1cbn0iXX0=