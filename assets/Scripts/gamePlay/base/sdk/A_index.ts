import TraitManager from '../../../framework/trait/TraitManager';
import AudioManager from '../../../framework/manager/AudioManager';
import SDKManager from './SDKManager';
import EventTrackingManager from '../../../base/event/EventTrackingManager';
TraitManager.getInstance();
window['TraitEventPositionType'] = {
  befor: 0,
  in: 1,
  after: 2
};
window['TraitCallbackReturnType'] = {
  return: 0,
  continue: 1,
  jump: 2
};
window['mj'].audioManager = AudioManager.getInstance();
window['mj'].sdk = SDKManager.getInstance();
window['mj'].eventTrackingManager = EventTrackingManager.getInstance();
// window['mj'].reportError = window['_reportError'] || function (e) {
//   console.error(e);
//   cc.game.emit("jsError", e);
// };
function l(e) {
  var t, o;
  if (e) {
    for (var n = null == e ? void 0 : e.refCount, i = null === (t = this.node) || void 0 === t ? void 0 : t.name, r = null === (o = this.node) || void 0 === o ? void 0 : o.parent; r;) {
      i = r.name + "/" + i;
      r = r.parent;
    }
    console.error("spine: skeletonData is not valid,nodePath: " + i + ",refCount: " + n);
  }
}
var s = sp.Skeleton.prototype.update;
sp.Skeleton.prototype.update = function (e) {
  var t;
  if (this.skeletonData) if (!this.skeletonData || cc.isValid(this.skeletonData, true) && (null === (t = this.skeletonData) || void 0 === t ? void 0 : t.textures)) s.call(this, e);else {
    l.call(this, this.skeletonData);
    this.skeletonData = null;
  }
};
var c = sp.Skeleton.prototype._validateRender;
c && (sp.Skeleton.prototype._validateRender = function () {
  var e = this.skeletonData;
  if (e) {
    if (e.textures) c.call(this);else {
      l.call(this, e);
      this.disableRender();
      this.skeletonData = null;
    }
  } else this.disableRender();
});