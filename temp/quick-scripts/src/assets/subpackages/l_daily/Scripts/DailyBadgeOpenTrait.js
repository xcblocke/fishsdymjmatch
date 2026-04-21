"use strict";
cc._RF.push(module, 'ca28cMt6QJJBYLSmVQZ3YXZ', 'DailyBadgeOpenTrait');
// subpackages/l_daily/Scripts/DailyBadgeOpenTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BadgeMode_1 = require("../../../Scripts/gamePlay/badge/mode/BadgeMode");
var DailyModel_1 = require("./DailyModel");
var DailyTypes_1 = require("./DailyTypes");
var DailyBadgeOpenTrait = /** @class */ (function (_super) {
    __extends(DailyBadgeOpenTrait, _super);
    function DailyBadgeOpenTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyBadgeOpenTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DailyBadgeOpenTrait.prototype.onDailyCollCtrl_getOpType = function (t, e) {
        var i = t.args[0], o = DailyTypes_1.DisplayType.Daily;
        i != BadgeMode_1.BadgeType.Journey && i != DailyTypes_1.DisplayType.Journey || (o = DailyTypes_1.DisplayType.Journey);
        DailyModel_1.default.getInstance().isOpen() || (o = DailyTypes_1.DisplayType.Journey);
        e({
            returnType: TraitCallbackReturnType.jump,
            returnVal: o
        });
    };
    DailyBadgeOpenTrait.traitKey = "DailyBadgeOpen";
    DailyBadgeOpenTrait = __decorate([
        mj.trait,
        mj.class("DailyBadgeOpenTrait")
    ], DailyBadgeOpenTrait);
    return DailyBadgeOpenTrait;
}(Trait_1.default));
exports.default = DailyBadgeOpenTrait;

cc._RF.pop();