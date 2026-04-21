
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ClassicController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1ee0jTZHVJoKXOXRRWv5hO', 'ClassicController');
// Scripts/ClassicController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicCurve_1 = require("./types/DynamicCurve");
var ExtractTool_1 = require("./core/extractQuestion/ExtractTool");
var ClassicExtractTool_1 = require("./ClassicExtractTool");
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var MainGameController_1 = require("./game/controller/MainGameController");
var UserModel_1 = require("./gamePlay/user/UserModel");
var ClassicView_1 = require("./view/ClassicView");
var ClassicController = /** @class */ (function (_super) {
    __extends(ClassicController, _super);
    function ClassicController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = ClassicView_1.default;
        _this._gameType = GameTypeEnums_1.MjGameType.Classic;
        return _this;
    }
    ClassicController.prototype.viewDidShow = function (t) {
        this.args = t || this.args;
        ClassicExtractTool_1.ClassicExtractTool.getInstance().init();
        _super.prototype.viewDidShow.call(this);
    };
    ClassicController.prototype.initDependRes = function () {
        var t, o;
        _super.prototype.initDependRes.call(this);
        this.preloadResMap.Prefab || (this.preloadResMap.Prefab = []);
        "string" == typeof this.preloadResMap.Prefab && (this.preloadResMap.Prefab = [this.preloadResMap.Prefab]);
        var n = this.preloadResMap.Prefab;
        try {
            for (var i = __values(["l_classic:prefabs/HighestScoreItem", "l_classic:prefabs/StageRightItem"]), r = i.next(); !r.done; r = i.next()) {
                var l = r.value;
                n.includes(l) || n.push(l);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    ClassicController.prototype.initGameTime = function () {
        _super.prototype.initGameTime.call(this);
        UserModel_1.default.getInstance().getGameDataByGameType(this.gameType).resetSwimlaneTime();
    };
    ClassicController.prototype.getRestartLevelData = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelId(), o = (e.getLevelData(), e.getOriginalLevelData()), n = e.getOriWithSpecialCards(), i = this.getClassicTileTypes(e);
        return {
            originalLevelStr: o,
            levelStr: n || o,
            levelDifficulty: e.getLevelDifficulty(),
            isNewGame: true,
            gameType: this.gameType,
            levelId: t,
            tileTypes: i,
            isRestart: true
        };
    };
    ClassicController.prototype.getLocalLevelData = function () {
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
    ClassicController.prototype.getNewLevelData = function (e) {
        var t = this, o = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), n = o.getLevelId(), i = o.getOriginalLevelData(), r = this.getClassicTileTypes(o);
        ClassicExtractTool_1.ClassicExtractTool.getInstance().extractInitial().then(function (o) {
            var a = o.levelStr, s = o.index, c = o.libName;
            DynamicCurve_1.default.instance.supportMode(t.gameType) && DynamicCurve_1.default.instance.gameStart({
                gameType: t.gameType,
                levelId: n,
                fileName: c,
                levelStr: a,
                levelIndex: Number(s)
            });
            e({
                levelStr: a,
                levelDifficulty: 0,
                originalLevelStr: i,
                isNewGame: true,
                gameType: t.gameType,
                levelId: n,
                tileTypes: r,
                isRestart: false,
                levelIndex: s,
                levelName: c,
                isExtractLevel: true,
                difficultyType: o.difficultyType
            });
        });
    };
    ClassicController.prototype.getIsNewGame = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelData(), o = e.getOriginalLevelData();
        return !t || !o;
    };
    ClassicController.prototype.getLevelData = function (e, t) {
        if (e === void 0) { e = false; }
        var o = this;
        var n = this.getIsNewGame();
        ExtractTool_1.default.getInstance().initData(this.gameType).then(function () {
            if (e) {
                if (o.isRestartExtractLevel())
                    o.getExtractRestartLevelData(function (e) {
                        t(e);
                    });
                else {
                    var i = o.getRestartLevelData();
                    t(i);
                }
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
    ClassicController.prototype.isRestartExtractLevel = function () {
        return true;
    };
    ClassicController.prototype.getExtractRestartLevelData = function (e) {
        this.getNewLevelData(function (t) {
            t.isRestart = true;
            e(t);
        });
    };
    ClassicController.prototype.getClassicTileTypes = function () {
        return "";
    };
    ClassicController.prototype.isOpenGenerateState = function () {
        return false;
    };
    ClassicController.prototype.initInput = function (e, t, o) {
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.StartSimulator,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.StartInit,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.OpenGenerateState,
            runType: GameInputEnum_1.InputRunType.Wait,
            openGenerateState: this.isOpenGenerateState()
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.SetLevelClassic,
            levelData: e,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.ChooseLayoutClassic,
            offsetY: o,
            contentSize: t,
            maxRow: 7,
            maxCol: 5,
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
        mj.traitEvent("ClcCtl_isRestartExtLv")
    ], ClassicController.prototype, "isRestartExtractLevel", null);
    __decorate([
        mj.traitEvent("ClcCtl_isOpenGenState")
    ], ClassicController.prototype, "isOpenGenerateState", null);
    ClassicController = __decorate([
        mj.class("ClassicController")
    ], ClassicController);
    return ClassicController;
}(MainGameController_1.default));
exports.default = ClassicController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NsYXNzaWNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsa0VBQTZEO0FBQzdELDJEQUEwRDtBQUMxRCxvRUFBa0Y7QUFDbEYseUVBQXFFO0FBQ3JFLDJFQUFzRTtBQUN0RSx1REFBa0Q7QUFDbEQsa0RBQTZDO0FBRTdDO0lBQStDLHFDQUFrQjtJQUFqRTtRQUFBLHFFQTBMQztRQXpMQyxlQUFTLEdBQUcscUJBQVcsQ0FBQztRQUN4QixlQUFTLEdBQUcsMEJBQVUsQ0FBQyxPQUFPLENBQUM7O0lBd0xqQyxDQUFDO0lBdkxDLHVDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQix1Q0FBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCx5Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsaUJBQU0sYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzlELFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdB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LEVBQUUsQ0FBQztZQUNkLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsNEJBQVksQ0FBQyxJQUFJO1NBQzNCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUM7WUFDYixTQUFTLEVBQUUsOEJBQWMsQ0FBQyxRQUFRO1lBQ2xDLE9BQU8sRUFBRSw0QkFBWSxDQUFDLElBQUk7U0FDM0IsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLFNBQVMsRUFBRSw4QkFBYyxDQUFDLGNBQWM7WUFDeEMsT0FBTyxFQUFFLDRCQUFZLENBQUMsSUFBSTtTQUMzQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2IsU0FBUyxFQUFFLDhCQUFjLENBQUMsY0FBYztZQUN4QyxPQUFPLEVBQUUsNEJBQVksQ0FBQyxJQUFJO1NBQzNCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUM7WUFDYixTQUFTLEVBQUUsOEJBQWMsQ0FBQyxvQkFBb0I7WUFDOUMsT0FBTyxFQUFFLDRCQUFZLENBQUMsSUFBSTtTQUMzQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBM0REO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztrRUFHdEM7SUFXRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7Z0VBR3RDO0lBN0lrQixpQkFBaUI7UUFEckMsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztPQUNULGlCQUFpQixDQTBMckM7SUFBRCx3QkFBQztDQTFMRCxBQTBMQyxDQTFMOEMsNEJBQWtCLEdBMExoRTtrQkExTG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEeW5hbWljQ3VydmUgZnJvbSAnLi90eXBlcy9EeW5hbWljQ3VydmUnO1xuaW1wb3J0IEV4dHJhY3RUb29sIGZyb20gJy4vY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdFRvb2wnO1xuaW1wb3J0IHsgQ2xhc3NpY0V4dHJhY3RUb29sIH0gZnJvbSAnLi9DbGFzc2ljRXh0cmFjdFRvb2wnO1xuaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0sIElucHV0UnVuVHlwZSB9IGZyb20gJy4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgTWFpbkdhbWVDb250cm9sbGVyIGZyb20gJy4vZ2FtZS9jb250cm9sbGVyL01haW5HYW1lQ29udHJvbGxlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4vZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IENsYXNzaWNWaWV3IGZyb20gJy4vdmlldy9DbGFzc2ljVmlldyc7XG5AbWouY2xhc3MoXCJDbGFzc2ljQ29udHJvbGxlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhc3NpY0NvbnRyb2xsZXIgZXh0ZW5kcyBNYWluR2FtZUNvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBDbGFzc2ljVmlldztcbiAgX2dhbWVUeXBlID0gTWpHYW1lVHlwZS5DbGFzc2ljO1xuICB2aWV3RGlkU2hvdyh0KSB7XG4gICAgdGhpcy5hcmdzID0gdCB8fCB0aGlzLmFyZ3M7XG4gICAgQ2xhc3NpY0V4dHJhY3RUb29sLmdldEluc3RhbmNlKCkuaW5pdCgpO1xuICAgIHN1cGVyLnZpZXdEaWRTaG93LmNhbGwodGhpcyk7XG4gIH1cbiAgaW5pdERlcGVuZFJlcygpIHtcbiAgICB2YXIgdCwgbztcbiAgICBzdXBlci5pbml0RGVwZW5kUmVzLmNhbGwodGhpcyk7XG4gICAgdGhpcy5wcmVsb2FkUmVzTWFwLlByZWZhYiB8fCAodGhpcy5wcmVsb2FkUmVzTWFwLlByZWZhYiA9IFtdKTtcbiAgICBcInN0cmluZ1wiID09IHR5cGVvZiB0aGlzLnByZWxvYWRSZXNNYXAuUHJlZmFiICYmICh0aGlzLnByZWxvYWRSZXNNYXAuUHJlZmFiID0gW3RoaXMucHJlbG9hZFJlc01hcC5QcmVmYWJdKTtcbiAgICB2YXIgbiA9IHRoaXMucHJlbG9hZFJlc01hcC5QcmVmYWI7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyhbXCJsX2NsYXNzaWM6cHJlZmFicy9IaWdoZXN0U2NvcmVJdGVtXCIsIFwibF9jbGFzc2ljOnByZWZhYnMvU3RhZ2VSaWdodEl0ZW1cIl0pLCByID0gaS5uZXh0KCk7ICFyLmRvbmU7IHIgPSBpLm5leHQoKSkge1xuICAgICAgICB2YXIgbCA9IHIudmFsdWU7XG4gICAgICAgIG4uaW5jbHVkZXMobCkgfHwgbi5wdXNoKGwpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICByICYmICFyLmRvbmUgJiYgKG8gPSBpLnJldHVybikgJiYgby5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGluaXRHYW1lVGltZSgpIHtcbiAgICBzdXBlci5pbml0R2FtZVRpbWUuY2FsbCh0aGlzKTtcbiAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUodGhpcy5nYW1lVHlwZSkucmVzZXRTd2ltbGFuZVRpbWUoKTtcbiAgfVxuICBnZXRSZXN0YXJ0TGV2ZWxEYXRhKCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKHRoaXMuZ2FtZVR5cGUpLFxuICAgICAgdCA9IGUuZ2V0TGV2ZWxJZCgpLFxuICAgICAgbyA9IChlLmdldExldmVsRGF0YSgpLCBlLmdldE9yaWdpbmFsTGV2ZWxEYXRhKCkpLFxuICAgICAgbiA9IGUuZ2V0T3JpV2l0aFNwZWNpYWxDYXJkcygpLFxuICAgICAgaSA9IHRoaXMuZ2V0Q2xhc3NpY1RpbGVUeXBlcyhlKTtcbiAgICByZXR1cm4ge1xuICAgICAgb3JpZ2luYWxMZXZlbFN0cjogbyxcbiAgICAgIGxldmVsU3RyOiBuIHx8IG8sXG4gICAgICBsZXZlbERpZmZpY3VsdHk6IGUuZ2V0TGV2ZWxEaWZmaWN1bHR5KCksXG4gICAgICBpc05ld0dhbWU6IHRydWUsXG4gICAgICBnYW1lVHlwZTogdGhpcy5nYW1lVHlwZSxcbiAgICAgIGxldmVsSWQ6IHQsXG4gICAgICB0aWxlVHlwZXM6IGksXG4gICAgICBpc1Jlc3RhcnQ6IHRydWVcbiAgICB9O1xuICB9XG4gIGdldExvY2FsTGV2ZWxEYXRhKCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKHRoaXMuZ2FtZVR5cGUpLFxuICAgICAgdCA9IGUuZ2V0TGV2ZWxJZCgpLFxuICAgICAgbyA9IGUuZ2V0TGV2ZWxEYXRhKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yaWdpbmFsTGV2ZWxTdHI6IGUuZ2V0T3JpZ2luYWxMZXZlbERhdGEoKSxcbiAgICAgIGxldmVsU3RyOiBvLFxuICAgICAgbGV2ZWxEaWZmaWN1bHR5OiBlLmdldExldmVsRGlmZmljdWx0eSgpLFxuICAgICAgaXNOZXdHYW1lOiBmYWxzZSxcbiAgICAgIGdhbWVUeXBlOiB0aGlzLmdhbWVUeXBlLFxuICAgICAgbGV2ZWxJZDogdCxcbiAgICAgIHRpbGVUeXBlczogZS5nZXRUaWxlVHlwZXMoKSxcbiAgICAgIGlzUmVzdGFydDogZmFsc2VcbiAgICB9O1xuICB9XG4gIGdldE5ld0xldmVsRGF0YShlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgbyA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZSh0aGlzLmdhbWVUeXBlKSxcbiAgICAgIG4gPSBvLmdldExldmVsSWQoKSxcbiAgICAgIGkgPSBvLmdldE9yaWdpbmFsTGV2ZWxEYXRhKCksXG4gICAgICByID0gdGhpcy5nZXRDbGFzc2ljVGlsZVR5cGVzKG8pO1xuICAgIENsYXNzaWNFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmV4dHJhY3RJbml0aWFsKCkudGhlbihmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGEgPSBvLmxldmVsU3RyLFxuICAgICAgICBzID0gby5pbmRleCxcbiAgICAgICAgYyA9IG8ubGliTmFtZTtcbiAgICAgIER5bmFtaWNDdXJ2ZS5pbnN0YW5jZS5zdXBwb3J0TW9kZSh0LmdhbWVUeXBlKSAmJiBEeW5hbWljQ3VydmUuaW5zdGFuY2UuZ2FtZVN0YXJ0KHtcbiAgICAgICAgZ2FtZVR5cGU6IHQuZ2FtZVR5cGUsXG4gICAgICAgIGxldmVsSWQ6IG4sXG4gICAgICAgIGZpbGVOYW1lOiBjLFxuICAgICAgICBsZXZlbFN0cjogYSxcbiAgICAgICAgbGV2ZWxJbmRleDogTnVtYmVyKHMpXG4gICAgICB9KTtcbiAgICAgIGUoe1xuICAgICAgICBsZXZlbFN0cjogYSxcbiAgICAgICAgbGV2ZWxEaWZmaWN1bHR5OiAwLFxuICAgICAgICBvcmlnaW5hbExldmVsU3RyOiBpLFxuICAgICAgICBpc05ld0dhbWU6IHRydWUsXG4gICAgICAgIGdhbWVUeXBlOiB0LmdhbWVUeXBlLFxuICAgICAgICBsZXZlbElkOiBuLFxuICAgICAgICB0aWxlVHlwZXM6IHIsXG4gICAgICAgIGlzUmVzdGFydDogZmFsc2UsXG4gICAgICAgIGxldmVsSW5kZXg6IHMsXG4gICAgICAgIGxldmVsTmFtZTogYyxcbiAgICAgICAgaXNFeHRyYWN0TGV2ZWw6IHRydWUsXG4gICAgICAgIGRpZmZpY3VsdHlUeXBlOiBvLmRpZmZpY3VsdHlUeXBlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBnZXRJc05ld0dhbWUoKSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUodGhpcy5nYW1lVHlwZSksXG4gICAgICB0ID0gZS5nZXRMZXZlbERhdGEoKSxcbiAgICAgIG8gPSBlLmdldE9yaWdpbmFsTGV2ZWxEYXRhKCk7XG4gICAgcmV0dXJuICF0IHx8ICFvO1xuICB9XG4gIGdldExldmVsRGF0YShlID0gZmFsc2UsIHQ/KSB7XG4gICAgdmFyIG8gPSB0aGlzO1xuICAgIHZhciBuID0gdGhpcy5nZXRJc05ld0dhbWUoKTtcbiAgICBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmluaXREYXRhKHRoaXMuZ2FtZVR5cGUpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgaWYgKG8uaXNSZXN0YXJ0RXh0cmFjdExldmVsKCkpIG8uZ2V0RXh0cmFjdFJlc3RhcnRMZXZlbERhdGEoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB0KGUpO1xuICAgICAgICB9KTtlbHNlIHtcbiAgICAgICAgICB2YXIgaSA9IG8uZ2V0UmVzdGFydExldmVsRGF0YSgpO1xuICAgICAgICAgIHQoaSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobikgby5nZXROZXdMZXZlbERhdGEoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdChlKTtcbiAgICAgIH0pO2Vsc2Uge1xuICAgICAgICBpID0gby5nZXRMb2NhbExldmVsRGF0YSgpO1xuICAgICAgICB0KGkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2xjQ3RsX2lzUmVzdGFydEV4dEx2XCIpXG4gIGlzUmVzdGFydEV4dHJhY3RMZXZlbCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBnZXRFeHRyYWN0UmVzdGFydExldmVsRGF0YShlKSB7XG4gICAgdGhpcy5nZXROZXdMZXZlbERhdGEoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHQuaXNSZXN0YXJ0ID0gdHJ1ZTtcbiAgICAgIGUodCk7XG4gICAgfSk7XG4gIH1cbiAgZ2V0Q2xhc3NpY1RpbGVUeXBlcygpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNsY0N0bF9pc09wZW5HZW5TdGF0ZVwiKVxuICBpc09wZW5HZW5lcmF0ZVN0YXRlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpbml0SW5wdXQoZSwgdCwgbykge1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uU3RhcnRTaW11bGF0b3IsXG4gICAgICBydW5UeXBlOiBJbnB1dFJ1blR5cGUuV2FpdFxuICAgIH0pO1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uU3RhcnRJbml0LFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLk9wZW5HZW5lcmF0ZVN0YXRlLFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXQsXG4gICAgICBvcGVuR2VuZXJhdGVTdGF0ZTogdGhpcy5pc09wZW5HZW5lcmF0ZVN0YXRlKClcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlNldExldmVsQ2xhc3NpYyxcbiAgICAgIGxldmVsRGF0YTogZSxcbiAgICAgIHJ1blR5cGU6IElucHV0UnVuVHlwZS5XYWl0XG4gICAgfSk7XG4gICAgdGhpcy5wdXNoSW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5DaG9vc2VMYXlvdXRDbGFzc2ljLFxuICAgICAgb2Zmc2V0WTogbyxcbiAgICAgIGNvbnRlbnRTaXplOiB0LFxuICAgICAgbWF4Um93OiA3LFxuICAgICAgbWF4Q29sOiA1LFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkluaXRWaWV3LFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkluaXRWaWV3RmluaXNoLFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkVudGVyQW5pbWF0aW9uLFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkVudGVyQW5pbWF0aW9uRmluaXNoLFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgfVxufSJdfQ==