"use strict";
cc._RF.push(module, '48cd3U7xY9KOK4neRPhd0Mb', 'WatchAdAutoUseHintTrait');
// subpackages/l_watchAdGetProp/Scripts/WatchAdAutoUseHintTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var WatchAdAutoUseHintTrait = /** @class */ (function (_super) {
    __extends(WatchAdAutoUseHintTrait, _super);
    function WatchAdAutoUseHintTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WatchAdAutoUseHintTrait.prototype.onWatchAdCtrl_autoUse = function (t, e) {
        var r = t.args[0];
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal && "hitTips" === r) {
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.Tile2HitTips
            });
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    WatchAdAutoUseHintTrait.traitKey = "WatchAdAutoUseHint";
    WatchAdAutoUseHintTrait = __decorate([
        mj.trait,
        mj.class("WatchAdAutoUseHintTrait")
    ], WatchAdAutoUseHintTrait);
    return WatchAdAutoUseHintTrait;
}(Trait_1.default));
exports.default = WatchAdAutoUseHintTrait;

cc._RF.pop();