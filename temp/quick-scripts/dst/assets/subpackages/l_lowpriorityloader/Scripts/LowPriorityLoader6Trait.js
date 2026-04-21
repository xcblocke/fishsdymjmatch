
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader6Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49426H51gZPvIjnGXvTfF7N', 'LowPriorityLoader6Trait');
// subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader6Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var LowPriorityLoader6Trait = /** @class */ (function (_super) {
    __extends(LowPriorityLoader6Trait, _super);
    function LowPriorityLoader6Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowPriorityLoader6Trait.prototype.onLowBunLoader_onStart = function (t, r) {
        t.ins.setAllowNonCached(true);
        LowPriorityBundleLoader_1.default.getInstance().setPriorityLimit(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao, 10, 8);
        LowPriorityBundleLoader_1.default.getInstance().setPriorityLimit(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai, 10, 4);
        t.ins.changePriority(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
        t.ins.changePriority(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao);
        r();
    };
    LowPriorityLoader6Trait.prototype.onLowBunLoader_pNextTask = function (t, r) {
        LowPriorityBundleLoader_1.default.getInstance().getDownloadStats().totalDelayTime + LowPriorityBundleLoader_1.default.getInstance().getDownloadStats().totalDownloadTime > 12 && t.ins.stop();
        r();
    };
    LowPriorityLoader6Trait.traitKey = "LowPriorityLoader6";
    LowPriorityLoader6Trait = __decorate([
        mj.trait,
        mj.class("LowPriorityLoader6Trait")
    ], LowPriorityLoader6Trait);
    return LowPriorityLoader6Trait;
}(Trait_1.default));
exports.default = LowPriorityLoader6Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xvd3ByaW9yaXR5bG9hZGVyL1NjcmlwdHMvTG93UHJpb3JpdHlMb2FkZXI2VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxxR0FBZ0k7QUFHaEk7SUFBcUQsMkNBQUs7SUFBMUQ7O0lBY0EsQ0FBQztJQVpDLHdEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLGlDQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLG9EQUEwQixDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEcsaUNBQXVCLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsb0RBQTBCLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25ILENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLG9EQUEwQixDQUFDLGFBQWEsRUFBRSxvREFBMEIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3BILENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLG9EQUEwQixDQUFDLHdCQUF3QixFQUFFLG9EQUEwQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BILENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDBEQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixpQ0FBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGNBQWMsR0FBRyxpQ0FBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFLLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQVpNLGdDQUFRLEdBQUcsb0JBQW9CLENBQUM7SUFEcEIsdUJBQXVCO1FBRjNDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztPQUNmLHVCQUF1QixDQWMzQztJQUFELDhCQUFDO0NBZEQsQUFjQyxDQWRvRCxlQUFLLEdBY3pEO2tCQWRvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLCB7IEVMb3dQcmlvcml0eUJ1bmRsZVByaW9yaXR5IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0xvd1ByaW9yaXR5QnVuZGxlTG9hZGVyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTG93UHJpb3JpdHlMb2FkZXI2VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvd1ByaW9yaXR5TG9hZGVyNlRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkxvd1ByaW9yaXR5TG9hZGVyNlwiO1xuICBvbkxvd0J1bkxvYWRlcl9vblN0YXJ0KHQsIHIpIHtcbiAgICB0Lmlucy5zZXRBbGxvd05vbkNhY2hlZCh0cnVlKTtcbiAgICBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlci5nZXRJbnN0YW5jZSgpLnNldFByaW9yaXR5TGltaXQoRUxvd1ByaW9yaXR5QnVuZGxlUHJpb3JpdHkuRGVmYXVsdERhWGlhbywgMTAsIDgpO1xuICAgIExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuc2V0UHJpb3JpdHlMaW1pdChFTG93UHJpb3JpdHlCdW5kbGVQcmlvcml0eS5EZWZhdWx0Q2FyZFhpbmd5dW5IdWFQYWksIDEwLCA0KTtcbiAgICB0Lmlucy5jaGFuZ2VQcmlvcml0eShFTG93UHJpb3JpdHlCdW5kbGVQcmlvcml0eS5EZWZhdWx0RGFYaWFvLCBFTG93UHJpb3JpdHlCdW5kbGVQcmlvcml0eS5EZWZhdWx0Q2FyZFhpbmd5dW5IdWFQYWkpO1xuICAgIHQuaW5zLmNoYW5nZVByaW9yaXR5KEVMb3dQcmlvcml0eUJ1bmRsZVByaW9yaXR5LkRlZmF1bHRDYXJkWGluZ3l1bkh1YVBhaSwgRUxvd1ByaW9yaXR5QnVuZGxlUHJpb3JpdHkuRGVmYXVsdERhWGlhbyk7XG4gICAgcigpO1xuICB9XG4gIG9uTG93QnVuTG9hZGVyX3BOZXh0VGFzayh0LCByKSB7XG4gICAgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIuZ2V0SW5zdGFuY2UoKS5nZXREb3dubG9hZFN0YXRzKCkudG90YWxEZWxheVRpbWUgKyBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlci5nZXRJbnN0YW5jZSgpLmdldERvd25sb2FkU3RhdHMoKS50b3RhbERvd25sb2FkVGltZSA+IDEyICYmIHQuaW5zLnN0b3AoKTtcbiAgICByKCk7XG4gIH1cbn0iXX0=