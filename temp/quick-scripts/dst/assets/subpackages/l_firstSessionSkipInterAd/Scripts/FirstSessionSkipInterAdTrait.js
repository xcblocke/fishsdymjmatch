
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_firstSessionSkipInterAd/Scripts/FirstSessionSkipInterAdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f03eKZQqVBA4N2RddzTLgu', 'FirstSessionSkipInterAdTrait');
// subpackages/l_firstSessionSkipInterAd/Scripts/FirstSessionSkipInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FirstSessionSkipInterAdTrait = /** @class */ (function (_super) {
    __extends(FirstSessionSkipInterAdTrait, _super);
    function FirstSessionSkipInterAdTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirstSessionSkipInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FirstSessionSkipInterAdTrait.prototype.onAdMgr_chkInterAd = function (t, r) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic && UserModel_1.default.getInstance().isFirstOpen) {
            r({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            r();
        }
    };
    FirstSessionSkipInterAdTrait.traitKey = "FirstSessionSkipInterAd";
    FirstSessionSkipInterAdTrait = __decorate([
        mj.trait,
        mj.class("FirstSessionSkipInterAdTrait")
    ], FirstSessionSkipInterAdTrait);
    return FirstSessionSkipInterAdTrait;
}(Trait_1.default));
exports.default = FirstSessionSkipInterAdTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZpcnN0U2Vzc2lvblNraXBJbnRlckFkL1NjcmlwdHMvRmlyc3RTZXNzaW9uU2tpcEludGVyQWRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBR2pFO0lBQTBELGdEQUFLO0lBQS9EOztJQWdCQSxDQUFDO0lBZEMsNkNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHlEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLE9BQU8sSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsRUFBRTtZQUM5RyxDQUFDLENBQUM7Z0JBQ0EsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2FBQzNDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQWRNLHFDQUFRLEdBQUcseUJBQXlCLENBQUM7SUFEekIsNEJBQTRCO1FBRmhELEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQztPQUNwQiw0QkFBNEIsQ0FnQmhEO0lBQUQsbUNBQUM7Q0FoQkQsQUFnQkMsQ0FoQnlELGVBQUssR0FnQjlEO2tCQWhCb0IsNEJBQTRCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRmlyc3RTZXNzaW9uU2tpcEludGVyQWRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyc3RTZXNzaW9uU2tpcEludGVyQWRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGaXJzdFNlc3Npb25Ta2lwSW50ZXJBZFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25BZE1ncl9jaGtJbnRlckFkKHQsIHIpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYyAmJiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0ZpcnN0T3Blbikge1xuICAgICAgcih7XG4gICAgICAgIHJldHVyblZhbDogZmFsc2UsXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIoKTtcbiAgICB9XG4gIH1cbn0iXX0=