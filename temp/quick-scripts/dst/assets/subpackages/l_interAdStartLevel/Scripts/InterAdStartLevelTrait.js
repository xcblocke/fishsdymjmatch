
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_interAdStartLevel/Scripts/InterAdStartLevelTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '48e066tg6VGtLNtodaIIdKs', 'InterAdStartLevelTrait');
// subpackages/l_interAdStartLevel/Scripts/InterAdStartLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var InterAdStartLevelTrait = /** @class */ (function (_super) {
    __extends(InterAdStartLevelTrait, _super);
    function InterAdStartLevelTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 9;
        return _this;
    }
    InterAdStartLevelTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._startLevel = this._traitData.startLevel;
        void 0 !== this.traitData.secondOpenLevel && (this.localData.isFirstPlay ? this._startLevel = this.traitData.secondOpenLevel : this.localData.isFirstPlay = true);
    };
    InterAdStartLevelTrait.prototype.getStartLevel = function () {
        return this._startLevel;
    };
    InterAdStartLevelTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.isSkip())
                e();
            else {
                var r = UserModel_1.default.getInstance().getMainGameData().getLevelId(), a = this.getStartLevel();
                if (true !== this.getHasNotPlayedFirstInter() && r <= a) {
                    e({
                        returnVal: false,
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                }
                else {
                    e();
                }
            }
        }
        else
            e();
    };
    InterAdStartLevelTrait.prototype.getHasNotPlayedFirstInter = function () {
        var t = mj.getClassByName("FirstInterstitialTimingTrait");
        return !(!t || !t.getInstance() || true !== t.getInstance().eventEnabled || false !== t.getInstance().getHasPlayedFirstInter());
    };
    InterAdStartLevelTrait.prototype.isSkip = function () {
        return false;
    };
    InterAdStartLevelTrait.traitKey = "InterAdStartLevel";
    __decorate([
        mj.traitEvent("InterAdStart_getStartLv")
    ], InterAdStartLevelTrait.prototype, "getStartLevel", null);
    __decorate([
        mj.traitEvent("InterAdStart_isSkip")
    ], InterAdStartLevelTrait.prototype, "isSkip", null);
    InterAdStartLevelTrait = __decorate([
        mj.trait,
        mj.class("InterAdStartLevelTrait")
    ], InterAdStartLevelTrait);
    return InterAdStartLevelTrait;
}(Trait_1.default));
exports.default = InterAdStartLevelTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ludGVyQWRTdGFydExldmVsL1NjcmlwdHMvSW50ZXJBZFN0YXJ0TGV2ZWxUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RixzRUFBaUU7QUFDakUsd0ZBQW9GO0FBR3BGO0lBQW9ELDBDQUFLO0lBQXpEO1FBQUEscUVBcUNDO1FBcENDLGlCQUFXLEdBQUcsQ0FBQyxDQUFDOztJQW9DbEIsQ0FBQztJQWxDQyx1Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQzlDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3BLLENBQUM7SUFFRCw4Q0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxtREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdkUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUFFLENBQUMsRUFBRSxDQUFDO2lCQUFLO2dCQUMxQixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUM1RCxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMzQixJQUFJLElBQUksS0FBSyxJQUFJLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN2RCxDQUFDLENBQUM7d0JBQ0EsU0FBUyxFQUFFLEtBQUs7d0JBQ2hCLE9BQU8sRUFBRSxJQUFJO3dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO3FCQUMzQyxDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsQ0FBQyxFQUFFLENBQUM7aUJBQ0w7YUFDRjtTQUNGOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELDBEQUF5QixHQUF6QjtRQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUMxRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQztJQUNsSSxDQUFDO0lBRUQsdUNBQU0sR0FBTjtRQUNFLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQWxDTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBT3RDO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQzsrREFHeEM7SUF1QkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO3dEQUdwQztJQXBDa0Isc0JBQXNCO1FBRjFDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztPQUNkLHNCQUFzQixDQXFDMUM7SUFBRCw2QkFBQztDQXJDRCxBQXFDQyxDQXJDbUQsZUFBSyxHQXFDeEQ7a0JBckNvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJJbnRlckFkU3RhcnRMZXZlbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlckFkU3RhcnRMZXZlbFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfc3RhcnRMZXZlbCA9IDk7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiSW50ZXJBZFN0YXJ0TGV2ZWxcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3N0YXJ0TGV2ZWwgPSB0aGlzLl90cmFpdERhdGEuc3RhcnRMZXZlbDtcbiAgICB2b2lkIDAgIT09IHRoaXMudHJhaXREYXRhLnNlY29uZE9wZW5MZXZlbCAmJiAodGhpcy5sb2NhbERhdGEuaXNGaXJzdFBsYXkgPyB0aGlzLl9zdGFydExldmVsID0gdGhpcy50cmFpdERhdGEuc2Vjb25kT3BlbkxldmVsIDogdGhpcy5sb2NhbERhdGEuaXNGaXJzdFBsYXkgPSB0cnVlKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkludGVyQWRTdGFydF9nZXRTdGFydEx2XCIpXG4gIGdldFN0YXJ0TGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0TGV2ZWw7XG4gIH1cbiAgb25BZE1ncl9jaGtJbnRlckFkKHQsIGUpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgaWYgKHRoaXMuaXNTa2lwKCkpIGUoKTtlbHNlIHtcbiAgICAgICAgdmFyIHIgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZURhdGEoKS5nZXRMZXZlbElkKCksXG4gICAgICAgICAgYSA9IHRoaXMuZ2V0U3RhcnRMZXZlbCgpO1xuICAgICAgICBpZiAodHJ1ZSAhPT0gdGhpcy5nZXRIYXNOb3RQbGF5ZWRGaXJzdEludGVyKCkgJiYgciA8PSBhKSB7XG4gICAgICAgICAgZSh7XG4gICAgICAgICAgICByZXR1cm5WYWw6IGZhbHNlLFxuICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgZ2V0SGFzTm90UGxheWVkRmlyc3RJbnRlcigpIHtcbiAgICB2YXIgdCA9IG1qLmdldENsYXNzQnlOYW1lKFwiRmlyc3RJbnRlcnN0aXRpYWxUaW1pbmdUcmFpdFwiKTtcbiAgICByZXR1cm4gISghdCB8fCAhdC5nZXRJbnN0YW5jZSgpIHx8IHRydWUgIT09IHQuZ2V0SW5zdGFuY2UoKS5ldmVudEVuYWJsZWQgfHwgZmFsc2UgIT09IHQuZ2V0SW5zdGFuY2UoKS5nZXRIYXNQbGF5ZWRGaXJzdEludGVyKCkpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSW50ZXJBZFN0YXJ0X2lzU2tpcFwiKVxuICBpc1NraXAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59Il19