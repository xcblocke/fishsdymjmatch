"use strict";
cc._RF.push(module, 'eed2bT+1vtDV7DF2ic7WAuJ', 'RankTrait');
// subpackages/l_rank/Scripts/util/RankTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../../Scripts/framework/trait/TraitManager");
var HallRankBtn_1 = require("../component/HallRankBtn");
var ControllerManager_1 = require("../../../../Scripts/framework/manager/ControllerManager");
var UserModel_1 = require("../../../../Scripts/gamePlay/user/UserModel");
var RankModel_1 = require("../RankModel");
var TileTypeEnum_1 = require("../../../../Scripts/simulator/constant/TileTypeEnum");
var RankCollectCard_1 = require("../RankCollectCard");
var NormalGameData_1 = require("../../../../Scripts/core/simulator/data/NormalGameData");
var RankSpecialCardEffect_1 = require("./RankSpecialCardEffect");
var GameInputEnum_1 = require("../../../../Scripts/simulator/constant/GameInputEnum");
var DGameUnlock_1 = require("../../../../Scripts/gamePlay/dot/DGameUnlock");
var DChampaignEnd_1 = require("../../../../Scripts/DChampaignEnd");
var DGameBtnClick_1 = require("../../../../Scripts/dot/DGameBtnClick");
var SimulatorEvent_1 = require("../../../../Scripts/core/simulator/events/SimulatorEvent");
var RankTrait = /** @class */ (function (_super) {
    __extends(RankTrait, _super);
    function RankTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rankBtnNode = null;
        _this._rankBtnState = "";
        _this._pendingWinControllerArgs = null;
        _this._isContinuingWinView = false;
        _this._rankCollectCardView = null;
        _this._beforeWinBehavior = null;
        return _this;
    }
    RankTrait_1 = RankTrait;
    RankTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        var o = null === (e = this._traitData) || void 0 === e ? void 0 : e.config;
        if (o) {
            RankModel_1.default.getInstance().setDevCfg(o);
        }
        else {
            RankModel_1.default.getInstance().setDevCfg({
                unLockLevel: 10,
                difActTimeCD: 0,
                sameActTimesCD: 2,
                canRewardCount: 6,
                robotParams: {
                    robotsNum: 49,
                    baseLevelConst: 7,
                    minPoint: 2,
                    rankThreshold: 10,
                    rewardLimit: 3.6,
                    timeThreshold: 0.6,
                    intervalThreshold: 3600,
                    initialBotsMin: 5,
                    botsChasingLevel: 5,
                    logBase: 2
                }
            });
        }
        this.registerEvent([{
                event: "HallCtl_initRes"
            }]);
    };
    RankTrait.prototype.onHallCtl_initRes = function (t, e) {
        e();
        t.ins.addPreloadRes("Prefab", ["mainRes:prefabs/rank/HallRankBtn"]);
    };
    RankTrait.prototype.getMessageListeners = function () {
        var _t = {
            RankBoxVw_destroy: this.onMsgRankBoxVwDestory.bind(this),
            RankBonusVw_destroy: this.onMsgRankBonusVwDestory.bind(this)
        };
        _t[SimulatorEvent_1.EVT_MSG_KEY_SIMULATOR_INPUT] = this.onSimulatorInput.bind(this);
        return _t;
    };
    RankTrait.prototype.onSimulatorInput = function (t) {
        var e, n, a;
        if (t && t.inputType === GameInputEnum_1.EGameInputEnum.Restart)
            try {
                var i = UserModel_1.default.getInstance();
                if (i.getCurrentGameType() !== i.getMainGameType())
                    return;
                var r = RankModel_1.default.getInstance();
                (null === (a = null === (n = null === (e = r.localData) || void 0 === e ? void 0 : e.rankGameData) || void 0 === n ? void 0 : n.joinActInfo) || void 0 === a ? void 0 : a.levelCollectCount) > 0 && r.resetLevelCollectCount();
            }
            catch (t) {
                console.error("[" + RankTrait_1.traitKey + "] 处理 Restart 输入事件失败: " + (null == t ? void 0 : t.message));
            }
    };
    RankTrait.prototype.onMsgRankBoxVwDestory = function () {
        cc.isValid(this._beforeWinBehavior) && this._beforeWinBehavior.finish();
        this._beforeWinBehavior = null;
    };
    RankTrait.prototype.onHallVw_updateUI = function (t, e) {
        this.checkAutoUpdate();
        this.enterHall(t);
        e();
    };
    RankTrait.prototype.onHallVw_onPopView = function (t, e) {
        e({
            isBreak: this.popIntroduceViewLogic()
        });
    };
    RankTrait.prototype.checkAutoUpdate = function () {
        RankModel_1.default.getInstance().checkAutoUpdate();
    };
    RankTrait.prototype.judgeHasRankReward = function (t) {
        if (t === void 0) { t = false; }
        if (UserModel_1.default.getInstance().getMainGameData().getLevelId() <= this.getLimitLevel())
            return false;
        if (RankModel_1.default.getInstance().isNowActivityFinished()) {
            var e = RankModel_1.default.getInstance().getSelfReward();
            if (null != e) {
                if (!RankModel_1.default.getInstance().hasClaimed()) {
                    RankModel_1.default.getInstance().setClaimed();
                    ControllerManager_1.default.getInstance().pushViewByController("RankBoxController", {
                        isReuse: true,
                        isShowAction: false,
                        myRank: RankModel_1.default.getInstance().getSelfRank(),
                        isGaming: t
                    });
                    var o = RankModel_1.default.getInstance().getChampaignEndData();
                    DChampaignEnd_1.DChampaignEnd.dot(o);
                }
            }
            else if (!RankModel_1.default.getInstance().hasClaimed()) {
                RankModel_1.default.getInstance().setClaimed();
                o = RankModel_1.default.getInstance().getChampaignEndData();
                DChampaignEnd_1.DChampaignEnd.dot(o);
            }
            return !!e;
        }
        return false;
    };
    RankTrait.prototype.judgeFirstOpenRank = function () {
        if (UserModel_1.default.getInstance().getMainGameData().getLevelId() == this.getLimitLevel() + 1) {
            this.updateStartTimeLogic();
            this.popIntroduceViewLogic();
            DGameUnlock_1.DotGameUnlock.dotByType(DGameUnlock_1.EFuncUnlockType.Leaderboard);
        }
    };
    RankTrait.prototype.updateStartTimeLogic = function () {
        RankModel_1.default.getInstance().updateStartTime();
    };
    RankTrait.prototype.enterHall = function (t) {
        var e;
        this.startEnterHall();
        this.executeHomeRankPipeline(null === (e = t.ins) || void 0 === e ? void 0 : e.node, false);
        this.endEnterHall();
    };
    RankTrait.prototype.executeHomeRankPipeline = function (t, e) {
        if (e === void 0) { e = true; }
        this.judgeHasRankReward(false);
        this.updateStartTimeLogic();
        this.createHallButton(t);
        e && this.popIntroduceViewLogic();
    };
    RankTrait.prototype.startEnterHall = function () { };
    RankTrait.prototype.endEnterHall = function () { };
    RankTrait.prototype.popIntroduceViewLogic = function () {
        RankModel_1.default.getInstance();
        if (UserModel_1.default.getInstance().getMainGameData().getLevelId() <= this.getLimitLevel())
            return false;
        if (RankModel_1.default.getInstance().hasOpeningActivity()) {
            if (!RankModel_1.default.getInstance().hasPrompted()) {
                RankModel_1.default.getInstance().setPrompted();
                this.popIntroduceView(true);
                return true;
            }
        }
        else if (RankModel_1.default.getInstance().isBetweenCD()) {
            this.updateStartTimeLogic();
            RankModel_1.default.getInstance().setPrompted();
            this.popIntroduceView(true);
            return true;
        }
        return false;
    };
    RankTrait.prototype.popIntroduceView = function (t) {
        if (t === void 0) { t = false; }
        DGameBtnClick_1.DotGameBtnClick.dotRank(DGameBtnClick_1.ERankClickType.AutoRankIntroduceView);
        ControllerManager_1.default.getInstance().pushViewByController("RankIntroduceController", {
            isReuse: true,
            isShowAction: true,
            isBtnCollect: t
        });
    };
    RankTrait.prototype.createHallButton = function (t) {
        var e = this;
        if (this.checkHallBtnUnlockLevel())
            if (cc.isValid(this._rankBtnNode))
                this._rankBtnNode.getComponent(HallRankBtn_1.default).updateAll();
            else if ("loading" != this._rankBtnState && cc.isValid(t)) {
                this._rankBtnState = "loading";
                HallRankBtn_1.default.createUI().then(function (o) {
                    if (cc.isValid(o) && cc.isValid(t)) {
                        e._rankBtnNode = o;
                        e._rankBtnState = "finish";
                        t.addChild(o);
                        o.getComponent(HallRankBtn_1.default).updateAll();
                    }
                }).catch(function (t) {
                    console.error("[" + RankTrait_1.traitKey + "] 游戏内创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallRankBtn按钮加载失败"));
                });
            }
    };
    RankTrait.prototype.getLimitLevel = function () {
        var t, e = RankModel_1.default.getInstance().devCfg;
        return null !== (t = null == e ? void 0 : e.unLockLevel) && void 0 !== t ? t : 10;
    };
    RankTrait.prototype.checkHallBtnUnlockLevel = function () {
        return !!RankModel_1.default.getInstance().devCfg && UserModel_1.default.getInstance().getMainGameData().getLevelId() > this.getLimitLevel();
    };
    RankTrait.prototype.onMsgRankBonusVwDestory = function () {
        cc.isValid(this._beforeWinBehavior) && this._beforeWinBehavior.finish();
        this._beforeWinBehavior = null;
        if (this._pendingWinControllerArgs) {
            var t = this._pendingWinControllerArgs;
            this._pendingWinControllerArgs = null;
            this._isContinuingWinView = true;
            cc.director.once(cc.Director.EVENT_AFTER_DRAW, function () {
                ControllerManager_1.default.getInstance().pushViewByController("WinController", t, null);
            });
        }
    };
    RankTrait.prototype.onUserModel_getRankCardRes = function (t, e) {
        var o = RankModel_1.default.getInstance().getCurBoardData();
        if (o) {
            e({
                returnVal: o.CollectThing
            });
        }
        else {
            e();
        }
    };
    RankTrait.prototype.onBeforeWinBhv_doOthLgc = function (t, e) {
        this._beforeWinBehavior = t.ins;
        var o = RankModel_1.default.getInstance().getNowState();
        if (RankModel_1.RankActivityState.InProgress != o)
            e();
        else {
            RankModel_1.default.getInstance().levelPassed();
            if (NormalGameData_1.default.getInstance().getRankCardCount() > 0) {
                RankModel_1.default.getInstance().addGameCount();
                this.pushController("RankBonusController", {
                    isReuse: true,
                    isShowAction: false,
                    instance: t.ins
                });
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
            else {
                RankModel_1.default.getInstance().resetWinStreakCount();
                e();
            }
        }
    };
    RankTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        e();
        RankModel_1.default.getInstance().hasOpeningActivity() && this.createColCard(t);
    };
    RankTrait.prototype.createColCard = function (t) {
        var e = this;
        try {
            this.clearRankCollectCard();
            var n = t.ins.context.gameView;
            if (!cc.isValid(n) || !cc.isValid(n.nodeTopEffectRoot))
                return;
            RankCollectCard_1.default.createUI(RankCollectCard_1.default.getUrl()).then(function (t) {
                if (cc.isValid(t))
                    if (n && n.enabledInHierarchy && cc.isValid(n.nodeTopEffectRoot)) {
                        n.nodeTopEffectRoot.addChild(t);
                        t.active = false;
                        e._rankCollectCardView = t;
                        var o = t.getComponent(RankCollectCard_1.default);
                        RankModel_1.default.getInstance().getCurBoardData() && o && o.initUI();
                    }
                    else
                        t.destroy();
            });
        }
        catch (t) {
            console.error("[" + RankTrait_1.traitKey + "] 创建收集卡片失败: " + t.message);
        }
    };
    RankTrait.prototype.showRankCollectCard = function () {
        if (cc.isValid(this._rankCollectCardView)) {
            if (this._rankCollectCardView.active)
                return;
            this._rankCollectCardView.active = true;
            var t = this._rankCollectCardView.getComponent("RankCollectCard");
            t && "function" == typeof t.startShowAnimation && t.startShowAnimation();
        }
    };
    RankTrait.prototype.clearRankCollectCard = function () {
        var t;
        if (cc.isValid(this._rankCollectCardView)) {
            null === (t = this._rankCollectCardView.getComponent(RankCollectCard_1.default)) || void 0 === t || t.clearNode();
            this._rankCollectCardView = null;
        }
    };
    RankTrait.prototype.onBombBhv_finish = function (t, e) {
        if (RankModel_1.default.getInstance().hasOpeningActivity()) {
            var o = t.ins, n = o.context, a = o.effect.data.bombIds[0];
            if (n.getTileNodeByTileId(a).info.tileObject.type == TileTypeEnum_1.ETileType.RankCard) {
                var i = t.args;
                this.checkSpecialCard(i, n);
                e();
            }
            else
                e();
        }
        else
            e();
    };
    RankTrait.prototype.onClearEffBhv_playCollision = function (t, e) {
        this.execWhenClearEff(t, e);
    };
    RankTrait.prototype.execWhenClearEff = function (t, e) {
        var o, n;
        if (RankModel_1.default.getInstance().hasOpeningActivity()) {
            var a = null === (o = t.args) || void 0 === o ? void 0 : o[0], i = null === (n = t.args) || void 0 === n ? void 0 : n[1];
            if (a && i) {
                var r = t.ins, l = r.context, c = l.getTileNodeMap().get(a);
                if (c && c.info && c.info.tileObject) {
                    if (c.info.tileObject.type == TileTypeEnum_1.ETileType.RankCard) {
                        e({
                            isBreak: true,
                            returnType: TraitManager_1.TraitCallbackReturnType.return
                        });
                        r && "function" == typeof r.finish && r.finish();
                        this.checkSpecialCard(null, l);
                    }
                    else
                        e();
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    RankTrait.prototype.checkSpecialCard = function (t, e) {
        var o = RankModel_1.default.getInstance();
        o.getLevelCollectCount();
        o.addLevelCollectCount(2);
        o.getLevelCollectCount();
        this.showRankCollectCard();
        if (this._rankCollectCardView && cc.isValid(this._rankCollectCardView)) {
            var n = this._rankCollectCardView.getComponent("RankCollectCard");
            if (n) {
                "function" == typeof n.addPendingCard && n.addPendingCard(2);
                var a = e.getLastCollisionWorldPos();
                if (a) {
                    var i = n.getCardWorldPosition();
                    i && this.showCollectEffects(a, i, t, e);
                }
            }
        }
    };
    RankTrait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        this.dispatchEvent("closeRankView");
        e();
    };
    RankTrait.prototype.getRankModel = function () {
        return RankModel_1.default.getInstance();
    };
    RankTrait.prototype.showCollectEffects = function (t, e, n, a) {
        var i = this;
        try {
            var r = a.gameView;
            if (!cc.isValid(r) || !cc.isValid(r.nodeTopEffectRoot))
                return;
            RankSpecialCardEffect_1.default.createUI(RankSpecialCardEffect_1.default.getUrl()).then(function (o) {
                if (cc.isValid(o))
                    if (r && r.enabledInHierarchy && cc.isValid(r.nodeTopEffectRoot)) {
                        r.nodeTopEffectRoot.addChild(o);
                        var a = r.nodeTopEffectRoot.convertToNodeSpaceAR(t);
                        o.position = cc.v3(a.x, a.y, 0);
                        var s = o.getComponent(RankSpecialCardEffect_1.default), l = true;
                        if (s && n && n.length >= 2) {
                            s.updatePos(n);
                            l = false;
                        }
                        s.refreshCards().then(function () {
                            if (l) {
                                s.resetCardPositions();
                                s.playCollisionAndSeparation();
                            }
                        }).then(function () {
                            s.playEffect(e, l, i._rankCollectCardView, function () {
                                cc.isValid(o) && o.destroy();
                            });
                        });
                    }
                    else
                        o.destroy();
            });
        }
        catch (t) {
            console.error("[" + RankTrait_1.traitKey + "] 创建特效失败: " + t.message);
        }
    };
    RankTrait.prototype.onMainGameCtrl_getTile = function (t, e) {
        this.judgeFirstOpenRank();
        RankModel_1.default.getInstance().hasOpeningActivity() && (t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.RankCard);
        e({
            returnVal: t.beforReturnVal
        });
    };
    RankTrait.prototype.onWinVw_destroy = function (t, e) {
        t.ins._curLv, this.getLimitLevel();
        this.judgeHasRankReward(true);
        e();
    };
    RankTrait.prototype.onIptShuffle_exec = function (t, e) {
        var n;
        try {
            var a = null === (n = t.args) || void 0 === n ? void 0 : n[0];
            if (!a) {
                e();
                return;
            }
            var i = RankModel_1.default.getInstance();
            i.hasOpeningActivity() && a.from === GameInputEnum_1.EShuffleFrom.Free && i.levelFailed();
            e();
        }
        catch (t) {
            console.error("[" + RankTrait_1.traitKey + "] 处理洗牌事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    RankTrait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            var n = RankModel_1.default.getInstance();
            n.hasOpeningActivity() && n.resetLevelCollectCount();
            e();
        }
        catch (t) {
            console.error("[" + RankTrait_1.traitKey + "] 处理新游戏开始事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    RankTrait.prototype.onFailVw_replay = function (t, e) {
        try {
            var n = RankModel_1.default.getInstance();
            n.hasOpeningActivity() && n.levelFailed();
            e();
        }
        catch (t) {
            console.error("[" + RankTrait_1.traitKey + "] 处理失败界面replay事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    RankTrait.prototype.onRankModel_updTime = function (t, e) {
        e();
    };
    var RankTrait_1;
    RankTrait.traitKey = "Rank";
    __decorate([
        mj.traitEvent("RankTrait_startEnterHall")
    ], RankTrait.prototype, "startEnterHall", null);
    __decorate([
        mj.traitEvent("RankTrait_endEnterHall")
    ], RankTrait.prototype, "endEnterHall", null);
    __decorate([
        mj.traitEvent("RankTrait_getLimitLv")
    ], RankTrait.prototype, "getLimitLevel", null);
    __decorate([
        mj.traitEvent("RankTrait_checkLv")
    ], RankTrait.prototype, "checkHallBtnUnlockLevel", null);
    __decorate([
        mj.traitEvent("RankTrait_createColCard")
    ], RankTrait.prototype, "createColCard", null);
    __decorate([
        mj.traitEvent("RankTrait_chkSpCard")
    ], RankTrait.prototype, "checkSpecialCard", null);
    RankTrait = RankTrait_1 = __decorate([
        mj.trait,
        mj.class("RankTrait")
    ], RankTrait);
    return RankTrait;
}(Trait_1.default));
exports.default = RankTrait;

cc._RF.pop();