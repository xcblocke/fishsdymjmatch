"use strict";
cc._RF.push(module, '0826f+yNr5HNo4Ha2wsUURm', 'HardLevelTile2Trait');
// subpackages/l_hardLevelTile2/Scripts/HardLevelTile2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var HardLevelTile2Trait = /** @class */ (function (_super) {
    __extends(HardLevelTile2Trait, _super);
    function HardLevelTile2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HardLevelTile2Trait_1 = HardLevelTile2Trait;
    HardLevelTile2Trait.prototype.onLoad = function () {
        var t, r, a, i;
        _super.prototype.onLoad.call(this);
        var l = null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.firstHardLevel) && void 0 !== r ? r : 10;
        this._config = {
            firstHardLevel: l,
            cooldown: null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.cooldown) && void 0 !== i ? i : 4
        };
    };
    HardLevelTile2Trait.prototype.onExtractTool_isHardUI = function (e, t) {
        if (this.isTile2Mode()) {
            this.handleLabel(e, t, true);
        }
        else {
            t();
        }
    };
    HardLevelTile2Trait.prototype.onExtractTool_isExpertUI = function (e, t) {
        if (this.isTile2Mode()) {
            this.handleLabel(e, t, false);
        }
        else {
            t();
        }
    };
    HardLevelTile2Trait.prototype.onExtractTool_isHardUseFix = function (e, t) {
        if (this.isTile2Mode()) {
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: false
            });
        }
        else {
            t();
        }
    };
    HardLevelTile2Trait.prototype.isTile2Mode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    HardLevelTile2Trait.prototype.handleLabel = function (e, t, r) {
        var a = e.args[0];
        this.ensureCacheStructure();
        var i = this.getLevelCache(a);
        if (i && void 0 !== i.hardResult && void 0 !== i.expertResult) {
            var l = r ? i.hardResult : i.expertResult;
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: l
            });
        }
        else {
            var o = UserModel_1.default.getInstance().getCurrentGameData().getDieResult(), c = this.calcShow(a, o, true), u = this.calcShow(a, o, false);
            this.setLevelCache(a, c, u);
            if (c) {
                this.localData.lastHardLevelID = a;
                this.localData.lastShowType = 1;
            }
            else if (u) {
                this.localData.lastHardLevelID = a;
                this.localData.lastShowType = 2;
            }
            var p = r ? c : u;
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: p
            });
        }
    };
    HardLevelTile2Trait.prototype.getLastHardLevelID = function () {
        return this.toNumber(this.localData.lastHardLevelID);
    };
    HardLevelTile2Trait.prototype.calcShow = function (e, t, r) {
        if (e < this._config.firstHardLevel)
            return false;
        if (e === this._config.firstHardLevel)
            return r;
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
        var l = this.toNumber(this.localData.lastShowType);
        return !(0 !== l && 2 !== l || !r) || 1 === l && !r;
    };
    HardLevelTile2Trait.prototype.ensureCacheStructure = function () {
        this.localData.levelCacheMap || (this.localData.levelCacheMap = {});
        this.localData.levelCacheOrder && Array.isArray(this.localData.levelCacheOrder) || (this.localData.levelCacheOrder = []);
    };
    HardLevelTile2Trait.prototype.getLevelCache = function (e) {
        var t, r = String(e);
        return null !== (t = this.localData.levelCacheMap[r]) && void 0 !== t ? t : null;
    };
    HardLevelTile2Trait.prototype.setLevelCache = function (e, t, a) {
        var i = String(e), l = this.localData.levelCacheOrder, o = l.indexOf(e);
        -1 !== o && l.splice(o, 1);
        for (; l.length >= HardLevelTile2Trait_1.MAX_CACHE_SIZE;) {
            var n = l.shift();
            void 0 !== n && delete this.localData.levelCacheMap[String(n)];
        }
        this.localData.levelCacheMap[i] = {
            levelID: e,
            hardResult: t,
            expertResult: a
        };
        l.push(e);
        this.localData.levelCacheMap = this.localData.levelCacheMap;
        this.localData.levelCacheOrder = this.localData.levelCacheOrder;
    };
    HardLevelTile2Trait.prototype.toNumber = function (e, t) {
        if (t === void 0) { t = 0; }
        if ("number" == typeof e && !isNaN(e))
            return e;
        if ("string" == typeof e && "" !== e) {
            var r = Number(e);
            return isNaN(r) ? t : r;
        }
        return t;
    };
    var HardLevelTile2Trait_1;
    HardLevelTile2Trait.traitKey = "HardLevelTile2";
    HardLevelTile2Trait.MAX_CACHE_SIZE = 10;
    __decorate([
        mj.traitEvent("HardLvT2_getLastId")
    ], HardLevelTile2Trait.prototype, "getLastHardLevelID", null);
    HardLevelTile2Trait = HardLevelTile2Trait_1 = __decorate([
        mj.trait,
        mj.class("HardLevelTile2Trait")
    ], HardLevelTile2Trait);
    return HardLevelTile2Trait;
}(Trait_1.default));
exports.default = HardLevelTile2Trait;

cc._RF.pop();