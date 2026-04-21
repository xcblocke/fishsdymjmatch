"use strict";
cc._RF.push(module, '325e5aZCCZAIqmQ8yKeqIxR', 'RandomShuffleAniTrait');
// subpackages/l_randomShuffleAni/Scripts/RandomShuffleAniTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ShuffleEffect_1 = require("../../../Scripts/ShuffleEffect");
var SpiralShuffleEffect_1 = require("../../../Scripts/SpiralShuffleEffect");
var StackShuffleEffect_1 = require("../../../Scripts/StackShuffleEffect");
var Tile2ShuffleEffect_1 = require("../../../Scripts/Tile2ShuffleEffect");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var RandomShuffleAniTrait = /** @class */ (function (_super) {
    __extends(RandomShuffleAniTrait, _super);
    function RandomShuffleAniTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RandomShuffleAniTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "IptT2Shuffle_getEff"
            }]);
    };
    RandomShuffleAniTrait.prototype.onIptShuffle_getEffect = function (e, t) {
        var r;
        switch (Math.floor(3 * Math.random())) {
            case 0:
                r = new ShuffleEffect_1.ShuffleEffect({});
                break;
            case 1:
                r = new SpiralShuffleEffect_1.SpiralShuffleEffect({});
                break;
            case 2:
            default:
                r = new StackShuffleEffect_1.StackShuffleEffect({});
        }
        t({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    RandomShuffleAniTrait.prototype.onIptT2Shuffle_getEff = function (e, t) {
        var r;
        switch (Math.floor(3 * Math.random())) {
            case 0:
                r = new Tile2ShuffleEffect_1.Tile2ShuffleEffect({});
                break;
            case 1:
                r = new SpiralShuffleEffect_1.SpiralShuffleEffect({});
                break;
            case 2:
            default:
                r = new StackShuffleEffect_1.StackShuffleEffect({});
        }
        t({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    RandomShuffleAniTrait.traitKey = "RandomShuffleAni";
    RandomShuffleAniTrait = __decorate([
        mj.trait,
        mj.class("RandomShuffleAniTrait")
    ], RandomShuffleAniTrait);
    return RandomShuffleAniTrait;
}(Trait_1.default));
exports.default = RandomShuffleAniTrait;

cc._RF.pop();