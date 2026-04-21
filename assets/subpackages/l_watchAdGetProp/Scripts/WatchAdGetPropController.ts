import { EGameInputEnum, EShuffleFrom } from '../../../Scripts/simulator/constant/GameInputEnum';
import { EGetItemReasonId, MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import AdManager from '../../../Scripts/base/ad/AdManager';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { DotGameAdShowStage } from '../../../Scripts/gamePlay/dot/DGameAdShowStage';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import WatchAdGetPropView, { WatchAdGetPropType } from './WatchAdGetPropView';
@mj.class("WatchAdGetPropController")
export default class WatchAdGetPropController extends ViewController {
  viewClass = WatchAdGetPropView;
  viewMode = viewMode.ALERT;
  _propType = null;
  getMessageListeners() {
    return {};
  }
  getPropType() {
    return this._propType;
  }
  viewDidLoad() {
    var e;
    super.viewDidLoad.call(this);
    this._propType = null === (e = this.args) || void 0 === e ? void 0 : e.type;
    if (null != this._propType) this.viewDoAction("setContent", this._propType);else {
      console.error("[WatchAdGetPropController] 未传入道具类型");
      this.close();
    }
  }
  refreshForReuse(e) {
    super.refreshForReuse.call(this, e);
    this._propType = null == e ? void 0 : e.type;
    this.viewDoAction("setContent", this._propType);
  }
  @mj.traitEvent("WatchAdCtrl_playAd")
  playAd() {
    var t,
      e,
      r = this;
    if (this._propType === WatchAdGetPropType.shuffle) {
      t = "watchad_get_shuffle";
      e = EAdPosition.InGameMotivation_Reshuffle;
    } else if (this._propType === WatchAdGetPropType.hitTips) {
      t = "watchad_get_hint";
      e = EAdPosition.InGameMotivation_Hint;
    } else {
      t = "watchad_get_revert";
      e = EAdPosition.InGameMotivation_Revert;
    }
    DotGameAdShowStage.dot(false, "clickAdLock");
    AdManager.getInstance().checkVideoAdIsReady() && cc.isValid(this.rootView) && (this.rootView.opacity = 0);
    AdManager.getInstance().playVideoAd(e, {
      onSuccess: function () {
        r.onAdSuccess();
      },
      onFailed: function (t) {
        r.onAdFailed(t);
      }
    }, t, {
      type: this._propType
    });
  }
  @mj.traitEvent("WatchAdCtrl_onAdSuccess")
  onAdSuccess() {
    cc.isValid(this.rootView) && this.close();
    var t;
    t = this._propType === WatchAdGetPropType.shuffle ? "shuffle" : this._propType === WatchAdGetPropType.hitTips ? "hitTips" : "revert";
    var e = UserModel.getInstance().getCurrentGameType(),
      r = {
        inputType: GameUtils.getInputAddPropType(e),
        propType: t,
        num: this.getWatchAdItemNum(t),
        reasonId: EGetItemReasonId.AdReward,
        reasonInfo: "游戏内激励广告"
      };
    GameInteraction.input(r);
    this.autoUseItem(t);
  }
  @mj.traitEvent("WatchAdCtrl_autoUse")
  autoUseItem(t) {
    var e = UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal;
    if ("shuffle" === t) {
      var r = e ? EGameInputEnum.Tile2Shuffle : EGameInputEnum.Shuffle;
      GameInteraction.input({
        inputType: r,
        from: EShuffleFrom.WatchAd,
        isFree: false
      });
    } else if ("hitTips" === t) {
      r = e ? EGameInputEnum.Tile2HitTips : EGameInputEnum.HitTips;
      GameInteraction.input({
        inputType: r
      });
    } else "revert" === t && GameInteraction.input({
      inputType: EGameInputEnum.Tile2Revert
    });
  }
  @mj.traitEvent("WatchAdCtrl_itemNum")
  getWatchAdItemNum(t) {
    if (UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal) {
      if ("shuffle" === t) return 1;
      if ("hitTips" === t) return 2;
      if ("revert" === t) return 2;
    }
    return 1;
  }
  onAdFailed(t) {
    this.rootView && cc.isValid(this.rootView) && (t ? cc.isValid(this.rootView) && (this.rootView.opacity = 255) : this.close());
  }
}