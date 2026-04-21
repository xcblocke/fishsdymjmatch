import UIView from '../framework/ui/UIView';
import { playSpineAnim } from '../framework/utils/CommonUtils';
import LoginModel from '../gamePlay/login/model/LoginModel';
const {
  ccclass,
  property
} = cc._decorator;
@mj.class
export default class LoadingView extends UIView {
  _loadingBgBar = null;
  _loadingImgBar = null;
  _progressLab = null;
  _progressMarkers = null;
  _mainLoading = null;
  _mainLoadingScheduler = null;
  progressMarkersX = 0;
  delayEnterTime = 0.1;
  maxLoadTime = 0.2;
  _isHideLoading = false;
  static prefabUrl = "prefabs/common/Loading";
  onLoad() {
    super.onLoad.call(this);
    this._loadingBgBar = this.node.getChildByName("loadingBgBar").getComponent(cc.ProgressBar);
    this._loadingImgBar = this._loadingBgBar.node.getChildByName("_loadingImgBar");
    this._progressLab = this._loadingBgBar.node.getChildByName("progressLab").getComponent(cc.Label);
    this._progressMarkers = this._loadingBgBar.node.getChildByName("progressMarkers");
    this._mainLoading = cc.find("logo/loading_loading", this.node).getComponent(sp.Skeleton);
    this.progressMarkersX = this._progressMarkers.x;
    this._loadingBgBar.progress = 0;
    this._progressLab.string = "0%";
    this.node.active = false;
  }
  getMessageListeners() {
    var e = this;
    return {
      SHOWLOADING: function (t) {
        e.maxLoadTime = t + 0.1;
        e.showLoading();
      },
      HIDELOADING: function () {
        e.hideLoading();
      }
    };
  }
  showLoading() {
    this._isHideLoading = false;
    this.node.active = true;
    this.updateLoadingOtherAni();
    this.updateProgressAni({
      maxTime: this.maxLoadTime,
      minTime: this.maxLoadTime - 0.1,
      cb: function () {}
    });
  }
  @mj.traitEvent("LoadingView_hideLoading")
  hideLoading() {
    var e = this;
    if (!this._isHideLoading) {
      LoginModel.getInstance().stopSamplingFPS();
      this._isHideLoading = true;
      if (this._loadingBgBar.progress >= 1) {
        this.stopMainLoadingLoop();
        this.node.active = false;
      } else {
        cc.Tween.stopAllByTarget(this._loadingBgBar);
        cc.tween(this._loadingBgBar).to(0.1, {
          progress: 1
        }, {
          progress: function (t, o, n, i) {
            var r = t + (o - t) * i;
            cc.isValid(e._progressLab) && (e._progressLab.string = Math.ceil(100 * r) + "%");
            cc.isValid(e._progressMarkers) && (e._progressMarkers.x = e.progressMarkersX + r * e._loadingBgBar.totalLength);
            return r;
          }
        }).delay(this.delayEnterTime).call(function () {
          e.stopMainLoadingLoop();
          e.node.active = false;
        }).start();
      }
    }
  }
  updateLoadingOtherAni() {
    this.updateLoadingImgBarAni();
    this.startMainLoadingLoop();
  }
  updateLoadingImgBarAni() {
    var e = this._loadingImgBar;
    if (cc.isValid(e)) {
      e.active = true;
      e.opacity = 0;
      cc.Tween.stopAllByTarget(e);
      cc.tween(e).to(0.16, {
        opacity: 255
      }).start();
    }
  }
  @mj.traitEvent("LoadingView_updProAni")
  updateProgressAni(e) {
    var t = this,
      o = Math.max(0, Math.min(1, 0.8)),
      n = this._loadingBgBar.progress;
    cc.Tween.stopAllByTarget(this._loadingBgBar);
    var i = Math.min(e.maxTime, Math.max(e.minTime, 0.3 * Math.abs(o - n) + 0.05));
    cc.tween(this._loadingBgBar).to(i, {
      progress: o
    }, {
      progress: function (o, n, i, r) {
        var a = o + (n - o) * r;
        cc.isValid(t._progressLab) && (t._progressLab.string = Math.ceil(100 * a) + "%");
        cc.isValid(t._progressMarkers) && (t._progressMarkers.x = t.progressMarkersX + a * t._loadingBgBar.totalLength);
        a >= 1 && e.cb && e.cb();
        return a;
      }
    }).start();
  }
  startMainLoadingLoop(e = "logo_init", t = false, o = 5) {
    var n = this._mainLoading;
    if (cc.isValid(n)) {
      this.stopMainLoadingLoop();
      var i = function i() {
        cc.isValid(n) && playSpineAnim(n, t ? -1 : 1, e);
      };
      this._mainLoadingScheduler = i;
      i();
      this.schedule(this._mainLoadingScheduler, Math.max(0.016, o));
    }
  }
  stopMainLoadingLoop() {
    if (this._mainLoadingScheduler) {
      this.unschedule(this._mainLoadingScheduler);
      this._mainLoadingScheduler = null;
    }
  }
}