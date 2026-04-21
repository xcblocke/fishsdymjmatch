"use strict";
cc._RF.push(module, 'ed82eHgu4xDhKHd05rWbuQP', 'LightningVibrateTrait');
// subpackages/l_vibrate/Scripts/LightningVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var LightningVibrateTrait = /** @class */ (function (_super) {
    __extends(LightningVibrateTrait, _super);
    function LightningVibrateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LightningVibrateTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LightningVibrateTrait.prototype.onBombBhv_finish = function (t, e) {
        e();
        var i = this._traitData.level || VibrateManager_1.EVibrateStrength.Strong;
        VibrateManager_1.default.executeVibrate(i);
    };
    LightningVibrateTrait.traitKey = "LightningVibrate";
    LightningVibrateTrait = __decorate([
        mj.trait,
        mj.class("LightningVibrateTrait")
    ], LightningVibrateTrait);
    return LightningVibrateTrait;
}(Trait_1.default));
exports.default = LightningVibrateTrait;

cc._RF.pop();