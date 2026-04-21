import { SingletonFactory } from '../../framework/utils/SingletonFactory';
export default class EventTrackingManager {
  static getInstance() {
    return SingletonFactory.getInstance(this);
  }
  trackEvent(e, t, o, n) {
    mj.sdk.report(e, t, o, n);
  }
}