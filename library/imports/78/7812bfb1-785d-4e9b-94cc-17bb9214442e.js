"use strict";
cc._RF.push(module, '7812b+xeF1Om5TMF7uSFEQu', 'ChangeClearEffectTrait');
// subpackages/r_changeClearEffect/Scripts/ChangeClearEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var ChangeClearEffectTrait = /** @class */ (function (_super) {
    __extends(ChangeClearEffectTrait, _super);
    function ChangeClearEffectTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        _this._selectedType = 1;
        _this._gameType = GameTypeEnums_1.MjGameType.None;
        _this._bundleName = "clear_effect1";
        return _this;
    }
    ChangeClearEffectTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._selectedType = this.resolveType();
        this.registerEvent([{
                event: "T2ClearEffBhv_getAniCfg"
            }]);
    };
    ChangeClearEffectTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.Clear_ClassicChange] = this.onClassicChange.bind(this);
        return _t;
    };
    ChangeClearEffectTrait.prototype.getRandomEffect = function (t) {
        var e = Math.max(1, t || 1);
        return Math.floor(Math.random() * e) + 1;
    };
    ChangeClearEffectTrait.prototype.resolveType = function () {
        var t, e, r = Number((null === (t = this.traitData) || void 0 === t ? void 0 : t.type) || 1);
        if (0 === r) {
            var a = Number((null === (e = this.traitData) || void 0 === e ? void 0 : e.maxType) || 2);
            r = this.getRandomEffect(a);
        }
        (!r || r < 1 || r > 5) && (r = 1);
        return r;
    };
    ChangeClearEffectTrait.prototype.getBundleName = function (t) {
        return "clear_effect" + t;
    };
    ChangeClearEffectTrait.prototype.loadSpine = function (t, e) {
        var r = this;
        if (5 !== t) {
            this._selectedType = t;
            var a = this.getBundleName(this._selectedType);
            this._bundleName = a;
            var n = e;
            if (n && "function" == typeof n.loadRes) {
                this._currSkData = null;
                n.loadRes("spine/gameplay_elimination_a", sp.SkeletonData, a).then(function (t) {
                    var e = Array.isArray(t) ? t[0] : t;
                    r._currSkData = e || null;
                }).catch(function () {
                    r._currSkData = null;
                });
            }
        }
        else
            this._currSkData = null;
    };
    ChangeClearEffectTrait.prototype.isGameTypeOpen = function (t) {
        return t === GameTypeEnums_1.MjGameType.Normal;
    };
    ChangeClearEffectTrait.prototype.setType = function (t) {
        this._selectedType = t;
    };
    ChangeClearEffectTrait.prototype.getType = function () {
        return this._selectedType;
    };
    ChangeClearEffectTrait.prototype.getCurrSkData = function () {
        return this._currSkData;
    };
    ChangeClearEffectTrait.prototype.onClassicChange = function (t, e) {
        var r;
        this.loadSpine(this._selectedType, null === (r = null == e ? void 0 : e.context) || void 0 === r ? void 0 : r.gameCtr);
    };
    ChangeClearEffectTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var r, a, n, i;
        this._gameType = null === (a = null === (r = t.ins) || void 0 === r ? void 0 : r._context) || void 0 === a ? void 0 : a.gameType;
        0 == this._traitData.type && (this._selectedType = this.getRandomEffect(4));
        this.setType(this._selectedType);
        this.loadSpine(this._selectedType, null === (i = null === (n = t.ins) || void 0 === n ? void 0 : n.context) || void 0 === i ? void 0 : i.gameCtr);
        e();
    };
    ChangeClearEffectTrait.prototype.onClearEffBhv_changeSkd = function (t, e) {
        var r = t.args[0], a = this._currSkData;
        a && cc.isValid(a) && r && r.skeletonData !== a && this.isGameTypeOpen(this._gameType) && (r.skeletonData = a);
        e();
    };
    ChangeClearEffectTrait.prototype.onClearEffBhv_getAnimName = function (t, e) {
        var r = t.args[0], a = t.args[1], n = "in";
        if (this.isGameTypeOpen(this._gameType) && this._currSkData && cc.isValid(this._currSkData)) {
            if (1 == this._selectedType) {
                n = Math.random() < 0.5 ? "in_1" : "in_2";
            }
            else {
                4 == this._selectedType && (n = a.x < -75 ? "in_left" : a.x > 75 ? "in_right3" : "in_middle");
            }
        }
        else {
            n = r ? "in_1" : "in";
        }
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: n
        });
    };
    ChangeClearEffectTrait.prototype.getAnimNameByType = function (t, e) {
        var r = "in";
        if (1 == t) {
            r = Math.random() < 0.5 ? "in_1" : "in_2";
        }
        else {
            4 == t && (r = e.x < -75 ? "in_left" : e.x > 75 ? "in_right3" : "in_middle");
        }
        return r;
    };
    ChangeClearEffectTrait.prototype.onT2ClearEffBhv_getAniCfg = function (t, e) {
        if (this.getCurrSkData()) {
            var r = this.getType(), a = this.getBundleName(r), n = "spine/gameplay_elimination_a";
            "mainRes" === a && (n = "spine/clear/gameplay_elimination_a");
            var i = this.getAnimNameByType(r, t.args[1]);
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: {
                    path: n,
                    bundle: a,
                    animName: i
                }
            });
        }
        else
            e();
    };
    ChangeClearEffectTrait.traitKey = "ChangeClearEffect";
    __decorate([
        mj.traitEvent("ChangeCEffTrait_bundle")
    ], ChangeClearEffectTrait.prototype, "getBundleName", null);
    __decorate([
        mj.traitEvent("ChangeCEffTrait_loadSpine")
    ], ChangeClearEffectTrait.prototype, "loadSpine", null);
    __decorate([
        mj.traitEvent("ChangeCEffTrait_isGTOpen")
    ], ChangeClearEffectTrait.prototype, "isGameTypeOpen", null);
    __decorate([
        mj.traitEvent("ChangeCEffTrait_setType")
    ], ChangeClearEffectTrait.prototype, "setType", null);
    __decorate([
        mj.traitEvent("ChangeCEffTrait_getType")
    ], ChangeClearEffectTrait.prototype, "getType", null);
    __decorate([
        mj.traitEvent("ChangeCEffTrait_getSKDt")
    ], ChangeClearEffectTrait.prototype, "getCurrSkData", null);
    ChangeClearEffectTrait = __decorate([
        mj.trait,
        mj.class("ChangeClearEffectTrait")
    ], ChangeClearEffectTrait);
    return ChangeClearEffectTrait;
}(Trait_1.default));
exports.default = ChangeClearEffectTrait;

cc._RF.pop();