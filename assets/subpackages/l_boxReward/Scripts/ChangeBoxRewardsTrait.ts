import { EGetItemReasonId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import { EItemType, ItemTypeKey } from '../../../Scripts/user/IUserData';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { convertToBoxRewardsConfig } from './BoxRewardTypes';
var n;
(n = {})[EItemType.Shuffle] = ["texture/boxReward/reward_icon_refresh", "texture/boxReward/result_icon_refresh"];
n[EItemType.Hint] = ["texture/boxReward/reward_icon_hint", "texture/boxReward/result_icon_hint"];
n[EItemType.Undo] = ["texture/common/ad_icon_revert", "texture/boxReward/result_icon_return"];
var m = n;
@mj.trait
@mj.class("ChangeBoxRewardsTrait")
export default class ChangeBoxRewardsTrait extends Trait {
  config = null;
  static traitKey = "ChangeBoxRewards";
  onLoad() {
    super.onLoad.call(this);
    this.config = {
      rewardLevel: this.traitData.rewardLevel,
      reward1: this.traitData.reward1,
      reward2: this.traitData.reward2
    };
  }
  onNorBox_tryGiveBoxReward(t, e) {
    var i = t.ins,
      o = t.args[0];
    if (i.canGainBoxReward(o)) {
      var n = this.getReward(o);
      this.gainBoxReward(n, true);
      e({
        returnType: TraitCallbackReturnType.jump
      });
    } else e();
  }
  getReward(t) {
    return Math.floor(t / this.config.rewardLevel) % 2 == 0 ? this.config.reward2 : this.config.reward1;
  }
  onNorBox_canGainBoxReward(t, e) {
    var i = t.args[0],
      o = i > 0 && i % this.config.rewardLevel == 0;
    e({
      returnType: TraitCallbackReturnType.return,
      returnVal: o
    });
  }
  gainBoxReward(t, e) {
    for (var i = UserModel.getInstance().getMainGameData(), o = i.getLevelId() - 1, n = e ? 1 : t.adScale - 1, a = e ? EGetItemReasonId.LevelBox : EGetItemReasonId.LevelBoxAd, r = e ? "主关卡宝箱奖励_到达第" + o + "关" : "主关卡宝箱奖励_看广告翻倍_到达第" + o + "关", d = GameUtils.getInputAddPropType(i.gameType), p = 0; p < t.items.length; p++) {
      var f = t.items[p],
        m = {
          inputType: d,
          propType: ItemTypeKey[f.item],
          num: f.count * n,
          reasonId: a,
          reasonInfo: r
        };
      GameInteraction.input(m);
    }
  }
  onNorBox_getRemainProgress(t, e) {
    var i = (UserModel.getInstance().getMainGameData().getLevelId() - 1) % this.config.rewardLevel,
      o = this.config.rewardLevel - i;
    e({
      returnType: TraitCallbackReturnType.return,
      returnVal: o
    });
  }
  onNorBox_getBoxTagProgress(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      returnVal: this.config.rewardLevel
    });
  }
  getCurRewardLevel(t) {
    return (Math.floor((t - 1) / this.config.rewardLevel) + 1) * this.config.rewardLevel;
  }
  onBoxRwdUI_showBoxRewardUI(t, e) {
    var i = t.args[0] - 1,
      o = this.getCurRewardLevel(i),
      n = this.getReward(o),
      a = convertToBoxRewardsConfig(this.config, n);
    t.args[1] = a;
    e();
  }
  updateRewardNodes(t, e, i) {
    for (var o, n = null !== (o = e.rewards) && void 0 !== o ? o : [], a = i ? 1 : 0, r = 0; r < t.length; r++) {
      var s = t[r],
        c = s.icon,
        l = s.value,
        d = n[r];
      if (d) {
        BaseSprite.refreshWithNode(c, m[d.item][a]);
        l.getComponent(cc.Label).string = d.count.toString();
      }
    }
  }
  onBoxRwdUI_updateRwdCount(t, e) {
    var i = t.ins,
      o = i.config,
      n = i.getRewardNodes();
    this.updateRewardNodes(n, o, true);
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
  onBoxOpenUI_updateRwdCount(t, e) {
    var i = t.ins,
      o = i.config,
      n = i.getRewardNodes();
    this.updateRewardNodes(n, o, false);
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
  onBoxOpenUI_deliverTools(t, e) {
    var i = t.ins.config;
    if (i.rewards) {
      var o = {
        adScale: i.adScale,
        items: i.rewards
      };
      this.gainBoxReward(o, false);
      e({
        returnType: TraitCallbackReturnType.jump
      });
    } else e();
  }
  onBoxOpenUI_getRwdEndCount(t, e) {
    for (var i, o = t.ins.config, n = null !== (i = null == o ? void 0 : o.rewards) && void 0 !== i ? i : [], a = [0, 0], r = 0; r < 2; r++) if (r < n.length) {
      var s = n[r];
      a[r] = s.count * o.adScale;
    }
    e({
      returnType: TraitCallbackReturnType.jump,
      returnVal: [a[0], a[1]]
    });
  }
}