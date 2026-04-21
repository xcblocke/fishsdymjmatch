"use strict";
cc._RF.push(module, '706acoQgGVDNbjKy96Mp0rK', 'InputTile2EnterAnimationFinish');
// Scripts/input/InputTile2EnterAnimationFinish.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var EnterAnimationFinishEffect_1 = require("../EnterAnimationFinishEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2EnterAnimationFinish = /** @class */ (function (_super) {
    __extends(InputTile2EnterAnimationFinish, _super);
    function InputTile2EnterAnimationFinish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2EnterAnimationFinish.prototype.excute = function () {
        this.pushEnterAnimationFinishEffect();
    };
    InputTile2EnterAnimationFinish.prototype.pushEnterAnimationFinishEffect = function () {
        var e = new EnterAnimationFinishEffect_1.EnterAnimationFinishEffect({});
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Serial);
    };
    __decorate([
        mj.traitEvent("IptT2EtAnFi_excute")
    ], InputTile2EnterAnimationFinish.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptT2EtAnFi_pushEff")
    ], InputTile2EnterAnimationFinish.prototype, "pushEnterAnimationFinishEffect", null);
    return InputTile2EnterAnimationFinish;
}(InputBase_1.InputBase));
exports.default = InputTile2EnterAnimationFinish;

cc._RF.pop();