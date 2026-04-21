"use strict";
cc._RF.push(module, '54d96TCtLRPMISk3CtEvYTX', 'ClassicBestTrait');
// subpackages/l_classicBest/Scripts/ClassicBestTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BreakBestScoreBehavior_1 = require("./BreakBestScoreBehavior");
var BreakBestScoreEffect_1 = require("./BreakBestScoreEffect");
var ClassicBestTypes_1 = require("./ClassicBestTypes");
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var ClassicBestTrait = /** @class */ (function (_super) {
    __extends(ClassicBestTrait, _super);
    function ClassicBestTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicBestTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.BreakBestScore, BreakBestScoreBehavior_1.default);
    };
    ClassicBestTrait.prototype.onClrClsHlp_pushBreakBest = function (e, t) {
        var i = e.ins._options.breakBestState;
        if (i && 0 !== i.length) {
            var s = __read(i, 3), r = s[0], o = s[1], a = s[2];
            if (-1 !== i.findIndex(function (e) {
                return true === e;
            })) {
                var c = ClassicBestTypes_1.EClassicBreakType.None;
                if (r) {
                    c = ClassicBestTypes_1.EClassicBreakType.Best;
                }
                else {
                    if (o) {
                        c = ClassicBestTypes_1.EClassicBreakType.Week;
                    }
                    else {
                        a && (c = ClassicBestTypes_1.EClassicBreakType.Today);
                    }
                }
                if (c !== ClassicBestTypes_1.EClassicBreakType.None) {
                    var p = new BreakBestScoreEffect_1.BreakBestScoreEffect({
                        breakType: c
                    });
                    t({
                        returnVal: e.ins._baseInput.pushEffect(p, BehaviorsEnum_1.EInsertType.Parallel)
                    });
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    ClassicBestTrait.traitKey = "ClassicBest";
    ClassicBestTrait = __decorate([
        mj.trait,
        mj.class("ClassicBestTrait")
    ], ClassicBestTrait);
    return ClassicBestTrait;
}(Trait_1.default));
exports.default = ClassicBestTrait;

cc._RF.pop();