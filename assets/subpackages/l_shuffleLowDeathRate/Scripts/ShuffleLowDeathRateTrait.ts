import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("ShuffleLowDeathRateTrait")
export default class ShuffleLowDeathRateTrait extends ExtractTrait {
  static traitKey = "ShuffleLowDeathRate";
  onLoad() {
    var e, r;
    super.onLoad.call(this);
    null !== (e = (r = this.localData).targetLowDeathLevel) && void 0 !== e || (r.targetLowDeathLevel = 0);
  }
  getCurrentLevel() {
    return UserModel.getInstance().getGameDataByGameType(MjGameType.Normal).getLevelId();
  }
  getMinLevel() {
    var t;
    return (null === (t = this._traitData) || void 0 === t ? void 0 : t.minLevel) || 21;
  }
  onIptShuffle_pushEffect(t, e) {
    try {
      if (!this.checkGameMode()) {
        e();
        return;
      }
      var o = this.getCurrentLevel();
      o >= this.getMinLevel() && (this.localData.targetLowDeathLevel = o + 1);
      e();
    } catch (t) {
      console.error("[" + ShuffleLowDeathRateTrait.traitKey + "] 处理洗牌事件失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  isTargetLevel(t) {
    var e = this.localData.targetLowDeathLevel || 0;
    return e > 0 && t === e;
  }
  onExtNormLv_hasDeathDirAdj(t, e) {
    try {
      if (!this.checkGameMode()) {
        e();
        return;
      }
      var o = t.args[0];
      if (this.isTargetLevel(o)) {
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: true
        });
        return;
      }
      e();
    } catch (t) {
      console.error("[" + ShuffleLowDeathRateTrait.traitKey + "] 检查低死亡率标记失败: " + (null == t ? void 0 : t.message));
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
      if (this.isTargetLevel(o)) {
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: -3
        });
        return;
      }
      e();
    } catch (t) {
      console.error("[" + ShuffleLowDeathRateTrait.traitKey + "] 获取低死亡率调整值失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
}