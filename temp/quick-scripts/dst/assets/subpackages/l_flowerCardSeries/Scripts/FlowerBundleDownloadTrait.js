
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flowerCardSeries/Scripts/FlowerBundleDownloadTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Zsb3dlckNhcmRTZXJpZXMvU2NyaXB0cy9GbG93ZXJCdW5kbGVEb3dubG9hZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQXVELDZDQUFLO0lBQTVEO1FBQUEscUVBOEhDO1FBN0hDLG1CQUFhLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLHNCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixvQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2Qix5QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDM0IsdUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLHdCQUFrQixHQUFHLENBQUMsQ0FBQztRQUN2QixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQiwwQkFBb0IsR0FBRyxLQUFLLENBQUM7O0lBc0gvQixDQUFDO0lBcEhDLDBDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLFFBQVEsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksSUFBSSxXQUFXLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLElBQUksV0FBVyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pNLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5SixJQUFJLFFBQVEsS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ25DLElBQUks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QXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksV0FBVyxLQUFLLElBQUksQ0FBQyxhQUFhLElBQUksV0FBVyxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDNUUsQ0FBQyxFQUFFLENBQUM7U0FDTDthQUFNO1lBQ0wsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDRCwwREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxXQUFXLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QyxDQUFDLEVBQUUsQ0FBQztTQUNMO2FBQU07WUFDTCxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQXBITSxrQ0FBUSxHQUFHLHNCQUFzQixDQUFDO0lBVHRCLHlCQUF5QjtRQUY3QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUM7T0FDakIseUJBQXlCLENBOEg3QztJQUFELGdDQUFDO0NBOUhELEFBOEhDLENBOUhzRCxlQUFLLEdBOEgzRDtrQkE5SG9CLHlCQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkZsb3dlckJ1bmRsZURvd25sb2FkVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb3dlckJ1bmRsZURvd25sb2FkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9kb3dubG9hZE1vZGUgPSBcIm9uTG9hZFwiO1xuICBfZG93bmxvYWRUaW1lb3V0ID0gMTAwMDA7XG4gIF9hbGxvd0Rvd25sb2FkID0gZmFsc2U7XG4gIF9nbG9iYWxUaW1lb3V0VGltZXIgPSBudWxsO1xuICBfaXNUaW1lb3V0U3RvcHBlZCA9IGZhbHNlO1xuICBfZG93bmxvYWRTdGFydFRpbWUgPSAwO1xuICBfaXNOZXdHYW1lID0gZmFsc2U7XG4gIF9oYXNEb3dubG9hZGVkT25Mb2FkID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRmxvd2VyQnVuZGxlRG93bmxvYWRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIFwib25Mb2FkXCIgIT09IHRoaXMuX3RyYWl0RGF0YS5kb3dubG9hZE1vZGUgJiYgXCJvbk5ld0dhbWVcIiAhPT0gdGhpcy5fdHJhaXREYXRhLmRvd25sb2FkTW9kZSAmJiBcIm9uR2FtZUVuZFwiICE9PSB0aGlzLl90cmFpdERhdGEuZG93bmxvYWRNb2RlIHx8ICh0aGlzLl9kb3dubG9hZE1vZGUgPSB0aGlzLl90cmFpdERhdGEuZG93bmxvYWRNb2RlKTtcbiAgICBcIm51bWJlclwiID09IHR5cGVvZiB0aGlzLl90cmFpdERhdGEuZG93bmxvYWRUaW1lb3V0ICYmIHRoaXMuX3RyYWl0RGF0YS5kb3dubG9hZFRpbWVvdXQgPiAwICYmICh0aGlzLl9kb3dubG9hZFRpbWVvdXQgPSAxMDAwICogdGhpcy5fdHJhaXREYXRhLmRvd25sb2FkVGltZW91dCk7XG4gICAgaWYgKFwib25Mb2FkXCIgPT09IHRoaXMuX2Rvd25sb2FkTW9kZSkge1xuICAgICAgdGhpcy5fYWxsb3dEb3dubG9hZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIFwib25OZXdHYW1lXCIgPT09IHRoaXMuX2Rvd25sb2FkTW9kZSB8fCB0aGlzLl9kb3dubG9hZE1vZGU7XG4gICAgfVxuICB9XG4gIG9uRmxvd2VyQ1NfcHJlbG9hZEFsbChlLCB0KSB7XG4gICAgdmFyIHIgPSBlLmlucztcbiAgICBpZiAoXCJvbkdhbWVFbmRcIiAhPT0gdGhpcy5fZG93bmxvYWRNb2RlKSB7XG4gICAgICBpZiAodGhpcy5faXNUaW1lb3V0U3RvcHBlZCkgdCh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7ZWxzZSBpZiAoXCJvbkxvYWRcIiAhPT0gdGhpcy5fZG93bmxvYWRNb2RlKSB7XG4gICAgICAgIGlmIChcIm9uTmV3R2FtZVwiICE9PSB0aGlzLl9kb3dubG9hZE1vZGUpIHQoKTtlbHNlIHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2FsbG93RG93bmxvYWQpIHtcbiAgICAgICAgICAgIHQoe1xuICAgICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByICYmIChyLl9oYXNTdGFydGVkRG93bmxvYWQgPSBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5fZG93bmxvYWRTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgIHRoaXMuc3RhcnRHbG9iYWxUaW1lb3V0KCk7XG4gICAgICAgICAgdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5faGFzRG93bmxvYWRlZE9uTG9hZCkge1xuICAgICAgICAgIHQoe1xuICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9oYXNEb3dubG9hZGVkT25Mb2FkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZG93bmxvYWRTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnN0YXJ0R2xvYmFsVGltZW91dCgpO1xuICAgICAgICB0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHQoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICB9XG4gIG9uRmxvd2VyQ1NfZG93bmxvYWROZXh0KGUsIHQpIHtcbiAgICBpZiAodGhpcy5faXNUaW1lb3V0U3RvcHBlZCkge1xuICAgICAgdCh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgb25GbG93ZXJDU19uZXdHYW1lRGV0ZWN0ZWQoZSwgdCkge1xuICAgIHZhciByID0gZS5hcmdzWzBdO1xuICAgIHRoaXMuX2lzTmV3R2FtZSA9IHI7XG4gICAgaWYgKFwib25OZXdHYW1lXCIgPT09IHRoaXMuX2Rvd25sb2FkTW9kZSAmJiByKSB7XG4gICAgICBpZiAodGhpcy5fZ2xvYmFsVGltZW91dFRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9nbG9iYWxUaW1lb3V0VGltZXIpO1xuICAgICAgICB0aGlzLl9nbG9iYWxUaW1lb3V0VGltZXIgPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNUaW1lb3V0U3RvcHBlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWxsb3dEb3dubG9hZCA9IHRydWU7XG4gICAgfSBlbHNlIFwib25OZXdHYW1lXCIgIT09IHRoaXMuX2Rvd25sb2FkTW9kZSB8fCByIHx8ICh0aGlzLl9hbGxvd0Rvd25sb2FkID0gZmFsc2UpO1xuICAgIHQoKTtcbiAgfVxuICBzdGFydEdsb2JhbFRpbWVvdXQoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9nbG9iYWxUaW1lb3V0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9nbG9iYWxUaW1lb3V0VGltZXIpO1xuICAgICAgdGhpcy5fZ2xvYmFsVGltZW91dFRpbWVyID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fZ2xvYmFsVGltZW91dFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBlLl9pc1RpbWVvdXRTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICgoRGF0ZS5ub3coKSAtIGUuX2Rvd25sb2FkU3RhcnRUaW1lKSAvIDEwMDApLnRvRml4ZWQoMik7XG4gICAgICBpZiAoZS5fZ2xvYmFsVGltZW91dFRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChlLl9nbG9iYWxUaW1lb3V0VGltZXIpO1xuICAgICAgICBlLl9nbG9iYWxUaW1lb3V0VGltZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH0sIHRoaXMuX2Rvd25sb2FkVGltZW91dCk7XG4gIH1cbiAgb25GbG93ZXJDU19kb3dubG9hZE9rKGUsIHQpIHtcbiAgICBpZiAodGhpcy5fZ2xvYmFsVGltZW91dFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fZ2xvYmFsVGltZW91dFRpbWVyKTtcbiAgICAgIHRoaXMuX2dsb2JhbFRpbWVvdXRUaW1lciA9IG51bGw7XG4gICAgICAoKERhdGUubm93KCkgLSB0aGlzLl9kb3dubG9hZFN0YXJ0VGltZSkgLyAxMDAwKS50b0ZpeGVkKDIpO1xuICAgIH1cbiAgICB0KCk7XG4gIH1cbiAgb25GbG93ZXJDU19pc1ByZWxvYWRDdXIoZSwgdCkge1xuICAgIGlmIChcIm9uTmV3R2FtZVwiICE9PSB0aGlzLl9kb3dubG9hZE1vZGUgJiYgXCJvbkdhbWVFbmRcIiAhPT0gdGhpcy5fZG93bmxvYWRNb2RlKSB7XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG9uRmxvd2VyQ1Nfc2hvdWxkTGltaXQoZSwgdCkge1xuICAgIGlmIChcIm9uR2FtZUVuZFwiICE9PSB0aGlzLl9kb3dubG9hZE1vZGUpIHtcbiAgICAgIHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59Il19