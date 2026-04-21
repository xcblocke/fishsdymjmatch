"use strict";
cc._RF.push(module, '28ae5NeXuJEm7MaU9oCSA4d', 'DailyLockVibrateTrait');
// subpackages/l_dailyLockVibrate/Scripts/DailyLockVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var DailyLockVibrateTrait = /** @class */ (function (_super) {
    __extends(DailyLockVibrateTrait, _super);
    function DailyLockVibrateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyLockVibrateTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DailyLockVibrateTrait.prototype.onTaskView_addLockBtn = function (t, r) {
        t.args[2] = Object.assign(Object.assign({}, t.args[2]), {
            vibrateLevel: this._traitData.level || VibrateManager_1.EVibrateStrength.DoubleWeak
        });
        r();
    };
    DailyLockVibrateTrait.traitKey = "DailyLockVibrate";
    DailyLockVibrateTrait = __decorate([
        mj.trait,
        mj.class("DailyLockVibrateTrait")
    ], DailyLockVibrateTrait);
    return DailyLockVibrateTrait;
}(Trait_1.default));
exports.default = DailyLockVibrateTrait;

cc._RF.pop();