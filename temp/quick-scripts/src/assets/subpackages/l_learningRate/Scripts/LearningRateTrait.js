"use strict";
cc._RF.push(module, '87ded7RYuZN5rYtA7dsE7gr', 'LearningRateTrait');
// subpackages/l_learningRate/Scripts/LearningRateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractNormalLevels_1 = require("../../../Scripts/core/extractQuestion/ExtractNormalLevels");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LearningRateTrait = /** @class */ (function (_super) {
    __extends(LearningRateTrait, _super);
    function LearningRateTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MaxDiffulty = 0;
        _this.MinDiffulty = 0;
        return _this;
    }
    LearningRateTrait.prototype.onExtNormLv_getK = function (t, e) {
        var r, i;
        if (this.checkGameMode()) {
            var a = t.args[0];
            this.MaxDiffulty = a.MaxDiffulty;
            this.MinDiffulty = a.MinDiffulty;
            var n = this._traitData.config;
            null == n.type && (n.type = 1);
            if (1 == n.type || 2 == n.type) {
                var c = null !== (i = null === (r = ExtractNormalLevels_1.ExtractDimension.getData()) || void 0 === r ? void 0 : r.ru) && void 0 !== i ? i : this.MinDiffulty, u = this.getLearningRate(n, c);
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: u
                });
            }
            else
                e();
        }
        else
            e();
    };
    LearningRateTrait.prototype.getLearningRate = function (t, e) {
        var r = 1 == t.type ? this.getS1(t) : this.getS2(t);
        return e > r ? r - this.MinDiffulty : this.MaxDiffulty - r;
    };
    LearningRateTrait.prototype.getS1 = function (t) {
        var e = NormalGameData_1.default.getInstance().getLevelId();
        return t.S_max - t.a / (t.b * e + t.c);
    };
    LearningRateTrait.prototype.getS2 = function (t) {
        var e = NormalGameData_1.default.getInstance().getLevelId();
        return t.S_max / (1 + Math.exp(-t.a * (e - t.b)));
    };
    LearningRateTrait.traitKey = "LearningRate";
    LearningRateTrait = __decorate([
        mj.trait,
        mj.class("LearningRateTrait")
    ], LearningRateTrait);
    return LearningRateTrait;
}(ExtractTrait_1.default));
exports.default = LearningRateTrait;

cc._RF.pop();