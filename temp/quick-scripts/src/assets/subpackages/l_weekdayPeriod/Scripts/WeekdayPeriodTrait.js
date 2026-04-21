"use strict";
cc._RF.push(module, '808542HOkNLeLxlm2AsRWkn', 'WeekdayPeriodTrait');
// subpackages/l_weekdayPeriod/Scripts/WeekdayPeriodTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DateManager_1 = require("../../../Scripts/core/simulator/util/DateManager");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var WeekdayPeriodTrait = /** @class */ (function (_super) {
    __extends(WeekdayPeriodTrait, _super);
    function WeekdayPeriodTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = [];
        return _this;
    }
    WeekdayPeriodTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData.configVal;
    };
    WeekdayPeriodTrait.prototype.onExtNormLv_getAdjRU = function (t, e) {
        if (this.checkGameMode()) {
            if (null != t.args[0]) {
                var r = DateManager_1.default.getInstance().getCurrentDayOfWeek(), o = this._config[r], i = t.args.length >= 2 ? t.args[1] : null;
                if (i && Array.isArray(i)) {
                    i.push(o);
                    e();
                }
                else {
                    t.args[1] = [o];
                    e();
                }
            }
            else
                e();
        }
        else
            e();
    };
    WeekdayPeriodTrait.traitKey = "WeekdayPeriod";
    WeekdayPeriodTrait = __decorate([
        mj.trait,
        mj.class("WeekdayPeriodTrait")
    ], WeekdayPeriodTrait);
    return WeekdayPeriodTrait;
}(ExtractTrait_1.default));
exports.default = WeekdayPeriodTrait;

cc._RF.pop();