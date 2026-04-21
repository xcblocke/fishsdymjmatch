"use strict";
cc._RF.push(module, 'b0179dlzGROCqeoSqMSxerR', 'FreeTileShuffleTrait');
// subpackages/l_freeTileShuffle/Scripts/FreeTileShuffleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GuaranteedShuffleEffect_1 = require("../../../Scripts/GuaranteedShuffleEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var FreeTileShuffleModifier_1 = require("./FreeTileShuffleModifier");
var GuaranteedShuffleBehavior_1 = require("../../../Scripts/base/GuaranteedShuffleBehavior");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var CharacterGenerator_1 = require("../../../Scripts/CharacterGenerator");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var FreeTileYogaClearEffect_1 = require("./FreeTileYogaClearEffect");
var FreeTileYogaClearBehavior_1 = require("./FreeTileYogaClearBehavior");
var FreeTileShuffleTrait = /** @class */ (function (_super) {
    __extends(FreeTileShuffleTrait, _super);
    function FreeTileShuffleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isFreeTileShuffle = false;
        _this._isYogaMode = false;
        _this._freeTileShuffleModifier = null;
        _this._unlockedYogaTileIds = [];
        return _this;
    }
    FreeTileShuffleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._registerBehaviors();
    };
    FreeTileShuffleTrait.prototype._registerBehaviors = function () {
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.GuaranteedShuffle, GuaranteedShuffleBehavior_1.GuaranteedShuffleBehavior);
        BehaviorFactory_1.BehaviorFactory.registerBehavior(FreeTileYogaClearEffect_1.FreeTileYogaClearMapping, FreeTileYogaClearBehavior_1.FreeTileYogaClearBehavior);
    };
    FreeTileShuffleTrait.prototype.onShuffleMod_verifySolu = function (e, t) {
        var r = e.ins, i = e.beforReturnVal;
        this._isFreeTileShuffle = false;
        this._isYogaMode = false;
        this._unlockedYogaTileIds = [];
        if (true !== i) {
            this._isFreeTileShuffle = true;
            var o, a = r._context;
            this._freeTileShuffleModifier = new FreeTileShuffleModifier_1.FreeTileShuffleModifier(a);
            this._isYogaMode = this._freeTileShuffleModifier.hasYogaTiles();
            if (this._isYogaMode) {
                o = this._freeTileShuffleModifier.executeYogaTileShuffle();
                this.assignYogaToFreeTiles(a, o);
                this._unlockedYogaTileIds = this.identifyUnlockedYogaTiles(a);
            }
            else {
                o = this._freeTileShuffleModifier.executeFreeTileShuffle();
                this.assignColorsToTiles(a, o);
            }
            t({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            t();
    };
    FreeTileShuffleTrait.prototype.onIptShuffle_pushEffect = function (e, t) {
        if (this._isFreeTileShuffle && this._freeTileShuffleModifier) {
            var r = e.ins;
            if (this._isYogaMode) {
                t();
                if (this._unlockedYogaTileIds.length > 0) {
                    var i = new FreeTileYogaClearEffect_1.FreeTileYogaClearEffect({
                        tileIds: this._unlockedYogaTileIds
                    });
                    r.pushEffect(i, BehaviorsEnum_1.EInsertType.Serial);
                }
            }
            else {
                var o = new GuaranteedShuffleEffect_1.GuaranteedShuffleEffect({
                    originalPositions: this._freeTileShuffleModifier.getShuffleOriginalPositions()
                });
                r.pushEffect(o);
                mj.EventManager.emit(GameEvent_1.EGameEvent.Effect_Shuffle, r);
                t({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true
                });
            }
        }
        else
            t();
    };
    FreeTileShuffleTrait.prototype.getCharGenShuffleConfig = function () {
        var e, t = mj.getClassByName("CharGenShuffleTrait");
        if (!t)
            return null;
        var r = null === (e = t.getInstance) || void 0 === e ? void 0 : e.call(t);
        if (!r || true !== r.eventEnabled)
            return null;
        var i = r._charSelectionType;
        return void 0 !== i ? {
            charSelectionType: i
        } : null;
    };
    FreeTileShuffleTrait.prototype.assignColorsToTiles = function (e, t) {
        var r, i, o, a, c = t.sequence, f = t.freeTiles, u = e.getTileMapObject(), h = [];
        try {
            for (var p = __values(c), d = p.next(); !d.done; d = p.next()) {
                var y = __read(d.value, 2), v = y[0], T = y[1];
                h.push(v, T);
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                d && !d.done && (i = p.return) && i.call(p);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        try {
            for (var m = __values(f), _ = m.next(); !_.done; _ = m.next()) {
                var x = _.value;
                h.push(x);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                _ && !_.done && (a = m.return) && a.call(m);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        if (0 !== h.length) {
            for (var b = [], C = __spreadArrays(h).sort(function (e, t) {
                return e.resId - t.resId;
            }), S = 0; S < C.length; S += 2)
                S + 1 < C.length && b.push([{
                        resId: C[S].resId,
                        type: C[S].type,
                        duoxiaoCount: C[S].getDuoxiaoCount()
                    }, {
                        resId: C[S + 1].resId,
                        type: C[S + 1].type,
                        duoxiaoCount: C[S + 1].getDuoxiaoCount()
                    }]);
            this.shuffleArray(b);
            var w = this.getCharGenShuffleConfig(), M = CharacterGenerator_1.default.getInstance();
            if (w && M) {
                var I = w.charSelectionType, F = (CharacterGenerator_1.CHAR_ALGO_NAMES[I], M.generateCharacterAssignment(e, h, b, 1, I));
                M.applyAssignments(F, u);
            }
            else
                this.simpleRandomAssign(c, f, b, u);
        }
    };
    FreeTileShuffleTrait.prototype.simpleRandomAssign = function (e, t, r, i) {
        var o, a, s = 0;
        try {
            for (var c = __values(e), f = c.next(); !f.done; f = c.next()) {
                var u = __read(f.value, 2), h = u[0], p = u[1];
                if (s >= r.length)
                    break;
                var d = __read(r[s], 2), y = d[0], v = d[1];
                this.applyDataToTile(h, y, i);
                this.applyDataToTile(p, v, i);
                s++;
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (a = c.return) && a.call(c);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        if (t.length > 0) {
            for (var g = [], T = Math.ceil(t.length / 2), m = 0; m < T; m++) {
                g.push(t[m]);
                var _ = t.length - 1 - m;
                _ > m && g.push(t[_]);
            }
            for (m = 0; m < g.length && !(s >= r.length); m += 2) {
                var x = __read(r[s], 2);
                y = x[0], v = x[1];
                this.applyDataToTile(g[m], y, i);
                m + 1 < g.length && this.applyDataToTile(g[m + 1], v, i);
                s++;
            }
        }
    };
    FreeTileShuffleTrait.prototype.applyDataToTile = function (e, t, r) {
        if (e.type !== TileTypeEnum_1.ETileType.RollCard) {
            var i = t.type === TileTypeEnum_1.ETileType.RollCard ? TileTypeEnum_1.ETileType.Normal : t.type;
            r.setTileType(e.id, i);
        }
        e.changeResId(t.resId);
        e.setDuoxiaoCount(t.duoxiaoCount || 0);
    };
    FreeTileShuffleTrait.prototype.shuffleArray = function (e) {
        for (var t, r = e.length - 1; r > 0; r--) {
            var i = Math.floor(Math.random() * (r + 1));
            t = __read([e[i], e[r]], 2), e[r] = t[0], e[i] = t[1];
        }
    };
    FreeTileShuffleTrait.prototype.assignYogaToFreeTiles = function (e, t) {
        var r, i, o, a, s, c, f, u, h, p, d = t.sequence, y = t.freeTiles, v = t.remainingTile, g = e.getTileMapObject(), m = [];
        try {
            for (var _ = __values(d), x = _.next(); !x.done; x = _.next()) {
                var b = __read(x.value, 2), C = b[0], S = b[1];
                m.push(C, S);
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                x && !x.done && (i = _.return) && i.call(_);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        try {
            for (var w = __values(y), M = w.next(); !M.done; M = w.next()) {
                var I = M.value;
                m.push(I);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                M && !M.done && (a = w.return) && a.call(w);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        v && m.push(v);
        if (0 !== m.length) {
            var F = [], O = [];
            try {
                for (var j = __values(m), E = j.next(); !E.done; E = j.next()) {
                    var A = {
                        resId: (I = E.value).resId,
                        type: I.type,
                        duoxiaoCount: I.getDuoxiaoCount()
                    };
                    if (I.resId === GameTypeEnums_1.ResId.emYogaCardId) {
                        O.push(A);
                    }
                    else {
                        F.push(A);
                    }
                }
            }
            catch (e) {
                s = {
                    error: e
                };
            }
            finally {
                try {
                    E && !E.done && (c = j.return) && c.call(j);
                }
                finally {
                    if (s)
                        throw s.error;
                }
            }
            this.shuffleArray(F);
            var Y = 0, G = 0;
            try {
                for (var P = __values(y), B = P.next(); !B.done; B = P.next()) {
                    I = B.value;
                    if (Y < O.length) {
                        this.applyDataToTile(I, O[Y], g);
                        Y++;
                    }
                    else if (G < F.length) {
                        this.applyDataToTile(I, F[G], g);
                        G++;
                    }
                }
            }
            catch (e) {
                f = {
                    error: e
                };
            }
            finally {
                try {
                    B && !B.done && (u = P.return) && u.call(P);
                }
                finally {
                    if (f)
                        throw f.error;
                }
            }
            try {
                for (var R = __values(d), L = R.next(); !L.done; L = R.next()) {
                    var k = __read(L.value, 2);
                    C = k[0], S = k[1];
                    if (Y < O.length) {
                        this.applyDataToTile(C, O[Y], g);
                        Y++;
                    }
                    else if (G < F.length) {
                        this.applyDataToTile(C, F[G], g);
                        G++;
                    }
                    if (Y < O.length) {
                        this.applyDataToTile(S, O[Y], g);
                        Y++;
                    }
                    else if (G < F.length) {
                        this.applyDataToTile(S, F[G], g);
                        G++;
                    }
                }
            }
            catch (e) {
                h = {
                    error: e
                };
            }
            finally {
                try {
                    L && !L.done && (p = R.return) && p.call(R);
                }
                finally {
                    if (h)
                        throw h.error;
                }
            }
            if (v)
                if (Y < O.length) {
                    this.applyDataToTile(v, O[Y], g);
                    Y++;
                }
                else if (G < F.length) {
                    this.applyDataToTile(v, F[G], g);
                    G++;
                }
        }
    };
    FreeTileShuffleTrait.prototype.identifyUnlockedYogaTiles = function (e) {
        var t = e.getTileMapObject(), r = [];
        t.tileObjectMap().forEach(function (e, i) {
            e.isValid && e.resId === GameTypeEnums_1.ResId.emYogaCardId && (t.isCardLock(e) || r.push(i));
        });
        r.length;
        return r;
    };
    FreeTileShuffleTrait.traitKey = "FreeTileShuffle";
    FreeTileShuffleTrait = __decorate([
        mj.trait,
        mj.class("FreeTileShuffleTrait")
    ], FreeTileShuffleTrait);
    return FreeTileShuffleTrait;
}(Trait_1.default));
exports.default = FreeTileShuffleTrait;

cc._RF.pop();