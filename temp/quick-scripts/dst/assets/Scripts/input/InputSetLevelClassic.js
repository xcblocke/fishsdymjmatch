
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputSetLevelClassic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '48f69jVsfZFrZgthL4j7loD', 'InputSetLevelClassic');
// Scripts/input/InputSetLevelClassic.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameOpen_1 = require("../gamePlay/dot/DGameOpen");
var DGameStart_1 = require("../gamePlay/dot/DGameStart");
var DGameUnlock_1 = require("../gamePlay/dot/DGameUnlock");
var UserModel_1 = require("../gamePlay/user/UserModel");
var InputBase_1 = require("../inputbase/InputBase");
var GameStateListener_1 = require("../process/game/GameStateListener");
var LevelGenRule_1 = require("../core/simulator/config/LevelGenRule");
var DotUtil_1 = require("../gamePlay/dot/DotUtil");
var InputSetLevelClassic = /** @class */ (function (_super) {
    __extends(InputSetLevelClassic, _super);
    function InputSetLevelClassic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputSetLevelClassic.prototype.excute = function (e) {
        this.dispatchGameStateEvent(e.levelData);
        var t = UserModel_1.default.getInstance().getGameDataByGameType(e.levelData.gameType), o = UserModel_1.default.getInstance().getGameTrackerByGameType(e.levelData.gameType);
        this.gameContext.setUserData(UserModel_1.default.getInstance());
        this.gameContext.setGameTracker(o);
        this.gameContext.setGameData(t);
        this.gameContext.setIsNewGame(e.levelData.isNewGame);
        this.gameContext.setIsRestart(e.levelData.isRestart);
        if (e.levelData.isNewGame) {
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
            this.gameContext.tileTypesModifier.modifyTileTypes(e.levelData.tileTypes);
            this.reGenerateFaceSetAfter(e);
            this.gameContext.getUserData().updateGameId();
            var n = this.tileMapObject.getCardsCount();
            this.gameContext.getGameData().setCurLevelComboMaxLimit(n / 2);
            t.setInitSpecialCards(DotUtil_1.DotUtil.getSpecialTiles(this.tileMapObject, true));
        }
        else {
            t.resetComboNum();
            this.setLevelData(e.levelData);
            this.gameContext.tileTypesModifier.modifyFromLocalFix();
        }
        this.gameContext.gameModifier.enterGame();
        this.selectEnterAnimationStrategy(e.levelData.isNewGame, e.levelData.isRestart);
        this.gameController.gameTimeData.initTime(t.getCurrentRoundTime());
        if (e.levelData.isNewGame || this.isGuideStart(e)) {
            this.gameContext.saveModifier.saveOriWithSpecialCards();
            this.gameContext.saveModifier.saveLevelDataToLocalStorage();
            t.setTotalTileCount(this.tileMapObject.getCount());
            o.startGameTracking(this.gameContext);
            DGameStart_1.DotGameStart.dot(this.gameContext);
            DGameUnlock_1.DotGameUnlock.dot(this.gameContext);
        }
        DGameOpen_1.DotGameOpen.isCheckCanDot() && DGameOpen_1.DotGameOpen.dot(this.gameContext);
    };
    InputSetLevelClassic.prototype.isGuideStart = function (e) {
        var t = mj.getClassByName("GuideTrait");
        return 1 === e.levelData.levelId && t && t.getInstance() && true === t.getInstance().eventEnabled && !UserModel_1.default.getInstance().isGuideFinished();
    };
    InputSetLevelClassic.prototype.setLevelData = function (e) {
        var t, o;
        if (e.isExtractLevel) {
            var n = e.levelStr;
            e.levelStr = LevelGenRule_1.default.convertLevelStrCardIdToResId(e.levelStr);
            this.gameContext.getGameData().setOriginalLevelDataWithCardId(n);
        }
        this.gameContext.getGameData().setLevelInfo(e.levelId, e.levelStr, e.originalLevelStr);
        this.tileMapObject.initGameLayer(e.levelStr, e.isNewGame);
        this.gameContext.classicLevelModifier.tryExcuteDrop();
        this.gameController.tileMapObject.updateCanMatchTiles();
        try {
            for (var i = __values(this.tileMapObject.tileObjectMap().values()), a = i.next(); !a.done; a = i.next()) {
                var l = a.value, s = this.gameContext.getGameData().getBatchIdByXyz(l.pos.x, l.pos.y, l.pos.z);
                this.tileMapObject.changeBatchId(l.id, s || 0);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    InputSetLevelClassic.prototype.reGenerateFaceSet = function (e) {
        e.levelData.isNewGame;
    };
    InputSetLevelClassic.prototype.reGenerateFaceSetAfter = function (e) {
        e.levelData.isNewGame;
    };
    InputSetLevelClassic.prototype.selectEnterAnimationStrategy = function () { };
    InputSetLevelClassic.prototype.dispatchGameStateEvent = function (e) {
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
    return InputSetLevelClassic;
}(InputBase_1.InputBase));
exports.default = InputSetLevelClassic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0U2V0TGV2ZWxDbGFzc2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBd0Q7QUFDeEQseURBQTBEO0FBQzFELDJEQUE0RDtBQUM1RCx3REFBbUQ7QUFDbkQsb0RBQW1EO0FBQ25ELHVFQUFrRTtBQUNsRSxzRUFBaUU7QUFDakUsbURBQWtEO0FBQ2xEO0lBQWtELHdDQUFTO0lBQTNEOztJQWlHQSxDQUFDO0lBaEdDLHFDQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04sSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQ3pFLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3pCLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNsQixDQUFD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UUFDdEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELDJEQUE0QixHQUE1QixjQUFnQyxDQUFDO0lBQ2pDLHFEQUFzQixHQUF0QixVQUF1QixDQUFDO1FBQ3RCLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNmLDJCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNEO2FBQU07WUFDTCxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7Z0JBQ2YsMkJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDeEQ7aUJBQU07Z0JBQ0wsMkJBQWlCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDN0Q7U0FDRjtJQUNILENBQUM7SUFDSCwyQkFBQztBQUFELENBakdBLEFBaUdDLENBakdpRCxxQkFBUyxHQWlHMUQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb3RHYW1lT3BlbiB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9ER2FtZU9wZW4nO1xuaW1wb3J0IHsgRG90R2FtZVN0YXJ0IH0gZnJvbSAnLi4vZ2FtZVBsYXkvZG90L0RHYW1lU3RhcnQnO1xuaW1wb3J0IHsgRG90R2FtZVVubG9jayB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9ER2FtZVVubG9jayc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4uL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuaW1wb3J0IEdhbWVTdGF0ZUxpc3RlbmVyIGZyb20gJy4uL3Byb2Nlc3MvZ2FtZS9HYW1lU3RhdGVMaXN0ZW5lcic7XG5pbXBvcnQgTGV2ZWxHZW5SdWxlIGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbmZpZy9MZXZlbEdlblJ1bGUnO1xuaW1wb3J0IHsgRG90VXRpbCB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9Eb3RVdGlsJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0U2V0TGV2ZWxDbGFzc2ljIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgZXhjdXRlKGUpIHtcbiAgICB0aGlzLmRpc3BhdGNoR2FtZVN0YXRlRXZlbnQoZS5sZXZlbERhdGEpO1xuICAgIHZhciB0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKGUubGV2ZWxEYXRhLmdhbWVUeXBlKSxcbiAgICAgIG8gPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lVHJhY2tlckJ5R2FtZVR5cGUoZS5sZXZlbERhdGEuZ2FtZVR5cGUpO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuc2V0VXNlckRhdGEoVXNlck1vZGVsLmdldEluc3RhbmNlKCkpO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuc2V0R2FtZVRyYWNrZXIobyk7XG4gICAgdGhpcy5nYW1lQ29udGV4dC5zZXRHYW1lRGF0YSh0KTtcbiAgICB0aGlzLmdhbWVDb250ZXh0LnNldElzTmV3R2FtZShlLmxldmVsRGF0YS5pc05ld0dhbWUpO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuc2V0SXNSZXN0YXJ0KGUubGV2ZWxEYXRhLmlzUmVzdGFydCk7XG4gICAgaWYgKGUubGV2ZWxEYXRhLmlzTmV3R2FtZSkge1xuICAgICAgdC5yZXNldEdhbWVEYXRhKCk7XG4gICAgICB0LnNldExldmVsRGlmZmljdWx0eShlLmxldmVsRGF0YS5sZXZlbERpZmZpY3VsdHkpO1xuICAgICAgdC5zZXRMZXZlbElkKGUubGV2ZWxEYXRhLmxldmVsSWQpO1xuICAgICAgdC5zZXRMZXZlbEluZGV4KGUubGV2ZWxEYXRhLmxldmVsSW5kZXgpO1xuICAgICAgdC5zZXRMZXZlbE5hbWUoZS5sZXZlbERhdGEubGV2ZWxOYW1lKTtcbiAgICAgIHQudXBkYXRlUGxheUNvdW50KCk7XG4gICAgICB0LnNldFN0YXJ0R2FtZVRpbWUoRGF0ZS5ub3coKSk7XG4gICAgICBlLmxldmVsRGF0YS5kaW1lbnNpb25OYW1lICYmIHQuc2V0RGltZW5zaW9uTmFtZShlLmxldmVsRGF0YS5kaW1lbnNpb25OYW1lKTtcbiAgICAgIGUubGV2ZWxEYXRhLnRpbGVUeXBlcyAmJiB0LnNldFRpbGVUeXBlcyhlLmxldmVsRGF0YS50aWxlVHlwZXMpO1xuICAgICAgdGhpcy5zZXRMZXZlbERhdGEoZS5sZXZlbERhdGEpO1xuICAgICAgdGhpcy5yZUdlbmVyYXRlRmFjZVNldChlKTtcbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQudGlsZVR5cGVzTW9kaWZpZXIubW9kaWZ5VGlsZVR5cGVzKGUubGV2ZWxEYXRhLnRpbGVUeXBlcyk7XG4gICAgICB0aGlzLnJlR2VuZXJhdGVGYWNlU2V0QWZ0ZXIoZSk7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LmdldFVzZXJEYXRhKCkudXBkYXRlR2FtZUlkKCk7XG4gICAgICB2YXIgbiA9IHRoaXMudGlsZU1hcE9iamVjdC5nZXRDYXJkc0NvdW50KCk7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuc2V0Q3VyTGV2ZWxDb21ib01heExpbWl0KG4gLyAyKTtcbiAgICAgIHQuc2V0SW5pdFNwZWNpYWxDYXJkcyhEb3RVdGlsLmdldFNwZWNpYWxUaWxlcyh0aGlzLnRpbGVNYXBPYmplY3QsIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdC5yZXNldENvbWJvTnVtKCk7XG4gICAgICB0aGlzLnNldExldmVsRGF0YShlLmxldmVsRGF0YSk7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LnRpbGVUeXBlc01vZGlmaWVyLm1vZGlmeUZyb21Mb2NhbEZpeCgpO1xuICAgIH1cbiAgICB0aGlzLmdhbWVDb250ZXh0LmdhbWVNb2RpZmllci5lbnRlckdhbWUoKTtcbiAgICB0aGlzLnNlbGVjdEVudGVyQW5pbWF0aW9uU3RyYXRlZ3koZS5sZXZlbERhdGEuaXNOZXdHYW1lLCBlLmxldmVsRGF0YS5pc1Jlc3RhcnQpO1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2FtZVRpbWVEYXRhLmluaXRUaW1lKHQuZ2V0Q3VycmVudFJvdW5kVGltZSgpKTtcbiAgICBpZiAoZS5sZXZlbERhdGEuaXNOZXdHYW1lIHx8IHRoaXMuaXNHdWlkZVN0YXJ0KGUpKSB7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LnNhdmVNb2RpZmllci5zYXZlT3JpV2l0aFNwZWNpYWxDYXJkcygpO1xuICAgICAgdGhpcy5nYW1lQ29udGV4dC5zYXZlTW9kaWZpZXIuc2F2ZUxldmVsRGF0YVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICB0LnNldFRvdGFsVGlsZUNvdW50KHRoaXMudGlsZU1hcE9iamVjdC5nZXRDb3VudCgpKTtcbiAgICAgIG8uc3RhcnRHYW1lVHJhY2tpbmcodGhpcy5nYW1lQ29udGV4dCk7XG4gICAgICBEb3RHYW1lU3RhcnQuZG90KHRoaXMuZ2FtZUNvbnRleHQpO1xuICAgICAgRG90R2FtZVVubG9jay5kb3QodGhpcy5nYW1lQ29udGV4dCk7XG4gICAgfVxuICAgIERvdEdhbWVPcGVuLmlzQ2hlY2tDYW5Eb3QoKSAmJiBEb3RHYW1lT3Blbi5kb3QodGhpcy5nYW1lQ29udGV4dCk7XG4gIH1cbiAgaXNHdWlkZVN0YXJ0KGUpIHtcbiAgICB2YXIgdCA9IG1qLmdldENsYXNzQnlOYW1lKFwiR3VpZGVUcmFpdFwiKTtcbiAgICByZXR1cm4gMSA9PT0gZS5sZXZlbERhdGEubGV2ZWxJZCAmJiB0ICYmIHQuZ2V0SW5zdGFuY2UoKSAmJiB0cnVlID09PSB0LmdldEluc3RhbmNlKCkuZXZlbnRFbmFibGVkICYmICFVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0d1aWRlRmluaXNoZWQoKTtcbiAgfVxuICBzZXRMZXZlbERhdGEoZSkge1xuICAgIHZhciB0LCBvO1xuICAgIGlmIChlLmlzRXh0cmFjdExldmVsKSB7XG4gICAgICB2YXIgbiA9IGUubGV2ZWxTdHI7XG4gICAgICBlLmxldmVsU3RyID0gTGV2ZWxHZW5SdWxlLmNvbnZlcnRMZXZlbFN0ckNhcmRJZFRvUmVzSWQoZS5sZXZlbFN0cik7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuc2V0T3JpZ2luYWxMZXZlbERhdGFXaXRoQ2FyZElkKG4pO1xuICAgIH1cbiAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuc2V0TGV2ZWxJbmZvKGUubGV2ZWxJZCwgZS5sZXZlbFN0ciwgZS5vcmlnaW5hbExldmVsU3RyKTtcbiAgICB0aGlzLnRpbGVNYXBPYmplY3QuaW5pdEdhbWVMYXllcihlLmxldmVsU3RyLCBlLmlzTmV3R2FtZSk7XG4gICAgdGhpcy5nYW1lQ29udGV4dC5jbGFzc2ljTGV2ZWxNb2RpZmllci50cnlFeGN1dGVEcm9wKCk7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci50aWxlTWFwT2JqZWN0LnVwZGF0ZUNhbk1hdGNoVGlsZXMoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaSA9IF9fdmFsdWVzKHRoaXMudGlsZU1hcE9iamVjdC50aWxlT2JqZWN0TWFwKCkudmFsdWVzKCkpLCBhID0gaS5uZXh0KCk7ICFhLmRvbmU7IGEgPSBpLm5leHQoKSkge1xuICAgICAgICB2YXIgbCA9IGEudmFsdWUsXG4gICAgICAgICAgcyA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRCYXRjaElkQnlYeXoobC5wb3MueCwgbC5wb3MueSwgbC5wb3Mueik7XG4gICAgICAgIHRoaXMudGlsZU1hcE9iamVjdC5jaGFuZ2VCYXRjaElkKGwuaWQsIHMgfHwgMCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGEgJiYgIWEuZG9uZSAmJiAobyA9IGkucmV0dXJuKSAmJiBvLmNhbGwoaSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVHZW5lcmF0ZUZhY2VTZXQoZSkge1xuICAgIGUubGV2ZWxEYXRhLmlzTmV3R2FtZTtcbiAgfVxuICByZUdlbmVyYXRlRmFjZVNldEFmdGVyKGUpIHtcbiAgICBlLmxldmVsRGF0YS5pc05ld0dhbWU7XG4gIH1cbiAgc2VsZWN0RW50ZXJBbmltYXRpb25TdHJhdGVneSgpIHt9XG4gIGRpc3BhdGNoR2FtZVN0YXRlRXZlbnQoZSkge1xuICAgIGlmIChlLmlzUmVzdGFydCkge1xuICAgICAgR2FtZVN0YXRlTGlzdGVuZXIub25SZXBsYXlHYW1lKHRoaXMuZ2FtZUNvbnRleHQuZ2FtZVR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZS5pc05ld0dhbWUpIHtcbiAgICAgICAgR2FtZVN0YXRlTGlzdGVuZXIub25OZXdHYW1lKHRoaXMuZ2FtZUNvbnRleHQuZ2FtZVR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgR2FtZVN0YXRlTGlzdGVuZXIub25TdXJ2aXZhbEdhbWUodGhpcy5nYW1lQ29udGV4dC5nYW1lVHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19