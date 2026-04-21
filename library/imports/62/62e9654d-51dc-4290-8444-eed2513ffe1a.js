"use strict";
cc._RF.push(module, '62e96VNUdxCkIRE7tJRP/4a', 'PropNumsTrait');
// subpackages/l_pns/Scripts/PropNumsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DGameGetItem_1 = require("../../../Scripts/gamePlay/dot/DGameGetItem");
var PropNumsTrait = /** @class */ (function (_super) {
    __extends(PropNumsTrait, _super);
    function PropNumsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropNumsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PropNumsTrait.prototype.onIptSetLv_setData = function (t, e) {
        if (1 == t.args[0].levelId && !this.localData.isPropNumsTraitDone) {
            t.ins.gameContext.getGameData().changeShuffleNums(this._traitData.shuffleNums, true);
            t.ins.gameContext.getGameData().changeHitTipsNums(this._traitData.hitTipsNums, true);
            this.localData.isPropNumsTraitDone = true;
            DGameGetItem_1.DotGameGetItem.dot(t.ins.gameContext, {
                itemId: GameTypeEnums_1.EItemId.Shuffle,
                number: this._traitData.shuffleNums,
                afterNum: t.ins.gameContext.getGameData().getShuffleNums(),
                reasonId: GameTypeEnums_1.EGetItemReasonId.SystemGift,
                reasonInfo: "首次进入送3次重洗牌",
                replace: true
            });
            DGameGetItem_1.DotGameGetItem.dot(t.ins.gameContext, {
                itemId: GameTypeEnums_1.EItemId.Hint,
                number: this._traitData.hitTipsNums,
                afterNum: t.ins.gameContext.getGameData().getHitTipsNums(),
                reasonId: GameTypeEnums_1.EGetItemReasonId.SystemGift,
                reasonInfo: "首次进入送3次提示",
                replace: true
            });
        }
        e();
    };
    PropNumsTrait.traitKey = "PropNumsTrait";
    PropNumsTrait = __decorate([
        mj.trait,
        mj.class("PropNumsTrait")
    ], PropNumsTrait);
    return PropNumsTrait;
}(Trait_1.default));
exports.default = PropNumsTrait;

cc._RF.pop();