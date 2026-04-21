"use strict";
cc._RF.push(module, '5f14fKQuStILZ1r/XEk5+W/', 'WinClickPropTrait');
// subpackages/l_winClickProp/Scripts/WinClickPropTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DGameUseItem_1 = require("../../../Scripts/gamePlay/dot/DGameUseItem");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var WinClickPropTrait = /** @class */ (function (_super) {
    __extends(WinClickPropTrait, _super);
    function WinClickPropTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WinClickPropTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinClickPropTrait.prototype.onIptHitTips_chgPropDef = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    WinClickPropTrait.prototype.onIptHitTips_execTempFix = function (t, e) {
        t.args[0];
        var r = t.ins.gameContext, o = r.getGameData().getHitTipsNums();
        r.getGameData().changeHitTipsNums(-1);
        r.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Hint);
        r.getGameData().toolChange(GameTypeEnums_1.EItemId.Hint, -1);
        var i = r.getGameData().getHitTipsNums();
        t.ins.pushUpdateHitTipsPropEffect(i);
        DGameUseItem_1.DotGameUseItem.dot(r, {
            itemId: GameTypeEnums_1.EItemId.Hint,
            afterNum: i,
            beforeNum: o
        });
        e();
    };
    WinClickPropTrait.traitKey = "WinClickProp";
    WinClickPropTrait = __decorate([
        mj.trait,
        mj.class("WinClickPropTrait")
    ], WinClickPropTrait);
    return WinClickPropTrait;
}(Trait_1.default));
exports.default = WinClickPropTrait;

cc._RF.pop();