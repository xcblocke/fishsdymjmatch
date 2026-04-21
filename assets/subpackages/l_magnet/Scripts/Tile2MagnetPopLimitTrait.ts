import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("Tile2MagnetPopLimitTrait")
export default class Tile2MagnetPopLimitTrait extends Trait {
  static traitKey = "Tile2MagnetPopLimit";
  onLoad() {
    super.onLoad.call(this);
  }
  isPreconMet() {
    return true === this.localData.isUsedRevive;
  }
  onT2Revive_used(t, e) {
    this.localData.isUsedRevive || (this.localData.isUsedRevive = true);
    e();
  }
  onTile2Magnet_preMet(t, e) {
    t.beforReturnVal && (t.beforReturnVal = this.isPreconMet());
    e({
      returnVal: t.beforReturnVal
    });
  }
  onT2MagSlotStep_preMet(t, e) {
    t.beforReturnVal && (t.beforReturnVal = this.isPreconMet());
    e({
      returnVal: t.beforReturnVal
    });
  }
}