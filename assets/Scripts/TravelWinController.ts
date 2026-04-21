import { EGameInputEnum } from './simulator/constant/GameInputEnum';
import { EGetItemReasonId } from './core/simulator/constant/GameTypeEnums';
import TravelGameData from './core/simulator/data/TravelGameData';
import { GameInteraction } from './GameInteraction/GameInteraction';
import ViewController, { viewMode } from './framework/controller/ViewController';
import { DataReader } from './framework/data/DataReader';
import BadgeMode, { BadgeType } from './gamePlay/badge/mode/BadgeMode';
import { ConfigType } from './gamePlay/base/data/ConfigType';
import { ItemTypeKey } from './user/IUserData';
import { ETravelRewardType } from './config/TravelConfig';
import TravelGameModel from './gamePlay/travel/model/TravelGameModel';
import TravelWinView from './view/TravelWinView';
@mj.class("TravelWinController")
export default class TravelWinController extends ViewController {
  viewClass = TravelWinView;
  viewMode = viewMode.PANEL;
  @mj.traitEvent("TLWinCtrl_initRes")
  initDependRes() {
    this.addPreloadRes("Prefab", "prefabs/journey/CollectItem");
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
    var t = __read(this.canGainTravelReward(), 2),
      o = t[0],
      n = t[1];
    o && this.addLevelReward(n);
    this.args.canGain = o;
    this.viewDoAction("onViewLoad", this.args);
  }
  addLevelReward(e) {
    var t = TravelGameData.getInstance().getLevelId() - 1,
      o = TravelGameModel.getInstance(),
      n = DataReader.getByKey(ConfigType.reward_config, e.reward);
    if (e.type === ETravelRewardType.EBadge) {
      var i = DataReader.getByKey(ConfigType.item_config, n.Items[0]);
      BadgeMode.getInstance().addBadge(i.ID, BadgeType.Journey, o.getCurJourney());
    } else if (e.type === ETravelRewardType.EGiftBox) for (var r = n.Items, a = 0; a < r.length; a++) {
      var p = r[a],
        g = n.Counts[a],
        _ = {
          inputType: EGameInputEnum.AddProp,
          propType: ItemTypeKey[p],
          num: g,
          reasonId: EGetItemReasonId.Journey,
          reasonInfo: "旅行活动奖励_到达第" + t + "关"
        };
      GameInteraction.input(_);
    }
  }
  @mj.traitEvent("TLWinCtrl_viewShow")
  viewDidShow(t) {
    t = t || this.args;
    super.viewDidShow.call(this, t);
    this.viewDoAction("showWinView", t);
  }
  viewDidHide() {
    super.viewDidHide.call(this);
  }
  canGainTravelReward() {
    var e = TravelGameData.getInstance().getLevelId() - 1,
      t = TravelGameModel.getInstance(),
      o = t.getRewardInfo(t.getCurJourney()),
      n = o.findIndex(function (t) {
        return t.lv >= e;
      });
    if (n < -1) return [false, null];
    var i = o[n];
    return i.type !== ETravelRewardType.EGiftBox && i.type !== ETravelRewardType.EBadge || i.lv !== e || i.gain ? [false, null] : [true, i];
  }
}