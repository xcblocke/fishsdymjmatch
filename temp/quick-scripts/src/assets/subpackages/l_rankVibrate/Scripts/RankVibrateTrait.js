"use strict";
cc._RF.push(module, '31846T1+PFIOaJzFwOwj25j', 'RankVibrateTrait');
// subpackages/l_rankVibrate/Scripts/RankVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var RankVibrateTrait = /** @class */ (function (_super) {
    __extends(RankVibrateTrait, _super);
    function RankVibrateTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rantUpVibrateTween = null;
        return _this;
    }
    RankVibrateTrait.prototype.onLoad = function () {
        var r, e, n, i, a;
        _super.prototype.onLoad.call(this);
        this._config = {
            rateUp: (null === (r = this._traitData) || void 0 === r ? void 0 : r.rateUp) || VibrateManager_1.EVibrateStrength.Medium,
            cardCollect: (null === (e = this._traitData) || void 0 === e ? void 0 : e.cardCollect) || VibrateManager_1.EVibrateStrength.Light,
            rankUp: (null === (n = this._traitData) || void 0 === n ? void 0 : n.rankUp) || VibrateManager_1.EVibrateStrength.Light,
            rankSettle: (null === (i = this._traitData) || void 0 === i ? void 0 : i.rankSettle) || VibrateManager_1.EVibrateStrength.Medium,
            rankUpInterval: (null === (a = this._traitData) || void 0 === a ? void 0 : a.rankUpInterval) || 0.1
        };
    };
    RankVibrateTrait.prototype.triggerVibrate = function (t) {
        VibrateManager_1.default.executeVibrate(t);
    };
    RankVibrateTrait.prototype.onRkBnsWinRate_playRtLvAni = function (t, r) {
        this._config.rateUp >= 0 && this.triggerVibrate(this._config.rateUp, 15);
        r();
    };
    RankVibrateTrait.prototype.onRankColEff_playLightEff = function (t, r) {
        this._config.cardCollect >= 0 && this.triggerVibrate(this._config.cardCollect, 16);
        r();
    };
    RankVibrateTrait.prototype.onRankColCard_onCardArrived = function (t, r) {
        r();
    };
    RankVibrateTrait.prototype.onRankBonusVw_rankUpStart = function (t, r) {
        var e = this, n = t.ins;
        if (this._config.rankUp >= 0) {
            this.triggerVibrate(this._config.rankUp, 17);
            var i = this._config.rankUpInterval;
            if (this._rantUpVibrateTween) {
                this._rantUpVibrateTween.stop();
                this._rantUpVibrateTween = null;
            }
            this._rantUpVibrateTween = cc.tween(n.node).delay(i).call(function () {
                var t;
                if (n && cc.isValid(n.node) && n.isUpRankPlaying && e._rantUpVibrateTween)
                    e.triggerVibrate(e._config.rankUp, 17);
                else {
                    null === (t = e._rantUpVibrateTween) || void 0 === t || t.stop();
                    e._rantUpVibrateTween = null;
                }
            }).union().repeatForever().start();
        }
        r();
    };
    RankVibrateTrait.prototype.onRankBonusVw_rankUpEnd = function (t, r) {
        if (this._rantUpVibrateTween) {
            this._rantUpVibrateTween.stop();
            this._rantUpVibrateTween = null;
        }
        r();
    };
    RankVibrateTrait.prototype.onRkBnsListVw_rankUpStart = function (t, r) {
        var e = this, n = t.ins, i = this._config.rankUpInterval, a = Math.floor((t.args[1] || 0) / i) - 1;
        if (this._config.rankUp >= 0 && a > 0) {
            this.triggerVibrate(this._config.rankUp, 17);
            a > 1 && cc.tween(n.node).delay(i).call(function () {
                n && cc.isValid(n.node) && e.triggerVibrate(e._config.rankUp, 17);
            }).union().repeat(a - 1).start();
        }
        r();
    };
    RankVibrateTrait.prototype.onRankBonusItem_rankOutEff = function (t, r) {
        this._config.rankSettle >= 0 && this.triggerVibrate(this._config.rankSettle, 18);
        r();
    };
    RankVibrateTrait.traitKey = "RankVibrate";
    RankVibrateTrait = __decorate([
        mj.trait,
        mj.class("RankVibrateTrait")
    ], RankVibrateTrait);
    return RankVibrateTrait;
}(Trait_1.default));
exports.default = RankVibrateTrait;

cc._RF.pop();