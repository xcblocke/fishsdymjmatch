import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("FlowerBundleDownloadTrait")
export default class FlowerBundleDownloadTrait extends Trait {
  _downloadMode = "onLoad";
  _downloadTimeout = 10000;
  _allowDownload = false;
  _globalTimeoutTimer = null;
  _isTimeoutStopped = false;
  _downloadStartTime = 0;
  _isNewGame = false;
  _hasDownloadedOnLoad = false;
  static traitKey = "FlowerBundleDownload";
  onLoad() {
    super.onLoad.call(this);
    "onLoad" !== this._traitData.downloadMode && "onNewGame" !== this._traitData.downloadMode && "onGameEnd" !== this._traitData.downloadMode || (this._downloadMode = this._traitData.downloadMode);
    "number" == typeof this._traitData.downloadTimeout && this._traitData.downloadTimeout > 0 && (this._downloadTimeout = 1000 * this._traitData.downloadTimeout);
    if ("onLoad" === this._downloadMode) {
      this._allowDownload = true;
    } else {
      "onNewGame" === this._downloadMode || this._downloadMode;
    }
  }
  onFlowerCS_preloadAll(e, t) {
    var r = e.ins;
    if ("onGameEnd" !== this._downloadMode) {
      if (this._isTimeoutStopped) t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });else if ("onLoad" !== this._downloadMode) {
        if ("onNewGame" !== this._downloadMode) t();else {
          if (!this._allowDownload) {
            t({
              isBreak: true,
              returnType: TraitCallbackReturnType.return
            });
            return;
          }
          r && (r._hasStartedDownload = false);
          this._downloadStartTime = Date.now();
          this.startGlobalTimeout();
          t();
        }
      } else {
        if (this._hasDownloadedOnLoad) {
          t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
          return;
        }
        this._hasDownloadedOnLoad = true;
        this._downloadStartTime = Date.now();
        this.startGlobalTimeout();
        t();
      }
    } else t({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onFlowerCS_downloadNext(e, t) {
    if (this._isTimeoutStopped) {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      t();
    }
  }
  onFlowerCS_newGameDetected(e, t) {
    var r = e.args[0];
    this._isNewGame = r;
    if ("onNewGame" === this._downloadMode && r) {
      if (this._globalTimeoutTimer) {
        clearTimeout(this._globalTimeoutTimer);
        this._globalTimeoutTimer = null;
      }
      this._isTimeoutStopped = false;
      this._allowDownload = true;
    } else "onNewGame" !== this._downloadMode || r || (this._allowDownload = false);
    t();
  }
  startGlobalTimeout() {
    var e = this;
    if (this._globalTimeoutTimer) {
      clearTimeout(this._globalTimeoutTimer);
      this._globalTimeoutTimer = null;
    }
    this._globalTimeoutTimer = setTimeout(function () {
      e._isTimeoutStopped = true;
      ((Date.now() - e._downloadStartTime) / 1000).toFixed(2);
      if (e._globalTimeoutTimer) {
        clearTimeout(e._globalTimeoutTimer);
        e._globalTimeoutTimer = null;
      }
    }, this._downloadTimeout);
  }
  onFlowerCS_downloadOk(e, t) {
    if (this._globalTimeoutTimer) {
      clearTimeout(this._globalTimeoutTimer);
      this._globalTimeoutTimer = null;
      ((Date.now() - this._downloadStartTime) / 1000).toFixed(2);
    }
    t();
  }
  onFlowerCS_isPreloadCur(e, t) {
    if ("onNewGame" !== this._downloadMode && "onGameEnd" !== this._downloadMode) {
      t();
    } else {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: true
      });
    }
  }
  onFlowerCS_shouldLimit(e, t) {
    if ("onGameEnd" !== this._downloadMode) {
      t();
    } else {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: false
      });
    }
  }
}