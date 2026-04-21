"use strict";
cc._RF.push(module, '10de2j9/hZNC6EDB0+1nbJU', 'DeathDimensionTrait');
// subpackages/l_deathDimension/Scripts/DeathDimensionTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DeathDimensionTrait = /** @class */ (function (_super) {
    __extends(DeathDimensionTrait, _super);
    function DeathDimensionTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeathDimensionTrait.prototype.onLoad = function () {
        var e, r, i, n, o, a, s, u;
        _super.prototype.onLoad.call(this);
        this._config = {
            dimensionOrder: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.dimensionOrder) && void 0 !== r ? r : [1, 2, 3, 2],
            allDirectReadWeights: null !== (n = null === (i = this._traitData) || void 0 === i ? void 0 : i.allDirectReadWeights) && void 0 !== n ? n : [[15, 45, 30, 10], [1, 6, 33, 66]],
            deathFailAdjust: null !== (a = null === (o = this._traitData) || void 0 === o ? void 0 : o.deathFailAdjust) && void 0 !== a ? a : [-2],
            deathPassAdjust: null !== (u = null === (s = this._traitData) || void 0 === s ? void 0 : s.deathPassAdjust) && void 0 !== u ? u : [1]
        };
    };
    DeathDimensionTrait.prototype.onExtNormLv_getAllDirWgt = function (t, e) {
        if (this.checkGameMode()) {
            var r = this._config.allDirectReadWeights;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: r
            });
        }
        else
            e();
    };
    DeathDimensionTrait.prototype.onExtNormLv_getDimOrder = function (t, e) {
        if (this.checkGameMode()) {
            var r = this._config.dimensionOrder;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: r
            });
        }
        else
            e();
    };
    DeathDimensionTrait.prototype.onExtNormLv_getDeathFail = function (t, e) {
        var r, i;
        if (this.checkGameMode()) {
            var n = t.args[0] || 0, o = this._config.deathFailAdjust, a = null !== (i = null !== (r = o[n]) && void 0 !== r ? r : o[0]) && void 0 !== i ? i : -2;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: a
            });
        }
        else
            e();
    };
    DeathDimensionTrait.prototype.onExtNormLv_getDeathPass = function (t, e) {
        var r, i;
        if (this.checkGameMode()) {
            var n = t.args[0] || 0, o = this._config.deathPassAdjust, a = null !== (i = null !== (r = o[n]) && void 0 !== r ? r : o[0]) && void 0 !== i ? i : 1;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: a
            });
        }
        else
            e();
    };
    DeathDimensionTrait.traitKey = "DeathDimension";
    DeathDimensionTrait = __decorate([
        mj.trait,
        mj.class("DeathDimensionTrait")
    ], DeathDimensionTrait);
    return DeathDimensionTrait;
}(ExtractTrait_1.default));
exports.default = DeathDimensionTrait;

cc._RF.pop();