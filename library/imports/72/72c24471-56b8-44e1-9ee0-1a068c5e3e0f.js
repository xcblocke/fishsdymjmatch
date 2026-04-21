"use strict";
cc._RF.push(module, '72c24RxVrhE4Z7gGgaMXj4P', 'Tile2CurveShuffleTrait');
// subpackages/l_tile2CurveShuffle/Scripts/Tile2CurveShuffleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2CurveSolver_1 = require("./Tile2CurveSolver");
var Tile2CurveShuffleTrait = /** @class */ (function (_super) {
    __extends(Tile2CurveShuffleTrait, _super);
    function Tile2CurveShuffleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._curveParams = {};
        return _this;
    }
    Tile2CurveShuffleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var r = this._traitData;
        void 0 !== r.minStepsForPeak && (this._curveParams.minStepsForPeak = r.minStepsForPeak);
        void 0 !== r.updateProbability && (this._curveParams.updateProbability = r.updateProbability);
        void 0 !== r.avgOccupancyRate && (this._curveParams.avgOccupancyRate = r.avgOccupancyRate);
        void 0 !== r.preferRemaining01 && (this._curveParams.preferRemaining01 = r.preferRemaining01);
        void 0 !== r.preferRemainingMin23 && (this._curveParams.preferRemainingMin23 = r.preferRemainingMin23);
    };
    Tile2CurveShuffleTrait.prototype.onTile2ShuffleMod_compute = function (e, r) {
        var t = e.ins._context;
        Date.now();
        if (new Tile2CurveSolver_1.default().shuffleWithContext(t, this._curveParams)) {
            r({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else {
            r();
        }
    };
    Tile2CurveShuffleTrait.traitKey = "Tile2CurveShuffle";
    Tile2CurveShuffleTrait = __decorate([
        mj.trait,
        mj.class("Tile2CurveShuffleTrait")
    ], Tile2CurveShuffleTrait);
    return Tile2CurveShuffleTrait;
}(Trait_1.default));
exports.default = Tile2CurveShuffleTrait;

cc._RF.pop();