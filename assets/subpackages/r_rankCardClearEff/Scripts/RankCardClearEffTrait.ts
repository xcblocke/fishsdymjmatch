import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
@mj.trait
@mj.class("RankCardClearEffTrait")
export default class RankCardClearEffTrait extends Trait {
  static traitKey = "RankCardClearEff";
  static BundleName = "r_rankCardClearEff";
  onRankSpCardEff_clearEff(e, t) {
    var a = UserModel.getInstance().getRankCardResName();
    if (a) {
      var n = a.split("_");
      if (0 != n.length) {
        var i = "in_" + n[n.length - 1];
        BaseSpine.create("spine/gameplay_elimination_specialCard", i, 1, null, true, RankCardClearEffTrait.BundleName).node.parent = e.ins.node;
        t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });
      } else t();
    } else t();
  }
  getCollectEffectAudioId() {
    return null == this._traitData.collectEff ? EAudioID.RankClearCol1 : this._traitData.collectEff;
  }
  onRankSpCardEff_colEff(e, t) {
    mj.audioManager.playEffect(this.getCollectEffectAudioId());
    t({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onClearBhv_matchAud(e, t) {
    if (e.ins._type == ETileType.RankCard) {
      mj.audioManager.playEffect(EAudioID.RankClearTouch);
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else t();
  }
}