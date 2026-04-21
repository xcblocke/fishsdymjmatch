"use strict";
cc._RF.push(module, 'ad680ApWgVIx6sOu+vRuuRH', 'TimePeriodTrait');
// subpackages/l_timePeriod/Scripts/TimePeriodTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DateManager_1 = require("../../../Scripts/core/simulator/util/DateManager");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TimePeriodTrait = /** @class */ (function (_super) {
    __extends(TimePeriodTrait, _super);
    function TimePeriodTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimePeriodTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this._traitData.valueArr || [0.8, 1];
        this._config = {
            valueArr: e
        };
    };
    TimePeriodTrait.prototype.onExtNormLv_getAdjRU = function (t, e) {
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
    TimePeriodTrait.traitKey = "TimePeriod";
    TimePeriodTrait = __decorate([
        mj.trait,
        mj.class("TimePeriodTrait")
    ], TimePeriodTrait);
    return TimePeriodTrait;
}(ExtractTrait_1.default));
exports.default = TimePeriodTrait;

cc._RF.pop();