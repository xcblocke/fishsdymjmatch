"use strict";
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