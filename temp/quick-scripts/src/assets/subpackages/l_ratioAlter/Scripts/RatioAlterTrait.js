"use strict";
cc._RF.push(module, '81cbcBe4NBNV6+ZtZLkF5ec', 'RatioAlterTrait');
// subpackages/l_ratioAlter/Scripts/RatioAlterTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Adapter_1 = require("../../../Scripts/component/Adapter");
var ResManager_1 = require("../../../Scripts/framework/manager/ResManager");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var RatioAlterTrait = /** @class */ (function (_super) {
    __extends(RatioAlterTrait, _super);
    function RatioAlterTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isUseDynamicFit = false;
        _this._fixedScaleValue = 1;
        _this._isUseBeta = false;
        _this._forceFactor = 4;
        _this._destScale = 1;
        _this._widthScale = 1;
        _this._heightScale = 1;
        _this._alterMaxCount = 6;
        _this._levelRatioConfig = new Map();
        return _this;
    }
    RatioAlterTrait_1 = RatioAlterTrait;
    RatioAlterTrait.getGameAreaSize = function () {
        var t = cc.view.getFrameSize().width, e = cc.view.getFrameSize().height, a = 1080 / t, i = Adapter_1.default.getSafeY();
        return new cc.Vec2(1020, e * a - i - 178 - 222 - 85);
    };
    RatioAlterTrait.prototype.onLoad = function () {
        var e, a, i, r, o, n, l, s, c, u, h, f, d, p, v, _;
        _super.prototype.onLoad.call(this);
        this._isUseDynamicFit = null !== (a = null === (e = this._traitData) || void 0 === e ? void 0 : e.isUseDynamicFit) && void 0 !== a && a;
        this._fixedScaleValue = null !== (r = null === (i = this._traitData) || void 0 === i ? void 0 : i.fixedScaleValue) && void 0 !== r ? r : 1;
        this._isUseBeta = null !== (n = null === (o = this._traitData) || void 0 === o ? void 0 : o.isUseBeta) && void 0 !== n && n;
        this._forceFactor = null !== (s = null === (l = this._traitData) || void 0 === l ? void 0 : l.forceFactor) && void 0 !== s ? s : 4;
        this._destScale = null !== (u = null === (c = this._traitData) || void 0 === c ? void 0 : c.destScale) && void 0 !== u ? u : 1;
        this._widthScale = null !== (f = null === (h = this._traitData) || void 0 === h ? void 0 : h.widthScale) && void 0 !== f ? f : 1;
        this._heightScale = null !== (p = null === (d = this._traitData) || void 0 === d ? void 0 : d.heightScale) && void 0 !== p ? p : 1;
        this._alterMaxCount = null !== (_ = null === (v = this._traitData) || void 0 === v ? void 0 : v.alterMaxCount) && void 0 !== _ ? _ : 6;
        this._loadLevelRatioConfig();
    };
    RatioAlterTrait.prototype._loadLevelRatioConfig = function () {
        var t = this;
        ResManager_1.resManager.loadRes("config/levelRation/level_ratio_config", cc.JsonAsset, "mainRes").then(function (e) {
            var a = Array.isArray(e) ? e[0] : e;
            if (a && a.json)
                for (var i in a.json) {
                    var r = a.json[i];
                    t._levelRatioConfig.set(i, {
                        levelLibId: i,
                        widthHeightRatio: r.WidthHeightRatio
                    });
                }
            e.decRef();
        });
    };
    RatioAlterTrait.prototype.calcBetaParams = function (t, e, a, i) {
        var r = (t - a) / (e - a), o = r * i, n = (1 - r) * i;
        return [Math.max(0.1, o), Math.max(0.1, n)];
    };
    RatioAlterTrait.prototype.sampleBeta = function (t, e) {
        var a = this._sampleGamma(t, 1);
        return a / (a + this._sampleGamma(e, 1));
    };
    RatioAlterTrait.prototype._sampleGamma = function (t, e) {
        if (t < 1) {
            var a = Math.random();
            return this._sampleGamma(t + 1, e) * Math.pow(a, 1 / t);
        }
        var i = t - 0.3333333333333333;
        i <= 0.001 && (i = 0.001);
        for (var r = 1 / Math.sqrt(9 * i), o = 0; o < 1000;) {
            var n = void 0, l = void 0, s = 0;
            do {
                l = 1 + r * (n = this._randomNormal(0, 1));
                if (++s >= 100) {
                    l = 1;
                    break;
                }
            } while (l <= 0);
            l *= l * l;
            var c = Math.random();
            if (c < 1 - 0.0331 * n * n * n * n)
                return e * i * l;
            if (Math.log(c) < 0.5 * n * n + i * (1 - l + Math.log(l)))
                return e * i * l;
            o++;
        }
        return e * t;
    };
    RatioAlterTrait.prototype._randomNormal = function (t, e) {
        var a = Math.random(), i = Math.random();
        return Math.sqrt(-2 * Math.log(a)) * Math.cos(2 * Math.PI * i) * e + t;
    };
    RatioAlterTrait.prototype.clamp = function (t, e, a) {
        return Math.max(e, Math.min(a, t));
    };
    RatioAlterTrait.prototype.getCapabilityAlterItem = function (t) {
        var e = 0;
        if (0 === this._levelRatioConfig.size)
            return null;
        if (this._isUseDynamicFit) {
            var i = this._widthScale <= 0 ? 1 : this._widthScale, r = this._heightScale <= 0 ? 1 : this._heightScale, o = RatioAlterTrait_1.getGameAreaSize();
            e = o.x * i / (o.y * r) / 0.8;
        }
        else
            e = this._fixedScaleValue;
        var l = 0;
        if (t <= 3)
            l = e;
        else if (this._isUseBeta) {
            var s = __read(this.calcBetaParams(e, 1.2, 0.44, this._forceFactor), 2), c = s[0], u = s[1], h = this.sampleBeta(c, u);
            l = 0.76 * h + 0.44;
            l = this.clamp(l, 0.44, 1.2);
        }
        else
            l = this._destScale;
        return {
            sortCapabilityDimensionNameList: Array.from(this._levelRatioConfig.values()).sort(function (t, e) {
                return Math.abs(t.widthHeightRatio - l) - Math.abs(e.widthHeightRatio - l);
            }).map(function (t) {
                return t.levelLibId;
            }),
            alterMaxCount: this._alterMaxCount
        };
    };
    RatioAlterTrait.prototype.onExtNormLv_getAlItem = function (t, e) {
        if (this.checkGameMode()) {
            var a = t.args[0], i = this.getCapabilityAlterItem(a);
            if (i) {
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: i
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    var RatioAlterTrait_1;
    RatioAlterTrait.traitKey = "RatioAlter";
    RatioAlterTrait = RatioAlterTrait_1 = __decorate([
        mj.trait,
        mj.class("RatioAlterTrait")
    ], RatioAlterTrait);
    return RatioAlterTrait;
}(ExtractTrait_1.default));
exports.default = RatioAlterTrait;

cc._RF.pop();