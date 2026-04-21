
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2Shuffle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa5e6l5ECtLSb90CKRwL6qk', 'InputTile2Shuffle');
// Scripts/input/InputTile2Shuffle.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameUseItem_1 = require("../gamePlay/dot/DGameUseItem");
var DynamicCurve_1 = require("../types/DynamicCurve");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2HitTipsEffect_1 = require("../Tile2HitTipsEffect");
var Tile2NotEnoughItemsEffect_1 = require("../Tile2NotEnoughItemsEffect");
var Tile2ShuffleEffect_1 = require("../Tile2ShuffleEffect");
var Tile2ShuffleVibrateEffect_1 = require("../Tile2ShuffleVibrateEffect");
var Tile2UpdateItemEffect_1 = require("../Tile2UpdateItemEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2Shuffle = /** @class */ (function (_super) {
    __extends(InputTile2Shuffle, _super);
    function InputTile2Shuffle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2Shuffle.prototype.excute = function (e) {
        var t, o, n = false, i = this.gameContext.getTileMapObject();
        try {
            for (var r = __values(i.tileObjectMap().values()), d = r.next(); !d.done; d = r.next()) {
                var h = d.value;
                if (h.isValid && !h.getIsInSlotBar()) {
                    n = true;
                    break;
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                d && !d.done && (o = r.return) && o.call(r);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        if (n) {
            var m = this.gameContext.getGameData().getShuffleNums(), v = e.isFree;
            if (!v) {
                if (!this.gameContext.getGameData().isShuffleEnough()) {
                    this.pushEffect(new Tile2NotEnoughItemsEffect_1.Tile2NotEnoughItemsEffect({
                        from: "shuffle"
                    }), BehaviorsEnum_1.EInsertType.Parallel);
                    return;
                }
                this.gameContext.getGameData().changeShuffleNums(-1);
                this.gameContext.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Shuffle, e.from);
                this.gameContext.getGameData().toolChange(GameTypeEnums_1.EItemId.Shuffle, -1);
                DynamicCurve_1.default.instance.useShuffle(this.gameContext.gameType);
                DGameUseItem_1.DotGameUseItem.dot(this.gameContext, {
                    itemId: GameTypeEnums_1.EItemId.Shuffle,
                    beforeNum: m,
                    afterNum: this.gameContext.getGameData().getShuffleNums(),
                    from: e.from
                });
            }
            this.onPropUsed();
            this.gameContext.tile2TouchData.clear();
            this.gameContext.tile2ShuffleModifier.shuffle();
            var g = this.gameContext.tile2HitTipsModifier.clearAllHitTips();
            this.gameContext.saveModifier.saveLevelDataToLocalStorage();
            this.gameContext.tile2TileTypesModifier.saveToGameData();
            this.gameContext.tile2DotTrackerModifier.recordUseShuffle(v);
            this.gameContext.tile2NormalBackModifier.modifyStatus();
            var _ = this.pushNewRootEffect(e, "Tile2ShuffleEffect");
            g && g.length > 0 && this.pushEffect(new Tile2HitTipsEffect_1.Tile2HitTipsEffect({
                isClearHit: true,
                tileId1: g[0] || "",
                tileId2: g[1] || ""
            }), BehaviorsEnum_1.EInsertType.Parallel, _.newEffectId, false);
            this.pushEffect(new Tile2UpdateItemEffect_1.Tile2UpdateItemEffect({
                curNum: this.gameContext.getGameData().getShuffleNums()
            }), BehaviorsEnum_1.EInsertType.Parallel, _.newEffectId, false);
            this.pushShuffleEffect(_.newEffectId);
        }
    };
    InputTile2Shuffle.prototype.onPropUsed = function () { };
    InputTile2Shuffle.prototype.getShuffleEffect = function () {
        return new Tile2ShuffleEffect_1.Tile2ShuffleEffect({});
    };
    InputTile2Shuffle.prototype.pushShuffleEffect = function (e) {
        var t = this.getShuffleEffect();
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel, e, false);
        this.pushEffect(new Tile2ShuffleVibrateEffect_1.Tile2ShuffleVibrateEffect({}), BehaviorsEnum_1.EInsertType.Parallel, e, false);
    };
    __decorate([
        mj.traitEvent("IptT2Shuffle_exec")
    ], InputTile2Shuffle.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptT2Shuffle_used")
    ], InputTile2Shuffle.prototype, "onPropUsed", null);
    __decorate([
        mj.traitEvent("IptT2Shuffle_getEff")
    ], InputTile2Shuffle.prototype, "getShuffleEffect", null);
    __decorate([
        mj.traitEvent("IptT2Shuffle_pushEff")
    ], InputTile2Shuffle.prototype, "pushShuffleEffect", null);
    return InputTile2Shuffle;
}(InputBase_1.InputBase));
exports.default = InputTile2Shuffle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJTaHVmZmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBOEQ7QUFDOUQsc0RBQWlEO0FBQ2pELDJEQUF3RDtBQUN4RCwwRUFBbUU7QUFDbkUsNERBQTJEO0FBQzNELDBFQUF5RTtBQUN6RSw0REFBMkQ7QUFDM0QsMEVBQXlFO0FBQ3pFLGtFQUFpRTtBQUNqRSxvREFBbUQ7QUFDbkQ7SUFBK0MscUNBQVM7SUFBeEQ7O0lBK0VBLENBQUM7SUE3RUMsa0NBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLEtBQUssRUFDVCxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFDLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUN0RixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNoQixJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUU7b0JBQ3BDLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ1QsTUFBTTtpQkFDUDthQUNGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxD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IHsgRG90R2FtZVVzZUl0ZW0gfSBmcm9tICcuLi9nYW1lUGxheS9kb3QvREdhbWVVc2VJdGVtJztcbmltcG9ydCBEeW5hbWljQ3VydmUgZnJvbSAnLi4vdHlwZXMvRHluYW1pY0N1cnZlJztcbmltcG9ydCB7IEVJbnNlcnRUeXBlIH0gZnJvbSAnLi4vY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBFSXRlbUlkIH0gZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBUaWxlMkhpdFRpcHNFZmZlY3QgfSBmcm9tICcuLi9UaWxlMkhpdFRpcHNFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJOb3RFbm91Z2hJdGVtc0VmZmVjdCB9IGZyb20gJy4uL1RpbGUyTm90RW5vdWdoSXRlbXNFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJTaHVmZmxlRWZmZWN0IH0gZnJvbSAnLi4vVGlsZTJTaHVmZmxlRWZmZWN0JztcbmltcG9ydCB7IFRpbGUyU2h1ZmZsZVZpYnJhdGVFZmZlY3QgfSBmcm9tICcuLi9UaWxlMlNodWZmbGVWaWJyYXRlRWZmZWN0JztcbmltcG9ydCB7IFRpbGUyVXBkYXRlSXRlbUVmZmVjdCB9IGZyb20gJy4uL1RpbGUyVXBkYXRlSXRlbUVmZmVjdCc7XG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuLi9pbnB1dGJhc2UvSW5wdXRCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0VGlsZTJTaHVmZmxlIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgQG1qLnRyYWl0RXZlbnQoXCJJcHRUMlNodWZmbGVfZXhlY1wiKVxuICBleGN1dGUoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSBmYWxzZSxcbiAgICAgIGkgPSB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgciA9IF9fdmFsdWVzKGkudGlsZU9iamVjdE1hcCgpLnZhbHVlcygpKSwgZCA9IHIubmV4dCgpOyAhZC5kb25lOyBkID0gci5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGggPSBkLnZhbHVlO1xuICAgICAgICBpZiAoaC5pc1ZhbGlkICYmICFoLmdldElzSW5TbG90QmFyKCkpIHtcbiAgICAgICAgICBuID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBkICYmICFkLmRvbmUgJiYgKG8gPSByLnJldHVybikgJiYgby5jYWxsKHIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuKSB7XG4gICAgICB2YXIgbSA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRTaHVmZmxlTnVtcygpLFxuICAgICAgICB2ID0gZS5pc0ZyZWU7XG4gICAgICBpZiAoIXYpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuaXNTaHVmZmxlRW5vdWdoKCkpIHtcbiAgICAgICAgICB0aGlzLnB1c2hFZmZlY3QobmV3IFRpbGUyTm90RW5vdWdoSXRlbXNFZmZlY3Qoe1xuICAgICAgICAgICAgZnJvbTogXCJzaHVmZmxlXCJcbiAgICAgICAgICB9KSwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuY2hhbmdlU2h1ZmZsZU51bXMoLTEpO1xuICAgICAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkucmVjb3JkVG9vbFVzZShFSXRlbUlkLlNodWZmbGUsIGUuZnJvbSk7XG4gICAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS50b29sQ2hhbmdlKEVJdGVtSWQuU2h1ZmZsZSwgLTEpO1xuICAgICAgICBEeW5hbWljQ3VydmUuaW5zdGFuY2UudXNlU2h1ZmZsZSh0aGlzLmdhbWVDb250ZXh0LmdhbWVUeXBlKTtcbiAgICAgICAgRG90R2FtZVVzZUl0ZW0uZG90KHRoaXMuZ2FtZUNvbnRleHQsIHtcbiAgICAgICAgICBpdGVtSWQ6IEVJdGVtSWQuU2h1ZmZsZSxcbiAgICAgICAgICBiZWZvcmVOdW06IG0sXG4gICAgICAgICAgYWZ0ZXJOdW06IHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRTaHVmZmxlTnVtcygpLFxuICAgICAgICAgIGZyb206IGUuZnJvbVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25Qcm9wVXNlZCgpO1xuICAgICAgdGhpcy5nYW1lQ29udGV4dC50aWxlMlRvdWNoRGF0YS5jbGVhcigpO1xuICAgICAgdGhpcy5nYW1lQ29udGV4dC50aWxlMlNodWZmbGVNb2RpZmllci5zaHVmZmxlKCk7XG4gICAgICB2YXIgZyA9IHRoaXMuZ2FtZUNvbnRleHQudGlsZTJIaXRUaXBzTW9kaWZpZXIuY2xlYXJBbGxIaXRUaXBzKCk7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LnNhdmVNb2RpZmllci5zYXZlTGV2ZWxEYXRhVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQudGlsZTJUaWxlVHlwZXNNb2RpZmllci5zYXZlVG9HYW1lRGF0YSgpO1xuICAgICAgdGhpcy5nYW1lQ29udGV4dC50aWxlMkRvdFRyYWNrZXJNb2RpZmllci5yZWNvcmRVc2VTaHVmZmxlKHYpO1xuICAgICAgdGhpcy5nYW1lQ29udGV4dC50aWxlMk5vcm1hbEJhY2tNb2RpZmllci5tb2RpZnlTdGF0dXMoKTtcbiAgICAgIHZhciBfID0gdGhpcy5wdXNoTmV3Um9vdEVmZmVjdChlLCBcIlRpbGUyU2h1ZmZsZUVmZmVjdFwiKTtcbiAgICAgIGcgJiYgZy5sZW5ndGggPiAwICYmIHRoaXMucHVzaEVmZmVjdChuZXcgVGlsZTJIaXRUaXBzRWZmZWN0KHtcbiAgICAgICAgaXNDbGVhckhpdDogdHJ1ZSxcbiAgICAgICAgdGlsZUlkMTogZ1swXSB8fCBcIlwiLFxuICAgICAgICB0aWxlSWQyOiBnWzFdIHx8IFwiXCJcbiAgICAgIH0pLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCwgXy5uZXdFZmZlY3RJZCwgZmFsc2UpO1xuICAgICAgdGhpcy5wdXNoRWZmZWN0KG5ldyBUaWxlMlVwZGF0ZUl0ZW1FZmZlY3Qoe1xuICAgICAgICBjdXJOdW06IHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRTaHVmZmxlTnVtcygpXG4gICAgICB9KSwgRUluc2VydFR5cGUuUGFyYWxsZWwsIF8ubmV3RWZmZWN0SWQsIGZhbHNlKTtcbiAgICAgIHRoaXMucHVzaFNodWZmbGVFZmZlY3QoXy5uZXdFZmZlY3RJZCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0VDJTaHVmZmxlX3VzZWRcIilcbiAgb25Qcm9wVXNlZCgpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0VDJTaHVmZmxlX2dldEVmZlwiKVxuICBnZXRTaHVmZmxlRWZmZWN0KCkge1xuICAgIHJldHVybiBuZXcgVGlsZTJTaHVmZmxlRWZmZWN0KHt9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklwdFQyU2h1ZmZsZV9wdXNoRWZmXCIpXG4gIHB1c2hTaHVmZmxlRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0U2h1ZmZsZUVmZmVjdCgpO1xuICAgIHRoaXMucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCwgZSwgZmFsc2UpO1xuICAgIHRoaXMucHVzaEVmZmVjdChuZXcgVGlsZTJTaHVmZmxlVmlicmF0ZUVmZmVjdCh7fSksIEVJbnNlcnRUeXBlLlBhcmFsbGVsLCBlLCBmYWxzZSk7XG4gIH1cbn0iXX0=