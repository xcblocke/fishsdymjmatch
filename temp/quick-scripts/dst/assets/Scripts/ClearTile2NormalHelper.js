
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ClearTile2NormalHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3fd8vz1ARCcqOIqDHVuPVG', 'ClearTile2NormalHelper');
// Scripts/ClearTile2NormalHelper.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("./constant/BehaviorsEnum");
var Tile2Interface_1 = require("./simulator/constant/Tile2Interface");
var BlockInputRefEffect_1 = require("./BlockInputRefEffect");
var BombEffect_1 = require("./BombEffect");
var DaxiaoClearEffectEffect_1 = require("./DaxiaoClearEffectEffect");
var DaxiaoClearTipEffect_1 = require("./DaxiaoClearTipEffect");
var Tile2DuoxiaoComboEffect_1 = require("./Tile2DuoxiaoComboEffect");
var Tile2CheerEffect_1 = require("./Tile2CheerEffect");
var AllClearEffect_1 = require("./AllClearEffect");
var Tile2BeforeEndEffect_1 = require("./Tile2BeforeEndEffect");
var Tile2ComboEffect_1 = require("./Tile2ComboEffect");
var Tile2ScoreFlotEffect_1 = require("./Tile2ScoreFlotEffect");
var Tile2UpdateScoreEffect_1 = require("./Tile2UpdateScoreEffect");
var Tile2ClearEffect_1 = require("./Tile2ClearEffect");
var Tile2ClearEffectEffect_1 = require("./Tile2ClearEffectEffect");
var Tile2EndEffect_1 = require("./Tile2EndEffect");
var Tile2FailEffect_1 = require("./Tile2FailEffect");
var Tile2UpdateSlotBarEffect_1 = require("./Tile2UpdateSlotBarEffect");
var Tile2DianZanEffect_1 = require("./Tile2DianZanEffect");
var Tile2HitTipsEffect_1 = require("./Tile2HitTipsEffect");
var Tile2DianZanChecker_1 = require("./process/dianzan/Tile2DianZanChecker");
var Tile2ScreenEdgeEffect_1 = require("./Tile2ScreenEdgeEffect");
var Tile2ScreenTopEffect_1 = require("./Tile2ScreenTopEffect");
var Tile2SlotAdvanceEffect_1 = require("./Tile2SlotAdvanceEffect");
var Tile2RollCardEffect_1 = require("./Tile2RollCardEffect");
var Tile2LuckyEffect_1 = require("./Tile2LuckyEffect");
var Tile2PerfectEffect_1 = require("./Tile2PerfectEffect");
var Tile2MagnetEffect_1 = require("./Tile2MagnetEffect");
var Tile2MagnetMergeEffect_1 = require("./Tile2MagnetMergeEffect");
var Tile2BeforeFailEffect_1 = require("./Tile2BeforeFailEffect");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var Tile2MagnetHideEffect_1 = require("./Tile2MagnetHideEffect");
var CollectInterfact_1 = require("./constant/CollectInterfact");
var Tile2NormalBackEffect_1 = require("./Tile2NormalBackEffect");
var ClearTile2NormalHelper = /** @class */ (function () {
    function ClearTile2NormalHelper() {
    }
    ClearTile2NormalHelper.modifyStepCount = function () {
        this._gameContext.gameModifier.modifyStepCount();
    };
    ClearTile2NormalHelper.modifySlotBarStepCount = function () {
        this._gameContext.tile2SlotBarModifier.updateSlotBarStepCount();
    };
    ClearTile2NormalHelper.clearSlotBarStepCount = function () {
        this._gameContext.tile2SlotBarModifier.clearSlotBarStepCount();
    };
    ClearTile2NormalHelper.clearSlotBarClearStepCount = function () {
        this._gameContext.tile2SlotBarModifier.clearSlotBarClearStepCount();
    };
    ClearTile2NormalHelper.modifySlotBarClearStepCount = function () {
        this._gameContext.tile2SlotBarModifier.updateSlotBarClearStepCount();
    };
    ClearTile2NormalHelper.getMaxClearTileClearStep = function (e) {
        var t, o, n, r, a = this._gameContext.tile2SlotBarData, l = 0;
        try {
            for (var s = __values(e), c = s.next(); !c.done; c = s.next()) {
                var u = c.value;
                try {
                    for (var p = (n = void 0, __values(u)), f = p.next(); !f.done; f = p.next()) {
                        var d = f.value, h = a.getTileClearStep(d);
                        h > l && (l = h);
                    }
                }
                catch (e) {
                    n = {
                        error: e
                    };
                }
                finally {
                    try {
                        f && !f.done && (r = p.return) && r.call(p);
                    }
                    finally {
                        if (n)
                            throw n.error;
                    }
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
                c && !c.done && (o = s.return) && o.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return l;
    };
    ClearTile2NormalHelper.updateCanMatchTiles = function () {
        this._gameContext.getTileMapObject().updateCanMatchTiles();
    };
    ClearTile2NormalHelper.addCombo = function (e) {
        if (e === void 0) { e = 1; }
        this._gameContext.comboModifier.addCombo(e);
    };
    ClearTile2NormalHelper.calAddScore = function (e) {
        if (e === void 0) { e = 1; }
        return this._gameContext.scoreModifier.calAddScore(e);
    };
    ClearTile2NormalHelper.modifyClearHitTips = function (e) {
        return this._gameContext.tile2HitTipsModifier.modifyClearHitTips(e);
    };
    ClearTile2NormalHelper.checkIsShowMagnet = function () {
        return this._gameContext.tile2MagnetChecker.isCanMagnet() ? this._gameContext.tile2MagnetChecker.checkMagnet() : {
            triggerMagnet: false
        };
    };
    ClearTile2NormalHelper.parseDaxiaoData = function () {
        var e;
        if (!((null === (e = this._options.clearTileList) || void 0 === e ? void 0 : e.length) <= 0))
            for (var t = 0; t < this._options.clearTileList.length; t++) {
                var o = this._gameContext.tile2SlotBarModifier.getSlotBarSnapshot(), n = this._options.clearTileList[t], i = this._gameContext.daxiaoChecker.getCanClearDaxiaoCardInfos_tile2(n);
                if (i && i.length > 0) {
                    this._gameContext.tile2DaxiaoModifier.modifyDaxiaoCard(this._input, i);
                    var r = this._gameContext.tile2SlotBarModifier.getSlotBarSnapshot(), a = this._gameContext.tile2SlotBarChecker.getSlotBarChangeList(o, r), l = i.length, s = this.calSomeData(l);
                    this._options.tile2DaxiaoInfos[t] = {
                        daxiaoCardMatchInfos: i,
                        calData: s,
                        changeList: a
                    };
                }
            }
    };
    ClearTile2NormalHelper.checkResult = function () {
        var e = this._gameContext.tile2ResultChecker.checkIsEnd(), t = false;
        if (e) {
            var o = this._gameContext.getGameData();
            this._options.prevWinScore = o.getLastWinScore();
            this._options.prevWinComboNum = o.getLastWinComboNum();
            this._options.prevWinDuration = o.getLastWinDuration();
            this._options.winGameDuration = this._gameContext.gameTimeData.time;
            o.saveLastWinResult(o.getScore(), o.getComboNum(), this._options.winGameDuration);
            this._gameContext.gameModifier.modifyWinForTile2();
        }
        else
            t = this._gameContext.tile2ResultChecker.checkIsDead();
        this._options.isWin = e;
        this._options.isDead = t;
    };
    ClearTile2NormalHelper.initOptions = function () {
        this._options = {
            input: this._input,
            tileIds: [],
            addScore: 0,
            comboState: false,
            showComboDisplay: false,
            showScreenEdge: false,
            showScreenTop: false,
            comboNum: 0,
            isShowCheer: false,
            indexCheer: 0,
            slotBarSnapshotBefore: null,
            slotBarSnapshotAddTile: null,
            slotBarSnapshotAfter: null,
            clearSlotBarList: null,
            clearTileList: null,
            isWin: false,
            isDead: false,
            slotBarChangeList: [],
            slotBarChangeListAfter: [],
            slotBarChagneList2: [],
            tile2BombInfos: [],
            tile2DaxiaoInfos: {},
            prevWinScore: 0,
            prevWinComboNum: 0,
            prevWinDuration: 0,
            winGameDuration: 0,
            dianZanInfo: {
                isShow: false,
                tileId1: null,
                dianZanCondition: Tile2DianZanChecker_1.EDianZanCondition.None
            },
            rollCardDatas: [],
            magnetInfo: {
                triggerMagnet: false
            },
            isClearInSlotBar: false,
            isTriggerLucky: false
        };
    };
    ClearTile2NormalHelper.parseSlotBarChangeList = function () {
        var e, t, o = this._gameContext.tile2SlotBarChecker.getSlotBarChangeList(this._options.slotBarSnapshotBefore, this._options.slotBarSnapshotAddTile), n = this._gameContext.tile2SlotBarChecker.getSlotBarChangeList(this._options.slotBarSnapshotAddTile, this._options.slotBarSnapshotAfter), a = this._gameContext.tile2SlotBarChecker.getSlotBarChangeList(this._options.slotBarSnapshotBefore, this._options.slotBarSnapshotAfter);
        this._options.slotBarChangeList = o;
        this._options.slotBarChangeListAfter = n;
        this._options.slotBarChagneList2 = a;
        var l = this._gameContext.tile2SlotBarChecker.getSlotBarChangeListOnce(this._options.slotBarSnapshotBefore, this._options.slotBarSnapshotAddTile, this._options.slotBarSnapshotAfter, this._options.clearSlotBarList), s = this._gameContext.tile2RollCardModifier.modifyRollCardDatas();
        this._options.isTriggerLucky = s.length > 0;
        var c = function c(e) {
            var t = s.findIndex(function (t) {
                return t.tileId === e.tileId;
            });
            if (t >= 0) {
                var o = __read(s.splice(t, 1), 1)[0];
                e.rollCardData = o;
            }
        };
        try {
            for (var u = __values(l), p = u.next(); !p.done; p = u.next())
                c(p.value);
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                p && !p.done && (t = u.return) && t.call(u);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        this._options.rollCardDatas = s;
        this._options.SlotBarChangeListOnce = l;
    };
    ClearTile2NormalHelper.calSomeData = function (e) {
        if (e === void 0) { e = 1; }
        var t = {
            addScore: 0,
            targetScore: 0,
            isBreakBest: false,
            comboNum: 0,
            comboState: false,
            showComboDisplay: false,
            showScreenEdge: false,
            showScreenTop: false,
            showSlotAdvance: false,
            slotLevel: 0
        }, o = this._gameContext.getGameData();
        this.addCombo(e);
        var n = this.calAddScore();
        t.addScore = n;
        t.targetScore = o.getScore();
        var i = o.isBreakBest(), r = o.isBreakBest(), a = i != r && r;
        t.isBreakBest = a;
        var l = this._gameContext.tile2ComboChecker.checkComboDisplayState();
        t.comboNum = l.comboNum;
        t.comboState = l.comboState;
        t.showComboDisplay = l.showComboDisplay;
        t.showScreenEdge = l.showScreenEdge;
        t.showScreenTop = l.showScreenTop;
        if (l.showSlotAdvance) {
            t.showSlotAdvance = true;
            t.slotLevel = l.slotLevel;
            this._gameContext.comboModifier.updateSlotLevel(l.slotLevel);
        }
        return t;
    };
    ClearTile2NormalHelper.parseBombCardData = function () {
        for (var e = this, t = [], o = function o(t) {
            var o = e._gameContext.daxiaoChecker.getCanClearDaxiaoCardInfos_tile2(t);
            if (o && o.length > 0) {
                e._gameContext.tile2DaxiaoModifier.modifyDaxiaoCard(e._input, o);
                var n = o.length;
                e.addCombo(n);
                return o;
            }
        }, n = function n(i) {
            var r = e._gameContext.tile2BombModifier.parseBombCard(i);
            if (r) {
                var a = e._gameContext.tile2SlotBarModifier.getSlotBarSnapshot(), l = o(r.bombIds);
                e._gameContext.tile2SlotBarModifier.clear([r.bombIds], CollectInterfact_1.ECollectFrom.FromBomb);
                var s = e.calSomeData();
                e.parseDuoxiaoCardData([r.bombIds]);
                var c = e._gameContext.tile2SlotBarModifier.getSlotBarSnapshot(), u = e._gameContext.tile2SlotBarChecker.getSlotBarChangeList(a, c);
                t.push({
                    bombParams: r,
                    daxiaoCardMatchInfos: l,
                    calData: s,
                    changeList: u
                });
                n(r.bombIds);
            }
        }, i = 0; i < this._options.clearTileList.length; i++) {
            var r = this._options.clearTileList[i];
            n(r);
        }
        this._options.tile2BombInfos = t;
    };
    ClearTile2NormalHelper.parseDuoxiaoCardData = function (e) {
        for (var t = e || this._options.clearTileList, o = 0; o < t.length; o++) {
            var n = t[o];
            if (this._gameContext.duoxiaoChecker.canShowDuoxiaoCombo(n)) {
                var i = this._gameContext.duoxiaoChecker.getCanClearDuoxiaoCardInfos(n);
                i && this._gameContext.duoxiaoModifier.modifyDuoxiaoClearCount(i.count);
                this._options.isShowDuoxiaoCombo = true;
            }
        }
    };
    ClearTile2NormalHelper.parseNormalBackCardData = function () {
        var e = this._gameContext.tile2NormalBackModifier.modifyStatus();
        this._options.normalBackList = e;
    };
    ClearTile2NormalHelper.runClear = function (e, t, o, n) {
        var r, a, s, c;
        this._gameContext = e;
        this._input = t;
        this._baseInput = o;
        for (var u = n.tileIds || [], p = n.outTiles || [], f = [], d = 0; d < u.length; d++) {
            var h = u[d], y = this._gameContext.getTileMapObject().getTileObject(h);
            y && y.isValid && (!y.isCardLock() || p.includes(h)) && f.push(h);
        }
        if (!(f.length <= 0)) {
            this.initOptions();
            this.modifyStepCount();
            this.clearSlotBarStepCount();
            this.clearSlotBarClearStepCount();
            this._gameContext.tile2DianZanChecker.checkLockRollCard();
            var m = this._gameContext.tile2SlotBarModifier, v = this._gameContext.tile2DianZanChecker, g = m.getSlotBarSnapshot(), _ = v.checkSlotBarCanMatch(g, true), T = [];
            for (d = 0; d < f.length; d++) {
                h = f[d];
                this._gameContext.tile2DotTrackerModifier.addSlotBar(h);
                var C = m.addTile(h), b = m.getClearSlotBarList(T);
                C && b && b.length > 0 && (T = T.concat(b));
            }
            var E = m.getSlotBarSnapshot();
            if (v.checkAddTileCanDianZan(g, E)) {
                this._options.dianZanInfo.isShow = true;
                this.modifyDianZanInfo(Tile2DianZanChecker_1.EDianZanCondition.UnlockRollCardCanDianZan, g, E);
            }
            else
                this.modifyDianZanInfo(Tile2DianZanChecker_1.EDianZanCondition.ContinueRollCard, g, E);
            m.clearSlotBar(T);
            this._options.dianZanInfo.isShow || _ || this.modifyDianZanInfo(Tile2DianZanChecker_1.EDianZanCondition.SlotBarMatchNoRollCard, g, E);
            this.modifySlotBarStepCount();
            var S = m.getClearTileList(T);
            this._options.slotBarSnapshotBefore = g;
            this._options.slotBarSnapshotAddTile = E;
            this._options.clearSlotBarList = T;
            this._options.clearTileList = S;
            this.modifyMagnetInfo(n.magnetPair || 0);
            this._gameContext.tile2DianZanChecker.checkUnlockRollCard(E);
            if (T.length > 0) {
                this._gameContext.clearModifier.modifyManualMatchCount(this._input);
                this._gameContext.clearModifier.modifyAutoCollectTilesNum(this._input, 2 * S.length);
                this.parseDaxiaoData();
                var I = this._gameContext.getGameData();
                this.addCombo(1);
                var B, x = I.isBreakBest();
                B = (null === (s = this._options.magnetInfo) || void 0 === s ? void 0 : s.triggerMagnet) && (null === (c = this._options.magnetInfo) || void 0 === c ? void 0 : c.magnetMerge) ? this.calAddScore(S.length) : this.calAddScore();
                this._options.addScore = B;
                var M = I.isBreakBest(), O = x != M && M;
                this._options.isBreakBest = O;
                var D = this._gameContext.tile2ComboChecker.checkComboDisplayState();
                this._options.comboNum = D.comboNum;
                this._options.comboState = D.comboState;
                this._options.showComboDisplay = D.showComboDisplay;
                this._options.showScreenEdge = D.showScreenEdge;
                this._options.showScreenTop = D.showScreenTop;
                if (D.showSlotAdvance) {
                    this._options.showSlotAdvance = true;
                    this._options.slotLevel = D.slotLevel;
                    this._gameContext.comboModifier.updateSlotLevel(D.slotLevel);
                }
                var P = this.getMaxClearTileClearStep(T), A = this._gameContext.tile2CheerChecker.canShowCheerByStep(P);
                this._options.isShowCheer = A.isShow;
                this._options.indexCheer = A.index;
                this._options.showComboDisplay && (this._options.isShowCheer = false);
                this.modifySlotBarClearStepCount();
                var R = this.modifyClearHitTips(S);
                if (R.clearHit) {
                    this._options.clearHit = true;
                    this._options.hideHitIds = R.hideHitIds;
                }
                var N = m.getSlotBarSnapshot();
                this._options.slotBarSnapshotAfter = N;
                this.parseSlotBarChangeList();
                if (this._options.SlotBarChangeListOnce)
                    try {
                        for (var j = __values(this._options.SlotBarChangeListOnce), k = j.next(); !k.done; k = j.next()) {
                            var L = k.value;
                            if (this._options.isShowCheer && L.clearInfo && L.clearInfo.clearType === Tile2Interface_1.ETile2ClearType.InSlotBar) {
                                L.clearInfo.clearType = Tile2Interface_1.ETile2ClearType.OutSlotBar;
                                L.clearInfo.clearPosIndex = -1;
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
                            k && !k.done && (a = j.return) && a.call(j);
                        }
                        finally {
                            if (r)
                                throw r.error;
                        }
                    }
                this._options.SlotBarChangeListOnce && (this._options.isClearInSlotBar = this._options.SlotBarChangeListOnce.every(function (e) {
                    return !e.clearInfo || e.clearInfo.clearType === Tile2Interface_1.ETile2ClearType.InSlotBar;
                }));
                var G = this._gameContext.allClearChecker.checkInAllClear();
                if (G) {
                    this._options.isShowAllClear = G.allClear;
                    this._options.allClearEffectId = G.effectId;
                    this._options.allClearTileIds = G.ids;
                    G.allClear && this._gameContext.allClearModifier.changeAllClear(G.effectId, G.ids);
                }
                this.parseBombCardData();
                this.parseDuoxiaoCardData();
                this.parseNormalBackCardData();
                this._options.isPerfect = this._gameContext.tile2PerfectChecker.checkIsPerfect(this._options.slotBarSnapshotBefore, this._options.clearSlotBarList);
                this.checkResult();
                if (this._options.isDead || this._options.isWin) {
                    this._options.isShowDuoxiaoCombo = false;
                    this._gameContext.duoxiaoModifier.resetDuoxiaoClearCount();
                }
                this.pushClearEffects();
            }
            else {
                N = m.getSlotBarSnapshot();
                this._options.slotBarSnapshotAfter = N;
                this.parseSlotBarChangeList();
                this.parseNormalBackCardData();
                this.checkResult();
                this.pushAdd();
            }
            this.clearEnd(this._options);
        }
    };
    ClearTile2NormalHelper.clearEnd = function () { };
    ClearTile2NormalHelper.pushAdd = function () {
        var e = this._baseInput.addParallelParentNode(), t = {
            lastEffectId: e,
            newEffectId: e
        };
        this.tryExcuteHideMagnet(t);
        var o = this.tryPushRollCardAndUpdate(this._options.SlotBarChangeListOnce, t);
        this.tryPushNormalBackEffect(o);
        this.tryExcuteDianZan(o);
        this.tryExcuteShowMagnet(o);
        this.tryPushEndEffect();
    };
    ClearTile2NormalHelper.tryPushRollCardAndUpdate = function (e, t) {
        if (e === void 0) { e = []; }
        var o, n, r, a, l;
        try {
            for (var s = __values(this._options.rollCardDatas), c = s.next(); !c.done; c = s.next()) {
                var u = c.value, p = this._baseInput.addParallelParentNode(t.newEffectId), f = new Tile2RollCardEffect_1.Tile2RollCardEffect({
                    tileId: u.tileId,
                    frontToBack: u.frontToBack
                });
                this._baseInput.addParallelNode(p, f);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (n = s.return) && n.call(s);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        if (e.length <= 0)
            return t;
        try {
            for (var d = __values(e), h = d.next(); !h.done; h = d.next()) {
                var y = h.value, m = this._baseInput.addSerialParentNode(t.newEffectId);
                if (y.rollCardData) {
                    f = new Tile2RollCardEffect_1.Tile2RollCardEffect({
                        tileId: y.tileId,
                        frontToBack: null === (l = y.rollCardData) || void 0 === l ? void 0 : l.frontToBack
                    });
                    this._baseInput.addSerialNode(m, f);
                }
                var v = new Tile2UpdateSlotBarEffect_1.Tile2UpdateSlotBarEffect({
                    changeInfo: y
                });
                this._baseInput.addSerialNode(m, v);
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                h && !h.done && (a = d.return) && a.call(d);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return t;
    };
    ClearTile2NormalHelper.addToSlotBarEffects = function (e, t) {
        if (e === void 0) { e = []; }
        var o, n;
        if (!(e.length <= 0)) {
            try {
                for (var r = __values(e), a = r.next(); !a.done; a = r.next()) {
                    var l = a.value, s = new Tile2UpdateSlotBarEffect_1.Tile2UpdateSlotBarEffect({
                        changeInfo: l
                    }), c = this._baseInput.addParallelParentNode(t.newEffectId);
                    this._baseInput.addParallelNode(c, s);
                }
            }
            catch (e) {
                o = {
                    error: e
                };
            }
            finally {
                try {
                    a && !a.done && (n = r.return) && n.call(r);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
            return t;
        }
    };
    ClearTile2NormalHelper.paseDaxiaoClearTipsEffect = function (e, t) {
        var o, n = null === (o = this._options.tile2DaxiaoInfos) || void 0 === o ? void 0 : o[e];
        if (n && n.daxiaoCardMatchInfos && !(n.daxiaoCardMatchInfos.length <= 0)) {
            var i = new DaxiaoClearTipEffect_1.DaxiaoClearTipEffect({
                tileIds: this._options.tileIds,
                finalMatchInfos: n.daxiaoCardMatchInfos
            }), r = this._baseInput.addParallelParentNode(t.newEffectId);
            this._baseInput.addParallelNode(r, i);
            return {
                lastEffectId: t.newEffectId,
                newEffectId: r
            };
        }
    };
    ClearTile2NormalHelper.paseDaxiaoClearEffect = function (e, t) {
        var o, n = null === (o = this._options.tile2DaxiaoInfos) || void 0 === o ? void 0 : o[e];
        if (n && n.daxiaoCardMatchInfos && !(n.daxiaoCardMatchInfos.length <= 0)) {
            var i = new DaxiaoClearEffectEffect_1.DaxiaoClearEffectEffect({
                tileIds: this._options.tileIds,
                finalMatchInfos: n.daxiaoCardMatchInfos
            }), r = this._baseInput.addParallelParentNode(t.newEffectId);
            this._baseInput.addParallelNode(r, i);
            return {
                lastEffectId: t.newEffectId,
                newEffectId: r
            };
        }
    };
    ClearTile2NormalHelper.paseBombEffect = function (e) {
        var t = this._options.tile2BombInfos;
        if (t && !(t.length <= 0))
            for (var o = e.newEffectId, n = this._baseInput.addSerialParentNode(o), i = 0; i < t.length; i++) {
                var r = t[i], a = this._baseInput.addSerialParentNode(n), l = new BombEffect_1.BombEffect({
                    pos1: r.bombParams.pos1,
                    pos2: r.bombParams.pos2,
                    bombIds: r.bombParams.bombIds
                });
                this._baseInput.addSerialNode(a, l);
                if (r.daxiaoCardMatchInfos && r.daxiaoCardMatchInfos.length > 0) {
                    var s = this._baseInput.addSerialParentNode(a), f = new DaxiaoClearTipEffect_1.DaxiaoClearTipEffect({
                        tileIds: this._options.tileIds,
                        finalMatchInfos: r.daxiaoCardMatchInfos
                    });
                    this._baseInput.addSerialNode(s, f);
                    var d = new DaxiaoClearEffectEffect_1.DaxiaoClearEffectEffect({
                        tileIds: this._options.tileIds,
                        finalMatchInfos: r.daxiaoCardMatchInfos
                    });
                    this._baseInput.addSerialNode(s, d);
                }
                var h = this._baseInput.addParallelParentNode(a), y = this._baseInput.addSerialParentNode(h), _ = new Tile2ScoreFlotEffect_1.Tile2ScoreFlotEffect({
                    tileId: r.bombParams.bombIds[0],
                    lastTileId: r.bombParams.bombIds[1],
                    isCombo: r.calData.comboState,
                    addScore: r.calData.addScore
                });
                this._baseInput.addSerialNode(y, _);
                var T = this._gameContext.getGameData(), C = new Tile2UpdateScoreEffect_1.Tile2UpdateScoreEffect({
                    addScore: r.calData.addScore,
                    targetScore: T.getScore(),
                    isShowCombo: r.calData.comboState
                });
                this._baseInput.addSerialNode(y, C);
                var b = new Tile2ComboEffect_1.Tile2ComboEffect({
                    comboNum: r.calData.comboNum
                });
                this._baseInput.addParallelNode(h, b);
                r.changeList && r.changeList.length > 0 && this.addToSlotBarEffects(r.changeList, {
                    lastEffectId: h,
                    newEffectId: h
                });
                i === t.length - 1 && this._options.isWin && (this._options.insertEndEffectId = h);
            }
    };
    ClearTile2NormalHelper.parseDuoxiaoEffect = function (e, t) {
        if (t === void 0) { t = BehaviorsEnum_1.EInsertType.Serial; }
        if (this._options.isShowDuoxiaoCombo && !this._options.tile2HasPushDuoxiao) {
            this._options.tile2HasPushDuoxiao = true;
            var o = new Tile2DuoxiaoComboEffect_1.Tile2DuoxiaoComboEffect({
                duoxiaoCount: this._gameContext.getDuoxiaoClearCount()
            });
            if (t === BehaviorsEnum_1.EInsertType.Serial) {
                var n = this._baseInput.addSerialParentNode(e.newEffectId);
                this._baseInput.addSerialNode(n, o);
            }
            else {
                var i = this._baseInput.addParallelParentNode(e.newEffectId);
                this._baseInput.addParallelNode(i, o);
            }
        }
    };
    ClearTile2NormalHelper.tryPushBlock = function (e) {
        if (this._options.isShowDuoxiaoCombo) {
            var t = new BlockInputRefEffect_1.BlockInputRefEffect({
                block: e,
                from: "duoxiaoCombo"
            }), o = this._baseInput.addParallelParentNode();
            this._baseInput.addParallelNode(o, t);
        }
    };
    ClearTile2NormalHelper.tryPushClearHitTipsEffect = function () {
        if (this._options.clearHit && this._options.hideHitIds && this._options.hideHitIds.length > 0) {
            var e = this._baseInput.addParallelParentNode(), t = {
                lastEffectId: e,
                newEffectId: e
            }, o = new Tile2HitTipsEffect_1.Tile2HitTipsEffect({
                isClearHit: true,
                tileId1: this._options.hideHitIds[0] || "",
                tileId2: this._options.hideHitIds[1] || ""
            }), n = this._baseInput.addParallelParentNode(t.newEffectId);
            this._baseInput.addParallelNode(n, o);
            return t;
        }
    };
    ClearTile2NormalHelper.pushRollCardEffects = function (e) {
        var t, o;
        try {
            for (var n = __values(this._options.rollCardDatas), r = n.next(); !r.done; r = n.next()) {
                var a = r.value, l = new Tile2RollCardEffect_1.Tile2RollCardEffect({
                    tileId: a.tileId,
                    frontToBack: a.frontToBack
                }), s = this._baseInput.addParallelParentNode(e.newEffectId);
                this._baseInput.addParallelNode(s, l);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (o = n.return) && o.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    ClearTile2NormalHelper.pushLuckyEffect = function (e) {
        var t = new Tile2LuckyEffect_1.Tile2LuckyEffect({}), o = this._baseInput.addSerialParentNode(e.newEffectId);
        this._baseInput.addSerialNode(o, t);
    };
    ClearTile2NormalHelper.tryShowPerfect = function (e) {
        if (this._options.isPerfect) {
            var t = new Tile2PerfectEffect_1.Tile2PerfectEffect({}), o = this._baseInput.addParallelParentNode(e.newEffectId);
            this._baseInput.addParallelNode(o, t);
        }
    };
    ClearTile2NormalHelper.tryPushAddToSlotBarEffects = function (e, t) {
        if (e === void 0) { e = []; }
        var o, n, r;
        var a = this._baseInput.addParallelParentNode(t.newEffectId), l = {
            lastEffectId: t.newEffectId,
            newEffectId: a
        };
        try {
            for (var s = __values(e), c = s.next(); !c.done; c = s.next()) {
                var u = c.value, p = this._baseInput.addSerialParentNode(l.newEffectId), f = {
                    lastEffectId: l.newEffectId,
                    newEffectId: p
                };
                if (u.rollCardData) {
                    var d = new Tile2RollCardEffect_1.Tile2RollCardEffect({
                        tileId: u.tileId,
                        frontToBack: null === (r = u.rollCardData) || void 0 === r ? void 0 : r.frontToBack
                    });
                    this._baseInput.addSerialNode(f.newEffectId, d);
                }
                var h = new Tile2UpdateSlotBarEffect_1.Tile2UpdateSlotBarEffect({
                    changeInfo: u
                });
                this._baseInput.addSerialNode(f.newEffectId, h);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (n = s.return) && n.call(s);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
    };
    ClearTile2NormalHelper.tryPushAllClearEffect = function (e) {
        var t, o, n, r, a = this._options.clearSlotBarList, l = [], s = new Map(), c = this._options.SlotBarChangeListOnce, u = new Set();
        try {
            for (var p = __values(a), f = p.next(); !f.done; f = p.next()) {
                var d = f.value, h = this._gameContext.getTileMapObject().getTileObjectByPosId(d[0]), y = this._gameContext.getTileMapObject().getTileObjectByPosId(d[1]);
                if (h && y) {
                    u.add(h.id);
                    u.add(y.id);
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
                f && !f.done && (o = p.return) && o.call(p);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        try {
            for (var m = __values(c), v = m.next(); !v.done; v = m.next()) {
                var g = v.value;
                if (u.has(g.tileId)) {
                    s.set(g.tileId, g);
                }
                else {
                    l.push(g);
                }
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                v && !v.done && (r = m.return) && r.call(m);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        var _ = this._baseInput.addParallelParentNode(e.newEffectId), T = {
            lastEffectId: e.newEffectId,
            newEffectId: _
        };
        l.length > 0 && this.tryPushAddToSlotBarEffects(l, T);
        for (var C = this._baseInput.addParallelParentNode(e.newEffectId), b = {
            lastEffectId: e.newEffectId,
            newEffectId: C
        }, E = b, S = 0; S < a.length; S++) {
            var I = this._baseInput.addSerialParentNode(b.newEffectId), w = {
                lastEffectId: b.newEffectId,
                newEffectId: I
            }, B = [], x = this._gameContext.getTileMapObject().getTileObjectByPosId(a[S][0]), M = this._gameContext.getTileMapObject().getTileObjectByPosId(a[S][1]);
            if (x && M) {
                B.push(x.id);
                B.push(M.id);
                var O = s.get(x.id), D = s.get(M.id), P = [];
                O && P.push(O);
                D && P.push(D);
                E = this.tryPushClearEffect(S, B, P, w);
            }
        }
        return E;
    };
    ClearTile2NormalHelper.tryPushClearEffect = function (e, t, o, n) {
        var r, a, l = n;
        if (o && o.length > 0) {
            var s = this._baseInput.addSerialParentNode(n.newEffectId);
            l = {
                lastEffectId: n.newEffectId,
                newEffectId: s
            };
            this.tryPushAddToSlotBarEffects(o, l);
        }
        var c = this._baseInput.addSerialParentNode(l.newEffectId), u = {
            lastEffectId: l.newEffectId,
            newEffectId: c
        }, p = null;
        try {
            for (var f = __values(o), d = f.next(); !d.done; d = f.next()) {
                var h = d.value;
                if (h.clearInfo && t.includes(h.tileId)) {
                    p = h.clearInfo.clearType;
                    break;
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
                d && !d.done && (a = f.return) && a.call(f);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        var y = new Tile2ClearEffect_1.Tile2ClearEffect({
            tileIds: t,
            clearType: p
        }), m = this._baseInput.addParallelParentNode(u.newEffectId);
        this._baseInput.addParallelNode(m, y);
        this.paseDaxiaoClearTipsEffect(e, l);
        var v = this._baseInput.addSerialParentNode(l.newEffectId), g = {
            lastEffectId: l.newEffectId,
            newEffectId: v
        }, T = this._baseInput.addParallelParentNode(g.newEffectId), C = {
            lastEffectId: g.newEffectId,
            newEffectId: T
        }, b = this._gameContext.getTileMapObject().getTileObject(t[0]), E = this._gameContext.getTileMapObject().getTileObject(t[1]), S = this.createTile2ClearEffectEffect(b, E, this._options), I = this._baseInput.addParallelParentNode(C.newEffectId);
        this._baseInput.addParallelNode(I, S);
        this.paseDaxiaoClearEffect(e, C);
        return C;
    };
    ClearTile2NormalHelper.pushClearEffects = function () {
        var e, t;
        this.tryPushBlock(true);
        this.tryPushClearHitTipsEffect();
        var o = this._baseInput.addParallelParentNode(), n = {
            lastEffectId: o,
            newEffectId: o
        };
        this.pushRollCardEffects(n);
        if (this._options.isTriggerLucky && !this._options.showComboDisplay && !this._options.isShowCheer) {
            var i = this._baseInput.addParallelParentNode(), r = {
                lastEffectId: i,
                newEffectId: i
            };
            this.pushLuckyEffect(r);
        }
        var l, s = this._baseInput.addParallelParentNode(), c = {
            lastEffectId: s,
            newEffectId: s
        };
        this.tryExcuteHideMagnet(c);
        l = (null === (e = this._options.magnetInfo) || void 0 === e ? void 0 : e.triggerMagnet) && (null === (t = this._options.magnetInfo) || void 0 === t ? void 0 : t.magnetMerge) ? this.pushMagnetMergeEffects(c) : this.tryPushAllClearEffect(c);
        this.tryPushNormalBackEffect(c);
        this.pushScoreFlotEffect(l);
        this.tryExcuteShowCombo(l);
        this.tryShowCheer(l);
        this.tryShowPerfect(l);
        this.tryShowScreenEdge(l);
        this.tryShowScreenTop(l);
        this.tryShowSlotAdvance(l);
        this.tryExcuteDianZan(l);
        this.tryExcuteShowMagnet(l);
        this.paseBombEffect(l);
        this.parseDuoxiaoEffect(l, BehaviorsEnum_1.EInsertType.Parallel);
        var u = this.tryExcuteAllClear(l);
        this.tryPushBlock(false);
        var p = l;
        this._options.insertEndEffectId && (p = {
            lastEffectId: this._options.insertEndEffectId,
            newEffectId: this._options.insertEndEffectId
        });
        this.tryPushEndEffect(p, u);
    };
    ClearTile2NormalHelper.pushSlotBarEffects = function () { };
    ClearTile2NormalHelper.pushMagnetMergeEffects = function (e) {
        var t = this._baseInput.addParallelParentNode(e.newEffectId), o = {
            lastEffectId: e.newEffectId,
            newEffectId: t
        }, n = this._baseInput.addSerialParentNode(o.newEffectId), i = {
            lastEffectId: o.newEffectId,
            newEffectId: n
        }, r = new Tile2MagnetMergeEffect_1.Tile2MagnetMergeEffect({
            clearTileIds: this._options.clearTileList
        });
        this._baseInput.addSerialNode(i.newEffectId, r);
        var a = this._baseInput.addParallelParentNode(i.newEffectId), l = {
            lastEffectId: i.newEffectId,
            newEffectId: a
        };
        this.addToSlotBarEffects(this._options.slotBarChangeListAfter, l);
        return l;
    };
    ClearTile2NormalHelper.createTile2ClearEffectEffect = function (e, t) {
        var o = [], n = false;
        if (e && t) {
            o.push(e.id);
            o.push(t.id);
            e.checkHasType(TileTypeEnum_1.ETileType.RankCard) && t.checkHasType(TileTypeEnum_1.ETileType.RankCard) && (n = true);
        }
        return new Tile2ClearEffectEffect_1.Tile2ClearEffectEffect({
            tileIds: o,
            isRankCard: n
        });
    };
    ClearTile2NormalHelper.tryPushEndEffect = function (e, t) {
        this._baseInput.addParallelParentNode();
        if (this._options.isDead)
            this.pushFailEffect();
        else if (this._options.isWin) {
            var o = new Tile2EndEffect_1.Tile2EndEffect({
                score: this._gameContext.getGameData().getScore(),
                settlementScore: this._gameContext.getGameData().getSettlementScore(),
                perfectMaxScore: this._gameContext.scoreModifier.getPerfectMaxScore(),
                curLv: this._gameContext.getGameData().getLevelId(),
                comboNum: this._gameContext.getGameData().getComboNum(),
                curMaxCombo: this._gameContext.getGameData().getCurMaxCombo(),
                gameDuration: this._options.winGameDuration,
                prevScore: this._options.prevWinScore,
                prevComboNum: this._options.prevWinComboNum,
                prevGameDuration: this._options.prevWinDuration,
                maxComboNum: this._gameContext.getGameData().getCurLevelComboMaxLimit()
            });
            if (t) {
                var n = this._baseInput.addSerialParentNode(t.newEffectId), i = new Tile2BeforeEndEffect_1.Tile2BeforeEndEffect({});
                this._baseInput.addSerialNode(n, i);
                this._baseInput.addSerialNode(n, o);
            }
            else if (e) {
                i = new Tile2BeforeEndEffect_1.Tile2BeforeEndEffect({});
                var r = this._baseInput.addParallelParentNode(e.newEffectId);
                n = this._baseInput.addSerialParentNode(r);
                this._baseInput.addSerialNode(n, i);
                this._baseInput.addSerialNode(n, o);
            }
            else {
                var a = this._baseInput.addParallelParentNode(), l = (i = new Tile2BeforeEndEffect_1.Tile2BeforeEndEffect({}), this._baseInput.addSerialParentNode(a));
                this._baseInput.addSerialNode(l, i);
                this._baseInput.addSerialNode(l, o);
            }
        }
    };
    ClearTile2NormalHelper.tryShowCheer = function (e) {
        if (this._options.isShowCheer) {
            var t = this._gameContext.getGameData().getComboNum(), o = this._options.tileIds, n = new Tile2CheerEffect_1.Tile2CheerEffect({
                index: this._options.indexCheer,
                comboNum: t,
                tileId1: o[1] || "",
                tileId2: o[0] || ""
            }), i = this._baseInput.addParallelParentNode(e.newEffectId);
            this._baseInput.addParallelNode(i, n);
        }
    };
    ClearTile2NormalHelper.pushScoreFlotEffect = function (e) {
        var t, o, n, r, a = this._options.comboState, l = this._options.addScore, s = [];
        try {
            for (var c = __values(this._options.clearSlotBarList), u = c.next(); !u.done; u = c.next()) {
                var p = u.value, f = this._gameContext.getTileMapObject().getTileObjectByPosId(p[0]), d = this._gameContext.getTileMapObject().getTileObjectByPosId(p[1]);
                if (f && d) {
                    s.push(f.id);
                    s.push(d.id);
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
                u && !u.done && (o = c.return) && o.call(c);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var h = (null === (n = this._options.magnetInfo) || void 0 === n ? void 0 : n.triggerMagnet) && (null === (r = this._options.magnetInfo) || void 0 === r ? void 0 : r.magnetMerge), y = new Tile2ScoreFlotEffect_1.Tile2ScoreFlotEffect({
            tileId: s[0],
            lastTileId: s[1],
            isCombo: a,
            addScore: l,
            isMagnetMerge: h
        }), m = this._gameContext.getGameData(), _ = new Tile2UpdateScoreEffect_1.Tile2UpdateScoreEffect({
            addScore: l,
            targetScore: m.getScore(),
            isShowCombo: a
        }), T = this._baseInput.addSerialParentNode(e.newEffectId);
        this._baseInput.addSerialNode(T, y);
        this._baseInput.addSerialNode(T, _);
        return {
            lastEffectId: e.newEffectId,
            newEffectId: T
        };
    };
    ClearTile2NormalHelper.tryExcuteShowCombo = function (e) {
        this._options.showComboDisplay && this.pushTile2ComboEffect(this._options.comboNum, e);
    };
    ClearTile2NormalHelper.pushTile2ComboEffect = function (e, t) {
        var o = new Tile2ComboEffect_1.Tile2ComboEffect({
            comboNum: e
        }), n = this._baseInput.addParallelParentNode(t.newEffectId);
        this._baseInput.addParallelNode(n, o);
        return {
            lastEffectId: t.newEffectId,
            newEffectId: n
        };
    };
    ClearTile2NormalHelper.tryShowScreenEdge = function (e) {
        this._options.showScreenEdge && this.pushScreenEdgeEffect(e);
    };
    ClearTile2NormalHelper.pushScreenEdgeEffect = function (e) {
        var t = new Tile2ScreenEdgeEffect_1.Tile2ScreenEdgeEffect({
            comboNum: this._options.comboNum
        }), o = this._baseInput.addParallelParentNode(e.newEffectId);
        this._baseInput.addParallelNode(o, t);
        return {
            lastEffectId: e.newEffectId,
            newEffectId: o
        };
    };
    ClearTile2NormalHelper.tryShowScreenTop = function (e) {
        this._options.showScreenTop && this.pushScreenTopEffect(e);
    };
    ClearTile2NormalHelper.pushScreenTopEffect = function (e) {
        var t = new Tile2ScreenTopEffect_1.Tile2ScreenTopEffect({}), o = this._baseInput.addParallelParentNode(e.newEffectId);
        this._baseInput.addParallelNode(o, t);
        return {
            lastEffectId: e.newEffectId,
            newEffectId: o
        };
    };
    ClearTile2NormalHelper.tryShowSlotAdvance = function (e) {
        this._options.showSlotAdvance && this.pushSlotAdvanceEffect(e);
    };
    ClearTile2NormalHelper.pushSlotAdvanceEffect = function (e) {
        var t = new Tile2SlotAdvanceEffect_1.Tile2SlotAdvanceEffect({
            slotLevel: this._options.slotLevel
        }), o = this._baseInput.addParallelParentNode(e.newEffectId);
        this._baseInput.addParallelNode(o, t);
        return {
            lastEffectId: e.newEffectId,
            newEffectId: o
        };
    };
    ClearTile2NormalHelper.tryExcuteAllClear = function (e) {
        var t, o, n;
        if (this._options.isShowAllClear) {
            var i, r = new AllClearEffect_1.AllClearEffect({
                effectId: this._options.allClearEffectId || 1,
                tileIds: null !== (t = this._options.allClearTileIds) && void 0 !== t ? t : []
            });
            i = ((null === (o = this._options.magnetInfo) || void 0 === o ? void 0 : o.triggerMagnet) && (null === (n = this._options.magnetInfo) || void 0 === n || n.magnetMerge), this._baseInput.addSerialParentNode(e.newEffectId));
            this._baseInput.addSerialNode(i, r);
            return {
                lastEffectId: i,
                newEffectId: i
            };
        }
    };
    ClearTile2NormalHelper.getPreShuffleData = function () {
        return null;
    };
    ClearTile2NormalHelper.pushFailEffect = function () {
        var e, t = this._gameContext.getGameData(), o = this._gameContext.getTileMapObject(), n = [], i = (null !== (e = null == t ? void 0 : t.slotBarIds) && void 0 !== e ? e : []).map(function (e) {
            var t, i, r = null == o ? void 0 : o.getTileObjectByPosId(e);
            n.push(null == r ? void 0 : r.id);
            return {
                resId: null == r ? void 0 : r.resId,
                isDaxiao: null !== (t = null == r ? void 0 : r.checkHasType(TileTypeEnum_1.ETileType.DaxiaoCard)) && void 0 !== t && t,
                duoxiaoCount: null !== (i = null == r ? void 0 : r.getDuoxiaoCount()) && void 0 !== i ? i : 0
            };
        }), r = this._gameContext.tile2ReviveChecker.getReviveCount(), a = new Tile2PerfectEffect_1.Tile2PerfectEffect({
            isClear: true
        }), l = this._baseInput.addParallelParentNode();
        this._baseInput.addParallelNode(l, a);
        var s = new Tile2BeforeFailEffect_1.Tile2BeforeFailEffect({
            tileIds: n,
            reviveNum: r
        }), c = this._baseInput.addParallelParentNode();
        this._baseInput.addParallelNode(c, s);
        var u = new Tile2FailEffect_1.Tile2FailEffect({
            tiles: i,
            reviveNum: r,
            tilePreviewLayout: "threePlusOne"
        }), p = this._baseInput.addParallelParentNode();
        this._baseInput.addParallelNode(p, u);
        return {
            lastEffectId: p,
            newEffectId: p
        };
    };
    ClearTile2NormalHelper.tryExcuteDianZan = function (e) {
        var t, o, n, i = null === (t = this._options.dianZanInfo) || void 0 === t ? void 0 : t.isShow;
        if (this._options.isDead || this._options.isWin)
            this._gameContext.tile2SlotBarData.clearCanDianZanTileIds();
        else if (e && i) {
            var r = null === (o = this._options.dianZanInfo) || void 0 === o ? void 0 : o.tileId1;
            if (r) {
                var a = new Tile2DianZanEffect_1.Tile2DianZanEffect({
                    tileId1: r,
                    dianZanCondition: (null === (n = this._options.dianZanInfo) || void 0 === n ? void 0 : n.dianZanCondition) || 0
                }), l = this._baseInput.addParallelParentNode(e.newEffectId);
                this._baseInput.addParallelNode(l, a);
            }
        }
    };
    ClearTile2NormalHelper.modifyDianZanInfo = function (e, t, o) {
        if (o && !(o.length <= 0)) {
            if (e === Tile2DianZanChecker_1.EDianZanCondition.ContinueRollCard) {
                this._options.dianZanInfo.isShow = this._gameContext.tile2DianZanChecker.checkContinueRollCard(o);
            }
            else {
                e === Tile2DianZanChecker_1.EDianZanCondition.SlotBarMatchNoRollCard && (this._options.dianZanInfo.isShow = this._gameContext.tile2DianZanChecker.checkSlotBarCanMatch(t, true));
            }
            if (this._options.dianZanInfo.isShow) {
                var n = o[o.length - 1], i = this._gameContext.getTileMapObject().getTileObjectByPosId(n);
                if (i && i.isValid) {
                    this._options.dianZanInfo.tileId1 = i.id;
                    this._options.dianZanInfo.dianZanCondition = e;
                }
                else
                    this._options.dianZanInfo.isShow = false;
            }
        }
    };
    ClearTile2NormalHelper.modifyMagnetInfo = function (e) {
        if (0 == e) {
            this._options.clearSlotBarList && 0 != this._options.clearSlotBarList.length || (this._options.magnetInfo = this.checkIsShowMagnet());
        }
        else {
            this._options.magnetInfo = {
                triggerMagnet: true,
                isShowIconItem: false,
                magnetCount: 0,
                magnetMerge: true
            };
        }
    };
    ClearTile2NormalHelper.tryExcuteShowMagnet = function (e) {
        var t = this._options.magnetInfo;
        if (e && t && !this._options.isDead && (null == t ? void 0 : t.triggerMagnet) && !t.magnetMerge && t.isShowIconItem) {
            var o = new Tile2MagnetEffect_1.Tile2MagnetEffect({
                magnetCount: this._options.magnetInfo.magnetCount
            }), n = this._baseInput.addParallelParentNode(e.newEffectId);
            this._baseInput.addParallelNode(n, o);
        }
    };
    ClearTile2NormalHelper.tryExcuteHideMagnet = function (e) {
        if (e && (this._options.isWin || this._options.isDead)) {
            var t = new Tile2MagnetHideEffect_1.Tile2MagnetHideEffect({
                isWin: this._options.isWin,
                isDead: this._options.isDead
            }), o = this._baseInput.addParallelParentNode(e.newEffectId);
            this._baseInput.addParallelNode(o, t);
        }
    };
    ClearTile2NormalHelper.tryPushNormalBackEffect = function (e) {
        if (this._options.normalBackList && 0 != this._options.normalBackList.length) {
            var t = new Tile2NormalBackEffect_1.Tile2NormalBackEffect({
                normalBackList: this._options.normalBackList
            }), o = this._baseInput.addParallelParentNode(e.newEffectId);
            this._baseInput.addParallelNode(o, t);
        }
    };
    ClearTile2NormalHelper._options = null;
    ClearTile2NormalHelper._gameContext = null;
    ClearTile2NormalHelper._input = null;
    ClearTile2NormalHelper._baseInput = null;
    __decorate([
        mj.traitEvent("ClearT2Hlp_modifyStepCnt")
    ], ClearTile2NormalHelper, "modifyStepCount", null);
    __decorate([
        mj.traitEvent("ClearT2Hlp_clearEnd")
    ], ClearTile2NormalHelper, "clearEnd", null);
    __decorate([
        mj.traitEvent("ClearT2Hlp_newClrEffEff")
    ], ClearTile2NormalHelper, "createTile2ClearEffectEffect", null);
    return ClearTile2NormalHelper;
}());
exports.default = ClearTile2NormalHelper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NsZWFyVGlsZTJOb3JtYWxIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUF1RDtBQUN2RCxzRUFBc0U7QUFDdEUsNkRBQTREO0FBQzVELDJDQUEwQztBQUMxQyxxRUFBb0U7QUFDcEUsK0RBQThEO0FBQzlELHFFQUFvRTtBQUNwRSx1REFBc0Q7QUFDdEQsbURBQWtEO0FBQ2xELCtEQUE4RDtBQUM5RCx1REFBc0Q7QUFDdEQsK0RBQThEO0FBQzlELG1FQUFrRTtBQUNsRSx1REFBc0Q7QUFDdEQsbUVBQWtFO0FBQ2xFLG1EQUFrRDtBQUNsRCxxREFBb0Q7QUFDcEQsdUVBQXNFO0FBQ3RFLDJEQUEwRDtBQUMxRCwyREFBMEQ7QUFDMUQsNkVBQTBFO0FBQzFFLGlFQUFnRTtBQUNoRSwrREFBOEQ7QUFDOUQsbUVBQWtFO0FBQ2xFLDZEQUE0RDtBQUM1RCx1REFBc0Q7QUFDdEQsMkRBQTBEO0FBQzFELHlEQUF3RDtBQUN4RCxtRUFBa0U7QUFDbEUsaUVBQWdFO0FBQ2hFLGtFQUE4RDtBQUM5RCxpRUFBZ0U7QUFDaEUsZ0VBQTJEO0FBQzNELGlFQUFnRTtBQUNoRTtJQUFBO0lBZ3NDQSxDQUFDO0lBMXJDUSxzQ0FBZSxHQUF0QjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFDTSw2Q0FBc0IsR0FBN0I7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEUsQ0FBQztJQUNNLDRDQUFxQixHQUE1QjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBQ00saURBQTBCLEdBQWpDO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQ3RFLENBQUM7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QUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBQ00sMENBQW1CLEdBQTFCLFVBQTJCLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3RELElBQUksQ0FBQyxHQUFHLElBQUksNkNBQXFCLENBQUM7Z0JBQzlCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUs7Z0JBQzFCLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07YUFDN0IsQ0FBQyxFQUNGLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBQ00sOENBQXVCLEdBQTlCLFVBQStCLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQzVFLElBQUksQ0FBQyxHQUFHLElBQUksNkNBQXFCLENBQUM7Z0JBQzlCLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWM7YUFDN0MsQ0FBQyxFQUNGLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBOXJDTSwrQkFBUSxHQUFHLElBQUksQ0FBQztJQUNoQixtQ0FBWSxHQUFHLElBQUksQ0FBQztJQUNwQiw2QkFBTSxHQUFHLElBQUksQ0FBQztJQUNkLGlDQUFVLEdBQUcsSUFBSSxDQUFDO0lBRXpCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQzt1REFHekM7SUE4WUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO2dEQUNqQjtJQTZmcEI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO29FQWF4QztJQWlTSCw2QkFBQztDQWhzQ0QsQUFnc0NDLElBQUE7a0JBaHNDb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgRVRpbGUyQ2xlYXJUeXBlIH0gZnJvbSAnLi9zaW11bGF0b3IvY29uc3RhbnQvVGlsZTJJbnRlcmZhY2UnO1xuaW1wb3J0IHsgQmxvY2tJbnB1dFJlZkVmZmVjdCB9IGZyb20gJy4vQmxvY2tJbnB1dFJlZkVmZmVjdCc7XG5pbXBvcnQgeyBCb21iRWZmZWN0IH0gZnJvbSAnLi9Cb21iRWZmZWN0JztcbmltcG9ydCB7IERheGlhb0NsZWFyRWZmZWN0RWZmZWN0IH0gZnJvbSAnLi9EYXhpYW9DbGVhckVmZmVjdEVmZmVjdCc7XG5pbXBvcnQgeyBEYXhpYW9DbGVhclRpcEVmZmVjdCB9IGZyb20gJy4vRGF4aWFvQ2xlYXJUaXBFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJEdW94aWFvQ29tYm9FZmZlY3QgfSBmcm9tICcuL1RpbGUyRHVveGlhb0NvbWJvRWZmZWN0JztcbmltcG9ydCB7IFRpbGUyQ2hlZXJFZmZlY3QgfSBmcm9tICcuL1RpbGUyQ2hlZXJFZmZlY3QnO1xuaW1wb3J0IHsgQWxsQ2xlYXJFZmZlY3QgfSBmcm9tICcuL0FsbENsZWFyRWZmZWN0JztcbmltcG9ydCB7IFRpbGUyQmVmb3JlRW5kRWZmZWN0IH0gZnJvbSAnLi9UaWxlMkJlZm9yZUVuZEVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMkNvbWJvRWZmZWN0IH0gZnJvbSAnLi9UaWxlMkNvbWJvRWZmZWN0JztcbmltcG9ydCB7IFRpbGUyU2NvcmVGbG90RWZmZWN0IH0gZnJvbSAnLi9UaWxlMlNjb3JlRmxvdEVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMlVwZGF0ZVNjb3JlRWZmZWN0IH0gZnJvbSAnLi9UaWxlMlVwZGF0ZVNjb3JlRWZmZWN0JztcbmltcG9ydCB7IFRpbGUyQ2xlYXJFZmZlY3QgfSBmcm9tICcuL1RpbGUyQ2xlYXJFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJDbGVhckVmZmVjdEVmZmVjdCB9IGZyb20gJy4vVGlsZTJDbGVhckVmZmVjdEVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMkVuZEVmZmVjdCB9IGZyb20gJy4vVGlsZTJFbmRFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJGYWlsRWZmZWN0IH0gZnJvbSAnLi9UaWxlMkZhaWxFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJVcGRhdGVTbG90QmFyRWZmZWN0IH0gZnJvbSAnLi9UaWxlMlVwZGF0ZVNsb3RCYXJFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJEaWFuWmFuRWZmZWN0IH0gZnJvbSAnLi9UaWxlMkRpYW5aYW5FZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJIaXRUaXBzRWZmZWN0IH0gZnJvbSAnLi9UaWxlMkhpdFRpcHNFZmZlY3QnO1xuaW1wb3J0IHsgRURpYW5aYW5Db25kaXRpb24gfSBmcm9tICcuL3Byb2Nlc3MvZGlhbnphbi9UaWxlMkRpYW5aYW5DaGVja2VyJztcbmltcG9ydCB7IFRpbGUyU2NyZWVuRWRnZUVmZmVjdCB9IGZyb20gJy4vVGlsZTJTY3JlZW5FZGdlRWZmZWN0JztcbmltcG9ydCB7IFRpbGUyU2NyZWVuVG9wRWZmZWN0IH0gZnJvbSAnLi9UaWxlMlNjcmVlblRvcEVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMlNsb3RBZHZhbmNlRWZmZWN0IH0gZnJvbSAnLi9UaWxlMlNsb3RBZHZhbmNlRWZmZWN0JztcbmltcG9ydCB7IFRpbGUyUm9sbENhcmRFZmZlY3QgfSBmcm9tICcuL1RpbGUyUm9sbENhcmRFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJMdWNreUVmZmVjdCB9IGZyb20gJy4vVGlsZTJMdWNreUVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMlBlcmZlY3RFZmZlY3QgfSBmcm9tICcuL1RpbGUyUGVyZmVjdEVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMk1hZ25ldEVmZmVjdCB9IGZyb20gJy4vVGlsZTJNYWduZXRFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJNYWduZXRNZXJnZUVmZmVjdCB9IGZyb20gJy4vVGlsZTJNYWduZXRNZXJnZUVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMkJlZm9yZUZhaWxFZmZlY3QgfSBmcm9tICcuL1RpbGUyQmVmb3JlRmFpbEVmZmVjdCc7XG5pbXBvcnQgeyBFVGlsZVR5cGUgfSBmcm9tICcuL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IHsgVGlsZTJNYWduZXRIaWRlRWZmZWN0IH0gZnJvbSAnLi9UaWxlMk1hZ25ldEhpZGVFZmZlY3QnO1xuaW1wb3J0IHsgRUNvbGxlY3RGcm9tIH0gZnJvbSAnLi9jb25zdGFudC9Db2xsZWN0SW50ZXJmYWN0JztcbmltcG9ydCB7IFRpbGUyTm9ybWFsQmFja0VmZmVjdCB9IGZyb20gJy4vVGlsZTJOb3JtYWxCYWNrRWZmZWN0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsZWFyVGlsZTJOb3JtYWxIZWxwZXIge1xuICBzdGF0aWMgX29wdGlvbnMgPSBudWxsO1xuICBzdGF0aWMgX2dhbWVDb250ZXh0ID0gbnVsbDtcbiAgc3RhdGljIF9pbnB1dCA9IG51bGw7XG4gIHN0YXRpYyBfYmFzZUlucHV0ID0gbnVsbDtcbiAgQG1qLnRyYWl0RXZlbnQoXCJDbGVhclQySGxwX21vZGlmeVN0ZXBDbnRcIilcbiAgc3RhdGljIG1vZGlmeVN0ZXBDb3VudCgpIHtcbiAgICB0aGlzLl9nYW1lQ29udGV4dC5nYW1lTW9kaWZpZXIubW9kaWZ5U3RlcENvdW50KCk7XG4gIH1cbiAgc3RhdGljIG1vZGlmeVNsb3RCYXJTdGVwQ291bnQoKSB7XG4gICAgdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyTW9kaWZpZXIudXBkYXRlU2xvdEJhclN0ZXBDb3VudCgpO1xuICB9XG4gIHN0YXRpYyBjbGVhclNsb3RCYXJTdGVwQ291bnQoKSB7XG4gICAgdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyTW9kaWZpZXIuY2xlYXJTbG90QmFyU3RlcENvdW50KCk7XG4gIH1cbiAgc3RhdGljIGNsZWFyU2xvdEJhckNsZWFyU3RlcENvdW50KCkge1xuICAgIHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyU2xvdEJhck1vZGlmaWVyLmNsZWFyU2xvdEJhckNsZWFyU3RlcENvdW50KCk7XG4gIH1cbiAgc3RhdGljIG1vZGlmeVNsb3RCYXJDbGVhclN0ZXBDb3VudCgpIHtcbiAgICB0aGlzLl9nYW1lQ29udGV4dC50aWxlMlNsb3RCYXJNb2RpZmllci51cGRhdGVTbG90QmFyQ2xlYXJTdGVwQ291bnQoKTtcbiAgfVxuICBzdGF0aWMgZ2V0TWF4Q2xlYXJUaWxlQ2xlYXJTdGVwKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgcixcbiAgICAgIGEgPSB0aGlzLl9nYW1lQ29udGV4dC50aWxlMlNsb3RCYXJEYXRhLFxuICAgICAgbCA9IDA7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhlKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBjLnZhbHVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIHAgPSAobiA9IHZvaWQgMCwgX192YWx1ZXModSkpLCBmID0gcC5uZXh0KCk7ICFmLmRvbmU7IGYgPSBwLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIGQgPSBmLnZhbHVlLFxuICAgICAgICAgICAgICBoID0gYS5nZXRUaWxlQ2xlYXJTdGVwKGQpO1xuICAgICAgICAgICAgaCA+IGwgJiYgKGwgPSBoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBuID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmICYmICFmLmRvbmUgJiYgKHIgPSBwLnJldHVybikgJiYgci5jYWxsKHApO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYyAmJiAhYy5kb25lICYmIChvID0gcy5yZXR1cm4pICYmIG8uY2FsbChzKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbDtcbiAgfVxuICBzdGF0aWMgdXBkYXRlQ2FuTWF0Y2hUaWxlcygpIHtcbiAgICB0aGlzLl9nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkudXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICB9XG4gIHN0YXRpYyBhZGRDb21ibyhlID0gMSkge1xuICAgIHRoaXMuX2dhbWVDb250ZXh0LmNvbWJvTW9kaWZpZXIuYWRkQ29tYm8oZSk7XG4gIH1cbiAgc3RhdGljIGNhbEFkZFNjb3JlKGUgPSAxKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVDb250ZXh0LnNjb3JlTW9kaWZpZXIuY2FsQWRkU2NvcmUoZSk7XG4gIH1cbiAgc3RhdGljIG1vZGlmeUNsZWFySGl0VGlwcyhlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVDb250ZXh0LnRpbGUySGl0VGlwc01vZGlmaWVyLm1vZGlmeUNsZWFySGl0VGlwcyhlKTtcbiAgfVxuICBzdGF0aWMgY2hlY2tJc1Nob3dNYWduZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyTWFnbmV0Q2hlY2tlci5pc0Nhbk1hZ25ldCgpID8gdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJNYWduZXRDaGVja2VyLmNoZWNrTWFnbmV0KCkgOiB7XG4gICAgICB0cmlnZ2VyTWFnbmV0OiBmYWxzZVxuICAgIH07XG4gIH1cbiAgc3RhdGljIHBhcnNlRGF4aWFvRGF0YSgpIHtcbiAgICB2YXIgZTtcbiAgICBpZiAoISgobnVsbCA9PT0gKGUgPSB0aGlzLl9vcHRpb25zLmNsZWFyVGlsZUxpc3QpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUubGVuZ3RoKSA8PSAwKSkgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLl9vcHRpb25zLmNsZWFyVGlsZUxpc3QubGVuZ3RoOyB0KyspIHtcbiAgICAgIHZhciBvID0gdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyTW9kaWZpZXIuZ2V0U2xvdEJhclNuYXBzaG90KCksXG4gICAgICAgIG4gPSB0aGlzLl9vcHRpb25zLmNsZWFyVGlsZUxpc3RbdF0sXG4gICAgICAgIGkgPSB0aGlzLl9nYW1lQ29udGV4dC5kYXhpYW9DaGVja2VyLmdldENhbkNsZWFyRGF4aWFvQ2FyZEluZm9zX3RpbGUyKG4pO1xuICAgICAgaWYgKGkgJiYgaS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyRGF4aWFvTW9kaWZpZXIubW9kaWZ5RGF4aWFvQ2FyZCh0aGlzLl9pbnB1dCwgaSk7XG4gICAgICAgIHZhciByID0gdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyTW9kaWZpZXIuZ2V0U2xvdEJhclNuYXBzaG90KCksXG4gICAgICAgICAgYSA9IHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyU2xvdEJhckNoZWNrZXIuZ2V0U2xvdEJhckNoYW5nZUxpc3QobywgciksXG4gICAgICAgICAgbCA9IGkubGVuZ3RoLFxuICAgICAgICAgIHMgPSB0aGlzLmNhbFNvbWVEYXRhKGwpO1xuICAgICAgICB0aGlzLl9vcHRpb25zLnRpbGUyRGF4aWFvSW5mb3NbdF0gPSB7XG4gICAgICAgICAgZGF4aWFvQ2FyZE1hdGNoSW5mb3M6IGksXG4gICAgICAgICAgY2FsRGF0YTogcyxcbiAgICAgICAgICBjaGFuZ2VMaXN0OiBhXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXRpYyBjaGVja1Jlc3VsdCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyUmVzdWx0Q2hlY2tlci5jaGVja0lzRW5kKCksXG4gICAgICB0ID0gZmFsc2U7XG4gICAgaWYgKGUpIHtcbiAgICAgIHZhciBvID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKTtcbiAgICAgIHRoaXMuX29wdGlvbnMucHJldldpblNjb3JlID0gby5nZXRMYXN0V2luU2NvcmUoKTtcbiAgICAgIHRoaXMuX29wdGlvbnMucHJldldpbkNvbWJvTnVtID0gby5nZXRMYXN0V2luQ29tYm9OdW0oKTtcbiAgICAgIHRoaXMuX29wdGlvbnMucHJldldpbkR1cmF0aW9uID0gby5nZXRMYXN0V2luRHVyYXRpb24oKTtcbiAgICAgIHRoaXMuX29wdGlvbnMud2luR2FtZUR1cmF0aW9uID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2FtZVRpbWVEYXRhLnRpbWU7XG4gICAgICBvLnNhdmVMYXN0V2luUmVzdWx0KG8uZ2V0U2NvcmUoKSwgby5nZXRDb21ib051bSgpLCB0aGlzLl9vcHRpb25zLndpbkdhbWVEdXJhdGlvbik7XG4gICAgICB0aGlzLl9nYW1lQ29udGV4dC5nYW1lTW9kaWZpZXIubW9kaWZ5V2luRm9yVGlsZTIoKTtcbiAgICB9IGVsc2UgdCA9IHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyUmVzdWx0Q2hlY2tlci5jaGVja0lzRGVhZCgpO1xuICAgIHRoaXMuX29wdGlvbnMuaXNXaW4gPSBlO1xuICAgIHRoaXMuX29wdGlvbnMuaXNEZWFkID0gdDtcbiAgfVxuICBzdGF0aWMgaW5pdE9wdGlvbnMoKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHtcbiAgICAgIGlucHV0OiB0aGlzLl9pbnB1dCxcbiAgICAgIHRpbGVJZHM6IFtdLFxuICAgICAgYWRkU2NvcmU6IDAsXG4gICAgICBjb21ib1N0YXRlOiBmYWxzZSxcbiAgICAgIHNob3dDb21ib0Rpc3BsYXk6IGZhbHNlLFxuICAgICAgc2hvd1NjcmVlbkVkZ2U6IGZhbHNlLFxuICAgICAgc2hvd1NjcmVlblRvcDogZmFsc2UsXG4gICAgICBjb21ib051bTogMCxcbiAgICAgIGlzU2hvd0NoZWVyOiBmYWxzZSxcbiAgICAgIGluZGV4Q2hlZXI6IDAsXG4gICAgICBzbG90QmFyU25hcHNob3RCZWZvcmU6IG51bGwsXG4gICAgICBzbG90QmFyU25hcHNob3RBZGRUaWxlOiBudWxsLFxuICAgICAgc2xvdEJhclNuYXBzaG90QWZ0ZXI6IG51bGwsXG4gICAgICBjbGVhclNsb3RCYXJMaXN0OiBudWxsLFxuICAgICAgY2xlYXJUaWxlTGlzdDogbnVsbCxcbiAgICAgIGlzV2luOiBmYWxzZSxcbiAgICAgIGlzRGVhZDogZmFsc2UsXG4gICAgICBzbG90QmFyQ2hhbmdlTGlzdDogW10sXG4gICAgICBzbG90QmFyQ2hhbmdlTGlzdEFmdGVyOiBbXSxcbiAgICAgIHNsb3RCYXJDaGFnbmVMaXN0MjogW10sXG4gICAgICB0aWxlMkJvbWJJbmZvczogW10sXG4gICAgICB0aWxlMkRheGlhb0luZm9zOiB7fSxcbiAgICAgIHByZXZXaW5TY29yZTogMCxcbiAgICAgIHByZXZXaW5Db21ib051bTogMCxcbiAgICAgIHByZXZXaW5EdXJhdGlvbjogMCxcbiAgICAgIHdpbkdhbWVEdXJhdGlvbjogMCxcbiAgICAgIGRpYW5aYW5JbmZvOiB7XG4gICAgICAgIGlzU2hvdzogZmFsc2UsXG4gICAgICAgIHRpbGVJZDE6IG51bGwsXG4gICAgICAgIGRpYW5aYW5Db25kaXRpb246IEVEaWFuWmFuQ29uZGl0aW9uLk5vbmVcbiAgICAgIH0sXG4gICAgICByb2xsQ2FyZERhdGFzOiBbXSxcbiAgICAgIG1hZ25ldEluZm86IHtcbiAgICAgICAgdHJpZ2dlck1hZ25ldDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBpc0NsZWFySW5TbG90QmFyOiBmYWxzZSxcbiAgICAgIGlzVHJpZ2dlckx1Y2t5OiBmYWxzZVxuICAgIH07XG4gIH1cbiAgc3RhdGljIHBhcnNlU2xvdEJhckNoYW5nZUxpc3QoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyA9IHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyU2xvdEJhckNoZWNrZXIuZ2V0U2xvdEJhckNoYW5nZUxpc3QodGhpcy5fb3B0aW9ucy5zbG90QmFyU25hcHNob3RCZWZvcmUsIHRoaXMuX29wdGlvbnMuc2xvdEJhclNuYXBzaG90QWRkVGlsZSksXG4gICAgICBuID0gdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyQ2hlY2tlci5nZXRTbG90QmFyQ2hhbmdlTGlzdCh0aGlzLl9vcHRpb25zLnNsb3RCYXJTbmFwc2hvdEFkZFRpbGUsIHRoaXMuX29wdGlvbnMuc2xvdEJhclNuYXBzaG90QWZ0ZXIpLFxuICAgICAgYSA9IHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyU2xvdEJhckNoZWNrZXIuZ2V0U2xvdEJhckNoYW5nZUxpc3QodGhpcy5fb3B0aW9ucy5zbG90QmFyU25hcHNob3RCZWZvcmUsIHRoaXMuX29wdGlvbnMuc2xvdEJhclNuYXBzaG90QWZ0ZXIpO1xuICAgIHRoaXMuX29wdGlvbnMuc2xvdEJhckNoYW5nZUxpc3QgPSBvO1xuICAgIHRoaXMuX29wdGlvbnMuc2xvdEJhckNoYW5nZUxpc3RBZnRlciA9IG47XG4gICAgdGhpcy5fb3B0aW9ucy5zbG90QmFyQ2hhZ25lTGlzdDIgPSBhO1xuICAgIHZhciBsID0gdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyQ2hlY2tlci5nZXRTbG90QmFyQ2hhbmdlTGlzdE9uY2UodGhpcy5fb3B0aW9ucy5zbG90QmFyU25hcHNob3RCZWZvcmUsIHRoaXMuX29wdGlvbnMuc2xvdEJhclNuYXBzaG90QWRkVGlsZSwgdGhpcy5fb3B0aW9ucy5zbG90QmFyU25hcHNob3RBZnRlciwgdGhpcy5fb3B0aW9ucy5jbGVhclNsb3RCYXJMaXN0KSxcbiAgICAgIHMgPSB0aGlzLl9nYW1lQ29udGV4dC50aWxlMlJvbGxDYXJkTW9kaWZpZXIubW9kaWZ5Um9sbENhcmREYXRhcygpO1xuICAgIHRoaXMuX29wdGlvbnMuaXNUcmlnZ2VyTHVja3kgPSBzLmxlbmd0aCA+IDA7XG4gICAgdmFyIGMgPSBmdW5jdGlvbiBjKGUpIHtcbiAgICAgIHZhciB0ID0gcy5maW5kSW5kZXgoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQudGlsZUlkID09PSBlLnRpbGVJZDtcbiAgICAgIH0pO1xuICAgICAgaWYgKHQgPj0gMCkge1xuICAgICAgICB2YXIgbyA9IF9fcmVhZChzLnNwbGljZSh0LCAxKSwgMSlbMF07XG4gICAgICAgIGUucm9sbENhcmREYXRhID0gbztcbiAgICAgIH1cbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciB1ID0gX192YWx1ZXMobCksIHAgPSB1Lm5leHQoKTsgIXAuZG9uZTsgcCA9IHUubmV4dCgpKSBjKHAudmFsdWUpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBwICYmICFwLmRvbmUgJiYgKHQgPSB1LnJldHVybikgJiYgdC5jYWxsKHUpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX29wdGlvbnMucm9sbENhcmREYXRhcyA9IHM7XG4gICAgdGhpcy5fb3B0aW9ucy5TbG90QmFyQ2hhbmdlTGlzdE9uY2UgPSBsO1xuICB9XG4gIHN0YXRpYyBjYWxTb21lRGF0YShlID0gMSkge1xuICAgIHZhciB0ID0ge1xuICAgICAgICBhZGRTY29yZTogMCxcbiAgICAgICAgdGFyZ2V0U2NvcmU6IDAsXG4gICAgICAgIGlzQnJlYWtCZXN0OiBmYWxzZSxcbiAgICAgICAgY29tYm9OdW06IDAsXG4gICAgICAgIGNvbWJvU3RhdGU6IGZhbHNlLFxuICAgICAgICBzaG93Q29tYm9EaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgc2hvd1NjcmVlbkVkZ2U6IGZhbHNlLFxuICAgICAgICBzaG93U2NyZWVuVG9wOiBmYWxzZSxcbiAgICAgICAgc2hvd1Nsb3RBZHZhbmNlOiBmYWxzZSxcbiAgICAgICAgc2xvdExldmVsOiAwXG4gICAgICB9LFxuICAgICAgbyA9IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCk7XG4gICAgdGhpcy5hZGRDb21ibyhlKTtcbiAgICB2YXIgbiA9IHRoaXMuY2FsQWRkU2NvcmUoKTtcbiAgICB0LmFkZFNjb3JlID0gbjtcbiAgICB0LnRhcmdldFNjb3JlID0gby5nZXRTY29yZSgpO1xuICAgIHZhciBpID0gby5pc0JyZWFrQmVzdCgpLFxuICAgICAgciA9IG8uaXNCcmVha0Jlc3QoKSxcbiAgICAgIGEgPSBpICE9IHIgJiYgcjtcbiAgICB0LmlzQnJlYWtCZXN0ID0gYTtcbiAgICB2YXIgbCA9IHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyQ29tYm9DaGVja2VyLmNoZWNrQ29tYm9EaXNwbGF5U3RhdGUoKTtcbiAgICB0LmNvbWJvTnVtID0gbC5jb21ib051bTtcbiAgICB0LmNvbWJvU3RhdGUgPSBsLmNvbWJvU3RhdGU7XG4gICAgdC5zaG93Q29tYm9EaXNwbGF5ID0gbC5zaG93Q29tYm9EaXNwbGF5O1xuICAgIHQuc2hvd1NjcmVlbkVkZ2UgPSBsLnNob3dTY3JlZW5FZGdlO1xuICAgIHQuc2hvd1NjcmVlblRvcCA9IGwuc2hvd1NjcmVlblRvcDtcbiAgICBpZiAobC5zaG93U2xvdEFkdmFuY2UpIHtcbiAgICAgIHQuc2hvd1Nsb3RBZHZhbmNlID0gdHJ1ZTtcbiAgICAgIHQuc2xvdExldmVsID0gbC5zbG90TGV2ZWw7XG4gICAgICB0aGlzLl9nYW1lQ29udGV4dC5jb21ib01vZGlmaWVyLnVwZGF0ZVNsb3RMZXZlbChsLnNsb3RMZXZlbCk7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG4gIHN0YXRpYyBwYXJzZUJvbWJDYXJkRGF0YSgpIHtcbiAgICBmb3IgKHZhciBlID0gdGhpcywgdCA9IFtdLCBvID0gZnVuY3Rpb24gbyh0KSB7XG4gICAgICAgIHZhciBvID0gZS5fZ2FtZUNvbnRleHQuZGF4aWFvQ2hlY2tlci5nZXRDYW5DbGVhckRheGlhb0NhcmRJbmZvc190aWxlMih0KTtcbiAgICAgICAgaWYgKG8gJiYgby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZS5fZ2FtZUNvbnRleHQudGlsZTJEYXhpYW9Nb2RpZmllci5tb2RpZnlEYXhpYW9DYXJkKGUuX2lucHV0LCBvKTtcbiAgICAgICAgICB2YXIgbiA9IG8ubGVuZ3RoO1xuICAgICAgICAgIGUuYWRkQ29tYm8obik7XG4gICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH1cbiAgICAgIH0sIG4gPSBmdW5jdGlvbiBuKGkpIHtcbiAgICAgICAgdmFyIHIgPSBlLl9nYW1lQ29udGV4dC50aWxlMkJvbWJNb2RpZmllci5wYXJzZUJvbWJDYXJkKGkpO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgIHZhciBhID0gZS5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyTW9kaWZpZXIuZ2V0U2xvdEJhclNuYXBzaG90KCksXG4gICAgICAgICAgICBsID0gbyhyLmJvbWJJZHMpO1xuICAgICAgICAgIGUuX2dhbWVDb250ZXh0LnRpbGUyU2xvdEJhck1vZGlmaWVyLmNsZWFyKFtyLmJvbWJJZHNdLCBFQ29sbGVjdEZyb20uRnJvbUJvbWIpO1xuICAgICAgICAgIHZhciBzID0gZS5jYWxTb21lRGF0YSgpO1xuICAgICAgICAgIGUucGFyc2VEdW94aWFvQ2FyZERhdGEoW3IuYm9tYklkc10pO1xuICAgICAgICAgIHZhciBjID0gZS5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyTW9kaWZpZXIuZ2V0U2xvdEJhclNuYXBzaG90KCksXG4gICAgICAgICAgICB1ID0gZS5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyQ2hlY2tlci5nZXRTbG90QmFyQ2hhbmdlTGlzdChhLCBjKTtcbiAgICAgICAgICB0LnB1c2goe1xuICAgICAgICAgICAgYm9tYlBhcmFtczogcixcbiAgICAgICAgICAgIGRheGlhb0NhcmRNYXRjaEluZm9zOiBsLFxuICAgICAgICAgICAgY2FsRGF0YTogcyxcbiAgICAgICAgICAgIGNoYW5nZUxpc3Q6IHVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBuKHIuYm9tYklkcyk7XG4gICAgICAgIH1cbiAgICAgIH0sIGkgPSAwOyBpIDwgdGhpcy5fb3B0aW9ucy5jbGVhclRpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgciA9IHRoaXMuX29wdGlvbnMuY2xlYXJUaWxlTGlzdFtpXTtcbiAgICAgIG4ocik7XG4gICAgfVxuICAgIHRoaXMuX29wdGlvbnMudGlsZTJCb21iSW5mb3MgPSB0O1xuICB9XG4gIHN0YXRpYyBwYXJzZUR1b3hpYW9DYXJkRGF0YShlKSB7XG4gICAgZm9yICh2YXIgdCA9IGUgfHwgdGhpcy5fb3B0aW9ucy5jbGVhclRpbGVMaXN0LCBvID0gMDsgbyA8IHQubGVuZ3RoOyBvKyspIHtcbiAgICAgIHZhciBuID0gdFtvXTtcbiAgICAgIGlmICh0aGlzLl9nYW1lQ29udGV4dC5kdW94aWFvQ2hlY2tlci5jYW5TaG93RHVveGlhb0NvbWJvKG4pKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5fZ2FtZUNvbnRleHQuZHVveGlhb0NoZWNrZXIuZ2V0Q2FuQ2xlYXJEdW94aWFvQ2FyZEluZm9zKG4pO1xuICAgICAgICBpICYmIHRoaXMuX2dhbWVDb250ZXh0LmR1b3hpYW9Nb2RpZmllci5tb2RpZnlEdW94aWFvQ2xlYXJDb3VudChpLmNvdW50KTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5pc1Nob3dEdW94aWFvQ29tYm8gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdGF0aWMgcGFyc2VOb3JtYWxCYWNrQ2FyZERhdGEoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9nYW1lQ29udGV4dC50aWxlMk5vcm1hbEJhY2tNb2RpZmllci5tb2RpZnlTdGF0dXMoKTtcbiAgICB0aGlzLl9vcHRpb25zLm5vcm1hbEJhY2tMaXN0ID0gZTtcbiAgfVxuICBzdGF0aWMgcnVuQ2xlYXIoZSwgdCwgbywgbikge1xuICAgIHZhciByLCBhLCBzLCBjO1xuICAgIHRoaXMuX2dhbWVDb250ZXh0ID0gZTtcbiAgICB0aGlzLl9pbnB1dCA9IHQ7XG4gICAgdGhpcy5fYmFzZUlucHV0ID0gbztcbiAgICBmb3IgKHZhciB1ID0gbi50aWxlSWRzIHx8IFtdLCBwID0gbi5vdXRUaWxlcyB8fCBbXSwgZiA9IFtdLCBkID0gMDsgZCA8IHUubGVuZ3RoOyBkKyspIHtcbiAgICAgIHZhciBoID0gdVtkXSxcbiAgICAgICAgeSA9IHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KGgpO1xuICAgICAgeSAmJiB5LmlzVmFsaWQgJiYgKCF5LmlzQ2FyZExvY2soKSB8fCBwLmluY2x1ZGVzKGgpKSAmJiBmLnB1c2goaCk7XG4gICAgfVxuICAgIGlmICghKGYubGVuZ3RoIDw9IDApKSB7XG4gICAgICB0aGlzLmluaXRPcHRpb25zKCk7XG4gICAgICB0aGlzLm1vZGlmeVN0ZXBDb3VudCgpO1xuICAgICAgdGhpcy5jbGVhclNsb3RCYXJTdGVwQ291bnQoKTtcbiAgICAgIHRoaXMuY2xlYXJTbG90QmFyQ2xlYXJTdGVwQ291bnQoKTtcbiAgICAgIHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyRGlhblphbkNoZWNrZXIuY2hlY2tMb2NrUm9sbENhcmQoKTtcbiAgICAgIHZhciBtID0gdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyTW9kaWZpZXIsXG4gICAgICAgIHYgPSB0aGlzLl9nYW1lQ29udGV4dC50aWxlMkRpYW5aYW5DaGVja2VyLFxuICAgICAgICBnID0gbS5nZXRTbG90QmFyU25hcHNob3QoKSxcbiAgICAgICAgXyA9IHYuY2hlY2tTbG90QmFyQ2FuTWF0Y2goZywgdHJ1ZSksXG4gICAgICAgIFQgPSBbXTtcbiAgICAgIGZvciAoZCA9IDA7IGQgPCBmLmxlbmd0aDsgZCsrKSB7XG4gICAgICAgIGggPSBmW2RdO1xuICAgICAgICB0aGlzLl9nYW1lQ29udGV4dC50aWxlMkRvdFRyYWNrZXJNb2RpZmllci5hZGRTbG90QmFyKGgpO1xuICAgICAgICB2YXIgQyA9IG0uYWRkVGlsZShoKSxcbiAgICAgICAgICBiID0gbS5nZXRDbGVhclNsb3RCYXJMaXN0KFQpO1xuICAgICAgICBDICYmIGIgJiYgYi5sZW5ndGggPiAwICYmIChUID0gVC5jb25jYXQoYikpO1xuICAgICAgfVxuICAgICAgdmFyIEUgPSBtLmdldFNsb3RCYXJTbmFwc2hvdCgpO1xuICAgICAgaWYgKHYuY2hlY2tBZGRUaWxlQ2FuRGlhblphbihnLCBFKSkge1xuICAgICAgICB0aGlzLl9vcHRpb25zLmRpYW5aYW5JbmZvLmlzU2hvdyA9IHRydWU7XG4gICAgICAgIHRoaXMubW9kaWZ5RGlhblphbkluZm8oRURpYW5aYW5Db25kaXRpb24uVW5sb2NrUm9sbENhcmRDYW5EaWFuWmFuLCBnLCBFKTtcbiAgICAgIH0gZWxzZSB0aGlzLm1vZGlmeURpYW5aYW5JbmZvKEVEaWFuWmFuQ29uZGl0aW9uLkNvbnRpbnVlUm9sbENhcmQsIGcsIEUpO1xuICAgICAgbS5jbGVhclNsb3RCYXIoVCk7XG4gICAgICB0aGlzLl9vcHRpb25zLmRpYW5aYW5JbmZvLmlzU2hvdyB8fCBfIHx8IHRoaXMubW9kaWZ5RGlhblphbkluZm8oRURpYW5aYW5Db25kaXRpb24uU2xvdEJhck1hdGNoTm9Sb2xsQ2FyZCwgZywgRSk7XG4gICAgICB0aGlzLm1vZGlmeVNsb3RCYXJTdGVwQ291bnQoKTtcbiAgICAgIHZhciBTID0gbS5nZXRDbGVhclRpbGVMaXN0KFQpO1xuICAgICAgdGhpcy5fb3B0aW9ucy5zbG90QmFyU25hcHNob3RCZWZvcmUgPSBnO1xuICAgICAgdGhpcy5fb3B0aW9ucy5zbG90QmFyU25hcHNob3RBZGRUaWxlID0gRTtcbiAgICAgIHRoaXMuX29wdGlvbnMuY2xlYXJTbG90QmFyTGlzdCA9IFQ7XG4gICAgICB0aGlzLl9vcHRpb25zLmNsZWFyVGlsZUxpc3QgPSBTO1xuICAgICAgdGhpcy5tb2RpZnlNYWduZXRJbmZvKG4ubWFnbmV0UGFpciB8fCAwKTtcbiAgICAgIHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyRGlhblphbkNoZWNrZXIuY2hlY2tVbmxvY2tSb2xsQ2FyZChFKTtcbiAgICAgIGlmIChULmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fZ2FtZUNvbnRleHQuY2xlYXJNb2RpZmllci5tb2RpZnlNYW51YWxNYXRjaENvdW50KHRoaXMuX2lucHV0KTtcbiAgICAgICAgdGhpcy5fZ2FtZUNvbnRleHQuY2xlYXJNb2RpZmllci5tb2RpZnlBdXRvQ29sbGVjdFRpbGVzTnVtKHRoaXMuX2lucHV0LCAyICogUy5sZW5ndGgpO1xuICAgICAgICB0aGlzLnBhcnNlRGF4aWFvRGF0YSgpO1xuICAgICAgICB2YXIgSSA9IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCk7XG4gICAgICAgIHRoaXMuYWRkQ29tYm8oMSk7XG4gICAgICAgIHZhciBCLFxuICAgICAgICAgIHggPSBJLmlzQnJlYWtCZXN0KCk7XG4gICAgICAgIEIgPSAobnVsbCA9PT0gKHMgPSB0aGlzLl9vcHRpb25zLm1hZ25ldEluZm8pIHx8IHZvaWQgMCA9PT0gcyA/IHZvaWQgMCA6IHMudHJpZ2dlck1hZ25ldCkgJiYgKG51bGwgPT09IChjID0gdGhpcy5fb3B0aW9ucy5tYWduZXRJbmZvKSB8fCB2b2lkIDAgPT09IGMgPyB2b2lkIDAgOiBjLm1hZ25ldE1lcmdlKSA/IHRoaXMuY2FsQWRkU2NvcmUoUy5sZW5ndGgpIDogdGhpcy5jYWxBZGRTY29yZSgpO1xuICAgICAgICB0aGlzLl9vcHRpb25zLmFkZFNjb3JlID0gQjtcbiAgICAgICAgdmFyIE0gPSBJLmlzQnJlYWtCZXN0KCksXG4gICAgICAgICAgTyA9IHggIT0gTSAmJiBNO1xuICAgICAgICB0aGlzLl9vcHRpb25zLmlzQnJlYWtCZXN0ID0gTztcbiAgICAgICAgdmFyIEQgPSB0aGlzLl9nYW1lQ29udGV4dC50aWxlMkNvbWJvQ2hlY2tlci5jaGVja0NvbWJvRGlzcGxheVN0YXRlKCk7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuY29tYm9OdW0gPSBELmNvbWJvTnVtO1xuICAgICAgICB0aGlzLl9vcHRpb25zLmNvbWJvU3RhdGUgPSBELmNvbWJvU3RhdGU7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuc2hvd0NvbWJvRGlzcGxheSA9IEQuc2hvd0NvbWJvRGlzcGxheTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5zaG93U2NyZWVuRWRnZSA9IEQuc2hvd1NjcmVlbkVkZ2U7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuc2hvd1NjcmVlblRvcCA9IEQuc2hvd1NjcmVlblRvcDtcbiAgICAgICAgaWYgKEQuc2hvd1Nsb3RBZHZhbmNlKSB7XG4gICAgICAgICAgdGhpcy5fb3B0aW9ucy5zaG93U2xvdEFkdmFuY2UgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX29wdGlvbnMuc2xvdExldmVsID0gRC5zbG90TGV2ZWw7XG4gICAgICAgICAgdGhpcy5fZ2FtZUNvbnRleHQuY29tYm9Nb2RpZmllci51cGRhdGVTbG90TGV2ZWwoRC5zbG90TGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBQID0gdGhpcy5nZXRNYXhDbGVhclRpbGVDbGVhclN0ZXAoVCksXG4gICAgICAgICAgQSA9IHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyQ2hlZXJDaGVja2VyLmNhblNob3dDaGVlckJ5U3RlcChQKTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5pc1Nob3dDaGVlciA9IEEuaXNTaG93O1xuICAgICAgICB0aGlzLl9vcHRpb25zLmluZGV4Q2hlZXIgPSBBLmluZGV4O1xuICAgICAgICB0aGlzLl9vcHRpb25zLnNob3dDb21ib0Rpc3BsYXkgJiYgKHRoaXMuX29wdGlvbnMuaXNTaG93Q2hlZXIgPSBmYWxzZSk7XG4gICAgICAgIHRoaXMubW9kaWZ5U2xvdEJhckNsZWFyU3RlcENvdW50KCk7XG4gICAgICAgIHZhciBSID0gdGhpcy5tb2RpZnlDbGVhckhpdFRpcHMoUyk7XG4gICAgICAgIGlmIChSLmNsZWFySGl0KSB7XG4gICAgICAgICAgdGhpcy5fb3B0aW9ucy5jbGVhckhpdCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fb3B0aW9ucy5oaWRlSGl0SWRzID0gUi5oaWRlSGl0SWRzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBOID0gbS5nZXRTbG90QmFyU25hcHNob3QoKTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5zbG90QmFyU25hcHNob3RBZnRlciA9IE47XG4gICAgICAgIHRoaXMucGFyc2VTbG90QmFyQ2hhbmdlTGlzdCgpO1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5TbG90QmFyQ2hhbmdlTGlzdE9uY2UpIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IF9fdmFsdWVzKHRoaXMuX29wdGlvbnMuU2xvdEJhckNoYW5nZUxpc3RPbmNlKSwgayA9IGoubmV4dCgpOyAhay5kb25lOyBrID0gai5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBMID0gay52YWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmlzU2hvd0NoZWVyICYmIEwuY2xlYXJJbmZvICYmIEwuY2xlYXJJbmZvLmNsZWFyVHlwZSA9PT0gRVRpbGUyQ2xlYXJUeXBlLkluU2xvdEJhcikge1xuICAgICAgICAgICAgICBMLmNsZWFySW5mby5jbGVhclR5cGUgPSBFVGlsZTJDbGVhclR5cGUuT3V0U2xvdEJhcjtcbiAgICAgICAgICAgICAgTC5jbGVhckluZm8uY2xlYXJQb3NJbmRleCA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGsgJiYgIWsuZG9uZSAmJiAoYSA9IGoucmV0dXJuKSAmJiBhLmNhbGwoaik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vcHRpb25zLlNsb3RCYXJDaGFuZ2VMaXN0T25jZSAmJiAodGhpcy5fb3B0aW9ucy5pc0NsZWFySW5TbG90QmFyID0gdGhpcy5fb3B0aW9ucy5TbG90QmFyQ2hhbmdlTGlzdE9uY2UuZXZlcnkoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gIWUuY2xlYXJJbmZvIHx8IGUuY2xlYXJJbmZvLmNsZWFyVHlwZSA9PT0gRVRpbGUyQ2xlYXJUeXBlLkluU2xvdEJhcjtcbiAgICAgICAgfSkpO1xuICAgICAgICB2YXIgRyA9IHRoaXMuX2dhbWVDb250ZXh0LmFsbENsZWFyQ2hlY2tlci5jaGVja0luQWxsQ2xlYXIoKTtcbiAgICAgICAgaWYgKEcpIHtcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLmlzU2hvd0FsbENsZWFyID0gRy5hbGxDbGVhcjtcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLmFsbENsZWFyRWZmZWN0SWQgPSBHLmVmZmVjdElkO1xuICAgICAgICAgIHRoaXMuX29wdGlvbnMuYWxsQ2xlYXJUaWxlSWRzID0gRy5pZHM7XG4gICAgICAgICAgRy5hbGxDbGVhciAmJiB0aGlzLl9nYW1lQ29udGV4dC5hbGxDbGVhck1vZGlmaWVyLmNoYW5nZUFsbENsZWFyKEcuZWZmZWN0SWQsIEcuaWRzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhcnNlQm9tYkNhcmREYXRhKCk7XG4gICAgICAgIHRoaXMucGFyc2VEdW94aWFvQ2FyZERhdGEoKTtcbiAgICAgICAgdGhpcy5wYXJzZU5vcm1hbEJhY2tDYXJkRGF0YSgpO1xuICAgICAgICB0aGlzLl9vcHRpb25zLmlzUGVyZmVjdCA9IHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyUGVyZmVjdENoZWNrZXIuY2hlY2tJc1BlcmZlY3QodGhpcy5fb3B0aW9ucy5zbG90QmFyU25hcHNob3RCZWZvcmUsIHRoaXMuX29wdGlvbnMuY2xlYXJTbG90QmFyTGlzdCk7XG4gICAgICAgIHRoaXMuY2hlY2tSZXN1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuaXNEZWFkIHx8IHRoaXMuX29wdGlvbnMuaXNXaW4pIHtcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLmlzU2hvd0R1b3hpYW9Db21ibyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX2dhbWVDb250ZXh0LmR1b3hpYW9Nb2RpZmllci5yZXNldER1b3hpYW9DbGVhckNvdW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wdXNoQ2xlYXJFZmZlY3RzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBOID0gbS5nZXRTbG90QmFyU25hcHNob3QoKTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5zbG90QmFyU25hcHNob3RBZnRlciA9IE47XG4gICAgICAgIHRoaXMucGFyc2VTbG90QmFyQ2hhbmdlTGlzdCgpO1xuICAgICAgICB0aGlzLnBhcnNlTm9ybWFsQmFja0NhcmREYXRhKCk7XG4gICAgICAgIHRoaXMuY2hlY2tSZXN1bHQoKTtcbiAgICAgICAgdGhpcy5wdXNoQWRkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNsZWFyRW5kKHRoaXMuX29wdGlvbnMpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNsZWFyVDJIbHBfY2xlYXJFbmRcIilcbiAgc3RhdGljIGNsZWFyRW5kKCkge31cbiAgc3RhdGljIHB1c2hBZGQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxQYXJlbnROb2RlKCksXG4gICAgICB0ID0ge1xuICAgICAgICBsYXN0RWZmZWN0SWQ6IGUsXG4gICAgICAgIG5ld0VmZmVjdElkOiBlXG4gICAgICB9O1xuICAgIHRoaXMudHJ5RXhjdXRlSGlkZU1hZ25ldCh0KTtcbiAgICB2YXIgbyA9IHRoaXMudHJ5UHVzaFJvbGxDYXJkQW5kVXBkYXRlKHRoaXMuX29wdGlvbnMuU2xvdEJhckNoYW5nZUxpc3RPbmNlLCB0KTtcbiAgICB0aGlzLnRyeVB1c2hOb3JtYWxCYWNrRWZmZWN0KG8pO1xuICAgIHRoaXMudHJ5RXhjdXRlRGlhblphbihvKTtcbiAgICB0aGlzLnRyeUV4Y3V0ZVNob3dNYWduZXQobyk7XG4gICAgdGhpcy50cnlQdXNoRW5kRWZmZWN0KCk7XG4gIH1cbiAgc3RhdGljIHRyeVB1c2hSb2xsQ2FyZEFuZFVwZGF0ZShlID0gW10sIHQ/KSB7XG4gICAgdmFyIG8sIG4sIHIsIGEsIGw7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyh0aGlzLl9vcHRpb25zLnJvbGxDYXJkRGF0YXMpLCBjID0gcy5uZXh0KCk7ICFjLmRvbmU7IGMgPSBzLm5leHQoKSkge1xuICAgICAgICB2YXIgdSA9IGMudmFsdWUsXG4gICAgICAgICAgcCA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUodC5uZXdFZmZlY3RJZCksXG4gICAgICAgICAgZiA9IG5ldyBUaWxlMlJvbGxDYXJkRWZmZWN0KHtcbiAgICAgICAgICAgIHRpbGVJZDogdS50aWxlSWQsXG4gICAgICAgICAgICBmcm9udFRvQmFjazogdS5mcm9udFRvQmFja1xuICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKHAsIGYpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBjICYmICFjLmRvbmUgJiYgKG4gPSBzLnJldHVybikgJiYgbi5jYWxsKHMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlLmxlbmd0aCA8PSAwKSByZXR1cm4gdDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgZCA9IF9fdmFsdWVzKGUpLCBoID0gZC5uZXh0KCk7ICFoLmRvbmU7IGggPSBkLm5leHQoKSkge1xuICAgICAgICB2YXIgeSA9IGgudmFsdWUsXG4gICAgICAgICAgbSA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxQYXJlbnROb2RlKHQubmV3RWZmZWN0SWQpO1xuICAgICAgICBpZiAoeS5yb2xsQ2FyZERhdGEpIHtcbiAgICAgICAgICBmID0gbmV3IFRpbGUyUm9sbENhcmRFZmZlY3Qoe1xuICAgICAgICAgICAgdGlsZUlkOiB5LnRpbGVJZCxcbiAgICAgICAgICAgIGZyb250VG9CYWNrOiBudWxsID09PSAobCA9IHkucm9sbENhcmREYXRhKSB8fCB2b2lkIDAgPT09IGwgPyB2b2lkIDAgOiBsLmZyb250VG9CYWNrXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbE5vZGUobSwgZik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHYgPSBuZXcgVGlsZTJVcGRhdGVTbG90QmFyRWZmZWN0KHtcbiAgICAgICAgICBjaGFuZ2VJbmZvOiB5XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsTm9kZShtLCB2KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaCAmJiAhaC5kb25lICYmIChhID0gZC5yZXR1cm4pICYmIGEuY2FsbChkKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfVxuICBzdGF0aWMgYWRkVG9TbG90QmFyRWZmZWN0cyhlID0gW10sIHQ/KSB7XG4gICAgdmFyIG8sIG47XG4gICAgaWYgKCEoZS5sZW5ndGggPD0gMCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHIgPSBfX3ZhbHVlcyhlKSwgYSA9IHIubmV4dCgpOyAhYS5kb25lOyBhID0gci5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgbCA9IGEudmFsdWUsXG4gICAgICAgICAgICBzID0gbmV3IFRpbGUyVXBkYXRlU2xvdEJhckVmZmVjdCh7XG4gICAgICAgICAgICAgIGNoYW5nZUluZm86IGxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYyA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUodC5uZXdFZmZlY3RJZCk7XG4gICAgICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShjLCBzKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBvID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGEgJiYgIWEuZG9uZSAmJiAobiA9IHIucmV0dXJuKSAmJiBuLmNhbGwocik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICAgIH1cbiAgfVxuICBzdGF0aWMgcGFzZURheGlhb0NsZWFyVGlwc0VmZmVjdChlLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBuID0gbnVsbCA9PT0gKG8gPSB0aGlzLl9vcHRpb25zLnRpbGUyRGF4aWFvSW5mb3MpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG9bZV07XG4gICAgaWYgKG4gJiYgbi5kYXhpYW9DYXJkTWF0Y2hJbmZvcyAmJiAhKG4uZGF4aWFvQ2FyZE1hdGNoSW5mb3MubGVuZ3RoIDw9IDApKSB7XG4gICAgICB2YXIgaSA9IG5ldyBEYXhpYW9DbGVhclRpcEVmZmVjdCh7XG4gICAgICAgICAgdGlsZUlkczogdGhpcy5fb3B0aW9ucy50aWxlSWRzLFxuICAgICAgICAgIGZpbmFsTWF0Y2hJbmZvczogbi5kYXhpYW9DYXJkTWF0Y2hJbmZvc1xuICAgICAgICB9KSxcbiAgICAgICAgciA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUodC5uZXdFZmZlY3RJZCk7XG4gICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKHIsIGkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiB0Lm5ld0VmZmVjdElkLFxuICAgICAgICBuZXdFZmZlY3RJZDogclxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHBhc2VEYXhpYW9DbGVhckVmZmVjdChlLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBuID0gbnVsbCA9PT0gKG8gPSB0aGlzLl9vcHRpb25zLnRpbGUyRGF4aWFvSW5mb3MpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG9bZV07XG4gICAgaWYgKG4gJiYgbi5kYXhpYW9DYXJkTWF0Y2hJbmZvcyAmJiAhKG4uZGF4aWFvQ2FyZE1hdGNoSW5mb3MubGVuZ3RoIDw9IDApKSB7XG4gICAgICB2YXIgaSA9IG5ldyBEYXhpYW9DbGVhckVmZmVjdEVmZmVjdCh7XG4gICAgICAgICAgdGlsZUlkczogdGhpcy5fb3B0aW9ucy50aWxlSWRzLFxuICAgICAgICAgIGZpbmFsTWF0Y2hJbmZvczogbi5kYXhpYW9DYXJkTWF0Y2hJbmZvc1xuICAgICAgICB9KSxcbiAgICAgICAgciA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUodC5uZXdFZmZlY3RJZCk7XG4gICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKHIsIGkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiB0Lm5ld0VmZmVjdElkLFxuICAgICAgICBuZXdFZmZlY3RJZDogclxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHBhc2VCb21iRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX29wdGlvbnMudGlsZTJCb21iSW5mb3M7XG4gICAgaWYgKHQgJiYgISh0Lmxlbmd0aCA8PSAwKSkgZm9yICh2YXIgbyA9IGUubmV3RWZmZWN0SWQsIG4gPSB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsUGFyZW50Tm9kZShvKSwgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgciA9IHRbaV0sXG4gICAgICAgIGEgPSB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsUGFyZW50Tm9kZShuKSxcbiAgICAgICAgbCA9IG5ldyBCb21iRWZmZWN0KHtcbiAgICAgICAgICBwb3MxOiByLmJvbWJQYXJhbXMucG9zMSxcbiAgICAgICAgICBwb3MyOiByLmJvbWJQYXJhbXMucG9zMixcbiAgICAgICAgICBib21iSWRzOiByLmJvbWJQYXJhbXMuYm9tYklkc1xuICAgICAgICB9KTtcbiAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxOb2RlKGEsIGwpO1xuICAgICAgaWYgKHIuZGF4aWFvQ2FyZE1hdGNoSW5mb3MgJiYgci5kYXhpYW9DYXJkTWF0Y2hJbmZvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBzID0gdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbFBhcmVudE5vZGUoYSksXG4gICAgICAgICAgZiA9IG5ldyBEYXhpYW9DbGVhclRpcEVmZmVjdCh7XG4gICAgICAgICAgICB0aWxlSWRzOiB0aGlzLl9vcHRpb25zLnRpbGVJZHMsXG4gICAgICAgICAgICBmaW5hbE1hdGNoSW5mb3M6IHIuZGF4aWFvQ2FyZE1hdGNoSW5mb3NcbiAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbE5vZGUocywgZik7XG4gICAgICAgIHZhciBkID0gbmV3IERheGlhb0NsZWFyRWZmZWN0RWZmZWN0KHtcbiAgICAgICAgICB0aWxlSWRzOiB0aGlzLl9vcHRpb25zLnRpbGVJZHMsXG4gICAgICAgICAgZmluYWxNYXRjaEluZm9zOiByLmRheGlhb0NhcmRNYXRjaEluZm9zXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsTm9kZShzLCBkKTtcbiAgICAgIH1cbiAgICAgIHZhciBoID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZShhKSxcbiAgICAgICAgeSA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxQYXJlbnROb2RlKGgpLFxuICAgICAgICBfID0gbmV3IFRpbGUyU2NvcmVGbG90RWZmZWN0KHtcbiAgICAgICAgICB0aWxlSWQ6IHIuYm9tYlBhcmFtcy5ib21iSWRzWzBdLFxuICAgICAgICAgIGxhc3RUaWxlSWQ6IHIuYm9tYlBhcmFtcy5ib21iSWRzWzFdLFxuICAgICAgICAgIGlzQ29tYm86IHIuY2FsRGF0YS5jb21ib1N0YXRlLFxuICAgICAgICAgIGFkZFNjb3JlOiByLmNhbERhdGEuYWRkU2NvcmVcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsTm9kZSh5LCBfKTtcbiAgICAgIHZhciBUID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKSxcbiAgICAgICAgQyA9IG5ldyBUaWxlMlVwZGF0ZVNjb3JlRWZmZWN0KHtcbiAgICAgICAgICBhZGRTY29yZTogci5jYWxEYXRhLmFkZFNjb3JlLFxuICAgICAgICAgIHRhcmdldFNjb3JlOiBULmdldFNjb3JlKCksXG4gICAgICAgICAgaXNTaG93Q29tYm86IHIuY2FsRGF0YS5jb21ib1N0YXRlXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbE5vZGUoeSwgQyk7XG4gICAgICB2YXIgYiA9IG5ldyBUaWxlMkNvbWJvRWZmZWN0KHtcbiAgICAgICAgY29tYm9OdW06IHIuY2FsRGF0YS5jb21ib051bVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKGgsIGIpO1xuICAgICAgci5jaGFuZ2VMaXN0ICYmIHIuY2hhbmdlTGlzdC5sZW5ndGggPiAwICYmIHRoaXMuYWRkVG9TbG90QmFyRWZmZWN0cyhyLmNoYW5nZUxpc3QsIHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiBoLFxuICAgICAgICBuZXdFZmZlY3RJZDogaFxuICAgICAgfSk7XG4gICAgICBpID09PSB0Lmxlbmd0aCAtIDEgJiYgdGhpcy5fb3B0aW9ucy5pc1dpbiAmJiAodGhpcy5fb3B0aW9ucy5pbnNlcnRFbmRFZmZlY3RJZCA9IGgpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgcGFyc2VEdW94aWFvRWZmZWN0KGUsIHQgPSBFSW5zZXJ0VHlwZS5TZXJpYWwpIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5pc1Nob3dEdW94aWFvQ29tYm8gJiYgIXRoaXMuX29wdGlvbnMudGlsZTJIYXNQdXNoRHVveGlhbykge1xuICAgICAgdGhpcy5fb3B0aW9ucy50aWxlMkhhc1B1c2hEdW94aWFvID0gdHJ1ZTtcbiAgICAgIHZhciBvID0gbmV3IFRpbGUyRHVveGlhb0NvbWJvRWZmZWN0KHtcbiAgICAgICAgZHVveGlhb0NvdW50OiB0aGlzLl9nYW1lQ29udGV4dC5nZXREdW94aWFvQ2xlYXJDb3VudCgpXG4gICAgICB9KTtcbiAgICAgIGlmICh0ID09PSBFSW5zZXJ0VHlwZS5TZXJpYWwpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsUGFyZW50Tm9kZShlLm5ld0VmZmVjdElkKTtcbiAgICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbE5vZGUobiwgbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaSA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoZS5uZXdFZmZlY3RJZCk7XG4gICAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbE5vZGUoaSwgbyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXRpYyB0cnlQdXNoQmxvY2soZSkge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmlzU2hvd0R1b3hpYW9Db21ibykge1xuICAgICAgdmFyIHQgPSBuZXcgQmxvY2tJbnB1dFJlZkVmZmVjdCh7XG4gICAgICAgICAgYmxvY2s6IGUsXG4gICAgICAgICAgZnJvbTogXCJkdW94aWFvQ29tYm9cIlxuICAgICAgICB9KSxcbiAgICAgICAgbyA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoKTtcbiAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbE5vZGUobywgdCk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyB0cnlQdXNoQ2xlYXJIaXRUaXBzRWZmZWN0KCkge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmNsZWFySGl0ICYmIHRoaXMuX29wdGlvbnMuaGlkZUhpdElkcyAmJiB0aGlzLl9vcHRpb25zLmhpZGVIaXRJZHMubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGUgPSB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxQYXJlbnROb2RlKCksXG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgbGFzdEVmZmVjdElkOiBlLFxuICAgICAgICAgIG5ld0VmZmVjdElkOiBlXG4gICAgICAgIH0sXG4gICAgICAgIG8gPSBuZXcgVGlsZTJIaXRUaXBzRWZmZWN0KHtcbiAgICAgICAgICBpc0NsZWFySGl0OiB0cnVlLFxuICAgICAgICAgIHRpbGVJZDE6IHRoaXMuX29wdGlvbnMuaGlkZUhpdElkc1swXSB8fCBcIlwiLFxuICAgICAgICAgIHRpbGVJZDI6IHRoaXMuX29wdGlvbnMuaGlkZUhpdElkc1sxXSB8fCBcIlwiXG4gICAgICAgIH0pLFxuICAgICAgICBuID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZSh0Lm5ld0VmZmVjdElkKTtcbiAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbE5vZGUobiwgbyk7XG4gICAgICByZXR1cm4gdDtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHB1c2hSb2xsQ2FyZEVmZmVjdHMoZSkge1xuICAgIHZhciB0LCBvO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBuID0gX192YWx1ZXModGhpcy5fb3B0aW9ucy5yb2xsQ2FyZERhdGFzKSwgciA9IG4ubmV4dCgpOyAhci5kb25lOyByID0gbi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGEgPSByLnZhbHVlLFxuICAgICAgICAgIGwgPSBuZXcgVGlsZTJSb2xsQ2FyZEVmZmVjdCh7XG4gICAgICAgICAgICB0aWxlSWQ6IGEudGlsZUlkLFxuICAgICAgICAgICAgZnJvbnRUb0JhY2s6IGEuZnJvbnRUb0JhY2tcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZShlLm5ld0VmZmVjdElkKTtcbiAgICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShzLCBsKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgciAmJiAhci5kb25lICYmIChvID0gbi5yZXR1cm4pICYmIG8uY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdGF0aWMgcHVzaEx1Y2t5RWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBUaWxlMkx1Y2t5RWZmZWN0KHt9KSxcbiAgICAgIG8gPSB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsUGFyZW50Tm9kZShlLm5ld0VmZmVjdElkKTtcbiAgICB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsTm9kZShvLCB0KTtcbiAgfVxuICBzdGF0aWMgdHJ5U2hvd1BlcmZlY3QoZSkge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmlzUGVyZmVjdCkge1xuICAgICAgdmFyIHQgPSBuZXcgVGlsZTJQZXJmZWN0RWZmZWN0KHt9KSxcbiAgICAgICAgbyA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoZS5uZXdFZmZlY3RJZCk7XG4gICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKG8sIHQpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgdHJ5UHVzaEFkZFRvU2xvdEJhckVmZmVjdHMoZSA9IFtdLCB0Pykge1xuICAgIHZhciBvLCBuLCByO1xuICAgIHZhciBhID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZSh0Lm5ld0VmZmVjdElkKSxcbiAgICAgIGwgPSB7XG4gICAgICAgIGxhc3RFZmZlY3RJZDogdC5uZXdFZmZlY3RJZCxcbiAgICAgICAgbmV3RWZmZWN0SWQ6IGFcbiAgICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhlKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBjLnZhbHVlLFxuICAgICAgICAgIHAgPSB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsUGFyZW50Tm9kZShsLm5ld0VmZmVjdElkKSxcbiAgICAgICAgICBmID0ge1xuICAgICAgICAgICAgbGFzdEVmZmVjdElkOiBsLm5ld0VmZmVjdElkLFxuICAgICAgICAgICAgbmV3RWZmZWN0SWQ6IHBcbiAgICAgICAgICB9O1xuICAgICAgICBpZiAodS5yb2xsQ2FyZERhdGEpIHtcbiAgICAgICAgICB2YXIgZCA9IG5ldyBUaWxlMlJvbGxDYXJkRWZmZWN0KHtcbiAgICAgICAgICAgIHRpbGVJZDogdS50aWxlSWQsXG4gICAgICAgICAgICBmcm9udFRvQmFjazogbnVsbCA9PT0gKHIgPSB1LnJvbGxDYXJkRGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5mcm9udFRvQmFja1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxOb2RlKGYubmV3RWZmZWN0SWQsIGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoID0gbmV3IFRpbGUyVXBkYXRlU2xvdEJhckVmZmVjdCh7XG4gICAgICAgICAgY2hhbmdlSW5mbzogdVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbE5vZGUoZi5uZXdFZmZlY3RJZCwgaCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGMgJiYgIWMuZG9uZSAmJiAobiA9IHMucmV0dXJuKSAmJiBuLmNhbGwocyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RhdGljIHRyeVB1c2hBbGxDbGVhckVmZmVjdChlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbixcbiAgICAgIHIsXG4gICAgICBhID0gdGhpcy5fb3B0aW9ucy5jbGVhclNsb3RCYXJMaXN0LFxuICAgICAgbCA9IFtdLFxuICAgICAgcyA9IG5ldyBNYXAoKSxcbiAgICAgIGMgPSB0aGlzLl9vcHRpb25zLlNsb3RCYXJDaGFuZ2VMaXN0T25jZSxcbiAgICAgIHUgPSBuZXcgU2V0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHAgPSBfX3ZhbHVlcyhhKSwgZiA9IHAubmV4dCgpOyAhZi5kb25lOyBmID0gcC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGQgPSBmLnZhbHVlLFxuICAgICAgICAgIGggPSB0aGlzLl9nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdEJ5UG9zSWQoZFswXSksXG4gICAgICAgICAgeSA9IHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0QnlQb3NJZChkWzFdKTtcbiAgICAgICAgaWYgKGggJiYgeSkge1xuICAgICAgICAgIHUuYWRkKGguaWQpO1xuICAgICAgICAgIHUuYWRkKHkuaWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGYgJiYgIWYuZG9uZSAmJiAobyA9IHAucmV0dXJuKSAmJiBvLmNhbGwocCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG0gPSBfX3ZhbHVlcyhjKSwgdiA9IG0ubmV4dCgpOyAhdi5kb25lOyB2ID0gbS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGcgPSB2LnZhbHVlO1xuICAgICAgICBpZiAodS5oYXMoZy50aWxlSWQpKSB7XG4gICAgICAgICAgcy5zZXQoZy50aWxlSWQsIGcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGwucHVzaChnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG4gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICB2ICYmICF2LmRvbmUgJiYgKHIgPSBtLnJldHVybikgJiYgci5jYWxsKG0pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBfID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZShlLm5ld0VmZmVjdElkKSxcbiAgICAgIFQgPSB7XG4gICAgICAgIGxhc3RFZmZlY3RJZDogZS5uZXdFZmZlY3RJZCxcbiAgICAgICAgbmV3RWZmZWN0SWQ6IF9cbiAgICAgIH07XG4gICAgbC5sZW5ndGggPiAwICYmIHRoaXMudHJ5UHVzaEFkZFRvU2xvdEJhckVmZmVjdHMobCwgVCk7XG4gICAgZm9yICh2YXIgQyA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoZS5uZXdFZmZlY3RJZCksIGIgPSB7XG4gICAgICAgIGxhc3RFZmZlY3RJZDogZS5uZXdFZmZlY3RJZCxcbiAgICAgICAgbmV3RWZmZWN0SWQ6IENcbiAgICAgIH0sIEUgPSBiLCBTID0gMDsgUyA8IGEubGVuZ3RoOyBTKyspIHtcbiAgICAgIHZhciBJID0gdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbFBhcmVudE5vZGUoYi5uZXdFZmZlY3RJZCksXG4gICAgICAgIHcgPSB7XG4gICAgICAgICAgbGFzdEVmZmVjdElkOiBiLm5ld0VmZmVjdElkLFxuICAgICAgICAgIG5ld0VmZmVjdElkOiBJXG4gICAgICAgIH0sXG4gICAgICAgIEIgPSBbXSxcbiAgICAgICAgeCA9IHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0QnlQb3NJZChhW1NdWzBdKSxcbiAgICAgICAgTSA9IHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0QnlQb3NJZChhW1NdWzFdKTtcbiAgICAgIGlmICh4ICYmIE0pIHtcbiAgICAgICAgQi5wdXNoKHguaWQpO1xuICAgICAgICBCLnB1c2goTS5pZCk7XG4gICAgICAgIHZhciBPID0gcy5nZXQoeC5pZCksXG4gICAgICAgICAgRCA9IHMuZ2V0KE0uaWQpLFxuICAgICAgICAgIFAgPSBbXTtcbiAgICAgICAgTyAmJiBQLnB1c2goTyk7XG4gICAgICAgIEQgJiYgUC5wdXNoKEQpO1xuICAgICAgICBFID0gdGhpcy50cnlQdXNoQ2xlYXJFZmZlY3QoUywgQiwgUCwgdyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBFO1xuICB9XG4gIHN0YXRpYyB0cnlQdXNoQ2xlYXJFZmZlY3QoZSwgdCwgbywgbikge1xuICAgIHZhciByLFxuICAgICAgYSxcbiAgICAgIGwgPSBuO1xuICAgIGlmIChvICYmIG8ubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIHMgPSB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsUGFyZW50Tm9kZShuLm5ld0VmZmVjdElkKTtcbiAgICAgIGwgPSB7XG4gICAgICAgIGxhc3RFZmZlY3RJZDogbi5uZXdFZmZlY3RJZCxcbiAgICAgICAgbmV3RWZmZWN0SWQ6IHNcbiAgICAgIH07XG4gICAgICB0aGlzLnRyeVB1c2hBZGRUb1Nsb3RCYXJFZmZlY3RzKG8sIGwpO1xuICAgIH1cbiAgICB2YXIgYyA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxQYXJlbnROb2RlKGwubmV3RWZmZWN0SWQpLFxuICAgICAgdSA9IHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiBsLm5ld0VmZmVjdElkLFxuICAgICAgICBuZXdFZmZlY3RJZDogY1xuICAgICAgfSxcbiAgICAgIHAgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBmID0gX192YWx1ZXMobyksIGQgPSBmLm5leHQoKTsgIWQuZG9uZTsgZCA9IGYubmV4dCgpKSB7XG4gICAgICAgIHZhciBoID0gZC52YWx1ZTtcbiAgICAgICAgaWYgKGguY2xlYXJJbmZvICYmIHQuaW5jbHVkZXMoaC50aWxlSWQpKSB7XG4gICAgICAgICAgcCA9IGguY2xlYXJJbmZvLmNsZWFyVHlwZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHIgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBkICYmICFkLmRvbmUgJiYgKGEgPSBmLnJldHVybikgJiYgYS5jYWxsKGYpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciB5ID0gbmV3IFRpbGUyQ2xlYXJFZmZlY3Qoe1xuICAgICAgICB0aWxlSWRzOiB0LFxuICAgICAgICBjbGVhclR5cGU6IHBcbiAgICAgIH0pLFxuICAgICAgbSA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUodS5uZXdFZmZlY3RJZCk7XG4gICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShtLCB5KTtcbiAgICB0aGlzLnBhc2VEYXhpYW9DbGVhclRpcHNFZmZlY3QoZSwgbCk7XG4gICAgdmFyIHYgPSB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsUGFyZW50Tm9kZShsLm5ld0VmZmVjdElkKSxcbiAgICAgIGcgPSB7XG4gICAgICAgIGxhc3RFZmZlY3RJZDogbC5uZXdFZmZlY3RJZCxcbiAgICAgICAgbmV3RWZmZWN0SWQ6IHZcbiAgICAgIH0sXG4gICAgICBUID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZShnLm5ld0VmZmVjdElkKSxcbiAgICAgIEMgPSB7XG4gICAgICAgIGxhc3RFZmZlY3RJZDogZy5uZXdFZmZlY3RJZCxcbiAgICAgICAgbmV3RWZmZWN0SWQ6IFRcbiAgICAgIH0sXG4gICAgICBiID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3QodFswXSksXG4gICAgICBFID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3QodFsxXSksXG4gICAgICBTID0gdGhpcy5jcmVhdGVUaWxlMkNsZWFyRWZmZWN0RWZmZWN0KGIsIEUsIHRoaXMuX29wdGlvbnMpLFxuICAgICAgSSA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoQy5uZXdFZmZlY3RJZCk7XG4gICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShJLCBTKTtcbiAgICB0aGlzLnBhc2VEYXhpYW9DbGVhckVmZmVjdChlLCBDKTtcbiAgICByZXR1cm4gQztcbiAgfVxuICBzdGF0aWMgcHVzaENsZWFyRWZmZWN0cygpIHtcbiAgICB2YXIgZSwgdDtcbiAgICB0aGlzLnRyeVB1c2hCbG9jayh0cnVlKTtcbiAgICB0aGlzLnRyeVB1c2hDbGVhckhpdFRpcHNFZmZlY3QoKTtcbiAgICB2YXIgbyA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoKSxcbiAgICAgIG4gPSB7XG4gICAgICAgIGxhc3RFZmZlY3RJZDogbyxcbiAgICAgICAgbmV3RWZmZWN0SWQ6IG9cbiAgICAgIH07XG4gICAgdGhpcy5wdXNoUm9sbENhcmRFZmZlY3RzKG4pO1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmlzVHJpZ2dlckx1Y2t5ICYmICF0aGlzLl9vcHRpb25zLnNob3dDb21ib0Rpc3BsYXkgJiYgIXRoaXMuX29wdGlvbnMuaXNTaG93Q2hlZXIpIHtcbiAgICAgIHZhciBpID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZSgpLFxuICAgICAgICByID0ge1xuICAgICAgICAgIGxhc3RFZmZlY3RJZDogaSxcbiAgICAgICAgICBuZXdFZmZlY3RJZDogaVxuICAgICAgICB9O1xuICAgICAgdGhpcy5wdXNoTHVja3lFZmZlY3Qocik7XG4gICAgfVxuICAgIHZhciBsLFxuICAgICAgcyA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoKSxcbiAgICAgIGMgPSB7XG4gICAgICAgIGxhc3RFZmZlY3RJZDogcyxcbiAgICAgICAgbmV3RWZmZWN0SWQ6IHNcbiAgICAgIH07XG4gICAgdGhpcy50cnlFeGN1dGVIaWRlTWFnbmV0KGMpO1xuICAgIGwgPSAobnVsbCA9PT0gKGUgPSB0aGlzLl9vcHRpb25zLm1hZ25ldEluZm8pIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUudHJpZ2dlck1hZ25ldCkgJiYgKG51bGwgPT09ICh0ID0gdGhpcy5fb3B0aW9ucy5tYWduZXRJbmZvKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0Lm1hZ25ldE1lcmdlKSA/IHRoaXMucHVzaE1hZ25ldE1lcmdlRWZmZWN0cyhjKSA6IHRoaXMudHJ5UHVzaEFsbENsZWFyRWZmZWN0KGMpO1xuICAgIHRoaXMudHJ5UHVzaE5vcm1hbEJhY2tFZmZlY3QoYyk7XG4gICAgdGhpcy5wdXNoU2NvcmVGbG90RWZmZWN0KGwpO1xuICAgIHRoaXMudHJ5RXhjdXRlU2hvd0NvbWJvKGwpO1xuICAgIHRoaXMudHJ5U2hvd0NoZWVyKGwpO1xuICAgIHRoaXMudHJ5U2hvd1BlcmZlY3QobCk7XG4gICAgdGhpcy50cnlTaG93U2NyZWVuRWRnZShsKTtcbiAgICB0aGlzLnRyeVNob3dTY3JlZW5Ub3AobCk7XG4gICAgdGhpcy50cnlTaG93U2xvdEFkdmFuY2UobCk7XG4gICAgdGhpcy50cnlFeGN1dGVEaWFuWmFuKGwpO1xuICAgIHRoaXMudHJ5RXhjdXRlU2hvd01hZ25ldChsKTtcbiAgICB0aGlzLnBhc2VCb21iRWZmZWN0KGwpO1xuICAgIHRoaXMucGFyc2VEdW94aWFvRWZmZWN0KGwsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgICB2YXIgdSA9IHRoaXMudHJ5RXhjdXRlQWxsQ2xlYXIobCk7XG4gICAgdGhpcy50cnlQdXNoQmxvY2soZmFsc2UpO1xuICAgIHZhciBwID0gbDtcbiAgICB0aGlzLl9vcHRpb25zLmluc2VydEVuZEVmZmVjdElkICYmIChwID0ge1xuICAgICAgbGFzdEVmZmVjdElkOiB0aGlzLl9vcHRpb25zLmluc2VydEVuZEVmZmVjdElkLFxuICAgICAgbmV3RWZmZWN0SWQ6IHRoaXMuX29wdGlvbnMuaW5zZXJ0RW5kRWZmZWN0SWRcbiAgICB9KTtcbiAgICB0aGlzLnRyeVB1c2hFbmRFZmZlY3QocCwgdSk7XG4gIH1cbiAgc3RhdGljIHB1c2hTbG90QmFyRWZmZWN0cygpIHt9XG4gIHN0YXRpYyBwdXNoTWFnbmV0TWVyZ2VFZmZlY3RzKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoZS5uZXdFZmZlY3RJZCksXG4gICAgICBvID0ge1xuICAgICAgICBsYXN0RWZmZWN0SWQ6IGUubmV3RWZmZWN0SWQsXG4gICAgICAgIG5ld0VmZmVjdElkOiB0XG4gICAgICB9LFxuICAgICAgbiA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxQYXJlbnROb2RlKG8ubmV3RWZmZWN0SWQpLFxuICAgICAgaSA9IHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiBvLm5ld0VmZmVjdElkLFxuICAgICAgICBuZXdFZmZlY3RJZDogblxuICAgICAgfSxcbiAgICAgIHIgPSBuZXcgVGlsZTJNYWduZXRNZXJnZUVmZmVjdCh7XG4gICAgICAgIGNsZWFyVGlsZUlkczogdGhpcy5fb3B0aW9ucy5jbGVhclRpbGVMaXN0XG4gICAgICB9KTtcbiAgICB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsTm9kZShpLm5ld0VmZmVjdElkLCByKTtcbiAgICB2YXIgYSA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoaS5uZXdFZmZlY3RJZCksXG4gICAgICBsID0ge1xuICAgICAgICBsYXN0RWZmZWN0SWQ6IGkubmV3RWZmZWN0SWQsXG4gICAgICAgIG5ld0VmZmVjdElkOiBhXG4gICAgICB9O1xuICAgIHRoaXMuYWRkVG9TbG90QmFyRWZmZWN0cyh0aGlzLl9vcHRpb25zLnNsb3RCYXJDaGFuZ2VMaXN0QWZ0ZXIsIGwpO1xuICAgIHJldHVybiBsO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2xlYXJUMkhscF9uZXdDbHJFZmZFZmZcIilcbiAgc3RhdGljIGNyZWF0ZVRpbGUyQ2xlYXJFZmZlY3RFZmZlY3QoZSwgdCkge1xuICAgIHZhciBvID0gW10sXG4gICAgICBuID0gZmFsc2U7XG4gICAgaWYgKGUgJiYgdCkge1xuICAgICAgby5wdXNoKGUuaWQpO1xuICAgICAgby5wdXNoKHQuaWQpO1xuICAgICAgZS5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLlJhbmtDYXJkKSAmJiB0LmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuUmFua0NhcmQpICYmIChuID0gdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVGlsZTJDbGVhckVmZmVjdEVmZmVjdCh7XG4gICAgICB0aWxlSWRzOiBvLFxuICAgICAgaXNSYW5rQ2FyZDogblxuICAgIH0pO1xuICB9XG4gIHN0YXRpYyB0cnlQdXNoRW5kRWZmZWN0KGUsIHQpIHtcbiAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxQYXJlbnROb2RlKCk7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaXNEZWFkKSB0aGlzLnB1c2hGYWlsRWZmZWN0KCk7ZWxzZSBpZiAodGhpcy5fb3B0aW9ucy5pc1dpbikge1xuICAgICAgdmFyIG8gPSBuZXcgVGlsZTJFbmRFZmZlY3Qoe1xuICAgICAgICBzY29yZTogdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRTY29yZSgpLFxuICAgICAgICBzZXR0bGVtZW50U2NvcmU6IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0U2V0dGxlbWVudFNjb3JlKCksXG4gICAgICAgIHBlcmZlY3RNYXhTY29yZTogdGhpcy5fZ2FtZUNvbnRleHQuc2NvcmVNb2RpZmllci5nZXRQZXJmZWN0TWF4U2NvcmUoKSxcbiAgICAgICAgY3VyTHY6IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpLFxuICAgICAgICBjb21ib051bTogdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRDb21ib051bSgpLFxuICAgICAgICBjdXJNYXhDb21ibzogdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRDdXJNYXhDb21ibygpLFxuICAgICAgICBnYW1lRHVyYXRpb246IHRoaXMuX29wdGlvbnMud2luR2FtZUR1cmF0aW9uLFxuICAgICAgICBwcmV2U2NvcmU6IHRoaXMuX29wdGlvbnMucHJldldpblNjb3JlLFxuICAgICAgICBwcmV2Q29tYm9OdW06IHRoaXMuX29wdGlvbnMucHJldldpbkNvbWJvTnVtLFxuICAgICAgICBwcmV2R2FtZUR1cmF0aW9uOiB0aGlzLl9vcHRpb25zLnByZXZXaW5EdXJhdGlvbixcbiAgICAgICAgbWF4Q29tYm9OdW06IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0Q3VyTGV2ZWxDb21ib01heExpbWl0KClcbiAgICAgIH0pO1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsUGFyZW50Tm9kZSh0Lm5ld0VmZmVjdElkKSxcbiAgICAgICAgICBpID0gbmV3IFRpbGUyQmVmb3JlRW5kRWZmZWN0KHt9KTtcbiAgICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbE5vZGUobiwgaSk7XG4gICAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxOb2RlKG4sIG8pO1xuICAgICAgfSBlbHNlIGlmIChlKSB7XG4gICAgICAgIGkgPSBuZXcgVGlsZTJCZWZvcmVFbmRFZmZlY3Qoe30pO1xuICAgICAgICB2YXIgciA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoZS5uZXdFZmZlY3RJZCk7XG4gICAgICAgIG4gPSB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsUGFyZW50Tm9kZShyKTtcbiAgICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbE5vZGUobiwgaSk7XG4gICAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxOb2RlKG4sIG8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxQYXJlbnROb2RlKCksXG4gICAgICAgICAgbCA9IChpID0gbmV3IFRpbGUyQmVmb3JlRW5kRWZmZWN0KHt9KSwgdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbFBhcmVudE5vZGUoYSkpO1xuICAgICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsTm9kZShsLCBpKTtcbiAgICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbE5vZGUobCwgbyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXRpYyB0cnlTaG93Q2hlZXIoZSkge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmlzU2hvd0NoZWVyKSB7XG4gICAgICB2YXIgdCA9IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0Q29tYm9OdW0oKSxcbiAgICAgICAgbyA9IHRoaXMuX29wdGlvbnMudGlsZUlkcyxcbiAgICAgICAgbiA9IG5ldyBUaWxlMkNoZWVyRWZmZWN0KHtcbiAgICAgICAgICBpbmRleDogdGhpcy5fb3B0aW9ucy5pbmRleENoZWVyLFxuICAgICAgICAgIGNvbWJvTnVtOiB0LFxuICAgICAgICAgIHRpbGVJZDE6IG9bMV0gfHwgXCJcIixcbiAgICAgICAgICB0aWxlSWQyOiBvWzBdIHx8IFwiXCJcbiAgICAgICAgfSksXG4gICAgICAgIGkgPSB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxQYXJlbnROb2RlKGUubmV3RWZmZWN0SWQpO1xuICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShpLCBuKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHB1c2hTY29yZUZsb3RFZmZlY3QoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICByLFxuICAgICAgYSA9IHRoaXMuX29wdGlvbnMuY29tYm9TdGF0ZSxcbiAgICAgIGwgPSB0aGlzLl9vcHRpb25zLmFkZFNjb3JlLFxuICAgICAgcyA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBjID0gX192YWx1ZXModGhpcy5fb3B0aW9ucy5jbGVhclNsb3RCYXJMaXN0KSwgdSA9IGMubmV4dCgpOyAhdS5kb25lOyB1ID0gYy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHAgPSB1LnZhbHVlLFxuICAgICAgICAgIGYgPSB0aGlzLl9nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdEJ5UG9zSWQocFswXSksXG4gICAgICAgICAgZCA9IHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0QnlQb3NJZChwWzFdKTtcbiAgICAgICAgaWYgKGYgJiYgZCkge1xuICAgICAgICAgIHMucHVzaChmLmlkKTtcbiAgICAgICAgICBzLnB1c2goZC5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdSAmJiAhdS5kb25lICYmIChvID0gYy5yZXR1cm4pICYmIG8uY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgaCA9IChudWxsID09PSAobiA9IHRoaXMuX29wdGlvbnMubWFnbmV0SW5mbykgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi50cmlnZ2VyTWFnbmV0KSAmJiAobnVsbCA9PT0gKHIgPSB0aGlzLl9vcHRpb25zLm1hZ25ldEluZm8pIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIubWFnbmV0TWVyZ2UpLFxuICAgICAgeSA9IG5ldyBUaWxlMlNjb3JlRmxvdEVmZmVjdCh7XG4gICAgICAgIHRpbGVJZDogc1swXSxcbiAgICAgICAgbGFzdFRpbGVJZDogc1sxXSxcbiAgICAgICAgaXNDb21ibzogYSxcbiAgICAgICAgYWRkU2NvcmU6IGwsXG4gICAgICAgIGlzTWFnbmV0TWVyZ2U6IGhcbiAgICAgIH0pLFxuICAgICAgbSA9IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCksXG4gICAgICBfID0gbmV3IFRpbGUyVXBkYXRlU2NvcmVFZmZlY3Qoe1xuICAgICAgICBhZGRTY29yZTogbCxcbiAgICAgICAgdGFyZ2V0U2NvcmU6IG0uZ2V0U2NvcmUoKSxcbiAgICAgICAgaXNTaG93Q29tYm86IGFcbiAgICAgIH0pLFxuICAgICAgVCA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxQYXJlbnROb2RlKGUubmV3RWZmZWN0SWQpO1xuICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxOb2RlKFQsIHkpO1xuICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxOb2RlKFQsIF8pO1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0RWZmZWN0SWQ6IGUubmV3RWZmZWN0SWQsXG4gICAgICBuZXdFZmZlY3RJZDogVFxuICAgIH07XG4gIH1cbiAgc3RhdGljIHRyeUV4Y3V0ZVNob3dDb21ibyhlKSB7XG4gICAgdGhpcy5fb3B0aW9ucy5zaG93Q29tYm9EaXNwbGF5ICYmIHRoaXMucHVzaFRpbGUyQ29tYm9FZmZlY3QodGhpcy5fb3B0aW9ucy5jb21ib051bSwgZSk7XG4gIH1cbiAgc3RhdGljIHB1c2hUaWxlMkNvbWJvRWZmZWN0KGUsIHQpIHtcbiAgICB2YXIgbyA9IG5ldyBUaWxlMkNvbWJvRWZmZWN0KHtcbiAgICAgICAgY29tYm9OdW06IGVcbiAgICAgIH0pLFxuICAgICAgbiA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUodC5uZXdFZmZlY3RJZCk7XG4gICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShuLCBvKTtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdEVmZmVjdElkOiB0Lm5ld0VmZmVjdElkLFxuICAgICAgbmV3RWZmZWN0SWQ6IG5cbiAgICB9O1xuICB9XG4gIHN0YXRpYyB0cnlTaG93U2NyZWVuRWRnZShlKSB7XG4gICAgdGhpcy5fb3B0aW9ucy5zaG93U2NyZWVuRWRnZSAmJiB0aGlzLnB1c2hTY3JlZW5FZGdlRWZmZWN0KGUpO1xuICB9XG4gIHN0YXRpYyBwdXNoU2NyZWVuRWRnZUVmZmVjdChlKSB7XG4gICAgdmFyIHQgPSBuZXcgVGlsZTJTY3JlZW5FZGdlRWZmZWN0KHtcbiAgICAgICAgY29tYm9OdW06IHRoaXMuX29wdGlvbnMuY29tYm9OdW1cbiAgICAgIH0pLFxuICAgICAgbyA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoZS5uZXdFZmZlY3RJZCk7XG4gICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShvLCB0KTtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdEVmZmVjdElkOiBlLm5ld0VmZmVjdElkLFxuICAgICAgbmV3RWZmZWN0SWQ6IG9cbiAgICB9O1xuICB9XG4gIHN0YXRpYyB0cnlTaG93U2NyZWVuVG9wKGUpIHtcbiAgICB0aGlzLl9vcHRpb25zLnNob3dTY3JlZW5Ub3AgJiYgdGhpcy5wdXNoU2NyZWVuVG9wRWZmZWN0KGUpO1xuICB9XG4gIHN0YXRpYyBwdXNoU2NyZWVuVG9wRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBUaWxlMlNjcmVlblRvcEVmZmVjdCh7fSksXG4gICAgICBvID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZShlLm5ld0VmZmVjdElkKTtcbiAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKG8sIHQpO1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0RWZmZWN0SWQ6IGUubmV3RWZmZWN0SWQsXG4gICAgICBuZXdFZmZlY3RJZDogb1xuICAgIH07XG4gIH1cbiAgc3RhdGljIHRyeVNob3dTbG90QWR2YW5jZShlKSB7XG4gICAgdGhpcy5fb3B0aW9ucy5zaG93U2xvdEFkdmFuY2UgJiYgdGhpcy5wdXNoU2xvdEFkdmFuY2VFZmZlY3QoZSk7XG4gIH1cbiAgc3RhdGljIHB1c2hTbG90QWR2YW5jZUVmZmVjdChlKSB7XG4gICAgdmFyIHQgPSBuZXcgVGlsZTJTbG90QWR2YW5jZUVmZmVjdCh7XG4gICAgICAgIHNsb3RMZXZlbDogdGhpcy5fb3B0aW9ucy5zbG90TGV2ZWxcbiAgICAgIH0pLFxuICAgICAgbyA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoZS5uZXdFZmZlY3RJZCk7XG4gICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShvLCB0KTtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdEVmZmVjdElkOiBlLm5ld0VmZmVjdElkLFxuICAgICAgbmV3RWZmZWN0SWQ6IG9cbiAgICB9O1xuICB9XG4gIHN0YXRpYyB0cnlFeGN1dGVBbGxDbGVhcihlKSB7XG4gICAgdmFyIHQsIG8sIG47XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaXNTaG93QWxsQ2xlYXIpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICByID0gbmV3IEFsbENsZWFyRWZmZWN0KHtcbiAgICAgICAgICBlZmZlY3RJZDogdGhpcy5fb3B0aW9ucy5hbGxDbGVhckVmZmVjdElkIHx8IDEsXG4gICAgICAgICAgdGlsZUlkczogbnVsbCAhPT0gKHQgPSB0aGlzLl9vcHRpb25zLmFsbENsZWFyVGlsZUlkcykgJiYgdm9pZCAwICE9PSB0ID8gdCA6IFtdXG4gICAgICAgIH0pO1xuICAgICAgaSA9ICgobnVsbCA9PT0gKG8gPSB0aGlzLl9vcHRpb25zLm1hZ25ldEluZm8pIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8udHJpZ2dlck1hZ25ldCkgJiYgKG51bGwgPT09IChuID0gdGhpcy5fb3B0aW9ucy5tYWduZXRJbmZvKSB8fCB2b2lkIDAgPT09IG4gfHwgbi5tYWduZXRNZXJnZSksIHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxQYXJlbnROb2RlKGUubmV3RWZmZWN0SWQpKTtcbiAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxOb2RlKGksIHIpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiBpLFxuICAgICAgICBuZXdFZmZlY3RJZDogaVxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGdldFByZVNodWZmbGVEYXRhKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHN0YXRpYyBwdXNoRmFpbEVmZmVjdCgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQgPSB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgbyA9IHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIG4gPSBbXSxcbiAgICAgIGkgPSAobnVsbCAhPT0gKGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LnNsb3RCYXJJZHMpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiBbXSkubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0LFxuICAgICAgICAgIGksXG4gICAgICAgICAgciA9IG51bGwgPT0gbyA/IHZvaWQgMCA6IG8uZ2V0VGlsZU9iamVjdEJ5UG9zSWQoZSk7XG4gICAgICAgIG4ucHVzaChudWxsID09IHIgPyB2b2lkIDAgOiByLmlkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZXNJZDogbnVsbCA9PSByID8gdm9pZCAwIDogci5yZXNJZCxcbiAgICAgICAgICBpc0RheGlhbzogbnVsbCAhPT0gKHQgPSBudWxsID09IHIgPyB2b2lkIDAgOiByLmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuRGF4aWFvQ2FyZCkpICYmIHZvaWQgMCAhPT0gdCAmJiB0LFxuICAgICAgICAgIGR1b3hpYW9Db3VudDogbnVsbCAhPT0gKGkgPSBudWxsID09IHIgPyB2b2lkIDAgOiByLmdldER1b3hpYW9Db3VudCgpKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogMFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICByID0gdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJSZXZpdmVDaGVja2VyLmdldFJldml2ZUNvdW50KCksXG4gICAgICBhID0gbmV3IFRpbGUyUGVyZmVjdEVmZmVjdCh7XG4gICAgICAgIGlzQ2xlYXI6IHRydWVcbiAgICAgIH0pLFxuICAgICAgbCA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoKTtcbiAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKGwsIGEpO1xuICAgIHZhciBzID0gbmV3IFRpbGUyQmVmb3JlRmFpbEVmZmVjdCh7XG4gICAgICAgIHRpbGVJZHM6IG4sXG4gICAgICAgIHJldml2ZU51bTogclxuICAgICAgfSksXG4gICAgICBjID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZSgpO1xuICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbE5vZGUoYywgcyk7XG4gICAgdmFyIHUgPSBuZXcgVGlsZTJGYWlsRWZmZWN0KHtcbiAgICAgICAgdGlsZXM6IGksXG4gICAgICAgIHJldml2ZU51bTogcixcbiAgICAgICAgdGlsZVByZXZpZXdMYXlvdXQ6IFwidGhyZWVQbHVzT25lXCJcbiAgICAgIH0pLFxuICAgICAgcCA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoKTtcbiAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKHAsIHUpO1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0RWZmZWN0SWQ6IHAsXG4gICAgICBuZXdFZmZlY3RJZDogcFxuICAgIH07XG4gIH1cbiAgc3RhdGljIHRyeUV4Y3V0ZURpYW5aYW4oZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICBpID0gbnVsbCA9PT0gKHQgPSB0aGlzLl9vcHRpb25zLmRpYW5aYW5JbmZvKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmlzU2hvdztcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5pc0RlYWQgfHwgdGhpcy5fb3B0aW9ucy5pc1dpbikgdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyRGF0YS5jbGVhckNhbkRpYW5aYW5UaWxlSWRzKCk7ZWxzZSBpZiAoZSAmJiBpKSB7XG4gICAgICB2YXIgciA9IG51bGwgPT09IChvID0gdGhpcy5fb3B0aW9ucy5kaWFuWmFuSW5mbykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby50aWxlSWQxO1xuICAgICAgaWYgKHIpIHtcbiAgICAgICAgdmFyIGEgPSBuZXcgVGlsZTJEaWFuWmFuRWZmZWN0KHtcbiAgICAgICAgICAgIHRpbGVJZDE6IHIsXG4gICAgICAgICAgICBkaWFuWmFuQ29uZGl0aW9uOiAobnVsbCA9PT0gKG4gPSB0aGlzLl9vcHRpb25zLmRpYW5aYW5JbmZvKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmRpYW5aYW5Db25kaXRpb24pIHx8IDBcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZShlLm5ld0VmZmVjdElkKTtcbiAgICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShsLCBhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RhdGljIG1vZGlmeURpYW5aYW5JbmZvKGUsIHQsIG8pIHtcbiAgICBpZiAobyAmJiAhKG8ubGVuZ3RoIDw9IDApKSB7XG4gICAgICBpZiAoZSA9PT0gRURpYW5aYW5Db25kaXRpb24uQ29udGludWVSb2xsQ2FyZCkge1xuICAgICAgICB0aGlzLl9vcHRpb25zLmRpYW5aYW5JbmZvLmlzU2hvdyA9IHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyRGlhblphbkNoZWNrZXIuY2hlY2tDb250aW51ZVJvbGxDYXJkKG8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZSA9PT0gRURpYW5aYW5Db25kaXRpb24uU2xvdEJhck1hdGNoTm9Sb2xsQ2FyZCAmJiAodGhpcy5fb3B0aW9ucy5kaWFuWmFuSW5mby5pc1Nob3cgPSB0aGlzLl9nYW1lQ29udGV4dC50aWxlMkRpYW5aYW5DaGVja2VyLmNoZWNrU2xvdEJhckNhbk1hdGNoKHQsIHRydWUpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmRpYW5aYW5JbmZvLmlzU2hvdykge1xuICAgICAgICB2YXIgbiA9IG9bby5sZW5ndGggLSAxXSxcbiAgICAgICAgICBpID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3RCeVBvc0lkKG4pO1xuICAgICAgICBpZiAoaSAmJiBpLmlzVmFsaWQpIHtcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLmRpYW5aYW5JbmZvLnRpbGVJZDEgPSBpLmlkO1xuICAgICAgICAgIHRoaXMuX29wdGlvbnMuZGlhblphbkluZm8uZGlhblphbkNvbmRpdGlvbiA9IGU7XG4gICAgICAgIH0gZWxzZSB0aGlzLl9vcHRpb25zLmRpYW5aYW5JbmZvLmlzU2hvdyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdGF0aWMgbW9kaWZ5TWFnbmV0SW5mbyhlKSB7XG4gICAgaWYgKDAgPT0gZSkge1xuICAgICAgdGhpcy5fb3B0aW9ucy5jbGVhclNsb3RCYXJMaXN0ICYmIDAgIT0gdGhpcy5fb3B0aW9ucy5jbGVhclNsb3RCYXJMaXN0Lmxlbmd0aCB8fCAodGhpcy5fb3B0aW9ucy5tYWduZXRJbmZvID0gdGhpcy5jaGVja0lzU2hvd01hZ25ldCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb3B0aW9ucy5tYWduZXRJbmZvID0ge1xuICAgICAgICB0cmlnZ2VyTWFnbmV0OiB0cnVlLFxuICAgICAgICBpc1Nob3dJY29uSXRlbTogZmFsc2UsXG4gICAgICAgIG1hZ25ldENvdW50OiAwLFxuICAgICAgICBtYWduZXRNZXJnZTogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHRyeUV4Y3V0ZVNob3dNYWduZXQoZSkge1xuICAgIHZhciB0ID0gdGhpcy5fb3B0aW9ucy5tYWduZXRJbmZvO1xuICAgIGlmIChlICYmIHQgJiYgIXRoaXMuX29wdGlvbnMuaXNEZWFkICYmIChudWxsID09IHQgPyB2b2lkIDAgOiB0LnRyaWdnZXJNYWduZXQpICYmICF0Lm1hZ25ldE1lcmdlICYmIHQuaXNTaG93SWNvbkl0ZW0pIHtcbiAgICAgIHZhciBvID0gbmV3IFRpbGUyTWFnbmV0RWZmZWN0KHtcbiAgICAgICAgICBtYWduZXRDb3VudDogdGhpcy5fb3B0aW9ucy5tYWduZXRJbmZvLm1hZ25ldENvdW50XG4gICAgICAgIH0pLFxuICAgICAgICBuID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZShlLm5ld0VmZmVjdElkKTtcbiAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbE5vZGUobiwgbyk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyB0cnlFeGN1dGVIaWRlTWFnbmV0KGUpIHtcbiAgICBpZiAoZSAmJiAodGhpcy5fb3B0aW9ucy5pc1dpbiB8fCB0aGlzLl9vcHRpb25zLmlzRGVhZCkpIHtcbiAgICAgIHZhciB0ID0gbmV3IFRpbGUyTWFnbmV0SGlkZUVmZmVjdCh7XG4gICAgICAgICAgaXNXaW46IHRoaXMuX29wdGlvbnMuaXNXaW4sXG4gICAgICAgICAgaXNEZWFkOiB0aGlzLl9vcHRpb25zLmlzRGVhZFxuICAgICAgICB9KSxcbiAgICAgICAgbyA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoZS5uZXdFZmZlY3RJZCk7XG4gICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKG8sIHQpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgdHJ5UHVzaE5vcm1hbEJhY2tFZmZlY3QoZSkge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLm5vcm1hbEJhY2tMaXN0ICYmIDAgIT0gdGhpcy5fb3B0aW9ucy5ub3JtYWxCYWNrTGlzdC5sZW5ndGgpIHtcbiAgICAgIHZhciB0ID0gbmV3IFRpbGUyTm9ybWFsQmFja0VmZmVjdCh7XG4gICAgICAgICAgbm9ybWFsQmFja0xpc3Q6IHRoaXMuX29wdGlvbnMubm9ybWFsQmFja0xpc3RcbiAgICAgICAgfSksXG4gICAgICAgIG8gPSB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxQYXJlbnROb2RlKGUubmV3RWZmZWN0SWQpO1xuICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShvLCB0KTtcbiAgICB9XG4gIH1cbn0iXX0=