
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2SetLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1e0d8I4QRFLIJq4QtrNnmN', 'InputTile2SetLevel');
// Scripts/input/InputTile2SetLevel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameOpen_1 = require("../gamePlay/dot/DGameOpen");
var DGameUnlock_1 = require("../gamePlay/dot/DGameUnlock");
var UserModel_1 = require("../gamePlay/user/UserModel");
var InputBase_1 = require("../inputbase/InputBase");
var GameStateListener_1 = require("../process/game/GameStateListener");
var LevelGenRule_1 = require("../core/simulator/config/LevelGenRule");
var DotUtil_1 = require("../gamePlay/dot/DotUtil");
var InputTile2SetLevel = /** @class */ (function (_super) {
    __extends(InputTile2SetLevel, _super);
    function InputTile2SetLevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2SetLevel.prototype.excute = function (e) {
        this.dispatchGameStateEvent(e.levelData);
        var t = UserModel_1.default.getInstance().getGameDataByGameType(e.levelData.gameType), o = UserModel_1.default.getInstance().getDotTrackerByGameType(e.levelData.gameType);
        this.gameContext.setUserData(UserModel_1.default.getInstance());
        this.gameContext.setTile2DotTracker(o);
        this.gameContext.setGameData(t);
        this.gameContext.setIsNewGame(e.levelData.isNewGame);
        this.gameContext.setIsRestart(e.levelData.isRestart);
        if (e.levelData.isNewGame) {
            e.levelData.isRestart || t.onNewGameReset();
            t.resetGameData();
            t.resetSlotBarCount(e.levelData.slotBarCount);
            t.setLevelDifficulty(e.levelData.levelDifficulty);
            t.setLevelId(e.levelData.levelId);
            t.setLevelIndex(e.levelData.levelIndex);
            t.setLevelName(e.levelData.levelName);
            t.updatePlayCount();
            t.setStartGameTime(Date.now());
            e.levelData.dimensionName && t.setDimensionName(e.levelData.dimensionName);
            t.setTileTypes(e.levelData.tileTypes);
            t.setTileStrategies(e.levelData.tileStrategies);
            this.setLevelData(e.levelData);
            this.reGenerateFaceSet(e);
            if (e.levelData.isRestart) {
                this.gameContext.tile2TileTypesModifier.modifyFromLocalForRestart();
                this.gameContext.tile2TileTypesModifier.saveToGameData();
            }
            else {
                this.gameContext.tile2TileTypesModifier.modifyTileTypes(e.levelData.tileTypes);
                this.gameContext.tile2TileTypesModifier.saveToGameDataForRestart();
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
            this.onResumeComboReset();
            this.setLevelData(e.levelData);
            this.gameContext.tile2TileTypesModifier.modifyFromLocal();
        }
        this.gameContext.tile2ReviveModifier.initRevive();
        this.gameContext.gameModifier.enterGame();
        this.selectEnterAnimationStrategy(e.levelData.isNewGame, e.levelData.isRestart);
        this.gameController.gameTimeData.initTime(t.getCurrentRoundTime());
        if (e.levelData.isNewGame) {
            this.gameContext.saveModifier.saveOriWithSpecialCards();
            this.gameContext.saveModifier.saveLevelDataToLocalStorage();
            t.setTotalTileCount(this.tileMapObject.getCount());
            t.setLayerTileCount(this.tileMapObject.getEachLayerTileCount());
            DGameUnlock_1.DotGameUnlock.dot(this.gameContext);
        }
        DGameOpen_1.DotGameOpen.isCheckCanDot() && DGameOpen_1.DotGameOpen.dot(this.gameContext);
    };
    InputTile2SetLevel.prototype.newGameComplete = function () { };
    InputTile2SetLevel.prototype.setLevelData = function (e) {
        if (e.isExtractLevel) {
            var t = e.levelStr;
            e.levelStr = LevelGenRule_1.default.convertLevelStrCardIdToResId(e.levelStr);
            this.gameContext.getGameData().setOriginalLevelDataWithCardId(t);
        }
        this.gameContext.getGameData().setLevelInfo(e.levelId, e.levelStr, e.originalLevelStr, e.slover);
        this.tileMapObject.initGameLayer(e.levelStr);
        this.gameController.tileMapObject.updateCanMatchTiles();
    };
    InputTile2SetLevel.prototype.reGenerateFaceSet = function (e) {
        e.levelData.isNewGame;
    };
    InputTile2SetLevel.prototype.reGenerateFaceSetAfter = function (e) {
        e.levelData.isNewGame;
    };
    InputTile2SetLevel.prototype.selectEnterAnimationStrategy = function () { };
    InputTile2SetLevel.prototype.onResumeComboReset = function () { };
    InputTile2SetLevel.prototype.dispatchGameStateEvent = function (e) {
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
        mj.traitEvent("IptT2SetLv_newGmComplete")
    ], InputTile2SetLevel.prototype, "newGameComplete", null);
    __decorate([
        mj.traitEvent("IptT2SetLv_setData")
    ], InputTile2SetLevel.prototype, "setLevelData", null);
    __decorate([
        mj.traitEvent("IptT2SetLv_reGenFaces")
    ], InputTile2SetLevel.prototype, "reGenerateFaceSet", null);
    __decorate([
        mj.traitEvent("IptT2SetLv_genFcsAfter")
    ], InputTile2SetLevel.prototype, "reGenerateFaceSetAfter", null);
    __decorate([
        mj.traitEvent("IptT2SetLv_selEnterAnim")
    ], InputTile2SetLevel.prototype, "selectEnterAnimationStrategy", null);
    __decorate([
        mj.traitEvent("IptT2SetLv_rstCombo")
    ], InputTile2SetLevel.prototype, "onResumeComboReset", null);
    return InputTile2SetLevel;
}(InputBase_1.InputBase));
exports.default = InputTile2SetLevel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJTZXRMZXZlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXdEO0FBQ3hELDJEQUE0RDtBQUM1RCx3REFBbUQ7QUFDbkQsb0RBQW1EO0FBQ25ELHVFQUFrRTtBQUNsRSxzRUFBaUU7QUFDakUsbURBQWtEO0FBQ2xEO0lBQWdELHNDQUFTO0lBQXpEOztJQTZGQSxDQUFDO0lBNUZDLG1DQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04sSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQ3pFLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDekIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFB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QUMseUJBQXlCLENBQUM7MEVBQ1I7SUFFakM7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO2dFQUNkO0lBWXpCLHlCQUFDO0NBN0ZELEFBNkZDLENBN0YrQyxxQkFBUyxHQTZGeEQ7a0JBN0ZvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb3RHYW1lT3BlbiB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9ER2FtZU9wZW4nO1xuaW1wb3J0IHsgRG90R2FtZVVubG9jayB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9ER2FtZVVubG9jayc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4uL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuaW1wb3J0IEdhbWVTdGF0ZUxpc3RlbmVyIGZyb20gJy4uL3Byb2Nlc3MvZ2FtZS9HYW1lU3RhdGVMaXN0ZW5lcic7XG5pbXBvcnQgTGV2ZWxHZW5SdWxlIGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbmZpZy9MZXZlbEdlblJ1bGUnO1xuaW1wb3J0IHsgRG90VXRpbCB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9Eb3RVdGlsJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0VGlsZTJTZXRMZXZlbCBleHRlbmRzIElucHV0QmFzZSB7XG4gIGV4Y3V0ZShlKSB7XG4gICAgdGhpcy5kaXNwYXRjaEdhbWVTdGF0ZUV2ZW50KGUubGV2ZWxEYXRhKTtcbiAgICB2YXIgdCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShlLmxldmVsRGF0YS5nYW1lVHlwZSksXG4gICAgICBvID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0RG90VHJhY2tlckJ5R2FtZVR5cGUoZS5sZXZlbERhdGEuZ2FtZVR5cGUpO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuc2V0VXNlckRhdGEoVXNlck1vZGVsLmdldEluc3RhbmNlKCkpO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuc2V0VGlsZTJEb3RUcmFja2VyKG8pO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuc2V0R2FtZURhdGEodCk7XG4gICAgdGhpcy5nYW1lQ29udGV4dC5zZXRJc05ld0dhbWUoZS5sZXZlbERhdGEuaXNOZXdHYW1lKTtcbiAgICB0aGlzLmdhbWVDb250ZXh0LnNldElzUmVzdGFydChlLmxldmVsRGF0YS5pc1Jlc3RhcnQpO1xuICAgIGlmIChlLmxldmVsRGF0YS5pc05ld0dhbWUpIHtcbiAgICAgIGUubGV2ZWxEYXRhLmlzUmVzdGFydCB8fCB0Lm9uTmV3R2FtZVJlc2V0KCk7XG4gICAgICB0LnJlc2V0R2FtZURhdGEoKTtcbiAgICAgIHQucmVzZXRTbG90QmFyQ291bnQoZS5sZXZlbERhdGEuc2xvdEJhckNvdW50KTtcbiAgICAgIHQuc2V0TGV2ZWxEaWZmaWN1bHR5KGUubGV2ZWxEYXRhLmxldmVsRGlmZmljdWx0eSk7XG4gICAgICB0LnNldExldmVsSWQoZS5sZXZlbERhdGEubGV2ZWxJZCk7XG4gICAgICB0LnNldExldmVsSW5kZXgoZS5sZXZlbERhdGEubGV2ZWxJbmRleCk7XG4gICAgICB0LnNldExldmVsTmFtZShlLmxldmVsRGF0YS5sZXZlbE5hbWUpO1xuICAgICAgdC51cGRhdGVQbGF5Q291bnQoKTtcbiAgICAgIHQuc2V0U3RhcnRHYW1lVGltZShEYXRlLm5vdygpKTtcbiAgICAgIGUubGV2ZWxEYXRhLmRpbWVuc2lvbk5hbWUgJiYgdC5zZXREaW1lbnNpb25OYW1lKGUubGV2ZWxEYXRhLmRpbWVuc2lvbk5hbWUpO1xuICAgICAgdC5zZXRUaWxlVHlwZXMoZS5sZXZlbERhdGEudGlsZVR5cGVzKTtcbiAgICAgIHQuc2V0VGlsZVN0cmF0ZWdpZXMoZS5sZXZlbERhdGEudGlsZVN0cmF0ZWdpZXMpO1xuICAgICAgdGhpcy5zZXRMZXZlbERhdGEoZS5sZXZlbERhdGEpO1xuICAgICAgdGhpcy5yZUdlbmVyYXRlRmFjZVNldChlKTtcbiAgICAgIGlmIChlLmxldmVsRGF0YS5pc1Jlc3RhcnQpIHtcbiAgICAgICAgdGhpcy5nYW1lQ29udGV4dC50aWxlMlRpbGVUeXBlc01vZGlmaWVyLm1vZGlmeUZyb21Mb2NhbEZvclJlc3RhcnQoKTtcbiAgICAgICAgdGhpcy5nYW1lQ29udGV4dC50aWxlMlRpbGVUeXBlc01vZGlmaWVyLnNhdmVUb0dhbWVEYXRhKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVGlsZVR5cGVzTW9kaWZpZXIubW9kaWZ5VGlsZVR5cGVzKGUubGV2ZWxEYXRhLnRpbGVUeXBlcyk7XG4gICAgICAgIHRoaXMuZ2FtZUNvbnRleHQudGlsZTJUaWxlVHlwZXNNb2RpZmllci5zYXZlVG9HYW1lRGF0YUZvclJlc3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVHZW5lcmF0ZUZhY2VTZXRBZnRlcihlKTtcbiAgICAgIHRoaXMudGlsZU1hcE9iamVjdC5maXhTaW5nbGVDYXJkKCk7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LmdldFVzZXJEYXRhKCkudXBkYXRlR2FtZUlkKCk7XG4gICAgICB2YXIgbiA9IHRoaXMudGlsZU1hcE9iamVjdC5nZXRDYXJkc0NvdW50KCk7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuc2V0Q3VyTGV2ZWxDb21ib01heExpbWl0KG4gLyAyKTtcbiAgICAgIHQuc2V0SW5pdFNwZWNpYWxDYXJkcyhEb3RVdGlsLmdldFNwZWNpYWxUaWxlcyh0aGlzLnRpbGVNYXBPYmplY3QsIHRydWUpKTtcbiAgICAgIHRoaXMubmV3R2FtZUNvbXBsZXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25SZXN1bWVDb21ib1Jlc2V0KCk7XG4gICAgICB0aGlzLnNldExldmVsRGF0YShlLmxldmVsRGF0YSk7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVGlsZVR5cGVzTW9kaWZpZXIubW9kaWZ5RnJvbUxvY2FsKCk7XG4gICAgfVxuICAgIHRoaXMuZ2FtZUNvbnRleHQudGlsZTJSZXZpdmVNb2RpZmllci5pbml0UmV2aXZlKCk7XG4gICAgdGhpcy5nYW1lQ29udGV4dC5nYW1lTW9kaWZpZXIuZW50ZXJHYW1lKCk7XG4gICAgdGhpcy5zZWxlY3RFbnRlckFuaW1hdGlvblN0cmF0ZWd5KGUubGV2ZWxEYXRhLmlzTmV3R2FtZSwgZS5sZXZlbERhdGEuaXNSZXN0YXJ0KTtcbiAgICB0aGlzLmdhbWVDb250cm9sbGVyLmdhbWVUaW1lRGF0YS5pbml0VGltZSh0LmdldEN1cnJlbnRSb3VuZFRpbWUoKSk7XG4gICAgaWYgKGUubGV2ZWxEYXRhLmlzTmV3R2FtZSkge1xuICAgICAgdGhpcy5nYW1lQ29udGV4dC5zYXZlTW9kaWZpZXIuc2F2ZU9yaVdpdGhTcGVjaWFsQ2FyZHMoKTtcbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQuc2F2ZU1vZGlmaWVyLnNhdmVMZXZlbERhdGFUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgdC5zZXRUb3RhbFRpbGVDb3VudCh0aGlzLnRpbGVNYXBPYmplY3QuZ2V0Q291bnQoKSk7XG4gICAgICB0LnNldExheWVyVGlsZUNvdW50KHRoaXMudGlsZU1hcE9iamVjdC5nZXRFYWNoTGF5ZXJUaWxlQ291bnQoKSk7XG4gICAgICBEb3RHYW1lVW5sb2NrLmRvdCh0aGlzLmdhbWVDb250ZXh0KTtcbiAgICB9XG4gICAgRG90R2FtZU9wZW4uaXNDaGVja0NhbkRvdCgpICYmIERvdEdhbWVPcGVuLmRvdCh0aGlzLmdhbWVDb250ZXh0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklwdFQyU2V0THZfbmV3R21Db21wbGV0ZVwiKVxuICBuZXdHYW1lQ29tcGxldGUoKSB7fVxuICBAbWoudHJhaXRFdmVudChcIklwdFQyU2V0THZfc2V0RGF0YVwiKVxuICBzZXRMZXZlbERhdGEoZSkge1xuICAgIGlmIChlLmlzRXh0cmFjdExldmVsKSB7XG4gICAgICB2YXIgdCA9IGUubGV2ZWxTdHI7XG4gICAgICBlLmxldmVsU3RyID0gTGV2ZWxHZW5SdWxlLmNvbnZlcnRMZXZlbFN0ckNhcmRJZFRvUmVzSWQoZS5sZXZlbFN0cik7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuc2V0T3JpZ2luYWxMZXZlbERhdGFXaXRoQ2FyZElkKHQpO1xuICAgIH1cbiAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuc2V0TGV2ZWxJbmZvKGUubGV2ZWxJZCwgZS5sZXZlbFN0ciwgZS5vcmlnaW5hbExldmVsU3RyLCBlLnNsb3Zlcik7XG4gICAgdGhpcy50aWxlTWFwT2JqZWN0LmluaXRHYW1lTGF5ZXIoZS5sZXZlbFN0cik7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci50aWxlTWFwT2JqZWN0LnVwZGF0ZUNhbk1hdGNoVGlsZXMoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklwdFQyU2V0THZfcmVHZW5GYWNlc1wiKVxuICByZUdlbmVyYXRlRmFjZVNldChlKSB7XG4gICAgZS5sZXZlbERhdGEuaXNOZXdHYW1lO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0VDJTZXRMdl9nZW5GY3NBZnRlclwiKVxuICByZUdlbmVyYXRlRmFjZVNldEFmdGVyKGUpIHtcbiAgICBlLmxldmVsRGF0YS5pc05ld0dhbWU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJJcHRUMlNldEx2X3NlbEVudGVyQW5pbVwiKVxuICBzZWxlY3RFbnRlckFuaW1hdGlvblN0cmF0ZWd5KCkge31cbiAgQG1qLnRyYWl0RXZlbnQoXCJJcHRUMlNldEx2X3JzdENvbWJvXCIpXG4gIG9uUmVzdW1lQ29tYm9SZXNldCgpIHt9XG4gIGRpc3BhdGNoR2FtZVN0YXRlRXZlbnQoZSkge1xuICAgIGlmIChlLmlzUmVzdGFydCkge1xuICAgICAgR2FtZVN0YXRlTGlzdGVuZXIub25SZXBsYXlHYW1lKHRoaXMuZ2FtZUNvbnRleHQuZ2FtZVR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZS5pc05ld0dhbWUpIHtcbiAgICAgICAgR2FtZVN0YXRlTGlzdGVuZXIub25OZXdHYW1lKHRoaXMuZ2FtZUNvbnRleHQuZ2FtZVR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgR2FtZVN0YXRlTGlzdGVuZXIub25TdXJ2aXZhbEdhbWUodGhpcy5nYW1lQ29udGV4dC5nYW1lVHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19