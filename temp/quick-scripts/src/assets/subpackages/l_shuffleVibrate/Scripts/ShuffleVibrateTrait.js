"use strict";
cc._RF.push(module, 'a42a9YPwqlLtK+4At+zfIMD', 'ShuffleVibrateTrait');
// subpackages/l_shuffleVibrate/Scripts/ShuffleVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var ShuffleVibrateTrait = /** @class */ (function (_super) {
    __extends(ShuffleVibrateTrait, _super);
    function ShuffleVibrateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShuffleVibrateTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ShuffleVibrateTrait.prototype.onIptShuffle_pushEffect = function (t, e) {
        e();
        var r = this._traitData.level || VibrateManager_1.EVibrateStrength.Shuffle;
        VibrateManager_1.default.executeVibrate(r);
    };
    ShuffleVibrateTrait.traitKey = "ShuffleVibrate";
    ShuffleVibrateTrait = __decorate([
        mj.trait,
        mj.class("ShuffleVibrateTrait")
    ], ShuffleVibrateTrait);
    return ShuffleVibrateTrait;
}(Trait_1.default));
exports.default = ShuffleVibrateTrait;

cc._RF.pop();