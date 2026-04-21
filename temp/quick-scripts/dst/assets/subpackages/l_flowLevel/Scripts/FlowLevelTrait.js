
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flowLevel/Scripts/FlowLevelTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7768duhqhGoYxJvSsQQOgM', 'FlowLevelTrait');
// subpackages/l_flowLevel/Scripts/FlowLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FlowLevelGenerator_1 = require("../../../Scripts/FlowLevelGenerator");
var FlowLevelSerializer_1 = require("../../../Scripts/FlowLevelSerializer");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var M = [{
        w: 5,
        h: 7
    }, {
        w: 6,
        h: 8
    }];
var k = false;
var F = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 62, 63];
var B = [{
        offset: 5,
        pairsBonus: 5
    }, {
        offset: 10,
        pairsBonus: 8
    }];
var z = [{
        offset: 5,
        pairsBonus: 5,
        crossDepthRatio: 0.8,
        hamsterCount: 5,
        hamsterDistance: 2
    }, {
        offset: 10,
        pairsBonus: 8,
        crossDepthRatio: 0.8,
        hamsterCount: 5,
        hamsterDistance: 3
    }];
var R = [{
        minPairs: 14,
        maxPairs: 20,
        maxLayers: 2,
        topologyWeights: {
            pyramid: 100
        },
        tiledSizes: [{
                w: 5,
                h: 7
            }],
        bossLevels: B
    }, {
        minPairs: 20,
        maxPairs: 28,
        maxLayers: 2,
        topologyWeights: {
            pyramid: 50,
            multiPeak: 20,
            mirror: 30
        },
        bossLevels: B
    }, {
        minPairs: 24,
        maxPairs: 32,
        maxLayers: 3,
        topologyWeights: {
            pyramid: 40,
            checkerboard: 25,
            mirror: 30,
            spiral: 5
        },
        bossLevels: z
    }, {
        minPairs: 28,
        maxPairs: 38,
        maxLayers: 3,
        topologyWeights: {
            pyramid: 30,
            multiPeak: 20,
            checkerboard: 15,
            mirror: 30,
            spiral: 5
        },
        bossLevels: z
    }, {
        minPairs: 32,
        maxPairs: 42,
        maxLayers: 3,
        topologyWeights: {
            pyramid: 30,
            cross: 2.5,
            multiPeak: 15,
            checkerboard: 15,
            hourglass: 2.5,
            mirror: 30,
            spiral: 5
        },
        bossLevels: z
    }, {
        minPairs: 36,
        maxPairs: 46,
        maxLayers: 4,
        topologyWeights: {
            pyramid: 30,
            cross: 2.5,
            multiPeak: 15,
            checkerboard: 15,
            hourglass: 2.5,
            mirror: 30,
            spiral: 5
        },
        bossLevels: z
    }, {
        minPairs: 40,
        maxPairs: 50,
        maxLayers: 4,
        topologyWeights: {
            pyramid: 30,
            cross: 10,
            multiPeak: 10,
            checkerboard: 5,
            hourglass: 10,
            mirror: 30,
            spiral: 5
        },
        bossLevels: z
    }, {
        minPairs: 44,
        maxPairs: 54,
        maxLayers: 5,
        topologyWeights: {
            pyramid: 30,
            cross: 10,
            multiPeak: 10,
            checkerboard: 5,
            hourglass: 10,
            mirror: 30,
            spiral: 5
        },
        bossLevels: z
    }, {
        minPairs: 48,
        maxPairs: 58,
        maxLayers: 5,
        topologyWeights: {
            pyramid: 30,
            cross: 10,
            multiPeak: 10,
            checkerboard: 5,
            hourglass: 10,
            mirror: 30,
            spiral: 5
        },
        bossLevels: z
    }, {
        minPairs: 52,
        maxPairs: 60,
        maxLayers: 6,
        topologyWeights: {
            pyramid: 30,
            cross: 10,
            multiPeak: 10,
            checkerboard: 5,
            hourglass: 10,
            mirror: 30,
            spiral: 5
        },
        bossLevels: z
    }];
