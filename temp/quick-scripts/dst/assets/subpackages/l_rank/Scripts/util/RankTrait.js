
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/util/RankTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy91dGlsL1JhbmtUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQThEO0FBQzlELGlGQUEyRjtBQUMzRix3REFBbUQ7QUFDbkQsNkZBQXdGO0FBQ3hGLHlFQUFvRTtBQUNwRSwwQ0FBNEQ7QUFDNUQsb0ZBQWdGO0FBQ2hGLHNEQUFpRDtBQUNqRCx5RkFBb0Y7QUFDcEYsaUVBQTREO0FBQzVELHNGQUFvRztBQUNwRyw0RUFBOEY7QUFDOUYsbUVBQWtFO0FBQ2xFLHVFQUF3RjtBQUN4RiwyRkFBdUc7QUFHdkc7SUFBdUMsNkJBQUs7SUFBNUM7UUFBQSxxRUF5WkM7UUF4WkMsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsbUJBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsK0JBQXlCLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLDBCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QiwwQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsd0JBQWtCLEdBQUcsSUFBSSxDQUFDOztJQW1aNUIsQ0FBQztrQkF6Wm9CLFNBQVM7SUFRNUIsMEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDM0UsSUFBSSxDQUFDLEVBQUU7WUFDTCxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENB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LENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDcEcsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCx1Q0FBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDOztJQWpaTSxrQkFBUSxHQUFHLE1BQU0sQ0FBQztJQXVIekI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDO21EQUN2QjtJQUVuQjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7aURBQ3ZCO0lBMkNqQjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7a0RBS3JDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDOzREQUdsQztJQWtERDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7a0RBbUJ4QztJQXNERDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7cURBa0JwQztJQTlUa0IsU0FBUztRQUY3QixFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO09BQ0QsU0FBUyxDQXlaN0I7SUFBRCxnQkFBQztDQXpaRCxBQXlaQyxDQXpac0MsZUFBSyxHQXlaM0M7a0JBelpvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBIYWxsUmFua0J0biBmcm9tICcuLi9jb21wb25lbnQvSGFsbFJhbmtCdG4nO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBSYW5rTW9kZWwsIHsgUmFua0FjdGl2aXR5U3RhdGUgfSBmcm9tICcuLi9SYW5rTW9kZWwnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCBSYW5rQ29sbGVjdENhcmQgZnJvbSAnLi4vUmFua0NvbGxlY3RDYXJkJztcbmltcG9ydCBOb3JtYWxHYW1lRGF0YSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2RhdGEvTm9ybWFsR2FtZURhdGEnO1xuaW1wb3J0IFJhbmtTcGVjaWFsQ2FyZEVmZmVjdCBmcm9tICcuL1JhbmtTcGVjaWFsQ2FyZEVmZmVjdCc7XG5pbXBvcnQgeyBFU2h1ZmZsZUZyb20sIEVHYW1lSW5wdXRFbnVtIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBEb3RHYW1lVW5sb2NrLCBFRnVuY1VubG9ja1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZVVubG9jayc7XG5pbXBvcnQgeyBEQ2hhbXBhaWduRW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9EQ2hhbXBhaWduRW5kJztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRVJhbmtDbGlja1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2RvdC9ER2FtZUJ0bkNsaWNrJztcbmltcG9ydCB7IEVWVF9NU0dfS0VZX1NJTVVMQVRPUl9JTlBVVCB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvZXZlbnRzL1NpbXVsYXRvckV2ZW50JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUmFua1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9yYW5rQnRuTm9kZSA9IG51bGw7XG4gIF9yYW5rQnRuU3RhdGUgPSBcIlwiO1xuICBfcGVuZGluZ1dpbkNvbnRyb2xsZXJBcmdzID0gbnVsbDtcbiAgX2lzQ29udGludWluZ1dpblZpZXcgPSBmYWxzZTtcbiAgX3JhbmtDb2xsZWN0Q2FyZFZpZXcgPSBudWxsO1xuICBfYmVmb3JlV2luQmVoYXZpb3IgPSBudWxsO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlJhbmtcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciBvID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY29uZmlnO1xuICAgIGlmIChvKSB7XG4gICAgICBSYW5rTW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXREZXZDZmcobyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLnNldERldkNmZyh7XG4gICAgICAgIHVuTG9ja0xldmVsOiAxMCxcbiAgICAgICAgZGlmQWN0VGltZUNEOiAwLFxuICAgICAgICBzYW1lQWN0VGltZXNDRDogMixcbiAgICAgICAgY2FuUmV3YXJkQ291bnQ6IDYsXG4gICAgICAgIHJvYm90UGFyYW1zOiB7XG4gICAgICAgICAgcm9ib3RzTnVtOiA0OSxcbiAgICAgICAgICBiYXNlTGV2ZWxDb25zdDogNyxcbiAgICAgICAgICBtaW5Qb2ludDogMixcbiAgICAgICAgICByYW5rVGhyZXNob2xkOiAxMCxcbiAgICAgICAgICByZXdhcmRMaW1pdDogMy42LFxuICAgICAgICAgIHRpbWVUaHJlc2hvbGQ6IDAuNixcbiAgICAgICAgICBpbnRlcnZhbFRocmVzaG9sZDogMzYwMCxcbiAgICAgICAgICBpbml0aWFsQm90c01pbjogNSxcbiAgICAgICAgICBib3RzQ2hhc2luZ0xldmVsOiA1LFxuICAgICAgICAgIGxvZ0Jhc2U6IDJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChbe1xuICAgICAgZXZlbnQ6IFwiSGFsbEN0bF9pbml0UmVzXCJcbiAgICB9XSk7XG4gIH1cbiAgb25IYWxsQ3RsX2luaXRSZXModCwgZSkge1xuICAgIGUoKTtcbiAgICB0Lmlucy5hZGRQcmVsb2FkUmVzKFwiUHJlZmFiXCIsIFtcIm1haW5SZXM6cHJlZmFicy9yYW5rL0hhbGxSYW5rQnRuXCJdKTtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdCA9IHtcbiAgICAgIFJhbmtCb3hWd19kZXN0cm95OiB0aGlzLm9uTXNnUmFua0JveFZ3RGVzdG9yeS5iaW5kKHRoaXMpLFxuICAgICAgUmFua0JvbnVzVndfZGVzdHJveTogdGhpcy5vbk1zZ1JhbmtCb251c1Z3RGVzdG9yeS5iaW5kKHRoaXMpXG4gICAgfTtcbiAgICBfdFtFVlRfTVNHX0tFWV9TSU1VTEFUT1JfSU5QVVRdID0gdGhpcy5vblNpbXVsYXRvcklucHV0LmJpbmQodGhpcyk7XG4gICAgcmV0dXJuIF90O1xuICB9XG4gIG9uU2ltdWxhdG9ySW5wdXQodCkge1xuICAgIHZhciBlLCBuLCBhO1xuICAgIGlmICh0ICYmIHQuaW5wdXRUeXBlID09PSBFR2FtZUlucHV0RW51bS5SZXN0YXJ0KSB0cnkge1xuICAgICAgdmFyIGkgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIGlmIChpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBpLmdldE1haW5HYW1lVHlwZSgpKSByZXR1cm47XG4gICAgICB2YXIgciA9IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgICAgKG51bGwgPT09IChhID0gbnVsbCA9PT0gKG4gPSBudWxsID09PSAoZSA9IHIubG9jYWxEYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnJhbmtHYW1lRGF0YSkgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi5qb2luQWN0SW5mbykgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5sZXZlbENvbGxlY3RDb3VudCkgPiAwICYmIHIucmVzZXRMZXZlbENvbGxlY3RDb3VudCgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBSYW5rVHJhaXQudHJhaXRLZXkgKyBcIl0g5aSE55CGIFJlc3RhcnQg6L6T5YWl5LqL5Lu25aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cbiAgb25Nc2dSYW5rQm94VndEZXN0b3J5KCkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5fYmVmb3JlV2luQmVoYXZpb3IpICYmIHRoaXMuX2JlZm9yZVdpbkJlaGF2aW9yLmZpbmlzaCgpO1xuICAgIHRoaXMuX2JlZm9yZVdpbkJlaGF2aW9yID0gbnVsbDtcbiAgfVxuICBvbkhhbGxWd191cGRhdGVVSSh0LCBlKSB7XG4gICAgdGhpcy5jaGVja0F1dG9VcGRhdGUoKTtcbiAgICB0aGlzLmVudGVySGFsbCh0KTtcbiAgICBlKCk7XG4gIH1cbiAgb25IYWxsVndfb25Qb3BWaWV3KHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRoaXMucG9wSW50cm9kdWNlVmlld0xvZ2ljKClcbiAgICB9KTtcbiAgfVxuICBjaGVja0F1dG9VcGRhdGUoKSB7XG4gICAgUmFua01vZGVsLmdldEluc3RhbmNlKCkuY2hlY2tBdXRvVXBkYXRlKCk7XG4gIH1cbiAganVkZ2VIYXNSYW5rUmV3YXJkKHQgPSBmYWxzZSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZURhdGEoKS5nZXRMZXZlbElkKCkgPD0gdGhpcy5nZXRMaW1pdExldmVsKCkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoUmFua01vZGVsLmdldEluc3RhbmNlKCkuaXNOb3dBY3Rpdml0eUZpbmlzaGVkKCkpIHtcbiAgICAgIHZhciBlID0gUmFua01vZGVsLmdldEluc3RhbmNlKCkuZ2V0U2VsZlJld2FyZCgpO1xuICAgICAgaWYgKG51bGwgIT0gZSkge1xuICAgICAgICBpZiAoIVJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmhhc0NsYWltZWQoKSkge1xuICAgICAgICAgIFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLnNldENsYWltZWQoKTtcbiAgICAgICAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiUmFua0JveENvbnRyb2xsZXJcIiwge1xuICAgICAgICAgICAgaXNSZXVzZTogdHJ1ZSxcbiAgICAgICAgICAgIGlzU2hvd0FjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICBteVJhbms6IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFNlbGZSYW5rKCksXG4gICAgICAgICAgICBpc0dhbWluZzogdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBvID0gUmFua01vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q2hhbXBhaWduRW5kRGF0YSgpO1xuICAgICAgICAgIERDaGFtcGFpZ25FbmQuZG90KG8pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFSYW5rTW9kZWwuZ2V0SW5zdGFuY2UoKS5oYXNDbGFpbWVkKCkpIHtcbiAgICAgICAgUmFua01vZGVsLmdldEluc3RhbmNlKCkuc2V0Q2xhaW1lZCgpO1xuICAgICAgICBvID0gUmFua01vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q2hhbXBhaWduRW5kRGF0YSgpO1xuICAgICAgICBEQ2hhbXBhaWduRW5kLmRvdChvKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAhIWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBqdWRnZUZpcnN0T3BlblJhbmsoKSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lRGF0YSgpLmdldExldmVsSWQoKSA9PSB0aGlzLmdldExpbWl0TGV2ZWwoKSArIDEpIHtcbiAgICAgIHRoaXMudXBkYXRlU3RhcnRUaW1lTG9naWMoKTtcbiAgICAgIHRoaXMucG9wSW50cm9kdWNlVmlld0xvZ2ljKCk7XG4gICAgICBEb3RHYW1lVW5sb2NrLmRvdEJ5VHlwZShFRnVuY1VubG9ja1R5cGUuTGVhZGVyYm9hcmQpO1xuICAgIH1cbiAgfVxuICB1cGRhdGVTdGFydFRpbWVMb2dpYygpIHtcbiAgICBSYW5rTW9kZWwuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGFydFRpbWUoKTtcbiAgfVxuICBlbnRlckhhbGwodCkge1xuICAgIHZhciBlO1xuICAgIHRoaXMuc3RhcnRFbnRlckhhbGwoKTtcbiAgICB0aGlzLmV4ZWN1dGVIb21lUmFua1BpcGVsaW5lKG51bGwgPT09IChlID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUubm9kZSwgZmFsc2UpO1xuICAgIHRoaXMuZW5kRW50ZXJIYWxsKCk7XG4gIH1cbiAgZXhlY3V0ZUhvbWVSYW5rUGlwZWxpbmUodCwgZSA9IHRydWUpIHtcbiAgICB0aGlzLmp1ZGdlSGFzUmFua1Jld2FyZChmYWxzZSk7XG4gICAgdGhpcy51cGRhdGVTdGFydFRpbWVMb2dpYygpO1xuICAgIHRoaXMuY3JlYXRlSGFsbEJ1dHRvbih0KTtcbiAgICBlICYmIHRoaXMucG9wSW50cm9kdWNlVmlld0xvZ2ljKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rVHJhaXRfc3RhcnRFbnRlckhhbGxcIilcbiAgc3RhcnRFbnRlckhhbGwoKSB7fVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtUcmFpdF9lbmRFbnRlckhhbGxcIilcbiAgZW5kRW50ZXJIYWxsKCkge31cbiAgcG9wSW50cm9kdWNlVmlld0xvZ2ljKCkge1xuICAgIFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZURhdGEoKS5nZXRMZXZlbElkKCkgPD0gdGhpcy5nZXRMaW1pdExldmVsKCkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoUmFua01vZGVsLmdldEluc3RhbmNlKCkuaGFzT3BlbmluZ0FjdGl2aXR5KCkpIHtcbiAgICAgIGlmICghUmFua01vZGVsLmdldEluc3RhbmNlKCkuaGFzUHJvbXB0ZWQoKSkge1xuICAgICAgICBSYW5rTW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRQcm9tcHRlZCgpO1xuICAgICAgICB0aGlzLnBvcEludHJvZHVjZVZpZXcodHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoUmFua01vZGVsLmdldEluc3RhbmNlKCkuaXNCZXR3ZWVuQ0QoKSkge1xuICAgICAgdGhpcy51cGRhdGVTdGFydFRpbWVMb2dpYygpO1xuICAgICAgUmFua01vZGVsLmdldEluc3RhbmNlKCkuc2V0UHJvbXB0ZWQoKTtcbiAgICAgIHRoaXMucG9wSW50cm9kdWNlVmlldyh0cnVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcG9wSW50cm9kdWNlVmlldyh0ID0gZmFsc2UpIHtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90UmFuayhFUmFua0NsaWNrVHlwZS5BdXRvUmFua0ludHJvZHVjZVZpZXcpO1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJSYW5rSW50cm9kdWNlQ29udHJvbGxlclwiLCB7XG4gICAgICBpc1JldXNlOiB0cnVlLFxuICAgICAgaXNTaG93QWN0aW9uOiB0cnVlLFxuICAgICAgaXNCdG5Db2xsZWN0OiB0XG4gICAgfSk7XG4gIH1cbiAgY3JlYXRlSGFsbEJ1dHRvbih0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLmNoZWNrSGFsbEJ0blVubG9ja0xldmVsKCkpIGlmIChjYy5pc1ZhbGlkKHRoaXMuX3JhbmtCdG5Ob2RlKSkgdGhpcy5fcmFua0J0bk5vZGUuZ2V0Q29tcG9uZW50KEhhbGxSYW5rQnRuKS51cGRhdGVBbGwoKTtlbHNlIGlmIChcImxvYWRpbmdcIiAhPSB0aGlzLl9yYW5rQnRuU3RhdGUgJiYgY2MuaXNWYWxpZCh0KSkge1xuICAgICAgdGhpcy5fcmFua0J0blN0YXRlID0gXCJsb2FkaW5nXCI7XG4gICAgICBIYWxsUmFua0J0bi5jcmVhdGVVSSgpLnRoZW4oZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobykgJiYgY2MuaXNWYWxpZCh0KSkge1xuICAgICAgICAgIGUuX3JhbmtCdG5Ob2RlID0gbztcbiAgICAgICAgICBlLl9yYW5rQnRuU3RhdGUgPSBcImZpbmlzaFwiO1xuICAgICAgICAgIHQuYWRkQ2hpbGQobyk7XG4gICAgICAgICAgby5nZXRDb21wb25lbnQoSGFsbFJhbmtCdG4pLnVwZGF0ZUFsbCgpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgUmFua1RyYWl0LnRyYWl0S2V5ICsgXCJdIOa4uOaIj+WGheWIm+W7uuaMiemSruWksei0pTpcIiArICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSB8fCBcIkhhbGxSYW5rQnRu5oyJ6ZKu5Yqg6L295aSx6LSlXCIpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtUcmFpdF9nZXRMaW1pdEx2XCIpXG4gIGdldExpbWl0TGV2ZWwoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlID0gUmFua01vZGVsLmdldEluc3RhbmNlKCkuZGV2Q2ZnO1xuICAgIHJldHVybiBudWxsICE9PSAodCA9IG51bGwgPT0gZSA/IHZvaWQgMCA6IGUudW5Mb2NrTGV2ZWwpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiAxMDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtUcmFpdF9jaGVja0x2XCIpXG4gIGNoZWNrSGFsbEJ0blVubG9ja0xldmVsKCkge1xuICAgIHJldHVybiAhIVJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmRldkNmZyAmJiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZURhdGEoKS5nZXRMZXZlbElkKCkgPiB0aGlzLmdldExpbWl0TGV2ZWwoKTtcbiAgfVxuICBvbk1zZ1JhbmtCb251c1Z3RGVzdG9yeSgpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuX2JlZm9yZVdpbkJlaGF2aW9yKSAmJiB0aGlzLl9iZWZvcmVXaW5CZWhhdmlvci5maW5pc2goKTtcbiAgICB0aGlzLl9iZWZvcmVXaW5CZWhhdmlvciA9IG51bGw7XG4gICAgaWYgKHRoaXMuX3BlbmRpbmdXaW5Db250cm9sbGVyQXJncykge1xuICAgICAgdmFyIHQgPSB0aGlzLl9wZW5kaW5nV2luQ29udHJvbGxlckFyZ3M7XG4gICAgICB0aGlzLl9wZW5kaW5nV2luQ29udHJvbGxlckFyZ3MgPSBudWxsO1xuICAgICAgdGhpcy5faXNDb250aW51aW5nV2luVmlldyA9IHRydWU7XG4gICAgICBjYy5kaXJlY3Rvci5vbmNlKGNjLkRpcmVjdG9yLkVWRU5UX0FGVEVSX0RSQVcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIldpbkNvbnRyb2xsZXJcIiwgdCwgbnVsbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb25Vc2VyTW9kZWxfZ2V0UmFua0NhcmRSZXModCwgZSkge1xuICAgIHZhciBvID0gUmFua01vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VyQm9hcmREYXRhKCk7XG4gICAgaWYgKG8pIHtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5WYWw6IG8uQ29sbGVjdFRoaW5nXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkJlZm9yZVdpbkJodl9kb090aExnYyh0LCBlKSB7XG4gICAgdGhpcy5fYmVmb3JlV2luQmVoYXZpb3IgPSB0LmlucztcbiAgICB2YXIgbyA9IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE5vd1N0YXRlKCk7XG4gICAgaWYgKFJhbmtBY3Rpdml0eVN0YXRlLkluUHJvZ3Jlc3MgIT0gbykgZSgpO2Vsc2Uge1xuICAgICAgUmFua01vZGVsLmdldEluc3RhbmNlKCkubGV2ZWxQYXNzZWQoKTtcbiAgICAgIGlmIChOb3JtYWxHYW1lRGF0YS5nZXRJbnN0YW5jZSgpLmdldFJhbmtDYXJkQ291bnQoKSA+IDApIHtcbiAgICAgICAgUmFua01vZGVsLmdldEluc3RhbmNlKCkuYWRkR2FtZUNvdW50KCk7XG4gICAgICAgIHRoaXMucHVzaENvbnRyb2xsZXIoXCJSYW5rQm9udXNDb250cm9sbGVyXCIsIHtcbiAgICAgICAgICBpc1JldXNlOiB0cnVlLFxuICAgICAgICAgIGlzU2hvd0FjdGlvbjogZmFsc2UsXG4gICAgICAgICAgaW5zdGFuY2U6IHQuaW5zXG4gICAgICAgIH0pO1xuICAgICAgICBlKHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLnJlc2V0V2luU3RyZWFrQ291bnQoKTtcbiAgICAgICAgZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkluaXRWaWV3Qmh2X2NydFRscyh0LCBlKSB7XG4gICAgZSgpO1xuICAgIFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmhhc09wZW5pbmdBY3Rpdml0eSgpICYmIHRoaXMuY3JlYXRlQ29sQ2FyZCh0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtUcmFpdF9jcmVhdGVDb2xDYXJkXCIpXG4gIGNyZWF0ZUNvbENhcmQodCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0cnkge1xuICAgICAgdGhpcy5jbGVhclJhbmtDb2xsZWN0Q2FyZCgpO1xuICAgICAgdmFyIG4gPSB0Lmlucy5jb250ZXh0LmdhbWVWaWV3O1xuICAgICAgaWYgKCFjYy5pc1ZhbGlkKG4pIHx8ICFjYy5pc1ZhbGlkKG4ubm9kZVRvcEVmZmVjdFJvb3QpKSByZXR1cm47XG4gICAgICBSYW5rQ29sbGVjdENhcmQuY3JlYXRlVUkoUmFua0NvbGxlY3RDYXJkLmdldFVybCgpKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHQpKSBpZiAobiAmJiBuLmVuYWJsZWRJbkhpZXJhcmNoeSAmJiBjYy5pc1ZhbGlkKG4ubm9kZVRvcEVmZmVjdFJvb3QpKSB7XG4gICAgICAgICAgbi5ub2RlVG9wRWZmZWN0Um9vdC5hZGRDaGlsZCh0KTtcbiAgICAgICAgICB0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIGUuX3JhbmtDb2xsZWN0Q2FyZFZpZXcgPSB0O1xuICAgICAgICAgIHZhciBvID0gdC5nZXRDb21wb25lbnQoUmFua0NvbGxlY3RDYXJkKTtcbiAgICAgICAgICBSYW5rTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJCb2FyZERhdGEoKSAmJiBvICYmIG8uaW5pdFVJKCk7XG4gICAgICAgIH0gZWxzZSB0LmRlc3Ryb3koKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBSYW5rVHJhaXQudHJhaXRLZXkgKyBcIl0g5Yib5bu65pS26ZuG5Y2h54mH5aSx6LSlOiBcIiArIHQubWVzc2FnZSk7XG4gICAgfVxuICB9XG4gIHNob3dSYW5rQ29sbGVjdENhcmQoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fcmFua0NvbGxlY3RDYXJkVmlldykpIHtcbiAgICAgIGlmICh0aGlzLl9yYW5rQ29sbGVjdENhcmRWaWV3LmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgdGhpcy5fcmFua0NvbGxlY3RDYXJkVmlldy5hY3RpdmUgPSB0cnVlO1xuICAgICAgdmFyIHQgPSB0aGlzLl9yYW5rQ29sbGVjdENhcmRWaWV3LmdldENvbXBvbmVudChcIlJhbmtDb2xsZWN0Q2FyZFwiKTtcbiAgICAgIHQgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiB0LnN0YXJ0U2hvd0FuaW1hdGlvbiAmJiB0LnN0YXJ0U2hvd0FuaW1hdGlvbigpO1xuICAgIH1cbiAgfVxuICBjbGVhclJhbmtDb2xsZWN0Q2FyZCgpIHtcbiAgICB2YXIgdDtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9yYW5rQ29sbGVjdENhcmRWaWV3KSkge1xuICAgICAgbnVsbCA9PT0gKHQgPSB0aGlzLl9yYW5rQ29sbGVjdENhcmRWaWV3LmdldENvbXBvbmVudChSYW5rQ29sbGVjdENhcmQpKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5jbGVhck5vZGUoKTtcbiAgICAgIHRoaXMuX3JhbmtDb2xsZWN0Q2FyZFZpZXcgPSBudWxsO1xuICAgIH1cbiAgfVxuICBvbkJvbWJCaHZfZmluaXNoKHQsIGUpIHtcbiAgICBpZiAoUmFua01vZGVsLmdldEluc3RhbmNlKCkuaGFzT3BlbmluZ0FjdGl2aXR5KCkpIHtcbiAgICAgIHZhciBvID0gdC5pbnMsXG4gICAgICAgIG4gPSBvLmNvbnRleHQsXG4gICAgICAgIGEgPSBvLmVmZmVjdC5kYXRhLmJvbWJJZHNbMF07XG4gICAgICBpZiAobi5nZXRUaWxlTm9kZUJ5VGlsZUlkKGEpLmluZm8udGlsZU9iamVjdC50eXBlID09IEVUaWxlVHlwZS5SYW5rQ2FyZCkge1xuICAgICAgICB2YXIgaSA9IHQuYXJncztcbiAgICAgICAgdGhpcy5jaGVja1NwZWNpYWxDYXJkKGksIG4pO1xuICAgICAgICBlKCk7XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25DbGVhckVmZkJodl9wbGF5Q29sbGlzaW9uKHQsIGUpIHtcbiAgICB0aGlzLmV4ZWNXaGVuQ2xlYXJFZmYodCwgZSk7XG4gIH1cbiAgZXhlY1doZW5DbGVhckVmZih0LCBlKSB7XG4gICAgdmFyIG8sIG47XG4gICAgaWYgKFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmhhc09wZW5pbmdBY3Rpdml0eSgpKSB7XG4gICAgICB2YXIgYSA9IG51bGwgPT09IChvID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvWzBdLFxuICAgICAgICBpID0gbnVsbCA9PT0gKG4gPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG5bMV07XG4gICAgICBpZiAoYSAmJiBpKSB7XG4gICAgICAgIHZhciByID0gdC5pbnMsXG4gICAgICAgICAgbCA9IHIuY29udGV4dCxcbiAgICAgICAgICBjID0gbC5nZXRUaWxlTm9kZU1hcCgpLmdldChhKTtcbiAgICAgICAgaWYgKGMgJiYgYy5pbmZvICYmIGMuaW5mby50aWxlT2JqZWN0KSB7XG4gICAgICAgICAgaWYgKGMuaW5mby50aWxlT2JqZWN0LnR5cGUgPT0gRVRpbGVUeXBlLlJhbmtDYXJkKSB7XG4gICAgICAgICAgICBlKHtcbiAgICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHIgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiByLmZpbmlzaCAmJiByLmZpbmlzaCgpO1xuICAgICAgICAgICAgdGhpcy5jaGVja1NwZWNpYWxDYXJkKG51bGwsIGwpO1xuICAgICAgICAgIH0gZWxzZSBlKCk7XG4gICAgICAgIH0gZWxzZSBlKCk7XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rVHJhaXRfY2hrU3BDYXJkXCIpXG4gIGNoZWNrU3BlY2lhbENhcmQodCwgZSkge1xuICAgIHZhciBvID0gUmFua01vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgby5nZXRMZXZlbENvbGxlY3RDb3VudCgpO1xuICAgIG8uYWRkTGV2ZWxDb2xsZWN0Q291bnQoMik7XG4gICAgby5nZXRMZXZlbENvbGxlY3RDb3VudCgpO1xuICAgIHRoaXMuc2hvd1JhbmtDb2xsZWN0Q2FyZCgpO1xuICAgIGlmICh0aGlzLl9yYW5rQ29sbGVjdENhcmRWaWV3ICYmIGNjLmlzVmFsaWQodGhpcy5fcmFua0NvbGxlY3RDYXJkVmlldykpIHtcbiAgICAgIHZhciBuID0gdGhpcy5fcmFua0NvbGxlY3RDYXJkVmlldy5nZXRDb21wb25lbnQoXCJSYW5rQ29sbGVjdENhcmRcIik7XG4gICAgICBpZiAobikge1xuICAgICAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG4uYWRkUGVuZGluZ0NhcmQgJiYgbi5hZGRQZW5kaW5nQ2FyZCgyKTtcbiAgICAgICAgdmFyIGEgPSBlLmdldExhc3RDb2xsaXNpb25Xb3JsZFBvcygpO1xuICAgICAgICBpZiAoYSkge1xuICAgICAgICAgIHZhciBpID0gbi5nZXRDYXJkV29ybGRQb3NpdGlvbigpO1xuICAgICAgICAgIGkgJiYgdGhpcy5zaG93Q29sbGVjdEVmZmVjdHMoYSwgaSwgdCwgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfdndMb2FkKHQsIGUpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXCJjbG9zZVJhbmtWaWV3XCIpO1xuICAgIGUoKTtcbiAgfVxuICBnZXRSYW5rTW9kZWwoKSB7XG4gICAgcmV0dXJuIFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICB9XG4gIHNob3dDb2xsZWN0RWZmZWN0cyh0LCBlLCBuLCBhKSB7XG4gICAgdmFyIGkgPSB0aGlzO1xuICAgIHRyeSB7XG4gICAgICB2YXIgciA9IGEuZ2FtZVZpZXc7XG4gICAgICBpZiAoIWNjLmlzVmFsaWQocikgfHwgIWNjLmlzVmFsaWQoci5ub2RlVG9wRWZmZWN0Um9vdCkpIHJldHVybjtcbiAgICAgIFJhbmtTcGVjaWFsQ2FyZEVmZmVjdC5jcmVhdGVVSShSYW5rU3BlY2lhbENhcmRFZmZlY3QuZ2V0VXJsKCkpLnRoZW4oZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobykpIGlmIChyICYmIHIuZW5hYmxlZEluSGllcmFyY2h5ICYmIGNjLmlzVmFsaWQoci5ub2RlVG9wRWZmZWN0Um9vdCkpIHtcbiAgICAgICAgICByLm5vZGVUb3BFZmZlY3RSb290LmFkZENoaWxkKG8pO1xuICAgICAgICAgIHZhciBhID0gci5ub2RlVG9wRWZmZWN0Um9vdC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0KTtcbiAgICAgICAgICBvLnBvc2l0aW9uID0gY2MudjMoYS54LCBhLnksIDApO1xuICAgICAgICAgIHZhciBzID0gby5nZXRDb21wb25lbnQoUmFua1NwZWNpYWxDYXJkRWZmZWN0KSxcbiAgICAgICAgICAgIGwgPSB0cnVlO1xuICAgICAgICAgIGlmIChzICYmIG4gJiYgbi5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgcy51cGRhdGVQb3Mobik7XG4gICAgICAgICAgICBsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHMucmVmcmVzaENhcmRzKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobCkge1xuICAgICAgICAgICAgICBzLnJlc2V0Q2FyZFBvc2l0aW9ucygpO1xuICAgICAgICAgICAgICBzLnBsYXlDb2xsaXNpb25BbmRTZXBhcmF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLnBsYXlFZmZlY3QoZSwgbCwgaS5fcmFua0NvbGxlY3RDYXJkVmlldywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjYy5pc1ZhbGlkKG8pICYmIG8uZGVzdHJveSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBvLmRlc3Ryb3koKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBSYW5rVHJhaXQudHJhaXRLZXkgKyBcIl0g5Yib5bu654m55pWI5aSx6LSlOiBcIiArIHQubWVzc2FnZSk7XG4gICAgfVxuICB9XG4gIG9uTWFpbkdhbWVDdHJsX2dldFRpbGUodCwgZSkge1xuICAgIHRoaXMuanVkZ2VGaXJzdE9wZW5SYW5rKCk7XG4gICAgUmFua01vZGVsLmdldEluc3RhbmNlKCkuaGFzT3BlbmluZ0FjdGl2aXR5KCkgJiYgKHQuYmVmb3JSZXR1cm5WYWwgPSB0LmJlZm9yUmV0dXJuVmFsICsgXCIsXCIgKyBFVGlsZVR5cGUuUmFua0NhcmQpO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVmFsOiB0LmJlZm9yUmV0dXJuVmFsXG4gICAgfSk7XG4gIH1cbiAgb25XaW5Wd19kZXN0cm95KHQsIGUpIHtcbiAgICB0Lmlucy5fY3VyTHYsIHRoaXMuZ2V0TGltaXRMZXZlbCgpO1xuICAgIHRoaXMuanVkZ2VIYXNSYW5rUmV3YXJkKHRydWUpO1xuICAgIGUoKTtcbiAgfVxuICBvbklwdFNodWZmbGVfZXhlYyh0LCBlKSB7XG4gICAgdmFyIG47XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhID0gbnVsbCA9PT0gKG4gPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG5bMF07XG4gICAgICBpZiAoIWEpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaSA9IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgICAgaS5oYXNPcGVuaW5nQWN0aXZpdHkoKSAmJiBhLmZyb20gPT09IEVTaHVmZmxlRnJvbS5GcmVlICYmIGkubGV2ZWxGYWlsZWQoKTtcbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgUmFua1RyYWl0LnRyYWl0S2V5ICsgXCJdIOWkhOeQhua0l+eJjOS6i+S7tuWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uR3NMaXN0ZW5lcl9vbk5ld0dhbWUodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgbiA9IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgICAgbi5oYXNPcGVuaW5nQWN0aXZpdHkoKSAmJiBuLnJlc2V0TGV2ZWxDb2xsZWN0Q291bnQoKTtcbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgUmFua1RyYWl0LnRyYWl0S2V5ICsgXCJdIOWkhOeQhuaWsOa4uOaIj+W8gOWni+S6i+S7tuWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uRmFpbFZ3X3JlcGxheSh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBuID0gUmFua01vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgICBuLmhhc09wZW5pbmdBY3Rpdml0eSgpICYmIG4ubGV2ZWxGYWlsZWQoKTtcbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgUmFua1RyYWl0LnRyYWl0S2V5ICsgXCJdIOWkhOeQhuWksei0peeVjOmdonJlcGxheeS6i+S7tuWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uUmFua01vZGVsX3VwZFRpbWUodCwgZSkge1xuICAgIGUoKTtcbiAgfVxufSJdfQ==