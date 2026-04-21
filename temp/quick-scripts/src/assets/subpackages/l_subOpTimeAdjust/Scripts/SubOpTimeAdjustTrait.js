"use strict";
cc._RF.push(module, 'a2337QY2mZOFrRBc4pgCreU', 'SubOpTimeAdjustTrait');
// subpackages/l_subOpTimeAdjust/Scripts/SubOpTimeAdjustTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var SubOpTimeAdjustTrait = /** @class */ (function (_super) {
    __extends(SubOpTimeAdjustTrait, _super);
    function SubOpTimeAdjustTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SubOpTimeAdjustTrait.prototype, "scaleM", {
        get: function () {
            var t;
            return null !== (t = this.traitData.scaleM) && void 0 !== t ? t : 7;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SubOpTimeAdjustTrait.prototype, "baseM", {
        get: function () {
            var t;
            return null !== (t = this.traitData.baseM) && void 0 !== t ? t : 6;
        },
        enumerable: false,
        configurable: true
    });
    SubOpTimeAdjustTrait.prototype.onGameData_getBaseOpTime = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.ins.localData.avgClearIntervals, n = 0;
            r.length > 0 && (n = Math.min.apply(Math, __spreadArrays(r)));
            e({
                returnType: TraitCallbackReturnType.jump,
                isBreak: true,
                returnVal: n
            });
        }
        else
            e();
    };
    SubOpTimeAdjustTrait.prototype.onGameMod_modifyWin = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.args[0], n = t.ins, o = n.context.getGameData().getUserBaseOpTime() * n.context.getGameData().getNonAutoStepCount();
            t.args[0] = Math.max(0, r - o);
            e();
        }
        else
            e();
    };
    SubOpTimeAdjustTrait.prototype.onExtNormLv_getM = function (t, e) {
        if (this.checkGameMode()) {
            e({
                returnVal: t.beforReturnVal * this.scaleM / this.baseM
            });
        }
        else
            e();
    };
    SubOpTimeAdjustTrait.traitKey = "SubOpTimeAdjust";
    SubOpTimeAdjustTrait = __decorate([
        mj.trait,
        mj.class("SubOpTimeAdjustTrait")
    ], SubOpTimeAdjustTrait);
    return SubOpTimeAdjustTrait;
}(ExtractTrait_1.default));
exports.default = SubOpTimeAdjustTrait;

cc._RF.pop();