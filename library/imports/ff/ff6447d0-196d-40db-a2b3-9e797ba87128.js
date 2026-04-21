"use strict";
cc._RF.push(module, 'ff644fQGW1A26Kznnl7qHEo', 'MotivationWordsBombTrait');
// subpackages/l_motivationWordsBomb/Scripts/MotivationWordsBombTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var MotivationalWordsEffect_1 = require("../../../Scripts/MotivationalWordsEffect");
var MotivationalWordsEffectEffect_1 = require("../../../Scripts/MotivationalWordsEffectEffect");
var MotivationWordsBombTrait = /** @class */ (function (_super) {
    __extends(MotivationWordsBombTrait, _super);
    function MotivationWordsBombTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotivationWordsBombTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MotivationWordsBombTrait.prototype.onClrNormHlp_chkBombMotiv = function (t, o) {
        this.handleBombMotivationalWords(t);
        o({
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    MotivationWordsBombTrait.prototype.handleBombMotivationalWords = function (t) {
        var o = t.args[0], r = t.args[1], e = t.ins, i = e._gameContext, n = e._baseInput;
        if (i && n) {
            var a = i.motivationalWordsChecker.canShowMotivationalWords(), l = a.isShow, u = a.index;
            if (l && o && o.length >= 2) {
                var p = i.getGameData().getComboNum(), d = new MotivationalWordsEffect_1.MotivationalWordsEffect({
                    index: u,
                    comboNum: p,
                    tileId1: o[1],
                    tileId2: o[0]
                });
                n.pushEffect(d, BehaviorsEnum_1.EInsertType.Parallel, r, false);
                var v = new MotivationalWordsEffectEffect_1.MotivationalWordsEffectEffect({
                    index: u
                });
                n.pushEffect(v, BehaviorsEnum_1.EInsertType.Parallel, r, false);
            }
        }
    };
    MotivationWordsBombTrait.traitKey = "MotivationWordsBomb";
    MotivationWordsBombTrait = __decorate([
        mj.trait,
        mj.class("MotivationWordsBombTrait")
    ], MotivationWordsBombTrait);
    return MotivationWordsBombTrait;
}(Trait_1.default));
exports.default = MotivationWordsBombTrait;

cc._RF.pop();