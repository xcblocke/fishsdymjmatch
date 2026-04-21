
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_fixBgmMuteOnBackToHall/Scripts/FixBgmMuteOnBackToHallTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '62999LEby5GA6JxrRsuuf+V', 'FixBgmMuteOnBackToHallTrait');
// subpackages/l_fixBgmMuteOnBackToHall/Scripts/FixBgmMuteOnBackToHallTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FixBgmMuteOnBackToHallTrait = /** @class */ (function (_super) {
    __extends(FixBgmMuteOnBackToHallTrait, _super);
    function FixBgmMuteOnBackToHallTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixBgmMuteOnBackToHallTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FixBgmMuteOnBackToHallTrait.prototype.onStopAudio_clearCallbacks = function (t, e) {
        false === UserModel_1.default.getInstance().isMusicEnabled() && mj.audioManager.setBGMMuted(true);
        e();
    };
    FixBgmMuteOnBackToHallTrait.traitKey = "FixBgmMuteOnBackToHall";
    FixBgmMuteOnBackToHallTrait = __decorate([
        mj.trait,
        mj.class("FixBgmMuteOnBackToHallTrait")
    ], FixBgmMuteOnBackToHallTrait);
    return FixBgmMuteOnBackToHallTrait;
}(Trait_1.default));
exports.default = FixBgmMuteOnBackToHallTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZpeEJnbU11dGVPbkJhY2tUb0hhbGwvU2NyaXB0cy9GaXhCZ21NdXRlT25CYWNrVG9IYWxsVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFHakU7SUFBeUQsK0NBQUs7SUFBOUQ7O0lBU0EsQ0FBQztJQVBDLDRDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxnRUFBMEIsR0FBMUIsVUFBMkIsQ0FBQyxFQUFFLENBQUM7UUFDN0IsS0FBSyxLQUFLLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEYsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBUE0sb0NBQVEsR0FBRyx3QkFBd0IsQ0FBQztJQUR4QiwyQkFBMkI7UUFGL0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDO09BQ25CLDJCQUEyQixDQVMvQztJQUFELGtDQUFDO0NBVEQsQUFTQyxDQVR3RCxlQUFLLEdBUzdEO2tCQVRvQiwyQkFBMkIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRml4QmdtTXV0ZU9uQmFja1RvSGFsbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXhCZ21NdXRlT25CYWNrVG9IYWxsVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRml4QmdtTXV0ZU9uQmFja1RvSGFsbFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25TdG9wQXVkaW9fY2xlYXJDYWxsYmFja3ModCwgZSkge1xuICAgIGZhbHNlID09PSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc011c2ljRW5hYmxlZCgpICYmIG1qLmF1ZGlvTWFuYWdlci5zZXRCR01NdXRlZCh0cnVlKTtcbiAgICBlKCk7XG4gIH1cbn0iXX0=