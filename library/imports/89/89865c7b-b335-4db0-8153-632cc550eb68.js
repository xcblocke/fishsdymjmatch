"use strict";
cc._RF.push(module, '89865x7szVNsIFTYyzFUOto', 'AllCardIsBackTrait');
// subpackages/l_normalshowback/Scripts/AllCardIsBackTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AllCardIsBackTrait = /** @class */ (function (_super) {
    __extends(AllCardIsBackTrait, _super);
    function AllCardIsBackTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameTypes = [GameTypeEnums_1.MjGameType.Normal];
        return _this;
    }
    AllCardIsBackTrait.prototype.onLoad = function () {
        var t, o;
        _super.prototype.onLoad.call(this);
        this._gameTypes = null !== (o = null === (t = this._traitData) || void 0 === t ? void 0 : t.gameTypes) && void 0 !== o ? o : [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge];
        this.localData.shuffledByGameType || (this.localData.shuffledByGameType = {});
        this.registerEvent([{
                event: "IptSetLv_newGComp",
                type: TraitEventPositionType.after
            }]);
    };
    AllCardIsBackTrait.prototype.hasShuffledForType = function (e) {
        var t;
        return true === (null === (t = this.localData.shuffledByGameType) || void 0 === t ? void 0 : t[e]);
    };
    AllCardIsBackTrait.prototype.setShuffledForType = function (e, t) {
        this.localData.shuffledByGameType || (this.localData.shuffledByGameType = {});
        this.localData.shuffledByGameType[e] = t;
        this.localData.shuffledByGameType = this.localData.shuffledByGameType;
    };
    AllCardIsBackTrait.prototype.getMessageListeners = function () {
        var _e = {};
        _e[GameEvent_1.EGameEvent.Behavior_ShuffleStayEnd] = this.onShuffleStayEndCB.bind(this);
        return _e;
    };
    AllCardIsBackTrait.prototype.shouldHandleFlip = function (e) {
        return e !== TileTypeEnum_1.ETileType.RankCard && e !== TileTypeEnum_1.ETileType.Yoga && e !== TileTypeEnum_1.ETileType.RollCard;
    };
    AllCardIsBackTrait.prototype.isBackCardLevel = function (e) {
        var t, o, i, r, a, n;
        return ((null === (n = null === (a = null === (r = null === (i = null === (o = null === (t = null == e ? void 0 : e.getTileMapObject) || void 0 === t ? void 0 : t.call(e)) || void 0 === o ? void 0 : o.gameContext) || void 0 === i ? void 0 : i.getGameData) || void 0 === r ? void 0 : r.call(i)) || void 0 === a ? void 0 : a.getTileTypes) || void 0 === n ? void 0 : n.call(a)) || "").split(",").includes(TileTypeEnum_1.ETileType.RollCard);
    };
    AllCardIsBackTrait.prototype.isGameTypeOpen = function (e) {
        return -1 !== this._gameTypes.indexOf(e);
    };
    AllCardIsBackTrait.prototype.onIptSetLv_newGComp = function (e, t) {
        var o = e.ins, i = null == o ? void 0 : o.gameContext;
        this.setShuffledForType(i.gameType, false);
        this.localData.shuffledByGameType = this.localData.shuffledByGameType;
        t();
    };
    AllCardIsBackTrait.prototype.onShuffleStayEndCB = function (e) {
        var t = null == e ? void 0 : e.context;
        t && this.isGameTypeOpen(t.gameType) && (this.isBackCardLevel(t) || this.setShuffledForType(t.gameType, true));
    };
    AllCardIsBackTrait.prototype.updateSpecialCardEffect = function (e, t, o) {
        var i = "";
        if (t === TileTypeEnum_1.ETileType.DaxiaoCard)
            i = "DaxiaoCardFlagNode";
        else {
            if (t !== TileTypeEnum_1.ETileType.DuoxiaoCard)
                return;
            i = "DuoxiaoCardFlagNode";
        }
        var r = e.tileNode;
        if (r && cc.isValid(r)) {
            var a = r.getChildByName(i);
            a && (a.active = o);
        }
    };
    AllCardIsBackTrait.prototype.onInitViewBhv_crtTls = function (e, t) {
        var o, i, r = this, a = e.ins, n = null == a ? void 0 : a.context;
        if (n) {
            if (this.isGameTypeOpen(n.gameType)) {
                if (this.isBackCardLevel(n))
                    t();
                else {
                    var l = n.gameType, p = this.hasShuffledForType(l), s = null === (o = n.getTileNodeManager) || void 0 === o ? void 0 : o.call(n);
                    ((null === (i = null == s ? void 0 : s.getTileNodes) || void 0 === i ? void 0 : i.call(s)) || []).forEach(function (e) {
                        var t, o, i, a = e.info.tileObject.type;
                        if (r.shouldHandleFlip(a)) {
                            e.updateNormalFlip();
                            if (p) {
                                null === (t = e.normalFlip) || void 0 === t || t.forceEnter();
                                r.updateSpecialCardEffect(e, a, true);
                            }
                            else if (2 === e.info.tileObject.isCardLock()) {
                                null === (o = e.normalFlip) || void 0 === o || o.forceExit();
                                r.updateSpecialCardEffect(e, a, false);
                            }
                            else {
                                null === (i = e.normalFlip) || void 0 === i || i.forceEnter();
                                r.updateSpecialCardEffect(e, a, true);
                            }
                        }
                    });
                    t();
                }
            }
            else
                t();
        }
        else
            t();
    };
    AllCardIsBackTrait.prototype.onClearBhv_collision = function (e, t) {
        var o = this, i = e.ins;
        if (this.isGameTypeOpen(i.context.gameType)) {
            if (this.isBackCardLevel(i.context))
                t();
            else if (this.hasShuffledForType(i.context.gameType))
                t();
            else {
                i.context.getTileNodeManager().getTileNodes().forEach(function (e) {
                    var t = e.info.tileObject.type;
                    if (o.shouldHandleFlip(t)) {
                        var i = e.normalFlip;
                        i && !i.hasRun && 2 !== e.info.tileObject.isCardLock() && i.tryPlayAni();
                    }
                });
                t();
            }
        }
        else
            t();
    };
    AllCardIsBackTrait.prototype.onNorFlipStateAni_onEnd = function (e, t) {
        var o = e.ins, i = null == o ? void 0 : o._baseTileNode;
        if (i) {
            if (this.isGameTypeOpen(i.context.gameType) && !this.isBackCardLevel(i.context)) {
                var r = i.info.tileObject.type;
                this.shouldHandleFlip(r) && this.updateSpecialCardEffect(i, r, true);
                t();
            }
            else
                t();
        }
        else
            t();
    };
    AllCardIsBackTrait.prototype.getAnimCfg = function () {
        return {
            path: "spine/spinebase/gameplay_flip_regular",
            anims: ["normal_in_1", "normal_in_2"],
            bundleName: "l_normalshowback"
        };
    };
    AllCardIsBackTrait.prototype.onNorFlipStateAni_spineCfg = function (e, t) {
        t({
            returnVal: this.getAnimCfg(),
            isBreak: true,
            returnType: TraitCallbackReturnType.jump
        });
    };
    AllCardIsBackTrait.prototype.onTileNodeObj_reToNormal = function (e, t) {
        var o, i = e.ins;
        if (this.isGameTypeOpen(i.context.gameType)) {
            if (this.isBackCardLevel(i.context))
                t();
            else {
                var r = i.info.tileObject.type;
                if (this.shouldHandleFlip(r)) {
                    null === (o = i.normalFlip) || void 0 === o || o.forceEnter();
                    this.updateSpecialCardEffect(i, r, true);
                }
                t();
            }
        }
        else
            t();
    };
    AllCardIsBackTrait.traitKey = "AllCardIsBack";
    AllCardIsBackTrait = __decorate([
        mj.trait,
        mj.class("AllCardIsBackTrait")
    ], AllCardIsBackTrait);
    return AllCardIsBackTrait;
}(Trait_1.default));
exports.default = AllCardIsBackTrait;

cc._RF.pop();