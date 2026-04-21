"use strict";
cc._RF.push(module, '45a0da2zmhFXa3Y+eOS+Tj6', 'Tile2StarType1BaseCardTrait');
// subpackages/l_tile2StarType1BaseCard/Scripts/Tile2StarType1BaseCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var FlowerStarConfigUtil_1 = require("../../../Scripts/gamePlay/base/data/FlowerStarConfigUtil");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var p = ["gym2", "farmproduce", "skiing", "livingroom", "countrylife", "music", "wildlife", "spices", "royalwedding", "bakery", "puzzles", "bags", "easter", "parkwalk", "pets", "cardnight", "paris", "birdwatch", "social", "soups", "shoes", "dailygoods", "dogs", "cats", "fashion", "nursery", "fabric", "jewelry", "herbaltea", "breakfast", "retrotech", "cleaning"];
var d = ["W", "b", "t"];
var Tile2StarType1BaseCardTrait = /** @class */ (function (_super) {
    __extends(Tile2StarType1BaseCardTrait, _super);
    function Tile2StarType1BaseCardTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._whitelistThemes = null;
        return _this;
    }
    Tile2StarType1BaseCardTrait.prototype.getSuitGroupCountFromContext = function (t) {
        var e, r, i = t.ins;
        if (i && "function" == typeof i.getSuitGroupCount)
            return Math.min(3, Math.max(1, i.getSuitGroupCount()));
        var n = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.suitGroupCount) && void 0 !== r ? r : 1;
        return Math.min(3, Math.max(1, n));
    };
    Tile2StarType1BaseCardTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.addWhitelistBundlesToLoader();
    };
    Tile2StarType1BaseCardTrait.prototype.getWhitelistThemes = function () {
        if (this._whitelistThemes)
            return this._whitelistThemes;
        var t = FlowerStarConfigUtil_1.FlowerStarConfigUtil.getStarList(), e = new Set(p);
        this._whitelistThemes = t.filter(function (t) {
            return e.has(t.name);
        });
        return this._whitelistThemes;
    };
    Tile2StarType1BaseCardTrait.prototype.addWhitelistBundlesToLoader = function () {
        var t = LowPriorityBundleLoader_1.default.getInstance(), e = this.getWhitelistThemes();
        new Set(e.filter(function (t) {
            return !t.isLocal;
        }).map(function (t) {
            return t.bundle;
        })).forEach(function (e) {
            return t.addTask(e, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
        });
    };
    Tile2StarType1BaseCardTrait.prototype.onTile2Star_drawLevel = function (t, e) {
        var r = t.args[0];
        if (1 === ExtractTool_1.default.getInstance().getLevelType(r)) {
            var i = this.getSuitGroupCountFromContext(t), n = this.drawRandomSuits(i);
            if (n.length < i)
                e();
            else {
                for (var a = [], o = [], s = 0; s < i; s++) {
                    var u = this.drawThemeFromWhitelist(o);
                    if (!u) {
                        e();
                        return;
                    }
                    a.push(u);
                    o.push(u.name);
                }
                var c = n.map(function (t, e) {
                    return {
                        suit: t,
                        themeId: a[e].name,
                        bundle: a[e].bundle
                    };
                }), f = a.map(function (t) {
                    return t.name;
                });
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: {
                        forLevelId: r,
                        entries: c,
                        themeIds: f
                    }
                });
            }
        }
        else
            e();
    };
    Tile2StarType1BaseCardTrait.prototype.drawRandomSuits = function (t) {
        for (var e = __spreadArrays(d), r = [], i = 0; i < t && e.length > 0; i++) {
            var n = Math.floor(Math.random() * e.length);
            r.push(e[n]);
            e.splice(n, 1);
        }
        return r;
    };
    Tile2StarType1BaseCardTrait.prototype.drawThemeFromWhitelist = function (t) {
        var e = new Set(t), r = this.getWhitelistThemes().filter(function (t) {
            return !e.has(t.name) && (!!t.isLocal || LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(t.bundle));
        });
        if (0 === r.length) {
            var i = this.getWhitelistThemes().filter(function (t) {
                return !e.has(t.name);
            });
            return 0 === i.length ? null : i[Math.floor(Math.random() * i.length)];
        }
        return r[Math.floor(Math.random() * r.length)];
    };
    Tile2StarType1BaseCardTrait.traitKey = "Tile2StarType1BaseCard";
    Tile2StarType1BaseCardTrait = __decorate([
        mj.trait,
        mj.class("Tile2StarType1BaseCardTrait")
    ], Tile2StarType1BaseCardTrait);
    return Tile2StarType1BaseCardTrait;
}(Trait_1.default));
exports.default = Tile2StarType1BaseCardTrait;

cc._RF.pop();