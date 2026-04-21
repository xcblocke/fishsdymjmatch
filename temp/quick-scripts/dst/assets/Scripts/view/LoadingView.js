
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/LoadingView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf351pLz4lGiYDlQyHnQd4b', 'LoadingView');
// Scripts/view/LoadingView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../framework/ui/UIView");
var CommonUtils_1 = require("../framework/utils/CommonUtils");
var LoginModel_1 = require("../gamePlay/login/model/LoginModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingView = /** @class */ (function (_super) {
    __extends(LoadingView, _super);
    function LoadingView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._loadingBgBar = null;
        _this._loadingImgBar = null;
        _this._progressLab = null;
        _this._progressMarkers = null;
        _this._mainLoading = null;
        _this._mainLoadingScheduler = null;
        _this.progressMarkersX = 0;
        _this.delayEnterTime = 0.1;
        _this.maxLoadTime = 0.2;
        _this._isHideLoading = false;
        return _this;
    }
    LoadingView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._loadingBgBar = this.node.getChildByName("loadingBgBar").getComponent(cc.ProgressBar);
        this._loadingImgBar = this._loadingBgBar.node.getChildByName("_loadingImgBar");
        this._progressLab = this._loadingBgBar.node.getChildByName("progressLab").getComponent(cc.Label);
        this._progressMarkers = this._loadingBgBar.node.getChildByName("progressMarkers");
        this._mainLoading = cc.find("logo/loading_loading", this.node).getComponent(sp.Skeleton);
        this.progressMarkersX = this._progressMarkers.x;
        this._loadingBgBar.progress = 0;
        this._progressLab.string = "0%";
        this.node.active = false;
    };
    LoadingView.prototype.getMessageListeners = function () {
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
    };
    LoadingView.prototype.showLoading = function () {
        this._isHideLoading = false;
        this.node.active = true;
        this.updateLoadingOtherAni();
        this.updateProgressAni({
            maxTime: this.maxLoadTime,
            minTime: this.maxLoadTime - 0.1,
            cb: function () { }
        });
    };
    LoadingView.prototype.hideLoading = function () {
        var e = this;
        if (!this._isHideLoading) {
            LoginModel_1.default.getInstance().stopSamplingFPS();
            this._isHideLoading = true;
            if (this._loadingBgBar.progress >= 1) {
                this.stopMainLoadingLoop();
                this.node.active = false;
            }
            else {
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
    };
    LoadingView.prototype.updateLoadingOtherAni = function () {
        this.updateLoadingImgBarAni();
        this.startMainLoadingLoop();
    };
    LoadingView.prototype.updateLoadingImgBarAni = function () {
        var e = this._loadingImgBar;
        if (cc.isValid(e)) {
            e.active = true;
            e.opacity = 0;
            cc.Tween.stopAllByTarget(e);
            cc.tween(e).to(0.16, {
                opacity: 255
            }).start();
        }
    };
    LoadingView.prototype.updateProgressAni = function (e) {
        var t = this, o = Math.max(0, Math.min(1, 0.8)), n = this._loadingBgBar.progress;
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
    };
    LoadingView.prototype.startMainLoadingLoop = function (e, t, o) {
        if (e === void 0) { e = "logo_init"; }
        if (t === void 0) { t = false; }
        if (o === void 0) { o = 5; }
        var n = this._mainLoading;
        if (cc.isValid(n)) {
            this.stopMainLoadingLoop();
            var i = function i() {
                cc.isValid(n) && CommonUtils_1.playSpineAnim(n, t ? -1 : 1, e);
            };
            this._mainLoadingScheduler = i;
            i();
            this.schedule(this._mainLoadingScheduler, Math.max(0.016, o));
        }
    };
    LoadingView.prototype.stopMainLoadingLoop = function () {
        if (this._mainLoadingScheduler) {
            this.unschedule(this._mainLoadingScheduler);
            this._mainLoadingScheduler = null;
        }
    };
    LoadingView.prefabUrl = "prefabs/common/Loading";
    __decorate([
        mj.traitEvent("LoadingView_hideLoading")
    ], LoadingView.prototype, "hideLoading", null);
    __decorate([
        mj.traitEvent("LoadingView_updProAni")
    ], LoadingView.prototype, "updateProgressAni", null);
    LoadingView = __decorate([
        mj.class
    ], LoadingView);
    return LoadingView;
}(UIView_1.default));
exports.default = LoadingView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvTG9hZGluZ1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUM1Qyw4REFBK0Q7QUFDL0QsaUVBQTREO0FBQ3RELElBQUEsS0FHRixFQUFFLENBQUMsVUFBVSxFQUZmLE9BQU8sYUFBQSxFQUNQLFFBQVEsY0FDTyxDQUFDO0FBRWxCO0lBQXlDLCtCQUFNO0lBQS9DO1FBQUEscUVBNkhDO1FBNUhDLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQiwyQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDN0Isc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLG9CQUFjLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLGlCQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLG9CQUFjLEdBQUcsS0FBSyxDQUFDOztJQW1IekIsQ0FBQztJQWpIQyw0QkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELHlDQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLE9BQU87WUFDTCxXQUFXLEVBQUUsVUFBVSxDQUFDO2dCQUN0QixDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNsQixDQUFDO1lBQ0QsV0FBVyxFQUFFO2dCQUNYLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNsQixDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDRCxpQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRztZQUMvQixFQUFFLEVBQUUsY0FBYSxDQUFDO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsb0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUMxQjtpQkFBTTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzdDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7b0JBQ25DLFFBQVEsRUFBRSxDQUFDO2lCQUNaLEVBQUU7b0JBQ0QsUUFBUSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDeEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzt3QkFDakYsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUNoSCxPQUFPLENBQUMsQ0FBQztvQkFDWCxDQUFDO2lCQUNGLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDakMsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLENBQUM7b0JBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDWjtTQUNGO0lBQ0gsQ0FBQztJQUNELDJDQUFxQixHQUFyQjtRQUNFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDRCw0Q0FBc0IsR0FBdEI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzVCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNoQixDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtnQkFDbkIsT0FBTyxFQUFFLEdBQUc7YUFDYixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDWjtJQUNILENBQUM7SUFFRCx1Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQ2pDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ2pDLFFBQVEsRUFBRSxDQUFDO1NBQ1osRUFBRTtZQUNELFFBQVEsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ2pGLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDaEgsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekIsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDO1NBQ0YsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELDBDQUFvQixHQUFwQixVQUFxQixDQUFlLEVBQUUsQ0FBUyxFQUFFLENBQUs7UUFBakMsa0JBQUEsRUFBQSxlQUFlO1FBQUUsa0JBQUEsRUFBQSxTQUFTO1FBQUUsa0JBQUEsRUFBQSxLQUFLO1FBQ3BELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztnQkFDaEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSwyQkFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQztZQUMvQixDQUFDLEVBQUUsQ0FBQztZQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7SUFDSCxDQUFDO0lBQ0QseUNBQW1CLEdBQW5CO1FBQ0UsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQWpITSxxQkFBUyxHQUFHLHdCQUF3QixDQUFDO0lBb0M1QztRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7a0RBMEJ4QztJQWlCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7d0RBa0J0QztJQTFHa0IsV0FBVztRQUQvQixFQUFFLENBQUMsS0FBSztPQUNZLFdBQVcsQ0E2SC9CO0lBQUQsa0JBQUM7Q0E3SEQsQUE2SEMsQ0E3SHdDLGdCQUFNLEdBNkg5QztrQkE3SG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlWaWV3IGZyb20gJy4uL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IHsgcGxheVNwaW5lQW5pbSB9IGZyb20gJy4uL2ZyYW1ld29yay91dGlscy9Db21tb25VdGlscyc7XG5pbXBvcnQgTG9naW5Nb2RlbCBmcm9tICcuLi9nYW1lUGxheS9sb2dpbi9tb2RlbC9Mb2dpbk1vZGVsJztcbmNvbnN0IHtcbiAgY2NjbGFzcyxcbiAgcHJvcGVydHlcbn0gPSBjYy5fZGVjb3JhdG9yO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nVmlldyBleHRlbmRzIFVJVmlldyB7XG4gIF9sb2FkaW5nQmdCYXIgPSBudWxsO1xuICBfbG9hZGluZ0ltZ0JhciA9IG51bGw7XG4gIF9wcm9ncmVzc0xhYiA9IG51bGw7XG4gIF9wcm9ncmVzc01hcmtlcnMgPSBudWxsO1xuICBfbWFpbkxvYWRpbmcgPSBudWxsO1xuICBfbWFpbkxvYWRpbmdTY2hlZHVsZXIgPSBudWxsO1xuICBwcm9ncmVzc01hcmtlcnNYID0gMDtcbiAgZGVsYXlFbnRlclRpbWUgPSAwLjE7XG4gIG1heExvYWRUaW1lID0gMC4yO1xuICBfaXNIaWRlTG9hZGluZyA9IGZhbHNlO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2NvbW1vbi9Mb2FkaW5nXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9sb2FkaW5nQmdCYXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsb2FkaW5nQmdCYXJcIikuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICB0aGlzLl9sb2FkaW5nSW1nQmFyID0gdGhpcy5fbG9hZGluZ0JnQmFyLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJfbG9hZGluZ0ltZ0JhclwiKTtcbiAgICB0aGlzLl9wcm9ncmVzc0xhYiA9IHRoaXMuX2xvYWRpbmdCZ0Jhci5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NMYWJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLl9wcm9ncmVzc01hcmtlcnMgPSB0aGlzLl9sb2FkaW5nQmdCYXIubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzTWFya2Vyc1wiKTtcbiAgICB0aGlzLl9tYWluTG9hZGluZyA9IGNjLmZpbmQoXCJsb2dvL2xvYWRpbmdfbG9hZGluZ1wiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgdGhpcy5wcm9ncmVzc01hcmtlcnNYID0gdGhpcy5fcHJvZ3Jlc3NNYXJrZXJzLng7XG4gICAgdGhpcy5fbG9hZGluZ0JnQmFyLnByb2dyZXNzID0gMDtcbiAgICB0aGlzLl9wcm9ncmVzc0xhYi5zdHJpbmcgPSBcIjAlXCI7XG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHJldHVybiB7XG4gICAgICBTSE9XTE9BRElORzogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZS5tYXhMb2FkVGltZSA9IHQgKyAwLjE7XG4gICAgICAgIGUuc2hvd0xvYWRpbmcoKTtcbiAgICAgIH0sXG4gICAgICBISURFTE9BRElORzogZnVuY3Rpb24gKCkge1xuICAgICAgICBlLmhpZGVMb2FkaW5nKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBzaG93TG9hZGluZygpIHtcbiAgICB0aGlzLl9pc0hpZGVMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVMb2FkaW5nT3RoZXJBbmkoKTtcbiAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQW5pKHtcbiAgICAgIG1heFRpbWU6IHRoaXMubWF4TG9hZFRpbWUsXG4gICAgICBtaW5UaW1lOiB0aGlzLm1heExvYWRUaW1lIC0gMC4xLFxuICAgICAgY2I6IGZ1bmN0aW9uICgpIHt9XG4gICAgfSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJMb2FkaW5nVmlld19oaWRlTG9hZGluZ1wiKVxuICBoaWRlTG9hZGluZygpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLl9pc0hpZGVMb2FkaW5nKSB7XG4gICAgICBMb2dpbk1vZGVsLmdldEluc3RhbmNlKCkuc3RvcFNhbXBsaW5nRlBTKCk7XG4gICAgICB0aGlzLl9pc0hpZGVMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLl9sb2FkaW5nQmdCYXIucHJvZ3Jlc3MgPj0gMSkge1xuICAgICAgICB0aGlzLnN0b3BNYWluTG9hZGluZ0xvb3AoKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuX2xvYWRpbmdCZ0Jhcik7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuX2xvYWRpbmdCZ0JhcikudG8oMC4xLCB7XG4gICAgICAgICAgcHJvZ3Jlc3M6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbiAodCwgbywgbiwgaSkge1xuICAgICAgICAgICAgdmFyIHIgPSB0ICsgKG8gLSB0KSAqIGk7XG4gICAgICAgICAgICBjYy5pc1ZhbGlkKGUuX3Byb2dyZXNzTGFiKSAmJiAoZS5fcHJvZ3Jlc3NMYWIuc3RyaW5nID0gTWF0aC5jZWlsKDEwMCAqIHIpICsgXCIlXCIpO1xuICAgICAgICAgICAgY2MuaXNWYWxpZChlLl9wcm9ncmVzc01hcmtlcnMpICYmIChlLl9wcm9ncmVzc01hcmtlcnMueCA9IGUucHJvZ3Jlc3NNYXJrZXJzWCArIHIgKiBlLl9sb2FkaW5nQmdCYXIudG90YWxMZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5kZWxheSh0aGlzLmRlbGF5RW50ZXJUaW1lKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlLnN0b3BNYWluTG9hZGluZ0xvb3AoKTtcbiAgICAgICAgICBlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHVwZGF0ZUxvYWRpbmdPdGhlckFuaSgpIHtcbiAgICB0aGlzLnVwZGF0ZUxvYWRpbmdJbWdCYXJBbmkoKTtcbiAgICB0aGlzLnN0YXJ0TWFpbkxvYWRpbmdMb29wKCk7XG4gIH1cbiAgdXBkYXRlTG9hZGluZ0ltZ0JhckFuaSgpIHtcbiAgICB2YXIgZSA9IHRoaXMuX2xvYWRpbmdJbWdCYXI7XG4gICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgIGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGUub3BhY2l0eSA9IDA7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoZSk7XG4gICAgICBjYy50d2VlbihlKS50bygwLjE2LCB7XG4gICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJMb2FkaW5nVmlld191cGRQcm9BbmlcIilcbiAgdXBkYXRlUHJvZ3Jlc3NBbmkoZSkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIG8gPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAwLjgpKSxcbiAgICAgIG4gPSB0aGlzLl9sb2FkaW5nQmdCYXIucHJvZ3Jlc3M7XG4gICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuX2xvYWRpbmdCZ0Jhcik7XG4gICAgdmFyIGkgPSBNYXRoLm1pbihlLm1heFRpbWUsIE1hdGgubWF4KGUubWluVGltZSwgMC4zICogTWF0aC5hYnMobyAtIG4pICsgMC4wNSkpO1xuICAgIGNjLnR3ZWVuKHRoaXMuX2xvYWRpbmdCZ0JhcikudG8oaSwge1xuICAgICAgcHJvZ3Jlc3M6IG9cbiAgICB9LCB7XG4gICAgICBwcm9ncmVzczogZnVuY3Rpb24gKG8sIG4sIGksIHIpIHtcbiAgICAgICAgdmFyIGEgPSBvICsgKG4gLSBvKSAqIHI7XG4gICAgICAgIGNjLmlzVmFsaWQodC5fcHJvZ3Jlc3NMYWIpICYmICh0Ll9wcm9ncmVzc0xhYi5zdHJpbmcgPSBNYXRoLmNlaWwoMTAwICogYSkgKyBcIiVcIik7XG4gICAgICAgIGNjLmlzVmFsaWQodC5fcHJvZ3Jlc3NNYXJrZXJzKSAmJiAodC5fcHJvZ3Jlc3NNYXJrZXJzLnggPSB0LnByb2dyZXNzTWFya2Vyc1ggKyBhICogdC5fbG9hZGluZ0JnQmFyLnRvdGFsTGVuZ3RoKTtcbiAgICAgICAgYSA+PSAxICYmIGUuY2IgJiYgZS5jYigpO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH1cbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIHN0YXJ0TWFpbkxvYWRpbmdMb29wKGUgPSBcImxvZ29faW5pdFwiLCB0ID0gZmFsc2UsIG8gPSA1KSB7XG4gICAgdmFyIG4gPSB0aGlzLl9tYWluTG9hZGluZztcbiAgICBpZiAoY2MuaXNWYWxpZChuKSkge1xuICAgICAgdGhpcy5zdG9wTWFpbkxvYWRpbmdMb29wKCk7XG4gICAgICB2YXIgaSA9IGZ1bmN0aW9uIGkoKSB7XG4gICAgICAgIGNjLmlzVmFsaWQobikgJiYgcGxheVNwaW5lQW5pbShuLCB0ID8gLTEgOiAxLCBlKTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9tYWluTG9hZGluZ1NjaGVkdWxlciA9IGk7XG4gICAgICBpKCk7XG4gICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuX21haW5Mb2FkaW5nU2NoZWR1bGVyLCBNYXRoLm1heCgwLjAxNiwgbykpO1xuICAgIH1cbiAgfVxuICBzdG9wTWFpbkxvYWRpbmdMb29wKCkge1xuICAgIGlmICh0aGlzLl9tYWluTG9hZGluZ1NjaGVkdWxlcikge1xuICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuX21haW5Mb2FkaW5nU2NoZWR1bGVyKTtcbiAgICAgIHRoaXMuX21haW5Mb2FkaW5nU2NoZWR1bGVyID0gbnVsbDtcbiAgICB9XG4gIH1cbn0iXX0=