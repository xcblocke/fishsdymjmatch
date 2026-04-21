"use strict";
cc._RF.push(module, '96b2ellnPtAK6R6G1CoE8hp', 'TimePeriodTravelTrait');
// subpackages/l_timePeriodTravel/Scripts/TimePeriodTravelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DateManager_1 = require("../../../Scripts/core/simulator/util/DateManager");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TimePeriodTravelTrait = /** @class */ (function (_super) {
    __extends(TimePeriodTravelTrait, _super);
    function TimePeriodTravelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimePeriodTravelTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this._traitData.valueArr || [0.8, 1];
        this._config = {
            valueArr: e
        };
    };
    TimePeriodTravelTrait.prototype.onExtNormLv_getAdjRU = function (t, e) {
        if (this.checkGameMode()) {
            if (null != t.args[0]) {
                var r;
                r = DateManager_1.default.getInstance().getCurrentTimePeriod() === DateManager_1.ETimePeriod.Day ? this._config.valueArr[0] : this._config.valueArr[1];
                var o = t.args.length >= 2 ? t.args[1] : null;
                if (o && Array.isArray(o)) {
                    o.push(r);
                    e();
                }
                else {
                    t.args[1] = [r];
                    e();
                }
            }
            else
                e();
        }
        else
            e();
    };
    TimePeriodTravelTrait.traitKey = "TimePeriodTravel";
    TimePeriodTravelTrait = __decorate([
        mj.trait,
        mj.class("TimePeriodTravelTrait")
    ], TimePeriodTravelTrait);
    return TimePeriodTravelTrait;
}(ExtractTrait_1.default));
exports.default = TimePeriodTravelTrait;

cc._RF.pop();