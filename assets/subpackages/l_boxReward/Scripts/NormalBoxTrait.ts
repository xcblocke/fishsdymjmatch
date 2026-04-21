import { EGetItemReasonId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import NormalGameData from '../../../Scripts/core/simulator/data/NormalGameData';
import Tile2NormalGameData from '../../../Scripts/core/simulator/data/Tile2NormalGameData';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import Trait from '../../../Scripts/framework/trait/Trait';
import BoxRewardUI from './BoxRewardUI';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
@mj.trait
@mj.class("NormalBoxTrait")
export default class NormalBoxTrait extends Trait {
  requireRes = ["prefabs/boxReward/RewardUI", "prefabs/boxReward/OpenAnim", "prefabs/boxReward/BoxBarItem"];
  static traitKey = "NormalBox";
  static nextTimeOut = -1;
  onLoad() {
    super.onLoad.call(this);
  }
  onWinCtrl_initRes(t, e) {
    var i = t.ins;
    null == i || i.addPreloadRes("Prefab", this.requireRes);
    e();
  }
  onTile2WinCtrl_initRes(t, e) {
    var i = t.ins;
    null == i || i.addPreloadRes("Prefab", this.requireRes);
    e();
  }
  onBeforeWinBhv_doOthLgc(t, e) {
    var i = NormalGameData.getInstance().getLevelId() - 1;
    this.tryGiveBoxReward(i, "主关卡");
    e();
  }
  onTile2BfWinBhv_doOthLgc(t, e) {
    var i = Tile2NormalGameData.getInstance().getLevelId() - 1;
    this.tryGiveBoxReward(i, "Tile2关卡");
    e();
  }
  onWinVw_popNextView(t, e) {
    var o,
      n = t.ins;
    t.args[0] = t.args[0] || {};
    if (cc.isValid(n)) {
      var a = n.delegate,
        r = ((null === (o = null == a ? void 0 : a.args) || void 0 === o ? void 0 : o.data) || {}).curLv,
        s = void 0 === r ? 1 : r,
        c = n.getContentNode();
      if (cc.isValid(c)) {
        var l = c.getChildByName("RewardUI");
        if (cc.isValid(l)) try {
          l.getComponent(BoxRewardUI).showBoxRewardUI(s, this._traitData.config, function (i) {
            i && (t.args[0].hasBoxReward = true);
            e();
          });
        } catch (t) {
          console.error("[" + NormalBoxTrait.traitKey + "] 显示宝箱奖励UI失败: " + (null == t ? void 0 : t.message));
          e();
        } else e();
      } else e();
    } else e();
  }
  onTile2WinVw_popNextView(t, e) {
    var o,
      n = t.ins;
    t.args[0] = t.args[0] || {};
    if (cc.isValid(n)) {
      var a = n.delegate,
        r = ((null === (o = null == a ? void 0 : a.args) || void 0 === o ? void 0 : o.data) || {}).curLv,
        s = void 0 === r ? 1 : r,
        c = n.getContentNode();
      if (cc.isValid(c)) {
        var l = c.getChildByName("RewardUI");
        if (cc.isValid(l)) try {
          l.getComponent(BoxRewardUI).showBoxRewardUI(s, this._traitData.config, function (i) {
            i && (t.args[0].hasBoxReward = true);
            e();
          });
        } catch (t) {
          console.error("[" + NormalBoxTrait.traitKey + "] 显示宝箱奖励UI失败: " + (null == t ? void 0 : t.message));
          e();
        } else e();
      } else e();
    } else e();
  }
  onWinCtrl_viewShow(t, e) {
    var i = t.ins,
      o = null == i ? void 0 : i.rootView;
    if (cc.isValid(o)) {
      var n = i._viewComponent;
      if (cc.isValid(n)) {
        var a = n.getContentNode();
        if (cc.isValid(a)) {
          var r = a.getChildByName("RewardUI");
          if (!cc.isValid(r)) {
            r = n.createUISync(BoxRewardUI);
            if (cc.isValid(r)) {
              a.addChild(r);
              r.opacity = 0;
            }
          }
        }
      }
    }
    e();
  }
  onTile2WinCtrl_viewShow(t, e) {
    var i = t.ins,
      o = null == i ? void 0 : i.rootView;
    if (cc.isValid(o)) {
      var n = i._viewComponent;
      if (cc.isValid(n)) {
        var a = n.getContentNode();
        if (cc.isValid(a)) {
          var r = a.getChildByName("RewardUI");
          if (!cc.isValid(r)) {
            r = n.createUISync(BoxRewardUI);
            if (cc.isValid(r)) {
              a.addChild(r);
              r.opacity = 0;
            }
          }
        }
      }
    }
    e();
  }
  @mj.traitEvent("NorBox_tryGiveBoxReward")
  tryGiveBoxReward(t, e) {
    if (this.canGainBoxReward(t)) {
      var i = UserModel.getInstance().getCurrentGameType(),
        o = GameUtils.getInputAddPropType(i),
        n = {
          inputType: o,
          propType: "shuffle",
          num: this.traitData.config.refresh,
          reasonId: EGetItemReasonId.LevelBox,
          reasonInfo: e + "宝箱奖励_到达第" + t + "关"
        },
        a = {
          inputType: o,
          propType: "hitTips",
          num: this.traitData.config.hint,
          reasonId: EGetItemReasonId.LevelBox,
          reasonInfo: e + "宝箱奖励_到达第" + t + "关"
        };
      GameInteraction.input(n);
      GameInteraction.input(a);
    }
  }
  @mj.traitEvent("NorBox_canGainBoxReward")
  canGainBoxReward(t) {
    var e = this._traitData.config,
      i = e.rewardLevels,
      o = (t - 1) % e.level;
    return i.includes(o + 1);
  }
  @mj.traitEvent("NorBox_getRemainProgress")
  getRemainingProgress() {
    var t = UserModel.getInstance().getMainGameData().getLevelId() - 1,
      e = this._traitData.config,
      i = e.rewardLevels,
      o = t % e.level;
    return i.find(function (t) {
      return t > o;
    }) - o;
  }
  @mj.traitEvent("NorBox_getBoxTagProgress")
  getBoxTargetProgress() {
    var t = UserModel.getInstance().getMainGameData().getLevelId() - 1,
      e = this._traitData.config,
      i = e.rewardLevels,
      o = t % e.level,
      n = i.find(function (t) {
        return t > o;
      });
    return void 0 !== n ? n : -1;
  }
}