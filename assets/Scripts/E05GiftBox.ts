import { MapElementId } from './TravelMapInterface';
import ESimpleGiftBox from './ESimpleGiftBox';
@mj.class
export default class E05GiftBox extends ESimpleGiftBox {
  static prefabUrl = "prefabs/journeyMap/05/E05GiftBox";
  getBadgePath(e) {
    switch (e) {
      case MapElementId.E05GiftBox1:
        return {
          path: "texture/badge/journey_img_medal_5_1",
          atlas: false
        };
      case MapElementId.E05GiftBox2:
        return {
          path: "texture/badge/journey_img_medal_5_2",
          atlas: false
        };
      case MapElementId.E05GiftBox3:
        return {
          path: "texture/badge/journey_img_medal_5_3",
          atlas: false
        };
      default:
        return {
          path: null
        };
    }
  }
  getBadgeBgPath() {
    return {
      path: null
    };
  }
  getBadgeId(e) {
    switch (e) {
      case MapElementId.E05GiftBox1:
        return 1;
      case MapElementId.E05GiftBox2:
        return 2;
      case MapElementId.E05GiftBox3:
        return 3;
      default:
        return 1;
    }
  }
}