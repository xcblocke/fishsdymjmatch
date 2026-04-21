"use strict";
cc._RF.push(module, 'ca86cObpnpPfqNMS9j/V84V', 'TimeCoefficientTrait');
// subpackages/l_timeCoef/Scripts/TimeCoefficientTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TimeCoefficientTrait = /** @class */ (function (_super) {
    __extends(TimeCoefficientTrait, _super);
    function TimeCoefficientTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeCoefficientTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._config = {
            m: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.m) && void 0 !== r ? r : 6
        };
    };
    TimeCoefficientTrait.prototype.onExtNormLv_getM = function (t, e) {
        if (this.checkGameMode()) {
            var r = this._config.m;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                isBreak: true,
                returnVal: r
            });
        }
        else
            e();
    };
    TimeCoefficientTrait.traitKey = "TimeCoefficient";
    TimeCoefficientTrait = __decorate([
        mj.trait,
        mj.class("TimeCoefficientTrait")
    ], TimeCoefficientTrait);
    return TimeCoefficientTrait;
}(ExtractTrait_1.default));
exports.default = TimeCoefficientTrait;

cc._RF.pop();