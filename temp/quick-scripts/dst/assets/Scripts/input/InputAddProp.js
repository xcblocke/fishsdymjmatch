
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputAddProp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '94cf5zSouBF0KL9Vo0JZ1wv', 'InputAddProp');
// Scripts/input/InputAddProp.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameGetItem_1 = require("../gamePlay/dot/DGameGetItem");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var UpdateHitTipsPropEffect_1 = require("../UpdateHitTipsPropEffect");
var UpdateShufflePropEffect_1 = require("../UpdateShufflePropEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputAddProp = /** @class */ (function (_super) {
    __extends(InputAddProp, _super);
    function InputAddProp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputAddProp.prototype.excute = function (e) {
        var t = e.propType, o = e.num, n = this.gameContext.getGameData();
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
            this.pushUpdateShufflePropEffect(i);
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
            this.pushUpdateHitTipsPropEffect(i);
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
        }
        else
            console.error("[InputAddProp] 未知的道具类型: " + t);
    };
    InputAddProp.prototype.pushUpdateShufflePropEffect = function (e) {
        var t = new UpdateShufflePropEffect_1.UpdateShufflePropEffect({
            curNum: e
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputAddProp.prototype.pushUpdateHitTipsPropEffect = function (e) {
        var t = new UpdateHitTipsPropEffect_1.UpdateHitTipsPropEffect({
            curNum: e
        });
        this.pushEffect(t);
    };
    __decorate([
        mj.traitEvent("IptAddProp_exec")
    ], InputAddProp.prototype, "excute", null);
    return InputAddProp;
}(InputBase_1.InputBase));
exports.default = InputAddProp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0QWRkUHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQThEO0FBQzlELDJEQUF3RDtBQUN4RCwwRUFBbUU7QUFDbkUsc0VBQXFFO0FBQ3JFLHNFQUFxRTtBQUNyRSxvREFBbUQ7QUFDbkQ7SUFBMEMsZ0NBQVM7SUFBbkQ7O0lBdURBLENBQUM7SUFyREMsNkJBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDVCxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQyxJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxVQUFVLENBQUMsdUJBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNCLDZCQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ25DLE1BQU0sRUFBRSx1QkFBTyxDQUFDLE9BQU87Z0JBQ3ZCLE1BQU0sRUFBRSxDQUFDO2dCQUNULFFBQVEsRUFBRSxDQUFDO2dCQUNYLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtnQkFDcEIsVUFBVSxFQUFFLENBQUMsQ0FBQyxVQUFVO2FBQ3pCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksU0FBUyxLQUFLLENBQUMsRUFBRTtZQUMxQixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyx1QkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLDZCQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ25DLE1BQU0sRUFBRSx1QkFBTyxDQUFDLElBQUk7Z0JBQ3BCLE1BQU0sRUFBRSxDQUFDO2dCQUNULFFBQVEsRUFBRSxDQUFDO2dCQUNYLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtnQkFDcEIsVUFBVSxFQUFFLENBQUMsQ0FBQyxVQUFVO2FBQ3pCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksUUFBUSxLQUFLLENBQUMsRUFBRTtZQUN6QixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyx1QkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3RCLDZCQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ25DLE1BQU0sRUFBRSx1QkFBTyxDQUFDLE1BQU07Z0JBQ3RCLE1BQU0sRUFBRSxDQUFDO2dCQUNULFFBQVEsRUFBRSxDQUFDO2dCQUNYLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtnQkFDcEIsVUFBVSxFQUFFLENBQUMsQ0FBQyxVQUFVO2FBQ3pCLENBQUMsQ0FBQztTQUNKOztZQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELGtEQUEyQixHQUEzQixVQUE0QixDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksaURBQXVCLENBQUM7WUFDbEMsTUFBTSxFQUFFLENBQUM7U0FDVixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxrREFBMkIsR0FBM0IsVUFBNEIsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxJQUFJLGlEQUF1QixDQUFDO1lBQ2xDLE1BQU0sRUFBRSxDQUFDO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBcEREO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQzs4Q0F5Q2hDO0lBYUgsbUJBQUM7Q0F2REQsQUF1REMsQ0F2RHlDLHFCQUFTLEdBdURsRDtrQkF2RG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb3RHYW1lR2V0SXRlbSB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9ER2FtZUdldEl0ZW0nO1xuaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IEVJdGVtSWQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IFVwZGF0ZUhpdFRpcHNQcm9wRWZmZWN0IH0gZnJvbSAnLi4vVXBkYXRlSGl0VGlwc1Byb3BFZmZlY3QnO1xuaW1wb3J0IHsgVXBkYXRlU2h1ZmZsZVByb3BFZmZlY3QgfSBmcm9tICcuLi9VcGRhdGVTaHVmZmxlUHJvcEVmZmVjdCc7XG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuLi9pbnB1dGJhc2UvSW5wdXRCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0QWRkUHJvcCBleHRlbmRzIElucHV0QmFzZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0QWRkUHJvcF9leGVjXCIpXG4gIGV4Y3V0ZShlKSB7XG4gICAgdmFyIHQgPSBlLnByb3BUeXBlLFxuICAgICAgbyA9IGUubnVtLFxuICAgICAgbiA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKTtcbiAgICBpZiAoXCJzaHVmZmxlXCIgPT09IHQpIHtcbiAgICAgIG4uY2hhbmdlU2h1ZmZsZU51bXMobyk7XG4gICAgICBuLnRvb2xDaGFuZ2UoRUl0ZW1JZC5TaHVmZmxlLCBvKTtcbiAgICAgIHZhciBpID0gbi5nZXRTaHVmZmxlTnVtcygpO1xuICAgICAgRG90R2FtZUdldEl0ZW0uZG90KHRoaXMuZ2FtZUNvbnRleHQsIHtcbiAgICAgICAgaXRlbUlkOiBFSXRlbUlkLlNodWZmbGUsXG4gICAgICAgIG51bWJlcjogbyxcbiAgICAgICAgYWZ0ZXJOdW06IGksXG4gICAgICAgIHJlYXNvbklkOiBlLnJlYXNvbklkLFxuICAgICAgICByZWFzb25JbmZvOiBlLnJlYXNvbkluZm9cbiAgICAgIH0pO1xuICAgICAgdGhpcy5wdXNoVXBkYXRlU2h1ZmZsZVByb3BFZmZlY3QoaSk7XG4gICAgfSBlbHNlIGlmIChcImhpdFRpcHNcIiA9PT0gdCkge1xuICAgICAgbi5jaGFuZ2VIaXRUaXBzTnVtcyhvKTtcbiAgICAgIG4udG9vbENoYW5nZShFSXRlbUlkLkhpbnQsIG8pO1xuICAgICAgaSA9IG4uZ2V0SGl0VGlwc051bXMoKTtcbiAgICAgIERvdEdhbWVHZXRJdGVtLmRvdCh0aGlzLmdhbWVDb250ZXh0LCB7XG4gICAgICAgIGl0ZW1JZDogRUl0ZW1JZC5IaW50LFxuICAgICAgICBudW1iZXI6IG8sXG4gICAgICAgIGFmdGVyTnVtOiBpLFxuICAgICAgICByZWFzb25JZDogZS5yZWFzb25JZCxcbiAgICAgICAgcmVhc29uSW5mbzogZS5yZWFzb25JbmZvXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHVzaFVwZGF0ZUhpdFRpcHNQcm9wRWZmZWN0KGkpO1xuICAgIH0gZWxzZSBpZiAoXCJyZXZlcnRcIiA9PT0gdCkge1xuICAgICAgbi5jaGFuZ2VSZXZlcnROdW1zKG8pO1xuICAgICAgbi50b29sQ2hhbmdlKEVJdGVtSWQuUmV2ZXJ0LCBvKTtcbiAgICAgIGkgPSBuLmdldFJldmVydE51bXMoKTtcbiAgICAgIERvdEdhbWVHZXRJdGVtLmRvdCh0aGlzLmdhbWVDb250ZXh0LCB7XG4gICAgICAgIGl0ZW1JZDogRUl0ZW1JZC5SZXZlcnQsXG4gICAgICAgIG51bWJlcjogbyxcbiAgICAgICAgYWZ0ZXJOdW06IGksXG4gICAgICAgIHJlYXNvbklkOiBlLnJlYXNvbklkLFxuICAgICAgICByZWFzb25JbmZvOiBlLnJlYXNvbkluZm9cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBjb25zb2xlLmVycm9yKFwiW0lucHV0QWRkUHJvcF0g5pyq55+l55qE6YGT5YW357G75Z6LOiBcIiArIHQpO1xuICB9XG4gIHB1c2hVcGRhdGVTaHVmZmxlUHJvcEVmZmVjdChlKSB7XG4gICAgdmFyIHQgPSBuZXcgVXBkYXRlU2h1ZmZsZVByb3BFZmZlY3Qoe1xuICAgICAgY3VyTnVtOiBlXG4gICAgfSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KHQsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBwdXNoVXBkYXRlSGl0VGlwc1Byb3BFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gbmV3IFVwZGF0ZUhpdFRpcHNQcm9wRWZmZWN0KHtcbiAgICAgIGN1ck51bTogZVxuICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdCh0KTtcbiAgfVxufSJdfQ==