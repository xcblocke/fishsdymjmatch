"use strict";
cc._RF.push(module, '9b88aNVHDxJ1JjWJK/Yx9KF', 'TravelCupVibrateTrait');
// subpackages/l_travelCupVibrate/Scripts/TravelCupVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var TravelCupVibrateTrait = /** @class */ (function (_super) {
    __extends(TravelCupVibrateTrait, _super);
    function TravelCupVibrateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelCupVibrateTrait.prototype.onElemLv_addLevelBtn = function (t, r) {
        var e, i = this._traitData.level || VibrateManager_1.EVibrateStrength.LockCup, n = t.ins, a = null === (e = t.args[2]) || void 0 === e ? void 0 : e.vibrateLevel;
        t.args[2] = Object.assign(Object.assign({}, t.args[2]), {
            vibrateLevel: function () {
                var t;
                return (null === (t = null == n ? void 0 : n.isBadgeLevel) || void 0 === t ? void 0 : t.call(n)) ? i : "function" == typeof a ? a() : a;
            }
        });
        r();
    };
    TravelCupVibrateTrait.traitKey = "TravelCupVibrate";
    TravelCupVibrateTrait = __decorate([
        mj.trait,
        mj.class("TravelCupVibrateTrait")
    ], TravelCupVibrateTrait);
    return TravelCupVibrateTrait;
}(Trait_1.default));
exports.default = TravelCupVibrateTrait;

cc._RF.pop();