"use strict";
cc._RF.push(module, '90fcfA/k1BKcZ+WWWXWYatz', 'RankChaseParamsTrait');
// subpackages/l_rankChaseParams/Scripts/RankChaseParamsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RankChaseParamsTrait = /** @class */ (function (_super) {
    __extends(RankChaseParamsTrait, _super);
    function RankChaseParamsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RankChaseParamsTrait.prototype, "gradCoef", {
        get: function () {
            return null != this._traitData.gradCoef ? this._traitData.gradCoef : 0.05;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankChaseParamsTrait.prototype, "addPointsTop", {
        get: function () {
            return null != this._traitData.addPointsTop ? this._traitData.addPointsTop : {
                2: 1,
                4: 3,
                6: 3,
                8: 2,
                12: 1
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankChaseParamsTrait.prototype, "chasingBotsMaxPoint", {
        get: function () {
            return null != this._traitData.chasingBotsMaxPoint ? this._traitData.chasingBotsMaxPoint : 12;
        },
        enumerable: false,
        configurable: true
    });
    RankChaseParamsTrait.prototype.onRkChasing2_baseCfg = function (t, e) {
        e();
        null != t.beforReturnVal && (t.beforReturnVal.gradCoef = this.gradCoef);
    };
    RankChaseParamsTrait.prototype.onRkChasing2_pointsCfg = function (t, e) {
        e();
        null != t.beforReturnVal && (t.beforReturnVal.addPointsTop = this.addPointsTop);
    };
    RankChaseParamsTrait.prototype.onRkChasing2_chasingCfg = function (t, e) {
        e();
        null != t.beforReturnVal && (t.beforReturnVal.chasingBotsMaxPoint = this.chasingBotsMaxPoint);
    };
    RankChaseParamsTrait.traitKey = "RankChaseParams";
    RankChaseParamsTrait = __decorate([
        mj.trait,
        mj.class("RankChaseParamsTrait")
    ], RankChaseParamsTrait);
    return RankChaseParamsTrait;
}(Trait_1.default));
exports.default = RankChaseParamsTrait;

cc._RF.pop();