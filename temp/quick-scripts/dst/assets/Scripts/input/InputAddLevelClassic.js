
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputAddLevelClassic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7ba1YF7zRGCpX0WlIXlb22', 'InputAddLevelClassic');
// Scripts/input/InputAddLevelClassic.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("../inputbase/InputBase");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var AddLevelEnterAniEffect_1 = require("../AddLevelEnterAniEffect");
var InitNextLevelEffect_1 = require("../InitNextLevelEffect");
var UpdateMatchNumEffect_1 = require("../UpdateMatchNumEffect");
var ClassicDyeingModifier_1 = require("../ClassicDyeingModifier");
var IClassicExtractTypes_1 = require("../IClassicExtractTypes");
var ChangeBatchEffect_1 = require("../ChangeBatchEffect");
var BlockInputRefEffect_1 = require("../BlockInputRefEffect");
var ClassicFailEffect_1 = require("../ClassicFailEffect");
var DGameRefreshTiles_1 = require("../gamePlay/dot/DGameRefreshTiles");
var DotUtil_1 = require("../gamePlay/dot/DotUtil");
var LevelGenRule_1 = require("../core/simulator/config/LevelGenRule");
var ClassicReviveEffect_1 = require("../ClassicReviveEffect");
var AddLevelFinishEffect_1 = require("../AddLevelFinishEffect");
var AddLevelDropAniEffect_1 = require("../AddLevelDropAniEffect");
var EmptyEffect_1 = require("../EmptyEffect");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var ClassicBeforeFailEffect_1 = require("../ClassicBeforeFailEffect");
this && this.__read;
this && this.__values;
var InputAddLevelClassic = /** @class */ (function (_super) {
    __extends(InputAddLevelClassic, _super);
    function InputAddLevelClassic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputAddLevelClassic.prototype.excute = function (e) {
        var t, o;
        if (e.levelData.levelStr) {
            var n = this.gameContext.getTileMapObject().aliveTileCount(), i = this.gameContext.getTileMapObject().getCanMatchCardPairNum(), r = this.gameContext.getTileMapObject().getCurBoardDimension(), a = DotUtil_1.DotUtil.getLevelDataAsCardId(this.gameContext.getTileMapObject()), l = this.gameContext.getGameData(), s = l.generateNewBatchId();
            this.gameContext.classicLevelModifier.pushLevelStr(s, e.levelData.levelStr);
            this.applayNextBatchInfo(e);
            var c = null !== (t = e.levelData.difficultyType) && void 0 !== t ? t : IClassicExtractTypes_1.EDifficultyType.Medium, f = ClassicDyeingModifier_1.ClassicDyeingModifier.getInstance().getDyeingStrategy(c), d = f.coordType, h = f.charType, v = this.gameContext.getTileMapObject().aliveTileCount(), g = this.gameContext.getTileMapObject().getCanMatchCardPairNum(), _ = this.gameContext.getTileMapObject().getCurBoardDimension(), T = DotUtil_1.DotUtil.getLevelDataAsCardId(this.gameContext.getTileMapObject());
            l.addTotalTileCount(v - n);
            DGameRefreshTiles_1.DotGameRefreshTiles.dot(this.gameContext, {
                sourceCsv: (null === (o = e.levelData) || void 0 === o ? void 0 : o.levelName) || "",
                preOpPairs: i,
                endOpPairs: g,
                algoCoord: d,
                algoCardId: h,
                preTileNum: n,
                endTileNum: v,
                preBoardXyz: r,
                boardXyz: _,
                preBoardStructure: a,
                endBoardStructure: T
            });
        }
    };
    InputAddLevelClassic.prototype.applayNextBatchInfo = function (e) {
        Date.now();
        var t, o = this.gameContext.getGameData(), n = o.getNextBatchId(), i = this.gameContext.classicLevelChecker.getBatchInfoByBatchId(n);
        i && i.levelStr || (i = {
            batchId: n,
            levelStr: o.getLevelStrByBatchId(n)
        });
        o.setOriginalLevelDataWithCardId(i.levelStr);
        var r = LevelGenRule_1.default.convertLevelStrCardIdToResId(i.levelStr), a = (Date.now(), this.gameContext.classicLevelModifier.instanceNextBatchData(i.batchId, r)), l = (Date.now(), Date.now(), null !== (t = e.levelData.difficultyType) && void 0 !== t ? t : IClassicExtractTypes_1.EDifficultyType.Medium);
        if (a.tileObjects && a.tileObjects.length > 0) {
            var s = a.tileObjects;
            ClassicDyeingModifier_1.ClassicDyeingModifier.getInstance().applyDyeing(this.gameContext, s, l);
        }
        Date.now();
        var c = this.gameContext.getTileMapObject();
        c.fixClassicSingleCard(true);
        Date.now();
        this.gameContext.tileTypesModifier.modifyTileTypes(o.getTileTypes() || "");
        if (!this.gameContext.getOpenGenerateState()) {
            this.gameContext.touchData.clear();
            this.gameContext.getTileMapObject().unselectAllTileIds();
        }
        c.updateCanMatchTiles();
        Date.now(), Date.now();
        a.openGenerateState || this.pushBlockInputRefEffect(true, "InputAddLevelClassic");
        this.pushInitNextLevelEffect(a);
        this.pushChangeBatchEffect(a);
        this.pushUpdateMatchNumEffect();
        if (!a.openGenerateState) {
            this.pushAddLevelEnterAniEffect(a);
            this.pushAddLevelDropAniEffect(a.failingTiles);
        }
        this.pushAddLevelFinishEffect(a);
        a.openGenerateState || this.pushBlockInputRefEffect(false, "InputAddLevelClassic");
        this.gameContext.getOpenGenerateState() || this.tryExcuteFail();
    };
    InputAddLevelClassic.prototype.pushAddLevelDropAniEffect = function (e) {
        var t = new AddLevelDropAniEffect_1.AddLevelDropAniEffect({
            fallingTiles: e,
            isOpenGenerateState: this.gameContext.getOpenGenerateState()
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputAddLevelClassic.prototype.tryExcuteFail = function () {
        if (this.gameContext.getTileMapObject().checkIsDead([]))
            if (this.gameContext.classicReviveChecker.canRevive())
                this.pushReviveEffect();
            else {
                this.gameContext.gameModifier.modifyClassicEnd();
                this.pushClassicBeforeFailEffect();
                this.pushFailEffect();
            }
    };
    InputAddLevelClassic.prototype.pushReviveEffect = function () {
        this.gameContext.getGameData();
        var e = new ClassicReviveEffect_1.ClassicReviveEffect({});
        return this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    InputAddLevelClassic.prototype.pushClassicBeforeFailEffect = function () {
        var e = new ClassicBeforeFailEffect_1.ClassicBeforeFailEffect({});
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    InputAddLevelClassic.prototype.pushFailEffect = function () {
        var e = new ClassicFailEffect_1.ClassicFailEffect({});
        return this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    InputAddLevelClassic.prototype.pushBlockInputRefEffect = function (e, t) {
        var o = new BlockInputRefEffect_1.BlockInputRefEffect({
            block: e,
            from: t
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Root);
    };
    InputAddLevelClassic.prototype.pushChangeBatchEffect = function (e) {
        var t = this.gameContext.getTileMapObject(), o = new ChangeBatchEffect_1.ChangeBatchEffect({
            tileMapObject: t,
            addGameLayerInfo: e
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Root);
    };
    InputAddLevelClassic.prototype.pushInitNextLevelEffect = function (e) {
        var t = this.gameContext.getTileMapObject(), o = new InitNextLevelEffect_1.InitNextLevelEffect({
            tileMapObject: t,
            addGameLayerInfo: e
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Root);
    };
    InputAddLevelClassic.prototype.pushAddLevelEnterAniEffect = function (e) {
        var t = new EmptyEffect_1.EmptyEffect({
            inputType: GameInputEnum_1.EGameInputEnum.AddLevelClassic
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
        var o = new AddLevelEnterAniEffect_1.AddLevelEnterAniEffect({
            tileObjects: e.tileObjects
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputAddLevelClassic.prototype.pushUpdateMatchNumEffect = function () {
        var e = this.gameContext.getTileMapObject(), t = new UpdateMatchNumEffect_1.UpdateMatchNumEffect({
            canMatchCardPairNum: e.getCanMatchCardPairNum()
        });
        return this.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
    };
    InputAddLevelClassic.prototype.pushAddLevelFinishEffect = function (e) {
        var t = this.gameContext.getTileMapObject(), o = new AddLevelFinishEffect_1.AddLevelFinishEffect({
            tileMapObject: t,
            addGameLayerInfo: e,
            isOpenGenerateState: this.gameContext.getOpenGenerateState()
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Root);
    };
    InputAddLevelClassic.prototype.applyTempClassicNextSpecialTiles = function () { };
    return InputAddLevelClassic;
}(InputBase_1.InputBase));
exports.default = InputAddLevelClassic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0QWRkTGV2ZWxDbGFzc2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBbUQ7QUFDbkQsMkRBQXdEO0FBQ3hELG9FQUFtRTtBQUNuRSw4REFBNkQ7QUFDN0QsZ0VBQStEO0FBQy9ELGtFQUFpRTtBQUNqRSxnRUFBMEQ7QUFDMUQsMERBQXlEO0FBQ3pELDhEQUE2RDtBQUM3RCwwREFBeUQ7QUFDekQsdUVBQXdFO0FBQ3hFLG1EQUFrRDtBQUNsRCxzRUFBaUU7QUFDakUsOERBQTZEO0FBQzdELGdFQUErRDtBQUMvRCxrRUFBaUU7QUFDakUsOENBQTZDO0FBQzdDLHFFQUFxRTtBQUNyRSxzRUFBcUU7QUFDckUsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDcEIsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDdEI7SUFBa0Qsd0NBQVM7SUFBM0Q7O0lBMEpBLENBQUM7SUF6SkMscUNBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsRUFDMUQsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxFQUNoRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLG9CQUFvQixFQUFFLEVBQzlELENBQUMsR0FBRyxpQkFBTyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUNyRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFDbEMsQ0FBQyxHQUFHLENB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LEVBQ3pDLENBQUMsR0FBRyxJQUFJLDJDQUFvQixDQUFDO1lBQzNCLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxzQkFBc0IsRUFBRTtTQUNoRCxDQUFDLENBQUM7UUFDTCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELHVEQUF3QixHQUF4QixVQUF5QixDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFDekMsQ0FBQyxHQUFHLElBQUksMkNBQW9CLENBQUM7WUFDM0IsYUFBYSxFQUFFLENBQUM7WUFDaEIsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQixtQkFBbUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFO1NBQzdELENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELCtEQUFnQyxHQUFoQyxjQUFvQyxDQUFDO0lBQ3ZDLDJCQUFDO0FBQUQsQ0ExSkEsQUEwSkMsQ0ExSmlELHFCQUFTLEdBMEoxRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4uL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IEFkZExldmVsRW50ZXJBbmlFZmZlY3QgfSBmcm9tICcuLi9BZGRMZXZlbEVudGVyQW5pRWZmZWN0JztcbmltcG9ydCB7IEluaXROZXh0TGV2ZWxFZmZlY3QgfSBmcm9tICcuLi9Jbml0TmV4dExldmVsRWZmZWN0JztcbmltcG9ydCB7IFVwZGF0ZU1hdGNoTnVtRWZmZWN0IH0gZnJvbSAnLi4vVXBkYXRlTWF0Y2hOdW1FZmZlY3QnO1xuaW1wb3J0IHsgQ2xhc3NpY0R5ZWluZ01vZGlmaWVyIH0gZnJvbSAnLi4vQ2xhc3NpY0R5ZWluZ01vZGlmaWVyJztcbmltcG9ydCB7IEVEaWZmaWN1bHR5VHlwZSB9IGZyb20gJy4uL0lDbGFzc2ljRXh0cmFjdFR5cGVzJztcbmltcG9ydCB7IENoYW5nZUJhdGNoRWZmZWN0IH0gZnJvbSAnLi4vQ2hhbmdlQmF0Y2hFZmZlY3QnO1xuaW1wb3J0IHsgQmxvY2tJbnB1dFJlZkVmZmVjdCB9IGZyb20gJy4uL0Jsb2NrSW5wdXRSZWZFZmZlY3QnO1xuaW1wb3J0IHsgQ2xhc3NpY0ZhaWxFZmZlY3QgfSBmcm9tICcuLi9DbGFzc2ljRmFpbEVmZmVjdCc7XG5pbXBvcnQgeyBEb3RHYW1lUmVmcmVzaFRpbGVzIH0gZnJvbSAnLi4vZ2FtZVBsYXkvZG90L0RHYW1lUmVmcmVzaFRpbGVzJztcbmltcG9ydCB7IERvdFV0aWwgfSBmcm9tICcuLi9nYW1lUGxheS9kb3QvRG90VXRpbCc7XG5pbXBvcnQgTGV2ZWxHZW5SdWxlIGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbmZpZy9MZXZlbEdlblJ1bGUnO1xuaW1wb3J0IHsgQ2xhc3NpY1Jldml2ZUVmZmVjdCB9IGZyb20gJy4uL0NsYXNzaWNSZXZpdmVFZmZlY3QnO1xuaW1wb3J0IHsgQWRkTGV2ZWxGaW5pc2hFZmZlY3QgfSBmcm9tICcuLi9BZGRMZXZlbEZpbmlzaEVmZmVjdCc7XG5pbXBvcnQgeyBBZGRMZXZlbERyb3BBbmlFZmZlY3QgfSBmcm9tICcuLi9BZGRMZXZlbERyb3BBbmlFZmZlY3QnO1xuaW1wb3J0IHsgRW1wdHlFZmZlY3QgfSBmcm9tICcuLi9FbXB0eUVmZmVjdCc7XG5pbXBvcnQgeyBFR2FtZUlucHV0RW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IENsYXNzaWNCZWZvcmVGYWlsRWZmZWN0IH0gZnJvbSAnLi4vQ2xhc3NpY0JlZm9yZUZhaWxFZmZlY3QnO1xudGhpcyAmJiB0aGlzLl9fcmVhZDtcbnRoaXMgJiYgdGhpcy5fX3ZhbHVlcztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0QWRkTGV2ZWxDbGFzc2ljIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgZXhjdXRlKGUpIHtcbiAgICB2YXIgdCwgbztcbiAgICBpZiAoZS5sZXZlbERhdGEubGV2ZWxTdHIpIHtcbiAgICAgIHZhciBuID0gdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuYWxpdmVUaWxlQ291bnQoKSxcbiAgICAgICAgaSA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldENhbk1hdGNoQ2FyZFBhaXJOdW0oKSxcbiAgICAgICAgciA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldEN1ckJvYXJkRGltZW5zaW9uKCksXG4gICAgICAgIGEgPSBEb3RVdGlsLmdldExldmVsRGF0YUFzQ2FyZElkKHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpKSxcbiAgICAgICAgbCA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKSxcbiAgICAgICAgcyA9IGwuZ2VuZXJhdGVOZXdCYXRjaElkKCk7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LmNsYXNzaWNMZXZlbE1vZGlmaWVyLnB1c2hMZXZlbFN0cihzLCBlLmxldmVsRGF0YS5sZXZlbFN0cik7XG4gICAgICB0aGlzLmFwcGxheU5leHRCYXRjaEluZm8oZSk7XG4gICAgICB2YXIgYyA9IG51bGwgIT09ICh0ID0gZS5sZXZlbERhdGEuZGlmZmljdWx0eVR5cGUpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiBFRGlmZmljdWx0eVR5cGUuTWVkaXVtLFxuICAgICAgICBmID0gQ2xhc3NpY0R5ZWluZ01vZGlmaWVyLmdldEluc3RhbmNlKCkuZ2V0RHllaW5nU3RyYXRlZ3koYyksXG4gICAgICAgIGQgPSBmLmNvb3JkVHlwZSxcbiAgICAgICAgaCA9IGYuY2hhclR5cGUsXG4gICAgICAgIHYgPSB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5hbGl2ZVRpbGVDb3VudCgpLFxuICAgICAgICBnID0gdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0Q2FuTWF0Y2hDYXJkUGFpck51bSgpLFxuICAgICAgICBfID0gdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0Q3VyQm9hcmREaW1lbnNpb24oKSxcbiAgICAgICAgVCA9IERvdFV0aWwuZ2V0TGV2ZWxEYXRhQXNDYXJkSWQodGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkpO1xuICAgICAgbC5hZGRUb3RhbFRpbGVDb3VudCh2IC0gbik7XG4gICAgICBEb3RHYW1lUmVmcmVzaFRpbGVzLmRvdCh0aGlzLmdhbWVDb250ZXh0LCB7XG4gICAgICAgIHNvdXJjZUNzdjogKG51bGwgPT09IChvID0gZS5sZXZlbERhdGEpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8ubGV2ZWxOYW1lKSB8fCBcIlwiLFxuICAgICAgICBwcmVPcFBhaXJzOiBpLFxuICAgICAgICBlbmRPcFBhaXJzOiBnLFxuICAgICAgICBhbGdvQ29vcmQ6IGQsXG4gICAgICAgIGFsZ29DYXJkSWQ6IGgsXG4gICAgICAgIHByZVRpbGVOdW06IG4sXG4gICAgICAgIGVuZFRpbGVOdW06IHYsXG4gICAgICAgIHByZUJvYXJkWHl6OiByLFxuICAgICAgICBib2FyZFh5ejogXyxcbiAgICAgICAgcHJlQm9hcmRTdHJ1Y3R1cmU6IGEsXG4gICAgICAgIGVuZEJvYXJkU3RydWN0dXJlOiBUXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgYXBwbGF5TmV4dEJhdGNoSW5mbyhlKSB7XG4gICAgRGF0ZS5ub3coKTtcbiAgICB2YXIgdCxcbiAgICAgIG8gPSB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCksXG4gICAgICBuID0gby5nZXROZXh0QmF0Y2hJZCgpLFxuICAgICAgaSA9IHRoaXMuZ2FtZUNvbnRleHQuY2xhc3NpY0xldmVsQ2hlY2tlci5nZXRCYXRjaEluZm9CeUJhdGNoSWQobik7XG4gICAgaSAmJiBpLmxldmVsU3RyIHx8IChpID0ge1xuICAgICAgYmF0Y2hJZDogbixcbiAgICAgIGxldmVsU3RyOiBvLmdldExldmVsU3RyQnlCYXRjaElkKG4pXG4gICAgfSk7XG4gICAgby5zZXRPcmlnaW5hbExldmVsRGF0YVdpdGhDYXJkSWQoaS5sZXZlbFN0cik7XG4gICAgdmFyIHIgPSBMZXZlbEdlblJ1bGUuY29udmVydExldmVsU3RyQ2FyZElkVG9SZXNJZChpLmxldmVsU3RyKSxcbiAgICAgIGEgPSAoRGF0ZS5ub3coKSwgdGhpcy5nYW1lQ29udGV4dC5jbGFzc2ljTGV2ZWxNb2RpZmllci5pbnN0YW5jZU5leHRCYXRjaERhdGEoaS5iYXRjaElkLCByKSksXG4gICAgICBsID0gKERhdGUubm93KCksIERhdGUubm93KCksIG51bGwgIT09ICh0ID0gZS5sZXZlbERhdGEuZGlmZmljdWx0eVR5cGUpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiBFRGlmZmljdWx0eVR5cGUuTWVkaXVtKTtcbiAgICBpZiAoYS50aWxlT2JqZWN0cyAmJiBhLnRpbGVPYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBzID0gYS50aWxlT2JqZWN0cztcbiAgICAgIENsYXNzaWNEeWVpbmdNb2RpZmllci5nZXRJbnN0YW5jZSgpLmFwcGx5RHllaW5nKHRoaXMuZ2FtZUNvbnRleHQsIHMsIGwpO1xuICAgIH1cbiAgICBEYXRlLm5vdygpO1xuICAgIHZhciBjID0gdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCk7XG4gICAgYy5maXhDbGFzc2ljU2luZ2xlQ2FyZCh0cnVlKTtcbiAgICBEYXRlLm5vdygpO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQudGlsZVR5cGVzTW9kaWZpZXIubW9kaWZ5VGlsZVR5cGVzKG8uZ2V0VGlsZVR5cGVzKCkgfHwgXCJcIik7XG4gICAgaWYgKCF0aGlzLmdhbWVDb250ZXh0LmdldE9wZW5HZW5lcmF0ZVN0YXRlKCkpIHtcbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQudG91Y2hEYXRhLmNsZWFyKCk7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS51bnNlbGVjdEFsbFRpbGVJZHMoKTtcbiAgICB9XG4gICAgYy51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gICAgRGF0ZS5ub3coKSwgRGF0ZS5ub3coKTtcbiAgICBhLm9wZW5HZW5lcmF0ZVN0YXRlIHx8IHRoaXMucHVzaEJsb2NrSW5wdXRSZWZFZmZlY3QodHJ1ZSwgXCJJbnB1dEFkZExldmVsQ2xhc3NpY1wiKTtcbiAgICB0aGlzLnB1c2hJbml0TmV4dExldmVsRWZmZWN0KGEpO1xuICAgIHRoaXMucHVzaENoYW5nZUJhdGNoRWZmZWN0KGEpO1xuICAgIHRoaXMucHVzaFVwZGF0ZU1hdGNoTnVtRWZmZWN0KCk7XG4gICAgaWYgKCFhLm9wZW5HZW5lcmF0ZVN0YXRlKSB7XG4gICAgICB0aGlzLnB1c2hBZGRMZXZlbEVudGVyQW5pRWZmZWN0KGEpO1xuICAgICAgdGhpcy5wdXNoQWRkTGV2ZWxEcm9wQW5pRWZmZWN0KGEuZmFpbGluZ1RpbGVzKTtcbiAgICB9XG4gICAgdGhpcy5wdXNoQWRkTGV2ZWxGaW5pc2hFZmZlY3QoYSk7XG4gICAgYS5vcGVuR2VuZXJhdGVTdGF0ZSB8fCB0aGlzLnB1c2hCbG9ja0lucHV0UmVmRWZmZWN0KGZhbHNlLCBcIklucHV0QWRkTGV2ZWxDbGFzc2ljXCIpO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0T3BlbkdlbmVyYXRlU3RhdGUoKSB8fCB0aGlzLnRyeUV4Y3V0ZUZhaWwoKTtcbiAgfVxuICBwdXNoQWRkTGV2ZWxEcm9wQW5pRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBBZGRMZXZlbERyb3BBbmlFZmZlY3Qoe1xuICAgICAgZmFsbGluZ1RpbGVzOiBlLFxuICAgICAgaXNPcGVuR2VuZXJhdGVTdGF0ZTogdGhpcy5nYW1lQ29udGV4dC5nZXRPcGVuR2VuZXJhdGVTdGF0ZSgpXG4gICAgfSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KHQsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICB0cnlFeGN1dGVGYWlsKCkge1xuICAgIGlmICh0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5jaGVja0lzRGVhZChbXSkpIGlmICh0aGlzLmdhbWVDb250ZXh0LmNsYXNzaWNSZXZpdmVDaGVja2VyLmNhblJldml2ZSgpKSB0aGlzLnB1c2hSZXZpdmVFZmZlY3QoKTtlbHNlIHtcbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2FtZU1vZGlmaWVyLm1vZGlmeUNsYXNzaWNFbmQoKTtcbiAgICAgIHRoaXMucHVzaENsYXNzaWNCZWZvcmVGYWlsRWZmZWN0KCk7XG4gICAgICB0aGlzLnB1c2hGYWlsRWZmZWN0KCk7XG4gICAgfVxuICB9XG4gIHB1c2hSZXZpdmVFZmZlY3QoKSB7XG4gICAgdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpO1xuICAgIHZhciBlID0gbmV3IENsYXNzaWNSZXZpdmVFZmZlY3Qoe30pO1xuICAgIHJldHVybiB0aGlzLnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuUm9vdCk7XG4gIH1cbiAgcHVzaENsYXNzaWNCZWZvcmVGYWlsRWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IENsYXNzaWNCZWZvcmVGYWlsRWZmZWN0KHt9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuUm9vdCk7XG4gIH1cbiAgcHVzaEZhaWxFZmZlY3QoKSB7XG4gICAgdmFyIGUgPSBuZXcgQ2xhc3NpY0ZhaWxFZmZlY3Qoe30pO1xuICAgIHJldHVybiB0aGlzLnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuUm9vdCk7XG4gIH1cbiAgcHVzaEJsb2NrSW5wdXRSZWZFZmZlY3QoZSwgdCkge1xuICAgIHZhciBvID0gbmV3IEJsb2NrSW5wdXRSZWZFZmZlY3Qoe1xuICAgICAgYmxvY2s6IGUsXG4gICAgICBmcm9tOiB0XG4gICAgfSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KG8sIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIHB1c2hDaGFuZ2VCYXRjaEVmZmVjdChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIG8gPSBuZXcgQ2hhbmdlQmF0Y2hFZmZlY3Qoe1xuICAgICAgICB0aWxlTWFwT2JqZWN0OiB0LFxuICAgICAgICBhZGRHYW1lTGF5ZXJJbmZvOiBlXG4gICAgICB9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QobywgRUluc2VydFR5cGUuUm9vdCk7XG4gIH1cbiAgcHVzaEluaXROZXh0TGV2ZWxFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICBvID0gbmV3IEluaXROZXh0TGV2ZWxFZmZlY3Qoe1xuICAgICAgICB0aWxlTWFwT2JqZWN0OiB0LFxuICAgICAgICBhZGRHYW1lTGF5ZXJJbmZvOiBlXG4gICAgICB9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QobywgRUluc2VydFR5cGUuUm9vdCk7XG4gIH1cbiAgcHVzaEFkZExldmVsRW50ZXJBbmlFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gbmV3IEVtcHR5RWZmZWN0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uQWRkTGV2ZWxDbGFzc2ljXG4gICAgfSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KHQsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICAgIHZhciBvID0gbmV3IEFkZExldmVsRW50ZXJBbmlFZmZlY3Qoe1xuICAgICAgdGlsZU9iamVjdHM6IGUudGlsZU9iamVjdHNcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QobywgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIHB1c2hVcGRhdGVNYXRjaE51bUVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgdCA9IG5ldyBVcGRhdGVNYXRjaE51bUVmZmVjdCh7XG4gICAgICAgIGNhbk1hdGNoQ2FyZFBhaXJOdW06IGUuZ2V0Q2FuTWF0Y2hDYXJkUGFpck51bSgpXG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5wdXNoRWZmZWN0KHQsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIHB1c2hBZGRMZXZlbEZpbmlzaEVmZmVjdChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIG8gPSBuZXcgQWRkTGV2ZWxGaW5pc2hFZmZlY3Qoe1xuICAgICAgICB0aWxlTWFwT2JqZWN0OiB0LFxuICAgICAgICBhZGRHYW1lTGF5ZXJJbmZvOiBlLFxuICAgICAgICBpc09wZW5HZW5lcmF0ZVN0YXRlOiB0aGlzLmdhbWVDb250ZXh0LmdldE9wZW5HZW5lcmF0ZVN0YXRlKClcbiAgICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdChvLCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgfVxuICBhcHBseVRlbXBDbGFzc2ljTmV4dFNwZWNpYWxUaWxlcygpIHt9XG59Il19