
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputShuffle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03bf3UpmxJHr61EwgLLNoSD', 'InputShuffle');
// Scripts/input/InputShuffle.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameUseItem_1 = require("../gamePlay/dot/DGameUseItem");
var DynamicCurve_1 = require("../types/DynamicCurve");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var ShuffleEffect_1 = require("../ShuffleEffect");
var UpdateMatchNumEffect_1 = require("../UpdateMatchNumEffect");
var UpdateShufflePropEffect_1 = require("../UpdateShufflePropEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputShuffle = /** @class */ (function (_super) {
    __extends(InputShuffle, _super);
    function InputShuffle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputShuffle.prototype.excute = function (e) {
        var t = this.gameContext.getGameData().getShuffleNums(), o = false;
        e.from !== GameInputEnum_1.EShuffleFrom.ClassicRevive && e.from !== GameInputEnum_1.EShuffleFrom.Free || (o = true);
        if (!o) {
            if (!this.gameContext.getGameData().isShuffleEnough()) {
                mj.EventManager.emit("SHOWTIPS", "Insufficient number of props.", cc.v2(0, 0));
                return;
            }
            this.gameContext.getGameData().changeShuffleNums(-1);
            this.gameContext.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Shuffle, e.from);
            this.gameContext.getGameData().toolChange(GameTypeEnums_1.EItemId.Shuffle, -1);
            DynamicCurve_1.default.instance.useShuffle(this.gameContext.gameType);
            DGameUseItem_1.DotGameUseItem.dot(this.gameContext, {
                itemId: GameTypeEnums_1.EItemId.Shuffle,
                afterNum: this.gameContext.getGameData().getShuffleNums(),
                from: e.from,
                beforeNum: t
            });
        }
        if (e.from === GameInputEnum_1.EShuffleFrom.ClassicRevive) {
            this.gameContext.classicReviveModifier.modifyReviveCount();
            this.gameContext.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Shuffle, e.from);
            DGameUseItem_1.DotGameUseItem.dot(this.gameContext, {
                itemId: GameTypeEnums_1.EItemId.Shuffle,
                afterNum: this.gameContext.getGameData().getShuffleNums(),
                from: e.from,
                beforeNum: t
            });
        }
        this.gameContext.touchData.clear();
        this.gameContext.getTileMapObject().unselectAllTileIds();
        var n = this.gameContext.getTileMapObject().getLevelData();
        this.gameController.gameContext.shuffleModifier.shuffle();
        this.gameController.tileMapObject.updateCanMatchTiles();
        this.gameContext.gameModifier.modifyShuffle();
        var i = this.gameContext.getGameData().getLevelData();
        this.gameContext.trackerModifier.triggerShuffle(i, n, e.from);
        var r = this.gameContext.tileTypesModifier.isUserFix();
        if (this.gameContext.gameType === GameTypeEnums_1.MjGameType.Classic) {
            this.gameContext.tileTypesModifier.saveToGameDataFix();
        }
        else {
            r && this.gameContext.tileTypesModifier.saveToGameData();
        }
        this.pushUpdateShufflePropEffect(this.gameContext.getGameData().getShuffleNums());
        this.pushShuffleEffect();
        this.pushUpdateMatchNumEffect();
    };
    InputShuffle.prototype.pushUpdateShufflePropEffect = function (e) {
        var t = new UpdateShufflePropEffect_1.UpdateShufflePropEffect({
            curNum: e
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputShuffle.prototype.pushShuffleEffect = function () {
        var e = this.getShuffleEffect();
        this.pushEffect(e);
        mj.EventManager.emit(GameEvent_1.EGameEvent.Effect_Shuffle, this);
    };
    InputShuffle.prototype.getShuffleEffect = function () {
        return new ShuffleEffect_1.ShuffleEffect({});
    };
    InputShuffle.prototype.pushUpdateMatchNumEffect = function () {
        var e = new UpdateMatchNumEffect_1.UpdateMatchNumEffect({
            canMatchCardPairNum: this.gameContext.getTileMapObject().getCanMatchCardPairNum()
        });
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    __decorate([
        mj.traitEvent("IptShuffle_exec")
    ], InputShuffle.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptShuffle_pushEffect")
    ], InputShuffle.prototype, "pushShuffleEffect", null);
    __decorate([
        mj.traitEvent("IptShuffle_getEffect")
    ], InputShuffle.prototype, "getShuffleEffect", null);
    return InputShuffle;
}(InputBase_1.InputBase));
exports.default = InputShuffle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0U2h1ZmZsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQThEO0FBQzlELHNEQUFpRDtBQUNqRCwyREFBd0Q7QUFDeEQsNkRBQTZEO0FBQzdELHFFQUFtRTtBQUNuRSwwRUFBK0U7QUFDL0Usa0RBQWlEO0FBQ2pELGdFQUErRDtBQUMvRCxzRUFBcUU7QUFDckUsb0RBQW1EO0FBQ25EO0lBQTBDLGdDQUFTO0lBQW5EOztJQXdFQSxDQUFDO0lBdEVDLDZCQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLEVBQUUsRUFDckQsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNaLENBQUMsQ0FBQyxJQUFJLEtBQUssNEJBQVksQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyw0QkFBWSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLEVBQUU7Z0JBQ3JELEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSwrQkFBK0IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvRSxPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUMsdUJBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RFLElBQUks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RSxDQUFDO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsd0NBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxzQkFBVSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsdUNBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLDZCQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELCtDQUF3QixHQUF4QjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksMkNBQW9CLENBQUM7WUFDL0IsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLHNCQUFzQixFQUFFO1NBQ2xGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQXJFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUM7OENBZ0RoQztJQVFEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzt5REFLdEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7d0RBR3JDO0lBT0gsbUJBQUM7Q0F4RUQsQUF3RUMsQ0F4RXlDLHFCQUFTLEdBd0VsRDtrQkF4RW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb3RHYW1lVXNlSXRlbSB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9ER2FtZVVzZUl0ZW0nO1xuaW1wb3J0IER5bmFtaWNDdXJ2ZSBmcm9tICcuLi90eXBlcy9EeW5hbWljQ3VydmUnO1xuaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IEVHYW1lRXZlbnQgfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUV2ZW50JztcbmltcG9ydCB7IEVTaHVmZmxlRnJvbSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEVJdGVtSWQsIE1qR2FtZVR5cGUgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IFNodWZmbGVFZmZlY3QgfSBmcm9tICcuLi9TaHVmZmxlRWZmZWN0JztcbmltcG9ydCB7IFVwZGF0ZU1hdGNoTnVtRWZmZWN0IH0gZnJvbSAnLi4vVXBkYXRlTWF0Y2hOdW1FZmZlY3QnO1xuaW1wb3J0IHsgVXBkYXRlU2h1ZmZsZVByb3BFZmZlY3QgfSBmcm9tICcuLi9VcGRhdGVTaHVmZmxlUHJvcEVmZmVjdCc7XG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuLi9pbnB1dGJhc2UvSW5wdXRCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0U2h1ZmZsZSBleHRlbmRzIElucHV0QmFzZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0U2h1ZmZsZV9leGVjXCIpXG4gIGV4Y3V0ZShlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0U2h1ZmZsZU51bXMoKSxcbiAgICAgIG8gPSBmYWxzZTtcbiAgICBlLmZyb20gIT09IEVTaHVmZmxlRnJvbS5DbGFzc2ljUmV2aXZlICYmIGUuZnJvbSAhPT0gRVNodWZmbGVGcm9tLkZyZWUgfHwgKG8gPSB0cnVlKTtcbiAgICBpZiAoIW8pIHtcbiAgICAgIGlmICghdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmlzU2h1ZmZsZUVub3VnaCgpKSB7XG4gICAgICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KFwiU0hPV1RJUFNcIiwgXCJJbnN1ZmZpY2llbnQgbnVtYmVyIG9mIHByb3BzLlwiLCBjYy52MigwLCAwKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5jaGFuZ2VTaHVmZmxlTnVtcygtMSk7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkucmVjb3JkVG9vbFVzZShFSXRlbUlkLlNodWZmbGUsIGUuZnJvbSk7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkudG9vbENoYW5nZShFSXRlbUlkLlNodWZmbGUsIC0xKTtcbiAgICAgIER5bmFtaWNDdXJ2ZS5pbnN0YW5jZS51c2VTaHVmZmxlKHRoaXMuZ2FtZUNvbnRleHQuZ2FtZVR5cGUpO1xuICAgICAgRG90R2FtZVVzZUl0ZW0uZG90KHRoaXMuZ2FtZUNvbnRleHQsIHtcbiAgICAgICAgaXRlbUlkOiBFSXRlbUlkLlNodWZmbGUsXG4gICAgICAgIGFmdGVyTnVtOiB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0U2h1ZmZsZU51bXMoKSxcbiAgICAgICAgZnJvbTogZS5mcm9tLFxuICAgICAgICBiZWZvcmVOdW06IHRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZS5mcm9tID09PSBFU2h1ZmZsZUZyb20uQ2xhc3NpY1Jldml2ZSkge1xuICAgICAgdGhpcy5nYW1lQ29udGV4dC5jbGFzc2ljUmV2aXZlTW9kaWZpZXIubW9kaWZ5UmV2aXZlQ291bnQoKTtcbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5yZWNvcmRUb29sVXNlKEVJdGVtSWQuU2h1ZmZsZSwgZS5mcm9tKTtcbiAgICAgIERvdEdhbWVVc2VJdGVtLmRvdCh0aGlzLmdhbWVDb250ZXh0LCB7XG4gICAgICAgIGl0ZW1JZDogRUl0ZW1JZC5TaHVmZmxlLFxuICAgICAgICBhZnRlck51bTogdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldFNodWZmbGVOdW1zKCksXG4gICAgICAgIGZyb206IGUuZnJvbSxcbiAgICAgICAgYmVmb3JlTnVtOiB0XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5nYW1lQ29udGV4dC50b3VjaERhdGEuY2xlYXIoKTtcbiAgICB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS51bnNlbGVjdEFsbFRpbGVJZHMoKTtcbiAgICB2YXIgbiA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldExldmVsRGF0YSgpO1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2FtZUNvbnRleHQuc2h1ZmZsZU1vZGlmaWVyLnNodWZmbGUoKTtcbiAgICB0aGlzLmdhbWVDb250cm9sbGVyLnRpbGVNYXBPYmplY3QudXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2FtZU1vZGlmaWVyLm1vZGlmeVNodWZmbGUoKTtcbiAgICB2YXIgaSA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRMZXZlbERhdGEoKTtcbiAgICB0aGlzLmdhbWVDb250ZXh0LnRyYWNrZXJNb2RpZmllci50cmlnZ2VyU2h1ZmZsZShpLCBuLCBlLmZyb20pO1xuICAgIHZhciByID0gdGhpcy5nYW1lQ29udGV4dC50aWxlVHlwZXNNb2RpZmllci5pc1VzZXJGaXgoKTtcbiAgICBpZiAodGhpcy5nYW1lQ29udGV4dC5nYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LnRpbGVUeXBlc01vZGlmaWVyLnNhdmVUb0dhbWVEYXRhRml4KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIgJiYgdGhpcy5nYW1lQ29udGV4dC50aWxlVHlwZXNNb2RpZmllci5zYXZlVG9HYW1lRGF0YSgpO1xuICAgIH1cbiAgICB0aGlzLnB1c2hVcGRhdGVTaHVmZmxlUHJvcEVmZmVjdCh0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0U2h1ZmZsZU51bXMoKSk7XG4gICAgdGhpcy5wdXNoU2h1ZmZsZUVmZmVjdCgpO1xuICAgIHRoaXMucHVzaFVwZGF0ZU1hdGNoTnVtRWZmZWN0KCk7XG4gIH1cbiAgcHVzaFVwZGF0ZVNodWZmbGVQcm9wRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBVcGRhdGVTaHVmZmxlUHJvcEVmZmVjdCh7XG4gICAgICBjdXJOdW06IGVcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QodCwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0U2h1ZmZsZV9wdXNoRWZmZWN0XCIpXG4gIHB1c2hTaHVmZmxlRWZmZWN0KCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRTaHVmZmxlRWZmZWN0KCk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KGUpO1xuICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVHYW1lRXZlbnQuRWZmZWN0X1NodWZmbGUsIHRoaXMpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0U2h1ZmZsZV9nZXRFZmZlY3RcIilcbiAgZ2V0U2h1ZmZsZUVmZmVjdCgpIHtcbiAgICByZXR1cm4gbmV3IFNodWZmbGVFZmZlY3Qoe30pO1xuICB9XG4gIHB1c2hVcGRhdGVNYXRjaE51bUVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IG5ldyBVcGRhdGVNYXRjaE51bUVmZmVjdCh7XG4gICAgICBjYW5NYXRjaENhcmRQYWlyTnVtOiB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRDYW5NYXRjaENhcmRQYWlyTnVtKClcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG59Il19