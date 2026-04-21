
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '498abEkC6ZAVI7320rjy4II', 'Tile2GameController');
// Scripts/Tile2GameController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Tile2ExtractManager_1 = require("./Tile2ExtractManager");
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var LowPriorityBundleLoader_1 = require("./gamePlay/base/ui/LowPriorityBundleLoader");
var MainGameController_1 = require("./game/controller/MainGameController");
var UserModel_1 = require("./gamePlay/user/UserModel");
var Tile2GameView_1 = require("./view/Tile2GameView");
var Tile2GameController = /** @class */ (function (_super) {
    __extends(Tile2GameController, _super);
    function Tile2GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = Tile2GameView_1.default;
        _this._tile2SlotType = GameTypeEnums_1.ETile2SlotType.Slot3;
        _this._gameType = GameTypeEnums_1.MjGameType.Tile2Normal;
        _this._disPlayingCount = 0;
        return _this;
    }
    Tile2GameController.prototype.getTile2SlotType = function () {
        return this._tile2SlotType;
    };
    Tile2GameController.prototype.initDependRes = function () {
        _super.prototype.initDependRes.call(this);
        this.addPreloadRes("Prefab", "prefabs/game/Tile2nodeSlotBar");
        this.addPreloadRes("Prefab", "prefabs/game/Tile2Slot4nodeSlotBar");
        this.addPreloadRes("Prefab", "prefabs/game/Tile2nodeBottom");
        this.addPreloadRes("Prefab", "prefabs/game/Tile2nodeTop");
        this.addPreloadRes("Prefab", "prefabs/effects/Tile2ClearScoreNormal");
        this.addPreloadRes("Prefab", "prefabs/effects/Tile2ClearScoreCombo");
        this.addPreloadRes("Prefab", "prefabs/effects/Tile2EffectCombo");
    };
    Tile2GameController.prototype.getRestartLevelData = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelId(), o = (e.getLevelData(), e.getOriginalLevelData());
        return {
            originalLevelStr: o,
            levelStr: e.getOriWithSpecialCards() || o,
            levelDifficulty: e.getLevelDifficulty(),
            isNewGame: true,
            gameType: this.gameType,
            levelId: t,
            tileTypes: e.getTileTypes(),
            tileStrategies: e.getTileStrategies(),
            slover: e.getSolvers(),
            isRestart: true
        };
    };
    Tile2GameController.prototype.getLocalLevelData = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelId(), o = e.getLevelData();
        return {
            originalLevelStr: e.getOriginalLevelData(),
            levelStr: o,
            levelDifficulty: e.getLevelDifficulty(),
            isNewGame: false,
            gameType: this.gameType,
            levelId: t,
            tileTypes: e.getTileTypes(),
            slover: e.getSolvers(),
            isRestart: false
        };
    };
    Tile2GameController.prototype.getNewLevelData = function (e) {
        var t = this, o = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), n = this.getTile2TileTypes(o), i = this.getTile2Strategies(o);
        Tile2ExtractManager_1.default.getInstance().getContentData(o).then(function (r) {
            o.setDieResult(1);
            r.isCapabilityExtract && o.incrementLevelGenIndex();
            var a = r.content;
            e({
                levelStr: a,
                originalLevelStr: o.getOriginalLevelData(),
                levelDifficulty: 0,
                isNewGame: true,
                isRestart: false,
                gameType: t.gameType,
                levelId: o.getLevelId(),
                levelIndex: r.index,
                levelName: r.libName,
                tileTypes: n,
                isExtractLevel: true,
                slover: r.slover,
                tileStrategies: i
            });
        });
    };
    Tile2GameController.prototype.getIsNewGame = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelData(), o = e.getOriginalLevelData();
        return !t || !o;
    };
    Tile2GameController.prototype.shouldReExtractOnRestart = function () {
        return false;
    };
    Tile2GameController.prototype.getLevelData = function (e, t) {
        if (e === void 0) { e = false; }
        var o = this;
        var n = this.getIsNewGame();
        Tile2ExtractManager_1.default.getInstance().initData().then(function () {
            if (e) {
                if (o.shouldReExtractOnRestart()) {
                    o.getNewLevelData(t);
                }
                else {
                    t(o.getRestartLevelData());
                }
            }
            else {
                if (n) {
                    o.getNewLevelData(t);
                }
                else {
                    t(o.getLocalLevelData());
                }
            }
        });
    };
    Tile2GameController.prototype.getTile2TileTypes = function () {
        return "";
    };
    Tile2GameController.prototype.getTile2Strategies = function () {
        return "";
    };
    Tile2GameController.prototype.getStartSlotBarCount = function () {
        return 4;
    };
    Tile2GameController.prototype.initInput = function (e, t) {
        var o = this.getStartSlotBarCount();
        e.slotBarCount = o;
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.StartSimulator,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.StartInit,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2SetSlotType,
            slotType: this.getTile2SlotType(),
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2SetLevel,
            levelData: e,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2SetSlotBarCount,
            slotBarCount: o,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.ChooseLayout,
            contentSize: t,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2InitView,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2InitViewFinish,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2InitSlotBar,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2InitBottom,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2InitTop,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2EnterAnimation,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2EnterAnimationFinish,
            runType: GameInputEnum_1.InputRunType.Wait
        });
    };
    Tile2GameController.prototype.pushInput = function (e) {
        var t;
        if (this._gameSimulator && this.getGameTime()) {
            e.inputType === GameInputEnum_1.EGameInputEnum.UpdateTime && (e.time = this.getGameTime().deltaTime);
            null === (t = this._gameSimulator) || void 0 === t || t.input(e);
            e.inputType !== GameInputEnum_1.EGameInputEnum.Restart && this.tryOpenLowPriorityBundle(e);
        }
    };
    Tile2GameController.prototype.tryOpenLowPriorityBundle = function (e) {
        e.inputType === GameInputEnum_1.EGameInputEnum.DisplaySimulator && e.displayInputType === GameInputEnum_1.EGameInputEnum.Tile2EnterAnimationFinish && LowPriorityBundleLoader_1.default.getInstance().start(true);
    };
    Tile2GameController.prototype.addDisPlayingCount = function () {
        this._disPlayingCount++;
    };
    Tile2GameController.prototype.removeDisPlayingCount = function () {
        this._disPlayingCount--;
        this._disPlayingCount < 0 && (this._disPlayingCount = 0);
    };
    Tile2GameController.prototype.isDisplaying = function () {
        return this._disPlayingCount > 0;
    };
    Tile2GameController.prototype.resetDisPlayingCount = function () {
        this._disPlayingCount = 0;
    };
    Tile2GameController.nextLevelStr = "";
    __decorate([
        mj.traitEvent("T2GameCtrl_gT2SlotT")
    ], Tile2GameController.prototype, "getTile2SlotType", null);
    __decorate([
        mj.traitEvent("T2GameCtrl_initRes")
    ], Tile2GameController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("T2GameCtrl_getIsNewGame")
    ], Tile2GameController.prototype, "getIsNewGame", null);
    __decorate([
        mj.traitEvent("T2GameCtrl_reExtOnRst")
    ], Tile2GameController.prototype, "shouldReExtractOnRestart", null);
    __decorate([
        mj.traitEvent("T2GameCtrl_getTileTypes")
    ], Tile2GameController.prototype, "getTile2TileTypes", null);
    __decorate([
        mj.traitEvent("T2GameCtrl_gtStrates")
    ], Tile2GameController.prototype, "getTile2Strategies", null);
    Tile2GameController = __decorate([
        mj.class("Tile2GameController")
    ], Tile2GameController);
    return Tile2GameController;
}(MainGameController_1.default));
exports.default = Tile2GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUF3RDtBQUN4RCxvRUFBa0Y7QUFDbEYseUVBQXFGO0FBQ3JGLHNGQUFpRjtBQUNqRiwyRUFBc0U7QUFDdEUsdURBQWtEO0FBQ2xELHNEQUFpRDtBQUVqRDtJQUFpRCx1Q0FBa0I7SUFBbkU7UUFBQSxxRUE2TUM7UUE1TUMsZUFBUyxHQUFHLHVCQUFhLENBQUM7UUFDMUIsb0JBQWMsR0FBRyw4QkFBYyxDQUFDLEtBQUssQ0FBQztRQUN0QyxlQUFTLEdBQUcsMEJBQVUsQ0FBQyxXQUFXLENBQUM7UUFDbkMsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDOztJQXlNdkIsQ0FBQztJQXRNQyw4Q0FBZ0IsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVELDJDQUFhLEdBQWI7UUFDRSxpQkFBTSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLCtCQUErQixDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsdUNBQXVDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxzQ0FBc0MsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLGtDQUFrQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNELGlEQUFtQixHQUFuQjtRQUNF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LFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzsrREFHcEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7NERBVW5DO0lBNkREO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQzsyREFNeEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7dUVBR3RDO0lBcUJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztnRUFHeEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7aUVBR3JDO0lBckhrQixtQkFBbUI7UUFEdkMsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQTZNdkM7SUFBRCwwQkFBQztDQTdNRCxBQTZNQyxDQTdNZ0QsNEJBQWtCLEdBNk1sRTtrQkE3TW9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaWxlMkV4dHJhY3RNYW5hZ2VyIGZyb20gJy4vVGlsZTJFeHRyYWN0TWFuYWdlcic7XG5pbXBvcnQgeyBFR2FtZUlucHV0RW51bSwgSW5wdXRSdW5UeXBlIH0gZnJvbSAnLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBFVGlsZTJTbG90VHlwZSwgTWpHYW1lVHlwZSB9IGZyb20gJy4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIgZnJvbSAnLi9nYW1lUGxheS9iYXNlL3VpL0xvd1ByaW9yaXR5QnVuZGxlTG9hZGVyJztcbmltcG9ydCBNYWluR2FtZUNvbnRyb2xsZXIgZnJvbSAnLi9nYW1lL2NvbnRyb2xsZXIvTWFpbkdhbWVDb250cm9sbGVyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgVGlsZTJHYW1lVmlldyBmcm9tICcuL3ZpZXcvVGlsZTJHYW1lVmlldyc7XG5AbWouY2xhc3MoXCJUaWxlMkdhbWVDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMkdhbWVDb250cm9sbGVyIGV4dGVuZHMgTWFpbkdhbWVDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gVGlsZTJHYW1lVmlldztcbiAgX3RpbGUyU2xvdFR5cGUgPSBFVGlsZTJTbG90VHlwZS5TbG90MztcbiAgX2dhbWVUeXBlID0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbDtcbiAgX2Rpc1BsYXlpbmdDb3VudCA9IDA7XG4gIHN0YXRpYyBuZXh0TGV2ZWxTdHIgPSBcIlwiO1xuICBAbWoudHJhaXRFdmVudChcIlQyR2FtZUN0cmxfZ1QyU2xvdFRcIilcbiAgZ2V0VGlsZTJTbG90VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGlsZTJTbG90VHlwZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyR2FtZUN0cmxfaW5pdFJlc1wiKVxuICBpbml0RGVwZW5kUmVzKCkge1xuICAgIHN1cGVyLmluaXREZXBlbmRSZXMuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmFkZFByZWxvYWRSZXMoXCJQcmVmYWJcIiwgXCJwcmVmYWJzL2dhbWUvVGlsZTJub2RlU2xvdEJhclwiKTtcbiAgICB0aGlzLmFkZFByZWxvYWRSZXMoXCJQcmVmYWJcIiwgXCJwcmVmYWJzL2dhbWUvVGlsZTJTbG90NG5vZGVTbG90QmFyXCIpO1xuICAgIHRoaXMuYWRkUHJlbG9hZFJlcyhcIlByZWZhYlwiLCBcInByZWZhYnMvZ2FtZS9UaWxlMm5vZGVCb3R0b21cIik7XG4gICAgdGhpcy5hZGRQcmVsb2FkUmVzKFwiUHJlZmFiXCIsIFwicHJlZmFicy9nYW1lL1RpbGUybm9kZVRvcFwiKTtcbiAgICB0aGlzLmFkZFByZWxvYWRSZXMoXCJQcmVmYWJcIiwgXCJwcmVmYWJzL2VmZmVjdHMvVGlsZTJDbGVhclNjb3JlTm9ybWFsXCIpO1xuICAgIHRoaXMuYWRkUHJlbG9hZFJlcyhcIlByZWZhYlwiLCBcInByZWZhYnMvZWZmZWN0cy9UaWxlMkNsZWFyU2NvcmVDb21ib1wiKTtcbiAgICB0aGlzLmFkZFByZWxvYWRSZXMoXCJQcmVmYWJcIiwgXCJwcmVmYWJzL2VmZmVjdHMvVGlsZTJFZmZlY3RDb21ib1wiKTtcbiAgfVxuICBnZXRSZXN0YXJ0TGV2ZWxEYXRhKCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKHRoaXMuZ2FtZVR5cGUpLFxuICAgICAgdCA9IGUuZ2V0TGV2ZWxJZCgpLFxuICAgICAgbyA9IChlLmdldExldmVsRGF0YSgpLCBlLmdldE9yaWdpbmFsTGV2ZWxEYXRhKCkpO1xuICAgIHJldHVybiB7XG4gICAgICBvcmlnaW5hbExldmVsU3RyOiBvLFxuICAgICAgbGV2ZWxTdHI6IGUuZ2V0T3JpV2l0aFNwZWNpYWxDYXJkcygpIHx8IG8sXG4gICAgICBsZXZlbERpZmZpY3VsdHk6IGUuZ2V0TGV2ZWxEaWZmaWN1bHR5KCksXG4gICAgICBpc05ld0dhbWU6IHRydWUsXG4gICAgICBnYW1lVHlwZTogdGhpcy5nYW1lVHlwZSxcbiAgICAgIGxldmVsSWQ6IHQsXG4gICAgICB0aWxlVHlwZXM6IGUuZ2V0VGlsZVR5cGVzKCksXG4gICAgICB0aWxlU3RyYXRlZ2llczogZS5nZXRUaWxlU3RyYXRlZ2llcygpLFxuICAgICAgc2xvdmVyOiBlLmdldFNvbHZlcnMoKSxcbiAgICAgIGlzUmVzdGFydDogdHJ1ZVxuICAgIH07XG4gIH1cbiAgZ2V0TG9jYWxMZXZlbERhdGEoKSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUodGhpcy5nYW1lVHlwZSksXG4gICAgICB0ID0gZS5nZXRMZXZlbElkKCksXG4gICAgICBvID0gZS5nZXRMZXZlbERhdGEoKTtcbiAgICByZXR1cm4ge1xuICAgICAgb3JpZ2luYWxMZXZlbFN0cjogZS5nZXRPcmlnaW5hbExldmVsRGF0YSgpLFxuICAgICAgbGV2ZWxTdHI6IG8sXG4gICAgICBsZXZlbERpZmZpY3VsdHk6IGUuZ2V0TGV2ZWxEaWZmaWN1bHR5KCksXG4gICAgICBpc05ld0dhbWU6IGZhbHNlLFxuICAgICAgZ2FtZVR5cGU6IHRoaXMuZ2FtZVR5cGUsXG4gICAgICBsZXZlbElkOiB0LFxuICAgICAgdGlsZVR5cGVzOiBlLmdldFRpbGVUeXBlcygpLFxuICAgICAgc2xvdmVyOiBlLmdldFNvbHZlcnMoKSxcbiAgICAgIGlzUmVzdGFydDogZmFsc2VcbiAgICB9O1xuICB9XG4gIGdldE5ld0xldmVsRGF0YShlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgbyA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZSh0aGlzLmdhbWVUeXBlKSxcbiAgICAgIG4gPSB0aGlzLmdldFRpbGUyVGlsZVR5cGVzKG8pLFxuICAgICAgaSA9IHRoaXMuZ2V0VGlsZTJTdHJhdGVnaWVzKG8pO1xuICAgIFRpbGUyRXh0cmFjdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDb250ZW50RGF0YShvKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICBvLnNldERpZVJlc3VsdCgxKTtcbiAgICAgIHIuaXNDYXBhYmlsaXR5RXh0cmFjdCAmJiBvLmluY3JlbWVudExldmVsR2VuSW5kZXgoKTtcbiAgICAgIHZhciBhID0gci5jb250ZW50O1xuICAgICAgZSh7XG4gICAgICAgIGxldmVsU3RyOiBhLFxuICAgICAgICBvcmlnaW5hbExldmVsU3RyOiBvLmdldE9yaWdpbmFsTGV2ZWxEYXRhKCksXG4gICAgICAgIGxldmVsRGlmZmljdWx0eTogMCxcbiAgICAgICAgaXNOZXdHYW1lOiB0cnVlLFxuICAgICAgICBpc1Jlc3RhcnQ6IGZhbHNlLFxuICAgICAgICBnYW1lVHlwZTogdC5nYW1lVHlwZSxcbiAgICAgICAgbGV2ZWxJZDogby5nZXRMZXZlbElkKCksXG4gICAgICAgIGxldmVsSW5kZXg6IHIuaW5kZXgsXG4gICAgICAgIGxldmVsTmFtZTogci5saWJOYW1lLFxuICAgICAgICB0aWxlVHlwZXM6IG4sXG4gICAgICAgIGlzRXh0cmFjdExldmVsOiB0cnVlLFxuICAgICAgICBzbG92ZXI6IHIuc2xvdmVyLFxuICAgICAgICB0aWxlU3RyYXRlZ2llczogaVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMkdhbWVDdHJsX2dldElzTmV3R2FtZVwiKVxuICBnZXRJc05ld0dhbWUoKSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUodGhpcy5nYW1lVHlwZSksXG4gICAgICB0ID0gZS5nZXRMZXZlbERhdGEoKSxcbiAgICAgIG8gPSBlLmdldE9yaWdpbmFsTGV2ZWxEYXRhKCk7XG4gICAgcmV0dXJuICF0IHx8ICFvO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJHYW1lQ3RybF9yZUV4dE9uUnN0XCIpXG4gIHNob3VsZFJlRXh0cmFjdE9uUmVzdGFydCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZ2V0TGV2ZWxEYXRhKGUgPSBmYWxzZSwgdD8pIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgdmFyIG4gPSB0aGlzLmdldElzTmV3R2FtZSgpO1xuICAgIFRpbGUyRXh0cmFjdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5pbml0RGF0YSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgaWYgKG8uc2hvdWxkUmVFeHRyYWN0T25SZXN0YXJ0KCkpIHtcbiAgICAgICAgICBvLmdldE5ld0xldmVsRGF0YSh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0KG8uZ2V0UmVzdGFydExldmVsRGF0YSgpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICBvLmdldE5ld0xldmVsRGF0YSh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0KG8uZ2V0TG9jYWxMZXZlbERhdGEoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyR2FtZUN0cmxfZ2V0VGlsZVR5cGVzXCIpXG4gIGdldFRpbGUyVGlsZVR5cGVzKCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJHYW1lQ3RybF9ndFN0cmF0ZXNcIilcbiAgZ2V0VGlsZTJTdHJhdGVnaWVzKCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIGdldFN0YXJ0U2xvdEJhckNvdW50KCkge1xuICAgIHJldHVybiA0O1xuICB9XG4gIGluaXRJbnB1dChlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLmdldFN0YXJ0U2xvdEJhckNvdW50KCk7XG4gICAgZS5zbG90QmFyQ291bnQgPSBvO1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uU3RhcnRTaW11bGF0b3IsXG4gICAgICBydW5UeXBlOiBJbnB1dFJ1blR5cGUuV2FpdFxuICAgIH0pO1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uU3RhcnRJbml0LFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlRpbGUyU2V0U2xvdFR5cGUsXG4gICAgICBzbG90VHlwZTogdGhpcy5nZXRUaWxlMlNsb3RUeXBlKCksXG4gICAgICBydW5UeXBlOiBJbnB1dFJ1blR5cGUuV2FpdFxuICAgIH0pO1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uVGlsZTJTZXRMZXZlbCxcbiAgICAgIGxldmVsRGF0YTogZSxcbiAgICAgIHJ1blR5cGU6IElucHV0UnVuVHlwZS5XYWl0XG4gICAgfSk7XG4gICAgdGhpcy5wdXNoSW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5UaWxlMlNldFNsb3RCYXJDb3VudCxcbiAgICAgIHNsb3RCYXJDb3VudDogbyxcbiAgICAgIHJ1blR5cGU6IElucHV0UnVuVHlwZS5XYWl0XG4gICAgfSk7XG4gICAgdGhpcy5wdXNoSW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5DaG9vc2VMYXlvdXQsXG4gICAgICBjb250ZW50U2l6ZTogdCxcbiAgICAgIHJ1blR5cGU6IElucHV0UnVuVHlwZS5XYWl0XG4gICAgfSk7XG4gICAgdGhpcy5wdXNoSW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5UaWxlMkluaXRWaWV3LFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlRpbGUySW5pdFZpZXdGaW5pc2gsXG4gICAgICBydW5UeXBlOiBJbnB1dFJ1blR5cGUuV2FpdFxuICAgIH0pO1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uVGlsZTJJbml0U2xvdEJhcixcbiAgICAgIHJ1blR5cGU6IElucHV0UnVuVHlwZS5XYWl0XG4gICAgfSk7XG4gICAgdGhpcy5wdXNoSW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5UaWxlMkluaXRCb3R0b20sXG4gICAgICBydW5UeXBlOiBJbnB1dFJ1blR5cGUuV2FpdFxuICAgIH0pO1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uVGlsZTJJbml0VG9wLFxuICAgICAgcnVuVHlwZTogSW5wdXRSdW5UeXBlLldhaXRcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlRpbGUyRW50ZXJBbmltYXRpb24sXG4gICAgICBydW5UeXBlOiBJbnB1dFJ1blR5cGUuV2FpdFxuICAgIH0pO1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uVGlsZTJFbnRlckFuaW1hdGlvbkZpbmlzaCxcbiAgICAgIHJ1blR5cGU6IElucHV0UnVuVHlwZS5XYWl0XG4gICAgfSk7XG4gIH1cbiAgcHVzaElucHV0KGUpIHtcbiAgICB2YXIgdDtcbiAgICBpZiAodGhpcy5fZ2FtZVNpbXVsYXRvciAmJiB0aGlzLmdldEdhbWVUaW1lKCkpIHtcbiAgICAgIGUuaW5wdXRUeXBlID09PSBFR2FtZUlucHV0RW51bS5VcGRhdGVUaW1lICYmIChlLnRpbWUgPSB0aGlzLmdldEdhbWVUaW1lKCkuZGVsdGFUaW1lKTtcbiAgICAgIG51bGwgPT09ICh0ID0gdGhpcy5fZ2FtZVNpbXVsYXRvcikgfHwgdm9pZCAwID09PSB0IHx8IHQuaW5wdXQoZSk7XG4gICAgICBlLmlucHV0VHlwZSAhPT0gRUdhbWVJbnB1dEVudW0uUmVzdGFydCAmJiB0aGlzLnRyeU9wZW5Mb3dQcmlvcml0eUJ1bmRsZShlKTtcbiAgICB9XG4gIH1cbiAgdHJ5T3Blbkxvd1ByaW9yaXR5QnVuZGxlKGUpIHtcbiAgICBlLmlucHV0VHlwZSA9PT0gRUdhbWVJbnB1dEVudW0uRGlzcGxheVNpbXVsYXRvciAmJiBlLmRpc3BsYXlJbnB1dFR5cGUgPT09IEVHYW1lSW5wdXRFbnVtLlRpbGUyRW50ZXJBbmltYXRpb25GaW5pc2ggJiYgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIuZ2V0SW5zdGFuY2UoKS5zdGFydCh0cnVlKTtcbiAgfVxuICBhZGREaXNQbGF5aW5nQ291bnQoKSB7XG4gICAgdGhpcy5fZGlzUGxheWluZ0NvdW50Kys7XG4gIH1cbiAgcmVtb3ZlRGlzUGxheWluZ0NvdW50KCkge1xuICAgIHRoaXMuX2Rpc1BsYXlpbmdDb3VudC0tO1xuICAgIHRoaXMuX2Rpc1BsYXlpbmdDb3VudCA8IDAgJiYgKHRoaXMuX2Rpc1BsYXlpbmdDb3VudCA9IDApO1xuICB9XG4gIGlzRGlzcGxheWluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzUGxheWluZ0NvdW50ID4gMDtcbiAgfVxuICByZXNldERpc1BsYXlpbmdDb3VudCgpIHtcbiAgICB0aGlzLl9kaXNQbGF5aW5nQ291bnQgPSAwO1xuICB9XG59Il19