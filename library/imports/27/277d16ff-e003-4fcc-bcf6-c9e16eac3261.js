"use strict";
cc._RF.push(module, '277d1b/4ANPzLz2yeFurDJh', 'DailyBackHallTrait');
// subpackages/l_daily/Scripts/DailyBackHallTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DailyBackHallTrait = /** @class */ (function (_super) {
    __extends(DailyBackHallTrait, _super);
    function DailyBackHallTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyBackHallTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DailyBackHallTrait.prototype.onDailyCtrl_closeView = function (t, e) {
        ControllerManager_1.default.getInstance().pushViewByController("HallController", {
            isReplace: true
        });
        e();
    };
    DailyBackHallTrait.traitKey = "DailyBackHall";
    DailyBackHallTrait = __decorate([
        mj.trait,
        mj.class("DailyBackHallTrait")
    ], DailyBackHallTrait);
    return DailyBackHallTrait;
}(Trait_1.default));
exports.default = DailyBackHallTrait;

cc._RF.pop();