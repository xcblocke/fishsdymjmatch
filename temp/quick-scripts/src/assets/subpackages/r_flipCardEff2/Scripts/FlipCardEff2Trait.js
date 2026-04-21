"use strict";
cc._RF.push(module, 'cebf25DgeZDv46xpehBus4P', 'FlipCardEff2Trait');
// subpackages/r_flipCardEff2/Scripts/FlipCardEff2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var FlipCardEff2Trait = /** @class */ (function (_super) {
    __extends(FlipCardEff2Trait, _super);
    function FlipCardEff2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FlipCardEff2Trait.prototype, "playFlipEff", {
        get: function () {
            var e, t;
            return null == (null === (e = this._traitData) || void 0 === e ? void 0 : e.playFlipEff) || (null === (t = this._traitData) || void 0 === t ? void 0 : t.playFlipEff);
        },
        enumerable: false,
        configurable: true
    });
    FlipCardEff2Trait.prototype.onMainGameCtrl_initRes = function (e, t) {
        t();
        e.ins.addPreloadRes("SkeletonData", ['r_flipCardEff2:spine/gameplay_flip', 'r_flipCardEff2:spine/gameplay_flip_efx']);
    };
    FlipCardEff2Trait.prototype.onFlipAni_playEnter = function (e, t) {
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true
        });
        this.playNewEnter(e);
    };
    FlipCardEff2Trait.prototype.playNewEnter = function (e) {
        var t = this, a = e.ins, r = e.args[0], n = null;
        a._baseTileNode.tileNode.active = false;
        a._baseTileNode.shadowNode.active = false;
        var i = a._baseTileNode.playAnimNodeAnimation("spine/gameplay_flip", "in", false, a.handleEnterAnimationComplete.bind(a, r), function () {
            var e = t.getCardFrontNode();
            a.createAnimNode().parent = e;
            (n = t.getCardBackNode()).parent = e;
            return e;
        }, false, "r_flipCardEff2");
        i.getSkeleton().setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
        i.getSkeleton().setEventListener(function (e, t) {
            "event_mahjong" === t.data.name && cc.isValid(n) && (n.active = false);
        });
        if (this.playFlipEff) {
            var o = a._baseTileNode.animNode.getChildByName("tempAnimNode"), l = BaseSpine_1.default.create("spine/gameplay_flip_efx", "in", 1, null, true, "r_flipCardEff2");
            l.node.parent = o;
            l.node.zIndex = 10;
        }
    };
    FlipCardEff2Trait.prototype.onFlipAni_playExit = function (e, t) {
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true
        });
        this.playNewExit(e);
    };
    FlipCardEff2Trait.prototype.playNewExit = function (e) {
        var t = this, a = e.ins, r = e.args[0], n = null;
        a._baseTileNode.tileNode.active = false;
        a._baseTileNode.shadowNode.active = false;
        var i = a._baseTileNode.playAnimNodeAnimation("spine/gameplay_flip", "out", false, a.handleExitAnimationComplete.bind(a, r), function () {
            var e = t.getCardFrontNode();
            a.createAnimNode().parent = e;
            (n = t.getCardBackNode()).parent = e;
            n.active = false;
            return e;
        }, false, "r_flipCardEff2");
        i.getSkeleton().setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
        i.getSkeleton().setEventListener(function (e, t) {
            "event_mahjong" === t.data.name && cc.isValid(n) && (n.active = true);
        });
        var o = a._baseTileNode.animNode.getChildByName("tempAnimNode"), l = BaseSpine_1.default.create("spine/gameplay_flip_efx", "out", 1, null, true, "r_flipCardEff2");
        l.node.parent = o;
        l.node.zIndex = 10;
    };
    FlipCardEff2Trait.prototype.getCardFrontNode = function () {
        return BaseSprite_1.default.createByAtlas("atlas/cardIcon", "gameplay_special_mj_2").node;
    };
    FlipCardEff2Trait.prototype.getCardBackNode = function () {
        return BaseSprite_1.default.createByAtlas("atlas/cardIcon", "gameplay_img_mj_dn").node;
    };
    FlipCardEff2Trait.traitKey = "FlipCardEff2";
    __decorate([
        mj.traitEvent("FlipCardEff_frontNode")
    ], FlipCardEff2Trait.prototype, "getCardFrontNode", null);
    __decorate([
        mj.traitEvent("FlipCardEff_backNode")
    ], FlipCardEff2Trait.prototype, "getCardBackNode", null);
    FlipCardEff2Trait = __decorate([
        mj.trait,
        mj.class("FlipCardEff2Trait")
    ], FlipCardEff2Trait);
    return FlipCardEff2Trait;
}(Trait_1.default));
exports.default = FlipCardEff2Trait;

cc._RF.pop();