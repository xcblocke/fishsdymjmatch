"use strict";
cc._RF.push(module, '52a2aqdEuJH/qHQw7/NZUax', 'HardLevelTrait');
// subpackages/l_hardLevel/Scripts/HardLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var HardLevelTrait = /** @class */ (function (_super) {
    __extends(HardLevelTrait, _super);
    function HardLevelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HardLevelTrait.prototype.onLoad = function () {
        var t, r, a, i, n, o, l, u, c, s, v, p, d;
        _super.prototype.onLoad.call(this);
        var f = null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.startLevel) && void 0 !== r ? r : 10, y = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.interval) && void 0 !== i ? i : 10, h = null !== (o = null === (n = this._traitData) || void 0 === n ? void 0 : n.hardMod) && void 0 !== o ? o : 0, _ = null !== (u = null === (l = this._traitData) || void 0 === l ? void 0 : l.expertMod) && void 0 !== u ? u : 5, T = null === (s = null === (c = this._traitData) || void 0 === c ? void 0 : c.useFixedLevel) || void 0 === s || s, k = null !== (p = null === (v = this._traitData) || void 0 === v ? void 0 : v.levelDataPath) && void 0 !== p ? p : "config/specialLevels/special_levels_travel", g = (null === (d = this._traitData) || void 0 === d ? void 0 : d.levelDataBundle) || "mainRes";
        this._config = {
            startLevel: f,
            interval: y,
            hardMods: Array.isArray(h) ? h : [h],
            expertMods: Array.isArray(_) ? _ : [_],
            useFixedLevel: T,
            levelDataPath: k,
            levelDataBundle: g
        };
    };
    HardLevelTrait.prototype.onTravelHardLv_getDataCfg = function (e, t) {
        if (this.checkGameMode()) {
            var r = this._config, a = r.levelDataPath, i = r.levelDataBundle;
            if (a) {
                t({
                    returnVal: {
                        dataPath: a,
                        bundleName: i
                    },
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    HardLevelTrait.prototype.onExtractTool_isHardUI = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0], a = this.checkIsHardLevel(r);
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: a
            });
        }
        else
            t();
    };
    HardLevelTrait.prototype.onExtractTool_isExpertUI = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0], a = this.checkIsExpertLevel(r);
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: a
            });
        }
        else
            t();
    };
    HardLevelTrait.prototype.onExtractTool_isHardUseFix = function (e, t) {
        if (this.checkGameMode()) {
            e.args[0];
            var r = this._config.useFixedLevel;
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: r
            });
        }
        else
            t();
    };
    HardLevelTrait.prototype.onTLGameModel_isHardLv = function (e, t) {
        var r = e.args[0];
        if (this.checkTravelActivity(r)) {
            var a = this.checkIsHardLevel(r) || this.checkIsExpertLevel(r);
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: a
            });
        }
        else
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: false
            });
    };
    HardLevelTrait.prototype.checkTravelActivity = function (e) {
        var t, r, a = this._traitData.travelActivitys || ["Yoga", "Flip", "Color"], i = TravelGameModel_1.default.getInstance(), n = i.getCurJourney();
        if (!n)
            return false;
        var l = i.getLevelById(e, n);
        if (!l || !l.playType)
            return false;
        try {
            for (var u = __values(l.playType), s = u.next(); !s.done; s = u.next()) {
                var v = s.value, p = this.journeyTypeToString(v);
                if (p && a.includes(p))
                    return true;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (r = u.return) && r.call(u);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return false;
    };
    HardLevelTrait.prototype.onExtractTool_isTravelHard = function (e, t) {
        if (this.checkGameMode()) {
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: true
            });
        }
        else {
            t();
        }
    };
    HardLevelTrait.prototype.checkIsHardLevel = function (e) {
        var t = this._config, r = t.startLevel, a = t.interval, i = t.hardMods;
        if (e < r)
            return false;
        var n = e % a;
        return i.includes(n);
    };
    HardLevelTrait.prototype.checkIsExpertLevel = function (e) {
        var t = this._config, r = t.startLevel, a = t.interval, i = t.expertMods;
        if (e < r)
            return false;
        var n = e % a;
        return i.includes(n);
    };
    HardLevelTrait.traitKey = "HardLevel";
    HardLevelTrait = __decorate([
        mj.trait,
        mj.class("HardLevelTrait")
    ], HardLevelTrait);
    return HardLevelTrait;
}(ExtractTrait_1.default));
exports.default = HardLevelTrait;

cc._RF.pop();