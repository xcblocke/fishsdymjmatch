"use strict";
cc._RF.push(module, '67cea9BeAdCWYYPOec36s8a', 'InputRestart');
// Scripts/input/InputRestart.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2RestartEffect_1 = require("../Tile2RestartEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputRestart = /** @class */ (function (_super) {
    __extends(InputRestart, _super);
    function InputRestart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputRestart.prototype.excute = function (e) {
        var t = this.gameContext.getGameData();
        if ("setting" === e.callFrom) {
            this.gameContext.gameModifier.settingRelay();
        }
        else {
            this.gameContext.gameModifier.failRelay();
        }
        if (this.gameContext.gameType === GameTypeEnums_1.MjGameType.Tile2Normal) {
            0 == e.dieResult && t.setDieResult(0);
            var o = this.pushNewRootEffect(e, "Tile2RestartEffect"), n = new Tile2RestartEffect_1.Tile2RestartEffect({});
            this.pushEffect(n, BehaviorsEnum_1.EInsertType.Parallel, o.newEffectId, false);
        }
    };
    __decorate([
        mj.traitEvent("IptRestart_excute")
    ], InputRestart.prototype, "excute", null);
    return InputRestart;
}(InputBase_1.InputBase));
exports.default = InputRestart;

cc._RF.pop();