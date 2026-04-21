import { MapElementId } from './TravelMapInterface';
import ESimpleGiftBox from './ESimpleGiftBox';
@mj.class
export default class E04GiftBox extends ESimpleGiftBox {
  static prefabUrl = "prefabs/journeyMap/04/E04GiftBox";
  getBadgePath(e) {
    switch (e) {
      case MapElementId.E04GiftBox1:
        return {
          path: "texture/badge/journey_img_medal_4_1",
          atlas: false
        };
      case MapElementId.E04GiftBox2:
        return {
          path: "texture/badge/journey_img_medal_4_2",
          atlas: false
        };
      case MapElementId.E04GiftBox3:
        return {
          path: "texture/badge/journey_img_medal_4_3",
          atlas: false
        };
      default:
        return {
          path: null
        };
    }
  }
  getBadgeBgPath(e) {
    switch (e) {
      case MapElementId.E04GiftBox1:
        return {
          path: "texture/journeyMap/04/journey_bg_medal",
          atlas: false
        };
      case MapElementId.E04GiftBox2:
        return {
          path: "texture/journeyMap/04/journey_bg_medal_2",
          atlas: false
        };
      case MapElementId.E04GiftBox3:
        return {
          path: "texture/journeyMap/04/journey_bg_medal_3",
          atlas: false
        };
      default:
        return {
          path: null
        };
    }
  }
  getBadgeId(e) {
    switch (e) {
      case MapElementId.E04GiftBox1:
        return 1;
      case MapElementId.E04GiftBox2:
        return 2;
      case MapElementId.E04GiftBox3:
        return 3;
      default:
        return 1;
    }
  }
}