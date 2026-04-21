import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("ShuffleDeathAdjustTrait")
export default class ShuffleDeathAdjustTrait extends ExtractTrait {
  static traitKey = "ShuffleDeathAdjust";
  onLoad() {
    var e, r, o, a, i, n, s, u;
    super.onLoad.call(this);
    this._config = {
      startLevel: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 12,
      checkInterval: null !== (a = null === (o = this._traitData) || void 0 === o ? void 0 : o.checkInterval) && void 0 !== a ? a : 3,
      historySize: null !== (n = null === (i = this._traitData) || void 0 === i ? void 0 : i.historySize) && void 0 !== n ? n : 7
    };
    null !== (s = (u = this.localData).shuffleHistory) && void 0 !== s || (u.shuffleHistory = []);
  }
  getCurrentLevel() {
    return UserModel.getInstance().getGameDataByGameType(MjGameType.Normal).getLevelId();
  }
  getGameData() {
    return UserModel.getInstance().getGameDataByGameType(MjGameType.Normal);
  }
  isCheckPoint(t) {
    var e = this._config,
      r = e.startLevel,
      o = e.checkInterval;
    return t >= r && (t - r) % o == 0;
  }
  getRecentShuffleCount() {
    return (this.localData.shuffleHistory || []).reduce(function (t, e) {
      return t + e;
    }, 0);
  }
  calcAdjustment() {
    var t = this.getGameData().getShuffleNums(),
      e = this.getRecentShuffleCount(),
      r = 2;
    if (t <= 5) {
      r = 0;
    } else {
      t <= 10 && (r = 1);
    }
    var o = 2;
    if (e > 4) {
      o = 0;
    } else {
      e > 2 && (o = 1);
    }
    return [[0, -1, -2], [1, 0, -1], [2, 1, 0]][r][o];
  }
  onGsListener_onGameEnd(t, e) {
    try {
      if (!this.checkGameMode()) {
        e();
        return;
      }
      var o = this.getGameData().getUsedShuffle();
      this.localData.shuffleHistory = this.localData.shuffleHistory || [];
      this.localData.shuffleHistory.push(o);
      this.localData.shuffleHistory.length > this._config.historySize && this.localData.shuffleHistory.shift();
      this.localData.shuffleHistory = this.localData.shuffleHistory;
      e();
    } catch (t) {
      console.error("[" + ShuffleDeathAdjustTrait.traitKey + "] 记录洗牌使用次数失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onExtNormLv_hasDeathDirAdj(t, e) {
    try {
      if (!this.checkGameMode()) {
        e();
        return;
      }
      var o = t.args[0];
      if (this.isCheckPoint(o)) {
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: true
        });
        return;
      }
      e();
    } catch (t) {
      console.error("[" + ShuffleDeathAdjustTrait.traitKey + "] 检查统计点失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onExtNormLv_getDeathDirAdj(t, e) {
    try {
      if (!this.checkGameMode()) {
        e();
        return;
      }
      var o = t.args[0];
      if (this.isCheckPoint(o)) {
        var a = this.calcAdjustment();
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: a
        });
        return;
      }
      e();
    } catch (t) {
      console.error("[" + ShuffleDeathAdjustTrait.traitKey + "] 获取调整值失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
}