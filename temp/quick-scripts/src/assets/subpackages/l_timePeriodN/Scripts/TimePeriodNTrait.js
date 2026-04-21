"use strict";
cc._RF.push(module, 'c5bf9+dwQhCTZg4EDcyg0pf', 'TimePeriodNTrait');
// subpackages/l_timePeriodN/Scripts/TimePeriodNTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DateManager_1 = require("../../../Scripts/core/simulator/util/DateManager");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TimePeriodNTrait = /** @class */ (function (_super) {
    __extends(TimePeriodNTrait, _super);
    function TimePeriodNTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimePeriodNTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this._traitData.valueArr || [0.8, 1];
        this._config = {
            valueArr: e
        };
    };
    TimePeriodNTrait.prototype.onExtNormLv_getAdNengRU = function (t, e) {
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
    TimePeriodNTrait.traitKey = "TimePeriodN";
    TimePeriodNTrait = __decorate([
        mj.trait,
        mj.class("TimePeriodNTrait")
    ], TimePeriodNTrait);
    return TimePeriodNTrait;
}(ExtractTrait_1.default));
exports.default = TimePeriodNTrait;

cc._RF.pop();