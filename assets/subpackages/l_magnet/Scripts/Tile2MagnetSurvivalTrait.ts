import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("Tile2MagnetSurvivalTrait")
export default class Tile2MagnetSurvivalTrait extends Trait {
  static traitKey = "Tile2MagnetSurvival";
  onLoad() {
    super.onLoad.call(this);
  }
  onGsListener_onSurvivalGame(t, e) {
    var r,
      o = mj.getClassByName("Tile2MagnetTrait");
    if (o && "function" == typeof o.getInstance) {
      var n = o.getInstance();
      n && n.eventEnabled && (null === (r = n.resetPopupCount) || void 0 === r || r.call(n));
    }
    e();
  }
}