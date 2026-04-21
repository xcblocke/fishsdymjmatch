"use strict";
cc._RF.push(module, '037c9iw84pG/p7R0hNcKonZ', 'InputTimeoutBreakCombo');
// Scripts/input/InputTimeoutBreakCombo.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var UpdateScoreEffect_1 = require("../UpdateScoreEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTimeoutBreakCombo = /** @class */ (function (_super) {
    __extends(InputTimeoutBreakCombo, _super);
    function InputTimeoutBreakCombo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTimeoutBreakCombo.prototype.excute = function () {
        this.gameContext.comboModifier.breakCombo();
        var e = this.gameContext.getGameData(), t = new UpdateScoreEffect_1.UpdateScoreEffect({
            addScore: 0,
            targetScore: e.getScore(),
            isShowCombo: this.gameContext.comboChecker.canShowCombo()
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    __decorate([
        mj.traitEvent("IptTmoutBrkCb_exec")
    ], InputTimeoutBreakCombo.prototype, "excute", null);
    return InputTimeoutBreakCombo;
}(InputBase_1.InputBase));
exports.default = InputTimeoutBreakCombo;

cc._RF.pop();