import { EventTrackingType } from './base/event/EventData';
import EventTrackingManager from './base/event/EventTrackingManager';
export enum EValentineStage {
  Stage1 = 1,
  Stage2 = 2,
  Stage3 = 3,
}
export var EValentineEffectSwitch = {
  Off: "off",
  On: "on"
};
export var EValentineClickTarget = {
  Close: "close",
  Button: "button",
  Switch: "switch"
};
export class DotGameValentine {
  static dotValentineClickIcon(e) {
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.ValentineClickIcon, e);
  }
  static dotValentineClickPopup(e) {
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.ValentineClickPopup, e);
  }
  static dotValentineViewIcon(e) {
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.ValentineViewIcon, e);
  }
  static dotValentineViewPopup(e) {
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.ValentineViewPopup, e);
  }
}