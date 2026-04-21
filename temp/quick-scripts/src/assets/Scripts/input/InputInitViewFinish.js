"use strict";
cc._RF.push(module, 'd18544NzbhKPJW7a6EhRa7M', 'InputInitViewFinish');
// Scripts/input/InputInitViewFinish.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../Config");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var UpdateHitTipsPropEffect_1 = require("../UpdateHitTipsPropEffect");
var UpdateShufflePropEffect_1 = require("../UpdateShufflePropEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputInitViewFinish = /** @class */ (function (_super) {
    __extends(InputInitViewFinish, _super);
    function InputInitViewFinish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputInitViewFinish.prototype.excute = function () {
        this.pushUpdateHitTipsPropEffect(this.gameContext.getGameData().getHitTipsNums());
        this.pushUpdateShufflePropEffect(this.gameContext.getGameData().getShuffleNums());
        mj.EventManager.emit(Config_1.HIDELOADING, this);
    };
    InputInitViewFinish.prototype.pushUpdateHitTipsPropEffect = function (e) {
        var t = new UpdateHitTipsPropEffect_1.UpdateHitTipsPropEffect({
            curNum: e
        });
        this.pushEffect(t);
    };
    InputInitViewFinish.prototype.pushUpdateShufflePropEffect = function (e) {
        var t = new UpdateShufflePropEffect_1.UpdateShufflePropEffect({
            curNum: e
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    __decorate([
        mj.traitEvent("IptInitViewFin_exec")
    ], InputInitViewFinish.prototype, "excute", null);
    return InputInitViewFinish;
}(InputBase_1.InputBase));
exports.default = InputInitViewFinish;

cc._RF.pop();