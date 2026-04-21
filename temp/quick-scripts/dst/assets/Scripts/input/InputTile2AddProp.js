
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2AddProp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1b6aD4HaNM1YJU63Gs7T4o', 'InputTile2AddProp');
// Scripts/input/InputTile2AddProp.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameGetItem_1 = require("../gamePlay/dot/DGameGetItem");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2UpdateHitTipsItemEffect_1 = require("../Tile2UpdateHitTipsItemEffect");
var Tile2UpdateItemEffect_1 = require("../Tile2UpdateItemEffect");
var Tile2UpdateRevertItemEffect_1 = require("../Tile2UpdateRevertItemEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2AddProp = /** @class */ (function (_super) {
    __extends(InputTile2AddProp, _super);
    function InputTile2AddProp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2AddProp.prototype.excute = function (e) {
        var t = e.propType, o = Number(e.num), n = this.gameContext.getGameData();
        if ("shuffle" === t) {
            n.changeShuffleNums(o);
            n.toolChange(GameTypeEnums_1.EItemId.Shuffle, o);
            var i = n.getShuffleNums();
            DGameGetItem_1.DotGameGetItem.dot(this.gameContext, {
                itemId: GameTypeEnums_1.EItemId.Shuffle,
                number: o,
                afterNum: i,
                reasonId: e.reasonId,
                reasonInfo: e.reasonInfo
            });
            var r = this.pushNewRootEffect(e, "tile2AddPropShuffle");
            this.pushEffect(new Tile2UpdateItemEffect_1.Tile2UpdateItemEffect({
                curNum: i
            }), BehaviorsEnum_1.EInsertType.Parallel, r.newEffectId, false);
        }
        else if ("hitTips" === t) {
            n.changeHitTipsNums(o);
            n.toolChange(GameTypeEnums_1.EItemId.Hint, o);
            i = n.getHitTipsNums();
            DGameGetItem_1.DotGameGetItem.dot(this.gameContext, {
                itemId: GameTypeEnums_1.EItemId.Hint,
                number: o,
                afterNum: i,
                reasonId: e.reasonId,
                reasonInfo: e.reasonInfo
            });
            r = this.pushNewRootEffect(e, "tile2AddPropHitTips");
            this.pushEffect(new Tile2UpdateHitTipsItemEffect_1.Tile2UpdateHitTipsItemEffect({
                curNum: i
            }), BehaviorsEnum_1.EInsertType.Parallel, r.newEffectId, false);
        }
        else if ("revert" === t) {
            n.changeRevertNums(o);
            n.toolChange(GameTypeEnums_1.EItemId.Revert, o);
            i = n.getRevertNums();
            DGameGetItem_1.DotGameGetItem.dot(this.gameContext, {
                itemId: GameTypeEnums_1.EItemId.Revert,
                number: o,
                afterNum: i,
                reasonId: e.reasonId,
                reasonInfo: e.reasonInfo
            });
            r = this.pushNewRootEffect(e, "tile2AddPropRevert");
            this.pushEffect(new Tile2UpdateRevertItemEffect_1.Tile2UpdateRevertItemEffect({
                curNum: i
            }), BehaviorsEnum_1.EInsertType.Parallel, r.newEffectId, false);
        }
        else if ("revive" === t) {
            n.changeReviveNums(o);
            n.toolChange(GameTypeEnums_1.EItemId.Revive, o);
            i = n.getReviveNums();
            DGameGetItem_1.DotGameGetItem.dot(this.gameContext, {
                itemId: GameTypeEnums_1.EItemId.Revive,
                number: o,
                afterNum: i,
                reasonId: e.reasonId,
                reasonInfo: e.reasonInfo
            });
        }
        else
            console.error("[InputTile2AddProp] 未知的道具类型: " + t);
    };
    __decorate([
        mj.traitEvent("IptT2AddProp_exec")
    ], InputTile2AddProp.prototype, "excute", null);
    return InputTile2AddProp;
}(InputBase_1.InputBase));
exports.default = InputTile2AddProp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJBZGRQcm9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBOEQ7QUFDOUQsMkRBQXdEO0FBQ3hELDBFQUFtRTtBQUNuRSxnRkFBK0U7QUFDL0Usa0VBQWlFO0FBQ2pFLDhFQUE2RTtBQUM3RSxvREFBbUQ7QUFDbkQ7SUFBK0MscUNBQVM7SUFBeEQ7O0lBZ0VBLENBQUM7SUE5REMsa0NBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUNoQixDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDakIsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckMsSUFBSSxTQUFTLEtBQUssQ0FBQyxFQUFFO1lBQ25CLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsVUFBVSxDQUFDLHVCQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMzQiw2QkFBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNuQyxNQUFNLEVBQUUsdUJBQU8sQ0FBQyxPQUFPO2dCQUN2QixNQUFNLEVBQUUsQ0FBQztnQkFDVCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVE7Z0JBQ3BCLFVBQVUsRUFBRSxDQUFDLENBQUMsVUFBVTthQUN6QixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLHFCQUFxQixDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLDZDQUFxQixDQUFDO2dCQUN4QyxNQUFNLEVBQUUsQ0FBQzthQUNWLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2pEO2FBQU0sSUFBSSxTQUFTLEtBQUssQ0FBQyxFQUFFO1lBQzFCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsVUFBVSxDQUFDLHVCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsNkJBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbkMsTUFBTSxFQUFFLHVCQUFPLENBQUMsSUFBSTtnQkFDcEIsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRO2dCQUNwQixVQUFVLEVBQUUsQ0FBQyxDQUFDLFVBQVU7YUFDekIsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksMkRBQTRCLENBQUM7Z0JBQy9DLE1BQU0sRUFBRSxDQUFDO2FBQ1YsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDakQ7YUFBTSxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7WUFDekIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxVQUFVLENBQUMsdUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN0Qiw2QkFBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNuQyxNQUFNLEVBQUUsdUJBQU8sQ0FBQyxNQUFNO2dCQUN0QixNQUFNLEVBQUUsQ0FBQztnQkFDVCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVE7Z0JBQ3BCLFVBQVUsRUFBRSxDQUFDLENBQUMsVUFBVTthQUN6QixDQUFDLENBQUM7WUFDSCxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSx5REFBMkIsQ0FBQztnQkFDOUMsTUFBTSxFQUFFLENBQUM7YUFDVixDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNqRDthQUFNLElBQUksUUFBUSxLQUFLLENBQUMsRUFBRTtZQUN6QixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyx1QkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3RCLDZCQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ25DLE1BQU0sRUFBRSx1QkFBTyxDQUFDLE1BQU07Z0JBQ3RCLE1BQU0sRUFBRSxDQUFDO2dCQUNULFFBQVEsRUFBRSxDQUFDO2dCQUNYLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtnQkFDcEIsVUFBVSxFQUFFLENBQUMsQ0FBQyxVQUFVO2FBQ3pCLENBQUMsQ0FBQztTQUNKOztZQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQTdERDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7bURBOERsQztJQUNILHdCQUFDO0NBaEVELEFBZ0VDLENBaEU4QyxxQkFBUyxHQWdFdkQ7a0JBaEVvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb3RHYW1lR2V0SXRlbSB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9ER2FtZUdldEl0ZW0nO1xuaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IEVJdGVtSWQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IFRpbGUyVXBkYXRlSGl0VGlwc0l0ZW1FZmZlY3QgfSBmcm9tICcuLi9UaWxlMlVwZGF0ZUhpdFRpcHNJdGVtRWZmZWN0JztcbmltcG9ydCB7IFRpbGUyVXBkYXRlSXRlbUVmZmVjdCB9IGZyb20gJy4uL1RpbGUyVXBkYXRlSXRlbUVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMlVwZGF0ZVJldmVydEl0ZW1FZmZlY3QgfSBmcm9tICcuLi9UaWxlMlVwZGF0ZVJldmVydEl0ZW1FZmZlY3QnO1xuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFRpbGUyQWRkUHJvcCBleHRlbmRzIElucHV0QmFzZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0VDJBZGRQcm9wX2V4ZWNcIilcbiAgZXhjdXRlKGUpIHtcbiAgICB2YXIgdCA9IGUucHJvcFR5cGUsXG4gICAgICBvID0gTnVtYmVyKGUubnVtKSxcbiAgICAgIG4gPSB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCk7XG4gICAgaWYgKFwic2h1ZmZsZVwiID09PSB0KSB7XG4gICAgICBuLmNoYW5nZVNodWZmbGVOdW1zKG8pO1xuICAgICAgbi50b29sQ2hhbmdlKEVJdGVtSWQuU2h1ZmZsZSwgbyk7XG4gICAgICB2YXIgaSA9IG4uZ2V0U2h1ZmZsZU51bXMoKTtcbiAgICAgIERvdEdhbWVHZXRJdGVtLmRvdCh0aGlzLmdhbWVDb250ZXh0LCB7XG4gICAgICAgIGl0ZW1JZDogRUl0ZW1JZC5TaHVmZmxlLFxuICAgICAgICBudW1iZXI6IG8sXG4gICAgICAgIGFmdGVyTnVtOiBpLFxuICAgICAgICByZWFzb25JZDogZS5yZWFzb25JZCxcbiAgICAgICAgcmVhc29uSW5mbzogZS5yZWFzb25JbmZvXG4gICAgICB9KTtcbiAgICAgIHZhciByID0gdGhpcy5wdXNoTmV3Um9vdEVmZmVjdChlLCBcInRpbGUyQWRkUHJvcFNodWZmbGVcIik7XG4gICAgICB0aGlzLnB1c2hFZmZlY3QobmV3IFRpbGUyVXBkYXRlSXRlbUVmZmVjdCh7XG4gICAgICAgIGN1ck51bTogaVxuICAgICAgfSksIEVJbnNlcnRUeXBlLlBhcmFsbGVsLCByLm5ld0VmZmVjdElkLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChcImhpdFRpcHNcIiA9PT0gdCkge1xuICAgICAgbi5jaGFuZ2VIaXRUaXBzTnVtcyhvKTtcbiAgICAgIG4udG9vbENoYW5nZShFSXRlbUlkLkhpbnQsIG8pO1xuICAgICAgaSA9IG4uZ2V0SGl0VGlwc051bXMoKTtcbiAgICAgIERvdEdhbWVHZXRJdGVtLmRvdCh0aGlzLmdhbWVDb250ZXh0LCB7XG4gICAgICAgIGl0ZW1JZDogRUl0ZW1JZC5IaW50LFxuICAgICAgICBudW1iZXI6IG8sXG4gICAgICAgIGFmdGVyTnVtOiBpLFxuICAgICAgICByZWFzb25JZDogZS5yZWFzb25JZCxcbiAgICAgICAgcmVhc29uSW5mbzogZS5yZWFzb25JbmZvXG4gICAgICB9KTtcbiAgICAgIHIgPSB0aGlzLnB1c2hOZXdSb290RWZmZWN0KGUsIFwidGlsZTJBZGRQcm9wSGl0VGlwc1wiKTtcbiAgICAgIHRoaXMucHVzaEVmZmVjdChuZXcgVGlsZTJVcGRhdGVIaXRUaXBzSXRlbUVmZmVjdCh7XG4gICAgICAgIGN1ck51bTogaVxuICAgICAgfSksIEVJbnNlcnRUeXBlLlBhcmFsbGVsLCByLm5ld0VmZmVjdElkLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChcInJldmVydFwiID09PSB0KSB7XG4gICAgICBuLmNoYW5nZVJldmVydE51bXMobyk7XG4gICAgICBuLnRvb2xDaGFuZ2UoRUl0ZW1JZC5SZXZlcnQsIG8pO1xuICAgICAgaSA9IG4uZ2V0UmV2ZXJ0TnVtcygpO1xuICAgICAgRG90R2FtZUdldEl0ZW0uZG90KHRoaXMuZ2FtZUNvbnRleHQsIHtcbiAgICAgICAgaXRlbUlkOiBFSXRlbUlkLlJldmVydCxcbiAgICAgICAgbnVtYmVyOiBvLFxuICAgICAgICBhZnRlck51bTogaSxcbiAgICAgICAgcmVhc29uSWQ6IGUucmVhc29uSWQsXG4gICAgICAgIHJlYXNvbkluZm86IGUucmVhc29uSW5mb1xuICAgICAgfSk7XG4gICAgICByID0gdGhpcy5wdXNoTmV3Um9vdEVmZmVjdChlLCBcInRpbGUyQWRkUHJvcFJldmVydFwiKTtcbiAgICAgIHRoaXMucHVzaEVmZmVjdChuZXcgVGlsZTJVcGRhdGVSZXZlcnRJdGVtRWZmZWN0KHtcbiAgICAgICAgY3VyTnVtOiBpXG4gICAgICB9KSwgRUluc2VydFR5cGUuUGFyYWxsZWwsIHIubmV3RWZmZWN0SWQsIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKFwicmV2aXZlXCIgPT09IHQpIHtcbiAgICAgIG4uY2hhbmdlUmV2aXZlTnVtcyhvKTtcbiAgICAgIG4udG9vbENoYW5nZShFSXRlbUlkLlJldml2ZSwgbyk7XG4gICAgICBpID0gbi5nZXRSZXZpdmVOdW1zKCk7XG4gICAgICBEb3RHYW1lR2V0SXRlbS5kb3QodGhpcy5nYW1lQ29udGV4dCwge1xuICAgICAgICBpdGVtSWQ6IEVJdGVtSWQuUmV2aXZlLFxuICAgICAgICBudW1iZXI6IG8sXG4gICAgICAgIGFmdGVyTnVtOiBpLFxuICAgICAgICByZWFzb25JZDogZS5yZWFzb25JZCxcbiAgICAgICAgcmVhc29uSW5mbzogZS5yZWFzb25JbmZvXG4gICAgICB9KTtcbiAgICB9IGVsc2UgY29uc29sZS5lcnJvcihcIltJbnB1dFRpbGUyQWRkUHJvcF0g5pyq55+l55qE6YGT5YW357G75Z6LOiBcIiArIHQpO1xuICB9XG59Il19