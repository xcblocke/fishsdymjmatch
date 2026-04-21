"use strict";
cc._RF.push(module, 'de05b/9+hNCI44FDOt8WbWy', 'FlipCardEff1Trait');
// subpackages/l_flipCardEff1/Scripts/FlipCardEff1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var FlipCardEff1Trait = /** @class */ (function (_super) {
    __extends(FlipCardEff1Trait, _super);
    function FlipCardEff1Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlipCardEff1Trait.prototype.onMainGameCtrl_initRes = function (e, t) {
        t();
        e.ins.addPreloadRes("SkeletonData", ['l_flipCardEff1:spine/gameplay_flip']);
    };
    FlipCardEff1Trait.prototype.onFlipAni_playEnter = function (e, t) {
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true
        });
        var a = e.ins, n = e.args[0], r = null;
        a._baseTileNode.tileNode.active = false;
        a._baseTileNode.shadowNode.active = false;
        var i = a._baseTileNode.playAnimNodeAnimation("spine/gameplay_flip", "in", false, a.handleEnterAnimationComplete.bind(a, n), function () {
            var e = BaseSprite_1.default.createByAtlas("atlas/cardIcon", "gameplay_special_mj_2");
            a.createAnimNode().parent = e.node;
            (r = BaseSprite_1.default.createByAtlas("atlas/cardIcon", "gameplay_img_mj_dn")).node.parent = e.node;
            return e.node;
        }, false, "l_flipCardEff1");
        i.getSkeleton().setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
        i.getSkeleton().setEventListener(function (e, t) {
            "event_mahjong" === t.data.name && r && cc.isValid(r.node) && (r.node.active = false);
        });
        a.ensureLockBgState(a._baseTileNode);
    };
    FlipCardEff1Trait.prototype.onFlipAni_playExit = function (e, t) {
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true
        });
        var a = e.ins, n = e.args[0], r = null;
        a._baseTileNode.tileNode.active = false;
        a._baseTileNode.shadowNode.active = false;
        var i = a._baseTileNode.playAnimNodeAnimation("spine/gameplay_flip", "out", false, a.handleExitAnimationComplete.bind(a, n), function () {
            var e = BaseSprite_1.default.createByAtlas("atlas/cardIcon", "gameplay_special_mj_2");
            a.createAnimNode().parent = e.node;
            (r = BaseSprite_1.default.createByAtlas("atlas/cardIcon", "gameplay_img_mj_dn")).node.parent = e.node;
            r.node.active = false;
            return e.node;
        }, false, "l_flipCardEff1");
        i.getSkeleton().setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
        i.getSkeleton().setEventListener(function (e, t) {
            "event_mahjong" === t.data.name && r && cc.isValid(r.node) && (r.node.active = true);
        });
        a.ensureLockBgState(a._baseTileNode);
    };
    FlipCardEff1Trait.traitKey = "FlipCardEff1";
    FlipCardEff1Trait = __decorate([
        mj.trait,
        mj.class("FlipCardEff1Trait")
    ], FlipCardEff1Trait);
    return FlipCardEff1Trait;
}(Trait_1.default));
exports.default = FlipCardEff1Trait;

cc._RF.pop();