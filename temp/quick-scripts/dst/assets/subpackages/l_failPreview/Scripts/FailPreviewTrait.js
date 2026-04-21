
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_failPreview/Scripts/FailPreviewTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc0a70yCktBTq5j+BLXTtCr', 'FailPreviewTrait');
// subpackages/l_failPreview/Scripts/FailPreviewTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ShuffleEffect_1 = require("../../../Scripts/ShuffleEffect");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DynamicCurve_1 = require("../../../Scripts/types/DynamicCurve");
var DGameUseItem_1 = require("../../../Scripts/gamePlay/dot/DGameUseItem");
var FailPreviewTrait = /** @class */ (function (_super) {
    __extends(FailPreviewTrait, _super);
    function FailPreviewTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FailPreviewTrait_1 = FailPreviewTrait;
    FailPreviewTrait.getPreShuffleData = function () {
        return FailPreviewTrait_1._preShuffleData;
    };
    FailPreviewTrait.clearPreShuffleData = function () {
        FailPreviewTrait_1._preShuffleData = null;
    };
    FailPreviewTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FailPreviewTrait.prototype.onClrDailyHlp_getPreShf = function (e, t) {
        var r = this.handleGetPreShuffleData(e, "ClearDailyChallengeHelper");
        if (r) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: r
            });
        }
        else {
            t();
        }
    };
    FailPreviewTrait.prototype.onClrNormHlp_getPreShf = function (e, t) {
        var r = this.handleGetPreShuffleData(e, "ClearNormalHelper");
        if (r) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: r
            });
        }
        else {
            t();
        }
    };
    FailPreviewTrait.prototype.onClrTravelHlp_getPreShf = function (e, t) {
        var r = this.handleGetPreShuffleData(e, "ClearTravelHelper");
        if (r) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: r
            });
        }
        else {
            t();
        }
    };
    FailPreviewTrait.prototype.onIptNoMatch_getPreShf = function (e, t) {
        var r = this.handleGetPreShuffleData(e, "InputNoMatchFail");
        if (r) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: r
            });
        }
        else {
            t();
        }
    };
    FailPreviewTrait.prototype.onFailBhv_start = function (e, t) {
        var a, n = e.ins, i = e.args[0];
        if (n && n.context) {
            FailPreviewTrait_1._preShuffleData && this.updateIsBackInfo(n.context);
            if (null === (a = null == i ? void 0 : i.data) || void 0 === a ? void 0 : a.preShuffleData) {
                if (!i || !i.data) {
                    t();
                    return;
                }
                var o = i.data.shuffleNum || 0, l = mj.getClassByName("FailTrait");
                if (l && l.getInstance() && true === l.getInstance().eventEnabled) {
                    l.getInstance().showFailView(o);
                    t({
                        isBreak: true
                    });
                    return;
                }
            }
            t();
        }
        else
            t();
    };
    FailPreviewTrait.prototype.handleGetPreShuffleData = function (e) {
        var t = e.ins, r = null;
        if (t && "function" == typeof t) {
            r = t._gameContext;
        }
        else {
            t && t.gameContext && (r = t.gameContext);
        }
        return r ? this.computePreShuffleData(r) : null;
    };
    FailPreviewTrait.prototype.computePreShuffleData = function (e) {
        var t = this.preComputeShuffleResult(e, null);
        if (t) {
            FailPreviewTrait_1._preShuffleData = t;
            return t;
        }
        return null;
    };
    FailPreviewTrait.prototype.onIptShuffle_exec = function (e, t) {
        var r = e.args[0];
        if (r && r.preShuffleData) {
            var a = e.ins, n = a.gameContext;
            if (r.from !== GameInputEnum_1.EShuffleFrom.Free) {
                if (!n.getGameData().isShuffleEnough()) {
                    mj.EventManager.emit("SHOWTIPS", "Insufficient number of props.", cc.v2(0, 0));
                    t({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                    return;
                }
                var i = n.getGameData().getShuffleNums();
                n.getGameData().changeShuffleNums(-1);
                n.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Shuffle);
                n.getGameData().toolChange(GameTypeEnums_1.EItemId.Shuffle, -1);
                DynamicCurve_1.default.instance.useShuffle(n.gameType);
                var o = n.getGameData().getShuffleNums();
                DGameUseItem_1.DotGameUseItem.dot(n, {
                    itemId: GameTypeEnums_1.EItemId.Shuffle,
                    afterNum: o,
                    beforeNum: i,
                    from: r.from
                });
            }
            n.touchData.clear();
            n.getTileMapObject().unselectAllTileIds();
            var l = n.getTileMapObject().getLevelData();
            this.applyPreComputedShuffle(n, r.preShuffleData);
            n.getTileMapObject().updateCanMatchTiles();
            n.gameModifier.modifyShuffle();
            var f = n.getGameData().getLevelData();
            n.trackerModifier.triggerShuffle(f, l, r.from);
            a.pushUpdateShufflePropEffect(n.getGameData().getShuffleNums());
            a.pushShuffleEffect();
            a.pushUpdateMatchNumEffect();
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            t();
    };
    FailPreviewTrait.prototype.onIptShuffle_getEffect = function (e, t) {
        var r = e.ins.input;
        if (r && r.preShuffleData) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: new ShuffleEffect_1.ShuffleEffect({})
            });
        }
        else {
            t();
        }
    };
    FailPreviewTrait.prototype.preComputeShuffleResult = function (e) {
        var t, r, a, n, i, f, u = e.getTileMapObject();
        if (!u)
            return null;
        var c = {}, s = [];
        try {
            for (var p = __values(u.tileObjectMap()), h = p.next(); !h.done; h = p.next()) {
                var d = __read(h.value, 2), y = d[0];
                if ((w = d[1]).isValid) {
                    c[y] = w.resId;
                    var v = w.getPosition();
                    s.push({
                        tileId: y,
                        gridX: w.gridPosX,
                        gridY: w.gridPosY,
                        layer: w.layer,
                        resId: w.resId,
                        position: {
                            x: v.x,
                            y: v.y
                        },
                        isBack: false
                    });
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                h && !h.done && (r = p.return) && r.call(p);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        e.shuffleModifier.shuffle();
        var m = {}, g = [];
        try {
            for (var S = __values(u.tileObjectMap()), T = S.next(); !T.done; T = S.next()) {
                var I = __read(T.value, 2);
                y = I[0];
                if ((w = I[1]).isValid) {
                    m[y] = w.resId;
                    var P = w.getPosition();
                    g.push({
                        tileId: y,
                        gridX: w.gridPosX,
                        gridY: w.gridPosY,
                        layer: w.layer,
                        resId: w.resId,
                        position: {
                            x: P.x,
                            y: P.y
                        },
                        isBack: false
                    });
                }
            }
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                T && !T.done && (n = S.return) && n.call(S);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        var D = function D(e, t) {
            if (void 0 !== c[e]) {
                t.changeResId(c[e]);
                var r = s.find(function (t) {
                    return t.tileId === e;
                }), a = g.find(function (t) {
                    return t.tileId === e;
                });
                r && a && (r.gridX !== a.gridX || r.gridY !== a.gridY || (r.layer, a.layer));
            }
        };
        try {
            for (var _ = __values(u.tileObjectMap()), b = _.next(); !b.done; b = _.next()) {
                var w, k = __read(b.value, 2);
                D(y = k[0], w = k[1]);
            }
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                b && !b.done && (f = _.return) && f.call(_);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        return {
            timestamp: Date.now(),
            beforeMapping: c,
            afterMapping: m,
            tilePositions: s,
            tilePositionsAfter: g
        };
    };
    FailPreviewTrait.prototype.applyPreComputedShuffle = function (e, t) {
        var r, a, n = e.getTileMapObject(), i = t.afterMapping;
        try {
            for (var f = __values(n.tileObjectMap()), u = f.next(); !u.done; u = f.next()) {
                var c = __read(u.value, 2), s = c[0], p = c[1];
                if (void 0 !== i[s]) {
                    p.resId;
                    p.changeResId(i[s]);
                }
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (a = f.return) && a.call(f);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
    };
    FailPreviewTrait.prototype.updateIsBackInfo = function (e) {
        var t, a, n, i, l;
        if (FailPreviewTrait_1._preShuffleData) {
            var f = null === (l = e.getTileNodeMap) || void 0 === l ? void 0 : l.call(e);
            if (f) {
                try {
                    for (var u = __values(FailPreviewTrait_1._preShuffleData.tilePositions), c = u.next(); !c.done; c = u.next()) {
                        var s = c.value;
                        (d = f.get(s.tileId)) && void 0 !== d.isBack && (s.isBack = d.isBack);
                    }
                }
                catch (e) {
                    t = {
                        error: e
                    };
                }
                finally {
                    try {
                        c && !c.done && (a = u.return) && a.call(u);
                    }
                    finally {
                        if (t)
                            throw t.error;
                    }
                }
                try {
                    for (var p = __values(FailPreviewTrait_1._preShuffleData.tilePositionsAfter), h = p.next(); !h.done; h = p.next()) {
                        var d;
                        s = h.value;
                        (d = f.get(s.tileId)) && void 0 !== d.isBack && (s.isBack = d.isBack);
                    }
                }
                catch (e) {
                    n = {
                        error: e
                    };
                }
                finally {
                    try {
                        h && !h.done && (i = p.return) && i.call(p);
                    }
                    finally {
                        if (n)
                            throw n.error;
                    }
                }
            }
        }
    };
    var FailPreviewTrait_1;
    FailPreviewTrait.traitKey = "FailPreview";
    FailPreviewTrait._preShuffleData = null;
    FailPreviewTrait = FailPreviewTrait_1 = __decorate([
        mj.trait,
        mj.class("FailPreviewTrait")
    ], FailPreviewTrait);
    return FailPreviewTrait;
}(Trait_1.default));
exports.default = FailPreviewTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZhaWxQcmV2aWV3L1NjcmlwdHMvRmFpbFByZXZpZXdUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RixnRUFBK0Q7QUFDL0QsbUZBQWlGO0FBQ2pGLHdGQUFpRjtBQUNqRixvRUFBK0Q7QUFDL0QsMkVBQTRFO0FBSTVFO0lBQThDLG9DQUFLO0lBQW5EOztJQXFWQSxDQUFDO3lCQXJWb0IsZ0JBQWdCO0lBRzVCLGtDQUFpQixHQUF4QjtRQUNFLE9BQU8sa0JBQWdCLENBQUMsZUFBZSxDQUFDO0lBQzFDLENBQUM7SUFDTSxvQ0FBbUIsR0FBMUI7UUFDRSxrQkFBZ0IsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzFDLENBQUM7SUFDRCxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsa0RBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsRUFBRTtZQUNMLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCxpREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxFQUFFO1lBQ0wsQ0FBQyxDQUFDO2dCQUNB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b290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgeyBTaHVmZmxlRWZmZWN0IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9TaHVmZmxlRWZmZWN0JztcbmltcG9ydCB7IEVTaHVmZmxlRnJvbSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgRUl0ZW1JZCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgRHluYW1pY0N1cnZlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvdHlwZXMvRHluYW1pY0N1cnZlJztcbmltcG9ydCB7IERvdEdhbWVVc2VJdGVtIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVVc2VJdGVtJztcblxuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJGYWlsUHJldmlld1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWlsUHJldmlld1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkZhaWxQcmV2aWV3XCI7XG4gIHN0YXRpYyBfcHJlU2h1ZmZsZURhdGEgPSBudWxsO1xuICBzdGF0aWMgZ2V0UHJlU2h1ZmZsZURhdGEoKSB7XG4gICAgcmV0dXJuIEZhaWxQcmV2aWV3VHJhaXQuX3ByZVNodWZmbGVEYXRhO1xuICB9XG4gIHN0YXRpYyBjbGVhclByZVNodWZmbGVEYXRhKCkge1xuICAgIEZhaWxQcmV2aWV3VHJhaXQuX3ByZVNodWZmbGVEYXRhID0gbnVsbDtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25DbHJEYWlseUhscF9nZXRQcmVTaGYoZSwgdCkge1xuICAgIHZhciByID0gdGhpcy5oYW5kbGVHZXRQcmVTaHVmZmxlRGF0YShlLCBcIkNsZWFyRGFpbHlDaGFsbGVuZ2VIZWxwZXJcIik7XG4gICAgaWYgKHIpIHtcbiAgICAgIHQoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogclxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgb25DbHJOb3JtSGxwX2dldFByZVNoZihlLCB0KSB7XG4gICAgdmFyIHIgPSB0aGlzLmhhbmRsZUdldFByZVNodWZmbGVEYXRhKGUsIFwiQ2xlYXJOb3JtYWxIZWxwZXJcIik7XG4gICAgaWYgKHIpIHtcbiAgICAgIHQoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogclxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgb25DbHJUcmF2ZWxIbHBfZ2V0UHJlU2hmKGUsIHQpIHtcbiAgICB2YXIgciA9IHRoaXMuaGFuZGxlR2V0UHJlU2h1ZmZsZURhdGEoZSwgXCJDbGVhclRyYXZlbEhlbHBlclwiKTtcbiAgICBpZiAocikge1xuICAgICAgdCh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiByXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBvbklwdE5vTWF0Y2hfZ2V0UHJlU2hmKGUsIHQpIHtcbiAgICB2YXIgciA9IHRoaXMuaGFuZGxlR2V0UHJlU2h1ZmZsZURhdGEoZSwgXCJJbnB1dE5vTWF0Y2hGYWlsXCIpO1xuICAgIGlmIChyKSB7XG4gICAgICB0KHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG4gIG9uRmFpbEJodl9zdGFydChlLCB0KSB7XG4gICAgdmFyIGEsXG4gICAgICBuID0gZS5pbnMsXG4gICAgICBpID0gZS5hcmdzWzBdO1xuICAgIGlmIChuICYmIG4uY29udGV4dCkge1xuICAgICAgRmFpbFByZXZpZXdUcmFpdC5fcHJlU2h1ZmZsZURhdGEgJiYgdGhpcy51cGRhdGVJc0JhY2tJbmZvKG4uY29udGV4dCk7XG4gICAgICBpZiAobnVsbCA9PT0gKGEgPSBudWxsID09IGkgPyB2b2lkIDAgOiBpLmRhdGEpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEucHJlU2h1ZmZsZURhdGEpIHtcbiAgICAgICAgaWYgKCFpIHx8ICFpLmRhdGEpIHtcbiAgICAgICAgICB0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvID0gaS5kYXRhLnNodWZmbGVOdW0gfHwgMCxcbiAgICAgICAgICBsID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJGYWlsVHJhaXRcIik7XG4gICAgICAgIGlmIChsICYmIGwuZ2V0SW5zdGFuY2UoKSAmJiB0cnVlID09PSBsLmdldEluc3RhbmNlKCkuZXZlbnRFbmFibGVkKSB7XG4gICAgICAgICAgbC5nZXRJbnN0YW5jZSgpLnNob3dGYWlsVmlldyhvKTtcbiAgICAgICAgICB0KHtcbiAgICAgICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIGhhbmRsZUdldFByZVNodWZmbGVEYXRhKGUpIHtcbiAgICB2YXIgdCA9IGUuaW5zLFxuICAgICAgciA9IG51bGw7XG4gICAgaWYgKHQgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiB0KSB7XG4gICAgICByID0gdC5fZ2FtZUNvbnRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQgJiYgdC5nYW1lQ29udGV4dCAmJiAociA9IHQuZ2FtZUNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gciA/IHRoaXMuY29tcHV0ZVByZVNodWZmbGVEYXRhKHIpIDogbnVsbDtcbiAgfVxuICBjb21wdXRlUHJlU2h1ZmZsZURhdGEoZSkge1xuICAgIHZhciB0ID0gdGhpcy5wcmVDb21wdXRlU2h1ZmZsZVJlc3VsdChlLCBudWxsKTtcbiAgICBpZiAodCkge1xuICAgICAgRmFpbFByZXZpZXdUcmFpdC5fcHJlU2h1ZmZsZURhdGEgPSB0O1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIG9uSXB0U2h1ZmZsZV9leGVjKGUsIHQpIHtcbiAgICB2YXIgciA9IGUuYXJnc1swXTtcbiAgICBpZiAociAmJiByLnByZVNodWZmbGVEYXRhKSB7XG4gICAgICB2YXIgYSA9IGUuaW5zLFxuICAgICAgICBuID0gYS5nYW1lQ29udGV4dDtcbiAgICAgIGlmIChyLmZyb20gIT09IEVTaHVmZmxlRnJvbS5GcmVlKSB7XG4gICAgICAgIGlmICghbi5nZXRHYW1lRGF0YSgpLmlzU2h1ZmZsZUVub3VnaCgpKSB7XG4gICAgICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoXCJTSE9XVElQU1wiLCBcIkluc3VmZmljaWVudCBudW1iZXIgb2YgcHJvcHMuXCIsIGNjLnYyKDAsIDApKTtcbiAgICAgICAgICB0KHtcbiAgICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSBuLmdldEdhbWVEYXRhKCkuZ2V0U2h1ZmZsZU51bXMoKTtcbiAgICAgICAgbi5nZXRHYW1lRGF0YSgpLmNoYW5nZVNodWZmbGVOdW1zKC0xKTtcbiAgICAgICAgbi5nZXRHYW1lRGF0YSgpLnJlY29yZFRvb2xVc2UoRUl0ZW1JZC5TaHVmZmxlKTtcbiAgICAgICAgbi5nZXRHYW1lRGF0YSgpLnRvb2xDaGFuZ2UoRUl0ZW1JZC5TaHVmZmxlLCAtMSk7XG4gICAgICAgIER5bmFtaWNDdXJ2ZS5pbnN0YW5jZS51c2VTaHVmZmxlKG4uZ2FtZVR5cGUpO1xuICAgICAgICB2YXIgbyA9IG4uZ2V0R2FtZURhdGEoKS5nZXRTaHVmZmxlTnVtcygpO1xuICAgICAgICBEb3RHYW1lVXNlSXRlbS5kb3Qobiwge1xuICAgICAgICAgIGl0ZW1JZDogRUl0ZW1JZC5TaHVmZmxlLFxuICAgICAgICAgIGFmdGVyTnVtOiBvLFxuICAgICAgICAgIGJlZm9yZU51bTogaSxcbiAgICAgICAgICBmcm9tOiByLmZyb21cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBuLnRvdWNoRGF0YS5jbGVhcigpO1xuICAgICAgbi5nZXRUaWxlTWFwT2JqZWN0KCkudW5zZWxlY3RBbGxUaWxlSWRzKCk7XG4gICAgICB2YXIgbCA9IG4uZ2V0VGlsZU1hcE9iamVjdCgpLmdldExldmVsRGF0YSgpO1xuICAgICAgdGhpcy5hcHBseVByZUNvbXB1dGVkU2h1ZmZsZShuLCByLnByZVNodWZmbGVEYXRhKTtcbiAgICAgIG4uZ2V0VGlsZU1hcE9iamVjdCgpLnVwZGF0ZUNhbk1hdGNoVGlsZXMoKTtcbiAgICAgIG4uZ2FtZU1vZGlmaWVyLm1vZGlmeVNodWZmbGUoKTtcbiAgICAgIHZhciBmID0gbi5nZXRHYW1lRGF0YSgpLmdldExldmVsRGF0YSgpO1xuICAgICAgbi50cmFja2VyTW9kaWZpZXIudHJpZ2dlclNodWZmbGUoZiwgbCwgci5mcm9tKTtcbiAgICAgIGEucHVzaFVwZGF0ZVNodWZmbGVQcm9wRWZmZWN0KG4uZ2V0R2FtZURhdGEoKS5nZXRTaHVmZmxlTnVtcygpKTtcbiAgICAgIGEucHVzaFNodWZmbGVFZmZlY3QoKTtcbiAgICAgIGEucHVzaFVwZGF0ZU1hdGNoTnVtRWZmZWN0KCk7XG4gICAgICB0KHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uSXB0U2h1ZmZsZV9nZXRFZmZlY3QoZSwgdCkge1xuICAgIHZhciByID0gZS5pbnMuaW5wdXQ7XG4gICAgaWYgKHIgJiYgci5wcmVTaHVmZmxlRGF0YSkge1xuICAgICAgdCh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiBuZXcgU2h1ZmZsZUVmZmVjdCh7fSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG4gIHByZUNvbXB1dGVTaHVmZmxlUmVzdWx0KGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIHIsXG4gICAgICBhLFxuICAgICAgbixcbiAgICAgIGksXG4gICAgICBmLFxuICAgICAgdSA9IGUuZ2V0VGlsZU1hcE9iamVjdCgpO1xuICAgIGlmICghdSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGMgPSB7fSxcbiAgICAgIHMgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcCA9IF9fdmFsdWVzKHUudGlsZU9iamVjdE1hcCgpKSwgaCA9IHAubmV4dCgpOyAhaC5kb25lOyBoID0gcC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGQgPSBfX3JlYWQoaC52YWx1ZSwgMiksXG4gICAgICAgICAgeSA9IGRbMF07XG4gICAgICAgIGlmICgodyA9IGRbMV0pLmlzVmFsaWQpIHtcbiAgICAgICAgICBjW3ldID0gdy5yZXNJZDtcbiAgICAgICAgICB2YXIgdiA9IHcuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICBzLnB1c2goe1xuICAgICAgICAgICAgdGlsZUlkOiB5LFxuICAgICAgICAgICAgZ3JpZFg6IHcuZ3JpZFBvc1gsXG4gICAgICAgICAgICBncmlkWTogdy5ncmlkUG9zWSxcbiAgICAgICAgICAgIGxheWVyOiB3LmxheWVyLFxuICAgICAgICAgICAgcmVzSWQ6IHcucmVzSWQsXG4gICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICB4OiB2LngsXG4gICAgICAgICAgICAgIHk6IHYueVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzQmFjazogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBoICYmICFoLmRvbmUgJiYgKHIgPSBwLnJldHVybikgJiYgci5jYWxsKHApO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGUuc2h1ZmZsZU1vZGlmaWVyLnNodWZmbGUoKTtcbiAgICB2YXIgbSA9IHt9LFxuICAgICAgZyA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBTID0gX192YWx1ZXModS50aWxlT2JqZWN0TWFwKCkpLCBUID0gUy5uZXh0KCk7ICFULmRvbmU7IFQgPSBTLm5leHQoKSkge1xuICAgICAgICB2YXIgSSA9IF9fcmVhZChULnZhbHVlLCAyKTtcbiAgICAgICAgeSA9IElbMF07XG4gICAgICAgIGlmICgodyA9IElbMV0pLmlzVmFsaWQpIHtcbiAgICAgICAgICBtW3ldID0gdy5yZXNJZDtcbiAgICAgICAgICB2YXIgUCA9IHcuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICBnLnB1c2goe1xuICAgICAgICAgICAgdGlsZUlkOiB5LFxuICAgICAgICAgICAgZ3JpZFg6IHcuZ3JpZFBvc1gsXG4gICAgICAgICAgICBncmlkWTogdy5ncmlkUG9zWSxcbiAgICAgICAgICAgIGxheWVyOiB3LmxheWVyLFxuICAgICAgICAgICAgcmVzSWQ6IHcucmVzSWQsXG4gICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICB4OiBQLngsXG4gICAgICAgICAgICAgIHk6IFAueVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzQmFjazogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGEgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBUICYmICFULmRvbmUgJiYgKG4gPSBTLnJldHVybikgJiYgbi5jYWxsKFMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGEpIHRocm93IGEuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBEID0gZnVuY3Rpb24gRChlLCB0KSB7XG4gICAgICBpZiAodm9pZCAwICE9PSBjW2VdKSB7XG4gICAgICAgIHQuY2hhbmdlUmVzSWQoY1tlXSk7XG4gICAgICAgIHZhciByID0gcy5maW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdC50aWxlSWQgPT09IGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgYSA9IGcuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIHQudGlsZUlkID09PSBlO1xuICAgICAgICAgIH0pO1xuICAgICAgICByICYmIGEgJiYgKHIuZ3JpZFggIT09IGEuZ3JpZFggfHwgci5ncmlkWSAhPT0gYS5ncmlkWSB8fCAoci5sYXllciwgYS5sYXllcikpO1xuICAgICAgfVxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF8gPSBfX3ZhbHVlcyh1LnRpbGVPYmplY3RNYXAoKSksIGIgPSBfLm5leHQoKTsgIWIuZG9uZTsgYiA9IF8ubmV4dCgpKSB7XG4gICAgICAgIHZhciB3LFxuICAgICAgICAgIGsgPSBfX3JlYWQoYi52YWx1ZSwgMik7XG4gICAgICAgIEQoeSA9IGtbMF0sIHcgPSBrWzFdKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYiAmJiAhYi5kb25lICYmIChmID0gXy5yZXR1cm4pICYmIGYuY2FsbChfKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgYmVmb3JlTWFwcGluZzogYyxcbiAgICAgIGFmdGVyTWFwcGluZzogbSxcbiAgICAgIHRpbGVQb3NpdGlvbnM6IHMsXG4gICAgICB0aWxlUG9zaXRpb25zQWZ0ZXI6IGdcbiAgICB9O1xuICB9XG4gIGFwcGx5UHJlQ29tcHV0ZWRTaHVmZmxlKGUsIHQpIHtcbiAgICB2YXIgcixcbiAgICAgIGEsXG4gICAgICBuID0gZS5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICBpID0gdC5hZnRlck1hcHBpbmc7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGYgPSBfX3ZhbHVlcyhuLnRpbGVPYmplY3RNYXAoKSksIHUgPSBmLm5leHQoKTsgIXUuZG9uZTsgdSA9IGYubmV4dCgpKSB7XG4gICAgICAgIHZhciBjID0gX19yZWFkKHUudmFsdWUsIDIpLFxuICAgICAgICAgIHMgPSBjWzBdLFxuICAgICAgICAgIHAgPSBjWzFdO1xuICAgICAgICBpZiAodm9pZCAwICE9PSBpW3NdKSB7XG4gICAgICAgICAgcC5yZXNJZDtcbiAgICAgICAgICBwLmNoYW5nZVJlc0lkKGlbc10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgciA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHUgJiYgIXUuZG9uZSAmJiAoYSA9IGYucmV0dXJuKSAmJiBhLmNhbGwoZik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdXBkYXRlSXNCYWNrSW5mbyhlKSB7XG4gICAgdmFyIHQsIGEsIG4sIGksIGw7XG4gICAgaWYgKEZhaWxQcmV2aWV3VHJhaXQuX3ByZVNodWZmbGVEYXRhKSB7XG4gICAgICB2YXIgZiA9IG51bGwgPT09IChsID0gZS5nZXRUaWxlTm9kZU1hcCkgfHwgdm9pZCAwID09PSBsID8gdm9pZCAwIDogbC5jYWxsKGUpO1xuICAgICAgaWYgKGYpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciB1ID0gX192YWx1ZXMoRmFpbFByZXZpZXdUcmFpdC5fcHJlU2h1ZmZsZURhdGEudGlsZVBvc2l0aW9ucyksIGMgPSB1Lm5leHQoKTsgIWMuZG9uZTsgYyA9IHUubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgcyA9IGMudmFsdWU7XG4gICAgICAgICAgICAoZCA9IGYuZ2V0KHMudGlsZUlkKSkgJiYgdm9pZCAwICE9PSBkLmlzQmFjayAmJiAocy5pc0JhY2sgPSBkLmlzQmFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYyAmJiAhYy5kb25lICYmIChhID0gdS5yZXR1cm4pICYmIGEuY2FsbCh1KTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgcCA9IF9fdmFsdWVzKEZhaWxQcmV2aWV3VHJhaXQuX3ByZVNodWZmbGVEYXRhLnRpbGVQb3NpdGlvbnNBZnRlciksIGggPSBwLm5leHQoKTsgIWguZG9uZTsgaCA9IHAubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgZDtcbiAgICAgICAgICAgIHMgPSBoLnZhbHVlO1xuICAgICAgICAgICAgKGQgPSBmLmdldChzLnRpbGVJZCkpICYmIHZvaWQgMCAhPT0gZC5pc0JhY2sgJiYgKHMuaXNCYWNrID0gZC5pc0JhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIG4gPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGggJiYgIWguZG9uZSAmJiAoaSA9IHAucmV0dXJuKSAmJiBpLmNhbGwocCk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ==