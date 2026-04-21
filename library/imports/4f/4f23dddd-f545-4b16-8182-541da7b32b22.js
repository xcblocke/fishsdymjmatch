"use strict";
cc._RF.push(module, '4f23d3d9UVLFoGCVB2nsysi', 'HardLevelNewTrait');
// subpackages/l_hardLevelNew/Scripts/HardLevelNewTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var HardLevelNewTrait = /** @class */ (function (_super) {
    __extends(HardLevelNewTrait, _super);
    function HardLevelNewTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HardLevelNewTrait_1 = HardLevelNewTrait;
    HardLevelNewTrait.prototype.onLoad = function () {
        var t, r, a, i, o, l;
        _super.prototype.onLoad.call(this);
        var n = null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.firstHardLevel) && void 0 !== r ? r : 10;
        this._config = {
            firstHardLevel: n,
            cooldown: null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.cooldown) && void 0 !== i ? i : 4,
            hardDeathRate: 4,
            initDeathRate: 1,
            maxNotDieLevel: n - 1,
            useFixedLevel: null !== (l = null === (o = this._traitData) || void 0 === o ? void 0 : o.useFixedLevel) && void 0 !== l && l
        };
    };
    HardLevelNewTrait.prototype.onExtNormLv_getDeathLv = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.beforReturnVal, a = e.args[4], i = r;
            if (a === this._config.firstHardLevel) {
                r = "0" + this._config.hardDeathRate;
            }
            else {
                a <= this._config.maxNotDieLevel && (r = "0" + this._config.initDeathRate);
            }
            if (r !== i) {
                t({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: r
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    HardLevelNewTrait.prototype.onExtractTool_isHardUI = function (e, t) {
        if (this.checkGameMode()) {
            this.handleLabel(e, t, true);
        }
        else {
            t();
        }
    };
    HardLevelNewTrait.prototype.onExtractTool_isExpertUI = function (e, t) {
        if (this.checkGameMode()) {
            this.handleLabel(e, t, false);
        }
        else {
            t();
        }
    };
    HardLevelNewTrait.prototype.onExtractTool_isHardUseFix = function (e, t) {
        if (this.checkGameMode()) {
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this._config.useFixedLevel
            });
        }
        else {
            t();
        }
    };
    HardLevelNewTrait.prototype.handleLabel = function (e, t, r) {
        var a = e.args[0];
        this.ensureCacheStructure();
        var i = this.getLevelCache(a);
        if (i && void 0 !== i.hardResult && void 0 !== i.expertResult) {
            var o = r ? i.hardResult : i.expertResult;
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else {
            var l = UserModel_1.default.getInstance().getCurrentGameData().getDieResult(), s = this.calcShow(a, l, true), u = this.calcShow(a, l, false);
            this.setLevelCache(a, s, u);
            if (s) {
                this.localData.lastHardLevelID = a;
                this.localData.lastShowType = 1;
            }
            else if (u) {
                this.localData.lastHardLevelID = a;
                this.localData.lastShowType = 2;
            }
            var h = r ? s : u;
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: h
            });
        }
    };
    HardLevelNewTrait.prototype.getLastHardLevelID = function () {
        return this.toNumber(this.localData.lastHardLevelID);
    };
    HardLevelNewTrait.prototype.calcShow = function (e, t, r) {
        if (e === this._config.firstHardLevel)
            return r;
        if (e <= this._config.maxNotDieLevel)
            return false;
        var a = this.getLastHardLevelID();
        if (1 !== t)
            return false;
        if (e > a && a > 0 && e - a <= this._config.cooldown)
            return false;
        if (e === a) {
            var i = this.toNumber(this.localData.lastShowType);
            if (1 === i)
                return r;
            if (2 === i)
                return !r;
        }
        var o = this.toNumber(this.localData.lastShowType);
        return !(0 !== o && 2 !== o || !r) || 1 === o && !r;
    };
    HardLevelNewTrait.prototype.ensureCacheStructure = function () {
        this.localData.levelCacheMap || (this.localData.levelCacheMap = {});
        this.localData.levelCacheOrder && Array.isArray(this.localData.levelCacheOrder) || (this.localData.levelCacheOrder = []);
    };
    HardLevelNewTrait.prototype.getLevelCache = function (e) {
        var t, r = String(e);
        return null !== (t = this.localData.levelCacheMap[r]) && void 0 !== t ? t : null;
    };
    HardLevelNewTrait.prototype.setLevelCache = function (e, t, a) {
        var i = String(e), o = this.localData.levelCacheOrder, l = o.indexOf(e);
        -1 !== l && o.splice(l, 1);
        for (; o.length >= HardLevelNewTrait_1.MAX_CACHE_SIZE;) {
            var n = o.shift();
            void 0 !== n && delete this.localData.levelCacheMap[String(n)];
        }
        this.localData.levelCacheMap[i] = {
            levelID: e,
            hardResult: t,
            expertResult: a
        };
        o.push(e);
        this.localData.levelCacheMap = this.localData.levelCacheMap;
        this.localData.levelCacheOrder = this.localData.levelCacheOrder;
    };
    HardLevelNewTrait.prototype.toNumber = function (e, t) {
        if (t === void 0) { t = 0; }
        if ("number" == typeof e && !isNaN(e))
            return e;
        if ("string" == typeof e && "" !== e) {
            var r = Number(e);
            return isNaN(r) ? t : r;
        }
        return t;
    };
    var HardLevelNewTrait_1;
    HardLevelNewTrait.traitKey = "HardLevelNew";
    HardLevelNewTrait.MAX_CACHE_SIZE = 10;
    __decorate([
        mj.traitEvent("HardLvNew_getLastId")
    ], HardLevelNewTrait.prototype, "getLastHardLevelID", null);
    HardLevelNewTrait = HardLevelNewTrait_1 = __decorate([
        mj.trait,
        mj.class("HardLevelNewTrait")
    ], HardLevelNewTrait);
    return HardLevelNewTrait;
}(ExtractTrait_1.default));
exports.default = HardLevelNewTrait;

cc._RF.pop();