"use strict";
cc._RF.push(module, '0f058TNTD5M5rLomF/ebL02', 'HintAnimTrait');
// subpackages/l_hintAnim/Scripts/HintAnimTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var HintAnimTrait = /** @class */ (function (_super) {
    __extends(HintAnimTrait, _super);
    function HintAnimTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HintAnimTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = {
            enableShake: false !== this._traitData.enableShake,
            enableScale: false !== this._traitData.enableScale,
            scaleValue: this._traitData.scaleValue || 1.1,
            scaleDuration: this._traitData.scaleDuration || 0.2
        };
    };
    HintAnimTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.TileNode_BeginSelected] = this.onTileNodeBeginSelected.bind(this);
        _t[GameEvent_1.EGameEvent.TileNode_UnSelectedFinish] = this.onTileNodeUnSelectedFinish.bind(this);
        _t[GameEvent_1.EGameEvent.TileNode_HidePropHint] = this.onTileNodeHidePropHint.bind(this);
        return _t;
    };
    HintAnimTrait.prototype.onHitTipsBhv_trgHint = function (t, e) {
        var i = t.beforReturnVal || {}, n = i.tileNode1, r = i.tileNode2, o = i.direction1, a = i.direction2;
        if (n && r) {
            this.playHintAnimation(n, o);
            this.playHintAnimation(r, a);
            e();
        }
        else
            e();
    };
    HintAnimTrait.prototype.playHintAnimation = function (t, e) {
        var i = this;
        if (t) {
            var n = Object.assign(Object.assign({}, this._config), {
                direction: e
            });
            t.playHintAnimation(n, function () {
                mj.triggerInternalEvent("HintAnim_onEnd", i, [t]);
            });
        }
    };
    HintAnimTrait.prototype.onTileNodeBeginSelected = function (t) {
        t && t.pauseHintShake();
    };
    HintAnimTrait.prototype.onTileNodeUnSelectedFinish = function (t) {
        t && t.resumeHintShake();
    };
    HintAnimTrait.prototype.onTileNodeHidePropHint = function (t) {
        t && t.exitHintAnimation();
    };
    HintAnimTrait.traitKey = "HintAnim";
    HintAnimTrait = __decorate([
        mj.trait,
        mj.class("HintAnimTrait")
    ], HintAnimTrait);
    return HintAnimTrait;
}(Trait_1.default));
exports.default = HintAnimTrait;

cc._RF.pop();