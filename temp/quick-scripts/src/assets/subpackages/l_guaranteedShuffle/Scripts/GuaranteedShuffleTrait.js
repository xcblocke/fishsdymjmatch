"use strict";
cc._RF.push(module, 'dbb64Z66IBKGb0P3kWsDnZg', 'GuaranteedShuffleTrait');
// subpackages/l_guaranteedShuffle/Scripts/GuaranteedShuffleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GuaranteedShuffleEffect_1 = require("../../../Scripts/GuaranteedShuffleEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GuaranteedShuffleBehavior_1 = require("../../../Scripts/base/GuaranteedShuffleBehavior");
var GuaranteedShuffleModifier_1 = require("./GuaranteedShuffleModifier");
var GuaranteedShuffleTrait = /** @class */ (function (_super) {
    __extends(GuaranteedShuffleTrait, _super);
    function GuaranteedShuffleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isGuaranteedShuffle = false;
        return _this;
    }
    GuaranteedShuffleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._registerBehaviors();
    };
    GuaranteedShuffleTrait.prototype._registerBehaviors = function () {
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.GuaranteedShuffle, GuaranteedShuffleBehavior_1.GuaranteedShuffleBehavior);
    };
    GuaranteedShuffleTrait.prototype.onShuffleMod_verifySolu = function (e, t) {
        var r = e.ins, o = e.beforReturnVal;
        this._isGuaranteedShuffle = false;
        if (1 != o) {
            this._isGuaranteedShuffle = true;
            this._guaranteedShuffleModifier = new GuaranteedShuffleModifier_1.GuaranteedShuffleModifier(r._context);
            this._guaranteedShuffleModifier.shuffleToFixedArea();
            t({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            t();
    };
    GuaranteedShuffleTrait.prototype.onIptShuffle_pushEffect = function (e, t) {
        var r = this._isGuaranteedShuffle;
        this._isGuaranteedShuffle = false;
        if (r) {
            var o = e.ins, i = new GuaranteedShuffleEffect_1.GuaranteedShuffleEffect({
                originalPositions: this._guaranteedShuffleModifier.getShuffleOriginalPositions()
            });
            o.pushEffect(i);
            mj.EventManager.emit(GameEvent_1.EGameEvent.Effect_Shuffle, o);
            t({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            t();
    };
    GuaranteedShuffleTrait.traitKey = "GuaranteedShuffle";
    GuaranteedShuffleTrait = __decorate([
        mj.trait,
        mj.class("GuaranteedShuffleTrait")
    ], GuaranteedShuffleTrait);
    return GuaranteedShuffleTrait;
}(Trait_1.default));
exports.default = GuaranteedShuffleTrait;

cc._RF.pop();