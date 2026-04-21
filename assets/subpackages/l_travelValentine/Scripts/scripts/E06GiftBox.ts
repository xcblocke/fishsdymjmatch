import { MapElementId } from '../../../../Scripts/TravelMapInterface';
import ESimpleGiftBox from '../../../../Scripts/ESimpleGiftBox';
@mj.class
export default class E06GiftBox extends ESimpleGiftBox {
  boxBg = null;
  static prefabUrl = "prefabs/E06GiftBox";
  static bundleName = "l_travelValentine";
  uiOnLoad() {
    super.uiOnLoad.call(this);
    this.boxBg = cc.find("Element/BoxBg", this.node);
  }
  getBadgePath(e) {
    switch (e) {
      case MapElementId.E06GiftBox1:
        return {
          path: "texture/badge/journey_img_medal_6_1",
          atlas: false
        };
      case MapElementId.E06GiftBox2:
        return {
          path: "texture/badge/journey_img_medal_6_2",
          atlas: false
        };
      case MapElementId.E06GiftBox3:
        return {
          path: "texture/badge/journey_img_medal_6_3",
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
      case MapElementId.E06GiftBox1:
        return {
          path: "texture/journey_bg_medal",
          atlas: false,
          bundle: "l_travelValentine"
        };
      case MapElementId.E06GiftBox2:
        return {
          path: "texture/journey_bg_medal_2",
          atlas: false,
          bundle: "l_travelValentine"
        };
      case MapElementId.E06GiftBox3:
        return {
          path: "texture/journey_bg_medal_3",
          atlas: false,
          bundle: "l_travelValentine"
        };
      default:
        return {
          path: null
        };
    }
  }
  getBadgeId(e) {
    switch (e) {
      case MapElementId.E06GiftBox1:
        return 1;
      case MapElementId.E06GiftBox2:
        return 2;
      case MapElementId.E06GiftBox3:
        return 3;
      default:
        return 1;
    }
  }
  updateUI() {
    super.updateUI.call(this);
    this.boxBg.active = this._data.type === MapElementId.E06GiftBox3;
    this.updateBadgeIcon();
  }
  updateBadgeIcon() {
    var e = 0.55;
    switch (this._data.type) {
      case MapElementId.E06GiftBox1:
        e = 0.635;
        break;
      case MapElementId.E06GiftBox2:
        e = 0.64;
        break;
      case MapElementId.E06GiftBox3:
        e = 0.675;
    }
    this.badgeIcon.setScale(e);
  }
}