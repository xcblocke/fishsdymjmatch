"use strict";
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