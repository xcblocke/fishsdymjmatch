"use strict";
cc._RF.push(module, '5ec47ZImIhI+KNLvUTE12FR', 'FourColorWindEnTrait');
// subpackages/l_fourColorWindEn/Scripts/FourColorWindEnTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var FourColorWindEnTrait = /** @class */ (function (_super) {
    __extends(FourColorWindEnTrait, _super);
    function FourColorWindEnTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FourColorWindEnTrait_1 = FourColorWindEnTrait;
    FourColorWindEnTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FourColorWindEnTrait.prototype._getFlowerSeriesID = function () {
        var r, t, e;
        try {
            var o = null === (r = mj.getClassByName("FlowerCardSeriesTrait")) || void 0 === r ? void 0 : r.getInstance();
            return o && o.eventEnabled && null !== (e = null === (t = o.getCurrentModeSeriesId) || void 0 === t ? void 0 : t.call(o)) && void 0 !== e ? e : -1;
        }
        catch (r) {
            return -1;
        }
    };
    FourColorWindEnTrait.prototype.onMainGameCtrl_initRes = function (r, t) {
        try {
            if (this._getFlowerSeriesID() <= 0) {
                var o = r.ins;
                if (o && "function" == typeof o.addPreloadRes) {
                    var n = FourColorWindEnTrait_1.BUNDLE_NAME + ":atlas/cardIcon";
                    o.addPreloadRes("SpriteAtlas", n);
                }
            }
        }
        catch (r) {
            console.error("[" + FourColorWindEnTrait_1.traitKey + "] 预加载图集失败: " + (null == r ? void 0 : r.message));
        }
        t();
    };
    FourColorWindEnTrait.prototype.onCardRepNonUs_tarResCfg = function (r, t) {
        var o, n;
        try {
            var i = null === (o = r.args) || void 0 === o ? void 0 : o[0], l = null === (n = r.args) || void 0 === n ? void 0 : n[1];
            if (FourColorWindEnTrait_1.WIND_CARDS.includes(i)) {
                t({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        bundleName: FourColorWindEnTrait_1.BUNDLE_NAME,
                        path: l
                    }
                });
                return;
            }
            t();
        }
        catch (r) {
            console.error("[" + FourColorWindEnTrait_1.traitKey + "] 劫持资源配置失败: " + (null == r ? void 0 : r.message));
            t();
        }
    };
    FourColorWindEnTrait.prototype.onCardUtil_atlasPathBundle = function (r, t) {
        var o;
        try {
            var n = null === (o = r.args) || void 0 === o ? void 0 : o[0];
            if (FourColorWindEnTrait_1.WIND_CARDS.includes(n)) {
                var i = "atlas/cardIcon/" + n;
                t({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: i,
                        bundleName: FourColorWindEnTrait_1.BUNDLE_NAME,
                        fromAtlas: true
                    }
                });
                return;
            }
            t();
        }
        catch (r) {
            console.error("[" + FourColorWindEnTrait_1.traitKey + "] 劫持图片失败: " + (null == r ? void 0 : r.message));
            t();
        }
    };
    var FourColorWindEnTrait_1;
    FourColorWindEnTrait.traitKey = "FourColorWindEn";
    FourColorWindEnTrait.BUNDLE_NAME = "l_fourColorWindEn";
    FourColorWindEnTrait.WIND_CARDS = ["Z_dong", "Z_nan", "Z_xi", "Z_bei"];
    FourColorWindEnTrait = FourColorWindEnTrait_1 = __decorate([
        mj.trait,
        mj.class("FourColorWindEnTrait")
    ], FourColorWindEnTrait);
    return FourColorWindEnTrait;
}(Trait_1.default));
exports.default = FourColorWindEnTrait;

cc._RF.pop();