
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_addPropOfft3hTrait/Scripts/AddPropOff3hTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2FkZFByb3BPZmZ0M2hUcmFpdC9TY3JpcHRzL0FkZFByb3BPZmYzaFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLG1GQUFpRztBQUNqRyx5RUFBc0U7QUFDdEUsMEVBQXlFO0FBQ3pFLG9GQUFtRjtBQUNuRixzRUFBaUU7QUFDakUsd0ZBQW9GO0FBR3BGO0lBQStDLHFDQUFLO0lBQXBEO1FBQUEscUVBd1NDO1FBdlNDLGFBQU8sR0FBRztZQUNSLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEdBQUc7WUFDakIsV0FBVyxFQUFFLENBQUM7WUFDZCxTQUFTLEVBQUUsQ0FBQywwQkFBVSxDQUFDLE1BQU0sQ0FBQztTQUMvQixDQUFDO1FBQ0Ysb0JBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIscUJBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsc0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLDBCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QixtQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixlQUFTLEdBQUcsS0FBSyxDQUFDOztJQTRScEIsQ0FBQztJQTFSQyxrQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLFdBQVcsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDNUgsWUFBWSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztZQUMvSCxXQUFXLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNILFNBQVMsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsMEJBQVUsQ0FBQyxNQUFNLEVBQUUsMEJBQVUsQ0FBQyxNQUFNLEVBQUUsMEJBQVUsQ0FBQyxjQUFjLENBQUM7U0FDeEwsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMs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QUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ2hQLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7d0JBQ2xCLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZMLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztxQkFDN087b0JBQ0QsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQUUsQ0FBQyxDQUFDOzRCQUNuQixPQUFPLEVBQUUsSUFBSTs0QkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTt5QkFDM0MsQ0FBQyxDQUFDO3lCQUFLO3dCQUNOLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXOzRCQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDOzZCQUFLOzRCQUMxRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDOzRCQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO3lCQUM3RTt3QkFDRCxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzRCQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDekQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7NEJBQ2QsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDcEwsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDOzRCQUNuRixJQUFJLENBQUMsRUFBRTtnQ0FDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDekIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztnQ0FDdkIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQzs2QkFDeEI7NEJBQ0QsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM1SCxVQUFVLElBQUksT0FBTyxDQUFDLENBQUMsaUJBQWlCLElBQUksQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7eUJBQzlFO3dCQUNELElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwTCxVQUFVLElBQUksT0FBTyxDQUFDLENBQUMsMkJBQTJCLElBQUksQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2RixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRTs0QkFDakIsTUFBTSxFQUFFLE1BQU07NEJBQ2QsVUFBVSxFQUFFLGFBQWE7eUJBQzFCLENBQUMsQ0FBQzt3QkFDSCxDQUFDLENBQUM7NEJBQ0EsT0FBTyxFQUFFLElBQUk7NEJBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07eUJBQzNDLENBQUMsQ0FBQztxQkFDSjtpQkFDRjthQUNGOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELG1EQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDZCxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwSixDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEM7WUFDRCxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07YUFDM0MsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0Qsb0RBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLElBQUk7YUFDekMsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsNkNBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLDRCQUFZLENBQUMsSUFBSSxFQUFFO2dCQUN0RixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxFQUFFO29CQUNMLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXO3dCQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO3lCQUFLO3dCQUMxRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO3dCQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO3FCQUM3RTtvQkFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyw0QkFBWSxDQUFDLElBQUksQ0FBQztpQkFDcEM7Z0JBQ0QsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO29CQUN0QixNQUFNLEVBQUUsTUFBTTtvQkFDZCxVQUFVLEVBQUUsWUFBWTtpQkFDekIsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO29CQUM1QyxNQUFNLEVBQUUsWUFBWTtvQkFDcEIsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVztvQkFDbkMsYUFBYSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtpQkFDM0MsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUM3Qzs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxnREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pCLE1BQU0sRUFBRSxTQUFTO2FBQ2xCLENBQUMsQ0FBQztZQUNILElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN6QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUU7b0JBQ2pCLE1BQU0sRUFBRSxNQUFNO29CQUNkLFVBQVUsRUFBRSxDQUFDO2lCQUNkLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO2FBQzdFO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUExUk0sMEJBQVEsR0FBRyxjQUFjLENBQUM7SUFiZCxpQkFBaUI7UUFGckMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBd1NyQztJQUFELHdCQUFDO0NBeFNELEFBd1NDLENBeFM4QyxlQUFLLEdBd1NuRDtrQkF4U29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgeyBFR2FtZUlucHV0RW51bSwgRVNodWZmbGVGcm9tIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBBZGRQcm9wT2ZmM2hFZmZlY3QgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0FkZFByb3BPZmYzaEVmZmVjdCc7XG5pbXBvcnQgeyBHYW1lSW50ZXJhY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJBZGRQcm9wT2ZmM2hUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkUHJvcE9mZjNoVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jb25maWcgPSB7XG4gICAgbm9NYXRjaFRpbWU6IDE1LFxuICAgIG9mZmxpbmVIb3VyczogMy41LFxuICAgIG9mZmxpbmVUeXBlOiAwLFxuICAgIGdhbWVUeXBlczogW01qR2FtZVR5cGUuTm9ybWFsXVxuICB9O1xuICBfaGFzM2hGcmVlUHJvcCA9IGZhbHNlO1xuICBfbGV2ZWxUcmlnZ2VyZWQgPSBmYWxzZTtcbiAgX2ZyZWVQcm9wUGVuZGluZyA9IGZhbHNlO1xuICBfaXNFeGVjdXRpbmdGcmVlSGludCA9IGZhbHNlO1xuICBfaXNSZXBsYXlGcmVlID0gZmFsc2U7XG4gIF9uZWVkU3RvcCA9IGZhbHNlO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkFkZFByb3BPZmYzaFwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHQsIGksIG8sIHIsIG4sIHMsIGEsIGw7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgbm9NYXRjaFRpbWU6IG51bGwgIT09IChpID0gbnVsbCA9PT0gKHQgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQubm9NYXRjaFRpbWUpICYmIHZvaWQgMCAhPT0gaSA/IGkgOiAxNSxcbiAgICAgIG9mZmxpbmVIb3VyczogbnVsbCAhPT0gKHIgPSBudWxsID09PSAobyA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5vZmZsaW5lSG91cnMpICYmIHZvaWQgMCAhPT0gciA/IHIgOiAzLjUsXG4gICAgICBvZmZsaW5lVHlwZTogbnVsbCAhPT0gKHMgPSBudWxsID09PSAobiA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi5vZmZsaW5lVHlwZSkgJiYgdm9pZCAwICE9PSBzID8gcyA6IDAsXG4gICAgICBnYW1lVHlwZXM6IG51bGwgIT09IChsID0gbnVsbCA9PT0gKGEgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuZ2FtZVR5cGVzKSAmJiB2b2lkIDAgIT09IGwgPyBsIDogW01qR2FtZVR5cGUuTm9ybWFsLCBNakdhbWVUeXBlLlRyYXZlbCwgTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZV1cbiAgICB9O1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RPcGVyYXRlVGltZSB8fCAodGhpcy5sb2NhbERhdGEubGFzdE9wZXJhdGVUaW1lID0gMCk7XG4gICAgdGhpcy5sb2NhbERhdGEuc2Vzc2lvblRyaWdnZXJDb3VudCB8fCAodGhpcy5sb2NhbERhdGEuc2Vzc2lvblRyaWdnZXJDb3VudCA9IDApO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudChbe1xuICAgICAgZXZlbnQ6IFwiRmFpbEJodl9zdGFydFwiLFxuICAgICAgcHJpb3JpdHk6IDAsXG4gICAgICB0eXBlOiBUcmFpdEV2ZW50UG9zaXRpb25UeXBlLmJlZm9yXG4gICAgfV0pO1xuICB9XG4gIGlzR2FtZVR5cGVFbmFibGVkKCkge1xuICAgIHZhciBlID0gdGhpcy5fY29uZmlnLmdhbWVUeXBlcztcbiAgICBpZiAoIWUgfHwgMCA9PT0gZS5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgIHZhciB0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgcmV0dXJuIGUuaW5jbHVkZXModCk7XG4gIH1cbiAgY2hlY2szaFJldHVybigpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLm9mZmxpbmVIb3VycyA8IDApIHJldHVybiBmYWxzZTtcbiAgICB2YXIgZSA9IHRoaXMubG9jYWxEYXRhLmxhc3RPcGVyYXRlVGltZSB8fCAwO1xuICAgIHJldHVybiAwICE9PSBlICYmIChEYXRlLm5vdygpIC0gZSkgLyAzNjAwMDAwID49IHRoaXMuX2NvbmZpZy5vZmZsaW5lSG91cnM7XG4gIH1cbiAgc2hvdWxkU3RhcnRUaW1lcigpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgIHJldHVybiAhKCFlLmlzR3VpZGVGaW5pc2hlZCgpIHx8IDEgPT09IGUubm9ybWFsRGF0YS5nZXRMZXZlbElkKCkpICYmICF0aGlzLl9oYXMzaEZyZWVQcm9wICYmICF0aGlzLl9sZXZlbFRyaWdnZXJlZCAmJiB0aGlzLmxvY2FsRGF0YS5zZXNzaW9uVHJpZ2dlckNvdW50IDwgMjtcbiAgfVxuICBnZXROZXh0VHJpZ2dlckJ1dHRvbigpIHtcbiAgICByZXR1cm4gMCA9PT0gdGhpcy5sb2NhbERhdGEuc2Vzc2lvblRyaWdnZXJDb3VudCA/IFwiYnRuUHJvcEhpbnRcIiA6IFwiYnRuU2h1ZmZsZVwiO1xuICB9XG4gIGhhc0ZyZWVIaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9oYXMzaEZyZWVQcm9wICYmIDEgPT09IHRoaXMuX2NvbmZpZy5vZmZsaW5lVHlwZSB8fCB0aGlzLl9mcmVlUHJvcFBlbmRpbmcgJiYgMCA9PT0gdGhpcy5sb2NhbERhdGEuc2Vzc2lvblRyaWdnZXJDb3VudDtcbiAgfVxuICBoYXNGcmVlU2h1ZmZsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzM2hGcmVlUHJvcCAmJiAwID09PSB0aGlzLl9jb25maWcub2ZmbGluZVR5cGUgfHwgdGhpcy5fZnJlZVByb3BQZW5kaW5nICYmIDEgPT09IHRoaXMubG9jYWxEYXRhLnNlc3Npb25UcmlnZ2VyQ291bnQ7XG4gIH1cbiAgcHVzaEVmZmVjdChlLCB0KSB7XG4gICAgZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUucHVzaEVmZmVjdCAmJiBlLnB1c2hFZmZlY3QobmV3IEFkZFByb3BPZmYzaEVmZmVjdCh0KSwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIG9uRmFpbEJodl9zdGFydChlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNHYW1lVHlwZUVuYWJsZWQoKSkge1xuICAgICAgaWYgKCF0aGlzLl9oYXMzaEZyZWVQcm9wIHx8IHRoaXMuX2ZyZWVQcm9wUGVuZGluZykge1xuICAgICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uQWRkUHJvcE9mZjNoLFxuICAgICAgICAgIHR5cGU6IFwic3RvcEFsbFwiXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9mcmVlUHJvcFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uSXB0SW5pdFZpZXdfcHVzaEVmZihlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNHYW1lVHlwZUVuYWJsZWQoKSkge1xuICAgICAgdmFyIGkgPSBlLmlucztcbiAgICAgIHRoaXMuX2xldmVsVHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9mcmVlUHJvcFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICF0aGlzLl9oYXMzaEZyZWVQcm9wICYmIHRoaXMuY2hlY2szaFJldHVybigpICYmICh0aGlzLl9oYXMzaEZyZWVQcm9wID0gdHJ1ZSk7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0T3BlcmF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgaWYgKHRoaXMuX2hhczNoRnJlZVByb3ApIHtcbiAgICAgICAgdmFyIG8gPSAxID09PSB0aGlzLl9jb25maWcub2ZmbGluZVR5cGUgPyBcImJ0blByb3BIaW50XCIgOiBcImJ0blNodWZmbGVcIjtcbiAgICAgICAgdGhpcy5wdXNoRWZmZWN0KGksIHtcbiAgICAgICAgICBhY3Rpb246IFwic3RhcnRcIixcbiAgICAgICAgICBidXR0b25OYW1lOiBvXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5zaG91bGRTdGFydFRpbWVyKCkgJiYgIXRoaXMuX2lzUmVwbGF5RnJlZSAmJiB0aGlzLnB1c2hFZmZlY3QoaSwge1xuICAgICAgICBhY3Rpb246IFwic3RhcnRUaW1lclwiLFxuICAgICAgICBkZWxheVRpbWU6IHRoaXMuX2NvbmZpZy5ub01hdGNoVGltZSxcbiAgICAgICAgdGltZW91dEJ1dHRvbjogdGhpcy5nZXROZXh0VHJpZ2dlckJ1dHRvbigpXG4gICAgICB9KTtcbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uSXB0U2V0THZfbmV3R0NvbXAoZSwgdCkge1xuICAgIGlmICh0aGlzLmlzR2FtZVR5cGVFbmFibGVkKCkpIHtcbiAgICAgIHZhciBpID0gZS5pbnMsXG4gICAgICAgIG8gPSBudWxsID09IGkgPyB2b2lkIDAgOiBpLmdhbWVDb250ZXh0O1xuICAgICAgaWYgKG8gJiYgby5nZXRJc1Jlc3RhcnQoKSkge1xuICAgICAgICB0aGlzLl9pc1JlcGxheUZyZWUgPSB0aGlzLl9mcmVlUHJvcFBlbmRpbmc7XG4gICAgICAgIHRoaXMuX2xldmVsVHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2ZyZWVQcm9wUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5faGFzM2hGcmVlUHJvcCkge1xuICAgICAgICAgIHZhciByID0gMSA9PT0gdGhpcy5fY29uZmlnLm9mZmxpbmVUeXBlID8gXCJidG5Qcm9wSGludFwiIDogXCJidG5TaHVmZmxlXCI7XG4gICAgICAgICAgdGhpcy5wdXNoRWZmZWN0KGksIHtcbiAgICAgICAgICAgIGFjdGlvbjogXCJzdGFydFwiLFxuICAgICAgICAgICAgYnV0dG9uTmFtZTogclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvdWxkU3RhcnRUaW1lcigpICYmIHRoaXMuX2lzUmVwbGF5RnJlZSAmJiB0aGlzLnB1c2hFZmZlY3QoaSwge1xuICAgICAgICAgIGFjdGlvbjogXCJzdGFydFRpbWVyXCIsXG4gICAgICAgICAgZGVsYXlUaW1lOiAwLFxuICAgICAgICAgIHRpbWVvdXRCdXR0b246IHRoaXMuZ2V0TmV4dFRyaWdnZXJCdXR0b24oKVxuICAgICAgICB9KTtcbiAgICAgICAgdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZnJlZVByb3BQZW5kaW5nICYmICh0aGlzLmxvY2FsRGF0YS5zZXNzaW9uVHJpZ2dlckNvdW50ID0gdGhpcy5sb2NhbERhdGEuc2Vzc2lvblRyaWdnZXJDb3VudCArIDEpO1xuICAgICAgICB0aGlzLl9sZXZlbFRyaWdnZXJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9mcmVlUHJvcFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNSZXBsYXlGcmVlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2hhczNoRnJlZVByb3AgfHwgdGhpcy5wdXNoRWZmZWN0KGksIHtcbiAgICAgICAgICBhY3Rpb246IFwic3RvcEFsbFwiXG4gICAgICAgIH0pO1xuICAgICAgICB0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbklwdEJhc2VfcHVzaENsckVmZihlLCB0KSB7XG4gICAgdmFyIGksIG8sIHIsIG4sIHMsIGEsIGw7XG4gICAgaWYgKHRoaXMuaXNHYW1lVHlwZUVuYWJsZWQoKSkge1xuICAgICAgdGhpcy5faXNSZXBsYXlGcmVlID0gZmFsc2U7XG4gICAgICB2YXIgcCA9IGUuaW5zLFxuICAgICAgICBmID0gbnVsbCA9PT0gKG8gPSBudWxsID09PSAoaSA9IG51bGwgPT0gcCA/IHZvaWQgMCA6IHAuZ2FtZUNvbnRleHQpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2V0R2FtZURhdGEpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uY2FsbChpKSxcbiAgICAgICAgdSA9IG51bGwgPT09IChzID0gbnVsbCA9PT0gKG4gPSBudWxsID09PSAociA9IG51bGwgPT0gcCA/IHZvaWQgMCA6IHAuZ2FtZUNvbnRleHQpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIucmVzdWx0Q2hlY2tlcikgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi5jaGVja0lzRW5kT3JEZWFkKSB8fCB2b2lkIDAgPT09IHMgPyB2b2lkIDAgOiBzLmNhbGwobik7XG4gICAgICBpZiAodGhpcy5fZnJlZVByb3BQZW5kaW5nICYmIHUpIHtcbiAgICAgICAgdmFyIGggPSB0aGlzLmdldE5leHRUcmlnZ2VyQnV0dG9uKCk7XG4gICAgICAgIHRoaXMucHVzaEVmZmVjdChwLCB7XG4gICAgICAgICAgYWN0aW9uOiBcInN0b3BBbGxcIixcbiAgICAgICAgICBidXR0b25OYW1lOiBoXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9mcmVlUHJvcFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuc2Vzc2lvblRyaWdnZXJDb3VudCA9IHRoaXMubG9jYWxEYXRhLnNlc3Npb25UcmlnZ2VyQ291bnQgKyAxO1xuICAgICAgICB0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodSkge1xuICAgICAgICAgIGggPSB0aGlzLmdldE5leHRUcmlnZ2VyQnV0dG9uKCk7XG4gICAgICAgICAgdGhpcy5wdXNoRWZmZWN0KHAsIHtcbiAgICAgICAgICAgIGFjdGlvbjogXCJzdG9wQWxsXCIsXG4gICAgICAgICAgICBidXR0b25OYW1lOiBoXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChudWxsID09PSAoYSA9IG51bGwgPT0gZiA/IHZvaWQgMCA6IGYuZ2V0SGFzVHJpZ2dlcmVkRnVsbENvbWJvKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmNhbGwoZikpIHx8IChudWxsID09PSAobCA9IG51bGwgPT0gZiA/IHZvaWQgMCA6IGYuZ2V0SGFzVHJpZ2dlcmVkUmV3YXJkQ29tYm8pIHx8IHZvaWQgMCA9PT0gbCA/IHZvaWQgMCA6IGwuY2FsbChmKSkpIHtcbiAgICAgICAgICB0KCk7XG4gICAgICAgICAgdGhpcy5faGFzM2hGcmVlUHJvcCB8fCB0aGlzLnB1c2hFZmZlY3QocCwge1xuICAgICAgICAgICAgYWN0aW9uOiBcInN0b3BBbGxcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICF1ICYmIHRoaXMuc2hvdWxkU3RhcnRUaW1lcigpICYmIHRoaXMucHVzaEVmZmVjdChwLCB7XG4gICAgICAgICAgICBhY3Rpb246IFwicmVzZXRUaW1lclwiLFxuICAgICAgICAgICAgZGVsYXlUaW1lOiB0aGlzLl9jb25maWcubm9NYXRjaFRpbWUsXG4gICAgICAgICAgICB0aW1lb3V0QnV0dG9uOiB0aGlzLmdldE5leHRUcmlnZ2VyQnV0dG9uKClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0T3BlcmF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgIHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25BZGRQcm9wT2ZmM2hfdGltZW91dChlLCB0KSB7XG4gICAgaWYgKCF0aGlzLmlzR2FtZVR5cGVFbmFibGVkKCkgfHwgdGhpcy5fbGV2ZWxUcmlnZ2VyZWQgfHwgdGhpcy5sb2NhbERhdGEuc2Vzc2lvblRyaWdnZXJDb3VudCA+PSAyKSB0KCk7ZWxzZSB7XG4gICAgICB0aGlzLl9sZXZlbFRyaWdnZXJlZCA9IHRydWU7XG4gICAgICB0aGlzLl9mcmVlUHJvcFBlbmRpbmcgPSB0cnVlO1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBvbklwdEhpdFRpcHNfZXhlYyhlLCB0KSB7XG4gICAgdmFyIGksIG8sIHIsIG4sIHMsIGwsIHAsIGYsIHUsIGgsIGMsIGQsIGcsIHYsIFQsIG0sIF8sIHksIFAsIEUsIEMsIGIsIEQsIEY7XG4gICAgaWYgKHRoaXMuaXNHYW1lVHlwZUVuYWJsZWQoKSkge1xuICAgICAgdmFyIEggPSBlLmlucztcbiAgICAgIGlmICh0aGlzLmhhc0ZyZWVIaW50KCkpIHtcbiAgICAgICAgaWYgKG51bGwgIT09IChuID0gbnVsbCA9PT0gKHIgPSBudWxsID09PSAobyA9IG51bGwgPT09IChpID0gSC5nYW1lQ29udHJvbGxlcikgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5nYW1lQ29udGV4dCkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5nZXRDYW5IaXRUaXBzKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmNhbGwobykpICYmIHZvaWQgMCAhPT0gbiAmJiBuLmxlbmd0aCkgdCh7XG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgICAgfSk7ZWxzZSB7XG4gICAgICAgICAgdmFyIE8gPSBudWxsICE9PSAoZiA9IG51bGwgPT09IChwID0gbnVsbCA9PT0gKGwgPSBudWxsID09PSAocyA9IEguZ2FtZUNvbnRyb2xsZXIpIHx8IHZvaWQgMCA9PT0gcyA/IHZvaWQgMCA6IHMudGlsZU1hcE9iamVjdCkgfHwgdm9pZCAwID09PSBsID8gdm9pZCAwIDogbC5nZXRDYW5NYXRjaFRpbGVzSGludCkgfHwgdm9pZCAwID09PSBwID8gdm9pZCAwIDogcC5jYWxsKGwpKSAmJiB2b2lkIDAgIT09IGYgPyBmIDogW107XG4gICAgICAgICAgaWYgKDAgPT09IE8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBudWxsID09PSAoYyA9IG51bGwgPT09IChoID0gbnVsbCA9PT0gKHUgPSBILmdhbWVDb250cm9sbGVyKSB8fCB2b2lkIDAgPT09IHUgPyB2b2lkIDAgOiB1LnRpbGVNYXBPYmplY3QpIHx8IHZvaWQgMCA9PT0gaCA/IHZvaWQgMCA6IGgudXBkYXRlQ2FuTWF0Y2hUaWxlcykgfHwgdm9pZCAwID09PSBjIHx8IGMuY2FsbChoKTtcbiAgICAgICAgICAgIE8gPSBudWxsICE9PSAoVCA9IG51bGwgPT09ICh2ID0gbnVsbCA9PT0gKGcgPSBudWxsID09PSAoZCA9IEguZ2FtZUNvbnRyb2xsZXIpIHx8IHZvaWQgMCA9PT0gZCA/IHZvaWQgMCA6IGQudGlsZU1hcE9iamVjdCkgfHwgdm9pZCAwID09PSBnID8gdm9pZCAwIDogZy5nZXRDYW5NYXRjaFRpbGVzSGludCkgfHwgdm9pZCAwID09PSB2ID8gdm9pZCAwIDogdi5jYWxsKGcpKSAmJiB2b2lkIDAgIT09IFQgPyBUIDogW107XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChPLmxlbmd0aCA8PSAwKSB0KHtcbiAgICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgICAgICB9KTtlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYXMzaEZyZWVQcm9wICYmIDEgPT09IHRoaXMuX2NvbmZpZy5vZmZsaW5lVHlwZSkgdGhpcy5faGFzM2hGcmVlUHJvcCA9IGZhbHNlO2Vsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9mcmVlUHJvcFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEuc2Vzc2lvblRyaWdnZXJDb3VudCA9IHRoaXMubG9jYWxEYXRhLnNlc3Npb25UcmlnZ2VyQ291bnQgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB2YXIgRyA9IE9bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTy5sZW5ndGgpXS5zbGljZSgwLCAyKSxcbiAgICAgICAgICAgICAgICB4ID0gR1swXS5pZCxcbiAgICAgICAgICAgICAgICBNID0gR1sxXS5pZDtcbiAgICAgICAgICAgICAgbnVsbCA9PT0gKHkgPSBudWxsID09PSAoXyA9IG51bGwgPT09IChtID0gSC5nYW1lQ29udGV4dCkgfHwgdm9pZCAwID09PSBtID8gdm9pZCAwIDogbS50cmFja2VyTW9kaWZpZXIpIHx8IHZvaWQgMCA9PT0gXyA/IHZvaWQgMCA6IF8udHJpZ2dlckhpbnQpIHx8IHZvaWQgMCA9PT0geSB8fCB5LmNhbGwoXywgeCwgTSk7XG4gICAgICAgICAgICAgIHZhciBCID0gbnVsbCA9PT0gKFAgPSBILmdhbWVDb250cm9sbGVyKSB8fCB2b2lkIDAgPT09IFAgPyB2b2lkIDAgOiBQLnRpbGVNYXBPYmplY3Q7XG4gICAgICAgICAgICAgIGlmIChCKSB7XG4gICAgICAgICAgICAgICAgdmFyIEkgPSBCLmdldFRpbGVPYmplY3QoeCksXG4gICAgICAgICAgICAgICAgICB3ID0gQi5nZXRUaWxlT2JqZWN0KE0pO1xuICAgICAgICAgICAgICAgIEkgJiYgKEkuaXNIaW50ID0gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdyAmJiAody5pc0hpbnQgPSB0cnVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBudWxsID09PSAoQyA9IG51bGwgPT09IChFID0gSC5nYW1lQ29udGV4dCkgfHwgdm9pZCAwID09PSBFID8gdm9pZCAwIDogRS5zZXRDYW5IaXRUaXBzKSB8fCB2b2lkIDAgPT09IEMgfHwgQy5jYWxsKEUsIFt4LCBNXSk7XG4gICAgICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgSC5wdXNoSGl0VGlwc0VmZmVjdCAmJiBILnB1c2hIaXRUaXBzRWZmZWN0KHgsIE0sIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBqID0gbnVsbCAhPT0gKEYgPSBudWxsID09PSAoRCA9IG51bGwgPT09IChiID0gSC5nYW1lQ29udGV4dCkgfHwgdm9pZCAwID09PSBiID8gdm9pZCAwIDogYi5nZXRHYW1lRGF0YSgpKSB8fCB2b2lkIDAgPT09IEQgPyB2b2lkIDAgOiBELmdldEhpdFRpcHNOdW1zKCkpICYmIHZvaWQgMCAhPT0gRiA/IEYgOiAwO1xuICAgICAgICAgICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBILnB1c2hVcGRhdGVIaXRUaXBzUHJvcEVmZmVjdCAmJiBILnB1c2hVcGRhdGVIaXRUaXBzUHJvcEVmZmVjdChqKTtcbiAgICAgICAgICAgIHRoaXMucHVzaEVmZmVjdChILCB7XG4gICAgICAgICAgICAgIGFjdGlvbjogXCJzdG9wXCIsXG4gICAgICAgICAgICAgIGJ1dHRvbk5hbWU6IFwiYnRuUHJvcEhpbnRcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0KHtcbiAgICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbklwdEhpdFRpcHNfY2hnUHJvcERlZihlLCB0KSB7XG4gICAgdmFyIGksIG87XG4gICAgaWYgKHRoaXMuX2lzRXhlY3V0aW5nRnJlZUhpbnQpIHtcbiAgICAgIHRoaXMuX2lzRXhlY3V0aW5nRnJlZUhpbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX25lZWRTdG9wID0gdHJ1ZTtcbiAgICAgIHZhciByID0gZS5pbnM7XG4gICAgICBpZiAobnVsbCA9PSByID8gdm9pZCAwIDogci5wdXNoVXBkYXRlSGl0VGlwc1Byb3BFZmZlY3QpIHtcbiAgICAgICAgdmFyIG4gPSAobnVsbCA9PT0gKG8gPSBudWxsID09PSAoaSA9IHIuZ2FtZUNvbnRleHQpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2V0R2FtZURhdGEoKSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5nZXRIaXRUaXBzTnVtcygpKSB8fCAwO1xuICAgICAgICByLnB1c2hVcGRhdGVIaXRUaXBzUHJvcEVmZmVjdChuKTtcbiAgICAgIH1cbiAgICAgIHQoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25JcHRIaXRUaXBzX2V4ZWNUZW1wRml4KGUsIHQpIHtcbiAgICBpZiAodGhpcy5fbmVlZFN0b3ApIHtcbiAgICAgIHRoaXMuX25lZWRTdG9wID0gZmFsc2U7XG4gICAgICB0KHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbklwdFNodWZmbGVfZXhlYyhlLCB0KSB7XG4gICAgdmFyIGk7XG4gICAgaWYgKHRoaXMuaXNHYW1lVHlwZUVuYWJsZWQoKSkge1xuICAgICAgdmFyIG8gPSBlLmlucztcbiAgICAgIGlmICgobnVsbCA9PT0gKGkgPSBlLmFyZ3NbMF0pIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZnJvbSkgIT09IEVTaHVmZmxlRnJvbS5GcmVlKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5oYXNGcmVlU2h1ZmZsZSgpO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgIGlmICh0aGlzLl9oYXMzaEZyZWVQcm9wICYmIDAgPT09IHRoaXMuX2NvbmZpZy5vZmZsaW5lVHlwZSkgdGhpcy5faGFzM2hGcmVlUHJvcCA9IGZhbHNlO2Vsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZnJlZVByb3BQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5zZXNzaW9uVHJpZ2dlckNvdW50ID0gdGhpcy5sb2NhbERhdGEuc2Vzc2lvblRyaWdnZXJDb3VudCArIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGUuYXJnc1swXSA9IGUuYXJnc1swXSB8fCB7fTtcbiAgICAgICAgICBlLmFyZ3NbMF0uZnJvbSA9IEVTaHVmZmxlRnJvbS5GcmVlO1xuICAgICAgICB9XG4gICAgICAgIHQoKTtcbiAgICAgICAgciAmJiB0aGlzLnB1c2hFZmZlY3Qobywge1xuICAgICAgICAgIGFjdGlvbjogXCJzdG9wXCIsXG4gICAgICAgICAgYnV0dG9uTmFtZTogXCJidG5TaHVmZmxlXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2hvdWxkU3RhcnRUaW1lcigpICYmIHRoaXMucHVzaEVmZmVjdChvLCB7XG4gICAgICAgICAgYWN0aW9uOiBcInJlc2V0VGltZXJcIixcbiAgICAgICAgICBkZWxheVRpbWU6IHRoaXMuX2NvbmZpZy5ub01hdGNoVGltZSxcbiAgICAgICAgICB0aW1lb3V0QnV0dG9uOiB0aGlzLmdldE5leHRUcmlnZ2VyQnV0dG9uKClcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RPcGVyYXRlVGltZSA9IERhdGUubm93KCk7XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfdWlEZXMoZSwgdCkge1xuICAgIGlmICh0aGlzLmlzR2FtZVR5cGVFbmFibGVkKCkpIHtcbiAgICAgIHZhciBpID0gZS5pbnM7XG4gICAgICB0aGlzLnB1c2hFZmZlY3QoaSwge1xuICAgICAgICBhY3Rpb246IFwic3RvcEFsbFwiXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLl9mcmVlUHJvcFBlbmRpbmcpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmdldE5leHRUcmlnZ2VyQnV0dG9uKCk7XG4gICAgICAgIHRoaXMucHVzaEVmZmVjdChpLCB7XG4gICAgICAgICAgYWN0aW9uOiBcInN0b3BcIixcbiAgICAgICAgICBidXR0b25OYW1lOiBvXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9mcmVlUHJvcFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuc2Vzc2lvblRyaWdnZXJDb3VudCA9IHRoaXMubG9jYWxEYXRhLnNlc3Npb25UcmlnZ2VyQ291bnQgKyAxO1xuICAgICAgfVxuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbn0iXX0=