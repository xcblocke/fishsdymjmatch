import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("ShuffleOnRestartTrait")
export default class ShuffleOnRestartTrait extends Trait {
  needAutoShuffle = false;
  maxCount = 2;
  minLevel = 2;
  static traitKey = "ShuffleOnRestart";
  onLoad() {
    var e, r, o, i;
    super.onLoad.call(this);
    this.maxCount = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.maxCount) && void 0 !== r ? r : 2;
    this.minLevel = null !== (i = null === (o = this._traitData) || void 0 === o ? void 0 : o.minLevel) && void 0 !== i ? i : 2;
    if (this.isLocalEmpty(this.localData.lvID)) {
      this.localData.lvID = 0;
      this.localData.count = 0;
    }
  }
  onIptRestart_excute(t, e) {
    try {
      var o = t.ins,
        i = null == o ? void 0 : o.gameContext;
      if (!i) {
        e();
        return;
      }
      if (i.gameType !== MjGameType.Normal) {
        e();
        return;
      }
      var n = UserModel.getInstance().normalData.getLevelId();
      if (n < this.minLevel) {
        e();
        return;
      }
      if (this.localData.lvID !== n) {
        this.localData.lvID = n;
        this.localData.count = 0;
      }
      if (this.localData.count >= this.maxCount) {
        e();
        return;
      }
      this.localData.count++;
      this.needAutoShuffle = true;
    } catch (t) {
      console.error("[" + ShuffleOnRestartTrait.traitKey + "] 重玩处理异常: " + (t.message || t));
    }
    e();
  }
  onIptInitView_pushEff(t, e) {
    if (this.needAutoShuffle) {
      this.needAutoShuffle = false;
      var r = t.ins;
      if (r && r.gameContext) {
        var o = r.gameContext,
          i = o.getTileMapObject();
        o.shuffleModifier.shuffle();
        i.updateCanMatchTiles();
        o.gameModifier.modifyShuffle();
        e();
      } else e();
    } else e();
  }
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
}