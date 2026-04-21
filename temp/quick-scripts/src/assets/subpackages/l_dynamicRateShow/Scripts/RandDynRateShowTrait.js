"use strict";
cc._RF.push(module, 'b60056nqYhIJ6nd5t/n/5VM', 'RandDynRateShowTrait');
// subpackages/l_dynamicRateShow/Scripts/RandDynRateShowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var RandDynRateShowTrait = /** @class */ (function (_super) {
    __extends(RandDynRateShowTrait, _super);
    function RandDynRateShowTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RandDynRateShowTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._traitData;
    };
    RandDynRateShowTrait.prototype.onDynRateShow_getRateTxt = function (t, e) {
        var r = __read(t.args, 3), a = r[0], o = r[1], i = r[2], c = this._traitData;
        if (void 0 === c.experimentType || c.experimentType === a) {
            var u = c.rateTextKeys;
            if (u && 0 !== u.length) {
                var p = u[Math.floor(Math.random() * u.length)], h = I18NStrings_1.default.get(p, "You beat {0} of players!"), f = o.toFixed(2) + "%";
                h.includes("{0}") && (h = h.replace("{0}", f));
                h.includes("{1}") && (h = h.replace("{1}", (100 * i).toFixed(1) + "%"));
                h = h.replace(f, "<color=#00ff00>" + f + "</color>");
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: h
                });
            }
            else
                e();
        }
        else
            e();
    };
    RandDynRateShowTrait.traitKey = "RandDynRateShow";
    RandDynRateShowTrait = __decorate([
        mj.trait,
        mj.class("RandDynRateShowTrait")
    ], RandDynRateShowTrait);
    return RandDynRateShowTrait;
}(Trait_1.default));
exports.default = RandDynRateShowTrait;

cc._RF.pop();