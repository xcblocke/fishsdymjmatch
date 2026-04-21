"use strict";
cc._RF.push(module, '3d731ceup5DgI4wwO6dWU7m', 'WeekdayPeriodNTrait');
// subpackages/l_weekdayPeriodN/Scripts/WeekdayPeriodNTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DateManager_1 = require("../../../Scripts/core/simulator/util/DateManager");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var WeekdayPeriodNTrait = /** @class */ (function (_super) {
    __extends(WeekdayPeriodNTrait, _super);
    function WeekdayPeriodNTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = [];
        return _this;
    }
    WeekdayPeriodNTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData.configVal;
    };
    WeekdayPeriodNTrait.prototype.onExtNormLv_getAdNengRU = function (t, e) {
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
    WeekdayPeriodNTrait.traitKey = "WeekdayPeriodN";
    WeekdayPeriodNTrait = __decorate([
        mj.trait,
        mj.class("WeekdayPeriodNTrait")
    ], WeekdayPeriodNTrait);
    return WeekdayPeriodNTrait;
}(ExtractTrait_1.default));
exports.default = WeekdayPeriodNTrait;

cc._RF.pop();