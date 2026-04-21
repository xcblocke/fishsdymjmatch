
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_firstRoundNoInterAd/Scripts/FirstRoundNoInterAdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a585fuXFIlKkL0KJMaKOORj', 'FirstRoundNoInterAdTrait');
// subpackages/l_firstRoundNoInterAd/Scripts/FirstRoundNoInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FirstRoundNoInterAdTrait = /** @class */ (function (_super) {
    __extends(FirstRoundNoInterAdTrait, _super);
    function FirstRoundNoInterAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isFirstRoundAfterColdStart = false;
        return _this;
    }
    FirstRoundNoInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (UserModel_1.default.getInstance().isFirstOpen) {
            this._isFirstRoundAfterColdStart = false;
        }
        else {
            this._isFirstRoundAfterColdStart = true;
        }
    };
    FirstRoundNoInterAdTrait.prototype.onAdMgr_chkInterAd = function (t, r) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic && this._isFirstRoundAfterColdStart) {
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
    FirstRoundNoInterAdTrait.prototype.onUserModel_updateGameId = function (t, r) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this._isFirstRoundAfterColdStart && (this._isFirstRoundAfterColdStart = false);
            r();
        }
        else
            r();
    };
    FirstRoundNoInterAdTrait.traitKey = "FirstRoundNoInterAd";
    FirstRoundNoInterAdTrait = __decorate([
        mj.trait,
        mj.class("FirstRoundNoInterAdTrait")
    ], FirstRoundNoInterAdTrait);
    return FirstRoundNoInterAdTrait;
}(Trait_1.default));
exports.default = FirstRoundNoInterAdTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZpcnN0Um91bmROb0ludGVyQWQvU2NyaXB0cy9GaXJzdFJvdW5kTm9JbnRlckFkVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRixnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUdqRTtJQUFzRCw0Q0FBSztJQUEzRDtRQUFBLHFFQTRCQztRQTNCQyxpQ0FBMkIsR0FBRyxLQUFLLENBQUM7O0lBMkJ0QyxDQUFDO0lBekJDLHlDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLEVBQUU7WUFDdkMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztTQUMxQzthQUFNO1lBQ0wsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQztTQUN6QztJQUNILENBQUM7SUFDRCxxREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQzNHLENBQUMsQ0FBQztnQkFDQSxTQUFTLEVBQUUsS0FBSztnQkFDaEIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07YUFDM0MsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsMkRBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3ZFLElBQUksQ0FBQywyQkFBMkIsSUFBSSxDQUFDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUMvRSxDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXpCTSxpQ0FBUSxHQUFHLHFCQUFxQixDQUFDO0lBRnJCLHdCQUF3QjtRQUY1QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBNEI1QztJQUFELCtCQUFDO0NBNUJELEFBNEJDLENBNUJxRCxlQUFLLEdBNEIxRDtrQkE1Qm9CLHdCQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkZpcnN0Um91bmROb0ludGVyQWRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyc3RSb3VuZE5vSW50ZXJBZFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfaXNGaXJzdFJvdW5kQWZ0ZXJDb2xkU3RhcnQgPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGaXJzdFJvdW5kTm9JbnRlckFkXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNGaXJzdE9wZW4pIHtcbiAgICAgIHRoaXMuX2lzRmlyc3RSb3VuZEFmdGVyQ29sZFN0YXJ0ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2lzRmlyc3RSb3VuZEFmdGVyQ29sZFN0YXJ0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgb25BZE1ncl9jaGtJbnRlckFkKHQsIHIpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYyAmJiB0aGlzLl9pc0ZpcnN0Um91bmRBZnRlckNvbGRTdGFydCkge1xuICAgICAgcih7XG4gICAgICAgIHJldHVyblZhbDogZmFsc2UsXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIoKTtcbiAgICB9XG4gIH1cbiAgb25Vc2VyTW9kZWxfdXBkYXRlR2FtZUlkKHQsIHIpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgdGhpcy5faXNGaXJzdFJvdW5kQWZ0ZXJDb2xkU3RhcnQgJiYgKHRoaXMuX2lzRmlyc3RSb3VuZEFmdGVyQ29sZFN0YXJ0ID0gZmFsc2UpO1xuICAgICAgcigpO1xuICAgIH0gZWxzZSByKCk7XG4gIH1cbn0iXX0=