"use strict";
cc._RF.push(module, 'ef75eDJht9DT7tc2FAcR9tm', 'FlowerBundleDownloadTrait');
// subpackages/l_flowerCardSeries/Scripts/FlowerBundleDownloadTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FlowerBundleDownloadTrait = /** @class */ (function (_super) {
    __extends(FlowerBundleDownloadTrait, _super);
    function FlowerBundleDownloadTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._downloadMode = "onLoad";
        _this._downloadTimeout = 10000;
        _this._allowDownload = false;
        _this._globalTimeoutTimer = null;
        _this._isTimeoutStopped = false;
        _this._downloadStartTime = 0;
        _this._isNewGame = false;
        _this._hasDownloadedOnLoad = false;
        return _this;
    }
    FlowerBundleDownloadTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        "onLoad" !== this._traitData.downloadMode && "onNewGame" !== this._traitData.downloadMode && "onGameEnd" !== this._traitData.downloadMode || (this._downloadMode = this._traitData.downloadMode);
        "number" == typeof this._traitData.downloadTimeout && this._traitData.downloadTimeout > 0 && (this._downloadTimeout = 1000 * this._traitData.downloadTimeout);
        if ("onLoad" === this._downloadMode) {
            this._allowDownload = true;
        }
        else {
            "onNewGame" === this._downloadMode || this._downloadMode;
        }
    };
    FlowerBundleDownloadTrait.prototype.onFlowerCS_preloadAll = function (e, t) {
        var r = e.ins;
        if ("onGameEnd" !== this._downloadMode) {
            if (this._isTimeoutStopped)
                t({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            else if ("onLoad" !== this._downloadMode) {
                if ("onNewGame" !== this._downloadMode)
                    t();
                else {
                    if (!this._allowDownload) {
                        t({
                            isBreak: true,
                            returnType: TraitManager_1.TraitCallbackReturnType.return
                        });
                        return;
                    }
                    r && (r._hasStartedDownload = false);
                    this._downloadStartTime = Date.now();
                    this.startGlobalTimeout();
                    t();
                }
            }
            else {
                if (this._hasDownloadedOnLoad) {
                    t({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                    return;
                }
                this._hasDownloadedOnLoad = true;
                this._downloadStartTime = Date.now();
                this.startGlobalTimeout();
                t();
            }
        }
        else
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
    };
    FlowerBundleDownloadTrait.prototype.onFlowerCS_downloadNext = function (e, t) {
        if (this._isTimeoutStopped) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            t();
        }
    };
    FlowerBundleDownloadTrait.prototype.onFlowerCS_newGameDetected = function (e, t) {
        var r = e.args[0];
        this._isNewGame = r;
        if ("onNewGame" === this._downloadMode && r) {
            if (this._globalTimeoutTimer) {
                clearTimeout(this._globalTimeoutTimer);
                this._globalTimeoutTimer = null;
            }
            this._isTimeoutStopped = false;
            this._allowDownload = true;
        }
        else
            "onNewGame" !== this._downloadMode || r || (this._allowDownload = false);
        t();
    };
    FlowerBundleDownloadTrait.prototype.startGlobalTimeout = function () {
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
    };
    FlowerBundleDownloadTrait.prototype.onFlowerCS_downloadOk = function (e, t) {
        if (this._globalTimeoutTimer) {
            clearTimeout(this._globalTimeoutTimer);
            this._globalTimeoutTimer = null;
            ((Date.now() - this._downloadStartTime) / 1000).toFixed(2);
        }
        t();
    };
    FlowerBundleDownloadTrait.prototype.onFlowerCS_isPreloadCur = function (e, t) {
        if ("onNewGame" !== this._downloadMode && "onGameEnd" !== this._downloadMode) {
            t();
        }
        else {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
    };
    FlowerBundleDownloadTrait.prototype.onFlowerCS_shouldLimit = function (e, t) {
        if ("onGameEnd" !== this._downloadMode) {
            t();
        }
        else {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
    };
    FlowerBundleDownloadTrait.traitKey = "FlowerBundleDownload";
    FlowerBundleDownloadTrait = __decorate([
        mj.trait,
        mj.class("FlowerBundleDownloadTrait")
    ], FlowerBundleDownloadTrait);
    return FlowerBundleDownloadTrait;
}(Trait_1.default));
exports.default = FlowerBundleDownloadTrait;

cc._RF.pop();