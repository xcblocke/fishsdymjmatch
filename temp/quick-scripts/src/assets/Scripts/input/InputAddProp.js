"use strict";
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