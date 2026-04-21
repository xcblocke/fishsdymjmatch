"use strict";
cc._RF.push(module, '508aeDtDExEhKQkfdeiOEpP', 'DeadlockRestartTrait');
// subpackages/l_deadlockRestart/Scripts/DeadlockRestartTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DeadlockRestartTrait = /** @class */ (function (_super) {
    __extends(DeadlockRestartTrait, _super);
    function DeadlockRestartTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeadlockRestartTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DeadlockRestartTrait.prototype.onIptTile2InitVw_pushEff = function (t, e) {
        var r, o = null === (r = t.ins) || void 0 === r ? void 0 : r.gameContext;
        if (o) {
            if (o.tile2ResultChecker.checkIsDead()) {
                o.tile2SlotBarModifier.returnSlotBarToBoard();
                e();
            }
            else
                e();
        }
        else
            e();
    };
    DeadlockRestartTrait.prototype.onIptInitView_pushEff = function (t, e) {
        var r, o = null === (r = t.ins) || void 0 === r ? void 0 : r.gameContext;
        if (o) {
            if (o.gameType !== GameTypeEnums_1.MjGameType.Classic) {
                var i = o.getTileMapObject();
                if (i.checkIsDead([])) {
                    o.shuffleModifier.shuffle();
                    i.updateCanMatchTiles();
                    o.gameModifier.modifyShuffle();
                    e();
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    DeadlockRestartTrait.traitKey = "DeadlockRestart";
    DeadlockRestartTrait = __decorate([
        mj.trait,
        mj.class("DeadlockRestartTrait")
    ], DeadlockRestartTrait);
    return DeadlockRestartTrait;
}(Trait_1.default));
exports.default = DeadlockRestartTrait;

cc._RF.pop();