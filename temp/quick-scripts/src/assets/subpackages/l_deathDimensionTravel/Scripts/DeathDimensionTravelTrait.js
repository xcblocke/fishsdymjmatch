"use strict";
cc._RF.push(module, '911bcK8WfZH2Z8KOEg5JdZn', 'DeathDimensionTravelTrait');
// subpackages/l_deathDimensionTravel/Scripts/DeathDimensionTravelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DeathDimensionTravelTrait = /** @class */ (function (_super) {
    __extends(DeathDimensionTravelTrait, _super);
    function DeathDimensionTravelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeathDimensionTravelTrait.prototype.onLoad = function () {
        var e, r, i, a, n, o, l, s;
        this._traitData.gameType || (this._traitData.gameType = "Travel");
        _super.prototype.onLoad.call(this);
        this._config = {
            dimensionOrder: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.dimensionOrder) && void 0 !== r ? r : [1, 2, 3, 2],
            allDirectReadWeights: null !== (a = null === (i = this._traitData) || void 0 === i ? void 0 : i.allDirectReadWeights) && void 0 !== a ? a : [[15, 45, 30, 10], [1, 6, 33, 66]],
            deathFailAdjust: null !== (o = null === (n = this._traitData) || void 0 === n ? void 0 : n.deathFailAdjust) && void 0 !== o ? o : [-2],
            deathPassAdjust: null !== (s = null === (l = this._traitData) || void 0 === l ? void 0 : l.deathPassAdjust) && void 0 !== s ? s : [1]
        };
    };
    DeathDimensionTravelTrait.prototype.onExtNormLv_getAllDirWgt = function (t, e) {
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
    DeathDimensionTravelTrait.prototype.onExtNormLv_getDimOrder = function (t, e) {
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
    DeathDimensionTravelTrait.prototype.onExtNormLv_getDeathFail = function (t, e) {
        var r, i;
        if (this.checkGameMode()) {
            var a = t.args[0] || 0, n = this._config.deathFailAdjust, o = null !== (i = null !== (r = n[a]) && void 0 !== r ? r : n[0]) && void 0 !== i ? i : -2;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else
            e();
    };
    DeathDimensionTravelTrait.prototype.onExtNormLv_getDeathPass = function (t, e) {
        var r, i;
        if (this.checkGameMode()) {
            var a = t.args[0] || 0, n = this._config.deathPassAdjust, o = null !== (i = null !== (r = n[a]) && void 0 !== r ? r : n[0]) && void 0 !== i ? i : 1;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else
            e();
    };
    DeathDimensionTravelTrait.traitKey = "DeathDimensionTravel";
    DeathDimensionTravelTrait = __decorate([
        mj.trait,
        mj.class("DeathDimensionTravelTrait")
    ], DeathDimensionTravelTrait);
    return DeathDimensionTravelTrait;
}(ExtractTrait_1.default));
exports.default = DeathDimensionTravelTrait;

cc._RF.pop();