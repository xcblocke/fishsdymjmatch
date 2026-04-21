"use strict";
cc._RF.push(module, '3d17dzgZDtMH7ryHJldDGs2', 'MtlClearEffectTrait');
// subpackages/l_mtlClearEffect/Scripts/MtlClearEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MtlClearEffectTrait = /** @class */ (function (_super) {
    __extends(MtlClearEffectTrait, _super);
    function MtlClearEffectTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMaterialId = 0;
        _this._currSkData = null;
        _this._isBaseClear = true;
        return _this;
    }
    MtlClearEffectTrait_1 = MtlClearEffectTrait;
    MtlClearEffectTrait.prototype.getCurrMaterialId = function () {
        var t = UserModel_1.default.getInstance().getCurrentGameData().getCardMaterialID();
        t || (t = 0);
        return t;
    };
    MtlClearEffectTrait.prototype.onChangeCEff5Trait_setType = function (t, e) {
        var r = t.args[0];
        this._isBaseClear = 5 == r;
        e();
    };
    MtlClearEffectTrait.prototype.onChangeCEffTrait_setType = function (t, e) {
        var r = t.args[0];
        this._isBaseClear = 5 == r;
        e();
    };
    MtlClearEffectTrait.prototype.onChangeCEffTrait_bundle = function (t, e) {
        var r = t.args[0];
        this._currentMaterialId = this.getCurrMaterialId();
        if (r < 1 || !this.isChangeClear())
            e();
        else {
            var a = this.getBundleName(r);
            if (a) {
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: a
                });
            }
            else {
                e();
            }
        }
    };
    MtlClearEffectTrait.prototype.onChangeCEff5Trait_bundle = function (t, e) {
        var r = t.args[0];
        this._currentMaterialId = this.getCurrMaterialId();
        if (r < 1 || !this.isChangeClear())
            e();
        else {
            var a = this.getBundleName(r);
            if (a) {
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: a
                });
            }
            else {
                e();
            }
        }
    };
    MtlClearEffectTrait.prototype.isChangeClear = function () {
        this._currentMaterialId = this.getCurrMaterialId();
        var t = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.MaterialConfig, this._currentMaterialId);
        return !(!t || 1 != t.ChangeClear);
    };
    MtlClearEffectTrait.prototype.getBundleName = function (t) {
        this._isBaseClear = 5 === t;
        var e = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.MaterialConfig, this._currentMaterialId);
        return e && 1 === e.ChangeClear ? e.Color === MtlClearEffectTrait_1.COLOR_SPECIAL ? 5 === t ? "r_materialCard" + this._currentMaterialId : null : 5 === t ? "l_mtlClear" + e.Color : "r_mtlClear" + e.Color + t : null;
    };
    MtlClearEffectTrait.prototype.getAniCfg = function () {
        var t = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.MaterialConfig, this._currentMaterialId), e = null;
        t && 1 === t.ChangeClear && (e = t.Color === MtlClearEffectTrait_1.COLOR_SPECIAL ? "r_materialCard" + this._currentMaterialId : "l_mtlClear" + t.Color);
        return {
            bundleName: e,
            spinePath: "spine/gameplay_elimination_a"
        };
    };
    MtlClearEffectTrait.prototype.loadSpine = function (t) {
        var e, r = this, a = this.getAniCfg(), i = a.bundleName, n = a.spinePath;
        this._currSkData = null;
        var o = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.MaterialConfig, this._currentMaterialId);
        o && 0 !== o.ChangeClear && i && (null === (e = null == t ? void 0 : t.gameCtr) || void 0 === e || e.loadRes(n, sp.SkeletonData, i).then(function (t) {
            var e = Array.isArray(t) ? t[0] : t;
            r._currSkData = e || null;
        }).catch(function () {
            r._currSkData = null;
        }));
    };
    MtlClearEffectTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        this._currentMaterialId = this.getCurrMaterialId();
        this.loadSpine(t.ins.context);
        e();
    };
    MtlClearEffectTrait.prototype.onChangeBatchBhv_start = function (t, e) {
        this._currentMaterialId = this.getCurrMaterialId();
        mj.EventManager.emit(GameEvent_1.EGameEvent.Clear_ClassicChange, this, {
            context: t.ins.context
        });
        this.loadSpine(t.ins.context);
        e();
    };
    MtlClearEffectTrait.prototype.onClearEffBhv_changeSkd = function (t, e) {
        var a = t.args[0];
        cc.isValid(a.skeletonData) || (a.skeletonData = null);
        if (this.isChangeClear()) {
            if (!this._isBaseClear) {
                var i = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.MaterialConfig, this._currentMaterialId);
                if (!i || i.Color !== MtlClearEffectTrait_1.COLOR_SPECIAL) {
                    e();
                    return;
                }
            }
            if (cc.isValid(this._currSkData)) {
                var n = this._currSkData;
                if (a.skeletonData === n)
                    e();
                else {
                    a.skeletonData = n;
                    e({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                }
            }
            else
                e();
        }
        else
            e();
    };
    MtlClearEffectTrait.prototype.onChangeCEffTrait_isGTOpen = function (t, e) {
        this._currentMaterialId = this.getCurrMaterialId();
        if (this._currentMaterialId) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    var MtlClearEffectTrait_1;
    MtlClearEffectTrait.traitKey = "MtlClearEffect";
    MtlClearEffectTrait.BundleName = "r_mtlClearEffect";
    MtlClearEffectTrait.COLOR_SPECIAL = "Special";
    MtlClearEffectTrait = MtlClearEffectTrait_1 = __decorate([
        mj.trait,
        mj.class("MtlClearEffectTrait")
    ], MtlClearEffectTrait);
    return MtlClearEffectTrait;
}(Trait_1.default));
exports.default = MtlClearEffectTrait;

cc._RF.pop();