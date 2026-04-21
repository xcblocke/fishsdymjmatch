
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_homeBgmSplit/Scripts/HomeBgmSplitTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90877xv41pLYroIeZhlWaOJ', 'HomeBgmSplitTrait');
// subpackages/l_homeBgmSplit/Scripts/HomeBgmSplitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var HomeBgmSplitTrait = /** @class */ (function (_super) {
    __extends(HomeBgmSplitTrait, _super);
    function HomeBgmSplitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeBgmSplitTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    HomeBgmSplitTrait.prototype.firstInit = function () {
        if (!this.localData.isInit) {
            var t = UserModel_1.default.getInstance().isMusicEnabled();
            this.localData.homeMusicEnabled = false !== t;
            this.localData.gameMusicEnabled = false !== t;
            this.localData.isInit = true;
        }
    };
    HomeBgmSplitTrait.prototype.onHallCtl_viewDidShow = function (t, e) {
        this.firstInit();
        this.applyMusicState(this.localData.homeMusicEnabled);
        e();
    };
    HomeBgmSplitTrait.prototype.onMainGameCtrl_vwShow = function (t, e) {
        this.firstInit();
        this.applyMusicState(this.localData.gameMusicEnabled);
        e();
    };
    HomeBgmSplitTrait.prototype.applyMusicState = function (t) {
        UserModel_1.default.getInstance().setMusicEnabled(t);
        mj.audioManager.setBGMMuted(!t);
        if (t) {
            mj.audioManager.playBGM(GameTypeEnums_1.EAudioID.Bgm, true);
        }
        else {
            mj.audioManager.stopBGM();
        }
    };
    HomeBgmSplitTrait.prototype.onUISetHome_onMusicClick = function (t, e) {
        var a = UserModel_1.default.getInstance().isMusicEnabled();
        this.localData.homeMusicEnabled = a;
        this.localData.homeMusicEnabled = this.localData.homeMusicEnabled;
        e();
    };
    HomeBgmSplitTrait.prototype.onUISetDlg_onMusicClick = function (t, e) {
        var a = UserModel_1.default.getInstance().isMusicEnabled();
        this.localData.gameMusicEnabled = a;
        this.localData.gameMusicEnabled = this.localData.gameMusicEnabled;
        e();
    };
    HomeBgmSplitTrait.prototype.isHomeMusicEnabled = function () {
        return this.localData.homeMusicEnabled;
    };
    HomeBgmSplitTrait.prototype.isGameMusicEnabled = function () {
        return this.localData.gameMusicEnabled;
    };
    HomeBgmSplitTrait.traitKey = "HomeBgmSplit";
    HomeBgmSplitTrait = __decorate([
        mj.trait,
        mj.class("HomeBgmSplitTrait")
    ], HomeBgmSplitTrait);
    return HomeBgmSplitTrait;
}(Trait_1.default));
exports.default = HomeBgmSplitTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hvbWVCZ21TcGxpdC9TY3JpcHRzL0hvbWVCZ21TcGxpdFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBa0Y7QUFDbEYsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUdqRTtJQUErQyxxQ0FBSztJQUFwRDs7SUFrREEsQ0FBQztJQWhEQyxrQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QscUNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHLEtBQUssS0FBSyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUNELGlEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdEQsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsaURBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN0RCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCwyQ0FBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxFQUFFO1lBQ0wsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsd0JBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBQ0Qsb0RBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1FBQ2xFLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELG1EQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNsRSxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCw4Q0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7SUFDekMsQ0FBQztJQUNELDhDQUFrQixHQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN6QyxDQUFDO0lBaERNLDBCQUFRLEdBQUcsY0FBYyxDQUFDO0lBRGQsaUJBQWlCO1FBRnJDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztPQUNULGlCQUFpQixDQWtEckM7SUFBRCx3QkFBQztDQWxERCxBQWtEQyxDQWxEOEMsZUFBSyxHQWtEbkQ7a0JBbERvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiSG9tZUJnbVNwbGl0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVCZ21TcGxpdFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkhvbWVCZ21TcGxpdFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgZmlyc3RJbml0KCkge1xuICAgIGlmICghdGhpcy5sb2NhbERhdGEuaXNJbml0KSB7XG4gICAgICB2YXIgdCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzTXVzaWNFbmFibGVkKCk7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5ob21lTXVzaWNFbmFibGVkID0gZmFsc2UgIT09IHQ7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5nYW1lTXVzaWNFbmFibGVkID0gZmFsc2UgIT09IHQ7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5pc0luaXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBvbkhhbGxDdGxfdmlld0RpZFNob3codCwgZSkge1xuICAgIHRoaXMuZmlyc3RJbml0KCk7XG4gICAgdGhpcy5hcHBseU11c2ljU3RhdGUodGhpcy5sb2NhbERhdGEuaG9tZU11c2ljRW5hYmxlZCk7XG4gICAgZSgpO1xuICB9XG4gIG9uTWFpbkdhbWVDdHJsX3Z3U2hvdyh0LCBlKSB7XG4gICAgdGhpcy5maXJzdEluaXQoKTtcbiAgICB0aGlzLmFwcGx5TXVzaWNTdGF0ZSh0aGlzLmxvY2FsRGF0YS5nYW1lTXVzaWNFbmFibGVkKTtcbiAgICBlKCk7XG4gIH1cbiAgYXBwbHlNdXNpY1N0YXRlKHQpIHtcbiAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRNdXNpY0VuYWJsZWQodCk7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnNldEJHTU11dGVkKCF0KTtcbiAgICBpZiAodCkge1xuICAgICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlCR00oRUF1ZGlvSUQuQmdtLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWouYXVkaW9NYW5hZ2VyLnN0b3BCR00oKTtcbiAgICB9XG4gIH1cbiAgb25VSVNldEhvbWVfb25NdXNpY0NsaWNrKHQsIGUpIHtcbiAgICB2YXIgYSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzTXVzaWNFbmFibGVkKCk7XG4gICAgdGhpcy5sb2NhbERhdGEuaG9tZU11c2ljRW5hYmxlZCA9IGE7XG4gICAgdGhpcy5sb2NhbERhdGEuaG9tZU11c2ljRW5hYmxlZCA9IHRoaXMubG9jYWxEYXRhLmhvbWVNdXNpY0VuYWJsZWQ7XG4gICAgZSgpO1xuICB9XG4gIG9uVUlTZXREbGdfb25NdXNpY0NsaWNrKHQsIGUpIHtcbiAgICB2YXIgYSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzTXVzaWNFbmFibGVkKCk7XG4gICAgdGhpcy5sb2NhbERhdGEuZ2FtZU11c2ljRW5hYmxlZCA9IGE7XG4gICAgdGhpcy5sb2NhbERhdGEuZ2FtZU11c2ljRW5hYmxlZCA9IHRoaXMubG9jYWxEYXRhLmdhbWVNdXNpY0VuYWJsZWQ7XG4gICAgZSgpO1xuICB9XG4gIGlzSG9tZU11c2ljRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuaG9tZU11c2ljRW5hYmxlZDtcbiAgfVxuICBpc0dhbWVNdXNpY0VuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmdhbWVNdXNpY0VuYWJsZWQ7XG4gIH1cbn0iXX0=