
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_skipStepRam/Scripts/SkipStepRamTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4d320oAD9A3qfjwyoUs9nm', 'SkipStepRamTrait');
// subpackages/l_skipStepRam/Scripts/SkipStepRamTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var SkipStepRamTrait = /** @class */ (function (_super) {
    __extends(SkipStepRamTrait, _super);
    function SkipStepRamTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SkipStepRamTrait.prototype, "ramLimit", {
        get: function () {
            var t, r;
            return null !== (r = null === (t = this.traitData) || void 0 === t ? void 0 : t.ramLimit) && void 0 !== r ? r : 4096;
        },
        enumerable: false,
        configurable: true
    });
    SkipStepRamTrait.prototype.onGameTracker_recordStep = function (t, r) {
        var e = LoginModel_1.default.getInstance().deviceInfo.all_memory;
        if (void 0 !== e && e >= this.ramLimit) {
            r();
        }
        else {
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    SkipStepRamTrait.traitKey = "SkipStepRam";
    SkipStepRamTrait = __decorate([
        mj.trait,
        mj.class("SkipStepRamTrait")
    ], SkipStepRamTrait);
    return SkipStepRamTrait;
}(Trait_1.default));
exports.default = SkipStepRamTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NraXBTdGVwUmFtL1NjcmlwdHMvU2tpcFN0ZXBSYW1UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RiwrRUFBMEU7QUFHMUU7SUFBOEMsb0NBQUs7SUFBbkQ7O0lBaUJBLENBQUM7SUFmQyxzQkFBSSxzQ0FBUTthQUFaO1lBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN2SCxDQUFDOzs7T0FBQTtJQUNELG1EQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxvQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDdkQsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdEMsQ0FBQyxFQUFFLENBQUM7U0FDTDthQUFNO1lBQ0wsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2FBQzNDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQWZNLHlCQUFRLEdBQUcsYUFBYSxDQUFDO0lBRGIsZ0JBQWdCO1FBRnBDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztPQUNSLGdCQUFnQixDQWlCcEM7SUFBRCx1QkFBQztDQWpCRCxBQWlCQyxDQWpCNkMsZUFBSyxHQWlCbEQ7a0JBakJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IExvZ2luTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9sb2dpbi9tb2RlbC9Mb2dpbk1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiU2tpcFN0ZXBSYW1UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tpcFN0ZXBSYW1UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTa2lwU3RlcFJhbVwiO1xuICBnZXQgcmFtTGltaXQoKSB7XG4gICAgdmFyIHQsIHI7XG4gICAgcmV0dXJuIG51bGwgIT09IChyID0gbnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5yYW1MaW1pdCkgJiYgdm9pZCAwICE9PSByID8gciA6IDQwOTY7XG4gIH1cbiAgb25HYW1lVHJhY2tlcl9yZWNvcmRTdGVwKHQsIHIpIHtcbiAgICB2YXIgZSA9IExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKS5kZXZpY2VJbmZvLmFsbF9tZW1vcnk7XG4gICAgaWYgKHZvaWQgMCAhPT0gZSAmJiBlID49IHRoaXMucmFtTGltaXQpIHtcbiAgICAgIHIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcih7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfVxuICB9XG59Il19