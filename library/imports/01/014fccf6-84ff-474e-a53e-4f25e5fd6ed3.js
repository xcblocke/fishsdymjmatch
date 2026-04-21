"use strict";
cc._RF.push(module, '014fcz2hP9HTqU+TyXl/W7T', 'AddPropOff3hTrait');
// subpackages/r_addPropOfft3hTrait/Scripts/AddPropOff3hTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var AddPropOff3hEffect_1 = require("../../../Scripts/AddPropOff3hEffect");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var AddPropOff3hTrait = /** @class */ (function (_super) {
    __extends(AddPropOff3hTrait, _super);
    function AddPropOff3hTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {
            noMatchTime: 15,
            offlineHours: 3.5,
            offlineType: 0,
            gameTypes: [GameTypeEnums_1.MjGameType.Normal]
        };
        _this._has3hFreeProp = false;
        _this._levelTriggered = false;
        _this._freePropPending = false;
        _this._isExecutingFreeHint = false;
        _this._isReplayFree = false;
        _this._needStop = false;
        return _this;
    }
    AddPropOff3hTrait.prototype.onLoad = function () {
        var t, i, o, r, n, s, a, l;
        _super.prototype.onLoad.call(this);
        this._config = {
            noMatchTime: null !== (i = null === (t = this._traitData) || void 0 === t ? void 0 : t.noMatchTime) && void 0 !== i ? i : 15,
            offlineHours: null !== (r = null === (o = this._traitData) || void 0 === o ? void 0 : o.offlineHours) && void 0 !== r ? r : 3.5,
            offlineType: null !== (s = null === (n = this._traitData) || void 0 === n ? void 0 : n.offlineType) && void 0 !== s ? s : 0,
            gameTypes: null !== (l = null === (a = this._traitData) || void 0 === a ? void 0 : a.gameTypes) && void 0 !== l ? l : [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge]
        };
        this.localData.lastOperateTime || (this.localData.lastOperateTime = 0);
        this.localData.sessionTriggerCount || (this.localData.sessionTriggerCount = 0);
        this.registerEvent([{
                event: "FailBhv_start",
                priority: 0,
                type: TraitEventPositionType.befor
            }]);
    };
    AddPropOff3hTrait.prototype.isGameTypeEnabled = function () {
        var e = this._config.gameTypes;
        if (!e || 0 === e.length)
            return true;
        var t = UserModel_1.default.getInstance().getCurrentGameType();
        return e.includes(t);
    };
    AddPropOff3hTrait.prototype.check3hReturn = function () {
        if (this._config.offlineHours < 0)
            return false;
        var e = this.localData.lastOperateTime || 0;
        return 0 !== e && (Date.now() - e) / 3600000 >= this._config.offlineHours;
    };
    AddPropOff3hTrait.prototype.shouldStartTimer = function () {
        var e = UserModel_1.default.getInstance();
        return !(!e.isGuideFinished() || 1 === e.normalData.getLevelId()) && !this._has3hFreeProp && !this._levelTriggered && this.localData.sessionTriggerCount < 2;
    };
    AddPropOff3hTrait.prototype.getNextTriggerButton = function () {
        return 0 === this.localData.sessionTriggerCount ? "btnPropHint" : "btnShuffle";
    };
    AddPropOff3hTrait.prototype.hasFreeHint = function () {
        return this._has3hFreeProp && 1 === this._config.offlineType || this._freePropPending && 0 === this.localData.sessionTriggerCount;
    };
    AddPropOff3hTrait.prototype.hasFreeShuffle = function () {
        return this._has3hFreeProp && 0 === this._config.offlineType || this._freePropPending && 1 === this.localData.sessionTriggerCount;
    };
    AddPropOff3hTrait.prototype.pushEffect = function (e, t) {
        e && "function" == typeof e.pushEffect && e.pushEffect(new AddPropOff3hEffect_1.AddPropOff3hEffect(t), BehaviorsEnum_1.EInsertType.Parallel);
    };
    AddPropOff3hTrait.prototype.onFailBhv_start = function (e, t) {
        if (this.isGameTypeEnabled()) {
            if (!this._has3hFreeProp || this._freePropPending) {
                GameInteraction_1.GameInteraction.input({
                    inputType: GameInputEnum_1.EGameInputEnum.AddPropOff3h,
                    type: "stopAll"
                });
                this._freePropPending = false;
            }
            t();
        }
        else
            t();
    };
    AddPropOff3hTrait.prototype.onIptInitView_pushEff = function (e, t) {
        if (this.isGameTypeEnabled()) {
            var i = e.ins;
            this._levelTriggered = false;
            this._freePropPending = false;
            !this._has3hFreeProp && this.check3hReturn() && (this._has3hFreeProp = true);
            this.localData.lastOperateTime = Date.now();
            if (this._has3hFreeProp) {
                var o = 1 === this._config.offlineType ? "btnPropHint" : "btnShuffle";
                this.pushEffect(i, {
                    action: "start",
                    buttonName: o
                });
            }
            this.shouldStartTimer() && !this._isReplayFree && this.pushEffect(i, {
                action: "startTimer",
                delayTime: this._config.noMatchTime,
                timeoutButton: this.getNextTriggerButton()
            });
            t();
        }
        else
            t();
    };
    AddPropOff3hTrait.prototype.onIptSetLv_newGComp = function (e, t) {
        if (this.isGameTypeEnabled()) {
            var i = e.ins, o = null == i ? void 0 : i.gameContext;
            if (o && o.getIsRestart()) {
                this._isReplayFree = this._freePropPending;
                this._levelTriggered = false;
                this._freePropPending = false;
                if (this._has3hFreeProp) {
                    var r = 1 === this._config.offlineType ? "btnPropHint" : "btnShuffle";
                    this.pushEffect(i, {
                        action: "start",
                        buttonName: r
                    });
                }
                this.shouldStartTimer() && this._isReplayFree && this.pushEffect(i, {
                    action: "startTimer",
                    delayTime: 0,
                    timeoutButton: this.getNextTriggerButton()
                });
                t();
            }
            else {
                this._freePropPending && (this.localData.sessionTriggerCount = this.localData.sessionTriggerCount + 1);
                this._levelTriggered = false;
                this._freePropPending = false;
                this._isReplayFree = false;
                this._has3hFreeProp || this.pushEffect(i, {
                    action: "stopAll"
                });
                t();
            }
        }
        else
            t();
    };
    AddPropOff3hTrait.prototype.onIptBase_pushClrEff = function (e, t) {
        var i, o, r, n, s, a, l;
        if (this.isGameTypeEnabled()) {
            this._isReplayFree = false;
            var p = e.ins, f = null === (o = null === (i = null == p ? void 0 : p.gameContext) || void 0 === i ? void 0 : i.getGameData) || void 0 === o ? void 0 : o.call(i), u = null === (s = null === (n = null === (r = null == p ? void 0 : p.gameContext) || void 0 === r ? void 0 : r.resultChecker) || void 0 === n ? void 0 : n.checkIsEndOrDead) || void 0 === s ? void 0 : s.call(n);
            if (this._freePropPending && u) {
                var h = this.getNextTriggerButton();
                this.pushEffect(p, {
                    action: "stopAll",
                    buttonName: h
                });
                this._freePropPending = false;
                this.localData.sessionTriggerCount = this.localData.sessionTriggerCount + 1;
                t();
            }
            else {
                if (u) {
                    h = this.getNextTriggerButton();
                    this.pushEffect(p, {
                        action: "stopAll",
                        buttonName: h
                    });
                }
                if ((null === (a = null == f ? void 0 : f.getHasTriggeredFullCombo) || void 0 === a ? void 0 : a.call(f)) || (null === (l = null == f ? void 0 : f.getHasTriggeredRewardCombo) || void 0 === l ? void 0 : l.call(f))) {
                    t();
                    this._has3hFreeProp || this.pushEffect(p, {
                        action: "stopAll"
                    });
                }
                else {
                    !u && this.shouldStartTimer() && this.pushEffect(p, {
                        action: "resetTimer",
                        delayTime: this._config.noMatchTime,
                        timeoutButton: this.getNextTriggerButton()
                    });
                    this.localData.lastOperateTime = Date.now();
                    t();
                }
            }
        }
        else
            t();
    };
    AddPropOff3hTrait.prototype.onAddPropOff3h_timeout = function (e, t) {
        if (!this.isGameTypeEnabled() || this._levelTriggered || this.localData.sessionTriggerCount >= 2)
            t();
        else {
            this._levelTriggered = true;
            this._freePropPending = true;
            t();
        }
    };
    AddPropOff3hTrait.prototype.onIptHitTips_exec = function (e, t) {
        var i, o, r, n, s, l, p, f, u, h, c, d, g, v, T, m, _, y, P, E, C, b, D, F;
        if (this.isGameTypeEnabled()) {
            var H = e.ins;
            if (this.hasFreeHint()) {
                if (null !== (n = null === (r = null === (o = null === (i = H.gameController) || void 0 === i ? void 0 : i.gameContext) || void 0 === o ? void 0 : o.getCanHitTips) || void 0 === r ? void 0 : r.call(o)) && void 0 !== n && n.length)
                    t({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                else {
                    var O = null !== (f = null === (p = null === (l = null === (s = H.gameController) || void 0 === s ? void 0 : s.tileMapObject) || void 0 === l ? void 0 : l.getCanMatchTilesHint) || void 0 === p ? void 0 : p.call(l)) && void 0 !== f ? f : [];
                    if (0 === O.length) {
                        null === (c = null === (h = null === (u = H.gameController) || void 0 === u ? void 0 : u.tileMapObject) || void 0 === h ? void 0 : h.updateCanMatchTiles) || void 0 === c || c.call(h);
                        O = null !== (T = null === (v = null === (g = null === (d = H.gameController) || void 0 === d ? void 0 : d.tileMapObject) || void 0 === g ? void 0 : g.getCanMatchTilesHint) || void 0 === v ? void 0 : v.call(g)) && void 0 !== T ? T : [];
                    }
                    if (O.length <= 0)
                        t({
                            isBreak: true,
                            returnType: TraitManager_1.TraitCallbackReturnType.return
                        });
                    else {
                        if (this._has3hFreeProp && 1 === this._config.offlineType)
                            this._has3hFreeProp = false;
                        else {
                            this._freePropPending = false;
                            this.localData.sessionTriggerCount = this.localData.sessionTriggerCount + 1;
                        }
                        if (O.length > 0) {
                            var G = O[Math.floor(Math.random() * O.length)].slice(0, 2), x = G[0].id, M = G[1].id;
                            null === (y = null === (_ = null === (m = H.gameContext) || void 0 === m ? void 0 : m.trackerModifier) || void 0 === _ ? void 0 : _.triggerHint) || void 0 === y || y.call(_, x, M);
                            var B = null === (P = H.gameController) || void 0 === P ? void 0 : P.tileMapObject;
                            if (B) {
                                var I = B.getTileObject(x), w = B.getTileObject(M);
                                I && (I.isHint = true);
                                w && (w.isHint = true);
                            }
                            null === (C = null === (E = H.gameContext) || void 0 === E ? void 0 : E.setCanHitTips) || void 0 === C || C.call(E, [x, M]);
                            "function" == typeof H.pushHitTipsEffect && H.pushHitTipsEffect(x, M, false);
                        }
                        var j = null !== (F = null === (D = null === (b = H.gameContext) || void 0 === b ? void 0 : b.getGameData()) || void 0 === D ? void 0 : D.getHitTipsNums()) && void 0 !== F ? F : 0;
                        "function" == typeof H.pushUpdateHitTipsPropEffect && H.pushUpdateHitTipsPropEffect(j);
                        this.pushEffect(H, {
                            action: "stop",
                            buttonName: "btnPropHint"
                        });
                        t({
                            isBreak: true,
                            returnType: TraitManager_1.TraitCallbackReturnType.return
                        });
                    }
                }
            }
            else
                t();
        }
        else
            t();
    };
    AddPropOff3hTrait.prototype.onIptHitTips_chgPropDef = function (e, t) {
        var i, o;
        if (this._isExecutingFreeHint) {
            this._isExecutingFreeHint = false;
            this._needStop = true;
            var r = e.ins;
            if (null == r ? void 0 : r.pushUpdateHitTipsPropEffect) {
                var n = (null === (o = null === (i = r.gameContext) || void 0 === i ? void 0 : i.getGameData()) || void 0 === o ? void 0 : o.getHitTipsNums()) || 0;
                r.pushUpdateHitTipsPropEffect(n);
            }
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            t();
    };
    AddPropOff3hTrait.prototype.onIptHitTips_execTempFix = function (e, t) {
        if (this._needStop) {
            this._needStop = false;
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else
            t();
    };
    AddPropOff3hTrait.prototype.onIptShuffle_exec = function (e, t) {
        var i;
        if (this.isGameTypeEnabled()) {
            var o = e.ins;
            if ((null === (i = e.args[0]) || void 0 === i ? void 0 : i.from) !== GameInputEnum_1.EShuffleFrom.Free) {
                var r = this.hasFreeShuffle();
                if (r) {
                    if (this._has3hFreeProp && 0 === this._config.offlineType)
                        this._has3hFreeProp = false;
                    else {
                        this._freePropPending = false;
                        this.localData.sessionTriggerCount = this.localData.sessionTriggerCount + 1;
                    }
                    e.args[0] = e.args[0] || {};
                    e.args[0].from = GameInputEnum_1.EShuffleFrom.Free;
                }
                t();
                r && this.pushEffect(o, {
                    action: "stop",
                    buttonName: "btnShuffle"
                });
                this.shouldStartTimer() && this.pushEffect(o, {
                    action: "resetTimer",
                    delayTime: this._config.noMatchTime,
                    timeoutButton: this.getNextTriggerButton()
                });
                this.localData.lastOperateTime = Date.now();
            }
            else
                t();
        }
        else
            t();
    };
    AddPropOff3hTrait.prototype.onMainGameCtrl_uiDes = function (e, t) {
        if (this.isGameTypeEnabled()) {
            var i = e.ins;
            this.pushEffect(i, {
                action: "stopAll"
            });
            if (this._freePropPending) {
                var o = this.getNextTriggerButton();
                this.pushEffect(i, {
                    action: "stop",
                    buttonName: o
                });
                this._freePropPending = false;
                this.localData.sessionTriggerCount = this.localData.sessionTriggerCount + 1;
            }
            t();
        }
        else
            t();
    };
    AddPropOff3hTrait.traitKey = "AddPropOff3h";
    AddPropOff3hTrait = __decorate([
        mj.trait,
        mj.class("AddPropOff3hTrait")
    ], AddPropOff3hTrait);
    return AddPropOff3hTrait;
}(Trait_1.default));
exports.default = AddPropOff3hTrait;

cc._RF.pop();