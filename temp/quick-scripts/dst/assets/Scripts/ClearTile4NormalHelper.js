
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ClearTile4NormalHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NsZWFyVGlsZTROb3JtYWxIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUF1RDtBQUN2RCw2REFBNEQ7QUFDNUQsMkNBQTBDO0FBQzFDLHFFQUFvRTtBQUNwRSwrREFBOEQ7QUFDOUQscUVBQW9FO0FBQ3BFLHVEQUFzRDtBQUN0RCxtREFBa0Q7QUFDbEQsK0RBQThEO0FBQzlELHVEQUFzRDtBQUN0RCwrREFBOEQ7QUFDOUQsbUVBQWtFO0FBQ2xFLHVEQUFzRDtBQUN0RCxtRUFBa0U7QUFDbEUsbURBQWtEO0FBQ2xELHFEQUFvRDtBQUNwRCwyREFBMEQ7QUFDMUQsMkRBQTBEO0FBQzFELDZFQUEwRTtBQUMxRSxpRUFBZ0U7QUFDaEUsK0RBQThEO0FBQzlELG1FQUFrRTtBQUNsRSw2REFBNEQ7QUFDNUQsdURBQXNEO0FBQ3RELHlEQUF3RDtBQUN4RCxtRUFBa0U7QUFDbEUsaUVBQWdFO0FBQ2hFLHVFQUFzRTtBQUN0RSxrRUFBOEQ7QUFDOUQsaUVBQWdFO0FBQ2hFLGdFQUEyRDtBQUMzRCxpRUFBZ0U7QUFDaEUsK0VBQThFO0FBQzlFO0lBQUE7SUFncUNBLENBQUM7SUExcENRLHNDQUFlLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUNNLDZDQUFzQixHQUE3QjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsRSxDQUFDO0lBQ00sNENBQXFCLEdBQTVCO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFDTSxpREFBMEIsR0FBakM7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDdEUsQ0FBQztJQUNNLGtEQUEyQixH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WUFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUNNLDhDQUF1QixHQUE5QixVQUErQixDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUM1RSxJQUFJLENBQUMsR0FBRyxJQUFJLDZDQUFxQixDQUFDO2dCQUM5QixjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjO2FBQzdDLENBQUMsRUFDRixDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQTlwQ00sK0JBQVEsR0FBRyxJQUFJLENBQUM7SUFDaEIsbUNBQVksR0FBRyxJQUFJLENBQUM7SUFDcEIsNkJBQU0sR0FBRyxJQUFJLENBQUM7SUFDZCxpQ0FBVSxHQUFHLElBQUksQ0FBQztJQUV6QjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7dURBR3pDO0lBb1hEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztnREFDakI7SUE0ZXBCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztvRUFheEM7SUE0U0gsNkJBQUM7Q0FocUNELEFBZ3FDQyxJQUFBO2tCQWhxQ29CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVJbnNlcnRUeXBlIH0gZnJvbSAnLi9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IEJsb2NrSW5wdXRSZWZFZmZlY3QgfSBmcm9tICcuL0Jsb2NrSW5wdXRSZWZFZmZlY3QnO1xuaW1wb3J0IHsgQm9tYkVmZmVjdCB9IGZyb20gJy4vQm9tYkVmZmVjdCc7XG5pbXBvcnQgeyBEYXhpYW9DbGVhckVmZmVjdEVmZmVjdCB9IGZyb20gJy4vRGF4aWFvQ2xlYXJFZmZlY3RFZmZlY3QnO1xuaW1wb3J0IHsgRGF4aWFvQ2xlYXJUaXBFZmZlY3QgfSBmcm9tICcuL0RheGlhb0NsZWFyVGlwRWZmZWN0JztcbmltcG9ydCB7IFRpbGUyRHVveGlhb0NvbWJvRWZmZWN0IH0gZnJvbSAnLi9UaWxlMkR1b3hpYW9Db21ib0VmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMkNoZWVyRWZmZWN0IH0gZnJvbSAnLi9UaWxlMkNoZWVyRWZmZWN0JztcbmltcG9ydCB7IEFsbENsZWFyRWZmZWN0IH0gZnJvbSAnLi9BbGxDbGVhckVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMkJlZm9yZUVuZEVmZmVjdCB9IGZyb20gJy4vVGlsZTJCZWZvcmVFbmRFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJDb21ib0VmZmVjdCB9IGZyb20gJy4vVGlsZTJDb21ib0VmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMlNjb3JlRmxvdEVmZmVjdCB9IGZyb20gJy4vVGlsZTJTY29yZUZsb3RFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJVcGRhdGVTY29yZUVmZmVjdCB9IGZyb20gJy4vVGlsZTJVcGRhdGVTY29yZUVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMkNsZWFyRWZmZWN0IH0gZnJvbSAnLi9UaWxlMkNsZWFyRWZmZWN0JztcbmltcG9ydCB7IFRpbGUyQ2xlYXJFZmZlY3RFZmZlY3QgfSBmcm9tICcuL1RpbGUyQ2xlYXJFZmZlY3RFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJFbmRFZmZlY3QgfSBmcm9tICcuL1RpbGUyRW5kRWZmZWN0JztcbmltcG9ydCB7IFRpbGUyRmFpbEVmZmVjdCB9IGZyb20gJy4vVGlsZTJGYWlsRWZmZWN0JztcbmltcG9ydCB7IFRpbGUyRGlhblphbkVmZmVjdCB9IGZyb20gJy4vVGlsZTJEaWFuWmFuRWZmZWN0JztcbmltcG9ydCB7IFRpbGUySGl0VGlwc0VmZmVjdCB9IGZyb20gJy4vVGlsZTJIaXRUaXBzRWZmZWN0JztcbmltcG9ydCB7IEVEaWFuWmFuQ29uZGl0aW9uIH0gZnJvbSAnLi9wcm9jZXNzL2RpYW56YW4vVGlsZTJEaWFuWmFuQ2hlY2tlcic7XG5pbXBvcnQgeyBUaWxlMlNjcmVlbkVkZ2VFZmZlY3QgfSBmcm9tICcuL1RpbGUyU2NyZWVuRWRnZUVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMlNjcmVlblRvcEVmZmVjdCB9IGZyb20gJy4vVGlsZTJTY3JlZW5Ub3BFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJTbG90QWR2YW5jZUVmZmVjdCB9IGZyb20gJy4vVGlsZTJTbG90QWR2YW5jZUVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMlJvbGxDYXJkRWZmZWN0IH0gZnJvbSAnLi9UaWxlMlJvbGxDYXJkRWZmZWN0JztcbmltcG9ydCB7IFRpbGUyTHVja3lFZmZlY3QgfSBmcm9tICcuL1RpbGUyTHVja3lFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJNYWduZXRFZmZlY3QgfSBmcm9tICcuL1RpbGUyTWFnbmV0RWZmZWN0JztcbmltcG9ydCB7IFRpbGUyTWFnbmV0TWVyZ2VFZmZlY3QgfSBmcm9tICcuL1RpbGUyTWFnbmV0TWVyZ2VFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJCZWZvcmVGYWlsRWZmZWN0IH0gZnJvbSAnLi9UaWxlMkJlZm9yZUZhaWxFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJVcGRhdGVTbG90QmFyRWZmZWN0IH0gZnJvbSAnLi9UaWxlMlVwZGF0ZVNsb3RCYXJFZmZlY3QnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCB7IFRpbGUyTWFnbmV0SGlkZUVmZmVjdCB9IGZyb20gJy4vVGlsZTJNYWduZXRIaWRlRWZmZWN0JztcbmltcG9ydCB7IEVDb2xsZWN0RnJvbSB9IGZyb20gJy4vY29uc3RhbnQvQ29sbGVjdEludGVyZmFjdCc7XG5pbXBvcnQgeyBUaWxlMk5vcm1hbEJhY2tFZmZlY3QgfSBmcm9tICcuL1RpbGUyTm9ybWFsQmFja0VmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMlNsb3RDYXJkTnVtQ2hhbmdlRWZmZWN0IH0gZnJvbSAnLi9UaWxlMlNsb3RDYXJkTnVtQ2hhbmdlRWZmZWN0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsZWFyVGlsZTROb3JtYWxIZWxwZXIge1xuICBzdGF0aWMgX29wdGlvbnMgPSBudWxsO1xuICBzdGF0aWMgX2dhbWVDb250ZXh0ID0gbnVsbDtcbiAgc3RhdGljIF9pbnB1dCA9IG51bGw7XG4gIHN0YXRpYyBfYmFzZUlucHV0ID0gbnVsbDtcbiAgQG1qLnRyYWl0RXZlbnQoXCJDbGVhclQ0SGxwX21vZGlmeVN0ZXBDbnRcIilcbiAgc3RhdGljIG1vZGlmeVN0ZXBDb3VudCgpIHtcbiAgICB0aGlzLl9nYW1lQ29udGV4dC5nYW1lTW9kaWZpZXIubW9kaWZ5U3RlcENvdW50KCk7XG4gIH1cbiAgc3RhdGljIG1vZGlmeVNsb3RCYXJTdGVwQ291bnQoKSB7XG4gICAgdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyTW9kaWZpZXIudXBkYXRlU2xvdEJhclN0ZXBDb3VudCgpO1xuICB9XG4gIHN0YXRpYyBjbGVhclNsb3RCYXJTdGVwQ291bnQoKSB7XG4gICAgdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyTW9kaWZpZXIuY2xlYXJTbG90QmFyU3RlcENvdW50KCk7XG4gIH1cbiAgc3RhdGljIGNsZWFyU2xvdEJhckNsZWFyU3RlcENvdW50KCkge1xuICAgIHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyU2xvdEJhck1vZGlmaWVyLmNsZWFyU2xvdEJhckNsZWFyU3RlcENvdW50KCk7XG4gIH1cbiAgc3RhdGljIG1vZGlmeVNsb3RCYXJDbGVhclN0ZXBDb3VudCgpIHtcbiAgICB0aGlzLl9nYW1lQ29udGV4dC50aWxlMlNsb3RCYXJNb2RpZmllci51cGRhdGVTbG90QmFyQ2xlYXJTdGVwQ291bnQoKTtcbiAgfVxuICBzdGF0aWMgZ2V0TWF4Q2xlYXJUaWxlQ2xlYXJTdGVwKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgcixcbiAgICAgIGEgPSB0aGlzLl9nYW1lQ29udGV4dC50aWxlMlNsb3RCYXJEYXRhLFxuICAgICAgbCA9IDA7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhlKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBjLnZhbHVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIHAgPSAobiA9IHZvaWQgMCwgX192YWx1ZXModSkpLCBmID0gcC5uZXh0KCk7ICFmLmRvbmU7IGYgPSBwLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIGQgPSBmLnZhbHVlLFxuICAgICAgICAgICAgICBoID0gYS5nZXRUaWxlQ2xlYXJTdGVwKGQpO1xuICAgICAgICAgICAgaCA+IGwgJiYgKGwgPSBoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBuID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmICYmICFmLmRvbmUgJiYgKHIgPSBwLnJldHVybikgJiYgci5jYWxsKHApO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYyAmJiAhYy5kb25lICYmIChvID0gcy5yZXR1cm4pICYmIG8uY2FsbChzKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbDtcbiAgfVxuICBzdGF0aWMgdXBkYXRlQ2FuTWF0Y2hUaWxlcygpIHtcbiAgICB0aGlzLl9nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkudXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICB9XG4gIHN0YXRpYyBhZGRDb21ibyhlID0gMSkge1xuICAgIHRoaXMuX2dhbWVDb250ZXh0LmNvbWJvTW9kaWZpZXIuYWRkQ29tYm8oZSk7XG4gIH1cbiAgc3RhdGljIGNhbEFkZFNjb3JlKGUgPSAxKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVDb250ZXh0LnNjb3JlTW9kaWZpZXIuY2FsQWRkU2NvcmUoZSk7XG4gIH1cbiAgc3RhdGljIG1vZGlmeUNsZWFySGl0VGlwcyhlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVDb250ZXh0LnRpbGUySGl0VGlwc01vZGlmaWVyLm1vZGlmeUNsZWFySGl0VGlwcyhlKTtcbiAgfVxuICBzdGF0aWMgY2hlY2tJc1Nob3dNYWduZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyTWFnbmV0Q2hlY2tlci5pc0Nhbk1hZ25ldCgpID8gdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJNYWduZXRDaGVja2VyLmNoZWNrTWFnbmV0KCkgOiB7XG4gICAgICB0cmlnZ2VyTWFnbmV0OiBmYWxzZVxuICAgIH07XG4gIH1cbiAgc3RhdGljIHBhcnNlRGF4aWFvRGF0YSgpIHtcbiAgICB2YXIgZTtcbiAgICBpZiAoISgobnVsbCA9PT0gKGUgPSB0aGlzLl9vcHRpb25zLmNsZWFyVGlsZUxpc3QpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUubGVuZ3RoKSA8PSAwKSkgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLl9vcHRpb25zLmNsZWFyVGlsZUxpc3QubGVuZ3RoOyB0KyspIHtcbiAgICAgIHZhciBvID0gdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyTW9kaWZpZXIuZ2V0U2xvdEJhclNuYXBzaG90KCksXG4gICAgICAgIG4gPSB0aGlzLl9vcHRpb25zLmNsZWFyVGlsZUxpc3RbdF0sXG4gICAgICAgIGkgPSB0aGlzLl9nYW1lQ29udGV4dC5kYXhpYW9DaGVja2VyLmdldENhbkNsZWFyRGF4aWFvQ2FyZEluZm9zX3RpbGUyKG4pO1xuICAgICAgaWYgKGkgJiYgaS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyRGF4aWFvTW9kaWZpZXIubW9kaWZ5RGF4aWFvQ2FyZCh0aGlzLl9pbnB1dCwgaSk7XG4gICAgICAgIHZhciByID0gdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyTW9kaWZpZXIuZ2V0U2xvdEJhclNuYXBzaG90KCksXG4gICAgICAgICAgYSA9IHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyU2xvdEJhckNoZWNrZXIuZ2V0U2xvdEJhckNoYW5nZUxpc3QobywgciksXG4gICAgICAgICAgbCA9IGkubGVuZ3RoLFxuICAgICAgICAgIHMgPSB0aGlzLmNhbFNvbWVEYXRhKGwpO1xuICAgICAgICB0aGlzLl9vcHRpb25zLnRpbGUyRGF4aWFvSW5mb3NbdF0gPSB7XG4gICAgICAgICAgZGF4aWFvQ2FyZE1hdGNoSW5mb3M6IGksXG4gICAgICAgICAgY2FsRGF0YTogcyxcbiAgICAgICAgICBjaGFuZ2VMaXN0OiBhXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXRpYyBjaGVja1Jlc3VsdCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyUmVzdWx0Q2hlY2tlci5jaGVja0lzRW5kKCksXG4gICAgICB0ID0gZmFsc2U7XG4gICAgaWYgKGUpIHtcbiAgICAgIHZhciBvID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKTtcbiAgICAgIHRoaXMuX29wdGlvbnMucHJldldpblNjb3JlID0gby5nZXRMYXN0V2luU2NvcmUoKTtcbiAgICAgIHRoaXMuX29wdGlvbnMucHJldldpbkNvbWJvTnVtID0gby5nZXRMYXN0V2luQ29tYm9OdW0oKTtcbiAgICAgIHRoaXMuX29wdGlvbnMucHJldldpbkR1cmF0aW9uID0gby5nZXRMYXN0V2luRHVyYXRpb24oKTtcbiAgICAgIHRoaXMuX29wdGlvbnMud2luR2FtZUR1cmF0aW9uID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2FtZVRpbWVEYXRhLnRpbWU7XG4gICAgICBvLnNhdmVMYXN0V2luUmVzdWx0KG8uZ2V0U2NvcmUoKSwgby5nZXRDb21ib051bSgpLCB0aGlzLl9vcHRpb25zLndpbkdhbWVEdXJhdGlvbik7XG4gICAgICB0aGlzLl9nYW1lQ29udGV4dC5nYW1lTW9kaWZpZXIubW9kaWZ5V2luRm9yVGlsZTIoKTtcbiAgICB9IGVsc2UgdCA9IHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyUmVzdWx0Q2hlY2tlci5jaGVja0lzRGVhZCgpO1xuICAgIHRoaXMuX29wdGlvbnMuaXNXaW4gPSBlO1xuICAgIHRoaXMuX29wdGlvbnMuaXNEZWFkID0gdDtcbiAgfVxuICBzdGF0aWMgaW5pdE9wdGlvbnMoKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHtcbiAgICAgIGlucHV0OiB0aGlzLl9pbnB1dCxcbiAgICAgIHRpbGVJZHM6IFtdLFxuICAgICAgYWRkU2NvcmU6IDAsXG4gICAgICBjb21ib1N0YXRlOiBmYWxzZSxcbiAgICAgIHNob3dDb21ib0Rpc3BsYXk6IGZhbHNlLFxuICAgICAgc2hvd1NjcmVlbkVkZ2U6IGZhbHNlLFxuICAgICAgc2hvd1NjcmVlblRvcDogZmFsc2UsXG4gICAgICBjb21ib051bTogMCxcbiAgICAgIGlzU2hvd0NoZWVyOiBmYWxzZSxcbiAgICAgIGluZGV4Q2hlZXI6IDAsXG4gICAgICBzbG90QmFyU25hcHNob3RCZWZvcmU6IG51bGwsXG4gICAgICBzbG90QmFyU25hcHNob3RBZGRUaWxlOiBudWxsLFxuICAgICAgc2xvdEJhclNuYXBzaG90QWZ0ZXI6IG51bGwsXG4gICAgICBjbGVhclNsb3RCYXJMaXN0OiBudWxsLFxuICAgICAgY2xlYXJUaWxlTGlzdDogbnVsbCxcbiAgICAgIGlzV2luOiBmYWxzZSxcbiAgICAgIGlzRGVhZDogZmFsc2UsXG4gICAgICBzbG90QmFyQ2hhbmdlTGlzdDogW10sXG4gICAgICBzbG90QmFyQ2hhbmdlTGlzdEFmdGVyOiBbXSxcbiAgICAgIHNsb3RCYXJDaGFnbmVMaXN0MjogW10sXG4gICAgICB0aWxlMkJvbWJJbmZvczogW10sXG4gICAgICB0aWxlMkRheGlhb0luZm9zOiB7fSxcbiAgICAgIHByZXZXaW5TY29yZTogMCxcbiAgICAgIHByZXZXaW5Db21ib051bTogMCxcbiAgICAgIHByZXZXaW5EdXJhdGlvbjogMCxcbiAgICAgIHdpbkdhbWVEdXJhdGlvbjogMCxcbiAgICAgIGRpYW5aYW5JbmZvOiB7XG4gICAgICAgIGlzU2hvdzogZmFsc2UsXG4gICAgICAgIHRpbGVJZDE6IG51bGwsXG4gICAgICAgIGRpYW5aYW5Db25kaXRpb246IEVEaWFuWmFuQ29uZGl0aW9uLk5vbmVcbiAgICAgIH0sXG4gICAgICByb2xsQ2FyZERhdGFzOiBbXSxcbiAgICAgIG1hZ25ldEluZm86IHtcbiAgICAgICAgdHJpZ2dlck1hZ25ldDogZmFsc2VcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIHN0YXRpYyBwYXJzZVNsb3RCYXJDaGFuZ2VMaXN0KCkge1xuICAgIHZhciBlID0gdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyQ2hlY2tlci5nZXRTbG90QmFyQ2hhbmdlTGlzdCh0aGlzLl9vcHRpb25zLnNsb3RCYXJTbmFwc2hvdEJlZm9yZSwgdGhpcy5fb3B0aW9ucy5zbG90QmFyU25hcHNob3RBZGRUaWxlKSxcbiAgICAgIHQgPSB0aGlzLl9nYW1lQ29udGV4dC50aWxlMlNsb3RCYXJDaGVja2VyLmdldFNsb3RCYXJDaGFuZ2VMaXN0KHRoaXMuX29wdGlvbnMuc2xvdEJhclNuYXBzaG90QWRkVGlsZSwgdGhpcy5fb3B0aW9ucy5zbG90QmFyU25hcHNob3RBZnRlciksXG4gICAgICBvID0gdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyQ2hlY2tlci5nZXRTbG90QmFyQ2hhbmdlTGlzdCh0aGlzLl9vcHRpb25zLnNsb3RCYXJTbmFwc2hvdEJlZm9yZSwgdGhpcy5fb3B0aW9ucy5zbG90QmFyU25hcHNob3RBZnRlcik7XG4gICAgdGhpcy5fb3B0aW9ucy5zbG90QmFyQ2hhbmdlTGlzdCA9IGU7XG4gICAgdGhpcy5fb3B0aW9ucy5zbG90QmFyQ2hhbmdlTGlzdEFmdGVyID0gdDtcbiAgICB0aGlzLl9vcHRpb25zLnNsb3RCYXJDaGFnbmVMaXN0MiA9IG87XG4gIH1cbiAgc3RhdGljIHBhcnNlUm9sbENhcmREYXRhKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJSb2xsQ2FyZE1vZGlmaWVyLm1vZGlmeVJvbGxDYXJkRGF0YXMoKSxcbiAgICAgIGEgPSBmdW5jdGlvbiBhKGUpIHtcbiAgICAgICAgdmFyIHQgPSBuLmZpbmRJbmRleChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiB0LnRpbGVJZCA9PT0gZS50aWxlSWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodCA+PSAwKSB7XG4gICAgICAgICAgdmFyIG8gPSBfX3JlYWQobi5zcGxpY2UodCwgMSksIDEpWzBdO1xuICAgICAgICAgIGUucm9sbENhcmREYXRhID0gbztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKGUpLCBzID0gbC5uZXh0KCk7ICFzLmRvbmU7IHMgPSBsLm5leHQoKSkgYShzLnZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcyAmJiAhcy5kb25lICYmIChvID0gbC5yZXR1cm4pICYmIG8uY2FsbChsKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9vcHRpb25zLnJvbGxDYXJkRGF0YXMgPSBuO1xuICB9XG4gIHN0YXRpYyBjYWxTb21lRGF0YShlID0gMSkge1xuICAgIHZhciB0ID0ge1xuICAgICAgICBhZGRTY29yZTogMCxcbiAgICAgICAgdGFyZ2V0U2NvcmU6IDAsXG4gICAgICAgIGlzQnJlYWtCZXN0OiBmYWxzZSxcbiAgICAgICAgY29tYm9OdW06IDAsXG4gICAgICAgIGNvbWJvU3RhdGU6IGZhbHNlLFxuICAgICAgICBzaG93Q29tYm9EaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgc2hvd1NjcmVlbkVkZ2U6IGZhbHNlLFxuICAgICAgICBzaG93U2NyZWVuVG9wOiBmYWxzZSxcbiAgICAgICAgc2hvd1Nsb3RBZHZhbmNlOiBmYWxzZSxcbiAgICAgICAgc2xvdExldmVsOiAwXG4gICAgICB9LFxuICAgICAgbyA9IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCk7XG4gICAgdGhpcy5hZGRDb21ibyhlKTtcbiAgICB2YXIgbiA9IHRoaXMuY2FsQWRkU2NvcmUoKTtcbiAgICB0LmFkZFNjb3JlID0gbjtcbiAgICB0LnRhcmdldFNjb3JlID0gby5nZXRTY29yZSgpO1xuICAgIHZhciBpID0gby5pc0JyZWFrQmVzdCgpLFxuICAgICAgciA9IG8uaXNCcmVha0Jlc3QoKSxcbiAgICAgIGEgPSBpICE9IHIgJiYgcjtcbiAgICB0LmlzQnJlYWtCZXN0ID0gYTtcbiAgICB2YXIgbCA9IHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyQ29tYm9DaGVja2VyLmNoZWNrQ29tYm9EaXNwbGF5U3RhdGUoKTtcbiAgICB0LmNvbWJvTnVtID0gbC5jb21ib051bTtcbiAgICB0LmNvbWJvU3RhdGUgPSBsLmNvbWJvU3RhdGU7XG4gICAgdC5zaG93Q29tYm9EaXNwbGF5ID0gbC5zaG93Q29tYm9EaXNwbGF5O1xuICAgIHQuc2hvd1NjcmVlbkVkZ2UgPSBsLnNob3dTY3JlZW5FZGdlO1xuICAgIHQuc2hvd1NjcmVlblRvcCA9IGwuc2hvd1NjcmVlblRvcDtcbiAgICBpZiAobC5zaG93U2xvdEFkdmFuY2UpIHtcbiAgICAgIHQuc2hvd1Nsb3RBZHZhbmNlID0gdHJ1ZTtcbiAgICAgIHQuc2xvdExldmVsID0gbC5zbG90TGV2ZWw7XG4gICAgICB0aGlzLl9nYW1lQ29udGV4dC5jb21ib01vZGlmaWVyLnVwZGF0ZVNsb3RMZXZlbChsLnNsb3RMZXZlbCk7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG4gIHN0YXRpYyBwYXJzZUJvbWJDYXJkRGF0YSgpIHtcbiAgICBmb3IgKHZhciBlID0gdGhpcywgdCA9IFtdLCBvID0gZnVuY3Rpb24gbyh0KSB7XG4gICAgICAgIHZhciBvID0gZS5fZ2FtZUNvbnRleHQuZGF4aWFvQ2hlY2tlci5nZXRDYW5DbGVhckRheGlhb0NhcmRJbmZvc190aWxlMih0KTtcbiAgICAgICAgaWYgKG8gJiYgby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZS5fZ2FtZUNvbnRleHQudGlsZTJEYXhpYW9Nb2RpZmllci5tb2RpZnlEYXhpYW9DYXJkKGUuX2lucHV0LCBvKTtcbiAgICAgICAgICB2YXIgbiA9IG8ubGVuZ3RoO1xuICAgICAgICAgIGUuYWRkQ29tYm8obik7XG4gICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH1cbiAgICAgIH0sIG4gPSBmdW5jdGlvbiBuKGkpIHtcbiAgICAgICAgdmFyIHIgPSBlLl9nYW1lQ29udGV4dC50aWxlMkJvbWJNb2RpZmllci5wYXJzZUJvbWJDYXJkKGkpO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgIHZhciBhID0gZS5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyTW9kaWZpZXIuZ2V0U2xvdEJhclNuYXBzaG90KCksXG4gICAgICAgICAgICBsID0gbyhyLmJvbWJJZHMpO1xuICAgICAgICAgIGUuX2dhbWVDb250ZXh0LnRpbGUyU2xvdEJhck1vZGlmaWVyLmNsZWFyKFtyLmJvbWJJZHNdLCBFQ29sbGVjdEZyb20uRnJvbUJvbWIpO1xuICAgICAgICAgIHZhciBzID0gZS5jYWxTb21lRGF0YSgpO1xuICAgICAgICAgIGUucGFyc2VEdW94aWFvQ2FyZERhdGEoW3IuYm9tYklkc10pO1xuICAgICAgICAgIHZhciBjID0gZS5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyTW9kaWZpZXIuZ2V0U2xvdEJhclNuYXBzaG90KCksXG4gICAgICAgICAgICB1ID0gZS5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyQ2hlY2tlci5nZXRTbG90QmFyQ2hhbmdlTGlzdChhLCBjKTtcbiAgICAgICAgICB0LnB1c2goe1xuICAgICAgICAgICAgYm9tYlBhcmFtczogcixcbiAgICAgICAgICAgIGRheGlhb0NhcmRNYXRjaEluZm9zOiBsLFxuICAgICAgICAgICAgY2FsRGF0YTogcyxcbiAgICAgICAgICAgIGNoYW5nZUxpc3Q6IHVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBuKHIuYm9tYklkcyk7XG4gICAgICAgIH1cbiAgICAgIH0sIGkgPSAwOyBpIDwgdGhpcy5fb3B0aW9ucy5jbGVhclRpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgciA9IHRoaXMuX29wdGlvbnMuY2xlYXJUaWxlTGlzdFtpXTtcbiAgICAgIG4ocik7XG4gICAgfVxuICAgIHRoaXMuX29wdGlvbnMudGlsZTJCb21iSW5mb3MgPSB0O1xuICB9XG4gIHN0YXRpYyBwYXJzZUR1b3hpYW9DYXJkRGF0YShlKSB7XG4gICAgZm9yICh2YXIgdCA9IGUgfHwgdGhpcy5fb3B0aW9ucy5jbGVhclRpbGVMaXN0LCBvID0gMDsgbyA8IHQubGVuZ3RoOyBvKyspIHtcbiAgICAgIHZhciBuID0gdFtvXTtcbiAgICAgIGlmICh0aGlzLl9nYW1lQ29udGV4dC5kdW94aWFvQ2hlY2tlci5jYW5TaG93RHVveGlhb0NvbWJvKG4pKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5fZ2FtZUNvbnRleHQuZHVveGlhb0NoZWNrZXIuZ2V0Q2FuQ2xlYXJEdW94aWFvQ2FyZEluZm9zKG4pO1xuICAgICAgICBpICYmIHRoaXMuX2dhbWVDb250ZXh0LmR1b3hpYW9Nb2RpZmllci5tb2RpZnlEdW94aWFvQ2xlYXJDb3VudChpLmNvdW50KTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5pc1Nob3dEdW94aWFvQ29tYm8gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdGF0aWMgcGFyc2VOb3JtYWxCYWNrQ2FyZERhdGEoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9nYW1lQ29udGV4dC50aWxlMk5vcm1hbEJhY2tNb2RpZmllci5tb2RpZnlTdGF0dXMoKTtcbiAgICB0aGlzLl9vcHRpb25zLm5vcm1hbEJhY2tMaXN0ID0gZTtcbiAgfVxuICBzdGF0aWMgcnVuQ2xlYXIoZSwgdCwgbywgbikge1xuICAgIHZhciBpLCByO1xuICAgIHRoaXMuX2dhbWVDb250ZXh0ID0gZTtcbiAgICB0aGlzLl9pbnB1dCA9IHQ7XG4gICAgdGhpcy5fYmFzZUlucHV0ID0gbztcbiAgICBmb3IgKHZhciBhID0gbi50aWxlSWRzIHx8IFtdLCBsID0gbi5vdXRUaWxlcyB8fCBbXSwgcyA9IFtdLCBjID0gMDsgYyA8IGEubGVuZ3RoOyBjKyspIHtcbiAgICAgIHZhciB1ID0gYVtjXSxcbiAgICAgICAgcCA9IHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KHUpO1xuICAgICAgcCAmJiBwLmlzVmFsaWQgJiYgKCFwLmlzQ2FyZExvY2soKSB8fCBsLmluY2x1ZGVzKHUpKSAmJiBzLnB1c2godSk7XG4gICAgfVxuICAgIGlmICghKHMubGVuZ3RoIDw9IDApKSB7XG4gICAgICB0aGlzLmluaXRPcHRpb25zKCk7XG4gICAgICB0aGlzLm1vZGlmeVN0ZXBDb3VudCgpO1xuICAgICAgdGhpcy5jbGVhclNsb3RCYXJTdGVwQ291bnQoKTtcbiAgICAgIHRoaXMuY2xlYXJTbG90QmFyQ2xlYXJTdGVwQ291bnQoKTtcbiAgICAgIHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyRGlhblphbkNoZWNrZXIuY2hlY2tMb2NrUm9sbENhcmQoKTtcbiAgICAgIHZhciBmID0gdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyTW9kaWZpZXIsXG4gICAgICAgIGQgPSB0aGlzLl9nYW1lQ29udGV4dC50aWxlMkRpYW5aYW5DaGVja2VyLFxuICAgICAgICBoID0gZi5nZXRTbG90QmFyU25hcHNob3QoKSxcbiAgICAgICAgeSA9IGQuY2hlY2tTbG90QmFyQ2FuTWF0Y2goaCwgdHJ1ZSksXG4gICAgICAgIG0gPSBbXTtcbiAgICAgIGZvciAoYyA9IDA7IGMgPCBzLmxlbmd0aDsgYysrKSB7XG4gICAgICAgIHUgPSBzW2NdO1xuICAgICAgICB0aGlzLl9nYW1lQ29udGV4dC50aWxlMkRvdFRyYWNrZXJNb2RpZmllci5hZGRTbG90QmFyKHUpO1xuICAgICAgICB2YXIgdiA9IGYuYWRkVGlsZSh1KSxcbiAgICAgICAgICBnID0gZi5nZXRDbGVhclNsb3RCYXJMaXN0KG0pO1xuICAgICAgICB2ICYmIGcgJiYgZy5sZW5ndGggPiAwICYmIChtID0gbS5jb25jYXQoZykpO1xuICAgICAgfVxuICAgICAgdmFyIF8gPSBmLmdldFNsb3RCYXJTbmFwc2hvdCgpO1xuICAgICAgaWYgKGQuY2hlY2tBZGRUaWxlQ2FuRGlhblphbihoLCBfKSkge1xuICAgICAgICB0aGlzLl9vcHRpb25zLmRpYW5aYW5JbmZvLmlzU2hvdyA9IHRydWU7XG4gICAgICAgIHRoaXMubW9kaWZ5RGlhblphbkluZm8oRURpYW5aYW5Db25kaXRpb24uVW5sb2NrUm9sbENhcmRDYW5EaWFuWmFuLCBoLCBfKTtcbiAgICAgIH0gZWxzZSB0aGlzLm1vZGlmeURpYW5aYW5JbmZvKEVEaWFuWmFuQ29uZGl0aW9uLkNvbnRpbnVlUm9sbENhcmQsIGgsIF8pO1xuICAgICAgZi5jbGVhclNsb3RCYXIobSk7XG4gICAgICB0aGlzLl9vcHRpb25zLmRpYW5aYW5JbmZvLmlzU2hvdyB8fCB5IHx8IHRoaXMubW9kaWZ5RGlhblphbkluZm8oRURpYW5aYW5Db25kaXRpb24uU2xvdEJhck1hdGNoTm9Sb2xsQ2FyZCwgaCwgXyk7XG4gICAgICB0aGlzLm1vZGlmeVNsb3RCYXJTdGVwQ291bnQoKTtcbiAgICAgIHZhciBUID0gZi5nZXRDbGVhclRpbGVMaXN0KG0pO1xuICAgICAgdGhpcy5fb3B0aW9ucy5zbG90QmFyU25hcHNob3RCZWZvcmUgPSBoO1xuICAgICAgdGhpcy5fb3B0aW9ucy5zbG90QmFyU25hcHNob3RBZGRUaWxlID0gXztcbiAgICAgIHRoaXMuX29wdGlvbnMuY2xlYXJTbG90QmFyTGlzdCA9IG07XG4gICAgICB0aGlzLl9vcHRpb25zLmNsZWFyVGlsZUxpc3QgPSBUO1xuICAgICAgdGhpcy5tb2RpZnlNYWduZXRJbmZvKG4ubWFnbmV0UGFpciB8fCAwKTtcbiAgICAgIHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyRGlhblphbkNoZWNrZXIuY2hlY2tVbmxvY2tSb2xsQ2FyZChfKTtcbiAgICAgIGlmIChtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fZ2FtZUNvbnRleHQuY2xlYXJNb2RpZmllci5tb2RpZnlNYW51YWxNYXRjaENvdW50KHRoaXMuX2lucHV0KTtcbiAgICAgICAgdGhpcy5fZ2FtZUNvbnRleHQuY2xlYXJNb2RpZmllci5tb2RpZnlBdXRvQ29sbGVjdFRpbGVzTnVtKHRoaXMuX2lucHV0LCAyICogVC5sZW5ndGgpO1xuICAgICAgICB0aGlzLnBhcnNlRGF4aWFvRGF0YSgpO1xuICAgICAgICB2YXIgQyA9IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCk7XG4gICAgICAgIHRoaXMuYWRkQ29tYm8oMSk7XG4gICAgICAgIHZhciBiLFxuICAgICAgICAgIEUgPSBDLmlzQnJlYWtCZXN0KCk7XG4gICAgICAgIGIgPSAobnVsbCA9PT0gKGkgPSB0aGlzLl9vcHRpb25zLm1hZ25ldEluZm8pIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkudHJpZ2dlck1hZ25ldCkgJiYgKG51bGwgPT09IChyID0gdGhpcy5fb3B0aW9ucy5tYWduZXRJbmZvKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLm1hZ25ldE1lcmdlKSA/IHRoaXMuY2FsQWRkU2NvcmUoVC5sZW5ndGgpIDogdGhpcy5jYWxBZGRTY29yZSgpO1xuICAgICAgICB0aGlzLl9vcHRpb25zLmFkZFNjb3JlID0gYjtcbiAgICAgICAgdmFyIEkgPSBDLmlzQnJlYWtCZXN0KCksXG4gICAgICAgICAgdyA9IEUgIT0gSSAmJiBJO1xuICAgICAgICB0aGlzLl9vcHRpb25zLmlzQnJlYWtCZXN0ID0gdztcbiAgICAgICAgdmFyIEIgPSB0aGlzLl9nYW1lQ29udGV4dC50aWxlMkNvbWJvQ2hlY2tlci5jaGVja0NvbWJvRGlzcGxheVN0YXRlKCk7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuY29tYm9OdW0gPSBCLmNvbWJvTnVtO1xuICAgICAgICB0aGlzLl9vcHRpb25zLmNvbWJvU3RhdGUgPSBCLmNvbWJvU3RhdGU7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuc2hvd0NvbWJvRGlzcGxheSA9IEIuc2hvd0NvbWJvRGlzcGxheTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5zaG93U2NyZWVuRWRnZSA9IEIuc2hvd1NjcmVlbkVkZ2U7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuc2hvd1NjcmVlblRvcCA9IEIuc2hvd1NjcmVlblRvcDtcbiAgICAgICAgaWYgKEIuc2hvd1Nsb3RBZHZhbmNlKSB7XG4gICAgICAgICAgdGhpcy5fb3B0aW9ucy5zaG93U2xvdEFkdmFuY2UgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX29wdGlvbnMuc2xvdExldmVsID0gQi5zbG90TGV2ZWw7XG4gICAgICAgICAgdGhpcy5fZ2FtZUNvbnRleHQuY29tYm9Nb2RpZmllci51cGRhdGVTbG90TGV2ZWwoQi5zbG90TGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB4ID0gdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJDaGVlckNoZWNrZXIuY2FuU2hvd0NoZWVyKEIuY29tYm9OdW0pO1xuICAgICAgICB0aGlzLl9vcHRpb25zLmlzU2hvd0NoZWVyID0geC5pc1Nob3c7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuaW5kZXhDaGVlciA9IHguaW5kZXg7XG4gICAgICAgIHRoaXMubW9kaWZ5U2xvdEJhckNsZWFyU3RlcENvdW50KCk7XG4gICAgICAgIHZhciBNID0gdGhpcy5tb2RpZnlDbGVhckhpdFRpcHMoVCk7XG4gICAgICAgIGlmIChNLmNsZWFySGl0KSB7XG4gICAgICAgICAgdGhpcy5fb3B0aW9ucy5jbGVhckhpdCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fb3B0aW9ucy5oaWRlSGl0SWRzID0gTS5oaWRlSGl0SWRzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBPID0gZi5nZXRTbG90QmFyU25hcHNob3QoKTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5zbG90QmFyU25hcHNob3RBZnRlciA9IE87XG4gICAgICAgIHRoaXMucGFyc2VTbG90QmFyQ2hhbmdlTGlzdCgpO1xuICAgICAgICB0aGlzLnBhcnNlUm9sbENhcmREYXRhKHRoaXMuX29wdGlvbnMuc2xvdEJhckNoYW5nZUxpc3QpO1xuICAgICAgICB2YXIgRCA9IHRoaXMuX2dhbWVDb250ZXh0LmFsbENsZWFyQ2hlY2tlci5jaGVja0luQWxsQ2xlYXIoKTtcbiAgICAgICAgaWYgKEQpIHtcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLmlzU2hvd0FsbENsZWFyID0gRC5hbGxDbGVhcjtcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLmFsbENsZWFyRWZmZWN0SWQgPSBELmVmZmVjdElkO1xuICAgICAgICAgIHRoaXMuX29wdGlvbnMuYWxsQ2xlYXJUaWxlSWRzID0gRC5pZHM7XG4gICAgICAgICAgRC5hbGxDbGVhciAmJiB0aGlzLl9nYW1lQ29udGV4dC5hbGxDbGVhck1vZGlmaWVyLmNoYW5nZUFsbENsZWFyKEQuZWZmZWN0SWQsIEQuaWRzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhcnNlQm9tYkNhcmREYXRhKCk7XG4gICAgICAgIHRoaXMucGFyc2VEdW94aWFvQ2FyZERhdGEoKTtcbiAgICAgICAgdGhpcy5wYXJzZU5vcm1hbEJhY2tDYXJkRGF0YSgpO1xuICAgICAgICB0aGlzLmNoZWNrUmVzdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmlzRGVhZCB8fCB0aGlzLl9vcHRpb25zLmlzV2luKSB7XG4gICAgICAgICAgdGhpcy5fb3B0aW9ucy5pc1Nob3dEdW94aWFvQ29tYm8gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9nYW1lQ29udGV4dC5kdW94aWFvTW9kaWZpZXIucmVzZXREdW94aWFvQ2xlYXJDb3VudCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHVzaENsZWFyRWZmZWN0cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTyA9IGYuZ2V0U2xvdEJhclNuYXBzaG90KCk7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuc2xvdEJhclNuYXBzaG90QWZ0ZXIgPSBPO1xuICAgICAgICB0aGlzLnBhcnNlU2xvdEJhckNoYW5nZUxpc3QoKTtcbiAgICAgICAgdGhpcy5wYXJzZU5vcm1hbEJhY2tDYXJkRGF0YSgpO1xuICAgICAgICB0aGlzLnBhcnNlUm9sbENhcmREYXRhKHRoaXMuX29wdGlvbnMuc2xvdEJhckNoYWduZUxpc3QyKTtcbiAgICAgICAgdGhpcy5jaGVja1Jlc3VsdCgpO1xuICAgICAgICB0aGlzLnB1c2hBZGQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xlYXJFbmQodGhpcy5fb3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2xlYXJUNEhscF9jbGVhckVuZFwiKVxuICBzdGF0aWMgY2xlYXJFbmQoKSB7fVxuICBzdGF0aWMgcHVzaEFkZCgpIHtcbiAgICB0aGlzLnRyeUV4Y3V0ZVNsb3RDYXJkTnVtQ2hhbmdlKCk7XG4gICAgdmFyIGUgPSB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxQYXJlbnROb2RlKCksXG4gICAgICB0ID0ge1xuICAgICAgICBsYXN0RWZmZWN0SWQ6IGUsXG4gICAgICAgIG5ld0VmZmVjdElkOiBlXG4gICAgICB9O1xuICAgIHRoaXMudHJ5RXhjdXRlSGlkZU1hZ25ldCh0KTtcbiAgICB2YXIgbyA9IHRoaXMudHJ5UHVzaFJvbGxDYXJkQW5kVXBkYXRlKHRoaXMuX29wdGlvbnMuc2xvdEJhckNoYWduZUxpc3QyLCB0KTtcbiAgICB0aGlzLnRyeVB1c2hOb3JtYWxCYWNrRWZmZWN0KG8pO1xuICAgIHRoaXMudHJ5RXhjdXRlRGlhblphbihvKTtcbiAgICB0aGlzLnRyeUV4Y3V0ZVNob3dNYWduZXQobyk7XG4gICAgdGhpcy50cnlQdXNoRW5kRWZmZWN0KCk7XG4gIH1cbiAgc3RhdGljIHRyeVB1c2hSb2xsQ2FyZEFuZFVwZGF0ZShlID0gW10sIHQ/KSB7XG4gICAgdmFyIG8sIG4sIHIsIGEsIGw7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyh0aGlzLl9vcHRpb25zLnJvbGxDYXJkRGF0YXMpLCBjID0gcy5uZXh0KCk7ICFjLmRvbmU7IGMgPSBzLm5leHQoKSkge1xuICAgICAgICB2YXIgdSA9IGMudmFsdWUsXG4gICAgICAgICAgcCA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUodC5uZXdFZmZlY3RJZCksXG4gICAgICAgICAgZiA9IG5ldyBUaWxlMlJvbGxDYXJkRWZmZWN0KHtcbiAgICAgICAgICAgIHRpbGVJZDogdS50aWxlSWQsXG4gICAgICAgICAgICBmcm9udFRvQmFjazogdS5mcm9udFRvQmFja1xuICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKHAsIGYpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBjICYmICFjLmRvbmUgJiYgKG4gPSBzLnJldHVybikgJiYgbi5jYWxsKHMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlLmxlbmd0aCA8PSAwKSByZXR1cm4gdDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgZCA9IF9fdmFsdWVzKGUpLCBoID0gZC5uZXh0KCk7ICFoLmRvbmU7IGggPSBkLm5leHQoKSkge1xuICAgICAgICB2YXIgeSA9IGgudmFsdWUsXG4gICAgICAgICAgbSA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxQYXJlbnROb2RlKHQubmV3RWZmZWN0SWQpO1xuICAgICAgICBpZiAoeS5yb2xsQ2FyZERhdGEpIHtcbiAgICAgICAgICBmID0gbmV3IFRpbGUyUm9sbENhcmRFZmZlY3Qoe1xuICAgICAgICAgICAgdGlsZUlkOiB5LnRpbGVJZCxcbiAgICAgICAgICAgIGZyb250VG9CYWNrOiBudWxsID09PSAobCA9IHkucm9sbENhcmREYXRhKSB8fCB2b2lkIDAgPT09IGwgPyB2b2lkIDAgOiBsLmZyb250VG9CYWNrXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbE5vZGUobSwgZik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHYgPSBuZXcgVGlsZTJVcGRhdGVTbG90QmFyRWZmZWN0KHtcbiAgICAgICAgICBjaGFuZ2VJbmZvOiB5XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsTm9kZShtLCB2KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaCAmJiAhaC5kb25lICYmIChhID0gZC5yZXR1cm4pICYmIGEuY2FsbChkKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfVxuICBzdGF0aWMgYWRkVG9TbG90QmFyRWZmZWN0cyhlID0gW10sIHQ/KSB7XG4gICAgdmFyIG8sIG47XG4gICAgaWYgKCEoZS5sZW5ndGggPD0gMCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHIgPSBfX3ZhbHVlcyhlKSwgYSA9IHIubmV4dCgpOyAhYS5kb25lOyBhID0gci5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgbCA9IGEudmFsdWUsXG4gICAgICAgICAgICBzID0gbmV3IFRpbGUyVXBkYXRlU2xvdEJhckVmZmVjdCh7XG4gICAgICAgICAgICAgIGNoYW5nZUluZm86IGxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYyA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUodC5uZXdFZmZlY3RJZCk7XG4gICAgICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShjLCBzKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBvID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGEgJiYgIWEuZG9uZSAmJiAobiA9IHIucmV0dXJuKSAmJiBuLmNhbGwocik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICAgIH1cbiAgfVxuICBzdGF0aWMgcGFzZURheGlhb0NsZWFyVGlwc0VmZmVjdChlLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBuID0gbnVsbCA9PT0gKG8gPSB0aGlzLl9vcHRpb25zLnRpbGUyRGF4aWFvSW5mb3MpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG9bZV07XG4gICAgaWYgKG4gJiYgbi5kYXhpYW9DYXJkTWF0Y2hJbmZvcyAmJiAhKG4uZGF4aWFvQ2FyZE1hdGNoSW5mb3MubGVuZ3RoIDw9IDApKSB7XG4gICAgICB2YXIgaSA9IG5ldyBEYXhpYW9DbGVhclRpcEVmZmVjdCh7XG4gICAgICAgICAgdGlsZUlkczogdGhpcy5fb3B0aW9ucy50aWxlSWRzLFxuICAgICAgICAgIGZpbmFsTWF0Y2hJbmZvczogbi5kYXhpYW9DYXJkTWF0Y2hJbmZvc1xuICAgICAgICB9KSxcbiAgICAgICAgciA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUodC5uZXdFZmZlY3RJZCk7XG4gICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKHIsIGkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiB0Lm5ld0VmZmVjdElkLFxuICAgICAgICBuZXdFZmZlY3RJZDogclxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHBhc2VEYXhpYW9DbGVhckVmZmVjdChlLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBuID0gbnVsbCA9PT0gKG8gPSB0aGlzLl9vcHRpb25zLnRpbGUyRGF4aWFvSW5mb3MpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG9bZV07XG4gICAgaWYgKG4gJiYgbi5kYXhpYW9DYXJkTWF0Y2hJbmZvcyAmJiAhKG4uZGF4aWFvQ2FyZE1hdGNoSW5mb3MubGVuZ3RoIDw9IDApKSB7XG4gICAgICB2YXIgaSA9IG5ldyBEYXhpYW9DbGVhckVmZmVjdEVmZmVjdCh7XG4gICAgICAgICAgdGlsZUlkczogdGhpcy5fb3B0aW9ucy50aWxlSWRzLFxuICAgICAgICAgIGZpbmFsTWF0Y2hJbmZvczogbi5kYXhpYW9DYXJkTWF0Y2hJbmZvc1xuICAgICAgICB9KSxcbiAgICAgICAgciA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUodC5uZXdFZmZlY3RJZCk7XG4gICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKHIsIGkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiB0Lm5ld0VmZmVjdElkLFxuICAgICAgICBuZXdFZmZlY3RJZDogclxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHBhc2VCb21iRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX29wdGlvbnMudGlsZTJCb21iSW5mb3M7XG4gICAgaWYgKHQgJiYgISh0Lmxlbmd0aCA8PSAwKSkgZm9yICh2YXIgbyA9IGUubmV3RWZmZWN0SWQsIG4gPSB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsUGFyZW50Tm9kZShvKSwgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgciA9IHRbaV0sXG4gICAgICAgIGEgPSB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsUGFyZW50Tm9kZShuKSxcbiAgICAgICAgbCA9IG5ldyBCb21iRWZmZWN0KHtcbiAgICAgICAgICBwb3MxOiByLmJvbWJQYXJhbXMucG9zMSxcbiAgICAgICAgICBwb3MyOiByLmJvbWJQYXJhbXMucG9zMixcbiAgICAgICAgICBib21iSWRzOiByLmJvbWJQYXJhbXMuYm9tYklkc1xuICAgICAgICB9KTtcbiAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxOb2RlKGEsIGwpO1xuICAgICAgaWYgKHIuZGF4aWFvQ2FyZE1hdGNoSW5mb3MgJiYgci5kYXhpYW9DYXJkTWF0Y2hJbmZvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBwID0gdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbFBhcmVudE5vZGUoYSksXG4gICAgICAgICAgZiA9IG5ldyBEYXhpYW9DbGVhclRpcEVmZmVjdCh7XG4gICAgICAgICAgICB0aWxlSWRzOiB0aGlzLl9vcHRpb25zLnRpbGVJZHMsXG4gICAgICAgICAgICBmaW5hbE1hdGNoSW5mb3M6IHIuZGF4aWFvQ2FyZE1hdGNoSW5mb3NcbiAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbE5vZGUocCwgZik7XG4gICAgICAgIHZhciBkID0gbmV3IERheGlhb0NsZWFyRWZmZWN0RWZmZWN0KHtcbiAgICAgICAgICB0aWxlSWRzOiB0aGlzLl9vcHRpb25zLnRpbGVJZHMsXG4gICAgICAgICAgZmluYWxNYXRjaEluZm9zOiByLmRheGlhb0NhcmRNYXRjaEluZm9zXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsTm9kZShwLCBkKTtcbiAgICAgIH1cbiAgICAgIHZhciBoID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZShhKSxcbiAgICAgICAgZyA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxQYXJlbnROb2RlKGgpLFxuICAgICAgICBfID0gbmV3IFRpbGUyU2NvcmVGbG90RWZmZWN0KHtcbiAgICAgICAgICB0aWxlSWQ6IHIuYm9tYlBhcmFtcy5ib21iSWRzWzBdLFxuICAgICAgICAgIGxhc3RUaWxlSWQ6IHIuYm9tYlBhcmFtcy5ib21iSWRzWzFdLFxuICAgICAgICAgIGlzQ29tYm86IHIuY2FsRGF0YS5jb21ib1N0YXRlLFxuICAgICAgICAgIGFkZFNjb3JlOiByLmNhbERhdGEuYWRkU2NvcmVcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsTm9kZShnLCBfKTtcbiAgICAgIHZhciBUID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKSxcbiAgICAgICAgQyA9IG5ldyBUaWxlMlVwZGF0ZVNjb3JlRWZmZWN0KHtcbiAgICAgICAgICBhZGRTY29yZTogci5jYWxEYXRhLmFkZFNjb3JlLFxuICAgICAgICAgIHRhcmdldFNjb3JlOiBULmdldFNjb3JlKCksXG4gICAgICAgICAgaXNTaG93Q29tYm86IHIuY2FsRGF0YS5jb21ib1N0YXRlXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbE5vZGUoZywgQyk7XG4gICAgICB2YXIgYiA9IG5ldyBUaWxlMkNvbWJvRWZmZWN0KHtcbiAgICAgICAgY29tYm9OdW06IHIuY2FsRGF0YS5jb21ib051bVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKGgsIGIpO1xuICAgICAgci5jaGFuZ2VMaXN0ICYmIHIuY2hhbmdlTGlzdC5sZW5ndGggPiAwICYmIHRoaXMuYWRkVG9TbG90QmFyRWZmZWN0cyhyLmNoYW5nZUxpc3QsIHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiBoLFxuICAgICAgICBuZXdFZmZlY3RJZDogaFxuICAgICAgfSk7XG4gICAgICBpID09PSB0Lmxlbmd0aCAtIDEgJiYgdGhpcy5fb3B0aW9ucy5pc1dpbiAmJiAodGhpcy5fb3B0aW9ucy5pbnNlcnRFbmRFZmZlY3RJZCA9IGgpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgcGFyc2VEdW94aWFvRWZmZWN0KGUsIHQgPSBFSW5zZXJ0VHlwZS5TZXJpYWwpIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5pc1Nob3dEdW94aWFvQ29tYm8gJiYgIXRoaXMuX29wdGlvbnMudGlsZTJIYXNQdXNoRHVveGlhbykge1xuICAgICAgdGhpcy5fb3B0aW9ucy50aWxlMkhhc1B1c2hEdW94aWFvID0gdHJ1ZTtcbiAgICAgIHZhciBvID0gbmV3IFRpbGUyRHVveGlhb0NvbWJvRWZmZWN0KHtcbiAgICAgICAgZHVveGlhb0NvdW50OiB0aGlzLl9nYW1lQ29udGV4dC5nZXREdW94aWFvQ2xlYXJDb3VudCgpXG4gICAgICB9KTtcbiAgICAgIGlmICh0ID09PSBFSW5zZXJ0VHlwZS5TZXJpYWwpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsUGFyZW50Tm9kZShlLm5ld0VmZmVjdElkKTtcbiAgICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbE5vZGUobiwgbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaSA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoZS5uZXdFZmZlY3RJZCk7XG4gICAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbE5vZGUoaSwgbyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXRpYyB0cnlQdXNoQmxvY2soZSkge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmlzU2hvd0R1b3hpYW9Db21ibykge1xuICAgICAgdmFyIHQgPSBuZXcgQmxvY2tJbnB1dFJlZkVmZmVjdCh7XG4gICAgICAgICAgYmxvY2s6IGUsXG4gICAgICAgICAgZnJvbTogXCJkdW94aWFvQ29tYm9cIlxuICAgICAgICB9KSxcbiAgICAgICAgbyA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoKTtcbiAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbE5vZGUobywgdCk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyB0cnlQdXNoQ2xlYXJIaXRUaXBzRWZmZWN0KCkge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmNsZWFySGl0ICYmIHRoaXMuX29wdGlvbnMuaGlkZUhpdElkcyAmJiB0aGlzLl9vcHRpb25zLmhpZGVIaXRJZHMubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGUgPSB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxQYXJlbnROb2RlKCksXG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgbGFzdEVmZmVjdElkOiBlLFxuICAgICAgICAgIG5ld0VmZmVjdElkOiBlXG4gICAgICAgIH0sXG4gICAgICAgIG8gPSBuZXcgVGlsZTJIaXRUaXBzRWZmZWN0KHtcbiAgICAgICAgICBpc0NsZWFySGl0OiB0cnVlLFxuICAgICAgICAgIHRpbGVJZDE6IHRoaXMuX29wdGlvbnMuaGlkZUhpdElkc1swXSB8fCBcIlwiLFxuICAgICAgICAgIHRpbGVJZDI6IHRoaXMuX29wdGlvbnMuaGlkZUhpdElkc1sxXSB8fCBcIlwiXG4gICAgICAgIH0pLFxuICAgICAgICBuID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZSh0Lm5ld0VmZmVjdElkKTtcbiAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbE5vZGUobiwgbyk7XG4gICAgICByZXR1cm4gdDtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHB1c2hSb2xsQ2FyZEVmZmVjdHMoZSkge1xuICAgIHZhciB0LCBvO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBuID0gX192YWx1ZXModGhpcy5fb3B0aW9ucy5yb2xsQ2FyZERhdGFzKSwgciA9IG4ubmV4dCgpOyAhci5kb25lOyByID0gbi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGEgPSByLnZhbHVlLFxuICAgICAgICAgIGwgPSBuZXcgVGlsZTJSb2xsQ2FyZEVmZmVjdCh7XG4gICAgICAgICAgICB0aWxlSWQ6IGEudGlsZUlkLFxuICAgICAgICAgICAgZnJvbnRUb0JhY2s6IGEuZnJvbnRUb0JhY2tcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZShlLm5ld0VmZmVjdElkKTtcbiAgICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShzLCBsKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgciAmJiAhci5kb25lICYmIChvID0gbi5yZXR1cm4pICYmIG8uY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdGF0aWMgcHVzaEx1Y2t5RWZmZWN0KGUpIHtcbiAgICB2YXIgdCwgbztcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKHRoaXMuX29wdGlvbnMucm9sbENhcmREYXRhcyksIHIgPSBuLm5leHQoKTsgIXIuZG9uZTsgciA9IG4ubmV4dCgpKSB7XG4gICAgICAgIHZhciBhID0gci52YWx1ZSxcbiAgICAgICAgICBsID0gbmV3IFRpbGUyTHVja3lFZmZlY3Qoe1xuICAgICAgICAgICAgdGlsZUlkOiBhLnRpbGVJZCxcbiAgICAgICAgICAgIGZyb250VG9CYWNrOiBhLmZyb250VG9CYWNrXG4gICAgICAgICAgfSksXG4gICAgICAgICAgcyA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxQYXJlbnROb2RlKGUubmV3RWZmZWN0SWQpO1xuICAgICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsTm9kZShzLCBsKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgciAmJiAhci5kb25lICYmIChvID0gbi5yZXR1cm4pICYmIG8uY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdGF0aWMgdHJ5UHVzaEFkZFRvU2xvdEJhckVmZmVjdHMoZSA9IFtdLCB0Pykge1xuICAgIHZhciBvLCBuLCByO1xuICAgIHZhciBhID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZSh0Lm5ld0VmZmVjdElkKSxcbiAgICAgIGwgPSB7XG4gICAgICAgIGxhc3RFZmZlY3RJZDogdC5uZXdFZmZlY3RJZCxcbiAgICAgICAgbmV3RWZmZWN0SWQ6IGFcbiAgICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhlKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBjLnZhbHVlLFxuICAgICAgICAgIHAgPSB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsUGFyZW50Tm9kZShsLm5ld0VmZmVjdElkKSxcbiAgICAgICAgICBmID0ge1xuICAgICAgICAgICAgbGFzdEVmZmVjdElkOiBsLm5ld0VmZmVjdElkLFxuICAgICAgICAgICAgbmV3RWZmZWN0SWQ6IHBcbiAgICAgICAgICB9O1xuICAgICAgICBpZiAodS5yb2xsQ2FyZERhdGEpIHtcbiAgICAgICAgICB2YXIgZCA9IG5ldyBUaWxlMlJvbGxDYXJkRWZmZWN0KHtcbiAgICAgICAgICAgIHRpbGVJZDogdS50aWxlSWQsXG4gICAgICAgICAgICBmcm9udFRvQmFjazogbnVsbCA9PT0gKHIgPSB1LnJvbGxDYXJkRGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5mcm9udFRvQmFja1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxOb2RlKGYubmV3RWZmZWN0SWQsIGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoID0gbmV3IFRpbGUyVXBkYXRlU2xvdEJhckVmZmVjdCh7XG4gICAgICAgICAgY2hhbmdlSW5mbzogdVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbE5vZGUoZi5uZXdFZmZlY3RJZCwgaCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGMgJiYgIWMuZG9uZSAmJiAobiA9IHMucmV0dXJuKSAmJiBuLmNhbGwocyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RhdGljIHRyeVB1c2hBbGxDbGVhckVmZmVjdChlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbixcbiAgICAgIHIsXG4gICAgICBhID0gdGhpcy5fb3B0aW9ucy5jbGVhclNsb3RCYXJMaXN0LFxuICAgICAgbCA9IFtdLFxuICAgICAgcyA9IG5ldyBNYXAoKSxcbiAgICAgIGMgPSB0aGlzLl9vcHRpb25zLnNsb3RCYXJDaGFuZ2VMaXN0LFxuICAgICAgdSA9IG5ldyBTZXQoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcCA9IF9fdmFsdWVzKGEpLCBmID0gcC5uZXh0KCk7ICFmLmRvbmU7IGYgPSBwLm5leHQoKSkge1xuICAgICAgICB2YXIgZCA9IGYudmFsdWUsXG4gICAgICAgICAgaCA9IHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0QnlQb3NJZChkWzBdKSxcbiAgICAgICAgICB5ID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3RCeVBvc0lkKGRbMV0pO1xuICAgICAgICBpZiAoaCAmJiB5KSB7XG4gICAgICAgICAgdS5hZGQoaC5pZCk7XG4gICAgICAgICAgdS5hZGQoeS5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZiAmJiAhZi5kb25lICYmIChvID0gcC5yZXR1cm4pICYmIG8uY2FsbChwKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbSA9IF9fdmFsdWVzKGMpLCB2ID0gbS5uZXh0KCk7ICF2LmRvbmU7IHYgPSBtLm5leHQoKSkge1xuICAgICAgICB2YXIgZyA9IHYudmFsdWU7XG4gICAgICAgIGlmICh1LmhhcyhnLnRpbGVJZCkpIHtcbiAgICAgICAgICBzLnNldChnLnRpbGVJZCwgZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbC5wdXNoKGcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbiA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHYgJiYgIXYuZG9uZSAmJiAociA9IG0ucmV0dXJuKSAmJiByLmNhbGwobSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIF8gPSB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxQYXJlbnROb2RlKGUubmV3RWZmZWN0SWQpLFxuICAgICAgVCA9IHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiBlLm5ld0VmZmVjdElkLFxuICAgICAgICBuZXdFZmZlY3RJZDogX1xuICAgICAgfTtcbiAgICBsLmxlbmd0aCA+IDAgJiYgdGhpcy50cnlQdXNoQWRkVG9TbG90QmFyRWZmZWN0cyhsLCBUKTtcbiAgICBmb3IgKHZhciBDID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZShlLm5ld0VmZmVjdElkKSwgYiA9IHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiBlLm5ld0VmZmVjdElkLFxuICAgICAgICBuZXdFZmZlY3RJZDogQ1xuICAgICAgfSwgRSA9IGIsIFMgPSAwOyBTIDwgYS5sZW5ndGg7IFMrKykge1xuICAgICAgdmFyIEkgPSB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsUGFyZW50Tm9kZShiLm5ld0VmZmVjdElkKSxcbiAgICAgICAgdyA9IHtcbiAgICAgICAgICBsYXN0RWZmZWN0SWQ6IGIubmV3RWZmZWN0SWQsXG4gICAgICAgICAgbmV3RWZmZWN0SWQ6IElcbiAgICAgICAgfSxcbiAgICAgICAgQiA9IFtdLFxuICAgICAgICB4ID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3RCeVBvc0lkKGFbU11bMF0pLFxuICAgICAgICBNID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3RCeVBvc0lkKGFbU11bMV0pO1xuICAgICAgaWYgKHggJiYgTSkge1xuICAgICAgICBCLnB1c2goeC5pZCk7XG4gICAgICAgIEIucHVzaChNLmlkKTtcbiAgICAgICAgdmFyIE8gPSBzLmdldCh4LmlkKSxcbiAgICAgICAgICBEID0gcy5nZXQoTS5pZCksXG4gICAgICAgICAgUCA9IFtdO1xuICAgICAgICBPICYmIFAucHVzaChPKTtcbiAgICAgICAgRCAmJiBQLnB1c2goRCk7XG4gICAgICAgIEUgPSB0aGlzLnRyeVB1c2hDbGVhckVmZmVjdChTLCBCLCBQLCB3KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fb3B0aW9ucy5zbG90QmFyQ2hhbmdlTGlzdEFmdGVyICYmIHRoaXMuX29wdGlvbnMuc2xvdEJhckNoYW5nZUxpc3RBZnRlci5sZW5ndGggPiAwICYmIHRoaXMudHJ5UHVzaEFkZFRvU2xvdEJhckVmZmVjdHModGhpcy5fb3B0aW9ucy5zbG90QmFyQ2hhbmdlTGlzdEFmdGVyLCBFKTtcbiAgICByZXR1cm4gRTtcbiAgfVxuICBzdGF0aWMgdHJ5UHVzaENsZWFyRWZmZWN0KGUsIHQsIG8sIG4pIHtcbiAgICB2YXIgaSA9IG47XG4gICAgaWYgKG8gJiYgby5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgciA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxQYXJlbnROb2RlKG4ubmV3RWZmZWN0SWQpO1xuICAgICAgaSA9IHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiBuLm5ld0VmZmVjdElkLFxuICAgICAgICBuZXdFZmZlY3RJZDogclxuICAgICAgfTtcbiAgICAgIHRoaXMudHJ5UHVzaEFkZFRvU2xvdEJhckVmZmVjdHMobywgaSk7XG4gICAgfVxuICAgIHZhciBhID0gdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbFBhcmVudE5vZGUoaS5uZXdFZmZlY3RJZCksXG4gICAgICBsID0ge1xuICAgICAgICBsYXN0RWZmZWN0SWQ6IGkubmV3RWZmZWN0SWQsXG4gICAgICAgIG5ld0VmZmVjdElkOiBhXG4gICAgICB9LFxuICAgICAgcyA9IG5ldyBUaWxlMkNsZWFyRWZmZWN0KHtcbiAgICAgICAgdGlsZUlkczogdFxuICAgICAgfSksXG4gICAgICBjID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZShsLm5ld0VmZmVjdElkKTtcbiAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKGMsIHMpO1xuICAgIHRoaXMucGFzZURheGlhb0NsZWFyVGlwc0VmZmVjdChlLCBpKTtcbiAgICB2YXIgdSA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxQYXJlbnROb2RlKGkubmV3RWZmZWN0SWQpLFxuICAgICAgcCA9IHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiBpLm5ld0VmZmVjdElkLFxuICAgICAgICBuZXdFZmZlY3RJZDogdVxuICAgICAgfSxcbiAgICAgIGYgPSB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxQYXJlbnROb2RlKHAubmV3RWZmZWN0SWQpLFxuICAgICAgZCA9IHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiBwLm5ld0VmZmVjdElkLFxuICAgICAgICBuZXdFZmZlY3RJZDogZlxuICAgICAgfSxcbiAgICAgIGggPSB0aGlzLl9nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdCh0WzBdKSxcbiAgICAgIHkgPSB0aGlzLl9nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdCh0WzFdKSxcbiAgICAgIG0gPSB0aGlzLmNyZWF0ZVRpbGUyQ2xlYXJFZmZlY3RFZmZlY3QoaCwgeSwgdGhpcy5fb3B0aW9ucyksXG4gICAgICB2ID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZShkLm5ld0VmZmVjdElkKTtcbiAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKHYsIG0pO1xuICAgIHRoaXMucGFzZURheGlhb0NsZWFyRWZmZWN0KGUsIGQpO1xuICAgIHJldHVybiBkO1xuICB9XG4gIHN0YXRpYyBwdXNoQ2xlYXJFZmZlY3RzKCkge1xuICAgIHZhciBlLCB0O1xuICAgIHRoaXMudHJ5RXhjdXRlU2xvdENhcmROdW1DaGFuZ2UoKTtcbiAgICB0aGlzLnRyeVB1c2hCbG9jayh0cnVlKTtcbiAgICB0aGlzLnRyeVB1c2hDbGVhckhpdFRpcHNFZmZlY3QoKTtcbiAgICB2YXIgbyA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoKSxcbiAgICAgIG4gPSB7XG4gICAgICAgIGxhc3RFZmZlY3RJZDogbyxcbiAgICAgICAgbmV3RWZmZWN0SWQ6IG9cbiAgICAgIH07XG4gICAgdGhpcy5wdXNoUm9sbENhcmRFZmZlY3RzKG4pO1xuICAgIHZhciBpLFxuICAgICAgciA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoKSxcbiAgICAgIGwgPSB7XG4gICAgICAgIGxhc3RFZmZlY3RJZDogcixcbiAgICAgICAgbmV3RWZmZWN0SWQ6IHJcbiAgICAgIH07XG4gICAgdGhpcy50cnlFeGN1dGVIaWRlTWFnbmV0KGwpO1xuICAgIGkgPSAobnVsbCA9PT0gKGUgPSB0aGlzLl9vcHRpb25zLm1hZ25ldEluZm8pIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUudHJpZ2dlck1hZ25ldCkgJiYgKG51bGwgPT09ICh0ID0gdGhpcy5fb3B0aW9ucy5tYWduZXRJbmZvKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0Lm1hZ25ldE1lcmdlKSA/IHRoaXMucHVzaE1hZ25ldE1lcmdlRWZmZWN0cyhsKSA6IHRoaXMudHJ5UHVzaEFsbENsZWFyRWZmZWN0KGwpO1xuICAgIHRoaXMudHJ5UHVzaE5vcm1hbEJhY2tFZmZlY3QobCk7XG4gICAgdGhpcy5wdXNoU2NvcmVGbG90RWZmZWN0KGkpO1xuICAgIHRoaXMudHJ5RXhjdXRlU2hvd0NvbWJvKGkpO1xuICAgIHRoaXMudHJ5U2hvd0NoZWVyKGkpO1xuICAgIHRoaXMudHJ5U2hvd1NjcmVlbkVkZ2UoaSk7XG4gICAgdGhpcy50cnlTaG93U2NyZWVuVG9wKGkpO1xuICAgIHRoaXMudHJ5U2hvd1Nsb3RBZHZhbmNlKGkpO1xuICAgIHRoaXMudHJ5RXhjdXRlRGlhblphbihpKTtcbiAgICB0aGlzLnRyeUV4Y3V0ZVNob3dNYWduZXQoaSk7XG4gICAgdGhpcy5wYXNlQm9tYkVmZmVjdChpKTtcbiAgICB0aGlzLnBhcnNlRHVveGlhb0VmZmVjdChpLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gICAgdmFyIHMgPSB0aGlzLnRyeUV4Y3V0ZUFsbENsZWFyKGkpO1xuICAgIHRoaXMudHJ5UHVzaEJsb2NrKGZhbHNlKTtcbiAgICB2YXIgYyA9IGk7XG4gICAgdGhpcy5fb3B0aW9ucy5pbnNlcnRFbmRFZmZlY3RJZCAmJiAoYyA9IHtcbiAgICAgIGxhc3RFZmZlY3RJZDogdGhpcy5fb3B0aW9ucy5pbnNlcnRFbmRFZmZlY3RJZCxcbiAgICAgIG5ld0VmZmVjdElkOiB0aGlzLl9vcHRpb25zLmluc2VydEVuZEVmZmVjdElkXG4gICAgfSk7XG4gICAgdGhpcy50cnlQdXNoRW5kRWZmZWN0KGMsIHMpO1xuICB9XG4gIHN0YXRpYyBwdXNoU2xvdEJhckVmZmVjdHMoKSB7fVxuICBzdGF0aWMgcHVzaE1hZ25ldE1lcmdlRWZmZWN0cyhlKSB7XG4gICAgdmFyIHQgPSB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxQYXJlbnROb2RlKGUubmV3RWZmZWN0SWQpLFxuICAgICAgbyA9IHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiBlLm5ld0VmZmVjdElkLFxuICAgICAgICBuZXdFZmZlY3RJZDogdFxuICAgICAgfSxcbiAgICAgIG4gPSB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsUGFyZW50Tm9kZShvLm5ld0VmZmVjdElkKSxcbiAgICAgIGkgPSB7XG4gICAgICAgIGxhc3RFZmZlY3RJZDogby5uZXdFZmZlY3RJZCxcbiAgICAgICAgbmV3RWZmZWN0SWQ6IG5cbiAgICAgIH0sXG4gICAgICByID0gbmV3IFRpbGUyTWFnbmV0TWVyZ2VFZmZlY3Qoe1xuICAgICAgICBjbGVhclRpbGVJZHM6IHRoaXMuX29wdGlvbnMuY2xlYXJUaWxlTGlzdFxuICAgICAgfSk7XG4gICAgdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbE5vZGUoaS5uZXdFZmZlY3RJZCwgcik7XG4gICAgdmFyIGEgPSB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxQYXJlbnROb2RlKGkubmV3RWZmZWN0SWQpLFxuICAgICAgbCA9IHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiBpLm5ld0VmZmVjdElkLFxuICAgICAgICBuZXdFZmZlY3RJZDogYVxuICAgICAgfTtcbiAgICB0aGlzLmFkZFRvU2xvdEJhckVmZmVjdHModGhpcy5fb3B0aW9ucy5zbG90QmFyQ2hhbmdlTGlzdEFmdGVyLCBsKTtcbiAgICByZXR1cm4gbDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNsZWFyVDRIbHBfbmV3Q2xyRWZmRWZmXCIpXG4gIHN0YXRpYyBjcmVhdGVUaWxlMkNsZWFyRWZmZWN0RWZmZWN0KGUsIHQpIHtcbiAgICB2YXIgbyA9IFtdLFxuICAgICAgbiA9IGZhbHNlO1xuICAgIGlmIChlICYmIHQpIHtcbiAgICAgIG8ucHVzaChlLmlkKTtcbiAgICAgIG8ucHVzaCh0LmlkKTtcbiAgICAgIGUuY2hlY2tIYXNUeXBlKEVUaWxlVHlwZS5SYW5rQ2FyZCkgJiYgdC5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLlJhbmtDYXJkKSAmJiAobiA9IHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFRpbGUyQ2xlYXJFZmZlY3RFZmZlY3Qoe1xuICAgICAgdGlsZUlkczogbyxcbiAgICAgIGlzUmFua0NhcmQ6IG5cbiAgICB9KTtcbiAgfVxuICBzdGF0aWMgdHJ5UHVzaEVuZEVmZmVjdChlLCB0KSB7XG4gICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZSgpO1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmlzRGVhZCkgdGhpcy5wdXNoRmFpbEVmZmVjdCgpO2Vsc2UgaWYgKHRoaXMuX29wdGlvbnMuaXNXaW4pIHtcbiAgICAgIHZhciBvID0gbmV3IFRpbGUyRW5kRWZmZWN0KHtcbiAgICAgICAgc2NvcmU6IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0U2NvcmUoKSxcbiAgICAgICAgc2V0dGxlbWVudFNjb3JlOiB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldFNldHRsZW1lbnRTY29yZSgpLFxuICAgICAgICBwZXJmZWN0TWF4U2NvcmU6IHRoaXMuX2dhbWVDb250ZXh0LnNjb3JlTW9kaWZpZXIuZ2V0UGVyZmVjdE1heFNjb3JlKCksXG4gICAgICAgIGN1ckx2OiB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldExldmVsSWQoKSxcbiAgICAgICAgY29tYm9OdW06IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0Q29tYm9OdW0oKSxcbiAgICAgICAgY3VyTWF4Q29tYm86IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0Q3VyTWF4Q29tYm8oKSxcbiAgICAgICAgZ2FtZUR1cmF0aW9uOiB0aGlzLl9vcHRpb25zLndpbkdhbWVEdXJhdGlvbixcbiAgICAgICAgcHJldlNjb3JlOiB0aGlzLl9vcHRpb25zLnByZXZXaW5TY29yZSxcbiAgICAgICAgcHJldkNvbWJvTnVtOiB0aGlzLl9vcHRpb25zLnByZXZXaW5Db21ib051bSxcbiAgICAgICAgcHJldkdhbWVEdXJhdGlvbjogdGhpcy5fb3B0aW9ucy5wcmV2V2luRHVyYXRpb24sXG4gICAgICAgIG1heENvbWJvTnVtOiB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldEN1ckxldmVsQ29tYm9NYXhMaW1pdCgpXG4gICAgICB9KTtcbiAgICAgIGlmICh0KSB7XG4gICAgICAgIHZhciBuID0gdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbFBhcmVudE5vZGUodC5uZXdFZmZlY3RJZCksXG4gICAgICAgICAgaSA9IG5ldyBUaWxlMkJlZm9yZUVuZEVmZmVjdCh7fSk7XG4gICAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxOb2RlKG4sIGkpO1xuICAgICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsTm9kZShuLCBvKTtcbiAgICAgIH0gZWxzZSBpZiAoZSkge1xuICAgICAgICBpID0gbmV3IFRpbGUyQmVmb3JlRW5kRWZmZWN0KHt9KTtcbiAgICAgICAgdmFyIHIgPSB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxQYXJlbnROb2RlKGUubmV3RWZmZWN0SWQpO1xuICAgICAgICBuID0gdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbFBhcmVudE5vZGUocik7XG4gICAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxOb2RlKG4sIGkpO1xuICAgICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsTm9kZShuLCBvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBhID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZSgpLFxuICAgICAgICAgIGwgPSB7XG4gICAgICAgICAgICBsYXN0RWZmZWN0SWQ6IGEsXG4gICAgICAgICAgICBuZXdFZmZlY3RJZDogYVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcyA9IChpID0gbmV3IFRpbGUyQmVmb3JlRW5kRWZmZWN0KHt9KSwgdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbFBhcmVudE5vZGUobC5uZXdFZmZlY3RJZCkpO1xuICAgICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkU2VyaWFsTm9kZShzLCBpKTtcbiAgICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFNlcmlhbE5vZGUocywgbyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXRpYyB0cnlTaG93Q2hlZXIoZSkge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmlzU2hvd0NoZWVyKSB7XG4gICAgICB2YXIgdCA9IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0Q29tYm9OdW0oKSxcbiAgICAgICAgbyA9IHRoaXMuX29wdGlvbnMudGlsZUlkcyxcbiAgICAgICAgbiA9IG5ldyBUaWxlMkNoZWVyRWZmZWN0KHtcbiAgICAgICAgICBpbmRleDogdGhpcy5fb3B0aW9ucy5pbmRleENoZWVyLFxuICAgICAgICAgIGNvbWJvTnVtOiB0LFxuICAgICAgICAgIHRpbGVJZDE6IG9bMV0gfHwgXCJcIixcbiAgICAgICAgICB0aWxlSWQyOiBvWzBdIHx8IFwiXCJcbiAgICAgICAgfSksXG4gICAgICAgIGkgPSB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxQYXJlbnROb2RlKGUubmV3RWZmZWN0SWQpO1xuICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShpLCBuKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHB1c2hTY29yZUZsb3RFZmZlY3QoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICByLFxuICAgICAgYSA9IHRoaXMuX29wdGlvbnMuY29tYm9TdGF0ZSxcbiAgICAgIGwgPSB0aGlzLl9vcHRpb25zLmFkZFNjb3JlLFxuICAgICAgcyA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBjID0gX192YWx1ZXModGhpcy5fb3B0aW9ucy5jbGVhclNsb3RCYXJMaXN0KSwgdSA9IGMubmV4dCgpOyAhdS5kb25lOyB1ID0gYy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHAgPSB1LnZhbHVlLFxuICAgICAgICAgIGYgPSB0aGlzLl9nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdEJ5UG9zSWQocFswXSksXG4gICAgICAgICAgZCA9IHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0QnlQb3NJZChwWzFdKTtcbiAgICAgICAgaWYgKGYgJiYgZCkge1xuICAgICAgICAgIHMucHVzaChmLmlkKTtcbiAgICAgICAgICBzLnB1c2goZC5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdSAmJiAhdS5kb25lICYmIChvID0gYy5yZXR1cm4pICYmIG8uY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgaCA9IChudWxsID09PSAobiA9IHRoaXMuX29wdGlvbnMubWFnbmV0SW5mbykgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi50cmlnZ2VyTWFnbmV0KSAmJiAobnVsbCA9PT0gKHIgPSB0aGlzLl9vcHRpb25zLm1hZ25ldEluZm8pIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIubWFnbmV0TWVyZ2UpLFxuICAgICAgeSA9IG5ldyBUaWxlMlNjb3JlRmxvdEVmZmVjdCh7XG4gICAgICAgIHRpbGVJZDogc1swXSxcbiAgICAgICAgbGFzdFRpbGVJZDogc1sxXSxcbiAgICAgICAgaXNDb21ibzogYSxcbiAgICAgICAgYWRkU2NvcmU6IGwsXG4gICAgICAgIGlzTWFnbmV0TWVyZ2U6IGhcbiAgICAgIH0pLFxuICAgICAgZyA9IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCksXG4gICAgICBfID0gbmV3IFRpbGUyVXBkYXRlU2NvcmVFZmZlY3Qoe1xuICAgICAgICBhZGRTY29yZTogbCxcbiAgICAgICAgdGFyZ2V0U2NvcmU6IGcuZ2V0U2NvcmUoKSxcbiAgICAgICAgaXNTaG93Q29tYm86IGFcbiAgICAgIH0pLFxuICAgICAgVCA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxQYXJlbnROb2RlKGUubmV3RWZmZWN0SWQpO1xuICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxOb2RlKFQsIHkpO1xuICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxOb2RlKFQsIF8pO1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0RWZmZWN0SWQ6IGUubmV3RWZmZWN0SWQsXG4gICAgICBuZXdFZmZlY3RJZDogVFxuICAgIH07XG4gIH1cbiAgc3RhdGljIHRyeUV4Y3V0ZVNob3dDb21ibyhlKSB7XG4gICAgdGhpcy5fb3B0aW9ucy5zaG93Q29tYm9EaXNwbGF5ICYmIHRoaXMucHVzaFRpbGUyQ29tYm9FZmZlY3QodGhpcy5fb3B0aW9ucy5jb21ib051bSwgZSk7XG4gIH1cbiAgc3RhdGljIHB1c2hUaWxlMkNvbWJvRWZmZWN0KGUsIHQpIHtcbiAgICB2YXIgbyA9IG5ldyBUaWxlMkNvbWJvRWZmZWN0KHtcbiAgICAgICAgY29tYm9OdW06IGVcbiAgICAgIH0pLFxuICAgICAgbiA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUodC5uZXdFZmZlY3RJZCk7XG4gICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShuLCBvKTtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdEVmZmVjdElkOiB0Lm5ld0VmZmVjdElkLFxuICAgICAgbmV3RWZmZWN0SWQ6IG5cbiAgICB9O1xuICB9XG4gIHN0YXRpYyB0cnlTaG93U2NyZWVuRWRnZShlKSB7XG4gICAgdGhpcy5fb3B0aW9ucy5zaG93U2NyZWVuRWRnZSAmJiB0aGlzLnB1c2hTY3JlZW5FZGdlRWZmZWN0KGUpO1xuICB9XG4gIHN0YXRpYyBwdXNoU2NyZWVuRWRnZUVmZmVjdChlKSB7XG4gICAgdmFyIHQgPSBuZXcgVGlsZTJTY3JlZW5FZGdlRWZmZWN0KHtcbiAgICAgICAgY29tYm9OdW06IHRoaXMuX29wdGlvbnMuY29tYm9OdW1cbiAgICAgIH0pLFxuICAgICAgbyA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoZS5uZXdFZmZlY3RJZCk7XG4gICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShvLCB0KTtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdEVmZmVjdElkOiBlLm5ld0VmZmVjdElkLFxuICAgICAgbmV3RWZmZWN0SWQ6IG9cbiAgICB9O1xuICB9XG4gIHN0YXRpYyB0cnlTaG93U2NyZWVuVG9wKGUpIHtcbiAgICB0aGlzLl9vcHRpb25zLnNob3dTY3JlZW5Ub3AgJiYgdGhpcy5wdXNoU2NyZWVuVG9wRWZmZWN0KGUpO1xuICB9XG4gIHN0YXRpYyBwdXNoU2NyZWVuVG9wRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBUaWxlMlNjcmVlblRvcEVmZmVjdCh7fSksXG4gICAgICBvID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZShlLm5ld0VmZmVjdElkKTtcbiAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKG8sIHQpO1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0RWZmZWN0SWQ6IGUubmV3RWZmZWN0SWQsXG4gICAgICBuZXdFZmZlY3RJZDogb1xuICAgIH07XG4gIH1cbiAgc3RhdGljIHRyeVNob3dTbG90QWR2YW5jZShlKSB7XG4gICAgdGhpcy5fb3B0aW9ucy5zaG93U2xvdEFkdmFuY2UgJiYgdGhpcy5wdXNoU2xvdEFkdmFuY2VFZmZlY3QoZSk7XG4gIH1cbiAgc3RhdGljIHB1c2hTbG90QWR2YW5jZUVmZmVjdChlKSB7XG4gICAgdmFyIHQgPSBuZXcgVGlsZTJTbG90QWR2YW5jZUVmZmVjdCh7XG4gICAgICAgIHNsb3RMZXZlbDogdGhpcy5fb3B0aW9ucy5zbG90TGV2ZWxcbiAgICAgIH0pLFxuICAgICAgbyA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoZS5uZXdFZmZlY3RJZCk7XG4gICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShvLCB0KTtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdEVmZmVjdElkOiBlLm5ld0VmZmVjdElkLFxuICAgICAgbmV3RWZmZWN0SWQ6IG9cbiAgICB9O1xuICB9XG4gIHN0YXRpYyB0cnlFeGN1dGVBbGxDbGVhcihlKSB7XG4gICAgdmFyIHQsIG8sIG47XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaXNTaG93QWxsQ2xlYXIpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICByID0gbmV3IEFsbENsZWFyRWZmZWN0KHtcbiAgICAgICAgICBlZmZlY3RJZDogdGhpcy5fb3B0aW9ucy5hbGxDbGVhckVmZmVjdElkIHx8IDEsXG4gICAgICAgICAgdGlsZUlkczogbnVsbCAhPT0gKHQgPSB0aGlzLl9vcHRpb25zLmFsbENsZWFyVGlsZUlkcykgJiYgdm9pZCAwICE9PSB0ID8gdCA6IFtdXG4gICAgICAgIH0pO1xuICAgICAgaSA9ICgobnVsbCA9PT0gKG8gPSB0aGlzLl9vcHRpb25zLm1hZ25ldEluZm8pIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8udHJpZ2dlck1hZ25ldCkgJiYgKG51bGwgPT09IChuID0gdGhpcy5fb3B0aW9ucy5tYWduZXRJbmZvKSB8fCB2b2lkIDAgPT09IG4gfHwgbi5tYWduZXRNZXJnZSksIHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxQYXJlbnROb2RlKGUubmV3RWZmZWN0SWQpKTtcbiAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRTZXJpYWxOb2RlKGksIHIpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiBpLFxuICAgICAgICBuZXdFZmZlY3RJZDogaVxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGdldFByZVNodWZmbGVEYXRhKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHN0YXRpYyBwdXNoRmFpbEVmZmVjdCgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQgPSB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgbyA9IHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIG4gPSBbXSxcbiAgICAgIGkgPSAobnVsbCAhPT0gKGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LnNsb3RCYXJJZHMpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiBbXSkubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0LFxuICAgICAgICAgIGksXG4gICAgICAgICAgciA9IG51bGwgPT0gbyA/IHZvaWQgMCA6IG8uZ2V0VGlsZU9iamVjdEJ5UG9zSWQoZSk7XG4gICAgICAgIG4ucHVzaChudWxsID09IHIgPyB2b2lkIDAgOiByLmlkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZXNJZDogbnVsbCA9PSByID8gdm9pZCAwIDogci5yZXNJZCxcbiAgICAgICAgICBpc0RheGlhbzogbnVsbCAhPT0gKHQgPSBudWxsID09IHIgPyB2b2lkIDAgOiByLmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuRGF4aWFvQ2FyZCkpICYmIHZvaWQgMCAhPT0gdCAmJiB0LFxuICAgICAgICAgIGR1b3hpYW9Db3VudDogbnVsbCAhPT0gKGkgPSBudWxsID09IHIgPyB2b2lkIDAgOiByLmdldER1b3hpYW9Db3VudCgpKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogMFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICByID0gdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJSZXZpdmVDaGVja2VyLmdldFJldml2ZUNvdW50KCksXG4gICAgICBhID0gbmV3IFRpbGUyQmVmb3JlRmFpbEVmZmVjdCh7XG4gICAgICAgIHRpbGVJZHM6IG4sXG4gICAgICAgIHJldml2ZU51bTogclxuICAgICAgfSksXG4gICAgICBsID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZSgpO1xuICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbE5vZGUobCwgYSk7XG4gICAgdmFyIHMgPSBuZXcgVGlsZTJGYWlsRWZmZWN0KHtcbiAgICAgICAgdGlsZXM6IGksXG4gICAgICAgIHJldml2ZU51bTogcixcbiAgICAgICAgdGlsZVByZXZpZXdMYXlvdXQ6IFwicm93NFwiXG4gICAgICB9KSxcbiAgICAgIGMgPSB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxQYXJlbnROb2RlKCk7XG4gICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShjLCBzKTtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdEVmZmVjdElkOiBjLFxuICAgICAgbmV3RWZmZWN0SWQ6IGNcbiAgICB9O1xuICB9XG4gIHN0YXRpYyB0cnlFeGN1dGVTbG90Q2FyZE51bUNoYW5nZSgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvLFxuICAgICAgbixcbiAgICAgIGkgPSBuZXcgVGlsZTJTbG90Q2FyZE51bUNoYW5nZUVmZmVjdCh7XG4gICAgICAgIHN0YXJ0U2xvdEJhckNhcmRDb3VudDogbnVsbCAhPT0gKHQgPSBudWxsID09PSAoZSA9IHRoaXMuX29wdGlvbnMuc2xvdEJhclNuYXBzaG90QmVmb3JlKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmxlbmd0aCkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IDAsXG4gICAgICAgIGVuZFNsb3RCYXJDYXJkQ291bnQ6IG51bGwgIT09IChuID0gbnVsbCA9PT0gKG8gPSB0aGlzLl9vcHRpb25zLnNsb3RCYXJTbmFwc2hvdEFmdGVyKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmxlbmd0aCkgJiYgdm9pZCAwICE9PSBuID8gbiA6IDBcbiAgICAgIH0pLFxuICAgICAgciA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoKTtcbiAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKHIsIGkpO1xuICB9XG4gIHN0YXRpYyB0cnlFeGN1dGVEaWFuWmFuKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgaSA9IG51bGwgPT09ICh0ID0gdGhpcy5fb3B0aW9ucy5kaWFuWmFuSW5mbykgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5pc1Nob3c7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaXNEZWFkIHx8IHRoaXMuX29wdGlvbnMuaXNXaW4pIHRoaXMuX2dhbWVDb250ZXh0LnRpbGUyU2xvdEJhckRhdGEuY2xlYXJDYW5EaWFuWmFuVGlsZUlkcygpO2Vsc2UgaWYgKGUgJiYgaSkge1xuICAgICAgdmFyIHIgPSBudWxsID09PSAobyA9IHRoaXMuX29wdGlvbnMuZGlhblphbkluZm8pIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8udGlsZUlkMTtcbiAgICAgIGlmIChyKSB7XG4gICAgICAgIHZhciBhID0gbmV3IFRpbGUyRGlhblphbkVmZmVjdCh7XG4gICAgICAgICAgICB0aWxlSWQxOiByLFxuICAgICAgICAgICAgZGlhblphbkNvbmRpdGlvbjogKG51bGwgPT09IChuID0gdGhpcy5fb3B0aW9ucy5kaWFuWmFuSW5mbykgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi5kaWFuWmFuQ29uZGl0aW9uKSB8fCAwXG4gICAgICAgICAgfSksXG4gICAgICAgICAgbCA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoZS5uZXdFZmZlY3RJZCk7XG4gICAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbE5vZGUobCwgYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXRpYyBtb2RpZnlEaWFuWmFuSW5mbyhlLCB0LCBvKSB7XG4gICAgaWYgKG8gJiYgIShvLmxlbmd0aCA8PSAwKSkge1xuICAgICAgaWYgKGUgPT09IEVEaWFuWmFuQ29uZGl0aW9uLkNvbnRpbnVlUm9sbENhcmQpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5kaWFuWmFuSW5mby5pc1Nob3cgPSB0aGlzLl9nYW1lQ29udGV4dC50aWxlMkRpYW5aYW5DaGVja2VyLmNoZWNrQ29udGludWVSb2xsQ2FyZChvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUgPT09IEVEaWFuWmFuQ29uZGl0aW9uLlNsb3RCYXJNYXRjaE5vUm9sbENhcmQgJiYgKHRoaXMuX29wdGlvbnMuZGlhblphbkluZm8uaXNTaG93ID0gdGhpcy5fZ2FtZUNvbnRleHQudGlsZTJEaWFuWmFuQ2hlY2tlci5jaGVja1Nsb3RCYXJDYW5NYXRjaCh0LCB0cnVlKSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5kaWFuWmFuSW5mby5pc1Nob3cpIHtcbiAgICAgICAgdmFyIG4gPSBvW28ubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgaSA9IHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0QnlQb3NJZChuKTtcbiAgICAgICAgaWYgKGkgJiYgaS5pc1ZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5fb3B0aW9ucy5kaWFuWmFuSW5mby50aWxlSWQxID0gaS5pZDtcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLmRpYW5aYW5JbmZvLmRpYW5aYW5Db25kaXRpb24gPSBlO1xuICAgICAgICB9IGVsc2UgdGhpcy5fb3B0aW9ucy5kaWFuWmFuSW5mby5pc1Nob3cgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RhdGljIG1vZGlmeU1hZ25ldEluZm8oZSkge1xuICAgIGlmICgwID09IGUpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMuY2xlYXJTbG90QmFyTGlzdCAmJiAwICE9IHRoaXMuX29wdGlvbnMuY2xlYXJTbG90QmFyTGlzdC5sZW5ndGggfHwgKHRoaXMuX29wdGlvbnMubWFnbmV0SW5mbyA9IHRoaXMuY2hlY2tJc1Nob3dNYWduZXQoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29wdGlvbnMubWFnbmV0SW5mbyA9IHtcbiAgICAgICAgdHJpZ2dlck1hZ25ldDogdHJ1ZSxcbiAgICAgICAgaXNTaG93SWNvbkl0ZW06IGZhbHNlLFxuICAgICAgICBtYWduZXRDb3VudDogMCxcbiAgICAgICAgbWFnbmV0TWVyZ2U6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHN0YXRpYyB0cnlFeGN1dGVTaG93TWFnbmV0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX29wdGlvbnMubWFnbmV0SW5mbztcbiAgICBpZiAoZSAmJiB0ICYmICF0aGlzLl9vcHRpb25zLmlzRGVhZCAmJiAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC50cmlnZ2VyTWFnbmV0KSAmJiAhdC5tYWduZXRNZXJnZSAmJiB0LmlzU2hvd0ljb25JdGVtKSB7XG4gICAgICB2YXIgbyA9IG5ldyBUaWxlMk1hZ25ldEVmZmVjdCh7XG4gICAgICAgICAgbWFnbmV0Q291bnQ6IHRoaXMuX29wdGlvbnMubWFnbmV0SW5mby5tYWduZXRDb3VudFxuICAgICAgICB9KSxcbiAgICAgICAgbiA9IHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbFBhcmVudE5vZGUoZS5uZXdFZmZlY3RJZCk7XG4gICAgICB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxOb2RlKG4sIG8pO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgdHJ5RXhjdXRlSGlkZU1hZ25ldChlKSB7XG4gICAgaWYgKGUgJiYgKHRoaXMuX29wdGlvbnMuaXNXaW4gfHwgdGhpcy5fb3B0aW9ucy5pc0RlYWQpKSB7XG4gICAgICB2YXIgdCA9IG5ldyBUaWxlMk1hZ25ldEhpZGVFZmZlY3Qoe1xuICAgICAgICAgIGlzV2luOiB0aGlzLl9vcHRpb25zLmlzV2luLFxuICAgICAgICAgIGlzRGVhZDogdGhpcy5fb3B0aW9ucy5pc0RlYWRcbiAgICAgICAgfSksXG4gICAgICAgIG8gPSB0aGlzLl9iYXNlSW5wdXQuYWRkUGFyYWxsZWxQYXJlbnROb2RlKGUubmV3RWZmZWN0SWQpO1xuICAgICAgdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsTm9kZShvLCB0KTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHRyeVB1c2hOb3JtYWxCYWNrRWZmZWN0KGUpIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5ub3JtYWxCYWNrTGlzdCAmJiAwICE9IHRoaXMuX29wdGlvbnMubm9ybWFsQmFja0xpc3QubGVuZ3RoKSB7XG4gICAgICB2YXIgdCA9IG5ldyBUaWxlMk5vcm1hbEJhY2tFZmZlY3Qoe1xuICAgICAgICAgIG5vcm1hbEJhY2tMaXN0OiB0aGlzLl9vcHRpb25zLm5vcm1hbEJhY2tMaXN0XG4gICAgICAgIH0pLFxuICAgICAgICBvID0gdGhpcy5fYmFzZUlucHV0LmFkZFBhcmFsbGVsUGFyZW50Tm9kZShlLm5ld0VmZmVjdElkKTtcbiAgICAgIHRoaXMuX2Jhc2VJbnB1dC5hZGRQYXJhbGxlbE5vZGUobywgdCk7XG4gICAgfVxuICB9XG59Il19