
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TravelGameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '04352Dm1AxL6oAG2bN4aw9+', 'TravelGameController');
// Scripts/TravelGameController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicCurve_1 = require("./types/DynamicCurve");
var ExtractTool_1 = require("./core/extractQuestion/ExtractTool");
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var RandomGenerator_1 = require("./core/simulator/structures/RandomGenerator");
var MainGameController_1 = require("./game/controller/MainGameController");
var UserModel_1 = require("./gamePlay/user/UserModel");
var TravelGameModel_1 = require("./gamePlay/travel/model/TravelGameModel");
var TravelGameView_1 = require("./view/TravelGameView");
var TravelGameController = /** @class */ (function (_super) {
    __extends(TravelGameController, _super);
    function TravelGameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = TravelGameView_1.default;
        _this._gameType = GameTypeEnums_1.MjGameType.Travel;
        return _this;
    }
    TravelGameController.prototype.getRestartLevelData = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelId(), o = (e.getLevelData(), e.getOriginalLevelData());
        return {
            originalLevelStr: o,
            levelStr: e.getOriWithSpecialCards() || o,
            levelDifficulty: e.getLevelDifficulty(),
            isNewGame: true,
            gameType: this.gameType,
            levelId: t,
            tileTypes: e.getTileTypes(),
            isRestart: true
        };
    };
    TravelGameController.prototype.getLocalLevelData = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelId(), o = e.getLevelData();
        return {
            originalLevelStr: e.getOriginalLevelData(),
            levelStr: o,
            levelDifficulty: e.getLevelDifficulty(),
            isNewGame: false,
            gameType: this.gameType,
            levelId: t,
            tileTypes: e.getTileTypes(),
            isRestart: false
        };
    };
    TravelGameController.prototype.getJourneyTypeConfig = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType).getLevelId(), t = TravelGameModel_1.default.getInstance().getPlayType(e);
        return new RandomGenerator_1.RandomGenerator().randomElement(t);
    };
    TravelGameController.prototype.getJourneyType = function () {
        var e = this.getJourneyTypeConfig();
        UserModel_1.default.getInstance().getGameDataByGameType(this.gameType).setJourneyType(e);
        return e;
    };
    TravelGameController.prototype.getNewLevelData = function (e) {
        var t = this, o = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), n = o.getLevelId(), i = o.getOriginalLevelData(), r = o.getJourneyType(), s = this.getTravelTileTypes(o, r);
        ExtractTool_1.default.getInstance().getContentData({
            levelID: n,
            levelIndex: o.getLevelGenIndex(),
            dieResult: o.getDieResult(),
            gameType: this.gameType,
            journeyType: r
        }).then(function (r) {
            o.setDieResult(1);
            o.incrementLevelGenIndex();
            var l = r[0], c = r[1], u = r[2], p = r[3], f = r[4];
            DynamicCurve_1.default.instance.supportMode(t.gameType) && DynamicCurve_1.default.instance.gameStart({
                gameType: t.gameType,
                levelId: n,
                fileName: p,
                levelStr: l,
                levelIndex: Number(u)
            });
            e({
                levelStr: l,
                levelDifficulty: c,
                originalLevelStr: i,
                isNewGame: true,
                gameType: t.gameType,
                levelId: n,
                tileTypes: s,
                isRestart: false,
                levelIndex: u,
                levelName: p,
                dimensionName: f,
                isExtractLevel: true
            });
        });
    };
    TravelGameController.prototype.getIsNewGame = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelData(), o = e.getOriginalLevelData();
        return !t || !o;
    };
    TravelGameController.prototype.getLevelData = function (e, t) {
        if (e === void 0) { e = false; }
        var o = this;
        var n = this.getIsNewGame(), i = this.getJourneyType();
        ExtractTool_1.default.getInstance().initData(this.gameType, i).then(function () {
            if (e) {
                var i = o.getRestartLevelData();
                t(i);
            }
            else if (n)
                o.getNewLevelData(function (e) {
                    t(e);
                });
            else {
                i = o.getLocalLevelData();
                t(i);
            }
        });
    };
    TravelGameController.prototype.initInput = function (e, t) {
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.StartSimulator,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.StartInit,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.SetLevel,
            levelData: e,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.InitCollectCard,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.InitEndStrategy,
            endStrategy: GameTypeEnums_1.LevelTargetType.KillCollectCard,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.ChooseLayout,
            contentSize: t,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.InitView,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.InitViewFinish,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.EnterAnimation,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.EnterAnimationFinish,
            runType: GameInputEnum_1.InputRunType.Wait
        });
    };
    TravelGameController.prototype.getTileTypesByJourneyType = function (e) {
        switch (e) {
            case GameTypeEnums_1.JourneyType.Yoga:
                return TileTypeEnum_1.ETileType.Yoga;
            case GameTypeEnums_1.JourneyType.Flip:
                return TileTypeEnum_1.ETileType.RollCard;
            case GameTypeEnums_1.JourneyType.Color:
                return TileTypeEnum_1.ETileType.ColorCard;
        }
    };
    TravelGameController.prototype.getTravelTileTypes = function (e, t) {
        return this.getTileTypesByJourneyType(t);
    };
    __decorate([
        mj.traitEvent("TravelGaCtl_gTileTypes")
    ], TravelGameController.prototype, "getTravelTileTypes", null);
    TravelGameController = __decorate([
        mj.class("TravelGameController")
    ], TravelGameController);
    return TravelGameController;
}(MainGameController_1.default));
exports.default = TravelGameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RyYXZlbEdhbWVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsa0VBQTZEO0FBQzdELG9FQUFrRjtBQUNsRix5RUFBbUc7QUFDbkcsa0VBQThEO0FBQzlELCtFQUE4RTtBQUM5RSwyRUFBc0U7QUFDdEUsdURBQWtEO0FBQ2xELDJFQUFzRTtBQUN0RSx3REFBbUQ7QUFFbkQ7SUFBa0Qsd0NBQWtCO0lBQXBFO1FBQUEscUVBd0tDO1FBdktDLGVBQVMsR0FBRyx3QkFBYyxDQUFDO1FBQzNCLGVBQVMsR0FBRywwQkFBVSxDQUFDLE1BQU0sQ0FBQzs7SUFzS2hDLENBQUM7SUFyS0Msa0RBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ2xFLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQ2xCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE9BQU87WUFDTCxnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLFFBQVEsRUFBRSxDQUFDLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDO1lBQ3pDLGVBQWUsRUFBRSxDQUFDLENBQUMsa0JBQWtCLEVBQUU7WUFDdkMsU0FBUyxFQUFFLElBQUk7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRTtZQUMzQixTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDO0lBQ0osQ0FBQztJQUNELGdEQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMscUJBQXFCLENB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dkM7SUF2S2tCLG9CQUFvQjtRQUR4QyxFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBd0t4QztJQUFELDJCQUFDO0NBeEtELEFBd0tDLENBeEtpRCw0QkFBa0IsR0F3S25FO2tCQXhLb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IER5bmFtaWNDdXJ2ZSBmcm9tICcuL3R5cGVzL0R5bmFtaWNDdXJ2ZSc7XG5pbXBvcnQgRXh0cmFjdFRvb2wgZnJvbSAnLi9jb3JlL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0VG9vbCc7XG5pbXBvcnQgeyBFR2FtZUlucHV0RW51bSwgSW5wdXRSdW5UeXBlIH0gZnJvbSAnLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBNakdhbWVUeXBlLCBMZXZlbFRhcmdldFR5cGUsIEpvdXJuZXlUeXBlIH0gZnJvbSAnLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgeyBSYW5kb21HZW5lcmF0b3IgfSBmcm9tICcuL2NvcmUvc2ltdWxhdG9yL3N0cnVjdHVyZXMvUmFuZG9tR2VuZXJhdG9yJztcbmltcG9ydCBNYWluR2FtZUNvbnRyb2xsZXIgZnJvbSAnLi9nYW1lL2NvbnRyb2xsZXIvTWFpbkdhbWVDb250cm9sbGVyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgVHJhdmVsR2FtZU1vZGVsIGZyb20gJy4vZ2FtZVBsYXkvdHJhdmVsL21vZGVsL1RyYXZlbEdhbWVNb2RlbCc7XG5pbXBvcnQgVHJhdmVsR2FtZVZpZXcgZnJvbSAnLi92aWV3L1RyYXZlbEdhbWVWaWV3JztcbkBtai5jbGFzcyhcIlRyYXZlbEdhbWVDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxHYW1lQ29udHJvbGxlciBleHRlbmRzIE1haW5HYW1lQ29udHJvbGxlciB7XG4gIHZpZXdDbGFzcyA9IFRyYXZlbEdhbWVWaWV3O1xuICBfZ2FtZVR5cGUgPSBNakdhbWVUeXBlLlRyYXZlbDtcbiAgZ2V0UmVzdGFydExldmVsRGF0YSgpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZSh0aGlzLmdhbWVUeXBlKSxcbiAgICAgIHQgPSBlLmdldExldmVsSWQoKSxcbiAgICAgIG8gPSAoZS5nZXRMZXZlbERhdGEoKSwgZS5nZXRPcmlnaW5hbExldmVsRGF0YSgpKTtcbiAgICByZXR1cm4ge1xuICAgICAgb3JpZ2luYWxMZXZlbFN0cjogbyxcbiAgICAgIGxldmVsU3RyOiBlLmdldE9yaVdpdGhTcGVjaWFsQ2FyZHMoKSB8fCBvLFxuICAgICAgbGV2ZWxEaWZmaWN1bHR5OiBlLmdldExldmVsRGlmZmljdWx0eSgpLFxuICAgICAgaXNOZXdHYW1lOiB0cnVlLFxuICAgICAgZ2FtZVR5cGU6IHRoaXMuZ2FtZVR5cGUsXG4gICAgICBsZXZlbElkOiB0LFxuICAgICAgdGlsZVR5cGVzOiBlLmdldFRpbGVUeXBlcygpLFxuICAgICAgaXNSZXN0YXJ0OiB0cnVlXG4gICAgfTtcbiAgfVxuICBnZXRMb2NhbExldmVsRGF0YSgpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZSh0aGlzLmdhbWVUeXBlKSxcbiAgICAgIHQgPSBlLmdldExldmVsSWQoKSxcbiAgICAgIG8gPSBlLmdldExldmVsRGF0YSgpO1xuICAgIHJldHVybiB7XG4gICAgICBvcmlnaW5hbExldmVsU3RyOiBlLmdldE9yaWdpbmFsTGV2ZWxEYXRhKCksXG4gICAgICBsZXZlbFN0cjogbyxcbiAgICAgIGxldmVsRGlmZmljdWx0eTogZS5nZXRMZXZlbERpZmZpY3VsdHkoKSxcbiAgICAgIGlzTmV3R2FtZTogZmFsc2UsXG4gICAgICBnYW1lVHlwZTogdGhpcy5nYW1lVHlwZSxcbiAgICAgIGxldmVsSWQ6IHQsXG4gICAgICB0aWxlVHlwZXM6IGUuZ2V0VGlsZVR5cGVzKCksXG4gICAgICBpc1Jlc3RhcnQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuICBnZXRKb3VybmV5VHlwZUNvbmZpZygpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZSh0aGlzLmdhbWVUeXBlKS5nZXRMZXZlbElkKCksXG4gICAgICB0ID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0UGxheVR5cGUoZSk7XG4gICAgcmV0dXJuIG5ldyBSYW5kb21HZW5lcmF0b3IoKS5yYW5kb21FbGVtZW50KHQpO1xuICB9XG4gIGdldEpvdXJuZXlUeXBlKCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRKb3VybmV5VHlwZUNvbmZpZygpO1xuICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZSh0aGlzLmdhbWVUeXBlKS5zZXRKb3VybmV5VHlwZShlKTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBnZXROZXdMZXZlbERhdGEoZSkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIG8gPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUodGhpcy5nYW1lVHlwZSksXG4gICAgICBuID0gby5nZXRMZXZlbElkKCksXG4gICAgICBpID0gby5nZXRPcmlnaW5hbExldmVsRGF0YSgpLFxuICAgICAgciA9IG8uZ2V0Sm91cm5leVR5cGUoKSxcbiAgICAgIHMgPSB0aGlzLmdldFRyYXZlbFRpbGVUeXBlcyhvLCByKTtcbiAgICBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmdldENvbnRlbnREYXRhKHtcbiAgICAgIGxldmVsSUQ6IG4sXG4gICAgICBsZXZlbEluZGV4OiBvLmdldExldmVsR2VuSW5kZXgoKSxcbiAgICAgIGRpZVJlc3VsdDogby5nZXREaWVSZXN1bHQoKSxcbiAgICAgIGdhbWVUeXBlOiB0aGlzLmdhbWVUeXBlLFxuICAgICAgam91cm5leVR5cGU6IHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICBvLnNldERpZVJlc3VsdCgxKTtcbiAgICAgIG8uaW5jcmVtZW50TGV2ZWxHZW5JbmRleCgpO1xuICAgICAgdmFyIGwgPSByWzBdLFxuICAgICAgICBjID0gclsxXSxcbiAgICAgICAgdSA9IHJbMl0sXG4gICAgICAgIHAgPSByWzNdLFxuICAgICAgICBmID0gcls0XTtcbiAgICAgIER5bmFtaWNDdXJ2ZS5pbnN0YW5jZS5zdXBwb3J0TW9kZSh0LmdhbWVUeXBlKSAmJiBEeW5hbWljQ3VydmUuaW5zdGFuY2UuZ2FtZVN0YXJ0KHtcbiAgICAgICAgZ2FtZVR5cGU6IHQuZ2FtZVR5cGUsXG4gICAgICAgIGxldmVsSWQ6IG4sXG4gICAgICAgIGZpbGVOYW1lOiBwLFxuICAgICAgICBsZXZlbFN0cjogbCxcbiAgICAgICAgbGV2ZWxJbmRleDogTnVtYmVyKHUpXG4gICAgICB9KTtcbiAgICAgIGUoe1xuICAgICAgICBsZXZlbFN0cjogbCxcbiAgICAgICAgbGV2ZWxEaWZmaWN1bHR5OiBjLFxuICAgICAgICBvcmlnaW5hbExldmVsU3RyOiBpLFxuICAgICAgICBpc05ld0dhbWU6IHRydWUsXG4gICAgICAgIGdhbWVUeXBlOiB0LmdhbWVUeXBlLFxuICAgICAgICBsZXZlbElkOiBuLFxuICAgICAgICB0aWxlVHlwZXM6IHMsXG4gICAgICAgIGlzUmVzdGFydDogZmFsc2UsXG4gICAgICAgIGxldmVsSW5kZXg6IHUsXG4gICAgICAgIGxldmVsTmFtZTogcCxcbiAgICAgICAgZGltZW5zaW9uTmFtZTogZixcbiAgICAgICAgaXNFeHRyYWN0TGV2ZWw6IHRydWVcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGdldElzTmV3R2FtZSgpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZSh0aGlzLmdhbWVUeXBlKSxcbiAgICAgIHQgPSBlLmdldExldmVsRGF0YSgpLFxuICAgICAgbyA9IGUuZ2V0T3JpZ2luYWxMZXZlbERhdGEoKTtcbiAgICByZXR1cm4gIXQgfHwgIW87XG4gIH1cbiAgZ2V0TGV2ZWxEYXRhKGUgPSBmYWxzZSwgdD8pIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgdmFyIG4gPSB0aGlzLmdldElzTmV3R2FtZSgpLFxuICAgICAgaSA9IHRoaXMuZ2V0Sm91cm5leVR5cGUoKTtcbiAgICBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmluaXREYXRhKHRoaXMuZ2FtZVR5cGUsIGkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgdmFyIGkgPSBvLmdldFJlc3RhcnRMZXZlbERhdGEoKTtcbiAgICAgICAgdChpKTtcbiAgICAgIH0gZWxzZSBpZiAobikgby5nZXROZXdMZXZlbERhdGEoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdChlKTtcbiAgICAgIH0pO2Vsc2Uge1xuICAgICAgICBpID0gby5nZXRMb2NhbExldmVsRGF0YSgpO1xuICAgICAgICB0KGkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGluaXRJbnB1dChlLCB0KSB7XG4gICAgdGhpcy5wdXNoSW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5TdGFydFNpbXVsYXRvcixcbiAgICAgIHJ1blR5cGU6IElucHV0UnVuVHlwZS5XYWl0XG4gICAgfSk7XG4gICAgdGhpcy5wdXNoSW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5TdGFydEluaXQsXG4gICAgICBydW5UeXBlOiBJbnB1dFJ1blR5cGUuV2FpdFxuICAgIH0pO1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uU2V0TGV2ZWwsXG4gICAgICBsZXZlbERhdGE6IGUsXG4gICAgICBydW5UeXBlOiBJbnB1dFJ1blR5cGUuV2FpdFxuICAgIH0pO1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uSW5pdENvbGxlY3RDYXJkLFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkluaXRFbmRTdHJhdGVneSxcbiAgICAgIGVuZFN0cmF0ZWd5OiBMZXZlbFRhcmdldFR5cGUuS2lsbENvbGxlY3RDYXJkLFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkNob29zZUxheW91dCxcbiAgICAgIGNvbnRlbnRTaXplOiB0LFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkluaXRWaWV3LFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkluaXRWaWV3RmluaXNoLFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkVudGVyQW5pbWF0aW9uLFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkVudGVyQW5pbWF0aW9uRmluaXNoLFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgfVxuICBnZXRUaWxlVHlwZXNCeUpvdXJuZXlUeXBlKGUpIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgSm91cm5leVR5cGUuWW9nYTpcbiAgICAgICAgcmV0dXJuIEVUaWxlVHlwZS5Zb2dhO1xuICAgICAgY2FzZSBKb3VybmV5VHlwZS5GbGlwOlxuICAgICAgICByZXR1cm4gRVRpbGVUeXBlLlJvbGxDYXJkO1xuICAgICAgY2FzZSBKb3VybmV5VHlwZS5Db2xvcjpcbiAgICAgICAgcmV0dXJuIEVUaWxlVHlwZS5Db2xvckNhcmQ7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVHJhdmVsR2FDdGxfZ1RpbGVUeXBlc1wiKVxuICBnZXRUcmF2ZWxUaWxlVHlwZXMoZSwgdCkge1xuICAgIHJldHVybiB0aGlzLmdldFRpbGVUeXBlc0J5Sm91cm5leVR5cGUodCk7XG4gIH1cbn0iXX0=