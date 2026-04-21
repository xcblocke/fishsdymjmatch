"use strict";
cc._RF.push(module, 'ff22bBuJjhEu4trm8u1yqdS', 'HintVibrateTrait');
// subpackages/l_hintVibrate/Scripts/HintVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var HintVibrateTrait = /** @class */ (function (_super) {
    __extends(HintVibrateTrait, _super);
    function HintVibrateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HintVibrateTrait.prototype.onGameUI_addHintBtn = function (t, r) {
        var e = this._traitData.level || VibrateManager_1.EVibrateStrength.DoubleWeak;
        t.args[2] = Object.assign(Object.assign({}, t.args[2]), {
            vibrateLevel: function () {
                var t, r;
                return ((null === (r = null === (t = UserModel_1.default.getInstance()) || void 0 === t ? void 0 : t.localData) || void 0 === r ? void 0 : r.hitTips) || 0) > 0 ? e : void 0;
            }
        });
        r();
    };
    HintVibrateTrait.traitKey = "HintVibrate";
    HintVibrateTrait = __decorate([
        mj.trait,
        mj.class("HintVibrateTrait")
    ], HintVibrateTrait);
    return HintVibrateTrait;
}(Trait_1.default));
exports.default = HintVibrateTrait;

cc._RF.pop();