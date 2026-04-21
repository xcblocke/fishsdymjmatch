"use strict";
cc._RF.push(module, 'b11686xzulDdo1A32TJkVBc', 'SubOpTimeTrait');
// subpackages/l_subOpTime/Scripts/SubOpTimeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var SubOpTimeTrait = /** @class */ (function (_super) {
    __extends(SubOpTimeTrait, _super);
    function SubOpTimeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SubOpTimeTrait.prototype, "scaleM", {
        get: function () {
            var t;
            return null !== (t = this.traitData.scaleM) && void 0 !== t ? t : 6;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SubOpTimeTrait.prototype, "baseM", {
        get: function () {
            var t;
            return null !== (t = this.traitData.baseM) && void 0 !== t ? t : 6;
        },
        enumerable: false,
        configurable: true
    });
    SubOpTimeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SubOpTimeTrait.prototype.onGameMod_modifyWin = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.args[0], o = t.ins, n = o.context.getGameData().getUserBaseOpTime() * o.context.getGameData().getStepCount();
            t.args[0] = Math.max(0, r - n);
            e();
        }
        else
            e();
    };
    SubOpTimeTrait.prototype.onExtNormLv_getM = function (t, e) {
        if (this.checkGameMode()) {
            e({
                returnVal: t.beforReturnVal * this.scaleM / this.baseM
            });
        }
        else
            e();
    };
    SubOpTimeTrait.traitKey = "SubOpTime";
    SubOpTimeTrait = __decorate([
        mj.trait,
        mj.class("SubOpTimeTrait")
    ], SubOpTimeTrait);
    return SubOpTimeTrait;
}(ExtractTrait_1.default));
exports.default = SubOpTimeTrait;

cc._RF.pop();