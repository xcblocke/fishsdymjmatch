
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_freeTileShuffle/Scripts/FreeTileShuffleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZyZWVUaWxlU2h1ZmZsZS9TY3JpcHRzL0ZyZWVUaWxlU2h1ZmZsZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyRUFBMkU7QUFDM0Usb0ZBQW1GO0FBQ25GLDhFQUE2RTtBQUM3RSxvRUFBbUU7QUFDbkUsZ0VBQTJEO0FBQzNELHFFQUFvRTtBQUNwRSw2RkFBNEY7QUFDNUYsaUZBQTZFO0FBQzdFLDBFQUEwRjtBQUMxRix3RkFBK0U7QUFDL0UseUVBQXNFO0FBQ3RFLHFFQUE4RjtBQUM5Rix5RUFBd0U7QUFHeEU7SUFBa0Qsd0NBQUs7SUFBdkQ7UUFBQSxxRUE0VkM7UUEzVkMsd0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLDhCQUF3QixHQUFHLElBQUksQ0FBQztRQUNoQywwQkFBb0IsR0FBRyxFQUFFLENBQUM7O0lBd1Y1QixDQUFDO0lBdFZDLHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxpREFBa0IsR0FBbEI7UUFDRSxpQ0FBZSxDQUFDLGdCQUFnQixDQUFDLG1DQUFnQixDQUFDLGlCQUFpQixFQUFFLHFEQUF5QixDQUFDLENBQUM7UUFDaEcsaUNBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxrREFBd0IsRUFBRSxxREFBeUIsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFDRCxzREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDWCxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUN2QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcs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LG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVHYW1lRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuaW1wb3J0IHsgR3VhcmFudGVlZFNodWZmbGVFZmZlY3QgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0d1YXJhbnRlZWRTaHVmZmxlRWZmZWN0JztcbmltcG9ydCB7IEJlaGF2aW9yc01hcHBpbmcgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL21hcHBpbmcvQmVoYXZpb3JzTWFwcGluZyc7XG5pbXBvcnQgeyBCZWhhdmlvckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0JlaGF2aW9yRmFjdG9yeSc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgRnJlZVRpbGVTaHVmZmxlTW9kaWZpZXIgfSBmcm9tICcuL0ZyZWVUaWxlU2h1ZmZsZU1vZGlmaWVyJztcbmltcG9ydCB7IEd1YXJhbnRlZWRTaHVmZmxlQmVoYXZpb3IgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvR3VhcmFudGVlZFNodWZmbGVCZWhhdmlvcic7XG5pbXBvcnQgeyBFVGlsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IENoYXJhY3RlckdlbmVyYXRvciwgeyBDSEFSX0FMR09fTkFNRVMgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0NoYXJhY3RlckdlbmVyYXRvcic7XG5pbXBvcnQgeyBSZXNJZCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBGcmVlVGlsZVlvZ2FDbGVhck1hcHBpbmcsIEZyZWVUaWxlWW9nYUNsZWFyRWZmZWN0IH0gZnJvbSAnLi9GcmVlVGlsZVlvZ2FDbGVhckVmZmVjdCc7XG5pbXBvcnQgeyBGcmVlVGlsZVlvZ2FDbGVhckJlaGF2aW9yIH0gZnJvbSAnLi9GcmVlVGlsZVlvZ2FDbGVhckJlaGF2aW9yJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRnJlZVRpbGVTaHVmZmxlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyZWVUaWxlU2h1ZmZsZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfaXNGcmVlVGlsZVNodWZmbGUgPSBmYWxzZTtcbiAgX2lzWW9nYU1vZGUgPSBmYWxzZTtcbiAgX2ZyZWVUaWxlU2h1ZmZsZU1vZGlmaWVyID0gbnVsbDtcbiAgX3VubG9ja2VkWW9nYVRpbGVJZHMgPSBbXTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGcmVlVGlsZVNodWZmbGVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3JlZ2lzdGVyQmVoYXZpb3JzKCk7XG4gIH1cbiAgX3JlZ2lzdGVyQmVoYXZpb3JzKCkge1xuICAgIEJlaGF2aW9yRmFjdG9yeS5yZWdpc3RlckJlaGF2aW9yKEJlaGF2aW9yc01hcHBpbmcuR3VhcmFudGVlZFNodWZmbGUsIEd1YXJhbnRlZWRTaHVmZmxlQmVoYXZpb3IpO1xuICAgIEJlaGF2aW9yRmFjdG9yeS5yZWdpc3RlckJlaGF2aW9yKEZyZWVUaWxlWW9nYUNsZWFyTWFwcGluZywgRnJlZVRpbGVZb2dhQ2xlYXJCZWhhdmlvcik7XG4gIH1cbiAgb25TaHVmZmxlTW9kX3ZlcmlmeVNvbHUoZSwgdCkge1xuICAgIHZhciByID0gZS5pbnMsXG4gICAgICBpID0gZS5iZWZvclJldHVyblZhbDtcbiAgICB0aGlzLl9pc0ZyZWVUaWxlU2h1ZmZsZSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzWW9nYU1vZGUgPSBmYWxzZTtcbiAgICB0aGlzLl91bmxvY2tlZFlvZ2FUaWxlSWRzID0gW107XG4gICAgaWYgKHRydWUgIT09IGkpIHtcbiAgICAgIHRoaXMuX2lzRnJlZVRpbGVTaHVmZmxlID0gdHJ1ZTtcbiAgICAgIHZhciBvLFxuICAgICAgICBhID0gci5fY29udGV4dDtcbiAgICAgIHRoaXMuX2ZyZWVUaWxlU2h1ZmZsZU1vZGlmaWVyID0gbmV3IEZyZWVUaWxlU2h1ZmZsZU1vZGlmaWVyKGEpO1xuICAgICAgdGhpcy5faXNZb2dhTW9kZSA9IHRoaXMuX2ZyZWVUaWxlU2h1ZmZsZU1vZGlmaWVyLmhhc1lvZ2FUaWxlcygpO1xuICAgICAgaWYgKHRoaXMuX2lzWW9nYU1vZGUpIHtcbiAgICAgICAgbyA9IHRoaXMuX2ZyZWVUaWxlU2h1ZmZsZU1vZGlmaWVyLmV4ZWN1dGVZb2dhVGlsZVNodWZmbGUoKTtcbiAgICAgICAgdGhpcy5hc3NpZ25Zb2dhVG9GcmVlVGlsZXMoYSwgbyk7XG4gICAgICAgIHRoaXMuX3VubG9ja2VkWW9nYVRpbGVJZHMgPSB0aGlzLmlkZW50aWZ5VW5sb2NrZWRZb2dhVGlsZXMoYSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvID0gdGhpcy5fZnJlZVRpbGVTaHVmZmxlTW9kaWZpZXIuZXhlY3V0ZUZyZWVUaWxlU2h1ZmZsZSgpO1xuICAgICAgICB0aGlzLmFzc2lnbkNvbG9yc1RvVGlsZXMoYSwgbyk7XG4gICAgICB9XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uSXB0U2h1ZmZsZV9wdXNoRWZmZWN0KGUsIHQpIHtcbiAgICBpZiAodGhpcy5faXNGcmVlVGlsZVNodWZmbGUgJiYgdGhpcy5fZnJlZVRpbGVTaHVmZmxlTW9kaWZpZXIpIHtcbiAgICAgIHZhciByID0gZS5pbnM7XG4gICAgICBpZiAodGhpcy5faXNZb2dhTW9kZSkge1xuICAgICAgICB0KCk7XG4gICAgICAgIGlmICh0aGlzLl91bmxvY2tlZFlvZ2FUaWxlSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgaSA9IG5ldyBGcmVlVGlsZVlvZ2FDbGVhckVmZmVjdCh7XG4gICAgICAgICAgICB0aWxlSWRzOiB0aGlzLl91bmxvY2tlZFlvZ2FUaWxlSWRzXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgci5wdXNoRWZmZWN0KGksIEVJbnNlcnRUeXBlLlNlcmlhbCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBvID0gbmV3IEd1YXJhbnRlZWRTaHVmZmxlRWZmZWN0KHtcbiAgICAgICAgICBvcmlnaW5hbFBvc2l0aW9uczogdGhpcy5fZnJlZVRpbGVTaHVmZmxlTW9kaWZpZXIuZ2V0U2h1ZmZsZU9yaWdpbmFsUG9zaXRpb25zKClcbiAgICAgICAgfSk7XG4gICAgICAgIHIucHVzaEVmZmVjdChvKTtcbiAgICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5FZmZlY3RfU2h1ZmZsZSwgcik7XG4gICAgICAgIHQoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgZ2V0Q2hhckdlblNodWZmbGVDb25maWcoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJDaGFyR2VuU2h1ZmZsZVRyYWl0XCIpO1xuICAgIGlmICghdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHIgPSBudWxsID09PSAoZSA9IHQuZ2V0SW5zdGFuY2UpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY2FsbCh0KTtcbiAgICBpZiAoIXIgfHwgdHJ1ZSAhPT0gci5ldmVudEVuYWJsZWQpIHJldHVybiBudWxsO1xuICAgIHZhciBpID0gci5fY2hhclNlbGVjdGlvblR5cGU7XG4gICAgcmV0dXJuIHZvaWQgMCAhPT0gaSA/IHtcbiAgICAgIGNoYXJTZWxlY3Rpb25UeXBlOiBpXG4gICAgfSA6IG51bGw7XG4gIH1cbiAgYXNzaWduQ29sb3JzVG9UaWxlcyhlLCB0KSB7XG4gICAgdmFyIHIsXG4gICAgICBpLFxuICAgICAgbyxcbiAgICAgIGEsXG4gICAgICBjID0gdC5zZXF1ZW5jZSxcbiAgICAgIGYgPSB0LmZyZWVUaWxlcyxcbiAgICAgIHUgPSBlLmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIGggPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcCA9IF9fdmFsdWVzKGMpLCBkID0gcC5uZXh0KCk7ICFkLmRvbmU7IGQgPSBwLm5leHQoKSkge1xuICAgICAgICB2YXIgeSA9IF9fcmVhZChkLnZhbHVlLCAyKSxcbiAgICAgICAgICB2ID0geVswXSxcbiAgICAgICAgICBUID0geVsxXTtcbiAgICAgICAgaC5wdXNoKHYsIFQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHIgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBkICYmICFkLmRvbmUgJiYgKGkgPSBwLnJldHVybikgJiYgaS5jYWxsKHApO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBtID0gX192YWx1ZXMoZiksIF8gPSBtLm5leHQoKTsgIV8uZG9uZTsgXyA9IG0ubmV4dCgpKSB7XG4gICAgICAgIHZhciB4ID0gXy52YWx1ZTtcbiAgICAgICAgaC5wdXNoKHgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBfICYmICFfLmRvbmUgJiYgKGEgPSBtLnJldHVybikgJiYgYS5jYWxsKG0pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgwICE9PSBoLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgYiA9IFtdLCBDID0gWy4uLmhdLnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICByZXR1cm4gZS5yZXNJZCAtIHQucmVzSWQ7XG4gICAgICAgIH0pLCBTID0gMDsgUyA8IEMubGVuZ3RoOyBTICs9IDIpIFMgKyAxIDwgQy5sZW5ndGggJiYgYi5wdXNoKFt7XG4gICAgICAgIHJlc0lkOiBDW1NdLnJlc0lkLFxuICAgICAgICB0eXBlOiBDW1NdLnR5cGUsXG4gICAgICAgIGR1b3hpYW9Db3VudDogQ1tTXS5nZXREdW94aWFvQ291bnQoKVxuICAgICAgfSwge1xuICAgICAgICByZXNJZDogQ1tTICsgMV0ucmVzSWQsXG4gICAgICAgIHR5cGU6IENbUyArIDFdLnR5cGUsXG4gICAgICAgIGR1b3hpYW9Db3VudDogQ1tTICsgMV0uZ2V0RHVveGlhb0NvdW50KClcbiAgICAgIH1dKTtcbiAgICAgIHRoaXMuc2h1ZmZsZUFycmF5KGIpO1xuICAgICAgdmFyIHcgPSB0aGlzLmdldENoYXJHZW5TaHVmZmxlQ29uZmlnKCksXG4gICAgICAgIE0gPSBDaGFyYWN0ZXJHZW5lcmF0b3IuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIGlmICh3ICYmIE0pIHtcbiAgICAgICAgdmFyIEkgPSB3LmNoYXJTZWxlY3Rpb25UeXBlLFxuICAgICAgICAgIEYgPSAoQ0hBUl9BTEdPX05BTUVTW0ldLCBNLmdlbmVyYXRlQ2hhcmFjdGVyQXNzaWdubWVudChlLCBoLCBiLCAxLCBJKSk7XG4gICAgICAgIE0uYXBwbHlBc3NpZ25tZW50cyhGLCB1KTtcbiAgICAgIH0gZWxzZSB0aGlzLnNpbXBsZVJhbmRvbUFzc2lnbihjLCBmLCBiLCB1KTtcbiAgICB9XG4gIH1cbiAgc2ltcGxlUmFuZG9tQXNzaWduKGUsIHQsIHIsIGkpIHtcbiAgICB2YXIgbyxcbiAgICAgIGEsXG4gICAgICBzID0gMDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKGUpLCBmID0gYy5uZXh0KCk7ICFmLmRvbmU7IGYgPSBjLm5leHQoKSkge1xuICAgICAgICB2YXIgdSA9IF9fcmVhZChmLnZhbHVlLCAyKSxcbiAgICAgICAgICBoID0gdVswXSxcbiAgICAgICAgICBwID0gdVsxXTtcbiAgICAgICAgaWYgKHMgPj0gci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICB2YXIgZCA9IF9fcmVhZChyW3NdLCAyKSxcbiAgICAgICAgICB5ID0gZFswXSxcbiAgICAgICAgICB2ID0gZFsxXTtcbiAgICAgICAgdGhpcy5hcHBseURhdGFUb1RpbGUoaCwgeSwgaSk7XG4gICAgICAgIHRoaXMuYXBwbHlEYXRhVG9UaWxlKHAsIHYsIGkpO1xuICAgICAgICBzKys7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGYgJiYgIWYuZG9uZSAmJiAoYSA9IGMucmV0dXJuKSAmJiBhLmNhbGwoYyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHQubGVuZ3RoID4gMCkge1xuICAgICAgZm9yICh2YXIgZyA9IFtdLCBUID0gTWF0aC5jZWlsKHQubGVuZ3RoIC8gMiksIG0gPSAwOyBtIDwgVDsgbSsrKSB7XG4gICAgICAgIGcucHVzaCh0W21dKTtcbiAgICAgICAgdmFyIF8gPSB0Lmxlbmd0aCAtIDEgLSBtO1xuICAgICAgICBfID4gbSAmJiBnLnB1c2godFtfXSk7XG4gICAgICB9XG4gICAgICBmb3IgKG0gPSAwOyBtIDwgZy5sZW5ndGggJiYgIShzID49IHIubGVuZ3RoKTsgbSArPSAyKSB7XG4gICAgICAgIHZhciB4ID0gX19yZWFkKHJbc10sIDIpO1xuICAgICAgICB5ID0geFswXSwgdiA9IHhbMV07XG4gICAgICAgIHRoaXMuYXBwbHlEYXRhVG9UaWxlKGdbbV0sIHksIGkpO1xuICAgICAgICBtICsgMSA8IGcubGVuZ3RoICYmIHRoaXMuYXBwbHlEYXRhVG9UaWxlKGdbbSArIDFdLCB2LCBpKTtcbiAgICAgICAgcysrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhcHBseURhdGFUb1RpbGUoZSwgdCwgcikge1xuICAgIGlmIChlLnR5cGUgIT09IEVUaWxlVHlwZS5Sb2xsQ2FyZCkge1xuICAgICAgdmFyIGkgPSB0LnR5cGUgPT09IEVUaWxlVHlwZS5Sb2xsQ2FyZCA/IEVUaWxlVHlwZS5Ob3JtYWwgOiB0LnR5cGU7XG4gICAgICByLnNldFRpbGVUeXBlKGUuaWQsIGkpO1xuICAgIH1cbiAgICBlLmNoYW5nZVJlc0lkKHQucmVzSWQpO1xuICAgIGUuc2V0RHVveGlhb0NvdW50KHQuZHVveGlhb0NvdW50IHx8IDApO1xuICB9XG4gIHNodWZmbGVBcnJheShlKSB7XG4gICAgZm9yICh2YXIgdCwgciA9IGUubGVuZ3RoIC0gMTsgciA+IDA7IHItLSkge1xuICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAociArIDEpKTtcbiAgICAgIHQgPSBfX3JlYWQoW2VbaV0sIGVbcl1dLCAyKSwgZVtyXSA9IHRbMF0sIGVbaV0gPSB0WzFdO1xuICAgIH1cbiAgfVxuICBhc3NpZ25Zb2dhVG9GcmVlVGlsZXMoZSwgdCkge1xuICAgIHZhciByLFxuICAgICAgaSxcbiAgICAgIG8sXG4gICAgICBhLFxuICAgICAgcyxcbiAgICAgIGMsXG4gICAgICBmLFxuICAgICAgdSxcbiAgICAgIGgsXG4gICAgICBwLFxuICAgICAgZCA9IHQuc2VxdWVuY2UsXG4gICAgICB5ID0gdC5mcmVlVGlsZXMsXG4gICAgICB2ID0gdC5yZW1haW5pbmdUaWxlLFxuICAgICAgZyA9IGUuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgbSA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfID0gX192YWx1ZXMoZCksIHggPSBfLm5leHQoKTsgIXguZG9uZTsgeCA9IF8ubmV4dCgpKSB7XG4gICAgICAgIHZhciBiID0gX19yZWFkKHgudmFsdWUsIDIpLFxuICAgICAgICAgIEMgPSBiWzBdLFxuICAgICAgICAgIFMgPSBiWzFdO1xuICAgICAgICBtLnB1c2goQywgUyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgciA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHggJiYgIXguZG9uZSAmJiAoaSA9IF8ucmV0dXJuKSAmJiBpLmNhbGwoXyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHcgPSBfX3ZhbHVlcyh5KSwgTSA9IHcubmV4dCgpOyAhTS5kb25lOyBNID0gdy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIEkgPSBNLnZhbHVlO1xuICAgICAgICBtLnB1c2goSSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIE0gJiYgIU0uZG9uZSAmJiAoYSA9IHcucmV0dXJuKSAmJiBhLmNhbGwodyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdiAmJiBtLnB1c2godik7XG4gICAgaWYgKDAgIT09IG0ubGVuZ3RoKSB7XG4gICAgICB2YXIgRiA9IFtdLFxuICAgICAgICBPID0gW107XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBqID0gX192YWx1ZXMobSksIEUgPSBqLm5leHQoKTsgIUUuZG9uZTsgRSA9IGoubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIEEgPSB7XG4gICAgICAgICAgICByZXNJZDogKEkgPSBFLnZhbHVlKS5yZXNJZCxcbiAgICAgICAgICAgIHR5cGU6IEkudHlwZSxcbiAgICAgICAgICAgIGR1b3hpYW9Db3VudDogSS5nZXREdW94aWFvQ291bnQoKVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKEkucmVzSWQgPT09IFJlc0lkLmVtWW9nYUNhcmRJZCkge1xuICAgICAgICAgICAgTy5wdXNoKEEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBGLnB1c2goQSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHMgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRSAmJiAhRS5kb25lICYmIChjID0gai5yZXR1cm4pICYmIGMuY2FsbChqKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAocykgdGhyb3cgcy5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zaHVmZmxlQXJyYXkoRik7XG4gICAgICB2YXIgWSA9IDAsXG4gICAgICAgIEcgPSAwO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgUCA9IF9fdmFsdWVzKHkpLCBCID0gUC5uZXh0KCk7ICFCLmRvbmU7IEIgPSBQLm5leHQoKSkge1xuICAgICAgICAgIEkgPSBCLnZhbHVlO1xuICAgICAgICAgIGlmIChZIDwgTy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlEYXRhVG9UaWxlKEksIE9bWV0sIGcpO1xuICAgICAgICAgICAgWSsrO1xuICAgICAgICAgIH0gZWxzZSBpZiAoRyA8IEYubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGx5RGF0YVRvVGlsZShJLCBGW0ddLCBnKTtcbiAgICAgICAgICAgIEcrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZiA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBCICYmICFCLmRvbmUgJiYgKHUgPSBQLnJldHVybikgJiYgdS5jYWxsKFApO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChmKSB0aHJvdyBmLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBSID0gX192YWx1ZXMoZCksIEwgPSBSLm5leHQoKTsgIUwuZG9uZTsgTCA9IFIubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGsgPSBfX3JlYWQoTC52YWx1ZSwgMik7XG4gICAgICAgICAgQyA9IGtbMF0sIFMgPSBrWzFdO1xuICAgICAgICAgIGlmIChZIDwgTy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlEYXRhVG9UaWxlKEMsIE9bWV0sIGcpO1xuICAgICAgICAgICAgWSsrO1xuICAgICAgICAgIH0gZWxzZSBpZiAoRyA8IEYubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGx5RGF0YVRvVGlsZShDLCBGW0ddLCBnKTtcbiAgICAgICAgICAgIEcrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFkgPCBPLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5hcHBseURhdGFUb1RpbGUoUywgT1tZXSwgZyk7XG4gICAgICAgICAgICBZKys7XG4gICAgICAgICAgfSBlbHNlIGlmIChHIDwgRi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlEYXRhVG9UaWxlKFMsIEZbR10sIGcpO1xuICAgICAgICAgICAgRysrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBoID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEwgJiYgIUwuZG9uZSAmJiAocCA9IFIucmV0dXJuKSAmJiBwLmNhbGwoUik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGgpIHRocm93IGguZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh2KSBpZiAoWSA8IE8ubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYXBwbHlEYXRhVG9UaWxlKHYsIE9bWV0sIGcpO1xuICAgICAgICBZKys7XG4gICAgICB9IGVsc2UgaWYgKEcgPCBGLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmFwcGx5RGF0YVRvVGlsZSh2LCBGW0ddLCBnKTtcbiAgICAgICAgRysrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZGVudGlmeVVubG9ja2VkWW9nYVRpbGVzKGUpIHtcbiAgICB2YXIgdCA9IGUuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgciA9IFtdO1xuICAgIHQudGlsZU9iamVjdE1hcCgpLmZvckVhY2goZnVuY3Rpb24gKGUsIGkpIHtcbiAgICAgIGUuaXNWYWxpZCAmJiBlLnJlc0lkID09PSBSZXNJZC5lbVlvZ2FDYXJkSWQgJiYgKHQuaXNDYXJkTG9jayhlKSB8fCByLnB1c2goaSkpO1xuICAgIH0pO1xuICAgIHIubGVuZ3RoO1xuICAgIHJldHVybiByO1xuICB9XG59Il19