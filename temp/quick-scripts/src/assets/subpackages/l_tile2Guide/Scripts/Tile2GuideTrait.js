"use strict";
cc._RF.push(module, 'ffcd3ozlttKpJMzO1r1gbYP', 'Tile2GuideTrait');
// subpackages/l_tile2Guide/Scripts/Tile2GuideTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Tile2HitTipsEffect_1 = require("../../../Scripts/Tile2HitTipsEffect");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2GuideBehavior_1 = require("./Tile2GuideBehavior");
var Tile2GuideEffect_1 = require("./Tile2GuideEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var Tile2GuideTrait = /** @class */ (function (_super) {
    __extends(Tile2GuideTrait, _super);
    function Tile2GuideTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._levelId = 1;
        _this._guideLevels = [1];
        _this._guideLevelTypes = [1];
        _this._maxGuideLevel = 1;
        _this._isGuideActive = false;
        _this._isGuide = false;
        _this._pendingAdvanceOnClear = false;
        _this._boardTileId = null;
        _this._slotbarTileId = null;
        _this._materializedGuideData = null;
        _this.levelGuideType = 1;
        _this._currentGuideList = null;
        return _this;
    }
    Tile2GuideTrait_1 = Tile2GuideTrait;
    Tile2GuideTrait.prototype.onLoad = function () {
        var t, i;
        _super.prototype.onLoad.call(this);
        void 0 === this.localData.finished && (this.localData.finished = false);
        void 0 === this.localData.guideStep && (this.localData.guideStep = 0);
        var o = this._traitData || {};
        if ((null === (t = o.guideLevel) || void 0 === t ? void 0 : t.length) && (null === (i = o.guideLevelType) || void 0 === i ? void 0 : i.length)) {
            var a = o.guideLevel, r = o.guideLevelType;
            if (a.length !== r.length)
                ;
            else {
                this._guideLevels = a.slice();
                this._guideLevelTypes = r.slice();
            }
        }
        else {
            this._guideLevels = [1];
            this._guideLevelTypes = [2];
        }
        this._maxGuideLevel = Math.max.apply(Math, __spreadArrays(this._guideLevels));
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.Tile2Guide, Tile2GuideBehavior_1.Tile2GuideBehavior);
        this.registerEvent([{
                event: "IptT2EtAnFi_excute"
            }]);
    };
    Tile2GuideTrait.prototype.onLoginM_showLoad = function (e, t) {
        if (!this.localData.finished) {
            var i = UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Tile2Normal);
            if (i && i.getLevelId() <= this._maxGuideLevel) {
                i.saveLevelData("");
                i.setLevelId(1);
            }
            this.localData.guideStep = 0;
            UserModel_1.default.getInstance().setGuideFinished(false);
            this._isGuide = true;
        }
        t();
    };
    Tile2GuideTrait.prototype.setLevelGuideType = function (e) {
        this.levelGuideType = e;
    };
    Tile2GuideTrait.prototype.getGuideDataList = function () {
        var t;
        var _e = {};
        _e[1] = {
            isShowBottom: false,
            isShowSet: false,
            dataList: [{
                    guideStep: 0,
                    slotbarTileIdList: ["4-3-0", "4-7-0", "4-5-2"],
                    isShowSkip: false,
                    isShowHand: true,
                    isTouchHideGuide: true,
                    boardTileId: "3-5-1",
                    slotbarTileId: "4-3-0",
                    finishType: "clear",
                    text: I18NStrings_1.default.get("Tile3_Guide_color_text1"),
                    allowOtherTilesWhileGuide: true
                }]
        };
        _e[2] = {
            isShowBottom: false,
            isShowSet: false,
            dataList: []
        };
        _e[3] = {
            isShowBottom: true,
            isShowSet: true,
            dataList: [{
                    guideStep: 0,
                    dynamicChooseCountToSlot: 3,
                    dynamicChooseBoardAndSlotID: true,
                    isShowSkip: false,
                    isShowHand: true,
                    isTouchHideGuide: true,
                    finishType: "clear",
                    text: ""
                }]
        };
        _e[4] = {
            isShowBottom: false,
            isShowSet: false,
            dataList: [{
                    guideStep: 0,
                    slotbarTileIdList: ["5-3-1"],
                    isShowSkip: false,
                    isShowHand: true,
                    isTouchHideGuide: true,
                    boardTileId: "3-3-1",
                    finishType: "clear",
                    text: I18NStrings_1.default.get("Tile4_Guide_text1"),
                    textPos: cc.v2(0, -480),
                    allowOtherTilesWhileGuide: true
                }]
        };
        _e[5] = {
            isShowBottom: false,
            isShowSet: false,
            dataList: [{
                    guideStep: 0,
                    slotbarTileIdList: ["3-6-0", "4-2-0", "5-6-0"],
                    isShowSkip: false,
                    isShowHand: false,
                    finishType: "clear"
                }]
        };
        return null !== (t = _e[this.levelGuideType]) && void 0 !== t ? t : {
            dataList: []
        };
    };
    Tile2GuideTrait.prototype.getCurrentGuideData = function () {
        var e, t;
        return null !== (t = this.getGuideDataList().dataList[null !== (e = this.localData.guideStep) && void 0 !== e ? e : 0]) && void 0 !== t ? t : null;
    };
    Tile2GuideTrait.prototype.onIptT2InitSlotBar_exec = function (e, t) {
        this._isGuideActive = false;
        this._boardTileId = null;
        this._slotbarTileId = null;
        this._materializedGuideData = null;
        this._pendingAdvanceOnClear = false;
        var i = e.ins, o = i.gameContext, a = o.getGameData(), r = o.getIsNewGame(), n = a.getLevelId();
        if (o.gameType === GameTypeEnums_1.MjGameType.Tile2Normal && r && !this.localData.finished) {
            var l = this._guideLevels.indexOf(n);
            if (l < 0)
                t();
            else {
                this.levelGuideType = this._guideLevelTypes[l];
                this._currentGuideList = this.getGuideDataList();
                this.localData.guideStep = 0;
                var s = this.getCurrentGuideData(), d = i.tileMapObject;
                if (s) {
                    this._prepareGuideStepAndMaterialize(a, d, s, function () {
                        return o.tile2HitTipsChecker.computeTile2Hint();
                    }), t();
                }
                else {
                    t();
                }
            }
        }
        else
            t();
    };
    Tile2GuideTrait.prototype.onIptT2EtAn_excute = function (e, t) {
        var i, o, a = e.ins, r = a.addParallelParentNode();
        if (!this.localData.finished) {
            this._currentGuideList = this.getGuideDataList();
            a.addParallelNode(r, new Tile2GuideEffect_1.Tile2GuideEffect({
                status: "init",
                isShowBottom: null === (i = this._currentGuideList) || void 0 === i ? void 0 : i.isShowBottom,
                isShowSet: null === (o = this._currentGuideList) || void 0 === o ? void 0 : o.isShowSet
            }));
        }
        t();
    };
    Tile2GuideTrait.prototype.onIptT2EtAnFi_excute = function (e, t) {
        var i = e.ins;
        if (this.localData.finished && this._isGuide) {
            var o = i.addParallelParentNode();
            i.addParallelNode(o, new Tile2GuideEffect_1.Tile2GuideEffect({
                status: "finished"
            }));
            this._isGuide = false;
            t();
        }
        else if (this._isGuideActive && this._boardTileId) {
            var a = this._materializedGuideData;
            if (a) {
                this._pushStepGuide(i, a);
                if (this._boardTileId) {
                    var r = this._slotbarTileId ? [this._boardTileId, this._slotbarTileId] : [this._boardTileId];
                    i.gameContext.setCanHitTips(r);
                }
                t();
            }
            else
                t();
        }
        else
            t();
    };
    Tile2GuideTrait.prototype.onTile2IptTchSt_exec = function (e, t) {
        var i;
        if (this._isGuideActive) {
            var o = e.ins, a = o.input, r = null == a ? void 0 : a.pos;
            if (r) {
                var n = o.gameContext.tileSelector.touchStart(r), l = null !== (i = this._materializedGuideData) && void 0 !== i ? i : this.getCurrentGuideData();
                if (true === (null == l ? void 0 : l.allowOtherTilesWhileGuide)) {
                    if (!n) {
                        t();
                        return;
                    }
                    if (o.gameContext.tileChecker.checkIsLock(n)) {
                        t();
                        return;
                    }
                }
                else if (n !== this._boardTileId) {
                    t({
                        returnType: TraitManager_1.TraitCallbackReturnType.return,
                        isBreak: true
                    });
                    return;
                }
                var s = l;
                this._isGuideActive = false;
                if (null == s ? void 0 : s.isTouchHideGuide) {
                    var d = o.addParallelParentNode();
                    o.addParallelNode(d, new Tile2GuideEffect_1.Tile2GuideEffect({
                        status: "hide"
                    }));
                }
                if ("click" === (null == s ? void 0 : s.finishType)) {
                    var c = o.gameContext;
                    this._advanceGuideStep(o, c.getGameData(), function () {
                        return c.tile2HitTipsChecker.computeTile2Hint();
                    }, function (e) {
                        return c.setCanHitTips(e);
                    });
                }
                else
                    "clear" === (null == s ? void 0 : s.finishType) && (this._pendingAdvanceOnClear = true);
                t();
            }
            else
                t();
        }
        else
            t();
    };
    Tile2GuideTrait.prototype.onTile2IptTchEnd_runClr = function (e, t) {
        if (this._pendingAdvanceOnClear) {
            this._pendingAdvanceOnClear = false;
            var i = e.ins, o = i.gameContext;
            this._advanceGuideStep(i, o.getGameData(), function () {
                return o.tile2HitTipsChecker.computeTile2Hint();
            }, function (e) {
                return o.setCanHitTips(e);
            });
        }
        t();
    };
    Tile2GuideTrait.prototype.onT2GameCtrl_getIsNewGame = function (e, t) {
        t();
    };
    Tile2GuideTrait.prototype.onTile2WinBhv_start = function (e, t) {
        var i, o;
        UserModel_1.default.getInstance().setGuideFinished(true);
        if (!this.localData.finished) {
            var a = null === (i = e.ins) || void 0 === i ? void 0 : i.effect;
            (null === (o = null == a ? void 0 : a.data) || void 0 === o ? void 0 : o.curLv) > this._maxGuideLevel && (this.localData.finished = true);
        }
        t();
    };
    Tile2GuideTrait.prototype._resolveTileByPosOrId = function (e, t) {
        return t && (e.getTileObject(t) || e.getTileObjectByPosId(t)) || null;
    };
    Tile2GuideTrait.prototype._pushStepGuide = function (e, t) {
        var i, o, a = e.tileMapObject, r = this._resolveTileByPosOrId(a, t.boardTileId), n = t.slotbarTileId ? this._resolveTileByPosOrId(a, t.slotbarTileId) : null;
        if (null == r ? void 0 : r.isValid) {
            var l = r.id;
            if (null != n && n.isValid) {
                var s = n.id;
                this._boardTileId = l;
                this._slotbarTileId = s;
                r.isHint = true;
                n.isHint = true;
                var d = e.addParallelParentNode();
                e.addParallelNode(d, new Tile2HitTipsEffect_1.Tile2HitTipsEffect({
                    isClearHit: false,
                    tileId1: l,
                    tileId2: s
                }));
                var c = e.addParallelParentNode();
                e.addParallelNode(c, new Tile2GuideEffect_1.Tile2GuideEffect({
                    status: "active",
                    guideStep: t.guideStep,
                    boardTileId: l,
                    slotbarTileId: s,
                    isShowHand: t.isShowHand,
                    isShowSkip: t.isShowSkip,
                    text: null !== (i = t.text) && void 0 !== i ? i : "",
                    isGrayGuide: t.isGrayGuide,
                    textPos: t.textPos
                }));
            }
            else {
                this._boardTileId = l;
                this._slotbarTileId = null;
                r.isHint = true;
                var p = e.addParallelParentNode();
                e.addParallelNode(p, new Tile2GuideEffect_1.Tile2GuideEffect({
                    status: "active",
                    guideStep: t.guideStep,
                    boardTileId: l,
                    isShowHand: t.isShowHand,
                    isShowSkip: t.isShowSkip,
                    text: null !== (o = t.text) && void 0 !== o ? o : "",
                    isGrayGuide: t.isGrayGuide,
                    textPos: t.textPos
                }));
            }
        }
    };
    Tile2GuideTrait.prototype._advanceGuideStep = function (e, t, i, o) {
        var a, n;
        this.localData.guideStep = (null !== (a = this.localData.guideStep) && void 0 !== a ? a : 0) + 1;
        var l = this.getCurrentGuideData();
        if (l) {
            var s = e.tileMapObject;
            if (this._stepUsesRuntimeTargets(l)) {
                if (!this._prepareGuideStepAndMaterialize(t, s, l, i))
                    return;
            }
            else {
                var d = this._resolveTileByPosOrId(s, l.boardTileId);
                if (!d)
                    return;
                var c = null;
                if (l.slotbarTileId && !(c = this._resolveTileByPosOrId(s, l.slotbarTileId)))
                    return;
                this._boardTileId = d.id;
                this._slotbarTileId = null !== (n = null == c ? void 0 : c.id) && void 0 !== n ? n : null;
                this._isGuideActive = true;
                this._materializedGuideData = Object.assign(Object.assign({}, l), {
                    slotbarTileIdList: l.slotbarTileIdList,
                    boardTileId: d.saveKey(),
                    slotbarTileId: c ? c.saveKey() : void 0,
                    dynamicChooseCountToSlot: void 0,
                    dynamicChooseBoardAndSlotID: void 0
                });
            }
            this._pushStepGuide(e, this._materializedGuideData);
            this._boardTileId && o(this._slotbarTileId ? [this._boardTileId, this._slotbarTileId] : [this._boardTileId]);
        }
    };
    Tile2GuideTrait.prototype._stepUsesRuntimeTargets = function (e) {
        return !!(e.dynamicChooseBoardAndSlotID || this._getDynamicSlotCount(e) > 0);
    };
    Tile2GuideTrait.prototype._getDynamicSlotCount = function (e) {
        var t = e.dynamicChooseCountToSlot;
        return "number" == typeof t && t > 0 ? Math.floor(t) : true === t ? Tile2GuideTrait_1._DEFAULT_DYNAMIC_SLOT_COUNT : 0;
    };
    Tile2GuideTrait.prototype._prepareGuideStepAndMaterialize = function (e, t, o, a) {
        var n, l, c, u, p, h, f, v = [], _ = null, T = o.slotbarTileIdList, y = this._getDynamicSlotCount(o), g = null !== (u = null === (c = e.slotBarIds) || void 0 === c ? void 0 : c.length) && void 0 !== u ? u : 0;
        if (null == T ? void 0 : T.length)
            try {
                for (var b = __values(T), S = b.next(); !S.done; S = b.next()) {
                    var I = S.value, G = this._resolveTileByPosOrId(t, I);
                    if (!G)
                        return false;
                    v.push(G);
                }
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    S && !S.done && (l = b.return) && l.call(b);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
        else if (y > 0) {
            if (g > 0)
                return false;
            if (y !== Tile2GuideTrait_1._DEFAULT_DYNAMIC_SLOT_COUNT)
                return false;
            var m = this._selectSlotbarTilesForGuide(t);
            if (!m)
                return false;
            v.push.apply(v, __spreadArrays(m.slotTiles));
            _ = {
                boardHighlightId: m.boardHighlightId,
                slotbarHighlightId: m.slotbarHighlightId
            };
        }
        else if (!o.dynamicChooseBoardAndSlotID)
            return false;
        v.forEach(function (t, i) {
            t.addToSlotBar(i);
            e.addSlotBarId(t.saveKey(), i);
        });
        t.updateCanMatchTiles();
        if (_ && o.dynamicChooseBoardAndSlotID) {
            h = t.getTileObject(_.boardHighlightId);
            f = t.getTileObject(_.slotbarHighlightId);
            if (!(null == h ? void 0 : h.isValid) || !(null == f ? void 0 : f.isValid))
                return false;
        }
        else if (o.dynamicChooseBoardAndSlotID) {
            var w = null == a ? void 0 : a();
            if (!(null == w ? void 0 : w.clearId1) || !(null == w ? void 0 : w.clearId2))
                return false;
            var B = t.getTileObject(w.clearId1), O = t.getTileObject(w.clearId2);
            if (!(null == B ? void 0 : B.isValid) || !(null == O ? void 0 : O.isValid))
                return false;
            var x = B.getIsInSlotBar(), L = O.getIsInSlotBar();
            if (x && !L) {
                f = B;
                h = O;
            }
            else if (!x && L) {
                f = O;
                h = B;
            }
            else {
                h = B;
                f = O;
            }
        }
        else {
            if (!(h = this._resolveTileByPosOrId(t, o.boardTileId)))
                return false;
            if (o.slotbarTileId) {
                if (!(f = this._resolveTileByPosOrId(t, o.slotbarTileId)))
                    return false;
            }
            else
                f = null;
        }
        this._boardTileId = h.id;
        this._slotbarTileId = null !== (p = null == f ? void 0 : f.id) && void 0 !== p ? p : null;
        this._isGuideActive = true;
        var P = v.map(function (e) {
            return e.saveKey();
        });
        this._materializedGuideData = Object.assign(Object.assign({}, o), {
            slotbarTileIdList: P,
            boardTileId: h.saveKey(),
            slotbarTileId: f ? f.saveKey() : void 0,
            dynamicChooseCountToSlot: void 0,
            dynamicChooseBoardAndSlotID: void 0
        });
        return true;
    };
    Tile2GuideTrait.prototype._selectSlotbarTilesForGuide = function (e) {
        var t, i;
        e.updateCanMatchTiles();
        var o = e.getAllCardTiles().filter(function (e) {
            return e.isValid && !e.getIsInSlotBar();
        }), a = new Map();
        try {
            for (var r = __values(o), n = r.next(); !n.done; n = r.next()) {
                var l = n.value;
                a.has(l.cardId) || a.set(l.cardId, {
                    accessible: [],
                    locked: []
                });
                var s = a.get(l.cardId);
                if (0 === e.isCardLock(l)) {
                    s.accessible.push(l);
                }
                else {
                    s.locked.push(l);
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
                n && !n.done && (i = r.return) && i.call(r);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var c = [];
        a.forEach(function (e) {
            e.accessible.length >= 1 && e.locked.length >= 1 && c.push({
                boardTile: e.accessible[0],
                slotTile: e.locked[0]
            });
        });
        if (c.length < 2)
            return null;
        var u = c[0], p = c[1], h = null;
        a.forEach(function (e, t) {
            h || t !== u.slotTile.cardId && t !== p.slotTile.cardId && e.locked.length >= 1 && (h = e.locked[0]);
        });
        return h ? {
            slotTiles: [u.slotTile, p.slotTile, h],
            boardHighlightId: u.boardTile.id,
            slotbarHighlightId: u.slotTile.id
        } : null;
    };
    var Tile2GuideTrait_1;
    Tile2GuideTrait.traitKey = "Tile2Guide";
    Tile2GuideTrait._DEFAULT_DYNAMIC_SLOT_COUNT = 3;
    Tile2GuideTrait = Tile2GuideTrait_1 = __decorate([
        mj.trait,
        mj.class("Tile2GuideTrait")
    ], Tile2GuideTrait);
    return Tile2GuideTrait;
}(Trait_1.default));
exports.default = Tile2GuideTrait;

cc._RF.pop();