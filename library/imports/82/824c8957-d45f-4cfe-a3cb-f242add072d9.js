"use strict";
cc._RF.push(module, '824c8lX1F9M/qPL8kKt0HLZ', 'TravelLockVibrateTrait');
// subpackages/l_travelLockVibrate/Scripts/TravelLockVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var TravelLockVibrateTrait = /** @class */ (function (_super) {
    __extends(TravelLockVibrateTrait, _super);
    function TravelLockVibrateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelLockVibrateTrait.prototype.onElemLv_addLevelBtn = function (t, e) {
        var r, i = this._traitData.level || VibrateManager_1.EVibrateStrength.DoubleWeak, o = t.ins, a = null === (r = t.args[2]) || void 0 === r ? void 0 : r.vibrateLevel;
        t.args[2] = Object.assign(Object.assign({}, t.args[2]), {
            vibrateLevel: function () {
                var t, e, r = null === (t = null == o ? void 0 : o.getLevelState) || void 0 === t ? void 0 : t.call(o), n = null === (e = null == o ? void 0 : o.isBadgeLevel) || void 0 === e ? void 0 : e.call(o);
                return 0 !== r || n ? "function" == typeof a ? a() : a : i;
            }
        });
        e();
    };
    TravelLockVibrateTrait.traitKey = "TravelLockVibrate";
    TravelLockVibrateTrait = __decorate([
        mj.trait,
        mj.class("TravelLockVibrateTrait")
    ], TravelLockVibrateTrait);
    return TravelLockVibrateTrait;
}(Trait_1.default));
exports.default = TravelLockVibrateTrait;

cc._RF.pop();