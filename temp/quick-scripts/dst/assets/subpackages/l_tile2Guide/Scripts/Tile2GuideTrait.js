
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2Guide/Scripts/Tile2GuideTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyR3VpZGUvU2NyaXB0cy9UaWxlMkd1aWRlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRiwwRUFBeUU7QUFDekUsb0VBQW1FO0FBQ25FLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsMkRBQTBEO0FBQzFELHVEQUFzRDtBQUN0RCw4RUFBNkU7QUFDN0Usc0VBQWlFO0FBQ2pFLDJFQUFzRTtBQUd0RTtJQUE2QyxtQ0FBSztJQUFsRDtRQUFBLHFFQTJlQztRQTFlQyxjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2Isa0JBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLHNCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsb0JBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsb0JBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQiw0QkFBc0IsR0FBRyxLQUFLLENBQUM7UUFDL0Isa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsNEJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLG9CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLHVCQUFpQixHQUFHLElBQUksQ0FBQzs7SUErZDNCLENBQUM7d0JBM2VvQixlQUFlO0lBZWxDLGdDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDeEUsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM5SSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUNsQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUN2QixJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLE1BQU07Z0JBQUUsQ0FBQztpQkFBSztnQkFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDbkM7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLGlCQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuRSxpQ0FBZSxDQUFDLGdCQUFnQixDQUFDLG1DQUFnQixDQUFDLFVBQVUsRUFBRSx1Q0FBa0IsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLG9CQUFvQjthQUM1QixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCwyQ0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQzVCLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMscUJBQXFCLENBQUMsMEJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDOUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUM3QixtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsMkNBQWlCLEdBQWpCLFVBQWtCLENBQUM7UUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDBDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ04sWUFBWSxFQUFFLEtBQUs7WUFDbkIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsUUFBUSxFQUFFLENBQUM7b0JBQ1QsU0FBUyxFQUFFLENBQUM7b0JBQ1osaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztvQkFDOUMsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixnQkFBZ0IsRUFBRSxJQUFJO29CQUN0QixXQUFXLEVBQUUsT0FBTztvQkFDcEIsYUFBYSxFQUFFLE9BQU87b0JBQ3RCLFVBQVUsRUFBRSxPQUFPO29CQUNuQixJQUFJLEVBQUUscUJBQVcsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUM7b0JBQ2hELHlCQUF5QixFQUFFLElBQUk7aUJBQ2hDLENBQUM7U0FDSCxDQUFDO1FBQ0YsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ04sWUFBWSxFQUFFLEtBQUs7WUFDbkIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO1FBQ0YsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ04sWUFBWSxFQUFFLElBQUk7WUFDbEIsU0FBUyxFQUFFLElBQUk7WUFDZixRQUFRLEVBQUUsQ0FBQztvQkFDVCxTQUFTLEVBQUUsQ0FBQztvQkFDWix3QkFBd0IsRUFBRSxDQUFDO29CQUMzQiwyQkFBMkIsRUFBRSxJQUFJO29CQUNqQyxVQUFVLEVBQUUsS0FBSztvQkFDakIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLGdCQUFnQixFQUFFLElBQUk7b0JBQ3RCLFVBQVUsRUFBRSxPQUFPO29CQUNuQixJQUFJLEVBQUUsRUFBRTtpQkFDVCxDQUFDO1NBQ0gsQ0FBQztRQUNGLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRztZQUNOLFlBQVksRUFBRSxLQUFLO1lBQ25CLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFFBQVEsRUFBRSxDQUFDO29CQUNULFNBQVMsRUFBRSxDQUFDO29CQUNaLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDO29CQUM1QixVQUFVLEVBQUUsS0FBSztvQkFDakIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLGdCQUFnQixFQUFFLElBQUk7b0JBQ3RCLFdBQVcsRUFBRSxPQUFPO29CQUNwQixVQUFVLEVBQUUsT0FBTztvQkFDbkIsSUFBSSxFQUFFLHFCQUFXLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO29CQUMxQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7b0JBQ3ZCLHlCQUF5QixFQUFFLElBQUk7aUJBQ2hDLENBQUM7U0FDSCxDQUFDO1FBQ0YsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ04sWUFBWSxFQUFFLEtBQUs7WUFDbkIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsUUFBUSxFQUFFLENBQUM7b0JBQ1QsU0FBUyxFQUFFLENBQUM7b0JBQ1osaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztvQkFDOUMsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLFVBQVUsRUFBRSxLQUFLO29CQUNqQixVQUFVLEVBQUUsT0FBTztpQkFDcEIsQ0FBQztTQUNILENBQUM7UUFDRixPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztJQUNKLENBQUM7SUFDRCw2Q0FBbUIsR0FBbkI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNySixDQUFDO0lBQ0QsaURBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNYLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUNqQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUNwQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBSywwQkFBVSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUMxRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUFFLENBQUMsRUFBRSxDQUFDO2lCQUFLO2dCQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUNoQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO3dCQUM1QyxPQUFPLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUNsRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDVDtxQkFBTTtvQkFDTCxDQUFDLEVBQUUsQ0FBQztpQkFDTDthQUNGO1NBQ0Y7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsNENBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDVCxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQzVCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNqRCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxJQUFJLG1DQUFnQixDQUFDO2dCQUN4QyxNQUFNLEVBQUUsTUFBTTtnQkFDZCxZQUFZLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO2dCQUM3RixTQUFTLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO2FBQ3hGLENBQUMsQ0FBQyxDQUFDO1NBQ0w7UUFDRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCw4Q0FBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxJQUFJLG1DQUFnQixDQUFDO2dCQUN4QyxNQUFNLEVBQUUsVUFBVTthQUNuQixDQUFDLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLENBQUMsRUFBRSxDQUFDO1NBQ0w7YUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDcEMsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzdGLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoQztnQkFDRCxDQUFDLEVBQUUsQ0FBQzthQUNMOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELDhDQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNYLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNYLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNqQyxJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQzlDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUNsRyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMseUJBQXlCLENBQUMsRUFBRTtvQkFDL0QsSUFBSSxDQUFDLENBQUMsRUFBRTt3QkFDTixDQUFDLEVBQUUsQ0FBQzt3QkFDSixPQUFPO3FCQUNSO29CQUNELElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUM1QyxDQUFDLEVBQUUsQ0FBQzt3QkFDSixPQUFPO3FCQUNSO2lCQUNGO3FCQUFNLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ2xDLENBQUMsQ0FBQzt3QkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTt3QkFDMUMsT0FBTyxFQUFFLElBQUk7cUJBQ2QsQ0FBQyxDQUFDO29CQUNILE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNWLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUU7b0JBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUNsQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxJQUFJLG1DQUFnQixDQUFDO3dCQUN4QyxNQUFNLEVBQUUsTUFBTTtxQkFDZixDQUFDLENBQUMsQ0FBQztpQkFDTDtnQkFDRCxJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO3dCQUN6QyxPQUFPLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUNsRCxDQUFDLEVBQUUsVUFBVSxDQUFDO3dCQUNaLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7O29CQUFNLE9BQU8sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQy9GLENBQUMsRUFBRSxDQUFDO2FBQ0w7O2dCQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsaURBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7WUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDWCxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDekMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNsRCxDQUFDLEVBQUUsVUFBVSxDQUFDO2dCQUNaLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsbURBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDZDQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUM1QixJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDakUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQzNJO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsK0NBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDeEUsQ0FBQztJQUNELHdDQUFjLEdBQWQsVUFBZSxDQUFDLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQ25CLENBQUMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFDaEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDOUUsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2IsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUNsQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxJQUFJLHVDQUFrQixDQUFDO29CQUMxQyxVQUFVLEVBQUUsS0FBSztvQkFDakIsT0FBTyxFQUFFLENBQUM7b0JBQ1YsT0FBTyxFQUFFLENBQUM7aUJBQ1gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLElBQUksbUNBQWdCLENBQUM7b0JBQ3hDLE1BQU0sRUFBRSxRQUFRO29CQUNoQixTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVM7b0JBQ3RCLFdBQVcsRUFBRSxDQUFDO29CQUNkLGFBQWEsRUFBRSxDQUFDO29CQUNoQixVQUFVLEVBQUUsQ0FBQyxDQUFDLFVBQVU7b0JBQ3hCLFVBQVUsRUFBRSxDQUFDLENBQUMsVUFBVTtvQkFDeEIsSUFBSSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3BELFdBQVcsRUFBRSxDQUFDLENBQUMsV0FBVztvQkFDMUIsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO2lCQUNuQixDQUFDLENBQUMsQ0FBQzthQUNMO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUNsQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxJQUFJLG1DQUFnQixDQUFDO29CQUN4QyxNQUFNLEVBQUUsUUFBUTtvQkFDaEIsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTO29CQUN0QixXQUFXLEVBQUUsQ0FBQztvQkFDZCxVQUFVLEVBQUUsQ0FBQyxDQUFDLFVBQVU7b0JBQ3hCLFVBQVUsRUFBRSxDQUFDLENBQUMsVUFBVTtvQkFDeEIsSUFBSSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3BELFdBQVcsRUFBRSxDQUFDLENBQUMsV0FBVztvQkFDMUIsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO2lCQUNuQixDQUFDLENBQUMsQ0FBQzthQUNMO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsMkNBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUN4QixJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQUUsT0FBTzthQUMvRDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLENBQUM7b0JBQUUsT0FBTztnQkFDZixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQUUsT0FBTztnQkFDckYsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtvQkFDaEUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQjtvQkFDdEMsV0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUN2Qyx3QkFBd0IsRUFBRSxLQUFLLENBQUM7b0JBQ2hDLDJCQUEyQixFQUFFLEtBQUssQ0FBQztpQkFDcEMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1NBQzlHO0lBQ0gsQ0FBQztJQUNELGlEQUF1QixHQUF2QixVQUF3QixDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDJCQUEyQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBQ0QsOENBQW9CLEdBQXBCLFVBQXFCLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLHdCQUF3QixDQUFDO1FBQ25DLE9BQU8sUUFBUSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFlLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0SCxDQUFDO0lBQ0QseURBQStCLEdBQS9CLFVBQWdDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLEVBQUUsRUFDTixDQUFDLEdBQUcsSUFBSSxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQ3ZCLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQ2hDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtZQUFFLElBQUk7Z0JBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ2IsQ0FBQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxDQUFDO3dCQUFFLE9BQU8sS0FBSyxDQUFDO29CQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNYO2FBQ0Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixDQUFDLEdBQUc7b0JBQ0YsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQzthQUNIO29CQUFTO2dCQUNSLElBQUk7b0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7d0JBQVM7b0JBQ1IsSUFBSSxDQUFDO3dCQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDdEI7YUFDRjthQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLGlCQUFlLENBQUMsMkJBQTJCO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUssQ0FBQztZQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNsQyxDQUFDLEdBQUc7Z0JBQ0YsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQjtnQkFDcEMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQjthQUN6QyxDQUFDO1NBQ0g7YUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLDJCQUEyQixFQUFFO1lBQ3RDLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1NBQzFGO2FBQU0sSUFBSSxDQUFDLENBQUMsMkJBQTJCLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1lBQzNGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUNqQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFDekYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNYLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNQO2lCQUFNLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDUDtpQkFBTTtnQkFDTCxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDUDtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFDdEUsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFO2dCQUNuQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQUUsT0FBTyxLQUFLLENBQUM7YUFDekU7O2dCQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDakI7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDaEUsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQixXQUFXLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN4QixhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN2Qyx3QkFBd0IsRUFBRSxLQUFLLENBQUM7WUFDaEMsMkJBQTJCLEVBQUUsS0FBSyxDQUFDO1NBQ3BDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELHFEQUEyQixHQUEzQixVQUE0QixDQUFDO1FBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUMsRUFDRixDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUNqQyxVQUFVLEVBQUUsRUFBRTtvQkFDZCxNQUFNLEVBQUUsRUFBRTtpQkFDWCxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3pCLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0QjtxQkFBTTtvQkFDTCxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbEI7YUFDRjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDbkIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN6RCxTQUFTLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUN0QixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNYLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUN0QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1QsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUN0QyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDaEMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1NBQ2xDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7O0lBN2RNLHdCQUFRLEdBQUcsWUFBWSxDQUFDO0lBQ3hCLDJDQUEyQixHQUFHLENBQUMsQ0FBQztJQWRwQixlQUFlO1FBRm5DLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztPQUNQLGVBQWUsQ0EyZW5DO0lBQUQsc0JBQUM7Q0EzZUQsQUEyZUMsQ0EzZTRDLGVBQUssR0EyZWpEO2tCQTNlb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgVGlsZTJIaXRUaXBzRWZmZWN0IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9UaWxlMkhpdFRpcHNFZmZlY3QnO1xuaW1wb3J0IHsgQmVoYXZpb3JGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9CZWhhdmlvckZhY3RvcnknO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IFRpbGUyR3VpZGVCZWhhdmlvciB9IGZyb20gJy4vVGlsZTJHdWlkZUJlaGF2aW9yJztcbmltcG9ydCB7IFRpbGUyR3VpZGVFZmZlY3QgfSBmcm9tICcuL1RpbGUyR3VpZGVFZmZlY3QnO1xuaW1wb3J0IHsgQmVoYXZpb3JzTWFwcGluZyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvbWFwcGluZy9CZWhhdmlvcnNNYXBwaW5nJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyR3VpZGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJHdWlkZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfbGV2ZWxJZCA9IDE7XG4gIF9ndWlkZUxldmVscyA9IFsxXTtcbiAgX2d1aWRlTGV2ZWxUeXBlcyA9IFsxXTtcbiAgX21heEd1aWRlTGV2ZWwgPSAxO1xuICBfaXNHdWlkZUFjdGl2ZSA9IGZhbHNlO1xuICBfaXNHdWlkZSA9IGZhbHNlO1xuICBfcGVuZGluZ0FkdmFuY2VPbkNsZWFyID0gZmFsc2U7XG4gIF9ib2FyZFRpbGVJZCA9IG51bGw7XG4gIF9zbG90YmFyVGlsZUlkID0gbnVsbDtcbiAgX21hdGVyaWFsaXplZEd1aWRlRGF0YSA9IG51bGw7XG4gIGxldmVsR3VpZGVUeXBlID0gMTtcbiAgX2N1cnJlbnRHdWlkZUxpc3QgPSBudWxsO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbGUyR3VpZGVcIjtcbiAgc3RhdGljIF9ERUZBVUxUX0RZTkFNSUNfU0xPVF9DT1VOVCA9IDM7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgdCwgaTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB2b2lkIDAgPT09IHRoaXMubG9jYWxEYXRhLmZpbmlzaGVkICYmICh0aGlzLmxvY2FsRGF0YS5maW5pc2hlZCA9IGZhbHNlKTtcbiAgICB2b2lkIDAgPT09IHRoaXMubG9jYWxEYXRhLmd1aWRlU3RlcCAmJiAodGhpcy5sb2NhbERhdGEuZ3VpZGVTdGVwID0gMCk7XG4gICAgdmFyIG8gPSB0aGlzLl90cmFpdERhdGEgfHwge307XG4gICAgaWYgKChudWxsID09PSAodCA9IG8uZ3VpZGVMZXZlbCkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5sZW5ndGgpICYmIChudWxsID09PSAoaSA9IG8uZ3VpZGVMZXZlbFR5cGUpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkubGVuZ3RoKSkge1xuICAgICAgdmFyIGEgPSBvLmd1aWRlTGV2ZWwsXG4gICAgICAgIHIgPSBvLmd1aWRlTGV2ZWxUeXBlO1xuICAgICAgaWYgKGEubGVuZ3RoICE9PSByLmxlbmd0aCkgO2Vsc2Uge1xuICAgICAgICB0aGlzLl9ndWlkZUxldmVscyA9IGEuc2xpY2UoKTtcbiAgICAgICAgdGhpcy5fZ3VpZGVMZXZlbFR5cGVzID0gci5zbGljZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9ndWlkZUxldmVscyA9IFsxXTtcbiAgICAgIHRoaXMuX2d1aWRlTGV2ZWxUeXBlcyA9IFsyXTtcbiAgICB9XG4gICAgdGhpcy5fbWF4R3VpZGVMZXZlbCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIFsuLi50aGlzLl9ndWlkZUxldmVsc10pO1xuICAgIEJlaGF2aW9yRmFjdG9yeS5yZWdpc3RlckJlaGF2aW9yKEJlaGF2aW9yc01hcHBpbmcuVGlsZTJHdWlkZSwgVGlsZTJHdWlkZUJlaGF2aW9yKTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoW3tcbiAgICAgIGV2ZW50OiBcIklwdFQyRXRBbkZpX2V4Y3V0ZVwiXG4gICAgfV0pO1xuICB9XG4gIG9uTG9naW5NX3Nob3dMb2FkKGUsIHQpIHtcbiAgICBpZiAoIXRoaXMubG9jYWxEYXRhLmZpbmlzaGVkKSB7XG4gICAgICB2YXIgaSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShNakdhbWVUeXBlLlRpbGUyTm9ybWFsKTtcbiAgICAgIGlmIChpICYmIGkuZ2V0TGV2ZWxJZCgpIDw9IHRoaXMuX21heEd1aWRlTGV2ZWwpIHtcbiAgICAgICAgaS5zYXZlTGV2ZWxEYXRhKFwiXCIpO1xuICAgICAgICBpLnNldExldmVsSWQoMSk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvY2FsRGF0YS5ndWlkZVN0ZXAgPSAwO1xuICAgICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuc2V0R3VpZGVGaW5pc2hlZChmYWxzZSk7XG4gICAgICB0aGlzLl9pc0d1aWRlID0gdHJ1ZTtcbiAgICB9XG4gICAgdCgpO1xuICB9XG4gIHNldExldmVsR3VpZGVUeXBlKGUpIHtcbiAgICB0aGlzLmxldmVsR3VpZGVUeXBlID0gZTtcbiAgfVxuICBnZXRHdWlkZURhdGFMaXN0KCkge1xuICAgIHZhciB0O1xuICAgIHZhciBfZSA9IHt9O1xuICAgIF9lWzFdID0ge1xuICAgICAgaXNTaG93Qm90dG9tOiBmYWxzZSxcbiAgICAgIGlzU2hvd1NldDogZmFsc2UsXG4gICAgICBkYXRhTGlzdDogW3tcbiAgICAgICAgZ3VpZGVTdGVwOiAwLFxuICAgICAgICBzbG90YmFyVGlsZUlkTGlzdDogW1wiNC0zLTBcIiwgXCI0LTctMFwiLCBcIjQtNS0yXCJdLFxuICAgICAgICBpc1Nob3dTa2lwOiBmYWxzZSxcbiAgICAgICAgaXNTaG93SGFuZDogdHJ1ZSxcbiAgICAgICAgaXNUb3VjaEhpZGVHdWlkZTogdHJ1ZSxcbiAgICAgICAgYm9hcmRUaWxlSWQ6IFwiMy01LTFcIixcbiAgICAgICAgc2xvdGJhclRpbGVJZDogXCI0LTMtMFwiLFxuICAgICAgICBmaW5pc2hUeXBlOiBcImNsZWFyXCIsXG4gICAgICAgIHRleHQ6IEkxOE5TdHJpbmdzLmdldChcIlRpbGUzX0d1aWRlX2NvbG9yX3RleHQxXCIpLFxuICAgICAgICBhbGxvd090aGVyVGlsZXNXaGlsZUd1aWRlOiB0cnVlXG4gICAgICB9XVxuICAgIH07XG4gICAgX2VbMl0gPSB7XG4gICAgICBpc1Nob3dCb3R0b206IGZhbHNlLFxuICAgICAgaXNTaG93U2V0OiBmYWxzZSxcbiAgICAgIGRhdGFMaXN0OiBbXVxuICAgIH07XG4gICAgX2VbM10gPSB7XG4gICAgICBpc1Nob3dCb3R0b206IHRydWUsXG4gICAgICBpc1Nob3dTZXQ6IHRydWUsXG4gICAgICBkYXRhTGlzdDogW3tcbiAgICAgICAgZ3VpZGVTdGVwOiAwLFxuICAgICAgICBkeW5hbWljQ2hvb3NlQ291bnRUb1Nsb3Q6IDMsXG4gICAgICAgIGR5bmFtaWNDaG9vc2VCb2FyZEFuZFNsb3RJRDogdHJ1ZSxcbiAgICAgICAgaXNTaG93U2tpcDogZmFsc2UsXG4gICAgICAgIGlzU2hvd0hhbmQ6IHRydWUsXG4gICAgICAgIGlzVG91Y2hIaWRlR3VpZGU6IHRydWUsXG4gICAgICAgIGZpbmlzaFR5cGU6IFwiY2xlYXJcIixcbiAgICAgICAgdGV4dDogXCJcIlxuICAgICAgfV1cbiAgICB9O1xuICAgIF9lWzRdID0ge1xuICAgICAgaXNTaG93Qm90dG9tOiBmYWxzZSxcbiAgICAgIGlzU2hvd1NldDogZmFsc2UsXG4gICAgICBkYXRhTGlzdDogW3tcbiAgICAgICAgZ3VpZGVTdGVwOiAwLFxuICAgICAgICBzbG90YmFyVGlsZUlkTGlzdDogW1wiNS0zLTFcIl0sXG4gICAgICAgIGlzU2hvd1NraXA6IGZhbHNlLFxuICAgICAgICBpc1Nob3dIYW5kOiB0cnVlLFxuICAgICAgICBpc1RvdWNoSGlkZUd1aWRlOiB0cnVlLFxuICAgICAgICBib2FyZFRpbGVJZDogXCIzLTMtMVwiLFxuICAgICAgICBmaW5pc2hUeXBlOiBcImNsZWFyXCIsXG4gICAgICAgIHRleHQ6IEkxOE5TdHJpbmdzLmdldChcIlRpbGU0X0d1aWRlX3RleHQxXCIpLFxuICAgICAgICB0ZXh0UG9zOiBjYy52MigwLCAtNDgwKSxcbiAgICAgICAgYWxsb3dPdGhlclRpbGVzV2hpbGVHdWlkZTogdHJ1ZVxuICAgICAgfV1cbiAgICB9O1xuICAgIF9lWzVdID0ge1xuICAgICAgaXNTaG93Qm90dG9tOiBmYWxzZSxcbiAgICAgIGlzU2hvd1NldDogZmFsc2UsXG4gICAgICBkYXRhTGlzdDogW3tcbiAgICAgICAgZ3VpZGVTdGVwOiAwLFxuICAgICAgICBzbG90YmFyVGlsZUlkTGlzdDogW1wiMy02LTBcIiwgXCI0LTItMFwiLCBcIjUtNi0wXCJdLFxuICAgICAgICBpc1Nob3dTa2lwOiBmYWxzZSxcbiAgICAgICAgaXNTaG93SGFuZDogZmFsc2UsXG4gICAgICAgIGZpbmlzaFR5cGU6IFwiY2xlYXJcIlxuICAgICAgfV1cbiAgICB9O1xuICAgIHJldHVybiBudWxsICE9PSAodCA9IF9lW3RoaXMubGV2ZWxHdWlkZVR5cGVdKSAmJiB2b2lkIDAgIT09IHQgPyB0IDoge1xuICAgICAgZGF0YUxpc3Q6IFtdXG4gICAgfTtcbiAgfVxuICBnZXRDdXJyZW50R3VpZGVEYXRhKCkge1xuICAgIHZhciBlLCB0O1xuICAgIHJldHVybiBudWxsICE9PSAodCA9IHRoaXMuZ2V0R3VpZGVEYXRhTGlzdCgpLmRhdGFMaXN0W251bGwgIT09IChlID0gdGhpcy5sb2NhbERhdGEuZ3VpZGVTdGVwKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMF0pICYmIHZvaWQgMCAhPT0gdCA/IHQgOiBudWxsO1xuICB9XG4gIG9uSXB0VDJJbml0U2xvdEJhcl9leGVjKGUsIHQpIHtcbiAgICB0aGlzLl9pc0d1aWRlQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5fYm9hcmRUaWxlSWQgPSBudWxsO1xuICAgIHRoaXMuX3Nsb3RiYXJUaWxlSWQgPSBudWxsO1xuICAgIHRoaXMuX21hdGVyaWFsaXplZEd1aWRlRGF0YSA9IG51bGw7XG4gICAgdGhpcy5fcGVuZGluZ0FkdmFuY2VPbkNsZWFyID0gZmFsc2U7XG4gICAgdmFyIGkgPSBlLmlucyxcbiAgICAgIG8gPSBpLmdhbWVDb250ZXh0LFxuICAgICAgYSA9IG8uZ2V0R2FtZURhdGEoKSxcbiAgICAgIHIgPSBvLmdldElzTmV3R2FtZSgpLFxuICAgICAgbiA9IGEuZ2V0TGV2ZWxJZCgpO1xuICAgIGlmIChvLmdhbWVUeXBlID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsICYmIHIgJiYgIXRoaXMubG9jYWxEYXRhLmZpbmlzaGVkKSB7XG4gICAgICB2YXIgbCA9IHRoaXMuX2d1aWRlTGV2ZWxzLmluZGV4T2Yobik7XG4gICAgICBpZiAobCA8IDApIHQoKTtlbHNlIHtcbiAgICAgICAgdGhpcy5sZXZlbEd1aWRlVHlwZSA9IHRoaXMuX2d1aWRlTGV2ZWxUeXBlc1tsXTtcbiAgICAgICAgdGhpcy5fY3VycmVudEd1aWRlTGlzdCA9IHRoaXMuZ2V0R3VpZGVEYXRhTGlzdCgpO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5ndWlkZVN0ZXAgPSAwO1xuICAgICAgICB2YXIgcyA9IHRoaXMuZ2V0Q3VycmVudEd1aWRlRGF0YSgpLFxuICAgICAgICAgIGQgPSBpLnRpbGVNYXBPYmplY3Q7XG4gICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgdGhpcy5fcHJlcGFyZUd1aWRlU3RlcEFuZE1hdGVyaWFsaXplKGEsIGQsIHMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBvLnRpbGUySGl0VGlwc0NoZWNrZXIuY29tcHV0ZVRpbGUySGludCgpO1xuICAgICAgICAgIH0pLCB0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbklwdFQyRXRBbl9leGN1dGUoZSwgdCkge1xuICAgIHZhciBpLFxuICAgICAgbyxcbiAgICAgIGEgPSBlLmlucyxcbiAgICAgIHIgPSBhLmFkZFBhcmFsbGVsUGFyZW50Tm9kZSgpO1xuICAgIGlmICghdGhpcy5sb2NhbERhdGEuZmluaXNoZWQpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRHdWlkZUxpc3QgPSB0aGlzLmdldEd1aWRlRGF0YUxpc3QoKTtcbiAgICAgIGEuYWRkUGFyYWxsZWxOb2RlKHIsIG5ldyBUaWxlMkd1aWRlRWZmZWN0KHtcbiAgICAgICAgc3RhdHVzOiBcImluaXRcIixcbiAgICAgICAgaXNTaG93Qm90dG9tOiBudWxsID09PSAoaSA9IHRoaXMuX2N1cnJlbnRHdWlkZUxpc3QpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuaXNTaG93Qm90dG9tLFxuICAgICAgICBpc1Nob3dTZXQ6IG51bGwgPT09IChvID0gdGhpcy5fY3VycmVudEd1aWRlTGlzdCkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5pc1Nob3dTZXRcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgdCgpO1xuICB9XG4gIG9uSXB0VDJFdEFuRmlfZXhjdXRlKGUsIHQpIHtcbiAgICB2YXIgaSA9IGUuaW5zO1xuICAgIGlmICh0aGlzLmxvY2FsRGF0YS5maW5pc2hlZCAmJiB0aGlzLl9pc0d1aWRlKSB7XG4gICAgICB2YXIgbyA9IGkuYWRkUGFyYWxsZWxQYXJlbnROb2RlKCk7XG4gICAgICBpLmFkZFBhcmFsbGVsTm9kZShvLCBuZXcgVGlsZTJHdWlkZUVmZmVjdCh7XG4gICAgICAgIHN0YXR1czogXCJmaW5pc2hlZFwiXG4gICAgICB9KSk7XG4gICAgICB0aGlzLl9pc0d1aWRlID0gZmFsc2U7XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc0d1aWRlQWN0aXZlICYmIHRoaXMuX2JvYXJkVGlsZUlkKSB7XG4gICAgICB2YXIgYSA9IHRoaXMuX21hdGVyaWFsaXplZEd1aWRlRGF0YTtcbiAgICAgIGlmIChhKSB7XG4gICAgICAgIHRoaXMuX3B1c2hTdGVwR3VpZGUoaSwgYSk7XG4gICAgICAgIGlmICh0aGlzLl9ib2FyZFRpbGVJZCkge1xuICAgICAgICAgIHZhciByID0gdGhpcy5fc2xvdGJhclRpbGVJZCA/IFt0aGlzLl9ib2FyZFRpbGVJZCwgdGhpcy5fc2xvdGJhclRpbGVJZF0gOiBbdGhpcy5fYm9hcmRUaWxlSWRdO1xuICAgICAgICAgIGkuZ2FtZUNvbnRleHQuc2V0Q2FuSGl0VGlwcyhyKTtcbiAgICAgICAgfVxuICAgICAgICB0KCk7XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25UaWxlMklwdFRjaFN0X2V4ZWMoZSwgdCkge1xuICAgIHZhciBpO1xuICAgIGlmICh0aGlzLl9pc0d1aWRlQWN0aXZlKSB7XG4gICAgICB2YXIgbyA9IGUuaW5zLFxuICAgICAgICBhID0gby5pbnB1dCxcbiAgICAgICAgciA9IG51bGwgPT0gYSA/IHZvaWQgMCA6IGEucG9zO1xuICAgICAgaWYgKHIpIHtcbiAgICAgICAgdmFyIG4gPSBvLmdhbWVDb250ZXh0LnRpbGVTZWxlY3Rvci50b3VjaFN0YXJ0KHIpLFxuICAgICAgICAgIGwgPSBudWxsICE9PSAoaSA9IHRoaXMuX21hdGVyaWFsaXplZEd1aWRlRGF0YSkgJiYgdm9pZCAwICE9PSBpID8gaSA6IHRoaXMuZ2V0Q3VycmVudEd1aWRlRGF0YSgpO1xuICAgICAgICBpZiAodHJ1ZSA9PT0gKG51bGwgPT0gbCA/IHZvaWQgMCA6IGwuYWxsb3dPdGhlclRpbGVzV2hpbGVHdWlkZSkpIHtcbiAgICAgICAgICBpZiAoIW4pIHtcbiAgICAgICAgICAgIHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG8uZ2FtZUNvbnRleHQudGlsZUNoZWNrZXIuY2hlY2tJc0xvY2sobikpIHtcbiAgICAgICAgICAgIHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobiAhPT0gdGhpcy5fYm9hcmRUaWxlSWQpIHtcbiAgICAgICAgICB0KHtcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHMgPSBsO1xuICAgICAgICB0aGlzLl9pc0d1aWRlQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChudWxsID09IHMgPyB2b2lkIDAgOiBzLmlzVG91Y2hIaWRlR3VpZGUpIHtcbiAgICAgICAgICB2YXIgZCA9IG8uYWRkUGFyYWxsZWxQYXJlbnROb2RlKCk7XG4gICAgICAgICAgby5hZGRQYXJhbGxlbE5vZGUoZCwgbmV3IFRpbGUyR3VpZGVFZmZlY3Qoe1xuICAgICAgICAgICAgc3RhdHVzOiBcImhpZGVcIlxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJjbGlja1wiID09PSAobnVsbCA9PSBzID8gdm9pZCAwIDogcy5maW5pc2hUeXBlKSkge1xuICAgICAgICAgIHZhciBjID0gby5nYW1lQ29udGV4dDtcbiAgICAgICAgICB0aGlzLl9hZHZhbmNlR3VpZGVTdGVwKG8sIGMuZ2V0R2FtZURhdGEoKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGMudGlsZTJIaXRUaXBzQ2hlY2tlci5jb21wdXRlVGlsZTJIaW50KCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjLnNldENhbkhpdFRpcHMoZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBcImNsZWFyXCIgPT09IChudWxsID09IHMgPyB2b2lkIDAgOiBzLmZpbmlzaFR5cGUpICYmICh0aGlzLl9wZW5kaW5nQWR2YW5jZU9uQ2xlYXIgPSB0cnVlKTtcbiAgICAgICAgdCgpO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uVGlsZTJJcHRUY2hFbmRfcnVuQ2xyKGUsIHQpIHtcbiAgICBpZiAodGhpcy5fcGVuZGluZ0FkdmFuY2VPbkNsZWFyKSB7XG4gICAgICB0aGlzLl9wZW5kaW5nQWR2YW5jZU9uQ2xlYXIgPSBmYWxzZTtcbiAgICAgIHZhciBpID0gZS5pbnMsXG4gICAgICAgIG8gPSBpLmdhbWVDb250ZXh0O1xuICAgICAgdGhpcy5fYWR2YW5jZUd1aWRlU3RlcChpLCBvLmdldEdhbWVEYXRhKCksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG8udGlsZTJIaXRUaXBzQ2hlY2tlci5jb21wdXRlVGlsZTJIaW50KCk7XG4gICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gby5zZXRDYW5IaXRUaXBzKGUpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHQoKTtcbiAgfVxuICBvblQyR2FtZUN0cmxfZ2V0SXNOZXdHYW1lKGUsIHQpIHtcbiAgICB0KCk7XG4gIH1cbiAgb25UaWxlMldpbkJodl9zdGFydChlLCB0KSB7XG4gICAgdmFyIGksIG87XG4gICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuc2V0R3VpZGVGaW5pc2hlZCh0cnVlKTtcbiAgICBpZiAoIXRoaXMubG9jYWxEYXRhLmZpbmlzaGVkKSB7XG4gICAgICB2YXIgYSA9IG51bGwgPT09IChpID0gZS5pbnMpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZWZmZWN0O1xuICAgICAgKG51bGwgPT09IChvID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYS5kYXRhKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmN1ckx2KSA+IHRoaXMuX21heEd1aWRlTGV2ZWwgJiYgKHRoaXMubG9jYWxEYXRhLmZpbmlzaGVkID0gdHJ1ZSk7XG4gICAgfVxuICAgIHQoKTtcbiAgfVxuICBfcmVzb2x2ZVRpbGVCeVBvc09ySWQoZSwgdCkge1xuICAgIHJldHVybiB0ICYmIChlLmdldFRpbGVPYmplY3QodCkgfHwgZS5nZXRUaWxlT2JqZWN0QnlQb3NJZCh0KSkgfHwgbnVsbDtcbiAgfVxuICBfcHVzaFN0ZXBHdWlkZShlLCB0KSB7XG4gICAgdmFyIGksXG4gICAgICBvLFxuICAgICAgYSA9IGUudGlsZU1hcE9iamVjdCxcbiAgICAgIHIgPSB0aGlzLl9yZXNvbHZlVGlsZUJ5UG9zT3JJZChhLCB0LmJvYXJkVGlsZUlkKSxcbiAgICAgIG4gPSB0LnNsb3RiYXJUaWxlSWQgPyB0aGlzLl9yZXNvbHZlVGlsZUJ5UG9zT3JJZChhLCB0LnNsb3RiYXJUaWxlSWQpIDogbnVsbDtcbiAgICBpZiAobnVsbCA9PSByID8gdm9pZCAwIDogci5pc1ZhbGlkKSB7XG4gICAgICB2YXIgbCA9IHIuaWQ7XG4gICAgICBpZiAobnVsbCAhPSBuICYmIG4uaXNWYWxpZCkge1xuICAgICAgICB2YXIgcyA9IG4uaWQ7XG4gICAgICAgIHRoaXMuX2JvYXJkVGlsZUlkID0gbDtcbiAgICAgICAgdGhpcy5fc2xvdGJhclRpbGVJZCA9IHM7XG4gICAgICAgIHIuaXNIaW50ID0gdHJ1ZTtcbiAgICAgICAgbi5pc0hpbnQgPSB0cnVlO1xuICAgICAgICB2YXIgZCA9IGUuYWRkUGFyYWxsZWxQYXJlbnROb2RlKCk7XG4gICAgICAgIGUuYWRkUGFyYWxsZWxOb2RlKGQsIG5ldyBUaWxlMkhpdFRpcHNFZmZlY3Qoe1xuICAgICAgICAgIGlzQ2xlYXJIaXQ6IGZhbHNlLFxuICAgICAgICAgIHRpbGVJZDE6IGwsXG4gICAgICAgICAgdGlsZUlkMjogc1xuICAgICAgICB9KSk7XG4gICAgICAgIHZhciBjID0gZS5hZGRQYXJhbGxlbFBhcmVudE5vZGUoKTtcbiAgICAgICAgZS5hZGRQYXJhbGxlbE5vZGUoYywgbmV3IFRpbGUyR3VpZGVFZmZlY3Qoe1xuICAgICAgICAgIHN0YXR1czogXCJhY3RpdmVcIixcbiAgICAgICAgICBndWlkZVN0ZXA6IHQuZ3VpZGVTdGVwLFxuICAgICAgICAgIGJvYXJkVGlsZUlkOiBsLFxuICAgICAgICAgIHNsb3RiYXJUaWxlSWQ6IHMsXG4gICAgICAgICAgaXNTaG93SGFuZDogdC5pc1Nob3dIYW5kLFxuICAgICAgICAgIGlzU2hvd1NraXA6IHQuaXNTaG93U2tpcCxcbiAgICAgICAgICB0ZXh0OiBudWxsICE9PSAoaSA9IHQudGV4dCkgJiYgdm9pZCAwICE9PSBpID8gaSA6IFwiXCIsXG4gICAgICAgICAgaXNHcmF5R3VpZGU6IHQuaXNHcmF5R3VpZGUsXG4gICAgICAgICAgdGV4dFBvczogdC50ZXh0UG9zXG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2JvYXJkVGlsZUlkID0gbDtcbiAgICAgICAgdGhpcy5fc2xvdGJhclRpbGVJZCA9IG51bGw7XG4gICAgICAgIHIuaXNIaW50ID0gdHJ1ZTtcbiAgICAgICAgdmFyIHAgPSBlLmFkZFBhcmFsbGVsUGFyZW50Tm9kZSgpO1xuICAgICAgICBlLmFkZFBhcmFsbGVsTm9kZShwLCBuZXcgVGlsZTJHdWlkZUVmZmVjdCh7XG4gICAgICAgICAgc3RhdHVzOiBcImFjdGl2ZVwiLFxuICAgICAgICAgIGd1aWRlU3RlcDogdC5ndWlkZVN0ZXAsXG4gICAgICAgICAgYm9hcmRUaWxlSWQ6IGwsXG4gICAgICAgICAgaXNTaG93SGFuZDogdC5pc1Nob3dIYW5kLFxuICAgICAgICAgIGlzU2hvd1NraXA6IHQuaXNTaG93U2tpcCxcbiAgICAgICAgICB0ZXh0OiBudWxsICE9PSAobyA9IHQudGV4dCkgJiYgdm9pZCAwICE9PSBvID8gbyA6IFwiXCIsXG4gICAgICAgICAgaXNHcmF5R3VpZGU6IHQuaXNHcmF5R3VpZGUsXG4gICAgICAgICAgdGV4dFBvczogdC50ZXh0UG9zXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgX2FkdmFuY2VHdWlkZVN0ZXAoZSwgdCwgaSwgbykge1xuICAgIHZhciBhLCBuO1xuICAgIHRoaXMubG9jYWxEYXRhLmd1aWRlU3RlcCA9IChudWxsICE9PSAoYSA9IHRoaXMubG9jYWxEYXRhLmd1aWRlU3RlcCkgJiYgdm9pZCAwICE9PSBhID8gYSA6IDApICsgMTtcbiAgICB2YXIgbCA9IHRoaXMuZ2V0Q3VycmVudEd1aWRlRGF0YSgpO1xuICAgIGlmIChsKSB7XG4gICAgICB2YXIgcyA9IGUudGlsZU1hcE9iamVjdDtcbiAgICAgIGlmICh0aGlzLl9zdGVwVXNlc1J1bnRpbWVUYXJnZXRzKGwpKSB7XG4gICAgICAgIGlmICghdGhpcy5fcHJlcGFyZUd1aWRlU3RlcEFuZE1hdGVyaWFsaXplKHQsIHMsIGwsIGkpKSByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZCA9IHRoaXMuX3Jlc29sdmVUaWxlQnlQb3NPcklkKHMsIGwuYm9hcmRUaWxlSWQpO1xuICAgICAgICBpZiAoIWQpIHJldHVybjtcbiAgICAgICAgdmFyIGMgPSBudWxsO1xuICAgICAgICBpZiAobC5zbG90YmFyVGlsZUlkICYmICEoYyA9IHRoaXMuX3Jlc29sdmVUaWxlQnlQb3NPcklkKHMsIGwuc2xvdGJhclRpbGVJZCkpKSByZXR1cm47XG4gICAgICAgIHRoaXMuX2JvYXJkVGlsZUlkID0gZC5pZDtcbiAgICAgICAgdGhpcy5fc2xvdGJhclRpbGVJZCA9IG51bGwgIT09IChuID0gbnVsbCA9PSBjID8gdm9pZCAwIDogYy5pZCkgJiYgdm9pZCAwICE9PSBuID8gbiA6IG51bGw7XG4gICAgICAgIHRoaXMuX2lzR3VpZGVBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9tYXRlcmlhbGl6ZWRHdWlkZURhdGEgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGwpLCB7XG4gICAgICAgICAgc2xvdGJhclRpbGVJZExpc3Q6IGwuc2xvdGJhclRpbGVJZExpc3QsXG4gICAgICAgICAgYm9hcmRUaWxlSWQ6IGQuc2F2ZUtleSgpLFxuICAgICAgICAgIHNsb3RiYXJUaWxlSWQ6IGMgPyBjLnNhdmVLZXkoKSA6IHZvaWQgMCxcbiAgICAgICAgICBkeW5hbWljQ2hvb3NlQ291bnRUb1Nsb3Q6IHZvaWQgMCxcbiAgICAgICAgICBkeW5hbWljQ2hvb3NlQm9hcmRBbmRTbG90SUQ6IHZvaWQgMFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3B1c2hTdGVwR3VpZGUoZSwgdGhpcy5fbWF0ZXJpYWxpemVkR3VpZGVEYXRhKTtcbiAgICAgIHRoaXMuX2JvYXJkVGlsZUlkICYmIG8odGhpcy5fc2xvdGJhclRpbGVJZCA/IFt0aGlzLl9ib2FyZFRpbGVJZCwgdGhpcy5fc2xvdGJhclRpbGVJZF0gOiBbdGhpcy5fYm9hcmRUaWxlSWRdKTtcbiAgICB9XG4gIH1cbiAgX3N0ZXBVc2VzUnVudGltZVRhcmdldHMoZSkge1xuICAgIHJldHVybiAhIShlLmR5bmFtaWNDaG9vc2VCb2FyZEFuZFNsb3RJRCB8fCB0aGlzLl9nZXREeW5hbWljU2xvdENvdW50KGUpID4gMCk7XG4gIH1cbiAgX2dldER5bmFtaWNTbG90Q291bnQoZSkge1xuICAgIHZhciB0ID0gZS5keW5hbWljQ2hvb3NlQ291bnRUb1Nsb3Q7XG4gICAgcmV0dXJuIFwibnVtYmVyXCIgPT0gdHlwZW9mIHQgJiYgdCA+IDAgPyBNYXRoLmZsb29yKHQpIDogdHJ1ZSA9PT0gdCA/IFRpbGUyR3VpZGVUcmFpdC5fREVGQVVMVF9EWU5BTUlDX1NMT1RfQ09VTlQgOiAwO1xuICB9XG4gIF9wcmVwYXJlR3VpZGVTdGVwQW5kTWF0ZXJpYWxpemUoZSwgdCwgbywgYSkge1xuICAgIHZhciBuLFxuICAgICAgbCxcbiAgICAgIGMsXG4gICAgICB1LFxuICAgICAgcCxcbiAgICAgIGgsXG4gICAgICBmLFxuICAgICAgdiA9IFtdLFxuICAgICAgXyA9IG51bGwsXG4gICAgICBUID0gby5zbG90YmFyVGlsZUlkTGlzdCxcbiAgICAgIHkgPSB0aGlzLl9nZXREeW5hbWljU2xvdENvdW50KG8pLFxuICAgICAgZyA9IG51bGwgIT09ICh1ID0gbnVsbCA9PT0gKGMgPSBlLnNsb3RCYXJJZHMpIHx8IHZvaWQgMCA9PT0gYyA/IHZvaWQgMCA6IGMubGVuZ3RoKSAmJiB2b2lkIDAgIT09IHUgPyB1IDogMDtcbiAgICBpZiAobnVsbCA9PSBUID8gdm9pZCAwIDogVC5sZW5ndGgpIHRyeSB7XG4gICAgICBmb3IgKHZhciBiID0gX192YWx1ZXMoVCksIFMgPSBiLm5leHQoKTsgIVMuZG9uZTsgUyA9IGIubmV4dCgpKSB7XG4gICAgICAgIHZhciBJID0gUy52YWx1ZSxcbiAgICAgICAgICBHID0gdGhpcy5fcmVzb2x2ZVRpbGVCeVBvc09ySWQodCwgSSk7XG4gICAgICAgIGlmICghRykgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2LnB1c2goRyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbiA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIFMgJiYgIVMuZG9uZSAmJiAobCA9IGIucmV0dXJuKSAmJiBsLmNhbGwoYik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHkgPiAwKSB7XG4gICAgICBpZiAoZyA+IDApIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICh5ICE9PSBUaWxlMkd1aWRlVHJhaXQuX0RFRkFVTFRfRFlOQU1JQ19TTE9UX0NPVU5UKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgbSA9IHRoaXMuX3NlbGVjdFNsb3RiYXJUaWxlc0Zvckd1aWRlKHQpO1xuICAgICAgaWYgKCFtKSByZXR1cm4gZmFsc2U7XG4gICAgICB2LnB1c2guYXBwbHkodiwgWy4uLm0uc2xvdFRpbGVzXSk7XG4gICAgICBfID0ge1xuICAgICAgICBib2FyZEhpZ2hsaWdodElkOiBtLmJvYXJkSGlnaGxpZ2h0SWQsXG4gICAgICAgIHNsb3RiYXJIaWdobGlnaHRJZDogbS5zbG90YmFySGlnaGxpZ2h0SWRcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICghby5keW5hbWljQ2hvb3NlQm9hcmRBbmRTbG90SUQpIHJldHVybiBmYWxzZTtcbiAgICB2LmZvckVhY2goZnVuY3Rpb24gKHQsIGkpIHtcbiAgICAgIHQuYWRkVG9TbG90QmFyKGkpO1xuICAgICAgZS5hZGRTbG90QmFySWQodC5zYXZlS2V5KCksIGkpO1xuICAgIH0pO1xuICAgIHQudXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICAgIGlmIChfICYmIG8uZHluYW1pY0Nob29zZUJvYXJkQW5kU2xvdElEKSB7XG4gICAgICBoID0gdC5nZXRUaWxlT2JqZWN0KF8uYm9hcmRIaWdobGlnaHRJZCk7XG4gICAgICBmID0gdC5nZXRUaWxlT2JqZWN0KF8uc2xvdGJhckhpZ2hsaWdodElkKTtcbiAgICAgIGlmICghKG51bGwgPT0gaCA/IHZvaWQgMCA6IGguaXNWYWxpZCkgfHwgIShudWxsID09IGYgPyB2b2lkIDAgOiBmLmlzVmFsaWQpKSByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChvLmR5bmFtaWNDaG9vc2VCb2FyZEFuZFNsb3RJRCkge1xuICAgICAgdmFyIHcgPSBudWxsID09IGEgPyB2b2lkIDAgOiBhKCk7XG4gICAgICBpZiAoIShudWxsID09IHcgPyB2b2lkIDAgOiB3LmNsZWFySWQxKSB8fCAhKG51bGwgPT0gdyA/IHZvaWQgMCA6IHcuY2xlYXJJZDIpKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgQiA9IHQuZ2V0VGlsZU9iamVjdCh3LmNsZWFySWQxKSxcbiAgICAgICAgTyA9IHQuZ2V0VGlsZU9iamVjdCh3LmNsZWFySWQyKTtcbiAgICAgIGlmICghKG51bGwgPT0gQiA/IHZvaWQgMCA6IEIuaXNWYWxpZCkgfHwgIShudWxsID09IE8gPyB2b2lkIDAgOiBPLmlzVmFsaWQpKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgeCA9IEIuZ2V0SXNJblNsb3RCYXIoKSxcbiAgICAgICAgTCA9IE8uZ2V0SXNJblNsb3RCYXIoKTtcbiAgICAgIGlmICh4ICYmICFMKSB7XG4gICAgICAgIGYgPSBCO1xuICAgICAgICBoID0gTztcbiAgICAgIH0gZWxzZSBpZiAoIXggJiYgTCkge1xuICAgICAgICBmID0gTztcbiAgICAgICAgaCA9IEI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoID0gQjtcbiAgICAgICAgZiA9IE87XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghKGggPSB0aGlzLl9yZXNvbHZlVGlsZUJ5UG9zT3JJZCh0LCBvLmJvYXJkVGlsZUlkKSkpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChvLnNsb3RiYXJUaWxlSWQpIHtcbiAgICAgICAgaWYgKCEoZiA9IHRoaXMuX3Jlc29sdmVUaWxlQnlQb3NPcklkKHQsIG8uc2xvdGJhclRpbGVJZCkpKSByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgZiA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX2JvYXJkVGlsZUlkID0gaC5pZDtcbiAgICB0aGlzLl9zbG90YmFyVGlsZUlkID0gbnVsbCAhPT0gKHAgPSBudWxsID09IGYgPyB2b2lkIDAgOiBmLmlkKSAmJiB2b2lkIDAgIT09IHAgPyBwIDogbnVsbDtcbiAgICB0aGlzLl9pc0d1aWRlQWN0aXZlID0gdHJ1ZTtcbiAgICB2YXIgUCA9IHYubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5zYXZlS2V5KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fbWF0ZXJpYWxpemVkR3VpZGVEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvKSwge1xuICAgICAgc2xvdGJhclRpbGVJZExpc3Q6IFAsXG4gICAgICBib2FyZFRpbGVJZDogaC5zYXZlS2V5KCksXG4gICAgICBzbG90YmFyVGlsZUlkOiBmID8gZi5zYXZlS2V5KCkgOiB2b2lkIDAsXG4gICAgICBkeW5hbWljQ2hvb3NlQ291bnRUb1Nsb3Q6IHZvaWQgMCxcbiAgICAgIGR5bmFtaWNDaG9vc2VCb2FyZEFuZFNsb3RJRDogdm9pZCAwXG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgX3NlbGVjdFNsb3RiYXJUaWxlc0Zvckd1aWRlKGUpIHtcbiAgICB2YXIgdCwgaTtcbiAgICBlLnVwZGF0ZUNhbk1hdGNoVGlsZXMoKTtcbiAgICB2YXIgbyA9IGUuZ2V0QWxsQ2FyZFRpbGVzKCkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmlzVmFsaWQgJiYgIWUuZ2V0SXNJblNsb3RCYXIoKTtcbiAgICAgIH0pLFxuICAgICAgYSA9IG5ldyBNYXAoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgciA9IF9fdmFsdWVzKG8pLCBuID0gci5uZXh0KCk7ICFuLmRvbmU7IG4gPSByLm5leHQoKSkge1xuICAgICAgICB2YXIgbCA9IG4udmFsdWU7XG4gICAgICAgIGEuaGFzKGwuY2FyZElkKSB8fCBhLnNldChsLmNhcmRJZCwge1xuICAgICAgICAgIGFjY2Vzc2libGU6IFtdLFxuICAgICAgICAgIGxvY2tlZDogW11cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzID0gYS5nZXQobC5jYXJkSWQpO1xuICAgICAgICBpZiAoMCA9PT0gZS5pc0NhcmRMb2NrKGwpKSB7XG4gICAgICAgICAgcy5hY2Nlc3NpYmxlLnB1c2gobCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcy5sb2NrZWQucHVzaChsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBuICYmICFuLmRvbmUgJiYgKGkgPSByLnJldHVybikgJiYgaS5jYWxsKHIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBjID0gW107XG4gICAgYS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLmFjY2Vzc2libGUubGVuZ3RoID49IDEgJiYgZS5sb2NrZWQubGVuZ3RoID49IDEgJiYgYy5wdXNoKHtcbiAgICAgICAgYm9hcmRUaWxlOiBlLmFjY2Vzc2libGVbMF0sXG4gICAgICAgIHNsb3RUaWxlOiBlLmxvY2tlZFswXVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKGMubGVuZ3RoIDwgMikgcmV0dXJuIG51bGw7XG4gICAgdmFyIHUgPSBjWzBdLFxuICAgICAgcCA9IGNbMV0sXG4gICAgICBoID0gbnVsbDtcbiAgICBhLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGggfHwgdCAhPT0gdS5zbG90VGlsZS5jYXJkSWQgJiYgdCAhPT0gcC5zbG90VGlsZS5jYXJkSWQgJiYgZS5sb2NrZWQubGVuZ3RoID49IDEgJiYgKGggPSBlLmxvY2tlZFswXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGggPyB7XG4gICAgICBzbG90VGlsZXM6IFt1LnNsb3RUaWxlLCBwLnNsb3RUaWxlLCBoXSxcbiAgICAgIGJvYXJkSGlnaGxpZ2h0SWQ6IHUuYm9hcmRUaWxlLmlkLFxuICAgICAgc2xvdGJhckhpZ2hsaWdodElkOiB1LnNsb3RUaWxlLmlkXG4gICAgfSA6IG51bGw7XG4gIH1cbn0iXX0=