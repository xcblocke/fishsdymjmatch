import JourneySeasonTrait from './JourneySeasonTrait';
@mj.trait
@mj.class("JourneySeason3Trait")
export default class JourneySeason3Trait extends JourneySeasonTrait {
  static traitKey = "JourneySeason3";
  getSeasonKey() {
    return "Journey03";
  }
}