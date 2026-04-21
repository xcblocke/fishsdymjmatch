import { MapElementId } from './TravelMapInterface';
import ESimpleGiftBox from './ESimpleGiftBox';
@mj.class
export default class E07GiftBox extends ESimpleGiftBox {
  static prefabUrl = "prefabs/E07GiftBox";
  static bundleName = "l_travel05";
  getBadgePath(e) {
    switch (e) {
      case MapElementId.E07GiftBox1:
        return {
          path: "texture/badge/journey_img_medal_7_1",
          atlas: false
        };
      case MapElementId.E07GiftBox2:
        return {
          path: "texture/badge/journey_img_medal_7_2",
          atlas: false
        };
      case MapElementId.E07GiftBox3:
        return {
          path: "texture/badge/journey_img_medal_7_3",
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
      path: "texture/journey/journey_bg_medal",
      atlas: false,
      bundle: "mainRes"
    };
  }
  getBadgeId(e) {
    switch (e) {
      case MapElementId.E07GiftBox1:
        return 1;
      case MapElementId.E07GiftBox2:
        return 2;
      case MapElementId.E07GiftBox3:
        return 3;
      default:
        return 1;
    }
  }
}