import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("NewSeasonShowTrait")
export default class NewSeasonShowTrait extends Trait {
  static traitKey = "NewSeasonShow";
  onNewSeason_isVisible(t, e) {
    t.args[0].visible = true;
    e();
  }
}