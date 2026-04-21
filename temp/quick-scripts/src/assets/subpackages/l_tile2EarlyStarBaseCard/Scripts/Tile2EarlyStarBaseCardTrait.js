"use strict";
cc._RF.push(module, '5be48Aec4pFHqjQgmf/aRHX', 'Tile2EarlyStarBaseCardTrait');
// subpackages/l_tile2EarlyStarBaseCard/Scripts/Tile2EarlyStarBaseCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var FlowerStarConfigUtil_1 = require("../../../Scripts/gamePlay/base/data/FlowerStarConfigUtil");
var h = ["gym2", "farmproduce", "livingroom", "countrylife", "music", "puzzles", "bakery", "bags", "easter", "pets"];
var d = ["W", "b", "t"];
var Tile2EarlyStarBaseCardTrait = /** @class */ (function (_super) {
    __extends(Tile2EarlyStarBaseCardTrait, _super);
    function Tile2EarlyStarBaseCardTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._resolvedThemes = null;
        return _this;
    }
    Tile2EarlyStarBaseCardTrait.prototype.getSuitGroupCountFromContext = function (t) {
        var e, r, a = t.ins;
        if (a && "function" == typeof a.getSuitGroupCount)
            return Math.min(3, Math.max(1, a.getSuitGroupCount()));
        var o = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.suitGroupCount) && void 0 !== r ? r : 1;
        return Math.min(3, Math.max(1, o));
    };
    Tile2EarlyStarBaseCardTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData.shuffledThemeNames && 0 !== this.localData.shuffledThemeNames.length || (this.localData.shuffledThemeNames = this.shuffleArray(__spreadArrays(h)));
        this.localData.usedCount = Math.max(0, Math.floor(Number(this.localData.usedCount) || 0));
        this.saveLocalData();
        this.addRoyalBundlesToLoader();
    };
    Tile2EarlyStarBaseCardTrait.prototype.getResolvedThemes = function () {
        if (this._resolvedThemes)
            return this._resolvedThemes;
        var t = FlowerStarConfigUtil_1.FlowerStarConfigUtil.getStarList(), e = new Map(t.map(function (t) {
            return [t.name, t];
        }));
        this._resolvedThemes = this.localData.shuffledThemeNames.map(function (t) {
            return e.get(t);
        }).filter(function (t) {
            return !!t;
        });
        return this._resolvedThemes;
    };
    Tile2EarlyStarBaseCardTrait.prototype.addRoyalBundlesToLoader = function () {
        var t = LowPriorityBundleLoader_1.default.getInstance(), e = this.getResolvedThemes();
        new Set(e.filter(function (t) {
            return !t.isLocal;
        }).map(function (t) {
            return t.bundle;
        })).forEach(function (e) {
            return t.addTask(e, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
        });
    };
    Tile2EarlyStarBaseCardTrait.prototype.onTile2Star_drawLevel = function (t, e) {
        var r = this.getSuitGroupCountFromContext(t);
        if (this.localData.usedCount + r > 10)
            e();
        else {
            for (var a = t.args[0], o = [], n = 0; n < r; n++) {
                var i = this.localData.usedCount + n, s = this.pickReadyThemeAt(i);
                if (!s) {
                    e();
                    return;
                }
                o.push(s);
            }
            var u = this.drawRandomSuits(r);
            if (u.length < r)
                e();
            else {
                var f = u.map(function (t, e) {
                    return {
                        suit: t,
                        themeId: o[e].name,
                        bundle: o[e].bundle
                    };
                }), c = o.map(function (t) {
                    return t.name;
                });
                this.localData.usedCount = this.localData.usedCount + r;
                this.saveLocalData();
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: {
                        forLevelId: a,
                        entries: f,
                        themeIds: c
                    }
                });
            }
        }
    };
    Tile2EarlyStarBaseCardTrait.prototype.drawRandomSuits = function (t) {
        for (var e = __spreadArrays(d), r = [], a = 0; a < t && e.length > 0; a++) {
            var o = Math.floor(Math.random() * e.length);
            r.push(e[o]);
            e.splice(o, 1);
        }
        return r;
    };
    Tile2EarlyStarBaseCardTrait.prototype.pickReadyThemeAt = function (t) {
        var e, r, a = this.getResolvedThemes();
        if (t >= a.length)
            return null;
        var o = a[t];
        if (this.isBundleReady(o))
            return o;
        for (var n = t + 1; n < a.length; n++)
            if (this.isBundleReady(a[n])) {
                var s = this.localData.shuffledThemeNames;
                e = __read([a[n], a[t]], 2), a[t] = e[0], a[n] = e[1];
                r = __read([s[n], s[t]], 2), s[t] = r[0], s[n] = r[1];
                this.localData.shuffledThemeNames = s;
                this.saveLocalData();
                return a[t];
            }
        return o;
    };
    Tile2EarlyStarBaseCardTrait.prototype.isBundleReady = function (t) {
        return !!t.isLocal || LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(t.bundle);
    };
    Tile2EarlyStarBaseCardTrait.prototype.shuffleArray = function (t) {
        for (var e, r = t.length - 1; r > 0; r--) {
            var a = Math.floor(Math.random() * (r + 1));
            e = __read([t[a], t[r]], 2), t[r] = e[0], t[a] = e[1];
        }
        return t;
    };
    Tile2EarlyStarBaseCardTrait.prototype.saveLocalData = function () {
        this.localData.shuffledThemeNames = this.localData.shuffledThemeNames;
        this.localData.usedCount = this.localData.usedCount;
    };
    Tile2EarlyStarBaseCardTrait.traitKey = "Tile2EarlyStarBaseCard";
    Tile2EarlyStarBaseCardTrait = __decorate([
        mj.trait,
        mj.class("Tile2EarlyStarBaseCardTrait")
    ], Tile2EarlyStarBaseCardTrait);
    return Tile2EarlyStarBaseCardTrait;
}(Trait_1.default));
exports.default = Tile2EarlyStarBaseCardTrait;

cc._RF.pop();