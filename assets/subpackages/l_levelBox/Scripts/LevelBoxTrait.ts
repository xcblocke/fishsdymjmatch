import { EGetItemReasonId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import Trait from '../../../Scripts/framework/trait/Trait';
import { ItemTypeKey } from '../../../Scripts/user/IUserData';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import LevelBoxModel from './LevelBoxModel';
import LevelBoxProgress from './LevelBoxProgress';
import { ELevelBoxCondType } from './LevelBoxTypes';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
@mj.trait
@mj.class("LevelBoxTrait")
export default class LevelBoxTrait extends Trait {
  requireRes = ["prefabs/levelBox/BoxProgress", "prefabs/levelBox/BarItem"];
  levelBox = null;
  static traitKey = "LevelBox";
  static nextTimeOut = -1;
  onLoad() {
    super.onLoad.call(this);
    var e = LevelBoxModel.getInstance();
    if (e.getCurBox() === ELevelBoxCondType.None) {
      e.setNewBox(ELevelBoxCondType.Level);
      this.initProgress();
    }
    this.registerEvent([{
      event: "Tile2WinCtrl_initRes"
    }, {
      event: "Tile2WinVw_popNextView",
      priority: 110
    }, {
      event: "Tile2BfWinBhv_doOthLgc",
      priority: 20
    }, {
      event: "Tile2WinCtrl_viewShow"
    }]);
  }
  initProgress() {
    var t = LevelBoxModel.getInstance(),
      e = (UserModel.getInstance().getMainGameData().getLevelId() - 1) % this.getBoxLimit(t, ELevelBoxCondType.Level);
    t.setProgress(e);
  }
  getBoxLimit(t, e) {
    var i,
      o = t.getCurBoxLimits(null === (i = this.traitData.boxes[e]) || void 0 === i ? void 0 : i.limits);
    return e === ELevelBoxCondType.Level ? o[0] : e === ELevelBoxCondType.Combo ? o[1] : 999999999;
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
  checkBoxCanUpdateProgress(t, e, i) {
    var o,
      n = e.getCurBoxLimits(null === (o = this.traitData.boxes[t]) || void 0 === o ? void 0 : o.limits);
    return t === ELevelBoxCondType.Level || t === ELevelBoxCondType.Combo && i.getCurMaxCombo() > n[0];
  }
  gainBoxReward(t, e) {
    for (var i = UserModel.getInstance().getMainGameData(), o = i.getLevelId() - 1, n = e ? 1 : t.adScale - 1, r = e ? EGetItemReasonId.LevelBox : EGetItemReasonId.LevelBoxAd, l = e ? "主关卡宝箱奖励_到达第" + o + "关" : "主关卡宝箱奖励_看广告翻倍_到达第" + o + "关", d = GameUtils.getInputAddPropType(i.gameType), h = 0; h < t.items.length; h++) {
      var u = t.items[h],
        f = {
          inputType: d,
          propType: ItemTypeKey[u.item],
          num: u.count * n,
          reasonId: r,
          reasonInfo: l
        };
      GameInteraction.input(f);
    }
  }
  getLevelDescParam(t) {
    var e,
      i = UserModel.getInstance().getMainGameData().getLevelId() - 1,
      o = t.getCurBox(),
      n = t.getProgress(),
      r = t.getCurBoxLimits(null === (e = this.traitData.boxes[o]) || void 0 === e ? void 0 : e.limits);
    if (o === ELevelBoxCondType.Level) return [i - n + (a = r[0])];
    if (o === ELevelBoxCondType.Combo) {
      var a = r[1];
      return [r[0], n, a];
    }
    return [];
  }
  generateLevelBox(t) {
    var e = t.getCurBox(),
      i = this.getBoxLimit(t, e);
    return {
      level: UserModel.getInstance().getMainGameData().getLevelId() - 1,
      progress: {
        current: t.getProgress(),
        total: i,
        condType: e,
        condValue: [],
        isGain: false,
        change: false
      },
      rewards: {
        adScale: this.traitData.boxes[e].adScale,
        items: this.traitData.boxes[e].items
      }
    };
  }
  getNextBoxType(t) {
    var e = this.traitData.boxes.types.length,
      i = t.getRewardCount() % e;
    return this.traitData.boxes.types[i];
  }
  @mj.traitEvent("LevelBox_initNextBox")
  initNextBox(t, e) {
    var i = this.traitData.boxes[e];
    if (e === ELevelBoxCondType.Combo && i.randomCombo) {
      var o = i.limits[1],
        n = i.minCombo,
        r = i.maxCombo,
        a = GameUtils.randomInt(n, r);
      t.setCurBoxLimits([a, o]);
    } else t.setCurBoxLimits(i.limits);
  }
  onBeforeWinBhv_doOthLgc(t, e) {
    this.updateBoxProgress();
    e();
  }
  onTile2BfWinBhv_doOthLgc(t, e) {
    this.updateBoxProgress();
    e();
  }
  updateBoxProgress() {
    var t = UserModel.getInstance().getMainGameData(),
      e = LevelBoxModel.getInstance(),
      i = e.getCurBox(),
      o = this.getBoxLimit(e, i);
    this.levelBox = this.generateLevelBox(e);
    if (this.checkBoxCanUpdateProgress(i, e, t)) {
      e.addProgress();
      this.levelBox.progress.current = e.getProgress();
      this.levelBox.progress.change = true;
    }
    this.levelBox.progress.condValue = this.getLevelDescParam(e);
    if (e.getProgress() >= o) {
      this.gainBoxReward(this.levelBox.rewards, true);
      this.levelBox.progress.isGain = true;
      var n = this.getNextBoxType(e);
      e.setNewBox(n);
      this.initNextBox(e, n);
      this.levelBox.nextBox = this.generateLevelBox(e);
      this.levelBox.nextBox.progress.condValue = this.getLevelDescParam(e);
    }
  }
  onWinVw_popNextView(t, e) {
    try {
      this.playProgressAction(t, e);
    } catch (t) {
      e();
      console.error("[" + LevelBoxTrait.traitKey + "] 显示宝箱进度UI失败: " + (null == t ? void 0 : t.message));
    }
  }
  onTile2WinVw_popNextView(t, e) {
    try {
      this.playProgressAction(t, e);
    } catch (t) {
      e();
      console.error("[" + LevelBoxTrait.traitKey + "] 显示宝箱进度UI失败: " + (null == t ? void 0 : t.message));
    }
  }
  playProgressAction(t, e) {
    var i = this,
      o = t.ins,
      n = false;
    if (cc.isValid(o)) {
      var r = o.getContentNode();
      if (cc.isValid(r)) {
        var a = r.getChildByName("BoxProgress");
        if (cc.isValid(a)) {
          n = true;
          a.getComponent(LevelBoxProgress).showBoxRewardUI(this.levelBox, function () {
            i.popRewardView(t, e);
          });
        }
      }
    }
    n || e();
  }
  onWinCtrl_viewShow(t, e) {
    var i = t.ins,
      o = null == i ? void 0 : i.rootView;
    if (cc.isValid(o)) {
      var n = i._viewComponent;
      if (cc.isValid(n)) {
        var r = n.getContentNode();
        if (cc.isValid(r)) {
          var a = r.getChildByName("BoxProgress");
          if (!cc.isValid(a)) {
            a = n.createUISync(LevelBoxProgress);
            if (cc.isValid(a)) {
              r.addChild(a);
              a.opacity = 0;
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
        var r = n.getContentNode();
        if (cc.isValid(r)) {
          var a = r.getChildByName("BoxProgress");
          if (!cc.isValid(a)) {
            a = n.createUISync(LevelBoxProgress);
            if (cc.isValid(a)) {
              r.addChild(a);
              a.opacity = 0;
            }
          }
        }
      }
    }
    e();
  }
  popRewardView(t, e) {
    t.args[0] = t.args[0] || {};
    if (this.levelBox && this.levelBox.progress.isGain) {
      ControllerManager.getInstance().pushViewByController("LevelBoxController", {
        rewards: this.levelBox.rewards,
        level: this.levelBox.level,
        from: "win"
      }, function (i) {
        if (cc.isValid(i)) {
          var o = i.onUIDestroy.bind(i);
          i.onUIDestroy = function () {
            o(i);
            t.args[0].hasBoxReward = true;
            e();
          };
        } else {
          t.args[0].hasBoxReward = true;
          e();
        }
      });
    } else {
      e();
    }
  }
  getRemainingProgress() {
    var t = LevelBoxModel.getInstance(),
      e = t.getCurBox();
    return this.getBoxLimit(t, e) - t.getProgress();
  }
  getBoxTargetProgress() {
    var t = LevelBoxModel.getInstance(),
      e = t.getCurBox();
    return this.getBoxLimit(t, e);
  }
}