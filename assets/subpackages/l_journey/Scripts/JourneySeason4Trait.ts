import JourneySeasonTrait from './JourneySeasonTrait';
@mj.trait
@mj.class("JourneySeason4Trait")
export default class JourneySeason4Trait extends JourneySeasonTrait {
  static traitKey = "JourneySeason4";
  getSeasonKey() {
    return "Journey04";
  }
}