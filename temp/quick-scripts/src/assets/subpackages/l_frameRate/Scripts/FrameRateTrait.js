"use strict";
cc._RF.push(module, 'e5c01z4PW1DZoW3QzUFkjdQ', 'FrameRateTrait');
// subpackages/l_frameRate/Scripts/FrameRateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var FrameRateTrait = /** @class */ (function (_super) {
    __extends(FrameRateTrait, _super);
    function FrameRateTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._targetFrameRate = 60;
        return _this;
    }
    FrameRateTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._targetFrameRate = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.frameRate) && void 0 !== r ? r : 60;
        cc.game.setFrameRate(this._targetFrameRate);
    };
    FrameRateTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.Behavior_ShuffleBehaviorFinish] = this.onShuffleFinish.bind(this);
        return _t;
    };
    FrameRateTrait.prototype.boostFrameRate = function () {
        this._targetFrameRate < 60 && cc.game.setFrameRate(60);
    };
    FrameRateTrait.prototype.restoreFrameRate = function () {
        this._targetFrameRate < 60 && cc.game.setFrameRate(this._targetFrameRate);
    };
    FrameRateTrait.prototype.onEnterAniBhv_startPlay = function (t, e) {
        this.boostFrameRate("入场动画开始");
        e();
    };
    FrameRateTrait.prototype.onEntAniFiBhv_start = function (t, e) {
        this.restoreFrameRate("入场动画结束");
        e();
    };
    FrameRateTrait.prototype.onIptShuffle_exec = function (t, e) {
        this.boostFrameRate("洗牌动画开始");
        e();
    };
    FrameRateTrait.prototype.onShuffleFinish = function () {
        this.restoreFrameRate("洗牌动画结束");
    };
    FrameRateTrait.traitKey = "FrameRate";
    FrameRateTrait = __decorate([
        mj.trait,
        mj.class("FrameRateTrait")
    ], FrameRateTrait);
    return FrameRateTrait;
}(Trait_1.default));
exports.default = FrameRateTrait;

cc._RF.pop();