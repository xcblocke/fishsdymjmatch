"use strict";
cc._RF.push(module, '18506r6cMJA96X3gLHhjtXo', 'ChangeRollShuffleEffectTrait');
// subpackages/r_rollShuffleEffect/Scripts/ChangeRollShuffleEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var SpiralShuffleEffect_1 = require("../../../Scripts/SpiralShuffleEffect");
var ChangeRollShuffleEffectTrait = /** @class */ (function (_super) {
    __extends(ChangeRollShuffleEffectTrait, _super);
    function ChangeRollShuffleEffectTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._effectLevel = 3;
        _this._efxDelay = 0.5;
        return _this;
    }
    ChangeRollShuffleEffectTrait_1 = ChangeRollShuffleEffectTrait;
    ChangeRollShuffleEffectTrait.prototype.onLoad = function () {
        var e, r, a, i;
        _super.prototype.onLoad.call(this);
        this._effectLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.effectLevel) && void 0 !== r ? r : 3;
        this._efxDelay = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.efxDelay) && void 0 !== i ? i : 0.5;
    };
    ChangeRollShuffleEffectTrait.prototype.playMainAnimation = function (t) {
        var e = BaseSpine_1.default.create(ChangeRollShuffleEffectTrait_1.SPINE_MAIN, "in", 1, null, true, ChangeRollShuffleEffectTrait_1.BUNDLE_NAME);
        e.node.parent = t;
        e.node.position = cc.v3(0, 0, 0);
    };
    ChangeRollShuffleEffectTrait.prototype.playEfxAnimation = function (t) {
        var e = BaseSpine_1.default.create(ChangeRollShuffleEffectTrait_1.SPINE_EFX, "in", 1, null, true, ChangeRollShuffleEffectTrait_1.BUNDLE_NAME);
        e.node.parent = t;
        e.node.position = cc.v3(0, 0, 0);
    };
    ChangeRollShuffleEffectTrait.prototype.onSpiralShfStgy_gaDur = function (t, e) {
        var r;
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: null !== (r = this._traitData.gatherDuration) && void 0 !== r ? r : 0.9
        });
    };
    ChangeRollShuffleEffectTrait.prototype.onSpiralShfStgy_stayDur = function (t, e) {
        var r;
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: null !== (r = this._traitData.stayDuration) && void 0 !== r ? r : 0.43
        });
    };
    ChangeRollShuffleEffectTrait.prototype.onSpiralShfStgy_expDur = function (t, e) {
        var r;
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: null !== (r = this._traitData.expandDuration) && void 0 !== r ? r : 0.96
        });
    };
    ChangeRollShuffleEffectTrait.prototype.onIptShuffle_getEffect = function (t, e) {
        var r = new SpiralShuffleEffect_1.SpiralShuffleEffect({});
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    ChangeRollShuffleEffectTrait.prototype.onShuffUts_getPreTime = function (t, e) {
        var r, a, i = this, n = null === (r = t.args) || void 0 === r ? void 0 : r[0], o = null === (a = null == n ? void 0 : n.gameView) || void 0 === a ? void 0 : a.nodeTopEffectRoot;
        if (cc.isValid(o)) {
            var f = 0;
            switch (this._effectLevel) {
                case 1:
                    f = 0;
                    break;
                case 2:
                    this.playEfxAnimation(o);
                    f = 0;
                    break;
                case 3:
                default:
                    f = this._traitData.efxDelay;
                    this.playMainAnimation(o);
                    cc.tween({}).delay(this._efxDelay).call(function () {
                        cc.isValid(o) && i.playEfxAnimation(o);
                    }).start();
            }
            e({
                returnVal: f,
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else
            e();
    };
    ChangeRollShuffleEffectTrait.prototype.onShuffUts_playRAnim = function (t, e) {
        if (1 != this._effectLevel) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else {
            e();
        }
    };
    var ChangeRollShuffleEffectTrait_1;
    ChangeRollShuffleEffectTrait.traitKey = "ChangeRollShuffleEffect";
    ChangeRollShuffleEffectTrait.BUNDLE_NAME = "r_rollShuffleEffect";
    ChangeRollShuffleEffectTrait.SPINE_MAIN = "spine/gameplay_autoShuffle";
    ChangeRollShuffleEffectTrait.SPINE_EFX = "spine/gameplay_autoShuffle_efx";
    ChangeRollShuffleEffectTrait = ChangeRollShuffleEffectTrait_1 = __decorate([
        mj.trait,
        mj.class("ChangeRollShuffleEffectTrait")
    ], ChangeRollShuffleEffectTrait);
    return ChangeRollShuffleEffectTrait;
}(Trait_1.default));
exports.default = ChangeRollShuffleEffectTrait;

cc._RF.pop();