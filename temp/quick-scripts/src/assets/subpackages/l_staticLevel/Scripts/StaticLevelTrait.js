"use strict";
cc._RF.push(module, 'b0b44Pq5HRFcKHYjeMz9PqJ', 'StaticLevelTrait');
// subpackages/l_staticLevel/Scripts/StaticLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var ExtractStatic_1 = require("../../../Scripts/core/extractQuestion/ExtractStatic");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var f = {
    Flower: 35,
    Season: 36,
    Yoga: 37,
    Bomb: 38,
    TravelEgypt: 39,
    Rank: 50
};
var StaticLevelTrait = /** @class */ (function (_super) {
    __extends(StaticLevelTrait, _super);
    function StaticLevelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StaticLevelTrait.prototype.onLoad = function () {
        var e, r, a, o = this;
        _super.prototype.onLoad.call(this);
        this._config = {
            dataPath: "byteData/static/" + (null === (e = this._traitData) || void 0 === e ? void 0 : e.dataPath),
            bundleName: null !== (a = null === (r = this._traitData) || void 0 === r ? void 0 : r.bundleName) && void 0 !== a ? a : "mainRes"
        };
        ExtractStatic_1.default.getInstance().loadData(null, function () {
            o.eventEnabled = false;
        });
    };
    StaticLevelTrait.prototype.onExtractTool_canUseStatic = function (t, e) {
        if (this.checkGameMode() && ExtractStatic_1.default.getInstance().isDataLoaded()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    StaticLevelTrait.prototype.onExtractStatic_getPatch = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: [this._config.dataPath, this._config.bundleName]
        });
    };
    StaticLevelTrait.prototype.onIptSetLv_reGenFaces = function (t, e) {
        var r;
        if (this.checkGameMode()) {
            var a = t.ins, o = t.args[0].levelData;
            if (o.isNewGame && !o.isRestart && ExtractTool_1.default.getInstance().canUseStaticContentByLevelID(o.levelId)) {
                var n = a.tileMapObject, l = this.collectOriginalCardIds(n.mapLayers());
                if (0 !== l.size) {
                    for (var s = Array.from({
                        length: 34
                    }, function (t, e) {
                        return e;
                    }), f = s.length - 1; f > 0; f--) {
                        var p = Math.floor(Math.random() * (f + 1));
                        r = __read([s[p], s[f]], 2), s[f] = r[0], s[p] = r[1];
                    }
                    var d = {};
                    Array.from(l).sort(function (t, e) {
                        return t - e;
                    }).forEach(function (t, e) {
                        d[t] = s[e % 34];
                    });
                    n.mapLayers().forEach(function (t) {
                        t.allCards.forEach(function (t) {
                            l.has(t.cardId) && n.changeTileResId(t.id, d[t.cardId]);
                        });
                    });
                    if (this.isNext()) {
                        e();
                    }
                    else {
                        e({
                            returnType: TraitManager_1.TraitCallbackReturnType.return,
                            isBreak: true
                        });
                    }
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    StaticLevelTrait.prototype.isNext = function () {
        return false;
    };
    StaticLevelTrait.prototype.collectOriginalCardIds = function (t) {
        var e = new Set(), r = new Set(Object.values(f));
        t.forEach(function (t) {
            t.allCards.forEach(function (t) {
                !r.has(t.cardId) && t.resId >= 0 && t.resId <= 33 && e.add(t.cardId);
            });
        });
        return e;
    };
    StaticLevelTrait.traitKey = "StaticLevel";
    __decorate([
        mj.traitEvent("StaticLvTt_isNext")
    ], StaticLevelTrait.prototype, "isNext", null);
    StaticLevelTrait = __decorate([
        mj.trait,
        mj.class("StaticLevelTrait")
    ], StaticLevelTrait);
    return StaticLevelTrait;
}(ExtractTrait_1.default));
exports.default = StaticLevelTrait;

cc._RF.pop();