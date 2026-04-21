
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_interAdStartLevelNew/Scripts/InterAdStartLevelNewTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3dd462PbsFI6ZbSB6XLG4sp', 'InterAdStartLevelNewTrait');
// subpackages/l_interAdStartLevelNew/Scripts/InterAdStartLevelNewTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var InterAdStartLevelNewTrait = /** @class */ (function (_super) {
    __extends(InterAdStartLevelNewTrait, _super);
    function InterAdStartLevelNewTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isReadyToMainGame = false;
        return _this;
    }
    InterAdStartLevelNewTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    InterAdStartLevelNewTrait.prototype.onHallNmlBtn_onBtnClk = function (e, t) {
        UserModel_1.default.getInstance().getCurrentGameType(), GameTypeEnums_1.MjGameType.Classic, t();
    };
    InterAdStartLevelNewTrait.prototype.onAdMgr_chkInterAd = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var r = mj.getClassByName("InterAdStartLevelTrait");
            if (r && r.getInstance()) {
                var n = r.getInstance();
                if (true === n.eventEnabled) {
                    var a = n.getStartLevel();
                    if (true !== this.getHasNotPlayedFirstInter()) {
                        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Normal) {
                            if (UserModel_1.default.getInstance().getMainGameData().getLevelId() <= a) {
                                t({
                                    returnVal: false,
                                    isBreak: true,
                                    returnType: TraitManager_1.TraitCallbackReturnType.return
                                });
                                return;
                            }
                        }
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
        }
        else
            t();
    };
    InterAdStartLevelNewTrait.prototype.getHasNotPlayedFirstInter = function () {
        var e = mj.getClassByName("FirstInterstitialTimingTrait");
        return !(!e || !e.getInstance() || true !== e.getInstance().eventEnabled || false !== e.getInstance().getHasPlayedFirstInter());
    };
    InterAdStartLevelNewTrait.traitKey = "InterAdStartLevelNew";
    InterAdStartLevelNewTrait = __decorate([
        mj.trait,
        mj.class("InterAdStartLevelNewTrait")
    ], InterAdStartLevelNewTrait);
    return InterAdStartLevelNewTrait;
}(Trait_1.default));
exports.default = InterAdStartLevelNewTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ludGVyQWRTdGFydExldmVsTmV3L1NjcmlwdHMvSW50ZXJBZFN0YXJ0TGV2ZWxOZXdUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RixzRUFBaUU7QUFDakUsd0ZBQW9GO0FBR3BGO0lBQXVELDZDQUFLO0lBQTVEO1FBQUEscUVBcUNDO1FBcENDLHdCQUFrQixHQUFHLEtBQUssQ0FBQzs7SUFvQzdCLENBQUM7SUFsQ0MsMENBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHlEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsMEJBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDeEUsQ0FBQztJQUNELHNEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLE9BQU8sRUFBRTtZQUN2RSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxZQUFZLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDMUIsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLHlCQUF5QixFQUFFLEVBQUU7d0JBQzdDLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsTUFBTSxFQUFFOzRCQUN0RSxJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFO2dDQUMvRCxDQUFDLENBQUM7b0NBQ0EsU0FBUyxFQUFFLEtBQUs7b0NBQ2hCLE9BQU8sRUFBRSxJQUFJO29DQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2lDQUMzQyxDQUFDLENBQUM7Z0NBQ0gsT0FBTzs2QkFDUjt5QkFDRjt3QkFDRCxDQUFDLEVBQUUsQ0FBQztxQkFDTDs7d0JBQU0sQ0FBQyxFQUFFLENBQUM7aUJBQ1o7O29CQUFNLENBQUMsRUFBRSxDQUFDO2FBQ1o7O2dCQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsNkRBQXlCLEdBQXpCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO0lBQ2xJLENBQUM7SUFsQ00sa0NBQVEsR0FBRyxzQkFBc0IsQ0FBQztJQUZ0Qix5QkFBeUI7UUFGN0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDO09BQ2pCLHlCQUF5QixDQXFDN0M7SUFBRCxnQ0FBQztDQXJDRCxBQXFDQyxDQXJDc0QsZUFBSyxHQXFDM0Q7a0JBckNvQix5QkFBeUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJJbnRlckFkU3RhcnRMZXZlbE5ld1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlckFkU3RhcnRMZXZlbE5ld1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfaXNSZWFkeVRvTWFpbkdhbWUgPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJJbnRlckFkU3RhcnRMZXZlbE5ld1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25IYWxsTm1sQnRuX29uQnRuQ2xrKGUsIHQpIHtcbiAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSwgTWpHYW1lVHlwZS5DbGFzc2ljLCB0KCk7XG4gIH1cbiAgb25BZE1ncl9jaGtJbnRlckFkKGUsIHQpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgdmFyIHIgPSBtai5nZXRDbGFzc0J5TmFtZShcIkludGVyQWRTdGFydExldmVsVHJhaXRcIik7XG4gICAgICBpZiAociAmJiByLmdldEluc3RhbmNlKCkpIHtcbiAgICAgICAgdmFyIG4gPSByLmdldEluc3RhbmNlKCk7XG4gICAgICAgIGlmICh0cnVlID09PSBuLmV2ZW50RW5hYmxlZCkge1xuICAgICAgICAgIHZhciBhID0gbi5nZXRTdGFydExldmVsKCk7XG4gICAgICAgICAgaWYgKHRydWUgIT09IHRoaXMuZ2V0SGFzTm90UGxheWVkRmlyc3RJbnRlcigpKSB7XG4gICAgICAgICAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICAgICAgICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZURhdGEoKS5nZXRMZXZlbElkKCkgPD0gYSkge1xuICAgICAgICAgICAgICAgIHQoe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHQoKTtcbiAgICAgICAgICB9IGVsc2UgdCgpO1xuICAgICAgICB9IGVsc2UgdCgpO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIGdldEhhc05vdFBsYXllZEZpcnN0SW50ZXIoKSB7XG4gICAgdmFyIGUgPSBtai5nZXRDbGFzc0J5TmFtZShcIkZpcnN0SW50ZXJzdGl0aWFsVGltaW5nVHJhaXRcIik7XG4gICAgcmV0dXJuICEoIWUgfHwgIWUuZ2V0SW5zdGFuY2UoKSB8fCB0cnVlICE9PSBlLmdldEluc3RhbmNlKCkuZXZlbnRFbmFibGVkIHx8IGZhbHNlICE9PSBlLmdldEluc3RhbmNlKCkuZ2V0SGFzUGxheWVkRmlyc3RJbnRlcigpKTtcbiAgfVxufSJdfQ==