function A(e, t) {
    for (var r, a = Math.max(0, e - 1), o = 0; o < t.length; o++) {
        var i = null !== (r = t[o].levelsInStage) && void 0 !== r ? r : 10;
        if (a < i)
            return {
                stageIdx: o,
                levelInStage: a + 1,
                posInStage: i > 1 ? a / (i - 1) : 0,
                overflow: 0
            };
        a -= i;
    }
    return {
        stageIdx: t.length - 1,
        levelInStage: 0,
        posInStage: 1,
        overflow: a + 1
    };
}
function W(e) {
    var t, r, a;
    if (1 === e.length)
        return e[0];
    var o = e.reduce(function (e, t) {
        var r;
        return e + (null !== (r = t.weight) && void 0 !== r ? r : 1);
    }, 0), i = Math.random() * o;
    try {
        for (var s = __values(e), n = s.next(); !n.done; n = s.next()) {
            var u = n.value;
            if ((i -= null !== (a = u.weight) && void 0 !== a ? a : 1) <= 0)
                return u;
        }
    }
    catch (e) {
        t = {
            error: e
        };
    }
    finally {
        try {
            n && !n.done && (r = s.return) && r.call(s);
        }
        finally {
            if (t)
                throw t.error;
        }
    }
    return e[e.length - 1];
}
function j(e) {
    var t, r, a = e[0];
    try {
        for (var o = __values(e), i = o.next(); !i.done; i = o.next()) {
            var s = i.value;
            s.w * s.h > a.w * a.h && (a = s);
        }
    }
    catch (e) {
        t = {
            error: e
        };
    }
    finally {
        try {
            i && !i.done && (r = o.return) && r.call(o);
        }
        finally {
            if (t)
                throw t.error;
        }
    }
    return a;
}
function G(e, t, r) {
    var a, o, i, l, s, n, u, c, p, h, m, k, B, z, R, A, G, O, N, V, q, U, H, K, J, Q, X, Y, Z, $, ee, te, re, ae, oe, ie, le, se, ne = E.getResolveStage(e, r), ue = ne.stageIdx, ce = ne.levelInStage, pe = ne.posInStage, he = E.getAbilityStage(e);
    if (he >= 0) {
        var me = null !== (a = r[ue = Math.max(0, Math.min(r.length - 1, he))].levelsInStage) && void 0 !== a ? a : 10;
        ce = (e - 1) % me + 1;
        pe = me > 1 ? (ce - 1) / (me - 1) : 0;
    }
    if (ne.overflow > 0 && he < 0) {
        var ve = null !== (o = t.endgame) && void 0 !== o ? o : {
            strategy: "cycle"
        }, de = Math.min(null !== (i = ve.stageCount) && void 0 !== i ? i : 3, r.length), fe = r.length - de;
        if ("random" === ve.strategy) {
            me = null !== (l = r[ue = fe + Math.floor(Math.random() * de)].levelsInStage) && void 0 !== l ? l : 10;
            ce = Math.floor(Math.random() * me) + 1;
            pe = me > 1 ? (ce - 1) / (me - 1) : 0;
        }
        else if ("repeat" === ve.strategy) {
            me = null !== (s = r[ue = r.length - 1].levelsInStage) && void 0 !== s ? s : 10;
            var ge = (ne.overflow - 1) % me;
            ce = ge + 1;
            pe = me > 1 ? ge / (me - 1) : 0;
        }
        else {
            for (var ye = 0, _e = fe; _e < r.length; _e++)
                ye += null !== (n = r[_e].levelsInStage) && void 0 !== n ? n : 10;
            for (ge = (ne.overflow - 1) % ye, _e = fe; _e < r.length; _e++) {
                if (ge < (me = null !== (u = r[_e].levelsInStage) && void 0 !== u ? u : 10)) {
                    ue = _e;
                    ce = ge + 1;
                    pe = me > 1 ? ge / (me - 1) : 0;
                    break;
                }
                ge -= me;
            }
        }
    }
    var we = E.fixLevelStage(e, r, {
        stageIdx: ue,
        levelInStage: ce,
        posInStage: pe
    });
    ue = we.stageIdx;
    ce = we.levelInStage;
    pe = we.posInStage;
    var xe, De = r[ue], Le = r[Math.min(ue + 1, r.length - 1)], Pe = Math.round(De.minPairs + (Le.minPairs - De.minPairs) * pe), be = Math.round(De.maxPairs + (Le.maxPairs - De.maxPairs) * pe), Ce = De.maxLayers, Se = null !== (c = De.puzzleCoreCount) && void 0 !== c ? c : 0, Te = null !== (p = De.hamsterCount) && void 0 !== p ? p : 0, Ie = null !== (h = De.hamsterDistance) && void 0 !== h ? h : 2, Me = De.hamsterDepthBias, ke = null !== (k = null !== (m = De.crossDepthRatio) && void 0 !== m ? m : t.crossDepthRatio) && void 0 !== k ? k : 0.6, Fe = null !== (z = null !== (B = De.crossDepthType) && void 0 !== B ? B : t.crossDepthType) && void 0 !== z ? z : 1, Be = null !== (A = null !== (R = De.crossDepthSpan) && void 0 !== R ? R : t.crossDepthSpan) && void 0 !== A ? A : 1, ze = null !== (O = null !== (G = De.minCardId) && void 0 !== G ? G : t.minCardId) && void 0 !== O ? O : 1, Re = null !== (V = null !== (N = De.maxCardId) && void 0 !== N ? N : t.maxCardId) && void 0 !== V ? V : 63, Ae = null !== (q = De.topologyWeights) && void 0 !== q ? q : t.topologyWeights, We = null !== (U = De.layerDecayExponent) && void 0 !== U ? U : t.layerDecayExponent, je = null !== (H = De.easyPairCount) && void 0 !== H ? H : t.easyPairCount, Ge = null !== (K = De.pairDistanceBias) && void 0 !== K ? K : t.pairDistanceBias, Ee = null !== (J = De.layerAlignMode) && void 0 !== J ? J : t.layerAlignMode, Oe = null !== (Q = De.noFloating) && void 0 !== Q ? Q : t.noFloating, Ne = false;
    if (De.bossLevels) {
        if (xe = De.bossLevels.find(function (e) {
            return e.offset === ce;
        })) {
            Ne = true;
            Pe += qe = null !== (X = xe.pairsBonus) && void 0 !== X ? X : 5;
            be += qe;
            Ce = Math.min(Ce + (null !== (Y = xe.layersBonus) && void 0 !== Y ? Y : 1), 7);
            void 0 !== xe.puzzleCoreCount && (Se = xe.puzzleCoreCount);
            void 0 !== xe.hamsterCount && (Te = xe.hamsterCount);
            void 0 !== xe.hamsterDistance && (Ie = xe.hamsterDistance);
            void 0 !== xe.hamsterDepthBias && (Me = xe.hamsterDepthBias);
            void 0 !== xe.crossDepthRatio && (ke = xe.crossDepthRatio);
            void 0 !== xe.crossDepthType && (Fe = xe.crossDepthType);
            void 0 !== xe.crossDepthSpan && (Be = xe.crossDepthSpan);
            void 0 !== xe.minCardId && (ze = xe.minCardId);
            void 0 !== xe.maxCardId && (Re = xe.maxCardId);
            xe.topologyWeights && (Ae = xe.topologyWeights);
            void 0 !== xe.layerDecayExponent && (We = xe.layerDecayExponent);
            void 0 !== xe.easyPairCount && (je = xe.easyPairCount);
            void 0 !== xe.pairDistanceBias && (Ge = xe.pairDistanceBias);
            void 0 !== xe.layerAlignMode && (Ee = xe.layerAlignMode);
            void 0 !== xe.noFloating && (Oe = xe.noFloating);
        }
    }
    else {
        var Ve = Math.max(1, e);
        if (Ve % 5 == 0) {
            Ne = true;
            var qe, Ue = Ve % 10 == 0;
            Pe += qe = Ue ? null !== (Z = t.bossBonus10) && void 0 !== Z ? Z : 8 : null !== ($ = t.bossBonus5) && void 0 !== $ ? $ : 5;
            be += qe;
            Ce = Math.min(Ce + 1, 7);
            ue >= (null !== (ee = t.bossCrossDepthRatioMinStageIdx) && void 0 !== ee ? ee : 2) && (ke = Ue ? null !== (te = t.bossBonus10CrossDepthRatio) && void 0 !== te ? te : 0.8 : null !== (re = t.bossBonus5CrossDepthRatio) && void 0 !== re ? re : 0.8);
        }
    }
    var He, Ke, Je = null !== (ae = De.tiledSizes) && void 0 !== ae ? ae : M;
    if (Ne && (null == xe ? void 0 : xe.tiledSize)) {
        He = 2 * xe.tiledSize.w;
        Ke = 2 * xe.tiledSize.h;
    }
    else if (Ne) {
        var Qe = j(Je);
        He = 2 * Qe.w;
        Ke = 2 * Qe.h;
    }
    else {
        var Xe = W(Je);
        He = 2 * Xe.w;
        Ke = 2 * Xe.h;
    }
    Pe = Math.max(10, Math.min(90, Pe));
    Ne || (be = Math.max(Pe, Math.min(90, be)));
    var Ye = Math.floor(He / 2), Ze = Math.floor(Ke / 2), $e = j(Je);
    (Ye < $e.w || Ze < $e.h) && be / (Ye * Ze * 0.5) > 0.5 && (Ce += 1);
    return {
        minPairs: Pe,
        maxPairs: be,
        totalPairs: 0,
        boardWidth: He,
        boardHeight: Ke,
        maxLayers: Ce = Math.max(2, Math.min(7, Ce)),
        minCardId: ze,
        maxCardId: Re,
        puzzleCoreCount: Se,
        hamsterCount: Te,
        hamsterDistance: Ie,
        hamsterDepthBias: Me,
        topologyWeights: Ae,
        crossDepthRatio: ke,
        crossDepthType: Fe,
        crossDepthSpan: Be,
        maxAttempts: De.maxAttempts,
        bufferSize: null !== (ie = null !== (oe = De.bufferSize) && void 0 !== oe ? oe : t.bufferSize) && void 0 !== ie ? ie : 4,
        excludedCardIds: null !== (se = null !== (le = De.excludedCardIds) && void 0 !== le ? le : t.excludedCardIds) && void 0 !== se ? se : F,
        layerDecayExponent: We,
        easyPairCount: je,
        pairDistanceBias: Ge,
        layerAlignMode: Ee,
        noFloating: Oe
    };
}
var E = /** @class */ (function () {
    function E() {
    }
    E.getAbilityStage = function () {
        return -1;
    };
    E.getResolveStage = function (e, t) {
        return A(e, t);
    };
    E.fixLevelStage = function (e, t, r) {
        return r;
    };
    __decorate([
        mj.traitEvent("FlwLv_getAbilStg")
    ], E, "getAbilityStage", null);
    __decorate([
        mj.traitEvent("FlwLv_getResolveStg")
    ], E, "getResolveStage", null);
    __decorate([
        mj.traitEvent("FlwLv_fixLevelStage")
    ], E, "fixLevelStage", null);
    E = __decorate([
        mj.class("FlowLevelHook")
    ], E);
    return E;
}());
var FlowLevelTrait = /** @class */ (function (_super) {
    __extends(FlowLevelTrait, _super);
    function FlowLevelTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._usedFlowLevel = false;
        _this._generateCount = 0;
        _this._stageTable = null;
        _this._precomputeGen = null;
        _this._precomputeLevelId = 0;
        _this._precomputeTimer = null;
        _this._precomputeStartTime = 0;
        return _this;
    }
    FlowLevelTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._stageTable = this._traitData.stageTable || R;
        var t = this.localData.flowCacheLv || 0, r = this._getCurrentLevelId(), a = this._hasLevelData() ? r + 1 : r;
        1 == a && (a = 2);
        a > 0 && (t === a || t && this._clearCache());
    };
    FlowLevelTrait.prototype._getCurrentLevelId = function () {
        try {
            return UserModel_1.default.getInstance().normalData.getLevelId() || 0;
        }
        catch (e) {
            return 0;
        }
    };
    FlowLevelTrait.prototype._hasLevelData = function () {
        try {
            var e = UserModel_1.default.getInstance().normalData.getOriginalLevelDataWithCardId();
            return !!(e && e.length > 0);
        }
        catch (e) {
            return false;
        }
    };
    FlowLevelTrait.prototype.onExtNormLv_getContent = function (e, t) {
        var r = e.args[0];
        if (r.gameType === GameTypeEnums_1.MjGameType.Normal) {
            var a = r.levelID || 1, o = this._tryGetCache(a);
            if (o) {
                this._usedFlowLevel = true;
                this._generateCount++;
                this._clearCache();
                this._delayedPrecompute(a + 1);
            }
            else {
                this._generateCount++;
                this._usedFlowLevel = true;
                o = this._generatorSync(a);
                this._delayedPrecompute(a + 1);
            }
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: Promise.resolve([o, 50, "FlowLevel_" + a, "FlowLevel", "心流"])
            });
        }
        else
            t();
    };
    FlowLevelTrait.prototype.onT2DynStr_isDyn = function (e, t) {
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: true
        });
    };
    FlowLevelTrait.prototype.onT2DynStr_extract = function (e, t) {
        var r = e.args[0].gameData.getLevelId() || 1, a = this._generateBufferSync(r);
        if (a) {
            this._generateCount++;
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: Promise.resolve({
                    content: a,
                    index: "FlowLevel_" + r,
                    libName: "FlowLevel"
                })
            });
        }
        else
            t();
    };
    FlowLevelTrait.prototype._tryGetCache = function (e) {
        var t = this.localData.flowCacheLv, r = this.localData.flowCacheStr;
        if (t === e && r && r.length > 0)
            return r;
        t && t !== e && this._clearCache();
        return null;
    };
    FlowLevelTrait.prototype._clearCache = function () {
        this.localData.flowCacheLv = 0;
        this.localData.flowCacheStr = "";
    };
    FlowLevelTrait.prototype._saveCache = function (e, t) {
        this.localData.flowCacheLv = e;
        this.localData.flowCacheStr = t;
    };
    FlowLevelTrait.prototype._delayedPrecompute = function (e) {
        var t = this;
        this._stopPrecompute();
        var r = this._traitData.precomputeDelayMs || 5000;
        this._precomputeTimer = setTimeout(function () {
            t._precomputeTimer = null;
            t._startPrecompute(e);
        }, r);
    };
    FlowLevelTrait.prototype._startPrecompute = function (e) {
        this._stopPrecompute();
        var t = CommonUtils_1.getRandomNum(1, 100000), r = G(e, this._traitData, this._stageTable), a = new FlowLevelGenerator_1.FlowLevelGenerator(r, t), o = r.maxAttempts || this._traitData.asyncMaxAttempts || 50;
        this._precomputeLevelId = e;
        this._precomputeGen = a.generateAndValidateAsync(o);
        this._precomputeStartTime = Date.now();
        this._scheduleNextTick();
    };
    FlowLevelTrait.prototype._stopPrecompute = function () {
        if (null !== this._precomputeTimer) {
            clearTimeout(this._precomputeTimer);
            this._precomputeTimer = null;
        }
        this._precomputeGen = null;
        this._precomputeLevelId = 0;
        k = false;
    };
    FlowLevelTrait.prototype._generateBufferSync = function (e) {
        var t = CommonUtils_1.getRandomNum(1, 100000), r = G(e, this._traitData, this._stageTable), a = new FlowLevelGenerator_1.FlowLevelGenerator(r, t), o = (Date.now(), a.generateAndValidateBuffer(2));
        Date.now();
        return o && o.tiles && o.solvable ? FlowLevelSerializer_1.FlowLevelSerializer.serialize(o.tiles) : null;
    };
    FlowLevelTrait.prototype._generatorSync = function (e) {
        this._stopPrecompute();
        var t = CommonUtils_1.getRandomNum(1, 100000), r = G(e, this._traitData, this._stageTable), a = new FlowLevelGenerator_1.FlowLevelGenerator(r, t), o = (Date.now(), a.generateAndValidate(1)), i = o.tiles;
        o.solvable, o.attempt, Date.now();
        return FlowLevelSerializer_1.FlowLevelSerializer.serialize(i);
    };
    FlowLevelTrait.prototype._scheduleNextTick = function () {
        var e = this;
        this._precomputeTimer = setTimeout(function () {
            e._precomputeTimer = null;
            e._tickPrecompute();
        }, 0);
    };
    FlowLevelTrait.prototype._tickPrecompute = function () {
        var e = this._precomputeGen;
        if (e) {
            var t = this._traitData.frameBudgetMs || 10;
            if (1 / cc.director.getDeltaTime() < 20) {
                k || (k = true);
                t *= 0.5;
            }
            for (var r = Date.now(); Date.now() - r < t;) {
                var a = e.next();
                if (a.done) {
                    var o = a.value, i = o.tiles, l = (o.solvable, o.attempt, FlowLevelSerializer_1.FlowLevelSerializer.serialize(i));
                    this._saveCache(this._precomputeLevelId, l);
                    Date.now(), this._precomputeStartTime;
                    this._precomputeGen = null;
                    this._precomputeLevelId = 0;
                    return;
                }
            }
            this._scheduleNextTick();
        }
    };
    FlowLevelTrait.traitKey = "FlowLevel";
    FlowLevelTrait = __decorate([
        mj.trait,
        mj.class("FlowLevelTrait")
    ], FlowLevelTrait);
    return FlowLevelTrait;
}(Trait_1.default));
exports.default = FlowLevelTrait;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Zsb3dMZXZlbC9TY3JpcHRzL0Zsb3dMZXZlbFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLDBFQUF5RTtBQUN6RSw0RUFBMkU7QUFDM0Usd0ZBQW9GO0FBQ3BGLHNFQUFpRTtBQUNqRSw0RUFBNEU7QUFDNUUsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNQLENBQUMsRUFBRSxDQUFDO1FBQ0osQ0FBQyxFQUFFLENBQUM7S0FDTCxFQUFFO1FBQ0QsQ0FBQyxFQUFFLENBQUM7UUFDSixDQUFDLEVBQUUsQ0FBQztLQUNMLENBQUMsQ0FBQztBQUNILElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3RixJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ1AsTUFBTSxFQUFFLENBQUM7UUFDVCxVQUFVLEVBQUUsQ0FBQztLQUNkLEVBQUU7UUFDRCxNQUFNLEVBQUUsRUFBRTtRQUNWLFVBQVUsRUFBRSxDQUFDO0tBQ2QsQ0FBQyxDQUFDO0FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNQLE1BQU0sRUFBRSxDQUFDO1FBQ1QsVUFBVSxFQUFFLENBQUM7UUFDYixlQUFlLEVBQUUsR0FBRztRQUNwQixZQUFZLEVBQUUsQ0FBQztRQUNmLGVBQWUsRUFBRSxDQUFDO0tBQ25CLEVBQUU7UUFDRCxNQUFNLEVBQUUsRUFB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RixFQUFFLEVBQ0YsRUFBRSxFQUNGLEVBQUUsRUFDRixFQUFFLEVBQ0YsRUFBRSxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM1QixFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFDaEIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQ3BCLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxFQUNsQixFQUFFLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7UUFDWCxJQUFJLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQy9HLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3ZDO0lBQ0QsSUFBSSxFQUFFLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1FBQzdCLElBQUksRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BELFFBQVEsRUFBRSxPQUFPO1NBQ2xCLEVBQ0QsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFDN0UsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksUUFBUSxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdkcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QzthQUFNLElBQUksUUFBUSxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDbkMsRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNoRixJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1osRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxLQUFLLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRTtnQkFBRSxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pILEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRTtnQkFDOUQsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQzNFLEVBQUUsR0FBRyxFQUFFLENBQUM7b0JBQ1IsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ1osRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxNQUFNO2lCQUNQO2dCQUNELEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDVjtTQUNGO0tBQ0Y7SUFDRCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDN0IsUUFBUSxFQUFFLEVBQUU7UUFDWixZQUFZLEVBQUUsRUFBRTtRQUNoQixVQUFVLEVBQUUsRUFBRTtLQUNmLENBQUMsQ0FBQztJQUNILEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO0lBQ2pCLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQ3JCLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO0lBQ25CLElBQUksRUFBRSxFQUNKLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ1YsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUN0QyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQy9ELEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsRUFDL0QsRUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQ2pCLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzlELEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzNELEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzlELEVBQUUsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLEVBQ3hCLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ3ZILEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ25ILEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ25ILEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pHLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQzFHLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUM5RSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQ3BGLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJ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RUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztLQUN6QjtTQUFNLElBQUksRUFBRSxFQUFFO1FBQ2IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2QsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2Y7U0FBTTtRQUNMLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNkLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNmO0lBQ0QsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDekIsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUN2QixFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BF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RUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHO2dCQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTtvQkFDVixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNYLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSx5Q0FBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO29CQUM1QixPQUFPO2lCQUNSO2FBQ0Y7WUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFuS00sdUJBQVEsR0FBRyxXQUFXLENBQUM7SUFSWCxjQUFjO1FBRmxDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztPQUNOLGNBQWMsQ0E0S2xDO0lBQUQscUJBQUM7Q0E1S0QsQUE0S0MsQ0E1SzJDLGVBQUssR0E0S2hEO2tCQTVLb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgeyBGbG93TGV2ZWxHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0Zsb3dMZXZlbEdlbmVyYXRvcic7XG5pbXBvcnQgeyBGbG93TGV2ZWxTZXJpYWxpemVyIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9GbG93TGV2ZWxTZXJpYWxpemVyJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IGdldFJhbmRvbU51bSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3V0aWxzL0NvbW1vblV0aWxzJztcbnZhciBNID0gW3tcbiAgdzogNSxcbiAgaDogN1xufSwge1xuICB3OiA2LFxuICBoOiA4XG59XTtcbnZhciBrID0gZmFsc2U7XG52YXIgRiA9IFszNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNDIsIDQzLCA0NCwgNDUsIDQ2LCA0NywgNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNjIsIDYzXTtcbnZhciBCID0gW3tcbiAgb2Zmc2V0OiA1LFxuICBwYWlyc0JvbnVzOiA1XG59LCB7XG4gIG9mZnNldDogMTAsXG4gIHBhaXJzQm9udXM6IDhcbn1dO1xudmFyIHogPSBbe1xuICBvZmZzZXQ6IDUsXG4gIHBhaXJzQm9udXM6IDUsXG4gIGNyb3NzRGVwdGhSYXRpbzogMC44LFxuICBoYW1zdGVyQ291bnQ6IDUsXG4gIGhhbXN0ZXJEaXN0YW5jZTogMlxufSwge1xuICBvZmZzZXQ6IDEwLFxuICBwYWlyc0JvbnVzOiA4LFxuICBjcm9zc0RlcHRoUmF0aW86IDAuOCxcbiAgaGFtc3RlckNvdW50OiA1LFxuICBoYW1zdGVyRGlzdGFuY2U6IDNcbn1dO1xudmFyIFIgPSBbe1xuICBtaW5QYWlyczogMTQsXG4gIG1heFBhaXJzOiAyMCxcbiAgbWF4TGF5ZXJzOiAyLFxuICB0b3BvbG9neVdlaWdodHM6IHtcbiAgICBweXJhbWlkOiAxMDBcbiAgfSxcbiAgdGlsZWRTaXplczogW3tcbiAgICB3OiA1LFxuICAgIGg6IDdcbiAgfV0sXG4gIGJvc3NMZXZlbHM6IEJcbn0sIHtcbiAgbWluUGFpcnM6IDIwLFxuICBtYXhQYWlyczogMjgsXG4gIG1heExheWVyczogMixcbiAgdG9wb2xvZ3lXZWlnaHRzOiB7XG4gICAgcHlyYW1pZDogNTAsXG4gICAgbXVsdGlQZWFrOiAyMCxcbiAgICBtaXJyb3I6IDMwXG4gIH0sXG4gIGJvc3NMZXZlbHM6IEJcbn0sIHtcbiAgbWluUGFpcnM6IDI0LFxuICBtYXhQYWlyczogMzIsXG4gIG1heExheWVyczogMyxcbiAgdG9wb2xvZ3lXZWlnaHRzOiB7XG4gICAgcHlyYW1pZDogNDAsXG4gICAgY2hlY2tlcmJvYXJkOiAyNSxcbiAgICBtaXJyb3I6IDMwLFxuICAgIHNwaXJhbDogNVxuICB9LFxuICBib3NzTGV2ZWxzOiB6XG59LCB7XG4gIG1pblBhaXJzOiAyOCxcbiAgbWF4UGFpcnM6IDM4LFxuICBtYXhMYXllcnM6IDMsXG4gIHRvcG9sb2d5V2VpZ2h0czoge1xuICAgIHB5cmFtaWQ6IDMwLFxuICAgIG11bHRpUGVhazogMjAsXG4gICAgY2hlY2tlcmJvYXJkOiAxNSxcbiAgICBtaXJyb3I6IDMwLFxuICAgIHNwaXJhbDogNVxuICB9LFxuICBib3NzTGV2ZWxzOiB6XG59LCB7XG4gIG1pblBhaXJzOiAzMixcbiAgbWF4UGFpcnM6IDQyLFxuICBtYXhMYXllcnM6IDMsXG4gIHRvcG9sb2d5V2VpZ2h0czoge1xuICAgIHB5cmFtaWQ6IDMwLFxuICAgIGNyb3NzOiAyLjUsXG4gICAgbXVsdGlQZWFrOiAxNSxcbiAgICBjaGVja2VyYm9hcmQ6IDE1LFxuICAgIGhvdXJnbGFzczogMi41LFxuICAgIG1pcnJvcjogMzAsXG4gICAgc3BpcmFsOiA1XG4gIH0sXG4gIGJvc3NMZXZlbHM6IHpcbn0sIHtcbiAgbWluUGFpcnM6IDM2LFxuICBtYXhQYWlyczogNDYsXG4gIG1heExheWVyczogNCxcbiAgdG9wb2xvZ3lXZWlnaHRzOiB7XG4gICAgcHlyYW1pZDogMzAsXG4gICAgY3Jvc3M6IDIuNSxcbiAgICBtdWx0aVBlYWs6IDE1LFxuICAgIGNoZWNrZXJib2FyZDogMTUsXG4gICAgaG91cmdsYXNzOiAyLjUsXG4gICAgbWlycm9yOiAzMCxcbiAgICBzcGlyYWw6IDVcbiAgfSxcbiAgYm9zc0xldmVsczogelxufSwge1xuICBtaW5QYWlyczogNDAsXG4gIG1heFBhaXJzOiA1MCxcbiAgbWF4TGF5ZXJzOiA0LFxuICB0b3BvbG9neVdlaWdodHM6IHtcbiAgICBweXJhbWlkOiAzMCxcbiAgICBjcm9zczogMTAsXG4gICAgbXVsdGlQZWFrOiAxMCxcbiAgICBjaGVja2VyYm9hcmQ6IDUsXG4gICAgaG91cmdsYXNzOiAxMCxcbiAgICBtaXJyb3I6IDMwLFxuICAgIHNwaXJhbDogNVxuICB9LFxuICBib3NzTGV2ZWxzOiB6XG59LCB7XG4gIG1pblBhaXJzOiA0NCxcbiAgbWF4UGFpcnM6IDU0LFxuICBtYXhMYXllcnM6IDUsXG4gIHRvcG9sb2d5V2VpZ2h0czoge1xuICAgIHB5cmFtaWQ6IDMwLFxuICAgIGNyb3NzOiAxMCxcbiAgICBtdWx0aVBlYWs6IDEwLFxuICAgIGNoZWNrZXJib2FyZDogNSxcbiAgICBob3VyZ2xhc3M6IDEwLFxuICAgIG1pcnJvcjogMzAsXG4gICAgc3BpcmFsOiA1XG4gIH0sXG4gIGJvc3NMZXZlbHM6IHpcbn0sIHtcbiAgbWluUGFpcnM6IDQ4LFxuICBtYXhQYWlyczogNTgsXG4gIG1heExheWVyczogNSxcbiAgdG9wb2xvZ3lXZWlnaHRzOiB7XG4gICAgcHlyYW1pZDogMzAsXG4gICAgY3Jvc3M6IDEwLFxuICAgIG11bHRpUGVhazogMTAsXG4gICAgY2hlY2tlcmJvYXJkOiA1LFxuICAgIGhvdXJnbGFzczogMTAsXG4gICAgbWlycm9yOiAzMCxcbiAgICBzcGlyYWw6IDVcbiAgfSxcbiAgYm9zc0xldmVsczogelxufSwge1xuICBtaW5QYWlyczogNTIsXG4gIG1heFBhaXJzOiA2MCxcbiAgbWF4TGF5ZXJzOiA2LFxuICB0b3BvbG9neVdlaWdodHM6IHtcbiAgICBweXJhbWlkOiAzMCxcbiAgICBjcm9zczogMTAsXG4gICAgbXVsdGlQZWFrOiAxMCxcbiAgICBjaGVja2VyYm9hcmQ6IDUsXG4gICAgaG91cmdsYXNzOiAxMCxcbiAgICBtaXJyb3I6IDMwLFxuICAgIHNwaXJhbDogNVxuICB9LFxuICBib3NzTGV2ZWxzOiB6XG59XTtcbmZ1bmN0aW9uIEEoZSwgdCkge1xuICBmb3IgKHZhciByLCBhID0gTWF0aC5tYXgoMCwgZSAtIDEpLCBvID0gMDsgbyA8IHQubGVuZ3RoOyBvKyspIHtcbiAgICB2YXIgaSA9IG51bGwgIT09IChyID0gdFtvXS5sZXZlbHNJblN0YWdlKSAmJiB2b2lkIDAgIT09IHIgPyByIDogMTA7XG4gICAgaWYgKGEgPCBpKSByZXR1cm4ge1xuICAgICAgc3RhZ2VJZHg6IG8sXG4gICAgICBsZXZlbEluU3RhZ2U6IGEgKyAxLFxuICAgICAgcG9zSW5TdGFnZTogaSA+IDEgPyBhIC8gKGkgLSAxKSA6IDAsXG4gICAgICBvdmVyZmxvdzogMFxuICAgIH07XG4gICAgYSAtPSBpO1xuICB9XG4gIHJldHVybiB7XG4gICAgc3RhZ2VJZHg6IHQubGVuZ3RoIC0gMSxcbiAgICBsZXZlbEluU3RhZ2U6IDAsXG4gICAgcG9zSW5TdGFnZTogMSxcbiAgICBvdmVyZmxvdzogYSArIDFcbiAgfTtcbn1cbmZ1bmN0aW9uIFcoZSkge1xuICB2YXIgdCwgciwgYTtcbiAgaWYgKDEgPT09IGUubGVuZ3RoKSByZXR1cm4gZVswXTtcbiAgdmFyIG8gPSBlLnJlZHVjZShmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgdmFyIHI7XG4gICAgICByZXR1cm4gZSArIChudWxsICE9PSAociA9IHQud2VpZ2h0KSAmJiB2b2lkIDAgIT09IHIgPyByIDogMSk7XG4gICAgfSwgMCksXG4gICAgaSA9IE1hdGgucmFuZG9tKCkgKiBvO1xuICB0cnkge1xuICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhlKSwgbiA9IHMubmV4dCgpOyAhbi5kb25lOyBuID0gcy5uZXh0KCkpIHtcbiAgICAgIHZhciB1ID0gbi52YWx1ZTtcbiAgICAgIGlmICgoaSAtPSBudWxsICE9PSAoYSA9IHUud2VpZ2h0KSAmJiB2b2lkIDAgIT09IGEgPyBhIDogMSkgPD0gMCkgcmV0dXJuIHU7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgdCA9IHtcbiAgICAgIGVycm9yOiBlXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgbiAmJiAhbi5kb25lICYmIChyID0gcy5yZXR1cm4pICYmIHIuY2FsbChzKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgfVxuICB9XG4gIHJldHVybiBlW2UubGVuZ3RoIC0gMV07XG59XG5mdW5jdGlvbiBqKGUpIHtcbiAgdmFyIHQsXG4gICAgcixcbiAgICBhID0gZVswXTtcbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBvID0gX192YWx1ZXMoZSksIGkgPSBvLm5leHQoKTsgIWkuZG9uZTsgaSA9IG8ubmV4dCgpKSB7XG4gICAgICB2YXIgcyA9IGkudmFsdWU7XG4gICAgICBzLncgKiBzLmggPiBhLncgKiBhLmggJiYgKGEgPSBzKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0ID0ge1xuICAgICAgZXJyb3I6IGVcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpICYmICFpLmRvbmUgJiYgKHIgPSBvLnJldHVybikgJiYgci5jYWxsKG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGE7XG59XG5mdW5jdGlvbiBHKGUsIHQsIHIpIHtcbiAgdmFyIGEsXG4gICAgbyxcbiAgICBpLFxuICAgIGwsXG4gICAgcyxcbiAgICBuLFxuICAgIHUsXG4gICAgYyxcbiAgICBwLFxuICAgIGgsXG4gICAgbSxcbiAgICBrLFxuICAgIEIsXG4gICAgeixcbiAgICBSLFxuICAgIEEsXG4gICAgRyxcbiAgICBPLFxuICAgIE4sXG4gICAgVixcbiAgICBxLFxuICAgIFUsXG4gICAgSCxcbiAgICBLLFxuICAgIEosXG4gICAgUSxcbiAgICBYLFxuICAgIFksXG4gICAgWixcbiAgICAkLFxuICAgIGVlLFxuICAgIHRlLFxuICAgIHJlLFxuICAgIGFlLFxuICAgIG9lLFxuICAgIGllLFxuICAgIGxlLFxuICAgIHNlLFxuICAgIG5lID0gRS5nZXRSZXNvbHZlU3RhZ2UoZSwgciksXG4gICAgdWUgPSBuZS5zdGFnZUlkeCxcbiAgICBjZSA9IG5lLmxldmVsSW5TdGFnZSxcbiAgICBwZSA9IG5lLnBvc0luU3RhZ2UsXG4gICAgaGUgPSBFLmdldEFiaWxpdHlTdGFnZShlKTtcbiAgaWYgKGhlID49IDApIHtcbiAgICB2YXIgbWUgPSBudWxsICE9PSAoYSA9IHJbdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihyLmxlbmd0aCAtIDEsIGhlKSldLmxldmVsc0luU3RhZ2UpICYmIHZvaWQgMCAhPT0gYSA/IGEgOiAxMDtcbiAgICBjZSA9IChlIC0gMSkgJSBtZSArIDE7XG4gICAgcGUgPSBtZSA+IDEgPyAoY2UgLSAxKSAvIChtZSAtIDEpIDogMDtcbiAgfVxuICBpZiAobmUub3ZlcmZsb3cgPiAwICYmIGhlIDwgMCkge1xuICAgIHZhciB2ZSA9IG51bGwgIT09IChvID0gdC5lbmRnYW1lKSAmJiB2b2lkIDAgIT09IG8gPyBvIDoge1xuICAgICAgICBzdHJhdGVneTogXCJjeWNsZVwiXG4gICAgICB9LFxuICAgICAgZGUgPSBNYXRoLm1pbihudWxsICE9PSAoaSA9IHZlLnN0YWdlQ291bnQpICYmIHZvaWQgMCAhPT0gaSA/IGkgOiAzLCByLmxlbmd0aCksXG4gICAgICBmZSA9IHIubGVuZ3RoIC0gZGU7XG4gICAgaWYgKFwicmFuZG9tXCIgPT09IHZlLnN0cmF0ZWd5KSB7XG4gICAgICBtZSA9IG51bGwgIT09IChsID0gclt1ZSA9IGZlICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGUpXS5sZXZlbHNJblN0YWdlKSAmJiB2b2lkIDAgIT09IGwgPyBsIDogMTA7XG4gICAgICBjZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1lKSArIDE7XG4gICAgICBwZSA9IG1lID4gMSA/IChjZSAtIDEpIC8gKG1lIC0gMSkgOiAwO1xuICAgIH0gZWxzZSBpZiAoXCJyZXBlYXRcIiA9PT0gdmUuc3RyYXRlZ3kpIHtcbiAgICAgIG1lID0gbnVsbCAhPT0gKHMgPSByW3VlID0gci5sZW5ndGggLSAxXS5sZXZlbHNJblN0YWdlKSAmJiB2b2lkIDAgIT09IHMgPyBzIDogMTA7XG4gICAgICB2YXIgZ2UgPSAobmUub3ZlcmZsb3cgLSAxKSAlIG1lO1xuICAgICAgY2UgPSBnZSArIDE7XG4gICAgICBwZSA9IG1lID4gMSA/IGdlIC8gKG1lIC0gMSkgOiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciB5ZSA9IDAsIF9lID0gZmU7IF9lIDwgci5sZW5ndGg7IF9lKyspIHllICs9IG51bGwgIT09IChuID0gcltfZV0ubGV2ZWxzSW5TdGFnZSkgJiYgdm9pZCAwICE9PSBuID8gbiA6IDEwO1xuICAgICAgZm9yIChnZSA9IChuZS5vdmVyZmxvdyAtIDEpICUgeWUsIF9lID0gZmU7IF9lIDwgci5sZW5ndGg7IF9lKyspIHtcbiAgICAgICAgaWYgKGdlIDwgKG1lID0gbnVsbCAhPT0gKHUgPSByW19lXS5sZXZlbHNJblN0YWdlKSAmJiB2b2lkIDAgIT09IHUgPyB1IDogMTApKSB7XG4gICAgICAgICAgdWUgPSBfZTtcbiAgICAgICAgICBjZSA9IGdlICsgMTtcbiAgICAgICAgICBwZSA9IG1lID4gMSA/IGdlIC8gKG1lIC0gMSkgOiAwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGdlIC09IG1lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgd2UgPSBFLmZpeExldmVsU3RhZ2UoZSwgciwge1xuICAgIHN0YWdlSWR4OiB1ZSxcbiAgICBsZXZlbEluU3RhZ2U6IGNlLFxuICAgIHBvc0luU3RhZ2U6IHBlXG4gIH0pO1xuICB1ZSA9IHdlLnN0YWdlSWR4O1xuICBjZSA9IHdlLmxldmVsSW5TdGFnZTtcbiAgcGUgPSB3ZS5wb3NJblN0YWdlO1xuICB2YXIgeGUsXG4gICAgRGUgPSByW3VlXSxcbiAgICBMZSA9IHJbTWF0aC5taW4odWUgKyAxLCByLmxlbmd0aCAtIDEpXSxcbiAgICBQZSA9IE1hdGgucm91bmQoRGUubWluUGFpcnMgKyAoTGUubWluUGFpcnMgLSBEZS5taW5QYWlycykgKiBwZSksXG4gICAgYmUgPSBNYXRoLnJvdW5kKERlLm1heFBhaXJzICsgKExlLm1heFBhaXJzIC0gRGUubWF4UGFpcnMpICogcGUpLFxuICAgIENlID0gRGUubWF4TGF5ZXJzLFxuICAgIFNlID0gbnVsbCAhPT0gKGMgPSBEZS5wdXp6bGVDb3JlQ291bnQpICYmIHZvaWQgMCAhPT0gYyA/IGMgOiAwLFxuICAgIFRlID0gbnVsbCAhPT0gKHAgPSBEZS5oYW1zdGVyQ291bnQpICYmIHZvaWQgMCAhPT0gcCA/IHAgOiAwLFxuICAgIEllID0gbnVsbCAhPT0gKGggPSBEZS5oYW1zdGVyRGlzdGFuY2UpICYmIHZvaWQgMCAhPT0gaCA/IGggOiAyLFxuICAgIE1lID0gRGUuaGFtc3RlckRlcHRoQmlhcyxcbiAgICBrZSA9IG51bGwgIT09IChrID0gbnVsbCAhPT0gKG0gPSBEZS5jcm9zc0RlcHRoUmF0aW8pICYmIHZvaWQgMCAhPT0gbSA/IG0gOiB0LmNyb3NzRGVwdGhSYXRpbykgJiYgdm9pZCAwICE9PSBrID8gayA6IDAuNixcbiAgICBGZSA9IG51bGwgIT09ICh6ID0gbnVsbCAhPT0gKEIgPSBEZS5jcm9zc0RlcHRoVHlwZSkgJiYgdm9pZCAwICE9PSBCID8gQiA6IHQuY3Jvc3NEZXB0aFR5cGUpICYmIHZvaWQgMCAhPT0geiA/IHogOiAxLFxuICAgIEJlID0gbnVsbCAhPT0gKEEgPSBudWxsICE9PSAoUiA9IERlLmNyb3NzRGVwdGhTcGFuKSAmJiB2b2lkIDAgIT09IFIgPyBSIDogdC5jcm9zc0RlcHRoU3BhbikgJiYgdm9pZCAwICE9PSBBID8gQSA6IDEsXG4gICAgemUgPSBudWxsICE9PSAoTyA9IG51bGwgIT09IChHID0gRGUubWluQ2FyZElkKSAmJiB2b2lkIDAgIT09IEcgPyBHIDogdC5taW5DYXJkSWQpICYmIHZvaWQgMCAhPT0gTyA/IE8gOiAxLFxuICAgIFJlID0gbnVsbCAhPT0gKFYgPSBudWxsICE9PSAoTiA9IERlLm1heENhcmRJZCkgJiYgdm9pZCAwICE9PSBOID8gTiA6IHQubWF4Q2FyZElkKSAmJiB2b2lkIDAgIT09IFYgPyBWIDogNjMsXG4gICAgQWUgPSBudWxsICE9PSAocSA9IERlLnRvcG9sb2d5V2VpZ2h0cykgJiYgdm9pZCAwICE9PSBxID8gcSA6IHQudG9wb2xvZ3lXZWlnaHRzLFxuICAgIFdlID0gbnVsbCAhPT0gKFUgPSBEZS5sYXllckRlY2F5RXhwb25lbnQpICYmIHZvaWQgMCAhPT0gVSA/IFUgOiB0LmxheWVyRGVjYXlFeHBvbmVudCxcbiAgICBqZSA9IG51bGwgIT09IChIID0gRGUuZWFzeVBhaXJDb3VudCkgJiYgdm9pZCAwICE9PSBIID8gSCA6IHQuZWFzeVBhaXJDb3VudCxcbiAgICBHZSA9IG51bGwgIT09IChLID0gRGUucGFpckRpc3RhbmNlQmlhcykgJiYgdm9pZCAwICE9PSBLID8gSyA6IHQucGFpckRpc3RhbmNlQmlhcyxcbiAgICBFZSA9IG51bGwgIT09IChKID0gRGUubGF5ZXJBbGlnbk1vZGUpICYmIHZvaWQgMCAhPT0gSiA/IEogOiB0LmxheWVyQWxpZ25Nb2RlLFxuICAgIE9lID0gbnVsbCAhPT0gKFEgPSBEZS5ub0Zsb2F0aW5nKSAmJiB2b2lkIDAgIT09IFEgPyBRIDogdC5ub0Zsb2F0aW5nLFxuICAgIE5lID0gZmFsc2U7XG4gIGlmIChEZS5ib3NzTGV2ZWxzKSB7XG4gICAgaWYgKHhlID0gRGUuYm9zc0xldmVscy5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5vZmZzZXQgPT09IGNlO1xuICAgIH0pKSB7XG4gICAgICBOZSA9IHRydWU7XG4gICAgICBQZSArPSBxZSA9IG51bGwgIT09IChYID0geGUucGFpcnNCb251cykgJiYgdm9pZCAwICE9PSBYID8gWCA6IDU7XG4gICAgICBiZSArPSBxZTtcbiAgICAgIENlID0gTWF0aC5taW4oQ2UgKyAobnVsbCAhPT0gKFkgPSB4ZS5sYXllcnNCb251cykgJiYgdm9pZCAwICE9PSBZID8gWSA6IDEpLCA3KTtcbiAgICAgIHZvaWQgMCAhPT0geGUucHV6emxlQ29yZUNvdW50ICYmIChTZSA9IHhlLnB1enpsZUNvcmVDb3VudCk7XG4gICAgICB2b2lkIDAgIT09IHhlLmhhbXN0ZXJDb3VudCAmJiAoVGUgPSB4ZS5oYW1zdGVyQ291bnQpO1xuICAgICAgdm9pZCAwICE9PSB4ZS5oYW1zdGVyRGlzdGFuY2UgJiYgKEllID0geGUuaGFtc3RlckRpc3RhbmNlKTtcbiAgICAgIHZvaWQgMCAhPT0geGUuaGFtc3RlckRlcHRoQmlhcyAmJiAoTWUgPSB4ZS5oYW1zdGVyRGVwdGhCaWFzKTtcbiAgICAgIHZvaWQgMCAhPT0geGUuY3Jvc3NEZXB0aFJhdGlvICYmIChrZSA9IHhlLmNyb3NzRGVwdGhSYXRpbyk7XG4gICAgICB2b2lkIDAgIT09IHhlLmNyb3NzRGVwdGhUeXBlICYmIChGZSA9IHhlLmNyb3NzRGVwdGhUeXBlKTtcbiAgICAgIHZvaWQgMCAhPT0geGUuY3Jvc3NEZXB0aFNwYW4gJiYgKEJlID0geGUuY3Jvc3NEZXB0aFNwYW4pO1xuICAgICAgdm9pZCAwICE9PSB4ZS5taW5DYXJkSWQgJiYgKHplID0geGUubWluQ2FyZElkKTtcbiAgICAgIHZvaWQgMCAhPT0geGUubWF4Q2FyZElkICYmIChSZSA9IHhlLm1heENhcmRJZCk7XG4gICAgICB4ZS50b3BvbG9neVdlaWdodHMgJiYgKEFlID0geGUudG9wb2xvZ3lXZWlnaHRzKTtcbiAgICAgIHZvaWQgMCAhPT0geGUubGF5ZXJEZWNheUV4cG9uZW50ICYmIChXZSA9IHhlLmxheWVyRGVjYXlFeHBvbmVudCk7XG4gICAgICB2b2lkIDAgIT09IHhlLmVhc3lQYWlyQ291bnQgJiYgKGplID0geGUuZWFzeVBhaXJDb3VudCk7XG4gICAgICB2b2lkIDAgIT09IHhlLnBhaXJEaXN0YW5jZUJpYXMgJiYgKEdlID0geGUucGFpckRpc3RhbmNlQmlhcyk7XG4gICAgICB2b2lkIDAgIT09IHhlLmxheWVyQWxpZ25Nb2RlICYmIChFZSA9IHhlLmxheWVyQWxpZ25Nb2RlKTtcbiAgICAgIHZvaWQgMCAhPT0geGUubm9GbG9hdGluZyAmJiAoT2UgPSB4ZS5ub0Zsb2F0aW5nKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIFZlID0gTWF0aC5tYXgoMSwgZSk7XG4gICAgaWYgKFZlICUgNSA9PSAwKSB7XG4gICAgICBOZSA9IHRydWU7XG4gICAgICB2YXIgcWUsXG4gICAgICAgIFVlID0gVmUgJSAxMCA9PSAwO1xuICAgICAgUGUgKz0gcWUgPSBVZSA/IG51bGwgIT09IChaID0gdC5ib3NzQm9udXMxMCkgJiYgdm9pZCAwICE9PSBaID8gWiA6IDggOiBudWxsICE9PSAoJCA9IHQuYm9zc0JvbnVzNSkgJiYgdm9pZCAwICE9PSAkID8gJCA6IDU7XG4gICAgICBiZSArPSBxZTtcbiAgICAgIENlID0gTWF0aC5taW4oQ2UgKyAxLCA3KTtcbiAgICAgIHVlID49IChudWxsICE9PSAoZWUgPSB0LmJvc3NDcm9zc0RlcHRoUmF0aW9NaW5TdGFnZUlkeCkgJiYgdm9pZCAwICE9PSBlZSA/IGVlIDogMikgJiYgKGtlID0gVWUgPyBudWxsICE9PSAodGUgPSB0LmJvc3NCb251czEwQ3Jvc3NEZXB0aFJhdGlvKSAmJiB2b2lkIDAgIT09IHRlID8gdGUgOiAwLjggOiBudWxsICE9PSAocmUgPSB0LmJvc3NCb251czVDcm9zc0RlcHRoUmF0aW8pICYmIHZvaWQgMCAhPT0gcmUgPyByZSA6IDAuOCk7XG4gICAgfVxuICB9XG4gIHZhciBIZSxcbiAgICBLZSxcbiAgICBKZSA9IG51bGwgIT09IChhZSA9IERlLnRpbGVkU2l6ZXMpICYmIHZvaWQgMCAhPT0gYWUgPyBhZSA6IE07XG4gIGlmIChOZSAmJiAobnVsbCA9PSB4ZSA/IHZvaWQgMCA6IHhlLnRpbGVkU2l6ZSkpIHtcbiAgICBIZSA9IDIgKiB4ZS50aWxlZFNpemUudztcbiAgICBLZSA9IDIgKiB4ZS50aWxlZFNpemUuaDtcbiAgfSBlbHNlIGlmIChOZSkge1xuICAgIHZhciBRZSA9IGooSmUpO1xuICAgIEhlID0gMiAqIFFlLnc7XG4gICAgS2UgPSAyICogUWUuaDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgWGUgPSBXKEplKTtcbiAgICBIZSA9IDIgKiBYZS53O1xuICAgIEtlID0gMiAqIFhlLmg7XG4gIH1cbiAgUGUgPSBNYXRoLm1heCgxMCwgTWF0aC5taW4oOTAsIFBlKSk7XG4gIE5lIHx8IChiZSA9IE1hdGgubWF4KFBlLCBNYXRoLm1pbig5MCwgYmUpKSk7XG4gIHZhciBZZSA9IE1hdGguZmxvb3IoSGUgLyAyKSxcbiAgICBaZSA9IE1hdGguZmxvb3IoS2UgLyAyKSxcbiAgICAkZSA9IGooSmUpO1xuICAoWWUgPCAkZS53IHx8IFplIDwgJGUuaCkgJiYgYmUgLyAoWWUgKiBaZSAqIDAuNSkgPiAwLjUgJiYgKENlICs9IDEpO1xuICByZXR1cm4ge1xuICAgIG1pblBhaXJzOiBQZSxcbiAgICBtYXhQYWlyczogYmUsXG4gICAgdG90YWxQYWlyczogMCxcbiAgICBib2FyZFdpZHRoOiBIZSxcbiAgICBib2FyZEhlaWdodDogS2UsXG4gICAgbWF4TGF5ZXJzOiBDZSA9IE1hdGgubWF4KDIsIE1hdGgubWluKDcsIENlKSksXG4gICAgbWluQ2FyZElkOiB6ZSxcbiAgICBtYXhDYXJkSWQ6IFJlLFxuICAgIHB1enpsZUNvcmVDb3VudDogU2UsXG4gICAgaGFtc3RlckNvdW50OiBUZSxcbiAgICBoYW1zdGVyRGlzdGFuY2U6IEllLFxuICAgIGhhbXN0ZXJEZXB0aEJpYXM6IE1lLFxuICAgIHRvcG9sb2d5V2VpZ2h0czogQWUsXG4gICAgY3Jvc3NEZXB0aFJhdGlvOiBrZSxcbiAgICBjcm9zc0RlcHRoVHlwZTogRmUsXG4gICAgY3Jvc3NEZXB0aFNwYW46IEJlLFxuICAgIG1heEF0dGVtcHRzOiBEZS5tYXhBdHRlbXB0cyxcbiAgICBidWZmZXJTaXplOiBudWxsICE9PSAoaWUgPSBudWxsICE9PSAob2UgPSBEZS5idWZmZXJTaXplKSAmJiB2b2lkIDAgIT09IG9lID8gb2UgOiB0LmJ1ZmZlclNpemUpICYmIHZvaWQgMCAhPT0gaWUgPyBpZSA6IDQsXG4gICAgZXhjbHVkZWRDYXJkSWRzOiBudWxsICE9PSAoc2UgPSBudWxsICE9PSAobGUgPSBEZS5leGNsdWRlZENhcmRJZHMpICYmIHZvaWQgMCAhPT0gbGUgPyBsZSA6IHQuZXhjbHVkZWRDYXJkSWRzKSAmJiB2b2lkIDAgIT09IHNlID8gc2UgOiBGLFxuICAgIGxheWVyRGVjYXlFeHBvbmVudDogV2UsXG4gICAgZWFzeVBhaXJDb3VudDogamUsXG4gICAgcGFpckRpc3RhbmNlQmlhczogR2UsXG4gICAgbGF5ZXJBbGlnbk1vZGU6IEVlLFxuICAgIG5vRmxvYXRpbmc6IE9lXG4gIH07XG59XG5AbWouY2xhc3MoXCJGbG93TGV2ZWxIb29rXCIpXG5jbGFzcyBFIHtcbiAgQG1qLnRyYWl0RXZlbnQoXCJGbHdMdl9nZXRBYmlsU3RnXCIpXG4gIHN0YXRpYyBnZXRBYmlsaXR5U3RhZ2UoKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRmx3THZfZ2V0UmVzb2x2ZVN0Z1wiKVxuICBzdGF0aWMgZ2V0UmVzb2x2ZVN0YWdlKGUsIHQpIHtcbiAgICByZXR1cm4gQShlLCB0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkZsd0x2X2ZpeExldmVsU3RhZ2VcIilcbiAgc3RhdGljIGZpeExldmVsU3RhZ2UoZSwgdCwgcikge1xuICAgIHJldHVybiByO1xuICB9XG59XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkZsb3dMZXZlbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG93TGV2ZWxUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3VzZWRGbG93TGV2ZWwgPSBmYWxzZTtcbiAgX2dlbmVyYXRlQ291bnQgPSAwO1xuICBfc3RhZ2VUYWJsZSA9IG51bGw7XG4gIF9wcmVjb21wdXRlR2VuID0gbnVsbDtcbiAgX3ByZWNvbXB1dGVMZXZlbElkID0gMDtcbiAgX3ByZWNvbXB1dGVUaW1lciA9IG51bGw7XG4gIF9wcmVjb21wdXRlU3RhcnRUaW1lID0gMDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGbG93TGV2ZWxcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3N0YWdlVGFibGUgPSB0aGlzLl90cmFpdERhdGEuc3RhZ2VUYWJsZSB8fCBSO1xuICAgIHZhciB0ID0gdGhpcy5sb2NhbERhdGEuZmxvd0NhY2hlTHYgfHwgMCxcbiAgICAgIHIgPSB0aGlzLl9nZXRDdXJyZW50TGV2ZWxJZCgpLFxuICAgICAgYSA9IHRoaXMuX2hhc0xldmVsRGF0YSgpID8gciArIDEgOiByO1xuICAgIDEgPT0gYSAmJiAoYSA9IDIpO1xuICAgIGEgPiAwICYmICh0ID09PSBhIHx8IHQgJiYgdGhpcy5fY2xlYXJDYWNoZSgpKTtcbiAgfVxuICBfZ2V0Q3VycmVudExldmVsSWQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5ub3JtYWxEYXRhLmdldExldmVsSWQoKSB8fCAwO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuICBfaGFzTGV2ZWxEYXRhKCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLm5vcm1hbERhdGEuZ2V0T3JpZ2luYWxMZXZlbERhdGFXaXRoQ2FyZElkKCk7XG4gICAgICByZXR1cm4gISEoZSAmJiBlLmxlbmd0aCA+IDApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0Q29udGVudChlLCB0KSB7XG4gICAgdmFyIHIgPSBlLmFyZ3NbMF07XG4gICAgaWYgKHIuZ2FtZVR5cGUgPT09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICB2YXIgYSA9IHIubGV2ZWxJRCB8fCAxLFxuICAgICAgICBvID0gdGhpcy5fdHJ5R2V0Q2FjaGUoYSk7XG4gICAgICBpZiAobykge1xuICAgICAgICB0aGlzLl91c2VkRmxvd0xldmVsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZ2VuZXJhdGVDb3VudCsrO1xuICAgICAgICB0aGlzLl9jbGVhckNhY2hlKCk7XG4gICAgICAgIHRoaXMuX2RlbGF5ZWRQcmVjb21wdXRlKGEgKyAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2dlbmVyYXRlQ291bnQrKztcbiAgICAgICAgdGhpcy5fdXNlZEZsb3dMZXZlbCA9IHRydWU7XG4gICAgICAgIG8gPSB0aGlzLl9nZW5lcmF0b3JTeW5jKGEpO1xuICAgICAgICB0aGlzLl9kZWxheWVkUHJlY29tcHV0ZShhICsgMSk7XG4gICAgICB9XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IFByb21pc2UucmVzb2x2ZShbbywgNTAsIFwiRmxvd0xldmVsX1wiICsgYSwgXCJGbG93TGV2ZWxcIiwgXCLlv4PmtYFcIl0pXG4gICAgICB9KTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uVDJEeW5TdHJfaXNEeW4oZSwgdCkge1xuICAgIHQoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIG9uVDJEeW5TdHJfZXh0cmFjdChlLCB0KSB7XG4gICAgdmFyIHIgPSBlLmFyZ3NbMF0uZ2FtZURhdGEuZ2V0TGV2ZWxJZCgpIHx8IDEsXG4gICAgICBhID0gdGhpcy5fZ2VuZXJhdGVCdWZmZXJTeW5jKHIpO1xuICAgIGlmIChhKSB7XG4gICAgICB0aGlzLl9nZW5lcmF0ZUNvdW50Kys7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgY29udGVudDogYSxcbiAgICAgICAgICBpbmRleDogXCJGbG93TGV2ZWxfXCIgKyByLFxuICAgICAgICAgIGxpYk5hbWU6IFwiRmxvd0xldmVsXCJcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgX3RyeUdldENhY2hlKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMubG9jYWxEYXRhLmZsb3dDYWNoZUx2LFxuICAgICAgciA9IHRoaXMubG9jYWxEYXRhLmZsb3dDYWNoZVN0cjtcbiAgICBpZiAodCA9PT0gZSAmJiByICYmIHIubGVuZ3RoID4gMCkgcmV0dXJuIHI7XG4gICAgdCAmJiB0ICE9PSBlICYmIHRoaXMuX2NsZWFyQ2FjaGUoKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBfY2xlYXJDYWNoZSgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5mbG93Q2FjaGVMdiA9IDA7XG4gICAgdGhpcy5sb2NhbERhdGEuZmxvd0NhY2hlU3RyID0gXCJcIjtcbiAgfVxuICBfc2F2ZUNhY2hlKGUsIHQpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5mbG93Q2FjaGVMdiA9IGU7XG4gICAgdGhpcy5sb2NhbERhdGEuZmxvd0NhY2hlU3RyID0gdDtcbiAgfVxuICBfZGVsYXllZFByZWNvbXB1dGUoZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLl9zdG9wUHJlY29tcHV0ZSgpO1xuICAgIHZhciByID0gdGhpcy5fdHJhaXREYXRhLnByZWNvbXB1dGVEZWxheU1zIHx8IDUwMDA7XG4gICAgdGhpcy5fcHJlY29tcHV0ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0Ll9wcmVjb21wdXRlVGltZXIgPSBudWxsO1xuICAgICAgdC5fc3RhcnRQcmVjb21wdXRlKGUpO1xuICAgIH0sIHIpO1xuICB9XG4gIF9zdGFydFByZWNvbXB1dGUoZSkge1xuICAgIHRoaXMuX3N0b3BQcmVjb21wdXRlKCk7XG4gICAgdmFyIHQgPSBnZXRSYW5kb21OdW0oMSwgMTAwMDAwKSxcbiAgICAgIHIgPSBHKGUsIHRoaXMuX3RyYWl0RGF0YSwgdGhpcy5fc3RhZ2VUYWJsZSksXG4gICAgICBhID0gbmV3IEZsb3dMZXZlbEdlbmVyYXRvcihyLCB0KSxcbiAgICAgIG8gPSByLm1heEF0dGVtcHRzIHx8IHRoaXMuX3RyYWl0RGF0YS5hc3luY01heEF0dGVtcHRzIHx8IDUwO1xuICAgIHRoaXMuX3ByZWNvbXB1dGVMZXZlbElkID0gZTtcbiAgICB0aGlzLl9wcmVjb21wdXRlR2VuID0gYS5nZW5lcmF0ZUFuZFZhbGlkYXRlQXN5bmMobyk7XG4gICAgdGhpcy5fcHJlY29tcHV0ZVN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgdGhpcy5fc2NoZWR1bGVOZXh0VGljaygpO1xuICB9XG4gIF9zdG9wUHJlY29tcHV0ZSgpIHtcbiAgICBpZiAobnVsbCAhPT0gdGhpcy5fcHJlY29tcHV0ZVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fcHJlY29tcHV0ZVRpbWVyKTtcbiAgICAgIHRoaXMuX3ByZWNvbXB1dGVUaW1lciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX3ByZWNvbXB1dGVHZW4gPSBudWxsO1xuICAgIHRoaXMuX3ByZWNvbXB1dGVMZXZlbElkID0gMDtcbiAgICBrID0gZmFsc2U7XG4gIH1cbiAgX2dlbmVyYXRlQnVmZmVyU3luYyhlKSB7XG4gICAgdmFyIHQgPSBnZXRSYW5kb21OdW0oMSwgMTAwMDAwKSxcbiAgICAgIHIgPSBHKGUsIHRoaXMuX3RyYWl0RGF0YSwgdGhpcy5fc3RhZ2VUYWJsZSksXG4gICAgICBhID0gbmV3IEZsb3dMZXZlbEdlbmVyYXRvcihyLCB0KSxcbiAgICAgIG8gPSAoRGF0ZS5ub3coKSwgYS5nZW5lcmF0ZUFuZFZhbGlkYXRlQnVmZmVyKDIpKTtcbiAgICBEYXRlLm5vdygpO1xuICAgIHJldHVybiBvICYmIG8udGlsZXMgJiYgby5zb2x2YWJsZSA/IEZsb3dMZXZlbFNlcmlhbGl6ZXIuc2VyaWFsaXplKG8udGlsZXMpIDogbnVsbDtcbiAgfVxuICBfZ2VuZXJhdG9yU3luYyhlKSB7XG4gICAgdGhpcy5fc3RvcFByZWNvbXB1dGUoKTtcbiAgICB2YXIgdCA9IGdldFJhbmRvbU51bSgxLCAxMDAwMDApLFxuICAgICAgciA9IEcoZSwgdGhpcy5fdHJhaXREYXRhLCB0aGlzLl9zdGFnZVRhYmxlKSxcbiAgICAgIGEgPSBuZXcgRmxvd0xldmVsR2VuZXJhdG9yKHIsIHQpLFxuICAgICAgbyA9IChEYXRlLm5vdygpLCBhLmdlbmVyYXRlQW5kVmFsaWRhdGUoMSkpLFxuICAgICAgaSA9IG8udGlsZXM7XG4gICAgby5zb2x2YWJsZSwgby5hdHRlbXB0LCBEYXRlLm5vdygpO1xuICAgIHJldHVybiBGbG93TGV2ZWxTZXJpYWxpemVyLnNlcmlhbGl6ZShpKTtcbiAgfVxuICBfc2NoZWR1bGVOZXh0VGljaygpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5fcHJlY29tcHV0ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBlLl9wcmVjb21wdXRlVGltZXIgPSBudWxsO1xuICAgICAgZS5fdGlja1ByZWNvbXB1dGUoKTtcbiAgICB9LCAwKTtcbiAgfVxuICBfdGlja1ByZWNvbXB1dGUoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9wcmVjb21wdXRlR2VuO1xuICAgIGlmIChlKSB7XG4gICAgICB2YXIgdCA9IHRoaXMuX3RyYWl0RGF0YS5mcmFtZUJ1ZGdldE1zIHx8IDEwO1xuICAgICAgaWYgKDEgLyBjYy5kaXJlY3Rvci5nZXREZWx0YVRpbWUoKSA8IDIwKSB7XG4gICAgICAgIGsgfHwgKGsgPSB0cnVlKTtcbiAgICAgICAgdCAqPSAwLjU7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciByID0gRGF0ZS5ub3coKTsgRGF0ZS5ub3coKSAtIHIgPCB0Oykge1xuICAgICAgICB2YXIgYSA9IGUubmV4dCgpO1xuICAgICAgICBpZiAoYS5kb25lKSB7XG4gICAgICAgICAgdmFyIG8gPSBhLnZhbHVlLFxuICAgICAgICAgICAgaSA9IG8udGlsZXMsXG4gICAgICAgICAgICBsID0gKG8uc29sdmFibGUsIG8uYXR0ZW1wdCwgRmxvd0xldmVsU2VyaWFsaXplci5zZXJpYWxpemUoaSkpO1xuICAgICAgICAgIHRoaXMuX3NhdmVDYWNoZSh0aGlzLl9wcmVjb21wdXRlTGV2ZWxJZCwgbCk7XG4gICAgICAgICAgRGF0ZS5ub3coKSwgdGhpcy5fcHJlY29tcHV0ZVN0YXJ0VGltZTtcbiAgICAgICAgICB0aGlzLl9wcmVjb21wdXRlR2VuID0gbnVsbDtcbiAgICAgICAgICB0aGlzLl9wcmVjb21wdXRlTGV2ZWxJZCA9IDA7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9zY2hlZHVsZU5leHRUaWNrKCk7XG4gICAgfVxuICB9XG59Il19