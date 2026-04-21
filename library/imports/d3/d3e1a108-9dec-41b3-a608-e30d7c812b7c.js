"use strict";
cc._RF.push(module, 'd3e1aEInexBs6YI4w18gSt8', 'BaseClearEffectReplaceTrait');
// subpackages/r_baseClearEffectReplace/Scripts/BaseClearEffectReplaceTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var BaseClearEffectReplaceTrait = /** @class */ (function (_super) {
    __extends(BaseClearEffectReplaceTrait, _super);
    function BaseClearEffectReplaceTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        _this._gameType = GameTypeEnums_1.MjGameType.None;
        _this._config = {};
        return _this;
    }
    BaseClearEffectReplaceTrait.prototype.onLoad = function () {
        var e, r, a;
        _super.prototype.onLoad.call(this);
        this._config = {
            resBundle: (null === (e = this.traitData) || void 0 === e ? void 0 : e.resBundle) || "r_baseClearEffectReplace",
            skeletonPath: (null === (r = this.traitData) || void 0 === r ? void 0 : r.skeletonPath) || "spine/gameplay_elimination_a",
            animName: (null === (a = this.traitData) || void 0 === a ? void 0 : a.animName) || "in"
        };
    };
    BaseClearEffectReplaceTrait.prototype.loadSpineResource = function (t) {
        var e = this, r = this._config, a = r.resBundle, n = r.skeletonPath;
        if (a && n) {
            var i = t;
            if (i && "function" == typeof i.loadRes) {
                this._currSkData = null;
                i.loadRes(n, sp.SkeletonData, a).then(function (t) {
                    var r = Array.isArray(t) ? t[0] : t;
                    e._currSkData = r || null;
                }).catch(function () {
                    e._currSkData = null;
                });
            }
        }
    };
    BaseClearEffectReplaceTrait.prototype.isGameTypeEnabled = function () {
        return true;
    };
    BaseClearEffectReplaceTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var r, a, n, i;
        try {
            this._gameType = (null === (a = null === (r = t.ins) || void 0 === r ? void 0 : r._context) || void 0 === a ? void 0 : a.gameType) || GameTypeEnums_1.MjGameType.None;
            var o = null === (i = null === (n = t.ins) || void 0 === n ? void 0 : n.context) || void 0 === i ? void 0 : i.gameCtr;
            this.loadSpineResource(o);
        }
        catch (t) { }
        e();
    };
    BaseClearEffectReplaceTrait.prototype.onClearEffBhv_changeSkd = function (t, e) {
        try {
            var r = t.args[0], a = this._currSkData;
            a && cc.isValid(a) && r && r.skeletonData !== a && this.isGameTypeEnabled(this._gameType) && (r.skeletonData = a);
        }
        catch (t) { }
        e();
    };
    BaseClearEffectReplaceTrait.prototype.onClearEffBhv_getAnimName = function (t, e) {
        try {
            if (this._currSkData && cc.isValid(this._currSkData) && this.isGameTypeEnabled(this._gameType)) {
                var r = this._config.animName || "in";
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.jump,
                    returnVal: r
                });
                return;
            }
            e();
        }
        catch (t) {
            e();
        }
    };
    BaseClearEffectReplaceTrait.traitKey = "BaseClearEffectReplace";
    BaseClearEffectReplaceTrait = __decorate([
        mj.trait,
        mj.class("BaseClearEffectReplaceTrait")
    ], BaseClearEffectReplaceTrait);
    return BaseClearEffectReplaceTrait;
}(Trait_1.default));
exports.default = BaseClearEffectReplaceTrait;

cc._RF.pop();