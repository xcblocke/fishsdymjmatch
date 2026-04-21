"use strict";
cc._RF.push(module, '923c9jArmxL0pGRxlmP5g3l', 'AdBtnScaleTrait');
// Scripts/AdBtnScaleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("./framework/trait/Trait");
var TraitManager_1 = require("./framework/trait/TraitManager");
var AdBtnScaleTrait = /** @class */ (function (_super) {
    __extends(AdBtnScaleTrait, _super);
    function AdBtnScaleTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AdBtnScaleTrait.prototype, "scale", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.scale) && void 0 !== e ? e : 1.1;
        },
        enumerable: false,
        configurable: true
    });
    AdBtnScaleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    AdBtnScaleTrait.prototype.onBoxOpenUI_getAdBtnScale = function (t, e) {
        e({
            returnVal: this.scale,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    AdBtnScaleTrait.prototype.onLvBoxVw_getAdBtnScale = function (t, e) {
        e({
            returnVal: this.scale,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    AdBtnScaleTrait.prototype.onFailVw_show = function (t, e) {
        var r = t.ins, n = r.nodeAd;
        if (n && n.active) {
            var o = r.btnUse;
            this.scaleButton(o, "FailVw_show");
        }
        e();
    };
    AdBtnScaleTrait.prototype.scaleButton = function (t) {
        if (t && cc.isValid(t)) {
            var e = this.scale, r = t.getComponent(cc.Button);
            t.scale = e;
            if (null == r ? void 0 : r._originalScale) {
                r._originalScale.x = e;
                r._originalScale.y = e;
                r._transitionFinished = true;
            }
        }
    };
    AdBtnScaleTrait.prototype.onAdUnavailVw_onLoad = function (t, e) {
        var r = t.ins._btnRetry;
        r && cc.isValid(r) && this.scaleButton(r, "AdUnavailVw");
        e();
    };
    AdBtnScaleTrait.prototype.onWatchAdVw_onLoad = function (t, e) {
        var r = t.ins._btnConfirm;
        r && cc.isValid(r) && this.scaleButton(r, "WatchAdVw");
        e();
    };
    AdBtnScaleTrait.prototype.onTaskRwdVw_getAdBtnScale = function (t, e) {
        e({
            returnVal: this.scale,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    AdBtnScaleTrait.prototype.onRankBoxVw_getAdBtnScale = function (t, e) {
        e({
            returnVal: this.scale,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    AdBtnScaleTrait.prototype.onTLBoxVw_getAdBtnScale = function (t, e) {
        e({
            returnVal: this.scale,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    AdBtnScaleTrait.prototype.onDSSimRwdVw_getAdBtnScale = function (t, e) {
        e({
            returnVal: this.scale,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    AdBtnScaleTrait.prototype.onAgeRwdVw_getAdBtnScale = function (t, e) {
        e({
            returnVal: this.scale,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    AdBtnScaleTrait.traitKey = "AdBtnScale";
    AdBtnScaleTrait = __decorate([
        mj.trait,
        mj.class("AdBtnScaleTrait")
    ], AdBtnScaleTrait);
    return AdBtnScaleTrait;
}(Trait_1.default));
exports.default = AdBtnScaleTrait;

cc._RF.pop();