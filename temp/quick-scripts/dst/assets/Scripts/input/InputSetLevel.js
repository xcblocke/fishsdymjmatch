
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputSetLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3de3fDn1rZIWIb+HLUtDo7Y', 'InputSetLevel');
// Scripts/input/InputSetLevel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameOpen_1 = require("../gamePlay/dot/DGameOpen");
var DGameStart_1 = require("../gamePlay/dot/DGameStart");
var DGameUnlock_1 = require("../gamePlay/dot/DGameUnlock");
var UserModel_1 = require("../gamePlay/user/UserModel");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var InputBase_1 = require("../inputbase/InputBase");
var GameStateListener_1 = require("../process/game/GameStateListener");
var LevelGenRule_1 = require("../core/simulator/config/LevelGenRule");
var DotUtil_1 = require("../gamePlay/dot/DotUtil");
var InputSetLevel = /** @class */ (function (_super) {
    __extends(InputSetLevel, _super);
    function InputSetLevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputSetLevel.prototype.excute = function (e) {
        this.dispatchGameStateEvent(e.levelData);
        var t = UserModel_1.default.getInstance().getGameDataByGameType(e.levelData.gameType), o = UserModel_1.default.getInstance().getGameTrackerByGameType(e.levelData.gameType);
        this.gameContext.setUserData(UserModel_1.default.getInstance());
        this.gameContext.setGameTracker(o);
        this.gameContext.setGameData(t);
        this.gameContext.setIsNewGame(e.levelData.isNewGame);
        this.gameContext.setIsRestart(e.levelData.isRestart);
        if (e.levelData.isNewGame) {
            e.levelData.isRestart || this.newGameReset();
            t.resetGameData();
            t.setLevelDifficulty(e.levelData.levelDifficulty);
            t.setLevelId(e.levelData.levelId);
            t.setLevelIndex(e.levelData.levelIndex);
            t.setLevelName(e.levelData.levelName);
            t.updatePlayCount();
            t.setStartGameTime(Date.now());
            e.levelData.dimensionName && t.setDimensionName(e.levelData.dimensionName);
            e.levelData.tileTypes && t.setTileTypes(e.levelData.tileTypes);
            this.setLevelData(e.levelData);
            this.reGenerateFaceSet(e);
            mj.EventManager.emit(GameEvent_1.EGameEvent.IptSetLevel_AfterSetLevel, {
                input: e,
                inputSetLevel: this
            });
            if (e.levelData.isRestart) {
                this.gameContext.tileTypesModifier.modifyFromLocal();
            }
            else {
                this.gameContext.tileTypesModifier.modifyTileTypes(e.levelData.tileTypes);
            }
            this.reGenerateFaceSetAfter(e);
            this.tileMapObject.fixSingleCard();
            this.gameContext.getUserData().updateGameId();
            var n = this.tileMapObject.getCardsCount();
            this.gameContext.getGameData().setCurLevelComboMaxLimit(n / 2);
            t.setInitSpecialCards(DotUtil_1.DotUtil.getSpecialTiles(this.tileMapObject, true));
            this.newGameComplete();
        }
        else {
            t.resetComboNum();
            this.setLevelData(e.levelData);
            mj.EventManager.emit(GameEvent_1.EGameEvent.IptSetLevel_AfterSetLevel, {
                input: e,
                inputSetLevel: this
            });
            this.gameContext.tileTypesModifier.modifyFromLocal();
        }
        this.gameContext.gameModifier.enterGame();
        this.selectEnterAnimationStrategy(e.levelData.isNewGame, e.levelData.isRestart);
        this.gameController.gameTimeData.initTime(t.getCurrentRoundTime());
        if (e.levelData.isNewGame || this.isGuideStart(e)) {
            this.gameContext.saveModifier.saveOriWithSpecialCards();
            this.gameContext.saveModifier.saveLevelDataToLocalStorage();
            t.setTotalTileCount(this.tileMapObject.getCount());
            t.setLayerTileCount(this.tileMapObject.getEachLayerTileCount());
            o.startGameTracking(this.gameContext);
            DGameStart_1.DotGameStart.dot(this.gameContext);
            DGameUnlock_1.DotGameUnlock.dot(this.gameContext);
        }
        DGameOpen_1.DotGameOpen.isCheckCanDot() && DGameOpen_1.DotGameOpen.dot(this.gameContext);
    };
    InputSetLevel.prototype.newGameComplete = function () { };
    InputSetLevel.prototype.newGameReset = function () {
        this.gameContext.gameType === GameTypeEnums_1.MjGameType.Normal && this.gameContext.getGameData().setRankCardCount(0);
    };
    InputSetLevel.prototype.isGuideStart = function (e) {
        var t = mj.getClassByName("GuideTrait");
        return 1 === e.levelData.levelId && t && t.getInstance() && true === t.getInstance().eventEnabled && !UserModel_1.default.getInstance().isGuideFinished();
    };
    InputSetLevel.prototype.setLevelData = function (e) {
        if (e.isExtractLevel) {
            var t = e.levelStr;
            e.levelStr = LevelGenRule_1.default.convertLevelStrCardIdToResId(e.levelStr);
            this.gameContext.getGameData().setOriginalLevelDataWithCardId(t);
        }
        this.gameContext.getGameData().setLevelInfo(e.levelId, e.levelStr, e.originalLevelStr);
        this.tileMapObject.initGameLayer(e.levelStr);
        this.gameController.tileMapObject.updateCanMatchTiles();
    };
    InputSetLevel.prototype.reGenerateFaceSet = function (e) {
        e.levelData.isNewGame;
    };
    InputSetLevel.prototype.reGenerateFaceSetAfter = function (e) {
        e.levelData.isNewGame;
    };
    InputSetLevel.prototype.selectEnterAnimationStrategy = function () { };
    InputSetLevel.prototype.dispatchGameStateEvent = function (e) {
        if (e.isRestart) {
            GameStateListener_1.default.onReplayGame(this.gameContext.gameType);
        }
        else {
            if (e.isNewGame) {
                GameStateListener_1.default.onNewGame(this.gameContext.gameType);
            }
            else {
                GameStateListener_1.default.onSurvivalGame(this.gameContext.gameType);
            }
        }
    };
    __decorate([
        mj.traitEvent("IptSetLv_exec")
    ], InputSetLevel.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptSetLv_newGComp")
    ], InputSetLevel.prototype, "newGameComplete", null);
    __decorate([
        mj.traitEvent("IptSetLv_setData")
    ], InputSetLevel.prototype, "setLevelData", null);
    __decorate([
        mj.traitEvent("IptSetLv_reGenFaces")
    ], InputSetLevel.prototype, "reGenerateFaceSet", null);
    __decorate([
        mj.traitEvent("IptSetLv_reGenFacesAfter")
    ], InputSetLevel.prototype, "reGenerateFaceSetAfter", null);
    __decorate([
        mj.traitEvent("IptSetLv_selEnterAnim")
    ], InputSetLevel.prototype, "selectEnterAnimationStrategy", null);
    return InputSetLevel;
}(InputBase_1.InputBase));
exports.default = InputSetLevel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0U2V0TGV2ZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUF3RDtBQUN4RCx5REFBMEQ7QUFDMUQsMkRBQTREO0FBQzVELHdEQUFtRDtBQUNuRCw2REFBNkQ7QUFDN0QsMEVBQXNFO0FBQ3RFLG9EQUFtRDtBQUNuRCx1RUFBa0U7QUFDbEUsc0VBQWlFO0FBQ2pFLG1EQUFrRDtBQUNsRDtJQUEyQyxpQ0FBUztJQUFwRDs7SUF3R0EsQ0FBQztJQXRHQyw4QkFBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUN6RSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN6QixDQUFDLENBQUMsU0FBUyxD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Q0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNmLDJCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNEO2FBQU07WUFDTCxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7Z0JBQ2YsMkJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDeEQ7aUJBQU07Z0JBQ0wsMkJBQWlCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDN0Q7U0FDRjtJQUNILENBQUM7SUFyR0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQzsrQ0E2RDlCO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO3dEQUNmO0lBU3BCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztxREFVakM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7MERBR3BDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDOytEQUd6QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztxRUFDTjtJQVluQyxvQkFBQztDQXhHRCxBQXdHQyxDQXhHMEMscUJBQVMsR0F3R25EO2tCQXhHb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvdEdhbWVPcGVuIH0gZnJvbSAnLi4vZ2FtZVBsYXkvZG90L0RHYW1lT3Blbic7XG5pbXBvcnQgeyBEb3RHYW1lU3RhcnQgfSBmcm9tICcuLi9nYW1lUGxheS9kb3QvREdhbWVTdGFydCc7XG5pbXBvcnQgeyBEb3RHYW1lVW5sb2NrIH0gZnJvbSAnLi4vZ2FtZVBsYXkvZG90L0RHYW1lVW5sb2NrJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5pbXBvcnQgR2FtZVN0YXRlTGlzdGVuZXIgZnJvbSAnLi4vcHJvY2Vzcy9nYW1lL0dhbWVTdGF0ZUxpc3RlbmVyJztcbmltcG9ydCBMZXZlbEdlblJ1bGUgZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvY29uZmlnL0xldmVsR2VuUnVsZSc7XG5pbXBvcnQgeyBEb3RVdGlsIH0gZnJvbSAnLi4vZ2FtZVBsYXkvZG90L0RvdFV0aWwnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRTZXRMZXZlbCBleHRlbmRzIElucHV0QmFzZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0U2V0THZfZXhlY1wiKVxuICBleGN1dGUoZSkge1xuICAgIHRoaXMuZGlzcGF0Y2hHYW1lU3RhdGVFdmVudChlLmxldmVsRGF0YSk7XG4gICAgdmFyIHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUoZS5sZXZlbERhdGEuZ2FtZVR5cGUpLFxuICAgICAgbyA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVUcmFja2VyQnlHYW1lVHlwZShlLmxldmVsRGF0YS5nYW1lVHlwZSk7XG4gICAgdGhpcy5nYW1lQ29udGV4dC5zZXRVc2VyRGF0YShVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSk7XG4gICAgdGhpcy5nYW1lQ29udGV4dC5zZXRHYW1lVHJhY2tlcihvKTtcbiAgICB0aGlzLmdhbWVDb250ZXh0LnNldEdhbWVEYXRhKHQpO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuc2V0SXNOZXdHYW1lKGUubGV2ZWxEYXRhLmlzTmV3R2FtZSk7XG4gICAgdGhpcy5nYW1lQ29udGV4dC5zZXRJc1Jlc3RhcnQoZS5sZXZlbERhdGEuaXNSZXN0YXJ0KTtcbiAgICBpZiAoZS5sZXZlbERhdGEuaXNOZXdHYW1lKSB7XG4gICAgICBlLmxldmVsRGF0YS5pc1Jlc3RhcnQgfHwgdGhpcy5uZXdHYW1lUmVzZXQoKTtcbiAgICAgIHQucmVzZXRHYW1lRGF0YSgpO1xuICAgICAgdC5zZXRMZXZlbERpZmZpY3VsdHkoZS5sZXZlbERhdGEubGV2ZWxEaWZmaWN1bHR5KTtcbiAgICAgIHQuc2V0TGV2ZWxJZChlLmxldmVsRGF0YS5sZXZlbElkKTtcbiAgICAgIHQuc2V0TGV2ZWxJbmRleChlLmxldmVsRGF0YS5sZXZlbEluZGV4KTtcbiAgICAgIHQuc2V0TGV2ZWxOYW1lKGUubGV2ZWxEYXRhLmxldmVsTmFtZSk7XG4gICAgICB0LnVwZGF0ZVBsYXlDb3VudCgpO1xuICAgICAgdC5zZXRTdGFydEdhbWVUaW1lKERhdGUubm93KCkpO1xuICAgICAgZS5sZXZlbERhdGEuZGltZW5zaW9uTmFtZSAmJiB0LnNldERpbWVuc2lvbk5hbWUoZS5sZXZlbERhdGEuZGltZW5zaW9uTmFtZSk7XG4gICAgICBlLmxldmVsRGF0YS50aWxlVHlwZXMgJiYgdC5zZXRUaWxlVHlwZXMoZS5sZXZlbERhdGEudGlsZVR5cGVzKTtcbiAgICAgIHRoaXMuc2V0TGV2ZWxEYXRhKGUubGV2ZWxEYXRhKTtcbiAgICAgIHRoaXMucmVHZW5lcmF0ZUZhY2VTZXQoZSk7XG4gICAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFR2FtZUV2ZW50LklwdFNldExldmVsX0FmdGVyU2V0TGV2ZWwsIHtcbiAgICAgICAgaW5wdXQ6IGUsXG4gICAgICAgIGlucHV0U2V0TGV2ZWw6IHRoaXNcbiAgICAgIH0pO1xuICAgICAgaWYgKGUubGV2ZWxEYXRhLmlzUmVzdGFydCkge1xuICAgICAgICB0aGlzLmdhbWVDb250ZXh0LnRpbGVUeXBlc01vZGlmaWVyLm1vZGlmeUZyb21Mb2NhbCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nYW1lQ29udGV4dC50aWxlVHlwZXNNb2RpZmllci5tb2RpZnlUaWxlVHlwZXMoZS5sZXZlbERhdGEudGlsZVR5cGVzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVHZW5lcmF0ZUZhY2VTZXRBZnRlcihlKTtcbiAgICAgIHRoaXMudGlsZU1hcE9iamVjdC5maXhTaW5nbGVDYXJkKCk7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LmdldFVzZXJEYXRhKCkudXBkYXRlR2FtZUlkKCk7XG4gICAgICB2YXIgbiA9IHRoaXMudGlsZU1hcE9iamVjdC5nZXRDYXJkc0NvdW50KCk7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuc2V0Q3VyTGV2ZWxDb21ib01heExpbWl0KG4gLyAyKTtcbiAgICAgIHQuc2V0SW5pdFNwZWNpYWxDYXJkcyhEb3RVdGlsLmdldFNwZWNpYWxUaWxlcyh0aGlzLnRpbGVNYXBPYmplY3QsIHRydWUpKTtcbiAgICAgIHRoaXMubmV3R2FtZUNvbXBsZXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQucmVzZXRDb21ib051bSgpO1xuICAgICAgdGhpcy5zZXRMZXZlbERhdGEoZS5sZXZlbERhdGEpO1xuICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5JcHRTZXRMZXZlbF9BZnRlclNldExldmVsLCB7XG4gICAgICAgIGlucHV0OiBlLFxuICAgICAgICBpbnB1dFNldExldmVsOiB0aGlzXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQudGlsZVR5cGVzTW9kaWZpZXIubW9kaWZ5RnJvbUxvY2FsKCk7XG4gICAgfVxuICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2FtZU1vZGlmaWVyLmVudGVyR2FtZSgpO1xuICAgIHRoaXMuc2VsZWN0RW50ZXJBbmltYXRpb25TdHJhdGVneShlLmxldmVsRGF0YS5pc05ld0dhbWUsIGUubGV2ZWxEYXRhLmlzUmVzdGFydCk7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5nYW1lVGltZURhdGEuaW5pdFRpbWUodC5nZXRDdXJyZW50Um91bmRUaW1lKCkpO1xuICAgIGlmIChlLmxldmVsRGF0YS5pc05ld0dhbWUgfHwgdGhpcy5pc0d1aWRlU3RhcnQoZSkpIHtcbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQuc2F2ZU1vZGlmaWVyLnNhdmVPcmlXaXRoU3BlY2lhbENhcmRzKCk7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LnNhdmVNb2RpZmllci5zYXZlTGV2ZWxEYXRhVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgIHQuc2V0VG90YWxUaWxlQ291bnQodGhpcy50aWxlTWFwT2JqZWN0LmdldENvdW50KCkpO1xuICAgICAgdC5zZXRMYXllclRpbGVDb3VudCh0aGlzLnRpbGVNYXBPYmplY3QuZ2V0RWFjaExheWVyVGlsZUNvdW50KCkpO1xuICAgICAgby5zdGFydEdhbWVUcmFja2luZyh0aGlzLmdhbWVDb250ZXh0KTtcbiAgICAgIERvdEdhbWVTdGFydC5kb3QodGhpcy5nYW1lQ29udGV4dCk7XG4gICAgICBEb3RHYW1lVW5sb2NrLmRvdCh0aGlzLmdhbWVDb250ZXh0KTtcbiAgICB9XG4gICAgRG90R2FtZU9wZW4uaXNDaGVja0NhbkRvdCgpICYmIERvdEdhbWVPcGVuLmRvdCh0aGlzLmdhbWVDb250ZXh0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklwdFNldEx2X25ld0dDb21wXCIpXG4gIG5ld0dhbWVDb21wbGV0ZSgpIHt9XG4gIG5ld0dhbWVSZXNldCgpIHtcbiAgICB0aGlzLmdhbWVDb250ZXh0LmdhbWVUeXBlID09PSBNakdhbWVUeXBlLk5vcm1hbCAmJiB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuc2V0UmFua0NhcmRDb3VudCgwKTtcbiAgfVxuICBpc0d1aWRlU3RhcnQoZSkge1xuICAgIHZhciB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJHdWlkZVRyYWl0XCIpO1xuICAgIHJldHVybiAxID09PSBlLmxldmVsRGF0YS5sZXZlbElkICYmIHQgJiYgdC5nZXRJbnN0YW5jZSgpICYmIHRydWUgPT09IHQuZ2V0SW5zdGFuY2UoKS5ldmVudEVuYWJsZWQgJiYgIVVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzR3VpZGVGaW5pc2hlZCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0U2V0THZfc2V0RGF0YVwiKVxuICBzZXRMZXZlbERhdGEoZSkge1xuICAgIGlmIChlLmlzRXh0cmFjdExldmVsKSB7XG4gICAgICB2YXIgdCA9IGUubGV2ZWxTdHI7XG4gICAgICBlLmxldmVsU3RyID0gTGV2ZWxHZW5SdWxlLmNvbnZlcnRMZXZlbFN0ckNhcmRJZFRvUmVzSWQoZS5sZXZlbFN0cik7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuc2V0T3JpZ2luYWxMZXZlbERhdGFXaXRoQ2FyZElkKHQpO1xuICAgIH1cbiAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuc2V0TGV2ZWxJbmZvKGUubGV2ZWxJZCwgZS5sZXZlbFN0ciwgZS5vcmlnaW5hbExldmVsU3RyKTtcbiAgICB0aGlzLnRpbGVNYXBPYmplY3QuaW5pdEdhbWVMYXllcihlLmxldmVsU3RyKTtcbiAgICB0aGlzLmdhbWVDb250cm9sbGVyLnRpbGVNYXBPYmplY3QudXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0U2V0THZfcmVHZW5GYWNlc1wiKVxuICByZUdlbmVyYXRlRmFjZVNldChlKSB7XG4gICAgZS5sZXZlbERhdGEuaXNOZXdHYW1lO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0U2V0THZfcmVHZW5GYWNlc0FmdGVyXCIpXG4gIHJlR2VuZXJhdGVGYWNlU2V0QWZ0ZXIoZSkge1xuICAgIGUubGV2ZWxEYXRhLmlzTmV3R2FtZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklwdFNldEx2X3NlbEVudGVyQW5pbVwiKVxuICBzZWxlY3RFbnRlckFuaW1hdGlvblN0cmF0ZWd5KCkge31cbiAgZGlzcGF0Y2hHYW1lU3RhdGVFdmVudChlKSB7XG4gICAgaWYgKGUuaXNSZXN0YXJ0KSB7XG4gICAgICBHYW1lU3RhdGVMaXN0ZW5lci5vblJlcGxheUdhbWUodGhpcy5nYW1lQ29udGV4dC5nYW1lVHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlLmlzTmV3R2FtZSkge1xuICAgICAgICBHYW1lU3RhdGVMaXN0ZW5lci5vbk5ld0dhbWUodGhpcy5nYW1lQ29udGV4dC5nYW1lVHlwZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBHYW1lU3RhdGVMaXN0ZW5lci5vblN1cnZpdmFsR2FtZSh0aGlzLmdhbWVDb250ZXh0LmdhbWVUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=