"use strict";
cc._RF.push(module, '15d39hUmXFCNoP+VdvfgJnY', 'FailVibrateTrait');
// subpackages/l_failVibrate/Scripts/FailVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var FailVibrateTrait = /** @class */ (function (_super) {
    __extends(FailVibrateTrait, _super);
    function FailVibrateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FailVibrateTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FailVibrateTrait.prototype.onFailVw_show = function (t, e) {
        e();
        var r = this._traitData.level || VibrateManager_1.EVibrateStrength.DoubleWeak;
        VibrateManager_1.default.executeVibrate(r);
    };
    FailVibrateTrait.traitKey = "FailVibrate";
    FailVibrateTrait = __decorate([
        mj.trait,
        mj.class("FailVibrateTrait")
    ], FailVibrateTrait);
    return FailVibrateTrait;
}(Trait_1.default));
exports.default = FailVibrateTrait;

cc._RF.pop();