"use strict";
cc._RF.push(module, '4f569fKi99IeYJzbvqzZ5a2', 'ClearTile4NormalHelper');
// Scripts/ClearTile4NormalHelper.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("./constant/BehaviorsEnum");
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
var Tile2DianZanEffect_1 = require("./Tile2DianZanEffect");
var Tile2HitTipsEffect_1 = require("./Tile2HitTipsEffect");
var Tile2DianZanChecker_1 = require("./process/dianzan/Tile2DianZanChecker");
var Tile2ScreenEdgeEffect_1 = require("./Tile2ScreenEdgeEffect");
var Tile2ScreenTopEffect_1 = require("./Tile2ScreenTopEffect");
var Tile2SlotAdvanceEffect_1 = require("./Tile2SlotAdvanceEffect");
var Tile2RollCardEffect_1 = require("./Tile2RollCardEffect");
var Tile2LuckyEffect_1 = require("./Tile2LuckyEffect");
var Tile2MagnetEffect_1 = require("./Tile2MagnetEffect");
var Tile2MagnetMergeEffect_1 = require("./Tile2MagnetMergeEffect");
var Tile2BeforeFailEffect_1 = require("./Tile2BeforeFailEffect");
var Tile2UpdateSlotBarEffect_1 = require("./Tile2UpdateSlotBarEffect");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var Tile2MagnetHideEffect_1 = require("./Tile2MagnetHideEffect");
var CollectInterfact_1 = require("./constant/CollectInterfact");
var Tile2NormalBackEffect_1 = require("./Tile2NormalBackEffect");
var Tile2SlotCardNumChangeEffect_1 = require("./Tile2SlotCardNumChangeEffect");
var ClearTile4NormalHelper = /** @class */ (function () {
    function ClearTile4NormalHelper() {
    }
    ClearTile4NormalHelper.modifyStepCount = function () {
        this._gameContext.gameModifier.modifyStepCount();
    };
    ClearTile4NormalHelper.modifySlotBarStepCount = function () {
        this._gameContext.tile2SlotBarModifier.updateSlotBarStepCount();
    };
    ClearTile4NormalHelper.clearSlotBarStepCount = function () {
        this._gameContext.tile2SlotBarModifier.clearSlotBarStepCount();
    };
    ClearTile4NormalHelper.clearSlotBarClearStepCount = function () {
        this._gameContext.tile2SlotBarModifier.clearSlotBarClearStepCount();
    };
    ClearTile4NormalHelper.modifySlotBarClearStepCount = function () {
        this._gameContext.tile2SlotBarModifier.updateSlotBarClearStepCount();
    };
    ClearTile4NormalHelper.getMaxClearTileClearStep = function (e) {
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
    ClearTile4NormalHelper.updateCanMatchTiles = function () {
        this._gameContext.getTileMapObject().updateCanMatchTiles();
    };
    ClearTile4NormalHelper.addCombo = function (e) {
        if (e === void 0) { e = 1; }
        this._gameContext.comboModifier.addCombo(e);
    };
    ClearTile4NormalHelper.calAddScore = function (e) {
        if (e === void 0) { e = 1; }
        return this._gameContext.scoreModifier.calAddScore(e);
    };
    ClearTile4NormalHelper.modifyClearHitTips = function (e) {
        return this._gameContext.tile2HitTipsModifier.modifyClearHitTips(e);
    };
    ClearTile4NormalHelper.checkIsShowMagnet = function () {
        return this._gameContext.tile2MagnetChecker.isCanMagnet() ? this._gameContext.tile2MagnetChecker.checkMagnet() : {
            triggerMagnet: false
        };
    };
    ClearTile4NormalHelper.parseDaxiaoData = function () {
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
    ClearTile4NormalHelper.checkResult = function () {
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
    ClearTile4NormalHelper.initOptions = function () {
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
            }
        };
    };
    ClearTile4NormalHelper.parseSlotBarChangeList = function () {
        var e = this._gameContext.tile2SlotBarChecker.getSlotBarChangeList(this._options.slotBarSnapshotBefore, this._options.slotBarSnapshotAddTile), t = this._gameContext.tile2SlotBarChecker.getSlotBarChangeList(this._options.slotBarSnapshotAddTile, this._options.slotBarSnapshotAfter), o = this._gameContext.tile2SlotBarChecker.getSlotBarChangeList(this._options.slotBarSnapshotBefore, this._options.slotBarSnapshotAfter);
        this._options.slotBarChangeList = e;
        this._options.slotBarChangeListAfter = t;
        this._options.slotBarChagneList2 = o;
    };
    ClearTile4NormalHelper.parseRollCardData = function (e) {
        var t, o, n = this._gameContext.tile2RollCardModifier.modifyRollCardDatas(), a = function a(e) {
            var t = n.findIndex(function (t) {
                return t.tileId === e.tileId;
            });
            if (t >= 0) {
                var o = __read(n.splice(t, 1), 1)[0];
                e.rollCardData = o;
            }
        };
        try {
            for (var l = __values(e), s = l.next(); !s.done; s = l.next())
                a(s.value);
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (o = l.return) && o.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        this._options.rollCardDatas = n;
    };
    ClearTile4NormalHelper.calSomeData = function (e) {
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
    ClearTile4NormalHelper.parseBombCardData = function () {
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
    ClearTile4NormalHelper.parseDuoxiaoCardData = function (e) {
        for (var t = e || this._options.clearTileList, o = 0; o < t.length; o++) {
            var n = t[o];
            if (this._gameContext.duoxiaoChecker.canShowDuoxiaoCombo(n)) {
                var i = this._gameContext.duoxiaoChecker.getCanClearDuoxiaoCardInfos(n);
                i && this._gameContext.duoxiaoModifier.modifyDuoxiaoClearCount(i.count);
                this._options.isShowDuoxiaoCombo = true;
            }
        }
    };
    ClearTile4NormalHelper.parseNormalBackCardData = function () {
        var e = this._gameContext.tile2NormalBackModifier.modifyStatus();
        this._options.normalBackList = e;
    };
    ClearTile4NormalHelper.runClear = function (e, t, o, n) {
        var i, r;
        this._gameContext = e;
        this._input = t;
        this._baseInput = o;
        for (var a = n.tileIds || [], l = n.outTiles || [], s = [], c = 0; c < a.length; c++) {
            var u = a[c], p = this._gameContext.getTileMapObject().getTileObject(u);
            p && p.isValid && (!p.isCardLock() || l.includes(u)) && s.push(u);
        }
        if (!(s.length <= 0)) {
            this.initOptions();
            this.modifyStepCount();
            this.clearSlotBarStepCount();
            this.clearSlotBarClearStepCount();
            this._gameContext.tile2DianZanChecker.checkLockRollCard();
            var f = this._gameContext.tile2SlotBarModifier, d = this._gameContext.tile2DianZanChecker, h = f.getSlotBarSnapshot(), y = d.checkSlotBarCanMatch(h, true), m = [];
            for (c = 0; c < s.length; c++) {
                u = s[c];
                this._gameContext.tile2DotTrackerModifier.addSlotBar(u);
                var v = f.addTile(u), g = f.getClearSlotBarList(m);
                v && g && g.length > 0 && (m = m.concat(g));
            }
            var _ = f.getSlotBarSnapshot();
            if (d.checkAddTileCanDianZan(h, _)) {
                this._options.dianZanInfo.isShow = true;
                this.modifyDianZanInfo(Tile2DianZanChecker_1.EDianZanCondition.UnlockRollCardCanDianZan, h, _);
            }
            else
                this.modifyDianZanInfo(Tile2DianZanChecker_1.EDianZanCondition.ContinueRollCard, h, _);
            f.clearSlotBar(m);
            this._options.dianZanInfo.isShow || y || this.modifyDianZanInfo(Tile2DianZanChecker_1.EDianZanCondition.SlotBarMatchNoRollCard, h, _);
            this.modifySlotBarStepCount();
            var T = f.getClearTileList(m);
            this._options.slotBarSnapshotBefore = h;
            this._options.slotBarSnapshotAddTile = _;
            this._options.clearSlotBarList = m;
            this._options.clearTileList = T;
            this.modifyMagnetInfo(n.magnetPair || 0);
            this._gameContext.tile2DianZanChecker.checkUnlockRollCard(_);
            if (m.length > 0) {
                this._gameContext.clearModifier.modifyManualMatchCount(this._input);
                this._gameContext.clearModifier.modifyAutoCollectTilesNum(this._input, 2 * T.length);
                this.parseDaxiaoData();
                var C = this._gameContext.getGameData();
                this.addCombo(1);
                var b, E = C.isBreakBest();
                b = (null === (i = this._options.magnetInfo) || void 0 === i ? void 0 : i.triggerMagnet) && (null === (r = this._options.magnetInfo) || void 0 === r ? void 0 : r.magnetMerge) ? this.calAddScore(T.length) : this.calAddScore();
                this._options.addScore = b;
                var I = C.isBreakBest(), w = E != I && I;
                this._options.isBreakBest = w;
                var B = this._gameContext.tile2ComboChecker.checkComboDisplayState();
                this._options.comboNum = B.comboNum;
                this._options.comboState = B.comboState;
                this._options.showComboDisplay = B.showComboDisplay;
                this._options.showScreenEdge = B.showScreenEdge;
                this._options.showScreenTop = B.showScreenTop;
                if (B.showSlotAdvance) {
                    this._options.showSlotAdvance = true;
                    this._options.slotLevel = B.slotLevel;
                    this._gameContext.comboModifier.updateSlotLevel(B.slotLevel);
                }
                var x = this._gameContext.tile2CheerChecker.canShowCheer(B.comboNum);
                this._options.isShowCheer = x.isShow;
                this._options.indexCheer = x.index;
                this.modifySlotBarClearStepCount();
                var M = this.modifyClearHitTips(T);
                if (M.clearHit) {
                    this._options.clearHit = true;
                    this._options.hideHitIds = M.hideHitIds;
                }
                var O = f.getSlotBarSnapshot();
                this._options.slotBarSnapshotAfter = O;
                this.parseSlotBarChangeList();
                this.parseRollCardData(this._options.slotBarChangeList);
                var D = this._gameContext.allClearChecker.checkInAllClear();
                if (D) {
                    this._options.isShowAllClear = D.allClear;
                    this._options.allClearEffectId = D.effectId;
                    this._options.allClearTileIds = D.ids;
                    D.allClear && this._gameContext.allClearModifier.changeAllClear(D.effectId, D.ids);
                }
                this.parseBombCardData();
                this.parseDuoxiaoCardData();
                this.parseNormalBackCardData();
                this.checkResult();
                if (this._options.isDead || this._options.isWin) {
                    this._options.isShowDuoxiaoCombo = false;
                    this._gameContext.duoxiaoModifier.resetDuoxiaoClearCount();
                }
                this.pushClearEffects();
            }
            else {
                O = f.getSlotBarSnapshot();
                this._options.slotBarSnapshotAfter = O;
                this.parseSlotBarChangeList();
                this.parseNormalBackCardData();
                this.parseRollCardData(this._options.slotBarChagneList2);
                this.checkResult();
                this.pushAdd();
            }
            this.clearEnd(this._options);
        }
    };
    ClearTile4NormalHelper.clearEnd = function () { };
    ClearTile4NormalHelper.pushAdd = function () {
        this.tryExcuteSlotCardNumChange();
        var e = this._baseInput.addParallelParentNode(), t = {
            lastEffectId: e,
            newEffectId: e
        };
        this.tryExcuteHideMagnet(t);
        var o = this.tryPushRollCardAndUpdate(this._options.slotBarChagneList2, t);
        this.tryPushNormalBackEffect(o);
        this.tryExcuteDianZan(o);
        this.tryExcuteShowMagnet(o);
        this.tryPushEndEffect();
    };
    ClearTile4NormalHelper.tryPushRollCardAndUpdate = function (e, t) {
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
    ClearTile4NormalHelper.addToSlotBarEffects = function (e, t) {
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
    ClearTile4NormalHelper.paseDaxiaoClearTipsEffect = function (e, t) {
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
    ClearTile4NormalHelper.paseDaxiaoClearEffect = function (e, t) {
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
    ClearTile4NormalHelper.paseBombEffect = function (e) {
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
                    var p = this._baseInput.addSerialParentNode(a), f = new DaxiaoClearTipEffect_1.DaxiaoClearTipEffect({
                        tileIds: this._options.tileIds,
                        finalMatchInfos: r.daxiaoCardMatchInfos
                    });
                    this._baseInput.addSerialNode(p, f);
                    var d = new DaxiaoClearEffectEffect_1.DaxiaoClearEffectEffect({
                        tileIds: this._options.tileIds,
                        finalMatchInfos: r.daxiaoCardMatchInfos
                    });
                    this._baseInput.addSerialNode(p, d);
                }
                var h = this._baseInput.addParallelParentNode(a), g = this._baseInput.addSerialParentNode(h), _ = new Tile2ScoreFlotEffect_1.Tile2ScoreFlotEffect({
                    tileId: r.bombParams.bombIds[0],
                    lastTileId: r.bombParams.bombIds[1],
                    isCombo: r.calData.comboState,
                    addScore: r.calData.addScore
                });
                this._baseInput.addSerialNode(g, _);
                var T = this._gameContext.getGameData(), C = new Tile2UpdateScoreEffect_1.Tile2UpdateScoreEffect({
                    addScore: r.calData.addScore,
                    targetScore: T.getScore(),
                    isShowCombo: r.calData.comboState
                });
                this._baseInput.addSerialNode(g, C);
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
    ClearTile4NormalHelper.parseDuoxiaoEffect = function (e, t) {
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
    ClearTile4NormalHelper.tryPushBlock = function (e) {
        if (this._options.isShowDuoxiaoCombo) {
            var t = new BlockInputRefEffect_1.BlockInputRefEffect({
                block: e,
                from: "duoxiaoCombo"
            }), o = this._baseInput.addParallelParentNode();
            this._baseInput.addParallelNode(o, t);
        }
    };
    ClearTile4NormalHelper.tryPushClearHitTipsEffect = function () {
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
    ClearTile4NormalHelper.pushRollCardEffects = function (e) {
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
    ClearTile4NormalHelper.pushLuckyEffect = function (e) {
        var t, o;
        try {
            for (var n = __values(this._options.rollCardDatas), r = n.next(); !r.done; r = n.next()) {
                var a = r.value, l = new Tile2LuckyEffect_1.Tile2LuckyEffect({
                    tileId: a.tileId,
                    frontToBack: a.frontToBack
                }), s = this._baseInput.addSerialParentNode(e.newEffectId);
                this._baseInput.addSerialNode(s, l);
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
    ClearTile4NormalHelper.tryPushAddToSlotBarEffects = function (e, t) {
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
    ClearTile4NormalHelper.tryPushAllClearEffect = function (e) {
        var t, o, n, r, a = this._options.clearSlotBarList, l = [], s = new Map(), c = this._options.slotBarChangeList, u = new Set();
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
        this._options.slotBarChangeListAfter && this._options.slotBarChangeListAfter.length > 0 && this.tryPushAddToSlotBarEffects(this._options.slotBarChangeListAfter, E);
        return E;
    };
    ClearTile4NormalHelper.tryPushClearEffect = function (e, t, o, n) {
        var i = n;
        if (o && o.length > 0) {
            var r = this._baseInput.addSerialParentNode(n.newEffectId);
            i = {
                lastEffectId: n.newEffectId,
                newEffectId: r
            };
            this.tryPushAddToSlotBarEffects(o, i);
        }
        var a = this._baseInput.addSerialParentNode(i.newEffectId), l = {
            lastEffectId: i.newEffectId,
            newEffectId: a
        }, s = new Tile2ClearEffect_1.Tile2ClearEffect({
            tileIds: t
        }), c = this._baseInput.addParallelParentNode(l.newEffectId);
        this._baseInput.addParallelNode(c, s);
        this.paseDaxiaoClearTipsEffect(e, i);
        var u = this._baseInput.addSerialParentNode(i.newEffectId), p = {
            lastEffectId: i.newEffectId,
            newEffectId: u
        }, f = this._baseInput.addParallelParentNode(p.newEffectId), d = {
            lastEffectId: p.newEffectId,
            newEffectId: f
        }, h = this._gameContext.getTileMapObject().getTileObject(t[0]), y = this._gameContext.getTileMapObject().getTileObject(t[1]), m = this.createTile2ClearEffectEffect(h, y, this._options), v = this._baseInput.addParallelParentNode(d.newEffectId);
        this._baseInput.addParallelNode(v, m);
        this.paseDaxiaoClearEffect(e, d);
        return d;
    };
    ClearTile4NormalHelper.pushClearEffects = function () {
        var e, t;
        this.tryExcuteSlotCardNumChange();
        this.tryPushBlock(true);
        this.tryPushClearHitTipsEffect();
        var o = this._baseInput.addParallelParentNode(), n = {
            lastEffectId: o,
            newEffectId: o
        };
        this.pushRollCardEffects(n);
        var i, r = this._baseInput.addParallelParentNode(), l = {
            lastEffectId: r,
            newEffectId: r
        };
        this.tryExcuteHideMagnet(l);
        i = (null === (e = this._options.magnetInfo) || void 0 === e ? void 0 : e.triggerMagnet) && (null === (t = this._options.magnetInfo) || void 0 === t ? void 0 : t.magnetMerge) ? this.pushMagnetMergeEffects(l) : this.tryPushAllClearEffect(l);
        this.tryPushNormalBackEffect(l);
        this.pushScoreFlotEffect(i);
        this.tryExcuteShowCombo(i);
        this.tryShowCheer(i);
        this.tryShowScreenEdge(i);
        this.tryShowScreenTop(i);
        this.tryShowSlotAdvance(i);
        this.tryExcuteDianZan(i);
        this.tryExcuteShowMagnet(i);
        this.paseBombEffect(i);
        this.parseDuoxiaoEffect(i, BehaviorsEnum_1.EInsertType.Parallel);
        var s = this.tryExcuteAllClear(i);
        this.tryPushBlock(false);
        var c = i;
        this._options.insertEndEffectId && (c = {
            lastEffectId: this._options.insertEndEffectId,
            newEffectId: this._options.insertEndEffectId
        });
        this.tryPushEndEffect(c, s);
    };
    ClearTile4NormalHelper.pushSlotBarEffects = function () { };
    ClearTile4NormalHelper.pushMagnetMergeEffects = function (e) {
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
    ClearTile4NormalHelper.createTile2ClearEffectEffect = function (e, t) {
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
    ClearTile4NormalHelper.tryPushEndEffect = function (e, t) {
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
                var a = this._baseInput.addParallelParentNode(), l = {
                    lastEffectId: a,
                    newEffectId: a
                }, s = (i = new Tile2BeforeEndEffect_1.Tile2BeforeEndEffect({}), this._baseInput.addSerialParentNode(l.newEffectId));
                this._baseInput.addSerialNode(s, i);
                this._baseInput.addSerialNode(s, o);
            }
        }
    };
    ClearTile4NormalHelper.tryShowCheer = function (e) {
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
    ClearTile4NormalHelper.pushScoreFlotEffect = function (e) {
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
        }), g = this._gameContext.getGameData(), _ = new Tile2UpdateScoreEffect_1.Tile2UpdateScoreEffect({
            addScore: l,
            targetScore: g.getScore(),
            isShowCombo: a
        }), T = this._baseInput.addSerialParentNode(e.newEffectId);
        this._baseInput.addSerialNode(T, y);
        this._baseInput.addSerialNode(T, _);
        return {
            lastEffectId: e.newEffectId,
            newEffectId: T
        };
    };
    ClearTile4NormalHelper.tryExcuteShowCombo = function (e) {
        this._options.showComboDisplay && this.pushTile2ComboEffect(this._options.comboNum, e);
    };
    ClearTile4NormalHelper.pushTile2ComboEffect = function (e, t) {
        var o = new Tile2ComboEffect_1.Tile2ComboEffect({
            comboNum: e
        }), n = this._baseInput.addParallelParentNode(t.newEffectId);
        this._baseInput.addParallelNode(n, o);
        return {
            lastEffectId: t.newEffectId,
            newEffectId: n
        };
    };
    ClearTile4NormalHelper.tryShowScreenEdge = function (e) {
        this._options.showScreenEdge && this.pushScreenEdgeEffect(e);
    };
    ClearTile4NormalHelper.pushScreenEdgeEffect = function (e) {
        var t = new Tile2ScreenEdgeEffect_1.Tile2ScreenEdgeEffect({
            comboNum: this._options.comboNum
        }), o = this._baseInput.addParallelParentNode(e.newEffectId);
        this._baseInput.addParallelNode(o, t);
        return {
            lastEffectId: e.newEffectId,
            newEffectId: o
        };
    };
    ClearTile4NormalHelper.tryShowScreenTop = function (e) {
        this._options.showScreenTop && this.pushScreenTopEffect(e);
    };
    ClearTile4NormalHelper.pushScreenTopEffect = function (e) {
        var t = new Tile2ScreenTopEffect_1.Tile2ScreenTopEffect({}), o = this._baseInput.addParallelParentNode(e.newEffectId);
        this._baseInput.addParallelNode(o, t);
        return {
            lastEffectId: e.newEffectId,
            newEffectId: o
        };
    };
    ClearTile4NormalHelper.tryShowSlotAdvance = function (e) {
        this._options.showSlotAdvance && this.pushSlotAdvanceEffect(e);
    };
    ClearTile4NormalHelper.pushSlotAdvanceEffect = function (e) {
        var t = new Tile2SlotAdvanceEffect_1.Tile2SlotAdvanceEffect({
            slotLevel: this._options.slotLevel
        }), o = this._baseInput.addParallelParentNode(e.newEffectId);
        this._baseInput.addParallelNode(o, t);
        return {
            lastEffectId: e.newEffectId,
            newEffectId: o
        };
    };
    ClearTile4NormalHelper.tryExcuteAllClear = function (e) {
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
    ClearTile4NormalHelper.getPreShuffleData = function () {
        return null;
    };
    ClearTile4NormalHelper.pushFailEffect = function () {
        var e, t = this._gameContext.getGameData(), o = this._gameContext.getTileMapObject(), n = [], i = (null !== (e = null == t ? void 0 : t.slotBarIds) && void 0 !== e ? e : []).map(function (e) {
            var t, i, r = null == o ? void 0 : o.getTileObjectByPosId(e);
            n.push(null == r ? void 0 : r.id);
            return {
                resId: null == r ? void 0 : r.resId,
                isDaxiao: null !== (t = null == r ? void 0 : r.checkHasType(TileTypeEnum_1.ETileType.DaxiaoCard)) && void 0 !== t && t,
                duoxiaoCount: null !== (i = null == r ? void 0 : r.getDuoxiaoCount()) && void 0 !== i ? i : 0
            };
        }), r = this._gameContext.tile2ReviveChecker.getReviveCount(), a = new Tile2BeforeFailEffect_1.Tile2BeforeFailEffect({
            tileIds: n,
            reviveNum: r
        }), l = this._baseInput.addParallelParentNode();
        this._baseInput.addParallelNode(l, a);
        var s = new Tile2FailEffect_1.Tile2FailEffect({
            tiles: i,
            reviveNum: r,
            tilePreviewLayout: "row4"
        }), c = this._baseInput.addParallelParentNode();
        this._baseInput.addParallelNode(c, s);
        return {
            lastEffectId: c,
            newEffectId: c
        };
    };
    ClearTile4NormalHelper.tryExcuteSlotCardNumChange = function () {
        var e, t, o, n, i = new Tile2SlotCardNumChangeEffect_1.Tile2SlotCardNumChangeEffect({
            startSlotBarCardCount: null !== (t = null === (e = this._options.slotBarSnapshotBefore) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0,
            endSlotBarCardCount: null !== (n = null === (o = this._options.slotBarSnapshotAfter) || void 0 === o ? void 0 : o.length) && void 0 !== n ? n : 0
        }), r = this._baseInput.addParallelParentNode();
        this._baseInput.addParallelNode(r, i);
    };
    ClearTile4NormalHelper.tryExcuteDianZan = function (e) {
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
    ClearTile4NormalHelper.modifyDianZanInfo = function (e, t, o) {
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
    ClearTile4NormalHelper.modifyMagnetInfo = function (e) {
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
    ClearTile4NormalHelper.tryExcuteShowMagnet = function (e) {
        var t = this._options.magnetInfo;
        if (e && t && !this._options.isDead && (null == t ? void 0 : t.triggerMagnet) && !t.magnetMerge && t.isShowIconItem) {
            var o = new Tile2MagnetEffect_1.Tile2MagnetEffect({
                magnetCount: this._options.magnetInfo.magnetCount
            }), n = this._baseInput.addParallelParentNode(e.newEffectId);
            this._baseInput.addParallelNode(n, o);
        }
    };
    ClearTile4NormalHelper.tryExcuteHideMagnet = function (e) {
        if (e && (this._options.isWin || this._options.isDead)) {
            var t = new Tile2MagnetHideEffect_1.Tile2MagnetHideEffect({
                isWin: this._options.isWin,
                isDead: this._options.isDead
            }), o = this._baseInput.addParallelParentNode(e.newEffectId);
            this._baseInput.addParallelNode(o, t);
        }
    };
    ClearTile4NormalHelper.tryPushNormalBackEffect = function (e) {
        if (this._options.normalBackList && 0 != this._options.normalBackList.length) {
            var t = new Tile2NormalBackEffect_1.Tile2NormalBackEffect({
                normalBackList: this._options.normalBackList
            }), o = this._baseInput.addParallelParentNode(e.newEffectId);
            this._baseInput.addParallelNode(o, t);
        }
    };
    ClearTile4NormalHelper._options = null;
    ClearTile4NormalHelper._gameContext = null;
    ClearTile4NormalHelper._input = null;
    ClearTile4NormalHelper._baseInput = null;
    __decorate([
        mj.traitEvent("ClearT4Hlp_modifyStepCnt")
    ], ClearTile4NormalHelper, "modifyStepCount", null);
    __decorate([
        mj.traitEvent("ClearT4Hlp_clearEnd")
    ], ClearTile4NormalHelper, "clearEnd", null);
    __decorate([
        mj.traitEvent("ClearT4Hlp_newClrEffEff")
    ], ClearTile4NormalHelper, "createTile2ClearEffectEffect", null);
    return ClearTile4NormalHelper;
}());
exports.default = ClearTile4NormalHelper;

cc._RF.pop();