
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/simulator/constant/TileTypeEnum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c79bcxJGtFBBryNlhgHflqd', 'TileTypeEnum');
// Scripts/simulator/constant/TileTypeEnum.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ETileComponent = exports.ETileVisible = exports.ETileNodeShowType = exports.ETileTypeBit = exports.ETileType = void 0;
exports.ETileType = {
    Normal: "Normal",
    RollCard: "RollCard",
    Bomb: "Bomb",
    Yoga: "Yoga",
    ColorCard: "ColorCard",
    RankCard: "RankCard",
    DaxiaoCard: "DaxiaoCard",
    DuoxiaoCard: "DuoxiaoCard"
};
var ETileTypeBit;
(function (ETileTypeBit) {
    ETileTypeBit[ETileTypeBit["Normal"] = 0] = "Normal";
    ETileTypeBit[ETileTypeBit["RollCard"] = 1] = "RollCard";
    ETileTypeBit[ETileTypeBit["Bomb"] = 2] = "Bomb";
    ETileTypeBit[ETileTypeBit["Yoga"] = 4] = "Yoga";
    ETileTypeBit[ETileTypeBit["ColorCard"] = 8] = "ColorCard";
    ETileTypeBit[ETileTypeBit["RankCard"] = 16] = "RankCard";
    ETileTypeBit[ETileTypeBit["DaxiaoCard"] = 32] = "DaxiaoCard";
    ETileTypeBit[ETileTypeBit["DuoxiaoCard"] = 64] = "DuoxiaoCard";
})(ETileTypeBit = exports.ETileTypeBit || (exports.ETileTypeBit = {}));
exports.ETileNodeShowType = {
    Normal: "Normal",
    RollCard: "RollCard",
    Bomb: "Bomb",
    Yoga: "Yoga",
    ColorCard: "ColorCard",
    RankCard: "RankCard",
    DaxiaoCard: "DaxiaoCard",
    DuoxiaoCard: "DuoxiaoCard"
};
var ETileVisible;
(function (ETileVisible) {
    ETileVisible[ETileVisible["None"] = 0] = "None";
    ETileVisible[ETileVisible["LeftTop"] = 1] = "LeftTop";
    ETileVisible[ETileVisible["RightTop"] = 2] = "RightTop";
    ETileVisible[ETileVisible["LeftBottom"] = 4] = "LeftBottom";
    ETileVisible[ETileVisible["RightBottom"] = 8] = "RightBottom";
    ETileVisible[ETileVisible["All"] = 15] = "All";
})(ETileVisible = exports.ETileVisible || (exports.ETileVisible = {}));
exports.ETileComponent = {
    Tile2ComponentRollCard: "Tile2ComponentRollCard",
    Tile2ComponentSlotBarAni: "Tile2ComponentSlotBarAni",
    Tile2ComponentHint: "Tile2ComponentHint",
    Tile2ComponentLockDarken: "Tile2ComponentLockDarken",
    Tile2ComponentBomb: "Tile2ComponentBomb",
    Tile2ComponentColor: "Tile2ComponentColor",
    Tile2ComponentRank: "Tile2ComponentRank",
    Tile2ComponentYoga: "Tile2ComponentYoga",
    Tile2ComponentDaxiao: "Tile2ComponentDaxiao",
    Tile2ComponentDuoxiao: "Tile2ComponentDuoxiao"
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVyxRQUFBLFNBQVMsR0FBRztJQUNyQixNQUFNLEVBQUUsUUFBUTtJQUNoQixRQUFRLEVBQUUsVUFBVTtJQUNwQixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxNQUFNO0lBQ1osU0FBUyxFQUFFLFdBQVc7SUFDdEIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsV0FBVyxFQUFFLGFBQWE7Q0FDM0IsQ0FBQztBQUNGLElBQVksWUFTWDtBQVRELFdBQVksWUFBWTtJQUN0QixtREFBVSxDQUFBO0lBQ1YsdURBQVksQ0FBQTtJQUNaLCtDQUFRLENBQUE7SUFDUiwrQ0FBUSxDQUFBO0lBQ1IseURBQWEsQ0FBQTtJQUNiLHdEQUFhLENBQUE7SUFDYiw0REFBZSxDQUFBO0lBQ2YsOERBQWdCLENBQUE7QUFDbEIsQ0FBQyxFQVRXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBU3ZCO0FBQ1UsUUFBQSxpQkFBaUIsR0FBRztJQUM3QixNQUFNLEVBQUUsUUFBUTtJQUNoQixRQUFRLEVBQUUsVUFBVTtJQUNwQixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxNQUFNO0lBQ1osU0FBUyxFQUFFLFdBQVc7SUFDdEIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsV0FBVyxFQUFFLGFBQWE7Q0FDM0IsQ0FBQztBQUNGLElBQVksWUFPWDtBQVBELFdBQVksWUFBWTtJQUN0QiwrQ0FBUSxDQUFBO0lBQ1IscURBQVcsQ0FBQTtJQUNYLHVEQUFZLENBQUE7SUFDWiwyREFBYyxDQUFBO0lBQ2QsNkRBQWUsQ0FBQTtJQUNmLDhDQUFRLENBQUE7QUFDVixDQUFDLEVBUFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFPdkI7QUFDVSxRQUFBLGNBQWMsR0FBRztJQUMxQixzQkFBc0IsRUFBRSx3QkFBd0I7SUFDaEQsd0JBQXdCLEVBQUUsMEJBQTBCO0lBQ3BELGtCQUFrQixFQUFFLG9CQUFvQjtJQUN4Qyx3QkFBd0IsRUFBRSwwQkFBMEI7SUFDcEQsa0JBQWtCLEVBQUUsb0JBQW9CO0lBQ3hDLG1CQUFtQixFQUFFLHFCQUFxQjtJQUMxQyxrQkFBa0IsRUFBRSxvQkFBb0I7SUFDeEMsa0JBQWtCLEVBQUUsb0JBQW9CO0lBQ3hDLG9CQUFvQixFQUFFLHNCQUFzQjtJQUM1QyxxQkFBcUIsRUFBRSx1QkFBdUI7Q0FDL0MsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgRVRpbGVUeXBlID0ge1xuICBOb3JtYWw6IFwiTm9ybWFsXCIsXG4gIFJvbGxDYXJkOiBcIlJvbGxDYXJkXCIsXG4gIEJvbWI6IFwiQm9tYlwiLFxuICBZb2dhOiBcIllvZ2FcIixcbiAgQ29sb3JDYXJkOiBcIkNvbG9yQ2FyZFwiLFxuICBSYW5rQ2FyZDogXCJSYW5rQ2FyZFwiLFxuICBEYXhpYW9DYXJkOiBcIkRheGlhb0NhcmRcIixcbiAgRHVveGlhb0NhcmQ6IFwiRHVveGlhb0NhcmRcIlxufTtcbmV4cG9ydCBlbnVtIEVUaWxlVHlwZUJpdCB7XG4gIE5vcm1hbCA9IDAsXG4gIFJvbGxDYXJkID0gMSxcbiAgQm9tYiA9IDIsXG4gIFlvZ2EgPSA0LFxuICBDb2xvckNhcmQgPSA4LFxuICBSYW5rQ2FyZCA9IDE2LFxuICBEYXhpYW9DYXJkID0gMzIsXG4gIER1b3hpYW9DYXJkID0gNjQsXG59XG5leHBvcnQgdmFyIEVUaWxlTm9kZVNob3dUeXBlID0ge1xuICBOb3JtYWw6IFwiTm9ybWFsXCIsXG4gIFJvbGxDYXJkOiBcIlJvbGxDYXJkXCIsXG4gIEJvbWI6IFwiQm9tYlwiLFxuICBZb2dhOiBcIllvZ2FcIixcbiAgQ29sb3JDYXJkOiBcIkNvbG9yQ2FyZFwiLFxuICBSYW5rQ2FyZDogXCJSYW5rQ2FyZFwiLFxuICBEYXhpYW9DYXJkOiBcIkRheGlhb0NhcmRcIixcbiAgRHVveGlhb0NhcmQ6IFwiRHVveGlhb0NhcmRcIlxufTtcbmV4cG9ydCBlbnVtIEVUaWxlVmlzaWJsZSB7XG4gIE5vbmUgPSAwLFxuICBMZWZ0VG9wID0gMSxcbiAgUmlnaHRUb3AgPSAyLFxuICBMZWZ0Qm90dG9tID0gNCxcbiAgUmlnaHRCb3R0b20gPSA4LFxuICBBbGwgPSAxNSxcbn1cbmV4cG9ydCB2YXIgRVRpbGVDb21wb25lbnQgPSB7XG4gIFRpbGUyQ29tcG9uZW50Um9sbENhcmQ6IFwiVGlsZTJDb21wb25lbnRSb2xsQ2FyZFwiLFxuICBUaWxlMkNvbXBvbmVudFNsb3RCYXJBbmk6IFwiVGlsZTJDb21wb25lbnRTbG90QmFyQW5pXCIsXG4gIFRpbGUyQ29tcG9uZW50SGludDogXCJUaWxlMkNvbXBvbmVudEhpbnRcIixcbiAgVGlsZTJDb21wb25lbnRMb2NrRGFya2VuOiBcIlRpbGUyQ29tcG9uZW50TG9ja0RhcmtlblwiLFxuICBUaWxlMkNvbXBvbmVudEJvbWI6IFwiVGlsZTJDb21wb25lbnRCb21iXCIsXG4gIFRpbGUyQ29tcG9uZW50Q29sb3I6IFwiVGlsZTJDb21wb25lbnRDb2xvclwiLFxuICBUaWxlMkNvbXBvbmVudFJhbms6IFwiVGlsZTJDb21wb25lbnRSYW5rXCIsXG4gIFRpbGUyQ29tcG9uZW50WW9nYTogXCJUaWxlMkNvbXBvbmVudFlvZ2FcIixcbiAgVGlsZTJDb21wb25lbnREYXhpYW86IFwiVGlsZTJDb21wb25lbnREYXhpYW9cIixcbiAgVGlsZTJDb21wb25lbnREdW94aWFvOiBcIlRpbGUyQ29tcG9uZW50RHVveGlhb1wiXG59OyJdfQ==