import Trait from '../../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../../Scripts/framework/trait/TraitManager';
import HallRankBtn from '../component/HallRankBtn';
import ControllerManager from '../../../../Scripts/framework/manager/ControllerManager';
import UserModel from '../../../../Scripts/gamePlay/user/UserModel';
import RankModel, { RankActivityState } from '../RankModel';
import { ETileType } from '../../../../Scripts/simulator/constant/TileTypeEnum';
import RankCollectCard from '../RankCollectCard';
import NormalGameData from '../../../../Scripts/core/simulator/data/NormalGameData';
import RankSpecialCardEffect from './RankSpecialCardEffect';
import { EShuffleFrom, EGameInputEnum } from '../../../../Scripts/simulator/constant/GameInputEnum';
import { DotGameUnlock, EFuncUnlockType } from '../../../../Scripts/gamePlay/dot/DGameUnlock';
import { DChampaignEnd } from '../../../../Scripts/DChampaignEnd';
import { DotGameBtnClick, ERankClickType } from '../../../../Scripts/dot/DGameBtnClick';
import { EVT_MSG_KEY_SIMULATOR_INPUT } from '../../../../Scripts/core/simulator/events/SimulatorEvent';
@mj.trait
@mj.class("RankTrait")
export default class RankTrait extends Trait {
  _rankBtnNode = null;
  _rankBtnState = "";
  _pendingWinControllerArgs = null;
  _isContinuingWinView = false;
  _rankCollectCardView = null;
  _beforeWinBehavior = null;
  static traitKey = "Rank";
  onLoad() {
    var e;
    super.onLoad.call(this);
    var o = null === (e = this._traitData) || void 0 === e ? void 0 : e.config;
    if (o) {
      RankModel.getInstance().setDevCfg(o);
    } else {
      RankModel.getInstance().setDevCfg({
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
  }
  onHallCtl_initRes(t, e) {
    e();
    t.ins.addPreloadRes("Prefab", ["mainRes:prefabs/rank/HallRankBtn"]);
  }
  getMessageListeners() {
    var _t = {
      RankBoxVw_destroy: this.onMsgRankBoxVwDestory.bind(this),
      RankBonusVw_destroy: this.onMsgRankBonusVwDestory.bind(this)
    };
    _t[EVT_MSG_KEY_SIMULATOR_INPUT] = this.onSimulatorInput.bind(this);
    return _t;
  }
  onSimulatorInput(t) {
    var e, n, a;
    if (t && t.inputType === EGameInputEnum.Restart) try {
      var i = UserModel.getInstance();
      if (i.getCurrentGameType() !== i.getMainGameType()) return;
      var r = RankModel.getInstance();
      (null === (a = null === (n = null === (e = r.localData) || void 0 === e ? void 0 : e.rankGameData) || void 0 === n ? void 0 : n.joinActInfo) || void 0 === a ? void 0 : a.levelCollectCount) > 0 && r.resetLevelCollectCount();
    } catch (t) {
      console.error("[" + RankTrait.traitKey + "] 处理 Restart 输入事件失败: " + (null == t ? void 0 : t.message));
    }
  }
  onMsgRankBoxVwDestory() {
    cc.isValid(this._beforeWinBehavior) && this._beforeWinBehavior.finish();
    this._beforeWinBehavior = null;
  }
  onHallVw_updateUI(t, e) {
    this.checkAutoUpdate();
    this.enterHall(t);
    e();
  }
  onHallVw_onPopView(t, e) {
    e({
      isBreak: this.popIntroduceViewLogic()
    });
  }
  checkAutoUpdate() {
    RankModel.getInstance().checkAutoUpdate();
  }
  judgeHasRankReward(t = false) {
    if (UserModel.getInstance().getMainGameData().getLevelId() <= this.getLimitLevel()) return false;
    if (RankModel.getInstance().isNowActivityFinished()) {
      var e = RankModel.getInstance().getSelfReward();
      if (null != e) {
        if (!RankModel.getInstance().hasClaimed()) {
          RankModel.getInstance().setClaimed();
          ControllerManager.getInstance().pushViewByController("RankBoxController", {
            isReuse: true,
            isShowAction: false,
            myRank: RankModel.getInstance().getSelfRank(),
            isGaming: t
          });
          var o = RankModel.getInstance().getChampaignEndData();
          DChampaignEnd.dot(o);
        }
      } else if (!RankModel.getInstance().hasClaimed()) {
        RankModel.getInstance().setClaimed();
        o = RankModel.getInstance().getChampaignEndData();
        DChampaignEnd.dot(o);
      }
      return !!e;
    }
    return false;
  }
  judgeFirstOpenRank() {
    if (UserModel.getInstance().getMainGameData().getLevelId() == this.getLimitLevel() + 1) {
      this.updateStartTimeLogic();
      this.popIntroduceViewLogic();
      DotGameUnlock.dotByType(EFuncUnlockType.Leaderboard);
    }
  }
  updateStartTimeLogic() {
    RankModel.getInstance().updateStartTime();
  }
  enterHall(t) {
    var e;
    this.startEnterHall();
    this.executeHomeRankPipeline(null === (e = t.ins) || void 0 === e ? void 0 : e.node, false);
    this.endEnterHall();
  }
  executeHomeRankPipeline(t, e = true) {
    this.judgeHasRankReward(false);
    this.updateStartTimeLogic();
    this.createHallButton(t);
    e && this.popIntroduceViewLogic();
  }
  @mj.traitEvent("RankTrait_startEnterHall")
  startEnterHall() {}
  @mj.traitEvent("RankTrait_endEnterHall")
  endEnterHall() {}
  popIntroduceViewLogic() {
    RankModel.getInstance();
    if (UserModel.getInstance().getMainGameData().getLevelId() <= this.getLimitLevel()) return false;
    if (RankModel.getInstance().hasOpeningActivity()) {
      if (!RankModel.getInstance().hasPrompted()) {
        RankModel.getInstance().setPrompted();
        this.popIntroduceView(true);
        return true;
      }
    } else if (RankModel.getInstance().isBetweenCD()) {
      this.updateStartTimeLogic();
      RankModel.getInstance().setPrompted();
      this.popIntroduceView(true);
      return true;
    }
    return false;
  }
  popIntroduceView(t = false) {
    // DotGameBtnClick.dotRank(ERankClickType.AutoRankIntroduceView);
    // ControllerManager.getInstance().pushViewByController("RankIntroduceController", {
    //   isReuse: true,
    //   isShowAction: true,
    //   isBtnCollect: t
    // });

    void t;
  }
  createHallButton(t) {
    var e = this;
    if (this.checkHallBtnUnlockLevel()) if (cc.isValid(this._rankBtnNode)) this._rankBtnNode.getComponent(HallRankBtn).updateAll();else if ("loading" != this._rankBtnState && cc.isValid(t)) {
      this._rankBtnState = "loading";
      HallRankBtn.createUI().then(function (o) {
        if (cc.isValid(o) && cc.isValid(t)) {
          e._rankBtnNode = o;
          e._rankBtnState = "finish";
          t.addChild(o);
          o.getComponent(HallRankBtn).updateAll();
        }
      }).catch(function (t) {
        console.error("[" + RankTrait.traitKey + "] 游戏内创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallRankBtn按钮加载失败"));
      });
    }
  }
  @mj.traitEvent("RankTrait_getLimitLv")
  getLimitLevel() {
    var t,
      e = RankModel.getInstance().devCfg;
    return null !== (t = null == e ? void 0 : e.unLockLevel) && void 0 !== t ? t : 10;
  }
  @mj.traitEvent("RankTrait_checkLv")
  checkHallBtnUnlockLevel() {
    return !!RankModel.getInstance().devCfg && UserModel.getInstance().getMainGameData().getLevelId() > this.getLimitLevel();
  }
  onMsgRankBonusVwDestory() {
    cc.isValid(this._beforeWinBehavior) && this._beforeWinBehavior.finish();
    this._beforeWinBehavior = null;
    if (this._pendingWinControllerArgs) {
      var t = this._pendingWinControllerArgs;
      this._pendingWinControllerArgs = null;
      this._isContinuingWinView = true;
      cc.director.once(cc.Director.EVENT_AFTER_DRAW, function () {
        ControllerManager.getInstance().pushViewByController("WinController", t, null);
      });
    }
  }
  onUserModel_getRankCardRes(t, e) {
    var o = RankModel.getInstance().getCurBoardData();
    if (o) {
      e({
        returnVal: o.CollectThing
      });
    } else {
      e();
    }
  }
  onBeforeWinBhv_doOthLgc(t, e) {
    this._beforeWinBehavior = t.ins;
    var o = RankModel.getInstance().getNowState();
    if (RankActivityState.InProgress != o) e();else {
      RankModel.getInstance().levelPassed();
      if (NormalGameData.getInstance().getRankCardCount() > 0) {
        RankModel.getInstance().addGameCount();
        // Skip rank bonus page and continue to normal win settlement directly.
        e();
      } else {
        RankModel.getInstance().resetWinStreakCount();
        e();
      }
    }
  }
  onInitViewBhv_crtTls(t, e) {
    e();
    RankModel.getInstance().hasOpeningActivity() && this.createColCard(t);
  }
  @mj.traitEvent("RankTrait_createColCard")
  createColCard(t) {
    var e = this;
    try {
      this.clearRankCollectCard();
      var n = t.ins.context.gameView;
      if (!cc.isValid(n) || !cc.isValid(n.nodeTopEffectRoot)) return;
      RankCollectCard.createUI(RankCollectCard.getUrl()).then(function (t) {
        if (cc.isValid(t)) if (n && n.enabledInHierarchy && cc.isValid(n.nodeTopEffectRoot)) {
          n.nodeTopEffectRoot.addChild(t);
          t.active = false;
          e._rankCollectCardView = t;
          var o = t.getComponent(RankCollectCard);
          RankModel.getInstance().getCurBoardData() && o && o.initUI();
        } else t.destroy();
      });
    } catch (t) {
      console.error("[" + RankTrait.traitKey + "] 创建收集卡片失败: " + t.message);
    }
  }
  showRankCollectCard() {
    if (cc.isValid(this._rankCollectCardView)) {
      if (this._rankCollectCardView.active) return;
      this._rankCollectCardView.active = true;
      var t = this._rankCollectCardView.getComponent("RankCollectCard");
      t && "function" == typeof t.startShowAnimation && t.startShowAnimation();
    }
  }
  clearRankCollectCard() {
    var t;
    if (cc.isValid(this._rankCollectCardView)) {
      null === (t = this._rankCollectCardView.getComponent(RankCollectCard)) || void 0 === t || t.clearNode();
      this._rankCollectCardView = null;
    }
  }
  onBombBhv_finish(t, e) {
    if (RankModel.getInstance().hasOpeningActivity()) {
      var o = t.ins,
        n = o.context,
        a = o.effect.data.bombIds[0];
      if (n.getTileNodeByTileId(a).info.tileObject.type == ETileType.RankCard) {
        var i = t.args;
        this.checkSpecialCard(i, n);
        e();
      } else e();
    } else e();
  }
  onClearEffBhv_playCollision(t, e) {
    this.execWhenClearEff(t, e);
  }
  execWhenClearEff(t, e) {
    var o, n;
    if (RankModel.getInstance().hasOpeningActivity()) {
      var a = null === (o = t.args) || void 0 === o ? void 0 : o[0],
        i = null === (n = t.args) || void 0 === n ? void 0 : n[1];
      if (a && i) {
        var r = t.ins,
          l = r.context,
          c = l.getTileNodeMap().get(a);
        if (c && c.info && c.info.tileObject) {
          if (c.info.tileObject.type == ETileType.RankCard) {
            e({
              isBreak: true,
              returnType: TraitCallbackReturnType.return
            });
            r && "function" == typeof r.finish && r.finish();
            this.checkSpecialCard(null, l);
          } else e();
        } else e();
      } else e();
    } else e();
  }
  @mj.traitEvent("RankTrait_chkSpCard")
  checkSpecialCard(t, e) {
    var o = RankModel.getInstance();
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
  }
  onMainGameCtrl_vwLoad(t, e) {
    this.dispatchEvent("closeRankView");
    e();
  }
  getRankModel() {
    return RankModel.getInstance();
  }
  showCollectEffects(t, e, n, a) {
    var i = this;
    try {
      var r = a.gameView;
      if (!cc.isValid(r) || !cc.isValid(r.nodeTopEffectRoot)) return;
      RankSpecialCardEffect.createUI(RankSpecialCardEffect.getUrl()).then(function (o) {
        if (cc.isValid(o)) if (r && r.enabledInHierarchy && cc.isValid(r.nodeTopEffectRoot)) {
          r.nodeTopEffectRoot.addChild(o);
          var a = r.nodeTopEffectRoot.convertToNodeSpaceAR(t);
          o.position = cc.v3(a.x, a.y, 0);
          var s = o.getComponent(RankSpecialCardEffect),
            l = true;
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
        } else o.destroy();
      });
    } catch (t) {
      console.error("[" + RankTrait.traitKey + "] 创建特效失败: " + t.message);
    }
  }
  onMainGameCtrl_getTile(t, e) {
    this.judgeFirstOpenRank();
    RankModel.getInstance().hasOpeningActivity() && (t.beforReturnVal = t.beforReturnVal + "," + ETileType.RankCard);
    e({
      returnVal: t.beforReturnVal
    });
  }
  onWinVw_destroy(t, e) {
    t.ins._curLv, this.getLimitLevel();
    this.judgeHasRankReward(true);
    e();
  }
  onIptShuffle_exec(t, e) {
    var n;
    try {
      var a = null === (n = t.args) || void 0 === n ? void 0 : n[0];
      if (!a) {
        e();
        return;
      }
      var i = RankModel.getInstance();
      i.hasOpeningActivity() && a.from === EShuffleFrom.Free && i.levelFailed();
      e();
    } catch (t) {
      console.error("[" + RankTrait.traitKey + "] 处理洗牌事件失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onGsListener_onNewGame(t, e) {
    try {
      var n = RankModel.getInstance();
      n.hasOpeningActivity() && n.resetLevelCollectCount();
      e();
    } catch (t) {
      console.error("[" + RankTrait.traitKey + "] 处理新游戏开始事件失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onFailVw_replay(t, e) {
    try {
      var n = RankModel.getInstance();
      n.hasOpeningActivity() && n.levelFailed();
      e();
    } catch (t) {
      console.error("[" + RankTrait.traitKey + "] 处理失败界面replay事件失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onRankModel_updTime(t, e) {
    e();
  }
}