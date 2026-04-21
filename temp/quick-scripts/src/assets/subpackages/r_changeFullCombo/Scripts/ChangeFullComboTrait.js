"use strict";
cc._RF.push(module, '103194uBLFGgIwgaPOoDuRp', 'ChangeFullComboTrait');
// subpackages/r_changeFullCombo/Scripts/ChangeFullComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ChangeFullComboTrait = /** @class */ (function (_super) {
    __extends(ChangeFullComboTrait, _super);
    function ChangeFullComboTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        _this._isLoading = false;
        _this._isInitialized = false;
        _this._config = {};
        return _this;
    }
    ChangeFullComboTrait.prototype.onLoad = function () {
        var e, i, o, n, r, a, l, u, f, s, c, d, p;
        _super.prototype.onLoad.call(this);
        this._config = {
            comboBundleName: (null === (i = null === (e = this._traitData) || void 0 === e ? void 0 : e.configs) || void 0 === i ? void 0 : i.comboBundleName) || "r_fullCombo_1",
            comboSpinePath: (null === (n = null === (o = this._traitData) || void 0 === o ? void 0 : o.configs) || void 0 === n ? void 0 : n.comboSpinePath) || "spine/gameplay_perfectCombo",
            fadeIn: null !== (l = null === (a = null === (r = this._traitData) || void 0 === r ? void 0 : r.configs) || void 0 === a ? void 0 : a.fadeIn) && void 0 !== l ? l : 0.5,
            fadeOut: null !== (s = null === (f = null === (u = this._traitData) || void 0 === u ? void 0 : u.configs) || void 0 === f ? void 0 : f.fadeOut) && void 0 !== s ? s : 0.4,
            fadeOutDelay: null !== (p = null === (d = null === (c = this._traitData) || void 0 === c ? void 0 : c.configs) || void 0 === d ? void 0 : d.fadeOutDelay) && void 0 !== p ? p : 2
        };
        this._isInitialized = true;
    };
    ChangeFullComboTrait.prototype.getAniCfg = function () {
        return {
            bundleName: this._config.comboBundleName || "r_fullCombo_1",
            spinePath: this._config.comboSpinePath || "spine/gameplay_perfectCombo"
        };
    };
    ChangeFullComboTrait.prototype.getFadeIn = function () {
        var t;
        return null !== (t = this._config.fadeIn) && void 0 !== t ? t : 0.5;
    };
    ChangeFullComboTrait.prototype.getFadeOut = function () {
        var t;
        return null !== (t = this._config.fadeOut) && void 0 !== t ? t : 0.4;
    };
    ChangeFullComboTrait.prototype.getFadeOutDelay = function () {
        var t;
        return null !== (t = this._config.fadeOutDelay) && void 0 !== t ? t : 2;
    };
    ChangeFullComboTrait.prototype.loadSpine = function (t) {
        var e, i = this, o = this.getAniCfg() || {
            bundleName: this._config.comboBundleName,
            spinePath: this._config.comboSpinePath
        }, n = o.bundleName, r = o.spinePath;
        this._currSkData = null;
        null === (e = null == t ? void 0 : t.gameCtr) || void 0 === e || e.loadRes(r, sp.SkeletonData, n).then(function (t) {
            var e = Array.isArray(t) ? t[0] : t;
            i._currSkData = e || null;
        }).catch(function () {
            i._currSkData = null;
        });
    };
    ChangeFullComboTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        if (this._isInitialized) {
            this.loadSpine(t.ins.context);
            e();
        }
        else
            e();
    };
    ChangeFullComboTrait.prototype.onFullComboItem_initSpine = function (t, e) {
        if (this._isInitialized) {
            var i = t.ins, o = null == i ? void 0 : i._spineAnim, n = this._currSkData;
            n && o && o.skeletonData !== n && (o.skeletonData = n);
            e();
        }
        else
            e();
    };
    ChangeFullComboTrait.prototype.onFullComboItem_fadeInTime = function (t, e) {
        var i;
        if (this._isInitialized) {
            var o = null !== (i = this.getFadeIn()) && void 0 !== i ? i : this._config.fadeIn;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else
            e();
    };
    ChangeFullComboTrait.prototype.onFullComboItem_animDlyTime = function (t, e) {
        var i;
        if (this._isInitialized) {
            var o = null !== (i = this.getFadeOutDelay()) && void 0 !== i ? i : this._config.fadeOutDelay;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else
            e();
    };
    ChangeFullComboTrait.prototype.onFullComboItem_fadeOutTime = function (t, e) {
        var i;
        if (this._isInitialized) {
            var o = null !== (i = this.getFadeOut()) && void 0 !== i ? i : this._config.fadeOut;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else
            e();
    };
    ChangeFullComboTrait.traitKey = "ChangeFullCombo";
    __decorate([
        mj.traitEvent("ChgFullCombo_getAniCfg")
    ], ChangeFullComboTrait.prototype, "getAniCfg", null);
    __decorate([
        mj.traitEvent("ChgFullCombo_getFadeIn")
    ], ChangeFullComboTrait.prototype, "getFadeIn", null);
    __decorate([
        mj.traitEvent("ChgFullCombo_getFadeOut")
    ], ChangeFullComboTrait.prototype, "getFadeOut", null);
    __decorate([
        mj.traitEvent("ChgFullCombo_getDelay")
    ], ChangeFullComboTrait.prototype, "getFadeOutDelay", null);
    ChangeFullComboTrait = __decorate([
        mj.trait,
        mj.class("ChangeFullComboTrait")
    ], ChangeFullComboTrait);
    return ChangeFullComboTrait;
}(Trait_1.default));
exports.default = ChangeFullComboTrait;

cc._RF.pop();