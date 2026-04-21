import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("RankEndSequenceTrait")
export default class RankEndSequenceTrait extends Trait {
  rankDataUsed = {};
  introViewIns = null;
  static traitKey = "RankEndSequence";
  getMessageListeners() {
    return {
      RankBoxVw_destroy: this.onRankBoxVwDestroy.bind(this)
    };
  }
  isInGameScene() {
    return MjGameType.None != UserModel.getInstance().getCurrentGameType();
  }
  onRankBoxVwDestroy() {
    var t,
      e,
      r = null === (e = null === (t = this.introViewIns) || void 0 === t ? void 0 : t.delegate) || void 0 === e ? void 0 : e.rootView;
    this.isInGameScene() || ControllerManager.getInstance().pushViewByController("RankController", {
      isReuse: true,
      isShowAction: false
    });
    if (cc.isValid(r)) {
      r.opacity = 255;
      var n = this.introViewIns.node;
      cc.Tween.stopAllByTarget(n);
      var o = n.getComponent(cc.Widget);
      o.enabled = false;
      n.scale = 0.8;
      cc.tween(n).to(0.1, {
        scale: 1
      }).call(function () {
        cc.isValid(n) && (o.enabled = true);
      }).start();
    }
  }
  onRankIntroVw_show(t, e) {
    if ("prefabs/rank/RankBoxView" == ControllerManager.getInstance().getTopViewControllerIncludingAlerts().viewClass.getUrl()) {
      this.introViewIns = t.ins;
      this.introViewIns.delegate.rootView.opacity = 0;
    }
    e();
  }
  onRankBoxVw_show(t, e) {
    t.ins.setBgOpacity(118);
    e();
  }
  onRankBoxCtrl_initRes(t, e) {
    var r = mj.getClassByName("RankModel");
    if (r) {
      var n = r.getInstance();
      this.rankDataUsed.selfRank = n.getSelfRank();
      this.rankDataUsed.boardData = GameUtils.deepClone(n.getCurBoardData());
      this.rankDataUsed.rankList = GameUtils.deepClone(n.getRankList(true) || []);
      this.isInGameScene() || ControllerManager.getInstance().pushViewByController("RankController", {
        isReuse: true,
        isShowAction: false,
        isOldData: true
      });
      e();
    } else e();
  }
  onRankVw_getLeftTime(t, e) {
    if (t.ins._isOldData) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: 0
      });
    } else {
      e();
    }
  }
  onRankVw_getSelfRank(t, e) {
    if (t.ins._isOldData) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: this.rankDataUsed.selfRank
      });
    } else {
      e();
    }
  }
  onRankVw_getRankList(t, e) {
    if (t.ins._isOldData) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: this.rankDataUsed.rankList
      });
    } else {
      e();
    }
  }
  onRankVw_getBoardData(t, e) {
    if (t.ins._isOldData) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: this.rankDataUsed.boardData
      });
    } else {
      e();
    }
  }
  onRankVw_closeOutCD(t, e) {
    if (t.ins._isOldData) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
      t.ins.setTimeString();
    } else e();
  }
}