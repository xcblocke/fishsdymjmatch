"use strict";
cc._RF.push(module, 'fd585r7s11N0rxksxUrhoQY', 'MinDeathRateTrait');
// subpackages/l_minDeathRate/Scripts/MinDeathRateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var MinDeathRateTrait = /** @class */ (function (_super) {
    __extends(MinDeathRateTrait, _super);
    function MinDeathRateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MinDeathRateTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MinDeathRateTrait.prototype.onExtNormLv_getDeathFail = function (t, e) {
        if (this.checkGameMode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: -4
            });
        }
        else {
            e();
        }
    };
    MinDeathRateTrait.prototype.onExtNormLv_getDeathPass = function (t, e) {
        if (this.checkGameMode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: 1
            });
        }
        else {
            e();
        }
    };
    MinDeathRateTrait.traitKey = "MinDeathRate";
    MinDeathRateTrait = __decorate([
        mj.trait,
        mj.class("MinDeathRateTrait")
    ], MinDeathRateTrait);
    return MinDeathRateTrait;
}(ExtractTrait_1.default));
exports.default = MinDeathRateTrait;

cc._RF.pop();