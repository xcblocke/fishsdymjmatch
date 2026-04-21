"use strict";
cc._RF.push(module, '8b3fdtC+CZOA62Nec9KvkDq', 'WatchAdGetPropTrait');
// subpackages/l_watchAdGetProp/Scripts/WatchAdGetPropTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WatchAdGetPropView_1 = require("./WatchAdGetPropView");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DAdRewardEnter_1 = require("../../../Scripts/gamePlay/dot/DAdRewardEnter");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var WatchAdGetPropTrait = /** @class */ (function (_super) {
    __extends(WatchAdGetPropTrait, _super);
    function WatchAdGetPropTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WatchAdGetPropTrait.prototype.onIptShuffle_exec = function (t, e) {
        if (t.args[0].isFree)
            e();
        else if (t.args[0].from && t.args[0].from === GameInputEnum_1.EShuffleFrom.Free)
            e();
        else if (t.ins.gameContext.getGameData().isShuffleEnough())
            e();
        else {
            ControllerManager_1.default.getInstance().pushViewByController("WatchAdGetPropController", {
                type: WatchAdGetPropView_1.WatchAdGetPropType.shuffle,
                isShowAction: true
            });
            DAdRewardEnter_1.DotAdRewardEnter.dot(true, DGameAdShow_1.EAdPosition.InGameMotivation_Reshuffle);
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    WatchAdGetPropTrait.prototype.onIptHitTips_exec = function (t, e) {
        var r = t.ins.gameContext.getGameData();
        if (t.ins.gameContext.getCanHitTips().length)
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        else {
            var o = t.ins.gameController.tileMapObject.getCanMatchTilesHint();
            if (r.isHitTipsEnough())
                e();
            else {
                if (o.length <= 0) {
                    e({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                    return;
                }
                ControllerManager_1.default.getInstance().pushViewByController("WatchAdGetPropController", {
                    type: WatchAdGetPropView_1.WatchAdGetPropType.hitTips,
                    isShowAction: true
                });
                DAdRewardEnter_1.DotAdRewardEnter.dot(true, DGameAdShow_1.EAdPosition.InGameMotivation_Hint);
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
        }
    };
    WatchAdGetPropTrait.traitKey = "WatchAdGetProp";
    WatchAdGetPropTrait = __decorate([
        mj.trait,
        mj.class("WatchAdGetPropTrait")
    ], WatchAdGetPropTrait);
    return WatchAdGetPropTrait;
}(Trait_1.default));
exports.default = WatchAdGetPropTrait;

cc._RF.pop();