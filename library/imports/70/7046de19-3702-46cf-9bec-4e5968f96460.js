"use strict";
cc._RF.push(module, '7046d4ZNwJGz5vsTllo+WRg', 'EnterAnimDurationTrait');
// subpackages/l_enterAnimDuration/Scripts/EnterAnimDurationTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var EnterAnimDurationTrait = /** @class */ (function (_super) {
    __extends(EnterAnimDurationTrait, _super);
    function EnterAnimDurationTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnterAnimDurationTrait.prototype.getTargetDuration = function () {
        return this._traitData.targetDuration || 0;
    };
    EnterAnimDurationTrait.prototype.scaleAnimationConfigs = function (t) {
        var n = this.getTargetDuration();
        if (n && !(n <= 0)) {
            var r = t.beforReturnVal;
            if (r && 0 !== r.length) {
                var o = t.ins, e = o.totalDuration;
                if (e && !(e <= 0)) {
                    var i = n / e;
                    r.forEach(function (t) {
                        t.delay *= i;
                        t.duration *= i;
                    });
                    o.totalDuration = n;
                }
            }
        }
    };
    EnterAnimDurationTrait.prototype.onCrossLayerStgy_genCfgs = function (t, n) {
        this.scaleAnimationConfigs(t);
        n();
    };
    EnterAnimDurationTrait.prototype.onCenterRadialStgy_genCfgs = function (t, n) {
        this.scaleAnimationConfigs(t);
        n();
    };
    EnterAnimDurationTrait.prototype.onTopDropStgy_genCfgs = function (t, n) {
        this.scaleAnimationConfigs(t);
        n();
    };
    EnterAnimDurationTrait.prototype.onRowByRowStgy_genCfgs = function (t, n) {
        this.scaleAnimationConfigs(t);
        n();
    };
    EnterAnimDurationTrait.prototype.onTopMaskStgy_genCfgs = function (t, n) {
        this.scaleAnimationConfigs(t);
        n();
    };
    EnterAnimDurationTrait.traitKey = "EnterAnimDuration";
    EnterAnimDurationTrait = __decorate([
        mj.trait,
        mj.class("EnterAnimDurationTrait")
    ], EnterAnimDurationTrait);
    return EnterAnimDurationTrait;
}(Trait_1.default));
exports.default = EnterAnimDurationTrait;

cc._RF.pop();