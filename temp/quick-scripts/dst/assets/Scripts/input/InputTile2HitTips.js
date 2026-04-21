
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2HitTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4bf5uIzmZFL7ijc6QPDYzB', 'InputTile2HitTips');
// Scripts/input/InputTile2HitTips.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameUseItem_1 = require("../gamePlay/dot/DGameUseItem");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2HitTipsEffect_1 = require("../Tile2HitTipsEffect");
var Tile2HitTipsVibrateEffect_1 = require("../Tile2HitTipsVibrateEffect");
var Tile2NoHintTipsEffect_1 = require("../Tile2NoHintTipsEffect");
var Tile2NotEnoughItemsEffect_1 = require("../Tile2NotEnoughItemsEffect");
var Tile2UpdateHitTipsItemEffect_1 = require("../Tile2UpdateHitTipsItemEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2HitTips = /** @class */ (function (_super) {
    __extends(InputTile2HitTips, _super);
    function InputTile2HitTips() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2HitTips.prototype.excute = function (e) {
        if (!(this.gameController.gameContext.getCanHitTips().length > 0))
            if (this.gameContext.getGameData().isHitTipsEnough()) {
                var t = this.selectHitTipIds();
                if (t && t.tileIds && 2 === t.tileIds.length) {
                    var o = t.tileIds[0], n = t.tileIds[1], i = t.flipId, r = this.gameContext.getGameData().getHitTipsNums();
                    this.gameContext.getGameData().changeHitTipsNums(-1);
                    this.gameContext.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Hint);
                    this.gameContext.getGameData().toolChange(GameTypeEnums_1.EItemId.Hint, -1);
                    var c = this.gameContext.getGameData().getHitTipsNums();
                    DGameUseItem_1.DotGameUseItem.dot(this.gameContext, {
                        itemId: GameTypeEnums_1.EItemId.Hint,
                        afterNum: c,
                        beforeNum: r
                    });
                    this.gameContext.tile2DotTrackerModifier.recordUseHint([o, n]);
                    this.onPropUsed();
                    this.gameController.tileMapObject.getTileObject(o).isHint = true;
                    this.gameController.tileMapObject.getTileObject(n).isHint = true;
                    this.gameController.gameContext.setCanHitTips([o, n]);
                    var u = this.pushNewRootEffect(e, "Tile2HitTipsEffect");
                    this.pushEffect(new Tile2UpdateHitTipsItemEffect_1.Tile2UpdateHitTipsItemEffect({
                        curNum: this.gameContext.getGameData().getHitTipsNums()
                    }), BehaviorsEnum_1.EInsertType.Parallel, u.newEffectId, false);
                    this.pushHitTipsEffectWithId(o, n, i, false, u.newEffectId);
                }
                else
                    this.pushEffect(new Tile2NoHintTipsEffect_1.Tile2NoHintTipsEffect({}));
            }
            else
                this.pushEffect(new Tile2NotEnoughItemsEffect_1.Tile2NotEnoughItemsEffect({
                    from: "hitTips"
                }), BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputTile2HitTips.prototype.onPropUsed = function () { };
    InputTile2HitTips.prototype.selectHitTipIds = function () {
        this.gameController.tileMapObject.updateCanMatchTiles();
        var e = this.gameContext.tile2HitTipsChecker.computeTile2Hint();
        return e ? {
            tileIds: [e.clearId1, e.clearId2],
            flipId: e.flipId
        } : null;
    };
    InputTile2HitTips.prototype.pushHitTipsEffectWithId = function (e, t, o, n, i) {
        this.pushEffect(new Tile2HitTipsEffect_1.Tile2HitTipsEffect({
            isClearHit: n,
            tileId1: e,
            tileId2: t,
            flipId: o
        }), BehaviorsEnum_1.EInsertType.Parallel, i, false);
        this.pushEffect(new Tile2HitTipsVibrateEffect_1.Tile2HitTipsVibrateEffect({}), BehaviorsEnum_1.EInsertType.Parallel, i, false);
    };
    __decorate([
        mj.traitEvent("IptT2HitTips_exec")
    ], InputTile2HitTips.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptT2HitTips_used")
    ], InputTile2HitTips.prototype, "onPropUsed", null);
    __decorate([
        mj.traitEvent("IptT2HitTips_hinkIds")
    ], InputTile2HitTips.prototype, "selectHitTipIds", null);
    __decorate([
        mj.traitEvent("IptT2HitTips_pushEff")
    ], InputTile2HitTips.prototype, "pushHitTipsEffectWithId", null);
    return InputTile2HitTips;
}(InputBase_1.InputBase));
exports.default = InputTile2HitTips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJIaXRUaXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBOEQ7QUFDOUQsMkRBQXdEO0FBQ3hELDBFQUFtRTtBQUNuRSw0REFBMkQ7QUFDM0QsMEVBQXlFO0FBQ3pFLGtFQUFpRTtBQUNqRSwwRUFBeUU7QUFDekUsZ0ZBQStFO0FBQy9FLG9EQUFtRDtBQUNuRDtJQUErQyxxQ0FBUztJQUF4RDs7SUF1REEsQ0FBQztJQXJEQyxrQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLEVBQUU7Z0JBQ3ZILElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7b0JBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQ2xCLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFDWixDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQyx1QkFBTyxDQUFDLElBQUksQ0FB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LElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxxREFBeUIsQ0FBQyxFQUFFLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQXBERDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7bURBZ0NsQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQzt1REFDcEI7SUFFZjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7NERBUXJDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO29FQVNyQztJQUNILHdCQUFDO0NBdkRELEFBdURDLENBdkQ4QyxxQkFBUyxHQXVEdkQ7a0JBdkRvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb3RHYW1lVXNlSXRlbSB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9ER2FtZVVzZUl0ZW0nO1xuaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IEVJdGVtSWQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IFRpbGUySGl0VGlwc0VmZmVjdCB9IGZyb20gJy4uL1RpbGUySGl0VGlwc0VmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMkhpdFRpcHNWaWJyYXRlRWZmZWN0IH0gZnJvbSAnLi4vVGlsZTJIaXRUaXBzVmlicmF0ZUVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMk5vSGludFRpcHNFZmZlY3QgfSBmcm9tICcuLi9UaWxlMk5vSGludFRpcHNFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJOb3RFbm91Z2hJdGVtc0VmZmVjdCB9IGZyb20gJy4uL1RpbGUyTm90RW5vdWdoSXRlbXNFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJVcGRhdGVIaXRUaXBzSXRlbUVmZmVjdCB9IGZyb20gJy4uL1RpbGUyVXBkYXRlSGl0VGlwc0l0ZW1FZmZlY3QnO1xuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFRpbGUySGl0VGlwcyBleHRlbmRzIElucHV0QmFzZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0VDJIaXRUaXBzX2V4ZWNcIilcbiAgZXhjdXRlKGUpIHtcbiAgICBpZiAoISh0aGlzLmdhbWVDb250cm9sbGVyLmdhbWVDb250ZXh0LmdldENhbkhpdFRpcHMoKS5sZW5ndGggPiAwKSkgaWYgKHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5pc0hpdFRpcHNFbm91Z2goKSkge1xuICAgICAgdmFyIHQgPSB0aGlzLnNlbGVjdEhpdFRpcElkcygpO1xuICAgICAgaWYgKHQgJiYgdC50aWxlSWRzICYmIDIgPT09IHQudGlsZUlkcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIG8gPSB0LnRpbGVJZHNbMF0sXG4gICAgICAgICAgbiA9IHQudGlsZUlkc1sxXSxcbiAgICAgICAgICBpID0gdC5mbGlwSWQsXG4gICAgICAgICAgciA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRIaXRUaXBzTnVtcygpO1xuICAgICAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuY2hhbmdlSGl0VGlwc051bXMoLTEpO1xuICAgICAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkucmVjb3JkVG9vbFVzZShFSXRlbUlkLkhpbnQpO1xuICAgICAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkudG9vbENoYW5nZShFSXRlbUlkLkhpbnQsIC0xKTtcbiAgICAgICAgdmFyIGMgPSB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0SGl0VGlwc051bXMoKTtcbiAgICAgICAgRG90R2FtZVVzZUl0ZW0uZG90KHRoaXMuZ2FtZUNvbnRleHQsIHtcbiAgICAgICAgICBpdGVtSWQ6IEVJdGVtSWQuSGludCxcbiAgICAgICAgICBhZnRlck51bTogYyxcbiAgICAgICAgICBiZWZvcmVOdW06IHJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2FtZUNvbnRleHQudGlsZTJEb3RUcmFja2VyTW9kaWZpZXIucmVjb3JkVXNlSGludChbbywgbl0pO1xuICAgICAgICB0aGlzLm9uUHJvcFVzZWQoKTtcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci50aWxlTWFwT2JqZWN0LmdldFRpbGVPYmplY3QobykuaXNIaW50ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci50aWxlTWFwT2JqZWN0LmdldFRpbGVPYmplY3QobikuaXNIaW50ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5nYW1lQ29udGV4dC5zZXRDYW5IaXRUaXBzKFtvLCBuXSk7XG4gICAgICAgIHZhciB1ID0gdGhpcy5wdXNoTmV3Um9vdEVmZmVjdChlLCBcIlRpbGUySGl0VGlwc0VmZmVjdFwiKTtcbiAgICAgICAgdGhpcy5wdXNoRWZmZWN0KG5ldyBUaWxlMlVwZGF0ZUhpdFRpcHNJdGVtRWZmZWN0KHtcbiAgICAgICAgICBjdXJOdW06IHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRIaXRUaXBzTnVtcygpXG4gICAgICAgIH0pLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCwgdS5uZXdFZmZlY3RJZCwgZmFsc2UpO1xuICAgICAgICB0aGlzLnB1c2hIaXRUaXBzRWZmZWN0V2l0aElkKG8sIG4sIGksIGZhbHNlLCB1Lm5ld0VmZmVjdElkKTtcbiAgICAgIH0gZWxzZSB0aGlzLnB1c2hFZmZlY3QobmV3IFRpbGUyTm9IaW50VGlwc0VmZmVjdCh7fSkpO1xuICAgIH0gZWxzZSB0aGlzLnB1c2hFZmZlY3QobmV3IFRpbGUyTm90RW5vdWdoSXRlbXNFZmZlY3Qoe1xuICAgICAgZnJvbTogXCJoaXRUaXBzXCJcbiAgICB9KSwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0VDJIaXRUaXBzX3VzZWRcIilcbiAgb25Qcm9wVXNlZCgpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0VDJIaXRUaXBzX2hpbmtJZHNcIilcbiAgc2VsZWN0SGl0VGlwSWRzKCkge1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIudGlsZU1hcE9iamVjdC51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gICAgdmFyIGUgPSB0aGlzLmdhbWVDb250ZXh0LnRpbGUySGl0VGlwc0NoZWNrZXIuY29tcHV0ZVRpbGUySGludCgpO1xuICAgIHJldHVybiBlID8ge1xuICAgICAgdGlsZUlkczogW2UuY2xlYXJJZDEsIGUuY2xlYXJJZDJdLFxuICAgICAgZmxpcElkOiBlLmZsaXBJZFxuICAgIH0gOiBudWxsO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0VDJIaXRUaXBzX3B1c2hFZmZcIilcbiAgcHVzaEhpdFRpcHNFZmZlY3RXaXRoSWQoZSwgdCwgbywgbiwgaSkge1xuICAgIHRoaXMucHVzaEVmZmVjdChuZXcgVGlsZTJIaXRUaXBzRWZmZWN0KHtcbiAgICAgIGlzQ2xlYXJIaXQ6IG4sXG4gICAgICB0aWxlSWQxOiBlLFxuICAgICAgdGlsZUlkMjogdCxcbiAgICAgIGZsaXBJZDogb1xuICAgIH0pLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCwgaSwgZmFsc2UpO1xuICAgIHRoaXMucHVzaEVmZmVjdChuZXcgVGlsZTJIaXRUaXBzVmlicmF0ZUVmZmVjdCh7fSksIEVJbnNlcnRUeXBlLlBhcmFsbGVsLCBpLCBmYWxzZSk7XG4gIH1cbn0iXX0=