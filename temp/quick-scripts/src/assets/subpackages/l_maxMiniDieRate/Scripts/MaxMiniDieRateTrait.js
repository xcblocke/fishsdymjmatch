"use strict";
cc._RF.push(module, '8b189miBT9HpaR/rDlVpgvu', 'MaxMiniDieRateTrait');
// subpackages/l_maxMiniDieRate/Scripts/MaxMiniDieRateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var MaxMiniDieRateTrait = /** @class */ (function (_super) {
    __extends(MaxMiniDieRateTrait, _super);
    function MaxMiniDieRateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaxMiniDieRateTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData.hasNon01Occurred || (this.localData.hasNon01Occurred = false);
        void 0 === this.localData.cycleIndex && (this.localData.cycleIndex = 0);
    };
    MaxMiniDieRateTrait.prototype.onExtNormLv_getDeathLv = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.beforReturnVal;
            if (r && "string" == typeof r) {
                if (!this.localData.hasNon01Occurred && "01" !== r) {
                    this.localData.hasNon01Occurred = true;
                    this.localData.cycleIndex = 0;
                }
                if (this.localData.hasNon01Occurred) {
                    var a = this.localData.cycleIndex % 2 == 0 ? "04" : "01";
                    this.localData.cycleIndex = (this.localData.cycleIndex + 1) % 2;
                    e({
                        returnType: TraitManager_1.TraitCallbackReturnType.return,
                        isBreak: true,
                        returnVal: a
                    });
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    MaxMiniDieRateTrait.traitKey = "MaxMiniDieRate";
    MaxMiniDieRateTrait = __decorate([
        mj.trait,
        mj.class("MaxMiniDieRateTrait")
    ], MaxMiniDieRateTrait);
    return MaxMiniDieRateTrait;
}(ExtractTrait_1.default));
exports.default = MaxMiniDieRateTrait;

cc._RF.pop();