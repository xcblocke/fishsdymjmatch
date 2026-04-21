
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_bannerAd/Scripts/BannerAdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb106e/cPJASItJU0QNEDV4', 'BannerAdTrait');
// subpackages/l_bannerAd/Scripts/BannerAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var BannerAdTrait = /** @class */ (function (_super) {
    __extends(BannerAdTrait, _super);
    function BannerAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isInGamePlaying = false;
        _this._isNewVersion = false;
        _this._isInBoard = false;
        _this._hideBannerCount = 0;
        return _this;
    }
    BannerAdTrait.prototype.onLoad = function () {
        var t, n;
        _super.prototype.onLoad.call(this);
        this._isNewVersion = null !== (n = null === (t = this._traitData) || void 0 === t ? void 0 : t.isNewVersion) && void 0 !== n && n;
        this._isNewVersion;
    };
    BannerAdTrait.prototype.onMainGameCtrl_vwLoad = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion) {
                this._isInBoard = true;
                AdManager_1.default.getInstance().showBanner();
            }
            else {
                this.isInGamePlaying = true;
                AdManager_1.default.getInstance().showBanner();
            }
            t();
        }
        else
            t();
    };
    BannerAdTrait.prototype.onMainGameCtrl_uiDes = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion) {
                this._isInBoard = false;
                this._hideBannerCount > 0 && (this._hideBannerCount = 0);
            }
            else
                this.isInGamePlaying = false;
            AdManager_1.default.getInstance().hideBanner();
            t();
        }
        else
            t();
    };
    BannerAdTrait.prototype.onWinVw_showWinVw = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying = false;
                AdManager_1.default.getInstance().hideBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onWinVw_destroy = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying = true;
                AdManager_1.default.getInstance().showBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onFailVw_show = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying = false;
                AdManager_1.default.getInstance().hideBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onFailVw_destroy = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying = true;
                AdManager_1.default.getInstance().showBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onTLWinVw_showTLWinVw = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying = false;
                AdManager_1.default.getInstance().hideBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onTLWinVw_destroy = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying = true;
                AdManager_1.default.getInstance().showBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onDCWinVw_showWinVw = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying = false;
                AdManager_1.default.getInstance().hideBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onDailyView_onPlayClick = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying = true;
                AdManager_1.default.getInstance().showBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onRankBonusVw_show = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                AdManager_1.default.getInstance().hideBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onRankBonusVw_destroy = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                AdManager_1.default.getInstance().showBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onTaskView_initUI = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                AdManager_1.default.getInstance().hideBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onTaskView_onDestroy = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying && AdManager_1.default.getInstance().showBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onBannerAd_NeedHideBanner = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion) {
                if (this._isInBoard) {
                    this._hideBannerCount++;
                    AdManager_1.default.getInstance().hideBanner();
                    t();
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    BannerAdTrait.prototype.onBannerAd_NeedShowBanner = function (e, t) {
        var n = this;
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion) {
                if (this._isInBoard) {
                    this._hideBannerCount > 0 && this._hideBannerCount--;
                    0 === this._hideBannerCount && this._isInBoard && setTimeout(function () {
                        0 === n._hideBannerCount && n._isInBoard && AdManager_1.default.getInstance().showBanner();
                    }, 500);
                    t();
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    BannerAdTrait.traitKey = "BannerAd";
    BannerAdTrait = __decorate([
        mj.trait,
        mj.class("BannerAdTrait")
    ], BannerAdTrait);
    return BannerAdTrait;
}(Trait_1.default));
exports.default = BannerAdTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Jhbm5lckFkL1NjcmlwdHMvQmFubmVyQWRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUMzRCxnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBR2pFO0lBQTJDLGlDQUFLO0lBQWhEO1FBQUEscUVBbUtDO1FBbEtDLHFCQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLG1CQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLHNCQUFnQixHQUFHLENBQUMsQ0FBQzs7SUErSnZCLENBQUM7SUE3SkMsOEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsSSxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ3JCLENBQUM7SUFDRCw2Q0FBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdkUsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFV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cnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQWRNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9hZC9BZE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQmFubmVyQWRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFubmVyQWRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgaXNJbkdhbWVQbGF5aW5nID0gZmFsc2U7XG4gIF9pc05ld1ZlcnNpb24gPSBmYWxzZTtcbiAgX2lzSW5Cb2FyZCA9IGZhbHNlO1xuICBfaGlkZUJhbm5lckNvdW50ID0gMDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJCYW5uZXJBZFwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHQsIG47XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5faXNOZXdWZXJzaW9uID0gbnVsbCAhPT0gKG4gPSBudWxsID09PSAodCA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5pc05ld1ZlcnNpb24pICYmIHZvaWQgMCAhPT0gbiAmJiBuO1xuICAgIHRoaXMuX2lzTmV3VmVyc2lvbjtcbiAgfVxuICBvbk1haW5HYW1lQ3RybF92d0xvYWQoZSwgdCkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICBpZiAodGhpcy5faXNOZXdWZXJzaW9uKSB7XG4gICAgICAgIHRoaXMuX2lzSW5Cb2FyZCA9IHRydWU7XG4gICAgICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNob3dCYW5uZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNJbkdhbWVQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2hvd0Jhbm5lcigpO1xuICAgICAgfVxuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfdWlEZXMoZSwgdCkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICBpZiAodGhpcy5faXNOZXdWZXJzaW9uKSB7XG4gICAgICAgIHRoaXMuX2lzSW5Cb2FyZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9oaWRlQmFubmVyQ291bnQgPiAwICYmICh0aGlzLl9oaWRlQmFubmVyQ291bnQgPSAwKTtcbiAgICAgIH0gZWxzZSB0aGlzLmlzSW5HYW1lUGxheWluZyA9IGZhbHNlO1xuICAgICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuaGlkZUJhbm5lcigpO1xuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25XaW5Wd19zaG93V2luVncoZSwgdCkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICBpZiAodGhpcy5faXNOZXdWZXJzaW9uKSB0KCk7ZWxzZSB7XG4gICAgICAgIHRoaXMuaXNJbkdhbWVQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLmhpZGVCYW5uZXIoKTtcbiAgICAgICAgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25XaW5Wd19kZXN0cm95KGUsIHQpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgaWYgKHRoaXMuX2lzTmV3VmVyc2lvbikgdCgpO2Vsc2Uge1xuICAgICAgICB0aGlzLmlzSW5HYW1lUGxheWluZyA9IHRydWU7XG4gICAgICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNob3dCYW5uZXIoKTtcbiAgICAgICAgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25GYWlsVndfc2hvdyhlLCB0KSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIGlmICh0aGlzLl9pc05ld1ZlcnNpb24pIHQoKTtlbHNlIHtcbiAgICAgICAgdGhpcy5pc0luR2FtZVBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuaGlkZUJhbm5lcigpO1xuICAgICAgICB0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbkZhaWxWd19kZXN0cm95KGUsIHQpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgaWYgKHRoaXMuX2lzTmV3VmVyc2lvbikgdCgpO2Vsc2Uge1xuICAgICAgICB0aGlzLmlzSW5HYW1lUGxheWluZyA9IHRydWU7XG4gICAgICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNob3dCYW5uZXIoKTtcbiAgICAgICAgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25UTFdpblZ3X3Nob3dUTFdpblZ3KGUsIHQpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgaWYgKHRoaXMuX2lzTmV3VmVyc2lvbikgdCgpO2Vsc2Uge1xuICAgICAgICB0aGlzLmlzSW5HYW1lUGxheWluZyA9IGZhbHNlO1xuICAgICAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5oaWRlQmFubmVyKCk7XG4gICAgICAgIHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uVExXaW5Wd19kZXN0cm95KGUsIHQpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgaWYgKHRoaXMuX2lzTmV3VmVyc2lvbikgdCgpO2Vsc2Uge1xuICAgICAgICB0aGlzLmlzSW5HYW1lUGxheWluZyA9IHRydWU7XG4gICAgICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNob3dCYW5uZXIoKTtcbiAgICAgICAgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25EQ1dpblZ3X3Nob3dXaW5WdyhlLCB0KSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIGlmICh0aGlzLl9pc05ld1ZlcnNpb24pIHQoKTtlbHNlIHtcbiAgICAgICAgdGhpcy5pc0luR2FtZVBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuaGlkZUJhbm5lcigpO1xuICAgICAgICB0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbkRhaWx5Vmlld19vblBsYXlDbGljayhlLCB0KSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIGlmICh0aGlzLl9pc05ld1ZlcnNpb24pIHQoKTtlbHNlIHtcbiAgICAgICAgdGhpcy5pc0luR2FtZVBsYXlpbmcgPSB0cnVlO1xuICAgICAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zaG93QmFubmVyKCk7XG4gICAgICAgIHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uUmFua0JvbnVzVndfc2hvdyhlLCB0KSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIGlmICh0aGlzLl9pc05ld1ZlcnNpb24pIHQoKTtlbHNlIHtcbiAgICAgICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuaGlkZUJhbm5lcigpO1xuICAgICAgICB0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvblJhbmtCb251c1Z3X2Rlc3Ryb3koZSwgdCkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICBpZiAodGhpcy5faXNOZXdWZXJzaW9uKSB0KCk7ZWxzZSB7XG4gICAgICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNob3dCYW5uZXIoKTtcbiAgICAgICAgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25UYXNrVmlld19pbml0VUkoZSwgdCkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICBpZiAodGhpcy5faXNOZXdWZXJzaW9uKSB0KCk7ZWxzZSB7XG4gICAgICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLmhpZGVCYW5uZXIoKTtcbiAgICAgICAgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25UYXNrVmlld19vbkRlc3Ryb3koZSwgdCkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICBpZiAodGhpcy5faXNOZXdWZXJzaW9uKSB0KCk7ZWxzZSB7XG4gICAgICAgIHRoaXMuaXNJbkdhbWVQbGF5aW5nICYmIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNob3dCYW5uZXIoKTtcbiAgICAgICAgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25CYW5uZXJBZF9OZWVkSGlkZUJhbm5lcihlLCB0KSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIGlmICh0aGlzLl9pc05ld1ZlcnNpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzSW5Cb2FyZCkge1xuICAgICAgICAgIHRoaXMuX2hpZGVCYW5uZXJDb3VudCsrO1xuICAgICAgICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLmhpZGVCYW5uZXIoKTtcbiAgICAgICAgICB0KCk7XG4gICAgICAgIH0gZWxzZSB0KCk7XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25CYW5uZXJBZF9OZWVkU2hvd0Jhbm5lcihlLCB0KSB7XG4gICAgdmFyIG4gPSB0aGlzO1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICBpZiAodGhpcy5faXNOZXdWZXJzaW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0luQm9hcmQpIHtcbiAgICAgICAgICB0aGlzLl9oaWRlQmFubmVyQ291bnQgPiAwICYmIHRoaXMuX2hpZGVCYW5uZXJDb3VudC0tO1xuICAgICAgICAgIDAgPT09IHRoaXMuX2hpZGVCYW5uZXJDb3VudCAmJiB0aGlzLl9pc0luQm9hcmQgJiYgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAwID09PSBuLl9oaWRlQmFubmVyQ291bnQgJiYgbi5faXNJbkJvYXJkICYmIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNob3dCYW5uZXIoKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgIHQoKTtcbiAgICAgICAgfSBlbHNlIHQoKTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxufSJdfQ==