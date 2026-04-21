
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DailyChallengeController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '952c4Ju5ARPmrilX+gdl+GD', 'DailyChallengeController');
// Scripts/DailyChallengeController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicCurve_1 = require("./types/DynamicCurve");
var ExtractTool_1 = require("./core/extractQuestion/ExtractTool");
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var MainGameController_1 = require("./game/controller/MainGameController");
var UserModel_1 = require("./gamePlay/user/UserModel");
var DailyChallengeView_1 = require("./view/DailyChallengeView");
var DailyChallengeController = /** @class */ (function (_super) {
    __extends(DailyChallengeController, _super);
    function DailyChallengeController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = DailyChallengeView_1.default;
        _this._gameType = GameTypeEnums_1.MjGameType.DailyChallenge;
        return _this;
    }
    DailyChallengeController.prototype.viewDidShow = function (t) {
        this.args = t || this.args;
        _super.prototype.viewDidShow.call(this);
    };
    DailyChallengeController.prototype.getRestartLevelData = function () {
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
    DailyChallengeController.prototype.getLocalLevelData = function () {
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
    DailyChallengeController.prototype.getNewLevelData = function (e) {
        var t = this, o = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), n = o.getLevelId(), i = o.getOriginalLevelData(), r = this.getChallengeTileTypes(o), s = o.getDailyChallengeTimestamp();
        ExtractTool_1.default.getInstance().getContentData({
            levelIndex: o.getLevelGenIndex(),
            dieResult: o.getDieResult(),
            gameType: this.gameType,
            challengeDate: s
        }).then(function (l) {
            o.setDieResult(1);
            o.incrementLevelGenIndex();
            var s = l[0], c = l[1], u = l[2], p = l[3], f = l[4];
            DynamicCurve_1.default.instance.supportMode(t.gameType) && DynamicCurve_1.default.instance.gameStart({
                gameType: t.gameType,
                levelId: n,
                fileName: p,
                levelStr: s,
                levelIndex: Number(u)
            });
            e({
                levelStr: s,
                levelDifficulty: c,
                originalLevelStr: i,
                isNewGame: true,
                gameType: t.gameType,
                levelId: n,
                tileTypes: r,
                isRestart: false,
                levelIndex: u,
                levelName: p,
                dimensionName: f,
                isExtractLevel: true
            });
        });
    };
    DailyChallengeController.prototype.getIsNewGame = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelData(), o = e.getOriginalLevelData();
        return !t || !o;
    };
    DailyChallengeController.prototype.getLevelData = function (e, t) {
        if (e === void 0) { e = false; }
        var o = this;
        var n = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType);
        this.checkAndUpdateTimestamp(n);
        var i = this.getIsNewGame();
        ExtractTool_1.default.getInstance().initData(this.gameType).then(function () {
            if (e) {
                var n = o.getRestartLevelData();
                t(n);
            }
            else if (i)
                o.getNewLevelData(function (e) {
                    t(e);
                });
            else {
                n = o.getLocalLevelData();
                t(n);
            }
        });
    };
    DailyChallengeController.prototype.checkAndUpdateTimestamp = function (e) {
        var t, o = null === (t = this.args) || void 0 === t ? void 0 : t.timeStamp;
        if (o) {
            if (e.getDailyChallengeTimestamp() !== o) {
                e.resetGameData();
                e.setDailyChallengeTimestamp(o);
            }
        }
    };
    DailyChallengeController.prototype.getChallengeTileTypes = function () {
        return "";
    };
    DailyChallengeController.prototype.initInput = function (e, t) {
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
    __decorate([
        mj.traitEvent("DailyChCtrl_getTileTypes")
    ], DailyChallengeController.prototype, "getChallengeTileTypes", null);
    DailyChallengeController = __decorate([
        mj.class("DailyChallengeController")
    ], DailyChallengeController);
    return DailyChallengeController;
}(MainGameController_1.default));
exports.default = DailyChallengeController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0RhaWx5Q2hhbGxlbmdlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBQ2hELGtFQUE2RDtBQUM3RCxvRUFBa0Y7QUFDbEYseUVBQXFFO0FBQ3JFLDJFQUFzRTtBQUN0RSx1REFBa0Q7QUFDbEQsZ0VBQTJEO0FBRTNEO0lBQXNELDRDQUFrQjtJQUF4RTtRQUFBLHFFQXlKQztRQXhKQyxlQUFTLEdBQUcsNEJBQWtCLENBQUM7UUFDL0IsZUFBUyxHQUFHLDBCQUFVLENBQUMsY0FBYyxDQUFDOztJQXVKeEMsQ0FBQztJQXRKQyw4Q0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0Qsc0RBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ2xFLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQ2xCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE9BQU87WUFDTCxnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLFFBQVEsRUFBRSxDQUFDLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDO1lBQ3pDLGVBQWUsRUFBRSxDQUFDLENBQUMsa0JBQWtCLEVBQUU7WUFDdkMsU0FBUyxFQUFFLElBQUk7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRTtZQUMzQixTQUFT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LFNBQVMsRUFBRSw4QkFBYyxDQUFDLFFBQVE7WUFDbEMsT0FBTyxFQUFFLDRCQUFZLENBQUMsSUFBSTtTQUMzQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2IsU0FBUyxFQUFFLDhCQUFjLENBQUMsY0FBYztZQUN4QyxPQUFPLEVBQUUsNEJBQVksQ0FBQyxJQUFJO1NBQzNCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUM7WUFDYixTQUFTLEVBQUUsOEJBQWMsQ0FBQyxjQUFjO1lBQ3hDLE9BQU8sRUFBRSw0QkFBWSxDQUFDLElBQUk7U0FDM0IsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLFNBQVMsRUFBRSw4QkFBYyxDQUFDLG9CQUFvQjtZQUM5QyxPQUFPLEVBQUUsNEJBQVksQ0FBQyxJQUFJO1NBQzNCLENBQUMsQ0FBQztJQUNMLENBQUM7SUF0Q0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDO3lFQUd6QztJQXBIa0Isd0JBQXdCO1FBRDVDLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBeUo1QztJQUFELCtCQUFDO0NBekpELEFBeUpDLENBekpxRCw0QkFBa0IsR0F5SnZFO2tCQXpKb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IER5bmFtaWNDdXJ2ZSBmcm9tICcuL3R5cGVzL0R5bmFtaWNDdXJ2ZSc7XG5pbXBvcnQgRXh0cmFjdFRvb2wgZnJvbSAnLi9jb3JlL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0VG9vbCc7XG5pbXBvcnQgeyBFR2FtZUlucHV0RW51bSwgSW5wdXRSdW5UeXBlIH0gZnJvbSAnLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBNYWluR2FtZUNvbnRyb2xsZXIgZnJvbSAnLi9nYW1lL2NvbnRyb2xsZXIvTWFpbkdhbWVDb250cm9sbGVyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgRGFpbHlDaGFsbGVuZ2VWaWV3IGZyb20gJy4vdmlldy9EYWlseUNoYWxsZW5nZVZpZXcnO1xuQG1qLmNsYXNzKFwiRGFpbHlDaGFsbGVuZ2VDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseUNoYWxsZW5nZUNvbnRyb2xsZXIgZXh0ZW5kcyBNYWluR2FtZUNvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBEYWlseUNoYWxsZW5nZVZpZXc7XG4gIF9nYW1lVHlwZSA9IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2U7XG4gIHZpZXdEaWRTaG93KHQpIHtcbiAgICB0aGlzLmFyZ3MgPSB0IHx8IHRoaXMuYXJncztcbiAgICBzdXBlci52aWV3RGlkU2hvdy5jYWxsKHRoaXMpO1xuICB9XG4gIGdldFJlc3RhcnRMZXZlbERhdGEoKSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUodGhpcy5nYW1lVHlwZSksXG4gICAgICB0ID0gZS5nZXRMZXZlbElkKCksXG4gICAgICBvID0gKGUuZ2V0TGV2ZWxEYXRhKCksIGUuZ2V0T3JpZ2luYWxMZXZlbERhdGEoKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yaWdpbmFsTGV2ZWxTdHI6IG8sXG4gICAgICBsZXZlbFN0cjogZS5nZXRPcmlXaXRoU3BlY2lhbENhcmRzKCkgfHwgbyxcbiAgICAgIGxldmVsRGlmZmljdWx0eTogZS5nZXRMZXZlbERpZmZpY3VsdHkoKSxcbiAgICAgIGlzTmV3R2FtZTogdHJ1ZSxcbiAgICAgIGdhbWVUeXBlOiB0aGlzLmdhbWVUeXBlLFxuICAgICAgbGV2ZWxJZDogdCxcbiAgICAgIHRpbGVUeXBlczogZS5nZXRUaWxlVHlwZXMoKSxcbiAgICAgIGlzUmVzdGFydDogdHJ1ZVxuICAgIH07XG4gIH1cbiAgZ2V0TG9jYWxMZXZlbERhdGEoKSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUodGhpcy5nYW1lVHlwZSksXG4gICAgICB0ID0gZS5nZXRMZXZlbElkKCksXG4gICAgICBvID0gZS5nZXRMZXZlbERhdGEoKTtcbiAgICByZXR1cm4ge1xuICAgICAgb3JpZ2luYWxMZXZlbFN0cjogZS5nZXRPcmlnaW5hbExldmVsRGF0YSgpLFxuICAgICAgbGV2ZWxTdHI6IG8sXG4gICAgICBsZXZlbERpZmZpY3VsdHk6IGUuZ2V0TGV2ZWxEaWZmaWN1bHR5KCksXG4gICAgICBpc05ld0dhbWU6IGZhbHNlLFxuICAgICAgZ2FtZVR5cGU6IHRoaXMuZ2FtZVR5cGUsXG4gICAgICBsZXZlbElkOiB0LFxuICAgICAgdGlsZVR5cGVzOiBlLmdldFRpbGVUeXBlcygpLFxuICAgICAgaXNSZXN0YXJ0OiBmYWxzZVxuICAgIH07XG4gIH1cbiAgZ2V0TmV3TGV2ZWxEYXRhKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBvID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKHRoaXMuZ2FtZVR5cGUpLFxuICAgICAgbiA9IG8uZ2V0TGV2ZWxJZCgpLFxuICAgICAgaSA9IG8uZ2V0T3JpZ2luYWxMZXZlbERhdGEoKSxcbiAgICAgIHIgPSB0aGlzLmdldENoYWxsZW5nZVRpbGVUeXBlcyhvKSxcbiAgICAgIHMgPSBvLmdldERhaWx5Q2hhbGxlbmdlVGltZXN0YW1wKCk7XG4gICAgRXh0cmFjdFRvb2wuZ2V0SW5zdGFuY2UoKS5nZXRDb250ZW50RGF0YSh7XG4gICAgICBsZXZlbEluZGV4OiBvLmdldExldmVsR2VuSW5kZXgoKSxcbiAgICAgIGRpZVJlc3VsdDogby5nZXREaWVSZXN1bHQoKSxcbiAgICAgIGdhbWVUeXBlOiB0aGlzLmdhbWVUeXBlLFxuICAgICAgY2hhbGxlbmdlRGF0ZTogc1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGwpIHtcbiAgICAgIG8uc2V0RGllUmVzdWx0KDEpO1xuICAgICAgby5pbmNyZW1lbnRMZXZlbEdlbkluZGV4KCk7XG4gICAgICB2YXIgcyA9IGxbMF0sXG4gICAgICAgIGMgPSBsWzFdLFxuICAgICAgICB1ID0gbFsyXSxcbiAgICAgICAgcCA9IGxbM10sXG4gICAgICAgIGYgPSBsWzRdO1xuICAgICAgRHluYW1pY0N1cnZlLmluc3RhbmNlLnN1cHBvcnRNb2RlKHQuZ2FtZVR5cGUpICYmIER5bmFtaWNDdXJ2ZS5pbnN0YW5jZS5nYW1lU3RhcnQoe1xuICAgICAgICBnYW1lVHlwZTogdC5nYW1lVHlwZSxcbiAgICAgICAgbGV2ZWxJZDogbixcbiAgICAgICAgZmlsZU5hbWU6IHAsXG4gICAgICAgIGxldmVsU3RyOiBzLFxuICAgICAgICBsZXZlbEluZGV4OiBOdW1iZXIodSlcbiAgICAgIH0pO1xuICAgICAgZSh7XG4gICAgICAgIGxldmVsU3RyOiBzLFxuICAgICAgICBsZXZlbERpZmZpY3VsdHk6IGMsXG4gICAgICAgIG9yaWdpbmFsTGV2ZWxTdHI6IGksXG4gICAgICAgIGlzTmV3R2FtZTogdHJ1ZSxcbiAgICAgICAgZ2FtZVR5cGU6IHQuZ2FtZVR5cGUsXG4gICAgICAgIGxldmVsSWQ6IG4sXG4gICAgICAgIHRpbGVUeXBlczogcixcbiAgICAgICAgaXNSZXN0YXJ0OiBmYWxzZSxcbiAgICAgICAgbGV2ZWxJbmRleDogdSxcbiAgICAgICAgbGV2ZWxOYW1lOiBwLFxuICAgICAgICBkaW1lbnNpb25OYW1lOiBmLFxuICAgICAgICBpc0V4dHJhY3RMZXZlbDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZ2V0SXNOZXdHYW1lKCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKHRoaXMuZ2FtZVR5cGUpLFxuICAgICAgdCA9IGUuZ2V0TGV2ZWxEYXRhKCksXG4gICAgICBvID0gZS5nZXRPcmlnaW5hbExldmVsRGF0YSgpO1xuICAgIHJldHVybiAhdCB8fCAhbztcbiAgfVxuICBnZXRMZXZlbERhdGEoZSA9IGZhbHNlLCB0Pykge1xuICAgIHZhciBvID0gdGhpcztcbiAgICB2YXIgbiA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZSh0aGlzLmdhbWVUeXBlKTtcbiAgICB0aGlzLmNoZWNrQW5kVXBkYXRlVGltZXN0YW1wKG4pO1xuICAgIHZhciBpID0gdGhpcy5nZXRJc05ld0dhbWUoKTtcbiAgICBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmluaXREYXRhKHRoaXMuZ2FtZVR5cGUpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgdmFyIG4gPSBvLmdldFJlc3RhcnRMZXZlbERhdGEoKTtcbiAgICAgICAgdChuKTtcbiAgICAgIH0gZWxzZSBpZiAoaSkgby5nZXROZXdMZXZlbERhdGEoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdChlKTtcbiAgICAgIH0pO2Vsc2Uge1xuICAgICAgICBuID0gby5nZXRMb2NhbExldmVsRGF0YSgpO1xuICAgICAgICB0KG4pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNoZWNrQW5kVXBkYXRlVGltZXN0YW1wKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8gPSBudWxsID09PSAodCA9IHRoaXMuYXJncykgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC50aW1lU3RhbXA7XG4gICAgaWYgKG8pIHtcbiAgICAgIGlmIChlLmdldERhaWx5Q2hhbGxlbmdlVGltZXN0YW1wKCkgIT09IG8pIHtcbiAgICAgICAgZS5yZXNldEdhbWVEYXRhKCk7XG4gICAgICAgIGUuc2V0RGFpbHlDaGFsbGVuZ2VUaW1lc3RhbXAobyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRGFpbHlDaEN0cmxfZ2V0VGlsZVR5cGVzXCIpXG4gIGdldENoYWxsZW5nZVRpbGVUeXBlcygpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICBpbml0SW5wdXQoZSwgdCkge1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uU3RhcnRTaW11bGF0b3IsXG4gICAgICBydW5UeXBlOiBJbnB1dFJ1blR5cGUuV2FpdFxuICAgIH0pO1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uU3RhcnRJbml0LFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlNldExldmVsLFxuICAgICAgbGV2ZWxEYXRhOiBlLFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkNob29zZUxheW91dCxcbiAgICAgIGNvbnRlbnRTaXplOiB0LFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkluaXRWaWV3LFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkluaXRWaWV3RmluaXNoLFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkVudGVyQW5pbWF0aW9uLFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkVudGVyQW5pbWF0aW9uRmluaXNoLFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgfVxufSJdfQ==